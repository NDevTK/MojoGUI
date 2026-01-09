// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/content_decryption_module.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};


// Enum: EmeInitDataType
chromeos.cdm.mojom.EmeInitDataType = {
  UNKNOWN: 0,
  WEBM: 1,
  CENC: 2,
  KEYIDS: 3,
};

// Enum: CdmSessionType
chromeos.cdm.mojom.CdmSessionType = {
  kTemporary: 0,
  kPersistentLicense: 1,
};

// Enum: CdmMessageType
chromeos.cdm.mojom.CdmMessageType = {
  LICENSE_REQUEST: 0,
  LICENSE_RENEWAL: 1,
  LICENSE_RELEASE: 2,
  INDIVIDUALIZATION_REQUEST: 3,
};

// Enum: CdmKeyStatus
chromeos.cdm.mojom.CdmKeyStatus = {
  USABLE: 0,
  INTERNAL_ERROR: 1,
  EXPIRED: 2,
  OUTPUT_RESTRICTED: 3,
  OUTPUT_DOWNSCALED: 4,
  KEY_STATUS_PENDING: 5,
  RELEASED: 6,
};

// Enum: HdcpVersion
chromeos.cdm.mojom.HdcpVersion = {
  kHdcpVersionNone: 0,
  kHdcpVersion1_0: 1,
  kHdcpVersion1_1: 2,
  kHdcpVersion1_2: 3,
  kHdcpVersion1_3: 4,
  kHdcpVersion1_4: 5,
  kHdcpVersion2_0: 6,
  kHdcpVersion2_1: 7,
  kHdcpVersion2_2: 8,
  kHdcpVersion2_3: 9,
};

// Enum: PromiseException
chromeos.cdm.mojom.PromiseException = {
  NOT_SUPPORTED_ERROR: 0,
  INVALID_STATE_ERROR: 1,
  QUOTA_EXCEEDED_ERROR: 2,
  TYPE_ERROR: 3,
};

// Enum: EncryptionScheme
chromeos.cdm.mojom.EncryptionScheme = {
  kCenc: 0,
  kCbcs: 1,
};

// Enum: DecryptStatus
chromeos.cdm.mojom.DecryptStatus = {
  kSuccess: 0,
  kNoKey: 1,
  kFailure: 2,
};

// Struct: CdmPromiseResult
chromeos.cdm.mojom.CdmPromiseResult = class {
  constructor(values = {}) {
    this.error_message = values.error_message !== undefined ? values.error_message : 0;
  }
};

// Struct: CdmKeyInformation
chromeos.cdm.mojom.CdmKeyInformation = class {
  constructor(values = {}) {
    this.system_code = values.system_code !== undefined ? values.system_code : 0;
  }
};

// Struct: EncryptionPattern
chromeos.cdm.mojom.EncryptionPattern = class {
  constructor(values = {}) {
    this.skip_byte_block = values.skip_byte_block !== undefined ? values.skip_byte_block : 0;
  }
};

// Struct: SubsampleEntry
chromeos.cdm.mojom.SubsampleEntry = class {
  constructor(values = {}) {
    this.cipher_bytes = values.cipher_bytes !== undefined ? values.cipher_bytes : 0;
  }
};

// Struct: DecryptConfig
chromeos.cdm.mojom.DecryptConfig = class {
  constructor(values = {}) {
    this.encryption_pattern = values.encryption_pattern !== undefined ? values.encryption_pattern : "";
  }
};

// Interface: ContentDecryptionModule
chromeos.cdm.mojom.ContentDecryptionModulePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cdm.mojom.ContentDecryptionModule';
  }

  1(certificate_data) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(certificate_data)
      resolve({});
    });
  }

  2(min_hdcp_version) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(min_hdcp_version)
      resolve({});
    });
  }

  3(session_type, init_data_type, init_data) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(session_type, init_data_type, init_data)
      resolve({});
    });
  }

  4(session_type, session_id) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(session_type, session_id)
      resolve({});
    });
  }

  5(session_id, response) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(session_id, response)
      resolve({});
    });
  }

  6(session_id) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(session_id)
      resolve({});
    });
  }

  7(session_id) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(session_id)
      resolve({});
    });
  }

  8(encrypted_data, decrypt_config) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(encrypted_data, decrypt_config)
      resolve({});
    });
  }

  9(decrypt_config, hw_identifier) {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9(decrypt_config, hw_identifier)
      resolve({});
    });
  }

  platforms(AMD) {
    // Method: platforms
    // Call: platforms(AMD)
  }

  memory(only) {
    // Method: memory
    // Call: memory(only)
  }

  resource(that) {
    // Method: resource
    // Call: resource(that)
  }

  10(encrypted_data, decrypt_config_in, is_video, secure_handle) {
    // Method: 10
    return new Promise((resolve) => {
      // Call: 10(encrypted_data, decrypt_config_in, is_video, secure_handle)
      resolve({});
    });
  }

};

chromeos.cdm.mojom.ContentDecryptionModuleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ContentDecryptionModuleClient
chromeos.cdm.mojom.ContentDecryptionModuleClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cdm.mojom.ContentDecryptionModuleClient';
  }

  0(session_id, message_type, message) {
    // Method: 0
    // Call: 0(session_id, message_type, message)
  }

  closeSession() {
    // Method: CloseSession
    // Call: CloseSession()
  }

  1(session_id) {
    // Method: 1
    // Call: 1(session_id)
  }

  2(session_id, has_additional_usable_key, keys_info) {
    // Method: 2
    // Call: 2(session_id, has_additional_usable_key, keys_info)
  }

  epoch(1) {
    // Method: epoch
    // Call: epoch(1)
  }

  3(session_id, new_expiry_time_sec) {
    // Method: 3
    // Call: 3(session_id, new_expiry_time_sec)
  }

};

chromeos.cdm.mojom.ContentDecryptionModuleClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
