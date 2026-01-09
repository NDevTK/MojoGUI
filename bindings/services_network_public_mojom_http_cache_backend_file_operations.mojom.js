// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/http_cache_backend_file_operations.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: HttpCacheBackendOpenFileFlags
network.mojom.HttpCacheBackendOpenFileFlags = {
  kOpenAndRead: 0,
  kCreateAndWrite: 1,
  kOpenReadWriteWinShareDelete: 2,
  kCreateReadWriteWinShareDelete: 3,
  kCreateAlwaysWriteWinShareDelete: 4,
  kOpenReadWinShareDeleteWinSequentialScan: 5,
};

// Enum: HttpCacheBackendDeleteFileMode
network.mojom.HttpCacheBackendDeleteFileMode = {
  meaning: 0,
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
