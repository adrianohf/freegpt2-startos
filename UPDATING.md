# Updating the upstream version

Ollama ships as a prebuilt upstream Docker image; no source build or submodule is involved. The version pin lives in the manifest.

## Determining the upstream version

- **Ollama** ([`ollama/ollama`](https://github.com/ollama/ollama)) — latest GitHub release:

  ```bash
  gh release view -R ollama/ollama --json tagName -q .tagName
  ```

  Cross-check that the matching `-rocm` tag has been published to Docker Hub (the rocm variant lags occasionally):

  ```bash
  curl -fsSL "https://hub.docker.com/v2/repositories/ollama/ollama/tags?page_size=20&ordering=last_updated" | jq -r '.results[].name'
  ```

  Pinned in `startos/manifest/index.ts` as `imageConfigs.generic.source.dockerTag` (`ollama/ollama:<version>`) and `imageConfigs.rocm.source.dockerTag` (`ollama/ollama:<version>-rocm`).

## Applying the bump

- **`startos/manifest/index.ts`** — update both `dockerTag` values in `imageConfigs`:
  - `generic.source.dockerTag` → `ollama/ollama:<new version>`
  - `rocm.source.dockerTag` → `ollama/ollama:<new version>-rocm`
- **`startos/versions/`** — rename the existing version file (e.g. `v0.23.4.0.ts` → `v<new version>.0.ts`), update its exported `version` (`'<new version>:0'`) and `releaseNotes` (all locales) to reflect the bump. Re-export it from `startos/versions/index.ts`.
