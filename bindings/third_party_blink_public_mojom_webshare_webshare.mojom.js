// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webshare/webshare.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ShareService
blink.mojom.ShareService = {};

blink.mojom.ShareServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ShareServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ShareService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ShareServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.ShareServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ShareServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  share(title, text, url, files) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ShareService_Share_ParamsSpec,
      blink.mojom.ShareService_Share_ResponseParamsSpec,
      blink.mojom.ShareService_Share_ResponseParamsSpec,
      [title, text, url, files],
      undefined,
      undefined
    );
  }

};

blink.mojom.ShareService.getRemote = function() {
  let remote = new blink.mojom.ShareServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ShareService',
    'context');
  return remote.$;
};

// ParamsSpec for Share
blink.mojom.ShareService_Share_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ShareService.Share_Params',
      packedSize: 40,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'files', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.ShareService_Share_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ShareService.Share_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.ShareServicePtr = blink.mojom.ShareServiceRemote;
blink.mojom.ShareServiceRequest = blink.mojom.ShareServicePendingReceiver;

