// Auto-generated MojoJS binding
 // Source: chromium_src/media/mojo/mojom/content_decryption_module.mojom
 // Module: media.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.media.mojom = mojo.internal.bindings.media.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.media.mojom.EmeInitDataTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.CdmSessionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.CdmMessageTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.CdmKeyStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.HdcpVersionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.ExceptionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.CdmConfigSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmPromiseResultSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmKeyInformationSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmContextSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule = {};
mojo.internal.bindings.media.mojom.ContentDecryptionModule.$interfaceName = 'media.mojom.ContentDecryptionModule';
mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetClient_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient = {};
mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient.$interfaceName = 'media.mojom.ContentDecryptionModuleClient';
mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmFactory = {};
mojo.internal.bindings.media.mojom.CdmFactory.$interfaceName = 'media.mojom.CdmFactory';
mojo.internal.bindings.media.mojom.CdmFactory_CreateCdm_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.CdmFactory_CreateCdm_ResponseParamsSpec = { $: {} };

// Enum: EmeInitDataType
mojo.internal.bindings.media.mojom.EmeInitDataType = {
};

// Enum: CdmSessionType
mojo.internal.bindings.media.mojom.CdmSessionType = {
};

// Enum: CdmMessageType
mojo.internal.bindings.media.mojom.CdmMessageType = {
};

// Enum: CdmKeyStatus
mojo.internal.bindings.media.mojom.CdmKeyStatus = {
  USABLE: 0,
  INTERNAL_ERROR: 1,
  EXPIRED: 2,
  OUTPUT_RESTRICTED: 3,
  OUTPUT_DOWNSCALED: 4,
  KEY_STATUS_PENDING: 5,
  RELEASED: 6,
  USABLE_IN_FUTURE: 7,
};

// Enum: HdcpVersion
mojo.internal.bindings.media.mojom.HdcpVersion = {
};

// Enum: Exception
mojo.internal.bindings.media.mojom.Exception = {
};

// Struct: CdmConfig
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmConfigSpec, 'media.mojom.CdmConfig', [
      mojo.internal.StructField('arg_key_system', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_allow_distinctive_identifier', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_persistent_state', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_use_hw_secure_codecs', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CdmPromiseResult
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmPromiseResultSpec, 'media.mojom.CdmPromiseResult', [
      mojo.internal.StructField('arg_Exception', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_exception', 8, 0, mojo.internal.bindings.media.mojom.ExceptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_message', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_system_code', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_success', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CdmKeyInformation
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmKeyInformationSpec, 'media.mojom.CdmKeyInformation', [
      mojo.internal.StructField('arg_key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.media.mojom.CdmKeyStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_system_code', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CdmContext
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmContextSpec, 'media.mojom.CdmContext', [
      mojo.internal.StructField('arg_cdm_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_decryptor', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.DecryptorRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_requires_media_foundation_renderer', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ContentDecryptionModule
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetClient_ParamsSpec, 'media.mojom.ContentDecryptionModule_SetClient_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec, 'media.mojom.ContentDecryptionModule_SetServerCertificate_Params', [
      mojo.internal.StructField('arg_certificate_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec, 'media.mojom.ContentDecryptionModule_GetStatusForPolicy_Params', [
      mojo.internal.StructField('arg_min_hdcp_version', 0, 0, mojo.internal.bindings.media.mojom.HdcpVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_status', 8, 0, mojo.internal.bindings.media.mojom.CdmKeyStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec, 'media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_Params', [
      mojo.internal.StructField('arg_session_type', 0, 0, mojo.internal.bindings.media.mojom.CdmSessionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_init_data_type', 8, 0, mojo.internal.bindings.media.mojom.EmeInitDataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_init_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec, 'media.mojom.ContentDecryptionModule_LoadSession_Params', [
      mojo.internal.StructField('arg_session_type', 0, 0, mojo.internal.bindings.media.mojom.CdmSessionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_LoadSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec, 'media.mojom.ContentDecryptionModule_UpdateSession_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_response', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_UpdateSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec, 'media.mojom.ContentDecryptionModule_CloseSession_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_CloseSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec, 'media.mojom.ContentDecryptionModule_RemoveSession_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec, 'media.mojom.ContentDecryptionModule_RemoveSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.media.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.ContentDecryptionModulePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.ContentDecryptionModuleRemote = class {
  static get $interfaceName() {
    return 'media.mojom.ContentDecryptionModule';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.ContentDecryptionModulePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.ContentDecryptionModuleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setClient(arg_client) {
    return this.$.setClient(arg_client);
  }
  setServerCertificate(arg_certificate_data) {
    return this.$.setServerCertificate(arg_certificate_data);
  }
  getStatusForPolicy(arg_min_hdcp_version) {
    return this.$.getStatusForPolicy(arg_min_hdcp_version);
  }
  createSessionAndGenerateRequest(arg_session_type, arg_init_data_type, arg_init_data) {
    return this.$.createSessionAndGenerateRequest(arg_session_type, arg_init_data_type, arg_init_data);
  }
  loadSession(arg_session_type, arg_session_id) {
    return this.$.loadSession(arg_session_type, arg_session_id);
  }
  updateSession(arg_session_id, arg_response) {
    return this.$.updateSession(arg_session_id, arg_response);
  }
  closeSession(arg_session_id) {
    return this.$.closeSession(arg_session_id);
  }
  removeSession(arg_session_id) {
    return this.$.removeSession(arg_session_id);
  }
};

mojo.internal.bindings.media.mojom.ContentDecryptionModuleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ContentDecryptionModule', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setClient(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetClient_ParamsSpec,
      null,
      [arg_client],
      false);
  }

  setServerCertificate(arg_certificate_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec,
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec,
      [arg_certificate_data],
      false);
  }

  getStatusForPolicy(arg_min_hdcp_version) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec,
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec,
      [arg_min_hdcp_version],
      false);
  }

  createSessionAndGenerateRequest(arg_session_type, arg_init_data_type, arg_init_data) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec,
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec,
      [arg_session_type, arg_init_data_type, arg_init_data],
      false);
  }

  loadSession(arg_session_type, arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec,
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec,
      [arg_session_type, arg_session_id],
      false);
  }

  updateSession(arg_session_id, arg_response) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec,
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec,
      [arg_session_id, arg_response],
      false);
  }

  closeSession(arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec,
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec,
      [arg_session_id],
      false);
  }

  removeSession(arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec,
      mojo.internal.bindings.media.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec,
      [arg_session_id],
      false);
  }

};

mojo.internal.bindings.media.mojom.ContentDecryptionModule.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.ContentDecryptionModuleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.ContentDecryptionModule',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.ContentDecryptionModuleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ContentDecryptionModule', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetServerCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetServerCertificate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetStatusForPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStatusForPolicy (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateSessionAndGenerateRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSessionAndGenerateRequest (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: LoadSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadSession (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UpdateSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateSession (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CloseSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseSession (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RemoveSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveSession (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.arg_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setServerCertificate');
          const result = this.impl.setServerCertificate(params.arg_certificate_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetServerCertificate FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStatusForPolicy');
          const result = this.impl.getStatusForPolicy(params.arg_min_hdcp_version);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetStatusForPolicy FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSessionAndGenerateRequest');
          const result = this.impl.createSessionAndGenerateRequest(params.arg_session_type, params.arg_init_data_type, params.arg_init_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateSessionAndGenerateRequest FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadSession');
          const result = this.impl.loadSession(params.arg_session_type, params.arg_session_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadSession FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateSession');
          const result = this.impl.updateSession(params.arg_session_id, params.arg_response);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateSession FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeSession');
          const result = this.impl.closeSession(params.arg_session_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CloseSession FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeSession');
          const result = this.impl.removeSession(params.arg_session_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoveSession FAILED:', e));
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

mojo.internal.bindings.media.mojom.ContentDecryptionModuleReceiver = mojo.internal.bindings.media.mojom.ContentDecryptionModuleReceiver;

mojo.internal.bindings.media.mojom.ContentDecryptionModulePtr = mojo.internal.bindings.media.mojom.ContentDecryptionModuleRemote;
mojo.internal.bindings.media.mojom.ContentDecryptionModuleRequest = mojo.internal.bindings.media.mojom.ContentDecryptionModulePendingReceiver;


// Interface: ContentDecryptionModuleClient
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec, 'media.mojom.ContentDecryptionModuleClient_OnSessionMessage_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_message_type', 8, 0, mojo.internal.bindings.media.mojom.CdmMessageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec, 'media.mojom.ContentDecryptionModuleClient_OnSessionClosed_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_reason', 8, 0, mojo.internal.bindings.media.mojom.CdmSessionClosedReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec, 'media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_keys_info', 8, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.CdmKeyInformationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_has_additional_usable_key', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec, 'media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_expiry_time_sec', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.ContentDecryptionModuleClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSessionMessage(arg_session_id, arg_message_type, arg_message) {
    return this.$.onSessionMessage(arg_session_id, arg_message_type, arg_message);
  }
  onSessionClosed(arg_session_id, arg_reason) {
    return this.$.onSessionClosed(arg_session_id, arg_reason);
  }
  onSessionKeysChange(arg_session_id, arg_has_additional_usable_key, arg_keys_info) {
    return this.$.onSessionKeysChange(arg_session_id, arg_has_additional_usable_key, arg_keys_info);
  }
  onSessionExpirationUpdate(arg_session_id, arg_new_expiry_time_sec) {
    return this.$.onSessionExpirationUpdate(arg_session_id, arg_new_expiry_time_sec);
  }
};

mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ContentDecryptionModuleClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onSessionMessage(arg_session_id, arg_message_type, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec,
      null,
      [arg_session_id, arg_message_type, arg_message],
      false);
  }

  onSessionClosed(arg_session_id, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec,
      null,
      [arg_session_id, arg_reason],
      false);
  }

  onSessionKeysChange(arg_session_id, arg_has_additional_usable_key, arg_keys_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec,
      null,
      [arg_session_id, arg_has_additional_usable_key, arg_keys_info],
      false);
  }

  onSessionExpirationUpdate(arg_session_id, arg_new_expiry_time_sec) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec,
      null,
      [arg_session_id, arg_new_expiry_time_sec],
      false);
  }

};

mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.ContentDecryptionModuleClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ContentDecryptionModuleClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnSessionMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionMessage');
          const result = this.impl.onSessionMessage(params.arg_session_id, params.arg_message_type, params.arg_message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionClosed');
          const result = this.impl.onSessionClosed(params.arg_session_id, params.arg_reason);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionKeysChange');
          const result = this.impl.onSessionKeysChange(params.arg_session_id, params.arg_has_additional_usable_key, params.arg_keys_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionExpirationUpdate');
          const result = this.impl.onSessionExpirationUpdate(params.arg_session_id, params.arg_new_expiry_time_sec);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientReceiver = mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientReceiver;

mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientPtr = mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientRemote;
mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientRequest = mojo.internal.bindings.media.mojom.ContentDecryptionModuleClientPendingReceiver;


// Interface: CdmFactory
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmFactory_CreateCdm_ParamsSpec, 'media.mojom.CdmFactory_CreateCdm_Params', [
      mojo.internal.StructField('arg_cdm_config', 0, 0, mojo.internal.bindings.media.mojom.CdmConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.CdmFactory_CreateCdm_ResponseParamsSpec, 'media.mojom.CdmFactory_CreateCdm_ResponseParams', [
      mojo.internal.StructField('arg_cdm', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.ContentDecryptionModuleSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_cdm_context', 8, 0, mojo.internal.bindings.media.mojom.CdmContextSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_status', 16, 0, mojo.internal.bindings.media.mojom.CreateCdmStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.media.mojom.CdmFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.CdmFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.CdmFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.CdmFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createCdm(arg_cdm_config) {
    return this.$.createCdm(arg_cdm_config);
  }
};

mojo.internal.bindings.media.mojom.CdmFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CdmFactory', [
      { explicit: null },
    ]);
  }

  createCdm(arg_cdm_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.CdmFactory_CreateCdm_ParamsSpec,
      mojo.internal.bindings.media.mojom.CdmFactory_CreateCdm_ResponseParamsSpec,
      [arg_cdm_config],
      false);
  }

};

mojo.internal.bindings.media.mojom.CdmFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.CdmFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.CdmFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CdmFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateCdm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmFactory_CreateCdm_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCdm (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.CdmFactory_CreateCdm_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCdm');
          const result = this.impl.createCdm(params.arg_cdm_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.CdmFactory_CreateCdm_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateCdm FAILED:', e));
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

mojo.internal.bindings.media.mojom.CdmFactoryReceiver = mojo.internal.bindings.media.mojom.CdmFactoryReceiver;

mojo.internal.bindings.media.mojom.CdmFactoryPtr = mojo.internal.bindings.media.mojom.CdmFactoryRemote;
mojo.internal.bindings.media.mojom.CdmFactoryRequest = mojo.internal.bindings.media.mojom.CdmFactoryPendingReceiver;

