// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/commerce_web_extractor.mojom
// Module: commerce_web_extractor.mojom

'use strict';

// Module namespace
var commerce_web_extractor = commerce_web_extractor || {};
commerce_web_extractor.mojom = commerce_web_extractor.mojom || {};
var mojo_base = mojo_base || {};

commerce_web_extractor.mojom.CommerceWebExtractor = {};
commerce_web_extractor.mojom.CommerceWebExtractor.$interfaceName = 'commerce_web_extractor.mojom.CommerceWebExtractor';
commerce_web_extractor.mojom.CommerceWebExtractor_ExtractMetaInfo_ParamsSpec = { $: {} };
commerce_web_extractor.mojom.CommerceWebExtractor_ExtractMetaInfo_ResponseParamsSpec = { $: {} };

// Interface: CommerceWebExtractor
mojo.internal.Struct(
    commerce_web_extractor.mojom.CommerceWebExtractor_ExtractMetaInfo_ParamsSpec, 'commerce_web_extractor.mojom.CommerceWebExtractor_ExtractMetaInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce_web_extractor.mojom.CommerceWebExtractor_ExtractMetaInfo_ResponseParamsSpec, 'commerce_web_extractor.mojom.CommerceWebExtractor_ExtractMetaInfo_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

commerce_web_extractor.mojom.CommerceWebExtractorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce_web_extractor.mojom.CommerceWebExtractorRemote = class {
  static get $interfaceName() {
    return 'commerce_web_extractor.mojom.CommerceWebExtractor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce_web_extractor.mojom.CommerceWebExtractorPendingReceiver,
      handle);
    this.$ = new commerce_web_extractor.mojom.CommerceWebExtractorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce_web_extractor.mojom.CommerceWebExtractorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  extractMetaInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce_web_extractor.mojom.CommerceWebExtractor_ExtractMetaInfo_ParamsSpec,
      commerce_web_extractor.mojom.CommerceWebExtractor_ExtractMetaInfo_ResponseParamsSpec,
      [],
      false);
  }

};

commerce_web_extractor.mojom.CommerceWebExtractor.getRemote = function() {
  let remote = new commerce_web_extractor.mojom.CommerceWebExtractorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce_web_extractor.mojom.CommerceWebExtractor',
    'context');
  return remote.$;
};

commerce_web_extractor.mojom.CommerceWebExtractorReceiver = class {
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
        
        // Try Method 0: ExtractMetaInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(commerce_web_extractor.mojom.CommerceWebExtractor_ExtractMetaInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractMetaInfo (0)');
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
          const params = decoder.decodeStruct(commerce_web_extractor.mojom.CommerceWebExtractor_ExtractMetaInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.extractMetaInfo');
          const result = this.impl.extractMetaInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce_web_extractor.mojom.CommerceWebExtractor_ExtractMetaInfo_ResponseParamsSpec);
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

commerce_web_extractor.mojom.CommerceWebExtractorReceiver = commerce_web_extractor.mojom.CommerceWebExtractorReceiver;

commerce_web_extractor.mojom.CommerceWebExtractorPtr = commerce_web_extractor.mojom.CommerceWebExtractorRemote;
commerce_web_extractor.mojom.CommerceWebExtractorRequest = commerce_web_extractor.mojom.CommerceWebExtractorPendingReceiver;

