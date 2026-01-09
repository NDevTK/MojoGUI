// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/in_session_auth/mojom/in_session_auth.mojom
// Module: chromeos.auth.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.auth = chromeos.auth || {};
chromeos.auth.mojom = chromeos.auth.mojom || {};


// Enum: Reason
chromeos.auth.mojom.Reason = {
  kAccessAuthenticationSettings: 0,
  kAccessMultideviceSettings: 1,
};

// Struct: RequestTokenReply
chromeos.auth.mojom.RequestTokenReply = class {
  constructor(values = {}) {
    this.timeout@1 = values.timeout@1 !== undefined ? values.timeout@1 : "";
  }
};

// Interface: InSessionAuth
chromeos.auth.mojom.InSessionAuthPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.auth.mojom.InSessionAuth';
  }

  0(reason, prompt) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(reason, prompt)
      resolve({});
    });
  }

  1(reason, token) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(reason, token)
      resolve({});
    });
  }

  2(token) {
    // Method: 2
    // Call: 2(token)
  }

  usually(necessarily) {
    // Method: usually
    // Call: usually(necessarily)
  }

  3(rp_id, window_id) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(rp_id, window_id)
      resolve({});
    });
  }

};

chromeos.auth.mojom.InSessionAuthRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
