// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/messaging/static_bitmap_image.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var skia = skia || {};


// Union: SerializedStaticBitmapImage
blink.mojom.mojom.SerializedStaticBitmapImageSpec = { $: mojo.internal.Union(
    'blink.mojom.SerializedStaticBitmapImage', {
      'bitmap': {
        'ordinal': 0,
        'type': skia.mojom.BitmapN32Spec,
      }},
      'accelerated_image': {
        'ordinal': 1,
        'type': blink.mojom.AcceleratedStaticBitmapImageSpec,
      }},
    })
};

// Struct: AcceleratedStaticBitmapImage
blink.mojom.mojom.AcceleratedStaticBitmapImageSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AcceleratedStaticBitmapImage',
      packedSize: 32,
      fields: [
        { name: 'shared_image', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: false, minVersion: 0 },
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
        { name: 'alpha_type', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.AlphaTypeSpec, nullable: false, minVersion: 0 },
        { name: 'release_callback', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: ImageReleaseCallback
blink.mojom.mojom.ImageReleaseCallback = {};

blink.mojom.mojom.ImageReleaseCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ImageReleaseCallbackRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ImageReleaseCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ImageReleaseCallbackPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ImageReleaseCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ImageReleaseCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  release(token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ImageReleaseCallback_Release_ParamsSpec,
      null,
      [token]);
  }

};

blink.mojom.mojom.ImageReleaseCallback.getRemote = function() {
  let remote = new blink.mojom.mojom.ImageReleaseCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ImageReleaseCallback',
    'context');
  return remote.$;
};

// ParamsSpec for Release
blink.mojom.mojom.ImageReleaseCallback_Release_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ImageReleaseCallback.Release_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ImageReleaseCallbackPtr = blink.mojom.mojom.ImageReleaseCallbackRemote;
blink.mojom.mojom.ImageReleaseCallbackRequest = blink.mojom.mojom.ImageReleaseCallbackPendingReceiver;

