// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/messaging/static_bitmap_image.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ImageReleaseCallback
blink.mojom.ImageReleaseCallback = {};

blink.mojom.ImageReleaseCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ImageReleaseCallbackRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ImageReleaseCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ImageReleaseCallbackPendingReceiver,
      handle);
    this.$ = new blink.mojom.ImageReleaseCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ImageReleaseCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  release(token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ImageReleaseCallback_Release_ParamsSpec.$,
      null,
      [token]);
  }

};

blink.mojom.ImageReleaseCallback.getRemote = function() {
  let remote = new blink.mojom.ImageReleaseCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ImageReleaseCallback',
    'context');
  return remote.$;
};

// ParamsSpec for Release
blink.mojom.ImageReleaseCallback_Release_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ImageReleaseCallback.Release_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ImageReleaseCallbackPtr = blink.mojom.ImageReleaseCallbackRemote;
blink.mojom.ImageReleaseCallbackRequest = blink.mojom.ImageReleaseCallbackPendingReceiver;

