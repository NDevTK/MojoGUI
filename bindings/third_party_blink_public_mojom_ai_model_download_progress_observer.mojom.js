// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/model_download_progress_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ModelDownloadProgressObserver
blink.mojom.ModelDownloadProgressObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ModelDownloadProgressObserver';
  }

  once(the) {
    // Method: once
    // Call: once(the)
  }

  onDownloadProgressUpdate(downloaded_bytes, total_bytes) {
    // Method: OnDownloadProgressUpdate
    // Call: OnDownloadProgressUpdate(downloaded_bytes, total_bytes)
  }

};

blink.mojom.ModelDownloadProgressObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
