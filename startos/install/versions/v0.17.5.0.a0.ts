import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_17_5_0_a0 = VersionInfo.of({
  version: '0.17.5:0-alpha.0',
  releaseNotes: {
    en_US: 'Update to Ollama 0.17.5 and StartOS SDK beta.55',
    es_ES: 'Actualización a Ollama 0.17.5 y StartOS SDK beta.55',
    de_DE: 'Update auf Ollama 0.17.5 und StartOS SDK beta.55',
    pl_PL: 'Aktualizacja do Ollama 0.17.5 i StartOS SDK beta.55',
    fr_FR: 'Mise à jour vers Ollama 0.17.5 et StartOS SDK beta.55',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
