// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/filesystem/file_system.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var components = components || {};
var services = services || {};
var url = url || {};
var url = url || {};
var blink = blink || {};
var blink = blink || {};

blink.mojom.FileSystemTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.FileSystemInfoSpec = { $: {} };
blink.mojom.FileSystemCancellableOperation = {};
blink.mojom.FileSystemCancellableOperation.$interfaceName = 'blink.mojom.FileSystemCancellableOperation';
blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec = { $: {} };
blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemOperationListener = {};
blink.mojom.FileSystemOperationListener.$interfaceName = 'blink.mojom.FileSystemOperationListener';
blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec = { $: {} };
blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec = { $: {} };
blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec = { $: {} };
blink.mojom.ReceivedSnapshotListener = {};
blink.mojom.ReceivedSnapshotListener.$interfaceName = 'blink.mojom.ReceivedSnapshotListener';
blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager = {};
blink.mojom.FileSystemManager.$interfaceName = 'blink.mojom.FileSystemManager';
blink.mojom.FileSystemManager_Open_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Open_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ResolveURL_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Move_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Move_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Copy_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Copy_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Remove_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Remove_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Create_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Create_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Exists_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Exists_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Write_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_WriteSync_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Truncate_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_TruncateSync_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec = { $: {} };
blink.mojom.FileSystemManager_RegisterBlob_ResponseParamsSpec = { $: {} };

// Enum: FileSystemType
blink.mojom.FileSystemType = {
  kTemporary: 0,
  kPersistent: 1,
  kIsolated: 2,
  kExternal: 3,
};

// Struct: FileSystemInfo
mojo.internal.Struct(
    blink.mojom.FileSystemInfoSpec, 'blink.mojom.FileSystemInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('root_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('mount_type', 16, 0, blink.mojom.FileSystemTypeSpec, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FileSystemCancellableOperation
mojo.internal.Struct(
    blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec, 'blink.mojom.FileSystemCancellableOperation_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParamsSpec, 'blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
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

blink.mojom.FileSystemCancellableOperationPtr = blink.mojom.FileSystemCancellableOperationRemote;
blink.mojom.FileSystemCancellableOperationRequest = blink.mojom.FileSystemCancellableOperationPendingReceiver;


// Interface: FileSystemOperationListener
mojo.internal.Struct(
    blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec, 'blink.mojom.FileSystemOperationListener_ResultsRetrieved_Params', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(filesystem.mojom.DirectoryEntrySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('has_more', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec, 'blink.mojom.FileSystemOperationListener_DidWrite_Params', [
      mojo.internal.StructField('byte_count', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('complete', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec, 'blink.mojom.FileSystemOperationListener_ErrorOccurred_Params', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [entries, has_more],
      false);
  }

  didWrite(byte_count, complete) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec,
      null,
      [byte_count, complete],
      false);
  }

  errorOccurred(error_code) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec,
      null,
      [error_code],
      false);
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

blink.mojom.FileSystemOperationListenerPtr = blink.mojom.FileSystemOperationListenerRemote;
blink.mojom.FileSystemOperationListenerRequest = blink.mojom.FileSystemOperationListenerPendingReceiver;


// Interface: ReceivedSnapshotListener
mojo.internal.Struct(
    blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec, 'blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

blink.mojom.ReceivedSnapshotListenerPtr = blink.mojom.ReceivedSnapshotListenerRemote;
blink.mojom.ReceivedSnapshotListenerRequest = blink.mojom.ReceivedSnapshotListenerPendingReceiver;


// Interface: FileSystemManager
mojo.internal.Struct(
    blink.mojom.FileSystemManager_Open_ParamsSpec, 'blink.mojom.FileSystemManager_Open_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('file_system_type', 8, 0, blink.mojom.FileSystemTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Open_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Open_ResponseParams', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('root_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 16, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ResolveURL_ParamsSpec, 'blink.mojom.FileSystemManager_ResolveURL_Params', [
      mojo.internal.StructField('filesystem_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec, 'blink.mojom.FileSystemManager_ResolveURL_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, blink.mojom.FileSystemInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('file_path', 8, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_directory', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('error_code', 20, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Move_ParamsSpec, 'blink.mojom.FileSystemManager_Move_Params', [
      mojo.internal.StructField('src_path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('dest_path', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Move_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Move_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Copy_ParamsSpec, 'blink.mojom.FileSystemManager_Copy_Params', [
      mojo.internal.StructField('src_path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('dest_path', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Copy_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Copy_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Remove_ParamsSpec, 'blink.mojom.FileSystemManager_Remove_Params', [
      mojo.internal.StructField('path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('recursive', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Remove_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Remove_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec, 'blink.mojom.FileSystemManager_ReadMetadata_Params', [
      mojo.internal.StructField('path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec, 'blink.mojom.FileSystemManager_ReadMetadata_ResponseParams', [
      mojo.internal.StructField('file_info', 0, 0, mojo_base.mojom.FileInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Create_ParamsSpec, 'blink.mojom.FileSystemManager_Create_Params', [
      mojo.internal.StructField('path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('exclusive', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_directory', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('recursive', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Create_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Create_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Exists_ParamsSpec, 'blink.mojom.FileSystemManager_Exists_Params', [
      mojo.internal.StructField('path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_directory', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Exists_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Exists_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec, 'blink.mojom.FileSystemManager_ReadDirectory_Params', [
      mojo.internal.StructField('path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('listener', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemOperationListenerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec, 'blink.mojom.FileSystemManager_ReadDirectorySync_Params', [
      mojo.internal.StructField('path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec, 'blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParams', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(filesystem.mojom.DirectoryEntrySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Write_ParamsSpec, 'blink.mojom.FileSystemManager_Write_Params', [
      mojo.internal.StructField('file_path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('blob', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('position', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('op_receiver', 24, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemCancellableOperationRemote), null, false, 0, undefined),
      mojo.internal.StructField('listener', 32, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemOperationListenerRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_WriteSync_ParamsSpec, 'blink.mojom.FileSystemManager_WriteSync_Params', [
      mojo.internal.StructField('file_path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('blob', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('position', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec, 'blink.mojom.FileSystemManager_WriteSync_ResponseParams', [
      mojo.internal.StructField('byte_count', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Truncate_ParamsSpec, 'blink.mojom.FileSystemManager_Truncate_Params', [
      mojo.internal.StructField('file_path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('op_receiver', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemCancellableOperationRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Truncate_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_TruncateSync_ParamsSpec, 'blink.mojom.FileSystemManager_TruncateSync_Params', [
      mojo.internal.StructField('file_path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec, 'blink.mojom.FileSystemManager_TruncateSync_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec, 'blink.mojom.FileSystemManager_CreateSnapshotFile_Params', [
      mojo.internal.StructField('file_path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec, 'blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParams', [
      mojo.internal.StructField('file_info', 0, 0, mojo_base.mojom.FileInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('platform_path', 8, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 16, 0, mojo_base.mojom.FileErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('snapshot_listener', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.ReceivedSnapshotListenerRemote), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec, 'blink.mojom.FileSystemManager_GetPlatformPath_Params', [
      mojo.internal.StructField('file_path', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec, 'blink.mojom.FileSystemManager_GetPlatformPath_ResponseParams', [
      mojo.internal.StructField('platform_path', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec, 'blink.mojom.FileSystemManager_RegisterBlob_Params', [
      mojo.internal.StructField('content_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('expected_modification_time', 24, 0, mojo_base.mojom.TimeSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FileSystemManager_RegisterBlob_ResponseParamsSpec, 'blink.mojom.FileSystemManager_RegisterBlob_ResponseParams', [
      mojo.internal.StructField('blob', 0, 0, blink.mojom.SerializedBlobSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [origin, file_system_type],
      false);
  }

  resolveURL(filesystem_url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemManager_ResolveURL_ParamsSpec,
      blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec,
      [filesystem_url],
      false);
  }

  move(src_path, dest_path) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemManager_Move_ParamsSpec,
      blink.mojom.FileSystemManager_Move_ResponseParamsSpec,
      [src_path, dest_path],
      false);
  }

  copy(src_path, dest_path) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FileSystemManager_Copy_ParamsSpec,
      blink.mojom.FileSystemManager_Copy_ResponseParamsSpec,
      [src_path, dest_path],
      false);
  }

  remove(path, recursive) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FileSystemManager_Remove_ParamsSpec,
      blink.mojom.FileSystemManager_Remove_ResponseParamsSpec,
      [path, recursive],
      false);
  }

  readMetadata(path) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec,
      blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec,
      [path],
      false);
  }

  create(path, exclusive, is_directory, recursive) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FileSystemManager_Create_ParamsSpec,
      blink.mojom.FileSystemManager_Create_ResponseParamsSpec,
      [path, exclusive, is_directory, recursive],
      false);
  }

  exists(path, is_directory) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FileSystemManager_Exists_ParamsSpec,
      blink.mojom.FileSystemManager_Exists_ResponseParamsSpec,
      [path, is_directory],
      false);
  }

  readDirectory(path, listener) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec,
      null,
      [path, listener],
      false);
  }

  readDirectorySync(path) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec,
      blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec,
      [path],
      false);
  }

  write(file_path, blob, position, op_receiver, listener) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.FileSystemManager_Write_ParamsSpec,
      null,
      [file_path, blob, position, op_receiver, listener],
      false);
  }

  writeSync(file_path, blob, position) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.FileSystemManager_WriteSync_ParamsSpec,
      blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec,
      [file_path, blob, position],
      false);
  }

  truncate(file_path, length, op_receiver) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.FileSystemManager_Truncate_ParamsSpec,
      blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec,
      [file_path, length, op_receiver],
      false);
  }

  truncateSync(file_path, length) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.FileSystemManager_TruncateSync_ParamsSpec,
      blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec,
      [file_path, length],
      false);
  }

  createSnapshotFile(file_path) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec,
      blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec,
      [file_path],
      false);
  }

  getPlatformPath(file_path) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec,
      blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec,
      [file_path],
      false);
  }

  registerBlob(content_type, url, length, expected_modification_time) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec,
      blink.mojom.FileSystemManager_RegisterBlob_ResponseParamsSpec,
      [content_type, url, length, expected_modification_time],
      false);
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

blink.mojom.FileSystemManagerPtr = blink.mojom.FileSystemManagerRemote;
blink.mojom.FileSystemManagerRequest = blink.mojom.FileSystemManagerPendingReceiver;

