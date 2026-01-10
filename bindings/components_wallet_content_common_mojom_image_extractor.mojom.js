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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'wallet.mojom.ImageExtractor',
    'context');
  return remote.$;
};

wallet.mojom.ImageExtractorPtr = wallet.mojom.ImageExtractorRemote;
wallet.mojom.ImageExtractorRequest = wallet.mojom.ImageExtractorPendingReceiver;

