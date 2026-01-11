// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/buckets/bucket_manager_host.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.BucketErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.BucketPoliciesSpec = { $: {} };
blink.mojom.BucketHost = {};
blink.mojom.BucketHost.$interfaceName = 'blink.mojom.BucketHost';
blink.mojom.BucketHost_Persist_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Persist_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_Persisted_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Persisted_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_Estimate_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Estimate_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_Durability_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Durability_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_SetExpires_ParamsSpec = { $: {} };
blink.mojom.BucketHost_SetExpires_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_Expires_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Expires_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_GetIdbFactory_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetLockManager_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetCaches_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetDirectory_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec = { $: {} };
blink.mojom.BucketManagerHost = {};
blink.mojom.BucketManagerHost.$interfaceName = 'blink.mojom.BucketManagerHost';
blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_Keys_ParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec = { $: {} };

// Enum: BucketError
blink.mojom.BucketError = {
  kUnknown: 0,
  kQuotaExceeded: 1,
  kInvalidExpiration: 2,
};

// Struct: BucketPolicies
mojo.internal.Struct(
    blink.mojom.BucketPoliciesSpec, 'blink.mojom.BucketPolicies', [
      mojo.internal.StructField('durability', 0, 0, blink.mojom.BucketDurabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('expires', 16, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('persisted', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_persisted', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_durability', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_quota', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: BucketHost
mojo.internal.Struct(
    blink.mojom.BucketHost_Persist_ParamsSpec, 'blink.mojom.BucketHost_Persist_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Persist_ResponseParamsSpec, 'blink.mojom.BucketHost_Persist_ResponseParams', [
      mojo.internal.StructField('persisted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('success', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Persisted_ParamsSpec, 'blink.mojom.BucketHost_Persisted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Persisted_ResponseParamsSpec, 'blink.mojom.BucketHost_Persisted_ResponseParams', [
      mojo.internal.StructField('persisted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('success', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Estimate_ParamsSpec, 'blink.mojom.BucketHost_Estimate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Estimate_ResponseParamsSpec, 'blink.mojom.BucketHost_Estimate_ResponseParams', [
      mojo.internal.StructField('current_usage', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('current_quota', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Durability_ParamsSpec, 'blink.mojom.BucketHost_Durability_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Durability_ResponseParamsSpec, 'blink.mojom.BucketHost_Durability_ResponseParams', [
      mojo.internal.StructField('durability', 0, 0, blink.mojom.BucketDurabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_SetExpires_ParamsSpec, 'blink.mojom.BucketHost_SetExpires_Params', [
      mojo.internal.StructField('expires', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_SetExpires_ResponseParamsSpec, 'blink.mojom.BucketHost_SetExpires_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Expires_ParamsSpec, 'blink.mojom.BucketHost_Expires_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Expires_ResponseParamsSpec, 'blink.mojom.BucketHost_Expires_ResponseParams', [
      mojo.internal.StructField('expires', 0, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetIdbFactory_ParamsSpec, 'blink.mojom.BucketHost_GetIdbFactory_Params', [
      mojo.internal.StructField('idb_factory', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.IDBFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetLockManager_ParamsSpec, 'blink.mojom.BucketHost_GetLockManager_Params', [
      mojo.internal.StructField('lock_manager', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.LockManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetCaches_ParamsSpec, 'blink.mojom.BucketHost_GetCaches_Params', [
      mojo.internal.StructField('cache_storage', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.CacheStorageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetDirectory_ParamsSpec, 'blink.mojom.BucketHost_GetDirectory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec, 'blink.mojom.BucketHost_GetDirectory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec, 'blink.mojom.BucketHost_GetDirectoryForDevtools_Params', [
      mojo.internal.StructField('directory_path_components', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec, 'blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.BucketHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BucketHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BucketHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BucketHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.BucketHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  persist() {
    return this.$.persist();
  }
  persisted() {
    return this.$.persisted();
  }
  estimate() {
    return this.$.estimate();
  }
  durability() {
    return this.$.durability();
  }
  setExpires(expires) {
    return this.$.setExpires(expires);
  }
  expires() {
    return this.$.expires();
  }
  getIdbFactory(idb_factory) {
    return this.$.getIdbFactory(idb_factory);
  }
  getLockManager(lock_manager) {
    return this.$.getLockManager(lock_manager);
  }
  getCaches(cache_storage) {
    return this.$.getCaches(cache_storage);
  }
  getDirectory() {
    return this.$.getDirectory();
  }
  getDirectoryForDevtools(directory_path_components) {
    return this.$.getDirectoryForDevtools(directory_path_components);
  }
};

blink.mojom.BucketHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BucketHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  persist() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.BucketHost_Persist_ParamsSpec,
      blink.mojom.BucketHost_Persist_ResponseParamsSpec,
      [],
      false);
  }

  persisted() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.BucketHost_Persisted_ParamsSpec,
      blink.mojom.BucketHost_Persisted_ResponseParamsSpec,
      [],
      false);
  }

  estimate() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.BucketHost_Estimate_ParamsSpec,
      blink.mojom.BucketHost_Estimate_ResponseParamsSpec,
      [],
      false);
  }

  durability() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.BucketHost_Durability_ParamsSpec,
      blink.mojom.BucketHost_Durability_ResponseParamsSpec,
      [],
      false);
  }

  setExpires(expires) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.BucketHost_SetExpires_ParamsSpec,
      blink.mojom.BucketHost_SetExpires_ResponseParamsSpec,
      [expires],
      false);
  }

  expires() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.BucketHost_Expires_ParamsSpec,
      blink.mojom.BucketHost_Expires_ResponseParamsSpec,
      [],
      false);
  }

  getIdbFactory(idb_factory) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.BucketHost_GetIdbFactory_ParamsSpec,
      null,
      [idb_factory],
      false);
  }

  getLockManager(lock_manager) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.BucketHost_GetLockManager_ParamsSpec,
      null,
      [lock_manager],
      false);
  }

  getCaches(cache_storage) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.BucketHost_GetCaches_ParamsSpec,
      null,
      [cache_storage],
      false);
  }

  getDirectory() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.BucketHost_GetDirectory_ParamsSpec,
      blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec,
      [],
      false);
  }

  getDirectoryForDevtools(directory_path_components) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec,
      blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec,
      [directory_path_components],
      false);
  }

};

blink.mojom.BucketHost.getRemote = function() {
  let remote = new blink.mojom.BucketHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BucketHost',
    'context');
  return remote.$;
};

blink.mojom.BucketHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BucketHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.BucketHost_Persist_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_Persisted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_Estimate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_Durability_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_SetExpires_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_Expires_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_GetIdbFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_GetLockManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_GetCaches_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_GetDirectory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_Persist_ParamsSpec.$.structSpec);
          const result = this.impl.persist();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Persist_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_Persisted_ParamsSpec.$.structSpec);
          const result = this.impl.persisted();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Persisted_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_Estimate_ParamsSpec.$.structSpec);
          const result = this.impl.estimate();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Estimate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_Durability_ParamsSpec.$.structSpec);
          const result = this.impl.durability();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Durability_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_SetExpires_ParamsSpec.$.structSpec);
          const result = this.impl.setExpires(params.expires);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_SetExpires_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_Expires_ParamsSpec.$.structSpec);
          const result = this.impl.expires();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Expires_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_GetIdbFactory_ParamsSpec.$.structSpec);
          const result = this.impl.getIdbFactory(params.idb_factory);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_GetLockManager_ParamsSpec.$.structSpec);
          const result = this.impl.getLockManager(params.lock_manager);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_GetCaches_ParamsSpec.$.structSpec);
          const result = this.impl.getCaches(params.cache_storage);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_GetDirectory_ParamsSpec.$.structSpec);
          const result = this.impl.getDirectory();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec.$.structSpec);
          const result = this.impl.getDirectoryForDevtools(params.directory_path_components);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec);
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

blink.mojom.BucketHostReceiver = blink.mojom.BucketHostReceiver;

blink.mojom.BucketHostPtr = blink.mojom.BucketHostRemote;
blink.mojom.BucketHostRequest = blink.mojom.BucketHostPendingReceiver;


// Interface: BucketManagerHost
mojo.internal.Struct(
    blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec, 'blink.mojom.BucketManagerHost_OpenBucket_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('policy', 8, 0, blink.mojom.BucketPoliciesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec, 'blink.mojom.BucketManagerHost_OpenBucket_ResponseParams', [
      mojo.internal.StructField('remote', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.BucketHostRemote), null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, blink.mojom.BucketErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec, 'blink.mojom.BucketManagerHost_GetBucketForDevtools_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.BucketHostRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_Keys_ParamsSpec, 'blink.mojom.BucketManagerHost_Keys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec, 'blink.mojom.BucketManagerHost_Keys_ResponseParams', [
      mojo.internal.StructField('buckets', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec, 'blink.mojom.BucketManagerHost_DeleteBucket_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec, 'blink.mojom.BucketManagerHost_DeleteBucket_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BucketManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BucketManagerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BucketManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BucketManagerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.BucketManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  openBucket(name, policy) {
    return this.$.openBucket(name, policy);
  }
  getBucketForDevtools(name, receiver) {
    return this.$.getBucketForDevtools(name, receiver);
  }
  keys() {
    return this.$.keys();
  }
  deleteBucket(name) {
    return this.$.deleteBucket(name);
  }
};

blink.mojom.BucketManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BucketManagerHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  openBucket(name, policy) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec,
      blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec,
      [name, policy],
      false);
  }

  getBucketForDevtools(name, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec,
      null,
      [name, receiver],
      false);
  }

  keys() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.BucketManagerHost_Keys_ParamsSpec,
      blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec,
      [],
      false);
  }

  deleteBucket(name) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec,
      blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec,
      [name],
      false);
  }

};

blink.mojom.BucketManagerHost.getRemote = function() {
  let remote = new blink.mojom.BucketManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BucketManagerHost',
    'context');
  return remote.$;
};

blink.mojom.BucketManagerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BucketManagerHost', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketManagerHost_Keys_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec.$.structSpec);
          const result = this.impl.openBucket(params.name, params.policy);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec.$.structSpec);
          const result = this.impl.getBucketForDevtools(params.name, params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketManagerHost_Keys_ParamsSpec.$.structSpec);
          const result = this.impl.keys();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec.$.structSpec);
          const result = this.impl.deleteBucket(params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec);
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

blink.mojom.BucketManagerHostReceiver = blink.mojom.BucketManagerHostReceiver;

blink.mojom.BucketManagerHostPtr = blink.mojom.BucketManagerHostRemote;
blink.mojom.BucketManagerHostRequest = blink.mojom.BucketManagerHostPendingReceiver;

