# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working Principles

Behavioral guidelines to reduce common mistakes. They bias toward caution over speed; for trivial tasks, use judgment.

### Think before coding

Don't assume. Don't hide confusion. Surface tradeoffs.

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### Simplicity first

Minimum code that solves the problem. Nothing speculative.

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### Surgical changes

Touch only what you must. Clean up only your own mess.

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that _your_ changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: every changed line should trace directly to the user's request.

### Goal-driven execution

Define success criteria. Loop until verified.

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```text
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

These guidelines are working if: fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and
clarifying questions come before implementation rather than after mistakes.

## Git Commits

- **Never include Claude as author or co-author** in commit messages, PR descriptions, or any other text. Do not add
  `Co-Authored-By: Claude…` trailers, "Generated with Claude Code" footers, or any similar attribution.
- The user's own git author identity (already configured in git) is the only identity that should appear on commits.
- This rule overrides the default Claude Code commit-template guidance.
- **Never prepend the JIRA ticket ID** (e.g. `[OND211-2386]`) to the commit subject yourself. The `giticket` pre-commit
  hook reads the ticket from the branch name (`(feature|bugfix|support|hotfix)/<TICKET>-…`) and prepends `[<ticket>]`
  (with a trailing space) automatically. Writing the prefix manually produces a duplicate like
  `[OND211-2386] [OND211-2386] feat: …`. Write the subject as plain Conventional Commits (`feat: …`, `fix(scope): …`,
  `docs(types): …`) and let the hook add the prefix on commit.

## General Principles

- Follow existing patterns before introducing new abstractions.
- Keep changes minimal and consistent with surrounding code.
- Validate inputs early with descriptive, context-rich error messages.
- Use context managers for files, sockets, and thread pools.
- Prefer region comments for grouping methods in files that already use them.
- End edited Markdown and YAML files with a trailing newline.

## What this repo is

`@ondewo/s2t-client-typescript` -- the gRPC-web TypeScript SDK for the ONDEWO S2T API. Roughly 95% of the
tree is **generated** and must never be hand-edited:

| Path | Origin | Editable? |
| --- | --- | --- |
| `api/**`, `public-api.js`, `public-api.d.ts` | proto-compiler codegen (`make build`) | no |
| `src/ondewo-s2t-api/`, `ondewo-proto-compiler/` | git submodules (codegen inputs) | pin only |
| `auth/offlineTokenProvider.ts` (+ `.spec.ts`) | hand-written | yes |
| `examples/ts-client.ts` (+ `.spec.ts`), `examples/environment.env` | hand-written | yes |
| root `README.md`, `RELEASE.md` | **copies** of `src/README.md` / `src/RELEASE.md`, overwritten by `make build` | edit `src/` too |

The hand-written surface is exactly `auth/**` + `examples/**`. Everything in the sections below is about those.

## Tests and the coverage gate

```shell
npm install --no-audit --no-fund   # exactly what CI runs
npm test                           # the entire CI gate
```

- `pretest` = `rm -rf .test-build && tsc -p tsconfig.test.json && cp -R api .test-build/api`.
  `tsconfig.test.json` has `include: ["auth/**/*.ts", "examples/**/*.ts"]` and `rootDir: "."`, so the emitted layout
  mirrors the repo (`.test-build/auth/…`, `.test-build/examples/…`) and the examples' `../api/…` imports resolve
  against the copied stubs.
- `test` = `c8 node --test .test-build/*/*.spec.js`, configured by **`.c8rc.json`**: `all: true`, `per-file: true`,
  `100` for lines/branches/functions/statements, over `.test-build/**/*.js` minus `**/*.spec.js` and
  `.test-build/api/**`.
- **The gate is structural, not an allow-list.** A new `.ts` file under `auth/` or `examples/` is compiled and
  therefore measured with no config change. Verified: dropping an untested `auth/probeUntested.ts` into the tree
  makes `npm test` exit 1 with `Coverage for lines (0%) does not meet threshold (100%)`.
- Current state: 32 tests, 100/100/100/100 on `auth/offlineTokenProvider.ts` and `examples/ts-client.ts`. Verified on
  node 20 (the CI version) and node 24.
- The only exclusions in production code are three narrow `/* c8 ignore next N */` comments in
  `offlineTokenProvider.ts`, each on a branch unreachable under the Node test runner (the browser guard in
  `getInsecureNodeDispatcher`, the `stopped` re-check at the top of `refresh()`, and the `typeof timer.unref` else
  branch). Do not add blanket ignores — write the test instead.
- `examples/ts-client.ts` is testable because every side effect is injected (`TsClientDependencies` /
  `DEFAULT_DEPENDENCIES` / `main` / `logRpcError` / `runAsScript`). Module scope only calls
  `runAsScript(require.main === module, DEFAULT_DEPENDENCIES)`, so importing it in a spec performs no login, no RPC
  and no `process.exit`.

## CI — `.github/workflows/tests.yml` is the only CI here

No Jenkinsfile. Four `run:` steps, all of which must exit 0:

1. `npm install --no-audit --no-fund`
2. `npm test` — the coverage gate above
3. `npm run test:drift` — every `scripts` / `devDependencies` / `dependencies` key `.ci-package.json` declares must
   match `package.json`
4. `make create_npm_package && make verify_npm_package_contents`

`submodules:` is deliberately NOT enabled: `.gitmodules` gives `ondewo-proto-compiler` an SSH URL
(`git@github.com:ondewo/ondewo-proto-compiler.git`) that a hosted runner cannot clone, and nothing under `auth/` or
`examples/` needs a submodule — `api/` is committed.

What turns it red, in practice: an uncovered line in a hand-written file; a new hand-written file with no spec;
editing `package.json`'s test scripts without mirroring them into `.ci-package.json`; a packaging change that drops
`auth/offlineTokenProvider.{js,d.ts}` or lets a `.spec.ts` / `.map` / raw `.ts` into `npm/`.

`make eslint` and `make prettier` are **not** in the workflow — they run from `.husky/pre-commit`. `make eslint`
currently prints 11 warnings (`no-ternary`, `@typescript-eslint/unbound-method`) and exits 0; only eslint
**errors** fail it.

## Proto-compiler pin — how to bump it

Two edits, never codegen:

```shell
git -C ondewo-proto-compiler fetch --tags origin
git -C ondewo-proto-compiler checkout <VERSION>     # moves the gitlink
git add ondewo-proto-compiler
perl -i -pe 's|^ONDEWO_PROTO_COMPILER_GIT_BRANCH=.*|ONDEWO_PROTO_COMPILER_GIT_BRANCH=tags/<VERSION>|' Makefile
git submodule status | grep proto-compiler          # must print the new tag
```

- Currently pinned to **5.14.0** (`b71f8ed4575ecc4ee8084389a075514acac61ff4`), Makefile line 20 `tags/5.14.0`.
- **Keep the Makefile variable and the gitlink on the same tag.** They had drifted (`tags/5.10.0` vs a 5.11.0
  gitlink), and `make check_out_correct_submodule_versions` checks out the **Makefile** value, so every build
  silently downgraded the submodule.
- A pin move changes which image `make build` would build; it rewrites **no** committed stub. Never write
  "regenerated with proto-compiler X" in `RELEASE.md` unless `make build` actually ran. The 5.12.0–5.14.0 payload
  (Angular/JS/Node/TS codegen fixes, incl. proto3 explicit presence for `optional` scalars) reaches this repo only
  through a regeneration.
- Two things the upstream `update_proto_compiler_dependency.sh` also touches are **no-ops here** and must not appear
  as diffs: `Dockerfile.utils` already has `ENV NODE_VERSION=24.14.0` (what 5.14.0 declares), and the jq dependency
  sync of `src/package.json` against `typescript/image-data/package.json@5.14.0` changes nothing (the only
  overlapping key, `@types/node`, already reads `^22.15.27`).

## Pre-commit — hook order is load-bearing

`.pre-commit-config.yaml` runs the language-agnostic set only (markdownlint-cli2, pre-commit-hooks hygiene,
conventional-pre-commit, giticket); eslint/prettier stay with husky.

- **conventional-pre-commit MUST be declared BEFORE giticket.** Both are `commit-msg`-stage hooks and pre-commit runs
  repos in declaration order. giticket rewrites the subject to `[OND231-624] chore: probe`, which is no longer valid
  Conventional Commits — with giticket first, every commit on a ticket branch failed and could only be made with
  `--no-verify`. Verified both directions: in the current order a `chore: probe` on `feature/OND231-624-probe` passes
  and lands as `[OND231-624] chore: probe`; feeding the decorated subject to `conventional-pre-commit` v4.4.0 exits 1.
- **markdownlint MD053 must stay disabled** in `.markdownlint-cli2.yaml`. Its auto-fix DELETES the
  `[comment]: <> (START/END OF GITHUB README)` reference-definition markers that `make build` slices the published
  README on (`perl … /START OF GITHUB README/../END OF GITHUB README/`, currently lines 109–194 of `src/README.md`).
- `.husky/pre-commit` must keep skipping `pre-commit run` when `.pre-commit-config.yaml` is unstaged: `make
  run_precommit_hooks` invokes `.husky/pre-commit` **directly** during the release, the codegen leaves the config
  unstaged, and `pre-commit run` would abort with **"Your pre-commit configuration is unstaged"**.
- `.husky/pre-commit` runs `make prettier PRETTIER_WRITE=-w` **before** `pre-commit run`, so anything prettier
  rewrites is left unstaged and deadlocks that chained run. `.prettierignore` therefore owns the exclusions:
  `README.md` + `RELEASE.md` (slice markers — prettier turns `<> (...)` into `<> '...'`), `CLAUDE.md` (markdown is
  markdownlint's), `.pre-commit-config.yaml` / `.markdownlint-cli2.yaml` / `.ci-package.json` (their own tools), and
  `coverage/` + `.nyc_output/`. `prettier --check ./` is currently clean — keep it that way.
- Run it as `uvx pre-commit run --all-files` (pre-commit is not on `PATH` on this machine). Note that
  `.husky/pre-commit` guards with `command -v pre-commit`, so on such a machine the framework hooks silently do not
  run on a normal `git commit`.
- Hook revs are at the newest stable: markdownlint-cli2 `v0.23.2`, pre-commit-hooks `v6.0.0`, conventional-pre-commit
  `v4.4.0`, giticket `'1.92'` (keep the quotes — unquoted it is a YAML float). `.husky/` hooks only fire after
  `make install_precommit_hooks` (`npx husky install`); a fresh clone has `core.hooksPath` unset.

## Sharp edges

- **`make eslint` fails, not warns, on `@typescript-eslint/prefer-promise-reject-errors`.** A test fake that does
  `Promise.reject(x)` where `x` is `unknown` or `Error | undefined` produces
  `Expected the Promise rejection reason to be an Error` and exits 2. Narrow the value to a real `Error` first
  (assign it to a local inside an `!== undefined` guard) instead of casting.
- **markdownlint-cli2 auto-fixes `*emphasis*` into `_emphasis_`** here (MD049 `consistent`, and the first emphasis
  in this file is `_your_`). Write `**bold**` or backticks in markdown so `pre-commit run` does not rewrite the
  file underneath you.
- **`.test-build/api` is a copy, not a symlink** (`cp -R api .test-build/api` in `pretest`). Without it the
  compiled examples cannot resolve their `../api/...` imports at runtime, and `npm test` fails with
  `Cannot find module`.
- **`make verify_npm_package_contents` needs `make create_npm_package` to have run** - it inspects `npm/`, it does
  not build it.

## Release

`make ondewo_release` → clone devops-accounts → `make release` → `build`, `check_build`, `run_precommit_hooks`,
commit, push, npm publish, release branch + tag, GitHub release. Never run it by hand from a working tree you have
not just verified.

- **The codegen regenerates the ROOT `package.json`.** `src/package.json`'s `build` script mounts `${PWD}/..` (the
  repo root) as the compiler's output volume, so it overwrites the root manifest and strips the CI test scripts.
  `make restore_ci_test_setup` runs inside `build` **before** `create_npm_package` and merges `.ci-package.json`
  (`description`, `scripts`, `dependencies`, `devDependencies`) back in. It is an **inline `node -e`** on purpose — a
  helper `.js` file gets caught by the release's type-checked eslint and fails the release. Keep `.ci-package.json`
  and `package.json` in sync; `npm run test:drift` is the check.
- **Runtime deps the shipped auth helper needs (`undici`) must be declared in `src/package.json`** — that is the
  codegen's source of truth; otherwise the regen strips them from the root manifest and the published package is
  missing them.
- `create_npm_package` also compiles `auth/offlineTokenProvider.ts` into `npm/auth` (js + `.d.ts`) via `npx tsc`.
  Without it the published tarball has no auth module at all, even though `examples/ts-client.ts` imports one.
  `verify_npm_package_contents` (a prerequisite of `npm_release`) fails on any packed `*.spec.*`, `*.test.*`,
  `__tests__/`, `__mocks__/`, raw `.ts`, `.map`, `examples/` or `.test-build` path, and on a missing
  `public-api.{js,d.ts}` / `auth/offlineTokenProvider.{js,d.ts}`. It needs `make create_npm_package` to have run.
- **The release commit is `-git commit --no-verify …`.** The leading `-` makes make ignore the non-zero exit git
  returns when the build produced nothing to stage; `--no-verify` stops husky reformatting freshly generated files
  mid-commit.
- **Every token-bearing recipe line is `@`-prefixed** so make never echoes a secret: `login_to_gh` (line 136),
  `docker_npm_release`'s `npm config set … _authToken` (166), the `docker run -e …` wrappers, and the easy-to-miss
  credential sub-make `@make release $(info)` in `run_release_with_devops` (182). Do not regress this.
- **Codegen must run TTY-free.** `src/package.json`'s `build` uses plain `docker run` — never `-it`, which fails
  non-interactively with `cannot attach stdin to a TTY-enabled container`. `-it` belongs only on the interactive
  `debug` entry point.
- This package publishes as **`@ondewo/s2t-client-typescript`** (single `ondewo`, unlike
  `@ondewo/ondewo-nlu-client-js`). Check `src/package.json`'s `name` before querying npm.
- **`RELEASE.md` is the authoritative changelog and the release tag holds the complete history.** A careless
  `--all-files` pass or manual "dedup" can drop `## Release … X.Y.Z` headings; if that happens, restore `RELEASE.md`
  **and** `src/RELEASE.md` from the latest release tag. The history intentionally repeats `6.0.0` four times, which
  is why `MD024` is disabled.
