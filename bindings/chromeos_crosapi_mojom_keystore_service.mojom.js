// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/keystore_service.mojom
// Module: crosapi.mojom

'use strict';

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
  }

  challengeAttestationOnlyKeystore(type, challenge, migrate, algorithm) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec,
      crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ResponseParamsSpec,
      [type, challenge, migrate, algorithm],
      false);
  }

  getKeyStores() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec,
      crosapi.mojom.KeystoreService_GetKeyStores_ResponseParamsSpec,
      [],
      false);
  }

  selectClientCertificates(certificate_authorities) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec,
      crosapi.mojom.KeystoreService_SelectClientCertificates_ResponseParamsSpec,
      [certificate_authorities],
      false);
  }

  getCertificates(keystore) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec,
      crosapi.mojom.KeystoreService_GetCertificates_ResponseParamsSpec,
      [keystore],
      false);
  }

  addCertificate(keystore, certificate) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec,
      crosapi.mojom.KeystoreService_AddCertificate_ResponseParamsSpec,
      [keystore, certificate],
      false);
  }

  removeCertificate(keystore, certificate) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec,
      crosapi.mojom.KeystoreService_RemoveCertificate_ResponseParamsSpec,
      [keystore, certificate],
      false);
  }

  getPublicKey(certificate, algorithm_name) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec,
      crosapi.mojom.KeystoreService_GetPublicKey_ResponseParamsSpec,
      [certificate, algorithm_name],
      false);
  }

  generateKey(keystore, algorithm) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec,
      crosapi.mojom.KeystoreService_GenerateKey_ResponseParamsSpec,
      [keystore, algorithm],
      false);
  }

  removeKey(keystore, public_key) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec,
      crosapi.mojom.KeystoreService_RemoveKey_ResponseParamsSpec,
      [keystore, public_key],
      false);
  }

  sign(is_keystore_provided, keystore, public_key, scheme, data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      crosapi.mojom.KeystoreService_Sign_ParamsSpec,
      crosapi.mojom.KeystoreService_Sign_ResponseParamsSpec,
      [is_keystore_provided, keystore, public_key, scheme, data],
      false);
  }

  getKeyTags(public_key) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec,
      crosapi.mojom.KeystoreService_GetKeyTags_ResponseParamsSpec,
      [public_key],
      false);
  }

  addKeyTags(public_key, tags) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec,
      crosapi.mojom.KeystoreService_AddKeyTags_ResponseParamsSpec,
      [public_key, tags],
      false);
  }

  canUserGrantPermissionForKey(public_key) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec,
      crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ResponseParamsSpec,
      [public_key],
      false);
  }

  setAttributeForKey(keystore, public_key, attribute_type, attribute_value) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec,
      crosapi.mojom.KeystoreService_SetAttributeForKey_ResponseParamsSpec,
      [keystore, public_key, attribute_type, attribute_value],
      false);
  }

  dEPRECATED_ExtensionGenerateKey(keystore, algorithm, extension_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ResponseParamsSpec,
      [keystore, algorithm, extension_id],
      false);
  }

  dEPRECATED_ExtensionSign(keystore, public_key, scheme, data, extension_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ResponseParamsSpec,
      [keystore, public_key, scheme, data, extension_id],
      false);
  }

  dEPRECATED_GetPublicKey(certificate, algorithm_name) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ResponseParamsSpec,
      [certificate, algorithm_name],
      false);
  }

  dEPRECATED_GetKeyStores() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ResponseParamsSpec,
      [],
      false);
  }

  dEPRECATED_GetCertificates(keystore) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ResponseParamsSpec,
      [keystore],
      false);
  }

  dEPRECATED_AddCertificate(keystore, certificate) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ResponseParamsSpec,
      [keystore, certificate],
      false);
  }

  dEPRECATED_RemoveCertificate(keystore, certificate) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec,
      crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ResponseParamsSpec,
      [keystore, certificate],
      false);
  }

  dEPRECATED_ChallengeAttestationOnlyKeystore(challenge, type, migrate) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(20, 0); // Default ordinal 20 -> Index 0
    this.ordinalMap.set(16, 1); // Default ordinal 16 -> Index 1
    this.ordinalMap.set(11, 2); // Default ordinal 11 -> Index 2
    this.ordinalMap.set(17, 3); // Default ordinal 17 -> Index 3
    this.ordinalMap.set(18, 4); // Default ordinal 18 -> Index 4
    this.ordinalMap.set(19, 5); // Default ordinal 19 -> Index 5
    this.ordinalMap.set(15, 6); // Default ordinal 15 -> Index 6
    this.ordinalMap.set(8, 7); // Default ordinal 8 -> Index 7
    this.ordinalMap.set(10, 8); // Default ordinal 10 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(12, 10); // Default ordinal 12 -> Index 10
    this.ordinalMap.set(13, 11); // Default ordinal 13 -> Index 11
    this.ordinalMap.set(14, 12); // Default ordinal 14 -> Index 12
    this.ordinalMap.set(21, 13); // Default ordinal 21 -> Index 13
    this.ordinalMap.set(3, 14); // Default ordinal 3 -> Index 14
    this.ordinalMap.set(7, 15); // Default ordinal 7 -> Index 15
    this.ordinalMap.set(6, 16); // Default ordinal 6 -> Index 16
    this.ordinalMap.set(1, 17); // Default ordinal 1 -> Index 17
    this.ordinalMap.set(2, 18); // Default ordinal 2 -> Index 18
    this.ordinalMap.set(4, 19); // Default ordinal 4 -> Index 19
    this.ordinalMap.set(5, 20); // Default ordinal 5 -> Index 20
    this.ordinalMap.set(0, 21); // Default ordinal 0 -> Index 21
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ChallengeAttestationOnlyKeystore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ChallengeAttestationOnlyKeystore (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: GetKeyStores
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetKeyStores (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: SelectClientCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectClientCertificates (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: GetCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCertificates (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: AddCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddCertificate (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: RemoveCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveCertificate (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: GetPublicKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPublicKey (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: GenerateKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateKey (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: RemoveKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveKey (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: Sign
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_Sign_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Sign (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: GetKeyTags
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetKeyTags (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: AddKeyTags
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddKeyTags (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 12: CanUserGrantPermissionForKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanUserGrantPermissionForKey (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 13: SetAttributeForKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAttributeForKey (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 14: DEPRECATED_ExtensionGenerateKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_ExtensionGenerateKey (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 15: DEPRECATED_ExtensionSign
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_ExtensionSign (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 16: DEPRECATED_GetPublicKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_GetPublicKey (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 17: DEPRECATED_GetKeyStores
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_GetKeyStores (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 18: DEPRECATED_GetCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_GetCertificates (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 19: DEPRECATED_AddCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_AddCertificate (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 20: DEPRECATED_RemoveCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_RemoveCertificate (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 21: DEPRECATED_ChallengeAttestationOnlyKeystore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_ChallengeAttestationOnlyKeystore (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_ChallengeAttestationOnlyKeystore_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_GetKeyStores_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_SelectClientCertificates_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_GetCertificates_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_AddCertificate_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_RemoveCertificate_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_GetPublicKey_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_GenerateKey_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_RemoveKey_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_Sign_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_GetKeyTags_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_AddKeyTags_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_CanUserGrantPermissionForKey_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_SetAttributeForKey_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_ExtensionGenerateKey_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_ExtensionSign_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_GetPublicKey_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_GetKeyStores_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_GetCertificates_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_AddCertificate_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_RemoveCertificate_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(crosapi.mojom.KeystoreService_DEPRECATED_ChallengeAttestationOnlyKeystore_ParamsSpec.$, message.header.headerSize);
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

