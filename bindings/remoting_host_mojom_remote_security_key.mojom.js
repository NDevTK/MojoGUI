// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_security_key.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Interface: SecurityKeyForwarder
remoting.mojom.SecurityKeyForwarderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.SecurityKeyForwarder';
  }

  onSecurityKeyRequest(request_data) {
    // Method: OnSecurityKeyRequest
    return new Promise((resolve) => {
      // Call: OnSecurityKeyRequest(request_data)
      resolve({});
    });
  }

};

remoting.mojom.SecurityKeyForwarderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
