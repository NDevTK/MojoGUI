// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/blob.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: BlobReaderClient
blink.mojom.BlobReaderClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BlobReaderClient';
  }

  onCalculatedSize(total_size, expected_content_size) {
    // Method: OnCalculatedSize
    // Call: OnCalculatedSize(total_size, expected_content_size)
  }

  finished(failure) {
    // Method: finished
    // Call: finished(failure)
  }

  onComplete(status, data_length) {
    // Method: OnComplete
    // Call: OnComplete(status, data_length)
  }

};

blink.mojom.BlobReaderClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Blob
blink.mojom.BlobPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.Blob';
  }

  clone(blob) {
    // Method: Clone
    // Call: Clone(blob)
  }

  asDataPipeGetter(data_pipe_getter) {
    // Method: AsDataPipeGetter
    // Call: AsDataPipeGetter(data_pipe_getter)
  }

  readAll(pipe, client) {
    // Method: ReadAll
    // Call: ReadAll(pipe, client)
  }

  1(max) {
    // Method: 1
    // Call: 1(max)
  }

  readRange(offset, length, pipe, client) {
    // Method: ReadRange
    // Call: ReadRange(offset, length, pipe, client)
  }

  load(loader, request_method, headers, client) {
    // Method: Load
    // Call: Load(loader, request_method, headers, client)
  }

  data(any) {
    // Method: data
    // Call: data(any)
  }

  readSideData() {
    // Method: ReadSideData
    return new Promise((resolve) => {
      // Call: ReadSideData()
      resolve({});
    });
  }

  captureSnapshot() {
    // Method: CaptureSnapshot
    return new Promise((resolve) => {
      // Call: CaptureSnapshot()
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  getInternalUUID() {
    // Method: GetInternalUUID
    return new Promise((resolve) => {
      // Call: GetInternalUUID()
      resolve({});
    });
  }

};

blink.mojom.BlobRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
