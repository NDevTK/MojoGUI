// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/devtools_agent.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Enum: DevToolsExecutionContextType
blink.mojom.mojom.DevToolsExecutionContextType = {
  kDedicatedWorker: 0,
  kWorklet: 1,
};
blink.mojom.mojom.DevToolsExecutionContextTypeSpec = { $: mojo.internal.Enum() };

// Struct: DevToolsMessage
blink.mojom.mojom.DevToolsMessageSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsMessage',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DevToolsSessionState
blink.mojom.mojom.DevToolsSessionStateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsSessionState',
      packedSize: 16,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.Uint8, false), false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: DevToolsAgent
blink.mojom.mojom.DevToolsAgent = {};

blink.mojom.mojom.DevToolsAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DevToolsAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DevToolsAgentPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DevToolsAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DevToolsAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  attachDevToolsSession(host, session, io_session, reattach_session_state, script_to_evaluate_on_load, client_expects_binary_responses, client_is_trusted, session_id, session_waits_for_debugger) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec,
      null,
      [host, session, io_session, reattach_session_state, script_to_evaluate_on_load, client_expects_binary_responses, client_is_trusted, session_id, session_waits_for_debugger]);
  }

  inspectElement(point) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.DevToolsAgent_InspectElement_ParamsSpec,
      null,
      [point]);
  }

  reportChildTargets(report, wait_for_debugger) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec,
      null,
      [report, wait_for_debugger]);
  }

};

blink.mojom.mojom.DevToolsAgent.getRemote = function() {
  let remote = new blink.mojom.mojom.DevToolsAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsAgent',
    'context');
  return remote.$;
};

// ParamsSpec for AttachDevToolsSession
blink.mojom.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgent.AttachDevToolsSession_Params',
      packedSize: 48,
      fields: [
        { name: 'host', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'session', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'io_session', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'reattach_session_state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DevToolsSessionStateSpec, nullable: true, minVersion: 0 },
        { name: 'script_to_evaluate_on_load', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'client_expects_binary_responses', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'client_is_trusted', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'session_waits_for_debugger', packedOffset: 36, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for InspectElement
blink.mojom.mojom.DevToolsAgent_InspectElement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgent.InspectElement_Params',
      packedSize: 16,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportChildTargets
blink.mojom.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgent.ReportChildTargets_Params',
      packedSize: 16,
      fields: [
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'wait_for_debugger', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DevToolsAgentPtr = blink.mojom.mojom.DevToolsAgentRemote;
blink.mojom.mojom.DevToolsAgentRequest = blink.mojom.mojom.DevToolsAgentPendingReceiver;


// Interface: DevToolsAgentHost
blink.mojom.mojom.DevToolsAgentHost = {};

blink.mojom.mojom.DevToolsAgentHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DevToolsAgentHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsAgentHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DevToolsAgentHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DevToolsAgentHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DevToolsAgentHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  childTargetCreated(worker_devtools_agent, worker_devtools_agent_host, url, name, devtools_worker_token, waiting_for_debugger, context_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec,
      null,
      [worker_devtools_agent, worker_devtools_agent_host, url, name, devtools_worker_token, waiting_for_debugger, context_type]);
  }

  mainThreadDebuggerPaused() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec,
      null,
      []);
  }

  mainThreadDebuggerResumed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec,
      null,
      []);
  }

  bringToForeground() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.DevToolsAgentHost.getRemote = function() {
  let remote = new blink.mojom.mojom.DevToolsAgentHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsAgentHost',
    'context');
  return remote.$;
};

// ParamsSpec for ChildTargetCreated
blink.mojom.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgentHost.ChildTargetCreated_Params',
      packedSize: 48,
      fields: [
        { name: 'worker_devtools_agent', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'worker_devtools_agent_host', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'devtools_worker_token', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'waiting_for_debugger', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'context_type', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.DevToolsExecutionContextTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for MainThreadDebuggerPaused
blink.mojom.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgentHost.MainThreadDebuggerPaused_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for MainThreadDebuggerResumed
blink.mojom.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgentHost.MainThreadDebuggerResumed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for BringToForeground
blink.mojom.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsAgentHost.BringToForeground_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DevToolsAgentHostPtr = blink.mojom.mojom.DevToolsAgentHostRemote;
blink.mojom.mojom.DevToolsAgentHostRequest = blink.mojom.mojom.DevToolsAgentHostPendingReceiver;


// Interface: DevToolsSession
blink.mojom.mojom.DevToolsSession = {};

blink.mojom.mojom.DevToolsSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DevToolsSessionRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DevToolsSessionPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DevToolsSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DevToolsSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchProtocolCommand(call_id, method, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec,
      null,
      [call_id, method, message]);
  }

  unpauseAndTerminate() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.DevToolsSession.getRemote = function() {
  let remote = new blink.mojom.mojom.DevToolsSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsSession',
    'context');
  return remote.$;
};

// ParamsSpec for DispatchProtocolCommand
blink.mojom.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsSession.DispatchProtocolCommand_Params',
      packedSize: 32,
      fields: [
        { name: 'call_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'method', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for UnpauseAndTerminate
blink.mojom.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsSession.UnpauseAndTerminate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DevToolsSessionPtr = blink.mojom.mojom.DevToolsSessionRemote;
blink.mojom.mojom.DevToolsSessionRequest = blink.mojom.mojom.DevToolsSessionPendingReceiver;


// Interface: DevToolsSessionHost
blink.mojom.mojom.DevToolsSessionHost = {};

blink.mojom.mojom.DevToolsSessionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DevToolsSessionHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsSessionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DevToolsSessionHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DevToolsSessionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DevToolsSessionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchProtocolResponse(message, call_id, updates) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec,
      null,
      [message, call_id, updates]);
  }

  dispatchProtocolNotification(message, updates) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec,
      null,
      [message, updates]);
  }

};

blink.mojom.mojom.DevToolsSessionHost.getRemote = function() {
  let remote = new blink.mojom.mojom.DevToolsSessionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsSessionHost',
    'context');
  return remote.$;
};

// ParamsSpec for DispatchProtocolResponse
blink.mojom.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsSessionHost.DispatchProtocolResponse_Params',
      packedSize: 32,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DevToolsMessageSpec, nullable: false, minVersion: 0 },
        { name: 'call_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'updates', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.DevToolsSessionStateSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for DispatchProtocolNotification
blink.mojom.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsSessionHost.DispatchProtocolNotification_Params',
      packedSize: 24,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DevToolsMessageSpec, nullable: false, minVersion: 0 },
        { name: 'updates', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.DevToolsSessionStateSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DevToolsSessionHostPtr = blink.mojom.mojom.DevToolsSessionHostRemote;
blink.mojom.mojom.DevToolsSessionHostRequest = blink.mojom.mojom.DevToolsSessionHostPendingReceiver;

