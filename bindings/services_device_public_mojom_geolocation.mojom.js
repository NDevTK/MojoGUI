// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

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

device.mojom.GeolocationReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.Geolocation_SetHighAccuracyHint_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setHighAccuracyHint(params.high_accuracy);
          break;
        }
        case 1: {
          const params = device.mojom.Geolocation_QueryNextPosition_ParamsSpec.$.decode(message.payload);
          const result = this.impl.queryNextPosition();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.Geolocation_QueryNextPosition_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

device.mojom.GeolocationReceiver = device.mojom.GeolocationReceiver;

device.mojom.GeolocationPtr = device.mojom.GeolocationRemote;
device.mojom.GeolocationRequest = device.mojom.GeolocationPendingReceiver;

