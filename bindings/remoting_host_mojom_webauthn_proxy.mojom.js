// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/webauthn_proxy.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Struct: WebAuthnExceptionDetails
remoting.mojom.WebAuthnExceptionDetails = class {
  constructor(values = {}) {
    this.message = values.message !== undefined ? values.message : "";
  }
};

// Interface: WebAuthnRequestCanceller
remoting.mojom.WebAuthnRequestCancellerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.WebAuthnRequestCanceller';
  }

  cancel() {
    // Method: Cancel
    return new Promise((resolve) => {
      // Call: Cancel()
      resolve({});
    });
  }

};

remoting.mojom.WebAuthnRequestCancellerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebAuthnProxy
remoting.mojom.WebAuthnProxyPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.WebAuthnProxy';
  }

  isUserVerifyingPlatformAuthenticatorAvailable() {
    // Method: IsUserVerifyingPlatformAuthenticatorAvailable
    return new Promise((resolve) => {
      // Call: IsUserVerifyingPlatformAuthenticatorAvailable()
      resolve({});
    });
  }

  create(request_data, request_canceller) {
    // Method: Create
    return new Promise((resolve) => {
      // Call: Create(request_data, request_canceller)
      resolve({});
    });
  }

  get(request_data, request_canceller) {
    // Method: Get
    return new Promise((resolve) => {
      // Call: Get(request_data, request_canceller)
      resolve({});
    });
  }

};

remoting.mojom.WebAuthnProxyRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
