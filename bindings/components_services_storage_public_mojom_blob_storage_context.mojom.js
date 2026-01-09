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
  kCacheStorage: 1,
  kIndexedDB: 2,
};

// Enum: WriteBlobToFileResult
storage.mojom.WriteBlobToFileResult = {
  kError: 0,
  kBadPath: 1,
  kInvalidBlob: 2,
  kIOError: 3,
  kTimestampError: 4,
  kSuccess: 5,
};

// Struct: BlobDataItem
storage.mojom.BlobDataItemSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobDataItem',
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.BlobDataItemTypeSpec, nullable: false },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'side_data_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'content_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'reader', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: BlobDataItemReader
storage.mojom.BlobDataItemReader = {};

storage.mojom.BlobDataItemReaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.BlobDataItemReaderRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.BlobDataItemReader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.BlobDataItemReaderPendingReceiver,
      handle);
    this.$ = new storage.mojom.BlobDataItemReaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.BlobDataItemReaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read(offset, length, pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.BlobDataItemReader_Read_ParamsSpec,
      storage.mojom.BlobDataItemReader_Read_ResponseParamsSpec,
      [offset, length, pipe]);
  }

  readSideData() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.BlobDataItemReader_ReadSideData_ParamsSpec,
      storage.mojom.BlobDataItemReader_ReadSideData_ResponseParamsSpec,
      []);
  }

};

storage.mojom.BlobDataItemReader.getRemote = function() {
  let remote = new storage.mojom.BlobDataItemReaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.BlobDataItemReader',
    'context');
  return remote.$;
};

// ParamsSpec for Read
storage.mojom.BlobDataItemReader_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobDataItemReader.Read_Params',
      packedSize: 32,
      fields: [
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'pipe', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.BlobDataItemReader_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobDataItemReader.Read_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadSideData
storage.mojom.BlobDataItemReader_ReadSideData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobDataItemReader.ReadSideData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.BlobDataItemReader_ReadSideData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobDataItemReader.ReadSideData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
storage.mojom.BlobDataItemReaderPtr = storage.mojom.BlobDataItemReaderRemote;
storage.mojom.BlobDataItemReaderRequest = storage.mojom.BlobDataItemReaderPendingReceiver;


// Interface: BlobStorageContext
storage.mojom.BlobStorageContext = {};

storage.mojom.BlobStorageContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.BlobStorageContextRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.BlobStorageContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.BlobStorageContextPendingReceiver,
      handle);
    this.$ = new storage.mojom.BlobStorageContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.BlobStorageContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerFromDataItem(blob, uuid, item) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.BlobStorageContext_RegisterFromDataItem_ParamsSpec,
      null,
      [blob, uuid, item]);
  }

  registerFromMemory(blob, uuid, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.BlobStorageContext_RegisterFromMemory_ParamsSpec,
      null,
      [blob, uuid, data]);
  }

  writeBlobToFile(blob, path, flush_on_write, last_modified) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.BlobStorageContext_WriteBlobToFile_ParamsSpec,
      storage.mojom.BlobStorageContext_WriteBlobToFile_ResponseParamsSpec,
      [blob, path, flush_on_write, last_modified]);
  }

  clone(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.BlobStorageContext_Clone_ParamsSpec,
      null,
      [receiver]);
  }

};

storage.mojom.BlobStorageContext.getRemote = function() {
  let remote = new storage.mojom.BlobStorageContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.BlobStorageContext',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterFromDataItem
storage.mojom.BlobStorageContext_RegisterFromDataItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobStorageContext.RegisterFromDataItem_Params',
      packedSize: 32,
      fields: [
        { name: 'blob', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'uuid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'item', packedOffset: 24, packedBitOffset: 0, type: storage.mojom.BlobDataItemSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterFromMemory
storage.mojom.BlobStorageContext_RegisterFromMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobStorageContext.RegisterFromMemory_Params',
      packedSize: 32,
      fields: [
        { name: 'blob', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'uuid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'data', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteBlobToFile
storage.mojom.BlobStorageContext_WriteBlobToFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobStorageContext.WriteBlobToFile_Params',
      packedSize: 40,
      fields: [
        { name: 'blob', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'path', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'flush_on_write', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'last_modified', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.BlobStorageContext_WriteBlobToFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobStorageContext.WriteBlobToFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.WriteBlobToFileResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Clone
storage.mojom.BlobStorageContext_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobStorageContext.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
storage.mojom.BlobStorageContextPtr = storage.mojom.BlobStorageContextRemote;
storage.mojom.BlobStorageContextRequest = storage.mojom.BlobStorageContextPendingReceiver;

