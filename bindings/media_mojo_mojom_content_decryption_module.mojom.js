// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/content_decryption_module.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: CdmKeyStatus
media.mojom.mojom.CdmKeyStatus = {
  USABLE: 0,
  INTERNAL_ERROR: 1,
  EXPIRED: 2,
  OUTPUT_RESTRICTED: 3,
  OUTPUT_DOWNSCALED: 4,
  KEY_STATUS_PENDING: 5,
  RELEASED: 6,
  USABLE_IN_FUTURE: 7,
};
media.mojom.mojom.CdmKeyStatusSpec = { $: mojo.internal.Enum() };

// Struct: CdmConfig
media.mojom.mojom.CdmConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmConfig',
      packedSize: 24,
      fields: [
        { name: 'key_system', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'allow_distinctive_identifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_persistent_state', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_hw_secure_codecs', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CdmPromiseResult
media.mojom.mojom.CdmPromiseResultSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmPromiseResult',
      packedSize: 40,
      fields: [
        { name: 'Exception', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'success', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'exception', packedOffset: 8, packedBitOffset: 0, type: media.mojom.ExceptionSpec, nullable: false, minVersion: 0 },
        { name: 'system_code', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: CdmKeyInformation
media.mojom.mojom.CdmKeyInformationSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmKeyInformation',
      packedSize: 24,
      fields: [
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: media.mojom.CdmKeyStatusSpec, nullable: false, minVersion: 0 },
        { name: 'system_code', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CdmContext
media.mojom.mojom.CdmContextSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContext',
      packedSize: 24,
      fields: [
        { name: 'cdm_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'decryptor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'requires_media_foundation_renderer', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ContentDecryptionModule
media.mojom.mojom.ContentDecryptionModule = {};

media.mojom.mojom.ContentDecryptionModulePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.ContentDecryptionModuleRemote = class {
  static get $interfaceName() {
    return 'media.mojom.ContentDecryptionModule';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.ContentDecryptionModulePendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.ContentDecryptionModuleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.ContentDecryptionModuleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.ContentDecryptionModule_SetClient_ParamsSpec,
      null,
      [client]);
  }

  setServerCertificate(certificate_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec,
      media.mojom.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec,
      [certificate_data]);
  }

  getStatusForPolicy(min_hdcp_version) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec,
      media.mojom.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec,
      [min_hdcp_version]);
  }

  createSessionAndGenerateRequest(session_type, init_data_type, init_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec,
      media.mojom.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec,
      [session_type, init_data_type, init_data]);
  }

  loadSession(session_type, session_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.mojom.ContentDecryptionModule_LoadSession_ParamsSpec,
      media.mojom.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec,
      [session_type, session_id]);
  }

  updateSession(session_id, response) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec,
      media.mojom.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec,
      [session_id, response]);
  }

  closeSession(session_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.mojom.ContentDecryptionModule_CloseSession_ParamsSpec,
      media.mojom.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec,
      [session_id]);
  }

  removeSession(session_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec,
      media.mojom.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec,
      [session_id]);
  }

};

media.mojom.mojom.ContentDecryptionModule.getRemote = function() {
  let remote = new media.mojom.mojom.ContentDecryptionModuleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.ContentDecryptionModule',
    'context');
  return remote.$;
};

// ParamsSpec for SetClient
media.mojom.mojom.ContentDecryptionModule_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetServerCertificate
media.mojom.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.SetServerCertificate_Params',
      packedSize: 16,
      fields: [
        { name: 'certificate_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.SetServerCertificate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetStatusForPolicy
media.mojom.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.GetStatusForPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'min_hdcp_version', packedOffset: 0, packedBitOffset: 0, type: media.mojom.HdcpVersionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.GetStatusForPolicy_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
        { name: 'key_status', packedOffset: 8, packedBitOffset: 0, type: media.mojom.CdmKeyStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateSessionAndGenerateRequest
media.mojom.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.CreateSessionAndGenerateRequest_Params',
      packedSize: 32,
      fields: [
        { name: 'session_type', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmSessionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'init_data_type', packedOffset: 8, packedBitOffset: 0, type: media.mojom.EmeInitDataTypeSpec, nullable: false, minVersion: 0 },
        { name: 'init_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

media.mojom.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.CreateSessionAndGenerateRequest_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for LoadSession
media.mojom.mojom.ContentDecryptionModule_LoadSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.LoadSession_Params',
      packedSize: 24,
      fields: [
        { name: 'session_type', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmSessionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.LoadSession_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateSession
media.mojom.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.UpdateSession_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.UpdateSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseSession
media.mojom.mojom.ContentDecryptionModule_CloseSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.CloseSession_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.CloseSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemoveSession
media.mojom.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.RemoveSession_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.RemoveSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmPromiseResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.ContentDecryptionModulePtr = media.mojom.mojom.ContentDecryptionModuleRemote;
media.mojom.mojom.ContentDecryptionModuleRequest = media.mojom.mojom.ContentDecryptionModulePendingReceiver;


// Interface: ContentDecryptionModuleClient
media.mojom.mojom.ContentDecryptionModuleClient = {};

media.mojom.mojom.ContentDecryptionModuleClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.ContentDecryptionModuleClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.ContentDecryptionModuleClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.ContentDecryptionModuleClientPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.ContentDecryptionModuleClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.ContentDecryptionModuleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSessionMessage(session_id, message_type, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec,
      null,
      [session_id, message_type, message]);
  }

  onSessionClosed(session_id, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec,
      null,
      [session_id, reason]);
  }

  onSessionKeysChange(session_id, has_additional_usable_key, keys_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec,
      null,
      [session_id, has_additional_usable_key, keys_info]);
  }

  onSessionExpirationUpdate(session_id, new_expiry_time_sec) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec,
      null,
      [session_id, new_expiry_time_sec]);
  }

};

media.mojom.mojom.ContentDecryptionModuleClient.getRemote = function() {
  let remote = new media.mojom.mojom.ContentDecryptionModuleClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.ContentDecryptionModuleClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnSessionMessage
media.mojom.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModuleClient.OnSessionMessage_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message_type', packedOffset: 8, packedBitOffset: 0, type: media.mojom.CdmMessageTypeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnSessionClosed
media.mojom.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModuleClient.OnSessionClosed_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: media.mojom.CdmSessionClosedReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnSessionKeysChange
media.mojom.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModuleClient.OnSessionKeysChange_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'has_additional_usable_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'keys_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.CdmKeyInformationSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnSessionExpirationUpdate
media.mojom.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModuleClient.OnSessionExpirationUpdate_Params',
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
media.mojom.mojom.ContentDecryptionModuleClientPtr = media.mojom.mojom.ContentDecryptionModuleClientRemote;
media.mojom.mojom.ContentDecryptionModuleClientRequest = media.mojom.mojom.ContentDecryptionModuleClientPendingReceiver;


// Interface: CdmFactory
media.mojom.mojom.CdmFactory = {};

media.mojom.mojom.CdmFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.CdmFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.CdmFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.CdmFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.CdmFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCdm(cdm_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.CdmFactory_CreateCdm_ParamsSpec,
      media.mojom.mojom.CdmFactory_CreateCdm_ResponseParamsSpec,
      [cdm_config]);
  }

};

media.mojom.mojom.CdmFactory.getRemote = function() {
  let remote = new media.mojom.mojom.CdmFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCdm
media.mojom.mojom.CdmFactory_CreateCdm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmFactory.CreateCdm_Params',
      packedSize: 16,
      fields: [
        { name: 'cdm_config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.mojom.CdmFactory_CreateCdm_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmFactory.CreateCdm_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'cdm', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'cdm_context', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmContextSpec, nullable: true, minVersion: 0 },
        { name: 'status', packedOffset: 12, packedBitOffset: 0, type: media.mojom.CreateCdmStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.CdmFactoryPtr = media.mojom.mojom.CdmFactoryRemote;
media.mojom.mojom.CdmFactoryRequest = media.mojom.mojom.CdmFactoryPendingReceiver;

