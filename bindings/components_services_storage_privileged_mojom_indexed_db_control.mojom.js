// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: ForceCloseReason
storage.mojom.ForceCloseReason = {
  FORCE_CLOSE_DELETE_ORIGIN: 0,
  FORCE_CLOSE_BACKING_STORE_FAILURE: 1,
  FORCE_CLOSE_INTERNALS_PAGE: 2,
};

// Interface: IndexedDBObserver
storage.mojom.IndexedDBObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.IndexedDBObserver';
  }

  changes(disk) {
    // Method: changes
    // Call: changes(disk)
  }

  onIndexedDBListChanged(bucket_locator) {
    // Method: OnIndexedDBListChanged
    // Call: OnIndexedDBListChanged(bucket_locator)
  }

  onIndexedDBContentChanged(bucket_locator, database_name, object_store_name) {
    // Method: OnIndexedDBContentChanged
    // Call: OnIndexedDBContentChanged(bucket_locator, database_name, object_store_name)
  }

};

storage.mojom.IndexedDBObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IndexedDBControl
storage.mojom.IndexedDBControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.IndexedDBControl';
  }

  bindIndexedDB(bucket_locator, client_info, client_state_checker_remote, receiver) {
    // Method: BindIndexedDB
    // Call: BindIndexedDB(bucket_locator, client_info, client_state_checker_remote, receiver)
  }

  forceClose(bucket_id, reason) {
    // Method: ForceClose
    // Call: ForceClose(bucket_id, reason)
  }

  downloadBucketData(bucket_id) {
    // Method: DownloadBucketData
    return new Promise((resolve) => {
      // Call: DownloadBucketData(bucket_id)
      resolve({});
    });
  }

  getAllBucketsDetails() {
    // Method: GetAllBucketsDetails
    return new Promise((resolve) => {
      // Call: GetAllBucketsDetails()
      resolve({});
    });
  }

  startMetadataRecording(bucket_id) {
    // Method: StartMetadataRecording
    // Call: StartMetadataRecording(bucket_id)
  }

  stopMetadataRecording(bucket_id) {
    // Method: StopMetadataRecording
    return new Promise((resolve) => {
      // Call: StopMetadataRecording(bucket_id)
      resolve({});
    });
  }

  setForceKeepSessionState() {
    // Method: SetForceKeepSessionState
    // Call: SetForceKeepSessionState()
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  applyPolicyUpdates(policy_updates) {
    // Method: ApplyPolicyUpdates
    // Call: ApplyPolicyUpdates(policy_updates)
  }

  bindTestInterfaceForTesting(receiver) {
    // Method: BindTestInterfaceForTesting
    // Call: BindTestInterfaceForTesting(receiver)
  }

};

storage.mojom.IndexedDBControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
