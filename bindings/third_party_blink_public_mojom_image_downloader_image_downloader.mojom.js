// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/image_downloader/image_downloader.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ImageDownloader
blink.mojom.ImageDownloader = {};

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
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'is_favicon', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'preferred_size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'max_bitmap_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'bypass_cache', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ImageDownloader_DownloadImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ImageDownloader.DownloadImage_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'http_status_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'images', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'original_image_sizes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DownloadImageFromAxNode
blink.mojom.ImageDownloader_DownloadImageFromAxNode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ImageDownloader.DownloadImageFromAxNode_Params',
      packedSize: 40,
      fields: [
        { name: 'ax_node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'preferred_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'max_bitmap_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'bypass_cache', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ImageDownloader_DownloadImageFromAxNode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ImageDownloader.DownloadImageFromAxNode_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'http_status_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'images', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'original_image_sizes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ImageDownloaderPtr = blink.mojom.ImageDownloaderRemote;
blink.mojom.ImageDownloaderRequest = blink.mojom.ImageDownloaderPendingReceiver;

