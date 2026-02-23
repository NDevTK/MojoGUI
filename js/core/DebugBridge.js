/**
 * DebugBridge - Shared-memory communication channel between MojoGUI (JS) and WinDbg.
 *
 * Architecture:
 *   JS allocates an ArrayBuffer with a magic sentinel header. WinDbg scans
 *   heap for the sentinel to locate the buffer's backing store.  Both sides
 *   read/write through the same physical memory: JS via DataView, WinDbg via
 *   `ed`/`eb`/`da` commands.
 *
 * Buffer layout (8 KB):
 *   Offset   Size   Description
 *   ──────   ────   ────────────────────────────────────────────────
 *   0        16     Magic sentinel  "MGUI_BRIDGE_V01" (ASCII)
 *   16       1      JS  → WinDbg  sequence number (JS   increments)
 *   17       1      WinDbg → JS   sequence number (WDbg increments)
 *   18       2      JS  → WinDbg  message length  (uint16 LE)
 *   20       2      WinDbg → JS   message length  (uint16 LE)
 *   22       2      Status flags   (bit 0 = JS ready, bit 1 = WinDbg ready)
 *   24       8      Reserved / alignment
 *   32       4064   WinDbg → JS   message area   (UTF-8 JSON)
 *   4096     4096   JS → WinDbg   message area   (UTF-8 JSON)
 *
 * Messages are JSON objects with a `type` field:
 *
 *   WinDbg → JS:
 *     { type: "interface_ids",    data: { "blink.mojom.X": 3, ... } }
 *     { type: "validation_error", interface, method, message }
 *     { type: "handle_info",      handles: [ { addr, value }, ... ] }
 *     { type: "pong" }
 *
 *   JS → WinDbg:
 *     { type: "request_ids" }
 *     { type: "request_hijack", interface: "blink.mojom.X" }
 *     { type: "fuzz_target",    interface, method, params }
 *     { type: "ping" }
 */
(function (global) {
  "use strict";

  // ── Constants ──────────────────────────────────────────────────
  var MAGIC = "MGUI_BRIDGE_V01\0";       // 16 bytes (padded with NUL)
  var BUFFER_SIZE       = 8192;           // 8 KB total
  var HEADER_SIZE       = 32;
  var WINDBG_MSG_OFFSET = 32;             // WinDbg → JS  message area
  var WINDBG_MSG_SIZE   = 4064;
  var JS_MSG_OFFSET     = 4096;           // JS → WinDbg message area
  var JS_MSG_SIZE       = 4096;
  var POLL_INTERVAL_MS  = 200;

  // Header field offsets
  var OFF_JS_SEQ        = 16;
  var OFF_WDBG_SEQ      = 17;
  var OFF_JS_MSG_LEN    = 18;
  var OFF_WDBG_MSG_LEN  = 20;
  var OFF_STATUS        = 22;

  // ── Bridge Object ─────────────────────────────────────────────
  var DebugBridge = {
    _buffer: null,        // ArrayBuffer (stable backing store)
    _view: null,          // DataView
    _bytes: null,         // Uint8Array overlay
    _pollTimer: null,
    _lastWdbgSeq: 0,
    _jsSeq: 0,
    _listeners: [],       // { type: string|"*", fn: Function }[]
    _connected: false,    // True once we see WinDbg's ready bit
    _validationErrors: [], // Queue of validation errors from WinDbg
    _pendingInterfaceIds: null, // Last interface_ids payload from WinDbg
    _crashReports: [],    // Queue of crash reports from WinDbg
    _methodHints: new Map(), // "iface.method" → hints from PDB analysis

    // ── Lifecycle ───────────────────────────────────────────────

    /** Allocate the shared buffer and start polling. */
    init: function () {
      if (this._buffer) return; // Already initialised

      this._buffer = new ArrayBuffer(BUFFER_SIZE);
      this._view   = new DataView(this._buffer);
      this._bytes  = new Uint8Array(this._buffer);

      // Write sentinel
      for (var i = 0; i < MAGIC.length; i++) {
        this._bytes[i] = MAGIC.charCodeAt(i);
      }

      // Mark JS as ready (bit 0)
      this._view.setUint16(OFF_STATUS, 0x0001, true);

      // Start polling for WinDbg messages
      var self = this;
      this._pollTimer = setInterval(function () { self._poll(); }, POLL_INTERVAL_MS);

      console.log("[DebugBridge] Shared buffer allocated (" + BUFFER_SIZE + " bytes). Waiting for WinDbg...");
    },

    /** Stop polling and release buffer. */
    destroy: function () {
      if (this._pollTimer) {
        clearInterval(this._pollTimer);
        this._pollTimer = null;
      }
      this._buffer = null;
      this._view = null;
      this._bytes = null;
      this._connected = false;
    },

    /** Whether WinDbg has set its ready bit. */
    isConnected: function () {
      if (!this._view) return false;
      var status = this._view.getUint16(OFF_STATUS, true);
      return (status & 0x02) !== 0;
    },

    // ── Sending (JS → WinDbg) ───────────────────────────────────

    /** Send a JSON message to WinDbg. Returns false if buffer full / not ready. */
    send: function (msg) {
      if (!this._view) return false;

      var json;
      try { json = JSON.stringify(msg); } catch (e) { return false; }

      var encoded = new TextEncoder().encode(json);
      if (encoded.length > JS_MSG_SIZE) {
        console.warn("[DebugBridge] Message too large (" + encoded.length + " bytes), max " + JS_MSG_SIZE);
        return false;
      }

      // Write payload
      this._bytes.set(encoded, JS_MSG_OFFSET);
      // Zero remaining bytes (clean slate)
      if (encoded.length < JS_MSG_SIZE) {
        this._bytes.fill(0, JS_MSG_OFFSET + encoded.length, JS_MSG_OFFSET + JS_MSG_SIZE);
      }

      // Write length
      this._view.setUint16(OFF_JS_MSG_LEN, encoded.length, true);

      // Bump sequence number (wraps at 255)
      this._jsSeq = (this._jsSeq + 1) & 0xFF;
      this._view.setUint8(OFF_JS_SEQ, this._jsSeq);

      return true;
    },

    /** Convenience: request interface ID mapping from WinDbg. */
    requestInterfaceIds: function () {
      return this.send({ type: "request_ids" });
    },

    /** Convenience: request a specific interface hijack. */
    requestHijack: function (interfaceName) {
      return this.send({ type: "request_hijack", interface: interfaceName });
    },

    /** Tell WinDbg what the fuzzer is currently targeting (for breakpoint focus). */
    notifyFuzzTarget: function (interfaceFqn, methodName, params) {
      return this.send({
        type: "fuzz_target",
        interface: interfaceFqn,
        method: methodName,
        params: params || {},
      });
    },

    /** Ping WinDbg to check liveness. */
    ping: function () {
      return this.send({ type: "ping" });
    },

    // ── Receiving (WinDbg → JS) ─────────────────────────────────

    /** Register a listener.  type="*" for all messages. */
    on: function (type, fn) {
      this._listeners.push({ type: type, fn: fn });
    },

    /** Remove a listener. */
    off: function (type, fn) {
      this._listeners = this._listeners.filter(function (l) {
        return !(l.type === type && l.fn === fn);
      });
    },

    /** Poll for new messages from WinDbg. */
    _poll: function () {
      if (!this._view) return;

      // Check WinDbg ready bit
      var status = this._view.getUint16(OFF_STATUS, true);
      if ((status & 0x02) !== 0 && !this._connected) {
        this._connected = true;
        console.log("[DebugBridge] WinDbg connected!");
        this._dispatch({ type: "_bridge_connected" });
      }

      // Check for new message
      var wdbgSeq = this._view.getUint8(OFF_WDBG_SEQ);
      if (wdbgSeq === this._lastWdbgSeq) return;
      this._lastWdbgSeq = wdbgSeq;

      var msgLen = this._view.getUint16(OFF_WDBG_MSG_LEN, true);
      if (msgLen === 0 || msgLen > WINDBG_MSG_SIZE) return;

      var slice = this._bytes.slice(WINDBG_MSG_OFFSET, WINDBG_MSG_OFFSET + msgLen);
      var text;
      try { text = new TextDecoder().decode(slice); } catch (e) { return; }

      var msg;
      try { msg = JSON.parse(text); } catch (e) {
        console.warn("[DebugBridge] Invalid JSON from WinDbg:", text.substring(0, 100));
        return;
      }

      this._dispatch(msg);
    },

    /** Dispatch a received message to listeners. */
    _dispatch: function (msg) {
      var type = msg.type || "unknown";
      for (var i = 0; i < this._listeners.length; i++) {
        var l = this._listeners[i];
        if (l.type === type || l.type === "*") {
          try { l.fn(msg); } catch (e) {
            console.error("[DebugBridge] Listener error:", e);
          }
        }
      }
    },

    // ── Built-in message handlers ───────────────────────────────

    /** Wire up default handlers that auto-integrate with MojoGUI. */
    _initDefaultHandlers: function () {
      var self = this;

      // Auto-assign interface IDs when WinDbg pushes them
      this.on("interface_ids", function (msg) {
        if (!msg.data || typeof msg.data !== "object") return;

        // Stash for the fuzzer to detect new IDs
        self._pendingInterfaceIds = msg.data;

        var api = global.MojoGUI_API;
        if (api && api.assignInterfaceIds) {
          var result = api.assignInterfaceIds(msg.data);
          console.log("[DebugBridge] Auto-assigned " + result.count + " interface IDs from WinDbg");
          if (global.showToast) {
            global.showToast("WinDbg synced " + result.count + " interface IDs", "success");
          }
        }
      });

      // Feed validation errors into the fuzzer's FeedbackEngine.
      // WinDbg catches ReportBadMessage at the C++ level — these messages
      // tell us *exactly* which validation check failed (e.g.
      // "VALIDATION_ERROR_UNEXPECTED_NULL_POINTER"), which is far more
      // specific than the JS-level "connection lost" the fuzzer normally sees.
      this.on("validation_error", function (msg) {
        console.log("[DebugBridge] Validation error: " + msg.interface + "." + msg.method + ": " + msg.message);

        // Accumulate in a queue the fuzzer can drain
        self._validationErrors.push({
          interface: msg.interface || "",
          method: msg.method || "",
          message: msg.message || "",
          timestamp: Date.now(),
        });
        // Cap queue
        if (self._validationErrors.length > 50) self._validationErrors.shift();
      });

      // Consume crash reports from WinDbg (from previous renderer or live crash)
      this.on("crash_report", function (msg) {
        console.log("[DebugBridge] Crash report: code=" + msg.exceptionCode +
          " addr=" + msg.crashAddress + " frames=" + (msg.stackFrames || []).length);
        self._crashReports.push(msg);
        if (self._crashReports.length > 10) self._crashReports.shift();

        if (global.showToast) {
          global.showToast(
            "WinDbg crash report: " + (msg.exceptionCode || "unknown") +
            " at " + (msg.crashAddress || "?"), "warning"
          );
        }
      });

      // Consume PDB method analysis hints — the fuzzer uses these to generate
      // values near comparison constants, probe null-checked params, and
      // focus on methods that call ReportBadMessage.
      this.on("method_hints", function (msg) {
        var key = (msg.interface || "") + "." + (msg.method || "");
        self._methodHints.set(key, msg);
        console.log("[DebugBridge] Method hints for " + key +
          ": cmp=" + (msg.cmpConstants || []).length +
          " nullChks=" + (msg.nullChecks || 0) +
          " badMsg=" + !!msg.callsReportBadMessage);
      });

      // Handle pong (WinDbg responding to our ping)
      this.on("pong", function () {
        console.log("[DebugBridge] Pong received from WinDbg");
      });

      // Log connection events
      this.on("_bridge_connected", function () {
        if (global.showToast) {
          global.showToast("WinDbg debugger connected via shared memory bridge", "success");
        }
        // Auto-request interface IDs on connect
        self.requestInterfaceIds();
      });
    },

    // ── Fuzzer integration ─────────────────────────────────────

    /**
     * Drain all queued validation errors from WinDbg.
     * Returns the array and clears the queue.
     */
    drainValidationErrors: function () {
      var errors = this._validationErrors;
      this._validationErrors = [];
      return errors;
    },

    /**
     * Consume the last interface_ids payload (returns null if none pending).
     * Clears the pending state after consumption.
     */
    consumeInterfaceIds: function () {
      var ids = this._pendingInterfaceIds;
      this._pendingInterfaceIds = null;
      return ids;
    },

    /**
     * Drain all queued crash reports from WinDbg.
     * Returns the array and clears the queue.
     */
    drainCrashReports: function () {
      var reports = this._crashReports;
      this._crashReports = [];
      return reports;
    },

    /**
     * Get PDB-derived method hints for a specific interface.method.
     * Returns the hints object or null if not analyzed.
     */
    getMethodHints: function (interfaceFqn, methodName) {
      return this._methodHints.get(interfaceFqn + "." + methodName) || null;
    },

    /**
     * Get all cached method hints (for export/inspection).
     */
    getAllMethodHints: function () {
      var result = {};
      this._methodHints.forEach(function (v, k) { result[k] = v; });
      return result;
    },

    /** Request PDB analysis of a method from WinDbg. */
    requestAnalysis: function (interfaceFqn, methodName) {
      return this.send({
        type: "request_analyze",
        interface: interfaceFqn,
        method: methodName,
      });
    },

    // ── Debug Helpers ───────────────────────────────────────────

    /** Get the raw ArrayBuffer (for advanced use / inspection). */
    getBuffer: function () {
      return this._buffer;
    },

    /** Read the current header state for debugging. */
    getStatus: function () {
      if (!this._view) return null;
      return {
        jsSeq: this._view.getUint8(OFF_JS_SEQ),
        wdbgSeq: this._view.getUint8(OFF_WDBG_SEQ),
        jsMsgLen: this._view.getUint16(OFF_JS_MSG_LEN, true),
        wdbgMsgLen: this._view.getUint16(OFF_WDBG_MSG_LEN, true),
        status: this._view.getUint16(OFF_STATUS, true),
        connected: this._connected,
      };
    },
  };

  // ── Bootstrap ─────────────────────────────────────────────────
  DebugBridge.init();
  DebugBridge._initDefaultHandlers();

  global.DebugBridge = DebugBridge;
})(this);
