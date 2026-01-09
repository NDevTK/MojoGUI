// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/keymint.mojom
// Module: arc.mojom.keymint

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
arc.mojom.keymint = arc.mojom.keymint || {};


// Enum: KeyFormat
arc.mojom.keymint.KeyFormat = {
  X509: 0,
};

// Enum: Algorithm
arc.mojom.keymint.Algorithm = {
  RSA: 0,
  EC: 1,
  AES: 2,
  TRIPLE_DES: 3,
  HMAC: 4,
};

// Enum: BlockMode
arc.mojom.keymint.BlockMode = {
  ECB: 0,
  CBC: 1,
  CTR: 2,
  GCM: 3,
};

// Enum: PaddingMode
arc.mojom.keymint.PaddingMode = {
  NONE: 0,
  RSA_OAEP: 1,
  RSA_PSS: 2,
  RSA_PKCS1_1_5_ENCRYPT: 3,
  RSA_PKCS1_1_5_SIGN: 4,
  PKCS7: 5,
};

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

// Enum: EcCurve
arc.mojom.keymint.EcCurve = {
  P_224: 0,
  P_256: 1,
  P_384: 2,
  P_521: 3,
  CURVE_25519: 4,
};

// Enum: KeyOrigin
arc.mojom.keymint.KeyOrigin = {
  GENERATED: 0,
  DERIVED: 1,
  IMPORTED: 2,
  RESERVED: 3,
  SECURELY_IMPORTED: 4,
};

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

// Enum: HardwareAuthenticatorType
arc.mojom.keymint.HardwareAuthenticatorType = {
  NONE: 0,
  PASSWORD: 1,
  FINGERPRINT: 2,
  ANY: 3,
};

// Enum: SecurityLevel
arc.mojom.keymint.SecurityLevel = {
  SOFTWARE: 0,
  TRUSTED_ENVIRONMENT: 1,
  STRONGBOX: 2,
  KEYSTORE: 3,
};

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

// Struct: AttestationKey
arc.mojom.keymint.AttestationKey = class {
  constructor(values = {}) {
    this.issuer_subject_name = values.issuer_subject_name !== undefined ? values.issuer_subject_name : 0;
  }
};

// Struct: KeyParameter
arc.mojom.keymint.KeyParameter = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : null;
  }
};

// Struct: SharedSecretParameters
arc.mojom.keymint.SharedSecretParameters = class {
  constructor(values = {}) {
    this.nonce = values.nonce !== undefined ? values.nonce : 0;
  }
};

// Struct: KeyCreationResult
arc.mojom.keymint.KeyCreationResult = class {
  constructor(values = {}) {
    this.key_characteristics = values.key_characteristics !== undefined ? values.key_characteristics : 0;
    this.certificate_chain = values.certificate_chain !== undefined ? values.certificate_chain : [];
  }
};

// Struct: Certificate
arc.mojom.keymint.Certificate = class {
  constructor(values = {}) {
    this.encoded_certificate = values.encoded_certificate !== undefined ? values.encoded_certificate : 0;
  }
};

// Struct: KeyCharacteristics
arc.mojom.keymint.KeyCharacteristics = class {
  constructor(values = {}) {
    this.authorizations = values.authorizations !== undefined ? values.authorizations : [];
  }
};

// Struct: GenerateKeyRequest
arc.mojom.keymint.GenerateKeyRequest = class {
  constructor(values = {}) {
    this.key_params = values.key_params !== undefined ? values.key_params : [];
    this.provided = values.provided !== undefined ? values.provided : null;
    this.attestation_key = values.attestation_key !== undefined ? values.attestation_key : null;
  }
};

// Struct: ImportKeyRequest
arc.mojom.keymint.ImportKeyRequest = class {
  constructor(values = {}) {
    this.key_data = values.key_data !== undefined ? values.key_data : 0;
    this.attestation_key = values.attestation_key !== undefined ? values.attestation_key : null;
  }
};

// Struct: ImportWrappedKeyRequest
arc.mojom.keymint.ImportWrappedKeyRequest = class {
  constructor(values = {}) {
    this.biometric_sid = values.biometric_sid !== undefined ? values.biometric_sid : 0;
  }
};

// Struct: UpgradeKeyRequest
arc.mojom.keymint.UpgradeKeyRequest = class {
  constructor(values = {}) {
    this.upgrade_params = values.upgrade_params !== undefined ? values.upgrade_params : 0;
  }
};

// Struct: BeginRequest
arc.mojom.keymint.BeginRequest = class {
  constructor(values = {}) {
    this.auth_token = values.auth_token !== undefined ? values.auth_token : 0;
  }
};

// Struct: BeginResult
arc.mojom.keymint.BeginResult = class {
  constructor(values = {}) {
    this.challenge = values.challenge !== undefined ? values.challenge : 0;
    this.params = values.params !== undefined ? values.params : [];
    this.op_handle = values.op_handle !== undefined ? values.op_handle : 0;
  }
};

// Struct: HardwareAuthToken
arc.mojom.keymint.HardwareAuthToken = class {
  constructor(values = {}) {
    this.authenticator_id = values.authenticator_id !== undefined ? values.authenticator_id : 0;
    this.NONE = values.NONE !== undefined ? values.NONE : null;
    this.mac = values.mac !== undefined ? values.mac : 0;
  }
};

// Struct: Timestamp
arc.mojom.keymint.Timestamp = class {
  constructor(values = {}) {
    this.milli_seconds = values.milli_seconds !== undefined ? values.milli_seconds : 0;
  }
};

// Struct: TimeStampToken
arc.mojom.keymint.TimeStampToken = class {
  constructor(values = {}) {
    this.mac = values.mac !== undefined ? values.mac : 0;
  }
};

// Struct: GetKeyCharacteristicsRequest
arc.mojom.keymint.GetKeyCharacteristicsRequest = class {
  constructor(values = {}) {
    this.app_data = values.app_data !== undefined ? values.app_data : 0;
  }
};

// Struct: UpdateRequest
arc.mojom.keymint.UpdateRequest = class {
  constructor(values = {}) {
    this.timestamp_token = values.timestamp_token !== undefined ? values.timestamp_token : 0;
  }
};

// Struct: FinishRequest
arc.mojom.keymint.FinishRequest = class {
  constructor(values = {}) {
    this.op_handle = values.op_handle !== undefined ? values.op_handle : 0;
    this.confirmation_token = values.confirmation_token !== undefined ? values.confirmation_token : 0;
  }
};

// Struct: KeyMintKeyBlob
arc.mojom.keymint.KeyMintKeyBlob = class {
  constructor(values = {}) {
    this.key_material = values.key_material !== undefined ? values.key_material : 0;
  }
};

// Struct: KeyMintBlob
arc.mojom.keymint.KeyMintBlob = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Struct: GenerateEcdsaP256KeyPairResult
arc.mojom.keymint.GenerateEcdsaP256KeyPairResult = class {
  constructor(values = {}) {
    this.handle_to_private_key = values.handle_to_private_key !== undefined ? values.handle_to_private_key : 0;
  }
};

// Struct: CertificateRequest
arc.mojom.keymint.CertificateRequest = class {
  constructor(values = {}) {
    this.is = values.is !== undefined ? values.is : null;
    this.challenge = values.challenge !== undefined ? values.challenge : 0;
  }
};

// Struct: GenerateCertificateRequestResult
arc.mojom.keymint.GenerateCertificateRequestResult = class {
  constructor(values = {}) {
    this.mac_of_keys_to_sign = values.mac_of_keys_to_sign !== undefined ? values.mac_of_keys_to_sign : 0;
  }
};

// Interface: KeyMintHost
arc.mojom.keymint.KeyMintHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.keymint.KeyMintHost';
  }

};

arc.mojom.keymint.KeyMintHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: KeyMintInstance
arc.mojom.keymint.KeyMintInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.keymint.KeyMintInstance';
  }

};

arc.mojom.keymint.KeyMintInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: KeyMintServer
arc.mojom.keymint.KeyMintServerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.keymint.KeyMintServer';
  }

};

arc.mojom.keymint.KeyMintServerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
