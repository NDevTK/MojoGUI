// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mime/mime_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: MimeRegistry
blink.mojom.MimeRegistry = {};

blink.mojom.MimeRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.MimeRegistryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MimeRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.MimeRegistryPendingReceiver,
      handle);
    this.$ = new blink.mojom.MimeRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.MimeRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMimeTypeFromExtension(extension) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ParamsSpec,
      blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ResponseParamsSpec,
      [extension]);
  }

};

blink.mojom.MimeRegistry.getRemote = function() {
  let remote = new blink.mojom.MimeRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MimeRegistry',
    'context');
  return remote.$;
};

// ParamsSpec for GetMimeTypeFromExtension
blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MimeRegistry.GetMimeTypeFromExtension_Params',
      packedSize: 16,
      fields: [
        { name: 'extension', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MimeRegistry.GetMimeTypeFromExtension_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.MimeRegistryPtr = blink.mojom.MimeRegistryRemote;
blink.mojom.MimeRegistryRequest = blink.mojom.MimeRegistryPendingReceiver;

