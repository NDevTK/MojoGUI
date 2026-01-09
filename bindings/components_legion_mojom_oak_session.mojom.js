// Auto-generated MojoJS binding
// Source: chromium_src/components/legion/mojom/oak_session.mojom
// Module: legion.mojom

'use strict';

// Module namespace
var legion = legion || {};
legion.mojom = legion.mojom || {};


// Struct: HandshakeMessage
legion.mojom.HandshakeMessage = class {
  constructor(values = {}) {
    this.ciphertext = values.ciphertext !== undefined ? values.ciphertext : 0;
  }
};

// Interface: OakSession
legion.mojom.OakSessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'legion.mojom.OakSession';
  }

  initiateHandshake() {
    // Method: InitiateHandshake
    return new Promise((resolve) => {
      // Call: InitiateHandshake()
      resolve({});
    });
  }

  completeHandshake(response) {
    // Method: CompleteHandshake
    return new Promise((resolve) => {
      // Call: CompleteHandshake(response)
      resolve({});
    });
  }

  encrypt(input) {
    // Method: Encrypt
    return new Promise((resolve) => {
      // Call: Encrypt(input)
      resolve({});
    });
  }

  decrypt(input) {
    // Method: Decrypt
    return new Promise((resolve) => {
      // Call: Decrypt(input)
      resolve({});
    });
  }

};

legion.mojom.OakSessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
