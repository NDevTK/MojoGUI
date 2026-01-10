// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/keymint.mojom
// Module: arc.mojom.keymint

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
arc.mojom.keymint = arc.mojom.keymint || {};


arc.mojom.keymint.shared_secret_key_agreement_label = "KeymasterSharedMac";

arc.mojom.keymint.shared_secret_key_check_label = "Keymaster HMAC Verification";

arc.mojom.keymint.secure_clock_time_stamp_mac_label = "Auth Verification";

// Enum: KeyFormat
arc.mojom.keymint.KeyFormat = {
  X509: 0,
  PKCS8: 1,
  RAW: 2,
};
arc.mojom.keymint.KeyFormatSpec = { $: mojo.internal.Enum() };

// Enum: Algorithm
arc.mojom.keymint.Algorithm = {
  RSA: 0,
  EC: 1,
  AES: 2,
  TRIPLE_DES: 3,
  HMAC: 4,
};
arc.mojom.keymint.AlgorithmSpec = { $: mojo.internal.Enum() };

// Enum: BlockMode
arc.mojom.keymint.BlockMode = {
  ECB: 0,
  CBC: 1,
  CTR: 2,
  GCM: 3,
};
arc.mojom.keymint.BlockModeSpec = { $: mojo.internal.Enum() };

// Enum: PaddingMode
arc.mojom.keymint.PaddingMode = {
  NONE: 0,
  RSA_OAEP: 1,
  RSA_PSS: 2,
  RSA_PKCS1_1_5_ENCRYPT: 3,
  RSA_PKCS1_1_5_SIGN: 4,
  PKCS7: 5,
};
arc.mojom.keymint.PaddingModeSpec = { $: mojo.internal.Enum() };

// Enum: Digest
arc.mojom.keymint.Digest = {
  NONE: 0,
  MD5: 1,
  SHA1: 2,
  SHA_2_224: 3,
  SHA_2_256: 4,
  SHA_2_384: 5,
  SHA_2_512: 6,
};
arc.mojom.keymint.DigestSpec = { $: mojo.internal.Enum() };

// Enum: EcCurve
arc.mojom.keymint.EcCurve = {
  P_224: 0,
  P_256: 1,
  P_384: 2,
  P_521: 3,
  CURVE_25519: 4,
};
arc.mojom.keymint.EcCurveSpec = { $: mojo.internal.Enum() };

// Enum: KeyOrigin
arc.mojom.keymint.KeyOrigin = {
  GENERATED: 0,
  DERIVED: 1,
  IMPORTED: 2,
  RESERVED: 3,
  SECURELY_IMPORTED: 4,
};
arc.mojom.keymint.KeyOriginSpec = { $: mojo.internal.Enum() };

// Enum: KeyPurpose
arc.mojom.keymint.KeyPurpose = {
  ENCRYPT: 0,
  DECRYPT: 1,
  SIGN: 2,
  VERIFY: 3,
  WRAP_KEY: 4,
  AGREE_KEY: 5,
  ATTEST_KEY: 6,
};
arc.mojom.keymint.KeyPurposeSpec = { $: mojo.internal.Enum() };

// Enum: HardwareAuthenticatorType
arc.mojom.keymint.HardwareAuthenticatorType = {
  NONE: 0,
  PASSWORD: 1,
  FINGERPRINT: 2,
  ANY: 3,
};
arc.mojom.keymint.HardwareAuthenticatorTypeSpec = { $: mojo.internal.Enum() };

// Enum: SecurityLevel
arc.mojom.keymint.SecurityLevel = {
  SOFTWARE: 0,
  TRUSTED_ENVIRONMENT: 1,
  STRONGBOX: 2,
  KEYSTORE: 3,
};
arc.mojom.keymint.SecurityLevelSpec = { $: mojo.internal.Enum() };

// Enum: Tag
arc.mojom.keymint.Tag = {
  PURPOSE: 0,
  ALGORITHM: 1,
  KEY_SIZE: 2,
  BLOCK_MODE: 3,
  DIGEST: 4,
  PADDING: 5,
  CALLER_NONCE: 6,
  MIN_MAC_LENGTH: 7,
  EC_CURVE: 8,
  RSA_PUBLIC_EXPONENT: 9,
  INCLUDE_UNIQUE_ID: 10,
  RSA_OAEP_MGF_DIGEST: 11,
  BOOTLOADER_ONLY: 12,
  ROLLBACK_RESISTANCE: 13,
  HARDWARE_TYPE: 14,
  EARLY_BOOT_ONLY: 15,
  ACTIVE_DATETIME: 16,
  ORIGINATION_EXPIRE_DATETIME: 17,
  USAGE_EXPIRE_DATETIME: 18,
  MIN_SECONDS_BETWEEN_OPS: 19,
  MAX_USES_PER_BOOT: 20,
  USAGE_COUNT_LIMIT: 21,
  USER_ID: 22,
  USER_SECURE_ID: 23,
  NO_AUTH_REQUIRED: 24,
  USER_AUTH_TYPE: 25,
  AUTH_TIMEOUT: 26,
  ALLOW_WHILE_ON_BODY: 27,
  TRUSTED_USER_PRESENCE_REQUIRED: 28,
  TRUSTED_CONFIRMATION_REQUIRED: 29,
  UNLOCKED_DEVICE_REQUIRED: 30,
  APPLICATION_ID: 31,
  APPLICATION_DATA: 32,
  CREATION_DATETIME: 33,
  ORIGIN: 34,
  ROOT_OF_TRUST: 35,
  OS_VERSION: 36,
  OS_PATCHLEVEL: 37,
  UNIQUE_ID: 38,
  ATTESTATION_CHALLENGE: 39,
  ATTESTATION_APPLICATION_ID: 40,
  ATTESTATION_ID_BRAND: 41,
  ATTESTATION_ID_DEVICE: 42,
  ATTESTATION_ID_PRODUCT: 43,
  ATTESTATION_ID_SERIAL: 44,
  ATTESTATION_ID_IMEI: 45,
  ATTESTATION_ID_MEID: 46,
  ATTESTATION_ID_MANUFACTURER: 47,
  ATTESTATION_ID_MODEL: 48,
  VENDOR_PATCHLEVEL: 49,
  BOOT_PATCHLEVEL: 50,
  DEVICE_UNIQUE_ATTESTATION: 51,
  IDENTITY_CREDENTIAL_KEY: 52,
  STORAGE_KEY: 53,
  ASSOCIATED_DATA: 54,
  NONCE: 55,
  MAC_LENGTH: 56,
  RESET_SINCE_ID_ROTATION: 57,
  CONFIRMATION_TOKEN: 58,
  CERTIFICATE_SERIAL: 59,
  CERTIFICATE_SUBJECT: 60,
  CERTIFICATE_NOT_BEFORE: 61,
  CERTIFICATE_NOT_AFTER: 62,
  MAX_BOOT_LEVEL: 63,
};
arc.mojom.keymint.TagSpec = { $: mojo.internal.Enum() };

// Union: KeyParameterValue
arc.mojom.keymint.KeyParameterValueSpec = { $: mojo.internal.Union(
    'arc.mojom.keymint.KeyParameterValue', {
      'invalid': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
      }},
      'algorithm': {
        'ordinal': 1,
        'type': arc.mojom.keymint.AlgorithmSpec,
      }},
      'block_mode': {
        'ordinal': 2,
        'type': arc.mojom.keymint.BlockModeSpec,
      }},
      'padding_mode': {
        'ordinal': 3,
        'type': arc.mojom.keymint.PaddingModeSpec,
      }},
      'digest': {
        'ordinal': 4,
        'type': arc.mojom.keymint.DigestSpec,
      }},
      'ec_curve': {
        'ordinal': 5,
        'type': arc.mojom.keymint.EcCurveSpec,
      }},
      'origin': {
        'ordinal': 6,
        'type': arc.mojom.keymint.KeyOriginSpec,
      }},
      'key_purpose': {
        'ordinal': 7,
        'type': arc.mojom.keymint.KeyPurposeSpec,
      }},
      'hardware_authenticator_type': {
        'ordinal': 8,
        'type': arc.mojom.keymint.HardwareAuthenticatorTypeSpec,
      }},
      'security_level': {
        'ordinal': 9,
        'type': arc.mojom.keymint.SecurityLevelSpec,
      }},
      'bool_value': {
        'ordinal': 10,
        'type': mojo.internal.Bool,
      }},
      'integer': {
        'ordinal': 11,
        'type': mojo.internal.Uint32,
      }},
      'long_integer': {
        'ordinal': 12,
        'type': mojo.internal.Uint64,
      }},
      'date_time': {
        'ordinal': 13,
        'type': mojo.internal.Uint64,
      }},
      'blob': {
        'ordinal': 14,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
    })
};

// Union: GenerateEcdsaP256KeyPairResultOrError
arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec = { $: mojo.internal.Union(
    'arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrError', {
      'key_pair_result': {
        'ordinal': 0,
        'type': arc.mojom.keymint.GenerateEcdsaP256KeyPairResultSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
      }},
    })
};

// Union: GenerateCertificateRequestResultOrError
arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec = { $: mojo.internal.Union(
    'arc.mojom.keymint.GenerateCertificateRequestResultOrError', {
      'certificate_request_result': {
        'ordinal': 0,
        'type': arc.mojom.keymint.GenerateCertificateRequestResultSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
      }},
    })
};

// Union: KeyCharacteristicsArrayOrError
arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec = { $: mojo.internal.Union(
    'arc.mojom.keymint.KeyCharacteristicsArrayOrError', {
      'key_characteristics': {
        'ordinal': 0,
        'type': mojo.internal.Array(arc.mojom.keymint.KeyCharacteristicsSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
      }},
    })
};

// Union: BeginResultOrError
arc.mojom.keymint.BeginResultOrErrorSpec = { $: mojo.internal.Union(
    'arc.mojom.keymint.BeginResultOrError', {
      'begin_result': {
        'ordinal': 0,
        'type': arc.mojom.keymint.BeginResultSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
      }},
    })
};

// Union: KeyCreationResultOrError
arc.mojom.keymint.KeyCreationResultOrErrorSpec = { $: mojo.internal.Union(
    'arc.mojom.keymint.KeyCreationResultOrError', {
      'key_creation_result': {
        'ordinal': 0,
        'type': arc.mojom.keymint.KeyCreationResultSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
      }},
    })
};

// Union: ByteArrayOrError
arc.mojom.keymint.ByteArrayOrErrorSpec = { $: mojo.internal.Union(
    'arc.mojom.keymint.ByteArrayOrError', {
      'output': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
      }},
    })
};

// Union: SharedSecretParametersOrError
arc.mojom.keymint.SharedSecretParametersOrErrorSpec = { $: mojo.internal.Union(
    'arc.mojom.keymint.SharedSecretParametersOrError', {
      'secret_parameters': {
        'ordinal': 0,
        'type': arc.mojom.keymint.SharedSecretParametersSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
      }},
    })
};

// Union: TimeStampTokenOrError
arc.mojom.keymint.TimeStampTokenOrErrorSpec = { $: mojo.internal.Union(
    'arc.mojom.keymint.TimeStampTokenOrError', {
      'timestamp_token': {
        'ordinal': 0,
        'type': arc.mojom.keymint.TimeStampTokenSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
      }},
    })
};

// Struct: AttestationKey
arc.mojom.keymint.AttestationKeySpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.AttestationKey',
      packedSize: 32,
      fields: [
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'attest_key_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec, false), nullable: false, minVersion: 0 },
        { name: 'issuer_subject_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: KeyParameter
arc.mojom.keymint.KeyParameterSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyParameter',
      packedSize: 32,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.TagSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.keymint.KeyParameterValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SharedSecretParameters
arc.mojom.keymint.SharedSecretParametersSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.SharedSecretParameters',
      packedSize: 24,
      fields: [
        { name: 'seed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'nonce', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: KeyCreationResult
arc.mojom.keymint.KeyCreationResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyCreationResult',
      packedSize: 32,
      fields: [
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'key_characteristics', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.keymint.KeyCharacteristicsSpec, false), nullable: false, minVersion: 0 },
        { name: 'certificate_chain', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.keymint.CertificateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Certificate
arc.mojom.keymint.CertificateSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.Certificate',
      packedSize: 16,
      fields: [
        { name: 'encoded_certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: KeyCharacteristics
arc.mojom.keymint.KeyCharacteristicsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyCharacteristics',
      packedSize: 24,
      fields: [
        { name: 'security_level', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.SecurityLevelSpec, nullable: false, minVersion: 0 },
        { name: 'authorizations', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GenerateKeyRequest
arc.mojom.keymint.GenerateKeyRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.GenerateKeyRequest',
      packedSize: 24,
      fields: [
        { name: 'key_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec, false), nullable: false, minVersion: 0 },
        { name: 'attestation_key', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.keymint.AttestationKeySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ImportKeyRequest
arc.mojom.keymint.ImportKeyRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.ImportKeyRequest',
      packedSize: 40,
      fields: [
        { name: 'key_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec, false), nullable: false, minVersion: 0 },
        { name: 'key_format', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.keymint.KeyFormatSpec, nullable: false, minVersion: 0 },
        { name: 'key_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'attestation_key', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.keymint.AttestationKeySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ImportWrappedKeyRequest
arc.mojom.keymint.ImportWrappedKeyRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.ImportWrappedKeyRequest',
      packedSize: 56,
      fields: [
        { name: 'wrapped_key_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'wrapping_key_blob', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'masking_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'unwrapping_params', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec, false), nullable: false, minVersion: 0 },
        { name: 'password_sid', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'biometric_sid', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: UpgradeKeyRequest
arc.mojom.keymint.UpgradeKeyRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.UpgradeKeyRequest',
      packedSize: 24,
      fields: [
        { name: 'key_blob_to_upgrade', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'upgrade_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BeginRequest
arc.mojom.keymint.BeginRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.BeginRequest',
      packedSize: 40,
      fields: [
        { name: 'key_purpose', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.KeyPurposeSpec, nullable: false, minVersion: 0 },
        { name: 'key_blob', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec, false), nullable: false, minVersion: 0 },
        { name: 'auth_token', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.keymint.HardwareAuthTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: BeginResult
arc.mojom.keymint.BeginResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.BeginResult',
      packedSize: 32,
      fields: [
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec, false), nullable: false, minVersion: 0 },
        { name: 'op_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: HardwareAuthToken
arc.mojom.keymint.HardwareAuthTokenSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.HardwareAuthToken',
      packedSize: 56,
      fields: [
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'user_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'authenticator_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'authenticator_type', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.keymint.HardwareAuthenticatorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.keymint.TimestampSpec, nullable: false, minVersion: 0 },
        { name: 'mac', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: Timestamp
arc.mojom.keymint.TimestampSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.Timestamp',
      packedSize: 16,
      fields: [
        { name: 'milli_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TimeStampToken
arc.mojom.keymint.TimeStampTokenSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.TimeStampToken',
      packedSize: 32,
      fields: [
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.keymint.TimestampSpec, nullable: false, minVersion: 0 },
        { name: 'mac', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: GetKeyCharacteristicsRequest
arc.mojom.keymint.GetKeyCharacteristicsRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.GetKeyCharacteristicsRequest',
      packedSize: 32,
      fields: [
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'app_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: UpdateRequest
arc.mojom.keymint.UpdateRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.UpdateRequest',
      packedSize: 40,
      fields: [
        { name: 'op_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'input', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'auth_token', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.keymint.HardwareAuthTokenSpec, nullable: true, minVersion: 0 },
        { name: 'timestamp_token', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.keymint.TimeStampTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: FinishRequest
arc.mojom.keymint.FinishRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.FinishRequest',
      packedSize: 56,
      fields: [
        { name: 'op_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'input', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'signature', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'auth_token', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.keymint.HardwareAuthTokenSpec, nullable: true, minVersion: 0 },
        { name: 'timestamp_token', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.keymint.TimeStampTokenSpec, nullable: true, minVersion: 0 },
        { name: 'confirmation_token', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: KeyMintKeyBlob
arc.mojom.keymint.KeyMintKeyBlobSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintKeyBlob',
      packedSize: 16,
      fields: [
        { name: 'key_material', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: KeyMintBlob
arc.mojom.keymint.KeyMintBlobSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintBlob',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: GenerateEcdsaP256KeyPairResult
arc.mojom.keymint.GenerateEcdsaP256KeyPairResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.GenerateEcdsaP256KeyPairResult',
      packedSize: 24,
      fields: [
        { name: 'maced_public_key', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.KeyMintBlobSpec, nullable: false, minVersion: 0 },
        { name: 'handle_to_private_key', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.keymint.KeyMintKeyBlobSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CertificateRequest
arc.mojom.keymint.CertificateRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.CertificateRequest',
      packedSize: 40,
      fields: [
        { name: 'test_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'keys_to_sign', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.keymint.KeyMintBlobSpec, false), nullable: false, minVersion: 0 },
        { name: 'encryption_cert_chain', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.keymint.KeyMintBlobSpec, nullable: false, minVersion: 0 },
        { name: 'challenge', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.keymint.KeyMintBlobSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: GenerateCertificateRequestResult
arc.mojom.keymint.GenerateCertificateRequestResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.GenerateCertificateRequestResult',
      packedSize: 32,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.KeyMintBlobSpec, nullable: false, minVersion: 0 },
        { name: 'protected_data', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.keymint.KeyMintBlobSpec, nullable: false, minVersion: 0 },
        { name: 'mac_of_keys_to_sign', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.keymint.KeyMintBlobSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: KeyMintHost
arc.mojom.keymint.KeyMintHost = {};

arc.mojom.keymint.KeyMintHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.keymint.KeyMintHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.keymint.KeyMintHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.keymint.KeyMintHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.keymint.KeyMintHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.keymint.KeyMintHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getServer() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec,
      arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec,
      []);
  }

};

arc.mojom.keymint.KeyMintHost.getRemote = function() {
  let remote = new arc.mojom.keymint.KeyMintHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.keymint.KeyMintHost',
    'context');
  return remote.$;
};

// ParamsSpec for GetServer
arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintHost.GetServer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintHost.GetServer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'server_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.keymint.KeyMintHostPtr = arc.mojom.keymint.KeyMintHostRemote;
arc.mojom.keymint.KeyMintHostRequest = arc.mojom.keymint.KeyMintHostPendingReceiver;


// Interface: KeyMintInstance
arc.mojom.keymint.KeyMintInstance = {};

arc.mojom.keymint.KeyMintInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.keymint.KeyMintInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.keymint.KeyMintInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.keymint.KeyMintInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.keymint.KeyMintInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.keymint.KeyMintInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.keymint.KeyMintInstance.getRemote = function() {
  let remote = new arc.mojom.keymint.KeyMintInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.keymint.KeyMintInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.keymint.KeyMintInstancePtr = arc.mojom.keymint.KeyMintInstanceRemote;
arc.mojom.keymint.KeyMintInstanceRequest = arc.mojom.keymint.KeyMintInstancePendingReceiver;


// Interface: KeyMintServer
arc.mojom.keymint.KeyMintServer = {};

arc.mojom.keymint.KeyMintServerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.keymint.KeyMintServerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.keymint.KeyMintServer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.keymint.KeyMintServerPendingReceiver,
      handle);
    this.$ = new arc.mojom.keymint.KeyMintServerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.keymint.KeyMintServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setSystemVersion(android_version, android_patchlevel) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec,
      null,
      [android_version, android_patchlevel]);
  }

  addRngEntropy(data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec,
      [data]);
  }

  generateKey(request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec,
      [request]);
  }

  importKey(request) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec,
      [request]);
  }

  importWrappedKey(request) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec,
      [request]);
  }

  upgradeKey(request) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec,
      [request]);
  }

  deleteKey(key_blob) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec,
      [key_blob]);
  }

  deleteAllKeys() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec,
      []);
  }

  destroyAttestationIds() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec,
      []);
  }

  begin(request) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec,
      [request]);
  }

  deviceLocked(password_only, timestamp_token) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec,
      [password_only, timestamp_token]);
  }

  earlyBootEnded() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec,
      []);
  }

  convertStorageKeyToEphemeral(storage_key_blob) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec,
      [storage_key_blob]);
  }

  getKeyCharacteristics(request) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec,
      [request]);
  }

  getRootOfTrustChallenge() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec,
      []);
  }

  getRootOfTrust(challenge) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec,
      [challenge]);
  }

  sendRootOfTrust(root_of_trust) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec,
      [root_of_trust]);
  }

  updateAad(request) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec,
      [request]);
  }

  update(request) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.keymint.KeyMintServer_Update_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec,
      [request]);
  }

  finish(request) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec,
      [request]);
  }

  abort(op_handle) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec,
      [op_handle]);
  }

  getSharedSecretParameters() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec,
      []);
  }

  computeSharedSecret(secret_params) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec,
      [secret_params]);
  }

  generateTimeStamp(challenge) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec,
      [challenge]);
  }

  generateEcdsaP256KeyPair(test_mode) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec,
      [test_mode]);
  }

  generateCertificateRequest(request) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec,
      [request]);
  }

  setVendorPatchLevel(android_vendor_patchlevel) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec,
      null,
      [android_vendor_patchlevel]);
  }

};

arc.mojom.keymint.KeyMintServer.getRemote = function() {
  let remote = new arc.mojom.keymint.KeyMintServerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.keymint.KeyMintServer',
    'context');
  return remote.$;
};

// ParamsSpec for SetSystemVersion
arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.SetSystemVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'android_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'android_patchlevel', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddRngEntropy
arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.AddRngEntropy_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.AddRngEntropy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GenerateKey
arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GenerateKey_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.GenerateKeyRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GenerateKey_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.KeyCreationResultOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ImportKey
arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.ImportKey_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.ImportKeyRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.ImportKey_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.KeyCreationResultOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ImportWrappedKey
arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.ImportWrappedKey_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.ImportWrappedKeyRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.ImportWrappedKey_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.KeyCreationResultOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpgradeKey
arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.UpgradeKey_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.UpgradeKeyRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.UpgradeKey_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.ByteArrayOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeleteKey
arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.DeleteKey_Params',
      packedSize: 16,
      fields: [
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.DeleteKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteAllKeys
arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.DeleteAllKeys_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.DeleteAllKeys_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DestroyAttestationIds
arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.DestroyAttestationIds_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.DestroyAttestationIds_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Begin
arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.Begin_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.BeginRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.Begin_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.BeginResultOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeviceLocked
arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.DeviceLocked_Params',
      packedSize: 24,
      fields: [
        { name: 'password_only', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'timestamp_token', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.keymint.TimeStampTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.DeviceLocked_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EarlyBootEnded
arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.EarlyBootEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.EarlyBootEnded_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConvertStorageKeyToEphemeral
arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.ConvertStorageKeyToEphemeral_Params',
      packedSize: 16,
      fields: [
        { name: 'storage_key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.ConvertStorageKeyToEphemeral_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.ByteArrayOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetKeyCharacteristics
arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GetKeyCharacteristics_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.GetKeyCharacteristicsRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GetKeyCharacteristics_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetRootOfTrustChallenge
arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GetRootOfTrustChallenge_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GetRootOfTrustChallenge_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.ByteArrayOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetRootOfTrust
arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GetRootOfTrust_Params',
      packedSize: 16,
      fields: [
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GetRootOfTrust_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.ByteArrayOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendRootOfTrust
arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.SendRootOfTrust_Params',
      packedSize: 16,
      fields: [
        { name: 'root_of_trust', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.SendRootOfTrust_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateAad
arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.UpdateAad_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.UpdateRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.UpdateAad_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Update
arc.mojom.keymint.KeyMintServer_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.UpdateRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.Update_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.ByteArrayOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Finish
arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.Finish_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.FinishRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.Finish_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.ByteArrayOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Abort
arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.Abort_Params',
      packedSize: 16,
      fields: [
        { name: 'op_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.Abort_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSharedSecretParameters
arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GetSharedSecretParameters_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GetSharedSecretParameters_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.SharedSecretParametersOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ComputeSharedSecret
arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.ComputeSharedSecret_Params',
      packedSize: 16,
      fields: [
        { name: 'secret_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.keymint.SharedSecretParametersSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.ComputeSharedSecret_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.ByteArrayOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GenerateTimeStamp
arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GenerateTimeStamp_Params',
      packedSize: 16,
      fields: [
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GenerateTimeStamp_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.TimeStampTokenOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GenerateEcdsaP256KeyPair
arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GenerateEcdsaP256KeyPair_Params',
      packedSize: 16,
      fields: [
        { name: 'test_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GenerateEcdsaP256KeyPair_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GenerateCertificateRequest
arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GenerateCertificateRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.CertificateRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.GenerateCertificateRequest_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetVendorPatchLevel
arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyMintServer.SetVendorPatchLevel_Params',
      packedSize: 16,
      fields: [
        { name: 'android_vendor_patchlevel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.keymint.KeyMintServerPtr = arc.mojom.keymint.KeyMintServerRemote;
arc.mojom.keymint.KeyMintServerRequest = arc.mojom.keymint.KeyMintServerPendingReceiver;

