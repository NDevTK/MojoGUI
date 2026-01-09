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
  not: 40,
  not: 41,
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

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  36(oemcrypto_version) {
    // Method: 36
    return new Promise((resolve) => {
      // Call: 36(oemcrypto_version)
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

  2() {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2()
      resolve({});
    });
  }

  3(session) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(session)
      resolve({});
    });
  }

  4(session, mac_key_context, enc_key_context) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(session, mac_key_context, enc_key_context)
      resolve({});
    });
  }

  5(session) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(session)
      resolve({});
    });
  }

  6(session, message) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(session, message)
      resolve({});
    });
  }

  7(session, message, signature, has_enc_mac_keys, enc_mac_keys_iv_offset, enc_mac_keys_offset, key_array, pst_offset, pst_length) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(session, message, signature, has_enc_mac_keys, enc_mac_keys_iv_offset, enc_mac_keys_offset, key_array, pst_offset, pst_length)
      resolve({});
    });
  }

  8(session, message, signature, key_array) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(session, message, signature, key_array)
      resolve({});
    });
  }

  9(session, key_id) {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9(session, key_id)
      resolve({});
    });
  }

  10(session, key_id) {
    // Method: 10
    return new Promise((resolve) => {
      // Call: 10(session, key_id)
      resolve({});
    });
  }

  11(session, data, is_encrypted, iv, block_offset, secure_buffer, pattern) {
    // Method: 11
    return new Promise((resolve) => {
      // Call: 11(session, data, is_encrypted, iv, block_offset, secure_buffer, pattern)
      resolve({});
    });
  }

  12(session, data, iv, algorithm) {
    // Method: 12
    return new Promise((resolve) => {
      // Call: 12(session, data, iv, algorithm)
      resolve({});
    });
  }

  13(session, data, iv, algorithm) {
    // Method: 13
    return new Promise((resolve) => {
      // Call: 13(session, data, iv, algorithm)
      resolve({});
    });
  }

  14(session, data, algorithm) {
    // Method: 14
    return new Promise((resolve) => {
      // Call: 14(session, data, algorithm)
      resolve({});
    });
  }

  15(session, data, algorithm, signature) {
    // Method: 15
    return new Promise((resolve) => {
      // Call: 15(session, data, algorithm, signature)
      resolve({});
    });
  }

  16(data, out_buffer) {
    // Method: 16
    return new Promise((resolve) => {
      // Call: 16(data, out_buffer)
      resolve({});
    });
  }

  17() {
    // Method: 17
    return new Promise((resolve) => {
      // Call: 17()
      resolve({});
    });
  }

  18() {
    // Method: 18
    return new Promise((resolve) => {
      // Call: 18()
      resolve({});
    });
  }

  19() {
    // Method: 19
    return new Promise((resolve) => {
      // Call: 19()
      resolve({});
    });
  }

  20() {
    // Method: 20
    return new Promise((resolve) => {
      // Call: 20()
      resolve({});
    });
  }

  21(length) {
    // Method: 21
    return new Promise((resolve) => {
      // Call: 21(length)
      resolve({});
    });
  }

  22() {
    // Method: 22
    return new Promise((resolve) => {
      // Call: 22()
      resolve({});
    });
  }

  23() {
    // Method: 23
    return new Promise((resolve) => {
      // Call: 23()
      resolve({});
    });
  }

  24(session, message, signature, nonce_offset, enc_rsa_key_offset, enc_rsa_key_length, enc_rsa_key_iv_offset) {
    // Method: 24
    return new Promise((resolve) => {
      // Call: 24(session, message, signature, nonce_offset, enc_rsa_key_offset, enc_rsa_key_length, enc_rsa_key_iv_offset)
      resolve({});
    });
  }

  25(session, wrapped_rsa_key) {
    // Method: 25
    return new Promise((resolve) => {
      // Call: 25(session, wrapped_rsa_key)
      resolve({});
    });
  }

  26(session, message, padding_scheme) {
    // Method: 26
    return new Promise((resolve) => {
      // Call: 26(session, message, padding_scheme)
      resolve({});
    });
  }

  27(session, enc_session_key, mac_key_context, enc_key_context) {
    // Method: 27
    return new Promise((resolve) => {
      // Call: 27(session, enc_session_key, mac_key_context, enc_key_context)
      resolve({});
    });
  }

  28() {
    // Method: 28
    return new Promise((resolve) => {
      // Call: 28()
      resolve({});
    });
  }

  29() {
    // Method: 29
    return new Promise((resolve) => {
      // Call: 29()
      resolve({});
    });
  }

  30() {
    // Method: 30
    return new Promise((resolve) => {
      // Call: 30()
      resolve({});
    });
  }

  31(pst) {
    // Method: 31
    return new Promise((resolve) => {
      // Call: 31(pst)
      resolve({});
    });
  }

  32(session, pst) {
    // Method: 32
    return new Promise((resolve) => {
      // Call: 32(session, pst)
      resolve({});
    });
  }

  33(session, pst_offset, pst_length, message, signature) {
    // Method: 33
    return new Promise((resolve) => {
      // Call: 33(session, pst_offset, pst_length, message, signature)
      resolve({});
    });
  }

  34(pst) {
    // Method: 34
    return new Promise((resolve) => {
      // Call: 34(pst)
      resolve({});
    });
  }

  35() {
    // Method: 35
    return new Promise((resolve) => {
      // Call: 35()
      resolve({});
    });
  }

  37() {
    // Method: 37
    return new Promise((resolve) => {
      // Call: 37()
      resolve({});
    });
  }

  38() {
    // Method: 38
    return new Promise((resolve) => {
      // Call: 38()
      resolve({});
    });
  }

  39() {
    // Method: 39
    return new Promise((resolve) => {
      // Call: 39()
      resolve({});
    });
  }

  40() {
    // Method: 40
    return new Promise((resolve) => {
      // Call: 40()
      resolve({});
    });
  }

  41(buffer) {
    // Method: 41
    return new Promise((resolve) => {
      // Call: 41(buffer)
      resolve({});
    });
  }

  42() {
    // Method: 42
    return new Promise((resolve) => {
      // Call: 42()
      resolve({});
    });
  }

  43(avail_header_length) {
    // Method: 43
    return new Promise((resolve) => {
      // Call: 43(avail_header_length)
      resolve({});
    });
  }

  44(buffer) {
    // Method: 44
    return new Promise((resolve) => {
      // Call: 44(buffer)
      resolve({});
    });
  }

  45(session) {
    // Method: 45
    return new Promise((resolve) => {
      // Call: 45(session)
      resolve({});
    });
  }

  46(session, index, buffer) {
    // Method: 46
    return new Promise((resolve) => {
      // Call: 46(session, index, buffer)
      resolve({});
    });
  }

  47(session, avail_header_length, avail_entry_length) {
    // Method: 47
    return new Promise((resolve) => {
      // Call: 47(session, avail_header_length, avail_entry_length)
      resolve({});
    });
  }

  48(session, pst) {
    // Method: 48
    return new Promise((resolve) => {
      // Call: 48(session, pst)
      resolve({});
    });
  }

  49(new_entry_count, avail_header_length) {
    // Method: 49
    return new Promise((resolve) => {
      // Call: 49(new_entry_count, avail_header_length)
      resolve({});
    });
  }

  50(session, new_index) {
    // Method: 50
    return new Promise((resolve) => {
      // Call: 50(session, new_index)
      resolve({});
    });
  }

  51(session, pst) {
    // Method: 51
    return new Promise((resolve) => {
      // Call: 51(session, pst)
      resolve({});
    });
  }

  52(time_since_license_received, time_since_first_decrypt, time_since_last_decrypt, status, server_mac_key, client_mac_key, pst) {
    // Method: 52
    return new Promise((resolve) => {
      // Call: 52(time_since_license_received, time_since_first_decrypt, time_since_last_decrypt, status, server_mac_key, client_mac_key, pst)
      resolve({});
    });
  }

  53() {
    // Method: 53
    return new Promise((resolve) => {
      // Call: 53()
      resolve({});
    });
  }

  54(buffer) {
    // Method: 54
    return new Promise((resolve) => {
      // Call: 54(buffer)
      resolve({});
    });
  }

  55(session, key_array) {
    // Method: 55
    return new Promise((resolve) => {
      // Call: 55(session, key_array)
      resolve({});
    });
  }

  56(session, content_key_id, cipher_mode) {
    // Method: 56
    return new Promise((resolve) => {
      // Call: 56(session, content_key_id, cipher_mode)
      resolve({});
    });
  }

  57(session, message, signature, has_enc_mac_keys, enc_mac_keys_iv_offset, enc_mac_keys_offset, key_array, pst_offset, pst_length, srm_requirement, license_type) {
    // Method: 57
    return new Promise((resolve) => {
      // Call: 57(session, message, signature, has_enc_mac_keys, enc_mac_keys_iv_offset, enc_mac_keys_offset, key_array, pst_offset, pst_length, srm_requirement, license_type)
      resolve({});
    });
  }

  58(session, message, signature, enc_mac_keys_iv, enc_mac_keys, key_array, pst, srm_restriction_data, license_type) {
    // Method: 58
    return new Promise((resolve) => {
      // Call: 58(session, message, signature, enc_mac_keys_iv, enc_mac_keys, key_array, pst, srm_restriction_data, license_type)
      resolve({});
    });
  }

  59() {
    // Method: 59
    return new Promise((resolve) => {
      // Call: 59()
      resolve({});
    });
  }

  60() {
    // Method: 60
    return new Promise((resolve) => {
      // Call: 60()
      resolve({});
    });
  }

  61(session, message, signature, key_array) {
    // Method: 61
    return new Promise((resolve) => {
      // Call: 61(session, message, signature, key_array)
      resolve({});
    });
  }

  62(session, message, key_array) {
    // Method: 62
    return new Promise((resolve) => {
      // Call: 62(session, message, key_array)
      resolve({});
    });
  }

  63() {
    // Method: 63
    return new Promise((resolve) => {
      // Call: 63()
      resolve({});
    });
  }

  64() {
    // Method: 64
    return new Promise((resolve) => {
      // Call: 64()
      resolve({});
    });
  }

  65() {
    // Method: 65
    return new Promise((resolve) => {
      // Call: 65()
      resolve({});
    });
  }

  66() {
    // Method: 66
    return new Promise((resolve) => {
      // Call: 66()
      resolve({});
    });
  }

  67(session, message, core_message_size, avail_signature_size) {
    // Method: 67
    return new Promise((resolve) => {
      // Call: 67(session, message, core_message_size, avail_signature_size)
      resolve({});
    });
  }

  68(session, message, core_message_size, avail_signature_size) {
    // Method: 68
    return new Promise((resolve) => {
      // Call: 68(session, message, core_message_size, avail_signature_size)
      resolve({});
    });
  }

  69(session, message, core_message_size, avail_signature_size) {
    // Method: 69
    return new Promise((resolve) => {
      // Call: 69(session, message, core_message_size, avail_signature_size)
      resolve({});
    });
  }

  70(session, message, core_message_length, signature) {
    // Method: 70
    return new Promise((resolve) => {
      // Call: 70(session, message, core_message_length, signature)
      resolve({});
    });
  }

  71(session, message, core_message_length, signature) {
    // Method: 71
    return new Promise((resolve) => {
      // Call: 71(session, message, core_message_length, signature)
      resolve({});
    });
  }

  72(session, message, core_message_length, signature, avail_wrapped_private_key_size) {
    // Method: 72
    return new Promise((resolve) => {
      // Call: 72(session, message, core_message_length, signature, avail_wrapped_private_key_size)
      resolve({});
    });
  }

  73(session) {
    // Method: 73
    return new Promise((resolve) => {
      // Call: 73(session)
      resolve({});
    });
  }

  74(session, key_type, wrapped_private_key) {
    // Method: 74
    return new Promise((resolve) => {
      // Call: 74(session, key_type, wrapped_private_key)
      resolve({});
    });
  }

  75(session, data, iv, sub_samples, pattern, secure_buffer) {
    // Method: 75
    return new Promise((resolve) => {
      // Call: 75(session, data, iv, sub_samples, pattern, secure_buffer)
      resolve({});
    });
  }

  76(session, data, out_buffer, subsample_flags) {
    // Method: 76
    return new Promise((resolve) => {
      // Call: 76(session, data, out_buffer, subsample_flags)
      resolve({});
    });
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

  0(oemcryptor) {
    // Method: 0
    // Call: 0(oemcryptor)
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

  1(host_remote) {
    // Method: 1
    // Call: 1(host_remote)
  }

};

arc.mojom.OemCryptoInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
