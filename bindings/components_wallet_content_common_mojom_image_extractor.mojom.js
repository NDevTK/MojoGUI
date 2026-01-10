// Auto-generated MojoJS binding
// Source: chromium_src/components/wallet/content/common/mojom/image_extractor.mojom
// Module: wallet.mojom

'use strict';

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
};

wallet.mojom.ImageExtractorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  extractImages() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
        
        // Try Method 0: ExtractImages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(wallet.mojom.ImageExtractor_ExtractImages_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractImages (0)');
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
          const params = decoder.decodeStructInline(wallet.mojom.ImageExtractor_ExtractImages_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.extractImages');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

wallet.mojom.ImageExtractorReceiver = wallet.mojom.ImageExtractorReceiver;

wallet.mojom.ImageExtractorPtr = wallet.mojom.ImageExtractorRemote;
wallet.mojom.ImageExtractorRequest = wallet.mojom.ImageExtractorPendingReceiver;

