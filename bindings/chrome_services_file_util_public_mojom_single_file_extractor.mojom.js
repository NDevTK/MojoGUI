// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/single_file_extractor.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: SingleFileExtractor
chrome.mojom.SingleFileExtractorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.SingleFileExtractor';
  }

  extract(src_file, dst_file, listener) {
    // Method: Extract
    return new Promise((resolve) => {
      // Call: Extract(src_file, dst_file, listener)
      resolve({});
    });
  }

};

chrome.mojom.SingleFileExtractorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SingleFileExtractorListener
chrome.mojom.SingleFileExtractorListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.SingleFileExtractorListener';
  }

  onProgress(total_bytes, progress_bytes) {
    // Method: OnProgress
    // Call: OnProgress(total_bytes, progress_bytes)
  }

};

chrome.mojom.SingleFileExtractorListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
