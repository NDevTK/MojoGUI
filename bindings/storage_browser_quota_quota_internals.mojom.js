// Auto-generated MojoJS binding
// Source: chromium_src/storage/browser/quota/quota_internals.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var url = url || {};
var blink = blink || {};

storage.mojom.BucketTableEntrySpec = { $: {} };
storage.mojom.QuotaInternalsHandler = {};
storage.mojom.QuotaInternalsHandler.$interfaceName = 'storage.mojom.QuotaInternalsHandler';
storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_GetStatistics_ParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_GetStatistics_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_SimulateStoragePressure_ParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ParamsSpec = { $: {} };
storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ResponseParamsSpec = { $: {} };

// Struct: BucketTableEntry
mojo.internal.Struct(
    storage.mojom.BucketTableEntrySpec, 'storage.mojom.BucketTableEntry', [
      mojo.internal.StructField('bucket_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('storage_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('usage', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('use_count', 32, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('last_accessed', 40, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('last_modified', 48, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: QuotaInternalsHandler
mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ParamsSpec, 'storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ResponseParamsSpec, 'storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ResponseParams', [
      mojo.internal.StructField('total_space', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('available_space', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('temp_pool_size', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_GetStatistics_ParamsSpec, 'storage.mojom.QuotaInternalsHandler_GetStatistics_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_GetStatistics_ResponseParamsSpec, 'storage.mojom.QuotaInternalsHandler_GetStatistics_ResponseParams', [
      mojo.internal.StructField('eviction_statistics', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_SimulateStoragePressure_ParamsSpec, 'storage.mojom.QuotaInternalsHandler_SimulateStoragePressure_Params', [
      mojo.internal.StructField('origin_url', 0, 0, url.mojom.OriginSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ParamsSpec, 'storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParamsSpec, 'storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParams', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(storage.mojom.BucketTableEntrySpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ParamsSpec, 'storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ResponseParamsSpec, 'storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ResponseParams', [
      mojo.internal.StructField('usage', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('unlimited_usage', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ParamsSpec, 'storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ResponseParamsSpec, 'storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ResponseParams', [
      mojo.internal.StructField('available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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

storage.mojom.QuotaInternalsHandlerPtr = storage.mojom.QuotaInternalsHandlerRemote;
storage.mojom.QuotaInternalsHandlerRequest = storage.mojom.QuotaInternalsHandlerPendingReceiver;

