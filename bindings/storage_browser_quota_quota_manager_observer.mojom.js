// Auto-generated MojoJS binding
// Source: chromium_src/storage/browser/quota/quota_manager_observer.mojom
// Module: storage.mojom

'use strict';

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
};

storage.mojom.QuotaManagerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCreateOrUpdateBucket(bucket_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_ParamsSpec,
      null,
      [bucket_info],
      false);
  }

  onDeleteBucket(bucket_locator) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
          const params = decoder.decodeStruct(storage.mojom.QuotaManagerObserver_OnCreateOrUpdateBucket_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onCreateOrUpdateBucket');
          const result = this.impl.onCreateOrUpdateBucket(params.bucket_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.QuotaManagerObserver_OnDeleteBucket_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onDeleteBucket');
          const result = this.impl.onDeleteBucket(params.bucket_locator);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.QuotaManagerObserverReceiver = storage.mojom.QuotaManagerObserverReceiver;

storage.mojom.QuotaManagerObserverPtr = storage.mojom.QuotaManagerObserverRemote;
storage.mojom.QuotaManagerObserverRequest = storage.mojom.QuotaManagerObserverPendingReceiver;

