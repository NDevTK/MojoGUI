// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/sensor/web_sensor_provider.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WebSensorProvider
blink.mojom.WebSensorProvider = {};

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
      [type]);
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

// ParamsSpec for GetSensor
blink.mojom.WebSensorProvider_GetSensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebSensorProvider.GetSensor_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebSensorProvider_GetSensor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebSensorProvider.GetSensor_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'init_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebSensorProviderPtr = blink.mojom.WebSensorProviderRemote;
blink.mojom.WebSensorProviderRequest = blink.mojom.WebSensorProviderPendingReceiver;

