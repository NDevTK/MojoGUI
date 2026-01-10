// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/content_decryption_module.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};

media.mojom.CdmKeyStatusSpec = { $: mojo.internal.Enum() };
media.mojom.CdmConfigSpec = { $: {} };
media.mojom.CdmPromiseResultSpec = { $: {} };
media.mojom.CdmKeyInformationSpec = { $: {} };
media.mojom.CdmContextSpec = { $: {} };
media.mojom.ContentDecryptionModule = {};
media.mojom.ContentDecryptionModule.$interfaceName = 'media.mojom.ContentDecryptionModule';
media.mojom.ContentDecryptionModule_SetClient_ParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec = { $: {} };
media.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec = { $: {} };
media.mojom.ContentDecryptionModuleClient = {};
media.mojom.ContentDecryptionModuleClient.$interfaceName = 'media.mojom.ContentDecryptionModuleClient';
media.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec = { $: {} };
media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec = { $: {} };
media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec = { $: {} };
media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec = { $: {} };
media.mojom.CdmFactory = {};
media.mojom.CdmFactory.$interfaceName = 'media.mojom.CdmFactory';
media.mojom.CdmFactory_CreateCdm_ParamsSpec = { $: {} };
media.mojom.CdmFactory_CreateCdm_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    media.mojom.CdmConfigSpec, 'media.mojom.CdmConfig', [
      mojo.internal.StructField('key_system', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('allow_distinctive_identifier', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_persistent_state', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_hw_secure_codecs', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CdmPromiseResult
mojo.internal.Struct(
    media.mojom.CdmPromiseResultSpec, 'media.mojom.CdmPromiseResult', [
      mojo.internal.StructField('Exception', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('exception', 8, 0, media.mojom.ExceptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('system_code', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('success', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CdmKeyInformation
mojo.internal.Struct(
    media.mojom.CdmKeyInformationSpec, 'media.mojom.CdmKeyInformation', [
      mojo.internal.StructField('key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, media.mojom.CdmKeyStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('system_code', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CdmContext
mojo.internal.Struct(
    media.mojom.CdmContextSpec, 'media.mojom.CdmContext', [
      mojo.internal.StructField('cdm_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decryptor', 8, 0, mojo.internal.InterfaceProxy(media.mojom.DecryptorRemote), null, true, 0, undefined),
      mojo.internal.StructField('requires_media_foundation_renderer', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ContentDecryptionModule
mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_SetClient_ParamsSpec, 'media.mojom.ContentDecryptionModule_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec, 'media.mojom.ContentDecryptionModule_SetServerCertificate_Params', [
      mojo.internal.StructField('certificate_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec, 'media.mojom.ContentDecryptionModule_GetStatusForPolicy_Params', [
      mojo.internal.StructField('min_hdcp_version', 0, 0, media.mojom.HdcpVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_status', 8, 0, media.mojom.CdmKeyStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec, 'media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_Params', [
      mojo.internal.StructField('session_type', 0, 0, media.mojom.CdmSessionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('init_data_type', 8, 0, media.mojom.EmeInitDataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('init_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec, 'media.mojom.ContentDecryptionModule_LoadSession_Params', [
      mojo.internal.StructField('session_type', 0, 0, media.mojom.CdmSessionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_LoadSession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec, 'media.mojom.ContentDecryptionModule_UpdateSession_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_UpdateSession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec, 'media.mojom.ContentDecryptionModule_CloseSession_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_CloseSession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec, 'media.mojom.ContentDecryptionModule_RemoveSession_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_RemoveSession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [client],
      false);
  }

  setServerCertificate(certificate_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec,
      media.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec,
      [certificate_data],
      false);
  }

  getStatusForPolicy(min_hdcp_version) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec,
      media.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec,
      [min_hdcp_version],
      false);
  }

  createSessionAndGenerateRequest(session_type, init_data_type, init_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec,
      media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec,
      [session_type, init_data_type, init_data],
      false);
  }

  loadSession(session_type, session_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec,
      media.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec,
      [session_type, session_id],
      false);
  }

  updateSession(session_id, response) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec,
      media.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec,
      [session_id, response],
      false);
  }

  closeSession(session_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec,
      media.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec,
      [session_id],
      false);
  }

  removeSession(session_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec,
      media.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec,
      [session_id],
      false);
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

media.mojom.ContentDecryptionModuleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.ContentDecryptionModule_SetClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setClient(params.client);
          break;
        }
        case 1: {
          const params = media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setServerCertificate(params.certificate_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getStatusForPolicy(params.min_hdcp_version);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createSessionAndGenerateRequest(params.session_type, params.init_data_type, params.init_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadSession(params.session_type, params.session_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateSession(params.session_id, params.response);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeSession(params.session_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = media.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removeSession(params.session_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

media.mojom.ContentDecryptionModuleReceiver = media.mojom.ContentDecryptionModuleReceiver;

media.mojom.ContentDecryptionModulePtr = media.mojom.ContentDecryptionModuleRemote;
media.mojom.ContentDecryptionModuleRequest = media.mojom.ContentDecryptionModulePendingReceiver;


// Interface: ContentDecryptionModuleClient
mojo.internal.Struct(
    media.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec, 'media.mojom.ContentDecryptionModuleClient_OnSessionMessage_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message_type', 8, 0, media.mojom.CdmMessageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec, 'media.mojom.ContentDecryptionModuleClient_OnSessionClosed_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, media.mojom.CdmSessionClosedReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec, 'media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('keys_info', 8, 0, mojo.internal.Array(media.mojom.CdmKeyInformationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('has_additional_usable_key', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec, 'media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_expiry_time_sec', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [session_id, message_type, message],
      false);
  }

  onSessionClosed(session_id, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec,
      null,
      [session_id, reason],
      false);
  }

  onSessionKeysChange(session_id, has_additional_usable_key, keys_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec,
      null,
      [session_id, has_additional_usable_key, keys_info],
      false);
  }

  onSessionExpirationUpdate(session_id, new_expiry_time_sec) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec,
      null,
      [session_id, new_expiry_time_sec],
      false);
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

media.mojom.ContentDecryptionModuleClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSessionMessage(params.session_id, params.message_type, params.message);
          break;
        }
        case 1: {
          const params = media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSessionClosed(params.session_id, params.reason);
          break;
        }
        case 2: {
          const params = media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSessionKeysChange(params.session_id, params.has_additional_usable_key, params.keys_info);
          break;
        }
        case 3: {
          const params = media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSessionExpirationUpdate(params.session_id, params.new_expiry_time_sec);
          break;
        }
      }
    }});
  }
};

media.mojom.ContentDecryptionModuleClientReceiver = media.mojom.ContentDecryptionModuleClientReceiver;

media.mojom.ContentDecryptionModuleClientPtr = media.mojom.ContentDecryptionModuleClientRemote;
media.mojom.ContentDecryptionModuleClientRequest = media.mojom.ContentDecryptionModuleClientPendingReceiver;


// Interface: CdmFactory
mojo.internal.Struct(
    media.mojom.CdmFactory_CreateCdm_ParamsSpec, 'media.mojom.CdmFactory_CreateCdm_Params', [
      mojo.internal.StructField('cdm_config', 0, 0, media.mojom.CdmConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmFactory_CreateCdm_ResponseParamsSpec, 'media.mojom.CdmFactory_CreateCdm_ResponseParams', [
      mojo.internal.StructField('cdm', 0, 0, mojo.internal.InterfaceProxy(media.mojom.ContentDecryptionModuleSpec), null, true, 0, undefined),
      mojo.internal.StructField('cdm_context', 8, 0, media.mojom.CdmContextSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('status', 16, 0, media.mojom.CreateCdmStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [cdm_config],
      false);
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

media.mojom.CdmFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.CdmFactory_CreateCdm_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createCdm(params.cdm_config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.CdmFactory_CreateCdm_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

media.mojom.CdmFactoryReceiver = media.mojom.CdmFactoryReceiver;

media.mojom.CdmFactoryPtr = media.mojom.CdmFactoryRemote;
media.mojom.CdmFactoryRequest = media.mojom.CdmFactoryPendingReceiver;

