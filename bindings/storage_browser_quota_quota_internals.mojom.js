// Auto-generated MojoJS binding
// Source: chromium_src/storage/browser/quota/quota_internals.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Struct: BucketTableEntry
storage.mojom.BucketTableEntry = class {
  constructor(values = {}) {
    this.last_modified = values.last_modified !== undefined ? values.last_modified : 0;
  }
};

// Interface: QuotaInternalsHandler
storage.mojom.QuotaInternalsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.QuotaInternalsHandler';
  }

  getDiskAvailabilityAndTempPoolSize() {
    // Method: GetDiskAvailabilityAndTempPoolSize
    return new Promise((resolve) => {
      // Call: GetDiskAvailabilityAndTempPoolSize()
      resolve({});
    });
  }

  getStatistics() {
    // Method: GetStatistics
    return new Promise((resolve) => {
      // Call: GetStatistics()
      resolve({});
    });
  }

  simulateStoragePressure(origin_url) {
    // Method: SimulateStoragePressure
    // Call: SimulateStoragePressure(origin_url)
  }

  retrieveBucketsTable() {
    // Method: RetrieveBucketsTable
    return new Promise((resolve) => {
      // Call: RetrieveBucketsTable()
      resolve({});
    });
  }

  getGlobalUsageForInternals() {
    // Method: GetGlobalUsageForInternals
    return new Promise((resolve) => {
      // Call: GetGlobalUsageForInternals()
      resolve({});
    });
  }

  isSimulateStoragePressureAvailable() {
    // Method: IsSimulateStoragePressureAvailable
    return new Promise((resolve) => {
      // Call: IsSimulateStoragePressureAvailable()
      resolve({});
    });
  }

};

storage.mojom.QuotaInternalsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
