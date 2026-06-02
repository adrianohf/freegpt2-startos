import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.30.0:0',
  releaseNotes: {
    en_US: 'Bumps Ollama → 0.30.0.',
    es_ES: 'Actualiza Ollama → 0.30.0.',
    de_DE: 'Aktualisiert Ollama → 0.30.0.',
    pl_PL: 'Aktualizuje Ollama → 0.30.0.',
    fr_FR: 'Met à niveau Ollama → 0.30.0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
