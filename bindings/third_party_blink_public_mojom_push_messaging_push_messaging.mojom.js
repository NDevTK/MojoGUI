// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/push_messaging/push_messaging.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};
var mojo_base = mojo_base || {};

blink.mojom.PushErrorTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.PushSubscriptionOptionsSpec = { $: {} };
blink.mojom.PushSubscriptionSpec = { $: {} };
blink.mojom.PushMessaging = {};
blink.mojom.PushMessaging.$interfaceName = 'blink.mojom.PushMessaging';
blink.mojom.PushMessaging_Subscribe_ParamsSpec = { $: {} };
blink.mojom.PushMessaging_Subscribe_ResponseParamsSpec = { $: {} };
blink.mojom.PushMessaging_Unsubscribe_ParamsSpec = { $: {} };
blink.mojom.PushMessaging_Unsubscribe_ResponseParamsSpec = { $: {} };
blink.mojom.PushMessaging_GetSubscription_ParamsSpec = { $: {} };
blink.mojom.PushMessaging_GetSubscription_ResponseParamsSpec = { $: {} };

// Enum: PushErrorType
blink.mojom.PushErrorType = {
  ABORT: 0,
  NETWORK: 1,
  NONE: 2,
  NOT_ALLOWED: 3,
  NOT_FOUND: 4,
  NOT_SUPPORTED: 5,
  INVALID_STATE: 6,
};

// Struct: PushSubscriptionOptions
mojo.internal.Struct(
    blink.mojom.PushSubscriptionOptionsSpec, 'blink.mojom.PushSubscriptionOptions', [
      mojo.internal.StructField('application_server_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('user_visible_only', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PushSubscription
mojo.internal.Struct(
    blink.mojom.PushSubscriptionSpec, 'blink.mojom.PushSubscription', [
      mojo.internal.StructField('endpoint', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expirationTime', 8, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('options', 16, 0, blink.mojom.PushSubscriptionOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('p256dh', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('auth', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: PushMessaging
mojo.internal.Struct(
    blink.mojom.PushMessaging_Subscribe_ParamsSpec, 'blink.mojom.PushMessaging_Subscribe_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.PushSubscriptionOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PushMessaging_Subscribe_ResponseParamsSpec, 'blink.mojom.PushMessaging_Subscribe_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.PushRegistrationStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subscription', 8, 0, blink.mojom.PushSubscriptionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PushMessaging_Unsubscribe_ParamsSpec, 'blink.mojom.PushMessaging_Unsubscribe_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PushMessaging_Unsubscribe_ResponseParamsSpec, 'blink.mojom.PushMessaging_Unsubscribe_ResponseParams', [
      mojo.internal.StructField('error_type', 0, 0, blink.mojom.PushErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('did_unsubscribe', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PushMessaging_GetSubscription_ParamsSpec, 'blink.mojom.PushMessaging_GetSubscription_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PushMessaging_GetSubscription_ResponseParamsSpec, 'blink.mojom.PushMessaging_GetSubscription_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.PushGetRegistrationStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subscription', 8, 0, blink.mojom.PushSubscriptionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.PushMessagingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PushMessagingRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PushMessaging';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PushMessagingPendingReceiver,
      handle);
    this.$ = new blink.mojom.PushMessagingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PushMessagingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  subscribe(service_worker_registration_id, options, user_gesture) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PushMessaging_Subscribe_ParamsSpec,
      blink.mojom.PushMessaging_Subscribe_ResponseParamsSpec,
      [service_worker_registration_id, options, user_gesture],
      false);
  }

  unsubscribe(service_worker_registration_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PushMessaging_Unsubscribe_ParamsSpec,
      blink.mojom.PushMessaging_Unsubscribe_ResponseParamsSpec,
      [service_worker_registration_id],
      false);
  }

  getSubscription(service_worker_registration_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PushMessaging_GetSubscription_ParamsSpec,
      blink.mojom.PushMessaging_GetSubscription_ResponseParamsSpec,
      [service_worker_registration_id],
      false);
  }

};

blink.mojom.PushMessaging.getRemote = function() {
  let remote = new blink.mojom.PushMessagingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PushMessaging',
    'context');
  return remote.$;
};

blink.mojom.PushMessagingReceiver = class {
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
        
        // Try Method 0: Subscribe
        try {
             decoder.decodeStruct(blink.mojom.PushMessaging_Subscribe_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Subscribe (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: Unsubscribe
        try {
             decoder.decodeStruct(blink.mojom.PushMessaging_Unsubscribe_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Unsubscribe (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: GetSubscription
        try {
             decoder.decodeStruct(blink.mojom.PushMessaging_GetSubscription_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSubscription (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PushMessaging_Subscribe_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.subscribe');
          const result = this.impl.subscribe(params.service_worker_registration_id, params.options, params.user_gesture);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PushMessaging_Subscribe_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PushMessaging_Unsubscribe_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.unsubscribe');
          const result = this.impl.unsubscribe(params.service_worker_registration_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PushMessaging_Unsubscribe_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PushMessaging_GetSubscription_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSubscription');
          const result = this.impl.getSubscription(params.service_worker_registration_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PushMessaging_GetSubscription_ResponseParamsSpec);
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

blink.mojom.PushMessagingReceiver = blink.mojom.PushMessagingReceiver;

blink.mojom.PushMessagingPtr = blink.mojom.PushMessagingRemote;
blink.mojom.PushMessagingRequest = blink.mojom.PushMessagingPendingReceiver;

