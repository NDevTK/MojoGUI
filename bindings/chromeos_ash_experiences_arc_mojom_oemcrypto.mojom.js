// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/oemcrypto.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: OemCryptoResult
arc.mojom.mojom.OemCryptoResult = {
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
arc.mojom.mojom.OemCryptoResultSpec = { $: mojo.internal.Enum() };

// Enum: OemCryptoCipherMode
arc.mojom.mojom.OemCryptoCipherMode = {
  CIPHER_MODE_CTR: 0,
  CIPHER_MODE_CBC: 1,
};
arc.mojom.mojom.OemCryptoCipherModeSpec = { $: mojo.internal.Enum() };

// Enum: OemCryptoLicenseType
arc.mojom.mojom.OemCryptoLicenseType = {
  CONTENT_LICENSE: 0,
  ENTITLEMENT_LICENSE: 1,
};
arc.mojom.mojom.OemCryptoLicenseTypeSpec = { $: mojo.internal.Enum() };

// Enum: OemCryptoAlgorithm
arc.mojom.mojom.OemCryptoAlgorithm = {
  AES_CBC_128_NO_PADDING: 0,
  HMAC_SHA265: 1,
};
arc.mojom.mojom.OemCryptoAlgorithmSpec = { $: mojo.internal.Enum() };

// Enum: OemCryptoUsageEntryStatus
arc.mojom.mojom.OemCryptoUsageEntryStatus = {
  UNUSED: 0,
  ACTIVE: 1,
  INACTIVE: 2,
  INACTIVE_USED: 3,
  INACTIVE_UNUSED: 4,
};
arc.mojom.mojom.OemCryptoUsageEntryStatusSpec = { $: mojo.internal.Enum() };

// Enum: OemCryptoRsaPaddingScheme
arc.mojom.mojom.OemCryptoRsaPaddingScheme = {
  SIGN_RSASSA_PSS: 0,
  SIGN_PKCS1_BLOCK1: 1,
};
arc.mojom.mojom.OemCryptoRsaPaddingSchemeSpec = { $: mojo.internal.Enum() };

// Enum: OemCryptoHdcpCapability
arc.mojom.mojom.OemCryptoHdcpCapability = {
  HDCP_NONE: 0,
  HDCP_V1: 1,
  HDCP_V2: 2,
  HDCP_V2_1: 3,
  HDCP_V2_2: 4,
  HDCP_V2_3: 5,
  HDCP_NO_DIGITAL_OUTPUT: 6,
};
arc.mojom.mojom.OemCryptoHdcpCapabilitySpec = { $: mojo.internal.Enum() };

// Enum: OemCryptoProvisioningMethod
arc.mojom.mojom.OemCryptoProvisioningMethod = {
  PROVISIONING_ERROR: 0,
  DRM_CERTIFICATE: 1,
  KEYBOX: 2,
  OEM_CERTIFICATE: 3,
};
arc.mojom.mojom.OemCryptoProvisioningMethodSpec = { $: mojo.internal.Enum() };

// Enum: OemCryptoPrivateKey
arc.mojom.mojom.OemCryptoPrivateKey = {
  RSA_PRIVATE_KEY: 0,
  ECC_PRIVATE_KEY: 1,
};
arc.mojom.mojom.OemCryptoPrivateKeySpec = { $: mojo.internal.Enum() };

// Struct: OemCryptoSecureBuffer
arc.mojom.mojom.OemCryptoSecureBufferSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoSecureBuffer',
      packedSize: 24,
      fields: [
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'max_length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OemCryptoSubstring
arc.mojom.mojom.OemCryptoSubstringSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoSubstring',
      packedSize: 16,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: OemCryptoKeyObjectV14
arc.mojom.mojom.OemCryptoKeyObjectV14Spec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoKeyObjectV14',
      packedSize: 40,
      fields: [
        { name: 'key_id_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_id_length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_data_iv_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_data_offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_data_length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_control_iv_offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_control_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'cipher_mode', packedOffset: 28, packedBitOffset: 0, type: arc.mojom.OemCryptoCipherModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: OemCryptoKeyObject
arc.mojom.mojom.OemCryptoKeyObjectSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoKeyObject',
      packedSize: 48,
      fields: [
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
        { name: 'key_data_iv', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
        { name: 'key_data', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
        { name: 'key_control_iv', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
        { name: 'key_control', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: OemCryptoEntitledContentKeyObjectV14
arc.mojom.mojom.OemCryptoEntitledContentKeyObjectV14Spec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoEntitledContentKeyObjectV14',
      packedSize: 40,
      fields: [
        { name: 'entitlement_key_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'content_key_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'content_key_data_iv', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'content_key_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: OemCryptoEntitledContentKeyObject
arc.mojom.mojom.OemCryptoEntitledContentKeyObjectSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoEntitledContentKeyObject',
      packedSize: 40,
      fields: [
        { name: 'entitlement_key_id', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
        { name: 'content_key_id', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
        { name: 'content_key_data_iv', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
        { name: 'content_key_data', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: OemCryptoKeyRefreshObjectV14
arc.mojom.mojom.OemCryptoKeyRefreshObjectV14Spec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoKeyRefreshObjectV14',
      packedSize: 32,
      fields: [
        { name: 'key_id_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_id_length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'has_key_control_iv', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'key_control_iv_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_control_offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: OemCryptoKeyRefreshObject
arc.mojom.mojom.OemCryptoKeyRefreshObjectSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoKeyRefreshObject',
      packedSize: 32,
      fields: [
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
        { name: 'key_control_iv', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
        { name: 'key_control', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: OemCryptoCencEncryptPatternDesc
arc.mojom.mojom.OemCryptoCencEncryptPatternDescSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoCencEncryptPatternDesc',
      packedSize: 24,
      fields: [
        { name: 'encrypt', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'skip', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OemCryptoPstReport
arc.mojom.mojom.OemCryptoPstReportSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoPstReport',
      packedSize: 48,
      fields: [
        { name: 'signature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'clock_security_level', packedOffset: 33, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'seconds_since_license_received', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'seconds_since_first_decrypt', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'seconds_since_last_decrypt', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: SubSampleDescription
arc.mojom.mojom.SubSampleDescriptionSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SubSampleDescription',
      packedSize: 24,
      fields: [
        { name: 'num_bytes_clear', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'num_bytes_encrypted', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'subsample_flags', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'block_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: OemCryptoService
arc.mojom.mojom.OemCryptoService = {};

arc.mojom.mojom.OemCryptoServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.OemCryptoServiceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OemCryptoService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.OemCryptoServicePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.OemCryptoServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.OemCryptoServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initializeDeprecated() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.OemCryptoService_InitializeDeprecated_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_InitializeDeprecated_ResponseParamsSpec,
      []);
  }

  initialize(oemcrypto_version) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      arc.mojom.mojom.OemCryptoService_Initialize_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_Initialize_ResponseParamsSpec,
      [oemcrypto_version]);
  }

  terminate() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.OemCryptoService_Terminate_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_Terminate_ResponseParamsSpec,
      []);
  }

  openSession() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.OemCryptoService_OpenSession_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_OpenSession_ResponseParamsSpec,
      []);
  }

  closeSession(session) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.OemCryptoService_CloseSession_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_CloseSession_ResponseParamsSpec,
      [session]);
  }

  generateDerivedKeys(session, mac_key_context, enc_key_context) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.OemCryptoService_GenerateDerivedKeys_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GenerateDerivedKeys_ResponseParamsSpec,
      [session, mac_key_context, enc_key_context]);
  }

  generateNonce(session) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.mojom.OemCryptoService_GenerateNonce_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GenerateNonce_ResponseParamsSpec,
      [session]);
  }

  generateSignature(session, message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.mojom.OemCryptoService_GenerateSignature_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GenerateSignature_ResponseParamsSpec,
      [session, message]);
  }

  loadKeysV11OrV12(session, message, signature, has_enc_mac_keys, enc_mac_keys_iv_offset, enc_mac_keys_offset, key_array, pst_offset, pst_length) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadKeysV11OrV12_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParamsSpec,
      [session, message, signature, has_enc_mac_keys, enc_mac_keys_iv_offset, enc_mac_keys_offset, key_array, pst_offset, pst_length]);
  }

  refreshKeysV14(session, message, signature, key_array) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.mojom.OemCryptoService_RefreshKeysV14_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_RefreshKeysV14_ResponseParamsSpec,
      [session, message, signature, key_array]);
  }

  queryKeyControl(session, key_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.mojom.OemCryptoService_QueryKeyControl_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_QueryKeyControl_ResponseParamsSpec,
      [session, key_id]);
  }

  selectKeyV13(session, key_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.mojom.OemCryptoService_SelectKeyV13_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_SelectKeyV13_ResponseParamsSpec,
      [session, key_id]);
  }

  decryptCencV15(session, data, is_encrypted, iv, block_offset, secure_buffer, pattern) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.mojom.OemCryptoService_DecryptCencV15_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_DecryptCencV15_ResponseParamsSpec,
      [session, data, is_encrypted, iv, block_offset, secure_buffer, pattern]);
  }

  genericEncrypt(session, data, iv, algorithm) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.mojom.OemCryptoService_GenericEncrypt_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GenericEncrypt_ResponseParamsSpec,
      [session, data, iv, algorithm]);
  }

  genericDecrypt(session, data, iv, algorithm) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.mojom.OemCryptoService_GenericDecrypt_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GenericDecrypt_ResponseParamsSpec,
      [session, data, iv, algorithm]);
  }

  genericSign(session, data, algorithm) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.mojom.OemCryptoService_GenericSign_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GenericSign_ResponseParamsSpec,
      [session, data, algorithm]);
  }

  genericVerify(session, data, algorithm, signature) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.mojom.OemCryptoService_GenericVerify_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GenericVerify_ResponseParamsSpec,
      [session, data, algorithm, signature]);
  }

  copyBufferV14(data, out_buffer) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.mojom.OemCryptoService_CopyBufferV14_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_CopyBufferV14_ResponseParamsSpec,
      [data, out_buffer]);
  }

  loadTestKeyboxV13() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadTestKeyboxV13_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadTestKeyboxV13_ResponseParamsSpec,
      []);
  }

  isRootKeyCertificateValid() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.mojom.OemCryptoService_IsRootKeyCertificateValid_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_IsRootKeyCertificateValid_ResponseParamsSpec,
      []);
  }

  getDeviceId() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.mojom.OemCryptoService_GetDeviceId_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GetDeviceId_ResponseParamsSpec,
      []);
  }

  getKeyData() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.mojom.OemCryptoService_GetKeyData_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GetKeyData_ResponseParamsSpec,
      []);
  }

  getRandom(length) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.mojom.OemCryptoService_GetRandom_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GetRandom_ResponseParamsSpec,
      [length]);
  }

  getNumberOfOpenSessions() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.mojom.OemCryptoService_GetNumberOfOpenSessions_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GetNumberOfOpenSessions_ResponseParamsSpec,
      []);
  }

  getMaxNumberOfSessions() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.mojom.OemCryptoService_GetMaxNumberOfSessions_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GetMaxNumberOfSessions_ResponseParamsSpec,
      []);
  }

  rewrapDeviceRsaKey(session, message, signature, nonce_offset, enc_rsa_key_offset, enc_rsa_key_length, enc_rsa_key_iv_offset) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.mojom.OemCryptoService_RewrapDeviceRsaKey_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_RewrapDeviceRsaKey_ResponseParamsSpec,
      [session, message, signature, nonce_offset, enc_rsa_key_offset, enc_rsa_key_length, enc_rsa_key_iv_offset]);
  }

  loadDeviceRsaKey(session, wrapped_rsa_key) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadDeviceRsaKey_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParamsSpec,
      [session, wrapped_rsa_key]);
  }

  generateRsaSignature(session, message, padding_scheme) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      arc.mojom.mojom.OemCryptoService_GenerateRsaSignature_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GenerateRsaSignature_ResponseParamsSpec,
      [session, message, padding_scheme]);
  }

  deriveKeysFromSessionKey(session, enc_session_key, mac_key_context, enc_key_context) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      arc.mojom.mojom.OemCryptoService_DeriveKeysFromSessionKey_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_DeriveKeysFromSessionKey_ResponseParamsSpec,
      [session, enc_session_key, mac_key_context, enc_key_context]);
  }

  securityPatchLevel() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      arc.mojom.mojom.OemCryptoService_SecurityPatchLevel_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_SecurityPatchLevel_ResponseParamsSpec,
      []);
  }

  getHdcpCapability() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      arc.mojom.mojom.OemCryptoService_GetHdcpCapability_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GetHdcpCapability_ResponseParamsSpec,
      []);
  }

  updateUsageTable() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      arc.mojom.mojom.OemCryptoService_UpdateUsageTable_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_UpdateUsageTable_ResponseParamsSpec,
      []);
  }

  deactivateUsageEntryV12(pst) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      arc.mojom.mojom.OemCryptoService_DeactivateUsageEntryV12_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_DeactivateUsageEntryV12_ResponseParamsSpec,
      [pst]);
  }

  reportUsage(session, pst) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      arc.mojom.mojom.OemCryptoService_ReportUsage_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_ReportUsage_ResponseParamsSpec,
      [session, pst]);
  }

  deleteUsageEntry(session, pst_offset, pst_length, message, signature) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      arc.mojom.mojom.OemCryptoService_DeleteUsageEntry_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_DeleteUsageEntry_ResponseParamsSpec,
      [session, pst_offset, pst_length, message, signature]);
  }

  forceDeleteUsageEntry(pst) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      arc.mojom.mojom.OemCryptoService_ForceDeleteUsageEntry_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_ForceDeleteUsageEntry_ResponseParamsSpec,
      [pst]);
  }

  deleteOldUsageTable() {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      arc.mojom.mojom.OemCryptoService_DeleteOldUsageTable_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_DeleteOldUsageTable_ResponseParamsSpec,
      []);
  }

  getProvisioningMethod() {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      arc.mojom.mojom.OemCryptoService_GetProvisioningMethod_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GetProvisioningMethod_ResponseParamsSpec,
      []);
  }

  supportedCertificates() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      arc.mojom.mojom.OemCryptoService_SupportedCertificates_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_SupportedCertificates_ResponseParamsSpec,
      []);
  }

  isSrmUpdateSupported() {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      arc.mojom.mojom.OemCryptoService_IsSrmUpdateSupported_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_IsSrmUpdateSupported_ResponseParamsSpec,
      []);
  }

  getCurrentSrmVersion() {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      arc.mojom.mojom.OemCryptoService_GetCurrentSrmVersion_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GetCurrentSrmVersion_ResponseParamsSpec,
      []);
  }

  loadSrm(buffer) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadSrm_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadSrm_ResponseParamsSpec,
      [buffer]);
  }

  removeSrm() {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      arc.mojom.mojom.OemCryptoService_RemoveSrm_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_RemoveSrm_ResponseParamsSpec,
      []);
  }

  createUsageTableHeader(avail_header_length) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      arc.mojom.mojom.OemCryptoService_CreateUsageTableHeader_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_CreateUsageTableHeader_ResponseParamsSpec,
      [avail_header_length]);
  }

  loadUsageTableHeader(buffer) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadUsageTableHeader_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadUsageTableHeader_ResponseParamsSpec,
      [buffer]);
  }

  createNewUsageEntry(session) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      arc.mojom.mojom.OemCryptoService_CreateNewUsageEntry_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_CreateNewUsageEntry_ResponseParamsSpec,
      [session]);
  }

  loadUsageEntry(session, index, buffer) {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadUsageEntry_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadUsageEntry_ResponseParamsSpec,
      [session, index, buffer]);
  }

  updateUsageEntry(session, avail_header_length, avail_entry_length) {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      arc.mojom.mojom.OemCryptoService_UpdateUsageEntry_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_UpdateUsageEntry_ResponseParamsSpec,
      [session, avail_header_length, avail_entry_length]);
  }

  deactivateUsageEntry(session, pst) {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      arc.mojom.mojom.OemCryptoService_DeactivateUsageEntry_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_DeactivateUsageEntry_ResponseParamsSpec,
      [session, pst]);
  }

  shrinkUsageTableHeader(new_entry_count, avail_header_length) {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      arc.mojom.mojom.OemCryptoService_ShrinkUsageTableHeader_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_ShrinkUsageTableHeader_ResponseParamsSpec,
      [new_entry_count, avail_header_length]);
  }

  moveEntry(session, new_index) {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      arc.mojom.mojom.OemCryptoService_MoveEntry_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_MoveEntry_ResponseParamsSpec,
      [session, new_index]);
  }

  copyOldUsageEntry(session, pst) {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      arc.mojom.mojom.OemCryptoService_CopyOldUsageEntry_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_CopyOldUsageEntry_ResponseParamsSpec,
      [session, pst]);
  }

  createOldUsageEntry(time_since_license_received, time_since_first_decrypt, time_since_last_decrypt, status, server_mac_key, client_mac_key, pst) {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      arc.mojom.mojom.OemCryptoService_CreateOldUsageEntry_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_CreateOldUsageEntry_ResponseParamsSpec,
      [time_since_license_received, time_since_first_decrypt, time_since_last_decrypt, status, server_mac_key, client_mac_key, pst]);
  }

  getAnalogOutputFlags() {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
      arc.mojom.mojom.OemCryptoService_GetAnalogOutputFlags_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GetAnalogOutputFlags_ResponseParamsSpec,
      []);
  }

  loadTestKeybox(buffer) {
    // Ordinal: 54
    return this.proxy.sendMessage(
      54,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadTestKeybox_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadTestKeybox_ResponseParamsSpec,
      [buffer]);
  }

  loadEntitledContentKeysV14(session, key_array) {
    // Ordinal: 55
    return this.proxy.sendMessage(
      55,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadEntitledContentKeysV14_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParamsSpec,
      [session, key_array]);
  }

  selectKey(session, content_key_id, cipher_mode) {
    // Ordinal: 56
    return this.proxy.sendMessage(
      56,  // ordinal
      arc.mojom.mojom.OemCryptoService_SelectKey_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_SelectKey_ResponseParamsSpec,
      [session, content_key_id, cipher_mode]);
  }

  loadKeysV14(session, message, signature, has_enc_mac_keys, enc_mac_keys_iv_offset, enc_mac_keys_offset, key_array, pst_offset, pst_length, srm_requirement, license_type) {
    // Ordinal: 57
    return this.proxy.sendMessage(
      57,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadKeysV14_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadKeysV14_ResponseParamsSpec,
      [session, message, signature, has_enc_mac_keys, enc_mac_keys_iv_offset, enc_mac_keys_offset, key_array, pst_offset, pst_length, srm_requirement, license_type]);
  }

  loadKeys(session, message, signature, enc_mac_keys_iv, enc_mac_keys, key_array, pst, srm_restriction_data, license_type) {
    // Ordinal: 58
    return this.proxy.sendMessage(
      58,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadKeys_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadKeys_ResponseParamsSpec,
      [session, message, signature, enc_mac_keys_iv, enc_mac_keys, key_array, pst, srm_restriction_data, license_type]);
  }

  resourceRatingTier() {
    // Ordinal: 59
    return this.proxy.sendMessage(
      59,  // ordinal
      arc.mojom.mojom.OemCryptoService_ResourceRatingTier_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_ResourceRatingTier_ResponseParamsSpec,
      []);
  }

  buildInformation() {
    // Ordinal: 60
    return this.proxy.sendMessage(
      60,  // ordinal
      arc.mojom.mojom.OemCryptoService_BuildInformation_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_BuildInformation_ResponseParamsSpec,
      []);
  }

  refreshKeys(session, message, signature, key_array) {
    // Ordinal: 61
    return this.proxy.sendMessage(
      61,  // ordinal
      arc.mojom.mojom.OemCryptoService_RefreshKeys_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_RefreshKeys_ResponseParamsSpec,
      [session, message, signature, key_array]);
  }

  loadEntitledContentKeys(session, message, key_array) {
    // Ordinal: 62
    return this.proxy.sendMessage(
      62,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadEntitledContentKeys_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadEntitledContentKeys_ResponseParamsSpec,
      [session, message, key_array]);
  }

  getOemPublicCertificate() {
    // Ordinal: 63
    return this.proxy.sendMessage(
      63,  // ordinal
      arc.mojom.mojom.OemCryptoService_GetOemPublicCertificate_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_GetOemPublicCertificate_ResponseParamsSpec,
      []);
  }

  maximumUsageTableHeaderSize() {
    // Ordinal: 64
    return this.proxy.sendMessage(
      64,  // ordinal
      arc.mojom.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ResponseParamsSpec,
      []);
  }

  isAntiRollbackHwPresent() {
    // Ordinal: 65
    return this.proxy.sendMessage(
      65,  // ordinal
      arc.mojom.mojom.OemCryptoService_IsAntiRollbackHwPresent_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_IsAntiRollbackHwPresent_ResponseParamsSpec,
      []);
  }

  minorApiVersion() {
    // Ordinal: 66
    return this.proxy.sendMessage(
      66,  // ordinal
      arc.mojom.mojom.OemCryptoService_MinorApiVersion_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_MinorApiVersion_ResponseParamsSpec,
      []);
  }

  prepAndSignLicenseRequest(session, message, core_message_size, avail_signature_size) {
    // Ordinal: 67
    return this.proxy.sendMessage(
      67,  // ordinal
      arc.mojom.mojom.OemCryptoService_PrepAndSignLicenseRequest_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParamsSpec,
      [session, message, core_message_size, avail_signature_size]);
  }

  prepAndSignRenewalRequest(session, message, core_message_size, avail_signature_size) {
    // Ordinal: 68
    return this.proxy.sendMessage(
      68,  // ordinal
      arc.mojom.mojom.OemCryptoService_PrepAndSignRenewalRequest_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParamsSpec,
      [session, message, core_message_size, avail_signature_size]);
  }

  prepAndSignProvisioningRequest(session, message, core_message_size, avail_signature_size) {
    // Ordinal: 69
    return this.proxy.sendMessage(
      69,  // ordinal
      arc.mojom.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParamsSpec,
      [session, message, core_message_size, avail_signature_size]);
  }

  loadLicense(session, message, core_message_length, signature) {
    // Ordinal: 70
    return this.proxy.sendMessage(
      70,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadLicense_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadLicense_ResponseParamsSpec,
      [session, message, core_message_length, signature]);
  }

  loadRenewal(session, message, core_message_length, signature) {
    // Ordinal: 71
    return this.proxy.sendMessage(
      71,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadRenewal_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadRenewal_ResponseParamsSpec,
      [session, message, core_message_length, signature]);
  }

  loadProvisioning(session, message, core_message_length, signature, avail_wrapped_private_key_size) {
    // Ordinal: 72
    return this.proxy.sendMessage(
      72,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadProvisioning_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadProvisioning_ResponseParamsSpec,
      [session, message, core_message_length, signature, avail_wrapped_private_key_size]);
  }

  loadOemPrivateKey(session) {
    // Ordinal: 73
    return this.proxy.sendMessage(
      73,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadOemPrivateKey_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadOemPrivateKey_ResponseParamsSpec,
      [session]);
  }

  loadDrmPrivateKey(session, key_type, wrapped_private_key) {
    // Ordinal: 74
    return this.proxy.sendMessage(
      74,  // ordinal
      arc.mojom.mojom.OemCryptoService_LoadDrmPrivateKey_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParamsSpec,
      [session, key_type, wrapped_private_key]);
  }

  decryptCenc(session, data, iv, sub_samples, pattern, secure_buffer) {
    // Ordinal: 75
    return this.proxy.sendMessage(
      75,  // ordinal
      arc.mojom.mojom.OemCryptoService_DecryptCenc_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_DecryptCenc_ResponseParamsSpec,
      [session, data, iv, sub_samples, pattern, secure_buffer]);
  }

  copyBuffer(session, data, out_buffer, subsample_flags) {
    // Ordinal: 76
    return this.proxy.sendMessage(
      76,  // ordinal
      arc.mojom.mojom.OemCryptoService_CopyBuffer_ParamsSpec,
      arc.mojom.mojom.OemCryptoService_CopyBuffer_ResponseParamsSpec,
      [session, data, out_buffer, subsample_flags]);
  }

};

arc.mojom.mojom.OemCryptoService.getRemote = function() {
  let remote = new arc.mojom.mojom.OemCryptoServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OemCryptoService',
    'context');
  return remote.$;
};

// ParamsSpec for InitializeDeprecated
arc.mojom.mojom.OemCryptoService_InitializeDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.InitializeDeprecated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_InitializeDeprecated_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.InitializeDeprecated_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Initialize
arc.mojom.mojom.OemCryptoService_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.Initialize_Params',
      packedSize: 16,
      fields: [
        { name: 'oemcrypto_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.Initialize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Terminate
arc.mojom.mojom.OemCryptoService_Terminate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.Terminate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_Terminate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.Terminate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenSession
arc.mojom.mojom.OemCryptoService_OpenSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.OpenSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_OpenSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.OpenSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'session', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseSession
arc.mojom.mojom.OemCryptoService_CloseSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CloseSession_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_CloseSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CloseSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GenerateDerivedKeys
arc.mojom.mojom.OemCryptoService_GenerateDerivedKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenerateDerivedKeys_Params',
      packedSize: 32,
      fields: [
        { name: 'session', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'mac_key_context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'enc_key_context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GenerateDerivedKeys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenerateDerivedKeys_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GenerateNonce
arc.mojom.mojom.OemCryptoService_GenerateNonce_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenerateNonce_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GenerateNonce_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenerateNonce_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'nonce', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GenerateSignature
arc.mojom.mojom.OemCryptoService_GenerateSignature_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenerateSignature_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GenerateSignature_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenerateSignature_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for LoadKeysV11OrV12
arc.mojom.mojom.OemCryptoService_LoadKeysV11OrV12_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadKeysV11OrV12_Params',
      packedSize: 56,
      fields: [
        { name: 'session', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'has_enc_mac_keys', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enc_mac_keys_iv_offset', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'enc_mac_keys_offset', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_array', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.OemCryptoKeyObjectV14Spec, false), nullable: false, minVersion: 0 },
        { name: 'pst_offset', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pst_length', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadKeysV11OrV12_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RefreshKeysV14
arc.mojom.mojom.OemCryptoService_RefreshKeysV14_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.RefreshKeysV14_Params',
      packedSize: 40,
      fields: [
        { name: 'session', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'key_array', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.OemCryptoKeyRefreshObjectV14Spec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_RefreshKeysV14_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.RefreshKeysV14_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for QueryKeyControl
arc.mojom.mojom.OemCryptoService_QueryKeyControl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.QueryKeyControl_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_QueryKeyControl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.QueryKeyControl_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'key_control_block', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SelectKeyV13
arc.mojom.mojom.OemCryptoService_SelectKeyV13_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.SelectKeyV13_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_SelectKeyV13_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.SelectKeyV13_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DecryptCencV15
arc.mojom.mojom.OemCryptoService_DecryptCencV15_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DecryptCencV15_Params',
      packedSize: 56,
      fields: [
        { name: 'session', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'is_encrypted', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'iv', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'block_offset', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'secure_buffer', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.OemCryptoSecureBufferSpec, nullable: true, minVersion: 0 },
        { name: 'pattern', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.OemCryptoCencEncryptPatternDescSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_DecryptCencV15_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DecryptCencV15_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'decrypted_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GenericEncrypt
arc.mojom.mojom.OemCryptoService_GenericEncrypt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenericEncrypt_Params',
      packedSize: 32,
      fields: [
        { name: 'session', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'iv', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'algorithm', packedOffset: 20, packedBitOffset: 0, type: arc.mojom.OemCryptoAlgorithmSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GenericEncrypt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenericEncrypt_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'encrypted_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GenericDecrypt
arc.mojom.mojom.OemCryptoService_GenericDecrypt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenericDecrypt_Params',
      packedSize: 32,
      fields: [
        { name: 'session', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'iv', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'algorithm', packedOffset: 20, packedBitOffset: 0, type: arc.mojom.OemCryptoAlgorithmSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GenericDecrypt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenericDecrypt_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'decrypted_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GenericSign
arc.mojom.mojom.OemCryptoService_GenericSign_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenericSign_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'algorithm', packedOffset: 12, packedBitOffset: 0, type: arc.mojom.OemCryptoAlgorithmSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GenericSign_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenericSign_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GenericVerify
arc.mojom.mojom.OemCryptoService_GenericVerify_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenericVerify_Params',
      packedSize: 32,
      fields: [
        { name: 'session', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'algorithm', packedOffset: 20, packedBitOffset: 0, type: arc.mojom.OemCryptoAlgorithmSpec, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GenericVerify_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenericVerify_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CopyBufferV14
arc.mojom.mojom.OemCryptoService_CopyBufferV14_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CopyBufferV14_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'out_buffer', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoSecureBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_CopyBufferV14_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CopyBufferV14_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadTestKeyboxV13
arc.mojom.mojom.OemCryptoService_LoadTestKeyboxV13_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadTestKeyboxV13_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadTestKeyboxV13_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadTestKeyboxV13_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsRootKeyCertificateValid
arc.mojom.mojom.OemCryptoService_IsRootKeyCertificateValid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.IsRootKeyCertificateValid_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_IsRootKeyCertificateValid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.IsRootKeyCertificateValid_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDeviceId
arc.mojom.mojom.OemCryptoService_GetDeviceId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetDeviceId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GetDeviceId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetDeviceId_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetKeyData
arc.mojom.mojom.OemCryptoService_GetKeyData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetKeyData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GetKeyData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetKeyData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'key_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetRandom
arc.mojom.mojom.OemCryptoService_GetRandom_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetRandom_Params',
      packedSize: 16,
      fields: [
        { name: 'length', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GetRandom_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetRandom_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetNumberOfOpenSessions
arc.mojom.mojom.OemCryptoService_GetNumberOfOpenSessions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetNumberOfOpenSessions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GetNumberOfOpenSessions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetNumberOfOpenSessions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'num', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMaxNumberOfSessions
arc.mojom.mojom.OemCryptoService_GetMaxNumberOfSessions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetMaxNumberOfSessions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GetMaxNumberOfSessions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetMaxNumberOfSessions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'max', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RewrapDeviceRsaKey
arc.mojom.mojom.OemCryptoService_RewrapDeviceRsaKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.RewrapDeviceRsaKey_Params',
      packedSize: 48,
      fields: [
        { name: 'session', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'nonce_offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'enc_rsa_key_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'enc_rsa_key_length', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'enc_rsa_key_iv_offset', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_RewrapDeviceRsaKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.RewrapDeviceRsaKey_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'wrapped_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for LoadDeviceRsaKey
arc.mojom.mojom.OemCryptoService_LoadDeviceRsaKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadDeviceRsaKey_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'wrapped_rsa_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadDeviceRsaKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GenerateRsaSignature
arc.mojom.mojom.OemCryptoService_GenerateRsaSignature_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenerateRsaSignature_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'padding_scheme', packedOffset: 12, packedBitOffset: 0, type: arc.mojom.OemCryptoRsaPaddingSchemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GenerateRsaSignature_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GenerateRsaSignature_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeriveKeysFromSessionKey
arc.mojom.mojom.OemCryptoService_DeriveKeysFromSessionKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DeriveKeysFromSessionKey_Params',
      packedSize: 40,
      fields: [
        { name: 'session', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'enc_session_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'mac_key_context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'enc_key_context', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_DeriveKeysFromSessionKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DeriveKeysFromSessionKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SecurityPatchLevel
arc.mojom.mojom.OemCryptoService_SecurityPatchLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.SecurityPatchLevel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_SecurityPatchLevel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.SecurityPatchLevel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'security_patch_level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetHdcpCapability
arc.mojom.mojom.OemCryptoService_GetHdcpCapability_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetHdcpCapability_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GetHdcpCapability_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetHdcpCapability_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'current', packedOffset: 4, packedBitOffset: 0, type: arc.mojom.OemCryptoHdcpCapabilitySpec, nullable: false, minVersion: 0 },
        { name: 'maximum', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoHdcpCapabilitySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateUsageTable
arc.mojom.mojom.OemCryptoService_UpdateUsageTable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.UpdateUsageTable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_UpdateUsageTable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.UpdateUsageTable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeactivateUsageEntryV12
arc.mojom.mojom.OemCryptoService_DeactivateUsageEntryV12_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DeactivateUsageEntryV12_Params',
      packedSize: 16,
      fields: [
        { name: 'pst', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_DeactivateUsageEntryV12_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DeactivateUsageEntryV12_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportUsage
arc.mojom.mojom.OemCryptoService_ReportUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.ReportUsage_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pst', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_ReportUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.ReportUsage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'report', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoPstReportSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeleteUsageEntry
arc.mojom.mojom.OemCryptoService_DeleteUsageEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DeleteUsageEntry_Params',
      packedSize: 40,
      fields: [
        { name: 'session', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pst_offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pst_length', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_DeleteUsageEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DeleteUsageEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ForceDeleteUsageEntry
arc.mojom.mojom.OemCryptoService_ForceDeleteUsageEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.ForceDeleteUsageEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'pst', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_ForceDeleteUsageEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.ForceDeleteUsageEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteOldUsageTable
arc.mojom.mojom.OemCryptoService_DeleteOldUsageTable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DeleteOldUsageTable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_DeleteOldUsageTable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DeleteOldUsageTable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetProvisioningMethod
arc.mojom.mojom.OemCryptoService_GetProvisioningMethod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetProvisioningMethod_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GetProvisioningMethod_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetProvisioningMethod_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoProvisioningMethodSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SupportedCertificates
arc.mojom.mojom.OemCryptoService_SupportedCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.SupportedCertificates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_SupportedCertificates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.SupportedCertificates_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsSrmUpdateSupported
arc.mojom.mojom.OemCryptoService_IsSrmUpdateSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.IsSrmUpdateSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_IsSrmUpdateSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.IsSrmUpdateSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCurrentSrmVersion
arc.mojom.mojom.OemCryptoService_GetCurrentSrmVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetCurrentSrmVersion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GetCurrentSrmVersion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetCurrentSrmVersion_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadSrm
arc.mojom.mojom.OemCryptoService_LoadSrm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadSrm_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadSrm_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadSrm_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemoveSrm
arc.mojom.mojom.OemCryptoService_RemoveSrm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.RemoveSrm_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_RemoveSrm_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.RemoveSrm_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateUsageTableHeader
arc.mojom.mojom.OemCryptoService_CreateUsageTableHeader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CreateUsageTableHeader_Params',
      packedSize: 16,
      fields: [
        { name: 'avail_header_length', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_CreateUsageTableHeader_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CreateUsageTableHeader_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for LoadUsageTableHeader
arc.mojom.mojom.OemCryptoService_LoadUsageTableHeader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadUsageTableHeader_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadUsageTableHeader_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadUsageTableHeader_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateNewUsageEntry
arc.mojom.mojom.OemCryptoService_CreateNewUsageEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CreateNewUsageEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_CreateNewUsageEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CreateNewUsageEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'usage_entry_number', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadUsageEntry
arc.mojom.mojom.OemCryptoService_LoadUsageEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadUsageEntry_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'index', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadUsageEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadUsageEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateUsageEntry
arc.mojom.mojom.OemCryptoService_UpdateUsageEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.UpdateUsageEntry_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'avail_header_length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'avail_entry_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_UpdateUsageEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.UpdateUsageEntry_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'entry', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for DeactivateUsageEntry
arc.mojom.mojom.OemCryptoService_DeactivateUsageEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DeactivateUsageEntry_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pst', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_DeactivateUsageEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DeactivateUsageEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShrinkUsageTableHeader
arc.mojom.mojom.OemCryptoService_ShrinkUsageTableHeader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.ShrinkUsageTableHeader_Params',
      packedSize: 16,
      fields: [
        { name: 'new_entry_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'avail_header_length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_ShrinkUsageTableHeader_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.ShrinkUsageTableHeader_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for MoveEntry
arc.mojom.mojom.OemCryptoService_MoveEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.MoveEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'new_index', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_MoveEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.MoveEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CopyOldUsageEntry
arc.mojom.mojom.OemCryptoService_CopyOldUsageEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CopyOldUsageEntry_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pst', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_CopyOldUsageEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CopyOldUsageEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateOldUsageEntry
arc.mojom.mojom.OemCryptoService_CreateOldUsageEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CreateOldUsageEntry_Params',
      packedSize: 64,
      fields: [
        { name: 'time_since_license_received', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'time_since_first_decrypt', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'time_since_last_decrypt', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 48, packedBitOffset: 0, type: arc.mojom.OemCryptoUsageEntryStatusSpec, nullable: false, minVersion: 0 },
        { name: 'server_mac_key', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'client_mac_key', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'pst', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_CreateOldUsageEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CreateOldUsageEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAnalogOutputFlags
arc.mojom.mojom.OemCryptoService_GetAnalogOutputFlags_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetAnalogOutputFlags_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GetAnalogOutputFlags_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetAnalogOutputFlags_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadTestKeybox
arc.mojom.mojom.OemCryptoService_LoadTestKeybox_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadTestKeybox_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadTestKeybox_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadTestKeybox_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadEntitledContentKeysV14
arc.mojom.mojom.OemCryptoService_LoadEntitledContentKeysV14_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadEntitledContentKeysV14_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_array', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.OemCryptoEntitledContentKeyObjectV14Spec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadEntitledContentKeysV14_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SelectKey
arc.mojom.mojom.OemCryptoService_SelectKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.SelectKey_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'content_key_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'cipher_mode', packedOffset: 12, packedBitOffset: 0, type: arc.mojom.OemCryptoCipherModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_SelectKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.SelectKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadKeysV14
arc.mojom.mojom.OemCryptoService_LoadKeysV14_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadKeysV14_Params',
      packedSize: 72,
      fields: [
        { name: 'session', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'has_enc_mac_keys', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enc_mac_keys_iv_offset', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'enc_mac_keys_offset', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_array', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.OemCryptoKeyObjectV14Spec, false), nullable: false, minVersion: 0 },
        { name: 'pst_offset', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pst_length', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'srm_requirement', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'license_type', packedOffset: 52, packedBitOffset: 0, type: arc.mojom.OemCryptoLicenseTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadKeysV14_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadKeysV14_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadKeys
arc.mojom.mojom.OemCryptoService_LoadKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadKeys_Params',
      packedSize: 72,
      fields: [
        { name: 'session', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'enc_mac_keys_iv', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
        { name: 'enc_mac_keys', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
        { name: 'key_array', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.OemCryptoKeyObjectSpec, false), nullable: false, minVersion: 0 },
        { name: 'pst', packedOffset: 40, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
        { name: 'srm_restriction_data', packedOffset: 48, packedBitOffset: 0, type: arc.mojom.OemCryptoSubstringSpec, nullable: false, minVersion: 0 },
        { name: 'license_type', packedOffset: 60, packedBitOffset: 0, type: arc.mojom.OemCryptoLicenseTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadKeys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadKeys_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ResourceRatingTier
arc.mojom.mojom.OemCryptoService_ResourceRatingTier_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.ResourceRatingTier_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_ResourceRatingTier_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.ResourceRatingTier_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'rating_tier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BuildInformation
arc.mojom.mojom.OemCryptoService_BuildInformation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.BuildInformation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_BuildInformation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.BuildInformation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'build_information', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RefreshKeys
arc.mojom.mojom.OemCryptoService_RefreshKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.RefreshKeys_Params',
      packedSize: 40,
      fields: [
        { name: 'session', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'key_array', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.OemCryptoKeyRefreshObjectSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_RefreshKeys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.RefreshKeys_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadEntitledContentKeys
arc.mojom.mojom.OemCryptoService_LoadEntitledContentKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadEntitledContentKeys_Params',
      packedSize: 32,
      fields: [
        { name: 'session', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'key_array', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.OemCryptoEntitledContentKeyObjectSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadEntitledContentKeys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadEntitledContentKeys_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOemPublicCertificate
arc.mojom.mojom.OemCryptoService_GetOemPublicCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetOemPublicCertificate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_GetOemPublicCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.GetOemPublicCertificate_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'public_cert', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for MaximumUsageTableHeaderSize
arc.mojom.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.MaximumUsageTableHeaderSize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.MaximumUsageTableHeaderSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsAntiRollbackHwPresent
arc.mojom.mojom.OemCryptoService_IsAntiRollbackHwPresent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.IsAntiRollbackHwPresent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_IsAntiRollbackHwPresent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.IsAntiRollbackHwPresent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MinorApiVersion
arc.mojom.mojom.OemCryptoService_MinorApiVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.MinorApiVersion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_MinorApiVersion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.MinorApiVersion_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrepAndSignLicenseRequest
arc.mojom.mojom.OemCryptoService_PrepAndSignLicenseRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.PrepAndSignLicenseRequest_Params',
      packedSize: 32,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'core_message_size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'avail_signature_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.PrepAndSignLicenseRequest_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'core_message_size', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for PrepAndSignRenewalRequest
arc.mojom.mojom.OemCryptoService_PrepAndSignRenewalRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.PrepAndSignRenewalRequest_Params',
      packedSize: 32,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'core_message_size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'avail_signature_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.PrepAndSignRenewalRequest_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'core_message_size', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for PrepAndSignProvisioningRequest
arc.mojom.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.PrepAndSignProvisioningRequest_Params',
      packedSize: 32,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'core_message_size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'avail_signature_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.PrepAndSignProvisioningRequest_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'core_message_size', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for LoadLicense
arc.mojom.mojom.OemCryptoService_LoadLicense_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadLicense_Params',
      packedSize: 32,
      fields: [
        { name: 'session', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'core_message_length', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadLicense_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadLicense_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadRenewal
arc.mojom.mojom.OemCryptoService_LoadRenewal_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadRenewal_Params',
      packedSize: 32,
      fields: [
        { name: 'session', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'core_message_length', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadRenewal_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadRenewal_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadProvisioning
arc.mojom.mojom.OemCryptoService_LoadProvisioning_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadProvisioning_Params',
      packedSize: 40,
      fields: [
        { name: 'session', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'core_message_length', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'avail_wrapped_private_key_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadProvisioning_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadProvisioning_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'wrapped_private_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for LoadOemPrivateKey
arc.mojom.mojom.OemCryptoService_LoadOemPrivateKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadOemPrivateKey_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadOemPrivateKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadOemPrivateKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadDrmPrivateKey
arc.mojom.mojom.OemCryptoService_LoadDrmPrivateKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadDrmPrivateKey_Params',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_type', packedOffset: 12, packedBitOffset: 0, type: arc.mojom.OemCryptoPrivateKeySpec, nullable: false, minVersion: 0 },
        { name: 'wrapped_private_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.LoadDrmPrivateKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DecryptCenc
arc.mojom.mojom.OemCryptoService_DecryptCenc_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DecryptCenc_Params',
      packedSize: 56,
      fields: [
        { name: 'session', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'iv', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'sub_samples', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.SubSampleDescriptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'pattern', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.OemCryptoCencEncryptPatternDescSpec, nullable: false, minVersion: 0 },
        { name: 'secure_buffer', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.OemCryptoSecureBufferSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_DecryptCenc_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.DecryptCenc_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
        { name: 'decrypted_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CopyBuffer
arc.mojom.mojom.OemCryptoService_CopyBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CopyBuffer_Params',
      packedSize: 32,
      fields: [
        { name: 'session', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'out_buffer', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.OemCryptoSecureBufferSpec, nullable: false, minVersion: 0 },
        { name: 'subsample_flags', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.OemCryptoService_CopyBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoService.CopyBuffer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.OemCryptoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.OemCryptoServicePtr = arc.mojom.mojom.OemCryptoServiceRemote;
arc.mojom.mojom.OemCryptoServiceRequest = arc.mojom.mojom.OemCryptoServicePendingReceiver;


// Interface: OemCryptoHost
arc.mojom.mojom.OemCryptoHost = {};

arc.mojom.mojom.OemCryptoHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.OemCryptoHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OemCryptoHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.OemCryptoHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.OemCryptoHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.OemCryptoHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(oemcryptor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.OemCryptoHost_Connect_ParamsSpec,
      null,
      [oemcryptor]);
  }

};

arc.mojom.mojom.OemCryptoHost.getRemote = function() {
  let remote = new arc.mojom.mojom.OemCryptoHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OemCryptoHost',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
arc.mojom.mojom.OemCryptoHost_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoHost.Connect_Params',
      packedSize: 16,
      fields: [
        { name: 'oemcryptor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(arc.mojom.OemCryptoServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.OemCryptoHostPtr = arc.mojom.mojom.OemCryptoHostRemote;
arc.mojom.mojom.OemCryptoHostRequest = arc.mojom.mojom.OemCryptoHostPendingReceiver;


// Interface: OemCryptoInstance
arc.mojom.mojom.OemCryptoInstance = {};

arc.mojom.mojom.OemCryptoInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.OemCryptoInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OemCryptoInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.OemCryptoInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.OemCryptoInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.OemCryptoInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.OemCryptoInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.OemCryptoInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.OemCryptoInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OemCryptoInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.OemCryptoInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.OemCryptoInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.OemCryptoHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.OemCryptoInstancePtr = arc.mojom.mojom.OemCryptoInstanceRemote;
arc.mojom.mojom.OemCryptoInstanceRequest = arc.mojom.mojom.OemCryptoInstancePendingReceiver;

