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
 * The transport-facing logic lives in the small, injectable {@link listPipelineIds} helper so it can be
 * unit-tested against a MOCK client without a live S2T server (see `ts-client.spec.ts`).
 *
 * @packageDocumentation
 */

import type * as grpcWeb from 'grpc-web';

import { Speech2TextPromiseClient } from '../api/ondewo/s2t/speech-to-text_grpc_web_pb';
import {
	ListS2tPipelinesRequest,
	ListS2tPipelinesResponse,
	Speech2TextConfig
} from '../api/ondewo/s2t/speech-to-text_pb';
import { login, OfflineTokenProvider } from '../auth/offlineTokenProvider';

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
 * Wire the example up against a live S2T server: log in, build the client, list pipelines, print the ids.
 * Endpoint + credentials are read from the environment. Not executed during unit tests.
 *
 * @returns A promise that resolves once the ids have been printed and the token refresh loop is stopped.
 */
async function main(): Promise<void> {
	const provider: OfflineTokenProvider = await login({
		keycloakUrl: process.env.ONDEWO_S2T_KEYCLOAK_URL ?? 'https://auth.ondewo.com/auth',
		realm: process.env.ONDEWO_S2T_KEYCLOAK_REALM ?? 'ondewo-ccai-platform',
		clientId: process.env.ONDEWO_S2T_KEYCLOAK_CLIENT_ID ?? 'ondewo-nlu-cai-sdk-public',
		username: process.env.ONDEWO_S2T_USER_NAME ?? '',
		password: process.env.ONDEWO_S2T_PASSWORD ?? ''
	});

	const endpoint: string = process.env.ONDEWO_S2T_GRPC_ENDPOINT ?? 'http://localhost:8080';
	const client: Speech2TextPromiseClient = new Speech2TextPromiseClient(endpoint);
	try {
		const pipelineIds: string[] = await listPipelineIds(client, provider.getAuthorizationHeader(), ['en-US']);
		console.log('S2T pipeline ids:', pipelineIds);
	} finally {
		provider.stop();
	}
}

if (require.main === module) {
	void main().catch((error: unknown): void => {
		console.error(error);
		process.exitCode = 1;
	});
}
