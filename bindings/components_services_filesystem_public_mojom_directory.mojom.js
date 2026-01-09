// Auto-generated MojoJS binding
// Source: chromium_src/components/services/filesystem/public/mojom/directory.mojom
// Module: filesystem.mojom

'use strict';

// Module namespace
var filesystem = filesystem || {};
filesystem.mojom = filesystem.mojom || {};


// Struct: FileOpenDetails
filesystem.mojom.FileOpenDetails = class {
  constructor(values = {}) {
    this.open_flags = values.open_flags !== undefined ? values.open_flags : 0;
  }
};

// Struct: FileOpenResult
filesystem.mojom.FileOpenResult = class {
  constructor(values = {}) {
    this.file_handle = values.file_handle !== undefined ? values.file_handle : "";
  }
};

// Interface: Directory
filesystem.mojom.DirectoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'filesystem.mojom.Directory';
  }

  read() {
    // Method: Read
    return new Promise((resolve) => {
      // Call: Read()
      resolve({});
    });
  }

  openFileHandle(path, open_flags) {
    // Method: OpenFileHandle
    return new Promise((resolve) => {
      // Call: OpenFileHandle(path, open_flags)
      resolve({});
    });
  }

  openFileHandles(files) {
    // Method: OpenFileHandles
    return new Promise((resolve) => {
      // Call: OpenFileHandles(files)
      resolve({});
    });
  }

  openDirectory(path, directory, open_flags) {
    // Method: OpenDirectory
    return new Promise((resolve) => {
      // Call: OpenDirectory(path, directory, open_flags)
      resolve({});
    });
  }

  rename(path, new_path) {
    // Method: Rename
    return new Promise((resolve) => {
      // Call: Rename(path, new_path)
      resolve({});
    });
  }

  replace(path, new_path) {
    // Method: Replace
    return new Promise((resolve) => {
      // Call: Replace(path, new_path)
      resolve({});
    });
  }

  delete(path, delete_flags) {
    // Method: Delete
    return new Promise((resolve) => {
      // Call: Delete(path, delete_flags)
      resolve({});
    });
  }

  exists(path) {
    // Method: Exists
    return new Promise((resolve) => {
      // Call: Exists(path)
      resolve({});
    });
  }

  isWritable(path) {
    // Method: IsWritable
    return new Promise((resolve) => {
      // Call: IsWritable(path)
      resolve({});
    });
  }

  flush() {
    // Method: Flush
    return new Promise((resolve) => {
      // Call: Flush()
      resolve({});
    });
  }

  statFile(path) {
    // Method: StatFile
    return new Promise((resolve) => {
      // Call: StatFile(path)
      resolve({});
    });
  }

  clone(directory) {
    // Method: Clone
    // Call: Clone(directory)
  }

  readEntireFile(path) {
    // Method: ReadEntireFile
    return new Promise((resolve) => {
      // Call: ReadEntireFile(path)
      resolve({});
    });
  }

  writeFile(path, data) {
    // Method: WriteFile
    return new Promise((resolve) => {
      // Call: WriteFile(path, data)
      resolve({});
    });
  }

};

filesystem.mojom.DirectoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
