// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_router_traits_test_service.mojom
// Module: media_router.mojom

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
  echoMediaSink(s) {
    return this.$.echoMediaSink(s);
  }
};

media_router.mojom.MediaRouterTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaRouterTraitsTestService', [
      { explicit: null },
    ]);
  }

  echoMediaSink(s) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('MediaRouterTraitsTestService', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.MediaRouterTraitsTestService_EchoMediaSink_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

media_router.mojom.MediaRouterTraitsTestServiceReceiver = media_router.mojom.MediaRouterTraitsTestServiceReceiver;

media_router.mojom.MediaRouterTraitsTestServicePtr = media_router.mojom.MediaRouterTraitsTestServiceRemote;
media_router.mojom.MediaRouterTraitsTestServiceRequest = media_router.mojom.MediaRouterTraitsTestServicePendingReceiver;

