// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_control.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: GeolocationControl
device.mojom.GeolocationControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.GeolocationControlRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GeolocationControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.GeolocationControlPendingReceiver,
      handle);
    this.$ = new device.mojom.GeolocationControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.GeolocationControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  userDidOptIntoLocationServices() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.GeolocationControl_UserDidOptIntoLocationServices_ParamsSpec.$,
      null,
      []);
  }

};

device.mojom.GeolocationControl.getRemote = function() {
  let remote = new device.mojom.GeolocationControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GeolocationControl',
    'context');
  return remote.$;
}};

// ParamsSpec for UserDidOptIntoLocationServices
device.mojom.GeolocationControl_UserDidOptIntoLocationServices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.GeolocationControl.UserDidOptIntoLocationServices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
device.mojom.GeolocationControlPtr = device.mojom.GeolocationControlRemote;
device.mojom.GeolocationControlRequest = device.mojom.GeolocationControlPendingReceiver;

