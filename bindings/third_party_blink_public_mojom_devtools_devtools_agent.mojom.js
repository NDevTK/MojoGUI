// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/devtools_agent.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: DevToolsExecutionContextType
blink.mojom.DevToolsExecutionContextType = {
  kDedicatedWorker: 0,
  kWorklet: 1,
};

// Interface: DevToolsAgent
blink.mojom.DevToolsAgent = {};

blink.mojom.DevToolsAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevToolsAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevToolsAgentPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevToolsAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevToolsAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  attachDevToolsSession(host, session, io_session, reattach_session_state, script_to_evaluate_on_load, client_expects_binary_responses, client_is_trusted, session_id, session_waits_for_debugger) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec,
      null,
      [host, session, io_session, reattach_session_state, script_to_evaluate_on_load, client_expects_binary_responses, client_is_trusted, session_id, session_waits_for_debugger]);
  }

  inspectElement(point) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DevToolsAgent_InspectElement_ParamsSpec,
      null,
      [point]);
  }

  reportChildTargets(report, wait_for_debugger) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec,
      null,
      [report, wait_for_debugger]);
  }

};

blink.mojom.DevToolsAgent.getRemote = function() {
  let remote = new blink.mojom.DevToolsAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsAgent',
    'context');
  return remote.$;
};

// ParamsSpec for AttachDevToolsSession
blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgent.AttachDevToolsSession_Params',
      packedSize: 72,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'io_session', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'reattach_session_state', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'script_to_evaluate_on_load', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'client_expects_binary_responses', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'client_is_trusted', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'session_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'session_waits_for_debugger', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InspectElement
blink.mojom.DevToolsAgent_InspectElement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgent.InspectElement_Params',
      packedSize: 16,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReportChildTargets
blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgent.ReportChildTargets_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'wait_for_debugger', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DevToolsAgentPtr = blink.mojom.DevToolsAgentRemote;
blink.mojom.DevToolsAgentRequest = blink.mojom.DevToolsAgentPendingReceiver;


// Interface: DevToolsAgentHost
blink.mojom.DevToolsAgentHost = {};

blink.mojom.DevToolsAgentHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevToolsAgentHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsAgentHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevToolsAgentHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevToolsAgentHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevToolsAgentHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  childTargetCreated(worker_devtools_agent, worker_devtools_agent_host, url, name, devtools_worker_token, waiting_for_debugger, context_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec,
      null,
      [worker_devtools_agent, worker_devtools_agent_host, url, name, devtools_worker_token, waiting_for_debugger, context_type]);
  }

  mainThreadDebuggerPaused() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec,
      null,
      []);
  }

  mainThreadDebuggerResumed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec,
      null,
      []);
  }

  bringToForeground() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.DevToolsAgentHost.getRemote = function() {
  let remote = new blink.mojom.DevToolsAgentHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsAgentHost',
    'context');
  return remote.$;
};

// ParamsSpec for ChildTargetCreated
blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgentHost.ChildTargetCreated_Params',
      packedSize: 64,
      fields: [
        { name: 'worker_devtools_agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'worker_devtools_agent_host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'devtools_worker_token', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'waiting_for_debugger', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'context_type', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MainThreadDebuggerPaused
blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgentHost.MainThreadDebuggerPaused_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MainThreadDebuggerResumed
blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgentHost.MainThreadDebuggerResumed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BringToForeground
blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgentHost.BringToForeground_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DevToolsAgentHostPtr = blink.mojom.DevToolsAgentHostRemote;
blink.mojom.DevToolsAgentHostRequest = blink.mojom.DevToolsAgentHostPendingReceiver;


// Interface: DevToolsSession
blink.mojom.DevToolsSession = {};

blink.mojom.DevToolsSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevToolsSessionRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevToolsSessionPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevToolsSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevToolsSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchProtocolCommand(call_id, method, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec,
      null,
      [call_id, method, message]);
  }

  unpauseAndTerminate() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.DevToolsSession.getRemote = function() {
  let remote = new blink.mojom.DevToolsSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsSession',
    'context');
  return remote.$;
};

// ParamsSpec for DispatchProtocolCommand
blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsSession.DispatchProtocolCommand_Params',
      packedSize: 32,
      fields: [
        { name: 'call_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UnpauseAndTerminate
blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsSession.UnpauseAndTerminate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DevToolsSessionPtr = blink.mojom.DevToolsSessionRemote;
blink.mojom.DevToolsSessionRequest = blink.mojom.DevToolsSessionPendingReceiver;


// Interface: DevToolsSessionHost
blink.mojom.DevToolsSessionHost = {};

blink.mojom.DevToolsSessionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevToolsSessionHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsSessionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevToolsSessionHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevToolsSessionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevToolsSessionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchProtocolResponse(message, call_id, updates) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec,
      null,
      [message, call_id, updates]);
  }

  dispatchProtocolNotification(message, updates) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec,
      null,
      [message, updates]);
  }

};

blink.mojom.DevToolsSessionHost.getRemote = function() {
  let remote = new blink.mojom.DevToolsSessionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsSessionHost',
    'context');
  return remote.$;
};

// ParamsSpec for DispatchProtocolResponse
blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsSessionHost.DispatchProtocolResponse_Params',
      packedSize: 32,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'call_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'updates', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchProtocolNotification
blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsSessionHost.DispatchProtocolNotification_Params',
      packedSize: 24,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'updates', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DevToolsSessionHostPtr = blink.mojom.DevToolsSessionHostRemote;
blink.mojom.DevToolsSessionHostRequest = blink.mojom.DevToolsSessionHostPendingReceiver;

