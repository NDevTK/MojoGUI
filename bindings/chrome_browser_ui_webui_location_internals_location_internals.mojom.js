// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/location_internals/location_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};
var device = device || {};

mojom.LocationInternalsHandler = {};
mojom.LocationInternalsHandler.$interfaceName = 'mojom.LocationInternalsHandler';
mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec = { $: {} };

// Interface: LocationInternalsHandler
mojo.internal.Struct(
    mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec, 'mojom.LocationInternalsHandler_BindInternalsInterface_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationInternalsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojom.LocationInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.LocationInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.LocationInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.LocationInternalsHandlerPendingReceiver,
      handle);
    this.$ = new mojom.LocationInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.LocationInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindInternalsInterface(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

mojom.LocationInternalsHandler.getRemote = function() {
  let remote = new mojom.LocationInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.LocationInternalsHandler',
    'context');
  return remote.$;
};

mojom.LocationInternalsHandlerReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindInternalsInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindInternalsInterface (0)');
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
          const params = decoder.decodeStruct(mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindInternalsInterface');
          const result = this.impl.bindInternalsInterface(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojom.LocationInternalsHandlerReceiver = mojom.LocationInternalsHandlerReceiver;

mojom.LocationInternalsHandlerPtr = mojom.LocationInternalsHandlerRemote;
mojom.LocationInternalsHandlerRequest = mojom.LocationInternalsHandlerPendingReceiver;

