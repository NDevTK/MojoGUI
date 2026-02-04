# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

This project allows direct interaction with Chromium's Mojo IPC system, which is a sensitive and privileged interface. Security is a top priority.

If you have discovered a security vulnerability in this project (e.g., in the GUI, MCP server, or associated scripts), please report it privately.

**DO NOT** create a public GitHub issue for security vulnerabilities.

Please send an email to the maintainers or use GitHub's private vulnerability reporting feature if enabled.

## Security Considerations for Researchers

This tool is designed for **security research purposes only**.

- **MojoJS Exposure**: Enabling `MojoJS` and `MojoJSTest` features in Chrome exposes privileged interfaces to the renderer.
- **Isolation**: Always run this tool in a dedicated browser instance or profile. Do not browse untrusted websites with MojoJS enabled.
- **Privacy**: The `capture_chrome.py` script attempts to capture the MojoGUI window. While we have implemented filters to avoid capturing other windows, please ensure no sensitive information is visible in other tabs of the same browser process.
- **Network**: The MCP server and MojoGUI are intended for local use. Do not expose them to the public internet.

## Sentinel's Journal

We maintain a security journal to track critical security learnings and improvements. See `.jules/sentinel.md` (if available) for more details.
