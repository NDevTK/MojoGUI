// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/wallet/boarding_pass_extractor.mojom
// Module: wallet.mojom

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
  extractBoardingPass() {
    return this.$.extractBoardingPass();
  }
};

wallet.mojom.BoardingPassExtractorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BoardingPassExtractor', [
      { explicit: null },
    ]);
  }

  extractBoardingPass() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('BoardingPassExtractor', [
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
             decoder.decodeStructInline(wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

wallet.mojom.BoardingPassExtractorReceiver = wallet.mojom.BoardingPassExtractorReceiver;

wallet.mojom.BoardingPassExtractorPtr = wallet.mojom.BoardingPassExtractorRemote;
wallet.mojom.BoardingPassExtractorRequest = wallet.mojom.BoardingPassExtractorPendingReceiver;

