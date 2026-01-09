// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/keymaster.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: KeyPurpose
arc.mojom.KeyPurpose = {
  ENCRYPT: 0,
  EC: 1,
  EC: 2,
  EC: 3,
  EC: 4,
};

// Enum: KeyFormat
arc.mojom.KeyFormat = {
  X509: 0,
};

// Struct: KeyParameter
arc.mojom.KeyParameter = class {
  constructor(values = {}) {
    this.param = values.param !== undefined ? values.param : 0;
  }
};

// Struct: KeyCharacteristics
arc.mojom.KeyCharacteristics = class {
  constructor(values = {}) {
    this.tee_enforced = values.tee_enforced !== undefined ? values.tee_enforced : [];
  }
};

// Struct: GetKeyCharacteristicsRequest
arc.mojom.GetKeyCharacteristicsRequest = class {
  constructor(values = {}) {
    this.app_data = values.app_data !== undefined ? values.app_data : 0;
  }
};

// Struct: GetKeyCharacteristicsResult
arc.mojom.GetKeyCharacteristicsResult = class {
  constructor(values = {}) {
    this.error = values.error !== undefined ? values.error : 0;
  }
};

// Struct: GenerateKeyResult
arc.mojom.GenerateKeyResult = class {
  constructor(values = {}) {
    this.error = values.error !== undefined ? values.error : 0;
  }
};

// Struct: ImportKeyRequest
arc.mojom.ImportKeyRequest = class {
  constructor(values = {}) {
    this.key_data = values.key_data !== undefined ? values.key_data : 0;
  }
};

// Struct: ImportKeyResult
arc.mojom.ImportKeyResult = class {
  constructor(values = {}) {
    this.error = values.error !== undefined ? values.error : 0;
  }
};

// Struct: ExportKeyRequest
arc.mojom.ExportKeyRequest = class {
  constructor(values = {}) {
    this.app_data = values.app_data !== undefined ? values.app_data : 0;
  }
};

// Struct: ExportKeyResult
arc.mojom.ExportKeyResult = class {
  constructor(values = {}) {
    this.error = values.error !== undefined ? values.error : 0;
  }
};

// Struct: AttestKeyRequest
arc.mojom.AttestKeyRequest = class {
  constructor(values = {}) {
    this.attest_params = values.attest_params !== undefined ? values.attest_params : 0;
  }
};

// Struct: AttestKeyResult
arc.mojom.AttestKeyResult = class {
  constructor(values = {}) {
    this.error = values.error !== undefined ? values.error : 0;
  }
};

// Struct: UpgradeKeyRequest
arc.mojom.UpgradeKeyRequest = class {
  constructor(values = {}) {
    this.upgrade_params = values.upgrade_params !== undefined ? values.upgrade_params : 0;
  }
};

// Struct: UpgradeKeyResult
arc.mojom.UpgradeKeyResult = class {
  constructor(values = {}) {
    this.error = values.error !== undefined ? values.error : 0;
  }
};

// Struct: BeginRequest
arc.mojom.BeginRequest = class {
  constructor(values = {}) {
    this.in_params = values.in_params !== undefined ? values.in_params : 0;
  }
};

// Struct: BeginResult
arc.mojom.BeginResult = class {
  constructor(values = {}) {
    this.error = values.error !== undefined ? values.error : 0;
  }
};

// Struct: UpdateRequest
arc.mojom.UpdateRequest = class {
  constructor(values = {}) {
    this.input = values.input !== undefined ? values.input : 0;
  }
};

// Struct: UpdateResult
arc.mojom.UpdateResult = class {
  constructor(values = {}) {
    this.error = values.error !== undefined ? values.error : 0;
  }
};

// Struct: FinishRequest
arc.mojom.FinishRequest = class {
  constructor(values = {}) {
    this.signature = values.signature !== undefined ? values.signature : 0;
  }
};

// Struct: FinishResult
arc.mojom.FinishResult = class {
  constructor(values = {}) {
    this.error = values.error !== undefined ? values.error : 0;
  }
};

// Interface: KeymasterHost
arc.mojom.KeymasterHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.KeymasterHost';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

};

arc.mojom.KeymasterHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: KeymasterInstance
arc.mojom.KeymasterInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.KeymasterInstance';
  }

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

};

arc.mojom.KeymasterInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: KeymasterServer
arc.mojom.KeymasterServerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.KeymasterServer';
  }

  0(os_version, os_patchlevel) {
    // Method: 0
    // Call: 0(os_version, os_patchlevel)
  }

  1(data) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(data)
      resolve({});
    });
  }

  2(request) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(request)
      resolve({});
    });
  }

  3(key_params) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(key_params)
      resolve({});
    });
  }

  4(request) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(request)
      resolve({});
    });
  }

  5(request) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(request)
      resolve({});
    });
  }

  6(request) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(request)
      resolve({});
    });
  }

  7(request) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(request)
      resolve({});
    });
  }

  8(key_blob) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(key_blob)
      resolve({});
    });
  }

  9() {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9()
      resolve({});
    });
  }

  10(request) {
    // Method: 10
    return new Promise((resolve) => {
      // Call: 10(request)
      resolve({});
    });
  }

  11(request) {
    // Method: 11
    return new Promise((resolve) => {
      // Call: 11(request)
      resolve({});
    });
  }

  12(request) {
    // Method: 12
    return new Promise((resolve) => {
      // Call: 12(request)
      resolve({});
    });
  }

  13(op_handle) {
    // Method: 13
    return new Promise((resolve) => {
      // Call: 13(op_handle)
      resolve({});
    });
  }

};

arc.mojom.KeymasterServerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
