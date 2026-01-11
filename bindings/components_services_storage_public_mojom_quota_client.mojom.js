// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/quota_client.mojom
// Module: storage.mojom

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};

storage.mojom.QuotaClient = {};
storage.mojom.QuotaClient.$interfaceName = 'storage.mojom.QuotaClient';
storage.mojom.QuotaClient_GetBucketUsage_ParamsSpec = { $: {} };
storage.mojom.QuotaClient_GetBucketUsage_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaClient_GetDefaultStorageKeys_ParamsSpec = { $: {} };
storage.mojom.QuotaClient_GetDefaultStorageKeys_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaClient_DeleteBucketData_ParamsSpec = { $: {} };
storage.mojom.QuotaClient_DeleteBucketData_ResponseParamsSpec = { $: {} };
storage.mojom.QuotaClient_PerformStorageCleanup_ParamsSpec = { $: {} };
storage.mojom.QuotaClient_PerformStorageCleanup_ResponseParamsSpec = { $: {} };

// Interface: QuotaClient
mojo.internal.Struct(
    storage.mojom.QuotaClient_GetBucketUsage_ParamsSpec, 'storage.mojom.QuotaClient_GetBucketUsage_Params', [
      mojo.internal.StructField('bucket', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_GetBucketUsage_ResponseParamsSpec, 'storage.mojom.QuotaClient_GetBucketUsage_ResponseParams', [
      mojo.internal.StructField('usage', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_GetDefaultStorageKeys_ParamsSpec, 'storage.mojom.QuotaClient_GetDefaultStorageKeys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_GetDefaultStorageKeys_ResponseParamsSpec, 'storage.mojom.QuotaClient_GetDefaultStorageKeys_ResponseParams', [
      mojo.internal.StructField('storage_keys', 0, 0, mojo.internal.Array(blink.mojom.StorageKeySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_DeleteBucketData_ParamsSpec, 'storage.mojom.QuotaClient_DeleteBucketData_Params', [
      mojo.internal.StructField('bucket', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_DeleteBucketData_ResponseParamsSpec, 'storage.mojom.QuotaClient_DeleteBucketData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.QuotaStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_PerformStorageCleanup_ParamsSpec, 'storage.mojom.QuotaClient_PerformStorageCleanup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.QuotaClient_PerformStorageCleanup_ResponseParamsSpec, 'storage.mojom.QuotaClient_PerformStorageCleanup_ResponseParams', [
    ],
    [[0, 8]]);

storage.mojom.QuotaClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.QuotaClientRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.QuotaClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.QuotaClientPendingReceiver,
      handle);
    this.$ = new storage.mojom.QuotaClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getBucketUsage(bucket) {
    return this.$.getBucketUsage(bucket);
  }
  getDefaultStorageKeys() {
    return this.$.getDefaultStorageKeys();
  }
  deleteBucketData(bucket) {
    return this.$.deleteBucketData(bucket);
  }
  performStorageCleanup() {
    return this.$.performStorageCleanup();
  }
};

storage.mojom.QuotaClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('QuotaClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getBucketUsage(bucket) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.QuotaClient_GetBucketUsage_ParamsSpec,
      storage.mojom.QuotaClient_GetBucketUsage_ResponseParamsSpec,
      [bucket],
      false);
  }

  getDefaultStorageKeys() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.QuotaClient_GetDefaultStorageKeys_ParamsSpec,
      storage.mojom.QuotaClient_GetDefaultStorageKeys_ResponseParamsSpec,
      [],
      false);
  }

  deleteBucketData(bucket) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      storage.mojom.QuotaClient_DeleteBucketData_ParamsSpec,
      storage.mojom.QuotaClient_DeleteBucketData_ResponseParamsSpec,
      [bucket],
      false);
  }

  performStorageCleanup() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      storage.mojom.QuotaClient_PerformStorageCleanup_ParamsSpec,
      storage.mojom.QuotaClient_PerformStorageCleanup_ResponseParamsSpec,
      [],
      false);
  }

};

storage.mojom.QuotaClient.getRemote = function() {
  let remote = new storage.mojom.QuotaClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.QuotaClient',
    'context');
  return remote.$;
};

storage.mojom.QuotaClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('QuotaClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.QuotaClient_GetBucketUsage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.QuotaClient_GetDefaultStorageKeys_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.QuotaClient_DeleteBucketData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.QuotaClient_PerformStorageCleanup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.QuotaClient_GetBucketUsage_ParamsSpec.$.structSpec);
          const result = this.impl.getBucketUsage(params.bucket);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaClient_GetBucketUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.QuotaClient_GetDefaultStorageKeys_ParamsSpec.$.structSpec);
          const result = this.impl.getDefaultStorageKeys();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaClient_GetDefaultStorageKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.QuotaClient_DeleteBucketData_ParamsSpec.$.structSpec);
          const result = this.impl.deleteBucketData(params.bucket);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaClient_DeleteBucketData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.QuotaClient_PerformStorageCleanup_ParamsSpec.$.structSpec);
          const result = this.impl.performStorageCleanup();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.QuotaClient_PerformStorageCleanup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

storage.mojom.QuotaClientReceiver = storage.mojom.QuotaClientReceiver;

storage.mojom.QuotaClientPtr = storage.mojom.QuotaClientRemote;
storage.mojom.QuotaClientRequest = storage.mojom.QuotaClientPendingReceiver;

