#!/usr/bin/env bash
# =============================================================================
# Chromium Security Research Debugger Launcher (Linux / macOS)
# =============================================================================
# Launches Chrome/Chromium with security research flags and optional GDB attach.
# Counterpart to debug_chrome.bat for non-Windows platforms.
# =============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TIMESTAMP="$(date +%Y%m%d_%H%M%S)"

# --- Chrome binary detection ---
find_chrome() {
  local candidates=()

  if [[ "$(uname)" == "Darwin" ]]; then
    candidates=(
      "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
      "/Applications/Chromium.app/Contents/MacOS/Chromium"
    )
  else
    candidates=(
      "$(which google-chrome-unstable 2>/dev/null || true)"
      "$(which google-chrome-canary 2>/dev/null || true)"
      "$(which google-chrome 2>/dev/null || true)"
      "$(which chromium-browser 2>/dev/null || true)"
      "$(which chromium 2>/dev/null || true)"
    )
  fi

  for c in "${candidates[@]}"; do
    if [[ -n "$c" && -x "$c" ]]; then
      echo "$c"
      return 0
    fi
  done

  return 1
}

CHROME_PATH="${CHROME_PATH:-$(find_chrome || true)}"
if [[ -z "$CHROME_PATH" || ! -x "$CHROME_PATH" ]]; then
  echo "[ERROR] Chrome/Chromium not found."
  echo "  Set CHROME_PATH environment variable to your Chrome binary."
  echo "  Example: CHROME_PATH=/usr/bin/google-chrome-unstable $0"
  exit 1
fi

# --- Profile setup ---
PROFILE_DIR="$SCRIPT_DIR/DebugProfile"
SESSION_DIR="$PROFILE_DIR/session_$TIMESTAMP"
mkdir -p "$SESSION_DIR/cache"

# Clean old sessions (keep 5 most recent)
if [[ -d "$PROFILE_DIR" ]]; then
  ls -1dt "$PROFILE_DIR"/session_* 2>/dev/null | tail -n +6 | while read -r old; do
    echo "  Removing old session: $(basename "$old")"
    rm -rf "$old"
  done
fi

# --- Prompt for disable-kill-after-bad-ipc ---
DISABLE_KILL_FLAG=""
echo "==============================================================================="
echo " Chromium Security Research Debugger ($(uname))"
echo "==============================================================================="
echo ""
echo " Chrome Path:   $CHROME_PATH"
echo " Profile Path:  $SESSION_DIR"
echo ""
echo " [OPTION] Disable renderer kill after bad IPC messages?"
echo " This prevents the browser from terminating renderers that send"
echo " malformed Mojo messages. Bad for security, but useful for fast fuzzing."
echo ""
read -rp " Enable --disable-kill-after-bad-ipc? [y/N] " choice
case "$choice" in
  y|Y)
    DISABLE_KILL_FLAG="--disable-kill-after-bad-ipc"
    echo " [ON]  Renderer kills disabled - fuzzing mode"
    ;;
  *)
    echo " [OFF] Renderer kills enabled - normal security"
    ;;
esac
echo ""

# --- Build Chrome flags ---
CHROME_FLAGS=(
  "--user-data-dir=$SESSION_DIR"
  "--disk-cache-dir=$SESSION_DIR/cache"
  "--no-first-run"
  "--no-default-browser-check"
  "--disable-background-networking"
  "--disable-component-update"
  "--disable-sync"
  "--metrics-recording-only"
  "--safebrowsing-disable-auto-update"
  "--site-per-process"
  "--remote-debugging-port=9222"
  "--enable-blink-features=MojoJS,MojoJSTest"
)
if [[ -n "$DISABLE_KILL_FLAG" ]]; then
  CHROME_FLAGS+=("$DISABLE_KILL_FLAG")
fi
CHROME_FLAGS+=("https://ndevtk.github.io/MojoGUI/")

# --- Launch mode selection ---
echo " Launch mode:"
echo "   1) Chrome only (connect debugger separately)"
echo "   2) Chrome under GDB (Linux only)"
echo "   3) Chrome under LLDB (macOS)"
echo ""
read -rp " Select [1/2/3] (default: 1): " mode
mode="${mode:-1}"
echo ""

case "$mode" in
  2)
    if ! command -v gdb &>/dev/null; then
      echo "[ERROR] GDB not found. Install with: sudo apt install gdb"
      exit 1
    fi
    echo " Launching Chrome under GDB..."
    echo " Useful GDB commands for Chromium:"
    echo "   info proc mappings          - Memory layout"
    echo "   info threads                - List threads"
    echo "   b mojo::ReportBadMessage    - Break on bad Mojo messages"
    echo "   b content::BrowserInterfaceBrokerImpl::GetInterface"
    echo ""
    # Follow child forks to catch renderer processes
    gdb -ex "set follow-fork-mode child" \
        -ex "set detach-on-fork off" \
        -ex "handle SIGPIPE nostop noprint" \
        -ex "handle SIGCHLD nostop noprint" \
        --args "$CHROME_PATH" "${CHROME_FLAGS[@]}"
    ;;
  3)
    if ! command -v lldb &>/dev/null; then
      echo "[ERROR] LLDB not found. Install Xcode Command Line Tools."
      exit 1
    fi
    echo " Launching Chrome under LLDB..."
    echo " Useful LLDB commands for Chromium:"
    echo "   image list                  - Loaded modules"
    echo "   thread list                 - List threads"
    echo "   b mojo::ReportBadMessage    - Break on bad Mojo messages"
    echo ""
    lldb -- "$CHROME_PATH" "${CHROME_FLAGS[@]}"
    ;;
  *)
    echo " Launching Chrome (PID will be shown)..."
    "$CHROME_PATH" "${CHROME_FLAGS[@]}" &
    CHROME_PID=$!
    echo ""
    echo " Chrome PID: $CHROME_PID"
    echo " Session:    $TIMESTAMP"
    echo " CDP:        http://localhost:9222"
    echo ""
    echo " To attach GDB:  gdb -p $CHROME_PID"
    echo " To attach LLDB: lldb -p $CHROME_PID"
    echo ""
    echo " To find renderer PIDs:"
    echo "   ps aux | grep chrome | grep renderer"
    echo ""
    echo " Press Ctrl+C to stop."
    wait $CHROME_PID 2>/dev/null || true
    ;;
esac
