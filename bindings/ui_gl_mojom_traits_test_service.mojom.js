// Auto-generated MojoJS binding
// Source: chromium_src/ui/gl/mojom/traits_test_service.mojom
// Module: gl.mojom

'use strict';

// Module namespace
var gl = gl || {};
gl.mojom = gl.mojom || {};
var ui = ui || {};
var ui = ui || {};


// Interface: TraitsTestService
gl.mojom.mojom.TraitsTestService = {};

gl.mojom.mojom.TraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gl.mojom.mojom.TraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'gl.mojom.TraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gl.mojom.mojom.TraitsTestServicePendingReceiver,
      handle);
    this.$ = new gl.mojom.mojom.TraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gl.mojom.mojom.TraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoGpuPreference(g) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gl.mojom.mojom.TraitsTestService_EchoGpuPreference_ParamsSpec,
      gl.mojom.mojom.TraitsTestService_EchoGpuPreference_ResponseParamsSpec,
      [g]);
  }

  echoGLImplementationParts(impl) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gl.mojom.mojom.TraitsTestService_EchoGLImplementationParts_ParamsSpec,
      gl.mojom.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParamsSpec,
      [impl]);
  }

};

gl.mojom.mojom.TraitsTestService.getRemote = function() {
  let remote = new gl.mojom.mojom.TraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gl.mojom.TraitsTestService',
    'context');
  return remote.$;
};

// ParamsSpec for EchoGpuPreference
gl.mojom.mojom.TraitsTestService_EchoGpuPreference_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gl.mojom.TraitsTestService.EchoGpuPreference_Params',
      packedSize: 16,
      fields: [
        { name: 'g', packedOffset: 0, packedBitOffset: 0, type: gl.mojom.GpuPreferenceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gl.mojom.mojom.TraitsTestService_EchoGpuPreference_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gl.mojom.TraitsTestService.EchoGpuPreference_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pass', packedOffset: 0, packedBitOffset: 0, type: gl.mojom.GpuPreferenceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoGLImplementationParts
gl.mojom.mojom.TraitsTestService_EchoGLImplementationParts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gl.mojom.TraitsTestService.EchoGLImplementationParts_Params',
      packedSize: 16,
      fields: [
        { name: 'impl', packedOffset: 0, packedBitOffset: 0, type: gl.mojom.GLImplementationPartsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gl.mojom.mojom.TraitsTestService_EchoGLImplementationParts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gl.mojom.TraitsTestService.EchoGLImplementationParts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pass', packedOffset: 0, packedBitOffset: 0, type: gl.mojom.GLImplementationPartsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
gl.mojom.mojom.TraitsTestServicePtr = gl.mojom.mojom.TraitsTestServiceRemote;
gl.mojom.mojom.TraitsTestServiceRequest = gl.mojom.mojom.TraitsTestServicePendingReceiver;

