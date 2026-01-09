// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/commerce_web_extractor.mojom
// Module: commerce_web_extractor.mojom

'use strict';

// Module namespace
var commerce_web_extractor = commerce_web_extractor || {};
commerce_web_extractor.mojom = commerce_web_extractor.mojom || {};


// Interface: CommerceWebExtractor
commerce_web_extractor.mojom.CommerceWebExtractor = {};

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
      []);
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

// ParamsSpec for ExtractMetaInfo
commerce_web_extractor.mojom.CommerceWebExtractor_ExtractMetaInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'commerce_web_extractor.mojom.CommerceWebExtractor.ExtractMetaInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

commerce_web_extractor.mojom.CommerceWebExtractor_ExtractMetaInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
commerce_web_extractor.mojom.CommerceWebExtractorPtr = commerce_web_extractor.mojom.CommerceWebExtractorRemote;
commerce_web_extractor.mojom.CommerceWebExtractorRequest = commerce_web_extractor.mojom.CommerceWebExtractorPendingReceiver;

