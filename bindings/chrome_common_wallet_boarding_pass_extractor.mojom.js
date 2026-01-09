// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/wallet/boarding_pass_extractor.mojom
// Module: wallet.mojom

'use strict';

// Module namespace
var wallet = wallet || {};
wallet.mojom = wallet.mojom || {};


// Interface: BoardingPassExtractor
wallet.mojom.BoardingPassExtractor = {};

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
      wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ParamsSpec.$,
      wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for ExtractBoardingPass
wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ParamsSpec = {
  $: {
    structSpec: {
      name: 'wallet.mojom.BoardingPassExtractor.ExtractBoardingPass_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

wallet.mojom.BoardingPassExtractor_ExtractBoardingPass_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'wallet.mojom.BoardingPassExtractor.ExtractBoardingPass_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'boarding_passes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
wallet.mojom.BoardingPassExtractorPtr = wallet.mojom.BoardingPassExtractorRemote;
wallet.mojom.BoardingPassExtractorRequest = wallet.mojom.BoardingPassExtractorPendingReceiver;

