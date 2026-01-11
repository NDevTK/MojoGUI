// Auto-generated MojoJS binding
// Source: chromium_src/components/wallet/content/common/mojom/image_extractor.mojom
// Module: wallet.mojom

// Module namespace
var wallet = wallet || {};
wallet.mojom = wallet.mojom || {};
var skia = skia || {};

wallet.mojom.ImageExtractor = {};
wallet.mojom.ImageExtractor.$interfaceName = 'wallet.mojom.ImageExtractor';
wallet.mojom.ImageExtractor_ExtractImages_ParamsSpec = { $: {} };
wallet.mojom.ImageExtractor_ExtractImages_ResponseParamsSpec = { $: {} };

// Interface: ImageExtractor
mojo.internal.Struct(
    wallet.mojom.ImageExtractor_ExtractImages_ParamsSpec, 'wallet.mojom.ImageExtractor_ExtractImages_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    wallet.mojom.ImageExtractor_ExtractImages_ResponseParamsSpec, 'wallet.mojom.ImageExtractor_ExtractImages_ResponseParams', [
      mojo.internal.StructField('images', 0, 0, mojo.internal.Array(skia.mojom.BitmapWithArbitraryBppSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

wallet.mojom.ImageExtractorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

wallet.mojom.ImageExtractorRemote = class {
  static get $interfaceName() {
    return 'wallet.mojom.ImageExtractor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      wallet.mojom.ImageExtractorPendingReceiver,
      handle);
    this.$ = new wallet.mojom.ImageExtractorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  extractImages() {
    return this.$.extractImages();
  }
};

wallet.mojom.ImageExtractorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImageExtractor', [
      { explicit: null },
    ]);
  }

  extractImages() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      wallet.mojom.ImageExtractor_ExtractImages_ParamsSpec,
      wallet.mojom.ImageExtractor_ExtractImages_ResponseParamsSpec,
      [],
      false);
  }

};

wallet.mojom.ImageExtractor.getRemote = function() {
  let remote = new wallet.mojom.ImageExtractorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'wallet.mojom.ImageExtractor',
    'context');
  return remote.$;
};

wallet.mojom.ImageExtractorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImageExtractor', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(wallet.mojom.ImageExtractor_ExtractImages_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(wallet.mojom.ImageExtractor_ExtractImages_ParamsSpec.$.structSpec);
          const result = this.impl.extractImages();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, wallet.mojom.ImageExtractor_ExtractImages_ResponseParamsSpec);
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

wallet.mojom.ImageExtractorReceiver = wallet.mojom.ImageExtractorReceiver;

wallet.mojom.ImageExtractorPtr = wallet.mojom.ImageExtractorRemote;
wallet.mojom.ImageExtractorRequest = wallet.mojom.ImageExtractorPendingReceiver;

