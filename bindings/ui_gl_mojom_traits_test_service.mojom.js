// Auto-generated MojoJS binding
// Source: chromium_src/ui/gl/mojom/traits_test_service.mojom
// Module: gl.mojom

'use strict';

// Module namespace
var gl = gl || {};
gl.mojom = gl.mojom || {};


// Interface: TraitsTestService
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
      gl.mojom.TraitsTestService_EchoGpuPreference_ParamsSpec.$,
      gl.mojom.TraitsTestService_EchoGpuPreference_ResponseParamsSpec.$,
      [g]);
  }

  echoGLImplementationParts(impl) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gl.mojom.TraitsTestService_EchoGLImplementationParts_ParamsSpec.$,
      gl.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParamsSpec.$,
      [impl]);
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
}};

// ParamsSpec for EchoGpuPreference
gl.mojom.TraitsTestService_EchoGpuPreference_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gl.mojom.TraitsTestService.EchoGpuPreference_Params',
      packedSize: 16,
      fields: [
        { name: 'g', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

gl.mojom.TraitsTestService_EchoGpuPreference_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gl.mojom.TraitsTestService.EchoGpuPreference_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pass', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for EchoGLImplementationParts
gl.mojom.TraitsTestService_EchoGLImplementationParts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gl.mojom.TraitsTestService.EchoGLImplementationParts_Params',
      packedSize: 16,
      fields: [
        { name: 'impl', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

gl.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gl.mojom.TraitsTestService.EchoGLImplementationParts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pass', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
gl.mojom.TraitsTestServicePtr = gl.mojom.TraitsTestServiceRemote;
gl.mojom.TraitsTestServiceRequest = gl.mojom.TraitsTestServicePendingReceiver;

