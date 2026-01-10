// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/image/mojom/image_traits_test_service.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.ImageTraitsTestService = {};
gfx.mojom.ImageTraitsTestService.$interfaceName = 'gfx.mojom.ImageTraitsTestService';
gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec = { $: {} };
gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec = { $: {} };
gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec = { $: {} };
gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec = { $: {} };

// Interface: ImageTraitsTestService
mojo.internal.Struct(
    gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec, 'gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_Params', [
      mojo.internal.StructField('in', 0, 0, gfx.mojom.ImageSkiaRepSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec, 'gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, gfx.mojom.ImageSkiaRepSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec, 'gfx.mojom.ImageTraitsTestService_EchoImageSkia_Params', [
      mojo.internal.StructField('in', 0, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec, 'gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

gfx.mojom.ImageTraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gfx.mojom.ImageTraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'gfx.mojom.ImageTraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gfx.mojom.ImageTraitsTestServicePendingReceiver,
      handle);
    this.$ = new gfx.mojom.ImageTraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gfx.mojom.ImageTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoImageSkiaRep(in) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec,
      gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec,
      [in],
      false);
  }

  echoImageSkia(in) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec,
      gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec,
      [in],
      false);
  }

};

gfx.mojom.ImageTraitsTestService.getRemote = function() {
  let remote = new gfx.mojom.ImageTraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gfx.mojom.ImageTraitsTestService',
    'context');
  return remote.$;
};

gfx.mojom.ImageTraitsTestServiceReceiver = class {
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
        
        // Try Method 0: EchoImageSkiaRep
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoImageSkiaRep (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EchoImageSkia
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoImageSkia (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.echoImageSkiaRep');
          const result = this.impl.echoImageSkiaRep(params.in);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.echoImageSkia');
          const result = this.impl.echoImageSkia(params.in);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec);
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

gfx.mojom.ImageTraitsTestServiceReceiver = gfx.mojom.ImageTraitsTestServiceReceiver;

gfx.mojom.ImageTraitsTestServicePtr = gfx.mojom.ImageTraitsTestServiceRemote;
gfx.mojom.ImageTraitsTestServiceRequest = gfx.mojom.ImageTraitsTestServicePendingReceiver;

