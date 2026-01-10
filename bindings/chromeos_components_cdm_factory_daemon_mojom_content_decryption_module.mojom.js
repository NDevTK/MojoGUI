// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/content_decryption_module.mojom
// Module: chromeos.cdm.mojom

'use strict';

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
};

chromeos.cdm.mojom.ContentDecryptionModuleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setServerCertificate(certificate_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec,
      [certificate_data],
      false);
  }

  getStatusForPolicy(min_hdcp_version) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec,
      [min_hdcp_version],
      false);
  }

  createSessionAndGenerateRequest(session_type, init_data_type, init_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec,
      [session_type, init_data_type, init_data],
      false);
  }

  loadSession(session_type, session_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec,
      [session_type, session_id],
      false);
  }

  updateSession(session_id, response) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec,
      [session_id, response],
      false);
  }

  closeSession(session_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec,
      [session_id],
      false);
  }

  removeSession(session_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec,
      [session_id],
      false);
  }

  decryptDeprecated(encrypted_data, decrypt_config) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ResponseParamsSpec,
      [encrypted_data, decrypt_config],
      false);
  }

  getHwKeyData(decrypt_config, hw_identifier) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec,
      chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ResponseParamsSpec,
      [decrypt_config, hw_identifier],
      false);
  }

  decrypt(encrypted_data, decrypt_config_in, is_video, secure_handle) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
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
    this.ordinalMap.set(1, 0); // Default ordinal 1 -> Index 0
    this.ordinalMap.set(2, 1); // Default ordinal 2 -> Index 1
    this.ordinalMap.set(3, 2); // Default ordinal 3 -> Index 2
    this.ordinalMap.set(4, 3); // Default ordinal 4 -> Index 3
    this.ordinalMap.set(5, 4); // Default ordinal 5 -> Index 4
    this.ordinalMap.set(6, 5); // Default ordinal 6 -> Index 5
    this.ordinalMap.set(7, 6); // Default ordinal 7 -> Index 6
    this.ordinalMap.set(8, 7); // Default ordinal 8 -> Index 7
    this.ordinalMap.set(9, 8); // Default ordinal 9 -> Index 8
    this.ordinalMap.set(10, 9); // Default ordinal 10 -> Index 9
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetServerCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetServerCertificate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetStatusForPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStatusForPolicy (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateSessionAndGenerateRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSessionAndGenerateRequest (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: LoadSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadSession (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UpdateSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateSession (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CloseSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseSession (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RemoveSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveSession (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DecryptDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecryptDeprecated (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetHwKeyData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHwKeyData (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Decrypt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Decrypt (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setServerCertificate');
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
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getStatusForPolicy');
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
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createSessionAndGenerateRequest');
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
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadSession');
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
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateSession');
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
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeSession');
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
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeSession');
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
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.decryptDeprecated');
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
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getHwKeyData');
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
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.decrypt');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

chromeos.cdm.mojom.ContentDecryptionModuleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSessionMessage(session_id, message_type, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec,
      null,
      [session_id, message_type, message],
      false);
  }

  onSessionClosed(session_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec,
      null,
      [session_id],
      false);
  }

  onSessionKeysChange(session_id, has_additional_usable_key, keys_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec,
      null,
      [session_id, has_additional_usable_key, keys_info],
      false);
  }

  onSessionExpirationUpdate(session_id, new_expiry_time_sec) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnSessionMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSessionMessage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSessionClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSessionClosed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnSessionKeysChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSessionKeysChange (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnSessionExpirationUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSessionExpirationUpdate (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSessionMessage');
          const result = this.impl.onSessionMessage(params.session_id, params.message_type, params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSessionClosed');
          const result = this.impl.onSessionClosed(params.session_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSessionKeysChange');
          const result = this.impl.onSessionKeysChange(params.session_id, params.has_additional_usable_key, params.keys_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSessionExpirationUpdate');
          const result = this.impl.onSessionExpirationUpdate(params.session_id, params.new_expiry_time_sec);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.cdm.mojom.ContentDecryptionModuleClientReceiver = chromeos.cdm.mojom.ContentDecryptionModuleClientReceiver;

chromeos.cdm.mojom.ContentDecryptionModuleClientPtr = chromeos.cdm.mojom.ContentDecryptionModuleClientRemote;
chromeos.cdm.mojom.ContentDecryptionModuleClientRequest = chromeos.cdm.mojom.ContentDecryptionModuleClientPendingReceiver;

