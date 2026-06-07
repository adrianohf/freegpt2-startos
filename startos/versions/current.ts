import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.30.6:0',
  releaseNotes: {
    en_US:
      'Bumps Ollama → 0.30.6: adds `ollama launch omp` integration with Oh My Pi and improves MLX embedding quantization on Apple Silicon.',
    es_ES:
      'Actualiza Ollama → 0.30.6: añade la integración de `ollama launch omp` con Oh My Pi y mejora la cuantización de embeddings MLX en Apple Silicon.',
    de_DE:
      'Aktualisiert Ollama → 0.30.6: ergänzt die `ollama launch omp`-Integration mit Oh My Pi und verbessert die MLX-Embedding-Quantisierung auf Apple Silicon.',
    pl_PL:
      'Aktualizuje Ollama → 0.30.6: dodaje integrację `ollama launch omp` z Oh My Pi i poprawia kwantyzację osadzeń MLX na Apple Silicon.',
    fr_FR:
      'Met à jour Ollama → 0.30.6 : ajoute l’intégration de `ollama launch omp` avec Oh My Pi et améliore la quantification des embeddings MLX sur Apple Silicon.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
