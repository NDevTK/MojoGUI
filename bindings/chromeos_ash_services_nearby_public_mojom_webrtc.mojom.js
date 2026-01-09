// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/webrtc.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Struct: IceServer
sharing.mojom.IceServer = class {
  constructor(values = {}) {
    this.credential = values.credential !== undefined ? values.credential : "";
  }
};

// Struct: WebRtcDependencies
sharing.mojom.WebRtcDependencies = class {
  constructor(values = {}) {
    this.messenger = values.messenger !== undefined ? values.messenger : null;
  }
};

// Interface: IceConfigFetcher
sharing.mojom.IceConfigFetcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sharing.mojom.IceConfigFetcher';
  }

  getIceServers() {
    // Method: GetIceServers
    return new Promise((resolve) => {
      // Call: GetIceServers()
      resolve({});
    });
  }

};

sharing.mojom.IceConfigFetcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MdnsResponderFactory
sharing.mojom.MdnsResponderFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sharing.mojom.MdnsResponderFactory';
  }

  createMdnsResponder(responder_receiver) {
    // Method: CreateMdnsResponder
    // Call: CreateMdnsResponder(responder_receiver)
  }

};

sharing.mojom.MdnsResponderFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
