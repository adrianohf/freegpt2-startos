import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.30.7:0',
  releaseNotes: {
    en_US:
      'Bumps Ollama → 0.30.7: aligns the OpenAI-compatible API model list with available model tags and improves `ollama launch` support. Full notes: https://github.com/ollama/ollama/releases/tag/v0.30.7',
    es_ES:
      'Actualiza Ollama → 0.30.7: alinea la lista de modelos de la API compatible con OpenAI con las etiquetas de modelos disponibles y mejora la compatibilidad de `ollama launch`. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.30.7',
    de_DE:
      'Aktualisiert Ollama → 0.30.7: gleicht die Modellliste der OpenAI-kompatiblen API mit den verfügbaren Modell-Tags ab und verbessert die `ollama launch`-Unterstützung. Vollständige Hinweise: https://github.com/ollama/ollama/releases/tag/v0.30.7',
    pl_PL:
      'Aktualizuje Ollama → 0.30.7: dopasowuje listę modeli API zgodnego z OpenAI do dostępnych tagów modeli i poprawia obsługę `ollama launch`. Pełne informacje: https://github.com/ollama/ollama/releases/tag/v0.30.7',
    fr_FR:
      'Met à jour Ollama → 0.30.7 : aligne la liste des modèles de l’API compatible OpenAI sur les étiquettes de modèles disponibles et améliore la prise en charge de `ollama launch`. Notes complètes : https://github.com/ollama/ollama/releases/tag/v0.30.7',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
