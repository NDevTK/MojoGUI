// Auto-generated MojoJS binding
// Source: chromium_src/components/wallet/content/common/mojom/image_extractor.mojom
// Module: wallet.mojom

'use strict';

// Module namespace
var wallet = wallet || {};
wallet.mojom = wallet.mojom || {};


// Interface: ImageExtractor
wallet.mojom.ImageExtractor = {};

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
      []);
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

// ParamsSpec for ExtractImages
wallet.mojom.ImageExtractor_ExtractImages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'wallet.mojom.ImageExtractor.ExtractImages_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

wallet.mojom.ImageExtractor_ExtractImages_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'wallet.mojom.ImageExtractor.ExtractImages_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
wallet.mojom.ImageExtractorPtr = wallet.mojom.ImageExtractorRemote;
wallet.mojom.ImageExtractorRequest = wallet.mojom.ImageExtractorPendingReceiver;

