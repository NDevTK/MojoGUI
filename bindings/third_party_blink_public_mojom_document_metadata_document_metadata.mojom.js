// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/document_metadata/document_metadata.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: WebPage
blink.mojom.WebPageSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPage',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'entities', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: DocumentMetadata
blink.mojom.DocumentMetadata = {};

blink.mojom.DocumentMetadataPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DocumentMetadataRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DocumentMetadata';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DocumentMetadataPendingReceiver,
      handle);
    this.$ = new blink.mojom.DocumentMetadataRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DocumentMetadataRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getEntities() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DocumentMetadata_GetEntities_ParamsSpec,
      blink.mojom.DocumentMetadata_GetEntities_ResponseParamsSpec,
      []);
  }

};

blink.mojom.DocumentMetadata.getRemote = function() {
  let remote = new blink.mojom.DocumentMetadataRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DocumentMetadata',
    'context');
  return remote.$;
};

// ParamsSpec for GetEntities
blink.mojom.DocumentMetadata_GetEntities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DocumentMetadata.GetEntities_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.DocumentMetadata_GetEntities_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DocumentMetadata.GetEntities_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WebPageSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DocumentMetadataPtr = blink.mojom.DocumentMetadataRemote;
blink.mojom.DocumentMetadataRequest = blink.mojom.DocumentMetadataPendingReceiver;

