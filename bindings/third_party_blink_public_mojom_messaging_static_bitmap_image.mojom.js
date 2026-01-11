// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/messaging/static_bitmap_image.mojom
// Module: blink.mojom

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
      mojo.internal.StructField('release_callback', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.ImageReleaseCallbackRemote), null, false, 0, undefined),
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
  release(token) {
    return this.$.release(token);
  }
};

blink.mojom.ImageReleaseCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImageReleaseCallback', [
      { explicit: null },
    ]);
  }

  release(token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImageReleaseCallback', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ImageReleaseCallback_Release_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ImageReleaseCallback_Release_ParamsSpec.$.structSpec);
          const result = this.impl.release(params.token);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ImageReleaseCallbackReceiver = blink.mojom.ImageReleaseCallbackReceiver;

blink.mojom.ImageReleaseCallbackPtr = blink.mojom.ImageReleaseCallbackRemote;
blink.mojom.ImageReleaseCallbackRequest = blink.mojom.ImageReleaseCallbackPendingReceiver;

