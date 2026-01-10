// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_directory_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};

blink.mojom.FileSystemAccessHandleSpec = { $: {} };
blink.mojom.FileSystemAccessEntrySpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryEntriesListener = {};
blink.mojom.FileSystemAccessDirectoryEntriesListener.$interfaceName = 'blink.mojom.FileSystemAccessDirectoryEntriesListener';
blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle = {};
blink.mojom.FileSystemAccessDirectoryHandle.$interfaceName = 'blink.mojom.FileSystemAccessDirectoryHandle';
blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec = { $: {} };

// Union: FileSystemAccessHandle
mojo.internal.Union(
    blink.mojom.FileSystemAccessHandleSpec, 'blink.mojom.FileSystemAccessHandle', {
      'file': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessFileHandleRemote),
        'nullable': false,
      },
      'directory': {
        'ordinal': 1,
        'type': mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleRemote),
        'nullable': false,
      },
    });

// Struct: FileSystemAccessEntry
mojo.internal.Struct(
    blink.mojom.FileSystemAccessEntrySpec, 'blink.mojom.FileSystemAccessEntry', [
      mojo.internal.StructField('entry_handle', 0, 0, blink.mojom.FileSystemAccessHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FileSystemAccessDirectoryEntriesListener
mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_Params', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('entries', 8, 0, mojo.internal.Array(blink.mojom.FileSystemAccessEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('has_more_entries', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.FileSystemAccessDirectoryEntriesListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessDirectoryEntriesListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessDirectoryEntriesListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessDirectoryEntriesListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessDirectoryEntriesListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didReadDirectory(result, entries, has_more_entries) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec,
      null,
      [result, entries, has_more_entries],
      false);
  }

};

blink.mojom.FileSystemAccessDirectoryEntriesListener.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.FileSystemAccessDirectoryEntriesListener',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessDirectoryEntriesListenerPtr = blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote;
blink.mojom.FileSystemAccessDirectoryEntriesListenerRequest = blink.mojom.FileSystemAccessDirectoryEntriesListenerPendingReceiver;


// Interface: FileSystemAccessDirectoryHandle
mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.FileSystemAccessPermissionModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.FileSystemAccessPermissionModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetFile_Params', [
      mojo.internal.StructField('basename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('create', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessFileHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_Params', [
      mojo.internal.StructField('basename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('create', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Rename_Params', [
      mojo.internal.StructField('new_entry_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Move_Params', [
      mojo.internal.StructField('destination_directory', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
      mojo.internal.StructField('new_entry_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Remove_Params', [
      mojo.internal.StructField('recurse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_Params', [
      mojo.internal.StructField('basename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('recurse', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Resolve_Params', [
      mojo.internal.StructField('possible_child', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Transfer_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cloud_identifiers', 8, 0, mojo.internal.Array(blink.mojom.FileSystemAccessCloudIdentifierSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.FileSystemAccessDirectoryHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessDirectoryHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessDirectoryHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessDirectoryHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessDirectoryHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessDirectoryHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPermissionStatus(mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec,
      [mode],
      false);
  }

  requestPermission(mode) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec,
      [mode],
      false);
  }

  getFile(basename, create) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec,
      [basename, create],
      false);
  }

  getDirectory(basename, create) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec,
      [basename, create],
      false);
  }

  getEntries(listener) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec,
      null,
      [listener],
      false);
  }

  rename(new_entry_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec,
      [new_entry_name],
      false);
  }

  move(destination_directory, new_entry_name) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec,
      [destination_directory, new_entry_name],
      false);
  }

  remove(recurse) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec,
      [recurse],
      false);
  }

  removeEntry(basename, recurse) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec,
      [basename, recurse],
      false);
  }

  resolve(possible_child) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec,
      [possible_child],
      false);
  }

  transfer(token) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec,
      null,
      [token],
      false);
  }

  getUniqueId() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec,
      [],
      false);
  }

  getCloudIdentifiers() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.FileSystemAccessDirectoryHandle.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessDirectoryHandleRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.FileSystemAccessDirectoryHandle',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessDirectoryHandlePtr = blink.mojom.FileSystemAccessDirectoryHandleRemote;
blink.mojom.FileSystemAccessDirectoryHandleRequest = blink.mojom.FileSystemAccessDirectoryHandlePendingReceiver;

