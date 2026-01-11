// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/cache_storage_control.mojom
// Module: storage.mojom

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var network = network || {};
var blink = blink || {};

storage.mojom.CacheStorageOwnerSpec = { $: mojo.internal.Enum() };
storage.mojom.CacheStorageObserver = {};
storage.mojom.CacheStorageObserver.$interfaceName = 'storage.mojom.CacheStorageObserver';
storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec = { $: {} };
storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec = { $: {} };
storage.mojom.CacheStorageControl = {};
storage.mojom.CacheStorageControl.$interfaceName = 'storage.mojom.CacheStorageControl';
storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec = { $: {} };
storage.mojom.CacheStorageControl_AddObserver_ParamsSpec = { $: {} };
storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec = { $: {} };

// Enum: CacheStorageOwner
storage.mojom.CacheStorageOwner = {
  kCacheAPI: 0,
  kBackgroundFetch: 1,
};

// Interface: CacheStorageObserver
mojo.internal.Struct(
    storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec, 'storage.mojom.CacheStorageObserver_OnCacheListChanged_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec, 'storage.mojom.CacheStorageObserver_OnCacheContentChanged_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cache_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

storage.mojom.CacheStorageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.CacheStorageObserverRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.CacheStorageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.CacheStorageObserverPendingReceiver,
      handle);
    this.$ = new storage.mojom.CacheStorageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCacheListChanged(bucket_locator) {
    return this.$.onCacheListChanged(bucket_locator);
  }
  onCacheContentChanged(bucket_locator, cache_name) {
    return this.$.onCacheContentChanged(bucket_locator, cache_name);
  }
};

storage.mojom.CacheStorageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CacheStorageObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onCacheListChanged(bucket_locator) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec,
      null,
      [bucket_locator],
      false);
  }

  onCacheContentChanged(bucket_locator, cache_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec,
      null,
      [bucket_locator, cache_name],
      false);
  }

};

storage.mojom.CacheStorageObserver.getRemote = function() {
  let remote = new storage.mojom.CacheStorageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.CacheStorageObserver',
    'context');
  return remote.$;
};

storage.mojom.CacheStorageObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CacheStorageObserver', [
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
             decoder.decodeStructInline(storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.CacheStorageObserver_OnCacheListChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onCacheListChanged(params.bucket_locator);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.CacheStorageObserver_OnCacheContentChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onCacheContentChanged(params.bucket_locator, params.cache_name);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

storage.mojom.CacheStorageObserverReceiver = storage.mojom.CacheStorageObserverReceiver;

storage.mojom.CacheStorageObserverPtr = storage.mojom.CacheStorageObserverRemote;
storage.mojom.CacheStorageObserverRequest = storage.mojom.CacheStorageObserverPendingReceiver;


// Interface: CacheStorageControl
mojo.internal.Struct(
    storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec, 'storage.mojom.CacheStorageControl_AddReceiver_Params', [
      mojo.internal.StructField('cross_origin_embedder_policy', 0, 0, network.mojom.CrossOriginEmbedderPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('coep_reporter', 8, 0, mojo.internal.InterfaceProxy(network.mojom.CrossOriginEmbedderPolicyReporterRemote), null, true, 0, undefined),
      mojo.internal.StructField('document_isolation_policy', 16, 0, network.mojom.DocumentIsolationPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dip_reporter', 24, 0, mojo.internal.InterfaceProxy(network.mojom.DocumentIsolationPolicyReporterRemote), null, true, 0, undefined),
      mojo.internal.StructField('bucket_locator', 32, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('owner', 40, 0, storage.mojom.CacheStorageOwnerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 48, 0, mojo.internal.InterfaceRequest(blink.mojom.CacheStorageRemote), null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    storage.mojom.CacheStorageControl_AddObserver_ParamsSpec, 'storage.mojom.CacheStorageControl_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(storage.mojom.CacheStorageObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec, 'storage.mojom.CacheStorageControl_ApplyPolicyUpdates_Params', [
      mojo.internal.StructField('policy_updates', 0, 0, mojo.internal.Array(storage.mojom.StoragePolicyUpdateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.CacheStorageControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.CacheStorageControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.CacheStorageControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.CacheStorageControlPendingReceiver,
      handle);
    this.$ = new storage.mojom.CacheStorageControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addReceiver(cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter, bucket_locator, owner, receiver) {
    return this.$.addReceiver(cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter, bucket_locator, owner, receiver);
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  applyPolicyUpdates(policy_updates) {
    return this.$.applyPolicyUpdates(policy_updates);
  }
};

storage.mojom.CacheStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CacheStorageControl', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addReceiver(cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter, bucket_locator, owner, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec,
      null,
      [cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter, bucket_locator, owner, receiver],
      false);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.CacheStorageControl_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  applyPolicyUpdates(policy_updates) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec,
      null,
      [policy_updates],
      false);
  }

};

storage.mojom.CacheStorageControl.getRemote = function() {
  let remote = new storage.mojom.CacheStorageControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.CacheStorageControl',
    'context');
  return remote.$;
};

storage.mojom.CacheStorageControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CacheStorageControl', [
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
             decoder.decodeStructInline(storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.CacheStorageControl_AddObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.CacheStorageControl_AddReceiver_ParamsSpec.$.structSpec);
          const result = this.impl.addReceiver(params.cross_origin_embedder_policy, params.coep_reporter, params.document_isolation_policy, params.dip_reporter, params.bucket_locator, params.owner, params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.CacheStorageControl_AddObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.CacheStorageControl_ApplyPolicyUpdates_ParamsSpec.$.structSpec);
          const result = this.impl.applyPolicyUpdates(params.policy_updates);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

storage.mojom.CacheStorageControlReceiver = storage.mojom.CacheStorageControlReceiver;

storage.mojom.CacheStorageControlPtr = storage.mojom.CacheStorageControlRemote;
storage.mojom.CacheStorageControlRequest = storage.mojom.CacheStorageControlPendingReceiver;

