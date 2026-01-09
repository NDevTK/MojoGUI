// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/local_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Interface: LocalStorageControl
storage.mojom.LocalStorageControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.LocalStorageControl';
  }

  bindStorageArea(storage_key, receiver) {
    // Method: BindStorageArea
    // Call: BindStorageArea(storage_key, receiver)
  }

  getUsage() {
    // Method: GetUsage
    return new Promise((resolve) => {
      // Call: GetUsage()
      resolve({});
    });
  }

  deleteStorage(storage_key) {
    // Method: DeleteStorage
    // Call: DeleteStorage(storage_key)
  }

  cleanUpStorage() {
    // Method: CleanUpStorage
    // Call: CleanUpStorage()
  }

  flush() {
    // Method: Flush
    // Call: Flush()
  }

  purgeMemory() {
    // Method: PurgeMemory
    // Call: PurgeMemory()
  }

  applyPolicyUpdates(policy_updates) {
    // Method: ApplyPolicyUpdates
    // Call: ApplyPolicyUpdates(policy_updates)
  }

  forceKeepSessionState() {
    // Method: ForceKeepSessionState
    // Call: ForceKeepSessionState()
  }

};

storage.mojom.LocalStorageControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
