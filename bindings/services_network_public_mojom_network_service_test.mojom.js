// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/network_service_test.mojom
 // Module: network.mojom

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
 

 mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.network.mojom.ResolverTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.RuleSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCacheOpenEntryResultSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCacheEntry = {};
mojo.internal.bindings.network.mojom.SimpleCacheEntry.$interfaceName = 'network.mojom.SimpleCacheEntry';
mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteData_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadData_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteSparseData_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteSparseData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadSparseData_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadSparseData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCacheEntry_Close_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCacheEntry_Close_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumerator = {};
mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumerator.$interfaceName = 'network.mojom.SimpleCacheEntryEnumerator';
mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumerator_GetNext_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumerator_GetNext_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCache = {};
mojo.internal.bindings.network.mojom.SimpleCache.$interfaceName = 'network.mojom.SimpleCache';
mojo.internal.bindings.network.mojom.SimpleCache_CreateEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCache_CreateEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCache_OpenEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCache_OpenEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCache_DoomEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCache_DoomEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCache_DoomAllEntries_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCache_DoomAllEntries_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCache_EnumerateEntries_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCache_Detach_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SimpleCache_Detach_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest = {};
mojo.internal.bindings.network.mojom.NetworkServiceTest.$interfaceName = 'network.mojom.NetworkServiceTest';
mojo.internal.bindings.network.mojom.NetworkServiceTest_AddRules_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_AddRules_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkChange_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkChange_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateCrash_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTestDohConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTestDohConfig_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_CrashOnResolveHost_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_CrashOnGetCookieList_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_Log_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_Log_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_ActivateFieldTrial_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_OpenFile_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_OpenFile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_EnumerateFiles_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_EnumerateFiles_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_CreateSimpleCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_CreateSimpleCache_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_MakeRequestToServer_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_MakeRequestToServer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ResponseParamsSpec = { $: {} };

// Enum: ResolverType
mojo.internal.bindings.network.mojom.ResolverType = {
  kResolverTypeFail: 0,
  kResolverTypeFailTimeout: 1,
  kResolverTypeSystem: 2,
  kResolverTypeIPLiteral: 3,
  kResolverTypeDirectLookup: 4,
};

// Struct: Rule
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.RuleSpec, 'network.mojom.Rule', [
      mojo.internal.StructField('arg_resolver_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.ResolverTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_pattern', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_replacement', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_dns_aliases', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_host_resolver_flags', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SimpleCacheOpenEntryResult
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCacheOpenEntryResultSpec, 'network.mojom.SimpleCacheOpenEntryResult', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_entry', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SimpleCacheEntrySpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_error', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: SimpleCacheEntry
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteData_ParamsSpec, 'network.mojom.SimpleCacheEntry_WriteData_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_truncate', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteData_ResponseParamsSpec, 'network.mojom.SimpleCacheEntry_WriteData_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadData_ParamsSpec, 'network.mojom.SimpleCacheEntry_ReadData_Params', [
      mojo.internal.StructField('arg_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadData_ResponseParamsSpec, 'network.mojom.SimpleCacheEntry_ReadData_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteSparseData_ParamsSpec, 'network.mojom.SimpleCacheEntry_WriteSparseData_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteSparseData_ResponseParamsSpec, 'network.mojom.SimpleCacheEntry_WriteSparseData_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadSparseData_ParamsSpec, 'network.mojom.SimpleCacheEntry_ReadSparseData_Params', [
      mojo.internal.StructField('arg_offset', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadSparseData_ResponseParamsSpec, 'network.mojom.SimpleCacheEntry_ReadSparseData_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCacheEntry_Close_ParamsSpec, 'network.mojom.SimpleCacheEntry_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCacheEntry_Close_ResponseParamsSpec, 'network.mojom.SimpleCacheEntry_Close_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.network.mojom.SimpleCacheEntryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.SimpleCacheEntryRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SimpleCacheEntry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.SimpleCacheEntryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.SimpleCacheEntryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  writeData(arg_index, arg_offset, arg_data, arg_truncate) {
    return this.$.writeData(arg_index, arg_offset, arg_data, arg_truncate);
  }
  readData(arg_index, arg_offset, arg_length) {
    return this.$.readData(arg_index, arg_offset, arg_length);
  }
  writeSparseData(arg_offset, arg_data) {
    return this.$.writeSparseData(arg_offset, arg_data);
  }
  readSparseData(arg_offset, arg_length) {
    return this.$.readSparseData(arg_offset, arg_length);
  }
  close() {
    return this.$.close();
  }
};

mojo.internal.bindings.network.mojom.SimpleCacheEntryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SimpleCacheEntry', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  writeData(arg_index, arg_offset, arg_data, arg_truncate) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteData_ParamsSpec,
      mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteData_ResponseParamsSpec,
      [arg_index, arg_offset, arg_data, arg_truncate],
      false);
  }

  readData(arg_index, arg_offset, arg_length) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadData_ParamsSpec,
      mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadData_ResponseParamsSpec,
      [arg_index, arg_offset, arg_length],
      false);
  }

  writeSparseData(arg_offset, arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteSparseData_ParamsSpec,
      mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteSparseData_ResponseParamsSpec,
      [arg_offset, arg_data],
      false);
  }

  readSparseData(arg_offset, arg_length) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadSparseData_ParamsSpec,
      mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadSparseData_ResponseParamsSpec,
      [arg_offset, arg_length],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.network.mojom.SimpleCacheEntry_Close_ParamsSpec,
      mojo.internal.bindings.network.mojom.SimpleCacheEntry_Close_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.network.mojom.SimpleCacheEntry.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.SimpleCacheEntryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SimpleCacheEntry',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.SimpleCacheEntryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SimpleCacheEntry', [
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
        
        // Try Method 0: WriteData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReadData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadData (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: WriteSparseData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteSparseData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteSparseData (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ReadSparseData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadSparseData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadSparseData (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCacheEntry_Close_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeData');
          const result = this.impl.writeData(params.arg_index, params.arg_offset, params.arg_data, params.arg_truncate);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WriteData FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readData');
          const result = this.impl.readData(params.arg_index, params.arg_offset, params.arg_length);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadData FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteSparseData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeSparseData');
          const result = this.impl.writeSparseData(params.arg_offset, params.arg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.SimpleCacheEntry_WriteSparseData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WriteSparseData FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadSparseData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readSparseData');
          const result = this.impl.readSparseData(params.arg_offset, params.arg_length);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.SimpleCacheEntry_ReadSparseData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadSparseData FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCacheEntry_Close_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.SimpleCacheEntry_Close_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Close FAILED:', e));
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

mojo.internal.bindings.network.mojom.SimpleCacheEntryReceiver = mojo.internal.bindings.network.mojom.SimpleCacheEntryReceiver;

mojo.internal.bindings.network.mojom.SimpleCacheEntryPtr = mojo.internal.bindings.network.mojom.SimpleCacheEntryRemote;
mojo.internal.bindings.network.mojom.SimpleCacheEntryRequest = mojo.internal.bindings.network.mojom.SimpleCacheEntryPendingReceiver;


// Interface: SimpleCacheEntryEnumerator
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumerator_GetNext_ParamsSpec, 'network.mojom.SimpleCacheEntryEnumerator_GetNext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumerator_GetNext_ResponseParamsSpec, 'network.mojom.SimpleCacheEntryEnumerator_GetNext_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.SimpleCacheOpenEntryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SimpleCacheEntryEnumerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getNext() {
    return this.$.getNext();
  }
};

mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SimpleCacheEntryEnumerator', [
      { explicit: null },
    ]);
  }

  getNext() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumerator_GetNext_ParamsSpec,
      mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumerator_GetNext_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumerator.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SimpleCacheEntryEnumerator',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SimpleCacheEntryEnumerator', [
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
        
        // Try Method 0: GetNext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumerator_GetNext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNext (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumerator_GetNext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNext');
          const result = this.impl.getNext();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumerator_GetNext_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNext FAILED:', e));
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

mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorReceiver = mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorReceiver;

mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorPtr = mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorRemote;
mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorRequest = mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorPendingReceiver;


// Interface: SimpleCache
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCache_CreateEntry_ParamsSpec, 'network.mojom.SimpleCache_CreateEntry_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCache_CreateEntry_ResponseParamsSpec, 'network.mojom.SimpleCache_CreateEntry_ResponseParams', [
      mojo.internal.StructField('arg_entry', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SimpleCacheEntrySpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCache_OpenEntry_ParamsSpec, 'network.mojom.SimpleCache_OpenEntry_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCache_OpenEntry_ResponseParamsSpec, 'network.mojom.SimpleCache_OpenEntry_ResponseParams', [
      mojo.internal.StructField('arg_entry', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SimpleCacheEntrySpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCache_DoomEntry_ParamsSpec, 'network.mojom.SimpleCache_DoomEntry_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCache_DoomEntry_ResponseParamsSpec, 'network.mojom.SimpleCache_DoomEntry_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCache_DoomAllEntries_ParamsSpec, 'network.mojom.SimpleCache_DoomAllEntries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCache_DoomAllEntries_ResponseParamsSpec, 'network.mojom.SimpleCache_DoomAllEntries_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCache_EnumerateEntries_ParamsSpec, 'network.mojom.SimpleCache_EnumerateEntries_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.SimpleCacheEntryEnumeratorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCache_Detach_ParamsSpec, 'network.mojom.SimpleCache_Detach_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SimpleCache_Detach_ResponseParamsSpec, 'network.mojom.SimpleCache_Detach_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.network.mojom.SimpleCachePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.SimpleCacheRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SimpleCache';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.SimpleCachePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.SimpleCacheRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createEntry(arg_key) {
    return this.$.createEntry(arg_key);
  }
  openEntry(arg_key) {
    return this.$.openEntry(arg_key);
  }
  doomEntry(arg_key) {
    return this.$.doomEntry(arg_key);
  }
  doomAllEntries() {
    return this.$.doomAllEntries();
  }
  enumerateEntries(arg_receiver) {
    return this.$.enumerateEntries(arg_receiver);
  }
  detach() {
    return this.$.detach();
  }
};

mojo.internal.bindings.network.mojom.SimpleCacheRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SimpleCache', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createEntry(arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.SimpleCache_CreateEntry_ParamsSpec,
      mojo.internal.bindings.network.mojom.SimpleCache_CreateEntry_ResponseParamsSpec,
      [arg_key],
      false);
  }

  openEntry(arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.SimpleCache_OpenEntry_ParamsSpec,
      mojo.internal.bindings.network.mojom.SimpleCache_OpenEntry_ResponseParamsSpec,
      [arg_key],
      false);
  }

  doomEntry(arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.SimpleCache_DoomEntry_ParamsSpec,
      mojo.internal.bindings.network.mojom.SimpleCache_DoomEntry_ResponseParamsSpec,
      [arg_key],
      false);
  }

  doomAllEntries() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.SimpleCache_DoomAllEntries_ParamsSpec,
      mojo.internal.bindings.network.mojom.SimpleCache_DoomAllEntries_ResponseParamsSpec,
      [],
      false);
  }

  enumerateEntries(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.network.mojom.SimpleCache_EnumerateEntries_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  detach() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.network.mojom.SimpleCache_Detach_ParamsSpec,
      mojo.internal.bindings.network.mojom.SimpleCache_Detach_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.network.mojom.SimpleCache.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.SimpleCacheRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SimpleCache',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.SimpleCacheReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SimpleCache', [
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
        
        // Try Method 0: CreateEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCache_CreateEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateEntry (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OpenEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCache_OpenEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenEntry (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DoomEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCache_DoomEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoomEntry (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DoomAllEntries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCache_DoomAllEntries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoomAllEntries (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: EnumerateEntries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCache_EnumerateEntries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnumerateEntries (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Detach
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCache_Detach_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Detach (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCache_CreateEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createEntry');
          const result = this.impl.createEntry(params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.SimpleCache_CreateEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateEntry FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCache_OpenEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openEntry');
          const result = this.impl.openEntry(params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.SimpleCache_OpenEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenEntry FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCache_DoomEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.doomEntry');
          const result = this.impl.doomEntry(params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.SimpleCache_DoomEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DoomEntry FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCache_DoomAllEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.doomAllEntries');
          const result = this.impl.doomAllEntries();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.SimpleCache_DoomAllEntries_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DoomAllEntries FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCache_EnumerateEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enumerateEntries');
          const result = this.impl.enumerateEntries(params.arg_receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.SimpleCache_Detach_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detach');
          const result = this.impl.detach();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.SimpleCache_Detach_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Detach FAILED:', e));
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

mojo.internal.bindings.network.mojom.SimpleCacheReceiver = mojo.internal.bindings.network.mojom.SimpleCacheReceiver;

mojo.internal.bindings.network.mojom.SimpleCachePtr = mojo.internal.bindings.network.mojom.SimpleCacheRemote;
mojo.internal.bindings.network.mojom.SimpleCacheRequest = mojo.internal.bindings.network.mojom.SimpleCachePendingReceiver;


// Interface: NetworkServiceTest
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_AddRules_ParamsSpec, 'network.mojom.NetworkServiceTest_AddRules_Params', [
      mojo.internal.StructField('arg_rules', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.RuleSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_AddRules_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_AddRules_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkChange_ParamsSpec, 'network.mojom.NetworkServiceTest_SimulateNetworkChange_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.network.mojom.ConnectionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkChange_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SimulateNetworkChange_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ParamsSpec, 'network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.network.mojom.EffectiveConnectionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ParamsSpec, 'network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateCrash_ParamsSpec, 'network.mojom.NetworkServiceTest_SimulateCrash_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ParamsSpec, 'network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_Params', [
      mojo.internal.StructField('arg_default_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ParamsSpec, 'network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_Params', [
      mojo.internal.StructField('arg_cert', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_pattern', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_verify_result', 16, 0, mojo.internal.bindings.network.mojom.CertVerifyResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_rv', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ParamsSpec, 'network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_Params', [
      mojo.internal.StructField('arg_enable_unittest_source', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ParamsSpec, 'network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ParamsSpec, 'network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTestDohConfig_ParamsSpec, 'network.mojom.NetworkServiceTest_SetTestDohConfig_Params', [
      mojo.internal.StructField('arg_secure_dns_mode', 0, 0, mojo.internal.bindings.network.mojom.SecureDnsModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_doh_config', 8, 0, mojo.internal.bindings.network.mojom.DnsOverHttpsConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTestDohConfig_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SetTestDohConfig_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_CrashOnResolveHost_ParamsSpec, 'network.mojom.NetworkServiceTest_CrashOnResolveHost_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_CrashOnGetCookieList_ParamsSpec, 'network.mojom.NetworkServiceTest_CrashOnGetCookieList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ParamsSpec, 'network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParams', [
      mojo.internal.StructField('arg_memory_pressure_level', 0, 0, mojo.internal.bindings.mojo_base.mojom.MemoryPressureLevelSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ParamsSpec, 'network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ResponseParams', [
      mojo.internal.StructField('arg_connection_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ParamsSpec, 'network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_Log_ParamsSpec, 'network.mojom.NetworkServiceTest_Log_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_Log_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_Log_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_ActivateFieldTrial_ParamsSpec, 'network.mojom.NetworkServiceTest_ActivateFieldTrial_Params', [
      mojo.internal.StructField('arg_field_trial_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ParamsSpec, 'network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_Params', [
      mojo.internal.StructField('arg_delay', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_OpenFile_ParamsSpec, 'network.mojom.NetworkServiceTest_OpenFile_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_OpenFile_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_OpenFile_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_EnumerateFiles_ParamsSpec, 'network.mojom.NetworkServiceTest_EnumerateFiles_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_factory', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_EnumerateFiles_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_EnumerateFiles_ResponseParams', [
      mojo.internal.StructField('arg_entries', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.FileEnumerationEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_CreateSimpleCache_ParamsSpec, 'network.mojom.NetworkServiceTest_CreateSimpleCache_Params', [
      mojo.internal.StructField('arg_factory', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 8, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reset', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_CreateSimpleCache_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_CreateSimpleCache_ResponseParams', [
      mojo.internal.StructField('arg_backend', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SimpleCacheSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_MakeRequestToServer_ParamsSpec, 'network.mojom.NetworkServiceTest_MakeRequestToServer_Params', [
      mojo.internal.StructField('arg_s', 0, 0, mojo.internal.bindings.network.mojom.TransferableSocketSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint', 8, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_MakeRequestToServer_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_MakeRequestToServer_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ParamsSpec, 'network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ResponseParams', [
      mojo.internal.StructField('arg_addr_list', 0, 0, mojo.internal.bindings.network.mojom.AddressListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_os_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_net_error', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ParamsSpec, 'network.mojom.NetworkServiceTest_SetIPv6ProbeResult_Params', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ParamsSpec, 'network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ResponseParams', [
      mojo.internal.StructField('arg_addr_map', 0, 0, mojo.internal.bindings.network.mojom.AddressMapSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_links', 8, 0, mojo.internal.bindings.network.mojom.OnlineLinksSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ParamsSpec, 'network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ResponseParams', [
      mojo.internal.StructField('arg_allow_gssapi_library_load', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ParamsSpec, 'network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ParamsSpec, 'network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ResponseParamsSpec, 'network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ResponseParams', [
      mojo.internal.StructField('arg_is_happy_eyeballs_v3_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.NetworkServiceTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.NetworkServiceTestRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkServiceTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.NetworkServiceTestPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.NetworkServiceTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addRules(arg_rules) {
    return this.$.addRules(arg_rules);
  }
  simulateNetworkChange(arg_type) {
    return this.$.simulateNetworkChange(arg_type);
  }
  simulateNetworkQualityChange(arg_type) {
    return this.$.simulateNetworkQualityChange(arg_type);
  }
  forceNetworkQualityEstimatorReportWifiAsSlow2G() {
    return this.$.forceNetworkQualityEstimatorReportWifiAsSlow2G();
  }
  simulateCrash() {
    return this.$.simulateCrash();
  }
  mockCertVerifierSetDefaultResult(arg_default_result) {
    return this.$.mockCertVerifierSetDefaultResult(arg_default_result);
  }
  mockCertVerifierAddResultForCertAndHost(arg_cert, arg_host_pattern, arg_verify_result, arg_rv) {
    return this.$.mockCertVerifierAddResultForCertAndHost(arg_cert, arg_host_pattern, arg_verify_result, arg_rv);
  }
  setTransportSecurityStateTestSource(arg_enable_unittest_source) {
    return this.$.setTransportSecurityStateTestSource(arg_enable_unittest_source);
  }
  setAllowNetworkAccessToHostResolutions() {
    return this.$.setAllowNetworkAccessToHostResolutions();
  }
  replaceSystemDnsConfig() {
    return this.$.replaceSystemDnsConfig();
  }
  setTestDohConfig(arg_secure_dns_mode, arg_doh_config) {
    return this.$.setTestDohConfig(arg_secure_dns_mode, arg_doh_config);
  }
  crashOnResolveHost(arg_host) {
    return this.$.crashOnResolveHost(arg_host);
  }
  crashOnGetCookieList() {
    return this.$.crashOnGetCookieList();
  }
  getLatestMemoryPressureLevel() {
    return this.$.getLatestMemoryPressureLevel();
  }
  getPeerToPeerConnectionsCountChange() {
    return this.$.getPeerToPeerConnectionsCountChange();
  }
  getEnvironmentVariableValue(arg_name) {
    return this.$.getEnvironmentVariableValue(arg_name);
  }
  log(arg_message) {
    return this.$.log(arg_message);
  }
  activateFieldTrial(arg_field_trial_name) {
    return this.$.activateFieldTrial(arg_field_trial_name);
  }
  setSCTAuditingRetryDelay(arg_delay) {
    return this.$.setSCTAuditingRetryDelay(arg_delay);
  }
  openFile(arg_path) {
    return this.$.openFile(arg_path);
  }
  enumerateFiles(arg_path, arg_factory) {
    return this.$.enumerateFiles(arg_path, arg_factory);
  }
  createSimpleCache(arg_factory, arg_path, arg_reset) {
    return this.$.createSimpleCache(arg_factory, arg_path, arg_reset);
  }
  makeRequestToServer(arg_s, arg_endpoint) {
    return this.$.makeRequestToServer(arg_s, arg_endpoint);
  }
  resolveOwnHostnameWithSystemDns() {
    return this.$.resolveOwnHostnameWithSystemDns();
  }
  setIPv6ProbeResult(arg_success) {
    return this.$.setIPv6ProbeResult(arg_success);
  }
  getAddressMapCacheLinux() {
    return this.$.getAddressMapCacheLinux();
  }
  allowsGSSAPILibraryLoad() {
    return this.$.allowsGSSAPILibraryLoad();
  }
  disableExclusiveCookieDatabaseLockingForTesting() {
    return this.$.disableExclusiveCookieDatabaseLockingForTesting();
  }
  isHappyEyeballsV3Enabled() {
    return this.$.isHappyEyeballsV3Enabled();
  }
};

mojo.internal.bindings.network.mojom.NetworkServiceTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkServiceTest', [
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

  addRules(arg_rules) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_AddRules_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_AddRules_ResponseParamsSpec,
      [arg_rules],
      false);
  }

  simulateNetworkChange(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkChange_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkChange_ResponseParamsSpec,
      [arg_type],
      false);
  }

  simulateNetworkQualityChange(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ResponseParamsSpec,
      [arg_type],
      false);
  }

  forceNetworkQualityEstimatorReportWifiAsSlow2G() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ResponseParamsSpec,
      [],
      false);
  }

  simulateCrash() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateCrash_ParamsSpec,
      null,
      [],
      false);
  }

  mockCertVerifierSetDefaultResult(arg_default_result) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParamsSpec,
      [arg_default_result],
      false);
  }

  mockCertVerifierAddResultForCertAndHost(arg_cert, arg_host_pattern, arg_verify_result, arg_rv) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParamsSpec,
      [arg_cert, arg_host_pattern, arg_verify_result, arg_rv],
      false);
  }

  setTransportSecurityStateTestSource(arg_enable_unittest_source) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ResponseParamsSpec,
      [arg_enable_unittest_source],
      false);
  }

  setAllowNetworkAccessToHostResolutions() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ResponseParamsSpec,
      [],
      false);
  }

  replaceSystemDnsConfig() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ResponseParamsSpec,
      [],
      false);
  }

  setTestDohConfig(arg_secure_dns_mode, arg_doh_config) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTestDohConfig_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTestDohConfig_ResponseParamsSpec,
      [arg_secure_dns_mode, arg_doh_config],
      false);
  }

  crashOnResolveHost(arg_host) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_CrashOnResolveHost_ParamsSpec,
      null,
      [arg_host],
      false);
  }

  crashOnGetCookieList() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_CrashOnGetCookieList_ParamsSpec,
      null,
      [],
      false);
  }

  getLatestMemoryPressureLevel() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParamsSpec,
      [],
      false);
  }

  getPeerToPeerConnectionsCountChange() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ResponseParamsSpec,
      [],
      false);
  }

  getEnvironmentVariableValue(arg_name) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ResponseParamsSpec,
      [arg_name],
      false);
  }

  log(arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_Log_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_Log_ResponseParamsSpec,
      [arg_message],
      false);
  }

  activateFieldTrial(arg_field_trial_name) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_ActivateFieldTrial_ParamsSpec,
      null,
      [arg_field_trial_name],
      false);
  }

  setSCTAuditingRetryDelay(arg_delay) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ResponseParamsSpec,
      [arg_delay],
      false);
  }

  openFile(arg_path) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_OpenFile_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_OpenFile_ResponseParamsSpec,
      [arg_path],
      false);
  }

  enumerateFiles(arg_path, arg_factory) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_EnumerateFiles_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_EnumerateFiles_ResponseParamsSpec,
      [arg_path, arg_factory],
      false);
  }

  createSimpleCache(arg_factory, arg_path, arg_reset) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_CreateSimpleCache_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_CreateSimpleCache_ResponseParamsSpec,
      [arg_factory, arg_path, arg_reset],
      false);
  }

  makeRequestToServer(arg_s, arg_endpoint) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_MakeRequestToServer_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_MakeRequestToServer_ResponseParamsSpec,
      [arg_s, arg_endpoint],
      false);
  }

  resolveOwnHostnameWithSystemDns() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ResponseParamsSpec,
      [],
      false);
  }

  setIPv6ProbeResult(arg_success) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ResponseParamsSpec,
      [arg_success],
      false);
  }

  getAddressMapCacheLinux() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ResponseParamsSpec,
      [],
      false);
  }

  allowsGSSAPILibraryLoad() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ResponseParamsSpec,
      [],
      false);
  }

  disableExclusiveCookieDatabaseLockingForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ResponseParamsSpec,
      [],
      false);
  }

  isHappyEyeballsV3Enabled() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.network.mojom.NetworkServiceTest.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.NetworkServiceTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkServiceTest',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.NetworkServiceTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkServiceTest', [
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
        
        // Try Method 0: AddRules
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_AddRules_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddRules (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SimulateNetworkChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateNetworkChange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SimulateNetworkQualityChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateNetworkQualityChange (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ForceNetworkQualityEstimatorReportWifiAsSlow2G
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceNetworkQualityEstimatorReportWifiAsSlow2G (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SimulateCrash
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateCrash_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateCrash (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: MockCertVerifierSetDefaultResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MockCertVerifierSetDefaultResult (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: MockCertVerifierAddResultForCertAndHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MockCertVerifierAddResultForCertAndHost (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetTransportSecurityStateTestSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTransportSecurityStateTestSource (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetAllowNetworkAccessToHostResolutions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAllowNetworkAccessToHostResolutions (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ReplaceSystemDnsConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReplaceSystemDnsConfig (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetTestDohConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTestDohConfig_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTestDohConfig (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: CrashOnResolveHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_CrashOnResolveHost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CrashOnResolveHost (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: CrashOnGetCookieList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_CrashOnGetCookieList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CrashOnGetCookieList (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetLatestMemoryPressureLevel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLatestMemoryPressureLevel (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetPeerToPeerConnectionsCountChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPeerToPeerConnectionsCountChange (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: GetEnvironmentVariableValue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEnvironmentVariableValue (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: Log
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_Log_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Log (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: ActivateFieldTrial
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_ActivateFieldTrial_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivateFieldTrial (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SetSCTAuditingRetryDelay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSCTAuditingRetryDelay (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: OpenFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_OpenFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFile (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: EnumerateFiles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_EnumerateFiles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnumerateFiles (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: CreateSimpleCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_CreateSimpleCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSimpleCache (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: MakeRequestToServer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_MakeRequestToServer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MakeRequestToServer (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: ResolveOwnHostnameWithSystemDns
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolveOwnHostnameWithSystemDns (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: SetIPv6ProbeResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIPv6ProbeResult (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: GetAddressMapCacheLinux
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAddressMapCacheLinux (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: AllowsGSSAPILibraryLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllowsGSSAPILibraryLoad (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: DisableExclusiveCookieDatabaseLockingForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableExclusiveCookieDatabaseLockingForTesting (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: IsHappyEyeballsV3Enabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsHappyEyeballsV3Enabled (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_AddRules_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addRules');
          const result = this.impl.addRules(params.arg_rules);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_AddRules_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddRules FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateNetworkChange');
          const result = this.impl.simulateNetworkChange(params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkChange_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SimulateNetworkChange FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateNetworkQualityChange');
          const result = this.impl.simulateNetworkQualityChange(params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateNetworkQualityChange_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SimulateNetworkQualityChange FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceNetworkQualityEstimatorReportWifiAsSlow2G');
          const result = this.impl.forceNetworkQualityEstimatorReportWifiAsSlow2G();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_ForceNetworkQualityEstimatorReportWifiAsSlow2G_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ForceNetworkQualityEstimatorReportWifiAsSlow2G FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SimulateCrash_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateCrash');
          const result = this.impl.simulateCrash();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mockCertVerifierSetDefaultResult');
          const result = this.impl.mockCertVerifierSetDefaultResult(params.arg_default_result);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierSetDefaultResult_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MockCertVerifierSetDefaultResult FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mockCertVerifierAddResultForCertAndHost');
          const result = this.impl.mockCertVerifierAddResultForCertAndHost(params.arg_cert, params.arg_host_pattern, params.arg_verify_result, params.arg_rv);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_MockCertVerifierAddResultForCertAndHost_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MockCertVerifierAddResultForCertAndHost FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTransportSecurityStateTestSource');
          const result = this.impl.setTransportSecurityStateTestSource(params.arg_enable_unittest_source);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTransportSecurityStateTestSource_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetTransportSecurityStateTestSource FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAllowNetworkAccessToHostResolutions');
          const result = this.impl.setAllowNetworkAccessToHostResolutions();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_SetAllowNetworkAccessToHostResolutions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetAllowNetworkAccessToHostResolutions FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replaceSystemDnsConfig');
          const result = this.impl.replaceSystemDnsConfig();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_ReplaceSystemDnsConfig_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReplaceSystemDnsConfig FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTestDohConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTestDohConfig');
          const result = this.impl.setTestDohConfig(params.arg_secure_dns_mode, params.arg_doh_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_SetTestDohConfig_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetTestDohConfig FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_CrashOnResolveHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.crashOnResolveHost');
          const result = this.impl.crashOnResolveHost(params.arg_host);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_CrashOnGetCookieList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.crashOnGetCookieList');
          const result = this.impl.crashOnGetCookieList();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLatestMemoryPressureLevel');
          const result = this.impl.getLatestMemoryPressureLevel();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_GetLatestMemoryPressureLevel_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetLatestMemoryPressureLevel FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPeerToPeerConnectionsCountChange');
          const result = this.impl.getPeerToPeerConnectionsCountChange();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_GetPeerToPeerConnectionsCountChange_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPeerToPeerConnectionsCountChange FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEnvironmentVariableValue');
          const result = this.impl.getEnvironmentVariableValue(params.arg_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_GetEnvironmentVariableValue_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetEnvironmentVariableValue FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_Log_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.log');
          const result = this.impl.log(params.arg_message);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_Log_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Log FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_ActivateFieldTrial_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activateFieldTrial');
          const result = this.impl.activateFieldTrial(params.arg_field_trial_name);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSCTAuditingRetryDelay');
          const result = this.impl.setSCTAuditingRetryDelay(params.arg_delay);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_SetSCTAuditingRetryDelay_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetSCTAuditingRetryDelay FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_OpenFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFile');
          const result = this.impl.openFile(params.arg_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_OpenFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenFile FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_EnumerateFiles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enumerateFiles');
          const result = this.impl.enumerateFiles(params.arg_path, params.arg_factory);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_EnumerateFiles_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EnumerateFiles FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_CreateSimpleCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSimpleCache');
          const result = this.impl.createSimpleCache(params.arg_factory, params.arg_path, params.arg_reset);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_CreateSimpleCache_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateSimpleCache FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_MakeRequestToServer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.makeRequestToServer');
          const result = this.impl.makeRequestToServer(params.arg_s, params.arg_endpoint);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_MakeRequestToServer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MakeRequestToServer FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolveOwnHostnameWithSystemDns');
          const result = this.impl.resolveOwnHostnameWithSystemDns();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_ResolveOwnHostnameWithSystemDns_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ResolveOwnHostnameWithSystemDns FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIPv6ProbeResult');
          const result = this.impl.setIPv6ProbeResult(params.arg_success);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_SetIPv6ProbeResult_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetIPv6ProbeResult FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAddressMapCacheLinux');
          const result = this.impl.getAddressMapCacheLinux();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_GetAddressMapCacheLinux_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAddressMapCacheLinux FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.allowsGSSAPILibraryLoad');
          const result = this.impl.allowsGSSAPILibraryLoad();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_AllowsGSSAPILibraryLoad_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AllowsGSSAPILibraryLoad FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableExclusiveCookieDatabaseLockingForTesting');
          const result = this.impl.disableExclusiveCookieDatabaseLockingForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_DisableExclusiveCookieDatabaseLockingForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DisableExclusiveCookieDatabaseLockingForTesting FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isHappyEyeballsV3Enabled');
          const result = this.impl.isHappyEyeballsV3Enabled();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkServiceTest_IsHappyEyeballsV3Enabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsHappyEyeballsV3Enabled FAILED:', e));
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

mojo.internal.bindings.network.mojom.NetworkServiceTestReceiver = mojo.internal.bindings.network.mojom.NetworkServiceTestReceiver;

mojo.internal.bindings.network.mojom.NetworkServiceTestPtr = mojo.internal.bindings.network.mojom.NetworkServiceTestRemote;
mojo.internal.bindings.network.mojom.NetworkServiceTestRequest = mojo.internal.bindings.network.mojom.NetworkServiceTestPendingReceiver;

