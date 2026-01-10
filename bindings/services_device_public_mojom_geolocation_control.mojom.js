// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_control.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: GeolocationControl
device.mojom.mojom.GeolocationControl = {};

device.mojom.mojom.GeolocationControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.GeolocationControlRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GeolocationControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.GeolocationControlPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.GeolocationControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.GeolocationControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  userDidOptIntoLocationServices() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.GeolocationControl_UserDidOptIntoLocationServices_ParamsSpec,
      null,
      []);
  }

};

device.mojom.mojom.GeolocationControl.getRemote = function() {
  let remote = new device.mojom.mojom.GeolocationControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GeolocationControl',
    'context');
  return remote.$;
};

// ParamsSpec for UserDidOptIntoLocationServices
device.mojom.mojom.GeolocationControl_UserDidOptIntoLocationServices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationControl.UserDidOptIntoLocationServices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.GeolocationControlPtr = device.mojom.mojom.GeolocationControlRemote;
device.mojom.mojom.GeolocationControlRequest = device.mojom.mojom.GeolocationControlPendingReceiver;

