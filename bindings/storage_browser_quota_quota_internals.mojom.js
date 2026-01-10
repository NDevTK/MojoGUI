// Auto-generated MojoJS binding
// Source: chromium_src/storage/browser/quota/quota_internals.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('usage', 24, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('use_count', 32, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('last_accessed', 40, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_modified', 48, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('origin_url', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ParamsSpec, 'storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParamsSpec, 'storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParams', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(storage.mojom.BucketTableEntrySpec.$, false), null, false, 0, undefined),
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
      [],
      false);
  }

  getStatistics() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.QuotaInternalsHandler_GetStatistics_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_GetStatistics_ResponseParamsSpec,
      [],
      false);
  }

  simulateStoragePressure(origin_url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.QuotaInternalsHandler_SimulateStoragePressure_ParamsSpec,
      null,
      [origin_url],
      false);
  }

  retrieveBucketsTable() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParamsSpec,
      [],
      false);
  }

  getGlobalUsageForInternals() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ResponseParamsSpec,
      [],
      false);
  }

  isSimulateStoragePressureAvailable() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ParamsSpec,
      storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ResponseParamsSpec,
      [],
      false);
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

storage.mojom.QuotaInternalsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getDiskAvailabilityAndTempPoolSize');
          const result = this.impl.getDiskAvailabilityAndTempPoolSize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaInternalsHandler_GetDiskAvailabilityAndTempPoolSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.QuotaInternalsHandler_GetStatistics_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getStatistics');
          const result = this.impl.getStatistics();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaInternalsHandler_GetStatistics_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.QuotaInternalsHandler_SimulateStoragePressure_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.simulateStoragePressure');
          const result = this.impl.simulateStoragePressure(params.origin_url);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.retrieveBucketsTable');
          const result = this.impl.retrieveBucketsTable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaInternalsHandler_RetrieveBucketsTable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getGlobalUsageForInternals');
          const result = this.impl.getGlobalUsageForInternals();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaInternalsHandler_GetGlobalUsageForInternals_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.isSimulateStoragePressureAvailable');
          const result = this.impl.isSimulateStoragePressureAvailable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaInternalsHandler_IsSimulateStoragePressureAvailable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.QuotaInternalsHandlerReceiver = storage.mojom.QuotaInternalsHandlerReceiver;

storage.mojom.QuotaInternalsHandlerPtr = storage.mojom.QuotaInternalsHandlerRemote;
storage.mojom.QuotaInternalsHandlerRequest = storage.mojom.QuotaInternalsHandlerPendingReceiver;

