// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webid/digital_identity_request.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: RequestDigitalIdentityStatus
blink.mojom.RequestDigitalIdentityStatus = {
};

// Struct: DigitalCredentialGetRequest
blink.mojom.DigitalCredentialGetRequest = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : "";
  }
};

// Struct: DigitalCredentialCreateRequest
blink.mojom.DigitalCredentialCreateRequest = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : "";
  }
};

// Interface: DigitalIdentityRequest
blink.mojom.DigitalIdentityRequestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DigitalIdentityRequest';
  }

  get(digital_credential_requests) {
    // Method: Get
    return new Promise((resolve) => {
      // Call: Get(digital_credential_requests)
      resolve({});
    });
  }

  create(digital_credential_requests) {
    // Method: Create
    return new Promise((resolve) => {
      // Call: Create(digital_credential_requests)
      resolve({});
    });
  }

  abort() {
    // Method: Abort
    // Call: Abort()
  }

};

blink.mojom.DigitalIdentityRequestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
