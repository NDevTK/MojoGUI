// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/blob_storage_context.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: BlobDataItemType
storage.mojom.BlobDataItemType = {
  kUnknown: 0,
};

// Enum: WriteBlobToFileResult
storage.mojom.WriteBlobToFileResult = {
  kError: 0,
};

// Struct: BlobDataItem
storage.mojom.BlobDataItem = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
    this.size = values.size !== undefined ? values.size : 0;
    this.reader = values.reader !== undefined ? values.reader : 0;
  }
};

// Interface: BlobDataItemReader
storage.mojom.BlobDataItemReaderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.BlobDataItemReader';
  }

  read(offset, length, pipe) {
    // Method: Read
    return new Promise((resolve) => {
      // Call: Read(offset, length, pipe)
      resolve({});
    });
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

};

storage.mojom.BlobDataItemReaderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BlobStorageContext
storage.mojom.BlobStorageContextPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.BlobStorageContext';
  }

  registerFromDataItem(blob, uuid, item) {
    // Method: RegisterFromDataItem
    // Call: RegisterFromDataItem(blob, uuid, item)
  }

  registerFromMemory(blob, uuid, data) {
    // Method: RegisterFromMemory
    // Call: RegisterFromMemory(blob, uuid, data)
  }

  writeBlobToFile(blob, path, flush_on_write, last_modified) {
    // Method: WriteBlobToFile
    return new Promise((resolve) => {
      // Call: WriteBlobToFile(blob, path, flush_on_write, last_modified)
      resolve({});
    });
  }

  clone(receiver) {
    // Method: Clone
    // Call: Clone(receiver)
  }

};

storage.mojom.BlobStorageContextRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
