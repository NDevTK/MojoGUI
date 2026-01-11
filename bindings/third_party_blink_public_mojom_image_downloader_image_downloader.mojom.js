// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/image_downloader/image_downloader.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var gfx = gfx || {};
var url = url || {};

blink.mojom.ImageDownloader = {};
blink.mojom.ImageDownloader.$interfaceName = 'blink.mojom.ImageDownloader';
blink.mojom.ImageDownloader_DownloadImage_ParamsSpec = { $: {} };
blink.mojom.ImageDownloader_DownloadImage_ResponseParamsSpec = { $: {} };
blink.mojom.ImageDownloader_DownloadImageFromAxNode_ParamsSpec = { $: {} };
blink.mojom.ImageDownloader_DownloadImageFromAxNode_ResponseParamsSpec = { $: {} };

// Interface: ImageDownloader
mojo.internal.Struct(
    blink.mojom.ImageDownloader_DownloadImage_ParamsSpec, 'blink.mojom.ImageDownloader_DownloadImage_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preferred_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_bitmap_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_favicon', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bypass_cache', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ImageDownloader_DownloadImage_ResponseParamsSpec, 'blink.mojom.ImageDownloader_DownloadImage_ResponseParams', [
      mojo.internal.StructField('images', 0, 0, mojo.internal.Array(skia.mojom.BitmapN32Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('original_image_sizes', 8, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('http_status_code', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ImageDownloader_DownloadImageFromAxNode_ParamsSpec, 'blink.mojom.ImageDownloader_DownloadImageFromAxNode_Params', [
      mojo.internal.StructField('preferred_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ax_node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_bitmap_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('bypass_cache', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ImageDownloader_DownloadImageFromAxNode_ResponseParamsSpec, 'blink.mojom.ImageDownloader_DownloadImageFromAxNode_ResponseParams', [
      mojo.internal.StructField('images', 0, 0, mojo.internal.Array(skia.mojom.BitmapN32Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('original_image_sizes', 8, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('http_status_code', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.ImageDownloaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ImageDownloaderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ImageDownloader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ImageDownloaderPendingReceiver,
      handle);
    this.$ = new blink.mojom.ImageDownloaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  downloadImage(url, is_favicon, preferred_size, max_bitmap_size, bypass_cache) {
    return this.$.downloadImage(url, is_favicon, preferred_size, max_bitmap_size, bypass_cache);
  }
  downloadImageFromAxNode(ax_node_id, preferred_size, max_bitmap_size, bypass_cache) {
    return this.$.downloadImageFromAxNode(ax_node_id, preferred_size, max_bitmap_size, bypass_cache);
  }
};

blink.mojom.ImageDownloaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImageDownloader', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  downloadImage(url, is_favicon, preferred_size, max_bitmap_size, bypass_cache) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ImageDownloader_DownloadImage_ParamsSpec,
      blink.mojom.ImageDownloader_DownloadImage_ResponseParamsSpec,
      [url, is_favicon, preferred_size, max_bitmap_size, bypass_cache],
      false);
  }

  downloadImageFromAxNode(ax_node_id, preferred_size, max_bitmap_size, bypass_cache) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ImageDownloader_DownloadImageFromAxNode_ParamsSpec,
      blink.mojom.ImageDownloader_DownloadImageFromAxNode_ResponseParamsSpec,
      [ax_node_id, preferred_size, max_bitmap_size, bypass_cache],
      false);
  }

};

blink.mojom.ImageDownloader.getRemote = function() {
  let remote = new blink.mojom.ImageDownloaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ImageDownloader',
    'context');
  return remote.$;
};

blink.mojom.ImageDownloaderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImageDownloader', [
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.ImageDownloader_DownloadImage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ImageDownloader_DownloadImageFromAxNode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ImageDownloader_DownloadImage_ParamsSpec.$.structSpec);
          const result = this.impl.downloadImage(params.url, params.is_favicon, params.preferred_size, params.max_bitmap_size, params.bypass_cache);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ImageDownloader_DownloadImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ImageDownloader_DownloadImageFromAxNode_ParamsSpec.$.structSpec);
          const result = this.impl.downloadImageFromAxNode(params.ax_node_id, params.preferred_size, params.max_bitmap_size, params.bypass_cache);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ImageDownloader_DownloadImageFromAxNode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ImageDownloaderReceiver = blink.mojom.ImageDownloaderReceiver;

blink.mojom.ImageDownloaderPtr = blink.mojom.ImageDownloaderRemote;
blink.mojom.ImageDownloaderRequest = blink.mojom.ImageDownloaderPendingReceiver;

