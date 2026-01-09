// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/credentialmanagement/credential_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: CredentialType
blink.mojom.CredentialType = {
  EMPTY: 0,
  PASSWORD: 1,
  FEDERATED: 2,
};

// Enum: CredentialMediationRequirement
blink.mojom.CredentialMediationRequirement = {
  kSilent: 0,
  kOptional: 1,
  kRequired: 2,
  kConditional: 3,
};

// Enum: CredentialManagerError
blink.mojom.CredentialManagerError = {
  SUCCESS: 0,
  PENDING_REQUEST: 1,
  PASSWORD_STORE_UNAVAILABLE: 2,
  UNKNOWN: 3,
};

// Struct: CredentialInfo
blink.mojom.CredentialInfo = class {
  constructor(values = {}) {
    this.federation = values.federation !== undefined ? values.federation : "";
  }
};

// Interface: CredentialManager
blink.mojom.CredentialManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.CredentialManager';
  }

  store() {
    // Method: store
    // Call: store()
  }

  store(credential) {
    // Method: Store
    // Call: Store(credential)
  }

  preventSilentAccess() {
    // Method: preventSilentAccess
    // Call: preventSilentAccess()
  }

  preventSilentAccess() {
    // Method: PreventSilentAccess
    // Call: PreventSilentAccess()
  }

  get() {
    // Method: get
    // Call: get()
  }

  get(mediation, include_passwords, federations) {
    // Method: Get
    return new Promise((resolve) => {
      // Call: Get(mediation, include_passwords, federations)
      resolve({});
    });
  }

};

blink.mojom.CredentialManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
