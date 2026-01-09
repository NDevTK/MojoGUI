// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/cpp/network_traits_test_service.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: TraitsTestService
network.mojom.TraitsTestServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.TraitsTestService';
  }

  echoHttpRequestHeaders(headers) {
    // Method: EchoHttpRequestHeaders
    return new Promise((resolve) => {
      // Call: EchoHttpRequestHeaders(headers)
      resolve({});
    });
  }

};

network.mojom.TraitsTestServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
