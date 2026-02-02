# Security Learnings

## Vulnerability: Exposed High-Risk Mojo Interfaces
- **Learning**: Mojo interfaces bound in `PopulateFrameBinders` (renderer-exposed) like `WebNNContextProvider` and `FileSystemAccessManager` are critical attack surfaces due to complexity and privilege level.
- **Prevention**: Maintain a strict `awards.json` registry of these interfaces and audit their bindings regularly using `chromium-helper`.
