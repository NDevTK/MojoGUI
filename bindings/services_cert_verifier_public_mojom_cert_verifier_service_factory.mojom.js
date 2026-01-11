// Auto-generated MojoJS binding
 // Source: chromium_src/services/cert_verifier/public/mojom/cert_verifier_service_factory.mojom
 // Module: cert_verifier.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.cert_verifier = mojo.internal.bindings.cert_verifier || {};
mojo.internal.bindings.cert_verifier.mojom = mojo.internal.bindings.cert_verifier.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};

mojo.internal.bindings.cert_verifier.mojom.CertificateTrustSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierCreationParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.ChromeRootCertInfoSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.ChromeRootMerkleTreeCertInfoSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.ChromeRootStoreInfoSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.PlatformCertInfoSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.PlatformRootStoreInfoSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory = {};
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactorySpec = { $ : {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory.$interfaceName = 'cert_verifier.mojom.CertVerifierServiceFactory';
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec = { $: {} };

// Enum: CertificateTrust
mojo.internal.bindings.cert_verifier.mojom.CertificateTrust = {
  kUnspecified: 0,
  kDistrusted: 1,
  kTrusted: 2,
};

// Struct: CertVerifierCreationParams
mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierCreationParamsSpec, 'cert_verifier.mojom.CertVerifierCreationParams', [
      mojo.internal.StructField('arg_initial_additional_certificates', 0, 0, mojo.internal.bindings.cert_verifier.mojom.AdditionalCertificatesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ct_policy', 8, 0, mojo.internal.bindings.network.mojom.CTPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_wait_for_update', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ChromeRootCertInfo
mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.ChromeRootCertInfoSpec, 'cert_verifier.mojom.ChromeRootCertInfo', [
      mojo.internal.StructField('arg_sha256hash_hex', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_cert', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ChromeRootMerkleTreeCertInfo
mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.ChromeRootMerkleTreeCertInfoSpec, 'cert_verifier.mojom.ChromeRootMerkleTreeCertInfo', [
      mojo.internal.StructField('arg_log_id_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_min_landmark_id_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_landmark_id_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ChromeRootStoreInfo
mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.ChromeRootStoreInfoSpec, 'cert_verifier.mojom.ChromeRootStoreInfo', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_root_cert_info', 8, 0, mojo.internal.Array(mojo.internal.bindings.cert_verifier.mojom.ChromeRootCertInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_mtc_metadata_update_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_root_mtc_info', 24, 0, mojo.internal.Array(mojo.internal.bindings.cert_verifier.mojom.ChromeRootMerkleTreeCertInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PlatformCertInfo
mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.PlatformCertInfoSpec, 'cert_verifier.mojom.PlatformCertInfo', [
      mojo.internal.StructField('arg_cert', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_trust_setting', 8, 0, mojo.internal.bindings.cert_verifier.mojom.CertificateTrustSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PlatformRootStoreInfo
mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.PlatformRootStoreInfoSpec, 'cert_verifier.mojom.PlatformRootStoreInfo', [
      mojo.internal.StructField('arg_user_added_certs', 0, 0, mojo.internal.Array(mojo.internal.bindings.cert_verifier.mojom.PlatformCertInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CertVerifierServiceFactory
mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_updater', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceUpdaterRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_creation_params', 24, 0, mojo.internal.bindings.cert_verifier.mojom.CertVerifierCreationParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_Params', [
      mojo.internal.StructField('arg_crl_set', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_Params', [
      mojo.internal.StructField('arg_log_list', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CTLogInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_update_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_Params', [
      mojo.internal.StructField('arg_new_root_store', 0, 0, mojo.internal.bindings.mojo_base.mojom.ProtoWrapperSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_Params', [
      mojo.internal.StructField('arg_new_mtc_metadata', 0, 0, mojo.internal.bindings.mojo_base.mojom.ProtoWrapperSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_Params', [
      mojo.internal.StructField('arg_use_crs', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParams', [
      mojo.internal.StructField('arg_root_store_info', 0, 0, mojo.internal.bindings.cert_verifier.mojom.ChromeRootStoreInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParams', [
      mojo.internal.StructField('arg_root_store_info', 0, 0, mojo.internal.bindings.cert_verifier.mojom.PlatformRootStoreInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_Params', [
      mojo.internal.StructField('arg_system_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_system_ticks', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_current_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactoryRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.CertVerifierServiceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getNewCertVerifier(arg_receiver, arg_updater, arg_client, arg_creation_params) {
    return this.$.getNewCertVerifier(arg_receiver, arg_updater, arg_client, arg_creation_params);
  }
  updateCRLSet(arg_crl_set) {
    return this.$.updateCRLSet(arg_crl_set);
  }
  updateCtLogList(arg_log_list, arg_update_time) {
    return this.$.updateCtLogList(arg_log_list, arg_update_time);
  }
  disableCtEnforcement() {
    return this.$.disableCtEnforcement();
  }
  updateChromeRootStore(arg_new_root_store) {
    return this.$.updateChromeRootStore(arg_new_root_store);
  }
  updateMtcMetadata(arg_new_mtc_metadata) {
    return this.$.updateMtcMetadata(arg_new_mtc_metadata);
  }
  setUseChromeRootStore(arg_use_crs) {
    return this.$.setUseChromeRootStore(arg_use_crs);
  }
  getChromeRootStoreInfo() {
    return this.$.getChromeRootStoreInfo();
  }
  getPlatformRootStoreInfo() {
    return this.$.getPlatformRootStoreInfo();
  }
  updateNetworkTime(arg_system_time, arg_system_ticks, arg_current_time) {
    return this.$.updateNetworkTime(arg_system_time, arg_system_ticks, arg_current_time);
  }
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('cert_verifier.mojom.CertVerifierServiceFactory', [
      { explicit: null },
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

  getNewCertVerifier(arg_receiver, arg_updater, arg_client, arg_creation_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec,
      null,
      [arg_receiver, arg_updater, arg_client, arg_creation_params],
      false);
  }

  updateCRLSet(arg_crl_set) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec,
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParamsSpec,
      [arg_crl_set],
      false);
  }

  updateCtLogList(arg_log_list, arg_update_time) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec,
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParamsSpec,
      [arg_log_list, arg_update_time],
      false);
  }

  disableCtEnforcement() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec,
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParamsSpec,
      [],
      false);
  }

  updateChromeRootStore(arg_new_root_store) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec,
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParamsSpec,
      [arg_new_root_store],
      false);
  }

  updateMtcMetadata(arg_new_mtc_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec,
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParamsSpec,
      [arg_new_mtc_metadata],
      false);
  }

  setUseChromeRootStore(arg_use_crs) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec,
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParamsSpec,
      [arg_use_crs],
      false);
  }

  getChromeRootStoreInfo() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec,
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec,
      [],
      false);
  }

  getPlatformRootStoreInfo() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec,
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec,
      [],
      false);
  }

  updateNetworkTime(arg_system_time, arg_system_ticks, arg_current_time) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec,
      null,
      [arg_system_time, arg_system_ticks, arg_current_time],
      false);
  }

};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.CertVerifierServiceFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('cert_verifier.mojom.CertVerifierServiceFactory', [
      { explicit: null },
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
        
        // Try Method 0: GetNewCertVerifier
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNewCertVerifier (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateCRLSet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateCRLSet (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateCtLogList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateCtLogList (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DisableCtEnforcement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableCtEnforcement (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UpdateChromeRootStore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateChromeRootStore (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UpdateMtcMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateMtcMetadata (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetUseChromeRootStore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUseChromeRootStore (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetChromeRootStoreInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetChromeRootStoreInfo (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetPlatformRootStoreInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPlatformRootStoreInfo (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: UpdateNetworkTime
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateNetworkTime (9)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNewCertVerifier');
          const result = this.impl.getNewCertVerifier(params.arg_receiver, params.arg_updater, params.arg_client, params.arg_creation_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateCRLSet');
          const result = this.impl.updateCRLSet(params.arg_crl_set);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateCRLSet FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateCtLogList');
          const result = this.impl.updateCtLogList(params.arg_log_list, params.arg_update_time);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateCtLogList FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableCtEnforcement');
          const result = this.impl.disableCtEnforcement();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DisableCtEnforcement FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateChromeRootStore');
          const result = this.impl.updateChromeRootStore(params.arg_new_root_store);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateChromeRootStore FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateMtcMetadata');
          const result = this.impl.updateMtcMetadata(params.arg_new_mtc_metadata);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateMtcMetadata FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUseChromeRootStore');
          const result = this.impl.setUseChromeRootStore(params.arg_use_crs);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetUseChromeRootStore FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getChromeRootStoreInfo');
          const result = this.impl.getChromeRootStoreInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetChromeRootStoreInfo FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPlatformRootStoreInfo');
          const result = this.impl.getPlatformRootStoreInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPlatformRootStoreInfo FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateNetworkTime');
          const result = this.impl.updateNetworkTime(params.arg_system_time, params.arg_system_ticks, params.arg_current_time);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactoryReceiver = mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactoryReceiver;

mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactoryPtr = mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactoryRemote;
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactoryRequest = mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceFactoryPendingReceiver;

