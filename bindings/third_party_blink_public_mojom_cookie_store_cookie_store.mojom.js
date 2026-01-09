// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/cookie_store/cookie_store.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: CookieChangeSubscription
blink.mojom.CookieChangeSubscriptionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CookieChangeSubscription',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: CookieStore
blink.mojom.CookieStore = {};

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
      [service_worker_registration_id, subscription]);
  }

  removeSubscriptions(service_worker_registration_id, subscription) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.CookieStore_RemoveSubscriptions_ParamsSpec,
      blink.mojom.CookieStore_RemoveSubscriptions_ResponseParamsSpec,
      [service_worker_registration_id, subscription]);
  }

  getSubscriptions(service_worker_registration_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.CookieStore_GetSubscriptions_ParamsSpec,
      blink.mojom.CookieStore_GetSubscriptions_ResponseParamsSpec,
      [service_worker_registration_id]);
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

// ParamsSpec for AddSubscriptions
blink.mojom.CookieStore_AddSubscriptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CookieStore.AddSubscriptions_Params',
      packedSize: 24,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'subscription', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.CookieStore_AddSubscriptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CookieStore.AddSubscriptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveSubscriptions
blink.mojom.CookieStore_RemoveSubscriptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CookieStore.RemoveSubscriptions_Params',
      packedSize: 24,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'subscription', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.CookieStore_RemoveSubscriptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CookieStore.RemoveSubscriptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSubscriptions
blink.mojom.CookieStore_GetSubscriptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CookieStore.GetSubscriptions_Params',
      packedSize: 16,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.CookieStore_GetSubscriptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CookieStore.GetSubscriptions_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'subscriptions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.CookieStorePtr = blink.mojom.CookieStoreRemote;
blink.mojom.CookieStoreRequest = blink.mojom.CookieStorePendingReceiver;

