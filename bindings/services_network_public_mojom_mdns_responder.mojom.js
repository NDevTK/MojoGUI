// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/mdns_responder.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: MdnsResponder
network.mojom.MdnsResponderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.MdnsResponder';
  }

  seconds(6762, 10) {
    // Method: seconds
    // Call: seconds(6762, 10)
  }

  createNameForAddress(address) {
    // Method: CreateNameForAddress
    return new Promise((resolve) => {
      // Call: CreateNameForAddress(address)
      resolve({});
    });
  }

  removeNameForAddress(address) {
    // Method: RemoveNameForAddress
    return new Promise((resolve) => {
      // Call: RemoveNameForAddress(address)
      resolve({});
    });
  }

};

network.mojom.MdnsResponderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
