// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/mtp_manager.mojom
// Module: device.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  storageAttached(storage_info) {
    return this.$.storageAttached(storage_info);
  }
  storageDetached(storage_name) {
    return this.$.storageDetached(storage_name);
  }
};

device.mojom.MtpManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MtpManagerClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  storageAttached(storage_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.MtpManagerClient_StorageAttached_ParamsSpec,
      null,
      [storage_info],
      false);
  }

  storageDetached(storage_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MtpManagerClient', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManagerClient_StorageAttached_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManagerClient_StorageDetached_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManagerClient_StorageAttached_ParamsSpec.$.structSpec);
          const result = this.impl.storageAttached(params.storage_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManagerClient_StorageDetached_ParamsSpec.$.structSpec);
          const result = this.impl.storageDetached(params.storage_name);
          break;
        }
      }
      } catch (err) {}
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
  enumerateStoragesAndSetClient(client) {
    return this.$.enumerateStoragesAndSetClient(client);
  }
  getStorageInfo(storage_name) {
    return this.$.getStorageInfo(storage_name);
  }
  getStorageInfoFromDevice(storage_name) {
    return this.$.getStorageInfoFromDevice(storage_name);
  }
  openStorage(storage_name, mode) {
    return this.$.openStorage(storage_name, mode);
  }
  closeStorage(storage_handle) {
    return this.$.closeStorage(storage_handle);
  }
  createDirectory(storage_handle, parent_id, directory_name) {
    return this.$.createDirectory(storage_handle, parent_id, directory_name);
  }
  readDirectoryEntryIds(storage_handle, file_id) {
    return this.$.readDirectoryEntryIds(storage_handle, file_id);
  }
  readFileChunk(storage_handle, file_id, offset, count) {
    return this.$.readFileChunk(storage_handle, file_id, offset, count);
  }
  getFileInfo(storage_handle, file_ids) {
    return this.$.getFileInfo(storage_handle, file_ids);
  }
  renameObject(storage_handle, object_id, new_name) {
    return this.$.renameObject(storage_handle, object_id, new_name);
  }
  copyFileFromLocal(storage_handle, source_file_descriptor, parent_id, file_name) {
    return this.$.copyFileFromLocal(storage_handle, source_file_descriptor, parent_id, file_name);
  }
  deleteObject(storage_handle, object_id) {
    return this.$.deleteObject(storage_handle, object_id);
  }
};

device.mojom.MtpManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MtpManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  enumerateStoragesAndSetClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec,
      device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec,
      [client],
      false);
  }

  getStorageInfo(storage_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.MtpManager_GetStorageInfo_ParamsSpec,
      device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec,
      [storage_name],
      false);
  }

  getStorageInfoFromDevice(storage_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec,
      device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec,
      [storage_name],
      false);
  }

  openStorage(storage_name, mode) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.MtpManager_OpenStorage_ParamsSpec,
      device.mojom.MtpManager_OpenStorage_ResponseParamsSpec,
      [storage_name, mode],
      false);
  }

  closeStorage(storage_handle) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.MtpManager_CloseStorage_ParamsSpec,
      device.mojom.MtpManager_CloseStorage_ResponseParamsSpec,
      [storage_handle],
      false);
  }

  createDirectory(storage_handle, parent_id, directory_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      device.mojom.MtpManager_CreateDirectory_ParamsSpec,
      device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec,
      [storage_handle, parent_id, directory_name],
      false);
  }

  readDirectoryEntryIds(storage_handle, file_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec,
      device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec,
      [storage_handle, file_id],
      false);
  }

  readFileChunk(storage_handle, file_id, offset, count) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      device.mojom.MtpManager_ReadFileChunk_ParamsSpec,
      device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec,
      [storage_handle, file_id, offset, count],
      false);
  }

  getFileInfo(storage_handle, file_ids) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      device.mojom.MtpManager_GetFileInfo_ParamsSpec,
      device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec,
      [storage_handle, file_ids],
      false);
  }

  renameObject(storage_handle, object_id, new_name) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      device.mojom.MtpManager_RenameObject_ParamsSpec,
      device.mojom.MtpManager_RenameObject_ResponseParamsSpec,
      [storage_handle, object_id, new_name],
      false);
  }

  copyFileFromLocal(storage_handle, source_file_descriptor, parent_id, file_name) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec,
      device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec,
      [storage_handle, source_file_descriptor, parent_id, file_name],
      false);
  }

  deleteObject(storage_handle, object_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MtpManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManager_GetStorageInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManager_OpenStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManager_CloseStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManager_CreateDirectory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManager_ReadFileChunk_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManager_GetFileInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManager_RenameObject_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.MtpManager_DeleteObject_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_GetStorageInfo_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_OpenStorage_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_CloseStorage_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_CreateDirectory_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_ReadFileChunk_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_GetFileInfo_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_RenameObject_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_DeleteObject_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

device.mojom.MtpManagerReceiver = device.mojom.MtpManagerReceiver;

device.mojom.MtpManagerPtr = device.mojom.MtpManagerRemote;
device.mojom.MtpManagerRequest = device.mojom.MtpManagerPendingReceiver;

