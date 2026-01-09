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
  kDefault: 0,
  kEnsureImmediateAvailability: 1,
};

// Struct: FileEnumerationEntry
network.mojom.FileEnumerationEntrySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FileEnumerationEntry',
      packedSize: 40,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'last_accessed', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'last_modified', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: FileEnumerator
network.mojom.FileEnumerator = {};

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
      [num_entries]);
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

// ParamsSpec for GetNext
network.mojom.FileEnumerator_GetNext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FileEnumerator.GetNext_Params',
      packedSize: 16,
      fields: [
        { name: 'num_entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.FileEnumerator_GetNext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.FileEnumerator.GetNext_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'end', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'error', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.FileEnumeratorPtr = network.mojom.FileEnumeratorRemote;
network.mojom.FileEnumeratorRequest = network.mojom.FileEnumeratorPendingReceiver;


// Interface: HttpCacheBackendFileOperations
network.mojom.HttpCacheBackendFileOperations = {};

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
      [path]);
  }

  pathExists(path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_PathExists_ResponseParamsSpec,
      [path]);
  }

  directoryExists(path) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ResponseParamsSpec,
      [path]);
  }

  openFile(path, flags) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_OpenFile_ResponseParamsSpec,
      [path, flags]);
  }

  deleteFile(path, mode) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_DeleteFile_ResponseParamsSpec,
      [path, mode]);
  }

  renameFile(from_path, to_path) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_RenameFile_ResponseParamsSpec,
      [from_path, to_path]);
  }

  getFileInfo(path) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ResponseParamsSpec,
      [path]);
  }

  enumerateFiles(path, receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec,
      null,
      [path, receiver]);
  }

  cleanupDirectory(path) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ParamsSpec,
      network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ResponseParamsSpec,
      [path]);
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

// ParamsSpec for CreateDirectory
network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.CreateDirectory_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.CreateDirectory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PathExists
network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.PathExists_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.HttpCacheBackendFileOperations_PathExists_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.PathExists_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DirectoryExists
network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.DirectoryExists_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.DirectoryExists_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenFile
network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.OpenFile_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'flags', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HttpCacheBackendOpenFileFlagsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.HttpCacheBackendFileOperations_OpenFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.OpenFile_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FileErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteFile
network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.DeleteFile_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HttpCacheBackendDeleteFileModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.HttpCacheBackendFileOperations_DeleteFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.DeleteFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RenameFile
network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.RenameFile_Params',
      packedSize: 24,
      fields: [
        { name: 'from_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'to_path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.HttpCacheBackendFileOperations_RenameFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.RenameFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFileInfo
network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.GetFileInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.GetFileInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileInfoSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnumerateFiles
network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.EnumerateFiles_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CleanupDirectory
network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.CleanupDirectory_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperations.CleanupDirectory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.HttpCacheBackendFileOperationsPtr = network.mojom.HttpCacheBackendFileOperationsRemote;
network.mojom.HttpCacheBackendFileOperationsRequest = network.mojom.HttpCacheBackendFileOperationsPendingReceiver;


// Interface: HttpCacheBackendFileOperationsFactory
network.mojom.HttpCacheBackendFileOperationsFactory = {};

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
      [receiver]);
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

// ParamsSpec for Create
network.mojom.HttpCacheBackendFileOperationsFactory_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpCacheBackendFileOperationsFactory.Create_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.HttpCacheBackendFileOperationsFactoryPtr = network.mojom.HttpCacheBackendFileOperationsFactoryRemote;
network.mojom.HttpCacheBackendFileOperationsFactoryRequest = network.mojom.HttpCacheBackendFileOperationsFactoryPendingReceiver;

