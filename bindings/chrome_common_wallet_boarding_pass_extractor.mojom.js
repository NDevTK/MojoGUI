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

wallet.mojom.BoardingPassExtractorPtr = wallet.mojom.BoardingPassExtractorRemote;
wallet.mojom.BoardingPassExtractorRequest = wallet.mojom.BoardingPassExtractorPendingReceiver;

