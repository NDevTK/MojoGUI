// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/http_cache_backend_file_operations.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.HttpCacheBackendOpenFileFlagsSpec = { $: mojo.internal.Enum() };
network.mojom.HttpCacheBackendDeleteFileModeSpec = { $: mojo.internal.Enum() };
network.mojom.FileEnumerationEntrySpec = { $: {} };
network.mojom.FileEnumerator = {};
network.mojom.FileEnumerator.$interfaceName = 'network.mojom.FileEnumerator';
network.mojom.FileEnumerator_GetNext_ParamsSpec = { $: {} };
network.mojom.FileEnumerator_GetNext_ResponseParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations = {};
network.mojom.HttpCacheBackendFileOperations.$interfaceName = 'network.mojom.HttpCacheBackendFileOperations';
network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ResponseParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_PathExists_ResponseParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ResponseParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_OpenFile_ResponseParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_DeleteFile_ResponseParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_RenameFile_ResponseParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ResponseParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ResponseParamsSpec = { $: {} };
network.mojom.HttpCacheBackendFileOperationsFactory = {};
network.mojom.HttpCacheBackendFileOperationsFactory.$interfaceName = 'network.mojom.HttpCacheBackendFileOperationsFactory';
network.mojom.HttpCacheBackendFileOperationsFactory_Create_ParamsSpec = { $: {} };

// Enum: HttpCacheBackendOpenFileFlags
network.mojom.HttpCacheBackendOpenFileFlags = {
  kOpenAndRead: 33,
  kCreateAndWrite: 66,
  kOpenReadWriteWinShareDelete: 32865,
  kCreateReadWriteWinShareDelete: 32866,
  kCreateAlwaysWriteWinShareDelete: 32840,
  kOpenReadWinShareDeleteWinSequentialScan: 557089,
};

// Enum: HttpCacheBackendDeleteFileMode
network.mojom.HttpCacheBackendDeleteFileMode = {
  kDefault: 0,
  kEnsureImmediateAvailability: 1,
};

// Struct: FileEnumerationEntry
mojo.internal.Struct(
    network.mojom.FileEnumerationEntrySpec, 'network.mojom.FileEnumerationEntry', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('last_accessed', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_modified', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: FileEnumerator
mojo.internal.Struct(
    network.mojom.FileEnumerator_GetNext_ParamsSpec, 'network.mojom.FileEnumerator_GetNext_Params', [
      mojo.internal.StructField('num_entries', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.FileEnumerator_GetNext_ResponseParamsSpec, 'network.mojom.FileEnumerator_GetNext_ResponseParams', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(network.mojom.FileEnumerationEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('end', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('error', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.FileEnumeratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.FileEnumeratorRemote = class {
  static get $interfaceName() {
    return 'network.mojom.FileEnumerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.FileEnumeratorPendingReceiver,
      handle);
    this.$ = new network.mojom.FileEnumeratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getNext(num_entries) {
    return this.$.getNext(num_entries);
  }
};

network.mojom.FileEnumeratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileEnumerator', [
      { explicit: null },
    ]);
  }

  getNext(num_entries) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.FileEnumerator_GetNext_ParamsSpec,
      network.mojom.FileEnumerator_GetNext_ResponseParamsSpec,
      [num_entries],
      false);
  }

};

network.mojom.FileEnumerator.getRemote = function() {
  let remote = new network.mojom.FileEnumeratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.FileEnumerator',
    'context');
  return remote.$;
};

network.mojom.FileEnumeratorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileEnumerator', [
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
             decoder.decodeStructInline(network.mojom.FileEnumerator_GetNext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.FileEnumerator_GetNext_ParamsSpec.$.structSpec);
          const result = this.impl.getNext(params.num_entries);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.FileEnumerator_GetNext_ResponseParamsSpec);
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

network.mojom.FileEnumeratorReceiver = network.mojom.FileEnumeratorReceiver;

network.mojom.FileEnumeratorPtr = network.mojom.FileEnumeratorRemote;
network.mojom.FileEnumeratorRequest = network.mojom.FileEnumeratorPendingReceiver;


// Interface: HttpCacheBackendFileOperations
mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_CreateDirectory_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_PathExists_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_PathExists_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_PathExists_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_DirectoryExists_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_OpenFile_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('flags', 8, 0, network.mojom.HttpCacheBackendOpenFileFlagsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_OpenFile_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_OpenFile_ResponseParams', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_DeleteFile_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, network.mojom.HttpCacheBackendDeleteFileModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_DeleteFile_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_DeleteFile_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_RenameFile_Params', [
      mojo.internal.StructField('from_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('to_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_RenameFile_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_RenameFile_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_GetFileInfo_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, mojo_base.mojom.FileInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.FileEnumeratorRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.HttpCacheBackendFileOperationsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.HttpCacheBackendFileOperationsRemote = class {
  static get $interfaceName() {
    return 'network.mojom.HttpCacheBackendFileOperations';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.HttpCacheBackendFileOperationsPendingReceiver,
      handle);
    this.$ = new network.mojom.HttpCacheBackendFileOperationsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createDirectory(path) {
    return this.$.createDirectory(path);
  }
  pathExists(path) {
    return this.$.pathExists(path);
  }
  directoryExists(path) {
    return this.$.directoryExists(path);
  }
  openFile(path, flags) {
    return this.$.openFile(path, flags);
  }
  deleteFile(path, mode) {
    return this.$.deleteFile(path, mode);
  }
  renameFile(from_path, to_path) {
    return this.$.renameFile(from_path, to_path);
  }
  getFileInfo(path) {
    return this.$.getFileInfo(path);
  }
  enumerateFiles(path, receiver) {
    return this.$.enumerateFiles(path, receiver);
  }
  cleanupDirectory(path) {
    return this.$.cleanupDirectory(path);
  }
};

network.mojom.HttpCacheBackendFileOperationsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HttpCacheBackendFileOperations', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createDirectory(path) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ResponseParamsSpec,
      [path],
      false);
  }

  pathExists(path) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_PathExists_ResponseParamsSpec,
      [path],
      false);
  }

  directoryExists(path) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ResponseParamsSpec,
      [path],
      false);
  }

  openFile(path, flags) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_OpenFile_ResponseParamsSpec,
      [path, flags],
      false);
  }

  deleteFile(path, mode) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_DeleteFile_ResponseParamsSpec,
      [path, mode],
      false);
  }

  renameFile(from_path, to_path) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_RenameFile_ResponseParamsSpec,
      [from_path, to_path],
      false);
  }

  getFileInfo(path) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ResponseParamsSpec,
      [path],
      false);
  }

  enumerateFiles(path, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec,
      null,
      [path, receiver],
      false);
  }

  cleanupDirectory(path) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ResponseParamsSpec,
      [path],
      false);
  }

};

network.mojom.HttpCacheBackendFileOperations.getRemote = function() {
  let remote = new network.mojom.HttpCacheBackendFileOperationsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.HttpCacheBackendFileOperations',
    'context');
  return remote.$;
};

network.mojom.HttpCacheBackendFileOperationsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HttpCacheBackendFileOperations', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ParamsSpec.$.structSpec);
          const result = this.impl.createDirectory(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec.$.structSpec);
          const result = this.impl.pathExists(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.HttpCacheBackendFileOperations_PathExists_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec.$.structSpec);
          const result = this.impl.directoryExists(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec.$.structSpec);
          const result = this.impl.openFile(params.path, params.flags);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.HttpCacheBackendFileOperations_OpenFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec.$.structSpec);
          const result = this.impl.deleteFile(params.path, params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.HttpCacheBackendFileOperations_DeleteFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec.$.structSpec);
          const result = this.impl.renameFile(params.from_path, params.to_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.HttpCacheBackendFileOperations_RenameFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getFileInfo(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec.$.structSpec);
          const result = this.impl.enumerateFiles(params.path, params.receiver);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ParamsSpec.$.structSpec);
          const result = this.impl.cleanupDirectory(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ResponseParamsSpec);
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

network.mojom.HttpCacheBackendFileOperationsReceiver = network.mojom.HttpCacheBackendFileOperationsReceiver;

network.mojom.HttpCacheBackendFileOperationsPtr = network.mojom.HttpCacheBackendFileOperationsRemote;
network.mojom.HttpCacheBackendFileOperationsRequest = network.mojom.HttpCacheBackendFileOperationsPendingReceiver;


// Interface: HttpCacheBackendFileOperationsFactory
mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperationsFactory_Create_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperationsFactory_Create_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.HttpCacheBackendFileOperationsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.HttpCacheBackendFileOperationsFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.HttpCacheBackendFileOperationsFactoryRemote = class {
  static get $interfaceName() {
    return 'network.mojom.HttpCacheBackendFileOperationsFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.HttpCacheBackendFileOperationsFactoryPendingReceiver,
      handle);
    this.$ = new network.mojom.HttpCacheBackendFileOperationsFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  create(receiver) {
    return this.$.create(receiver);
  }
};

network.mojom.HttpCacheBackendFileOperationsFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HttpCacheBackendFileOperationsFactory', [
      { explicit: null },
    ]);
  }

  create(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.HttpCacheBackendFileOperationsFactory_Create_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

network.mojom.HttpCacheBackendFileOperationsFactory.getRemote = function() {
  let remote = new network.mojom.HttpCacheBackendFileOperationsFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.HttpCacheBackendFileOperationsFactory',
    'context');
  return remote.$;
};

network.mojom.HttpCacheBackendFileOperationsFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HttpCacheBackendFileOperationsFactory', [
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
             decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperationsFactory_Create_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.HttpCacheBackendFileOperationsFactory_Create_ParamsSpec.$.structSpec);
          const result = this.impl.create(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.HttpCacheBackendFileOperationsFactoryReceiver = network.mojom.HttpCacheBackendFileOperationsFactoryReceiver;

network.mojom.HttpCacheBackendFileOperationsFactoryPtr = network.mojom.HttpCacheBackendFileOperationsFactoryRemote;
network.mojom.HttpCacheBackendFileOperationsFactoryRequest = network.mojom.HttpCacheBackendFileOperationsFactoryPendingReceiver;

