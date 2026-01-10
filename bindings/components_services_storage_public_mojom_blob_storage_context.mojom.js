// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/blob_storage_context.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};


// Enum: BlobDataItemType
storage.mojom.mojom.BlobDataItemType = {
  kUnknown: 0,
  kCacheStorage: 1,
  kIndexedDB: 2,
};
storage.mojom.mojom.BlobDataItemTypeSpec = { $: mojo.internal.Enum() };

// Enum: WriteBlobToFileResult
storage.mojom.mojom.WriteBlobToFileResult = {
  kError: 0,
  kBadPath: 1,
  kInvalidBlob: 2,
  kIOError: 3,
  kTimestampError: 4,
  kSuccess: 5,
};
storage.mojom.mojom.WriteBlobToFileResultSpec = { $: mojo.internal.Enum() };

// Struct: BlobDataItem
storage.mojom.mojom.BlobDataItemSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobDataItem',
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: storage.mojom.BlobDataItemTypeSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'side_data_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'content_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'reader', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(storage.mojom.BlobDataItemReaderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: BlobDataItemReader
storage.mojom.mojom.BlobDataItemReader = {};

storage.mojom.mojom.BlobDataItemReaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.BlobDataItemReaderRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.BlobDataItemReader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.BlobDataItemReaderPendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.BlobDataItemReaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.BlobDataItemReaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read(offset, length, pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.mojom.BlobDataItemReader_Read_ParamsSpec,
      storage.mojom.mojom.BlobDataItemReader_Read_ResponseParamsSpec,
      [offset, length, pipe]);
  }

  readSideData() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.mojom.BlobDataItemReader_ReadSideData_ParamsSpec,
      storage.mojom.mojom.BlobDataItemReader_ReadSideData_ResponseParamsSpec,
      []);
  }

};

storage.mojom.mojom.BlobDataItemReader.getRemote = function() {
  let remote = new storage.mojom.mojom.BlobDataItemReaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.BlobDataItemReader',
    'context');
  return remote.$;
};

// ParamsSpec for Read
storage.mojom.mojom.BlobDataItemReader_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobDataItemReader.Read_Params',
      packedSize: 32,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'pipe', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

storage.mojom.mojom.BlobDataItemReader_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobDataItemReader.Read_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReadSideData
storage.mojom.mojom.BlobDataItemReader_ReadSideData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobDataItemReader.ReadSideData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.mojom.BlobDataItemReader_ReadSideData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobDataItemReader.ReadSideData_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
storage.mojom.mojom.BlobDataItemReaderPtr = storage.mojom.mojom.BlobDataItemReaderRemote;
storage.mojom.mojom.BlobDataItemReaderRequest = storage.mojom.mojom.BlobDataItemReaderPendingReceiver;


// Interface: BlobStorageContext
storage.mojom.mojom.BlobStorageContext = {};

storage.mojom.mojom.BlobStorageContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.BlobStorageContextRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.BlobStorageContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.BlobStorageContextPendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.BlobStorageContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.BlobStorageContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerFromDataItem(blob, uuid, item) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.mojom.BlobStorageContext_RegisterFromDataItem_ParamsSpec,
      null,
      [blob, uuid, item]);
  }

  registerFromMemory(blob, uuid, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.mojom.BlobStorageContext_RegisterFromMemory_ParamsSpec,
      null,
      [blob, uuid, data]);
  }

  writeBlobToFile(blob, path, flush_on_write, last_modified) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.mojom.BlobStorageContext_WriteBlobToFile_ParamsSpec,
      storage.mojom.mojom.BlobStorageContext_WriteBlobToFile_ResponseParamsSpec,
      [blob, path, flush_on_write, last_modified]);
  }

  clone(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.mojom.BlobStorageContext_Clone_ParamsSpec,
      null,
      [receiver]);
  }

};

storage.mojom.mojom.BlobStorageContext.getRemote = function() {
  let remote = new storage.mojom.mojom.BlobStorageContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.BlobStorageContext',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterFromDataItem
storage.mojom.mojom.BlobStorageContext_RegisterFromDataItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobStorageContext.RegisterFromDataItem_Params',
      packedSize: 32,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.BlobRemote), nullable: false, minVersion: 0 },
        { name: 'uuid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'item', packedOffset: 16, packedBitOffset: 0, type: storage.mojom.BlobDataItemSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for RegisterFromMemory
storage.mojom.mojom.BlobStorageContext_RegisterFromMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobStorageContext.RegisterFromMemory_Params',
      packedSize: 40,
      fields: [
        { name: 'blob', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.BlobRemote), nullable: false, minVersion: 0 },
        { name: 'uuid', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for WriteBlobToFile
storage.mojom.mojom.BlobStorageContext_WriteBlobToFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobStorageContext.WriteBlobToFile_Params',
      packedSize: 40,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'flush_on_write', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'last_modified', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

storage.mojom.mojom.BlobStorageContext_WriteBlobToFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobStorageContext.WriteBlobToFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.WriteBlobToFileResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
storage.mojom.mojom.BlobStorageContext_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BlobStorageContext.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(storage.mojom.BlobStorageContextRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
storage.mojom.mojom.BlobStorageContextPtr = storage.mojom.mojom.BlobStorageContextRemote;
storage.mojom.mojom.BlobStorageContextRequest = storage.mojom.mojom.BlobStorageContextPendingReceiver;

