// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/content_decryption_module.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: CdmKeyStatus
media.mojom.CdmKeyStatus = {
  USABLE: 0,
  INTERNAL_ERROR: 1,
  EXPIRED: 2,
  OUTPUT_RESTRICTED: 3,
  OUTPUT_DOWNSCALED: 4,
  KEY_STATUS_PENDING: 5,
  RELEASED: 6,
  USABLE_IN_FUTURE: 7,
};

// Struct: CdmConfig
media.mojom.CdmConfig = class {
  constructor(values = {}) {
    this.use_hw_secure_codecs = values.use_hw_secure_codecs !== undefined ? values.use_hw_secure_codecs : false;
  }
};

// Struct: CdmPromiseResult
media.mojom.CdmPromiseResult = class {
  constructor(values = {}) {
    this.error_message = values.error_message !== undefined ? values.error_message : 0;
  }
};

// Struct: CdmKeyInformation
media.mojom.CdmKeyInformation = class {
  constructor(values = {}) {
    this.system_code = values.system_code !== undefined ? values.system_code : 0;
  }
};

// Struct: CdmContext
media.mojom.CdmContext = class {
  constructor(values = {}) {
    this.requires_media_foundation_renderer = values.requires_media_foundation_renderer !== undefined ? values.requires_media_foundation_renderer : false;
  }
};

// Interface: ContentDecryptionModule
media.mojom.ContentDecryptionModulePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.ContentDecryptionModule';
  }

  setClient(client) {
    // Method: SetClient
    // Call: SetClient(client)
  }

  setServerCertificate(certificate_data) {
    // Method: SetServerCertificate
    return new Promise((resolve) => {
      // Call: SetServerCertificate(certificate_data)
      resolve({});
    });
  }

  getStatusForPolicy(min_hdcp_version) {
    // Method: GetStatusForPolicy
    return new Promise((resolve) => {
      // Call: GetStatusForPolicy(min_hdcp_version)
      resolve({});
    });
  }

  createSessionAndGenerateRequest(session_type, init_data_type, init_data) {
    // Method: CreateSessionAndGenerateRequest
    return new Promise((resolve) => {
      // Call: CreateSessionAndGenerateRequest(session_type, init_data_type, init_data)
      resolve({});
    });
  }

  loadSession(session_type, session_id) {
    // Method: LoadSession
    return new Promise((resolve) => {
      // Call: LoadSession(session_type, session_id)
      resolve({});
    });
  }

  updateSession(session_id, response) {
    // Method: UpdateSession
    return new Promise((resolve) => {
      // Call: UpdateSession(session_id, response)
      resolve({});
    });
  }

  closeSession(session_id) {
    // Method: CloseSession
    return new Promise((resolve) => {
      // Call: CloseSession(session_id)
      resolve({});
    });
  }

  removeSession(session_id) {
    // Method: RemoveSession
    return new Promise((resolve) => {
      // Call: RemoveSession(session_id)
      resolve({});
    });
  }

};

media.mojom.ContentDecryptionModuleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ContentDecryptionModuleClient
media.mojom.ContentDecryptionModuleClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.ContentDecryptionModuleClient';
  }

  onSessionMessage(session_id, message_type, message) {
    // Method: OnSessionMessage
    // Call: OnSessionMessage(session_id, message_type, message)
  }

  onSessionClosed(session_id, reason) {
    // Method: OnSessionClosed
    // Call: OnSessionClosed(session_id, reason)
  }

  onSessionKeysChange(session_id, has_additional_usable_key, keys_info) {
    // Method: OnSessionKeysChange
    // Call: OnSessionKeysChange(session_id, has_additional_usable_key, keys_info)
  }

  onSessionExpirationUpdate(session_id, new_expiry_time_sec) {
    // Method: OnSessionExpirationUpdate
    // Call: OnSessionExpirationUpdate(session_id, new_expiry_time_sec)
  }

};

media.mojom.ContentDecryptionModuleClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CdmFactory
media.mojom.CdmFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.CdmFactory';
  }

  createCdm(cdm_config) {
    // Method: CreateCdm
    return new Promise((resolve) => {
      // Call: CreateCdm(cdm_config)
      resolve({});
    });
  }

};

media.mojom.CdmFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
