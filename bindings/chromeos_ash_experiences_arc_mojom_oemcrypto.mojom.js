// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/oemcrypto.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: OemCryptoResult
arc.mojom.OemCryptoResult = {
  SUCCESS: 0,
  ERROR_INIT_FAILED: 1,
  ERROR_TERMINATE_FAILED: 2,
  ERROR_OPEN_FAILURE: 3,
  ERROR_CLOSE_FAILURE: 4,
  ERROR_ENTER_SECURE_PLAYBACK_FAILED: 5,
  ERROR_EXIT_SECURE_PLAYBACK_FAILED: 6,
  ERROR_SHORT_BUFFER: 7,
  ERROR_NO_DEVICE_KEY: 8,
  ERROR_NO_ASSET_KEY: 9,
  ERROR_KEYBOX_INVALID: 10,
  ERROR_NO_KEYDATA: 11,
  ERROR_NO_CW: 12,
  ERROR_DECRYPT_FAILED: 13,
  ERROR_WRITE_KEYBOX: 14,
  ERROR_WRAP_KEYBOX: 15,
  ERROR_BAD_MAGIC: 16,
  ERROR_BAD_CRC: 17,
  ERROR_NO_DEVICEID: 18,
  ERROR_RNG_FAILED: 19,
  ERROR_RNG_NOT_SUPPORTED: 20,
  ERROR_SETUP: 21,
  ERROR_OPEN_SESSION_FAILED: 22,
  ERROR_CLOSE_SESSION_FAILED: 23,
  ERROR_INVALID_SESSIONS: 24,
  ERROR_NOT_IMPLEMENTED: 25,
  ERROR_NO_CONTENT_KEY: 26,
  ERROR_CONTROL_INVALID: 27,
  ERROR_UNKNOWN_FAILURE: 28,
  ERROR_INVALID_CONTEXT: 29,
  ERROR_SIGNATURE_FAILURE: 30,
  ERROR_TOO_MANY_SESSIONS: 31,
  ERROR_INVALID_NONCE: 32,
  ERROR_TOO_MANY_KEYS: 33,
  ERROR_DEVICE_NOT_RSA_PROVISIONED: 34,
  ERROR_INVALID_RSA_KEY: 35,
  ERROR_KEY_EXPIRED: 36,
  ERROR_INSUFFICIENT_RESOURCES: 37,
  ERROR_INSUFFICIENT_HDCP: 38,
  ERROR_BUFFER_TOO_LARGE: 39,
};

// Enum: OemCryptoCipherMode
arc.mojom.OemCryptoCipherMode = {
  CIPHER_MODE_CTR: 0,
  CIPHER_MODE_CBC: 1,
};

// Enum: OemCryptoLicenseType
arc.mojom.OemCryptoLicenseType = {
  CONTENT_LICENSE: 0,
  ENTITLEMENT_LICENSE: 1,
};

// Enum: OemCryptoAlgorithm
arc.mojom.OemCryptoAlgorithm = {
  AES_CBC_128_NO_PADDING: 0,
  HMAC_SHA265: 1,
};

// Enum: OemCryptoUsageEntryStatus
arc.mojom.OemCryptoUsageEntryStatus = {
  UNUSED: 0,
  ACTIVE: 1,
  INACTIVE: 2,
  INACTIVE_USED: 3,
  INACTIVE_UNUSED: 4,
};

// Enum: OemCryptoRsaPaddingScheme
arc.mojom.OemCryptoRsaPaddingScheme = {
  SIGN_RSASSA_PSS: 0,
  SIGN_PKCS1_BLOCK1: 1,
};

// Enum: OemCryptoHdcpCapability
arc.mojom.OemCryptoHdcpCapability = {
  HDCP_NONE: 0,
  HDCP_V1: 1,
  HDCP_V2: 2,
  HDCP_V2_1: 3,
  HDCP_V2_2: 4,
  HDCP_V2_3: 5,
  HDCP_NO_DIGITAL_OUTPUT: 6,
};

// Enum: OemCryptoProvisioningMethod
arc.mojom.OemCryptoProvisioningMethod = {
  PROVISIONING_ERROR: 0,
  DRM_CERTIFICATE: 1,
  KEYBOX: 2,
  OEM_CERTIFICATE: 3,
};

// Enum: OemCryptoPrivateKey
arc.mojom.OemCryptoPrivateKey = {
  RSA_PRIVATE_KEY: 0,
  ECC_PRIVATE_KEY: 1,
};

// Struct: OemCryptoSecureBuffer
arc.mojom.OemCryptoSecureBuffer = class {
  constructor(values = {}) {
    this.offset = values.offset !== undefined ? values.offset : 0;
  }
};

// Struct: OemCryptoSubstring
arc.mojom.OemCryptoSubstring = class {
  constructor(values = {}) {
    this.length = values.length !== undefined ? values.length : 0;
  }
};

// Struct: OemCryptoKeyObjectV14
arc.mojom.OemCryptoKeyObjectV14 = class {
  constructor(values = {}) {
    this.cipher_mode = values.cipher_mode !== undefined ? values.cipher_mode : 0;
  }
};

// Struct: OemCryptoKeyObject
arc.mojom.OemCryptoKeyObject = class {
  constructor(values = {}) {
    this.key_control = values.key_control !== undefined ? values.key_control : "";
  }
};

// Struct: OemCryptoEntitledContentKeyObjectV14
arc.mojom.OemCryptoEntitledContentKeyObjectV14 = class {
  constructor(values = {}) {
    this.content_key_data = values.content_key_data !== undefined ? values.content_key_data : 0;
  }
};

// Struct: OemCryptoEntitledContentKeyObject
arc.mojom.OemCryptoEntitledContentKeyObject = class {
  constructor(values = {}) {
    this.content_key_data = values.content_key_data !== undefined ? values.content_key_data : "";
  }
};

// Struct: OemCryptoKeyRefreshObjectV14
arc.mojom.OemCryptoKeyRefreshObjectV14 = class {
  constructor(values = {}) {
    this.key_control_offset = values.key_control_offset !== undefined ? values.key_control_offset : 0;
  }
};

// Struct: OemCryptoKeyRefreshObject
arc.mojom.OemCryptoKeyRefreshObject = class {
  constructor(values = {}) {
    this.key_control = values.key_control !== undefined ? values.key_control : "";
  }
};

// Struct: OemCryptoCencEncryptPatternDesc
arc.mojom.OemCryptoCencEncryptPatternDesc = class {
  constructor(values = {}) {
    this.offset = values.offset !== undefined ? values.offset : 0;
  }
};

// Struct: OemCryptoPstReport
arc.mojom.OemCryptoPstReport = class {
  constructor(values = {}) {
    this.seconds_since_last_decrypt = values.seconds_since_last_decrypt !== undefined ? values.seconds_since_last_decrypt : 0;
  }
};

// Struct: SubSampleDescription
arc.mojom.SubSampleDescription = class {
  constructor(values = {}) {
    this.block_offset = values.block_offset !== undefined ? values.block_offset : 0;
  }
};

// Interface: OemCryptoService
arc.mojom.OemCryptoServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.OemCryptoService';
  }

};

arc.mojom.OemCryptoServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OemCryptoHost
arc.mojom.OemCryptoHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.OemCryptoHost';
  }

};

arc.mojom.OemCryptoHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OemCryptoInstance
arc.mojom.OemCryptoInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.OemCryptoInstance';
  }

};

arc.mojom.OemCryptoInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
