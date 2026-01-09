// Auto-generated MojoJS binding
// Source: chromium_src/storage/browser/quota/quota_internals.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Interface: QuotaInternalsHandler
storage.mojom.QuotaInternalsHandler = {};

storage.mojom.QuotaInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.QuotaInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.QuotaInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.QuotaInternalsHandlerPendingReceiver,
      handle);
    this.$ = new storage.mojom.QuotaInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.QuotaInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDiskAvailabilityAndTempPoolSize() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ResponseParamsSpec,
      []);
  }

  getStatistics() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.QuotaInternalsHandler_GetStatistics_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_GetStatistics_ResponseParamsSpec,
      []);
  }

  simulateStoragePressure(origin_url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.QuotaInternalsHandler_SimulateStoragePressure_ParamsSpec,
      null,
      [origin_url]);
  }

  retrieveBucketsTable() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParamsSpec,
      []);
  }

  getGlobalUsageForInternals() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ResponseParamsSpec,
      []);
  }

  isSimulateStoragePressureAvailable() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ResponseParamsSpec,
      []);
  }

};

storage.mojom.QuotaInternalsHandler.getRemote = function() {
  let remote = new storage.mojom.QuotaInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.QuotaInternalsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetDiskAvailabilityAndTempPoolSize
storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaInternalsHandler.GetDiskAvailabilityAndTempPoolSize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaInternalsHandler.GetDiskAvailabilityAndTempPoolSize_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'total_space', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'available_space', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'temp_pool_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetStatistics
storage.mojom.QuotaInternalsHandler_GetStatistics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaInternalsHandler.GetStatistics_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.QuotaInternalsHandler_GetStatistics_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaInternalsHandler.GetStatistics_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'eviction_statistics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SimulateStoragePressure
storage.mojom.QuotaInternalsHandler_SimulateStoragePressure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaInternalsHandler.SimulateStoragePressure_Params',
      packedSize: 16,
      fields: [
        { name: 'origin_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RetrieveBucketsTable
storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaInternalsHandler.RetrieveBucketsTable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaInternalsHandler.RetrieveBucketsTable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetGlobalUsageForInternals
storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaInternalsHandler.GetGlobalUsageForInternals_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaInternalsHandler.GetGlobalUsageForInternals_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'unlimited_usage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsSimulateStoragePressureAvailable
storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaInternalsHandler.IsSimulateStoragePressureAvailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.QuotaInternalsHandler.IsSimulateStoragePressureAvailable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
storage.mojom.QuotaInternalsHandlerPtr = storage.mojom.QuotaInternalsHandlerRemote;
storage.mojom.QuotaInternalsHandlerRequest = storage.mojom.QuotaInternalsHandlerPendingReceiver;

