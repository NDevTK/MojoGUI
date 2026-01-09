// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/geolocation/geolocation_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: GeolocationService
blink.mojom.GeolocationService = {};

blink.mojom.GeolocationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.GeolocationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.GeolocationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.GeolocationServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.GeolocationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.GeolocationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createGeolocation(receiver, user_gesture) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.GeolocationService_CreateGeolocation_ParamsSpec,
      blink.mojom.GeolocationService_CreateGeolocation_ResponseParamsSpec,
      [receiver, user_gesture]);
  }

};

blink.mojom.GeolocationService.getRemote = function() {
  let remote = new blink.mojom.GeolocationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.GeolocationService',
    'context');
  return remote.$;
};

// ParamsSpec for CreateGeolocation
blink.mojom.GeolocationService_CreateGeolocation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GeolocationService.CreateGeolocation_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'user_gesture', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.GeolocationService_CreateGeolocation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GeolocationService.CreateGeolocation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.GeolocationServicePtr = blink.mojom.GeolocationServiceRemote;
blink.mojom.GeolocationServiceRequest = blink.mojom.GeolocationServicePendingReceiver;

