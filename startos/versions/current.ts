import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.30.8:0',
  releaseNotes: {
    en_US:
      'Bumps Ollama → 0.30.8: improves prompt caching for better KV cache reuse, fixes `ollama launch` picking the wrong provider, and adds more stable MLX inference plus better recurrent-model support. Full notes: https://github.com/ollama/ollama/releases/tag/v0.30.8',
    es_ES:
      'Actualiza Ollama → 0.30.8: mejora el almacenamiento en caché de prompts para reutilizar mejor la caché KV, corrige que `ollama launch` eligiera el proveedor equivocado y añade una inferencia MLX más estable y mejor compatibilidad con modelos recurrentes. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.30.8',
    de_DE:
      'Aktualisiert Ollama → 0.30.8: verbessert das Prompt-Caching für bessere Wiederverwendung des KV-Caches, behebt die falsche Anbieterauswahl bei `ollama launch` und bietet stabilere MLX-Inferenz sowie bessere Unterstützung rekurrenter Modelle. Vollständige Hinweise: https://github.com/ollama/ollama/releases/tag/v0.30.8',
    pl_PL:
      'Aktualizuje Ollama → 0.30.8: usprawnia buforowanie promptów dla lepszego wykorzystania pamięci podręcznej KV, naprawia wybór niewłaściwego dostawcy przez `ollama launch` oraz zapewnia stabilniejszą inferencję MLX i lepszą obsługę modeli rekurencyjnych. Pełne informacje: https://github.com/ollama/ollama/releases/tag/v0.30.8',
    fr_FR:
      'Met à jour Ollama → 0.30.8 : améliore la mise en cache des prompts pour une meilleure réutilisation du cache KV, corrige la sélection du mauvais fournisseur par `ollama launch` et apporte une inférence MLX plus stable ainsi qu’une meilleure prise en charge des modèles récurrents. Notes complètes : https://github.com/ollama/ollama/releases/tag/v0.30.8',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
