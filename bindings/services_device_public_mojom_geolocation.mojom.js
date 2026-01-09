// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: Geolocation
device.mojom.Geolocation = {};

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
      device.mojom.Geolocation_SetHighAccuracyHint_ParamsSpec.$,
      null,
      [high_accuracy]);
  }

  queryNextPosition() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.Geolocation_QueryNextPosition_ParamsSpec.$,
      device.mojom.Geolocation_QueryNextPosition_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for SetHighAccuracyHint
device.mojom.Geolocation_SetHighAccuracyHint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Geolocation.SetHighAccuracyHint_Params',
      packedSize: 16,
      fields: [
        { name: 'high_accuracy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for QueryNextPosition
device.mojom.Geolocation_QueryNextPosition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Geolocation.QueryNextPosition_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.Geolocation_QueryNextPosition_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Geolocation.QueryNextPosition_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.GeolocationPtr = device.mojom.GeolocationRemote;
device.mojom.GeolocationRequest = device.mojom.GeolocationPendingReceiver;

