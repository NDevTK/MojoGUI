# Mojo Security Research: Continuous Autonomous Discovery

## Objective

Autonomously discover and analyze Chromium Mojo interfaces for security vulnerabilities, focusing on:

- Sandbox escapes (renderer -> browser/GPU/etc.)
- Cross-origin data leaks
- Memory corruption (UAF, OOB, etc.)
- Logic flaws in privileged services

**OUT OF SCOPE**: User gesture / User activation bypasses.

## Autonomous Discovery Loop

1.  **Enumeration**: Use `list_interfaces` to find potential targets.
2.  **Selection**: Use `check_research_idea` and `get_research_progress` to prioritize interfaces.
3.  **Targeting**: Add promising interfaces to the tracking system using `add_target`.
4.  **Analysis**: Use `get_interface_details` and `search_chromium_code` to understand the attack surface.
5.  **Testing**: Execute MojoJS via `call_method` never `run_javascript_fragile`.
6.  **Persistence**: Record ALL attempts and findings using `log_research_progress`.
7.  **Self-Correction**: Log capability gaps with `log_capability_gap` if tooling fails.

## Learning System & Targets

Research priorities ("Current Targets") are managed via the learning system tools.
Your encouraged to imporve this system via code modification.

- Use `get_research_progress` to see active targets and coverage.
- Use `add_target` to queue new interfaces for research.
- High-priority modules: `storage.mojom`, `network.mojom`, `blink.mojom` (Host/Manager interfaces).

## MCP & Environment Management

**IMPORTANT**: If any modifications are made to the MCP server code (`src/*.js`):

1.  **Stop**: Immediately inform the user.
2.  **Request Reload**: Ask the user to **reload the MCP server and the MojoGUI website**.
3.  **Verify**: Do not continue research until the reload is confirmed, as code changes will not be reflected in the running instance.
