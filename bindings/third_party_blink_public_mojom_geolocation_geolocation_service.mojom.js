// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/geolocation/geolocation_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Interface: GeolocationService
blink.mojom.mojom.GeolocationService = {};

blink.mojom.mojom.GeolocationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.GeolocationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.GeolocationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.GeolocationServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.GeolocationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.GeolocationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createGeolocation(receiver, user_gesture) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.GeolocationService_CreateGeolocation_ParamsSpec,
      blink.mojom.mojom.GeolocationService_CreateGeolocation_ResponseParamsSpec,
      [receiver, user_gesture]);
  }

};

blink.mojom.mojom.GeolocationService.getRemote = function() {
  let remote = new blink.mojom.mojom.GeolocationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.GeolocationService',
    'context');
  return remote.$;
};

// ParamsSpec for CreateGeolocation
blink.mojom.mojom.GeolocationService_CreateGeolocation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GeolocationService.CreateGeolocation_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(device.mojom.GeolocationRemote), nullable: false, minVersion: 0 },
        { name: 'user_gesture', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.GeolocationService_CreateGeolocation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GeolocationService.CreateGeolocation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PermissionStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.GeolocationServicePtr = blink.mojom.mojom.GeolocationServiceRemote;
blink.mojom.mojom.GeolocationServiceRequest = blink.mojom.mojom.GeolocationServicePendingReceiver;

