import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.30.9:0',
  releaseNotes: {
    en_US:
      'Bumps Ollama → 0.30.9: adds support for the Cohere2Moe architecture, fixes the LFM2 parser/renderer when no thinking is emitted, fixes `ollama launch claude` and other agent use cases that only output a single token, and now returns an error when a single message exceeds the context window. Full notes: https://github.com/ollama/ollama/releases/tag/v0.30.9',
    es_ES:
      'Actualiza Ollama → 0.30.9: añade compatibilidad con la arquitectura Cohere2Moe, corrige el analizador/renderizador LFM2 cuando no se emite razonamiento, corrige `ollama launch claude` y otros casos de uso de agentes que solo generaban un único token, y ahora devuelve un error cuando un solo mensaje supera la ventana de contexto. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.30.9',
    de_DE:
      'Aktualisiert Ollama → 0.30.9: ergänzt Unterstützung für die Cohere2Moe-Architektur, behebt den LFM2-Parser/Renderer, wenn kein Thinking ausgegeben wird, behebt `ollama launch claude` und andere Agenten-Anwendungsfälle, die nur ein einzelnes Token ausgaben, und gibt nun einen Fehler zurück, wenn eine einzelne Nachricht das Kontextfenster überschreitet. Vollständige Hinweise: https://github.com/ollama/ollama/releases/tag/v0.30.9',
    pl_PL:
      'Aktualizuje Ollama → 0.30.9: dodaje obsługę architektury Cohere2Moe, naprawia parser/renderer LFM2, gdy nie jest emitowane myślenie, naprawia `ollama launch claude` i inne zastosowania agentów, które generowały tylko pojedynczy token, oraz zwraca teraz błąd, gdy pojedyncza wiadomość przekracza okno kontekstu. Pełne informacje: https://github.com/ollama/ollama/releases/tag/v0.30.9',
    fr_FR:
      'Met à jour Ollama → 0.30.9 : ajoute la prise en charge de l’architecture Cohere2Moe, corrige l’analyseur/rendu LFM2 lorsqu’aucun raisonnement n’est émis, corrige `ollama launch claude` et d’autres cas d’usage d’agents qui ne produisaient qu’un seul jeton, et renvoie désormais une erreur lorsqu’un message dépasse la fenêtre de contexte. Notes complètes : https://github.com/ollama/ollama/releases/tag/v0.30.9',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
