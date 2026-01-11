// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/content_decryption_module.mojom
// Module: chromeos.cdm.mojom

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};

chromeos.cdm.mojom.EmeInitDataTypeSpec = { $: mojo.internal.Enum() };
chromeos.cdm.mojom.CdmSessionTypeSpec = { $: mojo.internal.Enum() };
chromeos.cdm.mojom.CdmMessageTypeSpec = { $: mojo.internal.Enum() };
chromeos.cdm.mojom.CdmKeyStatusSpec = { $: mojo.internal.Enum() };
chromeos.cdm.mojom.HdcpVersionSpec = { $: mojo.internal.Enum() };
chromeos.cdm.mojom.PromiseExceptionSpec = { $: mojo.internal.Enum() };
chromeos.cdm.mojom.EncryptionSchemeSpec = { $: mojo.internal.Enum() };
chromeos.cdm.mojom.DecryptStatusSpec = { $: mojo.internal.Enum() };
chromeos.cdm.mojom.CdmPromiseResultSpec = { $: {} };
chromeos.cdm.mojom.CdmKeyInformationSpec = { $: {} };
chromeos.cdm.mojom.EncryptionPatternSpec = { $: {} };
chromeos.cdm.mojom.SubsampleEntrySpec = { $: {} };
chromeos.cdm.mojom.DecryptConfigSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule = {};
chromeos.cdm.mojom.ContentDecryptionModule.$interfaceName = 'chromeos.cdm.mojom.ContentDecryptionModule';
chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModuleClient = {};
chromeos.cdm.mojom.ContentDecryptionModuleClient.$interfaceName = 'chromeos.cdm.mojom.ContentDecryptionModuleClient';
chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec = { $: {} };
chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec = { $: {} };

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
  MinVersion: 6,
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
mojo.internal.Struct(
    chromeos.cdm.mojom.CdmPromiseResultSpec, 'chromeos.cdm.mojom.CdmPromiseResult', [
      mojo.internal.StructField('exception', 0, 0, chromeos.cdm.mojom.PromiseExceptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('system_code', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('success', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CdmKeyInformation
mojo.internal.Struct(
    chromeos.cdm.mojom.CdmKeyInformationSpec, 'chromeos.cdm.mojom.CdmKeyInformation', [
      mojo.internal.StructField('key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, chromeos.cdm.mojom.CdmKeyStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('system_code', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EncryptionPattern
mojo.internal.Struct(
    chromeos.cdm.mojom.EncryptionPatternSpec, 'chromeos.cdm.mojom.EncryptionPattern', [
      mojo.internal.StructField('crypt_byte_block', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('skip_byte_block', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SubsampleEntry
mojo.internal.Struct(
    chromeos.cdm.mojom.SubsampleEntrySpec, 'chromeos.cdm.mojom.SubsampleEntry', [
      mojo.internal.StructField('clear_bytes', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('cipher_bytes', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DecryptConfig
mojo.internal.Struct(
    chromeos.cdm.mojom.DecryptConfigSpec, 'chromeos.cdm.mojom.DecryptConfig', [
      mojo.internal.StructField('encryption_scheme', 0, 0, chromeos.cdm.mojom.EncryptionSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('iv', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('subsamples', 24, 0, mojo.internal.Array(chromeos.cdm.mojom.SubsampleEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('encryption_pattern', 32, 0, chromeos.cdm.mojom.EncryptionPatternSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Interface: ContentDecryptionModule
mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_Params', [
      mojo.internal.StructField('certificate_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_Params', [
      mojo.internal.StructField('min_hdcp_version', 0, 0, chromeos.cdm.mojom.HdcpVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_status', 8, 0, chromeos.cdm.mojom.CdmKeyStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_Params', [
      mojo.internal.StructField('session_type', 0, 0, chromeos.cdm.mojom.CdmSessionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('init_data_type', 8, 0, chromeos.cdm.mojom.EmeInitDataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('init_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_Params', [
      mojo.internal.StructField('session_type', 0, 0, chromeos.cdm.mojom.CdmSessionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_Params', [
      mojo.internal.StructField('encrypted_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('decrypt_config', 8, 0, chromeos.cdm.mojom.DecryptConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, chromeos.cdm.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decrypted_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_Params', [
      mojo.internal.StructField('decrypt_config', 0, 0, chromeos.cdm.mojom.DecryptConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hw_identifier', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, chromeos.cdm.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_Params', [
      mojo.internal.StructField('encrypted_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('decrypt_config_in', 8, 0, chromeos.cdm.mojom.DecryptConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_video', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('secure_handle', 24, 0, mojo.internal.Uint64, 0, false, 3, undefined),
    ],
    [[0, 32], [3, 40]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, chromeos.cdm.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decrypted_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('decrypt_config_out', 16, 0, chromeos.cdm.mojom.DecryptConfigSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

chromeos.cdm.mojom.ContentDecryptionModulePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.ContentDecryptionModuleRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.ContentDecryptionModule';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.ContentDecryptionModulePendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.ContentDecryptionModuleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setServerCertificate(certificate_data) {
    return this.$.setServerCertificate(certificate_data);
  }
  getStatusForPolicy(min_hdcp_version) {
    return this.$.getStatusForPolicy(min_hdcp_version);
  }
  createSessionAndGenerateRequest(session_type, init_data_type, init_data) {
    return this.$.createSessionAndGenerateRequest(session_type, init_data_type, init_data);
  }
  loadSession(session_type, session_id) {
    return this.$.loadSession(session_type, session_id);
  }
  updateSession(session_id, response) {
    return this.$.updateSession(session_id, response);
  }
  closeSession(session_id) {
    return this.$.closeSession(session_id);
  }
  removeSession(session_id) {
    return this.$.removeSession(session_id);
  }
  decryptDeprecated(encrypted_data, decrypt_config) {
    return this.$.decryptDeprecated(encrypted_data, decrypt_config);
  }
  getHwKeyData(decrypt_config, hw_identifier) {
    return this.$.getHwKeyData(decrypt_config, hw_identifier);
  }
  decrypt(encrypted_data, decrypt_config_in, is_video, secure_handle) {
    return this.$.decrypt(encrypted_data, decrypt_config_in, is_video, secure_handle);
  }
};

chromeos.cdm.mojom.ContentDecryptionModuleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ContentDecryptionModule', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
    ]);
  }

  setServerCertificate(certificate_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec,
      [certificate_data],
      false);
  }

  getStatusForPolicy(min_hdcp_version) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec,
      [min_hdcp_version],
      false);
  }

  createSessionAndGenerateRequest(session_type, init_data_type, init_data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec,
      [session_type, init_data_type, init_data],
      false);
  }

  loadSession(session_type, session_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec,
      [session_type, session_id],
      false);
  }

  updateSession(session_id, response) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec,
      [session_id, response],
      false);
  }

  closeSession(session_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec,
      [session_id],
      false);
  }

  removeSession(session_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec,
      [session_id],
      false);
  }

  decryptDeprecated(encrypted_data, decrypt_config) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ResponseParamsSpec,
      [encrypted_data, decrypt_config],
      false);
  }

  getHwKeyData(decrypt_config, hw_identifier) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ResponseParamsSpec,
      [decrypt_config, hw_identifier],
      false);
  }

  decrypt(encrypted_data, decrypt_config_in, is_video, secure_handle) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ResponseParamsSpec,
      [encrypted_data, decrypt_config_in, is_video, secure_handle],
      false);
  }

};

chromeos.cdm.mojom.ContentDecryptionModule.getRemote = function() {
  let remote = new chromeos.cdm.mojom.ContentDecryptionModuleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.ContentDecryptionModule',
    'context');
  return remote.$;
};

chromeos.cdm.mojom.ContentDecryptionModuleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ContentDecryptionModule', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec.$.structSpec);
          const result = this.impl.setServerCertificate(params.certificate_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec.$.structSpec);
          const result = this.impl.getStatusForPolicy(params.min_hdcp_version);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec.$.structSpec);
          const result = this.impl.createSessionAndGenerateRequest(params.session_type, params.init_data_type, params.init_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ParamsSpec.$.structSpec);
          const result = this.impl.loadSession(params.session_type, params.session_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec.$.structSpec);
          const result = this.impl.updateSession(params.session_id, params.response);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ParamsSpec.$.structSpec);
          const result = this.impl.closeSession(params.session_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec.$.structSpec);
          const result = this.impl.removeSession(params.session_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec.$.structSpec);
          const result = this.impl.decryptDeprecated(params.encrypted_data, params.decrypt_config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec.$.structSpec);
          const result = this.impl.getHwKeyData(params.decrypt_config, params.hw_identifier);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ParamsSpec.$.structSpec);
          const result = this.impl.decrypt(params.encrypted_data, params.decrypt_config_in, params.is_video, params.secure_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.cdm.mojom.ContentDecryptionModuleReceiver = chromeos.cdm.mojom.ContentDecryptionModuleReceiver;

chromeos.cdm.mojom.ContentDecryptionModulePtr = chromeos.cdm.mojom.ContentDecryptionModuleRemote;
chromeos.cdm.mojom.ContentDecryptionModuleRequest = chromeos.cdm.mojom.ContentDecryptionModulePendingReceiver;


// Interface: ContentDecryptionModuleClient
mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message_type', 8, 0, chromeos.cdm.mojom.CdmMessageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('keys_info', 8, 0, mojo.internal.Array(chromeos.cdm.mojom.CdmKeyInformationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('has_additional_usable_key', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_expiry_time_sec', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos.cdm.mojom.ContentDecryptionModuleClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.ContentDecryptionModuleClientRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.ContentDecryptionModuleClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.ContentDecryptionModuleClientPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.ContentDecryptionModuleClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSessionMessage(session_id, message_type, message) {
    return this.$.onSessionMessage(session_id, message_type, message);
  }
  onSessionClosed(session_id) {
    return this.$.onSessionClosed(session_id);
  }
  onSessionKeysChange(session_id, has_additional_usable_key, keys_info) {
    return this.$.onSessionKeysChange(session_id, has_additional_usable_key, keys_info);
  }
  onSessionExpirationUpdate(session_id, new_expiry_time_sec) {
    return this.$.onSessionExpirationUpdate(session_id, new_expiry_time_sec);
  }
};

chromeos.cdm.mojom.ContentDecryptionModuleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ContentDecryptionModuleClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  onSessionMessage(session_id, message_type, message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec,
      null,
      [session_id, message_type, message],
      false);
  }

  onSessionClosed(session_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec,
      null,
      [session_id],
      false);
  }

  onSessionKeysChange(session_id, has_additional_usable_key, keys_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec,
      null,
      [session_id, has_additional_usable_key, keys_info],
      false);
  }

  onSessionExpirationUpdate(session_id, new_expiry_time_sec) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec,
      null,
      [session_id, new_expiry_time_sec],
      false);
  }

};

chromeos.cdm.mojom.ContentDecryptionModuleClient.getRemote = function() {
  let remote = new chromeos.cdm.mojom.ContentDecryptionModuleClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.ContentDecryptionModuleClient',
    'context');
  return remote.$;
};

chromeos.cdm.mojom.ContentDecryptionModuleClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ContentDecryptionModuleClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec.$.structSpec);
          const result = this.impl.onSessionMessage(params.session_id, params.message_type, params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onSessionClosed(params.session_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec.$.structSpec);
          const result = this.impl.onSessionKeysChange(params.session_id, params.has_additional_usable_key, params.keys_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onSessionExpirationUpdate(params.session_id, params.new_expiry_time_sec);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.cdm.mojom.ContentDecryptionModuleClientReceiver = chromeos.cdm.mojom.ContentDecryptionModuleClientReceiver;

chromeos.cdm.mojom.ContentDecryptionModuleClientPtr = chromeos.cdm.mojom.ContentDecryptionModuleClientRemote;
chromeos.cdm.mojom.ContentDecryptionModuleClientRequest = chromeos.cdm.mojom.ContentDecryptionModuleClientPendingReceiver;

