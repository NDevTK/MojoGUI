// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/keystore_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: KeystoreType
crosapi.mojom.KeystoreType = {
};

// Enum: KeystoreAlgorithmName
crosapi.mojom.KeystoreAlgorithmName = {
};

// Enum: KeystoreKeyAttributeType
crosapi.mojom.KeystoreKeyAttributeType = {
};

// Enum: KeystoreSigningScheme
crosapi.mojom.KeystoreSigningScheme = {
};

// Enum: KeyTag
crosapi.mojom.KeyTag = {
};

// Struct: KeystoreRsaParams
crosapi.mojom.KeystoreRsaParams = class {
  constructor(values = {}) {
  }
};

// Struct: KeystoreEcdsaParams
crosapi.mojom.KeystoreEcdsaParams = class {
  constructor(values = {}) {
    this.named_curve = values.named_curve !== undefined ? values.named_curve : "";
  }
};

// Struct: GetPublicKeySuccessResult
crosapi.mojom.GetPublicKeySuccessResult = class {
  constructor(values = {}) {
    this.algorithm_properties = values.algorithm_properties !== undefined ? values.algorithm_properties : 0;
  }
};

// Interface: KeystoreService
crosapi.mojom.KeystoreServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.KeystoreService';
  }

};

crosapi.mojom.KeystoreServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
