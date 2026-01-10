// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/wallet/boarding_pass_extractor.mojom
// Module: wallet.mojom

'use strict';

// Module namespace
var wallet = wallet || {};
wallet.mojom = wallet.mojom || {};

wallet.mojom.BoardingPassExtractor = {};
wallet.mojom.BoardingPassExtractor.$interfaceName = 'wallet.mojom.BoardingPassExtractor';
wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ParamsSpec = { $: {} };
wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ResponseParamsSpec = { $: {} };

// Interface: BoardingPassExtractor
mojo.internal.Struct(
    wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ParamsSpec, 'wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ResponseParamsSpec, 'wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ResponseParams', [
      mojo.internal.StructField('boarding_passes', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

wallet.mojom.BoardingPassExtractorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

wallet.mojom.BoardingPassExtractorRemote = class {
  static get $interfaceName() {
    return 'wallet.mojom.BoardingPassExtractor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      wallet.mojom.BoardingPassExtractorPendingReceiver,
      handle);
    this.$ = new wallet.mojom.BoardingPassExtractorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

wallet.mojom.BoardingPassExtractorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  extractBoardingPass() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ParamsSpec,
      wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ResponseParamsSpec,
      [],
      false);
  }

};

wallet.mojom.BoardingPassExtractor.getRemote = function() {
  let remote = new wallet.mojom.BoardingPassExtractorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'wallet.mojom.BoardingPassExtractor',
    'context');
  return remote.$;
};

wallet.mojom.BoardingPassExtractorReceiver = class {
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
        
        // Try Method 0: ExtractBoardingPass
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractBoardingPass (0)');
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
          const params = decoder.decodeStruct(wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.extractBoardingPass');
          const result = this.impl.extractBoardingPass();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ResponseParamsSpec);
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

wallet.mojom.BoardingPassExtractorReceiver = wallet.mojom.BoardingPassExtractorReceiver;

wallet.mojom.BoardingPassExtractorPtr = wallet.mojom.BoardingPassExtractorRemote;
wallet.mojom.BoardingPassExtractorRequest = wallet.mojom.BoardingPassExtractorPendingReceiver;

