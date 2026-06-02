import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.30.0:0',
  releaseNotes: {
    en_US: `**Ollama → 0.30.0**

Adds the llama.cpp inference backend alongside the MLX engine: broader hardware support, GGUF models from Hugging Face, and faster performance on NVIDIA GPUs.

**Please note**

- This update cannot be rolled back. Once 0.30.0 is installed you cannot downgrade to 0.24.0.
- \`nomic-embed-text\` now converts inputs to lowercase (per its model card); embeddings may differ from earlier versions.
- \`llama3.2-vision\` and \`laguna-xs.2\` are not yet supported on Linux.`,
    es_ES: `**Ollama → 0.30.0**

Añade el motor de inferencia llama.cpp junto al motor MLX: mayor compatibilidad de hardware, modelos GGUF de Hugging Face y mejor rendimiento en GPU NVIDIA.

**Ten en cuenta**

- Esta actualización no se puede revertir. Una vez instalada la 0.30.0, no podrás volver a la 0.24.0.
- \`nomic-embed-text\` ahora convierte las entradas a minúsculas (según la ficha del modelo); los embeddings pueden diferir de versiones anteriores.
- \`llama3.2-vision\` y \`laguna-xs.2\` aún no son compatibles en Linux.`,
    de_DE: `**Ollama → 0.30.0**

Ergänzt die MLX-Engine um die llama.cpp-Inferenz-Engine: breitere Hardware-Unterstützung, GGUF-Modelle von Hugging Face und schnellere Leistung auf NVIDIA-GPUs.

**Bitte beachten**

- Dieses Update kann nicht rückgängig gemacht werden. Nach der Installation von 0.30.0 ist kein Downgrade auf 0.24.0 mehr möglich.
- \`nomic-embed-text\` wandelt Eingaben jetzt in Kleinbuchstaben um (gemäß Modellkarte); Embeddings können von früheren Versionen abweichen.
- \`llama3.2-vision\` und \`laguna-xs.2\` werden unter Linux noch nicht unterstützt.`,
    pl_PL: `**Ollama → 0.30.0**

Dodaje silnik inferencji llama.cpp obok silnika MLX: szersze wsparcie sprzętowe, modele GGUF z Hugging Face oraz wyższą wydajność na kartach NVIDIA.

**Uwaga**

- Tej aktualizacji nie można cofnąć. Po zainstalowaniu 0.30.0 nie będzie można wrócić do 0.24.0.
- \`nomic-embed-text\` zamienia teraz dane wejściowe na małe litery (zgodnie z kartą modelu); osadzenia mogą różnić się od wcześniejszych wersji.
- \`llama3.2-vision\` i \`laguna-xs.2\` nie są jeszcze obsługiwane w systemie Linux.`,
    fr_FR: `**Ollama → 0.30.0**

Ajoute le moteur d'inférence llama.cpp en complément du moteur MLX : prise en charge matérielle élargie, modèles GGUF de Hugging Face et meilleures performances sur GPU NVIDIA.

**À noter**

- Cette mise à jour est irréversible. Une fois la 0.30.0 installée, vous ne pourrez pas revenir à la 0.24.0.
- \`nomic-embed-text\` met désormais les entrées en minuscules (conformément à la fiche du modèle) ; les embeddings peuvent différer des versions précédentes.
- \`llama3.2-vision\` et \`laguna-xs.2\` ne sont pas encore pris en charge sous Linux.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
