// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/zip_file_creator.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: ZipListener
chrome.mojom.ZipListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.ZipListener';
  }

  onProgress(bytes, files, directories) {
    // Method: OnProgress
    // Call: OnProgress(bytes, files, directories)
  }

  onFinished(success) {
    // Method: OnFinished
    // Call: OnFinished(success)
  }

};

chrome.mojom.ZipListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ZipFileCreator
chrome.mojom.ZipFileCreatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.ZipFileCreator';
  }

  createZipFile(src_dir, relative_paths, zip_file, listener) {
    // Method: CreateZipFile
    // Call: CreateZipFile(src_dir, relative_paths, zip_file, listener)
  }

};

chrome.mojom.ZipFileCreatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
