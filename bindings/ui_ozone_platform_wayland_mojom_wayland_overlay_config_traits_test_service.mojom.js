// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_overlay_config_traits_test_service.mojom
// Module: wl.mojom

'use strict';

// Module namespace
var wl = wl || {};
wl.mojom = wl.mojom || {};

wl.mojom.ConfigTraitsTestService = {};
wl.mojom.ConfigTraitsTestService.$interfaceName = 'wl.mojom.ConfigTraitsTestService';
wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec = { $: {} };
wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec = { $: {} };

// Interface: ConfigTraitsTestService
mojo.internal.Struct(
    wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec, 'wl.mojom.ConfigTraitsTestService_EchoTransform_Params', [
      mojo.internal.StructField('t', 0, 0, wl.mojom.TransformUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec, 'wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, wl.mojom.TransformUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

wl.mojom.ConfigTraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

wl.mojom.ConfigTraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'wl.mojom.ConfigTraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      wl.mojom.ConfigTraitsTestServicePendingReceiver,
      handle);
    this.$ = new wl.mojom.ConfigTraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

wl.mojom.ConfigTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoTransform(t) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec,
      wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec,
      [t],
      false);
  }

};

wl.mojom.ConfigTraitsTestService.getRemote = function() {
  let remote = new wl.mojom.ConfigTraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'wl.mojom.ConfigTraitsTestService',
    'context');
  return remote.$;
};

wl.mojom.ConfigTraitsTestServiceReceiver = class {
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
          const params = wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec.$.decode(message.payload);
          const result = this.impl.echoTransform(params.t);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

wl.mojom.ConfigTraitsTestServiceReceiver = wl.mojom.ConfigTraitsTestServiceReceiver;

wl.mojom.ConfigTraitsTestServicePtr = wl.mojom.ConfigTraitsTestServiceRemote;
wl.mojom.ConfigTraitsTestServiceRequest = wl.mojom.ConfigTraitsTestServicePendingReceiver;

