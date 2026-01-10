// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_control.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.GeolocationControl = {};
device.mojom.GeolocationControl.$interfaceName = 'device.mojom.GeolocationControl';
device.mojom.GeolocationControl_UserDidOptIntoLocationServices_ParamsSpec = { $: {} };

// Interface: GeolocationControl
mojo.internal.Struct(
    device.mojom.GeolocationControl_UserDidOptIntoLocationServices_ParamsSpec, 'device.mojom.GeolocationControl_UserDidOptIntoLocationServices_Params', [
    ],
    [[0, 8]]);

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
      device.mojom.GeolocationControl_UserDidOptIntoLocationServices_ParamsSpec,
      null,
      [],
      false);
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
};

device.mojom.GeolocationControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.GeolocationControl_UserDidOptIntoLocationServices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.userDidOptIntoLocationServices();
          break;
        }
      }
    }});
  }
};

device.mojom.GeolocationControlReceiver = device.mojom.GeolocationControlReceiver;

device.mojom.GeolocationControlPtr = device.mojom.GeolocationControlRemote;
device.mojom.GeolocationControlRequest = device.mojom.GeolocationControlPendingReceiver;

