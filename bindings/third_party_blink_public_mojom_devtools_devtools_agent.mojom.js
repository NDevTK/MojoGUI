// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/devtools_agent.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DevToolsSessionState
mojo.internal.Struct(
    blink.mojom.DevToolsSessionStateSpec, 'blink.mojom.DevToolsSessionState', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.Uint8, false), false), null, true, 0, undefined),
    ],
    [[0, 16]]);

// Interface: DevToolsAgent
mojo.internal.Struct(
    blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec, 'blink.mojom.DevToolsAgent_AttachDevToolsSession_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('io_session', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.DevToolsSessionSpec), null, false, 0, undefined),
      mojo.internal.StructField('reattach_session_state', 24, 0, blink.mojom.DevToolsSessionStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('script_to_evaluate_on_load', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client_expects_binary_responses', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('client_is_trusted', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('session_waits_for_debugger', 48, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.DevToolsAgent_InspectElement_ParamsSpec, 'blink.mojom.DevToolsAgent_InspectElement_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
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
      [host, session, io_session, reattach_session_state, script_to_evaluate_on_load, client_expects_binary_responses, client_is_trusted, session_id, session_waits_for_debugger],
      false);
  }

  inspectElement(point) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DevToolsAgent_InspectElement_ParamsSpec,
      null,
      [point],
      false);
  }

  reportChildTargets(report, wait_for_debugger) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec,
      blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParamsSpec,
      [report, wait_for_debugger],
      false);
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

blink.mojom.DevToolsAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AttachDevToolsSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttachDevToolsSession (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: InspectElement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevToolsAgent_InspectElement_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InspectElement (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: ReportChildTargets
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportChildTargets (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsAgent_AttachDevToolsSession_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.attachDevToolsSession');
          const result = this.impl.attachDevToolsSession(params.host, params.session, params.io_session, params.reattach_session_state, params.script_to_evaluate_on_load, params.client_expects_binary_responses, params.client_is_trusted, params.session_id, params.session_waits_for_debugger);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsAgent_InspectElement_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.inspectElement');
          const result = this.impl.inspectElement(params.point);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsAgent_ReportChildTargets_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reportChildTargets');
          const result = this.impl.reportChildTargets(params.report, params.wait_for_debugger);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DevToolsAgent_ReportChildTargets_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DevToolsAgentReceiver = blink.mojom.DevToolsAgentReceiver;

blink.mojom.DevToolsAgentPtr = blink.mojom.DevToolsAgentRemote;
blink.mojom.DevToolsAgentRequest = blink.mojom.DevToolsAgentPendingReceiver;


// Interface: DevToolsAgentHost
mojo.internal.Struct(
    blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec, 'blink.mojom.DevToolsAgentHost_ChildTargetCreated_Params', [
      mojo.internal.StructField('worker_devtools_agent', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.DevToolsAgentSpec), null, false, 0, undefined),
      mojo.internal.StructField('worker_devtools_agent_host', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.DevToolsAgentHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('devtools_worker_token', 32, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('context_type', 40, 0, blink.mojom.DevToolsExecutionContextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('waiting_for_debugger', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

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
      [worker_devtools_agent, worker_devtools_agent_host, url, name, devtools_worker_token, waiting_for_debugger, context_type],
      false);
  }

  mainThreadDebuggerPaused() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec,
      null,
      [],
      false);
  }

  mainThreadDebuggerResumed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec,
      null,
      [],
      false);
  }

  bringToForeground() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec,
      null,
      [],
      false);
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

blink.mojom.DevToolsAgentHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ChildTargetCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ChildTargetCreated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: MainThreadDebuggerPaused
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MainThreadDebuggerPaused (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: MainThreadDebuggerResumed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MainThreadDebuggerResumed (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: BringToForeground
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BringToForeground (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsAgentHost_ChildTargetCreated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.childTargetCreated');
          const result = this.impl.childTargetCreated(params.worker_devtools_agent, params.worker_devtools_agent_host, params.url, params.name, params.devtools_worker_token, params.waiting_for_debugger, params.context_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsAgentHost_MainThreadDebuggerPaused_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.mainThreadDebuggerPaused');
          const result = this.impl.mainThreadDebuggerPaused();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsAgentHost_MainThreadDebuggerResumed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.mainThreadDebuggerResumed');
          const result = this.impl.mainThreadDebuggerResumed();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsAgentHost_BringToForeground_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bringToForeground');
          const result = this.impl.bringToForeground();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DevToolsAgentHostReceiver = blink.mojom.DevToolsAgentHostReceiver;

blink.mojom.DevToolsAgentHostPtr = blink.mojom.DevToolsAgentHostRemote;
blink.mojom.DevToolsAgentHostRequest = blink.mojom.DevToolsAgentHostPendingReceiver;


// Interface: DevToolsSession
mojo.internal.Struct(
    blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec, 'blink.mojom.DevToolsSession_DispatchProtocolCommand_Params', [
      mojo.internal.StructField('method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('call_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
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
      [call_id, method, message],
      false);
  }

  unpauseAndTerminate() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec,
      null,
      [],
      false);
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

blink.mojom.DevToolsSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DispatchProtocolCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchProtocolCommand (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: UnpauseAndTerminate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnpauseAndTerminate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsSession_DispatchProtocolCommand_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dispatchProtocolCommand');
          const result = this.impl.dispatchProtocolCommand(params.call_id, params.method, params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsSession_UnpauseAndTerminate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.unpauseAndTerminate');
          const result = this.impl.unpauseAndTerminate();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DevToolsSessionReceiver = blink.mojom.DevToolsSessionReceiver;

blink.mojom.DevToolsSessionPtr = blink.mojom.DevToolsSessionRemote;
blink.mojom.DevToolsSessionRequest = blink.mojom.DevToolsSessionPendingReceiver;


// Interface: DevToolsSessionHost
mojo.internal.Struct(
    blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec, 'blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_Params', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.DevToolsMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('updates', 8, 0, blink.mojom.DevToolsSessionStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('call_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec, 'blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_Params', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.DevToolsMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('updates', 8, 0, blink.mojom.DevToolsSessionStateSpec.$, null, true, 0, undefined),
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
      [message, call_id, updates],
      false);
  }

  dispatchProtocolNotification(message, updates) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec,
      null,
      [message, updates],
      false);
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

blink.mojom.DevToolsSessionHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DispatchProtocolResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchProtocolResponse (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: DispatchProtocolNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchProtocolNotification (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsSessionHost_DispatchProtocolResponse_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dispatchProtocolResponse');
          const result = this.impl.dispatchProtocolResponse(params.message, params.call_id, params.updates);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsSessionHost_DispatchProtocolNotification_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dispatchProtocolNotification');
          const result = this.impl.dispatchProtocolNotification(params.message, params.updates);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DevToolsSessionHostReceiver = blink.mojom.DevToolsSessionHostReceiver;

blink.mojom.DevToolsSessionHostPtr = blink.mojom.DevToolsSessionHostRemote;
blink.mojom.DevToolsSessionHostRequest = blink.mojom.DevToolsSessionHostPendingReceiver;

