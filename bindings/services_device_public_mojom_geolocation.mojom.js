// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var services = services || {};

device.mojom.Geolocation = {};
device.mojom.Geolocation.$interfaceName = 'device.mojom.Geolocation';
device.mojom.Geolocation_SetHighAccuracyHint_ParamsSpec = { $: {} };
device.mojom.Geolocation_QueryNextPosition_ParamsSpec = { $: {} };
device.mojom.Geolocation_QueryNextPosition_ResponseParamsSpec = { $: {} };

// Interface: Geolocation
mojo.internal.Struct(
    device.mojom.Geolocation_SetHighAccuracyHint_ParamsSpec, 'device.mojom.Geolocation_SetHighAccuracyHint_Params', [
      mojo.internal.StructField('high_accuracy', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Geolocation_QueryNextPosition_ParamsSpec, 'device.mojom.Geolocation_QueryNextPosition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Geolocation_QueryNextPosition_ResponseParamsSpec, 'device.mojom.Geolocation_QueryNextPosition_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.GeopositionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.GeolocationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.GeolocationRemote = class {
  static get $interfaceName() {
    return 'device.mojom.Geolocation';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.GeolocationPendingReceiver,
      handle);
    this.$ = new device.mojom.GeolocationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.GeolocationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setHighAccuracyHint(high_accuracy) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.Geolocation_SetHighAccuracyHint_ParamsSpec,
      null,
      [high_accuracy],
      false);
  }

  queryNextPosition() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.Geolocation_QueryNextPosition_ParamsSpec,
      device.mojom.Geolocation_QueryNextPosition_ResponseParamsSpec,
      [],
      false);
  }

};

device.mojom.Geolocation.getRemote = function() {
  let remote = new device.mojom.GeolocationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.Geolocation',
    'context');
  return remote.$;
};

device.mojom.GeolocationPtr = device.mojom.GeolocationRemote;
device.mojom.GeolocationRequest = device.mojom.GeolocationPendingReceiver;

