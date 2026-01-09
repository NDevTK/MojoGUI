// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/image_downloader/image_downloader.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ImageDownloader
blink.mojom.ImageDownloaderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ImageDownloader';
  }

  downloadImage(url, is_favicon, preferred_size, max_bitmap_size, bypass_cache) {
    // Method: DownloadImage
    return new Promise((resolve) => {
      // Call: DownloadImage(url, is_favicon, preferred_size, max_bitmap_size, bypass_cache)
      resolve({});
    });
  }

  downloadImageFromAxNode(ax_node_id, preferred_size, max_bitmap_size, bypass_cache) {
    // Method: DownloadImageFromAxNode
    return new Promise((resolve) => {
      // Call: DownloadImageFromAxNode(ax_node_id, preferred_size, max_bitmap_size, bypass_cache)
      resolve({});
    });
  }

};

blink.mojom.ImageDownloaderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
