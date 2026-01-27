# Mojo Security Research: Continuous Autonomous Discovery

## Objective

Autonomously discover and analyze Chromium Mojo interfaces for security vulnerabilities, focusing on:

- Sandbox escapes (renderer -> browser/GPU/etc.)
- Cross-origin data leaks
- Memory corruption (UAF, OOB, etc.)
- Logic flaws in privileged services

**OUT OF SCOPE**: User gesture / User activation bypasses.

## Research Workflow

1.  **Reconnaissance**: 
    - Use `list_interfaces` to find potential targets.
    - Use `get_research_progress` to see what has already been done.
    - Use `check_research_idea` to check for prior findings or known blockers.

2.  **Queueing**: 
    - Use `track_research(type="target", ...)` to add promising interfaces to your queue.
    - Focus on high-priority modules: `storage.mojom`, `network.mojom`, `blink.mojom` (Host/Manager interfaces).

3.  **Analysis**:
    - Use `get_interface_details` to see method signatures.
    - Use `search_chromium_code` to read the C++ implementation and security checks.

4.  **Exploitation/Verification**:
    - Use `bind_interface` to get an object handle.
    - Use `call_method` to execute MojoJS.
    - Use `get_console_logs` to check for renderer crashes or debug output.
    - **Note**: `call_method` automatically checks for previous findings to prevent duplicate work.

5.  **Recording**:
    - Use `track_research(type="research", ...)` to log every attempt, success, or crash.
    - Logging research for a queued target automatically marks that target as **Completed**.
    - If a tool fails or a method is unreachable, log it with `track_research(type="gap", ...)`.

## Learning System

The system is designed to be low-friction. 
- **Targets** keep you focused.
- **Findings** build a knowledge base that `get_interface_details` and `call_method` automatically surface to you.
- **Gaps** help developers improve the MCP server.

## MCP & Environment Management

**IMPORTANT**: If any modifications are made to the MCP server code (`src/*.js`):

1.  **Stop**: Immediately inform the user.
2.  **Request Reload**: Ask the user to **reload the MCP server and the MojoGUI website**.
3.  **Verify**: Do not continue research until the reload is confirmed, as code changes will not be reflected in the running instance.