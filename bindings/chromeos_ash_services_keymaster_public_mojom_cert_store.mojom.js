// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/keymaster/public/mojom/cert_store.mojom
// Module: arc.keymaster.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.keymaster = arc.keymaster || {};
arc.keymaster.mojom = arc.keymaster.mojom || {};


// Struct: ChapsKeyData
arc.keymaster.mojom.ChapsKeyData = class {
  constructor(values = {}) {
    this.slot = values.slot !== undefined ? values.slot : "";
  }
};

// Struct: ChromeOsKey
arc.keymaster.mojom.ChromeOsKey = class {
  constructor(values = {}) {
    this.key_data = values.key_data !== undefined ? values.key_data : "";
  }
};

// Interface: CertStoreInstance
arc.keymaster.mojom.CertStoreInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.keymaster.mojom.CertStoreInstance';
  }

  1(keys) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(keys)
      resolve({});
    });
  }

};

arc.keymaster.mojom.CertStoreInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
