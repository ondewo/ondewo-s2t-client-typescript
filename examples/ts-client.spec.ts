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
 * Mock-based unit test for the S2T client example. The gRPC client is replaced by an in-memory fake
 * (no network, no live S2T server) while the REAL generated protobuf messages build the response, so the
 * example's request construction and response handling are exercised end-to-end.
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

import { listPipelineIds, type S2tPipelineLister } from './ts-client';

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
		assert.deepEqual(calls[0].metadata, { authorization: authorizationHeader });
	}
);

runTestCase('listPipelineIds returns an empty list when the server reports no pipelines', async (): Promise<void> => {
	const calls: RecordedCall[] = [];
	const client: S2tPipelineLister = makeClientStub([], calls);

	const ids: string[] = await listPipelineIds(client, 'Bearer test-token', ['en-US']);

	assert.deepEqual(ids, []);
	assert.equal(calls.length, 1);
});
