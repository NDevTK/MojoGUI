// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/cookie_store/cookie_store.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};
var url = url || {};

blink.mojom.CookieChangeSubscriptionSpec = { $: {} };
blink.mojom.CookieStore = {};
blink.mojom.CookieStore.$interfaceName = 'blink.mojom.CookieStore';
blink.mojom.CookieStore_AddSubscriptions_ParamsSpec = { $: {} };
blink.mojom.CookieStore_AddSubscriptions_ResponseParamsSpec = { $: {} };
blink.mojom.CookieStore_RemoveSubscriptions_ParamsSpec = { $: {} };
blink.mojom.CookieStore_RemoveSubscriptions_ResponseParamsSpec = { $: {} };
blink.mojom.CookieStore_GetSubscriptions_ParamsSpec = { $: {} };
blink.mojom.CookieStore_GetSubscriptions_ResponseParamsSpec = { $: {} };

// Struct: CookieChangeSubscription
mojo.internal.Struct(
    blink.mojom.CookieChangeSubscriptionSpec, 'blink.mojom.CookieChangeSubscription', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('match_type', 8, 0, network.mojom.CookieMatchTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: CookieStore
mojo.internal.Struct(
    blink.mojom.CookieStore_AddSubscriptions_ParamsSpec, 'blink.mojom.CookieStore_AddSubscriptions_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('subscription', 8, 0, mojo.internal.Array(blink.mojom.CookieChangeSubscriptionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.CookieStore_AddSubscriptions_ResponseParamsSpec, 'blink.mojom.CookieStore_AddSubscriptions_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CookieStore_RemoveSubscriptions_ParamsSpec, 'blink.mojom.CookieStore_RemoveSubscriptions_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('subscription', 8, 0, mojo.internal.Array(blink.mojom.CookieChangeSubscriptionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.CookieStore_RemoveSubscriptions_ResponseParamsSpec, 'blink.mojom.CookieStore_RemoveSubscriptions_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CookieStore_GetSubscriptions_ParamsSpec, 'blink.mojom.CookieStore_GetSubscriptions_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CookieStore_GetSubscriptions_ResponseParamsSpec, 'blink.mojom.CookieStore_GetSubscriptions_ResponseParams', [
      mojo.internal.StructField('subscriptions', 0, 0, mojo.internal.Array(blink.mojom.CookieChangeSubscriptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.CookieStorePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.CookieStoreRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CookieStore';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.CookieStorePendingReceiver,
      handle);
    this.$ = new blink.mojom.CookieStoreRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.CookieStoreRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addSubscriptions(service_worker_registration_id, subscription) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.CookieStore_AddSubscriptions_ParamsSpec,
      blink.mojom.CookieStore_AddSubscriptions_ResponseParamsSpec,
      [service_worker_registration_id, subscription],
      false);
  }

  removeSubscriptions(service_worker_registration_id, subscription) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.CookieStore_RemoveSubscriptions_ParamsSpec,
      blink.mojom.CookieStore_RemoveSubscriptions_ResponseParamsSpec,
      [service_worker_registration_id, subscription],
      false);
  }

  getSubscriptions(service_worker_registration_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.CookieStore_GetSubscriptions_ParamsSpec,
      blink.mojom.CookieStore_GetSubscriptions_ResponseParamsSpec,
      [service_worker_registration_id],
      false);
  }

};

blink.mojom.CookieStore.getRemote = function() {
  let remote = new blink.mojom.CookieStoreRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CookieStore',
    'context');
  return remote.$;
};

blink.mojom.CookieStoreReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddSubscriptions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.CookieStore_AddSubscriptions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddSubscriptions (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: RemoveSubscriptions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.CookieStore_RemoveSubscriptions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveSubscriptions (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: GetSubscriptions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.CookieStore_GetSubscriptions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSubscriptions (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.CookieStore_AddSubscriptions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addSubscriptions');
          const result = this.impl.addSubscriptions(params.service_worker_registration_id, params.subscription);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CookieStore_AddSubscriptions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.CookieStore_RemoveSubscriptions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeSubscriptions');
          const result = this.impl.removeSubscriptions(params.service_worker_registration_id, params.subscription);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CookieStore_RemoveSubscriptions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.CookieStore_GetSubscriptions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSubscriptions');
          const result = this.impl.getSubscriptions(params.service_worker_registration_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CookieStore_GetSubscriptions_ResponseParamsSpec);
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

blink.mojom.CookieStoreReceiver = blink.mojom.CookieStoreReceiver;

blink.mojom.CookieStorePtr = blink.mojom.CookieStoreRemote;
blink.mojom.CookieStoreRequest = blink.mojom.CookieStorePendingReceiver;

