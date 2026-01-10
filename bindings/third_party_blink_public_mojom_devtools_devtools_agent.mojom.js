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

blink.mojom.DevToolsExecutionContextTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.DevToolsMessageSpec = { $: {} };
blink.mojom.DevToolsSessionStateSpec = { $: {} };
blink.mojom.DevToolsAgent = {};
blink.mojom.DevToolsAgent.$interfaceName = 'blink.mojom.DevToolsAgent';
blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec = { $: {} };
blink.mojom.DevToolsAgent_InspectElement_ParamsSpec = { $: {} };
blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec = { $: {} };
blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParamsSpec = { $: {} };
blink.mojom.DevToolsAgentHost = {};
blink.mojom.DevToolsAgentHost.$interfaceName = 'blink.mojom.DevToolsAgentHost';
blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec = { $: {} };
blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec = { $: {} };
blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec = { $: {} };
blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec = { $: {} };
blink.mojom.DevToolsSession = {};
blink.mojom.DevToolsSession.$interfaceName = 'blink.mojom.DevToolsSession';
blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec = { $: {} };
blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec = { $: {} };
blink.mojom.DevToolsSessionHost = {};
blink.mojom.DevToolsSessionHost.$interfaceName = 'blink.mojom.DevToolsSessionHost';
blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec = { $: {} };
blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec = { $: {} };

// Enum: DevToolsExecutionContextType
blink.mojom.DevToolsExecutionContextType = {
  kDedicatedWorker: 0,
  kWorklet: 1,
};

// Struct: DevToolsMessage
mojo.internal.Struct(
    blink.mojom.DevToolsMessageSpec, 'blink.mojom.DevToolsMessage', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DevToolsSessionState
mojo.internal.Struct(
    blink.mojom.DevToolsSessionStateSpec, 'blink.mojom.DevToolsSessionState', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.Uint8, false), false), null, true, 0, undefined),
    ],
    [[0, 16]]);

// Interface: DevToolsAgent
mojo.internal.Struct(
    blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec, 'blink.mojom.DevToolsAgent_AttachDevToolsSession_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.AssociatedInterfaceProxy(blink.mojom.DevToolsSessionHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.AssociatedInterfaceRequest(blink.mojom.DevToolsSessionRemote), null, false, 0, undefined),
      mojo.internal.StructField('io_session', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.DevToolsSessionRemote), null, false, 0, undefined),
      mojo.internal.StructField('reattach_session_state', 24, 0, blink.mojom.DevToolsSessionStateSpec, null, true, 0, undefined),
      mojo.internal.StructField('script_to_evaluate_on_load', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client_expects_binary_responses', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('client_is_trusted', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('session_id', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_waits_for_debugger', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    blink.mojom.DevToolsAgent_InspectElement_ParamsSpec, 'blink.mojom.DevToolsAgent_InspectElement_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec, 'blink.mojom.DevToolsAgent_ReportChildTargets_Params', [
      mojo.internal.StructField('report', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wait_for_debugger', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParamsSpec, 'blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParams', [
    ],
    [[0, 8]]);

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
      blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParamsSpec,
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

blink.mojom.DevToolsAgentPtr = blink.mojom.DevToolsAgentRemote;
blink.mojom.DevToolsAgentRequest = blink.mojom.DevToolsAgentPendingReceiver;


// Interface: DevToolsAgentHost
mojo.internal.Struct(
    blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec, 'blink.mojom.DevToolsAgentHost_ChildTargetCreated_Params', [
      mojo.internal.StructField('worker_devtools_agent', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.DevToolsAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('worker_devtools_agent_host', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.DevToolsAgentHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('devtools_worker_token', 32, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('waiting_for_debugger', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('context_type', 44, 0, blink.mojom.DevToolsExecutionContextTypeSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec, 'blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec, 'blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec, 'blink.mojom.DevToolsAgentHost_BringToForeground_Params', [
    ],
    [[0, 8]]);

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

blink.mojom.DevToolsAgentHostPtr = blink.mojom.DevToolsAgentHostRemote;
blink.mojom.DevToolsAgentHostRequest = blink.mojom.DevToolsAgentHostPendingReceiver;


// Interface: DevToolsSession
mojo.internal.Struct(
    blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec, 'blink.mojom.DevToolsSession_DispatchProtocolCommand_Params', [
      mojo.internal.StructField('call_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('method', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo_base.mojom.ReadOnlyBufferSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec, 'blink.mojom.DevToolsSession_UnpauseAndTerminate_Params', [
    ],
    [[0, 8]]);

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

blink.mojom.DevToolsSessionPtr = blink.mojom.DevToolsSessionRemote;
blink.mojom.DevToolsSessionRequest = blink.mojom.DevToolsSessionPendingReceiver;


// Interface: DevToolsSessionHost
mojo.internal.Struct(
    blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec, 'blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_Params', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.DevToolsMessageSpec, null, false, 0, undefined),
      mojo.internal.StructField('call_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('updates', 16, 0, blink.mojom.DevToolsSessionStateSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec, 'blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_Params', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.DevToolsMessageSpec, null, false, 0, undefined),
      mojo.internal.StructField('updates', 8, 0, blink.mojom.DevToolsSessionStateSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

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

blink.mojom.DevToolsSessionHostPtr = blink.mojom.DevToolsSessionHostRemote;
blink.mojom.DevToolsSessionHostRequest = blink.mojom.DevToolsSessionHostPendingReceiver;

