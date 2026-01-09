// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/indexed_db/indexed_db_internals.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Struct: IdbPartitionMetadata
storage.mojom.IdbPartitionMetadata = class {
  constructor(values = {}) {
    this.origin_list = values.origin_list !== undefined ? values.origin_list : [];
  }
};

// Interface: IdbInternalsHandler
storage.mojom.IdbInternalsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.IdbInternalsHandler';
  }

  getAllBucketsAcrossAllStorageKeys() {
    // Method: GetAllBucketsAcrossAllStorageKeys
    return new Promise((resolve) => {
      // Call: GetAllBucketsAcrossAllStorageKeys()
      resolve({});
    });
  }

  downloadBucketData(bucketId) {
    // Method: DownloadBucketData
    return new Promise((resolve) => {
      // Call: DownloadBucketData(bucketId)
      resolve({});
    });
  }

  forceClose(bucketId) {
    // Method: ForceClose
    return new Promise((resolve) => {
      // Call: ForceClose(bucketId)
      resolve({});
    });
  }

  startMetadataRecording(bucket_id) {
    // Method: StartMetadataRecording
    return new Promise((resolve) => {
      // Call: StartMetadataRecording(bucket_id)
      resolve({});
    });
  }

  stopMetadataRecording(bucket_id) {
    // Method: StopMetadataRecording
    return new Promise((resolve) => {
      // Call: StopMetadataRecording(bucket_id)
      resolve({});
    });
  }

  inspectClient(client_info) {
    // Method: InspectClient
    return new Promise((resolve) => {
      // Call: InspectClient(client_info)
      resolve({});
    });
  }

};

storage.mojom.IdbInternalsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
