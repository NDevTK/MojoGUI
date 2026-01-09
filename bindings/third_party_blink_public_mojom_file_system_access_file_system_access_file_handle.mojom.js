// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: FileSystemAccessAccessHandleLockMode
blink.mojom.FileSystemAccessAccessHandleLockMode = {
  kReadwrite: 0,
  kReadOnly: 1,
  kReadwriteUnsafe: 2,
};

// Enum: FileSystemAccessWritableFileStreamLockMode
blink.mojom.FileSystemAccessWritableFileStreamLockMode = {
  kExclusive: 0,
  kSiloed: 1,
};

// Struct: FileSystemAccessRegularFile
blink.mojom.FileSystemAccessRegularFileSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessRegularFile',
      packedSize: 32,
      fields: [
        { name: 'os_file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false },
        { name: 'file_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'file_modification_host', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: FileSystemAccessFileHandle
blink.mojom.FileSystemAccessFileHandle = {};

blink.mojom.FileSystemAccessFileHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessFileHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessFileHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessFileHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessFileHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessFileHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPermissionStatus(mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ResponseParamsSpec,
      [mode]);
  }

  requestPermission(mode) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_RequestPermission_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_RequestPermission_ResponseParamsSpec,
      [mode]);
  }

  asBlob() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_AsBlob_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_AsBlob_ResponseParamsSpec,
      []);
  }

  createFileWriter(keep_existing_data, auto_close, mode) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ResponseParamsSpec,
      [keep_existing_data, auto_close, mode]);
  }

  rename(new_entry_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_Rename_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_Rename_ResponseParamsSpec,
      [new_entry_name]);
  }

  move(destination_directory, new_entry_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_Move_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_Move_ResponseParamsSpec,
      [destination_directory, new_entry_name]);
  }

  remove() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_Remove_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_Remove_ResponseParamsSpec,
      []);
  }

  openAccessHandle(mode) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ResponseParamsSpec,
      [mode]);
  }

  isSameEntry(other) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ResponseParamsSpec,
      [other]);
  }

  transfer(token) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_Transfer_ParamsSpec,
      null,
      [token]);
  }

  getUniqueId() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ResponseParamsSpec,
      []);
  }

  getCloudIdentifiers() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ParamsSpec,
      blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ResponseParamsSpec,
      []);
  }

};

blink.mojom.FileSystemAccessFileHandle.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessFileHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessFileHandle',
    'context');
  return remote.$;
};

// ParamsSpec for GetPermissionStatus
blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.GetPermissionStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessPermissionModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileHandle_GetPermissionStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.GetPermissionStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PermissionStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestPermission
blink.mojom.FileSystemAccessFileHandle_RequestPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.RequestPermission_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessPermissionModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileHandle_RequestPermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.RequestPermission_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PermissionStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AsBlob
blink.mojom.FileSystemAccessFileHandle_AsBlob_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.AsBlob_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileHandle_AsBlob_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.AsBlob_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
        { name: 'info', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FileInfoSpec, nullable: false },
        { name: 'blob', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.SerializedBlobSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateFileWriter
blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.CreateFileWriter_Params',
      packedSize: 24,
      fields: [
        { name: 'keep_existing_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'auto_close', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'mode', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.FileSystemAccessWritableFileStreamLockModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileHandle_CreateFileWriter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.CreateFileWriter_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
        { name: 'writer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Rename
blink.mojom.FileSystemAccessFileHandle_Rename_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.Rename_Params',
      packedSize: 16,
      fields: [
        { name: 'new_entry_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileHandle_Rename_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.Rename_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Move
blink.mojom.FileSystemAccessFileHandle_Move_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.Move_Params',
      packedSize: 24,
      fields: [
        { name: 'destination_directory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'new_entry_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileHandle_Move_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.Move_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Remove
blink.mojom.FileSystemAccessFileHandle_Remove_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.Remove_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileHandle_Remove_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.Remove_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenAccessHandle
blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.OpenAccessHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessAccessHandleLockModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileHandle_OpenAccessHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.OpenAccessHandle_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
        { name: 'file', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.FileSystemAccessAccessHandleFileSpec, nullable: true },
        { name: 'access_handle_host', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsSameEntry
blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.IsSameEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'other', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileHandle_IsSameEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.IsSameEntry_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
        { name: 'is_same', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Transfer
blink.mojom.FileSystemAccessFileHandle_Transfer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.Transfer_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUniqueId
blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.GetUniqueId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileHandle_GetUniqueId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.GetUniqueId_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCloudIdentifiers
blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.GetCloudIdentifiers_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessFileHandle_GetCloudIdentifiers_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileHandle.GetCloudIdentifiers_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false },
        { name: 'cloud_identifiers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemAccessFileHandlePtr = blink.mojom.FileSystemAccessFileHandleRemote;
blink.mojom.FileSystemAccessFileHandleRequest = blink.mojom.FileSystemAccessFileHandlePendingReceiver;

