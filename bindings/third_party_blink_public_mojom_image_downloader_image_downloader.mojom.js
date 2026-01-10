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


// Interface: ImageDownloader
blink.mojom.ImageDownloader = {};

blink.mojom.ImageDownloader_DownloadImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ImageDownloader_DownloadImage_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'is_favicon', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'preferred_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'max_bitmap_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'bypass_cache', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.ImageDownloader_DownloadImageFromAxNode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ImageDownloader_DownloadImageFromAxNode_Params',
      packedSize: 32,
      fields: [
        { name: 'ax_node_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'preferred_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'max_bitmap_size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'bypass_cache', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

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
      [url, is_favicon, preferred_size, max_bitmap_size, bypass_cache]);
  }

  downloadImageFromAxNode(ax_node_id, preferred_size, max_bitmap_size, bypass_cache) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ImageDownloader_DownloadImageFromAxNode_ParamsSpec,
      blink.mojom.ImageDownloader_DownloadImageFromAxNode_ResponseParamsSpec,
      [ax_node_id, preferred_size, max_bitmap_size, bypass_cache]);
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

// ParamsSpec for DownloadImage
blink.mojom.ImageDownloader_DownloadImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ImageDownloader.DownloadImage_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'is_favicon', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'preferred_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'max_bitmap_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'bypass_cache', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.ImageDownloader_DownloadImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ImageDownloader.DownloadImage_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'http_status_code', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(skia.mojom.BitmapN32Spec, false), nullable: false, minVersion: 0 },
        { name: 'original_image_sizes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.SizeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for DownloadImageFromAxNode
blink.mojom.ImageDownloader_DownloadImageFromAxNode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ImageDownloader.DownloadImageFromAxNode_Params',
      packedSize: 32,
      fields: [
        { name: 'ax_node_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'preferred_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'max_bitmap_size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'bypass_cache', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.ImageDownloader_DownloadImageFromAxNode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ImageDownloader.DownloadImageFromAxNode_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'http_status_code', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(skia.mojom.BitmapN32Spec, false), nullable: false, minVersion: 0 },
        { name: 'original_image_sizes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.SizeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
blink.mojom.ImageDownloaderPtr = blink.mojom.ImageDownloaderRemote;
blink.mojom.ImageDownloaderRequest = blink.mojom.ImageDownloaderPendingReceiver;

