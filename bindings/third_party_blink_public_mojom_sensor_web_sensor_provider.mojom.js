// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/sensor/web_sensor_provider.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.WebSensorProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSensor(type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.WebSensorProvider_GetSensor_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

blink.mojom.WebSensorProviderReceiver = blink.mojom.WebSensorProviderReceiver;

blink.mojom.WebSensorProviderPtr = blink.mojom.WebSensorProviderRemote;
blink.mojom.WebSensorProviderRequest = blink.mojom.WebSensorProviderPendingReceiver;

