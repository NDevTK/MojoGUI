// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/messaging/static_bitmap_image.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var gpu = gpu || {};
var mojo_base = mojo_base || {};

blink.mojom.SerializedStaticBitmapImageSpec = { $: {} };
blink.mojom.AcceleratedStaticBitmapImageSpec = { $: {} };
blink.mojom.ImageReleaseCallback = {};
blink.mojom.ImageReleaseCallback.$interfaceName = 'blink.mojom.ImageReleaseCallback';
blink.mojom.ImageReleaseCallback_Release_ParamsSpec = { $: {} };

// Union: SerializedStaticBitmapImage
mojo.internal.Union(
    blink.mojom.SerializedStaticBitmapImageSpec, 'blink.mojom.SerializedStaticBitmapImage', {
      'bitmap': {
        'ordinal': 0,
        'type': skia.mojom.BitmapN32Spec.$,
        'nullable': false,
      },
      'accelerated_image': {
        'ordinal': 1,
        'type': blink.mojom.AcceleratedStaticBitmapImageSpec.$,
        'nullable': false,
      },
    });

// Struct: AcceleratedStaticBitmapImage
mojo.internal.Struct(
    blink.mojom.AcceleratedStaticBitmapImageSpec, 'blink.mojom.AcceleratedStaticBitmapImage', [
      mojo.internal.StructField('shared_image', 0, 0, gpu.mojom.ExportedSharedImageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sync_token', 8, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alpha_type', 16, 0, skia.mojom.AlphaTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('release_callback', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.ImageReleaseCallbackSpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ImageReleaseCallback
mojo.internal.Struct(
    blink.mojom.ImageReleaseCallback_Release_ParamsSpec, 'blink.mojom.ImageReleaseCallback_Release_Params', [
      mojo.internal.StructField('token', 0, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      blink.mojom.ImageReleaseCallback_Release_ParamsSpec,
      null,
      [token],
      false);
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

blink.mojom.ImageReleaseCallbackReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ImageReleaseCallback_Release_ParamsSpec.$.decode(message.payload);
          const result = this.impl.release(params.token);
          break;
        }
      }
      }
    }});
  }
};

blink.mojom.ImageReleaseCallbackReceiver = blink.mojom.ImageReleaseCallbackReceiver;

blink.mojom.ImageReleaseCallbackPtr = blink.mojom.ImageReleaseCallbackRemote;
blink.mojom.ImageReleaseCallbackRequest = blink.mojom.ImageReleaseCallbackPendingReceiver;

