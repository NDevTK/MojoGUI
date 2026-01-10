// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/content_decryption_module.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.cdm.mojom = chromeos.cdm.cdm.mojom || {};


// Enum: EmeInitDataType
chromeos.cdm.cdm.mojom.mojom.EmeInitDataType = {
  UNKNOWN: 0,
  WEBM: 1,
  CENC: 2,
  KEYIDS: 3,
};
chromeos.cdm.cdm.mojom.mojom.EmeInitDataTypeSpec = { $: mojo.internal.Enum() };

// Enum: CdmSessionType
chromeos.cdm.cdm.mojom.mojom.CdmSessionType = {
  kTemporary: 0,
  kPersistentLicense: 1,
};
chromeos.cdm.cdm.mojom.mojom.CdmSessionTypeSpec = { $: mojo.internal.Enum() };

// Enum: CdmMessageType
chromeos.cdm.cdm.mojom.mojom.CdmMessageType = {
  LICENSE_REQUEST: 0,
  LICENSE_RENEWAL: 1,
  LICENSE_RELEASE: 2,
  INDIVIDUALIZATION_REQUEST: 3,
};
chromeos.cdm.cdm.mojom.mojom.CdmMessageTypeSpec = { $: mojo.internal.Enum() };

// Enum: CdmKeyStatus
chromeos.cdm.cdm.mojom.mojom.CdmKeyStatus = {
  USABLE: 0,
  INTERNAL_ERROR: 1,
  EXPIRED: 2,
  OUTPUT_RESTRICTED: 3,
  OUTPUT_DOWNSCALED: 4,
  KEY_STATUS_PENDING: 5,
  RELEASED: 6,
};
chromeos.cdm.cdm.mojom.mojom.CdmKeyStatusSpec = { $: mojo.internal.Enum() };

// Enum: HdcpVersion
chromeos.cdm.cdm.mojom.mojom.HdcpVersion = {
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
chromeos.cdm.cdm.mojom.mojom.HdcpVersionSpec = { $: mojo.internal.Enum() };

// Enum: PromiseException
chromeos.cdm.cdm.mojom.mojom.PromiseException = {
  NOT_SUPPORTED_ERROR: 0,
  INVALID_STATE_ERROR: 1,
  QUOTA_EXCEEDED_ERROR: 2,
  TYPE_ERROR: 3,
};
chromeos.cdm.cdm.mojom.mojom.PromiseExceptionSpec = { $: mojo.internal.Enum() };

// Enum: EncryptionScheme
chromeos.cdm.cdm.mojom.mojom.EncryptionScheme = {
  kCenc: 0,
  kCbcs: 1,
};
chromeos.cdm.cdm.mojom.mojom.EncryptionSchemeSpec = { $: mojo.internal.Enum() };

// Enum: DecryptStatus
chromeos.cdm.cdm.mojom.mojom.DecryptStatus = {
  kSuccess: 0,
  kNoKey: 1,
  kFailure: 2,
};
chromeos.cdm.cdm.mojom.mojom.DecryptStatusSpec = { $: mojo.internal.Enum() };

// Struct: CdmPromiseResult
chromeos.cdm.cdm.mojom.mojom.CdmPromiseResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmPromiseResult',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'exception', packedOffset: 8, packedBitOffset: 0, type: chromeos.cdm.mojom.PromiseExceptionSpec, nullable: false, minVersion: 0 },
        { name: 'system_code', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CdmKeyInformation
chromeos.cdm.cdm.mojom.mojom.CdmKeyInformationSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmKeyInformation',
      packedSize: 24,
      fields: [
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: chromeos.cdm.mojom.CdmKeyStatusSpec, nullable: false, minVersion: 0 },
        { name: 'system_code', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: EncryptionPattern
chromeos.cdm.cdm.mojom.mojom.EncryptionPatternSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.EncryptionPattern',
      packedSize: 16,
      fields: [
        { name: 'crypt_byte_block', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'skip_byte_block', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SubsampleEntry
chromeos.cdm.cdm.mojom.mojom.SubsampleEntrySpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.SubsampleEntry',
      packedSize: 16,
      fields: [
        { name: 'clear_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'cipher_bytes', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DecryptConfig
chromeos.cdm.cdm.mojom.mojom.DecryptConfigSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.DecryptConfig',
      packedSize: 48,
      fields: [
        { name: 'encryption_scheme', packedOffset: 32, packedBitOffset: 0, type: chromeos.cdm.mojom.EncryptionSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'iv', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'subsamples', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(chromeos.cdm.mojom.SubsampleEntrySpec, false), nullable: false, minVersion: 0 },
        { name: 'encryption_pattern', packedOffset: 24, packedBitOffset: 0, type: chromeos.cdm.mojom.EncryptionPatternSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: ContentDecryptionModule
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule = {};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModulePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.ContentDecryptionModule';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModulePendingReceiver,
      handle);
    this.$ = new chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setServerCertificate(certificate_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec,
      [certificate_data]);
  }

  getStatusForPolicy(min_hdcp_version) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec,
      [min_hdcp_version]);
  }

  createSessionAndGenerateRequest(session_type, init_data_type, init_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec,
      [session_type, init_data_type, init_data]);
  }

  loadSession(session_type, session_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_LoadSession_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec,
      [session_type, session_id]);
  }

  updateSession(session_id, response) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec,
      [session_id, response]);
  }

  closeSession(session_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_CloseSession_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec,
      [session_id]);
  }

  removeSession(session_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec,
      [session_id]);
  }

  decryptDeprecated(encrypted_data, decrypt_config) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_DecryptDeprecated_ResponseParamsSpec,
      [encrypted_data, decrypt_config]);
  }

  getHwKeyData(decrypt_config, hw_identifier) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_GetHwKeyData_ResponseParamsSpec,
      [decrypt_config, hw_identifier]);
  }

  decrypt(encrypted_data, decrypt_config_in, is_video, secure_handle) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_Decrypt_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_Decrypt_ResponseParamsSpec,
      [encrypted_data, decrypt_config_in, is_video, secure_handle]);
  }

};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule.getRemote = function() {
  let remote = new chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.ContentDecryptionModule',
    'context');
  return remote.$;
};

// ParamsSpec for SetServerCertificate
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.SetServerCertificate_Params',
      packedSize: 16,
      fields: [
        { name: 'certificate_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.SetServerCertificate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.cdm.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetStatusForPolicy
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.GetStatusForPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'min_hdcp_version', packedOffset: 0, packedBitOffset: 0, type: chromeos.cdm.mojom.HdcpVersionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.GetStatusForPolicy_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.cdm.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
        { name: 'key_status', packedOffset: 8, packedBitOffset: 0, type: chromeos.cdm.mojom.CdmKeyStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateSessionAndGenerateRequest
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.CreateSessionAndGenerateRequest_Params',
      packedSize: 24,
      fields: [
        { name: 'session_type', packedOffset: 8, packedBitOffset: 0, type: chromeos.cdm.mojom.CdmSessionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'init_data_type', packedOffset: 12, packedBitOffset: 0, type: chromeos.cdm.mojom.EmeInitDataTypeSpec, nullable: false, minVersion: 0 },
        { name: 'init_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.CreateSessionAndGenerateRequest_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.cdm.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for LoadSession
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_LoadSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.LoadSession_Params',
      packedSize: 24,
      fields: [
        { name: 'session_type', packedOffset: 8, packedBitOffset: 0, type: chromeos.cdm.mojom.CdmSessionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.LoadSession_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.cdm.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateSession
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.UpdateSession_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.UpdateSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.cdm.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseSession
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_CloseSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.CloseSession_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.CloseSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.cdm.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemoveSession
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.RemoveSession_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.RemoveSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.cdm.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DecryptDeprecated
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.DecryptDeprecated_Params',
      packedSize: 24,
      fields: [
        { name: 'encrypted_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'decrypt_config', packedOffset: 8, packedBitOffset: 0, type: chromeos.cdm.mojom.DecryptConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_DecryptDeprecated_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.DecryptDeprecated_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: chromeos.cdm.mojom.DecryptStatusSpec, nullable: false, minVersion: 0 },
        { name: 'decrypted_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetHwKeyData
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.GetHwKeyData_Params',
      packedSize: 24,
      fields: [
        { name: 'decrypt_config', packedOffset: 0, packedBitOffset: 0, type: chromeos.cdm.mojom.DecryptConfigSpec, nullable: false, minVersion: 0 },
        { name: 'hw_identifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_GetHwKeyData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.GetHwKeyData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: chromeos.cdm.mojom.DecryptStatusSpec, nullable: false, minVersion: 0 },
        { name: 'key_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Decrypt
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_Decrypt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.Decrypt_Params',
      packedSize: 40,
      fields: [
        { name: 'encrypted_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'decrypt_config_in', packedOffset: 8, packedBitOffset: 0, type: chromeos.cdm.mojom.DecryptConfigSpec, nullable: true, minVersion: 0 },
        { name: 'is_video', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'secure_handle', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 3, packedSize: 40}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModule_Decrypt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModule.Decrypt_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: chromeos.cdm.mojom.DecryptStatusSpec, nullable: false, minVersion: 0 },
        { name: 'decrypted_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'decrypt_config_out', packedOffset: 8, packedBitOffset: 0, type: chromeos.cdm.mojom.DecryptConfigSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModulePtr = chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleRemote;
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleRequest = chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModulePendingReceiver;


// Interface: ContentDecryptionModuleClient
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClient = {};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClientRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.ContentDecryptionModuleClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClientPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSessionMessage(session_id, message_type, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec,
      null,
      [session_id, message_type, message]);
  }

  onSessionClosed(session_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec,
      null,
      [session_id]);
  }

  onSessionKeysChange(session_id, has_additional_usable_key, keys_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec,
      null,
      [session_id, has_additional_usable_key, keys_info]);
  }

  onSessionExpirationUpdate(session_id, new_expiry_time_sec) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec,
      null,
      [session_id, new_expiry_time_sec]);
  }

};

chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClient.getRemote = function() {
  let remote = new chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.ContentDecryptionModuleClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnSessionMessage
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModuleClient.OnSessionMessage_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message_type', packedOffset: 16, packedBitOffset: 0, type: chromeos.cdm.mojom.CdmMessageTypeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnSessionClosed
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModuleClient.OnSessionClosed_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSessionKeysChange
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModuleClient.OnSessionKeysChange_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'has_additional_usable_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'keys_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(chromeos.cdm.mojom.CdmKeyInformationSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnSessionExpirationUpdate
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.ContentDecryptionModuleClient.OnSessionExpirationUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_expiry_time_sec', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClientPtr = chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClientRemote;
chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClientRequest = chromeos.cdm.cdm.mojom.mojom.ContentDecryptionModuleClientPendingReceiver;

