// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_context.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var url = url || {};
var url = url || {};

device.mojom.GeolocationPermissionLevelSpec = { $: mojo.internal.Enum() };
device.mojom.GeolocationContext = {};
device.mojom.GeolocationContext.$interfaceName = 'device.mojom.GeolocationContext';
device.mojom.GeolocationContext_BindGeolocation_ParamsSpec = { $: {} };
device.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec = { $: {} };
device.mojom.GeolocationContext_SetOverride_ParamsSpec = { $: {} };
device.mojom.GeolocationContext_ClearOverride_ParamsSpec = { $: {} };

// Enum: GeolocationPermissionLevel
device.mojom.GeolocationPermissionLevel = {
  kDenied: 0,
  kApproximate: 1,
  kPrecise: 2,
};

// Interface: GeolocationContext
mojo.internal.Struct(
    device.mojom.GeolocationContext_BindGeolocation_ParamsSpec, 'device.mojom.GeolocationContext_BindGeolocation_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationRemote), null, false, 0, undefined),
      mojo.internal.StructField('requesting_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_id', 16, 0, device.mojom.GeolocationClientIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_precise_permission', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    device.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec, 'device.mojom.GeolocationContext_OnPermissionUpdated_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('permission_level', 8, 0, device.mojom.GeolocationPermissionLevelSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.GeolocationContext_SetOverride_ParamsSpec, 'device.mojom.GeolocationContext_SetOverride_Params', [
      mojo.internal.StructField('result', 0, 0, device.mojom.GeopositionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.GeolocationContext_ClearOverride_ParamsSpec, 'device.mojom.GeolocationContext_ClearOverride_Params', [
    ],
    [[0, 8]]);

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
      [receiver, requesting_url, client_id, has_precise_permission],
      false);
  }

  onPermissionUpdated(origin, permission_level) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec,
      null,
      [origin, permission_level],
      false);
  }

  setOverride(result) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.GeolocationContext_SetOverride_ParamsSpec,
      null,
      [result],
      false);
  }

  clearOverride() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.GeolocationContext_ClearOverride_ParamsSpec,
      null,
      [],
      false);
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

device.mojom.GeolocationContextPtr = device.mojom.GeolocationContextRemote;
device.mojom.GeolocationContextRequest = device.mojom.GeolocationContextPendingReceiver;

