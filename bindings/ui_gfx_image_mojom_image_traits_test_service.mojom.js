// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/image/mojom/image_traits_test_service.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.ImageTraitsTestService = {};
gfx.mojom.ImageTraitsTestService.$interfaceName = 'gfx.mojom.ImageTraitsTestService';
gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec = { $: {} };
gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec = { $: {} };
gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec = { $: {} };
gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec = { $: {} };

// Interface: ImageTraitsTestService
mojo.internal.Struct(
    gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec, 'gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_Params', [
      mojo.internal.StructField('in', 0, 0, gfx.mojom.ImageSkiaRepSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec, 'gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, gfx.mojom.ImageSkiaRepSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec, 'gfx.mojom.ImageTraitsTestService_EchoImageSkia_Params', [
      mojo.internal.StructField('in', 0, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec, 'gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

gfx.mojom.ImageTraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gfx.mojom.ImageTraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'gfx.mojom.ImageTraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gfx.mojom.ImageTraitsTestServicePendingReceiver,
      handle);
    this.$ = new gfx.mojom.ImageTraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gfx.mojom.ImageTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoImageSkiaRep(in) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec,
      gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec,
      [in],
      false);
  }

  echoImageSkia(in) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec,
      gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec,
      [in],
      false);
  }

};

gfx.mojom.ImageTraitsTestService.getRemote = function() {
  let remote = new gfx.mojom.ImageTraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gfx.mojom.ImageTraitsTestService',
    'context');
  return remote.$;
};

gfx.mojom.ImageTraitsTestServiceReceiver = class {
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
          const params = gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ParamsSpec.$.decode(message.payload);
          const result = this.impl.echoImageSkiaRep(params.in);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gfx.mojom.ImageTraitsTestService_EchoImageSkiaRep_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = gfx.mojom.ImageTraitsTestService_EchoImageSkia_ParamsSpec.$.decode(message.payload);
          const result = this.impl.echoImageSkia(params.in);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gfx.mojom.ImageTraitsTestService_EchoImageSkia_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

gfx.mojom.ImageTraitsTestServiceReceiver = gfx.mojom.ImageTraitsTestServiceReceiver;

gfx.mojom.ImageTraitsTestServicePtr = gfx.mojom.ImageTraitsTestServiceRemote;
gfx.mojom.ImageTraitsTestServiceRequest = gfx.mojom.ImageTraitsTestServicePendingReceiver;

