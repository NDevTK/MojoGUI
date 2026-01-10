// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/commerce_web_extractor.mojom
// Module: commerce_web_extractor.mojom

'use strict';

// Module namespace
var commerce_web_extractor = commerce_web_extractor || {};
commerce_web_extractor.mojom = commerce_web_extractor.mojom || {};

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'commerce_web_extractor.mojom.CommerceWebExtractor',
    'context');
  return remote.$;
};

commerce_web_extractor.mojom.CommerceWebExtractorPtr = commerce_web_extractor.mojom.CommerceWebExtractorRemote;
commerce_web_extractor.mojom.CommerceWebExtractorRequest = commerce_web_extractor.mojom.CommerceWebExtractorPendingReceiver;

