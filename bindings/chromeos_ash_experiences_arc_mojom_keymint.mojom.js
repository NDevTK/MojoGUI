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

// Interface: KeyMintHost
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
}};

// Legacy compatibility
arc.mojom.keymint.KeyMintHostPtr = arc.mojom.keymint.KeyMintHostRemote;
arc.mojom.keymint.KeyMintHostRequest = arc.mojom.keymint.KeyMintHostPendingReceiver;


// Interface: KeyMintInstance
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
}};

// Legacy compatibility
arc.mojom.keymint.KeyMintInstancePtr = arc.mojom.keymint.KeyMintInstanceRemote;
arc.mojom.keymint.KeyMintInstanceRequest = arc.mojom.keymint.KeyMintInstancePendingReceiver;


// Interface: KeyMintServer
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
}};

// Legacy compatibility
arc.mojom.keymint.KeyMintServerPtr = arc.mojom.keymint.KeyMintServerRemote;
arc.mojom.keymint.KeyMintServerRequest = arc.mojom.keymint.KeyMintServerPendingReceiver;

