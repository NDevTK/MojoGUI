// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/keystore_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: KeystoreType
crosapi.mojom.KeystoreType = {
  kUser: 0,
  kDevice: 1,
};

// Enum: KeystoreAlgorithmName
crosapi.mojom.KeystoreAlgorithmName = {
  kRsassaPkcs115: 0,
  kRsaOaep: 1,
  kEcdsa: 2,
};

// Enum: KeystoreKeyAttributeType
crosapi.mojom.KeystoreKeyAttributeType = {
  kPlatformKeysTag: 0,
};

// Enum: KeystoreSigningScheme
crosapi.mojom.KeystoreSigningScheme = {
  kRsassaPkcs1V15None: 0,
  kRsassaPkcs1V15Sha256: 1,
  kRsassaPkcs1V15Sha384: 2,
  kRsassaPkcs1V15Sha512: 3,
  kEcdsaSha1: 4,
  kEcdsaSha256: 5,
  kEcdsaSha384: 6,
  kEcdsaSha512: 7,
};

// Enum: KeyTag
crosapi.mojom.KeyTag = {
  kNoTags: 0,
  kCorporate: 1,
};

// Struct: KeystoreRsaParams
crosapi.mojom.KeystoreRsaParams = class {
  constructor(values = {}) {
    this.public_exponent@1 = values.public_exponent@1 !== undefined ? values.public_exponent@1 : 0;
    this.sw_backed@2 = values.sw_backed@2 !== undefined ? values.sw_backed@2 : false;
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
