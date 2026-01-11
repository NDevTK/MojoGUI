// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/keymaster.mojom
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

mojo.internal.bindings.arc.mojom.KeyPurposeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.KeyFormatSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.IntegerKeyParamSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeyParameterSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeyCharacteristicsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.GetKeyCharacteristicsRequestSpec = { $: {} };
mojo.internal.bindings.arc.mojom.GetKeyCharacteristicsResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.GenerateKeyResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImportKeyRequestSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImportKeyResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ExportKeyRequestSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ExportKeyResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AttestKeyRequestSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AttestKeyResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UpgradeKeyRequestSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UpgradeKeyResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.BeginRequestSpec = { $: {} };
mojo.internal.bindings.arc.mojom.BeginResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UpdateRequestSpec = { $: {} };
mojo.internal.bindings.arc.mojom.UpdateResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FinishRequestSpec = { $: {} };
mojo.internal.bindings.arc.mojom.FinishResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterHost = {};
mojo.internal.bindings.arc.mojom.KeymasterHost.$interfaceName = 'arc.mojom.KeymasterHost';
mojo.internal.bindings.arc.mojom.KeymasterHost_GetServer_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterHost_GetServer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterInstance = {};
mojo.internal.bindings.arc.mojom.KeymasterInstance.$interfaceName = 'arc.mojom.KeymasterInstance';
mojo.internal.bindings.arc.mojom.KeymasterInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer = {};
mojo.internal.bindings.arc.mojom.KeymasterServer.$interfaceName = 'arc.mojom.KeymasterServer';
mojo.internal.bindings.arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_AddRngEntropy_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_GetKeyCharacteristics_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_GenerateKey_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_GenerateKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_ImportKey_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_ImportKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_ExportKey_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_ExportKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_AttestKey_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_AttestKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_UpgradeKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteKey_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteAllKeys_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_Begin_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_Begin_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_Update_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_Update_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_Finish_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_Finish_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_Abort_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeymasterServer_Abort_ResponseParamsSpec = { $: {} };

// Enum: KeyPurpose
mojo.internal.bindings.arc.mojom.KeyPurpose = {
  ENCRYPT: 0,
  DECRYPT: 1,
  SIGN: 2,
  VERIFY: 3,
  DERIVE_KEY: 4,
  WRAP_KEY: 5,
};

// Enum: KeyFormat
mojo.internal.bindings.arc.mojom.KeyFormat = {
  X509: 0,
  PKCS8: 1,
  RAW: 3,
};

// Union: IntegerKeyParam
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.IntegerKeyParamSpec, 'arc.mojom.IntegerKeyParam', {
      'arg_boolean_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_integer': {
        'ordinal': 1,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_long_integer': {
        'ordinal': 2,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_date_time': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_blob': {
        'ordinal': 4,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Struct: KeyParameter
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeyParameterSpec, 'arc.mojom.KeyParameter', [
      mojo.internal.StructField('arg_param', 0, 0, mojo.internal.bindings.arc.mojom.IntegerKeyParamSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tag', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KeyCharacteristics
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeyCharacteristicsSpec, 'arc.mojom.KeyCharacteristics', [
      mojo.internal.StructField('arg_software_enforced', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tee_enforced', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GetKeyCharacteristicsRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.GetKeyCharacteristicsRequestSpec, 'arc.mojom.GetKeyCharacteristicsRequest', [
      mojo.internal.StructField('arg_key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_client_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_app_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetKeyCharacteristicsResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.GetKeyCharacteristicsResultSpec, 'arc.mojom.GetKeyCharacteristicsResult', [
      mojo.internal.StructField('arg_key_characteristics', 0, 0, mojo.internal.bindings.arc.mojom.KeyCharacteristicsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GenerateKeyResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.GenerateKeyResultSpec, 'arc.mojom.GenerateKeyResult', [
      mojo.internal.StructField('arg_key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_key_characteristics', 8, 0, mojo.internal.bindings.arc.mojom.KeyCharacteristicsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ImportKeyRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImportKeyRequestSpec, 'arc.mojom.ImportKeyRequest', [
      mojo.internal.StructField('arg_key_description', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_key_format', 8, 0, mojo.internal.bindings.arc.mojom.KeyFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ImportKeyResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImportKeyResultSpec, 'arc.mojom.ImportKeyResult', [
      mojo.internal.StructField('arg_key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_key_characteristics', 8, 0, mojo.internal.bindings.arc.mojom.KeyCharacteristicsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ExportKeyRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ExportKeyRequestSpec, 'arc.mojom.ExportKeyRequest', [
      mojo.internal.StructField('arg_key_format', 0, 0, mojo.internal.bindings.arc.mojom.KeyFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_blob', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_client_id', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_app_data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ExportKeyResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ExportKeyResultSpec, 'arc.mojom.ExportKeyResult', [
      mojo.internal.StructField('arg_key_material', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AttestKeyRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AttestKeyRequestSpec, 'arc.mojom.AttestKeyRequest', [
      mojo.internal.StructField('arg_key_to_attest', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_attest_params', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AttestKeyResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AttestKeyResultSpec, 'arc.mojom.AttestKeyResult', [
      mojo.internal.StructField('arg_cert_chain', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UpgradeKeyRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UpgradeKeyRequestSpec, 'arc.mojom.UpgradeKeyRequest', [
      mojo.internal.StructField('arg_key_blob_to_upgrade', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_upgrade_params', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UpgradeKeyResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UpgradeKeyResultSpec, 'arc.mojom.UpgradeKeyResult', [
      mojo.internal.StructField('arg_upgraded_key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BeginRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.BeginRequestSpec, 'arc.mojom.BeginRequest', [
      mojo.internal.StructField('arg_purpose', 0, 0, mojo.internal.bindings.arc.mojom.KeyPurposeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_in_params', 16, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BeginResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.BeginResultSpec, 'arc.mojom.BeginResult', [
      mojo.internal.StructField('arg_out_params', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_op_handle', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_error', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UpdateRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UpdateRequestSpec, 'arc.mojom.UpdateRequest', [
      mojo.internal.StructField('arg_op_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_in_params', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_input', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UpdateResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.UpdateResultSpec, 'arc.mojom.UpdateResult', [
      mojo.internal.StructField('arg_out_params', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_output', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_input_consumed', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_error', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FinishRequest
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FinishRequestSpec, 'arc.mojom.FinishRequest', [
      mojo.internal.StructField('arg_op_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_in_params', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_input', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_signature', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FinishResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.FinishResultSpec, 'arc.mojom.FinishResult', [
      mojo.internal.StructField('arg_out_params', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_output', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: KeymasterHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterHost_GetServer_ParamsSpec, 'arc.mojom.KeymasterHost_GetServer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterHost_GetServer_ResponseParamsSpec, 'arc.mojom.KeymasterHost_GetServer_ResponseParams', [
      mojo.internal.StructField('arg_server_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.KeymasterServerSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.KeymasterHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.KeymasterHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KeymasterHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.KeymasterHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.KeymasterHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getServer() {
    return this.$.getServer();
  }
};

mojo.internal.bindings.arc.mojom.KeymasterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeymasterHost', [
      { explicit: 0 },
    ]);
  }

  getServer() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterHost_GetServer_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterHost_GetServer_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.arc.mojom.KeymasterHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.KeymasterHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KeymasterHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.KeymasterHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeymasterHost', [
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
        
        // Try Method 0: GetServer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterHost_GetServer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetServer (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterHost_GetServer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getServer');
          const result = this.impl.getServer();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterHost_GetServer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetServer FAILED:', e));
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

mojo.internal.bindings.arc.mojom.KeymasterHostReceiver = mojo.internal.bindings.arc.mojom.KeymasterHostReceiver;

mojo.internal.bindings.arc.mojom.KeymasterHostPtr = mojo.internal.bindings.arc.mojom.KeymasterHostRemote;
mojo.internal.bindings.arc.mojom.KeymasterHostRequest = mojo.internal.bindings.arc.mojom.KeymasterHostPendingReceiver;


// Interface: KeymasterInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterInstance_Init_ParamsSpec, 'arc.mojom.KeymasterInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.KeymasterHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterInstance_Init_ResponseParamsSpec, 'arc.mojom.KeymasterInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.arc.mojom.KeymasterInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.KeymasterInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KeymasterInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.KeymasterInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.KeymasterInstanceRemoteCallHandler(this.proxy);
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

mojo.internal.bindings.arc.mojom.KeymasterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeymasterInstance', [
      { explicit: 0 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

};

mojo.internal.bindings.arc.mojom.KeymasterInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.KeymasterInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KeymasterInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.KeymasterInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeymasterInstance', [
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterInstance_Init_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterInstance_Init_ResponseParamsSpec, header, rawHeader);
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

mojo.internal.bindings.arc.mojom.KeymasterInstanceReceiver = mojo.internal.bindings.arc.mojom.KeymasterInstanceReceiver;

mojo.internal.bindings.arc.mojom.KeymasterInstancePtr = mojo.internal.bindings.arc.mojom.KeymasterInstanceRemote;
mojo.internal.bindings.arc.mojom.KeymasterInstanceRequest = mojo.internal.bindings.arc.mojom.KeymasterInstancePendingReceiver;


// Interface: KeymasterServer
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec, 'arc.mojom.KeymasterServer_SetSystemVersion_Params', [
      mojo.internal.StructField('arg_os_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_os_patchlevel', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec, 'arc.mojom.KeymasterServer_AddRngEntropy_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_AddRngEntropy_ResponseParamsSpec, 'arc.mojom.KeymasterServer_AddRngEntropy_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec, 'arc.mojom.KeymasterServer_GetKeyCharacteristics_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.GetKeyCharacteristicsRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_GetKeyCharacteristics_ResponseParamsSpec, 'arc.mojom.KeymasterServer_GetKeyCharacteristics_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.GetKeyCharacteristicsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_GenerateKey_ParamsSpec, 'arc.mojom.KeymasterServer_GenerateKey_Params', [
      mojo.internal.StructField('arg_key_params', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.KeyParameterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_GenerateKey_ResponseParamsSpec, 'arc.mojom.KeymasterServer_GenerateKey_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.GenerateKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_ImportKey_ParamsSpec, 'arc.mojom.KeymasterServer_ImportKey_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.ImportKeyRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_ImportKey_ResponseParamsSpec, 'arc.mojom.KeymasterServer_ImportKey_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.ImportKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_ExportKey_ParamsSpec, 'arc.mojom.KeymasterServer_ExportKey_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.ExportKeyRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_ExportKey_ResponseParamsSpec, 'arc.mojom.KeymasterServer_ExportKey_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.ExportKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_AttestKey_ParamsSpec, 'arc.mojom.KeymasterServer_AttestKey_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.AttestKeyRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_AttestKey_ResponseParamsSpec, 'arc.mojom.KeymasterServer_AttestKey_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.AttestKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec, 'arc.mojom.KeymasterServer_UpgradeKey_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.UpgradeKeyRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_UpgradeKey_ResponseParamsSpec, 'arc.mojom.KeymasterServer_UpgradeKey_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.UpgradeKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteKey_ParamsSpec, 'arc.mojom.KeymasterServer_DeleteKey_Params', [
      mojo.internal.StructField('arg_key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteKey_ResponseParamsSpec, 'arc.mojom.KeymasterServer_DeleteKey_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec, 'arc.mojom.KeymasterServer_DeleteAllKeys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteAllKeys_ResponseParamsSpec, 'arc.mojom.KeymasterServer_DeleteAllKeys_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_Begin_ParamsSpec, 'arc.mojom.KeymasterServer_Begin_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.BeginRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_Begin_ResponseParamsSpec, 'arc.mojom.KeymasterServer_Begin_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.BeginResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_Update_ParamsSpec, 'arc.mojom.KeymasterServer_Update_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.UpdateRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_Update_ResponseParamsSpec, 'arc.mojom.KeymasterServer_Update_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.UpdateResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_Finish_ParamsSpec, 'arc.mojom.KeymasterServer_Finish_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.arc.mojom.FinishRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_Finish_ResponseParamsSpec, 'arc.mojom.KeymasterServer_Finish_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.arc.mojom.FinishResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_Abort_ParamsSpec, 'arc.mojom.KeymasterServer_Abort_Params', [
      mojo.internal.StructField('arg_op_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeymasterServer_Abort_ResponseParamsSpec, 'arc.mojom.KeymasterServer_Abort_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.KeymasterServerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.KeymasterServerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KeymasterServer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.KeymasterServerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.KeymasterServerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setSystemVersion(arg_os_version, arg_os_patchlevel) {
    return this.$.setSystemVersion(arg_os_version, arg_os_patchlevel);
  }
  addRngEntropy(arg_data) {
    return this.$.addRngEntropy(arg_data);
  }
  getKeyCharacteristics(arg_request) {
    return this.$.getKeyCharacteristics(arg_request);
  }
  generateKey(arg_key_params) {
    return this.$.generateKey(arg_key_params);
  }
  importKey(arg_request) {
    return this.$.importKey(arg_request);
  }
  exportKey(arg_request) {
    return this.$.exportKey(arg_request);
  }
  attestKey(arg_request) {
    return this.$.attestKey(arg_request);
  }
  upgradeKey(arg_request) {
    return this.$.upgradeKey(arg_request);
  }
  deleteKey(arg_key_blob) {
    return this.$.deleteKey(arg_key_blob);
  }
  deleteAllKeys() {
    return this.$.deleteAllKeys();
  }
  begin(arg_request) {
    return this.$.begin(arg_request);
  }
  update(arg_request) {
    return this.$.update(arg_request);
  }
  finish(arg_request) {
    return this.$.finish(arg_request);
  }
  abort(arg_op_handle) {
    return this.$.abort(arg_op_handle);
  }
};

mojo.internal.bindings.arc.mojom.KeymasterServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeymasterServer', [
      { explicit: 0 },
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
    ]);
  }

  setSystemVersion(arg_os_version, arg_os_patchlevel) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec,
      null,
      [arg_os_version, arg_os_patchlevel],
      false);
  }

  addRngEntropy(arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterServer_AddRngEntropy_ResponseParamsSpec,
      [arg_data],
      false);
  }

  getKeyCharacteristics(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterServer_GetKeyCharacteristics_ResponseParamsSpec,
      [arg_request],
      false);
  }

  generateKey(arg_key_params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_GenerateKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterServer_GenerateKey_ResponseParamsSpec,
      [arg_key_params],
      false);
  }

  importKey(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_ImportKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterServer_ImportKey_ResponseParamsSpec,
      [arg_request],
      false);
  }

  exportKey(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_ExportKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterServer_ExportKey_ResponseParamsSpec,
      [arg_request],
      false);
  }

  attestKey(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_AttestKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterServer_AttestKey_ResponseParamsSpec,
      [arg_request],
      false);
  }

  upgradeKey(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterServer_UpgradeKey_ResponseParamsSpec,
      [arg_request],
      false);
  }

  deleteKey(arg_key_blob) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteKey_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteKey_ResponseParamsSpec,
      [arg_key_blob],
      false);
  }

  deleteAllKeys() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteAllKeys_ResponseParamsSpec,
      [],
      false);
  }

  begin(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_Begin_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterServer_Begin_ResponseParamsSpec,
      [arg_request],
      false);
  }

  update(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_Update_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterServer_Update_ResponseParamsSpec,
      [arg_request],
      false);
  }

  finish(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_Finish_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterServer_Finish_ResponseParamsSpec,
      [arg_request],
      false);
  }

  abort(arg_op_handle) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.arc.mojom.KeymasterServer_Abort_ParamsSpec,
      mojo.internal.bindings.arc.mojom.KeymasterServer_Abort_ResponseParamsSpec,
      [arg_op_handle],
      false);
  }

};

mojo.internal.bindings.arc.mojom.KeymasterServer.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.KeymasterServerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KeymasterServer',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.KeymasterServerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeymasterServer', [
      { explicit: 0 },
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
        
        // Try Method 0: SetSystemVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSystemVersion (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddRngEntropy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddRngEntropy (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetKeyCharacteristics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetKeyCharacteristics (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GenerateKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_GenerateKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateKey (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ImportKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_ImportKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImportKey (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ExportKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_ExportKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExportKey (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AttestKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_AttestKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttestKey (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UpgradeKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpgradeKey (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DeleteKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteKey (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: DeleteAllKeys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteAllKeys (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Begin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_Begin_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Begin (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_Update_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: Finish
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_Finish_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Finish (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: Abort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_Abort_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Abort (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_SetSystemVersion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSystemVersion');
          const result = this.impl.setSystemVersion(params.arg_os_version, params.arg_os_patchlevel);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_AddRngEntropy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addRngEntropy');
          const result = this.impl.addRngEntropy(params.arg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterServer_AddRngEntropy_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddRngEntropy FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_GetKeyCharacteristics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getKeyCharacteristics');
          const result = this.impl.getKeyCharacteristics(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterServer_GetKeyCharacteristics_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetKeyCharacteristics FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_GenerateKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateKey');
          const result = this.impl.generateKey(params.arg_key_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterServer_GenerateKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenerateKey FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_ImportKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.importKey');
          const result = this.impl.importKey(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterServer_ImportKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ImportKey FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_ExportKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exportKey');
          const result = this.impl.exportKey(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterServer_ExportKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ExportKey FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_AttestKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.attestKey');
          const result = this.impl.attestKey(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterServer_AttestKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AttestKey FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_UpgradeKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.upgradeKey');
          const result = this.impl.upgradeKey(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterServer_UpgradeKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpgradeKey FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteKey');
          const result = this.impl.deleteKey(params.arg_key_blob);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteKey FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteAllKeys_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteAllKeys');
          const result = this.impl.deleteAllKeys();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterServer_DeleteAllKeys_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteAllKeys FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_Begin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.begin');
          const result = this.impl.begin(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterServer_Begin_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Begin FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterServer_Update_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Update FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_Finish_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.finish');
          const result = this.impl.finish(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterServer_Finish_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Finish FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.KeymasterServer_Abort_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.abort');
          const result = this.impl.abort(params.arg_op_handle);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.KeymasterServer_Abort_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Abort FAILED:', e));
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

mojo.internal.bindings.arc.mojom.KeymasterServerReceiver = mojo.internal.bindings.arc.mojom.KeymasterServerReceiver;

mojo.internal.bindings.arc.mojom.KeymasterServerPtr = mojo.internal.bindings.arc.mojom.KeymasterServerRemote;
mojo.internal.bindings.arc.mojom.KeymasterServerRequest = mojo.internal.bindings.arc.mojom.KeymasterServerPendingReceiver;

