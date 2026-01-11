// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/crosapi/mojom/keystore_service.mojom
 // Module: crosapi.mojom

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
 

 mojo.internal.bindings.crosapi = mojo.internal.bindings.crosapi || {};
mojo.internal.bindings.crosapi.mojom = mojo.internal.bindings.crosapi.mojom || {};

mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.KeystoreAlgorithmNameSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.KeystoreKeyAttributeTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.KeystoreSigningSchemeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.KeyTagSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.KeystoreAlgorithmSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ChallengeAttestationOnlyKeystoreResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreBinaryResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.GetCertificatesResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreSelectClientCertificatesResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.GetKeyStoresResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.GetPublicKeyResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.GetKeyTagsResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DEPRECATED_GetPublicKeyResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DEPRECATED_GetKeyStoresResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DEPRECATED_GetCertificatesResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DEPRECATED_KeystoreStringResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreRsaParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreEcdsaParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.GetPublicKeySuccessResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService = {};
mojo.internal.bindings.crosapi.mojom.KeystoreService.$interfaceName = 'crosapi.mojom.KeystoreService';
mojo.internal.bindings.crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyStores_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_SelectClientCertificates_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_GetCertificates_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_AddCertificate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveCertificate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_GetPublicKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_GenerateKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_Sign_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_Sign_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyTags_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_AddKeyTags_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_SetAttributeForKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ResponseParamsSpec = { $: {} };

// Enum: KeystoreType
mojo.internal.bindings.crosapi.mojom.KeystoreType = {
  kUser: 0,
  kDevice: 1,
};

// Enum: KeystoreAlgorithmName
mojo.internal.bindings.crosapi.mojom.KeystoreAlgorithmName = {
  kUnknown: 0,
  kRsassaPkcs115: 1,
  kRsaOaep: 2,
  kEcdsa: 3,
};

// Enum: KeystoreKeyAttributeType
mojo.internal.bindings.crosapi.mojom.KeystoreKeyAttributeType = {
  kUnknown: 0,
  kPlatformKeysTag: 1,
};

// Enum: KeystoreSigningScheme
mojo.internal.bindings.crosapi.mojom.KeystoreSigningScheme = {
  kUnknown: 0,
  kRsassaPkcs1V15None: 1,
  kRsassaPkcs1V15Sha1: 2,
  kRsassaPkcs1V15Sha256: 3,
  kRsassaPkcs1V15Sha384: 4,
  kRsassaPkcs1V15Sha512: 5,
  kEcdsaSha1: 6,
  kEcdsaSha256: 7,
  kEcdsaSha384: 8,
  kEcdsaSha512: 9,
};

// Enum: KeyTag
mojo.internal.bindings.crosapi.mojom.KeyTag = {
  kNoTags: 0,
  kCorporate: 1,
};

// Union: KeystoreAlgorithm
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.KeystoreAlgorithmSpec, 'crosapi.mojom.KeystoreAlgorithm', {
      'arg_rsassa_pkcs115': {
        'ordinal': 0,
        'type': mojo.internal.bindings.crosapi.mojom.KeystoreRsaParamsSpec.$,
        'nullable': false,
      },
      'arg_rsa_oaep': {
        'ordinal': 1,
        'type': mojo.internal.bindings.crosapi.mojom.KeystoreRsaParamsSpec.$,
        'nullable': false,
      },
      'arg_ecdsa': {
        'ordinal': 2,
        'type': mojo.internal.bindings.crosapi.mojom.KeystoreEcdsaParamsSpec.$,
        'nullable': false,
      },
    });

// Union: ChallengeAttestationOnlyKeystoreResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ChallengeAttestationOnlyKeystoreResultSpec, 'crosapi.mojom.ChallengeAttestationOnlyKeystoreResult', {
      'arg_error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_challenge_response': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Union: KeystoreBinaryResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.KeystoreBinaryResultSpec, 'crosapi.mojom.KeystoreBinaryResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.crosapi.mojom.KeystoreErrorSpec.$,
        'nullable': false,
      },
      'arg_blob': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Union: GetCertificatesResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.GetCertificatesResultSpec, 'crosapi.mojom.GetCertificatesResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.crosapi.mojom.KeystoreErrorSpec.$,
        'nullable': false,
      },
      'arg_certificates': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false),
        'nullable': false,
      },
    });

// Union: KeystoreSelectClientCertificatesResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.KeystoreSelectClientCertificatesResultSpec, 'crosapi.mojom.KeystoreSelectClientCertificatesResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.crosapi.mojom.KeystoreErrorSpec.$,
        'nullable': false,
      },
      'arg_certificates': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false),
        'nullable': false,
      },
    });

// Union: GetKeyStoresResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.GetKeyStoresResultSpec, 'crosapi.mojom.GetKeyStoresResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.crosapi.mojom.KeystoreErrorSpec.$,
        'nullable': false,
      },
      'arg_key_stores': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, false),
        'nullable': false,
      },
    });

// Union: GetPublicKeyResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.GetPublicKeyResultSpec, 'crosapi.mojom.GetPublicKeyResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.crosapi.mojom.KeystoreErrorSpec.$,
        'nullable': false,
      },
      'arg_success_result': {
        'ordinal': 1,
        'type': mojo.internal.bindings.crosapi.mojom.GetPublicKeySuccessResultSpec.$,
        'nullable': false,
      },
    });

// Union: GetKeyTagsResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.GetKeyTagsResultSpec, 'crosapi.mojom.GetKeyTagsResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.crosapi.mojom.KeystoreErrorSpec.$,
        'nullable': false,
      },
      'arg_tags': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Union: DEPRECATED_ExtensionKeystoreBinaryResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResultSpec, 'crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResult', {
      'arg_error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_blob': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Union: DEPRECATED_GetPublicKeyResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.DEPRECATED_GetPublicKeyResultSpec, 'crosapi.mojom.DEPRECATED_GetPublicKeyResult', {
      'arg_error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_success_result': {
        'ordinal': 1,
        'type': mojo.internal.bindings.crosapi.mojom.GetPublicKeySuccessResultSpec.$,
        'nullable': false,
      },
    });

// Union: DEPRECATED_GetKeyStoresResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.DEPRECATED_GetKeyStoresResultSpec, 'crosapi.mojom.DEPRECATED_GetKeyStoresResult', {
      'arg_error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_key_stores': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, false),
        'nullable': false,
      },
    });

// Union: DEPRECATED_GetCertificatesResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.DEPRECATED_GetCertificatesResultSpec, 'crosapi.mojom.DEPRECATED_GetCertificatesResult', {
      'arg_error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_certificates': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false),
        'nullable': false,
      },
    });

// Union: DEPRECATED_KeystoreStringResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.DEPRECATED_KeystoreStringResultSpec, 'crosapi.mojom.DEPRECATED_KeystoreStringResult', {
      'arg_error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_challenge_response': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: KeystoreRsaParams
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreRsaParamsSpec, 'crosapi.mojom.KeystoreRsaParams', [
      mojo.internal.StructField('arg_public_exponent', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_modulus_length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sw_backed', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KeystoreEcdsaParams
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreEcdsaParamsSpec, 'crosapi.mojom.KeystoreEcdsaParams', [
      mojo.internal.StructField('arg_named_curve', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GetPublicKeySuccessResult
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.GetPublicKeySuccessResultSpec, 'crosapi.mojom.GetPublicKeySuccessResult', [
      mojo.internal.StructField('arg_public_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_algorithm_properties', 8, 0, mojo.internal.bindings.crosapi.mojom.KeystoreAlgorithmSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: KeystoreService
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec, 'crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_challenge', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_migrate', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_algorithm', 24, 0, mojo.internal.bindings.crosapi.mojom.KeystoreAlgorithmNameSpec.$, null, false, 17, undefined),
    ],
    [[0, 32], [17, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.ChallengeAttestationOnlyKeystoreResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec, 'crosapi.mojom.KeystoreService_GetKeyStores_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyStores_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_GetKeyStores_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.GetKeyStoresResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec, 'crosapi.mojom.KeystoreService_SelectClientCertificates_Params', [
      mojo.internal.StructField('arg_certificate_authorities', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_SelectClientCertificates_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_SelectClientCertificates_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreSelectClientCertificatesResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec, 'crosapi.mojom.KeystoreService_GetCertificates_Params', [
      mojo.internal.StructField('arg_keystore', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_GetCertificates_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_GetCertificates_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.GetCertificatesResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec, 'crosapi.mojom.KeystoreService_AddCertificate_Params', [
      mojo.internal.StructField('arg_keystore', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_certificate', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_AddCertificate_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_AddCertificate_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec, 'crosapi.mojom.KeystoreService_RemoveCertificate_Params', [
      mojo.internal.StructField('arg_keystore', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_certificate', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveCertificate_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_RemoveCertificate_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec, 'crosapi.mojom.KeystoreService_GetPublicKey_Params', [
      mojo.internal.StructField('arg_certificate', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_algorithm_name', 8, 0, mojo.internal.bindings.crosapi.mojom.KeystoreAlgorithmNameSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_GetPublicKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_GetPublicKey_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.GetPublicKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec, 'crosapi.mojom.KeystoreService_GenerateKey_Params', [
      mojo.internal.StructField('arg_keystore', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_algorithm', 8, 0, mojo.internal.bindings.crosapi.mojom.KeystoreAlgorithmSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_GenerateKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_GenerateKey_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreBinaryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec, 'crosapi.mojom.KeystoreService_RemoveKey_Params', [
      mojo.internal.StructField('arg_keystore', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_public_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_RemoveKey_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_Sign_ParamsSpec, 'crosapi.mojom.KeystoreService_Sign_Params', [
      mojo.internal.StructField('arg_keystore', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_public_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_scheme', 16, 0, mojo.internal.bindings.crosapi.mojom.KeystoreSigningSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_keystore_provided', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_Sign_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_Sign_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreBinaryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec, 'crosapi.mojom.KeystoreService_GetKeyTags_Params', [
      mojo.internal.StructField('arg_public_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyTags_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_GetKeyTags_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.GetKeyTagsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec, 'crosapi.mojom.KeystoreService_AddKeyTags_Params', [
      mojo.internal.StructField('arg_public_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tags', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_AddKeyTags_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_AddKeyTags_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec, 'crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_Params', [
      mojo.internal.StructField('arg_public_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ResponseParams', [
      mojo.internal.StructField('arg_is_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec, 'crosapi.mojom.KeystoreService_SetAttributeForKey_Params', [
      mojo.internal.StructField('arg_keystore', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_public_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_attribute_type', 16, 0, mojo.internal.bindings.crosapi.mojom.KeystoreKeyAttributeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_attribute_value', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_SetAttributeForKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_SetAttributeForKey_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_Params', [
      mojo.internal.StructField('arg_keystore', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_algorithm', 8, 0, mojo.internal.bindings.crosapi.mojom.KeystoreAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_extension_id', 16, 0, mojo.internal.String, null, true, 5, undefined),
    ],
    [[0, 24], [5, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_Params', [
      mojo.internal.StructField('arg_keystore', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_public_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_scheme', 16, 0, mojo.internal.bindings.crosapi.mojom.KeystoreSigningSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_extension_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_Params', [
      mojo.internal.StructField('arg_certificate', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_algorithm_name', 8, 0, mojo.internal.bindings.crosapi.mojom.KeystoreAlgorithmNameSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.DEPRECATED_GetPublicKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.DEPRECATED_GetKeyStoresResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_Params', [
      mojo.internal.StructField('arg_keystore', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.DEPRECATED_GetCertificatesResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_Params', [
      mojo.internal.StructField('arg_keystore', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_certificate', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_Params', [
      mojo.internal.StructField('arg_keystore', 0, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_certificate', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_Params', [
      mojo.internal.StructField('arg_challenge', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_migrate', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.DEPRECATED_KeystoreStringResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.KeystoreServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.KeystoreServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.KeystoreService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.KeystoreServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.KeystoreServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  challengeAttestationOnlyKeystore(arg_type, arg_challenge, arg_migrate, arg_algorithm) {
    return this.$.challengeAttestationOnlyKeystore(arg_type, arg_challenge, arg_migrate, arg_algorithm);
  }
  getKeyStores() {
    return this.$.getKeyStores();
  }
  selectClientCertificates(arg_certificate_authorities) {
    return this.$.selectClientCertificates(arg_certificate_authorities);
  }
  getCertificates(arg_keystore) {
    return this.$.getCertificates(arg_keystore);
  }
  addCertificate(arg_keystore, arg_certificate) {
    return this.$.addCertificate(arg_keystore, arg_certificate);
  }
  removeCertificate(arg_keystore, arg_certificate) {
    return this.$.removeCertificate(arg_keystore, arg_certificate);
  }
  getPublicKey(arg_certificate, arg_algorithm_name) {
    return this.$.getPublicKey(arg_certificate, arg_algorithm_name);
  }
  generateKey(arg_keystore, arg_algorithm) {
    return this.$.generateKey(arg_keystore, arg_algorithm);
  }
  removeKey(arg_keystore, arg_public_key) {
    return this.$.removeKey(arg_keystore, arg_public_key);
  }
  sign(arg_is_keystore_provided, arg_keystore, arg_public_key, arg_scheme, arg_data) {
    return this.$.sign(arg_is_keystore_provided, arg_keystore, arg_public_key, arg_scheme, arg_data);
  }
  getKeyTags(arg_public_key) {
    return this.$.getKeyTags(arg_public_key);
  }
  addKeyTags(arg_public_key, arg_tags) {
    return this.$.addKeyTags(arg_public_key, arg_tags);
  }
  canUserGrantPermissionForKey(arg_public_key) {
    return this.$.canUserGrantPermissionForKey(arg_public_key);
  }
  setAttributeForKey(arg_keystore, arg_public_key, arg_attribute_type, arg_attribute_value) {
    return this.$.setAttributeForKey(arg_keystore, arg_public_key, arg_attribute_type, arg_attribute_value);
  }
  dEPRECATED_ExtensionGenerateKey(arg_keystore, arg_algorithm, arg_extension_id) {
    return this.$.dEPRECATED_ExtensionGenerateKey(arg_keystore, arg_algorithm, arg_extension_id);
  }
  dEPRECATED_ExtensionSign(arg_keystore, arg_public_key, arg_scheme, arg_data, arg_extension_id) {
    return this.$.dEPRECATED_ExtensionSign(arg_keystore, arg_public_key, arg_scheme, arg_data, arg_extension_id);
  }
  dEPRECATED_GetPublicKey(arg_certificate, arg_algorithm_name) {
    return this.$.dEPRECATED_GetPublicKey(arg_certificate, arg_algorithm_name);
  }
  dEPRECATED_GetKeyStores() {
    return this.$.dEPRECATED_GetKeyStores();
  }
  dEPRECATED_GetCertificates(arg_keystore) {
    return this.$.dEPRECATED_GetCertificates(arg_keystore);
  }
  dEPRECATED_AddCertificate(arg_keystore, arg_certificate) {
    return this.$.dEPRECATED_AddCertificate(arg_keystore, arg_certificate);
  }
  dEPRECATED_RemoveCertificate(arg_keystore, arg_certificate) {
    return this.$.dEPRECATED_RemoveCertificate(arg_keystore, arg_certificate);
  }
  dEPRECATED_ChallengeAttestationOnlyKeystore(arg_challenge, arg_type, arg_migrate) {
    return this.$.dEPRECATED_ChallengeAttestationOnlyKeystore(arg_challenge, arg_type, arg_migrate);
  }
};

mojo.internal.bindings.crosapi.mojom.KeystoreServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeystoreService', [
      { explicit: 20 },
      { explicit: 16 },
      { explicit: 11 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 15 },
      { explicit: 8 },
      { explicit: 10 },
      { explicit: 9 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 21 },
      { explicit: 3 },
      { explicit: 7 },
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 0 },
    ]);
  }

  challengeAttestationOnlyKeystore(arg_type, arg_challenge, arg_migrate, arg_algorithm) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ResponseParamsSpec,
      [arg_type, arg_challenge, arg_migrate, arg_algorithm],
      false);
  }

  getKeyStores() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyStores_ResponseParamsSpec,
      [],
      false);
  }

  selectClientCertificates(arg_certificate_authorities) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_SelectClientCertificates_ResponseParamsSpec,
      [arg_certificate_authorities],
      false);
  }

  getCertificates(arg_keystore) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_GetCertificates_ResponseParamsSpec,
      [arg_keystore],
      false);
  }

  addCertificate(arg_keystore, arg_certificate) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_AddCertificate_ResponseParamsSpec,
      [arg_keystore, arg_certificate],
      false);
  }

  removeCertificate(arg_keystore, arg_certificate) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveCertificate_ResponseParamsSpec,
      [arg_keystore, arg_certificate],
      false);
  }

  getPublicKey(arg_certificate, arg_algorithm_name) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_GetPublicKey_ResponseParamsSpec,
      [arg_certificate, arg_algorithm_name],
      false);
  }

  generateKey(arg_keystore, arg_algorithm) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_GenerateKey_ResponseParamsSpec,
      [arg_keystore, arg_algorithm],
      false);
  }

  removeKey(arg_keystore, arg_public_key) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveKey_ResponseParamsSpec,
      [arg_keystore, arg_public_key],
      false);
  }

  sign(arg_is_keystore_provided, arg_keystore, arg_public_key, arg_scheme, arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_Sign_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_Sign_ResponseParamsSpec,
      [arg_is_keystore_provided, arg_keystore, arg_public_key, arg_scheme, arg_data],
      false);
  }

  getKeyTags(arg_public_key) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyTags_ResponseParamsSpec,
      [arg_public_key],
      false);
  }

  addKeyTags(arg_public_key, arg_tags) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_AddKeyTags_ResponseParamsSpec,
      [arg_public_key, arg_tags],
      false);
  }

  canUserGrantPermissionForKey(arg_public_key) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ResponseParamsSpec,
      [arg_public_key],
      false);
  }

  setAttributeForKey(arg_keystore, arg_public_key, arg_attribute_type, arg_attribute_value) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_SetAttributeForKey_ResponseParamsSpec,
      [arg_keystore, arg_public_key, arg_attribute_type, arg_attribute_value],
      false);
  }

  dEPRECATED_ExtensionGenerateKey(arg_keystore, arg_algorithm, arg_extension_id) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ResponseParamsSpec,
      [arg_keystore, arg_algorithm, arg_extension_id],
      false);
  }

  dEPRECATED_ExtensionSign(arg_keystore, arg_public_key, arg_scheme, arg_data, arg_extension_id) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ResponseParamsSpec,
      [arg_keystore, arg_public_key, arg_scheme, arg_data, arg_extension_id],
      false);
  }

  dEPRECATED_GetPublicKey(arg_certificate, arg_algorithm_name) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ResponseParamsSpec,
      [arg_certificate, arg_algorithm_name],
      false);
  }

  dEPRECATED_GetKeyStores() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ResponseParamsSpec,
      [],
      false);
  }

  dEPRECATED_GetCertificates(arg_keystore) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ResponseParamsSpec,
      [arg_keystore],
      false);
  }

  dEPRECATED_AddCertificate(arg_keystore, arg_certificate) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ResponseParamsSpec,
      [arg_keystore, arg_certificate],
      false);
  }

  dEPRECATED_RemoveCertificate(arg_keystore, arg_certificate) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ResponseParamsSpec,
      [arg_keystore, arg_certificate],
      false);
  }

  dEPRECATED_ChallengeAttestationOnlyKeystore(arg_challenge, arg_type, arg_migrate) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ResponseParamsSpec,
      [arg_challenge, arg_type, arg_migrate],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.KeystoreService.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.KeystoreServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.KeystoreService',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.KeystoreServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeystoreService', [
      { explicit: 20 },
      { explicit: 16 },
      { explicit: 11 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 15 },
      { explicit: 8 },
      { explicit: 10 },
      { explicit: 9 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 21 },
      { explicit: 3 },
      { explicit: 7 },
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 5 },
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
        
        // Try Method 0: ChallengeAttestationOnlyKeystore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ChallengeAttestationOnlyKeystore (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetKeyStores
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetKeyStores (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SelectClientCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectClientCertificates (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCertificates (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AddCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddCertificate (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RemoveCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveCertificate (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetPublicKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPublicKey (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GenerateKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateKey (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RemoveKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveKey (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Sign
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_Sign_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Sign (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetKeyTags
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetKeyTags (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: AddKeyTags
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddKeyTags (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: CanUserGrantPermissionForKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanUserGrantPermissionForKey (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetAttributeForKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAttributeForKey (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: DEPRECATED_ExtensionGenerateKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_ExtensionGenerateKey (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: DEPRECATED_ExtensionSign
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_ExtensionSign (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: DEPRECATED_GetPublicKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_GetPublicKey (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: DEPRECATED_GetKeyStores
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_GetKeyStores (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: DEPRECATED_GetCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_GetCertificates (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: DEPRECATED_AddCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_AddCertificate (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: DEPRECATED_RemoveCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_RemoveCertificate (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: DEPRECATED_ChallengeAttestationOnlyKeystore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_ChallengeAttestationOnlyKeystore (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.challengeAttestationOnlyKeystore');
          const result = this.impl.challengeAttestationOnlyKeystore(params.arg_type, params.arg_challenge, params.arg_migrate, params.arg_algorithm);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ChallengeAttestationOnlyKeystore FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getKeyStores');
          const result = this.impl.getKeyStores();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyStores_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetKeyStores FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectClientCertificates');
          const result = this.impl.selectClientCertificates(params.arg_certificate_authorities);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_SelectClientCertificates_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectClientCertificates FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCertificates');
          const result = this.impl.getCertificates(params.arg_keystore);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_GetCertificates_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCertificates FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addCertificate');
          const result = this.impl.addCertificate(params.arg_keystore, params.arg_certificate);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_AddCertificate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddCertificate FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeCertificate');
          const result = this.impl.removeCertificate(params.arg_keystore, params.arg_certificate);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveCertificate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoveCertificate FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPublicKey');
          const result = this.impl.getPublicKey(params.arg_certificate, params.arg_algorithm_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_GetPublicKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPublicKey FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateKey');
          const result = this.impl.generateKey(params.arg_keystore, params.arg_algorithm);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_GenerateKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GenerateKey FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeKey');
          const result = this.impl.removeKey(params.arg_keystore, params.arg_public_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_RemoveKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoveKey FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_Sign_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sign');
          const result = this.impl.sign(params.arg_is_keystore_provided, params.arg_keystore, params.arg_public_key, params.arg_scheme, params.arg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_Sign_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Sign FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getKeyTags');
          const result = this.impl.getKeyTags(params.arg_public_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_GetKeyTags_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetKeyTags FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addKeyTags');
          const result = this.impl.addKeyTags(params.arg_public_key, params.arg_tags);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_AddKeyTags_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddKeyTags FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.canUserGrantPermissionForKey');
          const result = this.impl.canUserGrantPermissionForKey(params.arg_public_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CanUserGrantPermissionForKey FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAttributeForKey');
          const result = this.impl.setAttributeForKey(params.arg_keystore, params.arg_public_key, params.arg_attribute_type, params.arg_attribute_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_SetAttributeForKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetAttributeForKey FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_ExtensionGenerateKey');
          const result = this.impl.dEPRECATED_ExtensionGenerateKey(params.arg_keystore, params.arg_algorithm, params.arg_extension_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_ExtensionGenerateKey FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_ExtensionSign');
          const result = this.impl.dEPRECATED_ExtensionSign(params.arg_keystore, params.arg_public_key, params.arg_scheme, params.arg_data, params.arg_extension_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_ExtensionSign FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_GetPublicKey');
          const result = this.impl.dEPRECATED_GetPublicKey(params.arg_certificate, params.arg_algorithm_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_GetPublicKey FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_GetKeyStores');
          const result = this.impl.dEPRECATED_GetKeyStores();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_GetKeyStores FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_GetCertificates');
          const result = this.impl.dEPRECATED_GetCertificates(params.arg_keystore);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_GetCertificates FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_AddCertificate');
          const result = this.impl.dEPRECATED_AddCertificate(params.arg_keystore, params.arg_certificate);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_AddCertificate FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_RemoveCertificate');
          const result = this.impl.dEPRECATED_RemoveCertificate(params.arg_keystore, params.arg_certificate);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_RemoveCertificate FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_ChallengeAttestationOnlyKeystore');
          const result = this.impl.dEPRECATED_ChallengeAttestationOnlyKeystore(params.arg_challenge, params.arg_type, params.arg_migrate);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DEPRECATED_ChallengeAttestationOnlyKeystore FAILED:', e));
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

mojo.internal.bindings.crosapi.mojom.KeystoreServiceReceiver = mojo.internal.bindings.crosapi.mojom.KeystoreServiceReceiver;

mojo.internal.bindings.crosapi.mojom.KeystoreServicePtr = mojo.internal.bindings.crosapi.mojom.KeystoreServiceRemote;
mojo.internal.bindings.crosapi.mojom.KeystoreServiceRequest = mojo.internal.bindings.crosapi.mojom.KeystoreServicePendingReceiver;

