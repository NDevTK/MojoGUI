// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_control.mojom
// Module: device.mojom

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
  userDidOptIntoLocationServices() {
    return this.$.userDidOptIntoLocationServices();
  }
};

device.mojom.GeolocationControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GeolocationControl', [
      { explicit: null },
    ]);
  }

  userDidOptIntoLocationServices() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GeolocationControl', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.GeolocationControl_UserDidOptIntoLocationServices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.GeolocationControl_UserDidOptIntoLocationServices_ParamsSpec.$.structSpec);
          const result = this.impl.userDidOptIntoLocationServices();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.GeolocationControlReceiver = device.mojom.GeolocationControlReceiver;

device.mojom.GeolocationControlPtr = device.mojom.GeolocationControlRemote;
device.mojom.GeolocationControlRequest = device.mojom.GeolocationControlPendingReceiver;

