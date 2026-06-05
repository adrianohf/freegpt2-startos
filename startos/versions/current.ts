import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.30.5:0',
  releaseNotes: {
    en_US:
      'Bumps Ollama → 0.30.5: adds gemma4 model support, refreshes the bundled llama.cpp, and fixes a gemma4:12b crash.',
    es_ES:
      'Actualiza Ollama → 0.30.5: añade compatibilidad con el modelo gemma4, actualiza el llama.cpp incluido y corrige un fallo de gemma4:12b.',
    de_DE:
      'Aktualisiert Ollama → 0.30.5: ergänzt Unterstützung für das gemma4-Modell, aktualisiert das mitgelieferte llama.cpp und behebt einen gemma4:12b-Absturz.',
    pl_PL:
      'Aktualizuje Ollama → 0.30.5: dodaje obsługę modelu gemma4, odświeża dołączony llama.cpp i naprawia awarię gemma4:12b.',
    fr_FR:
      'Met à jour Ollama → 0.30.5 : ajoute la prise en charge du modèle gemma4, met à jour le llama.cpp intégré et corrige un plantage de gemma4:12b.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
