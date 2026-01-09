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
  PKCS8: 1,
  RAW: 2,
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
arc.mojom.keymint.AttestationKeySpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.AttestationKey',
      packedSize: 32,
      fields: [
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'attest_key_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'issuer_subject_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KeyParameter
arc.mojom.keymint.KeyParameterSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.keymint.KeyParameter',
      packedSize: 24,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'seed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'nonce', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'key_characteristics', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'certificate_chain', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'encoded_certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'security_level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'authorizations', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'key_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'attestation_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'key_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'key_format', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'key_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'attestation_key', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'wrapped_key_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'wrapping_key_blob', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'masking_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'unwrapping_params', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'password_sid', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'biometric_sid', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'key_blob_to_upgrade', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'upgrade_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'key_purpose', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'key_blob', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'auth_token', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'op_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'user_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'authenticator_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'authenticator_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'timestamp', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'mac', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'milli_seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'mac', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'key_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'app_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'op_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'input', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'auth_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'timestamp_token', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'op_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'input', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'signature', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'auth_token', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'timestamp_token', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'confirmation_token', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'key_material', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'maced_public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'handle_to_private_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'keys_to_sign', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'encryption_cert_chain', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'challenge', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'test_mode', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'protected_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'mac_of_keys_to_sign', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
arc.mojom.keymint.KeyMintServerPtr = arc.mojom.keymint.KeyMintServerRemote;
arc.mojom.keymint.KeyMintServerRequest = arc.mojom.keymint.KeyMintServerPendingReceiver;

