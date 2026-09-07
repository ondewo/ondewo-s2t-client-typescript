// Copyright 2021-2026 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

/**
 * Mock-based unit test for the S2T client example. Every side effect -- the environment, the Keycloak
 * login, the generated client constructor, the console and the process exit -- is injected, so the
 * example is exercised end to end with NO Keycloak, NO live S2T server and NO process termination. The
 * REAL generated protobuf messages build the request/response, so the example's request construction
 * and response handling are covered for real.
 *
 * @example
 * ```sh
 * npm test
 * ```
 *
 * @packageDocumentation
 */

import { test as runTestCase } from 'node:test';
import assert from 'node:assert/strict';

import type * as grpcWeb from 'grpc-web';

import {
	ListS2tPipelinesRequest,
	ListS2tPipelinesResponse,
	Speech2TextConfig
} from '../api/ondewo/s2t/speech-to-text_pb';
import type { OfflineTokenLoginOptions, OfflineTokenProvider } from '../auth/offlineTokenProvider';

import {
	DEFAULT_DEPENDENCIES,
	listPipelineIds,
	logRpcError,
	main,
	runAsScript,
	type S2tClientConstructor,
	type S2tPipelineLister,
	type TsClientDependencies
} from './ts-client';

/** The `Authorization` header value the fake token provider hands out. */
const AUTHORIZATION_HEADER: string = 'Bearer test-access-token';

/**
 * Stand-in for a grpc-web `RpcError`: a real `Error` carrying the numeric status `code` that
 * {@link logRpcError} branches on.
 */
class FakeRpcError extends Error {
	/** The gRPC status code the (fake) server responded with. */
	public readonly code: number;

	/**
	 * Construct a fake `RpcError`.
	 *
	 * @param code - The gRPC status code.
	 * @param message - The gRPC status details.
	 */
	public constructor(code: number, message: string) {
		super(message);
		this.name = 'FakeRpcError';
		this.code = code;
	}
}

/** A call captured by the fake client, decomposed for assertions. */
interface RecordedCall {
	/** The request the example handed to the client. */
	request: ListS2tPipelinesRequest;
	/** The gRPC metadata the example attached (the bearer `authorization` header). */
	metadata: grpcWeb.Metadata | undefined;
}

/**
 * Build a fake {@link S2tPipelineLister} that records every call and returns pipeline configs carrying the
 * given ids, assembled from the real generated protobuf message classes.
 *
 * @param pipelineIds - The ids the fake should echo back as pipeline configs.
 * @param calls - A sink the fake pushes each recorded call into (for later assertions).
 * @returns A fake client exposing only `listS2tPipelines`.
 */
function makeClientStub(pipelineIds: string[], calls: RecordedCall[]): S2tPipelineLister {
	return {
		listS2tPipelines: (
			request: ListS2tPipelinesRequest,
			metadata?: grpcWeb.Metadata
		): Promise<ListS2tPipelinesResponse> => {
			calls.push({ request, metadata });
			const response: ListS2tPipelinesResponse = new ListS2tPipelinesResponse();
			response.setPipelineConfigsList(
				pipelineIds.map((id: string): Speech2TextConfig => {
					const config: Speech2TextConfig = new Speech2TextConfig();
					config.setId(id);
					return config;
				})
			);
			return Promise.resolve(response);
		}
	};
}

/** Everything one run of the example did to its injected dependencies. */
interface RecordedRun {
	/** The dependencies handed to {@link main} / {@link runAsScript}. */
	dependencies: TsClientDependencies;
	/** Every line passed to `log`, in call order. */
	logLines: string[];
	/** Every `(message, error)` pair passed to `logError`, in call order. */
	errorLines: [string, unknown][];
	/** Every exit status code passed to `exit`, in call order. */
	exitCodes: number[];
	/** The login options the example logged in with, or `undefined` when it never logged in. */
	loginOptions: OfflineTokenLoginOptions | undefined;
	/** The gRPC-web endpoints the client constructor was called with, in call order. */
	endpoints: string[];
	/** The RPC calls the fake client recorded. */
	calls: RecordedCall[];
	/** How often the token provider's refresh loop was stopped. */
	stopCount: number;
}

/**
 * Wire up a complete set of fake dependencies around the given environment.
 *
 * @param env - The environment {@link main} should read its configuration from.
 * @param pipelineIds - The pipeline ids the fake S2T client should return.
 * @param rpcError - When given, the fake client rejects with this instead of returning a response.
 * @param loginError - When given, the fake login rejects with this instead of returning a provider.
 * @returns The recorded run, holding the dependencies plus every sink they write into.
 */
function makeRun(
	env: Record<string, string | undefined>,
	pipelineIds: string[],
	rpcError?: Error,
	loginError?: Error
): RecordedRun {
	const calls: RecordedCall[] = [];
	const run: RecordedRun = {
		dependencies: DEFAULT_DEPENDENCIES,
		logLines: [],
		errorLines: [],
		exitCodes: [],
		loginOptions: undefined,
		endpoints: [],
		calls,
		stopCount: 0
	};

	const provider: OfflineTokenProvider = {
		getAuthorizationHeader: (): string => AUTHORIZATION_HEADER,
		stop: (): void => {
			run.stopCount += 1;
		}
	} as unknown as OfflineTokenProvider;

	const clientStub: S2tPipelineLister = makeClientStub(pipelineIds, calls);

	const s2tClientConstructor: S2tClientConstructor = class {
		/**
		 * Record the endpoint the example built and expose the configured stub as the client.
		 *
		 * @param grpcWebUrl - The gRPC-web endpoint the example assembled from the environment.
		 */
		public constructor(grpcWebUrl: string) {
			run.endpoints.push(grpcWebUrl);
			if (rpcError !== undefined) {
				const failure: Error = rpcError;
				return { listS2tPipelines: (): Promise<ListS2tPipelinesResponse> => Promise.reject(failure) };
			}
			return clientStub;
		}
	} as unknown as S2tClientConstructor;

	run.dependencies = {
		env,
		login: (options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider> => {
			run.loginOptions = options;
			return loginError !== undefined ? Promise.reject(loginError) : Promise.resolve(provider);
		},
		s2tClientConstructor,
		log: (message: string): void => {
			run.logLines.push(message);
		},
		logError: (message: string, error?: unknown): void => {
			run.errorLines.push([message, error]);
		},
		exit: (code: number): void => {
			run.exitCodes.push(code);
		}
	};
	return run;
}

runTestCase(
	'listPipelineIds sends the languages + bearer metadata and maps the response to pipeline ids',
	async (): Promise<void> => {
		const calls: RecordedCall[] = [];
		const expectedIds: string[] = ['pipeline-en', 'pipeline-de'];
		const requestedLanguages: string[] = ['en-US', 'de-DE'];
		const authorizationHeader: string = 'Bearer test-token';
		const client: S2tPipelineLister = makeClientStub(expectedIds, calls);

		const ids: string[] = await listPipelineIds(client, authorizationHeader, requestedLanguages);

		// The response was mapped to exactly the ids the (mocked) server returned.
		assert.deepEqual(ids, expectedIds);

		// Exactly one RPC was issued, built from the real request message with the expected fields.
		assert.equal(calls.length, 1);
		assert.ok(calls[0].request instanceof ListS2tPipelinesRequest);
		assert.deepEqual(calls[0].request.getLanguagesList(), requestedLanguages);
		assert.equal(calls[0].request.getRegisteredOnly(), true);

		// The bearer token was forwarded as the `authorization` gRPC metadata header.
		assert.deepEqual(calls[0].metadata, { Authorization: authorizationHeader });
	}
);

runTestCase('listPipelineIds returns an empty list when the server reports no pipelines', async (): Promise<void> => {
	const calls: RecordedCall[] = [];
	const client: S2tPipelineLister = makeClientStub([], calls);

	const ids: string[] = await listPipelineIds(client, 'Bearer test-token', ['en-US']);

	assert.deepEqual(ids, []);
	assert.equal(calls.length, 1);
});

runTestCase('main honours a fully-populated environment (secure channel, verifySsl off, multi-language)', async () => {
	const run: RecordedRun = makeRun(
		{
			KEYCLOAK_URL: 'https://auth.example.test/auth',
			KEYCLOAK_REALM: 'test-realm',
			KEYCLOAK_CLIENT_ID: 'test-sdk-public',
			KEYCLOAK_USER_NAME: 'tech-user@example.test',
			KEYCLOAK_PASSWORD: 'super-secret',
			KEYCLOAK_VERIFY_SSL: 'FALSE',
			ONDEWO_HOST: 's2t.example.test',
			ONDEWO_PORT: '9090',
			ONDEWO_USE_SECURE_CHANNEL: 'TRUE',
			// The blank entry exercises the trim + drop-empty filter.
			ONDEWO_S2T_LANGUAGES: 'en-US, de-DE ,'
		},
		['pipeline-en', 'pipeline-de']
	);

	await main(run.dependencies);

	assert.deepEqual(run.loginOptions, {
		keycloakUrl: 'https://auth.example.test/auth',
		realm: 'test-realm',
		clientId: 'test-sdk-public',
		username: 'tech-user@example.test',
		password: 'super-secret',
		keycloakVerifySsl: false
	});
	assert.deepEqual(run.endpoints, ['https://s2t.example.test:9090']);
	assert.equal(run.calls.length, 1);
	assert.deepEqual(run.calls[0].request.getLanguagesList(), ['en-US', 'de-DE']);
	assert.deepEqual(run.calls[0].metadata, { Authorization: AUTHORIZATION_HEADER });
	assert.deepEqual(run.errorLines, []);
	assert.equal(run.stopCount, 1);
	assert.equal(run.logLines[run.logLines.length - 1], '[ts-client] DONE: received 2 S2T pipeline id(s):');
});

runTestCase('main falls back to every documented default when the environment is empty', async () => {
	const run: RecordedRun = makeRun({}, []);

	await main(run.dependencies);

	assert.deepEqual(run.loginOptions, {
		keycloakUrl: 'https://auth.ondewo.com/auth',
		realm: 'ondewo-ccai-platform',
		clientId: 'ondewo-nlu-cai-sdk-public',
		username: '',
		password: '',
		keycloakVerifySsl: true
	});
	// ONDEWO_USE_SECURE_CHANNEL unset => plain http, default host/port, single default language.
	assert.deepEqual(run.endpoints, ['http://localhost:8080']);
	assert.deepEqual(run.calls[0].request.getLanguagesList(), ['en-US']);
	assert.equal(run.stopCount, 1);
});

runTestCase('main logs an RpcError with its status code, rethrows it and still stops the refresh loop', async () => {
	const rpcError: FakeRpcError = new FakeRpcError(7, 'permission denied');
	const run: RecordedRun = makeRun({}, [], rpcError);

	await assert.rejects(
		() => main(run.dependencies),
		(error: unknown): boolean => error === rpcError
	);

	assert.deepEqual(run.errorLines, [
		['[ts-client] gRPC listS2tPipelines failed (code=7): permission denied', undefined]
	]);
	// The `finally` must run even on the failure path, or the process would never exit.
	assert.equal(run.stopCount, 1);
});

runTestCase('logRpcError falls back to a generic line for a non-RpcError and blanks a missing message', () => {
	const run: RecordedRun = makeRun({}, []);
	const plainError: Error = new Error('boom');

	logRpcError(plainError, run.dependencies);
	logRpcError({ code: 14 }, run.dependencies);

	assert.deepEqual(run.errorLines, [
		['[ts-client] Failed to list S2T pipelines:', plainError],
		['[ts-client] gRPC listS2tPipelines failed (code=14): ', undefined]
	]);
});

runTestCase('runAsScript does nothing when the module was imported rather than executed', async () => {
	const run: RecordedRun = makeRun({}, ['pipeline-en']);

	await runAsScript(false, run.dependencies);

	assert.deepEqual(run.logLines, []);
	assert.equal(run.loginOptions, undefined);
	assert.deepEqual(run.exitCodes, []);
});

runTestCase('runAsScript reports a failed run and exits non-zero instead of rejecting', async () => {
	const loginError: Error = new Error('keycloak unreachable');
	const run: RecordedRun = makeRun({}, [], undefined, loginError);

	await runAsScript(true, run.dependencies);

	assert.deepEqual(run.errorLines, [['[ts-client] Example failed:', loginError]]);
	assert.deepEqual(run.exitCodes, [1]);
});

runTestCase('DEFAULT_DEPENDENCIES wires the real environment, console and process', () => {
	assert.equal(DEFAULT_DEPENDENCIES.env, process.env);
	assert.equal(DEFAULT_DEPENDENCIES.log, console.log);
	assert.equal(DEFAULT_DEPENDENCIES.logError, console.error);
	assert.equal(DEFAULT_DEPENDENCIES.exit, process.exit);
});
