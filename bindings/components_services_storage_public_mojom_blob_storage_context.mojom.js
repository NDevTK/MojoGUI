// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/blob_storage_context.mojom
// Module: storage.mojom

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
      mojo.internal.StructField('reader', 32, 0, mojo.internal.InterfaceProxy(storage.mojom.BlobDataItemReaderRemote), null, false, 0, undefined),
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
  read(offset, length, pipe) {
    return this.$.read(offset, length, pipe);
  }
  readSideData() {
    return this.$.readSideData();
  }
};

storage.mojom.BlobDataItemReaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BlobDataItemReader', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  read(offset, length, pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.BlobDataItemReader_Read_ParamsSpec,
      storage.mojom.BlobDataItemReader_Read_ResponseParamsSpec,
      [offset, length, pipe],
      false);
  }

  readSideData() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BlobDataItemReader', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.BlobDataItemReader_Read_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.BlobDataItemReader_ReadSideData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.BlobDataItemReader_Read_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.BlobDataItemReader_ReadSideData_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(storage.mojom.BlobStorageContextRemote), null, false, 0, undefined),
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
  registerFromDataItem(blob, uuid, item) {
    return this.$.registerFromDataItem(blob, uuid, item);
  }
  registerFromMemory(blob, uuid, data) {
    return this.$.registerFromMemory(blob, uuid, data);
  }
  writeBlobToFile(blob, path, flush_on_write, last_modified) {
    return this.$.writeBlobToFile(blob, path, flush_on_write, last_modified);
  }
  clone(receiver) {
    return this.$.clone(receiver);
  }
};

storage.mojom.BlobStorageContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BlobStorageContext', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  registerFromDataItem(blob, uuid, item) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.BlobStorageContext_RegisterFromDataItem_ParamsSpec,
      null,
      [blob, uuid, item],
      false);
  }

  registerFromMemory(blob, uuid, data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.BlobStorageContext_RegisterFromMemory_ParamsSpec,
      null,
      [blob, uuid, data],
      false);
  }

  writeBlobToFile(blob, path, flush_on_write, last_modified) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      storage.mojom.BlobStorageContext_WriteBlobToFile_ParamsSpec,
      storage.mojom.BlobStorageContext_WriteBlobToFile_ResponseParamsSpec,
      [blob, path, flush_on_write, last_modified],
      false);
  }

  clone(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BlobStorageContext', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.BlobStorageContext_RegisterFromDataItem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.BlobStorageContext_RegisterFromMemory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.BlobStorageContext_WriteBlobToFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.BlobStorageContext_Clone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.BlobStorageContext_RegisterFromDataItem_ParamsSpec.$.structSpec);
          const result = this.impl.registerFromDataItem(params.blob, params.uuid, params.item);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.BlobStorageContext_RegisterFromMemory_ParamsSpec.$.structSpec);
          const result = this.impl.registerFromMemory(params.blob, params.uuid, params.data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.BlobStorageContext_WriteBlobToFile_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.BlobStorageContext_Clone_ParamsSpec.$.structSpec);
          const result = this.impl.clone(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

storage.mojom.BlobStorageContextReceiver = storage.mojom.BlobStorageContextReceiver;

storage.mojom.BlobStorageContextPtr = storage.mojom.BlobStorageContextRemote;
storage.mojom.BlobStorageContextRequest = storage.mojom.BlobStorageContextPendingReceiver;

