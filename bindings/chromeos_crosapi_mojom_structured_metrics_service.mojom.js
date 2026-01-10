// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/structured_metrics_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var metrics = metrics || {};

crosapi.mojom.StructuredMetricsService = {};
crosapi.mojom.StructuredMetricsService.$interfaceName = 'crosapi.mojom.StructuredMetricsService';
crosapi.mojom.StructuredMetricsService_Record_ParamsSpec = { $: {} };

// Interface: StructuredMetricsService
mojo.internal.Struct(
    crosapi.mojom.StructuredMetricsService_Record_ParamsSpec, 'crosapi.mojom.StructuredMetricsService_Record_Params', [
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(metrics.structured.mojom.EventSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.StructuredMetricsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.StructuredMetricsServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.StructuredMetricsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.StructuredMetricsServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.StructuredMetricsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.StructuredMetricsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  record(events) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.StructuredMetricsService_Record_ParamsSpec,
      null,
      [events],
      false);
  }

};

crosapi.mojom.StructuredMetricsService.getRemote = function() {
  let remote = new crosapi.mojom.StructuredMetricsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.StructuredMetricsService',
    'context');
  return remote.$;
};

crosapi.mojom.StructuredMetricsServiceReceiver = class {
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
        
        // Try Method 0: Record
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.StructuredMetricsService_Record_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Record (0)');
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
          const params = decoder.decodeStructInline(crosapi.mojom.StructuredMetricsService_Record_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.record');
          const result = this.impl.record(params.events);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.StructuredMetricsServiceReceiver = crosapi.mojom.StructuredMetricsServiceReceiver;

crosapi.mojom.StructuredMetricsServicePtr = crosapi.mojom.StructuredMetricsServiceRemote;
crosapi.mojom.StructuredMetricsServiceRequest = crosapi.mojom.StructuredMetricsServicePendingReceiver;

