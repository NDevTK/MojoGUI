// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/content_decryption_module.mojom
 // Module: chromeos.cdm.mojom

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
 

 mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.cdm = mojo.internal.bindings.chromeos.cdm || {};
mojo.internal.bindings.chromeos.cdm.mojom = mojo.internal.bindings.chromeos.cdm.mojom || {};

mojo.internal.bindings.chromeos.cdm.mojom.EmeInitDataTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.cdm.mojom.CdmSessionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.cdm.mojom.CdmMessageTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.cdm.mojom.CdmKeyStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.cdm.mojom.HdcpVersionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.cdm.mojom.PromiseExceptionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.cdm.mojom.EncryptionSchemeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.cdm.mojom.DecryptStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.cdm.mojom.CdmPromiseResultSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmKeyInformationSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.EncryptionPatternSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.SubsampleEntrySpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.DecryptConfigSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule = {};
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleSpec = { $ : {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule.$interfaceName = 'chromeos.cdm.mojom.ContentDecryptionModule';
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient = {};
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientSpec = { $ : {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient.$interfaceName = 'chromeos.cdm.mojom.ContentDecryptionModuleClient';
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec = { $: {} };

// Enum: EmeInitDataType
mojo.internal.bindings.chromeos.cdm.mojom.EmeInitDataType = {
  UNKNOWN: 0,
  WEBM: 1,
  CENC: 2,
  KEYIDS: 3,
};

// Enum: CdmSessionType
mojo.internal.bindings.chromeos.cdm.mojom.CdmSessionType = {
  kTemporary: 0,
  kPersistentLicense: 1,
};

// Enum: CdmMessageType
mojo.internal.bindings.chromeos.cdm.mojom.CdmMessageType = {
  LICENSE_REQUEST: 0,
  LICENSE_RENEWAL: 1,
  LICENSE_RELEASE: 2,
  INDIVIDUALIZATION_REQUEST: 3,
};

// Enum: CdmKeyStatus
mojo.internal.bindings.chromeos.cdm.mojom.CdmKeyStatus = {
  USABLE: 0,
  INTERNAL_ERROR: 1,
  EXPIRED: 2,
  OUTPUT_RESTRICTED: 3,
  OUTPUT_DOWNSCALED: 4,
  KEY_STATUS_PENDING: 5,
  RELEASED: 6,
  MinVersion: 6,
};

// Enum: HdcpVersion
mojo.internal.bindings.chromeos.cdm.mojom.HdcpVersion = {
  kHdcpVersionNone: 0,
  kHdcpVersion1_0: 1,
  kHdcpVersion1_1: 2,
  kHdcpVersion1_2: 3,
  kHdcpVersion1_3: 4,
  kHdcpVersion1_4: 5,
  kHdcpVersion2_0: 6,
  kHdcpVersion2_1: 7,
  kHdcpVersion2_2: 8,
  kHdcpVersion2_3: 9,
};

// Enum: PromiseException
mojo.internal.bindings.chromeos.cdm.mojom.PromiseException = {
  NOT_SUPPORTED_ERROR: 0,
  INVALID_STATE_ERROR: 1,
  QUOTA_EXCEEDED_ERROR: 2,
  TYPE_ERROR: 3,
};

// Enum: EncryptionScheme
mojo.internal.bindings.chromeos.cdm.mojom.EncryptionScheme = {
  kCenc: 0,
  kCbcs: 1,
};

// Enum: DecryptStatus
mojo.internal.bindings.chromeos.cdm.mojom.DecryptStatus = {
  kSuccess: 0,
  kNoKey: 1,
  kFailure: 2,
};

// Struct: CdmPromiseResult
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmPromiseResultSpec, 'chromeos.cdm.mojom.CdmPromiseResult', [
      mojo.internal.StructField('arg_exception', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.PromiseExceptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_system_code', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_success', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CdmKeyInformation
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmKeyInformationSpec, 'chromeos.cdm.mojom.CdmKeyInformation', [
      mojo.internal.StructField('arg_key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.chromeos.cdm.mojom.CdmKeyStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_system_code', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EncryptionPattern
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.EncryptionPatternSpec, 'chromeos.cdm.mojom.EncryptionPattern', [
      mojo.internal.StructField('arg_crypt_byte_block', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_skip_byte_block', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SubsampleEntry
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.SubsampleEntrySpec, 'chromeos.cdm.mojom.SubsampleEntry', [
      mojo.internal.StructField('arg_clear_bytes', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cipher_bytes', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DecryptConfig
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.DecryptConfigSpec, 'chromeos.cdm.mojom.DecryptConfig', [
      mojo.internal.StructField('arg_encryption_scheme', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.EncryptionSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_iv', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_subsamples', 24, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.cdm.mojom.SubsampleEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_encryption_pattern', 32, 0, mojo.internal.bindings.chromeos.cdm.mojom.EncryptionPatternSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Interface: ContentDecryptionModule
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_Params', [
      mojo.internal.StructField('arg_certificate_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_Params', [
      mojo.internal.StructField('arg_min_hdcp_version', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.HdcpVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_status', 8, 0, mojo.internal.bindings.chromeos.cdm.mojom.CdmKeyStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_Params', [
      mojo.internal.StructField('arg_session_type', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.CdmSessionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_init_data_type', 8, 0, mojo.internal.bindings.chromeos.cdm.mojom.EmeInitDataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_init_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_Params', [
      mojo.internal.StructField('arg_session_type', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.CdmSessionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_response', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.CdmPromiseResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_Params', [
      mojo.internal.StructField('arg_encrypted_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_decrypt_config', 8, 0, mojo.internal.bindings.chromeos.cdm.mojom.DecryptConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_decrypted_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_Params', [
      mojo.internal.StructField('arg_decrypt_config', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.DecryptConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hw_identifier', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_Params', [
      mojo.internal.StructField('arg_encrypted_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_decrypt_config_in', 8, 0, mojo.internal.bindings.chromeos.cdm.mojom.DecryptConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_video', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_secure_handle', 24, 0, mojo.internal.Uint64, 0, false, 3, undefined),
    ],
    [[0, 32], [3, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ResponseParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_decrypted_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_decrypt_config_out', 16, 0, mojo.internal.bindings.chromeos.cdm.mojom.DecryptConfigSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModulePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.ContentDecryptionModule';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModulePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
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
  decryptDeprecated(arg_encrypted_data, arg_decrypt_config) {
    return this.$.decryptDeprecated(arg_encrypted_data, arg_decrypt_config);
  }
  getHwKeyData(arg_decrypt_config, arg_hw_identifier) {
    return this.$.getHwKeyData(arg_decrypt_config, arg_hw_identifier);
  }
  decrypt(arg_encrypted_data, arg_decrypt_config_in, arg_is_video, arg_secure_handle) {
    return this.$.decrypt(arg_encrypted_data, arg_decrypt_config_in, arg_is_video, arg_secure_handle);
  }
};

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chromeos.cdm.mojom.ContentDecryptionModule', [
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
    ]);
  }

  setServerCertificate(arg_certificate_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec,
      [arg_certificate_data],
      false);
  }

  getStatusForPolicy(arg_min_hdcp_version) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec,
      [arg_min_hdcp_version],
      false);
  }

  createSessionAndGenerateRequest(arg_session_type, arg_init_data_type, arg_init_data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec,
      [arg_session_type, arg_init_data_type, arg_init_data],
      false);
  }

  loadSession(arg_session_type, arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec,
      [arg_session_type, arg_session_id],
      false);
  }

  updateSession(arg_session_id, arg_response) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec,
      [arg_session_id, arg_response],
      false);
  }

  closeSession(arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec,
      [arg_session_id],
      false);
  }

  removeSession(arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec,
      [arg_session_id],
      false);
  }

  decryptDeprecated(arg_encrypted_data, arg_decrypt_config) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ResponseParamsSpec,
      [arg_encrypted_data, arg_decrypt_config],
      false);
  }

  getHwKeyData(arg_decrypt_config, arg_hw_identifier) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ResponseParamsSpec,
      [arg_decrypt_config, arg_hw_identifier],
      false);
  }

  decrypt(arg_encrypted_data, arg_decrypt_config_in, arg_is_video, arg_secure_handle) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ResponseParamsSpec,
      [arg_encrypted_data, arg_decrypt_config_in, arg_is_video, arg_secure_handle],
      false);
  }

};

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.ContentDecryptionModule',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chromeos.cdm.mojom.ContentDecryptionModule', [
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
        
        // Try Method 0: SetServerCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetServerCertificate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetStatusForPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStatusForPolicy (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateSessionAndGenerateRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSessionAndGenerateRequest (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: LoadSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadSession (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UpdateSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateSession (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CloseSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseSession (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RemoveSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveSession (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DecryptDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecryptDeprecated (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetHwKeyData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHwKeyData (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Decrypt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Decrypt (9)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setServerCertificate');
          const result = this.impl.setServerCertificate(params.arg_certificate_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_SetServerCertificate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetServerCertificate FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStatusForPolicy');
          const result = this.impl.getStatusForPolicy(params.arg_min_hdcp_version);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetStatusForPolicy_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetStatusForPolicy FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSessionAndGenerateRequest');
          const result = this.impl.createSessionAndGenerateRequest(params.arg_session_type, params.arg_init_data_type, params.arg_init_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CreateSessionAndGenerateRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateSessionAndGenerateRequest FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadSession');
          const result = this.impl.loadSession(params.arg_session_type, params.arg_session_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_LoadSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadSession FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateSession');
          const result = this.impl.updateSession(params.arg_session_id, params.arg_response);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_UpdateSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateSession FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeSession');
          const result = this.impl.closeSession(params.arg_session_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_CloseSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CloseSession FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeSession');
          const result = this.impl.removeSession(params.arg_session_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_RemoveSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoveSession FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decryptDeprecated');
          const result = this.impl.decryptDeprecated(params.arg_encrypted_data, params.arg_decrypt_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_DecryptDeprecated_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DecryptDeprecated FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHwKeyData');
          const result = this.impl.getHwKeyData(params.arg_decrypt_config, params.arg_hw_identifier);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_GetHwKeyData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHwKeyData FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decrypt');
          const result = this.impl.decrypt(params.arg_encrypted_data, params.arg_decrypt_config_in, params.arg_is_video, params.arg_secure_handle);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModule_Decrypt_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Decrypt FAILED:', e));
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

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleReceiver = mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleReceiver;

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModulePtr = mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleRemote;
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleRequest = mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModulePendingReceiver;


// Interface: ContentDecryptionModuleClient
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_message_type', 8, 0, mojo.internal.bindings.chromeos.cdm.mojom.CdmMessageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_keys_info', 8, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.cdm.mojom.CdmKeyInformationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_has_additional_usable_key', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec, 'chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_expiry_time_sec', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.ContentDecryptionModuleClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientRemoteCallHandler(this.proxy);
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
  onSessionClosed(arg_session_id) {
    return this.$.onSessionClosed(arg_session_id);
  }
  onSessionKeysChange(arg_session_id, arg_has_additional_usable_key, arg_keys_info) {
    return this.$.onSessionKeysChange(arg_session_id, arg_has_additional_usable_key, arg_keys_info);
  }
  onSessionExpirationUpdate(arg_session_id, arg_new_expiry_time_sec) {
    return this.$.onSessionExpirationUpdate(arg_session_id, arg_new_expiry_time_sec);
  }
};

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chromeos.cdm.mojom.ContentDecryptionModuleClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  onSessionMessage(arg_session_id, arg_message_type, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec,
      null,
      [arg_session_id, arg_message_type, arg_message],
      false);
  }

  onSessionClosed(arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec,
      null,
      [arg_session_id],
      false);
  }

  onSessionKeysChange(arg_session_id, arg_has_additional_usable_key, arg_keys_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec,
      null,
      [arg_session_id, arg_has_additional_usable_key, arg_keys_info],
      false);
  }

  onSessionExpirationUpdate(arg_session_id, arg_new_expiry_time_sec) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec,
      null,
      [arg_session_id, arg_new_expiry_time_sec],
      false);
  }

};

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.ContentDecryptionModuleClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chromeos.cdm.mojom.ContentDecryptionModuleClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionMessage');
          const result = this.impl.onSessionMessage(params.arg_session_id, params.arg_message_type, params.arg_message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionClosed');
          const result = this.impl.onSessionClosed(params.arg_session_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionKeysChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionKeysChange');
          const result = this.impl.onSessionKeysChange(params.arg_session_id, params.arg_has_additional_usable_key, params.arg_keys_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClient_OnSessionExpirationUpdate_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientReceiver = mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientReceiver;

mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientPtr = mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientRemote;
mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientRequest = mojo.internal.bindings.chromeos.cdm.mojom.ContentDecryptionModuleClientPendingReceiver;

