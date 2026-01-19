# MojoJS Security Research GUI

A no-code web-based GUI for Chromium MojoJS security research with automated binding generation.

![MojoJS Research GUI](https://img.shields.io/badge/MojoJS-Research%20GUI-6366f1?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> [!WARNING]
> Associated interfaces like LocalFrameHost are not supported without exposed handles <https://github.com/ndevtk/chromiumdebug>

## Features

- 🔍 **Interface Browser** - Search and browse all available Mojo interfaces
- 📝 **No-Code Parameter Forms** - Auto-generated forms for method parameters
- 🕵️ **Mojo Interceptor** - Block, Log, and Modify requests and responses
- 🚥 **Traffic Control** - Toggle between "Blocking" (halt execution) and "Logging" (passive monitor) modes
- 📈 **Version Tracker** - Detect and log interface changes across Chrome versions
- ⚡ **Live Code Generation** - See valid MojoJS code in real-time
- 📋 **One-Click Copy** - Copy generated code to clipboard
- 🚀 **Execute in Browser** - Run code directly when MojoJS is enabled
- 👋 **Interactive Guide** - Built-in welcome and setup assistance for researchers
- 🔄 **Auto-Updated Bindings** - GitHub Action keeps bindings up-to-date

## Quick Start

### Option 1: GitHub Pages (Recommended)

Visit the hosted version: <https://ndevtk.github.io/MojoGUI>

### Option 2: Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/ndevtk/MojoGUI.git
   cd MojoGUI
   ```

2. Serve the files (any static server works):
   ```bash
   # Using Python
   python -m http.server 8080
   
   # Using Node.js
   npx serve .
   ```

3. Open in Chrome with MojoJS enabled:
   ```bash
   chrome --enable-blink-features=MojoJS,MojoJSTest http://localhost:8080
   ```

## Usage

1. **Select an Interface** - Use the sidebar to browse or search for interfaces
2. **Choose a Method** - Click on a method to see its parameters
3. **Configure Parameters** - Fill in the auto-generated form fields
4. **Intercept Traffic**:
   - **Blocking Mode**: Halts execution, allowing you to modify parameters before **Resuming** or **Dropping**.
   - **Logging Mode**: Passively logs traffic to the history without blocking.
   - **Response Interception**: Enable this to pause execution when a response is received, allowing you to modify return values.
5. **Replay Requests** - Re-send captured requests with modified parameters
6. **Copy or Execute** - Get the generated code or run it directly

## Enabling MojoJS in Chrome

MojoJS is disabled by default in Chrome. To enable it for security research:

```bash
# Windows
chrome.exe --enable-blink-features=MojoJS,MojoJSTest

# macOS
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --enable-blink-features=MojoJS,MojoJSTest

# Linux
google-chrome --enable-blink-features=MojoJS,MojoJSTest
```

> ⚠️ **Warning**: Only enable MojoJS for security research. Do not browse untrusted websites with this flag enabled.

## GitHub Action - Auto-Update Bindings

The repository includes a GitHub Action that automatically:

1. Runs weekly (or on-demand)
2. Sparse checkouts `.mojom` files from Chromium source
3. Parses `BUILD.gn` files to detect per-interface scrambling settings
4. Generates JavaScript bindings with correct ordinal scrambling
5. Creates an index of all available interfaces
6. Commits the updated bindings

### Ordinal Scrambling

Chromium scrambles Mojo method ordinals in official builds using a version-based salt. The bindings automatically:

- Detect browser version via `navigator.userAgentData.getHighEntropyValues`
- Compute scrambled ordinals using `SHA256(salt + InterfaceName + counter)`
- Respect per-interface `scramble_message_ids = false` settings from BUILD.gn

> 💡 **Troubleshooting**: If you see "Message has invalid flags" or crashes, the version may be mismatched. Check `window.mojoVersion` in the console.

### Manual Trigger

Go to **Actions** → **Update Mojo JS Bindings** → **Run workflow**

## Project Structure

```
MojoGUI/
├── index.html          # Main HTML file
├── index.css           # Styling with glassmorphism theme
├── app.js              # Core application logic
├── interceptor.js      # Traffic interception & proxy logic
├── welcome_manager.js  # Interactive welcome & setup UI
├── version_tracker.js  # LocalStorage snapshot & diff logic
├── parser.js           # .mojom.js file parser
├── bindings/
│   ├── index.js        # Bindings loader module
│   ├── index.json      # Interface metadata (auto-generated)
│   └── *.mojom.js      # JavaScript bindings (auto-generated)
└── .github/
    └── workflows/
        └── update-mojo-bindings.yml  # GitHub Action
```

## Security Considerations

This tool is designed for **security research purposes only**. MojoJS provides direct access to Chromium's IPC system, which is a privileged interface.

- Never enable MojoJS when browsing untrusted websites
- The generated code may interact with sensitive browser APIs
- Always use in an isolated environment for testing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - See [LICENSE](LICENSE) for details.

## Acknowledgments

- [Chromium Project](https://www.chromium.org/) - For Mojo IPC system
- Security researchers who document MojoJS patterns
