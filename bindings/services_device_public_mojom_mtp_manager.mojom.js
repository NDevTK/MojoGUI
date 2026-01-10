// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/mtp_manager.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.MtpManagerClient = {};
device.mojom.MtpManagerClient.$interfaceName = 'device.mojom.MtpManagerClient';
device.mojom.MtpManagerClient_StorageAttached_ParamsSpec = { $: {} };
device.mojom.MtpManagerClient_StorageDetached_ParamsSpec = { $: {} };
device.mojom.MtpManager = {};
device.mojom.MtpManager.$interfaceName = 'device.mojom.MtpManager';
device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec = { $: {} };
device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_GetStorageInfo_ParamsSpec = { $: {} };
device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec = { $: {} };
device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_OpenStorage_ParamsSpec = { $: {} };
device.mojom.MtpManager_OpenStorage_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_CloseStorage_ParamsSpec = { $: {} };
device.mojom.MtpManager_CloseStorage_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_CreateDirectory_ParamsSpec = { $: {} };
device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec = { $: {} };
device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_ReadFileChunk_ParamsSpec = { $: {} };
device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_GetFileInfo_ParamsSpec = { $: {} };
device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_RenameObject_ParamsSpec = { $: {} };
device.mojom.MtpManager_RenameObject_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec = { $: {} };
device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_DeleteObject_ParamsSpec = { $: {} };
device.mojom.MtpManager_DeleteObject_ResponseParamsSpec = { $: {} };

// Interface: MtpManagerClient
mojo.internal.Struct(
    device.mojom.MtpManagerClient_StorageAttached_ParamsSpec, 'device.mojom.MtpManagerClient_StorageAttached_Params', [
      mojo.internal.StructField('storage_info', 0, 0, device.mojom.MtpStorageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManagerClient_StorageDetached_ParamsSpec, 'device.mojom.MtpManagerClient_StorageDetached_Params', [
      mojo.internal.StructField('storage_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      device.mojom.MtpManagerClient_StorageAttached_ParamsSpec,
      null,
      [storage_info],
      false);
  }

  storageDetached(storage_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.MtpManagerClient_StorageDetached_ParamsSpec,
      null,
      [storage_name],
      false);
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

device.mojom.MtpManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.MtpManagerClient_StorageAttached_ParamsSpec.$.decode(message.payload);
          const result = this.impl.storageAttached(params.storage_info);
          break;
        }
        case 1: {
          const params = device.mojom.MtpManagerClient_StorageDetached_ParamsSpec.$.decode(message.payload);
          const result = this.impl.storageDetached(params.storage_name);
          break;
        }
      }
    }});
  }
};

device.mojom.MtpManagerClientReceiver = device.mojom.MtpManagerClientReceiver;

device.mojom.MtpManagerClientPtr = device.mojom.MtpManagerClientRemote;
device.mojom.MtpManagerClientRequest = device.mojom.MtpManagerClientPendingReceiver;


// Interface: MtpManager
mojo.internal.Struct(
    device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec, 'device.mojom.MtpManager_EnumerateStoragesAndSetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec, 'device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParams', [
      mojo.internal.StructField('storages', 0, 0, mojo.internal.Array(device.mojom.MtpStorageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_GetStorageInfo_ParamsSpec, 'device.mojom.MtpManager_GetStorageInfo_Params', [
      mojo.internal.StructField('storage_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec, 'device.mojom.MtpManager_GetStorageInfo_ResponseParams', [
      mojo.internal.StructField('storage_info', 0, 0, device.mojom.MtpStorageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec, 'device.mojom.MtpManager_GetStorageInfoFromDevice_Params', [
      mojo.internal.StructField('storage_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec, 'device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParams', [
      mojo.internal.StructField('storage_info', 0, 0, device.mojom.MtpStorageInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_OpenStorage_ParamsSpec, 'device.mojom.MtpManager_OpenStorage_Params', [
      mojo.internal.StructField('storage_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_OpenStorage_ResponseParamsSpec, 'device.mojom.MtpManager_OpenStorage_ResponseParams', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_CloseStorage_ParamsSpec, 'device.mojom.MtpManager_CloseStorage_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_CloseStorage_ResponseParamsSpec, 'device.mojom.MtpManager_CloseStorage_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_CreateDirectory_ParamsSpec, 'device.mojom.MtpManager_CreateDirectory_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('directory_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parent_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec, 'device.mojom.MtpManager_CreateDirectory_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec, 'device.mojom.MtpManager_ReadDirectoryEntryIds_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec, 'device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParams', [
      mojo.internal.StructField('file_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_ReadFileChunk_ParamsSpec, 'device.mojom.MtpManager_ReadFileChunk_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('count', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec, 'device.mojom.MtpManager_ReadFileChunk_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_GetFileInfo_ParamsSpec, 'device.mojom.MtpManager_GetFileInfo_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_ids', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec, 'device.mojom.MtpManager_GetFileInfo_ResponseParams', [
      mojo.internal.StructField('file_entries', 0, 0, mojo.internal.Array(device.mojom.MtpFileEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_RenameObject_ParamsSpec, 'device.mojom.MtpManager_RenameObject_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('object_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.MtpManager_RenameObject_ResponseParamsSpec, 'device.mojom.MtpManager_RenameObject_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec, 'device.mojom.MtpManager_CopyFileFromLocal_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_file_descriptor', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('file_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parent_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec, 'device.mojom.MtpManager_CopyFileFromLocal_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_DeleteObject_ParamsSpec, 'device.mojom.MtpManager_DeleteObject_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('object_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_DeleteObject_ResponseParamsSpec, 'device.mojom.MtpManager_DeleteObject_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec,
      device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec,
      [client],
      false);
  }

  getStorageInfo(storage_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.MtpManager_GetStorageInfo_ParamsSpec,
      device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec,
      [storage_name],
      false);
  }

  getStorageInfoFromDevice(storage_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec,
      device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec,
      [storage_name],
      false);
  }

  openStorage(storage_name, mode) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.MtpManager_OpenStorage_ParamsSpec,
      device.mojom.MtpManager_OpenStorage_ResponseParamsSpec,
      [storage_name, mode],
      false);
  }

  closeStorage(storage_handle) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.MtpManager_CloseStorage_ParamsSpec,
      device.mojom.MtpManager_CloseStorage_ResponseParamsSpec,
      [storage_handle],
      false);
  }

  createDirectory(storage_handle, parent_id, directory_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.MtpManager_CreateDirectory_ParamsSpec,
      device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec,
      [storage_handle, parent_id, directory_name],
      false);
  }

  readDirectoryEntryIds(storage_handle, file_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec,
      device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec,
      [storage_handle, file_id],
      false);
  }

  readFileChunk(storage_handle, file_id, offset, count) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device.mojom.MtpManager_ReadFileChunk_ParamsSpec,
      device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec,
      [storage_handle, file_id, offset, count],
      false);
  }

  getFileInfo(storage_handle, file_ids) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      device.mojom.MtpManager_GetFileInfo_ParamsSpec,
      device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec,
      [storage_handle, file_ids],
      false);
  }

  renameObject(storage_handle, object_id, new_name) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      device.mojom.MtpManager_RenameObject_ParamsSpec,
      device.mojom.MtpManager_RenameObject_ResponseParamsSpec,
      [storage_handle, object_id, new_name],
      false);
  }

  copyFileFromLocal(storage_handle, source_file_descriptor, parent_id, file_name) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec,
      device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec,
      [storage_handle, source_file_descriptor, parent_id, file_name],
      false);
  }

  deleteObject(storage_handle, object_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      device.mojom.MtpManager_DeleteObject_ParamsSpec,
      device.mojom.MtpManager_DeleteObject_ResponseParamsSpec,
      [storage_handle, object_id],
      false);
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

device.mojom.MtpManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enumerateStoragesAndSetClient(params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = device.mojom.MtpManager_GetStorageInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getStorageInfo(params.storage_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getStorageInfoFromDevice(params.storage_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = device.mojom.MtpManager_OpenStorage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openStorage(params.storage_name, params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_OpenStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = device.mojom.MtpManager_CloseStorage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeStorage(params.storage_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_CloseStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = device.mojom.MtpManager_CreateDirectory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createDirectory(params.storage_handle, params.parent_id, params.directory_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec.$.decode(message.payload);
          const result = this.impl.readDirectoryEntryIds(params.storage_handle, params.file_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = device.mojom.MtpManager_ReadFileChunk_ParamsSpec.$.decode(message.payload);
          const result = this.impl.readFileChunk(params.storage_handle, params.file_id, params.offset, params.count);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = device.mojom.MtpManager_GetFileInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFileInfo(params.storage_handle, params.file_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = device.mojom.MtpManager_RenameObject_ParamsSpec.$.decode(message.payload);
          const result = this.impl.renameObject(params.storage_handle, params.object_id, params.new_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_RenameObject_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec.$.decode(message.payload);
          const result = this.impl.copyFileFromLocal(params.storage_handle, params.source_file_descriptor, params.parent_id, params.file_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = device.mojom.MtpManager_DeleteObject_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteObject(params.storage_handle, params.object_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_DeleteObject_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

device.mojom.MtpManagerReceiver = device.mojom.MtpManagerReceiver;

device.mojom.MtpManagerPtr = device.mojom.MtpManagerRemote;
device.mojom.MtpManagerRequest = device.mojom.MtpManagerPendingReceiver;

