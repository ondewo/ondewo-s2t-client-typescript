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

| Path                                                               | Origin                                                                        | Editable?       |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------- | --------------- |
| `api/**`, `public-api.js`, `public-api.d.ts`                       | proto-compiler codegen (`make build`)                                         | no              |
| `src/ondewo-s2t-api/`, `ondewo-proto-compiler/`                    | git submodules (codegen inputs)                                               | pin only        |
| `auth/offlineTokenProvider.ts` (+ `.spec.ts`)                      | hand-written                                                                  | yes             |
| `examples/ts-client.ts` (+ `.spec.ts`), `examples/environment.env` | hand-written                                                                  | yes             |
| root `README.md`, `RELEASE.md`                                     | **copies** of `src/README.md` / `src/RELEASE.md`, overwritten by `make build` | edit `src/` too |

The hand-written surface is exactly `auth/**` + `examples/**`. Everything in the sections below is about those.

## Tests and the coverage gate

```shell
npm install --no-audit --no-fund   # exactly what CI runs
npm test                           # the heart of the CI gate
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

- Currently pinned to **5.14.0** (`b71f8ed4575ecc4ee8084389a075514acac61ff4`), Makefile line 19 `tags/5.14.0`.
- **Keep the Makefile variable and the gitlink on the same tag.** `make check_out_correct_submodule_versions`
  checks out the **Makefile** value into the submodule and `make release` then `git add`s it, so a Makefile pin
  older than the gitlink silently rewrites the gitlink backwards. That is not hypothetical here: `d4da575`
  ("Update proto compiler dependency to version 5.13.0") moved the gitlink to `205429a` (5.13.0) while the
  Makefile still said `tags/5.10.0`, and the next release commit `23f4ed9` ("Preparing for Release 7.4.1") put the
  gitlink back to `afce16f` (5.10.0). Bumping only one of the two is how the repo lost 5.12.0 and 5.13.0.
- A pin move changes which image `make build` would build; it rewrites **no** committed stub. Never write
  "regenerated with proto-compiler X" in `RELEASE.md` unless `make build` actually ran. The 5.11.0–5.14.0 payload
  (Angular/JS/Node/TS codegen fixes, incl. proto3 explicit presence for `optional` scalars) reaches this repo only
  through a regeneration — the committed `api/**` stubs still come from the 5.10.0 generator.
- Two things the upstream `update_proto_compiler_dependency.sh` also touches are **no-ops here** and must not appear
  as diffs: `Dockerfile.utils` already has `ENV NODE_VERSION=24.14.0` (what 5.14.0 declares), and the jq dependency
  sync of `src/package.json` against `typescript/image-data/package.json@5.14.0` changes nothing (the only
  overlapping key, `@types/node`, already reads `^22.15.27`).

## Pre-commit — hook order is load-bearing

`.pre-commit-config.yaml` runs the language-agnostic set only (markdownlint-cli2, pre-commit-hooks hygiene,
conventional-pre-commit, giticket); eslint/prettier stay with husky.

- **conventional-pre-commit MUST be declared BEFORE giticket** (fixed on master in `2881d7f`; the block carries a
  comment saying so — do not reorder it back). Both are `commit-msg`-stage hooks and pre-commit runs repos in
  declaration order. giticket rewrites the subject to `[OND231-624] chore: probe`, which is no longer valid
  Conventional Commits, so with giticket first every commit on a ticket branch failed and could only be made with
  `--no-verify`. Re-verified both directions against the current config with
  `pre-commit run conventional-pre-commit --hook-stage commit-msg`: it passes on `chore: probe` and exits 1 on the
  decorated `[OND231-624] chore: probe`.
- **markdownlint MD053 must stay disabled** in `.markdownlint-cli2.yaml`. Its auto-fix DELETES the
  `[comment]: <> (START/END OF GITHUB README)` reference-definition markers that `make build` slices the published
  README on (`perl … /START OF GITHUB README/../END OF GITHUB README/`, currently lines 109–194 of `src/README.md`).
- `.husky/pre-commit` must keep skipping `pre-commit run` when `.pre-commit-config.yaml` is unstaged.
  `make run_precommit_hooks` invokes `.husky/pre-commit` **directly** during the release, the codegen leaves the
  config unstaged, and `pre-commit run` would abort with **"Your pre-commit configuration is unstaged"**.
- `.husky/pre-commit` runs `make prettier PRETTIER_WRITE=-w` **before** `pre-commit run`, so anything prettier
  rewrites is left unstaged and deadlocks that chained run. Master's answer (`3141936`) is to keep the tracked files
  prettier-clean rather than to ignore them, so **run `make prettier` before committing**. `.prettierignore` covers
  only what prettier must not touch: `README.md` + `RELEASE.md` (prettier turns the `[comment]: <> (...)` slice
  markers into `<> '...'`), `package.json` / `package-lock.json` / the generated trees, and `coverage/` +
  `.nyc_output/` (c8 output the `-w` pass would otherwise rewrite). `CLAUDE.md`, `.ci-package.json`,
  `.pre-commit-config.yaml` and `.markdownlint-cli2.yaml` are **not** ignored — prettier and markdownlint-cli2 do
  not fight over them (verified: `prettier --check ./` and `uvx pre-commit run --all-files` are both clean on the
  same tree). Never wrap an inline `` `code` `` span across a line break in markdown; prettier dedents the
  continuation line and mangles it.
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
- **The 7.4.1 `RELEASE.md` entry overstates what shipped, and the entry is history — do not rewrite it.** It claims
  "Regenerated with ondewo-proto-compiler 5.13.0" and that "the hand-written `auth/` surface is now re-exported from
  the generated public-api barrel". Neither reached the tree: no commit between `8b9c1f2` and `23f4ed9` touches
  `api/**` or `public-api.*`, and `public-api.d.ts` still re-exports only the four generated stub modules. The cause
  is the pin trap above — `build` runs `check_out_correct_submodule_versions` **first**, so the codegen ran against
  the Makefile's `tags/5.10.0`, not the 5.13.0 gitlink. Consumers must keep deep-importing
  `@ondewo/s2t-client-typescript/auth/offlineTokenProvider` (which is what `README.md` documents) until a real
  `make build` runs on the 5.14.0 pin.

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
- **Every token-bearing recipe line is `@`-prefixed** so make never echoes a secret: `login_to_gh` (line 135),
  `docker_npm_release`'s `npm config set … _authToken` (165), the `docker run -e …` wrappers (151, 159), and the
  easy-to-miss credential sub-make `@make release $(info)` in `run_release_with_devops` (181). Do not regress this.
- **Codegen must run TTY-free.** `src/package.json`'s `build` uses plain `docker run` — never `-it`, which fails
  non-interactively with `cannot attach stdin to a TTY-enabled container`. `-it` belongs only on the interactive
  `debug` entry point.
- This package publishes as **`@ondewo/s2t-client-typescript`** (single `ondewo`, unlike
  `@ondewo/ondewo-nlu-client-js`). Check `src/package.json`'s `name` before querying npm.
- **`RELEASE.md` is the authoritative changelog and the release tag holds the complete history.** A careless
  `--all-files` pass or manual "dedup" can drop `## Release … X.Y.Z` headings; if that happens, restore `RELEASE.md`
  **and** `src/RELEASE.md` from the latest release tag. The history intentionally repeats `6.0.0` four times, which
  is why `MD024` is disabled.

## Releasing: preflight and the traps that have actually bitten

Written after a release program across every ONDEWO client in one session. Each item below
cost real time or a broken artefact; every statement is derived from THIS repo's Makefile.

### Before you touch the version, check the released tag is in `master`

Releases here are cut from a `release/<version>` branch and are **not always merged back**, so
`master` can be missing work that is already published — and because a later version number
sorts above the unmerged one, a consumer upgrading silently loses it. The ondewo-nlu-client-python
7.1.0 release was exactly this: it shipped from a `master` that had never seen 7.0.5's
offline-token hand-off, so PyPI's newest release was a regression against its predecessor.

```bash
latest=$(git tag --sort=-v:refname | head -1)
git merge-base --is-ancestor "$latest" master && echo "in master" || echo "NOT in master -- merge first"
```

A fast-forward (`git merge --ff-only <tag>`) is the common case. A true merge needs care: resolve
metadata toward `master` and keep BOTH release-note sections, newest first — a reader upgrading
from the older line still needs the older entry.

### `git add` on a dirty submodule stages the WRONG commit

This repo has submodules (`ondewo-proto-compiler`, `src/ondewo-s2t-api`). If a submodule's working
tree is dirty, `git add <submodule>` stages **its current HEAD**, not the pointer you resolved
during a merge — silently regressing it to an older commit. `git checkout master -- <submodule>`
fixes the index but the next `git add` re-breaks it. Move the working tree instead:

```bash
want=$(git ls-tree master <submodule> | awk '{print $3}')
git -C <submodule> checkout -q "$want" && git add <submodule>
```

### The release notes are sliced by an EXACTLY-CASED heading

`CURRENT_RELEASE_NOTES` slices `RELEASE.md` with a perl range. In THIS repo the opening
pattern is, verbatim:

```text
Release ONDEWO S2T Typescript Client ${ONDEWO_S2T_VERSION}
```

So the heading of a new entry must read exactly `## Release ONDEWO S2T Typescript Client <version>`. **This wording is
not consistent across the ONDEWO repos** — some say `... <Name> Client`, some `... Client
<Name>` with the words reversed, the API repos say `... API` with no `Client` at all, and the
casing varies (`Js`, `Nodejs`, `Typescript`, `Survey`). Do not carry a heading over from a
sibling repo. Copy the PREVIOUS entry in this file and change only the version, or read the
pattern above out of the Makefile.

A heading that does not match yields an **empty slice**, and the GitHub release is then
created with empty notes or fails outright. Verify before releasing:

```bash
grep -c '^## Release ONDEWO S2T Typescript Client ' RELEASE.md     # must be >= 1 for your new version
```

### `src/RELEASE.md` is the source of truth; the root file is GENERATED

The build runs `cp src/RELEASE.md .`, so an edit to the root `RELEASE.md` is **discarded by
the next build**. Write the entry in `src/RELEASE.md` (and copy it to the root if you want to
read it before building). This is silent: the release completes and the notes are simply gone.

### Publish order decides how a partial failure is recovered

`make release` in this repo runs:

1. `publish_npm_via_docker`
2. `create_release_branch`
3. `create_release_tag`
4. `release_to_github_via_docker_image`

The **npm publish happens FIRST**. So a failure in a later step (tag, GitHub release)
leaves the package already published. Do **not** re-run `make ondewo_release` to recover: the
`spc` guard refuses when the branch or tag already exists, and re-publishing the same version
is rejected by the registry. Re-run only the step that failed, passing the credential it needs.

### Verify against the registry, with the REAL package name

This package publishes as **`@ondewo/s2t-client-typescript`**, which is not always the repository name — the JS client
publishes as `@ondewo/ondewo-nlu-client-js` (doubled `ondewo`), so a lookup by repo name returns
a 404 that reads like a failed release. Check the name in the manifest first, then:

```bash
npm view @ondewo/s2t-client-typescript versions --json
```

**An npm publish can be STAGED but not yet served.** Immediately after a publish the registry may
answer 404 for the new version while refusing a re-publish with
`409 Cannot publish over previously staged version`. That is not a failure and the version is
not burned — wait and re-check before bumping to a new number.

### The release prints credentials — read the log BEFORE you scrub it

`make ondewo_release` clones `ondewo-devops-accounts` and passes the registry and GitHub tokens on
the make command line, so they are echoed into the console and into any transcript capturing it.
This is a known and accepted property of the shared release path: do **not** re-plumb the recipe.
Redirect the run to a file, read it through a filter, and shred the file afterwards — and read it
**before** shredding, or a genuine failure is lost with the secrets:

```bash
umask 077; make ondewo_release > /tmp/rel.log 2>&1; echo "RC=$?"
grep -avE 'TOKEN|PASSWORD|USERNAME|_authToken' /tmp/rel.log | tail -20   # read FIRST
shred -u /tmp/rel.log; rm -rf ondewo-devops-accounts                     # then scrub
```

### Run the release from `master`, and check with `git branch --show-current`

A release ends by checking out `release/<version>`, and **nothing checks you out back**. Start the
next release from that leftover checkout and `git commit` + `git push` land on the OLD release
branch: the new `release/<version>` is cut from it, the tag points into it, and `master` never sees
the release at all. Measured on ondewo-csi-client-typescript 5.5.1 -- npm had it, the tag had it,
and `origin/master` was still at 5.5.0. Recovery was a fast-forward (`git merge --ff-only
release/5.5.1`), which worked only because nothing else had moved; a diverged `master` needs a real
merge.

```bash
git branch --show-current            # must print master BEFORE `make ondewo_release`
```

### The release `git add` list is an ALLOW-LIST, so anything outside it ships but is never committed

`make build` writes files the release target then stages from a fixed list of paths. Anything the
build touches that is not on that list reaches the registry and is **absent from the tag of that
same version** -- two different things under one name, with nothing anywhere reporting it.

- **`auth/`** -- the hand-written Keycloak provider and its spec. It is top-level, so `git add src`
  does not cover it. csi-client-js and csi-client-typescript 5.5.1 went to npm carrying the refresh
  fix and tagged a commit without it; 5.5.2 exists only to make the two agree.

- **`README.md`**, which is a BUILD OUTPUT -- `make build` runs `cp src/README.md .`. Anything
  written only in the root copy is destroyed by the next build. The typescript NLU client's
  "Authentication" section lived in git history and nowhere else for exactly that reason; it belongs
  in `src/README.md`, which is the source of truth.

The general check costs nothing:

```bash
git status --porcelain    # MUST be empty after a release; anything left is published-but-uncommitted
```

### `git commit` exits 1 on a clean tree and takes the whole target down with it

If the release content was already committed by hand, `git commit` finds nothing to commit, returns
1, and make abandons the target -- **before** the publish, the branch, the tag and the GitHub
release -- while printing only `nothing to commit, working tree clean`. Read as a build failure it
sends you hunting a compile error that is not there. The line is prefixed with `-` so the step is
advisory; `spc` still refuses an existing branch or tag, so the guard cannot mask a double release.

### Write the RELEASE.md section BEFORE releasing, or the release body is silently empty

`CURRENT_RELEASE_NOTES` slices RELEASE.md between the heading naming this exact version and the next
`*****` separator. No heading means an EMPTY slice, `gh release create -n ""` succeeds, and you get a
release with no notes and no error anywhere. ondewo-nlu-client-js and -typescript 7.1.1 shipped that
way and had to be repaired after the fact.

```bash
cat RELEASE.md | perl -ne 'print if /<the exact heading> <version>/../^\*{5}/' | wc -l   # must be > 0
```

### Verify the three artefacts separately -- they fail independently

GitHub's release API returned 500 twice in one session, leaving the registry and the tag correct and
**no release object at all** (nlu-client-js and -angular 7.1.1); `gh release create` after the fact
repairs it without touching the artefact.
And npm answering `409 Cannot publish over previously staged
version` is NOT a failure -- the publish SUCCEEDED and the registry has not served it yet, so a 404
from `npm view` in the same minute is the same fact from the other side. Do not burn a version
number over it; wait and re-check.

```bash
npm view <pkg> version ; git tag --list <version> ; gh release view <version> --json body --jq '.body|length'
```

### The published artefact can be broken while every source-level check is green

The generated protobuf code and the `google-protobuf` RUNTIME are two separate things, and nothing
in a normal test run compares them. The proto compiler began emitting
`reader.readStringRequireUtf8()`; that method does not exist in `google-protobuf` 3.21.4, and the
manifests pinned `3.21.4` / `^3.21.4` — ranges that can never reach the 4.x line where it was added.
A package built from those two **cannot decode a single string field**, and it shipped that way:
nlu-client-js and -typescript 7.1.0-7.1.2, csi-client-js 5.5.0-5.5.3 and -typescript 5.5.0-5.5.2,
vtsi-client-js and -typescript 8.7.0.

Every source-level signal was green the whole time — the `.proto` files, the generated code, the auth
suite, the 100% coverage gate. Two properties are what made it invisible:

- **A `-js` bundle EMBEDS its runtime.** `api/ondewo_*_api.js` is self-contained, so the defect is
  frozen into the artefact at build time and a consumer's own `google-protobuf` cannot repair it.
- **The committed artefact lags the compiler.** A repository whose bundle predates the compiler change
  looks fine and is still armed: the defect appears at the NEXT release and not before. That is
  exactly what a plain `make build` demonstrated here — 106 new `readStringRequireUtf8` call sites
  against a runtime with none.

**The guard is `tests/bundleStringRoundTrip.spec.js` (or `.spec.ts`): it loads the SHIPPED ARTEFACT
and decodes a string with multi-byte characters.** Only a test at that level can see this. It is
verified falsifiable — against the old pin it reports 0 passed, 2 failed with that exact `TypeError`.

```bash
node --test tests/bundleStringRoundTrip.spec.js     # must pass before any release
grep -m1 google-protobuf src/package.json           # must be on the 4.x line
```

**Two general rules fall out of it.** When a package ships a BUILT artefact, test the artefact and not
only its sources — a green suite over inputs says nothing about the output. And when a generator and a
runtime are pinned separately, a generator upgrade is a runtime decision: check the pair, because
neither side reports the mismatch.
