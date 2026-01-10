// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/system_tracing_service.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};
var mojo_base = mojo_base || {};

tracing.mojom.SystemTracingService = {};
tracing.mojom.SystemTracingService.$interfaceName = 'tracing.mojom.SystemTracingService';
tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec = { $: {} };
tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec = { $: {} };

// Interface: SystemTracingService
mojo.internal.Struct(
    tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec, 'tracing.mojom.SystemTracingService_OpenProducerSocket_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec, 'tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParams', [
      mojo.internal.StructField('traced_socket', 0, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

tracing.mojom.SystemTracingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.SystemTracingServiceRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.SystemTracingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.SystemTracingServicePendingReceiver,
      handle);
    this.$ = new tracing.mojom.SystemTracingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tracing.mojom.SystemTracingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openProducerSocket() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec,
      tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec,
      [],
      false);
  }

};

tracing.mojom.SystemTracingService.getRemote = function() {
  let remote = new tracing.mojom.SystemTracingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.SystemTracingService',
    'context');
  return remote.$;
};

tracing.mojom.SystemTracingServiceReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OpenProducerSocket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenProducerSocket (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
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
          const params = decoder.decodeStructInline(tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.openProducerSocket');
          const result = this.impl.openProducerSocket();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec);
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

tracing.mojom.SystemTracingServiceReceiver = tracing.mojom.SystemTracingServiceReceiver;

tracing.mojom.SystemTracingServicePtr = tracing.mojom.SystemTracingServiceRemote;
tracing.mojom.SystemTracingServiceRequest = tracing.mojom.SystemTracingServicePendingReceiver;

