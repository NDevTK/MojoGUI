// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_registration.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ServiceWorkerRegistrationObjectHost
blink.mojom.ServiceWorkerRegistrationObjectHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerRegistrationObjectHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerRegistrationObjectHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerRegistrationObjectHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerRegistrationObjectHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerRegistrationObjectHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(outside_fetch_client_settings_object) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec.$,
      blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParamsSpec.$,
      [outside_fetch_client_settings_object]);
  }

  unregister() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec.$,
      blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParamsSpec.$,
      []);
  }

  enableNavigationPreload(enable) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec.$,
      blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParamsSpec.$,
      [enable]);
  }

  getNavigationPreloadState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec.$,
      blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParamsSpec.$,
      []);
  }

  setNavigationPreloadHeader(value) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec.$,
      blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParamsSpec.$,
      [value]);
  }

};

blink.mojom.ServiceWorkerRegistrationObjectHost.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerRegistrationObjectHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerRegistrationObjectHost',
    'context');
  return remote.$;
}};

// ParamsSpec for Update
blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'outside_fetch_client_settings_object', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.Update_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_msg', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Unregister
blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.Unregister_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.Unregister_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_msg', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for EnableNavigationPreload
blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.EnableNavigationPreload_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.EnableNavigationPreload_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_msg', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetNavigationPreloadState
blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.GetNavigationPreloadState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.GetNavigationPreloadState_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_msg', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'state', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetNavigationPreloadHeader
blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.SetNavigationPreloadHeader_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.SetNavigationPreloadHeader_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_msg', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
blink.mojom.ServiceWorkerRegistrationObjectHostPtr = blink.mojom.ServiceWorkerRegistrationObjectHostRemote;
blink.mojom.ServiceWorkerRegistrationObjectHostRequest = blink.mojom.ServiceWorkerRegistrationObjectHostPendingReceiver;


// Interface: ServiceWorkerRegistrationObject
blink.mojom.ServiceWorkerRegistrationObjectPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerRegistrationObjectRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerRegistrationObject';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerRegistrationObjectPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerRegistrationObjectRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerRegistrationObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setServiceWorkerObjects(changed_mask, installing, waiting, active) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec.$,
      null,
      [changed_mask, installing, waiting, active]);
  }

  setUpdateViaCache(update_via_cache) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec.$,
      null,
      [update_via_cache]);
  }

  updateFound() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec.$,
      null,
      []);
  }

};

blink.mojom.ServiceWorkerRegistrationObject.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerRegistrationObjectRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerRegistrationObject',
    'context');
  return remote.$;
}};

// ParamsSpec for SetServiceWorkerObjects
blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObject.SetServiceWorkerObjects_Params',
      packedSize: 40,
      fields: [
        { name: 'changed_mask', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'installing', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'waiting', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'active', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetUpdateViaCache
blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObject.SetUpdateViaCache_Params',
      packedSize: 16,
      fields: [
        { name: 'update_via_cache', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UpdateFound
blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObject.UpdateFound_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
blink.mojom.ServiceWorkerRegistrationObjectPtr = blink.mojom.ServiceWorkerRegistrationObjectRemote;
blink.mojom.ServiceWorkerRegistrationObjectRequest = blink.mojom.ServiceWorkerRegistrationObjectPendingReceiver;

