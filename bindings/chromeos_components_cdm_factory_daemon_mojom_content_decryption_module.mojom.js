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
};

// Enum: DecryptStatus
chromeos.cdm.mojom.DecryptStatus = {
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

};

chromeos.cdm.mojom.ContentDecryptionModuleClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
