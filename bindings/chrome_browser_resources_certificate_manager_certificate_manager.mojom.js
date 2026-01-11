// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/resources/certificate_manager/certificate_manager.mojom
 // Module: certificate_manager.mojom

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
 

 mojo.internal.bindings.certificate_manager = mojo.internal.bindings.certificate_manager || {};
mojo.internal.bindings.certificate_manager.mojom = mojo.internal.bindings.certificate_manager.mojom || {};

mojo.internal.bindings.certificate_manager.mojom.CertificateSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.certificate_manager.mojom.SuccessResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.certificate_manager.mojom.ActionResultSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.SummaryCertInfoSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertManagementMetadataSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactory = {};
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactory.$interfaceName = 'certificate_manager.mojom.CertificateManagerPageHandlerFactory';
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler = {};
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler.$interfaceName = 'certificate_manager.mojom.CertificateManagerPageHandler';
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage = {};
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage.$interfaceName = 'certificate_manager.mojom.CertificateManagerPage';
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_TriggerReload_ParamsSpec = { $: {} };
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec = { $: {} };

// Enum: CertificateSource
mojo.internal.bindings.certificate_manager.mojom.CertificateSource = {
  kChromeRootStore: 1,
  kPlatformClientCert: 2,
  kEnterpriseTrustedCerts: 3,
  kEnterpriseIntermediateCerts: 4,
  kEnterpriseDistrustedCerts: 5,
  kPlatformUserTrustedCerts: 6,
  kPlatformUserIntermediateCerts: 7,
  kPlatformUserDistrustedCerts: 8,
  EnableIf: 8,
  EnableIf: 8,
  kUserTrustedCerts: 9,
  kUserIntermediateCerts: 10,
  kUserDistrustedCerts: 11,
};

// Enum: SuccessResult
mojo.internal.bindings.certificate_manager.mojom.SuccessResult = {
  kSuccess: 0,
};

// Union: ActionResult
mojo.internal.Union(
    mojo.internal.bindings.certificate_manager.mojom.ActionResultSpec, 'certificate_manager.mojom.ActionResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_success': {
        'ordinal': 1,
        'type': mojo.internal.bindings.certificate_manager.mojom.SuccessResultSpec.$,
        'nullable': false,
      },
    });

// Struct: SummaryCertInfo
mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.SummaryCertInfoSpec, 'certificate_manager.mojom.SummaryCertInfo', [
      mojo.internal.StructField('arg_sha256hash_hex', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_deletable', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CertManagementMetadata
mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertManagementMetadataSpec, 'certificate_manager.mojom.CertManagementMetadata', [
      mojo.internal.StructField('arg_num_user_certs', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_include_system_trust_store', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_num_user_added_system_certs', 5, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_include_system_trust_store_managed', 6, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_num_policy_certs', 7, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_show_user_certs_ui', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CertificateManagerPageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'certificate_manager.mojom.CertificateManagerPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createCertificateManagerPageHandler(arg_page, arg_handler) {
    return this.$.createCertificateManagerPageHandler(arg_page, arg_handler);
  }
};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CertificateManagerPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createCertificateManagerPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'certificate_manager.mojom.CertificateManagerPageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CertificateManagerPageHandlerFactory', [
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
        
        // Try Method 0: CreateCertificateManagerPageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCertificateManagerPageHandler (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCertificateManagerPageHandler');
          const result = this.impl.createCertificateManagerPageHandler(params.arg_page, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactoryReceiver = mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactoryReceiver;

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactoryPtr = mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactoryRemote;
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactoryRequest = mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerFactoryPendingReceiver;


// Interface: CertificateManagerPageHandler
mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.certificate_manager.mojom.CertificateSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParams', [
      mojo.internal.StructField('arg_certs', 0, 0, mojo.internal.Array(mojo.internal.bindings.certificate_manager.mojom.SummaryCertInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParams', [
      mojo.internal.StructField('arg_metadata', 0, 0, mojo.internal.bindings.certificate_manager.mojom.CertManagementMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.certificate_manager.mojom.CertificateSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sha256_hash_hex', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.certificate_manager.mojom.CertificateSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.certificate_manager.mojom.CertificateSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.certificate_manager.mojom.ActionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.certificate_manager.mojom.CertificateSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.certificate_manager.mojom.ActionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.certificate_manager.mojom.CertificateSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_sha256_hash_hex', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.certificate_manager.mojom.ActionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_Params', [
      mojo.internal.StructField('arg_include', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerRemote = class {
  static get $interfaceName() {
    return 'certificate_manager.mojom.CertificateManagerPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getCertificates(arg_source) {
    return this.$.getCertificates(arg_source);
  }
  getCertManagementMetadata() {
    return this.$.getCertManagementMetadata();
  }
  viewCertificate(arg_source, arg_sha256_hash_hex) {
    return this.$.viewCertificate(arg_source, arg_sha256_hash_hex);
  }
  exportCertificates(arg_source) {
    return this.$.exportCertificates(arg_source);
  }
  importCertificate(arg_source) {
    return this.$.importCertificate(arg_source);
  }
  importAndBindCertificate(arg_source) {
    return this.$.importAndBindCertificate(arg_source);
  }
  deleteCertificate(arg_source, arg_display_name, arg_sha256_hash_hex) {
    return this.$.deleteCertificate(arg_source, arg_display_name, arg_sha256_hash_hex);
  }
  showNativeManageCertificates() {
    return this.$.showNativeManageCertificates();
  }
  setIncludeSystemTrustStore(arg_include) {
    return this.$.setIncludeSystemTrustStore(arg_include);
  }
};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CertificateManagerPageHandler', [
      { explicit: null },
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

  getCertificates(arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec,
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParamsSpec,
      [arg_source],
      false);
  }

  getCertManagementMetadata() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec,
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec,
      [],
      false);
  }

  viewCertificate(arg_source, arg_sha256_hash_hex) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec,
      null,
      [arg_source, arg_sha256_hash_hex],
      false);
  }

  exportCertificates(arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec,
      null,
      [arg_source],
      false);
  }

  importCertificate(arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec,
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec,
      [arg_source],
      false);
  }

  importAndBindCertificate(arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec,
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec,
      [arg_source],
      false);
  }

  deleteCertificate(arg_source, arg_display_name, arg_sha256_hash_hex) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec,
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec,
      [arg_source, arg_display_name, arg_sha256_hash_hex],
      false);
  }

  showNativeManageCertificates() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec,
      null,
      [],
      false);
  }

  setIncludeSystemTrustStore(arg_include) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec,
      null,
      [arg_include],
      false);
  }

};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'certificate_manager.mojom.CertificateManagerPageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CertificateManagerPageHandler', [
      { explicit: null },
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
        
        // Try Method 0: GetCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCertificates (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetCertManagementMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCertManagementMetadata (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ViewCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ViewCertificate (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ExportCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExportCertificates (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ImportCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImportCertificate (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ImportAndBindCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImportAndBindCertificate (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DeleteCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteCertificate (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ShowNativeManageCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowNativeManageCertificates (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetIncludeSystemTrustStore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIncludeSystemTrustStore (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCertificates');
          const result = this.impl.getCertificates(params.arg_source);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCertificates FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCertManagementMetadata');
          const result = this.impl.getCertManagementMetadata();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCertManagementMetadata FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.viewCertificate');
          const result = this.impl.viewCertificate(params.arg_source, params.arg_sha256_hash_hex);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exportCertificates');
          const result = this.impl.exportCertificates(params.arg_source);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.importCertificate');
          const result = this.impl.importCertificate(params.arg_source);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ImportCertificate FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.importAndBindCertificate');
          const result = this.impl.importAndBindCertificate(params.arg_source);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ImportAndBindCertificate FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteCertificate');
          const result = this.impl.deleteCertificate(params.arg_source, params.arg_display_name, params.arg_sha256_hash_hex);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteCertificate FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showNativeManageCertificates');
          const result = this.impl.showNativeManageCertificates();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIncludeSystemTrustStore');
          const result = this.impl.setIncludeSystemTrustStore(params.arg_include);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerReceiver = mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerReceiver;

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerPtr = mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerRemote;
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerRequest = mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageHandlerPendingReceiver;


// Interface: CertificateManagerPage
mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ResponseParams', [
      mojo.internal.StructField('arg_password', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_Params', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ResponseParams', [
      mojo.internal.StructField('arg_confirmed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_TriggerReload_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_TriggerReload_Params', [
      mojo.internal.StructField('arg_sources', 0, 0, mojo.internal.Array(mojo.internal.bindings.certificate_manager.mojom.CertificateSourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageRemote = class {
  static get $interfaceName() {
    return 'certificate_manager.mojom.CertificateManagerPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  askForImportPassword() {
    return this.$.askForImportPassword();
  }
  askForConfirmation(arg_title, arg_message) {
    return this.$.askForConfirmation(arg_title, arg_message);
  }
  triggerReload(arg_sources) {
    return this.$.triggerReload(arg_sources);
  }
  triggerMetadataUpdate() {
    return this.$.triggerMetadataUpdate();
  }
};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CertificateManagerPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  askForImportPassword() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec,
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ResponseParamsSpec,
      [],
      false);
  }

  askForConfirmation(arg_title, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec,
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ResponseParamsSpec,
      [arg_title, arg_message],
      false);
  }

  triggerReload(arg_sources) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_TriggerReload_ParamsSpec,
      null,
      [arg_sources],
      false);
  }

  triggerMetadataUpdate() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage.getRemote = function() {
  let remote = new mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'certificate_manager.mojom.CertificateManagerPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CertificateManagerPage', [
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
        
        // Try Method 0: AskForImportPassword
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AskForImportPassword (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AskForConfirmation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AskForConfirmation (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: TriggerReload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_TriggerReload_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerReload (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: TriggerMetadataUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerMetadataUpdate (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.askForImportPassword');
          const result = this.impl.askForImportPassword();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AskForImportPassword FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.askForConfirmation');
          const result = this.impl.askForConfirmation(params.arg_title, params.arg_message);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AskForConfirmation FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_TriggerReload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.triggerReload');
          const result = this.impl.triggerReload(params.arg_sources);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.triggerMetadataUpdate');
          const result = this.impl.triggerMetadataUpdate();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageReceiver = mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageReceiver;

mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPagePtr = mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageRemote;
mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPageRequest = mojo.internal.bindings.certificate_manager.mojom.CertificateManagerPagePendingReceiver;

