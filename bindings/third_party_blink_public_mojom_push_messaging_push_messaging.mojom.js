// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/push_messaging/push_messaging.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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
blink.mojom.PushErrorTypeSpec = { $: mojo.internal.Enum() };

// Struct: PushSubscriptionOptions
blink.mojom.PushSubscriptionOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PushSubscriptionOptions',
      packedSize: 24,
      fields: [
        { name: 'user_visible_only', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'application_server_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PushSubscription
blink.mojom.PushSubscriptionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PushSubscription',
      packedSize: 48,
      fields: [
        { name: 'endpoint', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'expirationTime', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PushSubscriptionOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'p256dh', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'auth', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: PushMessaging
blink.mojom.PushMessaging = {};

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
      [service_worker_registration_id, options, user_gesture]);
  }

  unsubscribe(service_worker_registration_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PushMessaging_Unsubscribe_ParamsSpec,
      blink.mojom.PushMessaging_Unsubscribe_ResponseParamsSpec,
      [service_worker_registration_id]);
  }

  getSubscription(service_worker_registration_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PushMessaging_GetSubscription_ParamsSpec,
      blink.mojom.PushMessaging_GetSubscription_ResponseParamsSpec,
      [service_worker_registration_id]);
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

// ParamsSpec for Subscribe
blink.mojom.PushMessaging_Subscribe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PushMessaging.Subscribe_Params',
      packedSize: 32,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PushSubscriptionOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'user_gesture', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.PushMessaging_Subscribe_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PushRegistrationStatusSpec, nullable: false, minVersion: 0 },
        { name: 'subscription', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PushSubscriptionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Unsubscribe
blink.mojom.PushMessaging_Unsubscribe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PushMessaging.Unsubscribe_Params',
      packedSize: 16,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.PushMessaging_Unsubscribe_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PushErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'did_unsubscribe', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetSubscription
blink.mojom.PushMessaging_GetSubscription_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PushMessaging.GetSubscription_Params',
      packedSize: 16,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.PushMessaging_GetSubscription_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PushGetRegistrationStatusSpec, nullable: false, minVersion: 0 },
        { name: 'subscription', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PushSubscriptionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.PushMessagingPtr = blink.mojom.PushMessagingRemote;
blink.mojom.PushMessagingRequest = blink.mojom.PushMessagingPendingReceiver;

