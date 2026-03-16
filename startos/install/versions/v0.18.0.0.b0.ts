import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_18_0_0_b0 = VersionInfo.of({
  version: '0.18.0:0-beta.0',
  releaseNotes: {
    en_US: 'Update Ollama to 0.18.0',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
