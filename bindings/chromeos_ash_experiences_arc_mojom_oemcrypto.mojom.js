// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/oemcrypto.mojom
 // Module: arc.mojom

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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};

mojo.internal.bindings.arc.mojom.OemCryptoResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.OemCryptoCipherModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.OemCryptoLicenseTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.OemCryptoAlgorithmSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.OemCryptoUsageEntryStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.OemCryptoRsaPaddingSchemeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.OemCryptoHdcpCapabilitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.OemCryptoProvisioningMethodSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.OemCryptoPrivateKeySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.OemCryptoSecureBufferSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoKeyObjectV14Spec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoKeyObjectSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoEntitledContentKeyObjectV14Spec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoEntitledContentKeyObjectSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoKeyRefreshObjectV14Spec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoKeyRefreshObjectSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoCencEncryptPatternDescSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoPstReportSpec = { $: {} };
mojo.internal.bindings.arc.mojom.SubSampleDescriptionSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService = {};
mojo.internal.bindings.arc.mojom.OemCryptoService.$interfaceName = 'arc.mojom.OemCryptoService';
mojo.internal.bindings.arc.mojom.OemCryptoService_InitializeDeprecated_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_InitializeDeprecated_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_Initialize_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_Initialize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_Terminate_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_Terminate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_OpenSession_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_OpenSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CloseSession_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CloseSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateDerivedKeys_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateDerivedKeys_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateNonce_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateNonce_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateSignature_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateSignature_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV11OrV12_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeysV14_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeysV14_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_QueryKeyControl_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_QueryKeyControl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKeyV13_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKeyV13_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCencV15_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCencV15_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenericEncrypt_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenericEncrypt_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenericDecrypt_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenericDecrypt_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenericSign_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenericSign_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenericVerify_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenericVerify_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBufferV14_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBufferV14_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeyboxV13_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeyboxV13_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetDeviceId_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetDeviceId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetKeyData_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetKeyData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetRandom_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetRandom_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDeviceRsaKey_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateRsaSignature_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateRsaSignature_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_SecurityPatchLevel_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_SecurityPatchLevel_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetHdcpCapability_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetHdcpCapability_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageTable_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageTable_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_ReportUsage_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_ReportUsage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteUsageEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteUsageEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteOldUsageTable_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteOldUsageTable_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetProvisioningMethod_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetProvisioningMethod_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_SupportedCertificates_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_SupportedCertificates_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_IsSrmUpdateSupported_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_IsSrmUpdateSupported_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetCurrentSrmVersion_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetCurrentSrmVersion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadSrm_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadSrm_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_RemoveSrm_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_RemoveSrm_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CreateUsageTableHeader_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CreateUsageTableHeader_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageTableHeader_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageTableHeader_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CreateNewUsageEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CreateNewUsageEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_MoveEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_MoveEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CopyOldUsageEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CopyOldUsageEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CreateOldUsageEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CreateOldUsageEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetAnalogOutputFlags_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetAnalogOutputFlags_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeybox_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeybox_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKey_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV14_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV14_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeys_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeys_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_ResourceRatingTier_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_ResourceRatingTier_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_BuildInformation_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_BuildInformation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeys_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeys_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeys_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeys_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetOemPublicCertificate_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_GetOemPublicCertificate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_MinorApiVersion_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_MinorApiVersion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadLicense_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadLicense_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadRenewal_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadRenewal_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadProvisioning_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadProvisioning_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadOemPrivateKey_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadOemPrivateKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDrmPrivateKey_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCenc_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCenc_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoHost = {};
mojo.internal.bindings.arc.mojom.OemCryptoHost.$interfaceName = 'arc.mojom.OemCryptoHost';
mojo.internal.bindings.arc.mojom.OemCryptoHost_Connect_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoInstance = {};
mojo.internal.bindings.arc.mojom.OemCryptoInstance.$interfaceName = 'arc.mojom.OemCryptoInstance';
mojo.internal.bindings.arc.mojom.OemCryptoInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.OemCryptoInstance_Init_ResponseParamsSpec = { $: {} };

// Enum: OemCryptoResult
mojo.internal.bindings.arc.mojom.OemCryptoResult = {
  SUCCESS: 0,
  ERROR_INIT_FAILED: 1,
  ERROR_TERMINATE_FAILED: 2,
  ERROR_OPEN_FAILURE: 3,
  ERROR_CLOSE_FAILURE: 4,
  ERROR_ENTER_SECURE_PLAYBACK_FAILED: 5,
  ERROR_EXIT_SECURE_PLAYBACK_FAILED: 6,
  ERROR_SHORT_BUFFER: 7,
  ERROR_NO_DEVICE_KEY: 8,
  ERROR_NO_ASSET_KEY: 9,
  ERROR_KEYBOX_INVALID: 10,
  ERROR_NO_KEYDATA: 11,
  ERROR_NO_CW: 12,
  ERROR_DECRYPT_FAILED: 13,
  ERROR_WRITE_KEYBOX: 14,
  ERROR_WRAP_KEYBOX: 15,
  ERROR_BAD_MAGIC: 16,
  ERROR_BAD_CRC: 17,
  ERROR_NO_DEVICEID: 18,
  ERROR_RNG_FAILED: 19,
  ERROR_RNG_NOT_SUPPORTED: 20,
  ERROR_SETUP: 21,
  ERROR_OPEN_SESSION_FAILED: 22,
  ERROR_CLOSE_SESSION_FAILED: 23,
  ERROR_INVALID_SESSIONS: 24,
  ERROR_NOT_IMPLEMENTED: 25,
  ERROR_NO_CONTENT_KEY: 26,
  ERROR_CONTROL_INVALID: 27,
  ERROR_UNKNOWN_FAILURE: 28,
  ERROR_INVALID_CONTEXT: 29,
  ERROR_SIGNATURE_FAILURE: 30,
  ERROR_TOO_MANY_SESSIONS: 31,
  ERROR_INVALID_NONCE: 32,
  ERROR_TOO_MANY_KEYS: 33,
  ERROR_DEVICE_NOT_RSA_PROVISIONED: 34,
  ERROR_INVALID_RSA_KEY: 35,
  ERROR_KEY_EXPIRED: 36,
  ERROR_INSUFFICIENT_RESOURCES: 37,
  ERROR_INSUFFICIENT_HDCP: 38,
  ERROR_BUFFER_TOO_LARGE: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
  MinVersion: 39,
};

// Enum: OemCryptoCipherMode
mojo.internal.bindings.arc.mojom.OemCryptoCipherMode = {
  CIPHER_MODE_CTR: 0,
  CIPHER_MODE_CBC: 1,
};

// Enum: OemCryptoLicenseType
mojo.internal.bindings.arc.mojom.OemCryptoLicenseType = {
  CONTENT_LICENSE: 0,
  ENTITLEMENT_LICENSE: 1,
};

// Enum: OemCryptoAlgorithm
mojo.internal.bindings.arc.mojom.OemCryptoAlgorithm = {
  AES_CBC_128_NO_PADDING: 0,
  HMAC_SHA265: 1,
};

// Enum: OemCryptoUsageEntryStatus
mojo.internal.bindings.arc.mojom.OemCryptoUsageEntryStatus = {
  UNUSED: 0,
  ACTIVE: 1,
  INACTIVE: 2,
  INACTIVE_USED: 3,
  INACTIVE_UNUSED: 4,
};

// Enum: OemCryptoRsaPaddingScheme
mojo.internal.bindings.arc.mojom.OemCryptoRsaPaddingScheme = {
  SIGN_RSASSA_PSS: 1,
  SIGN_PKCS1_BLOCK1: 2,
};

// Enum: OemCryptoHdcpCapability
mojo.internal.bindings.arc.mojom.OemCryptoHdcpCapability = {
  HDCP_NONE: 0,
  HDCP_V1: 1,
  HDCP_V2: 2,
  HDCP_V2_1: 3,
  HDCP_V2_2: 4,
  HDCP_V2_3: 5,
  HDCP_NO_DIGITAL_OUTPUT: 255,
};

// Enum: OemCryptoProvisioningMethod
mojo.internal.bindings.arc.mojom.OemCryptoProvisioningMethod = {
  PROVISIONING_ERROR: 0,
  DRM_CERTIFICATE: 1,
  KEYBOX: 2,
  OEM_CERTIFICATE: 3,
};

// Enum: OemCryptoPrivateKey
mojo.internal.bindings.arc.mojom.OemCryptoPrivateKey = {
  RSA_PRIVATE_KEY: 0,
  ECC_PRIVATE_KEY: 1,
};

// Struct: OemCryptoSecureBuffer
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoSecureBufferSpec, 'arc.mojom.OemCryptoSecureBuffer', [
      mojo.internal.StructField('arg_buffer_handle', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OemCryptoSubstring
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec, 'arc.mojom.OemCryptoSubstring', [
      mojo.internal.StructField('arg_offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: OemCryptoKeyObjectV14
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoKeyObjectV14Spec, 'arc.mojom.OemCryptoKeyObjectV14', [
      mojo.internal.StructField('arg_cipher_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoCipherModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_id_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_id_length', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_data_iv_offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_data_offset', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_data_length', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_control_iv_offset', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_control_offset', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: OemCryptoKeyObject
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoKeyObjectSpec, 'arc.mojom.OemCryptoKeyObject', [
      mojo.internal.StructField('arg_key_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_data_iv', 8, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_data', 16, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_control_iv', 24, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_control', 32, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: OemCryptoEntitledContentKeyObjectV14
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoEntitledContentKeyObjectV14Spec, 'arc.mojom.OemCryptoEntitledContentKeyObjectV14', [
      mojo.internal.StructField('arg_entitlement_key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_content_key_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_content_key_data_iv', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_content_key_data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OemCryptoEntitledContentKeyObject
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoEntitledContentKeyObjectSpec, 'arc.mojom.OemCryptoEntitledContentKeyObject', [
      mojo.internal.StructField('arg_entitlement_key_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_content_key_id', 8, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_content_key_data_iv', 16, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_content_key_data', 24, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OemCryptoKeyRefreshObjectV14
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoKeyRefreshObjectV14Spec, 'arc.mojom.OemCryptoKeyRefreshObjectV14', [
      mojo.internal.StructField('arg_key_id_offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_id_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_control_iv_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_control_offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_key_control_iv', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OemCryptoKeyRefreshObject
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoKeyRefreshObjectSpec, 'arc.mojom.OemCryptoKeyRefreshObject', [
      mojo.internal.StructField('arg_key_id', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_control_iv', 8, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_control', 16, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OemCryptoCencEncryptPatternDesc
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoCencEncryptPatternDescSpec, 'arc.mojom.OemCryptoCencEncryptPatternDesc', [
      mojo.internal.StructField('arg_encrypt', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_skip', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OemCryptoPstReport
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoPstReportSpec, 'arc.mojom.OemCryptoPstReport', [
      mojo.internal.StructField('arg_signature', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_seconds_since_license_received', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_seconds_since_first_decrypt', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_seconds_since_last_decrypt', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_status', 32, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_clock_security_level', 33, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SubSampleDescription
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.SubSampleDescriptionSpec, 'arc.mojom.SubSampleDescription', [
      mojo.internal.StructField('arg_num_bytes_clear', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_num_bytes_encrypted', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_block_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subsample_flags', 12, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: OemCryptoService
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_InitializeDeprecated_ParamsSpec, 'arc.mojom.OemCryptoService_InitializeDeprecated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_InitializeDeprecated_ResponseParamsSpec, 'arc.mojom.OemCryptoService_InitializeDeprecated_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_Initialize_ParamsSpec, 'arc.mojom.OemCryptoService_Initialize_Params', [
      mojo.internal.StructField('arg_oemcrypto_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_Initialize_ResponseParamsSpec, 'arc.mojom.OemCryptoService_Initialize_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_Terminate_ParamsSpec, 'arc.mojom.OemCryptoService_Terminate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_Terminate_ResponseParamsSpec, 'arc.mojom.OemCryptoService_Terminate_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_OpenSession_ParamsSpec, 'arc.mojom.OemCryptoService_OpenSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_OpenSession_ResponseParamsSpec, 'arc.mojom.OemCryptoService_OpenSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CloseSession_ParamsSpec, 'arc.mojom.OemCryptoService_CloseSession_Params', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CloseSession_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CloseSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateDerivedKeys_ParamsSpec, 'arc.mojom.OemCryptoService_GenerateDerivedKeys_Params', [
      mojo.internal.StructField('arg_mac_key_context', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_enc_key_context', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateDerivedKeys_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenerateDerivedKeys_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateNonce_ParamsSpec, 'arc.mojom.OemCryptoService_GenerateNonce_Params', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateNonce_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenerateNonce_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_nonce', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateSignature_ParamsSpec, 'arc.mojom.OemCryptoService_GenerateSignature_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateSignature_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenerateSignature_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV11OrV12_ParamsSpec, 'arc.mojom.OemCryptoService_LoadKeysV11OrV12_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_key_array', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoKeyObjectV14Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enc_mac_keys_iv_offset', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enc_mac_keys_offset', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pst_offset', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pst_length', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_enc_mac_keys', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeysV14_ParamsSpec, 'arc.mojom.OemCryptoService_RefreshKeysV14_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_key_array', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoKeyRefreshObjectV14Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeysV14_ResponseParamsSpec, 'arc.mojom.OemCryptoService_RefreshKeysV14_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_QueryKeyControl_ParamsSpec, 'arc.mojom.OemCryptoService_QueryKeyControl_Params', [
      mojo.internal.StructField('arg_key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_QueryKeyControl_ResponseParamsSpec, 'arc.mojom.OemCryptoService_QueryKeyControl_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_control_block', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKeyV13_ParamsSpec, 'arc.mojom.OemCryptoService_SelectKeyV13_Params', [
      mojo.internal.StructField('arg_key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKeyV13_ResponseParamsSpec, 'arc.mojom.OemCryptoService_SelectKeyV13_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCencV15_ParamsSpec, 'arc.mojom.OemCryptoService_DecryptCencV15_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_iv', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_secure_buffer', 16, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSecureBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_pattern', 24, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoCencEncryptPatternDescSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_block_offset', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_encrypted', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCencV15_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DecryptCencV15_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_decrypted_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenericEncrypt_ParamsSpec, 'arc.mojom.OemCryptoService_GenericEncrypt_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_iv', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_algorithm', 16, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenericEncrypt_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenericEncrypt_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_encrypted_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenericDecrypt_ParamsSpec, 'arc.mojom.OemCryptoService_GenericDecrypt_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_iv', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_algorithm', 16, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenericDecrypt_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenericDecrypt_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_decrypted_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenericSign_ParamsSpec, 'arc.mojom.OemCryptoService_GenericSign_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_algorithm', 8, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenericSign_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenericSign_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenericVerify_ParamsSpec, 'arc.mojom.OemCryptoService_GenericVerify_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_algorithm', 8, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenericVerify_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenericVerify_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBufferV14_ParamsSpec, 'arc.mojom.OemCryptoService_CopyBufferV14_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_out_buffer', 8, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSecureBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBufferV14_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CopyBufferV14_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeyboxV13_ParamsSpec, 'arc.mojom.OemCryptoService_LoadTestKeyboxV13_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeyboxV13_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadTestKeyboxV13_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ParamsSpec, 'arc.mojom.OemCryptoService_IsRootKeyCertificateValid_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ResponseParamsSpec, 'arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetDeviceId_ParamsSpec, 'arc.mojom.OemCryptoService_GetDeviceId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetDeviceId_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetDeviceId_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetKeyData_ParamsSpec, 'arc.mojom.OemCryptoService_GetKeyData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetKeyData_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetKeyData_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetRandom_ParamsSpec, 'arc.mojom.OemCryptoService_GetRandom_Params', [
      mojo.internal.StructField('arg_length', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetRandom_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetRandom_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ParamsSpec, 'arc.mojom.OemCryptoService_GetNumberOfOpenSessions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_num', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ParamsSpec, 'arc.mojom.OemCryptoService_GetMaxNumberOfSessions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ParamsSpec, 'arc.mojom.OemCryptoService_RewrapDeviceRsaKey_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_nonce_offset', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enc_rsa_key_offset', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enc_rsa_key_length', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enc_rsa_key_iv_offset', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_wrapped_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDeviceRsaKey_ParamsSpec, 'arc.mojom.OemCryptoService_LoadDeviceRsaKey_Params', [
      mojo.internal.StructField('arg_wrapped_rsa_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateRsaSignature_ParamsSpec, 'arc.mojom.OemCryptoService_GenerateRsaSignature_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_padding_scheme', 8, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoRsaPaddingSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateRsaSignature_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenerateRsaSignature_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ParamsSpec, 'arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_Params', [
      mojo.internal.StructField('arg_enc_session_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_mac_key_context', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_enc_key_context', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_SecurityPatchLevel_ParamsSpec, 'arc.mojom.OemCryptoService_SecurityPatchLevel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_SecurityPatchLevel_ResponseParamsSpec, 'arc.mojom.OemCryptoService_SecurityPatchLevel_ResponseParams', [
      mojo.internal.StructField('arg_security_patch_level', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetHdcpCapability_ParamsSpec, 'arc.mojom.OemCryptoService_GetHdcpCapability_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetHdcpCapability_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetHdcpCapability_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_current', 8, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoHdcpCapabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_maximum', 16, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoHdcpCapabilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageTable_ParamsSpec, 'arc.mojom.OemCryptoService_UpdateUsageTable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageTable_ResponseParamsSpec, 'arc.mojom.OemCryptoService_UpdateUsageTable_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ParamsSpec, 'arc.mojom.OemCryptoService_DeactivateUsageEntryV12_Params', [
      mojo.internal.StructField('arg_pst', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_ReportUsage_ParamsSpec, 'arc.mojom.OemCryptoService_ReportUsage_Params', [
      mojo.internal.StructField('arg_pst', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_ReportUsage_ResponseParamsSpec, 'arc.mojom.OemCryptoService_ReportUsage_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_report', 8, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoPstReportSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_DeleteUsageEntry_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pst_offset', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pst_length', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DeleteUsageEntry_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_ForceDeleteUsageEntry_Params', [
      mojo.internal.StructField('arg_pst', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteOldUsageTable_ParamsSpec, 'arc.mojom.OemCryptoService_DeleteOldUsageTable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteOldUsageTable_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DeleteOldUsageTable_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetProvisioningMethod_ParamsSpec, 'arc.mojom.OemCryptoService_GetProvisioningMethod_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetProvisioningMethod_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetProvisioningMethod_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoProvisioningMethodSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_SupportedCertificates_ParamsSpec, 'arc.mojom.OemCryptoService_SupportedCertificates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_SupportedCertificates_ResponseParamsSpec, 'arc.mojom.OemCryptoService_SupportedCertificates_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_IsSrmUpdateSupported_ParamsSpec, 'arc.mojom.OemCryptoService_IsSrmUpdateSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_IsSrmUpdateSupported_ResponseParamsSpec, 'arc.mojom.OemCryptoService_IsSrmUpdateSupported_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetCurrentSrmVersion_ParamsSpec, 'arc.mojom.OemCryptoService_GetCurrentSrmVersion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetCurrentSrmVersion_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetCurrentSrmVersion_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_version', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadSrm_ParamsSpec, 'arc.mojom.OemCryptoService_LoadSrm_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadSrm_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadSrm_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_RemoveSrm_ParamsSpec, 'arc.mojom.OemCryptoService_RemoveSrm_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_RemoveSrm_ResponseParamsSpec, 'arc.mojom.OemCryptoService_RemoveSrm_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CreateUsageTableHeader_ParamsSpec, 'arc.mojom.OemCryptoService_CreateUsageTableHeader_Params', [
      mojo.internal.StructField('arg_avail_header_length', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CreateUsageTableHeader_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CreateUsageTableHeader_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_header', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageTableHeader_ParamsSpec, 'arc.mojom.OemCryptoService_LoadUsageTableHeader_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageTableHeader_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadUsageTableHeader_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CreateNewUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_CreateNewUsageEntry_Params', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CreateNewUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CreateNewUsageEntry_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_usage_entry_number', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_LoadUsageEntry_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_index', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadUsageEntry_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_UpdateUsageEntry_Params', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_avail_header_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_avail_entry_length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_UpdateUsageEntry_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_header', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_entry', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_DeactivateUsageEntry_Params', [
      mojo.internal.StructField('arg_pst', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DeactivateUsageEntry_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ParamsSpec, 'arc.mojom.OemCryptoService_ShrinkUsageTableHeader_Params', [
      mojo.internal.StructField('arg_new_entry_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_avail_header_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ResponseParamsSpec, 'arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_header', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_MoveEntry_ParamsSpec, 'arc.mojom.OemCryptoService_MoveEntry_Params', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_new_index', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_MoveEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_MoveEntry_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CopyOldUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_CopyOldUsageEntry_Params', [
      mojo.internal.StructField('arg_pst', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CopyOldUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CopyOldUsageEntry_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CreateOldUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_CreateOldUsageEntry_Params', [
      mojo.internal.StructField('arg_time_since_license_received', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_time_since_first_decrypt', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_time_since_last_decrypt', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_status', 24, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoUsageEntryStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_server_mac_key', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_client_mac_key', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_pst', 48, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CreateOldUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CreateOldUsageEntry_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetAnalogOutputFlags_ParamsSpec, 'arc.mojom.OemCryptoService_GetAnalogOutputFlags_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetAnalogOutputFlags_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetAnalogOutputFlags_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeybox_ParamsSpec, 'arc.mojom.OemCryptoService_LoadTestKeybox_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeybox_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadTestKeybox_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ParamsSpec, 'arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_Params', [
      mojo.internal.StructField('arg_key_array', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoEntitledContentKeyObjectV14Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKey_ParamsSpec, 'arc.mojom.OemCryptoService_SelectKey_Params', [
      mojo.internal.StructField('arg_content_key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_cipher_mode', 8, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoCipherModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_SelectKey_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV14_ParamsSpec, 'arc.mojom.OemCryptoService_LoadKeysV14_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_key_array', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoKeyObjectV14Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_srm_requirement', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_license_type', 32, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoLicenseTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enc_mac_keys_iv_offset', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enc_mac_keys_offset', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pst_offset', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pst_length', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_enc_mac_keys', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV14_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadKeysV14_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeys_ParamsSpec, 'arc.mojom.OemCryptoService_LoadKeys_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_enc_mac_keys_iv', 16, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_enc_mac_keys', 24, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_array', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoKeyObjectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_pst', 40, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_srm_restriction_data', 48, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_license_type', 56, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoLicenseTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeys_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadKeys_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_ResourceRatingTier_ParamsSpec, 'arc.mojom.OemCryptoService_ResourceRatingTier_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_ResourceRatingTier_ResponseParamsSpec, 'arc.mojom.OemCryptoService_ResourceRatingTier_ResponseParams', [
      mojo.internal.StructField('arg_rating_tier', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_BuildInformation_ParamsSpec, 'arc.mojom.OemCryptoService_BuildInformation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_BuildInformation_ResponseParamsSpec, 'arc.mojom.OemCryptoService_BuildInformation_ResponseParams', [
      mojo.internal.StructField('arg_build_information', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeys_ParamsSpec, 'arc.mojom.OemCryptoService_RefreshKeys_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_key_array', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoKeyRefreshObjectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeys_ResponseParamsSpec, 'arc.mojom.OemCryptoService_RefreshKeys_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeys_ParamsSpec, 'arc.mojom.OemCryptoService_LoadEntitledContentKeys_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_key_array', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoEntitledContentKeyObjectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeys_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadEntitledContentKeys_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetOemPublicCertificate_ParamsSpec, 'arc.mojom.OemCryptoService_GetOemPublicCertificate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_GetOemPublicCertificate_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetOemPublicCertificate_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_public_cert', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ParamsSpec, 'arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ResponseParamsSpec, 'arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ResponseParams', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ParamsSpec, 'arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ResponseParamsSpec, 'arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_MinorApiVersion_ParamsSpec, 'arc.mojom.OemCryptoService_MinorApiVersion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_MinorApiVersion_ResponseParamsSpec, 'arc.mojom.OemCryptoService_MinorApiVersion_ResponseParams', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_core_message_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_avail_signature_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_core_message_size', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_core_message_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_avail_signature_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_core_message_size', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_core_message_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_avail_signature_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_core_message_size', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadLicense_ParamsSpec, 'arc.mojom.OemCryptoService_LoadLicense_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_core_message_length', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadLicense_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadLicense_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadRenewal_ParamsSpec, 'arc.mojom.OemCryptoService_LoadRenewal_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_core_message_length', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadRenewal_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadRenewal_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadProvisioning_ParamsSpec, 'arc.mojom.OemCryptoService_LoadProvisioning_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_core_message_length', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_avail_wrapped_private_key_size', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadProvisioning_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadProvisioning_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_wrapped_private_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadOemPrivateKey_ParamsSpec, 'arc.mojom.OemCryptoService_LoadOemPrivateKey_Params', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadOemPrivateKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadOemPrivateKey_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDrmPrivateKey_ParamsSpec, 'arc.mojom.OemCryptoService_LoadDrmPrivateKey_Params', [
      mojo.internal.StructField('arg_key_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoPrivateKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_wrapped_private_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCenc_ParamsSpec, 'arc.mojom.OemCryptoService_DecryptCenc_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_iv', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_sub_samples', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.arc.mojom.SubSampleDescriptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_pattern', 24, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoCencEncryptPatternDescSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_secure_buffer', 32, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSecureBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_session', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCenc_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DecryptCenc_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_decrypted_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBuffer_ParamsSpec, 'arc.mojom.OemCryptoService_CopyBuffer_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_out_buffer', 8, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoSecureBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subsample_flags', 20, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBuffer_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CopyBuffer_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.OemCryptoServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.OemCryptoServiceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OemCryptoService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.OemCryptoServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.OemCryptoServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initializeDeprecated() {
    return this.$.initializeDeprecated();
  }
  initialize(arg_oemcrypto_version) {
    return this.$.initialize(arg_oemcrypto_version);
  }
  terminate() {
    return this.$.terminate();
  }
  openSession() {
    return this.$.openSession();
  }
  closeSession(arg_session) {
    return this.$.closeSession(arg_session);
  }
  generateDerivedKeys(arg_session, arg_mac_key_context, arg_enc_key_context) {
    return this.$.generateDerivedKeys(arg_session, arg_mac_key_context, arg_enc_key_context);
  }
  generateNonce(arg_session) {
    return this.$.generateNonce(arg_session);
  }
  generateSignature(arg_session, arg_message) {
    return this.$.generateSignature(arg_session, arg_message);
  }
  loadKeysV11OrV12(arg_session, arg_message, arg_signature, arg_has_enc_mac_keys, arg_enc_mac_keys_iv_offset, arg_enc_mac_keys_offset, arg_key_array, arg_pst_offset, arg_pst_length) {
    return this.$.loadKeysV11OrV12(arg_session, arg_message, arg_signature, arg_has_enc_mac_keys, arg_enc_mac_keys_iv_offset, arg_enc_mac_keys_offset, arg_key_array, arg_pst_offset, arg_pst_length);
  }
  refreshKeysV14(arg_session, arg_message, arg_signature, arg_key_array) {
    return this.$.refreshKeysV14(arg_session, arg_message, arg_signature, arg_key_array);
  }
  queryKeyControl(arg_session, arg_key_id) {
    return this.$.queryKeyControl(arg_session, arg_key_id);
  }
  selectKeyV13(arg_session, arg_key_id) {
    return this.$.selectKeyV13(arg_session, arg_key_id);
  }
  decryptCencV15(arg_session, arg_data, arg_is_encrypted, arg_iv, arg_block_offset, arg_secure_buffer, arg_pattern) {
    return this.$.decryptCencV15(arg_session, arg_data, arg_is_encrypted, arg_iv, arg_block_offset, arg_secure_buffer, arg_pattern);
  }
  genericEncrypt(arg_session, arg_data, arg_iv, arg_algorithm) {
    return this.$.genericEncrypt(arg_session, arg_data, arg_iv, arg_algorithm);
  }
  genericDecrypt(arg_session, arg_data, arg_iv, arg_algorithm) {
    return this.$.genericDecrypt(arg_session, arg_data, arg_iv, arg_algorithm);
  }
  genericSign(arg_session, arg_data, arg_algorithm) {
    return this.$.genericSign(arg_session, arg_data, arg_algorithm);
  }
  genericVerify(arg_session, arg_data, arg_algorithm, arg_signature) {
    return this.$.genericVerify(arg_session, arg_data, arg_algorithm, arg_signature);
  }
  copyBufferV14(arg_data, arg_out_buffer) {
    return this.$.copyBufferV14(arg_data, arg_out_buffer);
  }
  loadTestKeyboxV13() {
    return this.$.loadTestKeyboxV13();
  }
  isRootKeyCertificateValid() {
    return this.$.isRootKeyCertificateValid();
  }
  getDeviceId() {
    return this.$.getDeviceId();
  }
  getKeyData() {
    return this.$.getKeyData();
  }
  getRandom(arg_length) {
    return this.$.getRandom(arg_length);
  }
  getNumberOfOpenSessions() {
    return this.$.getNumberOfOpenSessions();
  }
  getMaxNumberOfSessions() {
    return this.$.getMaxNumberOfSessions();
  }
  rewrapDeviceRsaKey(arg_session, arg_message, arg_signature, arg_nonce_offset, arg_enc_rsa_key_offset, arg_enc_rsa_key_length, arg_enc_rsa_key_iv_offset) {
    return this.$.rewrapDeviceRsaKey(arg_session, arg_message, arg_signature, arg_nonce_offset, arg_enc_rsa_key_offset, arg_enc_rsa_key_length, arg_enc_rsa_key_iv_offset);
  }
  loadDeviceRsaKey(arg_session, arg_wrapped_rsa_key) {
    return this.$.loadDeviceRsaKey(arg_session, arg_wrapped_rsa_key);
  }
  generateRsaSignature(arg_session, arg_message, arg_padding_scheme) {
    return this.$.generateRsaSignature(arg_session, arg_message, arg_padding_scheme);
  }
  deriveKeysFromSessionKey(arg_session, arg_enc_session_key, arg_mac_key_context, arg_enc_key_context) {
    return this.$.deriveKeysFromSessionKey(arg_session, arg_enc_session_key, arg_mac_key_context, arg_enc_key_context);
  }
  securityPatchLevel() {
    return this.$.securityPatchLevel();
  }
  getHdcpCapability() {
    return this.$.getHdcpCapability();
  }
  updateUsageTable() {
    return this.$.updateUsageTable();
  }
  deactivateUsageEntryV12(arg_pst) {
    return this.$.deactivateUsageEntryV12(arg_pst);
  }
  reportUsage(arg_session, arg_pst) {
    return this.$.reportUsage(arg_session, arg_pst);
  }
  deleteUsageEntry(arg_session, arg_pst_offset, arg_pst_length, arg_message, arg_signature) {
    return this.$.deleteUsageEntry(arg_session, arg_pst_offset, arg_pst_length, arg_message, arg_signature);
  }
  forceDeleteUsageEntry(arg_pst) {
    return this.$.forceDeleteUsageEntry(arg_pst);
  }
  deleteOldUsageTable() {
    return this.$.deleteOldUsageTable();
  }
  getProvisioningMethod() {
    return this.$.getProvisioningMethod();
  }
  supportedCertificates() {
    return this.$.supportedCertificates();
  }
  isSrmUpdateSupported() {
    return this.$.isSrmUpdateSupported();
  }
  getCurrentSrmVersion() {
    return this.$.getCurrentSrmVersion();
  }
  loadSrm(arg_buffer) {
    return this.$.loadSrm(arg_buffer);
  }
  removeSrm() {
    return this.$.removeSrm();
  }
  createUsageTableHeader(arg_avail_header_length) {
    return this.$.createUsageTableHeader(arg_avail_header_length);
  }
  loadUsageTableHeader(arg_buffer) {
    return this.$.loadUsageTableHeader(arg_buffer);
  }
  createNewUsageEntry(arg_session) {
    return this.$.createNewUsageEntry(arg_session);
  }
  loadUsageEntry(arg_session, arg_index, arg_buffer) {
    return this.$.loadUsageEntry(arg_session, arg_index, arg_buffer);
  }
  updateUsageEntry(arg_session, arg_avail_header_length, arg_avail_entry_length) {
    return this.$.updateUsageEntry(arg_session, arg_avail_header_length, arg_avail_entry_length);
  }
  deactivateUsageEntry(arg_session, arg_pst) {
    return this.$.deactivateUsageEntry(arg_session, arg_pst);
  }
  shrinkUsageTableHeader(arg_new_entry_count, arg_avail_header_length) {
    return this.$.shrinkUsageTableHeader(arg_new_entry_count, arg_avail_header_length);
  }
  moveEntry(arg_session, arg_new_index) {
    return this.$.moveEntry(arg_session, arg_new_index);
  }
  copyOldUsageEntry(arg_session, arg_pst) {
    return this.$.copyOldUsageEntry(arg_session, arg_pst);
  }
  createOldUsageEntry(arg_time_since_license_received, arg_time_since_first_decrypt, arg_time_since_last_decrypt, arg_status, arg_server_mac_key, arg_client_mac_key, arg_pst) {
    return this.$.createOldUsageEntry(arg_time_since_license_received, arg_time_since_first_decrypt, arg_time_since_last_decrypt, arg_status, arg_server_mac_key, arg_client_mac_key, arg_pst);
  }
  getAnalogOutputFlags() {
    return this.$.getAnalogOutputFlags();
  }
  loadTestKeybox(arg_buffer) {
    return this.$.loadTestKeybox(arg_buffer);
  }
  loadEntitledContentKeysV14(arg_session, arg_key_array) {
    return this.$.loadEntitledContentKeysV14(arg_session, arg_key_array);
  }
  selectKey(arg_session, arg_content_key_id, arg_cipher_mode) {
    return this.$.selectKey(arg_session, arg_content_key_id, arg_cipher_mode);
  }
  loadKeysV14(arg_session, arg_message, arg_signature, arg_has_enc_mac_keys, arg_enc_mac_keys_iv_offset, arg_enc_mac_keys_offset, arg_key_array, arg_pst_offset, arg_pst_length, arg_srm_requirement, arg_license_type) {
    return this.$.loadKeysV14(arg_session, arg_message, arg_signature, arg_has_enc_mac_keys, arg_enc_mac_keys_iv_offset, arg_enc_mac_keys_offset, arg_key_array, arg_pst_offset, arg_pst_length, arg_srm_requirement, arg_license_type);
  }
  loadKeys(arg_session, arg_message, arg_signature, arg_enc_mac_keys_iv, arg_enc_mac_keys, arg_key_array, arg_pst, arg_srm_restriction_data, arg_license_type) {
    return this.$.loadKeys(arg_session, arg_message, arg_signature, arg_enc_mac_keys_iv, arg_enc_mac_keys, arg_key_array, arg_pst, arg_srm_restriction_data, arg_license_type);
  }
  resourceRatingTier() {
    return this.$.resourceRatingTier();
  }
  buildInformation() {
    return this.$.buildInformation();
  }
  refreshKeys(arg_session, arg_message, arg_signature, arg_key_array) {
    return this.$.refreshKeys(arg_session, arg_message, arg_signature, arg_key_array);
  }
  loadEntitledContentKeys(arg_session, arg_message, arg_key_array) {
    return this.$.loadEntitledContentKeys(arg_session, arg_message, arg_key_array);
  }
  getOemPublicCertificate() {
    return this.$.getOemPublicCertificate();
  }
  maximumUsageTableHeaderSize() {
    return this.$.maximumUsageTableHeaderSize();
  }
  isAntiRollbackHwPresent() {
    return this.$.isAntiRollbackHwPresent();
  }
  minorApiVersion() {
    return this.$.minorApiVersion();
  }
  prepAndSignLicenseRequest(arg_session, arg_message, arg_core_message_size, arg_avail_signature_size) {
    return this.$.prepAndSignLicenseRequest(arg_session, arg_message, arg_core_message_size, arg_avail_signature_size);
  }
  prepAndSignRenewalRequest(arg_session, arg_message, arg_core_message_size, arg_avail_signature_size) {
    return this.$.prepAndSignRenewalRequest(arg_session, arg_message, arg_core_message_size, arg_avail_signature_size);
  }
  prepAndSignProvisioningRequest(arg_session, arg_message, arg_core_message_size, arg_avail_signature_size) {
    return this.$.prepAndSignProvisioningRequest(arg_session, arg_message, arg_core_message_size, arg_avail_signature_size);
  }
  loadLicense(arg_session, arg_message, arg_core_message_length, arg_signature) {
    return this.$.loadLicense(arg_session, arg_message, arg_core_message_length, arg_signature);
  }
  loadRenewal(arg_session, arg_message, arg_core_message_length, arg_signature) {
    return this.$.loadRenewal(arg_session, arg_message, arg_core_message_length, arg_signature);
  }
  loadProvisioning(arg_session, arg_message, arg_core_message_length, arg_signature, arg_avail_wrapped_private_key_size) {
    return this.$.loadProvisioning(arg_session, arg_message, arg_core_message_length, arg_signature, arg_avail_wrapped_private_key_size);
  }
  loadOemPrivateKey(arg_session) {
    return this.$.loadOemPrivateKey(arg_session);
  }
  loadDrmPrivateKey(arg_session, arg_key_type, arg_wrapped_private_key) {
    return this.$.loadDrmPrivateKey(arg_session, arg_key_type, arg_wrapped_private_key);
  }
  decryptCenc(arg_session, arg_data, arg_iv, arg_sub_samples, arg_pattern, arg_secure_buffer) {
    return this.$.decryptCenc(arg_session, arg_data, arg_iv, arg_sub_samples, arg_pattern, arg_secure_buffer);
  }
  copyBuffer(arg_session, arg_data, arg_out_buffer, arg_subsample_flags) {
    return this.$.copyBuffer(arg_session, arg_data, arg_out_buffer, arg_subsample_flags);
  }
};

mojo.internal.bindings.arc.mojom.OemCryptoServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OemCryptoService', [
      { explicit: 0 },
      { explicit: 36 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
      { explicit: 27 },
      { explicit: 28 },
      { explicit: 29 },
      { explicit: 30 },
      { explicit: 31 },
      { explicit: 32 },
      { explicit: 33 },
      { explicit: 34 },
      { explicit: 35 },
      { explicit: 37 },
      { explicit: 38 },
      { explicit: 39 },
      { explicit: 40 },
      { explicit: 41 },
      { explicit: 42 },
      { explicit: 43 },
      { explicit: 44 },
      { explicit: 45 },
      { explicit: 46 },
      { explicit: 47 },
      { explicit: 48 },
      { explicit: 49 },
      { explicit: 50 },
      { explicit: 51 },
      { explicit: 52 },
      { explicit: 53 },
      { explicit: 54 },
      { explicit: 55 },
      { explicit: 56 },
      { explicit: 57 },
      { explicit: 58 },
      { explicit: 59 },
      { explicit: 60 },
      { explicit: 61 },
      { explicit: 62 },
      { explicit: 63 },
      { explicit: 64 },
      { explicit: 65 },
      { explicit: 66 },
      { explicit: 67 },
      { explicit: 68 },
      { explicit: 69 },
      { explicit: 70 },
      { explicit: 71 },
      { explicit: 72 },
      { explicit: 73 },
      { explicit: 74 },
      { explicit: 75 },
      { explicit: 76 },
    ]);
  }

  initializeDeprecated() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_InitializeDeprecated_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_InitializeDeprecated_ResponseParamsSpec,
      [],
      false);
  }

  initialize(arg_oemcrypto_version) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_Initialize_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_Initialize_ResponseParamsSpec,
      [arg_oemcrypto_version],
      false);
  }

  terminate() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_Terminate_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_Terminate_ResponseParamsSpec,
      [],
      false);
  }

  openSession() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_OpenSession_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_OpenSession_ResponseParamsSpec,
      [],
      false);
  }

  closeSession(arg_session) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_CloseSession_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_CloseSession_ResponseParamsSpec,
      [arg_session],
      false);
  }

  generateDerivedKeys(arg_session, arg_mac_key_context, arg_enc_key_context) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateDerivedKeys_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateDerivedKeys_ResponseParamsSpec,
      [arg_session, arg_mac_key_context, arg_enc_key_context],
      false);
  }

  generateNonce(arg_session) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateNonce_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateNonce_ResponseParamsSpec,
      [arg_session],
      false);
  }

  generateSignature(arg_session, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateSignature_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateSignature_ResponseParamsSpec,
      [arg_session, arg_message],
      false);
  }

  loadKeysV11OrV12(arg_session, arg_message, arg_signature, arg_has_enc_mac_keys, arg_enc_mac_keys_iv_offset, arg_enc_mac_keys_offset, arg_key_array, arg_pst_offset, arg_pst_length) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV11OrV12_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParamsSpec,
      [arg_session, arg_message, arg_signature, arg_has_enc_mac_keys, arg_enc_mac_keys_iv_offset, arg_enc_mac_keys_offset, arg_key_array, arg_pst_offset, arg_pst_length],
      false);
  }

  refreshKeysV14(arg_session, arg_message, arg_signature, arg_key_array) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeysV14_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeysV14_ResponseParamsSpec,
      [arg_session, arg_message, arg_signature, arg_key_array],
      false);
  }

  queryKeyControl(arg_session, arg_key_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_QueryKeyControl_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_QueryKeyControl_ResponseParamsSpec,
      [arg_session, arg_key_id],
      false);
  }

  selectKeyV13(arg_session, arg_key_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKeyV13_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKeyV13_ResponseParamsSpec,
      [arg_session, arg_key_id],
      false);
  }

  decryptCencV15(arg_session, arg_data, arg_is_encrypted, arg_iv, arg_block_offset, arg_secure_buffer, arg_pattern) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCencV15_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCencV15_ResponseParamsSpec,
      [arg_session, arg_data, arg_is_encrypted, arg_iv, arg_block_offset, arg_secure_buffer, arg_pattern],
      false);
  }

  genericEncrypt(arg_session, arg_data, arg_iv, arg_algorithm) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenericEncrypt_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenericEncrypt_ResponseParamsSpec,
      [arg_session, arg_data, arg_iv, arg_algorithm],
      false);
  }

  genericDecrypt(arg_session, arg_data, arg_iv, arg_algorithm) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenericDecrypt_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenericDecrypt_ResponseParamsSpec,
      [arg_session, arg_data, arg_iv, arg_algorithm],
      false);
  }

  genericSign(arg_session, arg_data, arg_algorithm) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenericSign_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenericSign_ResponseParamsSpec,
      [arg_session, arg_data, arg_algorithm],
      false);
  }

  genericVerify(arg_session, arg_data, arg_algorithm, arg_signature) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenericVerify_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenericVerify_ResponseParamsSpec,
      [arg_session, arg_data, arg_algorithm, arg_signature],
      false);
  }

  copyBufferV14(arg_data, arg_out_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBufferV14_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBufferV14_ResponseParamsSpec,
      [arg_data, arg_out_buffer],
      false);
  }

  loadTestKeyboxV13() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeyboxV13_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeyboxV13_ResponseParamsSpec,
      [],
      false);
  }

  isRootKeyCertificateValid() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ResponseParamsSpec,
      [],
      false);
  }

  getDeviceId() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetDeviceId_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetDeviceId_ResponseParamsSpec,
      [],
      false);
  }

  getKeyData() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetKeyData_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetKeyData_ResponseParamsSpec,
      [],
      false);
  }

  getRandom(arg_length) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetRandom_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetRandom_ResponseParamsSpec,
      [arg_length],
      false);
  }

  getNumberOfOpenSessions() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ResponseParamsSpec,
      [],
      false);
  }

  getMaxNumberOfSessions() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ResponseParamsSpec,
      [],
      false);
  }

  rewrapDeviceRsaKey(arg_session, arg_message, arg_signature, arg_nonce_offset, arg_enc_rsa_key_offset, arg_enc_rsa_key_length, arg_enc_rsa_key_iv_offset) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ResponseParamsSpec,
      [arg_session, arg_message, arg_signature, arg_nonce_offset, arg_enc_rsa_key_offset, arg_enc_rsa_key_length, arg_enc_rsa_key_iv_offset],
      false);
  }

  loadDeviceRsaKey(arg_session, arg_wrapped_rsa_key) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDeviceRsaKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParamsSpec,
      [arg_session, arg_wrapped_rsa_key],
      false);
  }

  generateRsaSignature(arg_session, arg_message, arg_padding_scheme) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateRsaSignature_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateRsaSignature_ResponseParamsSpec,
      [arg_session, arg_message, arg_padding_scheme],
      false);
  }

  deriveKeysFromSessionKey(arg_session, arg_enc_session_key, arg_mac_key_context, arg_enc_key_context) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ResponseParamsSpec,
      [arg_session, arg_enc_session_key, arg_mac_key_context, arg_enc_key_context],
      false);
  }

  securityPatchLevel() {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_SecurityPatchLevel_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_SecurityPatchLevel_ResponseParamsSpec,
      [],
      false);
  }

  getHdcpCapability() {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetHdcpCapability_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetHdcpCapability_ResponseParamsSpec,
      [],
      false);
  }

  updateUsageTable() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageTable_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageTable_ResponseParamsSpec,
      [],
      false);
  }

  deactivateUsageEntryV12(arg_pst) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ResponseParamsSpec,
      [arg_pst],
      false);
  }

  reportUsage(arg_session, arg_pst) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_ReportUsage_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_ReportUsage_ResponseParamsSpec,
      [arg_session, arg_pst],
      false);
  }

  deleteUsageEntry(arg_session, arg_pst_offset, arg_pst_length, arg_message, arg_signature) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteUsageEntry_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteUsageEntry_ResponseParamsSpec,
      [arg_session, arg_pst_offset, arg_pst_length, arg_message, arg_signature],
      false);
  }

  forceDeleteUsageEntry(arg_pst) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ResponseParamsSpec,
      [arg_pst],
      false);
  }

  deleteOldUsageTable() {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteOldUsageTable_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteOldUsageTable_ResponseParamsSpec,
      [],
      false);
  }

  getProvisioningMethod() {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetProvisioningMethod_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetProvisioningMethod_ResponseParamsSpec,
      [],
      false);
  }

  supportedCertificates() {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_SupportedCertificates_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_SupportedCertificates_ResponseParamsSpec,
      [],
      false);
  }

  isSrmUpdateSupported() {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_IsSrmUpdateSupported_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_IsSrmUpdateSupported_ResponseParamsSpec,
      [],
      false);
  }

  getCurrentSrmVersion() {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetCurrentSrmVersion_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetCurrentSrmVersion_ResponseParamsSpec,
      [],
      false);
  }

  loadSrm(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadSrm_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadSrm_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  removeSrm() {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_RemoveSrm_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_RemoveSrm_ResponseParamsSpec,
      [],
      false);
  }

  createUsageTableHeader(arg_avail_header_length) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_CreateUsageTableHeader_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_CreateUsageTableHeader_ResponseParamsSpec,
      [arg_avail_header_length],
      false);
  }

  loadUsageTableHeader(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageTableHeader_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageTableHeader_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  createNewUsageEntry(arg_session) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_CreateNewUsageEntry_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_CreateNewUsageEntry_ResponseParamsSpec,
      [arg_session],
      false);
  }

  loadUsageEntry(arg_session, arg_index, arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageEntry_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageEntry_ResponseParamsSpec,
      [arg_session, arg_index, arg_buffer],
      false);
  }

  updateUsageEntry(arg_session, arg_avail_header_length, arg_avail_entry_length) {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageEntry_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageEntry_ResponseParamsSpec,
      [arg_session, arg_avail_header_length, arg_avail_entry_length],
      false);
  }

  deactivateUsageEntry(arg_session, arg_pst) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntry_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntry_ResponseParamsSpec,
      [arg_session, arg_pst],
      false);
  }

  shrinkUsageTableHeader(arg_new_entry_count, arg_avail_header_length) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ResponseParamsSpec,
      [arg_new_entry_count, arg_avail_header_length],
      false);
  }

  moveEntry(arg_session, arg_new_index) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_MoveEntry_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_MoveEntry_ResponseParamsSpec,
      [arg_session, arg_new_index],
      false);
  }

  copyOldUsageEntry(arg_session, arg_pst) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_CopyOldUsageEntry_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_CopyOldUsageEntry_ResponseParamsSpec,
      [arg_session, arg_pst],
      false);
  }

  createOldUsageEntry(arg_time_since_license_received, arg_time_since_first_decrypt, arg_time_since_last_decrypt, arg_status, arg_server_mac_key, arg_client_mac_key, arg_pst) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_CreateOldUsageEntry_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_CreateOldUsageEntry_ResponseParamsSpec,
      [arg_time_since_license_received, arg_time_since_first_decrypt, arg_time_since_last_decrypt, arg_status, arg_server_mac_key, arg_client_mac_key, arg_pst],
      false);
  }

  getAnalogOutputFlags() {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetAnalogOutputFlags_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetAnalogOutputFlags_ResponseParamsSpec,
      [],
      false);
  }

  loadTestKeybox(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeybox_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeybox_ResponseParamsSpec,
      [arg_buffer],
      false);
  }

  loadEntitledContentKeysV14(arg_session, arg_key_array) {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParamsSpec,
      [arg_session, arg_key_array],
      false);
  }

  selectKey(arg_session, arg_content_key_id, arg_cipher_mode) {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKey_ResponseParamsSpec,
      [arg_session, arg_content_key_id, arg_cipher_mode],
      false);
  }

  loadKeysV14(arg_session, arg_message, arg_signature, arg_has_enc_mac_keys, arg_enc_mac_keys_iv_offset, arg_enc_mac_keys_offset, arg_key_array, arg_pst_offset, arg_pst_length, arg_srm_requirement, arg_license_type) {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV14_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV14_ResponseParamsSpec,
      [arg_session, arg_message, arg_signature, arg_has_enc_mac_keys, arg_enc_mac_keys_iv_offset, arg_enc_mac_keys_offset, arg_key_array, arg_pst_offset, arg_pst_length, arg_srm_requirement, arg_license_type],
      false);
  }

  loadKeys(arg_session, arg_message, arg_signature, arg_enc_mac_keys_iv, arg_enc_mac_keys, arg_key_array, arg_pst, arg_srm_restriction_data, arg_license_type) {
    return this.proxy.sendMessage(
      this.ordinals[58],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeys_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeys_ResponseParamsSpec,
      [arg_session, arg_message, arg_signature, arg_enc_mac_keys_iv, arg_enc_mac_keys, arg_key_array, arg_pst, arg_srm_restriction_data, arg_license_type],
      false);
  }

  resourceRatingTier() {
    return this.proxy.sendMessage(
      this.ordinals[59],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_ResourceRatingTier_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_ResourceRatingTier_ResponseParamsSpec,
      [],
      false);
  }

  buildInformation() {
    return this.proxy.sendMessage(
      this.ordinals[60],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_BuildInformation_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_BuildInformation_ResponseParamsSpec,
      [],
      false);
  }

  refreshKeys(arg_session, arg_message, arg_signature, arg_key_array) {
    return this.proxy.sendMessage(
      this.ordinals[61],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeys_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeys_ResponseParamsSpec,
      [arg_session, arg_message, arg_signature, arg_key_array],
      false);
  }

  loadEntitledContentKeys(arg_session, arg_message, arg_key_array) {
    return this.proxy.sendMessage(
      this.ordinals[62],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeys_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeys_ResponseParamsSpec,
      [arg_session, arg_message, arg_key_array],
      false);
  }

  getOemPublicCertificate() {
    return this.proxy.sendMessage(
      this.ordinals[63],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetOemPublicCertificate_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_GetOemPublicCertificate_ResponseParamsSpec,
      [],
      false);
  }

  maximumUsageTableHeaderSize() {
    return this.proxy.sendMessage(
      this.ordinals[64],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ResponseParamsSpec,
      [],
      false);
  }

  isAntiRollbackHwPresent() {
    return this.proxy.sendMessage(
      this.ordinals[65],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ResponseParamsSpec,
      [],
      false);
  }

  minorApiVersion() {
    return this.proxy.sendMessage(
      this.ordinals[66],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_MinorApiVersion_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_MinorApiVersion_ResponseParamsSpec,
      [],
      false);
  }

  prepAndSignLicenseRequest(arg_session, arg_message, arg_core_message_size, arg_avail_signature_size) {
    return this.proxy.sendMessage(
      this.ordinals[67],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParamsSpec,
      [arg_session, arg_message, arg_core_message_size, arg_avail_signature_size],
      false);
  }

  prepAndSignRenewalRequest(arg_session, arg_message, arg_core_message_size, arg_avail_signature_size) {
    return this.proxy.sendMessage(
      this.ordinals[68],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParamsSpec,
      [arg_session, arg_message, arg_core_message_size, arg_avail_signature_size],
      false);
  }

  prepAndSignProvisioningRequest(arg_session, arg_message, arg_core_message_size, arg_avail_signature_size) {
    return this.proxy.sendMessage(
      this.ordinals[69],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParamsSpec,
      [arg_session, arg_message, arg_core_message_size, arg_avail_signature_size],
      false);
  }

  loadLicense(arg_session, arg_message, arg_core_message_length, arg_signature) {
    return this.proxy.sendMessage(
      this.ordinals[70],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadLicense_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadLicense_ResponseParamsSpec,
      [arg_session, arg_message, arg_core_message_length, arg_signature],
      false);
  }

  loadRenewal(arg_session, arg_message, arg_core_message_length, arg_signature) {
    return this.proxy.sendMessage(
      this.ordinals[71],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadRenewal_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadRenewal_ResponseParamsSpec,
      [arg_session, arg_message, arg_core_message_length, arg_signature],
      false);
  }

  loadProvisioning(arg_session, arg_message, arg_core_message_length, arg_signature, arg_avail_wrapped_private_key_size) {
    return this.proxy.sendMessage(
      this.ordinals[72],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadProvisioning_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadProvisioning_ResponseParamsSpec,
      [arg_session, arg_message, arg_core_message_length, arg_signature, arg_avail_wrapped_private_key_size],
      false);
  }

  loadOemPrivateKey(arg_session) {
    return this.proxy.sendMessage(
      this.ordinals[73],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadOemPrivateKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadOemPrivateKey_ResponseParamsSpec,
      [arg_session],
      false);
  }

  loadDrmPrivateKey(arg_session, arg_key_type, arg_wrapped_private_key) {
    return this.proxy.sendMessage(
      this.ordinals[74],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDrmPrivateKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParamsSpec,
      [arg_session, arg_key_type, arg_wrapped_private_key],
      false);
  }

  decryptCenc(arg_session, arg_data, arg_iv, arg_sub_samples, arg_pattern, arg_secure_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[75],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCenc_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCenc_ResponseParamsSpec,
      [arg_session, arg_data, arg_iv, arg_sub_samples, arg_pattern, arg_secure_buffer],
      false);
  }

  copyBuffer(arg_session, arg_data, arg_out_buffer, arg_subsample_flags) {
    return this.proxy.sendMessage(
      this.ordinals[76],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBuffer_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBuffer_ResponseParamsSpec,
      [arg_session, arg_data, arg_out_buffer, arg_subsample_flags],
      false);
  }

};

mojo.internal.bindings.arc.mojom.OemCryptoService.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.OemCryptoServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OemCryptoService',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.OemCryptoServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OemCryptoService', [
      { explicit: 0 },
      { explicit: 36 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
      { explicit: 22 },
      { explicit: 23 },
      { explicit: 24 },
      { explicit: 25 },
      { explicit: 26 },
      { explicit: 27 },
      { explicit: 28 },
      { explicit: 29 },
      { explicit: 30 },
      { explicit: 31 },
      { explicit: 32 },
      { explicit: 33 },
      { explicit: 34 },
      { explicit: 35 },
      { explicit: 37 },
      { explicit: 38 },
      { explicit: 39 },
      { explicit: 40 },
      { explicit: 41 },
      { explicit: 42 },
      { explicit: 43 },
      { explicit: 44 },
      { explicit: 45 },
      { explicit: 46 },
      { explicit: 47 },
      { explicit: 48 },
      { explicit: 49 },
      { explicit: 50 },
      { explicit: 51 },
      { explicit: 52 },
      { explicit: 53 },
      { explicit: 54 },
      { explicit: 55 },
      { explicit: 56 },
      { explicit: 57 },
      { explicit: 58 },
      { explicit: 59 },
      { explicit: 60 },
      { explicit: 61 },
      { explicit: 62 },
      { explicit: 63 },
      { explicit: 64 },
      { explicit: 65 },
      { explicit: 66 },
      { explicit: 67 },
      { explicit: 68 },
      { explicit: 69 },
      { explicit: 70 },
      { explicit: 71 },
      { explicit: 72 },
      { explicit: 73 },
      { explicit: 74 },
      { explicit: 75 },
      { explicit: 76 },
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
        
        // Try Method 0: InitializeDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_InitializeDeprecated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeDeprecated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_Initialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Terminate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_Terminate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Terminate (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OpenSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_OpenSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenSession (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CloseSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CloseSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseSession (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GenerateDerivedKeys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateDerivedKeys_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateDerivedKeys (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GenerateNonce
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateNonce_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateNonce (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GenerateSignature
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateSignature_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateSignature (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: LoadKeysV11OrV12
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV11OrV12_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadKeysV11OrV12 (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RefreshKeysV14
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeysV14_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshKeysV14 (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: QueryKeyControl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_QueryKeyControl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueryKeyControl (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SelectKeyV13
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKeyV13_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectKeyV13 (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: DecryptCencV15
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCencV15_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecryptCencV15 (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GenericEncrypt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenericEncrypt_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenericEncrypt (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GenericDecrypt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenericDecrypt_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenericDecrypt (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: GenericSign
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenericSign_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenericSign (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: GenericVerify
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenericVerify_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenericVerify (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: CopyBufferV14
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBufferV14_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyBufferV14 (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: LoadTestKeyboxV13
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeyboxV13_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadTestKeyboxV13 (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: IsRootKeyCertificateValid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsRootKeyCertificateValid (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: GetDeviceId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetDeviceId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceId (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: GetKeyData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetKeyData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetKeyData (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: GetRandom
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetRandom_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRandom (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: GetNumberOfOpenSessions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNumberOfOpenSessions (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: GetMaxNumberOfSessions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMaxNumberOfSessions (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: RewrapDeviceRsaKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RewrapDeviceRsaKey (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: LoadDeviceRsaKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDeviceRsaKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadDeviceRsaKey (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: GenerateRsaSignature
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateRsaSignature_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateRsaSignature (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: DeriveKeysFromSessionKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeriveKeysFromSessionKey (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: SecurityPatchLevel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_SecurityPatchLevel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SecurityPatchLevel (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: GetHdcpCapability
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetHdcpCapability_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHdcpCapability (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: UpdateUsageTable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageTable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUsageTable (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: DeactivateUsageEntryV12
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeactivateUsageEntryV12 (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: ReportUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_ReportUsage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportUsage (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: DeleteUsageEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteUsageEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteUsageEntry (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: ForceDeleteUsageEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceDeleteUsageEntry (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: DeleteOldUsageTable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteOldUsageTable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteOldUsageTable (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: GetProvisioningMethod
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetProvisioningMethod_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProvisioningMethod (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: SupportedCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_SupportedCertificates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SupportedCertificates (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: IsSrmUpdateSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_IsSrmUpdateSupported_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsSrmUpdateSupported (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        // Try Method 40: GetCurrentSrmVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetCurrentSrmVersion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCurrentSrmVersion (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 40 failed:', e);
           }
        }
        // Try Method 41: LoadSrm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadSrm_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadSrm (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 41 failed:', e);
           }
        }
        // Try Method 42: RemoveSrm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_RemoveSrm_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveSrm (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 42 failed:', e);
           }
        }
        // Try Method 43: CreateUsageTableHeader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CreateUsageTableHeader_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateUsageTableHeader (43)');
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 43 failed:', e);
           }
        }
        // Try Method 44: LoadUsageTableHeader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageTableHeader_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadUsageTableHeader (44)');
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 44 failed:', e);
           }
        }
        // Try Method 45: CreateNewUsageEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CreateNewUsageEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNewUsageEntry (45)');
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 45 failed:', e);
           }
        }
        // Try Method 46: LoadUsageEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadUsageEntry (46)');
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 46 failed:', e);
           }
        }
        // Try Method 47: UpdateUsageEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUsageEntry (47)');
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 47 failed:', e);
           }
        }
        // Try Method 48: DeactivateUsageEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeactivateUsageEntry (48)');
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 48 failed:', e);
           }
        }
        // Try Method 49: ShrinkUsageTableHeader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShrinkUsageTableHeader (49)');
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 49 failed:', e);
           }
        }
        // Try Method 50: MoveEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_MoveEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveEntry (50)');
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 50 failed:', e);
           }
        }
        // Try Method 51: CopyOldUsageEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CopyOldUsageEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyOldUsageEntry (51)');
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 51 failed:', e);
           }
        }
        // Try Method 52: CreateOldUsageEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CreateOldUsageEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateOldUsageEntry (52)');
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 52 failed:', e);
           }
        }
        // Try Method 53: GetAnalogOutputFlags
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetAnalogOutputFlags_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAnalogOutputFlags (53)');
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 53 failed:', e);
           }
        }
        // Try Method 54: LoadTestKeybox
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeybox_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadTestKeybox (54)');
             this.mapOrdinal(header.ordinal, 54);
             dispatchId = 54;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 54 failed:', e);
           }
        }
        // Try Method 55: LoadEntitledContentKeysV14
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadEntitledContentKeysV14 (55)');
             this.mapOrdinal(header.ordinal, 55);
             dispatchId = 55;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 55 failed:', e);
           }
        }
        // Try Method 56: SelectKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectKey (56)');
             this.mapOrdinal(header.ordinal, 56);
             dispatchId = 56;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 56 failed:', e);
           }
        }
        // Try Method 57: LoadKeysV14
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV14_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadKeysV14 (57)');
             this.mapOrdinal(header.ordinal, 57);
             dispatchId = 57;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 57 failed:', e);
           }
        }
        // Try Method 58: LoadKeys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeys_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadKeys (58)');
             this.mapOrdinal(header.ordinal, 58);
             dispatchId = 58;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 58 failed:', e);
           }
        }
        // Try Method 59: ResourceRatingTier
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_ResourceRatingTier_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResourceRatingTier (59)');
             this.mapOrdinal(header.ordinal, 59);
             dispatchId = 59;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 59 failed:', e);
           }
        }
        // Try Method 60: BuildInformation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_BuildInformation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BuildInformation (60)');
             this.mapOrdinal(header.ordinal, 60);
             dispatchId = 60;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 60 failed:', e);
           }
        }
        // Try Method 61: RefreshKeys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeys_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshKeys (61)');
             this.mapOrdinal(header.ordinal, 61);
             dispatchId = 61;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 61 failed:', e);
           }
        }
        // Try Method 62: LoadEntitledContentKeys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeys_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadEntitledContentKeys (62)');
             this.mapOrdinal(header.ordinal, 62);
             dispatchId = 62;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 62 failed:', e);
           }
        }
        // Try Method 63: GetOemPublicCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetOemPublicCertificate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOemPublicCertificate (63)');
             this.mapOrdinal(header.ordinal, 63);
             dispatchId = 63;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 63 failed:', e);
           }
        }
        // Try Method 64: MaximumUsageTableHeaderSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaximumUsageTableHeaderSize (64)');
             this.mapOrdinal(header.ordinal, 64);
             dispatchId = 64;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 64 failed:', e);
           }
        }
        // Try Method 65: IsAntiRollbackHwPresent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsAntiRollbackHwPresent (65)');
             this.mapOrdinal(header.ordinal, 65);
             dispatchId = 65;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 65 failed:', e);
           }
        }
        // Try Method 66: MinorApiVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_MinorApiVersion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MinorApiVersion (66)');
             this.mapOrdinal(header.ordinal, 66);
             dispatchId = 66;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 66 failed:', e);
           }
        }
        // Try Method 67: PrepAndSignLicenseRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrepAndSignLicenseRequest (67)');
             this.mapOrdinal(header.ordinal, 67);
             dispatchId = 67;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 67 failed:', e);
           }
        }
        // Try Method 68: PrepAndSignRenewalRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrepAndSignRenewalRequest (68)');
             this.mapOrdinal(header.ordinal, 68);
             dispatchId = 68;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 68 failed:', e);
           }
        }
        // Try Method 69: PrepAndSignProvisioningRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrepAndSignProvisioningRequest (69)');
             this.mapOrdinal(header.ordinal, 69);
             dispatchId = 69;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 69 failed:', e);
           }
        }
        // Try Method 70: LoadLicense
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadLicense_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadLicense (70)');
             this.mapOrdinal(header.ordinal, 70);
             dispatchId = 70;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 70 failed:', e);
           }
        }
        // Try Method 71: LoadRenewal
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadRenewal_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadRenewal (71)');
             this.mapOrdinal(header.ordinal, 71);
             dispatchId = 71;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 71 failed:', e);
           }
        }
        // Try Method 72: LoadProvisioning
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadProvisioning_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadProvisioning (72)');
             this.mapOrdinal(header.ordinal, 72);
             dispatchId = 72;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 72 failed:', e);
           }
        }
        // Try Method 73: LoadOemPrivateKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadOemPrivateKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadOemPrivateKey (73)');
             this.mapOrdinal(header.ordinal, 73);
             dispatchId = 73;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 73 failed:', e);
           }
        }
        // Try Method 74: LoadDrmPrivateKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDrmPrivateKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadDrmPrivateKey (74)');
             this.mapOrdinal(header.ordinal, 74);
             dispatchId = 74;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 74 failed:', e);
           }
        }
        // Try Method 75: DecryptCenc
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCenc_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecryptCenc (75)');
             this.mapOrdinal(header.ordinal, 75);
             dispatchId = 75;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 75 failed:', e);
           }
        }
        // Try Method 76: CopyBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyBuffer (76)');
             this.mapOrdinal(header.ordinal, 76);
             dispatchId = 76;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 76 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_InitializeDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializeDeprecated');
          const result = this.impl.initializeDeprecated();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_InitializeDeprecated_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InitializeDeprecated FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_oemcrypto_version);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_Initialize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Initialize FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_Terminate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.terminate');
          const result = this.impl.terminate();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_Terminate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Terminate FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_OpenSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openSession');
          const result = this.impl.openSession();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_OpenSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenSession FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CloseSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeSession');
          const result = this.impl.closeSession(params.arg_session);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_CloseSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CloseSession FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateDerivedKeys_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateDerivedKeys');
          const result = this.impl.generateDerivedKeys(params.arg_session, params.arg_mac_key_context, params.arg_enc_key_context);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateDerivedKeys_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenerateDerivedKeys FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateNonce_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateNonce');
          const result = this.impl.generateNonce(params.arg_session);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateNonce_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenerateNonce FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateSignature_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateSignature');
          const result = this.impl.generateSignature(params.arg_session, params.arg_message);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateSignature_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenerateSignature FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV11OrV12_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadKeysV11OrV12');
          const result = this.impl.loadKeysV11OrV12(params.arg_session, params.arg_message, params.arg_signature, params.arg_has_enc_mac_keys, params.arg_enc_mac_keys_iv_offset, params.arg_enc_mac_keys_offset, params.arg_key_array, params.arg_pst_offset, params.arg_pst_length);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadKeysV11OrV12 FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeysV14_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.refreshKeysV14');
          const result = this.impl.refreshKeysV14(params.arg_session, params.arg_message, params.arg_signature, params.arg_key_array);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeysV14_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RefreshKeysV14 FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_QueryKeyControl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queryKeyControl');
          const result = this.impl.queryKeyControl(params.arg_session, params.arg_key_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_QueryKeyControl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] QueryKeyControl FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKeyV13_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectKeyV13');
          const result = this.impl.selectKeyV13(params.arg_session, params.arg_key_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKeyV13_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectKeyV13 FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCencV15_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decryptCencV15');
          const result = this.impl.decryptCencV15(params.arg_session, params.arg_data, params.arg_is_encrypted, params.arg_iv, params.arg_block_offset, params.arg_secure_buffer, params.arg_pattern);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCencV15_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DecryptCencV15 FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenericEncrypt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.genericEncrypt');
          const result = this.impl.genericEncrypt(params.arg_session, params.arg_data, params.arg_iv, params.arg_algorithm);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GenericEncrypt_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenericEncrypt FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenericDecrypt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.genericDecrypt');
          const result = this.impl.genericDecrypt(params.arg_session, params.arg_data, params.arg_iv, params.arg_algorithm);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GenericDecrypt_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenericDecrypt FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenericSign_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.genericSign');
          const result = this.impl.genericSign(params.arg_session, params.arg_data, params.arg_algorithm);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GenericSign_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenericSign FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenericVerify_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.genericVerify');
          const result = this.impl.genericVerify(params.arg_session, params.arg_data, params.arg_algorithm, params.arg_signature);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GenericVerify_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenericVerify FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBufferV14_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyBufferV14');
          const result = this.impl.copyBufferV14(params.arg_data, params.arg_out_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBufferV14_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CopyBufferV14 FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeyboxV13_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadTestKeyboxV13');
          const result = this.impl.loadTestKeyboxV13();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeyboxV13_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadTestKeyboxV13 FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isRootKeyCertificateValid');
          const result = this.impl.isRootKeyCertificateValid();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsRootKeyCertificateValid FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetDeviceId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceId');
          const result = this.impl.getDeviceId();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GetDeviceId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDeviceId FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetKeyData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getKeyData');
          const result = this.impl.getKeyData();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GetKeyData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetKeyData FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetRandom_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRandom');
          const result = this.impl.getRandom(params.arg_length);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GetRandom_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetRandom FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNumberOfOpenSessions');
          const result = this.impl.getNumberOfOpenSessions();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNumberOfOpenSessions FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMaxNumberOfSessions');
          const result = this.impl.getMaxNumberOfSessions();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMaxNumberOfSessions FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rewrapDeviceRsaKey');
          const result = this.impl.rewrapDeviceRsaKey(params.arg_session, params.arg_message, params.arg_signature, params.arg_nonce_offset, params.arg_enc_rsa_key_offset, params.arg_enc_rsa_key_length, params.arg_enc_rsa_key_iv_offset);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RewrapDeviceRsaKey FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDeviceRsaKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadDeviceRsaKey');
          const result = this.impl.loadDeviceRsaKey(params.arg_session, params.arg_wrapped_rsa_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadDeviceRsaKey FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateRsaSignature_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateRsaSignature');
          const result = this.impl.generateRsaSignature(params.arg_session, params.arg_message, params.arg_padding_scheme);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GenerateRsaSignature_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenerateRsaSignature FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deriveKeysFromSessionKey');
          const result = this.impl.deriveKeysFromSessionKey(params.arg_session, params.arg_enc_session_key, params.arg_mac_key_context, params.arg_enc_key_context);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeriveKeysFromSessionKey FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_SecurityPatchLevel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.securityPatchLevel');
          const result = this.impl.securityPatchLevel();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_SecurityPatchLevel_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SecurityPatchLevel FAILED:', e));
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetHdcpCapability_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHdcpCapability');
          const result = this.impl.getHdcpCapability();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GetHdcpCapability_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHdcpCapability FAILED:', e));
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageTable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateUsageTable');
          const result = this.impl.updateUsageTable();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageTable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateUsageTable FAILED:', e));
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deactivateUsageEntryV12');
          const result = this.impl.deactivateUsageEntryV12(params.arg_pst);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeactivateUsageEntryV12 FAILED:', e));
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_ReportUsage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportUsage');
          const result = this.impl.reportUsage(params.arg_session, params.arg_pst);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_ReportUsage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReportUsage FAILED:', e));
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteUsageEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteUsageEntry');
          const result = this.impl.deleteUsageEntry(params.arg_session, params.arg_pst_offset, params.arg_pst_length, params.arg_message, params.arg_signature);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteUsageEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteUsageEntry FAILED:', e));
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceDeleteUsageEntry');
          const result = this.impl.forceDeleteUsageEntry(params.arg_pst);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ForceDeleteUsageEntry FAILED:', e));
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteOldUsageTable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteOldUsageTable');
          const result = this.impl.deleteOldUsageTable();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_DeleteOldUsageTable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteOldUsageTable FAILED:', e));
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetProvisioningMethod_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProvisioningMethod');
          const result = this.impl.getProvisioningMethod();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GetProvisioningMethod_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProvisioningMethod FAILED:', e));
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_SupportedCertificates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.supportedCertificates');
          const result = this.impl.supportedCertificates();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_SupportedCertificates_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SupportedCertificates FAILED:', e));
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_IsSrmUpdateSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isSrmUpdateSupported');
          const result = this.impl.isSrmUpdateSupported();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_IsSrmUpdateSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsSrmUpdateSupported FAILED:', e));
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetCurrentSrmVersion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCurrentSrmVersion');
          const result = this.impl.getCurrentSrmVersion();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GetCurrentSrmVersion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCurrentSrmVersion FAILED:', e));
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadSrm_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadSrm');
          const result = this.impl.loadSrm(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadSrm_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadSrm FAILED:', e));
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_RemoveSrm_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeSrm');
          const result = this.impl.removeSrm();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_RemoveSrm_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoveSrm FAILED:', e));
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CreateUsageTableHeader_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createUsageTableHeader');
          const result = this.impl.createUsageTableHeader(params.arg_avail_header_length);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_CreateUsageTableHeader_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateUsageTableHeader FAILED:', e));
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageTableHeader_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadUsageTableHeader');
          const result = this.impl.loadUsageTableHeader(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageTableHeader_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadUsageTableHeader FAILED:', e));
          }
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CreateNewUsageEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createNewUsageEntry');
          const result = this.impl.createNewUsageEntry(params.arg_session);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_CreateNewUsageEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateNewUsageEntry FAILED:', e));
          }
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadUsageEntry');
          const result = this.impl.loadUsageEntry(params.arg_session, params.arg_index, params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadUsageEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadUsageEntry FAILED:', e));
          }
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateUsageEntry');
          const result = this.impl.updateUsageEntry(params.arg_session, params.arg_avail_header_length, params.arg_avail_entry_length);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_UpdateUsageEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateUsageEntry FAILED:', e));
          }
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deactivateUsageEntry');
          const result = this.impl.deactivateUsageEntry(params.arg_session, params.arg_pst);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_DeactivateUsageEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeactivateUsageEntry FAILED:', e));
          }
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shrinkUsageTableHeader');
          const result = this.impl.shrinkUsageTableHeader(params.arg_new_entry_count, params.arg_avail_header_length);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShrinkUsageTableHeader FAILED:', e));
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_MoveEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.moveEntry');
          const result = this.impl.moveEntry(params.arg_session, params.arg_new_index);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_MoveEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MoveEntry FAILED:', e));
          }
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CopyOldUsageEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyOldUsageEntry');
          const result = this.impl.copyOldUsageEntry(params.arg_session, params.arg_pst);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_CopyOldUsageEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CopyOldUsageEntry FAILED:', e));
          }
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CreateOldUsageEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createOldUsageEntry');
          const result = this.impl.createOldUsageEntry(params.arg_time_since_license_received, params.arg_time_since_first_decrypt, params.arg_time_since_last_decrypt, params.arg_status, params.arg_server_mac_key, params.arg_client_mac_key, params.arg_pst);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_CreateOldUsageEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateOldUsageEntry FAILED:', e));
          }
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetAnalogOutputFlags_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAnalogOutputFlags');
          const result = this.impl.getAnalogOutputFlags();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GetAnalogOutputFlags_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAnalogOutputFlags FAILED:', e));
          }
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeybox_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadTestKeybox');
          const result = this.impl.loadTestKeybox(params.arg_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadTestKeybox_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadTestKeybox FAILED:', e));
          }
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadEntitledContentKeysV14');
          const result = this.impl.loadEntitledContentKeysV14(params.arg_session, params.arg_key_array);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadEntitledContentKeysV14 FAILED:', e));
          }
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectKey');
          const result = this.impl.selectKey(params.arg_session, params.arg_content_key_id, params.arg_cipher_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_SelectKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectKey FAILED:', e));
          }
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV14_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadKeysV14');
          const result = this.impl.loadKeysV14(params.arg_session, params.arg_message, params.arg_signature, params.arg_has_enc_mac_keys, params.arg_enc_mac_keys_iv_offset, params.arg_enc_mac_keys_offset, params.arg_key_array, params.arg_pst_offset, params.arg_pst_length, params.arg_srm_requirement, params.arg_license_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeysV14_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadKeysV14 FAILED:', e));
          }
          break;
        }
        case 58: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeys_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadKeys');
          const result = this.impl.loadKeys(params.arg_session, params.arg_message, params.arg_signature, params.arg_enc_mac_keys_iv, params.arg_enc_mac_keys, params.arg_key_array, params.arg_pst, params.arg_srm_restriction_data, params.arg_license_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadKeys_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadKeys FAILED:', e));
          }
          break;
        }
        case 59: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_ResourceRatingTier_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resourceRatingTier');
          const result = this.impl.resourceRatingTier();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_ResourceRatingTier_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ResourceRatingTier FAILED:', e));
          }
          break;
        }
        case 60: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_BuildInformation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.buildInformation');
          const result = this.impl.buildInformation();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_BuildInformation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] BuildInformation FAILED:', e));
          }
          break;
        }
        case 61: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeys_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.refreshKeys');
          const result = this.impl.refreshKeys(params.arg_session, params.arg_message, params.arg_signature, params.arg_key_array);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_RefreshKeys_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RefreshKeys FAILED:', e));
          }
          break;
        }
        case 62: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeys_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadEntitledContentKeys');
          const result = this.impl.loadEntitledContentKeys(params.arg_session, params.arg_message, params.arg_key_array);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadEntitledContentKeys_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadEntitledContentKeys FAILED:', e));
          }
          break;
        }
        case 63: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_GetOemPublicCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOemPublicCertificate');
          const result = this.impl.getOemPublicCertificate();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_GetOemPublicCertificate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetOemPublicCertificate FAILED:', e));
          }
          break;
        }
        case 64: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maximumUsageTableHeaderSize');
          const result = this.impl.maximumUsageTableHeaderSize();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MaximumUsageTableHeaderSize FAILED:', e));
          }
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isAntiRollbackHwPresent');
          const result = this.impl.isAntiRollbackHwPresent();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsAntiRollbackHwPresent FAILED:', e));
          }
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_MinorApiVersion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.minorApiVersion');
          const result = this.impl.minorApiVersion();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_MinorApiVersion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MinorApiVersion FAILED:', e));
          }
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepAndSignLicenseRequest');
          const result = this.impl.prepAndSignLicenseRequest(params.arg_session, params.arg_message, params.arg_core_message_size, params.arg_avail_signature_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PrepAndSignLicenseRequest FAILED:', e));
          }
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepAndSignRenewalRequest');
          const result = this.impl.prepAndSignRenewalRequest(params.arg_session, params.arg_message, params.arg_core_message_size, params.arg_avail_signature_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PrepAndSignRenewalRequest FAILED:', e));
          }
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepAndSignProvisioningRequest');
          const result = this.impl.prepAndSignProvisioningRequest(params.arg_session, params.arg_message, params.arg_core_message_size, params.arg_avail_signature_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PrepAndSignProvisioningRequest FAILED:', e));
          }
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadLicense_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadLicense');
          const result = this.impl.loadLicense(params.arg_session, params.arg_message, params.arg_core_message_length, params.arg_signature);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadLicense_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadLicense FAILED:', e));
          }
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadRenewal_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadRenewal');
          const result = this.impl.loadRenewal(params.arg_session, params.arg_message, params.arg_core_message_length, params.arg_signature);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadRenewal_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadRenewal FAILED:', e));
          }
          break;
        }
        case 72: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadProvisioning_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadProvisioning');
          const result = this.impl.loadProvisioning(params.arg_session, params.arg_message, params.arg_core_message_length, params.arg_signature, params.arg_avail_wrapped_private_key_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadProvisioning_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadProvisioning FAILED:', e));
          }
          break;
        }
        case 73: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadOemPrivateKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadOemPrivateKey');
          const result = this.impl.loadOemPrivateKey(params.arg_session);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadOemPrivateKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadOemPrivateKey FAILED:', e));
          }
          break;
        }
        case 74: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDrmPrivateKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadDrmPrivateKey');
          const result = this.impl.loadDrmPrivateKey(params.arg_session, params.arg_key_type, params.arg_wrapped_private_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadDrmPrivateKey FAILED:', e));
          }
          break;
        }
        case 75: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCenc_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decryptCenc');
          const result = this.impl.decryptCenc(params.arg_session, params.arg_data, params.arg_iv, params.arg_sub_samples, params.arg_pattern, params.arg_secure_buffer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_DecryptCenc_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DecryptCenc FAILED:', e));
          }
          break;
        }
        case 76: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyBuffer');
          const result = this.impl.copyBuffer(params.arg_session, params.arg_data, params.arg_out_buffer, params.arg_subsample_flags);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoService_CopyBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CopyBuffer FAILED:', e));
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

mojo.internal.bindings.arc.mojom.OemCryptoServiceReceiver = mojo.internal.bindings.arc.mojom.OemCryptoServiceReceiver;

mojo.internal.bindings.arc.mojom.OemCryptoServicePtr = mojo.internal.bindings.arc.mojom.OemCryptoServiceRemote;
mojo.internal.bindings.arc.mojom.OemCryptoServiceRequest = mojo.internal.bindings.arc.mojom.OemCryptoServicePendingReceiver;


// Interface: OemCryptoHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoHost_Connect_ParamsSpec, 'arc.mojom.OemCryptoHost_Connect_Params', [
      mojo.internal.StructField('arg_oemcryptor', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.arc.mojom.OemCryptoServiceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.OemCryptoHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.OemCryptoHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OemCryptoHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.OemCryptoHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.OemCryptoHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connect(arg_oemcryptor) {
    return this.$.connect(arg_oemcryptor);
  }
};

mojo.internal.bindings.arc.mojom.OemCryptoHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OemCryptoHost', [
      { explicit: 0 },
    ]);
  }

  connect(arg_oemcryptor) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoHost_Connect_ParamsSpec,
      null,
      [arg_oemcryptor],
      false);
  }

};

mojo.internal.bindings.arc.mojom.OemCryptoHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.OemCryptoHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OemCryptoHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.OemCryptoHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OemCryptoHost', [
      { explicit: 0 },
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
        
        // Try Method 0: Connect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoHost_Connect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Connect (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoHost_Connect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.arg_oemcryptor);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.OemCryptoHostReceiver = mojo.internal.bindings.arc.mojom.OemCryptoHostReceiver;

mojo.internal.bindings.arc.mojom.OemCryptoHostPtr = mojo.internal.bindings.arc.mojom.OemCryptoHostRemote;
mojo.internal.bindings.arc.mojom.OemCryptoHostRequest = mojo.internal.bindings.arc.mojom.OemCryptoHostPendingReceiver;


// Interface: OemCryptoInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoInstance_Init_ParamsSpec, 'arc.mojom.OemCryptoInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.OemCryptoHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.OemCryptoInstance_Init_ResponseParamsSpec, 'arc.mojom.OemCryptoInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.arc.mojom.OemCryptoInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.OemCryptoInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OemCryptoInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.OemCryptoInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.OemCryptoInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
};

mojo.internal.bindings.arc.mojom.OemCryptoInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OemCryptoInstance', [
      { explicit: 1 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.OemCryptoInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.OemCryptoInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

};

mojo.internal.bindings.arc.mojom.OemCryptoInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.OemCryptoInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OemCryptoInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.OemCryptoInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OemCryptoInstance', [
      { explicit: 1 },
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.OemCryptoInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.OemCryptoInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
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

mojo.internal.bindings.arc.mojom.OemCryptoInstanceReceiver = mojo.internal.bindings.arc.mojom.OemCryptoInstanceReceiver;

mojo.internal.bindings.arc.mojom.OemCryptoInstancePtr = mojo.internal.bindings.arc.mojom.OemCryptoInstanceRemote;
mojo.internal.bindings.arc.mojom.OemCryptoInstanceRequest = mojo.internal.bindings.arc.mojom.OemCryptoInstancePendingReceiver;

