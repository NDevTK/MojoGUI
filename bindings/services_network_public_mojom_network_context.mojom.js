// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/network_context.mojom
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
mojo.internal.bindings.content_settings = mojo.internal.bindings.content_settings || {};
mojo.internal.bindings.unexportable_keys = mojo.internal.bindings.unexportable_keys || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};
mojo.internal.bindings.cert_verifier = mojo.internal.bindings.cert_verifier || {};
mojo.internal.bindings.proxy_resolver = mojo.internal.bindings.proxy_resolver || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.network.mojom.TrustTokenOperationPolicyVerdictSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.SCTAuditingModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.DomainReliabilityClearModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CustomProxyConfigSpec = { $: {} };
mojo.internal.bindings.network.mojom.CertVerifierServiceRemoteParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpAuthStaticNetworkContextParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContextFilePathsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SocketBrokerRemotesSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContextParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkConditionsSpec = { $: {} };
mojo.internal.bindings.network.mojom.MatchedNetworkConditionsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SharedDictionaryInfoSpec = { $: {} };
mojo.internal.bindings.network.mojom.SignedExchangeReportSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderFactoryOverrideSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderFactoryParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NonceAndAllowlistedPatternsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver = {};
mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver.$interfaceName = 'network.mojom.CustomProxyConnectionObserver';
mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CustomProxyConfigClient = {};
mojo.internal.bindings.network.mojom.CustomProxyConfigClient.$interfaceName = 'network.mojom.CustomProxyConfigClient';
mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TrustedHeaderClient = {};
mojo.internal.bindings.network.mojom.TrustedHeaderClient.$interfaceName = 'network.mojom.TrustedHeaderClient';
mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient = {};
mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient.$interfaceName = 'network.mojom.TrustedURLLoaderHeaderClient';
mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandle = {};
mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandle.$interfaceName = 'network.mojom.PreloadedSharedDictionaryInfoHandle';
mojo.internal.bindings.network.mojom.NetworkContext = {};
mojo.internal.bindings.network.mojom.NetworkContext.$interfaceName = 'network.mojom.NetworkContext';
mojo.internal.bindings.network.mojom.NetworkContext_SetClient_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetCookieManager_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_QueueReport_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetCTPolicy_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateWebSocket_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateWebTransport_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_PreconnectSockets_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ResolveHost_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateHostResolver_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearNonces_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_Prefetch_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddQuicHints_ParamsSpec = { $: {} };

mojo.internal.bindings.network.mojom.kWebSocketOptionNone = 0;

mojo.internal.bindings.network.mojom.kWebSocketOptionBlockAllCookies = 1;

mojo.internal.bindings.network.mojom.kWebSocketOptionBlockThirdPartyCookies = 2;

mojo.internal.bindings.network.mojom.kBrowserProcessId = 0;

mojo.internal.bindings.network.mojom.kInvalidProcessId = -1;

// Enum: TrustTokenOperationPolicyVerdict
mojo.internal.bindings.network.mojom.TrustTokenOperationPolicyVerdict = {
  kForbid: 0,
  kPotentiallyPermit: 1,
};

// Enum: SCTAuditingMode
mojo.internal.bindings.network.mojom.SCTAuditingMode = {
  kDisabled: 0,
  kEnhancedSafeBrowsingReporting: 1,
  kHashdance: 2,
};

// Enum: DomainReliabilityClearMode
mojo.internal.bindings.network.mojom.DomainReliabilityClearMode = {
  CLEAR_CONTEXTS: 0,
  CLEAR_BEACONS: 1,
};

// Struct: CustomProxyConfig
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CustomProxyConfigSpec, 'network.mojom.CustomProxyConfig', [
      mojo.internal.StructField('arg_rules', 0, 0, mojo.internal.bindings.network.mojom.ProxyRulesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_connect_tunnel_headers', 8, 0, mojo.internal.bindings.network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_should_override_existing_config', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_non_idempotent_methods', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CertVerifierServiceRemoteParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CertVerifierServiceRemoteParamsSpec, 'network.mojom.CertVerifierServiceRemoteParams', [
      mojo.internal.StructField('arg_cert_verifier_service', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_cert_verifier_service_client_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HttpAuthStaticNetworkContextParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpAuthStaticNetworkContextParamsSpec, 'network.mojom.HttpAuthStaticNetworkContextParams', [
    ],
    [[0, 8]]);

// Struct: NetworkContextFilePaths
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContextFilePathsSpec, 'network.mojom.NetworkContextFilePaths', [
      mojo.internal.StructField('arg_shared_dictionary_directory', 0, 0, mojo.internal.bindings.network.mojom.TransferableDirectorySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_http_cache_directory', 8, 0, mojo.internal.bindings.network.mojom.TransferableDirectorySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_no_vary_search_directory', 16, 0, mojo.internal.bindings.network.mojom.TransferableDirectorySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_data_directory', 24, 0, mojo.internal.bindings.network.mojom.TransferableDirectorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_unsandboxed_data_path', 32, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_database_name', 40, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_device_bound_sessions_database_name', 48, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_trust_token_database_name', 56, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_http_server_properties_file_name', 64, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_transport_security_persister_file_name', 72, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_reporting_and_nel_store_database_name', 80, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_sct_auditing_pending_reports_file_name', 88, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_trigger_migration', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: SocketBrokerRemotes
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SocketBrokerRemotesSpec, 'network.mojom.SocketBrokerRemotes', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SocketBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_server', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SocketBrokerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NetworkContextParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContextParamsSpec, 'network.mojom.NetworkContextParams', [
      mojo.internal.StructField('arg_user_agent', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_accept_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_proxy_resolver_factory', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_system_proxy_resolver', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_dhcp_wpad_url_client', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DhcpWpadUrlClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_http_cache_file_operations_factory', 40, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_encryption_provider', 48, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CacheEncryptionProviderRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_initial_ssl_config', 56, 0, mojo.internal.bindings.network.mojom.SSLConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ssl_config_client_receiver', 64, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.SSLConfigClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_initial_proxy_config', 72, 0, mojo.internal.bindings.network.mojom.ProxyConfigWithAnnotationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_proxy_config_client_receiver', 80, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.ProxyConfigClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_initial_custom_proxy_config', 88, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.CustomProxyConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_custom_proxy_config_client_receiver', 96, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.CustomProxyConfigClientSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_custom_proxy_connection_observer_remote', 104, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_proxy_config_poller_client', 112, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ProxyConfigPollerClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_proxy_error_client', 120, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ProxyErrorClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_socket_brokers', 128, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.SocketBrokerRemotesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_sct_auditing_mode', 136, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.SCTAuditingModeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_ct_policy', 144, 0, mojo.internal.bindings.network.mojom.CTPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cert_verifier_params', 152, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.CertVerifierServiceRemoteParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_manager_params', 160, 0, mojo.internal.bindings.network.mojom.CookieManagerParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_manager', 168, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.CookieManagerRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_domain_reliability_upload_reporter', 176, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_reporting_delivery_interval', 184, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cors_origin_access_list', 192, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CorsOriginAccessPatternsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_cors_exempt_header_list', 200, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_hsts_policy_bypass_list', 208, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_http_auth_static_network_context_params', 216, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.HttpAuthStaticNetworkContextParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_file_paths', 224, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.NetworkContextFilePathsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_shared_dictionary_cache_max_size', 232, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_first_party_sets_access_delegate_params', 240, 0, mojo.internal.bindings.network.mojom.FirstPartySetsAccessDelegateParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_first_party_sets_access_delegate_receiver', 248, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.FirstPartySetsAccessDelegateRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_encryption_provider', 256, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CookieEncryptionProviderRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_bound_network', 264, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('arg_enterprise_reporting_endpoints', 272, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_quic_idle_connection_timeout_seconds_$value', 280, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_quic_idle_connection_timeout_seconds_$flag', originalFieldName: 'arg_quic_idle_connection_timeout_seconds' }),
      mojo.internal.StructField('arg_bound_sessions_unexportable_key_service', 288, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.unexportable_keys.mojom.UnexportableKeyServiceRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_http_cache_max_size', 296, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enable_brotli', 300, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_enable_zstd', 300, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_referrers', 300, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_validate_referrer_policy_on_initial_request', 300, 3, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_enable_encrypted_cookies', 300, 4, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_restore_old_session_cookies', 300, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_persist_session_cookies', 300, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_http_cache_enabled', 300, 7, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_check_clear_text_permitted', 301, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_pac_quick_check_enabled', 301, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_enable_certificate_reporting', 301, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enforce_chrome_ct_policy', 301, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_domain_reliability', 301, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_discard_domain_reliablity_uploads', 301, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_skip_reporting_send_permission_check', 301, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_reset_http_cache_backend', 301, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_split_auth_cache_by_network_anonymization_key', 302, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_require_network_anonymization_key', 302, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_win_permissions_set', 302, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_block_trust_tokens', 302, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shared_dictionary_enabled', 302, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_acam_preflight_spec_conformant', 302, 5, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_device_bound_sessions_enabled', 302, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_stale_dns_enabled', 302, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_quic_idle_connection_timeout_seconds_$flag', 303, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_quic_idle_connection_timeout_seconds_$value', originalFieldName: 'arg_quic_idle_connection_timeout_seconds' }),
      mojo.internal.StructField('arg_enable_encrypted_http_cache', 303, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 312]]);

// Struct: NetworkConditions
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkConditionsSpec, 'network.mojom.NetworkConditions', [
      mojo.internal.StructField('arg_latency', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_download_throughput', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_upload_throughput', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_packet_loss', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rule_id', 32, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_packet_queue_length', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_offline', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_packet_reordering', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: MatchedNetworkConditions
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.MatchedNetworkConditionsSpec, 'network.mojom.MatchedNetworkConditions', [
      mojo.internal.StructField('arg_pattern', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_conditions', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.NetworkConditionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SharedDictionaryInfo
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SharedDictionaryInfoSpec, 'network.mojom.SharedDictionaryInfo', [
      mojo.internal.StructField('arg_match', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_match_dest', 8, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.RequestDestinationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_dictionary_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_fetch_time', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_time', 40, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_expiration', 48, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_used_time', 56, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_hash', 72, 0, mojo.internal.bindings.network.mojom.SHA256HashValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: SignedExchangeReport
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SignedExchangeReportSpec, 'network.mojom.SignedExchangeReport', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_outer_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_inner_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cert_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_referrer', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_server_ip_address', 40, 0, mojo.internal.bindings.network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_protocol', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_method', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_elapsed_time', 64, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_status_code', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_success', 76, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: URLLoaderFactoryOverride
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderFactoryOverrideSpec, 'network.mojom.URLLoaderFactoryOverride', [
      mojo.internal.StructField('arg_overriding_factory', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_overridden_factory_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.URLLoaderFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_skip_cors_enabled_scheme_check', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: URLLoaderFactoryParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderFactoryParamsSpec, 'network.mojom.URLLoaderFactoryParams', [
      mojo.internal.StructField('arg_request_initiator_origin_lock', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_header_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_isolation_info', 16, 0, mojo.internal.bindings.network.mojom.IsolationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_top_frame_id', 24, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_factory_override', 32, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.URLLoaderFactoryOverrideSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_security_state', 40, 0, mojo.internal.bindings.network.mojom.ClientSecurityStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_coep_reporter', 48, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CrossOriginEmbedderPolicyReporterRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_dip_reporter', 56, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DocumentIsolationPolicyReporterRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_observer', 64, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CookieAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_trust_token_observer', 72, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.TrustTokenAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_shared_dictionary_observer', 80, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SharedDictionaryAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_url_loader_network_observer', 88, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_devtools_observer', 96, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DevToolsObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_device_bound_session_observer', 104, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_kPotentiallyPermit', 112, 0, mojo.internal.bindings.network.mojom.TrustTokenOperationPolicyVerdict trust_token_issuance_policy =Spec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_kPotentiallyPermit', 120, 0, mojo.internal.bindings.network.mojom.TrustTokenOperationPolicyVerdict trust_token_redemption_policy =Spec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_debug_tag', 128, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_setting_overrides', 136, 0, mojo.internal.bindings.network.mojom.CookieSettingOverridesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_cookie_setting_overrides', 144, 0, mojo.internal.bindings.network.mojom.CookieSettingOverridesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_restrictions_id', 152, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_process_id', 160, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_orb_enabled', 164, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_ignore_isolated_world_origin', 164, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_unsafe_non_webby_initiator', 164, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_web_security', 164, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_secure_dns', 164, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_trusted', 164, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_automatically_assign_isolation_info', 164, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_require_cross_site_request_for_cookies', 164, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ignore_factory_reset', 165, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_main_frame_origin_recently_accessed', 165, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 176]]);

// Struct: NonceAndAllowlistedPatterns
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NonceAndAllowlistedPatternsSpec, 'network.mojom.NonceAndAllowlistedPatterns', [
      mojo.internal.StructField('arg_nonce', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_allowlisted_patterns', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CustomProxyConnectionObserver
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec, 'network.mojom.CustomProxyConnectionObserver_OnFallback_Params', [
      mojo.internal.StructField('arg_bad_chain', 0, 0, mojo.internal.bindings.network.mojom.ProxyChainSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec, 'network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_Params', [
      mojo.internal.StructField('arg_proxy_chain', 0, 0, mojo.internal.bindings.network.mojom.ProxyChainSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_chain_index', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_response_headers', 16, 0, mojo.internal.bindings.network.mojom.HttpResponseHeadersSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CustomProxyConnectionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFallback(arg_bad_chain, arg_net_error) {
    return this.$.onFallback(arg_bad_chain, arg_net_error);
  }
  onTunnelHeadersReceived(arg_proxy_chain, arg_chain_index, arg_response_headers) {
    return this.$.onTunnelHeadersReceived(arg_proxy_chain, arg_chain_index, arg_response_headers);
  }
};

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CustomProxyConnectionObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onFallback(arg_bad_chain, arg_net_error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec,
      null,
      [arg_bad_chain, arg_net_error],
      false);
  }

  onTunnelHeadersReceived(arg_proxy_chain, arg_chain_index, arg_response_headers) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec,
      null,
      [arg_proxy_chain, arg_chain_index, arg_response_headers],
      false);
  }

};

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CustomProxyConnectionObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CustomProxyConnectionObserver', [
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
        
        // Try Method 0: OnFallback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFallback (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnTunnelHeadersReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTunnelHeadersReceived (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFallback');
          const result = this.impl.onFallback(params.arg_bad_chain, params.arg_net_error);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTunnelHeadersReceived');
          const result = this.impl.onTunnelHeadersReceived(params.arg_proxy_chain, params.arg_chain_index, params.arg_response_headers);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverReceiver = mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverReceiver;

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverPtr = mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverRemote;
mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverRequest = mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverPendingReceiver;


// Interface: CustomProxyConfigClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec, 'network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params', [
      mojo.internal.StructField('arg_proxy_config', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.CustomProxyConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParamsSpec, 'network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.network.mojom.CustomProxyConfigClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.CustomProxyConfigClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CustomProxyConfigClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.CustomProxyConfigClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.CustomProxyConfigClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCustomProxyConfigUpdated(arg_proxy_config) {
    return this.$.onCustomProxyConfigUpdated(arg_proxy_config);
  }
};

mojo.internal.bindings.network.mojom.CustomProxyConfigClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CustomProxyConfigClient', [
      { explicit: null },
    ]);
  }

  onCustomProxyConfigUpdated(arg_proxy_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec,
      mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParamsSpec,
      [arg_proxy_config],
      false);
  }

};

mojo.internal.bindings.network.mojom.CustomProxyConfigClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.CustomProxyConfigClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CustomProxyConfigClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.CustomProxyConfigClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CustomProxyConfigClient', [
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
        
        // Try Method 0: OnCustomProxyConfigUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCustomProxyConfigUpdated (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCustomProxyConfigUpdated');
          const result = this.impl.onCustomProxyConfigUpdated(params.arg_proxy_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnCustomProxyConfigUpdated FAILED:', e));
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

mojo.internal.bindings.network.mojom.CustomProxyConfigClientReceiver = mojo.internal.bindings.network.mojom.CustomProxyConfigClientReceiver;

mojo.internal.bindings.network.mojom.CustomProxyConfigClientPtr = mojo.internal.bindings.network.mojom.CustomProxyConfigClientRemote;
mojo.internal.bindings.network.mojom.CustomProxyConfigClientRequest = mojo.internal.bindings.network.mojom.CustomProxyConfigClientPendingReceiver;


// Interface: TrustedHeaderClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec, 'network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_Params', [
      mojo.internal.StructField('arg_headers', 0, 0, mojo.internal.bindings.network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec, 'network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams', [
      mojo.internal.StructField('arg_headers', 0, 0, mojo.internal.bindings.network.mojom.HttpRequestHeadersSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec, 'network.mojom.TrustedHeaderClient_OnHeadersReceived_Params', [
      mojo.internal.StructField('arg_headers', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_endpoint', 8, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ssl_info', 16, 0, mojo.internal.bindings.network.mojom.SSLInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec, 'network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParams', [
      mojo.internal.StructField('arg_headers', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_preserve_fragment_on_redirect_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_result', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.network.mojom.TrustedHeaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.TrustedHeaderClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TrustedHeaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.TrustedHeaderClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.TrustedHeaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onBeforeSendHeaders(arg_headers) {
    return this.$.onBeforeSendHeaders(arg_headers);
  }
  onHeadersReceived(arg_headers, arg_remote_endpoint, arg_ssl_info) {
    return this.$.onHeadersReceived(arg_headers, arg_remote_endpoint, arg_ssl_info);
  }
};

mojo.internal.bindings.network.mojom.TrustedHeaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TrustedHeaderClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onBeforeSendHeaders(arg_headers) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec,
      mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec,
      [arg_headers],
      false);
  }

  onHeadersReceived(arg_headers, arg_remote_endpoint, arg_ssl_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec,
      mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec,
      [arg_headers, arg_remote_endpoint, arg_ssl_info],
      false);
  }

};

mojo.internal.bindings.network.mojom.TrustedHeaderClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.TrustedHeaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TrustedHeaderClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.TrustedHeaderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TrustedHeaderClient', [
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
        
        // Try Method 0: OnBeforeSendHeaders
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBeforeSendHeaders (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnHeadersReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHeadersReceived (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBeforeSendHeaders');
          const result = this.impl.onBeforeSendHeaders(params.arg_headers);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnBeforeSendHeaders FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHeadersReceived');
          const result = this.impl.onHeadersReceived(params.arg_headers, params.arg_remote_endpoint, params.arg_ssl_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnHeadersReceived FAILED:', e));
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

mojo.internal.bindings.network.mojom.TrustedHeaderClientReceiver = mojo.internal.bindings.network.mojom.TrustedHeaderClientReceiver;

mojo.internal.bindings.network.mojom.TrustedHeaderClientPtr = mojo.internal.bindings.network.mojom.TrustedHeaderClientRemote;
mojo.internal.bindings.network.mojom.TrustedHeaderClientRequest = mojo.internal.bindings.network.mojom.TrustedHeaderClientPendingReceiver;


// Interface: TrustedURLLoaderHeaderClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec, 'network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_Params', [
      mojo.internal.StructField('arg_header_client', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TrustedHeaderClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec, 'network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.network.mojom.URLRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_header_client', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TrustedHeaderClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TrustedURLLoaderHeaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onLoaderCreated(arg_request_id, arg_header_client) {
    return this.$.onLoaderCreated(arg_request_id, arg_header_client);
  }
  onLoaderForCorsPreflightCreated(arg_request, arg_header_client) {
    return this.$.onLoaderForCorsPreflightCreated(arg_request, arg_header_client);
  }
};

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TrustedURLLoaderHeaderClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onLoaderCreated(arg_request_id, arg_header_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec,
      null,
      [arg_request_id, arg_header_client],
      false);
  }

  onLoaderForCorsPreflightCreated(arg_request, arg_header_client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec,
      null,
      [arg_request, arg_header_client],
      false);
  }

};

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TrustedURLLoaderHeaderClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TrustedURLLoaderHeaderClient', [
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
        
        // Try Method 0: OnLoaderCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLoaderCreated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnLoaderForCorsPreflightCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLoaderForCorsPreflightCreated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLoaderCreated');
          const result = this.impl.onLoaderCreated(params.arg_request_id, params.arg_header_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLoaderForCorsPreflightCreated');
          const result = this.impl.onLoaderForCorsPreflightCreated(params.arg_request, params.arg_header_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientReceiver = mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientReceiver;

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientPtr = mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientRemote;
mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientRequest = mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientPendingReceiver;


// Interface: PreloadedSharedDictionaryInfoHandle
mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleRemote = class {
  static get $interfaceName() {
    return 'network.mojom.PreloadedSharedDictionaryInfoHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandlePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PreloadedSharedDictionaryInfoHandle', [
    ]);
  }

};

mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandle.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.PreloadedSharedDictionaryInfoHandle',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PreloadedSharedDictionaryInfoHandle', [
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleReceiver = mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleReceiver;

mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandlePtr = mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleRemote;
mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleRequest = mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandlePendingReceiver;


// Interface: NetworkContext
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetClient_ParamsSpec, 'network.mojom.NetworkContext_SetClient_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.NetworkContextClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec, 'network.mojom.NetworkContext_CreateURLLoaderFactory_Params', [
      mojo.internal.StructField('arg_url_loader_factory', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.URLLoaderFactoryParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec, 'network.mojom.NetworkContext_ResetURLLoaderFactories_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec, 'network.mojom.NetworkContext_GetViaObliviousHttp_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.network.mojom.ObliviousHttpRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ObliviousHttpClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetCookieManager_ParamsSpec, 'network.mojom.NetworkContext_GetCookieManager_Params', [
      mojo.internal.StructField('arg_cookie_manager', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.CookieManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec, 'network.mojom.NetworkContext_GetRestrictedCookieManager_Params', [
      mojo.internal.StructField('arg_restricted_cookie_manager', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.RestrictedCookieManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_role', 8, 0, mojo.internal.bindings.network.mojom.RestrictedCookieManagerRoleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_isolation_info', 24, 0, mojo.internal.bindings.network.mojom.IsolationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_setting_overrides', 32, 0, mojo.internal.bindings.network.mojom.CookieSettingOverridesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_cookie_setting_overrides', 40, 0, mojo.internal.bindings.network.mojom.CookieSettingOverridesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_observer', 48, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CookieAccessObserverRemote), null, true, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec, 'network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_Params', [
      mojo.internal.StructField('arg_trust_token_query_answerer', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TrustTokenQueryAnswererRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_top_frame_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec, 'network.mojom.NetworkContext_ClearTrustTokenData_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearTrustTokenData_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec, 'network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParams', [
      mojo.internal.StructField('arg_any_data_deleted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec, 'network.mojom.NetworkContext_GetStoredTrustTokenCounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec, 'network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParams', [
      mojo.internal.StructField('arg_tokens', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.StoredTrustTokensForIssuerSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec, 'network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec, 'network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParams', [
      mojo.internal.StructField('arg_issuer_redemption_record_map', 0, 0, mojo.internal.Map(mojo.internal.bindings.url.mojom.OriginSpec.$, mojo.internal.Array(mojo.internal.bindings.network.mojom.ToplevelRedemptionRecordSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec, 'network.mojom.NetworkContext_DeleteStoredTrustTokens_Params', [
      mojo.internal.StructField('arg_issuer', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec, 'network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.network.mojom.DeleteStoredTrustTokensStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec, 'network.mojom.NetworkContext_SetBlockTrustTokens_Params', [
      mojo.internal.StructField('arg_block', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec, 'network.mojom.NetworkContext_ClearNetworkingHistoryBetween_Params', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ParamsSpec, 'network.mojom.NetworkContext_ClearHttpCache_Params', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_filter', 16, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearHttpCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec, 'network.mojom.NetworkContext_ComputeHttpCacheSize_Params', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec, 'network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParams', [
      mojo.internal.StructField('arg_size_or_error', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_upper_bound', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec, 'network.mojom.NetworkContext_NotifyBrowserIdle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec, 'network.mojom.NetworkContext_NotifyExternalCacheHit_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_http_method', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_key', 16, 0, mojo.internal.bindings.network.mojom.NetworkIsolationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_include_credentials', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ParamsSpec, 'network.mojom.NetworkContext_ClearHostCache_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearHostCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec, 'network.mojom.NetworkContext_ClearHttpAuthCache_Params', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_filter', 16, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec, 'network.mojom.NetworkContext_ClearCorsPreflightCache_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec, 'network.mojom.NetworkContext_ClearReportingCacheReports_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec, 'network.mojom.NetworkContext_ClearReportingCacheClients_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec, 'network.mojom.NetworkContext_ClearNetworkErrorLogging_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec, 'network.mojom.NetworkContext_ClearDomainReliability_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_mode', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DomainReliabilityClearModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearDomainReliability_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec, 'network.mojom.NetworkContext_ClearSharedDictionaryCache_Params', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_filter', 16, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec, 'network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_Params', [
      mojo.internal.StructField('arg_isolation_key', 0, 0, mojo.internal.bindings.network.mojom.SharedDictionaryIsolationKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec, 'network.mojom.NetworkContext_SetDocumentReportingEndpoints_Params', [
      mojo.internal.StructField('arg_reporting_source', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_isolation_info', 16, 0, mojo.internal.bindings.network.mojom.IsolationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoints', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec, 'network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_Params', [
      mojo.internal.StructField('arg_endpoints', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec, 'network.mojom.NetworkContext_SendReportsAndRemoveSource_Params', [
      mojo.internal.StructField('arg_reporting_source', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_QueueReport_ParamsSpec, 'network.mojom.NetworkContext_QueueReport_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_group', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reporting_source', 24, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 32, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_body', 40, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec, 'network.mojom.NetworkContext_QueueEnterpriseReport_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_group', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_body', 24, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec, 'network.mojom.NetworkContext_QueueSignedExchangeReport_Params', [
      mojo.internal.StructField('arg_report', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.SignedExchangeReportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 8, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ParamsSpec, 'network.mojom.NetworkContext_CloseAllConnections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ResponseParamsSpec, 'network.mojom.NetworkContext_CloseAllConnections_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec, 'network.mojom.NetworkContext_CloseIdleConnections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ResponseParamsSpec, 'network.mojom.NetworkContext_CloseIdleConnections_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec, 'network.mojom.NetworkContext_SetNetworkConditions_Params', [
      mojo.internal.StructField('arg_throttling_profile_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_conditions', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.MatchedNetworkConditionsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec, 'network.mojom.NetworkContext_SetAcceptLanguage_Params', [
      mojo.internal.StructField('arg_new_accept_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec, 'network.mojom.NetworkContext_SetEnableReferrers_Params', [
      mojo.internal.StructField('arg_enable_referrers', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetCTPolicy_ParamsSpec, 'network.mojom.NetworkContext_SetCTPolicy_Params', [
      mojo.internal.StructField('arg_ct_policy', 0, 0, mojo.internal.bindings.network.mojom.CTPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateUDPSocket_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.UDPSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_listener', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.UDPSocketListenerRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateRestrictedUDPSocket_Params', [
      mojo.internal.StructField('arg_addr', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mode', 8, 0, mojo.internal.bindings.network.mojom.RestrictedUDPSocketModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 16, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 24, 0, mojo.internal.bindings.network.mojom.RestrictedUDPSocketParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_receiver', 32, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.RestrictedUDPSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_listener', 40, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.UDPSocketListenerRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_allow_multicast', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec, 'network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParams', [
      mojo.internal.StructField('arg_local_addr_out', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateTCPServerSocket_Params', [
      mojo.internal.StructField('arg_local_addr', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.network.mojom.TCPServerSocketOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 16, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_socket', 24, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TCPServerSocketRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec, 'network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParams', [
      mojo.internal.StructField('arg_local_addr_out', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateTCPConnectedSocket_Params', [
      mojo.internal.StructField('arg_local_addr', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_remote_addr_list', 8, 0, mojo.internal.bindings.network.mojom.AddressListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tcp_connected_socket_options', 16, 0, mojo.internal.bindings.network.mojom.TCPConnectedSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 24, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_socket', 32, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TCPConnectedSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 40, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec, 'network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParams', [
      mojo.internal.StructField('arg_local_addr', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_peer_addr', 8, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_receive_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('arg_send_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('arg_result', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateTCPBoundSocket_Params', [
      mojo.internal.StructField('arg_local_addr', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 8, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_socket', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TCPBoundSocketRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec, 'network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParams', [
      mojo.internal.StructField('arg_local_addr', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec, 'network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_Params', [
      mojo.internal.StructField('arg_factory', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.ProxyResolvingSocketFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec, 'network.mojom.NetworkContext_LookUpProxyForURL_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 8, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_proxy_lookup_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ProxyLookupClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec, 'network.mojom.NetworkContext_ForceReloadProxyConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParamsSpec, 'network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec, 'network.mojom.NetworkContext_ClearBadProxiesCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateWebSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateWebSocket_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_requested_protocols', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_site_for_cookies', 16, 0, mojo.internal.bindings.network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage_access_api_status', 24, 0, mojo.internal.bindings.network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_isolation_info', 32, 0, mojo.internal.bindings.network.mojom.IsolationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_additional_headers', 40, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.HttpHeaderSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 48, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_security_state', 56, 0, mojo.internal.bindings.network.mojom.ClientSecurityStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 64, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_handshake_client', 72, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.WebSocketHandshakeClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_url_loader_network_observer', 80, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_auth_handler', 88, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_header_client', 96, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.TrustedHeaderClientSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_throttling_profile_id', 104, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_process_id', 112, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_options', 116, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 128]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateWebTransport_ParamsSpec, 'network.mojom.NetworkContext_CreateWebTransport_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 16, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fingerprints', 24, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.WebTransportCertificateFingerprintSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_application_protocols', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_handshake_client', 40, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.WebTransportHandshakeClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_url_loader_network_observer', 48, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_client_security_state', 56, 0, mojo.internal.bindings.network.mojom.ClientSecurityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec, 'network.mojom.NetworkContext_CreateNetLogExporter_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.NetLogExporterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_PreconnectSockets_ParamsSpec, 'network.mojom.NetworkContext_PreconnectSockets_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_credentials_mode', 8, 0, mojo.internal.bindings.network.mojom.CredentialsModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 16, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 24, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_keepalive_config', 32, 0, mojo.internal.bindings.network.mojom.ConnectionKeepAliveConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_observer_client', 40, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ConnectionChangeObserverClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_num_streams', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec, 'network.mojom.NetworkContext_CreateP2PSocketManager_Params', [
      mojo.internal.StructField('arg_network_anonymization_key', 0, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.P2PTrustedSocketManagerClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_trusted_socket_manager', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.P2PTrustedSocketManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_socket_manager', 24, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.P2PSocketManagerRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec, 'network.mojom.NetworkContext_CreateMdnsResponder_Params', [
      mojo.internal.StructField('arg_responder_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.MdnsResponderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ResolveHost_ParamsSpec, 'network.mojom.NetworkContext_ResolveHost_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.bindings.network.mojom.HostResolverHostSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 8, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_optional_parameters', 16, 0, mojo.internal.bindings.network.mojom.ResolveHostParametersSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_response_client', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ResolveHostClientRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateHostResolver_ParamsSpec, 'network.mojom.NetworkContext_CreateHostResolver_Params', [
      mojo.internal.StructField('arg_config_overrides', 0, 0, mojo.internal.bindings.network.mojom.DnsConfigOverridesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_host_resolver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.HostResolverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ParamsSpec, 'network.mojom.NetworkContext_VerifyCert_Params', [
      mojo.internal.StructField('arg_certificate', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_port', 8, 0, mojo.internal.bindings.network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ocsp_response', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_sct_list', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec, 'network.mojom.NetworkContext_VerifyCert_ResponseParams', [
      mojo.internal.StructField('arg_cv_result', 0, 0, mojo.internal.bindings.network.mojom.CertVerifyResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pkp_bypassed', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec, 'network.mojom.NetworkContext_VerifyCertForSignedExchange_Params', [
      mojo.internal.StructField('arg_certificate', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_port', 8, 0, mojo.internal.bindings.network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ocsp_response', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_sct_list', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec, 'network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParams', [
      mojo.internal.StructField('arg_cv_result', 0, 0, mojo.internal.bindings.network.mojom.CertVerifyResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pkp_bypassed', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec, 'network.mojom.NetworkContext_Verify2QwacCertBinding_Params', [
      mojo.internal.StructField('arg_binding', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_hostname', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tls_certificate', 16, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec, 'network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParams', [
      mojo.internal.StructField('arg_verified_cert', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ParamsSpec, 'network.mojom.NetworkContext_AddHSTS_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_expiry', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_include_subdomains', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ResponseParamsSpec, 'network.mojom.NetworkContext_AddHSTS_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec, 'network.mojom.NetworkContext_IsHSTSActiveForHost_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_top_level_nav', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec, 'network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ParamsSpec, 'network.mojom.NetworkContext_GetHSTSState_Params', [
      mojo.internal.StructField('arg_domain', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec, 'network.mojom.NetworkContext_GetHSTSState_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec, 'network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_Params', [
      mojo.internal.StructField('arg_source_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_allow_patterns', 8, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CorsOriginPatternSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_block_patterns', 16, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CorsOriginPatternSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParamsSpec, 'network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec, 'network.mojom.NetworkContext_DeleteDynamicDataForHost_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec, 'network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec, 'network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_Params', [
      mojo.internal.StructField('arg_split_auth_cache_by_network_anonymization_key', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec, 'network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec, 'network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParams', [
      mojo.internal.StructField('arg_cache_key', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec, 'network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_Params', [
      mojo.internal.StructField('arg_cache_key', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParamsSpec, 'network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec, 'network.mojom.NetworkContext_AddAuthCacheEntry_Params', [
      mojo.internal.StructField('arg_challenge', 0, 0, mojo.internal.bindings.network.mojom.AuthChallengeInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 8, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_credentials', 16, 0, mojo.internal.bindings.network.mojom.AuthCredentialsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParamsSpec, 'network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec, 'network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec, 'network.mojom.NetworkContext_LookupProxyAuthCredentials_Params', [
      mojo.internal.StructField('arg_proxy_server', 0, 0, mojo.internal.bindings.network.mojom.ProxyServerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_auth_scheme', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_realm', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec, 'network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParams', [
      mojo.internal.StructField('arg_credentials', 0, 0, mojo.internal.bindings.network.mojom.AuthCredentialsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec, 'network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec, 'network.mojom.NetworkContext_VerifyCertificateForTesting_Params', [
      mojo.internal.StructField('arg_certificate', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hostname', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_ocsp_response', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_sct_list', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec, 'network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParams', [
      mojo.internal.StructField('arg_trust_anchor_ids', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec, 'network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_Params', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_upload_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec, 'network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec, 'network.mojom.NetworkContext_SetSCTAuditingMode_Params', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.SCTAuditingModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec, 'network.mojom.NetworkContext_AddReportingApiObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ReportingApiObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParams', [
      mojo.internal.StructField('arg_usage_info', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.SharedDictionaryUsageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryInfo_Params', [
      mojo.internal.StructField('arg_isolation_key', 0, 0, mojo.internal.bindings.network.mojom.SharedDictionaryIsolationKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParams', [
      mojo.internal.StructField('arg_dictionaries', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.SharedDictionaryInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_Params', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParams', [
      mojo.internal.StructField('arg_origins', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.OriginSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec, 'network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_Params', [
      mojo.internal.StructField('arg_cache_max_size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec, 'network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_Params', [
      mojo.internal.StructField('arg_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_preload_handle', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec, 'network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec, 'network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.bindings.network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_certificate', 8, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec, 'network.mojom.NetworkContext_FlushMatchingCachedClientCert_Params', [
      mojo.internal.StructField('arg_certificate', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec, 'network.mojom.NetworkContext_FlushClientCertCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec, 'network.mojom.NetworkContext_RevokeNetworkForNonces_Params', [
      mojo.internal.StructField('arg_nonces_to_patterns', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.NonceAndAllowlistedPatternsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParamsSpec, 'network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearNonces_ParamsSpec, 'network.mojom.NetworkContext_ClearNonces_Params', [
      mojo.internal.StructField('arg_nonces', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec, 'network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_Params', [
      mojo.internal.StructField('arg_exempted_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_nonce', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParamsSpec, 'network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_Prefetch_ParamsSpec, 'network.mojom.NetworkContext_Prefetch_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.network.mojom.URLRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 8, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_options', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec, 'network.mojom.NetworkContext_GetBoundNetworkForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParams', [
      mojo.internal.StructField('arg_bound_network', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec, 'network.mojom.NetworkContext_GetDeviceBoundSessionManager_Params', [
      mojo.internal.StructField('arg_device_bound_session_manager', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddQuicHints_ParamsSpec, 'network.mojom.NetworkContext_AddQuicHints_Params', [
      mojo.internal.StructField('arg_origins', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.SchemeHostPortSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 8, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.network.mojom.NetworkContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.NetworkContextRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.NetworkContextPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.NetworkContextRemoteCallHandler(this.proxy);
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
  createURLLoaderFactory(arg_url_loader_factory, arg_params) {
    return this.$.createURLLoaderFactory(arg_url_loader_factory, arg_params);
  }
  resetURLLoaderFactories() {
    return this.$.resetURLLoaderFactories();
  }
  getViaObliviousHttp(arg_request, arg_client) {
    return this.$.getViaObliviousHttp(arg_request, arg_client);
  }
  getCookieManager(arg_cookie_manager) {
    return this.$.getCookieManager(arg_cookie_manager);
  }
  getRestrictedCookieManager(arg_restricted_cookie_manager, arg_role, arg_origin, arg_isolation_info, arg_cookie_setting_overrides, arg_devtools_cookie_setting_overrides, arg_cookie_observer) {
    return this.$.getRestrictedCookieManager(arg_restricted_cookie_manager, arg_role, arg_origin, arg_isolation_info, arg_cookie_setting_overrides, arg_devtools_cookie_setting_overrides, arg_cookie_observer);
  }
  getTrustTokenQueryAnswerer(arg_trust_token_query_answerer, arg_top_frame_origin) {
    return this.$.getTrustTokenQueryAnswerer(arg_trust_token_query_answerer, arg_top_frame_origin);
  }
  clearTrustTokenData(arg_filter) {
    return this.$.clearTrustTokenData(arg_filter);
  }
  clearTrustTokenSessionOnlyData() {
    return this.$.clearTrustTokenSessionOnlyData();
  }
  getStoredTrustTokenCounts() {
    return this.$.getStoredTrustTokenCounts();
  }
  getPrivateStateTokenRedemptionRecords() {
    return this.$.getPrivateStateTokenRedemptionRecords();
  }
  deleteStoredTrustTokens(arg_issuer) {
    return this.$.deleteStoredTrustTokens(arg_issuer);
  }
  setBlockTrustTokens(arg_block) {
    return this.$.setBlockTrustTokens(arg_block);
  }
  clearNetworkingHistoryBetween(arg_start_time, arg_end_time) {
    return this.$.clearNetworkingHistoryBetween(arg_start_time, arg_end_time);
  }
  clearHttpCache(arg_start_time, arg_end_time, arg_filter) {
    return this.$.clearHttpCache(arg_start_time, arg_end_time, arg_filter);
  }
  computeHttpCacheSize(arg_start_time, arg_end_time) {
    return this.$.computeHttpCacheSize(arg_start_time, arg_end_time);
  }
  notifyBrowserIdle() {
    return this.$.notifyBrowserIdle();
  }
  notifyExternalCacheHit(arg_url, arg_http_method, arg_key, arg_include_credentials) {
    return this.$.notifyExternalCacheHit(arg_url, arg_http_method, arg_key, arg_include_credentials);
  }
  clearHostCache(arg_filter) {
    return this.$.clearHostCache(arg_filter);
  }
  clearHttpAuthCache(arg_start_time, arg_end_time, arg_filter) {
    return this.$.clearHttpAuthCache(arg_start_time, arg_end_time, arg_filter);
  }
  clearCorsPreflightCache(arg_filter) {
    return this.$.clearCorsPreflightCache(arg_filter);
  }
  clearReportingCacheReports(arg_filter) {
    return this.$.clearReportingCacheReports(arg_filter);
  }
  clearReportingCacheClients(arg_filter) {
    return this.$.clearReportingCacheClients(arg_filter);
  }
  clearNetworkErrorLogging(arg_filter) {
    return this.$.clearNetworkErrorLogging(arg_filter);
  }
  clearDomainReliability(arg_filter, arg_mode) {
    return this.$.clearDomainReliability(arg_filter, arg_mode);
  }
  clearSharedDictionaryCache(arg_start_time, arg_end_time, arg_filter) {
    return this.$.clearSharedDictionaryCache(arg_start_time, arg_end_time, arg_filter);
  }
  clearSharedDictionaryCacheForIsolationKey(arg_isolation_key) {
    return this.$.clearSharedDictionaryCacheForIsolationKey(arg_isolation_key);
  }
  setDocumentReportingEndpoints(arg_reporting_source, arg_origin, arg_isolation_info, arg_endpoints) {
    return this.$.setDocumentReportingEndpoints(arg_reporting_source, arg_origin, arg_isolation_info, arg_endpoints);
  }
  setEnterpriseReportingEndpoints(arg_endpoints) {
    return this.$.setEnterpriseReportingEndpoints(arg_endpoints);
  }
  sendReportsAndRemoveSource(arg_reporting_source) {
    return this.$.sendReportsAndRemoveSource(arg_reporting_source);
  }
  queueReport(arg_type, arg_group, arg_url, arg_reporting_source, arg_network_anonymization_key, arg_body) {
    return this.$.queueReport(arg_type, arg_group, arg_url, arg_reporting_source, arg_network_anonymization_key, arg_body);
  }
  queueEnterpriseReport(arg_type, arg_group, arg_url, arg_body) {
    return this.$.queueEnterpriseReport(arg_type, arg_group, arg_url, arg_body);
  }
  queueSignedExchangeReport(arg_report, arg_network_anonymization_key) {
    return this.$.queueSignedExchangeReport(arg_report, arg_network_anonymization_key);
  }
  closeAllConnections() {
    return this.$.closeAllConnections();
  }
  closeIdleConnections() {
    return this.$.closeIdleConnections();
  }
  setNetworkConditions(arg_throttling_profile_id, arg_conditions) {
    return this.$.setNetworkConditions(arg_throttling_profile_id, arg_conditions);
  }
  setAcceptLanguage(arg_new_accept_language) {
    return this.$.setAcceptLanguage(arg_new_accept_language);
  }
  setEnableReferrers(arg_enable_referrers) {
    return this.$.setEnableReferrers(arg_enable_referrers);
  }
  setCTPolicy(arg_ct_policy) {
    return this.$.setCTPolicy(arg_ct_policy);
  }
  createUDPSocket(arg_receiver, arg_listener) {
    return this.$.createUDPSocket(arg_receiver, arg_listener);
  }
  createRestrictedUDPSocket(arg_addr, arg_mode, arg_traffic_annotation, arg_params, arg_receiver, arg_listener, arg_allow_multicast) {
    return this.$.createRestrictedUDPSocket(arg_addr, arg_mode, arg_traffic_annotation, arg_params, arg_receiver, arg_listener, arg_allow_multicast);
  }
  createTCPServerSocket(arg_local_addr, arg_options, arg_traffic_annotation, arg_socket) {
    return this.$.createTCPServerSocket(arg_local_addr, arg_options, arg_traffic_annotation, arg_socket);
  }
  createTCPConnectedSocket(arg_local_addr, arg_remote_addr_list, arg_tcp_connected_socket_options, arg_traffic_annotation, arg_socket, arg_observer) {
    return this.$.createTCPConnectedSocket(arg_local_addr, arg_remote_addr_list, arg_tcp_connected_socket_options, arg_traffic_annotation, arg_socket, arg_observer);
  }
  createTCPBoundSocket(arg_local_addr, arg_traffic_annotation, arg_socket) {
    return this.$.createTCPBoundSocket(arg_local_addr, arg_traffic_annotation, arg_socket);
  }
  createProxyResolvingSocketFactory(arg_factory) {
    return this.$.createProxyResolvingSocketFactory(arg_factory);
  }
  lookUpProxyForURL(arg_url, arg_network_anonymization_key, arg_proxy_lookup_client) {
    return this.$.lookUpProxyForURL(arg_url, arg_network_anonymization_key, arg_proxy_lookup_client);
  }
  forceReloadProxyConfig() {
    return this.$.forceReloadProxyConfig();
  }
  clearBadProxiesCache() {
    return this.$.clearBadProxiesCache();
  }
  createWebSocket(arg_url, arg_requested_protocols, arg_site_for_cookies, arg_storage_access_api_status, arg_isolation_info, arg_additional_headers, arg_process_id, arg_origin, arg_client_security_state, arg_options, arg_traffic_annotation, arg_handshake_client, arg_url_loader_network_observer, arg_auth_handler, arg_header_client, arg_throttling_profile_id) {
    return this.$.createWebSocket(arg_url, arg_requested_protocols, arg_site_for_cookies, arg_storage_access_api_status, arg_isolation_info, arg_additional_headers, arg_process_id, arg_origin, arg_client_security_state, arg_options, arg_traffic_annotation, arg_handshake_client, arg_url_loader_network_observer, arg_auth_handler, arg_header_client, arg_throttling_profile_id);
  }
  createWebTransport(arg_url, arg_origin, arg_network_anonymization_key, arg_fingerprints, arg_application_protocols, arg_handshake_client, arg_url_loader_network_observer, arg_client_security_state) {
    return this.$.createWebTransport(arg_url, arg_origin, arg_network_anonymization_key, arg_fingerprints, arg_application_protocols, arg_handshake_client, arg_url_loader_network_observer, arg_client_security_state);
  }
  createNetLogExporter(arg_receiver) {
    return this.$.createNetLogExporter(arg_receiver);
  }
  preconnectSockets(arg_num_streams, arg_url, arg_credentials_mode, arg_network_anonymization_key, arg_traffic_annotation, arg_keepalive_config, arg_observer_client) {
    return this.$.preconnectSockets(arg_num_streams, arg_url, arg_credentials_mode, arg_network_anonymization_key, arg_traffic_annotation, arg_keepalive_config, arg_observer_client);
  }
  createP2PSocketManager(arg_network_anonymization_key, arg_client, arg_trusted_socket_manager, arg_socket_manager) {
    return this.$.createP2PSocketManager(arg_network_anonymization_key, arg_client, arg_trusted_socket_manager, arg_socket_manager);
  }
  createMdnsResponder(arg_responder_receiver) {
    return this.$.createMdnsResponder(arg_responder_receiver);
  }
  resolveHost(arg_host, arg_network_anonymization_key, arg_optional_parameters, arg_response_client) {
    return this.$.resolveHost(arg_host, arg_network_anonymization_key, arg_optional_parameters, arg_response_client);
  }
  createHostResolver(arg_config_overrides, arg_host_resolver) {
    return this.$.createHostResolver(arg_config_overrides, arg_host_resolver);
  }
  verifyCert(arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list) {
    return this.$.verifyCert(arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list);
  }
  verifyCertForSignedExchange(arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list) {
    return this.$.verifyCertForSignedExchange(arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list);
  }
  verify2QwacCertBinding(arg_binding, arg_hostname, arg_tls_certificate) {
    return this.$.verify2QwacCertBinding(arg_binding, arg_hostname, arg_tls_certificate);
  }
  addHSTS(arg_host, arg_expiry, arg_include_subdomains) {
    return this.$.addHSTS(arg_host, arg_expiry, arg_include_subdomains);
  }
  isHSTSActiveForHost(arg_host, arg_is_top_level_nav) {
    return this.$.isHSTSActiveForHost(arg_host, arg_is_top_level_nav);
  }
  getHSTSState(arg_domain) {
    return this.$.getHSTSState(arg_domain);
  }
  setCorsOriginAccessListsForOrigin(arg_source_origin, arg_allow_patterns, arg_block_patterns) {
    return this.$.setCorsOriginAccessListsForOrigin(arg_source_origin, arg_allow_patterns, arg_block_patterns);
  }
  deleteDynamicDataForHost(arg_host) {
    return this.$.deleteDynamicDataForHost(arg_host);
  }
  setSplitAuthCacheByNetworkAnonymizationKey(arg_split_auth_cache_by_network_anonymization_key) {
    return this.$.setSplitAuthCacheByNetworkAnonymizationKey(arg_split_auth_cache_by_network_anonymization_key);
  }
  saveHttpAuthCacheProxyEntries() {
    return this.$.saveHttpAuthCacheProxyEntries();
  }
  loadHttpAuthCacheProxyEntries(arg_cache_key) {
    return this.$.loadHttpAuthCacheProxyEntries(arg_cache_key);
  }
  addAuthCacheEntry(arg_challenge, arg_network_anonymization_key, arg_credentials) {
    return this.$.addAuthCacheEntry(arg_challenge, arg_network_anonymization_key, arg_credentials);
  }
  setCorsNonWildcardRequestHeadersSupport(arg_value) {
    return this.$.setCorsNonWildcardRequestHeadersSupport(arg_value);
  }
  lookupProxyAuthCredentials(arg_proxy_server, arg_auth_scheme, arg_realm) {
    return this.$.lookupProxyAuthCredentials(arg_proxy_server, arg_auth_scheme, arg_realm);
  }
  enableStaticKeyPinningForTesting() {
    return this.$.enableStaticKeyPinningForTesting();
  }
  verifyCertificateForTesting(arg_certificate, arg_hostname, arg_ocsp_response, arg_sct_list) {
    return this.$.verifyCertificateForTesting(arg_certificate, arg_hostname, arg_ocsp_response, arg_sct_list);
  }
  getTrustAnchorIDsForTesting() {
    return this.$.getTrustAnchorIDsForTesting();
  }
  addDomainReliabilityContextForTesting(arg_origin, arg_upload_url) {
    return this.$.addDomainReliabilityContextForTesting(arg_origin, arg_upload_url);
  }
  forceDomainReliabilityUploadsForTesting() {
    return this.$.forceDomainReliabilityUploadsForTesting();
  }
  setSCTAuditingMode(arg_mode) {
    return this.$.setSCTAuditingMode(arg_mode);
  }
  addReportingApiObserver(arg_observer) {
    return this.$.addReportingApiObserver(arg_observer);
  }
  getSharedDictionaryUsageInfo() {
    return this.$.getSharedDictionaryUsageInfo();
  }
  getSharedDictionaryInfo(arg_isolation_key) {
    return this.$.getSharedDictionaryInfo(arg_isolation_key);
  }
  getSharedDictionaryOriginsBetween(arg_start_time, arg_end_time) {
    return this.$.getSharedDictionaryOriginsBetween(arg_start_time, arg_end_time);
  }
  setSharedDictionaryCacheMaxSize(arg_cache_max_size) {
    return this.$.setSharedDictionaryCacheMaxSize(arg_cache_max_size);
  }
  preloadSharedDictionaryInfoForDocument(arg_urls, arg_preload_handle) {
    return this.$.preloadSharedDictionaryInfoForDocument(arg_urls, arg_preload_handle);
  }
  hasPreloadedSharedDictionaryInfoForTesting() {
    return this.$.hasPreloadedSharedDictionaryInfoForTesting();
  }
  flushCachedClientCertIfNeeded(arg_host, arg_certificate) {
    return this.$.flushCachedClientCertIfNeeded(arg_host, arg_certificate);
  }
  flushMatchingCachedClientCert(arg_certificate) {
    return this.$.flushMatchingCachedClientCert(arg_certificate);
  }
  flushClientCertCache() {
    return this.$.flushClientCertCache();
  }
  revokeNetworkForNonces(arg_nonces_to_patterns) {
    return this.$.revokeNetworkForNonces(arg_nonces_to_patterns);
  }
  clearNonces(arg_nonces) {
    return this.$.clearNonces(arg_nonces);
  }
  exemptUrlFromNetworkRevocationForNonce(arg_exempted_url, arg_nonce) {
    return this.$.exemptUrlFromNetworkRevocationForNonce(arg_exempted_url, arg_nonce);
  }
  prefetch(arg_request_id, arg_options, arg_request, arg_traffic_annotation) {
    return this.$.prefetch(arg_request_id, arg_options, arg_request, arg_traffic_annotation);
  }
  getBoundNetworkForTesting() {
    return this.$.getBoundNetworkForTesting();
  }
  getDeviceBoundSessionManager(arg_device_bound_session_manager) {
    return this.$.getDeviceBoundSessionManager(arg_device_bound_session_manager);
  }
  addQuicHints(arg_origins, arg_network_anonymization_key) {
    return this.$.addQuicHints(arg_origins, arg_network_anonymization_key);
  }
};

mojo.internal.bindings.network.mojom.NetworkContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkContext', [
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
      mojo.internal.bindings.network.mojom.NetworkContext_SetClient_ParamsSpec,
      null,
      [arg_client],
      false);
  }

  createURLLoaderFactory(arg_url_loader_factory, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec,
      null,
      [arg_url_loader_factory, arg_params],
      false);
  }

  resetURLLoaderFactories() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec,
      null,
      [],
      false);
  }

  getViaObliviousHttp(arg_request, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec,
      null,
      [arg_request, arg_client],
      false);
  }

  getCookieManager(arg_cookie_manager) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetCookieManager_ParamsSpec,
      null,
      [arg_cookie_manager],
      false);
  }

  getRestrictedCookieManager(arg_restricted_cookie_manager, arg_role, arg_origin, arg_isolation_info, arg_cookie_setting_overrides, arg_devtools_cookie_setting_overrides, arg_cookie_observer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec,
      null,
      [arg_restricted_cookie_manager, arg_role, arg_origin, arg_isolation_info, arg_cookie_setting_overrides, arg_devtools_cookie_setting_overrides, arg_cookie_observer],
      false);
  }

  getTrustTokenQueryAnswerer(arg_trust_token_query_answerer, arg_top_frame_origin) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec,
      null,
      [arg_trust_token_query_answerer, arg_top_frame_origin],
      false);
  }

  clearTrustTokenData(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  clearTrustTokenSessionOnlyData() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec,
      [],
      false);
  }

  getStoredTrustTokenCounts() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec,
      [],
      false);
  }

  getPrivateStateTokenRedemptionRecords() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec,
      [],
      false);
  }

  deleteStoredTrustTokens(arg_issuer) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec,
      [arg_issuer],
      false);
  }

  setBlockTrustTokens(arg_block) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec,
      null,
      [arg_block],
      false);
  }

  clearNetworkingHistoryBetween(arg_start_time, arg_end_time) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParamsSpec,
      [arg_start_time, arg_end_time],
      false);
  }

  clearHttpCache(arg_start_time, arg_end_time, arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ResponseParamsSpec,
      [arg_start_time, arg_end_time, arg_filter],
      false);
  }

  computeHttpCacheSize(arg_start_time, arg_end_time) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec,
      [arg_start_time, arg_end_time],
      false);
  }

  notifyBrowserIdle() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec,
      null,
      [],
      false);
  }

  notifyExternalCacheHit(arg_url, arg_http_method, arg_key, arg_include_credentials) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec,
      null,
      [arg_url, arg_http_method, arg_key, arg_include_credentials],
      false);
  }

  clearHostCache(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  clearHttpAuthCache(arg_start_time, arg_end_time, arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParamsSpec,
      [arg_start_time, arg_end_time, arg_filter],
      false);
  }

  clearCorsPreflightCache(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  clearReportingCacheReports(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  clearReportingCacheClients(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  clearNetworkErrorLogging(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  clearDomainReliability(arg_filter, arg_mode) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ResponseParamsSpec,
      [arg_filter, arg_mode],
      false);
  }

  clearSharedDictionaryCache(arg_start_time, arg_end_time, arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParamsSpec,
      [arg_start_time, arg_end_time, arg_filter],
      false);
  }

  clearSharedDictionaryCacheForIsolationKey(arg_isolation_key) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParamsSpec,
      [arg_isolation_key],
      false);
  }

  setDocumentReportingEndpoints(arg_reporting_source, arg_origin, arg_isolation_info, arg_endpoints) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec,
      null,
      [arg_reporting_source, arg_origin, arg_isolation_info, arg_endpoints],
      false);
  }

  setEnterpriseReportingEndpoints(arg_endpoints) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec,
      null,
      [arg_endpoints],
      false);
  }

  sendReportsAndRemoveSource(arg_reporting_source) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec,
      null,
      [arg_reporting_source],
      false);
  }

  queueReport(arg_type, arg_group, arg_url, arg_reporting_source, arg_network_anonymization_key, arg_body) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_QueueReport_ParamsSpec,
      null,
      [arg_type, arg_group, arg_url, arg_reporting_source, arg_network_anonymization_key, arg_body],
      false);
  }

  queueEnterpriseReport(arg_type, arg_group, arg_url, arg_body) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec,
      null,
      [arg_type, arg_group, arg_url, arg_body],
      false);
  }

  queueSignedExchangeReport(arg_report, arg_network_anonymization_key) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec,
      null,
      [arg_report, arg_network_anonymization_key],
      false);
  }

  closeAllConnections() {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ResponseParamsSpec,
      [],
      false);
  }

  closeIdleConnections() {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ResponseParamsSpec,
      [],
      false);
  }

  setNetworkConditions(arg_throttling_profile_id, arg_conditions) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec,
      null,
      [arg_throttling_profile_id, arg_conditions],
      false);
  }

  setAcceptLanguage(arg_new_accept_language) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec,
      null,
      [arg_new_accept_language],
      false);
  }

  setEnableReferrers(arg_enable_referrers) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec,
      null,
      [arg_enable_referrers],
      false);
  }

  setCTPolicy(arg_ct_policy) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetCTPolicy_ParamsSpec,
      null,
      [arg_ct_policy],
      false);
  }

  createUDPSocket(arg_receiver, arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec,
      null,
      [arg_receiver, arg_listener],
      false);
  }

  createRestrictedUDPSocket(arg_addr, arg_mode, arg_traffic_annotation, arg_params, arg_receiver, arg_listener, arg_allow_multicast) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec,
      [arg_addr, arg_mode, arg_traffic_annotation, arg_params, arg_receiver, arg_listener, arg_allow_multicast],
      false);
  }

  createTCPServerSocket(arg_local_addr, arg_options, arg_traffic_annotation, arg_socket) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec,
      [arg_local_addr, arg_options, arg_traffic_annotation, arg_socket],
      false);
  }

  createTCPConnectedSocket(arg_local_addr, arg_remote_addr_list, arg_tcp_connected_socket_options, arg_traffic_annotation, arg_socket, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec,
      [arg_local_addr, arg_remote_addr_list, arg_tcp_connected_socket_options, arg_traffic_annotation, arg_socket, arg_observer],
      false);
  }

  createTCPBoundSocket(arg_local_addr, arg_traffic_annotation, arg_socket) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec,
      [arg_local_addr, arg_traffic_annotation, arg_socket],
      false);
  }

  createProxyResolvingSocketFactory(arg_factory) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec,
      null,
      [arg_factory],
      false);
  }

  lookUpProxyForURL(arg_url, arg_network_anonymization_key, arg_proxy_lookup_client) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec,
      null,
      [arg_url, arg_network_anonymization_key, arg_proxy_lookup_client],
      false);
  }

  forceReloadProxyConfig() {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParamsSpec,
      [],
      false);
  }

  clearBadProxiesCache() {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParamsSpec,
      [],
      false);
  }

  createWebSocket(arg_url, arg_requested_protocols, arg_site_for_cookies, arg_storage_access_api_status, arg_isolation_info, arg_additional_headers, arg_process_id, arg_origin, arg_client_security_state, arg_options, arg_traffic_annotation, arg_handshake_client, arg_url_loader_network_observer, arg_auth_handler, arg_header_client, arg_throttling_profile_id) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateWebSocket_ParamsSpec,
      null,
      [arg_url, arg_requested_protocols, arg_site_for_cookies, arg_storage_access_api_status, arg_isolation_info, arg_additional_headers, arg_process_id, arg_origin, arg_client_security_state, arg_options, arg_traffic_annotation, arg_handshake_client, arg_url_loader_network_observer, arg_auth_handler, arg_header_client, arg_throttling_profile_id],
      false);
  }

  createWebTransport(arg_url, arg_origin, arg_network_anonymization_key, arg_fingerprints, arg_application_protocols, arg_handshake_client, arg_url_loader_network_observer, arg_client_security_state) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateWebTransport_ParamsSpec,
      null,
      [arg_url, arg_origin, arg_network_anonymization_key, arg_fingerprints, arg_application_protocols, arg_handshake_client, arg_url_loader_network_observer, arg_client_security_state],
      false);
  }

  createNetLogExporter(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  preconnectSockets(arg_num_streams, arg_url, arg_credentials_mode, arg_network_anonymization_key, arg_traffic_annotation, arg_keepalive_config, arg_observer_client) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_PreconnectSockets_ParamsSpec,
      null,
      [arg_num_streams, arg_url, arg_credentials_mode, arg_network_anonymization_key, arg_traffic_annotation, arg_keepalive_config, arg_observer_client],
      false);
  }

  createP2PSocketManager(arg_network_anonymization_key, arg_client, arg_trusted_socket_manager, arg_socket_manager) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec,
      null,
      [arg_network_anonymization_key, arg_client, arg_trusted_socket_manager, arg_socket_manager],
      false);
  }

  createMdnsResponder(arg_responder_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec,
      null,
      [arg_responder_receiver],
      false);
  }

  resolveHost(arg_host, arg_network_anonymization_key, arg_optional_parameters, arg_response_client) {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ResolveHost_ParamsSpec,
      null,
      [arg_host, arg_network_anonymization_key, arg_optional_parameters, arg_response_client],
      false);
  }

  createHostResolver(arg_config_overrides, arg_host_resolver) {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateHostResolver_ParamsSpec,
      null,
      [arg_config_overrides, arg_host_resolver],
      false);
  }

  verifyCert(arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list) {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec,
      [arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list],
      false);
  }

  verifyCertForSignedExchange(arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list) {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec,
      [arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list],
      false);
  }

  verify2QwacCertBinding(arg_binding, arg_hostname, arg_tls_certificate) {
    return this.proxy.sendMessage(
      this.ordinals[58],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec,
      [arg_binding, arg_hostname, arg_tls_certificate],
      false);
  }

  addHSTS(arg_host, arg_expiry, arg_include_subdomains) {
    return this.proxy.sendMessage(
      this.ordinals[59],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ResponseParamsSpec,
      [arg_host, arg_expiry, arg_include_subdomains],
      false);
  }

  isHSTSActiveForHost(arg_host, arg_is_top_level_nav) {
    return this.proxy.sendMessage(
      this.ordinals[60],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec,
      [arg_host, arg_is_top_level_nav],
      false);
  }

  getHSTSState(arg_domain) {
    return this.proxy.sendMessage(
      this.ordinals[61],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec,
      [arg_domain],
      false);
  }

  setCorsOriginAccessListsForOrigin(arg_source_origin, arg_allow_patterns, arg_block_patterns) {
    return this.proxy.sendMessage(
      this.ordinals[62],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParamsSpec,
      [arg_source_origin, arg_allow_patterns, arg_block_patterns],
      false);
  }

  deleteDynamicDataForHost(arg_host) {
    return this.proxy.sendMessage(
      this.ordinals[63],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec,
      [arg_host],
      false);
  }

  setSplitAuthCacheByNetworkAnonymizationKey(arg_split_auth_cache_by_network_anonymization_key) {
    return this.proxy.sendMessage(
      this.ordinals[64],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec,
      null,
      [arg_split_auth_cache_by_network_anonymization_key],
      false);
  }

  saveHttpAuthCacheProxyEntries() {
    return this.proxy.sendMessage(
      this.ordinals[65],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec,
      [],
      false);
  }

  loadHttpAuthCacheProxyEntries(arg_cache_key) {
    return this.proxy.sendMessage(
      this.ordinals[66],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParamsSpec,
      [arg_cache_key],
      false);
  }

  addAuthCacheEntry(arg_challenge, arg_network_anonymization_key, arg_credentials) {
    return this.proxy.sendMessage(
      this.ordinals[67],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParamsSpec,
      [arg_challenge, arg_network_anonymization_key, arg_credentials],
      false);
  }

  setCorsNonWildcardRequestHeadersSupport(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[68],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec,
      null,
      [arg_value],
      false);
  }

  lookupProxyAuthCredentials(arg_proxy_server, arg_auth_scheme, arg_realm) {
    return this.proxy.sendMessage(
      this.ordinals[69],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec,
      [arg_proxy_server, arg_auth_scheme, arg_realm],
      false);
  }

  enableStaticKeyPinningForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[70],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParamsSpec,
      [],
      false);
  }

  verifyCertificateForTesting(arg_certificate, arg_hostname, arg_ocsp_response, arg_sct_list) {
    return this.proxy.sendMessage(
      this.ordinals[71],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec,
      [arg_certificate, arg_hostname, arg_ocsp_response, arg_sct_list],
      false);
  }

  getTrustAnchorIDsForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[72],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec,
      [],
      false);
  }

  addDomainReliabilityContextForTesting(arg_origin, arg_upload_url) {
    return this.proxy.sendMessage(
      this.ordinals[73],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParamsSpec,
      [arg_origin, arg_upload_url],
      false);
  }

  forceDomainReliabilityUploadsForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[74],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParamsSpec,
      [],
      false);
  }

  setSCTAuditingMode(arg_mode) {
    return this.proxy.sendMessage(
      this.ordinals[75],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec,
      null,
      [arg_mode],
      false);
  }

  addReportingApiObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[76],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  getSharedDictionaryUsageInfo() {
    return this.proxy.sendMessage(
      this.ordinals[77],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec,
      [],
      false);
  }

  getSharedDictionaryInfo(arg_isolation_key) {
    return this.proxy.sendMessage(
      this.ordinals[78],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec,
      [arg_isolation_key],
      false);
  }

  getSharedDictionaryOriginsBetween(arg_start_time, arg_end_time) {
    return this.proxy.sendMessage(
      this.ordinals[79],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec,
      [arg_start_time, arg_end_time],
      false);
  }

  setSharedDictionaryCacheMaxSize(arg_cache_max_size) {
    return this.proxy.sendMessage(
      this.ordinals[80],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec,
      null,
      [arg_cache_max_size],
      false);
  }

  preloadSharedDictionaryInfoForDocument(arg_urls, arg_preload_handle) {
    return this.proxy.sendMessage(
      this.ordinals[81],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec,
      null,
      [arg_urls, arg_preload_handle],
      false);
  }

  hasPreloadedSharedDictionaryInfoForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[82],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec,
      [],
      false);
  }

  flushCachedClientCertIfNeeded(arg_host, arg_certificate) {
    return this.proxy.sendMessage(
      this.ordinals[83],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec,
      null,
      [arg_host, arg_certificate],
      false);
  }

  flushMatchingCachedClientCert(arg_certificate) {
    return this.proxy.sendMessage(
      this.ordinals[84],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec,
      null,
      [arg_certificate],
      false);
  }

  flushClientCertCache() {
    return this.proxy.sendMessage(
      this.ordinals[85],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec,
      null,
      [],
      false);
  }

  revokeNetworkForNonces(arg_nonces_to_patterns) {
    return this.proxy.sendMessage(
      this.ordinals[86],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParamsSpec,
      [arg_nonces_to_patterns],
      false);
  }

  clearNonces(arg_nonces) {
    return this.proxy.sendMessage(
      this.ordinals[87],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearNonces_ParamsSpec,
      null,
      [arg_nonces],
      false);
  }

  exemptUrlFromNetworkRevocationForNonce(arg_exempted_url, arg_nonce) {
    return this.proxy.sendMessage(
      this.ordinals[88],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParamsSpec,
      [arg_exempted_url, arg_nonce],
      false);
  }

  prefetch(arg_request_id, arg_options, arg_request, arg_traffic_annotation) {
    return this.proxy.sendMessage(
      this.ordinals[89],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_Prefetch_ParamsSpec,
      null,
      [arg_request_id, arg_options, arg_request, arg_traffic_annotation],
      false);
  }

  getBoundNetworkForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[90],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec,
      [],
      false);
  }

  getDeviceBoundSessionManager(arg_device_bound_session_manager) {
    return this.proxy.sendMessage(
      this.ordinals[91],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec,
      null,
      [arg_device_bound_session_manager],
      false);
  }

  addQuicHints(arg_origins, arg_network_anonymization_key) {
    return this.proxy.sendMessage(
      this.ordinals[92],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_AddQuicHints_ParamsSpec,
      null,
      [arg_origins, arg_network_anonymization_key],
      false);
  }

};

mojo.internal.bindings.network.mojom.NetworkContext.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.NetworkContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkContext',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.NetworkContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkContext', [
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
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateURLLoaderFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateURLLoaderFactory (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ResetURLLoaderFactories
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetURLLoaderFactories (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetViaObliviousHttp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetViaObliviousHttp (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetCookieManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetCookieManager_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCookieManager (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetRestrictedCookieManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRestrictedCookieManager (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetTrustTokenQueryAnswerer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTrustTokenQueryAnswerer (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ClearTrustTokenData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearTrustTokenData (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ClearTrustTokenSessionOnlyData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearTrustTokenSessionOnlyData (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetStoredTrustTokenCounts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStoredTrustTokenCounts (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetPrivateStateTokenRedemptionRecords
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrivateStateTokenRedemptionRecords (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: DeleteStoredTrustTokens
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteStoredTrustTokens (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetBlockTrustTokens
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBlockTrustTokens (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: ClearNetworkingHistoryBetween
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearNetworkingHistoryBetween (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: ClearHttpCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearHttpCache (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: ComputeHttpCacheSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ComputeHttpCacheSize (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: NotifyBrowserIdle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyBrowserIdle (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: NotifyExternalCacheHit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyExternalCacheHit (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: ClearHostCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearHostCache (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: ClearHttpAuthCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearHttpAuthCache (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: ClearCorsPreflightCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearCorsPreflightCache (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: ClearReportingCacheReports
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearReportingCacheReports (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: ClearReportingCacheClients
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearReportingCacheClients (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: ClearNetworkErrorLogging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearNetworkErrorLogging (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: ClearDomainReliability
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearDomainReliability (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: ClearSharedDictionaryCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearSharedDictionaryCache (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: ClearSharedDictionaryCacheForIsolationKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearSharedDictionaryCacheForIsolationKey (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: SetDocumentReportingEndpoints
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDocumentReportingEndpoints (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: SetEnterpriseReportingEndpoints
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEnterpriseReportingEndpoints (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: SendReportsAndRemoveSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendReportsAndRemoveSource (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: QueueReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_QueueReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueReport (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: QueueEnterpriseReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueEnterpriseReport (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: QueueSignedExchangeReport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueSignedExchangeReport (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: CloseAllConnections
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseAllConnections (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: CloseIdleConnections
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseIdleConnections (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: SetNetworkConditions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNetworkConditions (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: SetAcceptLanguage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAcceptLanguage (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: SetEnableReferrers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEnableReferrers (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: SetCTPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetCTPolicy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCTPolicy (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: CreateUDPSocket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateUDPSocket (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        // Try Method 40: CreateRestrictedUDPSocket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRestrictedUDPSocket (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 40 failed:', e);
           }
        }
        // Try Method 41: CreateTCPServerSocket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateTCPServerSocket (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 41 failed:', e);
           }
        }
        // Try Method 42: CreateTCPConnectedSocket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateTCPConnectedSocket (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 42 failed:', e);
           }
        }
        // Try Method 43: CreateTCPBoundSocket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateTCPBoundSocket (43)');
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 43 failed:', e);
           }
        }
        // Try Method 44: CreateProxyResolvingSocketFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateProxyResolvingSocketFactory (44)');
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 44 failed:', e);
           }
        }
        // Try Method 45: LookUpProxyForURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LookUpProxyForURL (45)');
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 45 failed:', e);
           }
        }
        // Try Method 46: ForceReloadProxyConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceReloadProxyConfig (46)');
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 46 failed:', e);
           }
        }
        // Try Method 47: ClearBadProxiesCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearBadProxiesCache (47)');
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 47 failed:', e);
           }
        }
        // Try Method 48: CreateWebSocket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateWebSocket_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWebSocket (48)');
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 48 failed:', e);
           }
        }
        // Try Method 49: CreateWebTransport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateWebTransport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWebTransport (49)');
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 49 failed:', e);
           }
        }
        // Try Method 50: CreateNetLogExporter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNetLogExporter (50)');
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 50 failed:', e);
           }
        }
        // Try Method 51: PreconnectSockets
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_PreconnectSockets_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreconnectSockets (51)');
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 51 failed:', e);
           }
        }
        // Try Method 52: CreateP2PSocketManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateP2PSocketManager (52)');
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 52 failed:', e);
           }
        }
        // Try Method 53: CreateMdnsResponder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateMdnsResponder (53)');
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 53 failed:', e);
           }
        }
        // Try Method 54: ResolveHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ResolveHost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolveHost (54)');
             this.mapOrdinal(header.ordinal, 54);
             dispatchId = 54;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 54 failed:', e);
           }
        }
        // Try Method 55: CreateHostResolver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateHostResolver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateHostResolver (55)');
             this.mapOrdinal(header.ordinal, 55);
             dispatchId = 55;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 55 failed:', e);
           }
        }
        // Try Method 56: VerifyCert
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> VerifyCert (56)');
             this.mapOrdinal(header.ordinal, 56);
             dispatchId = 56;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 56 failed:', e);
           }
        }
        // Try Method 57: VerifyCertForSignedExchange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> VerifyCertForSignedExchange (57)');
             this.mapOrdinal(header.ordinal, 57);
             dispatchId = 57;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 57 failed:', e);
           }
        }
        // Try Method 58: Verify2QwacCertBinding
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Verify2QwacCertBinding (58)');
             this.mapOrdinal(header.ordinal, 58);
             dispatchId = 58;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 58 failed:', e);
           }
        }
        // Try Method 59: AddHSTS
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddHSTS (59)');
             this.mapOrdinal(header.ordinal, 59);
             dispatchId = 59;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 59 failed:', e);
           }
        }
        // Try Method 60: IsHSTSActiveForHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsHSTSActiveForHost (60)');
             this.mapOrdinal(header.ordinal, 60);
             dispatchId = 60;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 60 failed:', e);
           }
        }
        // Try Method 61: GetHSTSState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHSTSState (61)');
             this.mapOrdinal(header.ordinal, 61);
             dispatchId = 61;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 61 failed:', e);
           }
        }
        // Try Method 62: SetCorsOriginAccessListsForOrigin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCorsOriginAccessListsForOrigin (62)');
             this.mapOrdinal(header.ordinal, 62);
             dispatchId = 62;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 62 failed:', e);
           }
        }
        // Try Method 63: DeleteDynamicDataForHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteDynamicDataForHost (63)');
             this.mapOrdinal(header.ordinal, 63);
             dispatchId = 63;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 63 failed:', e);
           }
        }
        // Try Method 64: SetSplitAuthCacheByNetworkAnonymizationKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSplitAuthCacheByNetworkAnonymizationKey (64)');
             this.mapOrdinal(header.ordinal, 64);
             dispatchId = 64;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 64 failed:', e);
           }
        }
        // Try Method 65: SaveHttpAuthCacheProxyEntries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveHttpAuthCacheProxyEntries (65)');
             this.mapOrdinal(header.ordinal, 65);
             dispatchId = 65;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 65 failed:', e);
           }
        }
        // Try Method 66: LoadHttpAuthCacheProxyEntries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadHttpAuthCacheProxyEntries (66)');
             this.mapOrdinal(header.ordinal, 66);
             dispatchId = 66;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 66 failed:', e);
           }
        }
        // Try Method 67: AddAuthCacheEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddAuthCacheEntry (67)');
             this.mapOrdinal(header.ordinal, 67);
             dispatchId = 67;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 67 failed:', e);
           }
        }
        // Try Method 68: SetCorsNonWildcardRequestHeadersSupport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCorsNonWildcardRequestHeadersSupport (68)');
             this.mapOrdinal(header.ordinal, 68);
             dispatchId = 68;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 68 failed:', e);
           }
        }
        // Try Method 69: LookupProxyAuthCredentials
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LookupProxyAuthCredentials (69)');
             this.mapOrdinal(header.ordinal, 69);
             dispatchId = 69;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 69 failed:', e);
           }
        }
        // Try Method 70: EnableStaticKeyPinningForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableStaticKeyPinningForTesting (70)');
             this.mapOrdinal(header.ordinal, 70);
             dispatchId = 70;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 70 failed:', e);
           }
        }
        // Try Method 71: VerifyCertificateForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> VerifyCertificateForTesting (71)');
             this.mapOrdinal(header.ordinal, 71);
             dispatchId = 71;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 71 failed:', e);
           }
        }
        // Try Method 72: GetTrustAnchorIDsForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTrustAnchorIDsForTesting (72)');
             this.mapOrdinal(header.ordinal, 72);
             dispatchId = 72;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 72 failed:', e);
           }
        }
        // Try Method 73: AddDomainReliabilityContextForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddDomainReliabilityContextForTesting (73)');
             this.mapOrdinal(header.ordinal, 73);
             dispatchId = 73;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 73 failed:', e);
           }
        }
        // Try Method 74: ForceDomainReliabilityUploadsForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceDomainReliabilityUploadsForTesting (74)');
             this.mapOrdinal(header.ordinal, 74);
             dispatchId = 74;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 74 failed:', e);
           }
        }
        // Try Method 75: SetSCTAuditingMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSCTAuditingMode (75)');
             this.mapOrdinal(header.ordinal, 75);
             dispatchId = 75;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 75 failed:', e);
           }
        }
        // Try Method 76: AddReportingApiObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddReportingApiObserver (76)');
             this.mapOrdinal(header.ordinal, 76);
             dispatchId = 76;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 76 failed:', e);
           }
        }
        // Try Method 77: GetSharedDictionaryUsageInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSharedDictionaryUsageInfo (77)');
             this.mapOrdinal(header.ordinal, 77);
             dispatchId = 77;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 77 failed:', e);
           }
        }
        // Try Method 78: GetSharedDictionaryInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSharedDictionaryInfo (78)');
             this.mapOrdinal(header.ordinal, 78);
             dispatchId = 78;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 78 failed:', e);
           }
        }
        // Try Method 79: GetSharedDictionaryOriginsBetween
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSharedDictionaryOriginsBetween (79)');
             this.mapOrdinal(header.ordinal, 79);
             dispatchId = 79;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 79 failed:', e);
           }
        }
        // Try Method 80: SetSharedDictionaryCacheMaxSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSharedDictionaryCacheMaxSize (80)');
             this.mapOrdinal(header.ordinal, 80);
             dispatchId = 80;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 80 failed:', e);
           }
        }
        // Try Method 81: PreloadSharedDictionaryInfoForDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreloadSharedDictionaryInfoForDocument (81)');
             this.mapOrdinal(header.ordinal, 81);
             dispatchId = 81;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 81 failed:', e);
           }
        }
        // Try Method 82: HasPreloadedSharedDictionaryInfoForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasPreloadedSharedDictionaryInfoForTesting (82)');
             this.mapOrdinal(header.ordinal, 82);
             dispatchId = 82;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 82 failed:', e);
           }
        }
        // Try Method 83: FlushCachedClientCertIfNeeded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushCachedClientCertIfNeeded (83)');
             this.mapOrdinal(header.ordinal, 83);
             dispatchId = 83;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 83 failed:', e);
           }
        }
        // Try Method 84: FlushMatchingCachedClientCert
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushMatchingCachedClientCert (84)');
             this.mapOrdinal(header.ordinal, 84);
             dispatchId = 84;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 84 failed:', e);
           }
        }
        // Try Method 85: FlushClientCertCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushClientCertCache (85)');
             this.mapOrdinal(header.ordinal, 85);
             dispatchId = 85;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 85 failed:', e);
           }
        }
        // Try Method 86: RevokeNetworkForNonces
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RevokeNetworkForNonces (86)');
             this.mapOrdinal(header.ordinal, 86);
             dispatchId = 86;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 86 failed:', e);
           }
        }
        // Try Method 87: ClearNonces
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearNonces_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearNonces (87)');
             this.mapOrdinal(header.ordinal, 87);
             dispatchId = 87;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 87 failed:', e);
           }
        }
        // Try Method 88: ExemptUrlFromNetworkRevocationForNonce
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExemptUrlFromNetworkRevocationForNonce (88)');
             this.mapOrdinal(header.ordinal, 88);
             dispatchId = 88;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 88 failed:', e);
           }
        }
        // Try Method 89: Prefetch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_Prefetch_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Prefetch (89)');
             this.mapOrdinal(header.ordinal, 89);
             dispatchId = 89;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 89 failed:', e);
           }
        }
        // Try Method 90: GetBoundNetworkForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBoundNetworkForTesting (90)');
             this.mapOrdinal(header.ordinal, 90);
             dispatchId = 90;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 90 failed:', e);
           }
        }
        // Try Method 91: GetDeviceBoundSessionManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceBoundSessionManager (91)');
             this.mapOrdinal(header.ordinal, 91);
             dispatchId = 91;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 91 failed:', e);
           }
        }
        // Try Method 92: AddQuicHints
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddQuicHints_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddQuicHints (92)');
             this.mapOrdinal(header.ordinal, 92);
             dispatchId = 92;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 92 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.arg_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createURLLoaderFactory');
          const result = this.impl.createURLLoaderFactory(params.arg_url_loader_factory, params.arg_params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetURLLoaderFactories');
          const result = this.impl.resetURLLoaderFactories();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getViaObliviousHttp');
          const result = this.impl.getViaObliviousHttp(params.arg_request, params.arg_client);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetCookieManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCookieManager');
          const result = this.impl.getCookieManager(params.arg_cookie_manager);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRestrictedCookieManager');
          const result = this.impl.getRestrictedCookieManager(params.arg_restricted_cookie_manager, params.arg_role, params.arg_origin, params.arg_isolation_info, params.arg_cookie_setting_overrides, params.arg_devtools_cookie_setting_overrides, params.arg_cookie_observer);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTrustTokenQueryAnswerer');
          const result = this.impl.getTrustTokenQueryAnswerer(params.arg_trust_token_query_answerer, params.arg_top_frame_origin);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearTrustTokenData');
          const result = this.impl.clearTrustTokenData(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearTrustTokenData FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearTrustTokenSessionOnlyData');
          const result = this.impl.clearTrustTokenSessionOnlyData();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearTrustTokenSessionOnlyData FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStoredTrustTokenCounts');
          const result = this.impl.getStoredTrustTokenCounts();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetStoredTrustTokenCounts FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrivateStateTokenRedemptionRecords');
          const result = this.impl.getPrivateStateTokenRedemptionRecords();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPrivateStateTokenRedemptionRecords FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteStoredTrustTokens');
          const result = this.impl.deleteStoredTrustTokens(params.arg_issuer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteStoredTrustTokens FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBlockTrustTokens');
          const result = this.impl.setBlockTrustTokens(params.arg_block);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearNetworkingHistoryBetween');
          const result = this.impl.clearNetworkingHistoryBetween(params.arg_start_time, params.arg_end_time);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearNetworkingHistoryBetween FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearHttpCache');
          const result = this.impl.clearHttpCache(params.arg_start_time, params.arg_end_time, params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearHttpCache FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.computeHttpCacheSize');
          const result = this.impl.computeHttpCacheSize(params.arg_start_time, params.arg_end_time);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ComputeHttpCacheSize FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyBrowserIdle');
          const result = this.impl.notifyBrowserIdle();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyExternalCacheHit');
          const result = this.impl.notifyExternalCacheHit(params.arg_url, params.arg_http_method, params.arg_key, params.arg_include_credentials);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearHostCache');
          const result = this.impl.clearHostCache(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearHostCache FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearHttpAuthCache');
          const result = this.impl.clearHttpAuthCache(params.arg_start_time, params.arg_end_time, params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearHttpAuthCache FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearCorsPreflightCache');
          const result = this.impl.clearCorsPreflightCache(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearCorsPreflightCache FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearReportingCacheReports');
          const result = this.impl.clearReportingCacheReports(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearReportingCacheReports FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearReportingCacheClients');
          const result = this.impl.clearReportingCacheClients(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearReportingCacheClients FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearNetworkErrorLogging');
          const result = this.impl.clearNetworkErrorLogging(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearNetworkErrorLogging FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearDomainReliability');
          const result = this.impl.clearDomainReliability(params.arg_filter, params.arg_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearDomainReliability FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearSharedDictionaryCache');
          const result = this.impl.clearSharedDictionaryCache(params.arg_start_time, params.arg_end_time, params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearSharedDictionaryCache FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearSharedDictionaryCacheForIsolationKey');
          const result = this.impl.clearSharedDictionaryCacheForIsolationKey(params.arg_isolation_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearSharedDictionaryCacheForIsolationKey FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDocumentReportingEndpoints');
          const result = this.impl.setDocumentReportingEndpoints(params.arg_reporting_source, params.arg_origin, params.arg_isolation_info, params.arg_endpoints);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetEnterpriseReportingEndpoints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEnterpriseReportingEndpoints');
          const result = this.impl.setEnterpriseReportingEndpoints(params.arg_endpoints);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendReportsAndRemoveSource');
          const result = this.impl.sendReportsAndRemoveSource(params.arg_reporting_source);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_QueueReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueReport');
          const result = this.impl.queueReport(params.arg_type, params.arg_group, params.arg_url, params.arg_reporting_source, params.arg_network_anonymization_key, params.arg_body);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueEnterpriseReport');
          const result = this.impl.queueEnterpriseReport(params.arg_type, params.arg_group, params.arg_url, params.arg_body);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueSignedExchangeReport');
          const result = this.impl.queueSignedExchangeReport(params.arg_report, params.arg_network_anonymization_key);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeAllConnections');
          const result = this.impl.closeAllConnections();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CloseAllConnections FAILED:', e));
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeIdleConnections');
          const result = this.impl.closeIdleConnections();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CloseIdleConnections FAILED:', e));
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNetworkConditions');
          const result = this.impl.setNetworkConditions(params.arg_throttling_profile_id, params.arg_conditions);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAcceptLanguage');
          const result = this.impl.setAcceptLanguage(params.arg_new_accept_language);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEnableReferrers');
          const result = this.impl.setEnableReferrers(params.arg_enable_referrers);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetCTPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCTPolicy');
          const result = this.impl.setCTPolicy(params.arg_ct_policy);
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createUDPSocket');
          const result = this.impl.createUDPSocket(params.arg_receiver, params.arg_listener);
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRestrictedUDPSocket');
          const result = this.impl.createRestrictedUDPSocket(params.arg_addr, params.arg_mode, params.arg_traffic_annotation, params.arg_params, params.arg_receiver, params.arg_listener, params.arg_allow_multicast);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateRestrictedUDPSocket FAILED:', e));
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTCPServerSocket');
          const result = this.impl.createTCPServerSocket(params.arg_local_addr, params.arg_options, params.arg_traffic_annotation, params.arg_socket);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateTCPServerSocket FAILED:', e));
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTCPConnectedSocket');
          const result = this.impl.createTCPConnectedSocket(params.arg_local_addr, params.arg_remote_addr_list, params.arg_tcp_connected_socket_options, params.arg_traffic_annotation, params.arg_socket, params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateTCPConnectedSocket FAILED:', e));
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTCPBoundSocket');
          const result = this.impl.createTCPBoundSocket(params.arg_local_addr, params.arg_traffic_annotation, params.arg_socket);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateTCPBoundSocket FAILED:', e));
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createProxyResolvingSocketFactory');
          const result = this.impl.createProxyResolvingSocketFactory(params.arg_factory);
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.lookUpProxyForURL');
          const result = this.impl.lookUpProxyForURL(params.arg_url, params.arg_network_anonymization_key, params.arg_proxy_lookup_client);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceReloadProxyConfig');
          const result = this.impl.forceReloadProxyConfig();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ForceReloadProxyConfig FAILED:', e));
          }
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearBadProxiesCache');
          const result = this.impl.clearBadProxiesCache();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearBadProxiesCache FAILED:', e));
          }
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateWebSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWebSocket');
          const result = this.impl.createWebSocket(params.arg_url, params.arg_requested_protocols, params.arg_site_for_cookies, params.arg_storage_access_api_status, params.arg_isolation_info, params.arg_additional_headers, params.arg_process_id, params.arg_origin, params.arg_client_security_state, params.arg_options, params.arg_traffic_annotation, params.arg_handshake_client, params.arg_url_loader_network_observer, params.arg_auth_handler, params.arg_header_client, params.arg_throttling_profile_id);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateWebTransport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWebTransport');
          const result = this.impl.createWebTransport(params.arg_url, params.arg_origin, params.arg_network_anonymization_key, params.arg_fingerprints, params.arg_application_protocols, params.arg_handshake_client, params.arg_url_loader_network_observer, params.arg_client_security_state);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createNetLogExporter');
          const result = this.impl.createNetLogExporter(params.arg_receiver);
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_PreconnectSockets_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.preconnectSockets');
          const result = this.impl.preconnectSockets(params.arg_num_streams, params.arg_url, params.arg_credentials_mode, params.arg_network_anonymization_key, params.arg_traffic_annotation, params.arg_keepalive_config, params.arg_observer_client);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateP2PSocketManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createP2PSocketManager');
          const result = this.impl.createP2PSocketManager(params.arg_network_anonymization_key, params.arg_client, params.arg_trusted_socket_manager, params.arg_socket_manager);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createMdnsResponder');
          const result = this.impl.createMdnsResponder(params.arg_responder_receiver);
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ResolveHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolveHost');
          const result = this.impl.resolveHost(params.arg_host, params.arg_network_anonymization_key, params.arg_optional_parameters, params.arg_response_client);
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateHostResolver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createHostResolver');
          const result = this.impl.createHostResolver(params.arg_config_overrides, params.arg_host_resolver);
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.verifyCert');
          const result = this.impl.verifyCert(params.arg_certificate, params.arg_host_port, params.arg_ocsp_response, params.arg_sct_list);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] VerifyCert FAILED:', e));
          }
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.verifyCertForSignedExchange');
          const result = this.impl.verifyCertForSignedExchange(params.arg_certificate, params.arg_host_port, params.arg_ocsp_response, params.arg_sct_list);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] VerifyCertForSignedExchange FAILED:', e));
          }
          break;
        }
        case 58: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.verify2QwacCertBinding');
          const result = this.impl.verify2QwacCertBinding(params.arg_binding, params.arg_hostname, params.arg_tls_certificate);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Verify2QwacCertBinding FAILED:', e));
          }
          break;
        }
        case 59: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addHSTS');
          const result = this.impl.addHSTS(params.arg_host, params.arg_expiry, params.arg_include_subdomains);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddHSTS FAILED:', e));
          }
          break;
        }
        case 60: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isHSTSActiveForHost');
          const result = this.impl.isHSTSActiveForHost(params.arg_host, params.arg_is_top_level_nav);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsHSTSActiveForHost FAILED:', e));
          }
          break;
        }
        case 61: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHSTSState');
          const result = this.impl.getHSTSState(params.arg_domain);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHSTSState FAILED:', e));
          }
          break;
        }
        case 62: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCorsOriginAccessListsForOrigin');
          const result = this.impl.setCorsOriginAccessListsForOrigin(params.arg_source_origin, params.arg_allow_patterns, params.arg_block_patterns);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCorsOriginAccessListsForOrigin FAILED:', e));
          }
          break;
        }
        case 63: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteDynamicDataForHost');
          const result = this.impl.deleteDynamicDataForHost(params.arg_host);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteDynamicDataForHost FAILED:', e));
          }
          break;
        }
        case 64: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSplitAuthCacheByNetworkAnonymizationKey');
          const result = this.impl.setSplitAuthCacheByNetworkAnonymizationKey(params.arg_split_auth_cache_by_network_anonymization_key);
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveHttpAuthCacheProxyEntries');
          const result = this.impl.saveHttpAuthCacheProxyEntries();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SaveHttpAuthCacheProxyEntries FAILED:', e));
          }
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadHttpAuthCacheProxyEntries');
          const result = this.impl.loadHttpAuthCacheProxyEntries(params.arg_cache_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadHttpAuthCacheProxyEntries FAILED:', e));
          }
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addAuthCacheEntry');
          const result = this.impl.addAuthCacheEntry(params.arg_challenge, params.arg_network_anonymization_key, params.arg_credentials);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddAuthCacheEntry FAILED:', e));
          }
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCorsNonWildcardRequestHeadersSupport');
          const result = this.impl.setCorsNonWildcardRequestHeadersSupport(params.arg_value);
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_LookupProxyAuthCredentials_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.lookupProxyAuthCredentials');
          const result = this.impl.lookupProxyAuthCredentials(params.arg_proxy_server, params.arg_auth_scheme, params.arg_realm);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_LookupProxyAuthCredentials_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LookupProxyAuthCredentials FAILED:', e));
          }
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableStaticKeyPinningForTesting');
          const result = this.impl.enableStaticKeyPinningForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EnableStaticKeyPinningForTesting FAILED:', e));
          }
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.verifyCertificateForTesting');
          const result = this.impl.verifyCertificateForTesting(params.arg_certificate, params.arg_hostname, params.arg_ocsp_response, params.arg_sct_list);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] VerifyCertificateForTesting FAILED:', e));
          }
          break;
        }
        case 72: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTrustAnchorIDsForTesting');
          const result = this.impl.getTrustAnchorIDsForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTrustAnchorIDsForTesting FAILED:', e));
          }
          break;
        }
        case 73: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addDomainReliabilityContextForTesting');
          const result = this.impl.addDomainReliabilityContextForTesting(params.arg_origin, params.arg_upload_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddDomainReliabilityContextForTesting FAILED:', e));
          }
          break;
        }
        case 74: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceDomainReliabilityUploadsForTesting');
          const result = this.impl.forceDomainReliabilityUploadsForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ForceDomainReliabilityUploadsForTesting FAILED:', e));
          }
          break;
        }
        case 75: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetSCTAuditingMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSCTAuditingMode');
          const result = this.impl.setSCTAuditingMode(params.arg_mode);
          break;
        }
        case 76: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addReportingApiObserver');
          const result = this.impl.addReportingApiObserver(params.arg_observer);
          break;
        }
        case 77: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSharedDictionaryUsageInfo');
          const result = this.impl.getSharedDictionaryUsageInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSharedDictionaryUsageInfo FAILED:', e));
          }
          break;
        }
        case 78: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSharedDictionaryInfo');
          const result = this.impl.getSharedDictionaryInfo(params.arg_isolation_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSharedDictionaryInfo FAILED:', e));
          }
          break;
        }
        case 79: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSharedDictionaryOriginsBetween');
          const result = this.impl.getSharedDictionaryOriginsBetween(params.arg_start_time, params.arg_end_time);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSharedDictionaryOriginsBetween FAILED:', e));
          }
          break;
        }
        case 80: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSharedDictionaryCacheMaxSize');
          const result = this.impl.setSharedDictionaryCacheMaxSize(params.arg_cache_max_size);
          break;
        }
        case 81: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.preloadSharedDictionaryInfoForDocument');
          const result = this.impl.preloadSharedDictionaryInfoForDocument(params.arg_urls, params.arg_preload_handle);
          break;
        }
        case 82: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasPreloadedSharedDictionaryInfoForTesting');
          const result = this.impl.hasPreloadedSharedDictionaryInfoForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HasPreloadedSharedDictionaryInfoForTesting FAILED:', e));
          }
          break;
        }
        case 83: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushCachedClientCertIfNeeded');
          const result = this.impl.flushCachedClientCertIfNeeded(params.arg_host, params.arg_certificate);
          break;
        }
        case 84: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushMatchingCachedClientCert');
          const result = this.impl.flushMatchingCachedClientCert(params.arg_certificate);
          break;
        }
        case 85: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushClientCertCache');
          const result = this.impl.flushClientCertCache();
          break;
        }
        case 86: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.revokeNetworkForNonces');
          const result = this.impl.revokeNetworkForNonces(params.arg_nonces_to_patterns);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RevokeNetworkForNonces FAILED:', e));
          }
          break;
        }
        case 87: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearNonces_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearNonces');
          const result = this.impl.clearNonces(params.arg_nonces);
          break;
        }
        case 88: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exemptUrlFromNetworkRevocationForNonce');
          const result = this.impl.exemptUrlFromNetworkRevocationForNonce(params.arg_exempted_url, params.arg_nonce);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ExemptUrlFromNetworkRevocationForNonce FAILED:', e));
          }
          break;
        }
        case 89: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_Prefetch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prefetch');
          const result = this.impl.prefetch(params.arg_request_id, params.arg_options, params.arg_request, params.arg_traffic_annotation);
          break;
        }
        case 90: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBoundNetworkForTesting');
          const result = this.impl.getBoundNetworkForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetBoundNetworkForTesting FAILED:', e));
          }
          break;
        }
        case 91: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceBoundSessionManager');
          const result = this.impl.getDeviceBoundSessionManager(params.arg_device_bound_session_manager);
          break;
        }
        case 92: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddQuicHints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addQuicHints');
          const result = this.impl.addQuicHints(params.arg_origins, params.arg_network_anonymization_key);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.NetworkContextReceiver = mojo.internal.bindings.network.mojom.NetworkContextReceiver;

mojo.internal.bindings.network.mojom.NetworkContextPtr = mojo.internal.bindings.network.mojom.NetworkContextRemote;
mojo.internal.bindings.network.mojom.NetworkContextRequest = mojo.internal.bindings.network.mojom.NetworkContextPendingReceiver;

