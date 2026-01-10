// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/document_metadata/document_metadata.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Struct: WebPage
blink.mojom.mojom.WebPageSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPage',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'entities', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(schema_org.mojom.EntitySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: DocumentMetadata
blink.mojom.mojom.DocumentMetadata = {};

blink.mojom.mojom.DocumentMetadataPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DocumentMetadataRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DocumentMetadata';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DocumentMetadataPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DocumentMetadataRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DocumentMetadataRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getEntities() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DocumentMetadata_GetEntities_ParamsSpec,
      blink.mojom.mojom.DocumentMetadata_GetEntities_ResponseParamsSpec,
      []);
  }

};

blink.mojom.mojom.DocumentMetadata.getRemote = function() {
  let remote = new blink.mojom.mojom.DocumentMetadataRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DocumentMetadata',
    'context');
  return remote.$;
};

// ParamsSpec for GetEntities
blink.mojom.mojom.DocumentMetadata_GetEntities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DocumentMetadata.GetEntities_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.DocumentMetadata_GetEntities_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DocumentMetadata.GetEntities_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebPageSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DocumentMetadataPtr = blink.mojom.mojom.DocumentMetadataRemote;
blink.mojom.mojom.DocumentMetadataRequest = blink.mojom.mojom.DocumentMetadataPendingReceiver;

