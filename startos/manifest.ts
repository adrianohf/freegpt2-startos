import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'ollama',
  title: 'Ollama',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Start9Labs/ollama-startos',
  upstreamRepo: 'https://github.com/ollama/ollama',
  supportSite: 'https://docs.ollama.com/',
  marketingSite: 'https://ollama.com/',
  donationUrl: null,
  docsUrl: 'https://docs.ollama.com/',
  description: {
    short: 'Chat & build with open models',
    long: 'Get up and running with self-hosted, open source large language models (LLMs)',
  },
  volumes: ['main'],
  images: {
    ollama: {
      source: {
        dockerTag: 'ollama/ollama:0.13.5',
      },
    },
  },
  // @TODO
  hardwareRequirements: {},
  dependencies: {},
})
