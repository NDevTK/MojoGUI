// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_context.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var url = url || {};
var url = url || {};


// Enum: GeolocationPermissionLevel
device.mojom.mojom.GeolocationPermissionLevel = {
  kDenied: 0,
  kApproximate: 1,
  kPrecise: 2,
};
device.mojom.mojom.GeolocationPermissionLevelSpec = { $: mojo.internal.Enum() };

// Interface: GeolocationContext
device.mojom.mojom.GeolocationContext = {};

device.mojom.mojom.GeolocationContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.GeolocationContextRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GeolocationContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.GeolocationContextPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.GeolocationContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.GeolocationContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindGeolocation(receiver, requesting_url, client_id, has_precise_permission) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.GeolocationContext_BindGeolocation_ParamsSpec,
      null,
      [receiver, requesting_url, client_id, has_precise_permission]);
  }

  onPermissionUpdated(origin, permission_level) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec,
      null,
      [origin, permission_level]);
  }

  setOverride(result) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.GeolocationContext_SetOverride_ParamsSpec,
      null,
      [result]);
  }

  clearOverride() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.mojom.GeolocationContext_ClearOverride_ParamsSpec,
      null,
      []);
  }

};

device.mojom.mojom.GeolocationContext.getRemote = function() {
  let remote = new device.mojom.mojom.GeolocationContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GeolocationContext',
    'context');
  return remote.$;
};

// ParamsSpec for BindGeolocation
device.mojom.mojom.GeolocationContext_BindGeolocation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationContext.BindGeolocation_Params',
      packedSize: 32,
      fields: [
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'requesting_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'client_id', packedOffset: 12, packedBitOffset: 0, type: device.mojom.GeolocationClientIdSpec, nullable: false, minVersion: 0 },
        { name: 'has_precise_permission', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnPermissionUpdated
device.mojom.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationContext.OnPermissionUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'permission_level', packedOffset: 8, packedBitOffset: 0, type: device.mojom.GeolocationPermissionLevelSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetOverride
device.mojom.mojom.GeolocationContext_SetOverride_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationContext.SetOverride_Params',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.GeopositionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearOverride
device.mojom.mojom.GeolocationContext_ClearOverride_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationContext.ClearOverride_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.GeolocationContextPtr = device.mojom.mojom.GeolocationContextRemote;
device.mojom.mojom.GeolocationContextRequest = device.mojom.mojom.GeolocationContextPendingReceiver;

