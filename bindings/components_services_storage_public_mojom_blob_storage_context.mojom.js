// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/blob_storage_context.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var mojo_base = mojo_base || {};
var blink = blink || {};

storage.mojom.BlobDataItemTypeSpec = { $: mojo.internal.Enum() };
storage.mojom.WriteBlobToFileResultSpec = { $: mojo.internal.Enum() };
storage.mojom.BlobDataItemSpec = { $: {} };
storage.mojom.BlobDataItemReader = {};
storage.mojom.BlobDataItemReader.$interfaceName = 'storage.mojom.BlobDataItemReader';
storage.mojom.BlobDataItemReader_Read_ParamsSpec = { $: {} };
storage.mojom.BlobDataItemReader_Read_ResponseParamsSpec = { $: {} };
storage.mojom.BlobDataItemReader_ReadSideData_ParamsSpec = { $: {} };
storage.mojom.BlobDataItemReader_ReadSideData_ResponseParamsSpec = { $: {} };
storage.mojom.BlobStorageContext = {};
storage.mojom.BlobStorageContext.$interfaceName = 'storage.mojom.BlobStorageContext';
storage.mojom.BlobStorageContext_RegisterFromDataItem_ParamsSpec = { $: {} };
storage.mojom.BlobStorageContext_RegisterFromMemory_ParamsSpec = { $: {} };
storage.mojom.BlobStorageContext_WriteBlobToFile_ParamsSpec = { $: {} };
storage.mojom.BlobStorageContext_WriteBlobToFile_ResponseParamsSpec = { $: {} };
storage.mojom.BlobStorageContext_Clone_ParamsSpec = { $: {} };

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
mojo.internal.Struct(
    storage.mojom.BlobDataItemSpec, 'storage.mojom.BlobDataItem', [
      mojo.internal.StructField('type', 0, 0, storage.mojom.BlobDataItemTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('side_data_size', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('content_type', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('reader', 32, 0, mojo.internal.InterfaceProxy(storage.mojom.BlobDataItemReaderSpec), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: BlobDataItemReader
mojo.internal.Struct(
    storage.mojom.BlobDataItemReader_Read_ParamsSpec, 'storage.mojom.BlobDataItemReader_Read_Params', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.BlobDataItemReader_Read_ResponseParamsSpec, 'storage.mojom.BlobDataItemReader_Read_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.BlobDataItemReader_ReadSideData_ParamsSpec, 'storage.mojom.BlobDataItemReader_ReadSideData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.BlobDataItemReader_ReadSideData_ResponseParamsSpec, 'storage.mojom.BlobDataItemReader_ReadSideData_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [offset, length, pipe],
      false);
  }

  readSideData() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.BlobDataItemReader_ReadSideData_ParamsSpec,
      storage.mojom.BlobDataItemReader_ReadSideData_ResponseParamsSpec,
      [],
      false);
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

storage.mojom.BlobDataItemReaderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = storage.mojom.BlobDataItemReader_Read_ParamsSpec.$.decode(message.payload);
          const result = this.impl.read(params.offset, params.length, params.pipe);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.BlobDataItemReader_Read_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = storage.mojom.BlobDataItemReader_ReadSideData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.readSideData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.BlobDataItemReader_ReadSideData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

storage.mojom.BlobDataItemReaderReceiver = storage.mojom.BlobDataItemReaderReceiver;

storage.mojom.BlobDataItemReaderPtr = storage.mojom.BlobDataItemReaderRemote;
storage.mojom.BlobDataItemReaderRequest = storage.mojom.BlobDataItemReaderPendingReceiver;


// Interface: BlobStorageContext
mojo.internal.Struct(
    storage.mojom.BlobStorageContext_RegisterFromDataItem_ParamsSpec, 'storage.mojom.BlobStorageContext_RegisterFromDataItem_Params', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('item', 16, 0, storage.mojom.BlobDataItemSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.BlobStorageContext_RegisterFromMemory_ParamsSpec, 'storage.mojom.BlobStorageContext_RegisterFromMemory_Params', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.BlobStorageContext_WriteBlobToFile_ParamsSpec, 'storage.mojom.BlobStorageContext_WriteBlobToFile_Params', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_modified', 16, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('flush_on_write', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    storage.mojom.BlobStorageContext_WriteBlobToFile_ResponseParamsSpec, 'storage.mojom.BlobStorageContext_WriteBlobToFile_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, storage.mojom.WriteBlobToFileResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.BlobStorageContext_Clone_ParamsSpec, 'storage.mojom.BlobStorageContext_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(storage.mojom.BlobStorageContextSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [blob, uuid, item],
      false);
  }

  registerFromMemory(blob, uuid, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.BlobStorageContext_RegisterFromMemory_ParamsSpec,
      null,
      [blob, uuid, data],
      false);
  }

  writeBlobToFile(blob, path, flush_on_write, last_modified) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.BlobStorageContext_WriteBlobToFile_ParamsSpec,
      storage.mojom.BlobStorageContext_WriteBlobToFile_ResponseParamsSpec,
      [blob, path, flush_on_write, last_modified],
      false);
  }

  clone(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.BlobStorageContext_Clone_ParamsSpec,
      null,
      [receiver],
      false);
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

storage.mojom.BlobStorageContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = storage.mojom.BlobStorageContext_RegisterFromDataItem_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerFromDataItem(params.blob, params.uuid, params.item);
          break;
        }
        case 1: {
          const params = storage.mojom.BlobStorageContext_RegisterFromMemory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerFromMemory(params.blob, params.uuid, params.data);
          break;
        }
        case 2: {
          const params = storage.mojom.BlobStorageContext_WriteBlobToFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.writeBlobToFile(params.blob, params.path, params.flush_on_write, params.last_modified);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.BlobStorageContext_WriteBlobToFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = storage.mojom.BlobStorageContext_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.receiver);
          break;
        }
      }
    }});
  }
};

storage.mojom.BlobStorageContextReceiver = storage.mojom.BlobStorageContextReceiver;

storage.mojom.BlobStorageContextPtr = storage.mojom.BlobStorageContextRemote;
storage.mojom.BlobStorageContextRequest = storage.mojom.BlobStorageContextPendingReceiver;

