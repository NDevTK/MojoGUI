// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_registration.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};


// Struct: ChangedServiceWorkerObjectsMask
blink.mojom.mojom.ChangedServiceWorkerObjectsMaskSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ChangedServiceWorkerObjectsMask',
      packedSize: 16,
      fields: [
        { name: 'installing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'waiting', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'active', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ServiceWorkerRegistrationObjectInfo
blink.mojom.mojom.ServiceWorkerRegistrationObjectInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectInfo',
      packedSize: 72,
      fields: [
        { name: 'registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'scope', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'update_via_cache', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.ServiceWorkerUpdateViaCacheSpec, nullable: false, minVersion: 0 },
        { name: 'host_remote', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.ServiceWorkerRegistrationObjectHostRemote), nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(blink.mojom.ServiceWorkerRegistrationObjectRemote), nullable: false, minVersion: 0 },
        { name: 'installing', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.ServiceWorkerObjectInfoSpec, nullable: true, minVersion: 0 },
        { name: 'waiting', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.ServiceWorkerObjectInfoSpec, nullable: true, minVersion: 0 },
        { name: 'active', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.ServiceWorkerObjectInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Interface: ServiceWorkerRegistrationObjectHost
blink.mojom.mojom.ServiceWorkerRegistrationObjectHost = {};

blink.mojom.mojom.ServiceWorkerRegistrationObjectHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ServiceWorkerRegistrationObjectHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerRegistrationObjectHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ServiceWorkerRegistrationObjectHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ServiceWorkerRegistrationObjectHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ServiceWorkerRegistrationObjectHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(outside_fetch_client_settings_object) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParamsSpec,
      [outside_fetch_client_settings_object]);
  }

  unregister() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParamsSpec,
      []);
  }

  enableNavigationPreload(enable) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParamsSpec,
      [enable]);
  }

  getNavigationPreloadState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParamsSpec,
      []);
  }

  setNavigationPreloadHeader(value) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParamsSpec,
      [value]);
  }

};

blink.mojom.mojom.ServiceWorkerRegistrationObjectHost.getRemote = function() {
  let remote = new blink.mojom.mojom.ServiceWorkerRegistrationObjectHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerRegistrationObjectHost',
    'context');
  return remote.$;
};

// ParamsSpec for Update
blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'outside_fetch_client_settings_object', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FetchClientSettingsObjectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.Update_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'error_msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Unregister
blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.Unregister_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.Unregister_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'error_msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EnableNavigationPreload
blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.EnableNavigationPreload_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.EnableNavigationPreload_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'error_msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetNavigationPreloadState
blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.GetNavigationPreloadState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.GetNavigationPreloadState_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ServiceWorkerErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'error_msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.NavigationPreloadStateSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetNavigationPreloadHeader
blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.SetNavigationPreloadHeader_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObjectHost.SetNavigationPreloadHeader_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'error_msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ServiceWorkerRegistrationObjectHostPtr = blink.mojom.mojom.ServiceWorkerRegistrationObjectHostRemote;
blink.mojom.mojom.ServiceWorkerRegistrationObjectHostRequest = blink.mojom.mojom.ServiceWorkerRegistrationObjectHostPendingReceiver;


// Interface: ServiceWorkerRegistrationObject
blink.mojom.mojom.ServiceWorkerRegistrationObject = {};

blink.mojom.mojom.ServiceWorkerRegistrationObjectPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ServiceWorkerRegistrationObjectRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerRegistrationObject';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ServiceWorkerRegistrationObjectPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ServiceWorkerRegistrationObjectRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ServiceWorkerRegistrationObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setServiceWorkerObjects(changed_mask, installing, waiting, active) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec,
      null,
      [changed_mask, installing, waiting, active]);
  }

  setUpdateViaCache(update_via_cache) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec,
      null,
      [update_via_cache]);
  }

  updateFound() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.ServiceWorkerRegistrationObject.getRemote = function() {
  let remote = new blink.mojom.mojom.ServiceWorkerRegistrationObjectRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerRegistrationObject',
    'context');
  return remote.$;
};

// ParamsSpec for SetServiceWorkerObjects
blink.mojom.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObject.SetServiceWorkerObjects_Params',
      packedSize: 40,
      fields: [
        { name: 'changed_mask', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ChangedServiceWorkerObjectsMaskSpec, nullable: false, minVersion: 0 },
        { name: 'installing', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerObjectInfoSpec, nullable: true, minVersion: 0 },
        { name: 'waiting', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ServiceWorkerObjectInfoSpec, nullable: true, minVersion: 0 },
        { name: 'active', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ServiceWorkerObjectInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for SetUpdateViaCache
blink.mojom.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObject.SetUpdateViaCache_Params',
      packedSize: 16,
      fields: [
        { name: 'update_via_cache', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerUpdateViaCacheSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateFound
blink.mojom.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationObject.UpdateFound_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ServiceWorkerRegistrationObjectPtr = blink.mojom.mojom.ServiceWorkerRegistrationObjectRemote;
blink.mojom.mojom.ServiceWorkerRegistrationObjectRequest = blink.mojom.mojom.ServiceWorkerRegistrationObjectPendingReceiver;

