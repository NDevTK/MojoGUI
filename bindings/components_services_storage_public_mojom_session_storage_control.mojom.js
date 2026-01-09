// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/session_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: SessionStorageCloneType
storage.mojom.SessionStorageCloneType = {
  because: 0,
  ordered: 1,
};

// Struct: SessionStorageUsageInfo
storage.mojom.SessionStorageUsageInfo = class {
  constructor(values = {}) {
    this.namespace_id = values.namespace_id !== undefined ? values.namespace_id : "";
  }
};

// Interface: SessionStorageControl
storage.mojom.SessionStorageControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.SessionStorageControl';
  }

  bindNamespace(namespace_id, receiver) {
    // Method: BindNamespace
    // Call: BindNamespace(namespace_id, receiver)
  }

  bindStorageArea(storage_key, namespace_id, receiver) {
    // Method: BindStorageArea
    // Call: BindStorageArea(storage_key, namespace_id, receiver)
  }

  getUsage() {
    // Method: GetUsage
    return new Promise((resolve) => {
      // Call: GetUsage()
      resolve({});
    });
  }

  deleteStorage(storage_key, namespace_id) {
    // Method: DeleteStorage
    // Call: DeleteStorage(storage_key, namespace_id)
  }

  cleanUpStorage() {
    // Method: CleanUpStorage
    // Call: CleanUpStorage()
  }

  scavengeUnusedNamespaces() {
    // Method: ScavengeUnusedNamespaces
    // Call: ScavengeUnusedNamespaces()
  }

  flush() {
    // Method: Flush
    // Call: Flush()
  }

  purgeMemory() {
    // Method: PurgeMemory
    // Call: PurgeMemory()
  }

  createNamespace(namespace_id) {
    // Method: CreateNamespace
    // Call: CreateNamespace(namespace_id)
  }

  cloneNamespace(namespace_id_to_clone, clone_namespace_id, clone_type) {
    // Method: CloneNamespace
    // Call: CloneNamespace(namespace_id_to_clone, clone_namespace_id, clone_type)
  }

  deleteNamespace(namespace_id, should_persist) {
    // Method: DeleteNamespace
    // Call: DeleteNamespace(namespace_id, should_persist)
  }

};

storage.mojom.SessionStorageControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
