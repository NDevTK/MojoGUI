// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_directory_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessDirectoryEntriesListener
blink.mojom.FileSystemAccessDirectoryEntriesListener = {};

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
      [result, entries, has_more_entries]);
  }

};

blink.mojom.FileSystemAccessDirectoryEntriesListener.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessDirectoryEntriesListener',
    'context');
  return remote.$;
};

// ParamsSpec for DidReadDirectory
blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryEntriesListener.DidReadDirectory_Params',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'entries', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'has_more_entries', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemAccessDirectoryEntriesListenerPtr = blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote;
blink.mojom.FileSystemAccessDirectoryEntriesListenerRequest = blink.mojom.FileSystemAccessDirectoryEntriesListenerPendingReceiver;


// Interface: FileSystemAccessDirectoryHandle
blink.mojom.FileSystemAccessDirectoryHandle = {};

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
      [mode]);
  }

  requestPermission(mode) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec,
      [mode]);
  }

  getFile(basename, create) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec,
      [basename, create]);
  }

  getDirectory(basename, create) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec,
      [basename, create]);
  }

  getEntries(listener) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec,
      null,
      [listener]);
  }

  rename(new_entry_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec,
      [new_entry_name]);
  }

  move(destination_directory, new_entry_name) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec,
      [destination_directory, new_entry_name]);
  }

  remove(recurse) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec,
      [recurse]);
  }

  removeEntry(basename, recurse) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec,
      [basename, recurse]);
  }

  resolve(possible_child) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec,
      [possible_child]);
  }

  transfer(token) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec,
      null,
      [token]);
  }

  getUniqueId() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec,
      []);
  }

  getCloudIdentifiers() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec,
      []);
  }

};

blink.mojom.FileSystemAccessDirectoryHandle.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessDirectoryHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessDirectoryHandle',
    'context');
  return remote.$;
};

// ParamsSpec for GetPermissionStatus
blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.GetPermissionStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.GetPermissionStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestPermission
blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.RequestPermission_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.RequestPermission_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFile
blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.GetFile_Params',
      packedSize: 24,
      fields: [
        { name: 'basename', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'create', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.GetFile_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDirectory
blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.GetDirectory_Params',
      packedSize: 24,
      fields: [
        { name: 'basename', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'create', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.GetDirectory_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'directory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetEntries
blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.GetEntries_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Rename
blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.Rename_Params',
      packedSize: 16,
      fields: [
        { name: 'new_entry_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.Rename_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Move
blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.Move_Params',
      packedSize: 24,
      fields: [
        { name: 'destination_directory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'new_entry_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.Move_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Remove
blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.Remove_Params',
      packedSize: 16,
      fields: [
        { name: 'recurse', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.Remove_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveEntry
blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.RemoveEntry_Params',
      packedSize: 24,
      fields: [
        { name: 'basename', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'recurse', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.RemoveEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Resolve
blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.Resolve_Params',
      packedSize: 16,
      fields: [
        { name: 'possible_child', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.Resolve_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Transfer
blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.Transfer_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUniqueId
blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.GetUniqueId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.GetUniqueId_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCloudIdentifiers
blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.GetCloudIdentifiers_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessDirectoryHandle.GetCloudIdentifiers_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cloud_identifiers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemAccessDirectoryHandlePtr = blink.mojom.FileSystemAccessDirectoryHandleRemote;
blink.mojom.FileSystemAccessDirectoryHandleRequest = blink.mojom.FileSystemAccessDirectoryHandlePendingReceiver;

