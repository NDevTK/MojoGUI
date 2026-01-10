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
var cert_verifier = cert_verifier || {};
cert_verifier.mojom = cert_verifier.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};

cert_verifier.mojom.CertificateTrustSpec = { $: mojo.internal.Enum() };
cert_verifier.mojom.CertVerifierCreationParamsSpec = { $: {} };
cert_verifier.mojom.ChromeRootCertInfoSpec = { $: {} };
cert_verifier.mojom.ChromeRootMerkleTreeCertInfoSpec = { $: {} };
cert_verifier.mojom.ChromeRootStoreInfoSpec = { $: {} };
cert_verifier.mojom.PlatformCertInfoSpec = { $: {} };
cert_verifier.mojom.PlatformRootStoreInfoSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory = {};
cert_verifier.mojom.CertVerifierServiceFactory.$interfaceName = 'cert_verifier.mojom.CertVerifierServiceFactory';
cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec = { $: {} };

// Enum: CertificateTrust
cert_verifier.mojom.CertificateTrust = {
  kUnspecified: 0,
  kDistrusted: 1,
  kTrusted: 2,
};

// Struct: CertVerifierCreationParams
mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierCreationParamsSpec, 'cert_verifier.mojom.CertVerifierCreationParams', [
      mojo.internal.StructField('initial_additional_certificates', 0, 0, cert_verifier.mojom.AdditionalCertificatesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ct_policy', 8, 0, network.mojom.CTPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('wait_for_update', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ChromeRootCertInfo
mojo.internal.Struct(
    cert_verifier.mojom.ChromeRootCertInfoSpec, 'cert_verifier.mojom.ChromeRootCertInfo', [
      mojo.internal.StructField('sha256hash_hex', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cert', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ChromeRootMerkleTreeCertInfo
mojo.internal.Struct(
    cert_verifier.mojom.ChromeRootMerkleTreeCertInfoSpec, 'cert_verifier.mojom.ChromeRootMerkleTreeCertInfo', [
      mojo.internal.StructField('log_id_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('min_landmark_id_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_landmark_id_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ChromeRootStoreInfo
mojo.internal.Struct(
    cert_verifier.mojom.ChromeRootStoreInfoSpec, 'cert_verifier.mojom.ChromeRootStoreInfo', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('root_cert_info', 8, 0, mojo.internal.Array(cert_verifier.mojom.ChromeRootCertInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('mtc_metadata_update_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('root_mtc_info', 24, 0, mojo.internal.Array(cert_verifier.mojom.ChromeRootMerkleTreeCertInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PlatformCertInfo
mojo.internal.Struct(
    cert_verifier.mojom.PlatformCertInfoSpec, 'cert_verifier.mojom.PlatformCertInfo', [
      mojo.internal.StructField('cert', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('trust_setting', 8, 0, cert_verifier.mojom.CertificateTrustSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PlatformRootStoreInfo
mojo.internal.Struct(
    cert_verifier.mojom.PlatformRootStoreInfoSpec, 'cert_verifier.mojom.PlatformRootStoreInfo', [
      mojo.internal.StructField('user_added_certs', 0, 0, mojo.internal.Array(cert_verifier.mojom.PlatformCertInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CertVerifierServiceFactory
mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(cert_verifier.mojom.CertVerifierServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('updater', 8, 0, mojo.internal.InterfaceRequest(cert_verifier.mojom.CertVerifierServiceUpdaterRemote), null, true, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(cert_verifier.mojom.CertVerifierServiceClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('creation_params', 24, 0, cert_verifier.mojom.CertVerifierCreationParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_Params', [
      mojo.internal.StructField('crl_set', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_Params', [
      mojo.internal.StructField('log_list', 0, 0, mojo.internal.Array(network.mojom.CTLogInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('update_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_Params', [
      mojo.internal.StructField('new_root_store', 0, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_Params', [
      mojo.internal.StructField('new_mtc_metadata', 0, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_Params', [
      mojo.internal.StructField('use_crs', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParams', [
      mojo.internal.StructField('root_store_info', 0, 0, cert_verifier.mojom.ChromeRootStoreInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParams', [
      mojo.internal.StructField('root_store_info', 0, 0, cert_verifier.mojom.PlatformRootStoreInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_Params', [
      mojo.internal.StructField('system_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('system_ticks', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('current_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

cert_verifier.mojom.CertVerifierServiceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cert_verifier.mojom.CertVerifierServiceFactoryRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.CertVerifierServiceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cert_verifier.mojom.CertVerifierServiceFactoryPendingReceiver,
      handle);
    this.$ = new cert_verifier.mojom.CertVerifierServiceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getNewCertVerifier(receiver, updater, client, creation_params) {
    return this.$.getNewCertVerifier(receiver, updater, client, creation_params);
  }
  updateCRLSet(crl_set) {
    return this.$.updateCRLSet(crl_set);
  }
  updateCtLogList(log_list, update_time) {
    return this.$.updateCtLogList(log_list, update_time);
  }
  disableCtEnforcement() {
    return this.$.disableCtEnforcement();
  }
  updateChromeRootStore(new_root_store) {
    return this.$.updateChromeRootStore(new_root_store);
  }
  updateMtcMetadata(new_mtc_metadata) {
    return this.$.updateMtcMetadata(new_mtc_metadata);
  }
  setUseChromeRootStore(use_crs) {
    return this.$.setUseChromeRootStore(use_crs);
  }
  getChromeRootStoreInfo() {
    return this.$.getChromeRootStoreInfo();
  }
  getPlatformRootStoreInfo() {
    return this.$.getPlatformRootStoreInfo();
  }
  updateNetworkTime(system_time, system_ticks, current_time) {
    return this.$.updateNetworkTime(system_time, system_ticks, current_time);
  }
};

cert_verifier.mojom.CertVerifierServiceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CertVerifierServiceFactory', [
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

  getNewCertVerifier(receiver, updater, client, creation_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec,
      null,
      [receiver, updater, client, creation_params],
      false);
  }

  updateCRLSet(crl_set) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParamsSpec,
      [crl_set],
      false);
  }

  updateCtLogList(log_list, update_time) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParamsSpec,
      [log_list, update_time],
      false);
  }

  disableCtEnforcement() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParamsSpec,
      [],
      false);
  }

  updateChromeRootStore(new_root_store) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParamsSpec,
      [new_root_store],
      false);
  }

  updateMtcMetadata(new_mtc_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParamsSpec,
      [new_mtc_metadata],
      false);
  }

  setUseChromeRootStore(use_crs) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParamsSpec,
      [use_crs],
      false);
  }

  getChromeRootStoreInfo() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec,
      [],
      false);
  }

  getPlatformRootStoreInfo() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec,
      [],
      false);
  }

  updateNetworkTime(system_time, system_ticks, current_time) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec,
      null,
      [system_time, system_ticks, current_time],
      false);
  }

};

cert_verifier.mojom.CertVerifierServiceFactory.getRemote = function() {
  let remote = new cert_verifier.mojom.CertVerifierServiceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.CertVerifierServiceFactory',
    'context');
  return remote.$;
};

cert_verifier.mojom.CertVerifierServiceFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CertVerifierServiceFactory', [
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
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec);
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
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec);
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
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec);
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
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec);
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
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec);
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
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec);
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
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec);
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
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec);
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
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec);
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
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec);
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
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNewCertVerifier');
          const result = this.impl.getNewCertVerifier(params.receiver, params.updater, params.client, params.creation_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateCRLSet');
          const result = this.impl.updateCRLSet(params.crl_set);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateCtLogList');
          const result = this.impl.updateCtLogList(params.log_list, params.update_time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableCtEnforcement');
          const result = this.impl.disableCtEnforcement();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateChromeRootStore');
          const result = this.impl.updateChromeRootStore(params.new_root_store);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateMtcMetadata');
          const result = this.impl.updateMtcMetadata(params.new_mtc_metadata);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUseChromeRootStore');
          const result = this.impl.setUseChromeRootStore(params.use_crs);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getChromeRootStoreInfo');
          const result = this.impl.getChromeRootStoreInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPlatformRootStoreInfo');
          const result = this.impl.getPlatformRootStoreInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateNetworkTime');
          const result = this.impl.updateNetworkTime(params.system_time, params.system_ticks, params.current_time);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cert_verifier.mojom.CertVerifierServiceFactoryReceiver = cert_verifier.mojom.CertVerifierServiceFactoryReceiver;

cert_verifier.mojom.CertVerifierServiceFactoryPtr = cert_verifier.mojom.CertVerifierServiceFactoryRemote;
cert_verifier.mojom.CertVerifierServiceFactoryRequest = cert_verifier.mojom.CertVerifierServiceFactoryPendingReceiver;

