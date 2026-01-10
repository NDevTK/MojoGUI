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

  setClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.ContentDecryptionModule_SetClient_ParamsSpec,
      null,
      [client],
      false);
  }

  setServerCertificate(certificate_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec,
      media.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec,
      [certificate_data],
      false);
  }

  getStatusForPolicy(min_hdcp_version) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec,
      media.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec,
      [min_hdcp_version],
      false);
  }

  createSessionAndGenerateRequest(session_type, init_data_type, init_data) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec,
      media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec,
      [session_type, init_data_type, init_data],
      false);
  }

  loadSession(session_type, session_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec,
      media.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec,
      [session_type, session_id],
      false);
  }

  updateSession(session_id, response) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec,
      media.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec,
      [session_id, response],
      false);
  }

  closeSession(session_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec,
      media.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec,
      [session_id],
      false);
  }

  removeSession(session_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
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
             decoder.decodeStructInline(media.mojom.ContentDecryptionModule_SetClient_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec);
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
          const params = decoder.decodeStructInline(media.mojom.ContentDecryptionModule_SetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setServerCertificate');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStatusForPolicy');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSessionAndGenerateRequest');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.ContentDecryptionModule_LoadSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadSession');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateSession');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.ContentDecryptionModule_CloseSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeSession');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeSession');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinals = window.mojoScrambler.getOrdinals('ContentDecryptionModuleClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onSessionMessage(session_id, message_type, message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec,
      null,
      [session_id, message_type, message],
      false);
  }

  onSessionClosed(session_id, reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec,
      null,
      [session_id, reason],
      false);
  }

  onSessionKeysChange(session_id, has_additional_usable_key, keys_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec,
      null,
      [session_id, has_additional_usable_key, keys_info],
      false);
  }

  onSessionExpirationUpdate(session_id, new_expiry_time_sec) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
             decoder.decodeStructInline(media.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec);
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
          const params = decoder.decodeStructInline(media.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionMessage');
          const result = this.impl.onSessionMessage(params.session_id, params.message_type, params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionClosed');
          const result = this.impl.onSessionClosed(params.session_id, params.reason);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionKeysChange');
          const result = this.impl.onSessionKeysChange(params.session_id, params.has_additional_usable_key, params.keys_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec.$.structSpec);
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
    this.ordinals = window.mojoScrambler.getOrdinals('CdmFactory', [
      { explicit: null },
    ]);
  }

  createCdm(cdm_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
             decoder.decodeStructInline(media.mojom.CdmFactory_CreateCdm_ParamsSpec);
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
          const params = decoder.decodeStructInline(media.mojom.CdmFactory_CreateCdm_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCdm');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.CdmFactoryReceiver = media.mojom.CdmFactoryReceiver;

media.mojom.CdmFactoryPtr = media.mojom.CdmFactoryRemote;
media.mojom.CdmFactoryRequest = media.mojom.CdmFactoryPendingReceiver;

