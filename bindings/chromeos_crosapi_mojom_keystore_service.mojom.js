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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.KeystoreTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.KeystoreAlgorithmNameSpec = { $: mojo.internal.Enum() };
crosapi.mojom.KeystoreKeyAttributeTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.KeystoreSigningSchemeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.KeyTagSpec = { $: mojo.internal.Enum() };
crosapi.mojom.KeystoreAlgorithmSpec = { $: {} };
crosapi.mojom.ChallengeAttestationOnlyKeystoreResultSpec = { $: {} };
crosapi.mojom.KeystoreBinaryResultSpec = { $: {} };
crosapi.mojom.GetCertificatesResultSpec = { $: {} };
crosapi.mojom.KeystoreSelectClientCertificatesResultSpec = { $: {} };
crosapi.mojom.GetKeyStoresResultSpec = { $: {} };
crosapi.mojom.GetPublicKeyResultSpec = { $: {} };
crosapi.mojom.GetKeyTagsResultSpec = { $: {} };
crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResultSpec = { $: {} };
crosapi.mojom.DEPRECATED_GetPublicKeyResultSpec = { $: {} };
crosapi.mojom.DEPRECATED_GetKeyStoresResultSpec = { $: {} };
crosapi.mojom.DEPRECATED_GetCertificatesResultSpec = { $: {} };
crosapi.mojom.DEPRECATED_KeystoreStringResultSpec = { $: {} };
crosapi.mojom.KeystoreRsaParamsSpec = { $: {} };
crosapi.mojom.KeystoreEcdsaParamsSpec = { $: {} };
crosapi.mojom.GetPublicKeySuccessResultSpec = { $: {} };
crosapi.mojom.KeystoreService = {};
crosapi.mojom.KeystoreService.$interfaceName = 'crosapi.mojom.KeystoreService';
crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_GetKeyStores_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_SelectClientCertificates_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_GetCertificates_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_AddCertificate_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_RemoveCertificate_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_GetPublicKey_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_GenerateKey_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_RemoveKey_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_Sign_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_Sign_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_GetKeyTags_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_AddKeyTags_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_SetAttributeForKey_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ResponseParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec = { $: {} };
crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ResponseParamsSpec = { $: {} };

// Enum: KeystoreType
crosapi.mojom.KeystoreType = {
  kUser: 0,
  kDevice: 1,
};

// Enum: KeystoreAlgorithmName
crosapi.mojom.KeystoreAlgorithmName = {
  kUnknown: 0,
  kRsassaPkcs115: 1,
  kRsaOaep: 2,
  kEcdsa: 3,
};

// Enum: KeystoreKeyAttributeType
crosapi.mojom.KeystoreKeyAttributeType = {
  kUnknown: 0,
  kPlatformKeysTag: 1,
};

// Enum: KeystoreSigningScheme
crosapi.mojom.KeystoreSigningScheme = {
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
crosapi.mojom.KeyTag = {
  kNoTags: 0,
  kCorporate: 1,
};

// Union: KeystoreAlgorithm
mojo.internal.Union(
    crosapi.mojom.KeystoreAlgorithmSpec, 'crosapi.mojom.KeystoreAlgorithm', {
      'rsassa_pkcs115': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreRsaParamsSpec.$,
        'nullable': false,
      },
      'rsa_oaep': {
        'ordinal': 1,
        'type': crosapi.mojom.KeystoreRsaParamsSpec.$,
        'nullable': false,
      },
      'ecdsa': {
        'ordinal': 2,
        'type': crosapi.mojom.KeystoreEcdsaParamsSpec.$,
        'nullable': false,
      },
    });

// Union: ChallengeAttestationOnlyKeystoreResult
mojo.internal.Union(
    crosapi.mojom.ChallengeAttestationOnlyKeystoreResultSpec, 'crosapi.mojom.ChallengeAttestationOnlyKeystoreResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'challenge_response': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Union: KeystoreBinaryResult
mojo.internal.Union(
    crosapi.mojom.KeystoreBinaryResultSpec, 'crosapi.mojom.KeystoreBinaryResult', {
      'error': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreErrorSpec.$,
        'nullable': false,
      },
      'blob': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Union: GetCertificatesResult
mojo.internal.Union(
    crosapi.mojom.GetCertificatesResultSpec, 'crosapi.mojom.GetCertificatesResult', {
      'error': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreErrorSpec.$,
        'nullable': false,
      },
      'certificates': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false),
        'nullable': false,
      },
    });

// Union: KeystoreSelectClientCertificatesResult
mojo.internal.Union(
    crosapi.mojom.KeystoreSelectClientCertificatesResultSpec, 'crosapi.mojom.KeystoreSelectClientCertificatesResult', {
      'error': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreErrorSpec.$,
        'nullable': false,
      },
      'certificates': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false),
        'nullable': false,
      },
    });

// Union: GetKeyStoresResult
mojo.internal.Union(
    crosapi.mojom.GetKeyStoresResultSpec, 'crosapi.mojom.GetKeyStoresResult', {
      'error': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreErrorSpec.$,
        'nullable': false,
      },
      'key_stores': {
        'ordinal': 1,
        'type': mojo.internal.Array(crosapi.mojom.KeystoreTypeSpec.$, false),
        'nullable': false,
      },
    });

// Union: GetPublicKeyResult
mojo.internal.Union(
    crosapi.mojom.GetPublicKeyResultSpec, 'crosapi.mojom.GetPublicKeyResult', {
      'error': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreErrorSpec.$,
        'nullable': false,
      },
      'success_result': {
        'ordinal': 1,
        'type': crosapi.mojom.GetPublicKeySuccessResultSpec.$,
        'nullable': false,
      },
    });

// Union: GetKeyTagsResult
mojo.internal.Union(
    crosapi.mojom.GetKeyTagsResultSpec, 'crosapi.mojom.GetKeyTagsResult', {
      'error': {
        'ordinal': 0,
        'type': crosapi.mojom.KeystoreErrorSpec.$,
        'nullable': false,
      },
      'tags': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Union: DEPRECATED_ExtensionKeystoreBinaryResult
mojo.internal.Union(
    crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResultSpec, 'crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'blob': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Union: DEPRECATED_GetPublicKeyResult
mojo.internal.Union(
    crosapi.mojom.DEPRECATED_GetPublicKeyResultSpec, 'crosapi.mojom.DEPRECATED_GetPublicKeyResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'success_result': {
        'ordinal': 1,
        'type': crosapi.mojom.GetPublicKeySuccessResultSpec.$,
        'nullable': false,
      },
    });

// Union: DEPRECATED_GetKeyStoresResult
mojo.internal.Union(
    crosapi.mojom.DEPRECATED_GetKeyStoresResultSpec, 'crosapi.mojom.DEPRECATED_GetKeyStoresResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'key_stores': {
        'ordinal': 1,
        'type': mojo.internal.Array(crosapi.mojom.KeystoreTypeSpec.$, false),
        'nullable': false,
      },
    });

// Union: DEPRECATED_GetCertificatesResult
mojo.internal.Union(
    crosapi.mojom.DEPRECATED_GetCertificatesResultSpec, 'crosapi.mojom.DEPRECATED_GetCertificatesResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'certificates': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false),
        'nullable': false,
      },
    });

// Union: DEPRECATED_KeystoreStringResult
mojo.internal.Union(
    crosapi.mojom.DEPRECATED_KeystoreStringResultSpec, 'crosapi.mojom.DEPRECATED_KeystoreStringResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'challenge_response': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: KeystoreRsaParams
mojo.internal.Struct(
    crosapi.mojom.KeystoreRsaParamsSpec, 'crosapi.mojom.KeystoreRsaParams', [
      mojo.internal.StructField('public_exponent', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('modulus_length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sw_backed', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KeystoreEcdsaParams
mojo.internal.Struct(
    crosapi.mojom.KeystoreEcdsaParamsSpec, 'crosapi.mojom.KeystoreEcdsaParams', [
      mojo.internal.StructField('named_curve', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GetPublicKeySuccessResult
mojo.internal.Struct(
    crosapi.mojom.GetPublicKeySuccessResultSpec, 'crosapi.mojom.GetPublicKeySuccessResult', [
      mojo.internal.StructField('public_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm_properties', 8, 0, crosapi.mojom.KeystoreAlgorithmSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: KeystoreService
mojo.internal.Struct(
    crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec, 'crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_Params', [
      mojo.internal.StructField('type', 0, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('challenge', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('migrate', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('algorithm', 24, 0, crosapi.mojom.KeystoreAlgorithmNameSpec.$, null, false, 17, undefined),
    ],
    [[0, 32], [17, 40]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.ChallengeAttestationOnlyKeystoreResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec, 'crosapi.mojom.KeystoreService_GetKeyStores_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_GetKeyStores_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_GetKeyStores_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.GetKeyStoresResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec, 'crosapi.mojom.KeystoreService_SelectClientCertificates_Params', [
      mojo.internal.StructField('certificate_authorities', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_SelectClientCertificates_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_SelectClientCertificates_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.KeystoreSelectClientCertificatesResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec, 'crosapi.mojom.KeystoreService_GetCertificates_Params', [
      mojo.internal.StructField('keystore', 0, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_GetCertificates_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_GetCertificates_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.GetCertificatesResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec, 'crosapi.mojom.KeystoreService_AddCertificate_Params', [
      mojo.internal.StructField('keystore', 0, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('certificate', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_AddCertificate_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_AddCertificate_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, crosapi.mojom.KeystoreErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec, 'crosapi.mojom.KeystoreService_RemoveCertificate_Params', [
      mojo.internal.StructField('keystore', 0, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('certificate', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_RemoveCertificate_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_RemoveCertificate_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, crosapi.mojom.KeystoreErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec, 'crosapi.mojom.KeystoreService_GetPublicKey_Params', [
      mojo.internal.StructField('certificate', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm_name', 8, 0, crosapi.mojom.KeystoreAlgorithmNameSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_GetPublicKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_GetPublicKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.GetPublicKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec, 'crosapi.mojom.KeystoreService_GenerateKey_Params', [
      mojo.internal.StructField('keystore', 0, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 8, 0, crosapi.mojom.KeystoreAlgorithmSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_GenerateKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_GenerateKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.KeystoreBinaryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec, 'crosapi.mojom.KeystoreService_RemoveKey_Params', [
      mojo.internal.StructField('keystore', 0, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('public_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_RemoveKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_RemoveKey_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, crosapi.mojom.KeystoreErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_Sign_ParamsSpec, 'crosapi.mojom.KeystoreService_Sign_Params', [
      mojo.internal.StructField('keystore', 0, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('public_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('scheme', 16, 0, crosapi.mojom.KeystoreSigningSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('is_keystore_provided', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_Sign_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_Sign_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.KeystoreBinaryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec, 'crosapi.mojom.KeystoreService_GetKeyTags_Params', [
      mojo.internal.StructField('public_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_GetKeyTags_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_GetKeyTags_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.GetKeyTagsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec, 'crosapi.mojom.KeystoreService_AddKeyTags_Params', [
      mojo.internal.StructField('public_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('tags', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_AddKeyTags_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_AddKeyTags_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, crosapi.mojom.KeystoreErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec, 'crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_Params', [
      mojo.internal.StructField('public_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ResponseParams', [
      mojo.internal.StructField('is_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec, 'crosapi.mojom.KeystoreService_SetAttributeForKey_Params', [
      mojo.internal.StructField('keystore', 0, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('public_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('attribute_type', 16, 0, crosapi.mojom.KeystoreKeyAttributeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attribute_value', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_SetAttributeForKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_SetAttributeForKey_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, crosapi.mojom.KeystoreErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_Params', [
      mojo.internal.StructField('keystore', 0, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 8, 0, crosapi.mojom.KeystoreAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extension_id', 16, 0, mojo.internal.String, null, true, 5, undefined),
    ],
    [[0, 24], [5, 32]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_Params', [
      mojo.internal.StructField('keystore', 0, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('public_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('scheme', 16, 0, crosapi.mojom.KeystoreSigningSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('extension_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.DEPRECATED_ExtensionKeystoreBinaryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_Params', [
      mojo.internal.StructField('certificate', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm_name', 8, 0, crosapi.mojom.KeystoreAlgorithmNameSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.DEPRECATED_GetPublicKeyResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.DEPRECATED_GetKeyStoresResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_Params', [
      mojo.internal.StructField('keystore', 0, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.DEPRECATED_GetCertificatesResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_Params', [
      mojo.internal.StructField('keystore', 0, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('certificate', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_Params', [
      mojo.internal.StructField('keystore', 0, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('certificate', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_Params', [
      mojo.internal.StructField('challenge', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, crosapi.mojom.KeystoreTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('migrate', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ResponseParamsSpec, 'crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.DEPRECATED_KeystoreStringResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.KeystoreServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.KeystoreServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.KeystoreService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.KeystoreServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.KeystoreServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.KeystoreServiceRemoteCallHandler = class {
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

  challengeAttestationOnlyKeystore(type, challenge, migrate, algorithm) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec,
      crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ResponseParamsSpec,
      [type, challenge, migrate, algorithm],
      false);
  }

  getKeyStores() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec,
      crosapi.mojom.KeystoreService_GetKeyStores_ResponseParamsSpec,
      [],
      false);
  }

  selectClientCertificates(certificate_authorities) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec,
      crosapi.mojom.KeystoreService_SelectClientCertificates_ResponseParamsSpec,
      [certificate_authorities],
      false);
  }

  getCertificates(keystore) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec,
      crosapi.mojom.KeystoreService_GetCertificates_ResponseParamsSpec,
      [keystore],
      false);
  }

  addCertificate(keystore, certificate) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec,
      crosapi.mojom.KeystoreService_AddCertificate_ResponseParamsSpec,
      [keystore, certificate],
      false);
  }

  removeCertificate(keystore, certificate) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec,
      crosapi.mojom.KeystoreService_RemoveCertificate_ResponseParamsSpec,
      [keystore, certificate],
      false);
  }

  getPublicKey(certificate, algorithm_name) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec,
      crosapi.mojom.KeystoreService_GetPublicKey_ResponseParamsSpec,
      [certificate, algorithm_name],
      false);
  }

  generateKey(keystore, algorithm) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec,
      crosapi.mojom.KeystoreService_GenerateKey_ResponseParamsSpec,
      [keystore, algorithm],
      false);
  }

  removeKey(keystore, public_key) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec,
      crosapi.mojom.KeystoreService_RemoveKey_ResponseParamsSpec,
      [keystore, public_key],
      false);
  }

  sign(is_keystore_provided, keystore, public_key, scheme, data) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      crosapi.mojom.KeystoreService_Sign_ParamsSpec,
      crosapi.mojom.KeystoreService_Sign_ResponseParamsSpec,
      [is_keystore_provided, keystore, public_key, scheme, data],
      false);
  }

  getKeyTags(public_key) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec,
      crosapi.mojom.KeystoreService_GetKeyTags_ResponseParamsSpec,
      [public_key],
      false);
  }

  addKeyTags(public_key, tags) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec,
      crosapi.mojom.KeystoreService_AddKeyTags_ResponseParamsSpec,
      [public_key, tags],
      false);
  }

  canUserGrantPermissionForKey(public_key) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec,
      crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ResponseParamsSpec,
      [public_key],
      false);
  }

  setAttributeForKey(keystore, public_key, attribute_type, attribute_value) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec,
      crosapi.mojom.KeystoreService_SetAttributeForKey_ResponseParamsSpec,
      [keystore, public_key, attribute_type, attribute_value],
      false);
  }

  dEPRECATED_ExtensionGenerateKey(keystore, algorithm, extension_id) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ResponseParamsSpec,
      [keystore, algorithm, extension_id],
      false);
  }

  dEPRECATED_ExtensionSign(keystore, public_key, scheme, data, extension_id) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ResponseParamsSpec,
      [keystore, public_key, scheme, data, extension_id],
      false);
  }

  dEPRECATED_GetPublicKey(certificate, algorithm_name) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ResponseParamsSpec,
      [certificate, algorithm_name],
      false);
  }

  dEPRECATED_GetKeyStores() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ResponseParamsSpec,
      [],
      false);
  }

  dEPRECATED_GetCertificates(keystore) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ResponseParamsSpec,
      [keystore],
      false);
  }

  dEPRECATED_AddCertificate(keystore, certificate) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ResponseParamsSpec,
      [keystore, certificate],
      false);
  }

  dEPRECATED_RemoveCertificate(keystore, certificate) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ResponseParamsSpec,
      [keystore, certificate],
      false);
  }

  dEPRECATED_ChallengeAttestationOnlyKeystore(challenge, type, migrate) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ResponseParamsSpec,
      [challenge, type, migrate],
      false);
  }

};

crosapi.mojom.KeystoreService.getRemote = function() {
  let remote = new crosapi.mojom.KeystoreServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.KeystoreService',
    'context');
  return remote.$;
};

crosapi.mojom.KeystoreServiceReceiver = class {
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_Sign_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec);
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
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.challengeAttestationOnlyKeystore');
          const result = this.impl.challengeAttestationOnlyKeystore(params.type, params.challenge, params.migrate, params.algorithm);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getKeyStores');
          const result = this.impl.getKeyStores();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_GetKeyStores_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.selectClientCertificates');
          const result = this.impl.selectClientCertificates(params.certificate_authorities);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_SelectClientCertificates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getCertificates');
          const result = this.impl.getCertificates(params.keystore);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_GetCertificates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addCertificate');
          const result = this.impl.addCertificate(params.keystore, params.certificate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_AddCertificate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.removeCertificate');
          const result = this.impl.removeCertificate(params.keystore, params.certificate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_RemoveCertificate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getPublicKey');
          const result = this.impl.getPublicKey(params.certificate, params.algorithm_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_GetPublicKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.generateKey');
          const result = this.impl.generateKey(params.keystore, params.algorithm);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_GenerateKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.removeKey');
          const result = this.impl.removeKey(params.keystore, params.public_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_RemoveKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_Sign_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.sign');
          const result = this.impl.sign(params.is_keystore_provided, params.keystore, params.public_key, params.scheme, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_Sign_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getKeyTags');
          const result = this.impl.getKeyTags(params.public_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_GetKeyTags_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addKeyTags');
          const result = this.impl.addKeyTags(params.public_key, params.tags);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_AddKeyTags_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.canUserGrantPermissionForKey');
          const result = this.impl.canUserGrantPermissionForKey(params.public_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setAttributeForKey');
          const result = this.impl.setAttributeForKey(params.keystore, params.public_key, params.attribute_type, params.attribute_value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_SetAttributeForKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_ExtensionGenerateKey');
          const result = this.impl.dEPRECATED_ExtensionGenerateKey(params.keystore, params.algorithm, params.extension_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_ExtensionSign');
          const result = this.impl.dEPRECATED_ExtensionSign(params.keystore, params.public_key, params.scheme, params.data, params.extension_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_GetPublicKey');
          const result = this.impl.dEPRECATED_GetPublicKey(params.certificate, params.algorithm_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_GetKeyStores');
          const result = this.impl.dEPRECATED_GetKeyStores();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_GetCertificates');
          const result = this.impl.dEPRECATED_GetCertificates(params.keystore);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_AddCertificate');
          const result = this.impl.dEPRECATED_AddCertificate(params.keystore, params.certificate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_RemoveCertificate');
          const result = this.impl.dEPRECATED_RemoveCertificate(params.keystore, params.certificate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_ChallengeAttestationOnlyKeystore');
          const result = this.impl.dEPRECATED_ChallengeAttestationOnlyKeystore(params.challenge, params.type, params.migrate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ResponseParamsSpec);
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

crosapi.mojom.KeystoreServiceReceiver = crosapi.mojom.KeystoreServiceReceiver;

crosapi.mojom.KeystoreServicePtr = crosapi.mojom.KeystoreServiceRemote;
crosapi.mojom.KeystoreServiceRequest = crosapi.mojom.KeystoreServicePendingReceiver;

