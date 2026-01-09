// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/chromoting_host_services.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Interface: ChromotingHostServices
remoting.mojom.ChromotingHostServicesPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.ChromotingHostServices';
  }

  bindSessionServices(receiver) {
    // Method: BindSessionServices
    // Call: BindSessionServices(receiver)
  }

};

remoting.mojom.ChromotingHostServicesRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ChromotingSessionServices
remoting.mojom.ChromotingSessionServicesPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.ChromotingSessionServices';
  }

  bindWebAuthnProxy(receiver) {
    // Method: BindWebAuthnProxy
    // Call: BindWebAuthnProxy(receiver)
  }

  bindRemoteUrlOpener(receiver) {
    // Method: BindRemoteUrlOpener
    // Call: BindRemoteUrlOpener(receiver)
  }

  bindSecurityKeyForwarder(receiver) {
    // Method: BindSecurityKeyForwarder
    // Call: BindSecurityKeyForwarder(receiver)
  }

};

remoting.mojom.ChromotingSessionServicesRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
