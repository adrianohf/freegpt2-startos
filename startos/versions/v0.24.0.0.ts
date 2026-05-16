import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_24_0_0 = VersionInfo.of({
  version: '0.24.0:0',
  releaseNotes: {
    en_US: `**Bumps**

- Ollama → 0.24.0
- start-sdk → 1.5.2`,
    es_ES: `**Cambios de versión**

- Ollama → 0.24.0
- start-sdk → 1.5.2`,
    de_DE: `**Versionssprünge**

- Ollama → 0.24.0
- start-sdk → 1.5.2`,
    pl_PL: `**Aktualizacje wersji**

- Ollama → 0.24.0
- start-sdk → 1.5.2`,
    fr_FR: `**Mises à niveau**

- Ollama → 0.24.0
- start-sdk → 1.5.2`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
