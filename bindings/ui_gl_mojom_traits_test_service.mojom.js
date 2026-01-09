// Auto-generated MojoJS binding
// Source: chromium_src/ui/gl/mojom/traits_test_service.mojom
// Module: gl.mojom

'use strict';

// Module namespace
var gl = gl || {};
gl.mojom = gl.mojom || {};


// Interface: TraitsTestService
gl.mojom.TraitsTestServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'gl.mojom.TraitsTestService';
  }

  echoGpuPreference(g) {
    // Method: EchoGpuPreference
    return new Promise((resolve) => {
      // Call: EchoGpuPreference(g)
      resolve({});
    });
  }

  echoGLImplementationParts(impl) {
    // Method: EchoGLImplementationParts
    return new Promise((resolve) => {
      // Call: EchoGLImplementationParts(impl)
      resolve({});
    });
  }

};

gl.mojom.TraitsTestServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
