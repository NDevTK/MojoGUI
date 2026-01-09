// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/devtools_agent.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: DevToolsExecutionContextType
blink.mojom.DevToolsExecutionContextType = {
};

// Struct: DevToolsMessage
blink.mojom.DevToolsMessage = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : null;
  }
};

// Struct: DevToolsSessionState
blink.mojom.DevToolsSessionState = class {
  constructor(values = {}) {
    this.entries = values.entries !== undefined ? values.entries : 0;
  }
};

// Interface: DevToolsAgent
blink.mojom.DevToolsAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DevToolsAgent';
  }

  attachDevToolsSession(host, session, io_session, reattach_session_state, script_to_evaluate_on_load, client_expects_binary_responses, client_is_trusted, session_id, session_waits_for_debugger) {
    // Method: AttachDevToolsSession
    // Call: AttachDevToolsSession(host, session, io_session, reattach_session_state, script_to_evaluate_on_load, client_expects_binary_responses, client_is_trusted, session_id, session_waits_for_debugger)
  }

  inspectElement(point) {
    // Method: InspectElement
    // Call: InspectElement(point)
  }

  reportChildTargets(report, wait_for_debugger) {
    // Method: ReportChildTargets
    // Call: ReportChildTargets(report, wait_for_debugger)
  }

};

blink.mojom.DevToolsAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DevToolsAgentHost
blink.mojom.DevToolsAgentHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DevToolsAgentHost';
  }

  childTargetCreated(worker_devtools_agent, worker_devtools_agent_host, url, name, devtools_worker_token, waiting_for_debugger, context_type) {
    // Method: ChildTargetCreated
    // Call: ChildTargetCreated(worker_devtools_agent, worker_devtools_agent_host, url, name, devtools_worker_token, waiting_for_debugger, context_type)
  }

  mainThreadDebuggerPaused() {
    // Method: MainThreadDebuggerPaused
    // Call: MainThreadDebuggerPaused()
  }

  mainThreadDebuggerResumed() {
    // Method: MainThreadDebuggerResumed
    // Call: MainThreadDebuggerResumed()
  }

  bringToForeground() {
    // Method: BringToForeground
    // Call: BringToForeground()
  }

};

blink.mojom.DevToolsAgentHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DevToolsSession
blink.mojom.DevToolsSessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DevToolsSession';
  }

  dispatchProtocolCommand(call_id, method, message) {
    // Method: DispatchProtocolCommand
    // Call: DispatchProtocolCommand(call_id, method, message)
  }

  unpauseAndTerminate() {
    // Method: UnpauseAndTerminate
    // Call: UnpauseAndTerminate()
  }

};

blink.mojom.DevToolsSessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DevToolsSessionHost
blink.mojom.DevToolsSessionHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DevToolsSessionHost';
  }

  dispatchProtocolResponse(message, call_id, updates) {
    // Method: DispatchProtocolResponse
    // Call: DispatchProtocolResponse(message, call_id, updates)
  }

  dispatchProtocolNotification(message, updates) {
    // Method: DispatchProtocolNotification
    // Call: DispatchProtocolNotification(message, updates)
  }

};

blink.mojom.DevToolsSessionHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
