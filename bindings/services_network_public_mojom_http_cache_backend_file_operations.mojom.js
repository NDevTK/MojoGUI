// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/http_cache_backend_file_operations.mojom
// Module: network.mojom

'use strict';

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
};

network.mojom.FileEnumeratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getNext(num_entries) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.FileEnumerator_GetNext_ParamsSpec.$.decode(message.payload);
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
    });
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
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.FileEnumeratorSpec), null, false, 0, undefined),
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
};

network.mojom.HttpCacheBackendFileOperationsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createDirectory(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ResponseParamsSpec,
      [path],
      false);
  }

  pathExists(path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_PathExists_ResponseParamsSpec,
      [path],
      false);
  }

  directoryExists(path) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ResponseParamsSpec,
      [path],
      false);
  }

  openFile(path, flags) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_OpenFile_ResponseParamsSpec,
      [path, flags],
      false);
  }

  deleteFile(path, mode) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_DeleteFile_ResponseParamsSpec,
      [path, mode],
      false);
  }

  renameFile(from_path, to_path) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_RenameFile_ResponseParamsSpec,
      [from_path, to_path],
      false);
  }

  getFileInfo(path) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ResponseParamsSpec,
      [path],
      false);
  }

  enumerateFiles(path, receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec,
      null,
      [path, receiver],
      false);
  }

  cleanupDirectory(path) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ParamsSpec.$.decode(message.payload);
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
          const params = network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec.$.decode(message.payload);
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
          const params = network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec.$.decode(message.payload);
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
          const params = network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec.$.decode(message.payload);
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
          const params = network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec.$.decode(message.payload);
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
          const params = network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec.$.decode(message.payload);
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
          const params = network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec.$.decode(message.payload);
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
          const params = network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enumerateFiles(params.path, params.receiver);
          break;
        }
        case 8: {
          const params = network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

network.mojom.HttpCacheBackendFileOperationsReceiver = network.mojom.HttpCacheBackendFileOperationsReceiver;

network.mojom.HttpCacheBackendFileOperationsPtr = network.mojom.HttpCacheBackendFileOperationsRemote;
network.mojom.HttpCacheBackendFileOperationsRequest = network.mojom.HttpCacheBackendFileOperationsPendingReceiver;


// Interface: HttpCacheBackendFileOperationsFactory
mojo.internal.Struct(
    network.mojom.HttpCacheBackendFileOperationsFactory_Create_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperationsFactory_Create_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.HttpCacheBackendFileOperationsSpec), null, false, 0, undefined),
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
};

network.mojom.HttpCacheBackendFileOperationsFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.HttpCacheBackendFileOperationsFactory_Create_ParamsSpec.$.decode(message.payload);
          const result = this.impl.create(params.receiver);
          break;
        }
      }
    });
  }
};

network.mojom.HttpCacheBackendFileOperationsFactoryReceiver = network.mojom.HttpCacheBackendFileOperationsFactoryReceiver;

network.mojom.HttpCacheBackendFileOperationsFactoryPtr = network.mojom.HttpCacheBackendFileOperationsFactoryRemote;
network.mojom.HttpCacheBackendFileOperationsFactoryRequest = network.mojom.HttpCacheBackendFileOperationsFactoryPendingReceiver;

