// Auto-generated MojoJS binding
// Source: chromium_src/storage/browser/quota/quota_manager_observer.mojom
// Module: storage.mojom

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};

storage.mojom.QuotaManagerObserver = {};
storage.mojom.QuotaManagerObserver.$interfaceName = 'storage.mojom.QuotaManagerObserver';
storage.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_ParamsSpec = { $: {} };
storage.mojom.QuotaManagerObserver_OnDeleteBucket_ParamsSpec = { $: {} };

// Interface: QuotaManagerObserver
mojo.internal.Struct(
    storage.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_ParamsSpec, 'storage.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_Params', [
      mojo.internal.StructField('bucket_info', 0, 0, storage.mojom.BucketInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.QuotaManagerObserver_OnDeleteBucket_ParamsSpec, 'storage.mojom.QuotaManagerObserver_OnDeleteBucket_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.QuotaManagerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.QuotaManagerObserverRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.QuotaManagerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.QuotaManagerObserverPendingReceiver,
      handle);
    this.$ = new storage.mojom.QuotaManagerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCreateOrUpdateBucket(bucket_info) {
    return this.$.onCreateOrUpdateBucket(bucket_info);
  }
  onDeleteBucket(bucket_locator) {
    return this.$.onDeleteBucket(bucket_locator);
  }
};

storage.mojom.QuotaManagerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('QuotaManagerObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onCreateOrUpdateBucket(bucket_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_ParamsSpec,
      null,
      [bucket_info],
      false);
  }

  onDeleteBucket(bucket_locator) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.QuotaManagerObserver_OnDeleteBucket_ParamsSpec,
      null,
      [bucket_locator],
      false);
  }

};

storage.mojom.QuotaManagerObserver.getRemote = function() {
  let remote = new storage.mojom.QuotaManagerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.QuotaManagerObserver',
    'context');
  return remote.$;
};

storage.mojom.QuotaManagerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('QuotaManagerObserver', [
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
             decoder.decodeStructInline(storage.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.QuotaManagerObserver_OnDeleteBucket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_ParamsSpec.$.structSpec);
          const result = this.impl.onCreateOrUpdateBucket(params.bucket_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.QuotaManagerObserver_OnDeleteBucket_ParamsSpec.$.structSpec);
          const result = this.impl.onDeleteBucket(params.bucket_locator);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

storage.mojom.QuotaManagerObserverReceiver = storage.mojom.QuotaManagerObserverReceiver;

storage.mojom.QuotaManagerObserverPtr = storage.mojom.QuotaManagerObserverRemote;
storage.mojom.QuotaManagerObserverRequest = storage.mojom.QuotaManagerObserverPendingReceiver;

