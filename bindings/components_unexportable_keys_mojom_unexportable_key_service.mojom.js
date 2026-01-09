// Auto-generated MojoJS binding
// Source: chromium_src/components/unexportable_keys/mojom/unexportable_key_service.mojom
// Module: unexportable_keys.mojom

'use strict';

// Module namespace
var unexportable_keys = unexportable_keys || {};
unexportable_keys.mojom = unexportable_keys.mojom || {};


// Enum: SignatureAlgorithm
unexportable_keys.mojom.SignatureAlgorithm = {
  RSA_PKCS1_SHA1: 0,
  RSA_PKCS1_SHA256: 1,
  ECDSA_SHA256: 2,
  RSA_PSS_SHA256: 3,
};

// Enum: ServiceError
unexportable_keys.mojom.ServiceError = {
};

// Enum: BackgroundTaskPriority
unexportable_keys.mojom.BackgroundTaskPriority = {
};

// Struct: UnexportableKeyId
unexportable_keys.mojom.UnexportableKeyId = class {
  constructor(values = {}) {
    this.key_id = values.key_id !== undefined ? values.key_id : null;
  }
};

// Struct: NewKeyData
unexportable_keys.mojom.NewKeyData = class {
  constructor(values = {}) {
    this.creation_time = values.creation_time !== undefined ? values.creation_time : 0;
  }
};

// Interface: UnexportableKeyService
unexportable_keys.mojom.UnexportableKeyServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'unexportable_keys.mojom.UnexportableKeyService';
  }

  generateSigningKey(acceptable_algorithms, priority) {
    // Method: GenerateSigningKey
    // Call: GenerateSigningKey(acceptable_algorithms, priority)
  }

  fromWrappedSigningKey(wrapped_key, priority) {
    // Method: FromWrappedSigningKey
    // Call: FromWrappedSigningKey(wrapped_key, priority)
  }

  sign(key_id, data, priority) {
    // Method: Sign
    // Call: Sign(key_id, data, priority)
  }

  getAllSigningKeysForGarbageCollection(priority) {
    // Method: GetAllSigningKeysForGarbageCollection
    // Call: GetAllSigningKeysForGarbageCollection(priority)
  }

  deleteKey(key_id, priority) {
    // Method: DeleteKey
    return new Promise((resolve) => {
      // Call: DeleteKey(key_id, priority)
      resolve({});
    });
  }

  deleteAllKeys(priority) {
    // Method: DeleteAllKeys
    // Call: DeleteAllKeys(priority)
  }

};

unexportable_keys.mojom.UnexportableKeyServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
