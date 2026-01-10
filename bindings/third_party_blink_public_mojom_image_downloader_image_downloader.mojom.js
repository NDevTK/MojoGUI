// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/image_downloader/image_downloader.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var ui = ui || {};
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
      mojo.internal.StructField('is_favicon', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('preferred_size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_bitmap_size', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('bypass_cache', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.ImageDownloader_DownloadImage_ResponseParamsSpec, 'blink.mojom.ImageDownloader_DownloadImage_ResponseParams', [
      mojo.internal.StructField('http_status_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('images', 8, 0, mojo.internal.Array(skia.mojom.BitmapN32Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('original_image_sizes', 16, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ImageDownloader_DownloadImageFromAxNode_ParamsSpec, 'blink.mojom.ImageDownloader_DownloadImageFromAxNode_Params', [
      mojo.internal.StructField('ax_node_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('preferred_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_bitmap_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('bypass_cache', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ImageDownloader_DownloadImageFromAxNode_ResponseParamsSpec, 'blink.mojom.ImageDownloader_DownloadImageFromAxNode_ResponseParams', [
      mojo.internal.StructField('http_status_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('images', 8, 0, mojo.internal.Array(skia.mojom.BitmapN32Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('original_image_sizes', 16, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
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
};

blink.mojom.ImageDownloaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  downloadImage(url, is_favicon, preferred_size, max_bitmap_size, bypass_cache) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ImageDownloader_DownloadImage_ParamsSpec,
      blink.mojom.ImageDownloader_DownloadImage_ResponseParamsSpec,
      [url, is_favicon, preferred_size, max_bitmap_size, bypass_cache],
      false);
  }

  downloadImageFromAxNode(ax_node_id, preferred_size, max_bitmap_size, bypass_cache) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ImageDownloader_DownloadImageFromAxNode_ParamsSpec,
      blink.mojom.ImageDownloader_DownloadImageFromAxNode_ResponseParamsSpec,
      [ax_node_id, preferred_size, max_bitmap_size, bypass_cache],
      false);
  }

};

blink.mojom.ImageDownloader.getRemote = function() {
  let remote = new blink.mojom.ImageDownloaderRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.ImageDownloader',
    'context');
  return remote.$;
};

blink.mojom.ImageDownloaderPtr = blink.mojom.ImageDownloaderRemote;
blink.mojom.ImageDownloaderRequest = blink.mojom.ImageDownloaderPendingReceiver;

