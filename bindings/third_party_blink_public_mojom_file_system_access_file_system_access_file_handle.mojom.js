// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: FileSystemAccessAccessHandleLockMode
blink.mojom.FileSystemAccessAccessHandleLockMode = {
};

// Enum: FileSystemAccessWritableFileStreamLockMode
blink.mojom.FileSystemAccessWritableFileStreamLockMode = {
};

// Struct: FileSystemAccessRegularFile
blink.mojom.FileSystemAccessRegularFile = class {
  constructor(values = {}) {
    this.file_modification_host = values.file_modification_host !== undefined ? values.file_modification_host : 0;
  }
};

// Interface: FileSystemAccessFileHandle
blink.mojom.FileSystemAccessFileHandlePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemAccessFileHandle';
  }

  getPermissionStatus(mode) {
    // Method: GetPermissionStatus
    return new Promise((resolve) => {
      // Call: GetPermissionStatus(mode)
      resolve({});
    });
  }

  requestPermission(mode) {
    // Method: RequestPermission
    return new Promise((resolve) => {
      // Call: RequestPermission(mode)
      resolve({});
    });
  }

  asBlob() {
    // Method: AsBlob
    return new Promise((resolve) => {
      // Call: AsBlob()
      resolve({});
    });
  }

  createFileWriter(keep_existing_data, auto_close, mode) {
    // Method: CreateFileWriter
    return new Promise((resolve) => {
      // Call: CreateFileWriter(keep_existing_data, auto_close, mode)
      resolve({});
    });
  }

  rename(new_entry_name) {
    // Method: Rename
    return new Promise((resolve) => {
      // Call: Rename(new_entry_name)
      resolve({});
    });
  }

  move(destination_directory, new_entry_name) {
    // Method: Move
    return new Promise((resolve) => {
      // Call: Move(destination_directory, new_entry_name)
      resolve({});
    });
  }

  remove() {
    // Method: Remove
    return new Promise((resolve) => {
      // Call: Remove()
      resolve({});
    });
  }

  openAccessHandle(mode) {
    // Method: OpenAccessHandle
    return new Promise((resolve) => {
      // Call: OpenAccessHandle(mode)
      resolve({});
    });
  }

  isSameEntry(other) {
    // Method: IsSameEntry
    return new Promise((resolve) => {
      // Call: IsSameEntry(other)
      resolve({});
    });
  }

  transfer(token) {
    // Method: Transfer
    // Call: Transfer(token)
  }

  getUniqueId() {
    // Method: GetUniqueId
    return new Promise((resolve) => {
      // Call: GetUniqueId()
      resolve({});
    });
  }

  getCloudIdentifiers() {
    // Method: GetCloudIdentifiers
    return new Promise((resolve) => {
      // Call: GetCloudIdentifiers()
      resolve({});
    });
  }

};

blink.mojom.FileSystemAccessFileHandleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
