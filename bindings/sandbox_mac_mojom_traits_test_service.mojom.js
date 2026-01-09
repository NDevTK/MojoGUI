// Auto-generated MojoJS binding
// Source: chromium_src/sandbox/mac/mojom/traits_test_service.mojom
// Module: sandbox.mac.mojom

'use strict';

// Module namespace
var sandbox = sandbox || {};
sandbox.mac = sandbox.mac || {};
sandbox.mac.mojom = sandbox.mac.mojom || {};


// Interface: TraitsTestService
sandbox.mac.mojom.TraitsTestServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sandbox.mac.mojom.TraitsTestService';
  }

  echoSeatbeltExtensionToken(in) {
    // Method: EchoSeatbeltExtensionToken
    return new Promise((resolve) => {
      // Call: EchoSeatbeltExtensionToken(in)
      resolve({});
    });
  }

};

sandbox.mac.mojom.TraitsTestServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
