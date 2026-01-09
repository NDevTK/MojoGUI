// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/mtp_manager.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: MtpManagerClient
device.mojom.MtpManagerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.MtpManagerClient';
  }

  storageAttached(storage_info) {
    // Method: StorageAttached
    // Call: StorageAttached(storage_info)
  }

  storageDetached(storage_name) {
    // Method: StorageDetached
    // Call: StorageDetached(storage_name)
  }

};

device.mojom.MtpManagerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MtpManager
device.mojom.MtpManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.MtpManager';
  }

  enumerateStoragesAndSetClient(client) {
    // Method: EnumerateStoragesAndSetClient
    return new Promise((resolve) => {
      // Call: EnumerateStoragesAndSetClient(client)
      resolve({});
    });
  }

  getStorageInfo(storage_name) {
    // Method: GetStorageInfo
    return new Promise((resolve) => {
      // Call: GetStorageInfo(storage_name)
      resolve({});
    });
  }

  getStorageInfoFromDevice(storage_name) {
    // Method: GetStorageInfoFromDevice
    return new Promise((resolve) => {
      // Call: GetStorageInfoFromDevice(storage_name)
      resolve({});
    });
  }

  openStorage(storage_name, mode) {
    // Method: OpenStorage
    return new Promise((resolve) => {
      // Call: OpenStorage(storage_name, mode)
      resolve({});
    });
  }

  closeStorage(storage_handle) {
    // Method: CloseStorage
    return new Promise((resolve) => {
      // Call: CloseStorage(storage_handle)
      resolve({});
    });
  }

  createDirectory(storage_handle, parent_id, directory_name) {
    // Method: CreateDirectory
    return new Promise((resolve) => {
      // Call: CreateDirectory(storage_handle, parent_id, directory_name)
      resolve({});
    });
  }

  readDirectoryEntryIds(storage_handle, file_id) {
    // Method: ReadDirectoryEntryIds
    return new Promise((resolve) => {
      // Call: ReadDirectoryEntryIds(storage_handle, file_id)
      resolve({});
    });
  }

  readFileChunk(storage_handle, file_id, offset, count) {
    // Method: ReadFileChunk
    return new Promise((resolve) => {
      // Call: ReadFileChunk(storage_handle, file_id, offset, count)
      resolve({});
    });
  }

  getFileInfo(storage_handle, file_ids) {
    // Method: GetFileInfo
    return new Promise((resolve) => {
      // Call: GetFileInfo(storage_handle, file_ids)
      resolve({});
    });
  }

  renameObject(storage_handle, object_id, new_name) {
    // Method: RenameObject
    return new Promise((resolve) => {
      // Call: RenameObject(storage_handle, object_id, new_name)
      resolve({});
    });
  }

  copyFileFromLocal(storage_handle, source_file_descriptor, parent_id, file_name) {
    // Method: CopyFileFromLocal
    return new Promise((resolve) => {
      // Call: CopyFileFromLocal(storage_handle, source_file_descriptor, parent_id, file_name)
      resolve({});
    });
  }

  deleteObject(storage_handle, object_id) {
    // Method: DeleteObject
    return new Promise((resolve) => {
      // Call: DeleteObject(storage_handle, object_id)
      resolve({});
    });
  }

};

device.mojom.MtpManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
