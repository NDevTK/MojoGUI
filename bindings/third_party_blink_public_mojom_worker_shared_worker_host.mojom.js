// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SharedWorkerHost = {};
blink.mojom.SharedWorkerHost.$interfaceName = 'blink.mojom.SharedWorkerHost';
blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec = { $: {} };

// Interface: SharedWorkerHost
mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnConnected_Params', [
      mojo.internal.StructField('connection_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnContextClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnReadyForInspection_Params', [
      mojo.internal.StructField('agent', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.DevToolsAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('agent_host', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.DevToolsAgentHostRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnScriptLoadFailed_Params', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnReportException_Params', [
      mojo.internal.StructField('details', 0, 0, blink.mojom.SharedWorkerExceptionDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnFeatureUsed_Params', [
      mojo.internal.StructField('feature', 0, 0, blink.mojom.WebFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SharedWorkerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedWorkerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedWorkerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedWorkerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedWorkerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedWorkerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onConnected(connection_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec,
      null,
      [connection_id],
      false);
  }

  onContextClosed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onReadyForInspection(agent, agent_host) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec,
      null,
      [agent, agent_host],
      false);
  }

  onScriptLoadFailed(error_message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec,
      null,
      [error_message],
      false);
  }

  onReportException(details) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec,
      null,
      [details],
      false);
  }

  onFeatureUsed(feature) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec,
      null,
      [feature],
      false);
  }

};

blink.mojom.SharedWorkerHost.getRemote = function() {
  let remote = new blink.mojom.SharedWorkerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedWorkerHost',
    'context');
  return remote.$;
};

blink.mojom.SharedWorkerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
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
        
        // Try Method 0: OnConnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnected (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnContextClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContextClosed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: OnReadyForInspection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReadyForInspection (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: OnScriptLoadFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScriptLoadFailed (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: OnReportException
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReportException (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: OnFeatureUsed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFeatureUsed (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
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
          const params = decoder.decodeStruct(blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onConnected');
          const result = this.impl.onConnected(params.connection_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onContextClosed');
          const result = this.impl.onContextClosed();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onReadyForInspection');
          const result = this.impl.onReadyForInspection(params.agent, params.agent_host);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onScriptLoadFailed');
          const result = this.impl.onScriptLoadFailed(params.error_message);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onReportException');
          const result = this.impl.onReportException(params.details);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFeatureUsed');
          const result = this.impl.onFeatureUsed(params.feature);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.SharedWorkerHostReceiver = blink.mojom.SharedWorkerHostReceiver;

blink.mojom.SharedWorkerHostPtr = blink.mojom.SharedWorkerHostRemote;
blink.mojom.SharedWorkerHostRequest = blink.mojom.SharedWorkerHostPendingReceiver;

