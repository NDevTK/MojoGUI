// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/keymint/public/mojom/cert_store.mojom
// Module: arc.keymint.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.keymint = arc.keymint || {};
arc.keymint.mojom = arc.keymint.mojom || {};


// Struct: ChapsKeyData
arc.keymint.mojom.ChapsKeyData = class {
  constructor(values = {}) {
    this.slot = values.slot !== undefined ? values.slot : "";
  }
};

// Struct: ChromeOsKey
arc.keymint.mojom.ChromeOsKey = class {
  constructor(values = {}) {
    this.key_data = values.key_data !== undefined ? values.key_data : "";
  }
};

// Interface: CertStoreInstance
arc.keymint.mojom.CertStoreInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.keymint.mojom.CertStoreInstance';
  }

};

arc.keymint.mojom.CertStoreInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
