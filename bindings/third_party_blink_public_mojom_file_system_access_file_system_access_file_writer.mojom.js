// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_writer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessFileWriter
blink.mojom.FileSystemAccessFileWriterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemAccessFileWriter';
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  write(offset, stream) {
    // Method: Write
    return new Promise((resolve) => {
      // Call: Write(offset, stream)
      resolve({});
    });
  }

  truncate(length) {
    // Method: Truncate
    return new Promise((resolve) => {
      // Call: Truncate(length)
      resolve({});
    });
  }

  close() {
    // Method: Close
    // Call: Close()
  }

  close() {
    // Method: Close
    // Call: Close()
  }

  close() {
    // Method: Close
    return new Promise((resolve) => {
      // Call: Close()
      resolve({});
    });
  }

  abort() {
    // Method: Abort
    // Call: Abort()
  }

  abort() {
    // Method: Abort
    return new Promise((resolve) => {
      // Call: Abort()
      resolve({});
    });
  }

};

blink.mojom.FileSystemAccessFileWriterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
