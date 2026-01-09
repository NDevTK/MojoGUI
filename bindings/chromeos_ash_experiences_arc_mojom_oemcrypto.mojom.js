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
arc.mojom.OemCryptoSecureBufferSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoSecureBuffer',
      packedSize: 24,
      fields: [
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false },
        { name: 'max_length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OemCryptoSubstring
arc.mojom.OemCryptoSubstringSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoSubstring',
      packedSize: 16,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OemCryptoKeyObjectV14
arc.mojom.OemCryptoKeyObjectV14Spec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoKeyObjectV14',
      packedSize: 48,
      fields: [
        { name: 'key_id_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'key_id_length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'key_data_iv_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'key_data_offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'key_data_length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'key_control_iv_offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'key_control_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'cipher_mode', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.OemCryptoCipherModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OemCryptoKeyObject
arc.mojom.OemCryptoKeyObjectSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoKeyObject',
      packedSize: 48,
      fields: [
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false },
        { name: 'key_data_iv', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false },
        { name: 'key_data', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false },
        { name: 'key_control_iv', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false },
        { name: 'key_control', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OemCryptoEntitledContentKeyObjectV14
arc.mojom.OemCryptoEntitledContentKeyObjectV14Spec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoEntitledContentKeyObjectV14',
      packedSize: 40,
      fields: [
        { name: 'entitlement_key_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'content_key_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'content_key_data_iv', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'content_key_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OemCryptoEntitledContentKeyObject
arc.mojom.OemCryptoEntitledContentKeyObjectSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoEntitledContentKeyObject',
      packedSize: 40,
      fields: [
        { name: 'entitlement_key_id', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false },
        { name: 'content_key_id', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false },
        { name: 'content_key_data_iv', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false },
        { name: 'content_key_data', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OemCryptoKeyRefreshObjectV14
arc.mojom.OemCryptoKeyRefreshObjectV14Spec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoKeyRefreshObjectV14',
      packedSize: 32,
      fields: [
        { name: 'key_id_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'key_id_length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'has_key_control_iv', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'key_control_iv_offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'key_control_offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OemCryptoKeyRefreshObject
arc.mojom.OemCryptoKeyRefreshObjectSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoKeyRefreshObject',
      packedSize: 32,
      fields: [
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false },
        { name: 'key_control_iv', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false },
        { name: 'key_control', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OemCryptoCencEncryptPatternDesc
arc.mojom.OemCryptoCencEncryptPatternDescSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoCencEncryptPatternDesc',
      packedSize: 24,
      fields: [
        { name: 'encrypt', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'skip', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OemCryptoPstReport
arc.mojom.OemCryptoPstReportSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoPstReport',
      packedSize: 48,
      fields: [
        { name: 'signature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'clock_security_level', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'seconds_since_license_received', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'seconds_since_first_decrypt', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'seconds_since_last_decrypt', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SubSampleDescription
arc.mojom.SubSampleDescriptionSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SubSampleDescription',
      packedSize: 24,
      fields: [
        { name: 'num_bytes_clear', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'num_bytes_encrypted', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'subsample_flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'block_offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: OemCryptoService
arc.mojom.OemCryptoService = {};

arc.mojom.OemCryptoServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OemCryptoServiceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OemCryptoService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OemCryptoServicePendingReceiver,
      handle);
    this.$ = new arc.mojom.OemCryptoServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.OemCryptoServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.OemCryptoService.getRemote = function() {
  let remote = new arc.mojom.OemCryptoServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OemCryptoService',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.OemCryptoServicePtr = arc.mojom.OemCryptoServiceRemote;
arc.mojom.OemCryptoServiceRequest = arc.mojom.OemCryptoServicePendingReceiver;


// Interface: OemCryptoHost
arc.mojom.OemCryptoHost = {};

arc.mojom.OemCryptoHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OemCryptoHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OemCryptoHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OemCryptoHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.OemCryptoHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.OemCryptoHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.OemCryptoHost.getRemote = function() {
  let remote = new arc.mojom.OemCryptoHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OemCryptoHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.OemCryptoHostPtr = arc.mojom.OemCryptoHostRemote;
arc.mojom.OemCryptoHostRequest = arc.mojom.OemCryptoHostPendingReceiver;


// Interface: OemCryptoInstance
arc.mojom.OemCryptoInstance = {};

arc.mojom.OemCryptoInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OemCryptoInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OemCryptoInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OemCryptoInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.OemCryptoInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.OemCryptoInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.OemCryptoInstance.getRemote = function() {
  let remote = new arc.mojom.OemCryptoInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OemCryptoInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.OemCryptoInstancePtr = arc.mojom.OemCryptoInstanceRemote;
arc.mojom.OemCryptoInstanceRequest = arc.mojom.OemCryptoInstancePendingReceiver;

