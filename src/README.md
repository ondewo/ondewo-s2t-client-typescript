<div align="center">
  <table>
    <tr>
      <td>
        <a href="https://ondewo.com/en/products/natural-language-understanding/">
            <img width="400px" src="https://raw.githubusercontent.com/ondewo/ondewo-logos/master/ondewo_we_automate_your_phone_calls.png"/>
        </a>
      </td>
    </tr>
    <tr>
       <td align="center">
          <a href="https://www.linkedin.com/company/ondewo "><img width="40px" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"></a>
          <a href="https://www.facebook.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733547.png"></a>
          <a href="https://twitter.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733579.png"> </a>
          <a href="https://www.instagram.com/ondewo.ai/"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/174/174855.png"></a>
          <a href="https://badge.fury.io/js/%40ondewo%2Fs2t-client-typescript"><img src="https://badge.fury.io/js/%40ondewo%2Fs2t-client-typescript.svg" alt="npm version" height="32"></a>
       </td>
    </tr>
  </table>
  <h1 align="center">
    ONDEWO S2T Client Typescript
  </h1>
</div>

## Overview

`@ondewo/s2t-client-typescript` is a compiled version of the [ONDEWO S2T API](https://github.com/ondewo/ondewo-s2t-api) using the [ONDEWO PROTO COMPILER](https://github.com/ondewo/ondewo-proto-compiler). Here you can find the S2T API [documentation](https://ondewo.github.io).

ONDEWO APIs use [Protocol Buffers](https://github.com/google/protobuf) version 3 (proto3) as their Interface Definition Language (IDL) to define the API interface and the structure of the payload messages. The same interface definition is used for gRPC versions of the API in all languages.

## Setup

Using NPM:

```shell
npm i --save @ondewo/s2t-client-typescript
```

Using GitHub:

```shell
git clone https://github.com/ondewo/ondewo-s2t-client-typescript.git ## Clone repository
cd ondewo-s2t-client-typescript                                      ## Change into repo-directoy
make setup_developer_environment_locally                             ## Install dependencies
```

## Package structure

```
npm
├── api
│   ├── google
│   │   └── protobuf
│   │       ├── empty_pb.d.ts
│   │       ├── empty_pb.js
│   │       ├── struct_pb.d.ts
│   │       └── struct_pb.js
│   └── ondewo
│       └── s2t
│           ├── speech-to-text_grpc_web_pb.d.ts
│           ├── speech-to-text_grpc_web_pb.js
│           ├── speech-to-text_pb.d.ts
│           └── speech-to-text_pb.js
├── auth
│   ├── offlineTokenProvider.d.ts
│   └── offlineTokenProvider.js
├── LICENSE
├── package.json
├── public-api.d.ts
├── public-api.js
└── README.md
```

`api/` and `public-api.*` are generated from `ondewo/s2t/speech-to-text.proto` by the
[ONDEWO PROTO COMPILER](https://github.com/ondewo/ondewo-proto-compiler); `auth/` is hand-written and compiled into
the package by `make create_npm_package`.

## Authentication

The service expects a Keycloak bearer token in the `authorization` gRPC metadata header. `auth/offlineTokenProvider`
performs the headless (2FA-exempt) ROPC + `offline_access` login against the public SDK client and keeps the
short-lived access token fresh in the background until `tokenExpirationInS` elapses:

```typescript
import { login, OfflineTokenProvider } from '@ondewo/s2t-client-typescript/auth/offlineTokenProvider';
import { Speech2TextPromiseClient } from '@ondewo/s2t-client-typescript/api/ondewo/s2t/speech-to-text_grpc_web_pb';
import { ListS2tPipelinesRequest } from '@ondewo/s2t-client-typescript/api/ondewo/s2t/speech-to-text_pb';

const provider: OfflineTokenProvider = await login({
  keycloakUrl: 'https://auth.ondewo.com/auth',
  realm: 'ondewo-ccai-platform',
  clientId: 'ondewo-nlu-cai-sdk-public',
  username: process.env.KEYCLOAK_USER_NAME ?? '',
  password: process.env.KEYCLOAK_PASSWORD ?? ''
  // keycloakVerifySsl: false  // ONLY for a self-signed local Envoy; Node-only, ignored in a browser
});

const client = new Speech2TextPromiseClient('http://localhost:8080');
const request = new ListS2tPipelinesRequest();
request.setLanguagesList(['en-US']);
const response = await client.listS2tPipelines(request, { Authorization: provider.getAuthorizationHeader() });

provider.stop(); // stops the background refresh loop so the process can exit
```

A runnable version of exactly this flow, configured from `examples/environment.env`, lives in
`examples/ts-client.ts`.

## TLS, mutual TLS and certificates

This package is a **gRPC-web** client. Its generated clients send every call through the browser's `XMLHttpRequest`
to a gRPC-web proxy (Envoy) in front of the ONDEWO service, so TLS is the browser's TLS: the browser verifies the
server certificate against its own (operating system / browser) trust store, and a client certificate for mutual TLS
can only come from the browser's own certificate store. Page code cannot hand a CA certificate, a client certificate
or a private key to the browser, so this SDK takes none of them; never ship a private key to a browser.

`createGrpcWebEndpoint` turns `host` / `port` / `useSecureChannel` into the `hostname` URL and the client options
every generated `*Client` / `*PromiseClient` takes:

| Mode                           | `createGrpcWebEndpoint` config                                      | Where the certificates live                                                                                                                                      |
|--------------------------------|---------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Plaintext (not for production) | `useSecureChannel: false`                                           | none; builds `http://host:port` and logs a warning naming `host:port`                                                                                            |
| TLS, publicly trusted server   | `useSecureChannel: true` (the default)                              | the server certificate chains to a CA the browser already trusts                                                                                                 |
| TLS, private CA                | `useSecureChannel: true`                                            | install the CA (`ca.pem`) in the operating system or browser trust store                                                                                         |
| Mutual TLS                     | `useSecureChannel: true`, plus `withCredentials: true` cross-origin | install the client certificate and key (`client.p12`) in the operating system or browser certificate store; the proxy requests it and verifies it against its CA |

Rules the code enforces:

- A config carrying `grpcCert`, `grpcClientCert` or `grpcClientKey` (or the Python spellings `grpc_cert`,
  `grpc_client_cert`, `grpc_client_key`) with a non-empty value throws an `Error` naming the field, instead of
  silently ignoring a certificate you meant to use. Empty values are ignored, so a config ported from another ONDEWO
  SDK with blank TLS fields still works.
- `host` is a bare host name or IP address (no scheme, credentials, path or port); a bare IPv6 literal is bracketed
  (`::1` becomes `https://[::1]:50051`). `port` is an integer 1-65535 (number or numeric string).
- `useSecureChannel` and `withCredentials` must be booleans: parse environment strings yourself (`'false'` is refused,
  not read as `true`).
- `useSecureChannel: false` logs a warning naming `host:port` through `console.warn`, or through the logger passed as
  the second argument. No error message renders a value of a refused field or the host of a refused URL.
- `withCredentials: true` is gRPC-web's option for cross-origin calls: only then does the browser send cookies, HTTP
  authentication **and its TLS client certificate** to a proxy on another origin. A same-origin proxy does not need it.

```ts
import { createGrpcWebEndpoint } from '@ondewo/s2t-client-typescript/auth/offlineTokenProvider';
import { Speech2TextPromiseClient } from '@ondewo/s2t-client-typescript/api/ondewo/s2t/speech-to-text_grpc_web_pb';

const endpoint = createGrpcWebEndpoint({
 host: 's2t.example.com',
 port: 443,
 withCredentials: true // only for mutual TLS against a proxy on another origin
});
const client = new Speech2TextPromiseClient(endpoint.hostname, null, endpoint.options);
```

**Node.js.** The generated clients need `XMLHttpRequest`, which Node.js does not provide (a call fails with
`XMLHttpRequest is not defined`), so this package's gRPC calls run in browsers only; in Node.js only the Keycloak
`login` helper is usable. There is therefore no Node.js path for a custom CA or a client certificate in this SDK: for
a server-side client use the ONDEWO Python SDK, or generate a native `@grpc/grpc-js` client from the
[API protos](https://github.com/ondewo/ondewo-s2t-api) and pass your PEM files to `credentials.createSsl(ca, clientKey, clientCert)`.

### The proxy side of mutual TLS

The browser only offers a client certificate when the TLS server asks for one. With Envoy as the gRPC-web proxy:

```yaml
transport_socket:
  name: envoy.transport_sockets.tls
  typed_config:
    '@type': type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.DownstreamTlsContext
    require_client_certificate: true
    common_tls_context:
      tls_certificates:
        - certificate_chain: { filename: /etc/envoy/certs/server.pem }
          private_key: { filename: /etc/envoy/certs/server.key }
      validation_context:
        trusted_ca: { filename: /etc/envoy/certs/ca.pem }
```

For a cross-origin page the CORS policy must allow credentials with an explicit origin (`allow_credentials: true`;
`Access-Control-Allow-Origin: *` is rejected by the browser for a credentialed request). Envoy may in turn connect to
the ONDEWO service over TLS or mutual TLS with its own (upstream) certificate.

### A test PKI with openssl

A CA, a server certificate with SANs, and a client certificate with the `clientAuth` extended key usage, bundled as
PKCS#12 for import into a browser or operating system certificate store. For tests only: the keys are unencrypted.

```bash
openssl req -x509 -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -nodes -days 365 \
  -subj "/CN=Test CA" -keyout ca.key -out ca.pem

printf 'subjectAltName=DNS:localhost,IP:127.0.0.1\nextendedKeyUsage=serverAuth\n' > server.ext
openssl req -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -nodes \
  -subj "/CN=localhost" -keyout server.key -out server.csr
openssl x509 -req -in server.csr -CA ca.pem -CAkey ca.key -CAcreateserial -days 365 \
  -extfile server.ext -out server.pem

printf 'extendedKeyUsage=clientAuth\n' > client.ext
openssl req -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -nodes \
  -subj "/CN=my-client" -keyout client.key -out client.csr
openssl x509 -req -in client.csr -CA ca.pem -CAkey ca.key -CAcreateserial -days 365 \
  -extfile client.ext -out client.pem
openssl pkcs12 -export -in client.pem -inkey client.key -certfile ca.pem -name my-client -out client.p12

chmod 600 *.key client.p12
openssl verify -CAfile ca.pem server.pem client.pem
```

Envoy uses `server.pem` / `server.key` and trusts `ca.pem` for its clients; the browser trusts `ca.pem` and imports
`client.p12`.

### TLS security notes

- The private key of a client certificate belongs in the operating system / browser certificate store, never in page
  code, a bundle, `localStorage` or a config file served to the browser. This SDK refuses one rather than carry it.
- `createGrpcWebEndpoint` returns only the URL and `{ withCredentials }`; logging it reveals no secret. The bearer
  token from `login(...)` is a secret: do not log the `Authorization` header or the `OfflineTokenProvider`.
- `withCredentials: true` also sends the page's cookies for the proxy's origin; restrict the proxy's allowed origins.

### TLS troubleshooting

grpc-web reports a failed TLS connection only as a generic error (the browser hides the TLS cause from JavaScript);
the cause is in the browser's developer tools (Console / Network tab):

- **`net::ERR_CERT_AUTHORITY_INVALID`**: the server certificate does not chain to a CA the browser trusts. Install
  the CA in the trust store, or use a publicly trusted certificate.
- **`net::ERR_CERT_COMMON_NAME_INVALID`**: the host you connect to is not among the certificate's subject alternative
  names. Connect by a name in the SAN, or reissue the certificate (an IP needs an `IP:` SAN).
- **`net::ERR_BAD_SSL_CLIENT_AUTH_CERT`** / **`net::ERR_SSL_CLIENT_AUTH_CERT_NEEDED`**: the proxy requires a client
  certificate and the browser offered none, or one not signed by the proxy's `trusted_ca`. Import `client.p12`, pick
  it when the browser asks, and check `openssl verify -CAfile ca.pem client.pem`.
- **Mixed content blocked**: an `https://` page cannot call an `http://` endpoint; use `useSecureChannel: true`.
- **CORS error only with `withCredentials: true`**: the proxy answers with `Access-Control-Allow-Origin: *` or
  without `Access-Control-Allow-Credentials: true`.

[comment]: <> (START OF GITHUB README)

## Development

```shell
npm install --no-audit --no-fund   ## exactly what CI runs
npm test                           ## compiles auth/ + examples/ and enforces the coverage gate
npm run test:drift                 ## package.json and .ci-package.json must agree
make eslint                        ## also run by .husky/pre-commit
make prettier PRETTIER_WRITE=-w    ## also run by .husky/pre-commit
```

`npm test` is the heart of the CI gate. `tsconfig.test.json` compiles **every** `.ts` file under `auth/` and
`examples/` into `.test-build/`, and `.c8rc.json` demands 100% lines/branches/functions/statements **per file** on
all of it — so a new hand-written file without tests fails the build on its own, with no config change. The
generated `api/` stubs are copied into `.test-build/api` for the runtime and excluded from the measurement.

`.husky/pre-push` runs `npm test` before anything leaves the machine; `.husky/pre-commit` deliberately does not
(`make release` invokes it directly, and the suite must not run mid-release).

## Build

The `make build` command is dependent on 2 `repositories` and their specified `version`:

- [ondewo-s2t-api](https://github.com/ondewo/ondewo-s2t-api) -- `S2T_API_GIT_BRANCH` in `Makefile`
- [ondewo-proto-compiler](https://github.com/ondewo/ondewo-proto-compiler) -- `ONDEWO_PROTO_COMPILER_GIT_BRANCH` in `Makefile`

Other than creating the proto-code, `build` also installs the `dev-dependencies` and changes the owner of the proto-code-files from `root` to the `current user`.

In the case that some `google .protos` were not automatically generated, exists the option of creating a `proto-deps.txt` inside the `src` folder. There, import statements can be written the same way as they are in `.proto` files.

```
import "google/api/http.proto"; //Example
  <---- New Line
```

> :warning: The last line in the `proto-deps.txt` needs to be an empty new line, otherwise the compiler will fail

## GitHub Repository - Release Automation

The repository is published to GitHub and NPM by the Automated Release Process of ONDEWO.

TODO after PR merge:

- checkout master

  ```shell
  git checkout master
  ```

- pull the newest state

  ```shell
  git pull
  ```

- Adjust `ONDEWO_S2T_VERSION` in the `Makefile` <br><br>
- Add new Release Notes to `src/RELEASE.md` in following format:

  ```
  ## Release ONDEWO S2T Typescript Client X.X.X    <----- Beginning of Notes

  ...<NOTES>...

  *****************                             <----- End of Notes
  ```

- release

  ```shell
  make ondewo_release
  ```

  <br>
  The release process can be divided into 6 Steps:

1. `build` specified version of the `ondewo-s2t-api`
2. `commit and push` all changes in code resulting from the `build`
3. Publish the created `npm` folder to `npmjs.com`
4. Create and push the `release branch` e.g. `release/1.3.20`
5. Create and push the `release tag` e.g. `1.3.20`
6. Create a new `Release` on GitHub

> :warning: The Release Automation checks if the build has created all the proto-code files, but it does not check the code-integrity. Please build and test the generated code prior to starting the release process.

[comment]: <> (END OF GITHUB README)
