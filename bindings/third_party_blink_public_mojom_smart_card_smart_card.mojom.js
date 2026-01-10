// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/smart_card/smart_card.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var device = device || {};

blink.mojom.SmartCardService = {};
blink.mojom.SmartCardService.$interfaceName = 'blink.mojom.SmartCardService';
blink.mojom.SmartCardService_CreateContext_ParamsSpec = { $: {} };
blink.mojom.SmartCardService_CreateContext_ResponseParamsSpec = { $: {} };

// Interface: SmartCardService
mojo.internal.Struct(
    blink.mojom.SmartCardService_CreateContext_ParamsSpec, 'blink.mojom.SmartCardService_CreateContext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SmartCardService_CreateContext_ResponseParamsSpec, 'blink.mojom.SmartCardService_CreateContext_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardCreateContextResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SmartCardServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SmartCardServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SmartCardService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SmartCardServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.SmartCardServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SmartCardServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createContext() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SmartCardService_CreateContext_ParamsSpec,
      blink.mojom.SmartCardService_CreateContext_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.SmartCardService.getRemote = function() {
  let remote = new blink.mojom.SmartCardServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SmartCardService',
    'context');
  return remote.$;
};

blink.mojom.SmartCardServiceReceiver = class {
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
        
        // Try Method 0: CreateContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SmartCardService_CreateContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateContext (0)');
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
          const params = decoder.decodeStruct(blink.mojom.SmartCardService_CreateContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createContext');
          const result = this.impl.createContext();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SmartCardService_CreateContext_ResponseParamsSpec);
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

blink.mojom.SmartCardServiceReceiver = blink.mojom.SmartCardServiceReceiver;

blink.mojom.SmartCardServicePtr = blink.mojom.SmartCardServiceRemote;
blink.mojom.SmartCardServiceRequest = blink.mojom.SmartCardServicePendingReceiver;

