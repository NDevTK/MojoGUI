# Vulnerability
Exposing complex AI model interactions (AIManager) directly to renderers via Mojo.

# Learning
The `blink::mojom::AIManager` interface allows renderers to create language models, summarizers, and other AI components. This involves complex parsing of prompts and potentially large resource usage (GPU/NPU) in a privileged or separate process. This is a significant new attack surface compared to legacy interfaces. It is bound in `content/browser/browser_interface_binders.cc` for frames.

# Prevention
Audit Mojo interfaces exposed to frames aggressively. Prioritize fuzzing and security review for new, complex features like On-Device AI.
