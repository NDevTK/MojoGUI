// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/guest_os_sk_forwarder.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Interface: GuestOsSkForwarderFactory
crosapi.mojom.GuestOsSkForwarderFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.GuestOsSkForwarderFactory';
  }

  0(remote) {
    // Method: 0
    // Call: 0(remote)
  }

};

crosapi.mojom.GuestOsSkForwarderFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GuestOsSkForwarder
crosapi.mojom.GuestOsSkForwarderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.GuestOsSkForwarder';
  }

  0(message) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(message)
      resolve({});
    });
  }

};

crosapi.mojom.GuestOsSkForwarderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
