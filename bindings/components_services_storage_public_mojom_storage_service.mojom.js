// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/storage_service.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Interface: StorageService
storage.mojom.StorageServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.StorageService';
  }

  enableAggressiveDomStorageFlushing() {
    // Method: EnableAggressiveDomStorageFlushing
    // Call: EnableAggressiveDomStorageFlushing()
  }

  service(any) {
    // Method: service
    // Call: service(any)
  }

  setDataDirectory(path, directory) {
    // Method: SetDataDirectory
    // Call: SetDataDirectory(path, directory)
  }

  bindSessionStorageControl(path, receiver) {
    // Method: BindSessionStorageControl
    // Call: BindSessionStorageControl(path, receiver)
  }

  bindLocalStorageControl(path, receiver) {
    // Method: BindLocalStorageControl
    // Call: BindLocalStorageControl(path, receiver)
  }

  bindTestApi(test_api_receiver) {
    // Method: BindTestApi
    // Call: BindTestApi(test_api_receiver)
  }

};

storage.mojom.StorageServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
