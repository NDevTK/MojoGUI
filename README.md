# MojoJS Security Research GUI

A no-code web-based GUI for Chromium MojoJS security research with automated binding generation.

![MojoJS Research GUI](https://img.shields.io/badge/MojoJS-Research%20GUI-6366f1?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## Features

- 🔍 **Interface Browser** - Search and browse all available Mojo interfaces
- 📝 **No-Code Parameter Forms** - Auto-generated forms for method parameters
- 🕵️ **Mojo Interceptor** - Intercept and modify in-flight Mojo messages
- ⚡ **Live Code Generation** - See valid MojoJS code in real-time
- 📋 **One-Click Copy** - Copy generated code to clipboard
- 🚀 **Execute in Browser** - Run code directly when MojoJS is enabled
- 🔄 **Auto-Updated Bindings** - GitHub Action keeps bindings up-to-date

## Quick Start

### Option 1: GitHub Pages (Recommended)

Visit the hosted version: `https://ndevtk.github.io/MojoGUI`

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
   chrome --enable-blink-features=MojoJS http://localhost:8080
   ```

## Usage

1. **Select an Interface** - Use the sidebar to browse or search for interfaces
2. **Choose a Method** - Click on a method to see its parameters
3. **Configure Parameters** - Fill in the auto-generated form fields
4. **Intercept Traffic** - Toggle interception to inspect requests in the Interceptor Panel
5. **Copy or Execute** - Get the generated code or run it directly

## Enabling MojoJS in Chrome

MojoJS is disabled by default in Chrome. To enable it for security research:

```bash
# Windows
chrome.exe --enable-blink-features=MojoJS

# macOS
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --enable-blink-features=MojoJS

# Linux
google-chrome --enable-blink-features=MojoJS
```

> ⚠️ **Warning**: Only enable MojoJS for security research. Do not browse untrusted websites with this flag enabled.

## GitHub Action - Auto-Update Bindings

The repository includes a GitHub Action that automatically:

1. Runs weekly (or on-demand)
2. Sparse checkouts `.mojom` files from Chromium source
3. Parses the `.mojom` files and generates JavaScript bindings
4. Creates an index of all available interfaces
5. Commits the updated bindings

### Manual Trigger

Go to **Actions** → **Update Mojo JS Bindings** → **Run workflow**

## Project Structure

```
MojoGUI/
├── index.html          # Main HTML file
├── index.css           # Styling with glassmorphism theme
├── app.js              # Core application logic
├── interceptor.js      # Traffic interception & proxy logic
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
