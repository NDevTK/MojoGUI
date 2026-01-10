// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/traced_process.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};

tracing.mojom.ConnectToTracingRequestSpec = { $: {} };
tracing.mojom.TracedProcess = {};
tracing.mojom.TracedProcess.$interfaceName = 'tracing.mojom.TracedProcess';
tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec = { $: {} };
tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParamsSpec = { $: {} };

// Struct: ConnectToTracingRequest
mojo.internal.Struct(
    tracing.mojom.ConnectToTracingRequestSpec, 'tracing.mojom.ConnectToTracingRequest', [
      mojo.internal.StructField('perfetto_service', 0, 0, mojo.internal.InterfaceProxy(tracing.mojom.PerfettoServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: TracedProcess
mojo.internal.Struct(
    tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec, 'tracing.mojom.TracedProcess_ConnectToTracingService_Params', [
      mojo.internal.StructField('request', 0, 0, tracing.mojom.ConnectToTracingRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParamsSpec, 'tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParams', [
    ],
    [[0, 8]]);

tracing.mojom.TracedProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.TracedProcessRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.TracedProcess';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.TracedProcessPendingReceiver,
      handle);
    this.$ = new tracing.mojom.TracedProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.TracedProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToTracingService(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec,
      tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParamsSpec,
      [request],
      false);
  }

};

tracing.mojom.TracedProcess.getRemote = function() {
  let remote = new tracing.mojom.TracedProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.TracedProcess',
    'context');
  return remote.$;
};

tracing.mojom.TracedProcessReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: ConnectToTracingService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToTracingService (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
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
          const params = decoder.decodeStruct(tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.connectToTracingService');
          const result = this.impl.connectToTracingService(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParamsSpec);
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

tracing.mojom.TracedProcessReceiver = tracing.mojom.TracedProcessReceiver;

tracing.mojom.TracedProcessPtr = tracing.mojom.TracedProcessRemote;
tracing.mojom.TracedProcessRequest = tracing.mojom.TracedProcessPendingReceiver;

