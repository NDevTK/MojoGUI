// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/geolocation/geolocation_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var device = device || {};

blink.mojom.GeolocationService = {};
blink.mojom.GeolocationService.$interfaceName = 'blink.mojom.GeolocationService';
blink.mojom.GeolocationService_CreateGeolocation_ParamsSpec = { $: {} };
blink.mojom.GeolocationService_CreateGeolocation_ResponseParamsSpec = { $: {} };

// Interface: GeolocationService
mojo.internal.Struct(
    blink.mojom.GeolocationService_CreateGeolocation_ParamsSpec, 'blink.mojom.GeolocationService_CreateGeolocation_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationRemote), null, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.GeolocationService_CreateGeolocation_ResponseParamsSpec, 'blink.mojom.GeolocationService_CreateGeolocation_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [receiver, user_gesture],
      false);
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

blink.mojom.GeolocationServiceReceiver = class {
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
          const params = blink.mojom.GeolocationService_CreateGeolocation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createGeolocation(params.receiver, params.user_gesture);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.GeolocationService_CreateGeolocation_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

blink.mojom.GeolocationServiceReceiver = blink.mojom.GeolocationServiceReceiver;

blink.mojom.GeolocationServicePtr = blink.mojom.GeolocationServiceRemote;
blink.mojom.GeolocationServiceRequest = blink.mojom.GeolocationServicePendingReceiver;

