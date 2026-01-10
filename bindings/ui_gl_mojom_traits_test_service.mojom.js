// Auto-generated MojoJS binding
// Source: chromium_src/ui/gl/mojom/traits_test_service.mojom
// Module: gl.mojom

'use strict';

// Module namespace
var gl = gl || {};
gl.mojom = gl.mojom || {};

gl.mojom.TraitsTestService = {};
gl.mojom.TraitsTestService.$interfaceName = 'gl.mojom.TraitsTestService';
gl.mojom.TraitsTestService_EchoGpuPreference_ParamsSpec = { $: {} };
gl.mojom.TraitsTestService_EchoGpuPreference_ResponseParamsSpec = { $: {} };
gl.mojom.TraitsTestService_EchoGLImplementationParts_ParamsSpec = { $: {} };
gl.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParamsSpec = { $: {} };

// Interface: TraitsTestService
mojo.internal.Struct(
    gl.mojom.TraitsTestService_EchoGpuPreference_ParamsSpec, 'gl.mojom.TraitsTestService_EchoGpuPreference_Params', [
      mojo.internal.StructField('g', 0, 0, gl.mojom.GpuPreferenceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gl.mojom.TraitsTestService_EchoGpuPreference_ResponseParamsSpec, 'gl.mojom.TraitsTestService_EchoGpuPreference_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gl.mojom.GpuPreferenceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gl.mojom.TraitsTestService_EchoGLImplementationParts_ParamsSpec, 'gl.mojom.TraitsTestService_EchoGLImplementationParts_Params', [
      mojo.internal.StructField('impl', 0, 0, gl.mojom.GLImplementationPartsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gl.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParamsSpec, 'gl.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, gl.mojom.GLImplementationPartsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

gl.mojom.TraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gl.mojom.TraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'gl.mojom.TraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gl.mojom.TraitsTestServicePendingReceiver,
      handle);
    this.$ = new gl.mojom.TraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gl.mojom.TraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoGpuPreference(g) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gl.mojom.TraitsTestService_EchoGpuPreference_ParamsSpec,
      gl.mojom.TraitsTestService_EchoGpuPreference_ResponseParamsSpec,
      [g],
      false);
  }

  echoGLImplementationParts(impl) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gl.mojom.TraitsTestService_EchoGLImplementationParts_ParamsSpec,
      gl.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParamsSpec,
      [impl],
      false);
  }

};

gl.mojom.TraitsTestService.getRemote = function() {
  let remote = new gl.mojom.TraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gl.mojom.TraitsTestService',
    'context');
  return remote.$;
};

gl.mojom.TraitsTestServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = gl.mojom.TraitsTestService_EchoGpuPreference_ParamsSpec.$.decode(message.payload);
          const result = this.impl.echoGpuPreference(params.g);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gl.mojom.TraitsTestService_EchoGpuPreference_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = gl.mojom.TraitsTestService_EchoGLImplementationParts_ParamsSpec.$.decode(message.payload);
          const result = this.impl.echoGLImplementationParts(params.impl);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gl.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

gl.mojom.TraitsTestServiceReceiver = gl.mojom.TraitsTestServiceReceiver;

gl.mojom.TraitsTestServicePtr = gl.mojom.TraitsTestServiceRemote;
gl.mojom.TraitsTestServiceRequest = gl.mojom.TraitsTestServicePendingReceiver;

