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

  keys(user, device) {
    // Method: keys
    // Call: keys(user, device)
  }

  importCertificate() {
    // Method: ImportCertificate
    // Call: ImportCertificate()
  }

  20(type, challenge, migrate, algorithm) {
    // Method: 20
    return new Promise((resolve) => {
      // Call: 20(type, challenge, migrate, algorithm)
      resolve({});
    });
  }

  16() {
    // Method: 16
    return new Promise((resolve) => {
      // Call: 16()
      resolve({});
    });
  }

  11(certificate_authorities) {
    // Method: 11
    return new Promise((resolve) => {
      // Call: 11(certificate_authorities)
      resolve({});
    });
  }

  17(keystore) {
    // Method: 17
    return new Promise((resolve) => {
      // Call: 17(keystore)
      resolve({});
    });
  }

  generateKey() {
    // Method: GenerateKey
    // Call: GenerateKey()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  18(keystore, certificate) {
    // Method: 18
    return new Promise((resolve) => {
      // Call: 18(keystore, certificate)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  19(keystore, certificate) {
    // Method: 19
    return new Promise((resolve) => {
      // Call: 19(keystore, certificate)
      resolve({});
    });
  }

  15(certificate, algorithm_name) {
    // Method: 15
    return new Promise((resolve) => {
      // Call: 15(certificate, algorithm_name)
      resolve({});
    });
  }

  8(keystore, algorithm) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(keystore, algorithm)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  10(keystore, public_key) {
    // Method: 10
    return new Promise((resolve) => {
      // Call: 10(keystore, public_key)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  9(is_keystore_provided, keystore, public_key, scheme, data) {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9(is_keystore_provided, keystore, public_key, scheme, data)
      resolve({});
    });
  }

  12(public_key) {
    // Method: 12
    return new Promise((resolve) => {
      // Call: 12(public_key)
      resolve({});
    });
  }

  13(public_key, tags) {
    // Method: 13
    return new Promise((resolve) => {
      // Call: 13(public_key, tags)
      resolve({});
    });
  }

  14(public_key) {
    // Method: 14
    return new Promise((resolve) => {
      // Call: 14(public_key)
      resolve({});
    });
  }

  21(keystore, public_key, attribute_type, attribute_value) {
    // Method: 21
    return new Promise((resolve) => {
      // Call: 21(keystore, public_key, attribute_type, attribute_value)
      resolve({});
    });
  }

  3(keystore, algorithm, extension_id) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(keystore, algorithm, extension_id)
      resolve({});
    });
  }

  7(keystore, public_key, scheme, data, extension_id) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(keystore, public_key, scheme, data, extension_id)
      resolve({});
    });
  }

  6(certificate, algorithm_name) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(certificate, algorithm_name)
      resolve({});
    });
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  2(keystore) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(keystore)
      resolve({});
    });
  }

  generateKey() {
    // Method: GenerateKey
    // Call: GenerateKey()
  }

  4(keystore, certificate) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(keystore, certificate)
      resolve({});
    });
  }

  5(keystore, certificate) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(keystore, certificate)
      resolve({});
    });
  }

  keys(user, device) {
    // Method: keys
    // Call: keys(user, device)
  }

  importCertificate() {
    // Method: ImportCertificate
    // Call: ImportCertificate()
  }

  0(challenge, type, migrate) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(challenge, type, migrate)
      resolve({});
    });
  }

};

crosapi.mojom.KeystoreServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
