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

// Interface: ContentDecryptionModule
media.mojom.ContentDecryptionModule = {};

media.mojom.ContentDecryptionModulePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.ContentDecryptionModuleRemote = class {
  static get $interfaceName() {
    return 'media.mojom.ContentDecryptionModule';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.ContentDecryptionModulePendingReceiver,
      handle);
    this.$ = new media.mojom.ContentDecryptionModuleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.ContentDecryptionModuleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.ContentDecryptionModule_SetClient_ParamsSpec,
      null,
      [client]);
  }

  setServerCertificate(certificate_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec,
      media.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec,
      [certificate_data]);
  }

  getStatusForPolicy(min_hdcp_version) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec,
      media.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec,
      [min_hdcp_version]);
  }

  createSessionAndGenerateRequest(session_type, init_data_type, init_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec,
      media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec,
      [session_type, init_data_type, init_data]);
  }

  loadSession(session_type, session_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec,
      media.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec,
      [session_type, session_id]);
  }

  updateSession(session_id, response) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec,
      media.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec,
      [session_id, response]);
  }

  closeSession(session_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec,
      media.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec,
      [session_id]);
  }

  removeSession(session_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec,
      media.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec,
      [session_id]);
  }

};

media.mojom.ContentDecryptionModule.getRemote = function() {
  let remote = new media.mojom.ContentDecryptionModuleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.ContentDecryptionModule',
    'context');
  return remote.$;
};

// ParamsSpec for SetClient
media.mojom.ContentDecryptionModule_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetServerCertificate
media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.SetServerCertificate_Params',
      packedSize: 16,
      fields: [
        { name: 'certificate_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.SetServerCertificate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetStatusForPolicy
media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.GetStatusForPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'min_hdcp_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.GetStatusForPolicy_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'key_status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateSessionAndGenerateRequest
media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.CreateSessionAndGenerateRequest_Params',
      packedSize: 32,
      fields: [
        { name: 'session_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'init_data_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'init_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.CreateSessionAndGenerateRequest_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LoadSession
media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.LoadSession_Params',
      packedSize: 24,
      fields: [
        { name: 'session_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.LoadSession_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateSession
media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.UpdateSession_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.UpdateSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseSession
media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.CloseSession_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.CloseSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveSession
media.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.RemoveSession_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModule.RemoveSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.ContentDecryptionModulePtr = media.mojom.ContentDecryptionModuleRemote;
media.mojom.ContentDecryptionModuleRequest = media.mojom.ContentDecryptionModulePendingReceiver;


// Interface: ContentDecryptionModuleClient
media.mojom.ContentDecryptionModuleClient = {};

media.mojom.ContentDecryptionModuleClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.ContentDecryptionModuleClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.ContentDecryptionModuleClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.ContentDecryptionModuleClientPendingReceiver,
      handle);
    this.$ = new media.mojom.ContentDecryptionModuleClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.ContentDecryptionModuleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSessionMessage(session_id, message_type, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec,
      null,
      [session_id, message_type, message]);
  }

  onSessionClosed(session_id, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec,
      null,
      [session_id, reason]);
  }

  onSessionKeysChange(session_id, has_additional_usable_key, keys_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec,
      null,
      [session_id, has_additional_usable_key, keys_info]);
  }

  onSessionExpirationUpdate(session_id, new_expiry_time_sec) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec,
      null,
      [session_id, new_expiry_time_sec]);
  }

};

media.mojom.ContentDecryptionModuleClient.getRemote = function() {
  let remote = new media.mojom.ContentDecryptionModuleClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.ContentDecryptionModuleClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnSessionMessage
media.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModuleClient.OnSessionMessage_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSessionClosed
media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModuleClient.OnSessionClosed_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSessionKeysChange
media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModuleClient.OnSessionKeysChange_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'has_additional_usable_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'keys_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSessionExpirationUpdate
media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ContentDecryptionModuleClient.OnSessionExpirationUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_expiry_time_sec', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.ContentDecryptionModuleClientPtr = media.mojom.ContentDecryptionModuleClientRemote;
media.mojom.ContentDecryptionModuleClientRequest = media.mojom.ContentDecryptionModuleClientPendingReceiver;


// Interface: CdmFactory
media.mojom.CdmFactory = {};

media.mojom.CdmFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.CdmFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.CdmFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCdm(cdm_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.CdmFactory_CreateCdm_ParamsSpec,
      media.mojom.CdmFactory_CreateCdm_ResponseParamsSpec,
      [cdm_config]);
  }

};

media.mojom.CdmFactory.getRemote = function() {
  let remote = new media.mojom.CdmFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCdm
media.mojom.CdmFactory_CreateCdm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmFactory.CreateCdm_Params',
      packedSize: 16,
      fields: [
        { name: 'cdm_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.CdmFactory_CreateCdm_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmFactory.CreateCdm_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'cdm', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cdm_context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.CdmFactoryPtr = media.mojom.CdmFactoryRemote;
media.mojom.CdmFactoryRequest = media.mojom.CdmFactoryPendingReceiver;

