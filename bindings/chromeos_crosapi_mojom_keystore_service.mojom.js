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
crosapi.mojom.KeystoreTypeSpec = { $: mojo.internal.Enum() };

// Enum: KeystoreAlgorithmName
crosapi.mojom.KeystoreAlgorithmName = {
  kRsassaPkcs115: 0,
  kRsaOaep: 1,
  kEcdsa: 2,
};
crosapi.mojom.KeystoreAlgorithmNameSpec = { $: mojo.internal.Enum() };

// Enum: KeystoreKeyAttributeType
crosapi.mojom.KeystoreKeyAttributeType = {
  kPlatformKeysTag: 0,
};
crosapi.mojom.KeystoreKeyAttributeTypeSpec = { $: mojo.internal.Enum() };

// Enum: KeystoreSigningScheme
crosapi.mojom.KeystoreSigningScheme = {
  kRsassaPkcs1V15None: 0,
  kRsassaPkcs1V15Sha1: 1,
  kRsassaPkcs1V15Sha256: 2,
  kRsassaPkcs1V15Sha384: 3,
  kRsassaPkcs1V15Sha512: 4,
  kEcdsaSha1: 5,
  kEcdsaSha256: 6,
  kEcdsaSha384: 7,
  kEcdsaSha512: 8,
};
crosapi.mojom.KeystoreSigningSchemeSpec = { $: mojo.internal.Enum() };

// Enum: KeyTag
crosapi.mojom.KeyTag = {
  kNoTags: 0,
  kCorporate: 1,
};
crosapi.mojom.KeyTagSpec = { $: mojo.internal.Enum() };

// Union: KeystoreAlgorithm
crosapi.mojom.KeystoreAlgorithmSpec = { $: mojo.internal.Union(
    'crosapi.mojom.KeystoreAlgorithm', {
      'rsassa_pkcs115': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreRsaParamsSpec,
      }},
      'rsa_oaep': {
        'ordinal': 1,
        'type': crosapi.mojom.KeystoreRsaParamsSpec,
      }},
      'ecdsa': {
        'ordinal': 2,
        'type': crosapi.mojom.KeystoreEcdsaParamsSpec,
      }},
    })
};

// Union: ChallengeAttestationOnlyKeystoreResult
crosapi.mojom.ChallengeAttestationOnlyKeystoreResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ChallengeAttestationOnlyKeystoreResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'challenge_response': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
    })
};

// Union: KeystoreBinaryResult
crosapi.mojom.KeystoreBinaryResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.KeystoreBinaryResult', {
      'error': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreErrorSpec,
      }},
      'blob': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
    })
};

// Union: GetCertificatesResult
crosapi.mojom.GetCertificatesResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.GetCertificatesResult', {
      'error': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreErrorSpec,
      }},
      'certificates': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false),
      }},
    })
};

// Union: KeystoreSelectClientCertificatesResult
crosapi.mojom.KeystoreSelectClientCertificatesResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.KeystoreSelectClientCertificatesResult', {
      'error': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreErrorSpec,
      }},
      'certificates': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false),
      }},
    })
};

// Union: GetKeyStoresResult
crosapi.mojom.GetKeyStoresResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.GetKeyStoresResult', {
      'error': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreErrorSpec,
      }},
      'key_stores': {
        'ordinal': 1,
        'type': mojo.internal.Array(crosapi.mojom.KeystoreTypeSpec, false),
      }},
    })
};

// Union: GetPublicKeyResult
crosapi.mojom.GetPublicKeyResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.GetPublicKeyResult', {
      'error': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreErrorSpec,
      }},
      'success_result': {
        'ordinal': 1,
        'type': crosapi.mojom.GetPublicKeySuccessResultSpec,
      }},
    })
};

// Union: GetKeyTagsResult
crosapi.mojom.GetKeyTagsResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.GetKeyTagsResult', {
      'error': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreErrorSpec,
      }},
      'tags': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
      }},
    })
};

// Union: DEPRECATED_ExtensionKeystoreBinaryResult
crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'blob': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
    })
};

// Union: DEPRECATED_GetPublicKeyResult
crosapi.mojom.DEPRECATED_GetPublicKeyResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.DEPRECATED_GetPublicKeyResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'success_result': {
        'ordinal': 1,
        'type': crosapi.mojom.GetPublicKeySuccessResultSpec,
      }},
    })
};

// Union: DEPRECATED_GetKeyStoresResult
crosapi.mojom.DEPRECATED_GetKeyStoresResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.DEPRECATED_GetKeyStoresResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'key_stores': {
        'ordinal': 1,
        'type': mojo.internal.Array(crosapi.mojom.KeystoreTypeSpec, false),
      }},
    })
};

// Union: DEPRECATED_GetCertificatesResult
crosapi.mojom.DEPRECATED_GetCertificatesResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.DEPRECATED_GetCertificatesResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'certificates': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false),
      }},
    })
};

// Union: DEPRECATED_KeystoreStringResult
crosapi.mojom.DEPRECATED_KeystoreStringResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.DEPRECATED_KeystoreStringResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'challenge_response': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: KeystoreRsaParams
crosapi.mojom.KeystoreRsaParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreRsaParams',
      packedSize: 24,
      fields: [
        { name: 'modulus_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'public_exponent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'sw_backed', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: KeystoreEcdsaParams
crosapi.mojom.KeystoreEcdsaParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreEcdsaParams',
      packedSize: 16,
      fields: [
        { name: 'named_curve', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: GetPublicKeySuccessResult
crosapi.mojom.GetPublicKeySuccessResultSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.GetPublicKeySuccessResult',
      packedSize: 32,
      fields: [
        { name: 'public_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'algorithm_properties', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreAlgorithmSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: KeystoreService
crosapi.mojom.KeystoreService = {};

crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_Params',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'migrate', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'algorithm', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.KeystoreAlgorithmNameSpec, nullable: false, minVersion: 17 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 17, packedSize: 32}]
    }
  }
};

crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_GetKeyStores_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_SelectClientCertificates_Params',
      packedSize: 16,
      fields: [
        { name: 'certificate_authorities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_GetCertificates_Params',
      packedSize: 16,
      fields: [
        { name: 'keystore', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_AddCertificate_Params',
      packedSize: 24,
      fields: [
        { name: 'keystore', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_RemoveCertificate_Params',
      packedSize: 24,
      fields: [
        { name: 'keystore', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_GetPublicKey_Params',
      packedSize: 24,
      fields: [
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'algorithm_name', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreAlgorithmNameSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_GenerateKey_Params',
      packedSize: 32,
      fields: [
        { name: 'keystore', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'algorithm', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreAlgorithmSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_RemoveKey_Params',
      packedSize: 24,
      fields: [
        { name: 'keystore', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_Sign_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_Sign_Params',
      packedSize: 40,
      fields: [
        { name: 'is_keystore_provided', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'keystore', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'scheme', packedOffset: 20, packedBitOffset: 0, type: crosapi.mojom.KeystoreSigningSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_GetKeyTags_Params',
      packedSize: 16,
      fields: [
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_AddKeyTags_Params',
      packedSize: 24,
      fields: [
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'tags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_Params',
      packedSize: 16,
      fields: [
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_SetAttributeForKey_Params',
      packedSize: 32,
      fields: [
        { name: 'keystore', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'attribute_type', packedOffset: 20, packedBitOffset: 0, type: crosapi.mojom.KeystoreKeyAttributeTypeSpec, nullable: false, minVersion: 0 },
        { name: 'attribute_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_Params',
      packedSize: 40,
      fields: [
        { name: 'keystore', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'algorithm', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreAlgorithmSpec, nullable: false, minVersion: 0 },
        { name: 'extension_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 5 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 5, packedSize: 40}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_Params',
      packedSize: 40,
      fields: [
        { name: 'keystore', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'scheme', packedOffset: 28, packedBitOffset: 0, type: crosapi.mojom.KeystoreSigningSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'extension_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_Params',
      packedSize: 24,
      fields: [
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'algorithm_name', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreAlgorithmNameSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_Params',
      packedSize: 16,
      fields: [
        { name: 'keystore', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_Params',
      packedSize: 24,
      fields: [
        { name: 'keystore', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_Params',
      packedSize: 24,
      fields: [
        { name: 'keystore', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_Params',
      packedSize: 24,
      fields: [
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'migrate', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.KeystoreServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.KeystoreService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.KeystoreServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.KeystoreServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.KeystoreServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  challengeAttestationOnlyKeystore(type, challenge, migrate, algorithm) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec,
      crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ResponseParamsSpec,
      [type, challenge, migrate, algorithm]);
  }

  getKeyStores() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec,
      crosapi.mojom.KeystoreService_GetKeyStores_ResponseParamsSpec,
      []);
  }

  selectClientCertificates(certificate_authorities) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec,
      crosapi.mojom.KeystoreService_SelectClientCertificates_ResponseParamsSpec,
      [certificate_authorities]);
  }

  getCertificates(keystore) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec,
      crosapi.mojom.KeystoreService_GetCertificates_ResponseParamsSpec,
      [keystore]);
  }

  addCertificate(keystore, certificate) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec,
      crosapi.mojom.KeystoreService_AddCertificate_ResponseParamsSpec,
      [keystore, certificate]);
  }

  removeCertificate(keystore, certificate) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec,
      crosapi.mojom.KeystoreService_RemoveCertificate_ResponseParamsSpec,
      [keystore, certificate]);
  }

  getPublicKey(certificate, algorithm_name) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec,
      crosapi.mojom.KeystoreService_GetPublicKey_ResponseParamsSpec,
      [certificate, algorithm_name]);
  }

  generateKey(keystore, algorithm) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec,
      crosapi.mojom.KeystoreService_GenerateKey_ResponseParamsSpec,
      [keystore, algorithm]);
  }

  removeKey(keystore, public_key) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec,
      crosapi.mojom.KeystoreService_RemoveKey_ResponseParamsSpec,
      [keystore, public_key]);
  }

  sign(is_keystore_provided, keystore, public_key, scheme, data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      crosapi.mojom.KeystoreService_Sign_ParamsSpec,
      crosapi.mojom.KeystoreService_Sign_ResponseParamsSpec,
      [is_keystore_provided, keystore, public_key, scheme, data]);
  }

  getKeyTags(public_key) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec,
      crosapi.mojom.KeystoreService_GetKeyTags_ResponseParamsSpec,
      [public_key]);
  }

  addKeyTags(public_key, tags) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec,
      crosapi.mojom.KeystoreService_AddKeyTags_ResponseParamsSpec,
      [public_key, tags]);
  }

  canUserGrantPermissionForKey(public_key) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec,
      crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ResponseParamsSpec,
      [public_key]);
  }

  setAttributeForKey(keystore, public_key, attribute_type, attribute_value) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec,
      crosapi.mojom.KeystoreService_SetAttributeForKey_ResponseParamsSpec,
      [keystore, public_key, attribute_type, attribute_value]);
  }

  dEPRECATED_ExtensionGenerateKey(keystore, algorithm, extension_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ResponseParamsSpec,
      [keystore, algorithm, extension_id]);
  }

  dEPRECATED_ExtensionSign(keystore, public_key, scheme, data, extension_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ResponseParamsSpec,
      [keystore, public_key, scheme, data, extension_id]);
  }

  dEPRECATED_GetPublicKey(certificate, algorithm_name) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ResponseParamsSpec,
      [certificate, algorithm_name]);
  }

  dEPRECATED_GetKeyStores() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ResponseParamsSpec,
      []);
  }

  dEPRECATED_GetCertificates(keystore) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ResponseParamsSpec,
      [keystore]);
  }

  dEPRECATED_AddCertificate(keystore, certificate) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ResponseParamsSpec,
      [keystore, certificate]);
  }

  dEPRECATED_RemoveCertificate(keystore, certificate) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ResponseParamsSpec,
      [keystore, certificate]);
  }

  dEPRECATED_ChallengeAttestationOnlyKeystore(challenge, type, migrate) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ResponseParamsSpec,
      [challenge, type, migrate]);
  }

};

crosapi.mojom.KeystoreService.getRemote = function() {
  let remote = new crosapi.mojom.KeystoreServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.KeystoreService',
    'context');
  return remote.$;
};

// ParamsSpec for ChallengeAttestationOnlyKeystore
crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.ChallengeAttestationOnlyKeystore_Params',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'migrate', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'algorithm', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.KeystoreAlgorithmNameSpec, nullable: false, minVersion: 17 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 17, packedSize: 32}]
    }
  }
};

crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.ChallengeAttestationOnlyKeystore_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ChallengeAttestationOnlyKeystoreResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetKeyStores
crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.GetKeyStores_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.KeystoreService_GetKeyStores_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.GetKeyStores_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.GetKeyStoresResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SelectClientCertificates
crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.SelectClientCertificates_Params',
      packedSize: 16,
      fields: [
        { name: 'certificate_authorities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.KeystoreService_SelectClientCertificates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.SelectClientCertificates_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreSelectClientCertificatesResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetCertificates
crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.GetCertificates_Params',
      packedSize: 16,
      fields: [
        { name: 'keystore', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.KeystoreService_GetCertificates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.GetCertificates_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.GetCertificatesResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddCertificate
crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.AddCertificate_Params',
      packedSize: 24,
      fields: [
        { name: 'keystore', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_AddCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.AddCertificate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_error', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemoveCertificate
crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.RemoveCertificate_Params',
      packedSize: 24,
      fields: [
        { name: 'keystore', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_RemoveCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.RemoveCertificate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_error', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPublicKey
crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.GetPublicKey_Params',
      packedSize: 24,
      fields: [
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'algorithm_name', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreAlgorithmNameSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_GetPublicKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.GetPublicKey_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.GetPublicKeyResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GenerateKey
crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.GenerateKey_Params',
      packedSize: 32,
      fields: [
        { name: 'keystore', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'algorithm', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreAlgorithmSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

crosapi.mojom.KeystoreService_GenerateKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.GenerateKey_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreBinaryResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RemoveKey
crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.RemoveKey_Params',
      packedSize: 24,
      fields: [
        { name: 'keystore', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_RemoveKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.RemoveKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_error', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Sign
crosapi.mojom.KeystoreService_Sign_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.Sign_Params',
      packedSize: 40,
      fields: [
        { name: 'is_keystore_provided', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'keystore', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'scheme', packedOffset: 20, packedBitOffset: 0, type: crosapi.mojom.KeystoreSigningSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

crosapi.mojom.KeystoreService_Sign_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.Sign_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreBinaryResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetKeyTags
crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.GetKeyTags_Params',
      packedSize: 16,
      fields: [
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.KeystoreService_GetKeyTags_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.GetKeyTags_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.GetKeyTagsResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddKeyTags
crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.AddKeyTags_Params',
      packedSize: 24,
      fields: [
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'tags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_AddKeyTags_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.AddKeyTags_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_error', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CanUserGrantPermissionForKey
crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.CanUserGrantPermissionForKey_Params',
      packedSize: 16,
      fields: [
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.CanUserGrantPermissionForKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAttributeForKey
crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.SetAttributeForKey_Params',
      packedSize: 32,
      fields: [
        { name: 'keystore', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'attribute_type', packedOffset: 20, packedBitOffset: 0, type: crosapi.mojom.KeystoreKeyAttributeTypeSpec, nullable: false, minVersion: 0 },
        { name: 'attribute_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

crosapi.mojom.KeystoreService_SetAttributeForKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.SetAttributeForKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_error', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_ExtensionGenerateKey
crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_ExtensionGenerateKey_Params',
      packedSize: 40,
      fields: [
        { name: 'keystore', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'algorithm', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreAlgorithmSpec, nullable: false, minVersion: 0 },
        { name: 'extension_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 5 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 5, packedSize: 40}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_ExtensionGenerateKey_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DEPRECATED_ExtensionSign
crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_ExtensionSign_Params',
      packedSize: 40,
      fields: [
        { name: 'keystore', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'scheme', packedOffset: 28, packedBitOffset: 0, type: crosapi.mojom.KeystoreSigningSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'extension_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_ExtensionSign_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DEPRECATED_GetPublicKey
crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_GetPublicKey_Params',
      packedSize: 24,
      fields: [
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'algorithm_name', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreAlgorithmNameSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_GetPublicKey_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DEPRECATED_GetPublicKeyResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DEPRECATED_GetKeyStores
crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_GetKeyStores_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_GetKeyStores_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DEPRECATED_GetKeyStoresResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DEPRECATED_GetCertificates
crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_GetCertificates_Params',
      packedSize: 16,
      fields: [
        { name: 'keystore', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_GetCertificates_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DEPRECATED_GetCertificatesResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DEPRECATED_AddCertificate
crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_AddCertificate_Params',
      packedSize: 24,
      fields: [
        { name: 'keystore', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_AddCertificate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_RemoveCertificate
crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_RemoveCertificate_Params',
      packedSize: 24,
      fields: [
        { name: 'keystore', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_RemoveCertificate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_ChallengeAttestationOnlyKeystore
crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_ChallengeAttestationOnlyKeystore_Params',
      packedSize: 24,
      fields: [
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.KeystoreTypeSpec, nullable: false, minVersion: 0 },
        { name: 'migrate', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.KeystoreService.DEPRECATED_ChallengeAttestationOnlyKeystore_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DEPRECATED_KeystoreStringResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.KeystoreServicePtr = crosapi.mojom.KeystoreServiceRemote;
crosapi.mojom.KeystoreServiceRequest = crosapi.mojom.KeystoreServicePendingReceiver;

