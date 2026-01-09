// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/mtp_manager.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: MtpManagerClient
device.mojom.MtpManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.MtpManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.MtpManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.MtpManagerClientPendingReceiver,
      handle);
    this.$ = new device.mojom.MtpManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.MtpManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  storageAttached(storage_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.MtpManagerClient_StorageAttached_ParamsSpec.$,
      null,
      [storage_info]);
  }

  storageDetached(storage_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.MtpManagerClient_StorageDetached_ParamsSpec.$,
      null,
      [storage_name]);
  }

};

device.mojom.MtpManagerClient.getRemote = function() {
  let remote = new device.mojom.MtpManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.MtpManagerClient',
    'context');
  return remote.$;
};

// ParamsSpec for StorageAttached
device.mojom.MtpManagerClient_StorageAttached_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManagerClient.StorageAttached_Params',
      packedSize: 16,
      fields: [
        { name: 'storage_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StorageDetached
device.mojom.MtpManagerClient_StorageDetached_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManagerClient.StorageDetached_Params',
      packedSize: 16,
      fields: [
        { name: 'storage_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.MtpManagerClientPtr = device.mojom.MtpManagerClientRemote;
device.mojom.MtpManagerClientRequest = device.mojom.MtpManagerClientPendingReceiver;


// Interface: MtpManager
device.mojom.MtpManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.MtpManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.MtpManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.MtpManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.MtpManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.MtpManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enumerateStoragesAndSetClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec.$,
      device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec.$,
      [client]);
  }

  getStorageInfo(storage_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.MtpManager_GetStorageInfo_ParamsSpec.$,
      device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec.$,
      [storage_name]);
  }

  getStorageInfoFromDevice(storage_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec.$,
      device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec.$,
      [storage_name]);
  }

  openStorage(storage_name, mode) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.MtpManager_OpenStorage_ParamsSpec.$,
      device.mojom.MtpManager_OpenStorage_ResponseParamsSpec.$,
      [storage_name, mode]);
  }

  closeStorage(storage_handle) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.MtpManager_CloseStorage_ParamsSpec.$,
      device.mojom.MtpManager_CloseStorage_ResponseParamsSpec.$,
      [storage_handle]);
  }

  createDirectory(storage_handle, parent_id, directory_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.MtpManager_CreateDirectory_ParamsSpec.$,
      device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec.$,
      [storage_handle, parent_id, directory_name]);
  }

  readDirectoryEntryIds(storage_handle, file_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec.$,
      device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec.$,
      [storage_handle, file_id]);
  }

  readFileChunk(storage_handle, file_id, offset, count) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device.mojom.MtpManager_ReadFileChunk_ParamsSpec.$,
      device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec.$,
      [storage_handle, file_id, offset, count]);
  }

  getFileInfo(storage_handle, file_ids) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      device.mojom.MtpManager_GetFileInfo_ParamsSpec.$,
      device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec.$,
      [storage_handle, file_ids]);
  }

  renameObject(storage_handle, object_id, new_name) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      device.mojom.MtpManager_RenameObject_ParamsSpec.$,
      device.mojom.MtpManager_RenameObject_ResponseParamsSpec.$,
      [storage_handle, object_id, new_name]);
  }

  copyFileFromLocal(storage_handle, source_file_descriptor, parent_id, file_name) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec.$,
      device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec.$,
      [storage_handle, source_file_descriptor, parent_id, file_name]);
  }

  deleteObject(storage_handle, object_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      device.mojom.MtpManager_DeleteObject_ParamsSpec.$,
      device.mojom.MtpManager_DeleteObject_ResponseParamsSpec.$,
      [storage_handle, object_id]);
  }

};

device.mojom.MtpManager.getRemote = function() {
  let remote = new device.mojom.MtpManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.MtpManager',
    'context');
  return remote.$;
};

// ParamsSpec for EnumerateStoragesAndSetClient
device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.EnumerateStoragesAndSetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.EnumerateStoragesAndSetClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'storages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetStorageInfo
device.mojom.MtpManager_GetStorageInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.GetStorageInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'storage_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.GetStorageInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'storage_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetStorageInfoFromDevice
device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.GetStorageInfoFromDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'storage_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.GetStorageInfoFromDevice_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'storage_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenStorage
device.mojom.MtpManager_OpenStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.OpenStorage_Params',
      packedSize: 24,
      fields: [
        { name: 'storage_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.MtpManager_OpenStorage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.OpenStorage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'storage_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseStorage
device.mojom.MtpManager_CloseStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.CloseStorage_Params',
      packedSize: 16,
      fields: [
        { name: 'storage_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.MtpManager_CloseStorage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.CloseStorage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateDirectory
device.mojom.MtpManager_CreateDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.CreateDirectory_Params',
      packedSize: 32,
      fields: [
        { name: 'storage_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'parent_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'directory_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.CreateDirectory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadDirectoryEntryIds
device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.ReadDirectoryEntryIds_Params',
      packedSize: 24,
      fields: [
        { name: 'storage_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'file_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.ReadDirectoryEntryIds_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'file_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadFileChunk
device.mojom.MtpManager_ReadFileChunk_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.ReadFileChunk_Params',
      packedSize: 40,
      fields: [
        { name: 'storage_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'file_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.ReadFileChunk_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFileInfo
device.mojom.MtpManager_GetFileInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.GetFileInfo_Params',
      packedSize: 24,
      fields: [
        { name: 'storage_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'file_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.GetFileInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'file_entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RenameObject
device.mojom.MtpManager_RenameObject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.RenameObject_Params',
      packedSize: 32,
      fields: [
        { name: 'storage_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'object_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.MtpManager_RenameObject_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.RenameObject_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CopyFileFromLocal
device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.CopyFileFromLocal_Params',
      packedSize: 40,
      fields: [
        { name: 'storage_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_file_descriptor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'parent_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'file_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.CopyFileFromLocal_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteObject
device.mojom.MtpManager_DeleteObject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.DeleteObject_Params',
      packedSize: 24,
      fields: [
        { name: 'storage_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'object_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.MtpManager_DeleteObject_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.MtpManager.DeleteObject_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.MtpManagerPtr = device.mojom.MtpManagerRemote;
device.mojom.MtpManagerRequest = device.mojom.MtpManagerPendingReceiver;

