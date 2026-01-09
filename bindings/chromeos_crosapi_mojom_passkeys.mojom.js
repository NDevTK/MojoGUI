// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/passkeys.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: UserVerificationRequirement
crosapi.mojom.UserVerificationRequirement = {
  kDiscouraged: 0,
  kRequired: 1,
};

// Enum: PasskeyCreationError
crosapi.mojom.PasskeyCreationError = {
};

// Enum: PasskeyAssertionError
crosapi.mojom.PasskeyAssertionError = {
};

// Struct: PasskeyCreationRequest
crosapi.mojom.PasskeyCreationRequest = class {
  constructor(values = {}) {
    this.user_verification = values.user_verification !== undefined ? values.user_verification : 0;
  }
};

// Struct: PasskeyCreationResponse
crosapi.mojom.PasskeyCreationResponse = class {
  constructor(values = {}) {
    this.authenticator_data = values.authenticator_data !== undefined ? values.authenticator_data : 0;
  }
};

// Struct: PasskeyAssertionRequest
crosapi.mojom.PasskeyAssertionRequest = class {
  constructor(values = {}) {
    this.user_verification = values.user_verification !== undefined ? values.user_verification : 0;
  }
};

// Struct: PasskeyAssertionResponse
crosapi.mojom.PasskeyAssertionResponse = class {
  constructor(values = {}) {
    this.signature = values.signature !== undefined ? values.signature : 0;
    this.authenticator_data = values.authenticator_data !== undefined ? values.authenticator_data : 0;
  }
};

// Interface: PasskeyAuthenticator
crosapi.mojom.PasskeyAuthenticatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.PasskeyAuthenticator';
  }

  1(account, request) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(account, request)
      resolve({});
    });
  }

  0(account, request) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(account, request)
      resolve({});
    });
  }

};

crosapi.mojom.PasskeyAuthenticatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
