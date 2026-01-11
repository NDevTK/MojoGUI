// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/sensor/web_sensor_provider.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var device = device || {};

blink.mojom.WebSensorProvider = {};
blink.mojom.WebSensorProvider.$interfaceName = 'blink.mojom.WebSensorProvider';
blink.mojom.WebSensorProvider_GetSensor_ParamsSpec = { $: {} };
blink.mojom.WebSensorProvider_GetSensor_ResponseParamsSpec = { $: {} };

// Interface: WebSensorProvider
mojo.internal.Struct(
    blink.mojom.WebSensorProvider_GetSensor_ParamsSpec, 'blink.mojom.WebSensorProvider_GetSensor_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.SensorTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebSensorProvider_GetSensor_ResponseParamsSpec, 'blink.mojom.WebSensorProvider_GetSensor_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SensorCreationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('init_params', 8, 0, device.mojom.SensorInitParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.WebSensorProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebSensorProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebSensorProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebSensorProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebSensorProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getSensor(type) {
    return this.$.getSensor(type);
  }
};

blink.mojom.WebSensorProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebSensorProvider', [
      { explicit: null },
    ]);
  }

  getSensor(type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WebSensorProvider_GetSensor_ParamsSpec,
      blink.mojom.WebSensorProvider_GetSensor_ResponseParamsSpec,
      [type],
      false);
  }

};

blink.mojom.WebSensorProvider.getRemote = function() {
  let remote = new blink.mojom.WebSensorProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebSensorProvider',
    'context');
  return remote.$;
};

blink.mojom.WebSensorProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebSensorProvider', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebSensorProvider_GetSensor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebSensorProvider_GetSensor_ParamsSpec.$.structSpec);
          const result = this.impl.getSensor(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebSensorProvider_GetSensor_ResponseParamsSpec);
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

blink.mojom.WebSensorProviderReceiver = blink.mojom.WebSensorProviderReceiver;

blink.mojom.WebSensorProviderPtr = blink.mojom.WebSensorProviderRemote;
blink.mojom.WebSensorProviderRequest = blink.mojom.WebSensorProviderPendingReceiver;

