// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/http_cache_backend_file_operations.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: HttpCacheBackendOpenFileFlags
network.mojom.HttpCacheBackendOpenFileFlags = {
};

// Enum: HttpCacheBackendDeleteFileMode
network.mojom.HttpCacheBackendDeleteFileMode = {
};

// Struct: FileEnumerationEntry
network.mojom.FileEnumerationEntry = class {
  constructor(values = {}) {
    this.last_modified = values.last_modified !== undefined ? values.last_modified : 0;
  }
};

// Interface: FileEnumerator
network.mojom.FileEnumeratorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.FileEnumerator';
  }

  getNext(num_entries) {
    // Method: GetNext
    return new Promise((resolve) => {
      // Call: GetNext(num_entries)
      resolve({});
    });
  }

};

network.mojom.FileEnumeratorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HttpCacheBackendFileOperations
network.mojom.HttpCacheBackendFileOperationsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.HttpCacheBackendFileOperations';
  }

  createDirectory(path) {
    // Method: CreateDirectory
    return new Promise((resolve) => {
      // Call: CreateDirectory(path)
      resolve({});
    });
  }

  pathExists(path) {
    // Method: PathExists
    return new Promise((resolve) => {
      // Call: PathExists(path)
      resolve({});
    });
  }

  directoryExists(path) {
    // Method: DirectoryExists
    return new Promise((resolve) => {
      // Call: DirectoryExists(path)
      resolve({});
    });
  }

  openFile(path, flags) {
    // Method: OpenFile
    return new Promise((resolve) => {
      // Call: OpenFile(path, flags)
      resolve({});
    });
  }

  deleteFile(path, mode) {
    // Method: DeleteFile
    return new Promise((resolve) => {
      // Call: DeleteFile(path, mode)
      resolve({});
    });
  }

  renameFile(from_path, to_path) {
    // Method: RenameFile
    return new Promise((resolve) => {
      // Call: RenameFile(from_path, to_path)
      resolve({});
    });
  }

  getFileInfo(path) {
    // Method: GetFileInfo
    return new Promise((resolve) => {
      // Call: GetFileInfo(path)
      resolve({});
    });
  }

  enumerateFiles(path, receiver) {
    // Method: EnumerateFiles
    // Call: EnumerateFiles(path, receiver)
  }

  cleanupDirectory(path) {
    // Method: CleanupDirectory
    return new Promise((resolve) => {
      // Call: CleanupDirectory(path)
      resolve({});
    });
  }

};

network.mojom.HttpCacheBackendFileOperationsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HttpCacheBackendFileOperationsFactory
network.mojom.HttpCacheBackendFileOperationsFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.HttpCacheBackendFileOperationsFactory';
  }

  create(receiver) {
    // Method: Create
    // Call: Create(receiver)
  }

};

network.mojom.HttpCacheBackendFileOperationsFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
