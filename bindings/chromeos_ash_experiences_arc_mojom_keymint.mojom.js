// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/keymint.mojom
// Module: arc.mojom.keymint

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
arc.mojom.keymint = arc.mojom.keymint || {};

arc.mojom.keymint.KeyFormatSpec = { $: mojo.internal.Enum() };
arc.mojom.keymint.AlgorithmSpec = { $: mojo.internal.Enum() };
arc.mojom.keymint.BlockModeSpec = { $: mojo.internal.Enum() };
arc.mojom.keymint.PaddingModeSpec = { $: mojo.internal.Enum() };
arc.mojom.keymint.DigestSpec = { $: mojo.internal.Enum() };
arc.mojom.keymint.EcCurveSpec = { $: mojo.internal.Enum() };
arc.mojom.keymint.KeyOriginSpec = { $: mojo.internal.Enum() };
arc.mojom.keymint.KeyPurposeSpec = { $: mojo.internal.Enum() };
arc.mojom.keymint.HardwareAuthenticatorTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.keymint.SecurityLevelSpec = { $: mojo.internal.Enum() };
arc.mojom.keymint.TagSpec = { $: mojo.internal.Enum() };
arc.mojom.keymint.KeyParameterValueSpec = { $: {} };
arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec = { $: {} };
arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec = { $: {} };
arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec = { $: {} };
arc.mojom.keymint.BeginResultOrErrorSpec = { $: {} };
arc.mojom.keymint.KeyCreationResultOrErrorSpec = { $: {} };
arc.mojom.keymint.ByteArrayOrErrorSpec = { $: {} };
arc.mojom.keymint.SharedSecretParametersOrErrorSpec = { $: {} };
arc.mojom.keymint.TimeStampTokenOrErrorSpec = { $: {} };
arc.mojom.keymint.AttestationKeySpec = { $: {} };
arc.mojom.keymint.KeyParameterSpec = { $: {} };
arc.mojom.keymint.SharedSecretParametersSpec = { $: {} };
arc.mojom.keymint.KeyCreationResultSpec = { $: {} };
arc.mojom.keymint.CertificateSpec = { $: {} };
arc.mojom.keymint.KeyCharacteristicsSpec = { $: {} };
arc.mojom.keymint.GenerateKeyRequestSpec = { $: {} };
arc.mojom.keymint.ImportKeyRequestSpec = { $: {} };
arc.mojom.keymint.ImportWrappedKeyRequestSpec = { $: {} };
arc.mojom.keymint.UpgradeKeyRequestSpec = { $: {} };
arc.mojom.keymint.BeginRequestSpec = { $: {} };
arc.mojom.keymint.BeginResultSpec = { $: {} };
arc.mojom.keymint.HardwareAuthTokenSpec = { $: {} };
arc.mojom.keymint.TimestampSpec = { $: {} };
arc.mojom.keymint.TimeStampTokenSpec = { $: {} };
arc.mojom.keymint.GetKeyCharacteristicsRequestSpec = { $: {} };
arc.mojom.keymint.UpdateRequestSpec = { $: {} };
arc.mojom.keymint.FinishRequestSpec = { $: {} };
arc.mojom.keymint.KeyMintKeyBlobSpec = { $: {} };
arc.mojom.keymint.KeyMintBlobSpec = { $: {} };
arc.mojom.keymint.GenerateEcdsaP256KeyPairResultSpec = { $: {} };
arc.mojom.keymint.CertificateRequestSpec = { $: {} };
arc.mojom.keymint.GenerateCertificateRequestResultSpec = { $: {} };
arc.mojom.keymint.KeyMintHost = {};
arc.mojom.keymint.KeyMintHost.$interfaceName = 'arc.mojom.keymint.KeyMintHost';
arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintInstance = {};
arc.mojom.keymint.KeyMintInstance.$interfaceName = 'arc.mojom.keymint.KeyMintInstance';
arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer = {};
arc.mojom.keymint.KeyMintServer.$interfaceName = 'arc.mojom.keymint.KeyMintServer';
arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_Update_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec = { $: {} };
arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec = { $: {} };

arc.mojom.keymint.shared_secret_key_agreement_label = "KeymasterSharedMac";

arc.mojom.keymint.shared_secret_key_check_label = "Keymaster HMAC Verification";

arc.mojom.keymint.secure_clock_time_stamp_mac_label = "Auth Verification";

// Enum: KeyFormat
arc.mojom.keymint.KeyFormat = {
  UNKNOWN: -1,
  X509: 0,
  PKCS8: 1,
  RAW: 3,
};

// Enum: Algorithm
arc.mojom.keymint.Algorithm = {
  UNKNOWN: -1,
  RSA: 1,
  EC: 3,
  AES: 32,
  TRIPLE_DES: 33,
  HMAC: 128,
};

// Enum: BlockMode
arc.mojom.keymint.BlockMode = {
  UNKNOWN: -1,
  ECB: 1,
  CBC: 2,
  CTR: 3,
  GCM: 32,
};

// Enum: PaddingMode
arc.mojom.keymint.PaddingMode = {
  UNKNOWN: -1,
  NONE: 1,
  RSA_OAEP: 2,
  RSA_PSS: 3,
  RSA_PKCS1_1_5_ENCRYPT: 4,
  RSA_PKCS1_1_5_SIGN: 5,
  PKCS7: 64,
};

// Enum: Digest
arc.mojom.keymint.Digest = {
  UNKNOWN: -1,
  NONE: 0,
  MD5: 1,
  SHA1: 2,
  SHA_2_224: 3,
  SHA_2_256: 4,
  SHA_2_384: 5,
  SHA_2_512: 6,
};

// Enum: EcCurve
arc.mojom.keymint.EcCurve = {
  UNKNOWN: -1,
  P_224: 0,
  P_256: 1,
  P_384: 2,
  P_521: 3,
  CURVE_25519: 4,
};

// Enum: KeyOrigin
arc.mojom.keymint.KeyOrigin = {
  UNKNOWN: -1,
  GENERATED: 0,
  DERIVED: 1,
  IMPORTED: 2,
  RESERVED: 3,
  SECURELY_IMPORTED: 4,
};

// Enum: KeyPurpose
arc.mojom.keymint.KeyPurpose = {
  UNKNOWN: -1,
  ENCRYPT: 0,
  DECRYPT: 1,
  SIGN: 2,
  VERIFY: 3,
  WRAP_KEY: 5,
  AGREE_KEY: 6,
  ATTEST_KEY: 7,
};

// Enum: HardwareAuthenticatorType
arc.mojom.keymint.HardwareAuthenticatorType = {
  UNKNOWN: 65280,
  NONE: 0,
  PASSWORD: 1,
  FINGERPRINT: 2,
  ANY: -1,
};

// Enum: SecurityLevel
arc.mojom.keymint.SecurityLevel = {
  UNKNOWN: -1,
  SOFTWARE: 0,
  TRUSTED_ENVIRONMENT: 1,
  STRONGBOX: 2,
  KEYSTORE: 100,
};

// Enum: Tag
arc.mojom.keymint.Tag = {
  INVALID: 0,
  PURPOSE: 536870913,
  ALGORITHM: 268435458,
  KEY_SIZE: 805306371,
  BLOCK_MODE: 536870916,
  DIGEST: 536870917,
  PADDING: 536870918,
  CALLER_NONCE: 1879048199,
  MIN_MAC_LENGTH: 805306376,
  EC_CURVE: 268435466,
  RSA_PUBLIC_EXPONENT: 1342177480,
  INCLUDE_UNIQUE_ID: 1879048394,
  RSA_OAEP_MGF_DIGEST: 536871115,
  BOOTLOADER_ONLY: 1879048494,
  ROLLBACK_RESISTANCE: 1879048495,
  HARDWARE_TYPE: 268435760,
  EARLY_BOOT_ONLY: 1879048497,
  ACTIVE_DATETIME: 1610613136,
  ORIGINATION_EXPIRE_DATETIME: 1610613137,
  USAGE_EXPIRE_DATETIME: 1610613138,
  MIN_SECONDS_BETWEEN_OPS: 805306771,
  MAX_USES_PER_BOOT: 805306772,
  USAGE_COUNT_LIMIT: 805306773,
  USER_ID: 805306869,
  USER_SECURE_ID: -1610612234,
  NO_AUTH_REQUIRED: 1879048695,
  USER_AUTH_TYPE: 268435960,
  AUTH_TIMEOUT: 805306873,
  ALLOW_WHILE_ON_BODY: 1879048698,
  TRUSTED_USER_PRESENCE_REQUIRED: 1879048699,
  TRUSTED_CONFIRMATION_REQUIRED: 1879048700,
  UNLOCKED_DEVICE_REQUIRED: 1879048701,
  APPLICATION_ID: -1879047591,
  APPLICATION_DATA: -1879047492,
  CREATION_DATETIME: 1610613437,
  ORIGIN: 268436158,
  ROOT_OF_TRUST: -1879047488,
  OS_VERSION: 805307073,
  OS_PATCHLEVEL: 805307074,
  UNIQUE_ID: -1879047485,
  ATTESTATION_CHALLENGE: -1879047484,
  ATTESTATION_APPLICATION_ID: -1879047483,
  ATTESTATION_ID_BRAND: -1879047482,
  ATTESTATION_ID_DEVICE: -1879047481,
  ATTESTATION_ID_PRODUCT: -1879047480,
  ATTESTATION_ID_SERIAL: -1879047479,
  ATTESTATION_ID_IMEI: -1879047478,
  ATTESTATION_ID_MEID: -1879047477,
  ATTESTATION_ID_MANUFACTURER: -1879047476,
  ATTESTATION_ID_MODEL: -1879047475,
  VENDOR_PATCHLEVEL: 805307086,
  BOOT_PATCHLEVEL: 805307087,
  DEVICE_UNIQUE_ATTESTATION: 1879048912,
  IDENTITY_CREDENTIAL_KEY: 1879048913,
  STORAGE_KEY: 1879048914,
  ASSOCIATED_DATA: -1879047192,
  NONCE: -1879047191,
  MAC_LENGTH: 805307371,
  RESET_SINCE_ID_ROTATION: 1879049196,
  CONFIRMATION_TOKEN: -1879047187,
  CERTIFICATE_SERIAL: -2147482642,
  CERTIFICATE_SUBJECT: -1879047185,
  CERTIFICATE_NOT_BEFORE: 1610613744,
  CERTIFICATE_NOT_AFTER: 1610613745,
  MAX_BOOT_LEVEL: 805307378,
};

// Union: KeyParameterValue
mojo.internal.Union(
    arc.mojom.keymint.KeyParameterValueSpec, 'arc.mojom.keymint.KeyParameterValue', {
      'invalid': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'algorithm': {
        'ordinal': 1,
        'type': arc.mojom.keymint.AlgorithmSpec.$,
        'nullable': false,
      },
      'block_mode': {
        'ordinal': 2,
        'type': arc.mojom.keymint.BlockModeSpec.$,
        'nullable': false,
      },
      'padding_mode': {
        'ordinal': 3,
        'type': arc.mojom.keymint.PaddingModeSpec.$,
        'nullable': false,
      },
      'digest': {
        'ordinal': 4,
        'type': arc.mojom.keymint.DigestSpec.$,
        'nullable': false,
      },
      'ec_curve': {
        'ordinal': 5,
        'type': arc.mojom.keymint.EcCurveSpec.$,
        'nullable': false,
      },
      'origin': {
        'ordinal': 6,
        'type': arc.mojom.keymint.KeyOriginSpec.$,
        'nullable': false,
      },
      'key_purpose': {
        'ordinal': 7,
        'type': arc.mojom.keymint.KeyPurposeSpec.$,
        'nullable': false,
      },
      'hardware_authenticator_type': {
        'ordinal': 8,
        'type': arc.mojom.keymint.HardwareAuthenticatorTypeSpec.$,
        'nullable': false,
      },
      'security_level': {
        'ordinal': 9,
        'type': arc.mojom.keymint.SecurityLevelSpec.$,
        'nullable': false,
      },
      'bool_value': {
        'ordinal': 10,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'integer': {
        'ordinal': 11,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'long_integer': {
        'ordinal': 12,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'date_time': {
        'ordinal': 13,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'blob': {
        'ordinal': 14,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Union: GenerateEcdsaP256KeyPairResultOrError
mojo.internal.Union(
    arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec, 'arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrError', {
      'key_pair_result': {
        'ordinal': 0,
        'type': arc.mojom.keymint.GenerateEcdsaP256KeyPairResultSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: GenerateCertificateRequestResultOrError
mojo.internal.Union(
    arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec, 'arc.mojom.keymint.GenerateCertificateRequestResultOrError', {
      'certificate_request_result': {
        'ordinal': 0,
        'type': arc.mojom.keymint.GenerateCertificateRequestResultSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: KeyCharacteristicsArrayOrError
mojo.internal.Union(
    arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec, 'arc.mojom.keymint.KeyCharacteristicsArrayOrError', {
      'key_characteristics': {
        'ordinal': 0,
        'type': mojo.internal.Array(arc.mojom.keymint.KeyCharacteristicsSpec.$, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: BeginResultOrError
mojo.internal.Union(
    arc.mojom.keymint.BeginResultOrErrorSpec, 'arc.mojom.keymint.BeginResultOrError', {
      'begin_result': {
        'ordinal': 0,
        'type': arc.mojom.keymint.BeginResultSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: KeyCreationResultOrError
mojo.internal.Union(
    arc.mojom.keymint.KeyCreationResultOrErrorSpec, 'arc.mojom.keymint.KeyCreationResultOrError', {
      'key_creation_result': {
        'ordinal': 0,
        'type': arc.mojom.keymint.KeyCreationResultSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: ByteArrayOrError
mojo.internal.Union(
    arc.mojom.keymint.ByteArrayOrErrorSpec, 'arc.mojom.keymint.ByteArrayOrError', {
      'output': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: SharedSecretParametersOrError
mojo.internal.Union(
    arc.mojom.keymint.SharedSecretParametersOrErrorSpec, 'arc.mojom.keymint.SharedSecretParametersOrError', {
      'secret_parameters': {
        'ordinal': 0,
        'type': arc.mojom.keymint.SharedSecretParametersSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: TimeStampTokenOrError
mojo.internal.Union(
    arc.mojom.keymint.TimeStampTokenOrErrorSpec, 'arc.mojom.keymint.TimeStampTokenOrError', {
      'timestamp_token': {
        'ordinal': 0,
        'type': arc.mojom.keymint.TimeStampTokenSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Struct: AttestationKey
mojo.internal.Struct(
    arc.mojom.keymint.AttestationKeySpec, 'arc.mojom.keymint.AttestationKey', [
      mojo.internal.StructField('key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('attest_key_params', 8, 0, mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('issuer_subject_name', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: KeyParameter
mojo.internal.Struct(
    arc.mojom.keymint.KeyParameterSpec, 'arc.mojom.keymint.KeyParameter', [
      mojo.internal.StructField('tag', 0, 0, arc.mojom.keymint.TagSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, arc.mojom.keymint.KeyParameterValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SharedSecretParameters
mojo.internal.Struct(
    arc.mojom.keymint.SharedSecretParametersSpec, 'arc.mojom.keymint.SharedSecretParameters', [
      mojo.internal.StructField('seed', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('nonce', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KeyCreationResult
mojo.internal.Struct(
    arc.mojom.keymint.KeyCreationResultSpec, 'arc.mojom.keymint.KeyCreationResult', [
      mojo.internal.StructField('key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('key_characteristics', 8, 0, mojo.internal.Array(arc.mojom.keymint.KeyCharacteristicsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('certificate_chain', 16, 0, mojo.internal.Array(arc.mojom.keymint.CertificateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Certificate
mojo.internal.Struct(
    arc.mojom.keymint.CertificateSpec, 'arc.mojom.keymint.Certificate', [
      mojo.internal.StructField('encoded_certificate', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: KeyCharacteristics
mojo.internal.Struct(
    arc.mojom.keymint.KeyCharacteristicsSpec, 'arc.mojom.keymint.KeyCharacteristics', [
      mojo.internal.StructField('security_level', 0, 0, arc.mojom.keymint.SecurityLevelSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('authorizations', 8, 0, mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GenerateKeyRequest
mojo.internal.Struct(
    arc.mojom.keymint.GenerateKeyRequestSpec, 'arc.mojom.keymint.GenerateKeyRequest', [
      mojo.internal.StructField('key_params', 0, 0, mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('attestation_key', 8, 0, arc.mojom.keymint.AttestationKeySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ImportKeyRequest
mojo.internal.Struct(
    arc.mojom.keymint.ImportKeyRequestSpec, 'arc.mojom.keymint.ImportKeyRequest', [
      mojo.internal.StructField('key_params', 0, 0, mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('key_format', 8, 0, arc.mojom.keymint.KeyFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('attestation_key', 24, 0, arc.mojom.keymint.AttestationKeySpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ImportWrappedKeyRequest
mojo.internal.Struct(
    arc.mojom.keymint.ImportWrappedKeyRequestSpec, 'arc.mojom.keymint.ImportWrappedKeyRequest', [
      mojo.internal.StructField('wrapped_key_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('wrapping_key_blob', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('masking_key', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('unwrapping_params', 24, 0, mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('password_sid', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('biometric_sid', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: UpgradeKeyRequest
mojo.internal.Struct(
    arc.mojom.keymint.UpgradeKeyRequestSpec, 'arc.mojom.keymint.UpgradeKeyRequest', [
      mojo.internal.StructField('key_blob_to_upgrade', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('upgrade_params', 8, 0, mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BeginRequest
mojo.internal.Struct(
    arc.mojom.keymint.BeginRequestSpec, 'arc.mojom.keymint.BeginRequest', [
      mojo.internal.StructField('key_purpose', 0, 0, arc.mojom.keymint.KeyPurposeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_blob', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('params', 16, 0, mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('auth_token', 24, 0, arc.mojom.keymint.HardwareAuthTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BeginResult
mojo.internal.Struct(
    arc.mojom.keymint.BeginResultSpec, 'arc.mojom.keymint.BeginResult', [
      mojo.internal.StructField('challenge', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, mojo.internal.Array(arc.mojom.keymint.KeyParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('op_handle', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HardwareAuthToken
mojo.internal.Struct(
    arc.mojom.keymint.HardwareAuthTokenSpec, 'arc.mojom.keymint.HardwareAuthToken', [
      mojo.internal.StructField('challenge', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('user_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('authenticator_id', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('authenticator_type', 24, 0, arc.mojom.keymint.HardwareAuthenticatorTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('timestamp', 32, 0, arc.mojom.keymint.TimestampSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mac', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: Timestamp
mojo.internal.Struct(
    arc.mojom.keymint.TimestampSpec, 'arc.mojom.keymint.Timestamp', [
      mojo.internal.StructField('milli_seconds', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TimeStampToken
mojo.internal.Struct(
    arc.mojom.keymint.TimeStampTokenSpec, 'arc.mojom.keymint.TimeStampToken', [
      mojo.internal.StructField('challenge', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, arc.mojom.keymint.TimestampSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mac', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetKeyCharacteristicsRequest
mojo.internal.Struct(
    arc.mojom.keymint.GetKeyCharacteristicsRequestSpec, 'arc.mojom.keymint.GetKeyCharacteristicsRequest', [
      mojo.internal.StructField('key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('app_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('app_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UpdateRequest
mojo.internal.Struct(
    arc.mojom.keymint.UpdateRequestSpec, 'arc.mojom.keymint.UpdateRequest', [
      mojo.internal.StructField('op_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('input', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('auth_token', 16, 0, arc.mojom.keymint.HardwareAuthTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('timestamp_token', 24, 0, arc.mojom.keymint.TimeStampTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FinishRequest
mojo.internal.Struct(
    arc.mojom.keymint.FinishRequestSpec, 'arc.mojom.keymint.FinishRequest', [
      mojo.internal.StructField('op_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('input', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('auth_token', 24, 0, arc.mojom.keymint.HardwareAuthTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('timestamp_token', 32, 0, arc.mojom.keymint.TimeStampTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('confirmation_token', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: KeyMintKeyBlob
mojo.internal.Struct(
    arc.mojom.keymint.KeyMintKeyBlobSpec, 'arc.mojom.keymint.KeyMintKeyBlob', [
      mojo.internal.StructField('key_material', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: KeyMintBlob
mojo.internal.Struct(
    arc.mojom.keymint.KeyMintBlobSpec, 'arc.mojom.keymint.KeyMintBlob', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GenerateEcdsaP256KeyPairResult
mojo.internal.Struct(
    arc.mojom.keymint.GenerateEcdsaP256KeyPairResultSpec, 'arc.mojom.keymint.GenerateEcdsaP256KeyPairResult', [
      mojo.internal.StructField('maced_public_key', 0, 0, arc.mojom.keymint.KeyMintBlobSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handle_to_private_key', 8, 0, arc.mojom.keymint.KeyMintKeyBlobSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CertificateRequest
mojo.internal.Struct(
    arc.mojom.keymint.CertificateRequestSpec, 'arc.mojom.keymint.CertificateRequest', [
      mojo.internal.StructField('keys_to_sign', 0, 0, mojo.internal.Array(arc.mojom.keymint.KeyMintBlobSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('encryption_cert_chain', 8, 0, arc.mojom.keymint.KeyMintBlobSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('challenge', 16, 0, arc.mojom.keymint.KeyMintBlobSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('test_mode', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: GenerateCertificateRequestResult
mojo.internal.Struct(
    arc.mojom.keymint.GenerateCertificateRequestResultSpec, 'arc.mojom.keymint.GenerateCertificateRequestResult', [
      mojo.internal.StructField('device_info', 0, 0, arc.mojom.keymint.KeyMintBlobSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('protected_data', 8, 0, arc.mojom.keymint.KeyMintBlobSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mac_of_keys_to_sign', 16, 0, arc.mojom.keymint.KeyMintBlobSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: KeyMintHost
mojo.internal.Struct(
    arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec, 'arc.mojom.keymint.KeyMintHost_GetServer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintHost_GetServer_ResponseParams', [
      mojo.internal.StructField('server_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.keymint.KeyMintServerRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.keymint.KeyMintHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.keymint.KeyMintHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.keymint.KeyMintHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.keymint.KeyMintHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.keymint.KeyMintHostRemoteCallHandler(this.proxy);
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

arc.mojom.keymint.KeyMintHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeyMintHost', [
      { explicit: 0 },
    ]);
  }

  getServer() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec,
      arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.keymint.KeyMintHost.getRemote = function() {
  let remote = new arc.mojom.keymint.KeyMintHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.keymint.KeyMintHost',
    'context');
  return remote.$;
};

arc.mojom.keymint.KeyMintHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeyMintHost', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintHost_GetServer_ParamsSpec.$.structSpec);
          const result = this.impl.getServer();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintHost_GetServer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.keymint.KeyMintHostReceiver = arc.mojom.keymint.KeyMintHostReceiver;

arc.mojom.keymint.KeyMintHostPtr = arc.mojom.keymint.KeyMintHostRemote;
arc.mojom.keymint.KeyMintHostRequest = arc.mojom.keymint.KeyMintHostPendingReceiver;


// Interface: KeyMintInstance
mojo.internal.Struct(
    arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec, 'arc.mojom.keymint.KeyMintInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.keymint.KeyMintHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintInstance_Init_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.keymint.KeyMintInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.keymint.KeyMintInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.keymint.KeyMintInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.keymint.KeyMintInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.keymint.KeyMintInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(host_remote) {
    return this.$.init(host_remote);
  }
};

arc.mojom.keymint.KeyMintInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeyMintInstance', [
      { explicit: 0 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec,
      arc.mojom.keymint.KeyMintInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.keymint.KeyMintInstance.getRemote = function() {
  let remote = new arc.mojom.keymint.KeyMintInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.keymint.KeyMintInstance',
    'context');
  return remote.$;
};

arc.mojom.keymint.KeyMintInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeyMintInstance', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.keymint.KeyMintInstanceReceiver = arc.mojom.keymint.KeyMintInstanceReceiver;

arc.mojom.keymint.KeyMintInstancePtr = arc.mojom.keymint.KeyMintInstanceRemote;
arc.mojom.keymint.KeyMintInstanceRequest = arc.mojom.keymint.KeyMintInstancePendingReceiver;


// Interface: KeyMintServer
mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_SetSystemVersion_Params', [
      mojo.internal.StructField('android_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('android_patchlevel', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_AddRngEntropy_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateKey_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.keymint.GenerateKeyRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.KeyCreationResultOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_ImportKey_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.keymint.ImportKeyRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.KeyCreationResultOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_ImportWrappedKey_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.keymint.ImportWrappedKeyRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.KeyCreationResultOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_UpgradeKey_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.keymint.UpgradeKeyRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.ByteArrayOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_DeleteKey_Params', [
      mojo.internal.StructField('key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_DeleteAllKeys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_Begin_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.keymint.BeginRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_Begin_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.BeginResultOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_DeviceLocked_Params', [
      mojo.internal.StructField('timestamp_token', 0, 0, arc.mojom.keymint.TimeStampTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('password_only', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_EarlyBootEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_Params', [
      mojo.internal.StructField('storage_key_blob', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.ByteArrayOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.keymint.GetKeyCharacteristicsRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.KeyCharacteristicsArrayOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.ByteArrayOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetRootOfTrust_Params', [
      mojo.internal.StructField('challenge', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.ByteArrayOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_SendRootOfTrust_Params', [
      mojo.internal.StructField('root_of_trust', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_UpdateAad_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.keymint.UpdateRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_Update_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_Update_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.keymint.UpdateRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_Update_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.ByteArrayOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_Finish_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.keymint.FinishRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_Finish_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.ByteArrayOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_Abort_Params', [
      mojo.internal.StructField('op_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_Abort_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.SharedSecretParametersOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_Params', [
      mojo.internal.StructField('secret_params', 0, 0, mojo.internal.Array(arc.mojom.keymint.SharedSecretParametersSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.ByteArrayOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_Params', [
      mojo.internal.StructField('challenge', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.TimeStampTokenOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_Params', [
      mojo.internal.StructField('test_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.GenerateEcdsaP256KeyPairResultOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.keymint.CertificateRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec, 'arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.keymint.GenerateCertificateRequestResultOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec, 'arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_Params', [
      mojo.internal.StructField('android_vendor_patchlevel', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.keymint.KeyMintServerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.keymint.KeyMintServerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.keymint.KeyMintServer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.keymint.KeyMintServerPendingReceiver,
      handle);
    this.$ = new arc.mojom.keymint.KeyMintServerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setSystemVersion(android_version, android_patchlevel) {
    return this.$.setSystemVersion(android_version, android_patchlevel);
  }
  addRngEntropy(data) {
    return this.$.addRngEntropy(data);
  }
  generateKey(request) {
    return this.$.generateKey(request);
  }
  importKey(request) {
    return this.$.importKey(request);
  }
  importWrappedKey(request) {
    return this.$.importWrappedKey(request);
  }
  upgradeKey(request) {
    return this.$.upgradeKey(request);
  }
  deleteKey(key_blob) {
    return this.$.deleteKey(key_blob);
  }
  deleteAllKeys() {
    return this.$.deleteAllKeys();
  }
  destroyAttestationIds() {
    return this.$.destroyAttestationIds();
  }
  begin(request) {
    return this.$.begin(request);
  }
  deviceLocked(password_only, timestamp_token) {
    return this.$.deviceLocked(password_only, timestamp_token);
  }
  earlyBootEnded() {
    return this.$.earlyBootEnded();
  }
  convertStorageKeyToEphemeral(storage_key_blob) {
    return this.$.convertStorageKeyToEphemeral(storage_key_blob);
  }
  getKeyCharacteristics(request) {
    return this.$.getKeyCharacteristics(request);
  }
  getRootOfTrustChallenge() {
    return this.$.getRootOfTrustChallenge();
  }
  getRootOfTrust(challenge) {
    return this.$.getRootOfTrust(challenge);
  }
  sendRootOfTrust(root_of_trust) {
    return this.$.sendRootOfTrust(root_of_trust);
  }
  updateAad(request) {
    return this.$.updateAad(request);
  }
  update(request) {
    return this.$.update(request);
  }
  finish(request) {
    return this.$.finish(request);
  }
  abort(op_handle) {
    return this.$.abort(op_handle);
  }
  getSharedSecretParameters() {
    return this.$.getSharedSecretParameters();
  }
  computeSharedSecret(secret_params) {
    return this.$.computeSharedSecret(secret_params);
  }
  generateTimeStamp(challenge) {
    return this.$.generateTimeStamp(challenge);
  }
  generateEcdsaP256KeyPair(test_mode) {
    return this.$.generateEcdsaP256KeyPair(test_mode);
  }
  generateCertificateRequest(request) {
    return this.$.generateCertificateRequest(request);
  }
  setVendorPatchLevel(android_vendor_patchlevel) {
    return this.$.setVendorPatchLevel(android_vendor_patchlevel);
  }
};

arc.mojom.keymint.KeyMintServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeyMintServer', [
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
    ]);
  }

  setSystemVersion(android_version, android_patchlevel) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec,
      null,
      [android_version, android_patchlevel],
      false);
  }

  addRngEntropy(data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec,
      [data],
      false);
  }

  generateKey(request) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec,
      [request],
      false);
  }

  importKey(request) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec,
      [request],
      false);
  }

  importWrappedKey(request) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec,
      [request],
      false);
  }

  upgradeKey(request) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec,
      [request],
      false);
  }

  deleteKey(key_blob) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec,
      [key_blob],
      false);
  }

  deleteAllKeys() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec,
      [],
      false);
  }

  destroyAttestationIds() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec,
      [],
      false);
  }

  begin(request) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec,
      [request],
      false);
  }

  deviceLocked(password_only, timestamp_token) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec,
      [password_only, timestamp_token],
      false);
  }

  earlyBootEnded() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec,
      [],
      false);
  }

  convertStorageKeyToEphemeral(storage_key_blob) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec,
      [storage_key_blob],
      false);
  }

  getKeyCharacteristics(request) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec,
      [request],
      false);
  }

  getRootOfTrustChallenge() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec,
      [],
      false);
  }

  getRootOfTrust(challenge) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec,
      [challenge],
      false);
  }

  sendRootOfTrust(root_of_trust) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec,
      [root_of_trust],
      false);
  }

  updateAad(request) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec,
      [request],
      false);
  }

  update(request) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      arc.mojom.keymint.KeyMintServer_Update_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec,
      [request],
      false);
  }

  finish(request) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec,
      [request],
      false);
  }

  abort(op_handle) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec,
      [op_handle],
      false);
  }

  getSharedSecretParameters() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec,
      [],
      false);
  }

  computeSharedSecret(secret_params) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec,
      [secret_params],
      false);
  }

  generateTimeStamp(challenge) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec,
      [challenge],
      false);
  }

  generateEcdsaP256KeyPair(test_mode) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec,
      [test_mode],
      false);
  }

  generateCertificateRequest(request) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec,
      arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec,
      [request],
      false);
  }

  setVendorPatchLevel(android_vendor_patchlevel) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec,
      null,
      [android_vendor_patchlevel],
      false);
  }

};

arc.mojom.keymint.KeyMintServer.getRemote = function() {
  let remote = new arc.mojom.keymint.KeyMintServerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.keymint.KeyMintServer',
    'context');
  return remote.$;
};

arc.mojom.keymint.KeyMintServerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeyMintServer', [
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
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_Update_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_SetSystemVersion_ParamsSpec.$.structSpec);
          const result = this.impl.setSystemVersion(params.android_version, params.android_patchlevel);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_AddRngEntropy_ParamsSpec.$.structSpec);
          const result = this.impl.addRngEntropy(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_AddRngEntropy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GenerateKey_ParamsSpec.$.structSpec);
          const result = this.impl.generateKey(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_GenerateKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_ImportKey_ParamsSpec.$.structSpec);
          const result = this.impl.importKey(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_ImportKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ParamsSpec.$.structSpec);
          const result = this.impl.importWrappedKey(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_ImportWrappedKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_UpgradeKey_ParamsSpec.$.structSpec);
          const result = this.impl.upgradeKey(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_UpgradeKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_DeleteKey_ParamsSpec.$.structSpec);
          const result = this.impl.deleteKey(params.key_blob);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_DeleteKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ParamsSpec.$.structSpec);
          const result = this.impl.deleteAllKeys();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_DeleteAllKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ParamsSpec.$.structSpec);
          const result = this.impl.destroyAttestationIds();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_DestroyAttestationIds_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_Begin_ParamsSpec.$.structSpec);
          const result = this.impl.begin(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_Begin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_DeviceLocked_ParamsSpec.$.structSpec);
          const result = this.impl.deviceLocked(params.password_only, params.timestamp_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_DeviceLocked_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ParamsSpec.$.structSpec);
          const result = this.impl.earlyBootEnded();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_EarlyBootEnded_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ParamsSpec.$.structSpec);
          const result = this.impl.convertStorageKeyToEphemeral(params.storage_key_blob);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_ConvertStorageKeyToEphemeral_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ParamsSpec.$.structSpec);
          const result = this.impl.getKeyCharacteristics(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_GetKeyCharacteristics_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ParamsSpec.$.structSpec);
          const result = this.impl.getRootOfTrustChallenge();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_GetRootOfTrustChallenge_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ParamsSpec.$.structSpec);
          const result = this.impl.getRootOfTrust(params.challenge);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_GetRootOfTrust_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ParamsSpec.$.structSpec);
          const result = this.impl.sendRootOfTrust(params.root_of_trust);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_SendRootOfTrust_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_UpdateAad_ParamsSpec.$.structSpec);
          const result = this.impl.updateAad(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_UpdateAad_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_Update_ParamsSpec.$.structSpec);
          const result = this.impl.update(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_Update_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_Finish_ParamsSpec.$.structSpec);
          const result = this.impl.finish(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_Finish_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_Abort_ParamsSpec.$.structSpec);
          const result = this.impl.abort(params.op_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_Abort_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ParamsSpec.$.structSpec);
          const result = this.impl.getSharedSecretParameters();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_GetSharedSecretParameters_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ParamsSpec.$.structSpec);
          const result = this.impl.computeSharedSecret(params.secret_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_ComputeSharedSecret_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ParamsSpec.$.structSpec);
          const result = this.impl.generateTimeStamp(params.challenge);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_GenerateTimeStamp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ParamsSpec.$.structSpec);
          const result = this.impl.generateEcdsaP256KeyPair(params.test_mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_GenerateEcdsaP256KeyPair_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ParamsSpec.$.structSpec);
          const result = this.impl.generateCertificateRequest(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.keymint.KeyMintServer_GenerateCertificateRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.keymint.KeyMintServer_SetVendorPatchLevel_ParamsSpec.$.structSpec);
          const result = this.impl.setVendorPatchLevel(params.android_vendor_patchlevel);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.keymint.KeyMintServerReceiver = arc.mojom.keymint.KeyMintServerReceiver;

arc.mojom.keymint.KeyMintServerPtr = arc.mojom.keymint.KeyMintServerRemote;
arc.mojom.keymint.KeyMintServerRequest = arc.mojom.keymint.KeyMintServerPendingReceiver;

