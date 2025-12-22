import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_13_5_0_a0 = VersionInfo.of({
  version: '0.13.5:0-alpha.0',
  releaseNotes: 'initial release for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
