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
 * Minimal end-to-end example for the ONDEWO S2T TypeScript (gRPC-web) client.
 *
 * It demonstrates the CURRENT auth flow (Keycloak / D18): obtain a short-lived bearer access token from
 * the public SDK client via {@link login}, then call a representative RPC (`listS2tPipelines`) with the
 * token supplied as the `authorization: Bearer <token>` gRPC metadata header.
 *
 * Every side effect the example reaches for -- the environment, the Keycloak login, the generated client
 * constructor, the console and the process exit -- is injected through {@link TsClientDependencies}.
 * Production wiring lives in {@link DEFAULT_DEPENDENCIES}; the unit test supplies fakes, so importing
 * this module performs no login, no RPC and no process termination (see `ts-client.spec.ts`).
 *
 * @packageDocumentation
 */

import * as path from 'node:path';

import * as dotenv from 'dotenv';
import type * as grpcWeb from 'grpc-web';

import { Speech2TextPromiseClient } from '../api/ondewo/s2t/speech-to-text_grpc_web_pb';
import {
	ListS2tPipelinesRequest,
	ListS2tPipelinesResponse,
	Speech2TextConfig
} from '../api/ondewo/s2t/speech-to-text_pb';
import { login, OfflineTokenProvider } from '../auth/offlineTokenProvider';
import type { OfflineTokenLoginOptions } from '../auth/offlineTokenProvider';

// Load the canonical ONDEWO_*/KEYCLOAK_* variables from the committed template next to this script, so
// configuration is read from the environment regardless of the current working directory. dotenv never
// overwrites an already-set variable and reports a missing file through its return value instead of
// throwing, so this is a no-op in the unit test (which injects its own `env` anyway).
dotenv.config({ path: path.join(__dirname, 'environment.env') });

/**
 * Structural subset of the generated {@link Speech2TextPromiseClient} used by {@link listPipelineIds}.
 * Depending on this narrow shape (rather than the concrete client) lets the unit test inject a mock.
 */
export interface S2tPipelineLister {
	/**
	 * List the configured S2T pipelines.
	 *
	 * @param request - The populated {@link ListS2tPipelinesRequest}.
	 * @param metadata - Optional gRPC metadata (carries the `authorization` bearer header here).
	 * @returns A promise resolving to the {@link ListS2tPipelinesResponse}.
	 */
	listS2tPipelines(request: ListS2tPipelinesRequest, metadata?: grpcWeb.Metadata): Promise<ListS2tPipelinesResponse>;
}

/**
 * Constructor shape of the generated gRPC-web {@link Speech2TextPromiseClient}, narrowed to the single
 * RPC this example issues. It is injected rather than referenced directly inside {@link main} so a unit
 * test can supply an in-memory fake instead of a client pointed at a live S2T endpoint.
 *
 * @param grpcWebUrl - The gRPC-web (envoy) endpoint the client talks to.
 * @returns A client exposing the `listS2tPipelines` RPC.
 */
export type S2tClientConstructor = new (grpcWebUrl: string) => S2tPipelineLister;

/**
 * Everything this example touches outside its own module: the environment, the auth helper, the
 * generated client constructor and the console/process side effects.
 */
export interface TsClientDependencies {
	/** The environment the configuration is read from (the real `process.env` in production). */
	readonly env: Record<string, string | undefined>;
	/**
	 * Perform the headless Keycloak login.
	 *
	 * @param options - The ROPC + offline_access login options.
	 * @returns A promise resolving to a bootstrapped token provider.
	 */
	readonly login: (options: OfflineTokenLoginOptions) => Promise<OfflineTokenProvider>;
	/** The generated `Speech2TextPromiseClient` constructor. */
	readonly s2tClientConstructor: S2tClientConstructor;
	/**
	 * Write one progress line (the real `console.log` in production).
	 *
	 * @param message - The line to write.
	 * @param detail - An optional raw value passed through as a second argument.
	 */
	readonly log: (message: string, detail?: unknown) => void;
	/**
	 * Write one failure line (the real `console.error` in production).
	 *
	 * @param message - The line to write.
	 * @param error - The optional raw error, passed through as a second argument.
	 */
	readonly logError: (message: string, error?: unknown) => void;
	/**
	 * Terminate the process (the real `process.exit` in production).
	 *
	 * @param code - The exit status code.
	 */
	readonly exit: (code: number) => void;
}

/** The production wiring: the real environment, auth helper, generated stub, console and process. */
export const DEFAULT_DEPENDENCIES: TsClientDependencies = {
	env: process.env,
	login,
	s2tClientConstructor: Speech2TextPromiseClient,
	log: console.log,
	logError: console.error,
	exit: process.exit
};

/**
 * Call `listS2tPipelines` for the given languages and return the id of every returned pipeline config.
 * The bearer token is forwarded as the `authorization` gRPC metadata header.
 *
 * @param client - Any client exposing the {@link S2tPipelineLister} shape (real or mocked).
 * @param authorizationHeader - The `Bearer <token>` value (see {@link OfflineTokenProvider.getAuthorizationHeader}).
 * @param languages - The language codes to filter pipelines by, e.g. `["en-US"]`.
 * @returns A promise resolving to the ids of the matching pipelines.
 */
export async function listPipelineIds(
	client: S2tPipelineLister,
	authorizationHeader: string,
	languages: string[]
): Promise<string[]> {
	const request: ListS2tPipelinesRequest = new ListS2tPipelinesRequest();
	request.setLanguagesList(languages);
	request.setRegisteredOnly(true);

	const metadata: grpcWeb.Metadata = { Authorization: authorizationHeader };
	const response: ListS2tPipelinesResponse = await client.listS2tPipelines(request, metadata);

	return response.getPipelineConfigsList().map((config: Speech2TextConfig): string => config.getId());
}

/**
 * Log a failed gRPC call with its status code + details when the error is a grpc-web {@link grpcWeb.RpcError},
 * falling back to a generic message otherwise. Never logs credentials or tokens.
 *
 * @param error - The value thrown by the `listS2tPipelines` RPC.
 * @param dependencies - The failure sink to report through.
 */
export function logRpcError(error: unknown, dependencies: TsClientDependencies): void {
	const rpcError: Partial<grpcWeb.RpcError> = error as Partial<grpcWeb.RpcError>;
	if (typeof rpcError.code === 'number') {
		dependencies.logError(
			`[ts-client] gRPC listS2tPipelines failed (code=${rpcError.code}): ${rpcError.message ?? ''}`
		);
	} else {
		dependencies.logError('[ts-client] Failed to list S2T pipelines:', error);
	}
}

/**
 * Wire the example up against a live S2T server: read the configuration from the environment, log in via
 * Keycloak, build the client, list pipelines, print the ids. All endpoint + credential values come from
 * the canonical environment variables (see `examples/environment.env`).
 *
 * @param dependencies - The environment, auth helper, generated constructor and log sinks to use.
 * @returns A promise that resolves once the ids have been printed and the token refresh loop is stopped.
 * @throws The value the `listS2tPipelines` RPC rejected with, after logging it; the refresh loop is
 *   stopped either way.
 */
export async function main(dependencies: TsClientDependencies): Promise<void> {
	const keycloakUrl: string = dependencies.env.KEYCLOAK_URL ?? 'https://auth.ondewo.com/auth';
	const keycloakRealm: string = dependencies.env.KEYCLOAK_REALM ?? 'ondewo-ccai-platform';
	const keycloakClientId: string = dependencies.env.KEYCLOAK_CLIENT_ID ?? 'ondewo-nlu-cai-sdk-public';
	const keycloakUserName: string = dependencies.env.KEYCLOAK_USER_NAME ?? '';
	const keycloakPassword: string = dependencies.env.KEYCLOAK_PASSWORD ?? '';
	const keycloakVerifySsl: boolean = (dependencies.env.KEYCLOAK_VERIFY_SSL ?? 'true').toLowerCase() !== 'false';

	const host: string = dependencies.env.ONDEWO_HOST ?? 'localhost';
	const port: string = dependencies.env.ONDEWO_PORT ?? '8080';
	const useSecureChannel: boolean = (dependencies.env.ONDEWO_USE_SECURE_CHANNEL ?? 'false').toLowerCase() === 'true';
	let scheme: string = 'http';
	if (useSecureChannel) {
		scheme = 'https';
	}
	const endpoint: string = `${scheme}://${host}:${port}`;

	const languages: string[] = (dependencies.env.ONDEWO_S2T_LANGUAGES ?? 'en-US')
		.split(',')
		.map((language: string): string => language.trim())
		.filter((language: string): boolean => language.length > 0);

	dependencies.log(`[ts-client] START: logging in to Keycloak realm "${keycloakRealm}" at ${keycloakUrl}`);
	const provider: OfflineTokenProvider = await dependencies.login({
		keycloakUrl,
		realm: keycloakRealm,
		clientId: keycloakClientId,
		username: keycloakUserName,
		password: keycloakPassword,
		keycloakVerifySsl
	});
	dependencies.log('[ts-client] Keycloak login succeeded; obtained a bearer access token');

	const client: S2tPipelineLister = new dependencies.s2tClientConstructor(endpoint);
	try {
		dependencies.log(`[ts-client] Listing S2T pipelines for languages [${languages.join(', ')}] via ${endpoint}`);
		const pipelineIds: string[] = await listPipelineIds(client, provider.getAuthorizationHeader(), languages);
		dependencies.log(`[ts-client] DONE: received ${pipelineIds.length} S2T pipeline id(s):`, pipelineIds);
	} catch (error: unknown) {
		logRpcError(error, dependencies);
		throw error;
	} finally {
		provider.stop();
	}
}

/**
 * Entry point used at module scope: run the example only when this file is the process entry point, so
 * importing the module (as the unit test does) has no side effects.
 *
 * @param isMainModule - Whether this module was executed as a script rather than imported.
 * @param dependencies - The dependencies to run {@link main} with.
 * @returns A promise that resolves once the example has finished; a failure is reported and turned into
 *   a non-zero exit status rather than rejected.
 */
export function runAsScript(isMainModule: boolean, dependencies: TsClientDependencies): Promise<void> {
	if (!isMainModule) {
		return Promise.resolve();
	}
	return main(dependencies).catch((error: unknown): void => {
		dependencies.logError('[ts-client] Example failed:', error);
		dependencies.exit(1);
	});
}

void runAsScript(require.main === module, DEFAULT_DEPENDENCIES);
