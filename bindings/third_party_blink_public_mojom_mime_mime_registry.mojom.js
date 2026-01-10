// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mime/mime_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.MimeRegistry = {};
blink.mojom.MimeRegistry.$interfaceName = 'blink.mojom.MimeRegistry';
blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ParamsSpec = { $: {} };
blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ResponseParamsSpec = { $: {} };

// Interface: MimeRegistry
mojo.internal.Struct(
    blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ParamsSpec, 'blink.mojom.MimeRegistry_GetMimeTypeFromExtension_Params', [
      mojo.internal.StructField('extension', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ResponseParamsSpec, 'blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ResponseParams', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [extension],
      false);
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

blink.mojom.MimeRegistryPtr = blink.mojom.MimeRegistryRemote;
blink.mojom.MimeRegistryRequest = blink.mojom.MimeRegistryPendingReceiver;

