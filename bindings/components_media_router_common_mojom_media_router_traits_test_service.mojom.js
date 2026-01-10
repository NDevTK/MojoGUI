// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_router_traits_test_service.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};

media_router.mojom.MediaRouterTraitsTestService = {};
media_router.mojom.MediaRouterTraitsTestService.$interfaceName = 'media_router.mojom.MediaRouterTraitsTestService';
media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ParamsSpec = { $: {} };
media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ResponseParamsSpec = { $: {} };

// Interface: MediaRouterTraitsTestService
mojo.internal.Struct(
    media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ParamsSpec, 'media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_Params', [
      mojo.internal.StructField('s', 0, 0, media_router.mojom.MediaSinkSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ResponseParamsSpec, 'media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ResponseParams', [
      mojo.internal.StructField('sink', 0, 0, media_router.mojom.MediaSinkSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media_router.mojom.MediaRouterTraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.MediaRouterTraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.MediaRouterTraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.MediaRouterTraitsTestServicePendingReceiver,
      handle);
    this.$ = new media_router.mojom.MediaRouterTraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_router.mojom.MediaRouterTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoMediaSink(s) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ParamsSpec,
      media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ResponseParamsSpec,
      [s],
      false);
  }

};

media_router.mojom.MediaRouterTraitsTestService.getRemote = function() {
  let remote = new media_router.mojom.MediaRouterTraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.MediaRouterTraitsTestService',
    'context');
  return remote.$;
};

media_router.mojom.MediaRouterTraitsTestServiceReceiver = class {
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
        
        // Try Method 0: EchoMediaSink
        try {
             decoder.decodeStruct(media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoMediaSink (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.echoMediaSink');
          const result = this.impl.echoMediaSink(params.s);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ResponseParamsSpec);
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

media_router.mojom.MediaRouterTraitsTestServiceReceiver = media_router.mojom.MediaRouterTraitsTestServiceReceiver;

media_router.mojom.MediaRouterTraitsTestServicePtr = media_router.mojom.MediaRouterTraitsTestServiceRemote;
media_router.mojom.MediaRouterTraitsTestServiceRequest = media_router.mojom.MediaRouterTraitsTestServicePendingReceiver;

