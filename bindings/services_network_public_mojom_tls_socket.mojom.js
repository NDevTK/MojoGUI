// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/tls_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: TLSClientSocketOptions
network.mojom.TLSClientSocketOptions = class {
  constructor(values = {}) {
    this.kTLS13 = values.kTLS13 !== undefined ? values.kTLS13 : null;
    this.false = values.false !== undefined ? values.false : false;
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Interface: TLSClientSocket
network.mojom.TLSClientSocketPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.TLSClientSocket';
  }

};

network.mojom.TLSClientSocketRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
