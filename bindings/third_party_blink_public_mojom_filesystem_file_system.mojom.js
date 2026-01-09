// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/filesystem/file_system.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: FileSystemType
blink.mojom.FileSystemType = {
  kTemporary: 0,
  kPersistent: 1,
  kIsolated: 2,
  kExternal: 3,
};

// Struct: FileSystemInfo
blink.mojom.FileSystemInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemInfo',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'root_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'mount_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: FileSystemCancellableOperation
blink.mojom.FileSystemCancellableOperation = {};

blink.mojom.FileSystemCancellableOperationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemCancellableOperationRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemCancellableOperation';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemCancellableOperationPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemCancellableOperationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemCancellableOperationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec,
      blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParamsSpec,
      []);
  }

};

blink.mojom.FileSystemCancellableOperation.getRemote = function() {
  let remote = new blink.mojom.FileSystemCancellableOperationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemCancellableOperation',
    'context');
  return remote.$;
};

// ParamsSpec for Cancel
blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemCancellableOperation.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemCancellableOperation.Cancel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemCancellableOperationPtr = blink.mojom.FileSystemCancellableOperationRemote;
blink.mojom.FileSystemCancellableOperationRequest = blink.mojom.FileSystemCancellableOperationPendingReceiver;


// Interface: FileSystemOperationListener
blink.mojom.FileSystemOperationListener = {};

blink.mojom.FileSystemOperationListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemOperationListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemOperationListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemOperationListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemOperationListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemOperationListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resultsRetrieved(entries, has_more) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec,
      null,
      [entries, has_more]);
  }

  didWrite(byte_count, complete) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec,
      null,
      [byte_count, complete]);
  }

  errorOccurred(error_code) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec,
      null,
      [error_code]);
  }

};

blink.mojom.FileSystemOperationListener.getRemote = function() {
  let remote = new blink.mojom.FileSystemOperationListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemOperationListener',
    'context');
  return remote.$;
};

// ParamsSpec for ResultsRetrieved
blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemOperationListener.ResultsRetrieved_Params',
      packedSize: 24,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'has_more', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidWrite
blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemOperationListener.DidWrite_Params',
      packedSize: 24,
      fields: [
        { name: 'byte_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'complete', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ErrorOccurred
blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemOperationListener.ErrorOccurred_Params',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemOperationListenerPtr = blink.mojom.FileSystemOperationListenerRemote;
blink.mojom.FileSystemOperationListenerRequest = blink.mojom.FileSystemOperationListenerPendingReceiver;


// Interface: ReceivedSnapshotListener
blink.mojom.ReceivedSnapshotListener = {};

blink.mojom.ReceivedSnapshotListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ReceivedSnapshotListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ReceivedSnapshotListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ReceivedSnapshotListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.ReceivedSnapshotListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ReceivedSnapshotListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didReceiveSnapshotFile() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.ReceivedSnapshotListener.getRemote = function() {
  let remote = new blink.mojom.ReceivedSnapshotListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ReceivedSnapshotListener',
    'context');
  return remote.$;
};

// ParamsSpec for DidReceiveSnapshotFile
blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ReceivedSnapshotListener.DidReceiveSnapshotFile_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ReceivedSnapshotListenerPtr = blink.mojom.ReceivedSnapshotListenerRemote;
blink.mojom.ReceivedSnapshotListenerRequest = blink.mojom.ReceivedSnapshotListenerPendingReceiver;


// Interface: FileSystemManager
blink.mojom.FileSystemManager = {};

blink.mojom.FileSystemManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  open(origin, file_system_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemManager_Open_ParamsSpec,
      blink.mojom.FileSystemManager_Open_ResponseParamsSpec,
      [origin, file_system_type]);
  }

  resolveURL(filesystem_url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemManager_ResolveURL_ParamsSpec,
      blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec,
      [filesystem_url]);
  }

  move(src_path, dest_path) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemManager_Move_ParamsSpec,
      blink.mojom.FileSystemManager_Move_ResponseParamsSpec,
      [src_path, dest_path]);
  }

  copy(src_path, dest_path) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FileSystemManager_Copy_ParamsSpec,
      blink.mojom.FileSystemManager_Copy_ResponseParamsSpec,
      [src_path, dest_path]);
  }

  remove(path, recursive) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FileSystemManager_Remove_ParamsSpec,
      blink.mojom.FileSystemManager_Remove_ResponseParamsSpec,
      [path, recursive]);
  }

  readMetadata(path) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec,
      blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec,
      [path]);
  }

  create(path, exclusive, is_directory, recursive) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FileSystemManager_Create_ParamsSpec,
      blink.mojom.FileSystemManager_Create_ResponseParamsSpec,
      [path, exclusive, is_directory, recursive]);
  }

  exists(path, is_directory) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FileSystemManager_Exists_ParamsSpec,
      blink.mojom.FileSystemManager_Exists_ResponseParamsSpec,
      [path, is_directory]);
  }

  readDirectory(path, listener) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec,
      null,
      [path, listener]);
  }

  readDirectorySync(path) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec,
      blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec,
      [path]);
  }

  write(file_path, blob, position, op_receiver, listener) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.FileSystemManager_Write_ParamsSpec,
      null,
      [file_path, blob, position, op_receiver, listener]);
  }

  writeSync(file_path, blob, position) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.FileSystemManager_WriteSync_ParamsSpec,
      blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec,
      [file_path, blob, position]);
  }

  truncate(file_path, length, op_receiver) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.FileSystemManager_Truncate_ParamsSpec,
      blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec,
      [file_path, length, op_receiver]);
  }

  truncateSync(file_path, length) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.FileSystemManager_TruncateSync_ParamsSpec,
      blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec,
      [file_path, length]);
  }

  createSnapshotFile(file_path) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec,
      blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec,
      [file_path]);
  }

  getPlatformPath(file_path) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec,
      blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec,
      [file_path]);
  }

  registerBlob(content_type, url, length, expected_modification_time) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec,
      blink.mojom.FileSystemManager_RegisterBlob_ResponseParamsSpec,
      [content_type, url, length, expected_modification_time]);
  }

};

blink.mojom.FileSystemManager.getRemote = function() {
  let remote = new blink.mojom.FileSystemManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemManager',
    'context');
  return remote.$;
};

// ParamsSpec for Open
blink.mojom.FileSystemManager_Open_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Open_Params',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'file_system_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_Open_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Open_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'root_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error_code', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResolveURL
blink.mojom.FileSystemManager_ResolveURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.ResolveURL_Params',
      packedSize: 16,
      fields: [
        { name: 'filesystem_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.ResolveURL_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'file_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error_code', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_directory', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Move
blink.mojom.FileSystemManager_Move_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Move_Params',
      packedSize: 24,
      fields: [
        { name: 'src_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'dest_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_Move_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Move_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Copy
blink.mojom.FileSystemManager_Copy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Copy_Params',
      packedSize: 24,
      fields: [
        { name: 'src_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'dest_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_Copy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Copy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Remove
blink.mojom.FileSystemManager_Remove_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Remove_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'recursive', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_Remove_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Remove_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadMetadata
blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.ReadMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.ReadMetadata_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'file_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Create
blink.mojom.FileSystemManager_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Create_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'exclusive', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_directory', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'recursive', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_Create_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Create_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Exists
blink.mojom.FileSystemManager_Exists_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Exists_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_directory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_Exists_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Exists_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadDirectory
blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.ReadDirectory_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'listener', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadDirectorySync
blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.ReadDirectorySync_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.ReadDirectorySync_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'error_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Write
blink.mojom.FileSystemManager_Write_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Write_Params',
      packedSize: 40,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'blob', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'op_receiver', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteSync
blink.mojom.FileSystemManager_WriteSync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.WriteSync_Params',
      packedSize: 32,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'blob', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.WriteSync_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'byte_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'error_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Truncate
blink.mojom.FileSystemManager_Truncate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Truncate_Params',
      packedSize: 32,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'op_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.Truncate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TruncateSync
blink.mojom.FileSystemManager_TruncateSync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.TruncateSync_Params',
      packedSize: 24,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.TruncateSync_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateSnapshotFile
blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.CreateSnapshotFile_Params',
      packedSize: 16,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.CreateSnapshotFile_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'file_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'platform_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error_code', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'snapshot_listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPlatformPath
blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.GetPlatformPath_Params',
      packedSize: 16,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.GetPlatformPath_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'platform_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterBlob
blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.RegisterBlob_Params',
      packedSize: 40,
      fields: [
        { name: 'content_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'expected_modification_time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemManager_RegisterBlob_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemManager.RegisterBlob_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemManagerPtr = blink.mojom.FileSystemManagerRemote;
blink.mojom.FileSystemManagerRequest = blink.mojom.FileSystemManagerPendingReceiver;

