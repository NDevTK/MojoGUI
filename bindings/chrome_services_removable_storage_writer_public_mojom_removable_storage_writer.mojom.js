// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/removable_storage_writer/public/mojom/removable_storage_writer.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: RemovableStorageWriter
chrome.mojom.RemovableStorageWriterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.RemovableStorageWriter';
  }

  write(source, target, client) {
    // Method: Write
    // Call: Write(source, target, client)
  }

  verify(source, target, client) {
    // Method: Verify
    // Call: Verify(source, target, client)
  }

};

chrome.mojom.RemovableStorageWriterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemovableStorageWriterClient
chrome.mojom.RemovableStorageWriterClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.RemovableStorageWriterClient';
  }

  progress(progress) {
    // Method: Progress
    // Call: Progress(progress)
  }

  complete(error) {
    // Method: Complete
    // Call: Complete(error)
  }

};

chrome.mojom.RemovableStorageWriterClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
