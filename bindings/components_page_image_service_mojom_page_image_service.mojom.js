// Auto-generated MojoJS binding
// Source: chromium_src/components/page_image_service/mojom/page_image_service.mojom
// Module: page_image_service.mojom

// Module namespace
var page_image_service = page_image_service || {};
page_image_service.mojom = page_image_service.mojom || {};
var url = url || {};

page_image_service.mojom.ClientIdSpec = { $: mojo.internal.Enum() };
page_image_service.mojom.OptionsSpec = { $: {} };
page_image_service.mojom.ImageResultSpec = { $: {} };
page_image_service.mojom.PageImageServiceHandler = {};
page_image_service.mojom.PageImageServiceHandler.$interfaceName = 'page_image_service.mojom.PageImageServiceHandler';
page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ParamsSpec = { $: {} };
page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec = { $: {} };

// Enum: ClientId
page_image_service.mojom.ClientId = {
  Journeys: 0,
  JourneysSidePanel: 1,
  NtpRealbox: 2,
  NtpQuests: 3,
  Bookmarks: 4,
  NtpTabResumption: 5,
  HistoryEmbeddings: 6,
};

// Struct: Options
mojo.internal.Struct(
    page_image_service.mojom.OptionsSpec, 'page_image_service.mojom.Options', [
      mojo.internal.StructField('suggest_images', 0, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('optimization_guide_images', 0, 1, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ImageResult
mojo.internal.Struct(
    page_image_service.mojom.ImageResultSpec, 'page_image_service.mojom.ImageResult', [
      mojo.internal.StructField('image_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PageImageServiceHandler
mojo.internal.Struct(
    page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ParamsSpec, 'page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_Params', [
      mojo.internal.StructField('client_id', 0, 0, page_image_service.mojom.ClientIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, page_image_service.mojom.OptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec, 'page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, page_image_service.mojom.ImageResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

page_image_service.mojom.PageImageServiceHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

page_image_service.mojom.PageImageServiceHandlerRemote = class {
  static get $interfaceName() {
    return 'page_image_service.mojom.PageImageServiceHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      page_image_service.mojom.PageImageServiceHandlerPendingReceiver,
      handle);
    this.$ = new page_image_service.mojom.PageImageServiceHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getPageImageUrl(client_id, page_url, options) {
    return this.$.getPageImageUrl(client_id, page_url, options);
  }
};

page_image_service.mojom.PageImageServiceHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageImageServiceHandler', [
      { explicit: null },
    ]);
  }

  getPageImageUrl(client_id, page_url, options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ParamsSpec,
      page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec,
      [client_id, page_url, options],
      false);
  }

};

page_image_service.mojom.PageImageServiceHandler.getRemote = function() {
  let remote = new page_image_service.mojom.PageImageServiceHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'page_image_service.mojom.PageImageServiceHandler',
    'context');
  return remote.$;
};

page_image_service.mojom.PageImageServiceHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageImageServiceHandler', [
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
             decoder.decodeStructInline(page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ParamsSpec.$.structSpec);
          const result = this.impl.getPageImageUrl(params.client_id, params.page_url, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, page_image_service.mojom.PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec);
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

page_image_service.mojom.PageImageServiceHandlerReceiver = page_image_service.mojom.PageImageServiceHandlerReceiver;

page_image_service.mojom.PageImageServiceHandlerPtr = page_image_service.mojom.PageImageServiceHandlerRemote;
page_image_service.mojom.PageImageServiceHandlerRequest = page_image_service.mojom.PageImageServiceHandlerPendingReceiver;

