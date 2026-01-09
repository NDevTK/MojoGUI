// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_delegate_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessFileDelegateHost
blink.mojom.FileSystemAccessFileDelegateHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemAccessFileDelegateHost';
  }

  read(than) {
    // Method: read
    // Call: read(than)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  read(offset, bytes_to_read) {
    // Method: Read
    return new Promise((resolve) => {
      // Call: Read(offset, bytes_to_read)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  write(offset, data) {
    // Method: Write
    return new Promise((resolve) => {
      // Call: Write(offset, data)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  getLength() {
    // Method: GetLength
    return new Promise((resolve) => {
      // Call: GetLength()
      resolve({});
    });
  }

  setLength(length) {
    // Method: SetLength
    return new Promise((resolve) => {
      // Call: SetLength(length)
      resolve({});
    });
  }

};

blink.mojom.FileSystemAccessFileDelegateHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
