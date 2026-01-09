// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_context.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: GeolocationPermissionLevel
device.mojom.GeolocationPermissionLevel = {
  kDenied: 0,
  kApproximate: 1,
  kPrecise: 2,
};

// Interface: GeolocationContext
device.mojom.GeolocationContext = {};

device.mojom.GeolocationContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.GeolocationContextRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GeolocationContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.GeolocationContextPendingReceiver,
      handle);
    this.$ = new device.mojom.GeolocationContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.GeolocationContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindGeolocation(receiver, requesting_url, client_id, has_precise_permission) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.GeolocationContext_BindGeolocation_ParamsSpec,
      null,
      [receiver, requesting_url, client_id, has_precise_permission]);
  }

  onPermissionUpdated(origin, permission_level) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec,
      null,
      [origin, permission_level]);
  }

  setOverride(result) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.GeolocationContext_SetOverride_ParamsSpec,
      null,
      [result]);
  }

  clearOverride() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.GeolocationContext_ClearOverride_ParamsSpec,
      null,
      []);
  }

};

device.mojom.GeolocationContext.getRemote = function() {
  let remote = new device.mojom.GeolocationContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GeolocationContext',
    'context');
  return remote.$;
};

// ParamsSpec for BindGeolocation
device.mojom.GeolocationContext_BindGeolocation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationContext.BindGeolocation_Params',
      packedSize: 40,
      fields: [
        { name: 'requesting_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'client_id', packedOffset: 8, packedBitOffset: 0, type: device.mojom.GeolocationClientIdSpec, nullable: false },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'has_precise_permission', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPermissionUpdated
device.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationContext.OnPermissionUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'permission_level', packedOffset: 8, packedBitOffset: 0, type: device.mojom.GeolocationPermissionLevelSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetOverride
device.mojom.GeolocationContext_SetOverride_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationContext.SetOverride_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GeopositionResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearOverride
device.mojom.GeolocationContext_ClearOverride_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationContext.ClearOverride_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.GeolocationContextPtr = device.mojom.GeolocationContextRemote;
device.mojom.GeolocationContextRequest = device.mojom.GeolocationContextPendingReceiver;

