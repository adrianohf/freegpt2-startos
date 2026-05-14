import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_23_4_0 = VersionInfo.of({
  version: '0.23.4:0',
  releaseNotes: {
    en_US: `**Bumps**

- Ollama → 0.23.4
- start-sdk → 1.5.1`,
    es_ES: `**Cambios de versión**

- Ollama → 0.23.4
- start-sdk → 1.5.1`,
    de_DE: `**Versionssprünge**

- Ollama → 0.23.4
- start-sdk → 1.5.1`,
    pl_PL: `**Aktualizacje wersji**

- Ollama → 0.23.4
- start-sdk → 1.5.1`,
    fr_FR: `**Mises à niveau**

- Ollama → 0.23.4
- start-sdk → 1.5.1`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
