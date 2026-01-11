// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation.mojom
// Module: device.mojom

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
  setHighAccuracyHint(high_accuracy) {
    return this.$.setHighAccuracyHint(high_accuracy);
  }
  queryNextPosition() {
    return this.$.queryNextPosition();
  }
};

device.mojom.GeolocationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Geolocation', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setHighAccuracyHint(high_accuracy) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.Geolocation_SetHighAccuracyHint_ParamsSpec,
      null,
      [high_accuracy],
      false);
  }

  queryNextPosition() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Geolocation', [
      { explicit: null },
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
             decoder.decodeStructInline(device.mojom.Geolocation_SetHighAccuracyHint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.Geolocation_QueryNextPosition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Geolocation_SetHighAccuracyHint_ParamsSpec.$.structSpec);
          const result = this.impl.setHighAccuracyHint(params.high_accuracy);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.Geolocation_QueryNextPosition_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

device.mojom.GeolocationReceiver = device.mojom.GeolocationReceiver;

device.mojom.GeolocationPtr = device.mojom.GeolocationRemote;
device.mojom.GeolocationRequest = device.mojom.GeolocationPendingReceiver;

