// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/oemcrypto.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.OemCryptoResultSpec = { $: mojo.internal.Enum() };
arc.mojom.OemCryptoCipherModeSpec = { $: mojo.internal.Enum() };
arc.mojom.OemCryptoLicenseTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.OemCryptoAlgorithmSpec = { $: mojo.internal.Enum() };
arc.mojom.OemCryptoUsageEntryStatusSpec = { $: mojo.internal.Enum() };
arc.mojom.OemCryptoRsaPaddingSchemeSpec = { $: mojo.internal.Enum() };
arc.mojom.OemCryptoHdcpCapabilitySpec = { $: mojo.internal.Enum() };
arc.mojom.OemCryptoProvisioningMethodSpec = { $: mojo.internal.Enum() };
arc.mojom.OemCryptoPrivateKeySpec = { $: mojo.internal.Enum() };
arc.mojom.OemCryptoSecureBufferSpec = { $: {} };
arc.mojom.OemCryptoSubstringSpec = { $: {} };
arc.mojom.OemCryptoKeyObjectV14Spec = { $: {} };
arc.mojom.OemCryptoKeyObjectSpec = { $: {} };
arc.mojom.OemCryptoEntitledContentKeyObjectV14Spec = { $: {} };
arc.mojom.OemCryptoEntitledContentKeyObjectSpec = { $: {} };
arc.mojom.OemCryptoKeyRefreshObjectV14Spec = { $: {} };
arc.mojom.OemCryptoKeyRefreshObjectSpec = { $: {} };
arc.mojom.OemCryptoCencEncryptPatternDescSpec = { $: {} };
arc.mojom.OemCryptoPstReportSpec = { $: {} };
arc.mojom.SubSampleDescriptionSpec = { $: {} };
arc.mojom.OemCryptoService = {};
arc.mojom.OemCryptoService.$interfaceName = 'arc.mojom.OemCryptoService';
arc.mojom.OemCryptoService_InitializeDeprecated_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_InitializeDeprecated_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_Initialize_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_Initialize_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_Terminate_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_Terminate_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_OpenSession_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_OpenSession_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CloseSession_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CloseSession_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenerateDerivedKeys_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenerateDerivedKeys_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenerateNonce_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenerateNonce_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenerateSignature_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenerateSignature_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadKeysV11OrV12_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_RefreshKeysV14_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_RefreshKeysV14_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_QueryKeyControl_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_QueryKeyControl_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_SelectKeyV13_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_SelectKeyV13_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DecryptCencV15_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DecryptCencV15_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenericEncrypt_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenericEncrypt_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenericDecrypt_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenericDecrypt_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenericSign_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenericSign_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenericVerify_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenericVerify_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CopyBufferV14_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CopyBufferV14_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadTestKeyboxV13_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadTestKeyboxV13_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetDeviceId_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetDeviceId_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetKeyData_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetKeyData_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetRandom_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetRandom_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadDeviceRsaKey_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenerateRsaSignature_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GenerateRsaSignature_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_SecurityPatchLevel_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_SecurityPatchLevel_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetHdcpCapability_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetHdcpCapability_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_UpdateUsageTable_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_UpdateUsageTable_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_ReportUsage_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_ReportUsage_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DeleteUsageEntry_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DeleteUsageEntry_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DeleteOldUsageTable_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DeleteOldUsageTable_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetProvisioningMethod_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetProvisioningMethod_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_SupportedCertificates_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_SupportedCertificates_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_IsSrmUpdateSupported_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_IsSrmUpdateSupported_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetCurrentSrmVersion_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetCurrentSrmVersion_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadSrm_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadSrm_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_RemoveSrm_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_RemoveSrm_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CreateUsageTableHeader_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CreateUsageTableHeader_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadUsageTableHeader_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadUsageTableHeader_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CreateNewUsageEntry_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CreateNewUsageEntry_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadUsageEntry_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadUsageEntry_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_UpdateUsageEntry_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_UpdateUsageEntry_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DeactivateUsageEntry_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DeactivateUsageEntry_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_MoveEntry_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_MoveEntry_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CopyOldUsageEntry_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CopyOldUsageEntry_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CreateOldUsageEntry_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CreateOldUsageEntry_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetAnalogOutputFlags_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetAnalogOutputFlags_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadTestKeybox_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadTestKeybox_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_SelectKey_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_SelectKey_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadKeysV14_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadKeysV14_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadKeys_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadKeys_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_ResourceRatingTier_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_ResourceRatingTier_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_BuildInformation_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_BuildInformation_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_RefreshKeys_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_RefreshKeys_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadEntitledContentKeys_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadEntitledContentKeys_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetOemPublicCertificate_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_GetOemPublicCertificate_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_MinorApiVersion_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_MinorApiVersion_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadLicense_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadLicense_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadRenewal_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadRenewal_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadProvisioning_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadProvisioning_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadOemPrivateKey_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadOemPrivateKey_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadDrmPrivateKey_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DecryptCenc_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_DecryptCenc_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CopyBuffer_ParamsSpec = { $: {} };
arc.mojom.OemCryptoService_CopyBuffer_ResponseParamsSpec = { $: {} };
arc.mojom.OemCryptoHost = {};
arc.mojom.OemCryptoHost.$interfaceName = 'arc.mojom.OemCryptoHost';
arc.mojom.OemCryptoHost_Connect_ParamsSpec = { $: {} };
arc.mojom.OemCryptoInstance = {};
arc.mojom.OemCryptoInstance.$interfaceName = 'arc.mojom.OemCryptoInstance';
arc.mojom.OemCryptoInstance_Init_ParamsSpec = { $: {} };
arc.mojom.OemCryptoInstance_Init_ResponseParamsSpec = { $: {} };

// Enum: OemCryptoResult
arc.mojom.OemCryptoResult = {
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
arc.mojom.OemCryptoCipherMode = {
  CIPHER_MODE_CTR: 0,
  CIPHER_MODE_CBC: 1,
};

// Enum: OemCryptoLicenseType
arc.mojom.OemCryptoLicenseType = {
  CONTENT_LICENSE: 0,
  ENTITLEMENT_LICENSE: 1,
};

// Enum: OemCryptoAlgorithm
arc.mojom.OemCryptoAlgorithm = {
  AES_CBC_128_NO_PADDING: 0,
  HMAC_SHA265: 1,
};

// Enum: OemCryptoUsageEntryStatus
arc.mojom.OemCryptoUsageEntryStatus = {
  UNUSED: 0,
  ACTIVE: 1,
  INACTIVE: 2,
  INACTIVE_USED: 3,
  INACTIVE_UNUSED: 4,
};

// Enum: OemCryptoRsaPaddingScheme
arc.mojom.OemCryptoRsaPaddingScheme = {
  SIGN_RSASSA_PSS: 1,
  SIGN_PKCS1_BLOCK1: 2,
};

// Enum: OemCryptoHdcpCapability
arc.mojom.OemCryptoHdcpCapability = {
  HDCP_NONE: 0,
  HDCP_V1: 1,
  HDCP_V2: 2,
  HDCP_V2_1: 3,
  HDCP_V2_2: 4,
  HDCP_V2_3: 5,
  HDCP_NO_DIGITAL_OUTPUT: 255,
};

// Enum: OemCryptoProvisioningMethod
arc.mojom.OemCryptoProvisioningMethod = {
  PROVISIONING_ERROR: 0,
  DRM_CERTIFICATE: 1,
  KEYBOX: 2,
  OEM_CERTIFICATE: 3,
};

// Enum: OemCryptoPrivateKey
arc.mojom.OemCryptoPrivateKey = {
  RSA_PRIVATE_KEY: 0,
  ECC_PRIVATE_KEY: 1,
};

// Struct: OemCryptoSecureBuffer
mojo.internal.Struct(
    arc.mojom.OemCryptoSecureBufferSpec, 'arc.mojom.OemCryptoSecureBuffer', [
      mojo.internal.StructField('buffer_handle', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('max_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OemCryptoSubstring
mojo.internal.Struct(
    arc.mojom.OemCryptoSubstringSpec, 'arc.mojom.OemCryptoSubstring', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: OemCryptoKeyObjectV14
mojo.internal.Struct(
    arc.mojom.OemCryptoKeyObjectV14Spec, 'arc.mojom.OemCryptoKeyObjectV14', [
      mojo.internal.StructField('cipher_mode', 0, 0, arc.mojom.OemCryptoCipherModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_id_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_id_length', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_data_iv_offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_data_offset', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_data_length', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_control_iv_offset', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_control_offset', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: OemCryptoKeyObject
mojo.internal.Struct(
    arc.mojom.OemCryptoKeyObjectSpec, 'arc.mojom.OemCryptoKeyObject', [
      mojo.internal.StructField('key_id', 0, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_data_iv', 8, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 16, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_control_iv', 24, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_control', 32, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: OemCryptoEntitledContentKeyObjectV14
mojo.internal.Struct(
    arc.mojom.OemCryptoEntitledContentKeyObjectV14Spec, 'arc.mojom.OemCryptoEntitledContentKeyObjectV14', [
      mojo.internal.StructField('entitlement_key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('content_key_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('content_key_data_iv', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('content_key_data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OemCryptoEntitledContentKeyObject
mojo.internal.Struct(
    arc.mojom.OemCryptoEntitledContentKeyObjectSpec, 'arc.mojom.OemCryptoEntitledContentKeyObject', [
      mojo.internal.StructField('entitlement_key_id', 0, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_key_id', 8, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_key_data_iv', 16, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_key_data', 24, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OemCryptoKeyRefreshObjectV14
mojo.internal.Struct(
    arc.mojom.OemCryptoKeyRefreshObjectV14Spec, 'arc.mojom.OemCryptoKeyRefreshObjectV14', [
      mojo.internal.StructField('key_id_offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_id_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_control_iv_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_control_offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_key_control_iv', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OemCryptoKeyRefreshObject
mojo.internal.Struct(
    arc.mojom.OemCryptoKeyRefreshObjectSpec, 'arc.mojom.OemCryptoKeyRefreshObject', [
      mojo.internal.StructField('key_id', 0, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_control_iv', 8, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_control', 16, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OemCryptoCencEncryptPatternDesc
mojo.internal.Struct(
    arc.mojom.OemCryptoCencEncryptPatternDescSpec, 'arc.mojom.OemCryptoCencEncryptPatternDesc', [
      mojo.internal.StructField('encrypt', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('skip', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OemCryptoPstReport
mojo.internal.Struct(
    arc.mojom.OemCryptoPstReportSpec, 'arc.mojom.OemCryptoPstReport', [
      mojo.internal.StructField('signature', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('seconds_since_license_received', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('seconds_since_first_decrypt', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('seconds_since_last_decrypt', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('status', 32, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('clock_security_level', 33, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SubSampleDescription
mojo.internal.Struct(
    arc.mojom.SubSampleDescriptionSpec, 'arc.mojom.SubSampleDescription', [
      mojo.internal.StructField('num_bytes_clear', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_bytes_encrypted', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('block_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('subsample_flags', 12, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: OemCryptoService
mojo.internal.Struct(
    arc.mojom.OemCryptoService_InitializeDeprecated_ParamsSpec, 'arc.mojom.OemCryptoService_InitializeDeprecated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_InitializeDeprecated_ResponseParamsSpec, 'arc.mojom.OemCryptoService_InitializeDeprecated_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_Initialize_ParamsSpec, 'arc.mojom.OemCryptoService_Initialize_Params', [
      mojo.internal.StructField('oemcrypto_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_Initialize_ResponseParamsSpec, 'arc.mojom.OemCryptoService_Initialize_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_Terminate_ParamsSpec, 'arc.mojom.OemCryptoService_Terminate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_Terminate_ResponseParamsSpec, 'arc.mojom.OemCryptoService_Terminate_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_OpenSession_ParamsSpec, 'arc.mojom.OemCryptoService_OpenSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_OpenSession_ResponseParamsSpec, 'arc.mojom.OemCryptoService_OpenSession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CloseSession_ParamsSpec, 'arc.mojom.OemCryptoService_CloseSession_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CloseSession_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CloseSession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenerateDerivedKeys_ParamsSpec, 'arc.mojom.OemCryptoService_GenerateDerivedKeys_Params', [
      mojo.internal.StructField('mac_key_context', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('enc_key_context', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenerateDerivedKeys_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenerateDerivedKeys_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenerateNonce_ParamsSpec, 'arc.mojom.OemCryptoService_GenerateNonce_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenerateNonce_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenerateNonce_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('nonce', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenerateSignature_ParamsSpec, 'arc.mojom.OemCryptoService_GenerateSignature_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenerateSignature_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenerateSignature_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadKeysV11OrV12_ParamsSpec, 'arc.mojom.OemCryptoService_LoadKeysV11OrV12_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('key_array', 16, 0, mojo.internal.Array(arc.mojom.OemCryptoKeyObjectV14Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enc_mac_keys_iv_offset', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enc_mac_keys_offset', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pst_offset', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pst_length', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_enc_mac_keys', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_RefreshKeysV14_ParamsSpec, 'arc.mojom.OemCryptoService_RefreshKeysV14_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('key_array', 16, 0, mojo.internal.Array(arc.mojom.OemCryptoKeyRefreshObjectV14Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_RefreshKeysV14_ResponseParamsSpec, 'arc.mojom.OemCryptoService_RefreshKeysV14_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_QueryKeyControl_ParamsSpec, 'arc.mojom.OemCryptoService_QueryKeyControl_Params', [
      mojo.internal.StructField('key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_QueryKeyControl_ResponseParamsSpec, 'arc.mojom.OemCryptoService_QueryKeyControl_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_control_block', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_SelectKeyV13_ParamsSpec, 'arc.mojom.OemCryptoService_SelectKeyV13_Params', [
      mojo.internal.StructField('key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_SelectKeyV13_ResponseParamsSpec, 'arc.mojom.OemCryptoService_SelectKeyV13_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DecryptCencV15_ParamsSpec, 'arc.mojom.OemCryptoService_DecryptCencV15_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('iv', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('secure_buffer', 16, 0, arc.mojom.OemCryptoSecureBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pattern', 24, 0, arc.mojom.OemCryptoCencEncryptPatternDescSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('block_offset', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_encrypted', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DecryptCencV15_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DecryptCencV15_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decrypted_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenericEncrypt_ParamsSpec, 'arc.mojom.OemCryptoService_GenericEncrypt_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('iv', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 16, 0, arc.mojom.OemCryptoAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenericEncrypt_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenericEncrypt_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('encrypted_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenericDecrypt_ParamsSpec, 'arc.mojom.OemCryptoService_GenericDecrypt_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('iv', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 16, 0, arc.mojom.OemCryptoAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenericDecrypt_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenericDecrypt_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decrypted_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenericSign_ParamsSpec, 'arc.mojom.OemCryptoService_GenericSign_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 8, 0, arc.mojom.OemCryptoAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenericSign_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenericSign_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenericVerify_ParamsSpec, 'arc.mojom.OemCryptoService_GenericVerify_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 8, 0, arc.mojom.OemCryptoAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenericVerify_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenericVerify_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CopyBufferV14_ParamsSpec, 'arc.mojom.OemCryptoService_CopyBufferV14_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('out_buffer', 8, 0, arc.mojom.OemCryptoSecureBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CopyBufferV14_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CopyBufferV14_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadTestKeyboxV13_ParamsSpec, 'arc.mojom.OemCryptoService_LoadTestKeyboxV13_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadTestKeyboxV13_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadTestKeyboxV13_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ParamsSpec, 'arc.mojom.OemCryptoService_IsRootKeyCertificateValid_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ResponseParamsSpec, 'arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetDeviceId_ParamsSpec, 'arc.mojom.OemCryptoService_GetDeviceId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetDeviceId_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetDeviceId_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetKeyData_ParamsSpec, 'arc.mojom.OemCryptoService_GetKeyData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetKeyData_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetKeyData_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetRandom_ParamsSpec, 'arc.mojom.OemCryptoService_GetRandom_Params', [
      mojo.internal.StructField('length', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetRandom_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetRandom_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ParamsSpec, 'arc.mojom.OemCryptoService_GetNumberOfOpenSessions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('num', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ParamsSpec, 'arc.mojom.OemCryptoService_GetMaxNumberOfSessions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ParamsSpec, 'arc.mojom.OemCryptoService_RewrapDeviceRsaKey_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('nonce_offset', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enc_rsa_key_offset', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enc_rsa_key_length', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enc_rsa_key_iv_offset', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wrapped_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadDeviceRsaKey_ParamsSpec, 'arc.mojom.OemCryptoService_LoadDeviceRsaKey_Params', [
      mojo.internal.StructField('wrapped_rsa_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenerateRsaSignature_ParamsSpec, 'arc.mojom.OemCryptoService_GenerateRsaSignature_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('padding_scheme', 8, 0, arc.mojom.OemCryptoRsaPaddingSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenerateRsaSignature_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GenerateRsaSignature_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ParamsSpec, 'arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_Params', [
      mojo.internal.StructField('enc_session_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('mac_key_context', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('enc_key_context', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_SecurityPatchLevel_ParamsSpec, 'arc.mojom.OemCryptoService_SecurityPatchLevel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_SecurityPatchLevel_ResponseParamsSpec, 'arc.mojom.OemCryptoService_SecurityPatchLevel_ResponseParams', [
      mojo.internal.StructField('security_patch_level', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetHdcpCapability_ParamsSpec, 'arc.mojom.OemCryptoService_GetHdcpCapability_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetHdcpCapability_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetHdcpCapability_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('current', 8, 0, arc.mojom.OemCryptoHdcpCapabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('maximum', 16, 0, arc.mojom.OemCryptoHdcpCapabilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_UpdateUsageTable_ParamsSpec, 'arc.mojom.OemCryptoService_UpdateUsageTable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_UpdateUsageTable_ResponseParamsSpec, 'arc.mojom.OemCryptoService_UpdateUsageTable_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ParamsSpec, 'arc.mojom.OemCryptoService_DeactivateUsageEntryV12_Params', [
      mojo.internal.StructField('pst', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_ReportUsage_ParamsSpec, 'arc.mojom.OemCryptoService_ReportUsage_Params', [
      mojo.internal.StructField('pst', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_ReportUsage_ResponseParamsSpec, 'arc.mojom.OemCryptoService_ReportUsage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('report', 8, 0, arc.mojom.OemCryptoPstReportSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DeleteUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_DeleteUsageEntry_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pst_offset', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pst_length', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DeleteUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DeleteUsageEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_ForceDeleteUsageEntry_Params', [
      mojo.internal.StructField('pst', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DeleteOldUsageTable_ParamsSpec, 'arc.mojom.OemCryptoService_DeleteOldUsageTable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DeleteOldUsageTable_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DeleteOldUsageTable_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetProvisioningMethod_ParamsSpec, 'arc.mojom.OemCryptoService_GetProvisioningMethod_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetProvisioningMethod_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetProvisioningMethod_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoProvisioningMethodSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_SupportedCertificates_ParamsSpec, 'arc.mojom.OemCryptoService_SupportedCertificates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_SupportedCertificates_ResponseParamsSpec, 'arc.mojom.OemCryptoService_SupportedCertificates_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_IsSrmUpdateSupported_ParamsSpec, 'arc.mojom.OemCryptoService_IsSrmUpdateSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_IsSrmUpdateSupported_ResponseParamsSpec, 'arc.mojom.OemCryptoService_IsSrmUpdateSupported_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetCurrentSrmVersion_ParamsSpec, 'arc.mojom.OemCryptoService_GetCurrentSrmVersion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetCurrentSrmVersion_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetCurrentSrmVersion_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadSrm_ParamsSpec, 'arc.mojom.OemCryptoService_LoadSrm_Params', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadSrm_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadSrm_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_RemoveSrm_ParamsSpec, 'arc.mojom.OemCryptoService_RemoveSrm_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_RemoveSrm_ResponseParamsSpec, 'arc.mojom.OemCryptoService_RemoveSrm_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CreateUsageTableHeader_ParamsSpec, 'arc.mojom.OemCryptoService_CreateUsageTableHeader_Params', [
      mojo.internal.StructField('avail_header_length', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CreateUsageTableHeader_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CreateUsageTableHeader_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('header', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadUsageTableHeader_ParamsSpec, 'arc.mojom.OemCryptoService_LoadUsageTableHeader_Params', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadUsageTableHeader_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadUsageTableHeader_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CreateNewUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_CreateNewUsageEntry_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CreateNewUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CreateNewUsageEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('usage_entry_number', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_LoadUsageEntry_Params', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('index', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadUsageEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_UpdateUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_UpdateUsageEntry_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('avail_header_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('avail_entry_length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_UpdateUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_UpdateUsageEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('header', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('entry', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DeactivateUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_DeactivateUsageEntry_Params', [
      mojo.internal.StructField('pst', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DeactivateUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DeactivateUsageEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ParamsSpec, 'arc.mojom.OemCryptoService_ShrinkUsageTableHeader_Params', [
      mojo.internal.StructField('new_entry_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('avail_header_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ResponseParamsSpec, 'arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('header', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_MoveEntry_ParamsSpec, 'arc.mojom.OemCryptoService_MoveEntry_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('new_index', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_MoveEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_MoveEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CopyOldUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_CopyOldUsageEntry_Params', [
      mojo.internal.StructField('pst', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CopyOldUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CopyOldUsageEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CreateOldUsageEntry_ParamsSpec, 'arc.mojom.OemCryptoService_CreateOldUsageEntry_Params', [
      mojo.internal.StructField('time_since_license_received', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('time_since_first_decrypt', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('time_since_last_decrypt', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('status', 24, 0, arc.mojom.OemCryptoUsageEntryStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('server_mac_key', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('client_mac_key', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('pst', 48, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CreateOldUsageEntry_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CreateOldUsageEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetAnalogOutputFlags_ParamsSpec, 'arc.mojom.OemCryptoService_GetAnalogOutputFlags_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetAnalogOutputFlags_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetAnalogOutputFlags_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadTestKeybox_ParamsSpec, 'arc.mojom.OemCryptoService_LoadTestKeybox_Params', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadTestKeybox_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadTestKeybox_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ParamsSpec, 'arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_Params', [
      mojo.internal.StructField('key_array', 0, 0, mojo.internal.Array(arc.mojom.OemCryptoEntitledContentKeyObjectV14Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_SelectKey_ParamsSpec, 'arc.mojom.OemCryptoService_SelectKey_Params', [
      mojo.internal.StructField('content_key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('cipher_mode', 8, 0, arc.mojom.OemCryptoCipherModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_SelectKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_SelectKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadKeysV14_ParamsSpec, 'arc.mojom.OemCryptoService_LoadKeysV14_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('key_array', 16, 0, mojo.internal.Array(arc.mojom.OemCryptoKeyObjectV14Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('srm_requirement', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('license_type', 32, 0, arc.mojom.OemCryptoLicenseTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enc_mac_keys_iv_offset', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enc_mac_keys_offset', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pst_offset', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pst_length', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_enc_mac_keys', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadKeysV14_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadKeysV14_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadKeys_ParamsSpec, 'arc.mojom.OemCryptoService_LoadKeys_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('enc_mac_keys_iv', 16, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enc_mac_keys', 24, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_array', 32, 0, mojo.internal.Array(arc.mojom.OemCryptoKeyObjectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pst', 40, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('srm_restriction_data', 48, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('license_type', 56, 0, arc.mojom.OemCryptoLicenseTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadKeys_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadKeys_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_ResourceRatingTier_ParamsSpec, 'arc.mojom.OemCryptoService_ResourceRatingTier_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_ResourceRatingTier_ResponseParamsSpec, 'arc.mojom.OemCryptoService_ResourceRatingTier_ResponseParams', [
      mojo.internal.StructField('rating_tier', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_BuildInformation_ParamsSpec, 'arc.mojom.OemCryptoService_BuildInformation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_BuildInformation_ResponseParamsSpec, 'arc.mojom.OemCryptoService_BuildInformation_ResponseParams', [
      mojo.internal.StructField('build_information', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_RefreshKeys_ParamsSpec, 'arc.mojom.OemCryptoService_RefreshKeys_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('key_array', 16, 0, mojo.internal.Array(arc.mojom.OemCryptoKeyRefreshObjectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_RefreshKeys_ResponseParamsSpec, 'arc.mojom.OemCryptoService_RefreshKeys_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadEntitledContentKeys_ParamsSpec, 'arc.mojom.OemCryptoService_LoadEntitledContentKeys_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('key_array', 8, 0, mojo.internal.Array(arc.mojom.OemCryptoEntitledContentKeyObjectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadEntitledContentKeys_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadEntitledContentKeys_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetOemPublicCertificate_ParamsSpec, 'arc.mojom.OemCryptoService_GetOemPublicCertificate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GetOemPublicCertificate_ResponseParamsSpec, 'arc.mojom.OemCryptoService_GetOemPublicCertificate_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('public_cert', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ParamsSpec, 'arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ResponseParamsSpec, 'arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ResponseParams', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ParamsSpec, 'arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ResponseParamsSpec, 'arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_MinorApiVersion_ParamsSpec, 'arc.mojom.OemCryptoService_MinorApiVersion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_MinorApiVersion_ResponseParamsSpec, 'arc.mojom.OemCryptoService_MinorApiVersion_ResponseParams', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('core_message_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('avail_signature_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('core_message_size', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('core_message_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('avail_signature_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('core_message_size', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('core_message_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('avail_signature_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('core_message_size', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadLicense_ParamsSpec, 'arc.mojom.OemCryptoService_LoadLicense_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('core_message_length', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadLicense_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadLicense_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadRenewal_ParamsSpec, 'arc.mojom.OemCryptoService_LoadRenewal_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('core_message_length', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadRenewal_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadRenewal_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadProvisioning_ParamsSpec, 'arc.mojom.OemCryptoService_LoadProvisioning_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('core_message_length', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('avail_wrapped_private_key_size', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadProvisioning_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadProvisioning_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wrapped_private_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadOemPrivateKey_ParamsSpec, 'arc.mojom.OemCryptoService_LoadOemPrivateKey_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadOemPrivateKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadOemPrivateKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadDrmPrivateKey_ParamsSpec, 'arc.mojom.OemCryptoService_LoadDrmPrivateKey_Params', [
      mojo.internal.StructField('key_type', 0, 0, arc.mojom.OemCryptoPrivateKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wrapped_private_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DecryptCenc_ParamsSpec, 'arc.mojom.OemCryptoService_DecryptCenc_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('iv', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('sub_samples', 16, 0, mojo.internal.Array(arc.mojom.SubSampleDescriptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pattern', 24, 0, arc.mojom.OemCryptoCencEncryptPatternDescSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('secure_buffer', 32, 0, arc.mojom.OemCryptoSecureBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('session', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DecryptCenc_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DecryptCenc_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decrypted_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CopyBuffer_ParamsSpec, 'arc.mojom.OemCryptoService_CopyBuffer_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('out_buffer', 8, 0, arc.mojom.OemCryptoSecureBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('subsample_flags', 20, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_CopyBuffer_ResponseParamsSpec, 'arc.mojom.OemCryptoService_CopyBuffer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.OemCryptoServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OemCryptoServiceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OemCryptoService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OemCryptoServicePendingReceiver,
      handle);
    this.$ = new arc.mojom.OemCryptoServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.OemCryptoServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initializeDeprecated() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.OemCryptoService_InitializeDeprecated_ParamsSpec,
      arc.mojom.OemCryptoService_InitializeDeprecated_ResponseParamsSpec,
      [],
      false);
  }

  initialize(oemcrypto_version) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      arc.mojom.OemCryptoService_Initialize_ParamsSpec,
      arc.mojom.OemCryptoService_Initialize_ResponseParamsSpec,
      [oemcrypto_version],
      false);
  }

  terminate() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.OemCryptoService_Terminate_ParamsSpec,
      arc.mojom.OemCryptoService_Terminate_ResponseParamsSpec,
      [],
      false);
  }

  openSession() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.OemCryptoService_OpenSession_ParamsSpec,
      arc.mojom.OemCryptoService_OpenSession_ResponseParamsSpec,
      [],
      false);
  }

  closeSession(session) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.OemCryptoService_CloseSession_ParamsSpec,
      arc.mojom.OemCryptoService_CloseSession_ResponseParamsSpec,
      [session],
      false);
  }

  generateDerivedKeys(session, mac_key_context, enc_key_context) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.OemCryptoService_GenerateDerivedKeys_ParamsSpec,
      arc.mojom.OemCryptoService_GenerateDerivedKeys_ResponseParamsSpec,
      [session, mac_key_context, enc_key_context],
      false);
  }

  generateNonce(session) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.OemCryptoService_GenerateNonce_ParamsSpec,
      arc.mojom.OemCryptoService_GenerateNonce_ResponseParamsSpec,
      [session],
      false);
  }

  generateSignature(session, message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.OemCryptoService_GenerateSignature_ParamsSpec,
      arc.mojom.OemCryptoService_GenerateSignature_ResponseParamsSpec,
      [session, message],
      false);
  }

  loadKeysV11OrV12(session, message, signature, has_enc_mac_keys, enc_mac_keys_iv_offset, enc_mac_keys_offset, key_array, pst_offset, pst_length) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.OemCryptoService_LoadKeysV11OrV12_ParamsSpec,
      arc.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParamsSpec,
      [session, message, signature, has_enc_mac_keys, enc_mac_keys_iv_offset, enc_mac_keys_offset, key_array, pst_offset, pst_length],
      false);
  }

  refreshKeysV14(session, message, signature, key_array) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.OemCryptoService_RefreshKeysV14_ParamsSpec,
      arc.mojom.OemCryptoService_RefreshKeysV14_ResponseParamsSpec,
      [session, message, signature, key_array],
      false);
  }

  queryKeyControl(session, key_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.OemCryptoService_QueryKeyControl_ParamsSpec,
      arc.mojom.OemCryptoService_QueryKeyControl_ResponseParamsSpec,
      [session, key_id],
      false);
  }

  selectKeyV13(session, key_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.OemCryptoService_SelectKeyV13_ParamsSpec,
      arc.mojom.OemCryptoService_SelectKeyV13_ResponseParamsSpec,
      [session, key_id],
      false);
  }

  decryptCencV15(session, data, is_encrypted, iv, block_offset, secure_buffer, pattern) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.OemCryptoService_DecryptCencV15_ParamsSpec,
      arc.mojom.OemCryptoService_DecryptCencV15_ResponseParamsSpec,
      [session, data, is_encrypted, iv, block_offset, secure_buffer, pattern],
      false);
  }

  genericEncrypt(session, data, iv, algorithm) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.OemCryptoService_GenericEncrypt_ParamsSpec,
      arc.mojom.OemCryptoService_GenericEncrypt_ResponseParamsSpec,
      [session, data, iv, algorithm],
      false);
  }

  genericDecrypt(session, data, iv, algorithm) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.OemCryptoService_GenericDecrypt_ParamsSpec,
      arc.mojom.OemCryptoService_GenericDecrypt_ResponseParamsSpec,
      [session, data, iv, algorithm],
      false);
  }

  genericSign(session, data, algorithm) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.OemCryptoService_GenericSign_ParamsSpec,
      arc.mojom.OemCryptoService_GenericSign_ResponseParamsSpec,
      [session, data, algorithm],
      false);
  }

  genericVerify(session, data, algorithm, signature) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.OemCryptoService_GenericVerify_ParamsSpec,
      arc.mojom.OemCryptoService_GenericVerify_ResponseParamsSpec,
      [session, data, algorithm, signature],
      false);
  }

  copyBufferV14(data, out_buffer) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.OemCryptoService_CopyBufferV14_ParamsSpec,
      arc.mojom.OemCryptoService_CopyBufferV14_ResponseParamsSpec,
      [data, out_buffer],
      false);
  }

  loadTestKeyboxV13() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.OemCryptoService_LoadTestKeyboxV13_ParamsSpec,
      arc.mojom.OemCryptoService_LoadTestKeyboxV13_ResponseParamsSpec,
      [],
      false);
  }

  isRootKeyCertificateValid() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ParamsSpec,
      arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ResponseParamsSpec,
      [],
      false);
  }

  getDeviceId() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.OemCryptoService_GetDeviceId_ParamsSpec,
      arc.mojom.OemCryptoService_GetDeviceId_ResponseParamsSpec,
      [],
      false);
  }

  getKeyData() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.OemCryptoService_GetKeyData_ParamsSpec,
      arc.mojom.OemCryptoService_GetKeyData_ResponseParamsSpec,
      [],
      false);
  }

  getRandom(length) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.OemCryptoService_GetRandom_ParamsSpec,
      arc.mojom.OemCryptoService_GetRandom_ResponseParamsSpec,
      [length],
      false);
  }

  getNumberOfOpenSessions() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ParamsSpec,
      arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ResponseParamsSpec,
      [],
      false);
  }

  getMaxNumberOfSessions() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ParamsSpec,
      arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ResponseParamsSpec,
      [],
      false);
  }

  rewrapDeviceRsaKey(session, message, signature, nonce_offset, enc_rsa_key_offset, enc_rsa_key_length, enc_rsa_key_iv_offset) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ParamsSpec,
      arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ResponseParamsSpec,
      [session, message, signature, nonce_offset, enc_rsa_key_offset, enc_rsa_key_length, enc_rsa_key_iv_offset],
      false);
  }

  loadDeviceRsaKey(session, wrapped_rsa_key) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      arc.mojom.OemCryptoService_LoadDeviceRsaKey_ParamsSpec,
      arc.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParamsSpec,
      [session, wrapped_rsa_key],
      false);
  }

  generateRsaSignature(session, message, padding_scheme) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      arc.mojom.OemCryptoService_GenerateRsaSignature_ParamsSpec,
      arc.mojom.OemCryptoService_GenerateRsaSignature_ResponseParamsSpec,
      [session, message, padding_scheme],
      false);
  }

  deriveKeysFromSessionKey(session, enc_session_key, mac_key_context, enc_key_context) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ParamsSpec,
      arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ResponseParamsSpec,
      [session, enc_session_key, mac_key_context, enc_key_context],
      false);
  }

  securityPatchLevel() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      arc.mojom.OemCryptoService_SecurityPatchLevel_ParamsSpec,
      arc.mojom.OemCryptoService_SecurityPatchLevel_ResponseParamsSpec,
      [],
      false);
  }

  getHdcpCapability() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      arc.mojom.OemCryptoService_GetHdcpCapability_ParamsSpec,
      arc.mojom.OemCryptoService_GetHdcpCapability_ResponseParamsSpec,
      [],
      false);
  }

  updateUsageTable() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      arc.mojom.OemCryptoService_UpdateUsageTable_ParamsSpec,
      arc.mojom.OemCryptoService_UpdateUsageTable_ResponseParamsSpec,
      [],
      false);
  }

  deactivateUsageEntryV12(pst) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ParamsSpec,
      arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ResponseParamsSpec,
      [pst],
      false);
  }

  reportUsage(session, pst) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      arc.mojom.OemCryptoService_ReportUsage_ParamsSpec,
      arc.mojom.OemCryptoService_ReportUsage_ResponseParamsSpec,
      [session, pst],
      false);
  }

  deleteUsageEntry(session, pst_offset, pst_length, message, signature) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      arc.mojom.OemCryptoService_DeleteUsageEntry_ParamsSpec,
      arc.mojom.OemCryptoService_DeleteUsageEntry_ResponseParamsSpec,
      [session, pst_offset, pst_length, message, signature],
      false);
  }

  forceDeleteUsageEntry(pst) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ParamsSpec,
      arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ResponseParamsSpec,
      [pst],
      false);
  }

  deleteOldUsageTable() {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      arc.mojom.OemCryptoService_DeleteOldUsageTable_ParamsSpec,
      arc.mojom.OemCryptoService_DeleteOldUsageTable_ResponseParamsSpec,
      [],
      false);
  }

  getProvisioningMethod() {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      arc.mojom.OemCryptoService_GetProvisioningMethod_ParamsSpec,
      arc.mojom.OemCryptoService_GetProvisioningMethod_ResponseParamsSpec,
      [],
      false);
  }

  supportedCertificates() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      arc.mojom.OemCryptoService_SupportedCertificates_ParamsSpec,
      arc.mojom.OemCryptoService_SupportedCertificates_ResponseParamsSpec,
      [],
      false);
  }

  isSrmUpdateSupported() {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      arc.mojom.OemCryptoService_IsSrmUpdateSupported_ParamsSpec,
      arc.mojom.OemCryptoService_IsSrmUpdateSupported_ResponseParamsSpec,
      [],
      false);
  }

  getCurrentSrmVersion() {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      arc.mojom.OemCryptoService_GetCurrentSrmVersion_ParamsSpec,
      arc.mojom.OemCryptoService_GetCurrentSrmVersion_ResponseParamsSpec,
      [],
      false);
  }

  loadSrm(buffer) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      arc.mojom.OemCryptoService_LoadSrm_ParamsSpec,
      arc.mojom.OemCryptoService_LoadSrm_ResponseParamsSpec,
      [buffer],
      false);
  }

  removeSrm() {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      arc.mojom.OemCryptoService_RemoveSrm_ParamsSpec,
      arc.mojom.OemCryptoService_RemoveSrm_ResponseParamsSpec,
      [],
      false);
  }

  createUsageTableHeader(avail_header_length) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      arc.mojom.OemCryptoService_CreateUsageTableHeader_ParamsSpec,
      arc.mojom.OemCryptoService_CreateUsageTableHeader_ResponseParamsSpec,
      [avail_header_length],
      false);
  }

  loadUsageTableHeader(buffer) {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      arc.mojom.OemCryptoService_LoadUsageTableHeader_ParamsSpec,
      arc.mojom.OemCryptoService_LoadUsageTableHeader_ResponseParamsSpec,
      [buffer],
      false);
  }

  createNewUsageEntry(session) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      arc.mojom.OemCryptoService_CreateNewUsageEntry_ParamsSpec,
      arc.mojom.OemCryptoService_CreateNewUsageEntry_ResponseParamsSpec,
      [session],
      false);
  }

  loadUsageEntry(session, index, buffer) {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      arc.mojom.OemCryptoService_LoadUsageEntry_ParamsSpec,
      arc.mojom.OemCryptoService_LoadUsageEntry_ResponseParamsSpec,
      [session, index, buffer],
      false);
  }

  updateUsageEntry(session, avail_header_length, avail_entry_length) {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      arc.mojom.OemCryptoService_UpdateUsageEntry_ParamsSpec,
      arc.mojom.OemCryptoService_UpdateUsageEntry_ResponseParamsSpec,
      [session, avail_header_length, avail_entry_length],
      false);
  }

  deactivateUsageEntry(session, pst) {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      arc.mojom.OemCryptoService_DeactivateUsageEntry_ParamsSpec,
      arc.mojom.OemCryptoService_DeactivateUsageEntry_ResponseParamsSpec,
      [session, pst],
      false);
  }

  shrinkUsageTableHeader(new_entry_count, avail_header_length) {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ParamsSpec,
      arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ResponseParamsSpec,
      [new_entry_count, avail_header_length],
      false);
  }

  moveEntry(session, new_index) {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      arc.mojom.OemCryptoService_MoveEntry_ParamsSpec,
      arc.mojom.OemCryptoService_MoveEntry_ResponseParamsSpec,
      [session, new_index],
      false);
  }

  copyOldUsageEntry(session, pst) {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      arc.mojom.OemCryptoService_CopyOldUsageEntry_ParamsSpec,
      arc.mojom.OemCryptoService_CopyOldUsageEntry_ResponseParamsSpec,
      [session, pst],
      false);
  }

  createOldUsageEntry(time_since_license_received, time_since_first_decrypt, time_since_last_decrypt, status, server_mac_key, client_mac_key, pst) {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      arc.mojom.OemCryptoService_CreateOldUsageEntry_ParamsSpec,
      arc.mojom.OemCryptoService_CreateOldUsageEntry_ResponseParamsSpec,
      [time_since_license_received, time_since_first_decrypt, time_since_last_decrypt, status, server_mac_key, client_mac_key, pst],
      false);
  }

  getAnalogOutputFlags() {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
      arc.mojom.OemCryptoService_GetAnalogOutputFlags_ParamsSpec,
      arc.mojom.OemCryptoService_GetAnalogOutputFlags_ResponseParamsSpec,
      [],
      false);
  }

  loadTestKeybox(buffer) {
    // Ordinal: 54
    return this.proxy.sendMessage(
      54,  // ordinal
      arc.mojom.OemCryptoService_LoadTestKeybox_ParamsSpec,
      arc.mojom.OemCryptoService_LoadTestKeybox_ResponseParamsSpec,
      [buffer],
      false);
  }

  loadEntitledContentKeysV14(session, key_array) {
    // Ordinal: 55
    return this.proxy.sendMessage(
      55,  // ordinal
      arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ParamsSpec,
      arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParamsSpec,
      [session, key_array],
      false);
  }

  selectKey(session, content_key_id, cipher_mode) {
    // Ordinal: 56
    return this.proxy.sendMessage(
      56,  // ordinal
      arc.mojom.OemCryptoService_SelectKey_ParamsSpec,
      arc.mojom.OemCryptoService_SelectKey_ResponseParamsSpec,
      [session, content_key_id, cipher_mode],
      false);
  }

  loadKeysV14(session, message, signature, has_enc_mac_keys, enc_mac_keys_iv_offset, enc_mac_keys_offset, key_array, pst_offset, pst_length, srm_requirement, license_type) {
    // Ordinal: 57
    return this.proxy.sendMessage(
      57,  // ordinal
      arc.mojom.OemCryptoService_LoadKeysV14_ParamsSpec,
      arc.mojom.OemCryptoService_LoadKeysV14_ResponseParamsSpec,
      [session, message, signature, has_enc_mac_keys, enc_mac_keys_iv_offset, enc_mac_keys_offset, key_array, pst_offset, pst_length, srm_requirement, license_type],
      false);
  }

  loadKeys(session, message, signature, enc_mac_keys_iv, enc_mac_keys, key_array, pst, srm_restriction_data, license_type) {
    // Ordinal: 58
    return this.proxy.sendMessage(
      58,  // ordinal
      arc.mojom.OemCryptoService_LoadKeys_ParamsSpec,
      arc.mojom.OemCryptoService_LoadKeys_ResponseParamsSpec,
      [session, message, signature, enc_mac_keys_iv, enc_mac_keys, key_array, pst, srm_restriction_data, license_type],
      false);
  }

  resourceRatingTier() {
    // Ordinal: 59
    return this.proxy.sendMessage(
      59,  // ordinal
      arc.mojom.OemCryptoService_ResourceRatingTier_ParamsSpec,
      arc.mojom.OemCryptoService_ResourceRatingTier_ResponseParamsSpec,
      [],
      false);
  }

  buildInformation() {
    // Ordinal: 60
    return this.proxy.sendMessage(
      60,  // ordinal
      arc.mojom.OemCryptoService_BuildInformation_ParamsSpec,
      arc.mojom.OemCryptoService_BuildInformation_ResponseParamsSpec,
      [],
      false);
  }

  refreshKeys(session, message, signature, key_array) {
    // Ordinal: 61
    return this.proxy.sendMessage(
      61,  // ordinal
      arc.mojom.OemCryptoService_RefreshKeys_ParamsSpec,
      arc.mojom.OemCryptoService_RefreshKeys_ResponseParamsSpec,
      [session, message, signature, key_array],
      false);
  }

  loadEntitledContentKeys(session, message, key_array) {
    // Ordinal: 62
    return this.proxy.sendMessage(
      62,  // ordinal
      arc.mojom.OemCryptoService_LoadEntitledContentKeys_ParamsSpec,
      arc.mojom.OemCryptoService_LoadEntitledContentKeys_ResponseParamsSpec,
      [session, message, key_array],
      false);
  }

  getOemPublicCertificate() {
    // Ordinal: 63
    return this.proxy.sendMessage(
      63,  // ordinal
      arc.mojom.OemCryptoService_GetOemPublicCertificate_ParamsSpec,
      arc.mojom.OemCryptoService_GetOemPublicCertificate_ResponseParamsSpec,
      [],
      false);
  }

  maximumUsageTableHeaderSize() {
    // Ordinal: 64
    return this.proxy.sendMessage(
      64,  // ordinal
      arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ParamsSpec,
      arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ResponseParamsSpec,
      [],
      false);
  }

  isAntiRollbackHwPresent() {
    // Ordinal: 65
    return this.proxy.sendMessage(
      65,  // ordinal
      arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ParamsSpec,
      arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ResponseParamsSpec,
      [],
      false);
  }

  minorApiVersion() {
    // Ordinal: 66
    return this.proxy.sendMessage(
      66,  // ordinal
      arc.mojom.OemCryptoService_MinorApiVersion_ParamsSpec,
      arc.mojom.OemCryptoService_MinorApiVersion_ResponseParamsSpec,
      [],
      false);
  }

  prepAndSignLicenseRequest(session, message, core_message_size, avail_signature_size) {
    // Ordinal: 67
    return this.proxy.sendMessage(
      67,  // ordinal
      arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ParamsSpec,
      arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParamsSpec,
      [session, message, core_message_size, avail_signature_size],
      false);
  }

  prepAndSignRenewalRequest(session, message, core_message_size, avail_signature_size) {
    // Ordinal: 68
    return this.proxy.sendMessage(
      68,  // ordinal
      arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ParamsSpec,
      arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParamsSpec,
      [session, message, core_message_size, avail_signature_size],
      false);
  }

  prepAndSignProvisioningRequest(session, message, core_message_size, avail_signature_size) {
    // Ordinal: 69
    return this.proxy.sendMessage(
      69,  // ordinal
      arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ParamsSpec,
      arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParamsSpec,
      [session, message, core_message_size, avail_signature_size],
      false);
  }

  loadLicense(session, message, core_message_length, signature) {
    // Ordinal: 70
    return this.proxy.sendMessage(
      70,  // ordinal
      arc.mojom.OemCryptoService_LoadLicense_ParamsSpec,
      arc.mojom.OemCryptoService_LoadLicense_ResponseParamsSpec,
      [session, message, core_message_length, signature],
      false);
  }

  loadRenewal(session, message, core_message_length, signature) {
    // Ordinal: 71
    return this.proxy.sendMessage(
      71,  // ordinal
      arc.mojom.OemCryptoService_LoadRenewal_ParamsSpec,
      arc.mojom.OemCryptoService_LoadRenewal_ResponseParamsSpec,
      [session, message, core_message_length, signature],
      false);
  }

  loadProvisioning(session, message, core_message_length, signature, avail_wrapped_private_key_size) {
    // Ordinal: 72
    return this.proxy.sendMessage(
      72,  // ordinal
      arc.mojom.OemCryptoService_LoadProvisioning_ParamsSpec,
      arc.mojom.OemCryptoService_LoadProvisioning_ResponseParamsSpec,
      [session, message, core_message_length, signature, avail_wrapped_private_key_size],
      false);
  }

  loadOemPrivateKey(session) {
    // Ordinal: 73
    return this.proxy.sendMessage(
      73,  // ordinal
      arc.mojom.OemCryptoService_LoadOemPrivateKey_ParamsSpec,
      arc.mojom.OemCryptoService_LoadOemPrivateKey_ResponseParamsSpec,
      [session],
      false);
  }

  loadDrmPrivateKey(session, key_type, wrapped_private_key) {
    // Ordinal: 74
    return this.proxy.sendMessage(
      74,  // ordinal
      arc.mojom.OemCryptoService_LoadDrmPrivateKey_ParamsSpec,
      arc.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParamsSpec,
      [session, key_type, wrapped_private_key],
      false);
  }

  decryptCenc(session, data, iv, sub_samples, pattern, secure_buffer) {
    // Ordinal: 75
    return this.proxy.sendMessage(
      75,  // ordinal
      arc.mojom.OemCryptoService_DecryptCenc_ParamsSpec,
      arc.mojom.OemCryptoService_DecryptCenc_ResponseParamsSpec,
      [session, data, iv, sub_samples, pattern, secure_buffer],
      false);
  }

  copyBuffer(session, data, out_buffer, subsample_flags) {
    // Ordinal: 76
    return this.proxy.sendMessage(
      76,  // ordinal
      arc.mojom.OemCryptoService_CopyBuffer_ParamsSpec,
      arc.mojom.OemCryptoService_CopyBuffer_ResponseParamsSpec,
      [session, data, out_buffer, subsample_flags],
      false);
  }

};

arc.mojom.OemCryptoService.getRemote = function() {
  let remote = new arc.mojom.OemCryptoServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OemCryptoService',
    'context');
  return remote.$;
};

arc.mojom.OemCryptoServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(36, 1); // Default ordinal 36 -> Index 1
    this.ordinalMap.set(1, 2); // Default ordinal 1 -> Index 2
    this.ordinalMap.set(2, 3); // Default ordinal 2 -> Index 3
    this.ordinalMap.set(3, 4); // Default ordinal 3 -> Index 4
    this.ordinalMap.set(4, 5); // Default ordinal 4 -> Index 5
    this.ordinalMap.set(5, 6); // Default ordinal 5 -> Index 6
    this.ordinalMap.set(6, 7); // Default ordinal 6 -> Index 7
    this.ordinalMap.set(7, 8); // Default ordinal 7 -> Index 8
    this.ordinalMap.set(8, 9); // Default ordinal 8 -> Index 9
    this.ordinalMap.set(9, 10); // Default ordinal 9 -> Index 10
    this.ordinalMap.set(10, 11); // Default ordinal 10 -> Index 11
    this.ordinalMap.set(11, 12); // Default ordinal 11 -> Index 12
    this.ordinalMap.set(12, 13); // Default ordinal 12 -> Index 13
    this.ordinalMap.set(13, 14); // Default ordinal 13 -> Index 14
    this.ordinalMap.set(14, 15); // Default ordinal 14 -> Index 15
    this.ordinalMap.set(15, 16); // Default ordinal 15 -> Index 16
    this.ordinalMap.set(16, 17); // Default ordinal 16 -> Index 17
    this.ordinalMap.set(17, 18); // Default ordinal 17 -> Index 18
    this.ordinalMap.set(18, 19); // Default ordinal 18 -> Index 19
    this.ordinalMap.set(19, 20); // Default ordinal 19 -> Index 20
    this.ordinalMap.set(20, 21); // Default ordinal 20 -> Index 21
    this.ordinalMap.set(21, 22); // Default ordinal 21 -> Index 22
    this.ordinalMap.set(22, 23); // Default ordinal 22 -> Index 23
    this.ordinalMap.set(23, 24); // Default ordinal 23 -> Index 24
    this.ordinalMap.set(24, 25); // Default ordinal 24 -> Index 25
    this.ordinalMap.set(25, 26); // Default ordinal 25 -> Index 26
    this.ordinalMap.set(26, 27); // Default ordinal 26 -> Index 27
    this.ordinalMap.set(27, 28); // Default ordinal 27 -> Index 28
    this.ordinalMap.set(28, 29); // Default ordinal 28 -> Index 29
    this.ordinalMap.set(29, 30); // Default ordinal 29 -> Index 30
    this.ordinalMap.set(30, 31); // Default ordinal 30 -> Index 31
    this.ordinalMap.set(31, 32); // Default ordinal 31 -> Index 32
    this.ordinalMap.set(32, 33); // Default ordinal 32 -> Index 33
    this.ordinalMap.set(33, 34); // Default ordinal 33 -> Index 34
    this.ordinalMap.set(34, 35); // Default ordinal 34 -> Index 35
    this.ordinalMap.set(35, 36); // Default ordinal 35 -> Index 36
    this.ordinalMap.set(37, 37); // Default ordinal 37 -> Index 37
    this.ordinalMap.set(38, 38); // Default ordinal 38 -> Index 38
    this.ordinalMap.set(39, 39); // Default ordinal 39 -> Index 39
    this.ordinalMap.set(40, 40); // Default ordinal 40 -> Index 40
    this.ordinalMap.set(41, 41); // Default ordinal 41 -> Index 41
    this.ordinalMap.set(42, 42); // Default ordinal 42 -> Index 42
    this.ordinalMap.set(43, 43); // Default ordinal 43 -> Index 43
    this.ordinalMap.set(44, 44); // Default ordinal 44 -> Index 44
    this.ordinalMap.set(45, 45); // Default ordinal 45 -> Index 45
    this.ordinalMap.set(46, 46); // Default ordinal 46 -> Index 46
    this.ordinalMap.set(47, 47); // Default ordinal 47 -> Index 47
    this.ordinalMap.set(48, 48); // Default ordinal 48 -> Index 48
    this.ordinalMap.set(49, 49); // Default ordinal 49 -> Index 49
    this.ordinalMap.set(50, 50); // Default ordinal 50 -> Index 50
    this.ordinalMap.set(51, 51); // Default ordinal 51 -> Index 51
    this.ordinalMap.set(52, 52); // Default ordinal 52 -> Index 52
    this.ordinalMap.set(53, 53); // Default ordinal 53 -> Index 53
    this.ordinalMap.set(54, 54); // Default ordinal 54 -> Index 54
    this.ordinalMap.set(55, 55); // Default ordinal 55 -> Index 55
    this.ordinalMap.set(56, 56); // Default ordinal 56 -> Index 56
    this.ordinalMap.set(57, 57); // Default ordinal 57 -> Index 57
    this.ordinalMap.set(58, 58); // Default ordinal 58 -> Index 58
    this.ordinalMap.set(59, 59); // Default ordinal 59 -> Index 59
    this.ordinalMap.set(60, 60); // Default ordinal 60 -> Index 60
    this.ordinalMap.set(61, 61); // Default ordinal 61 -> Index 61
    this.ordinalMap.set(62, 62); // Default ordinal 62 -> Index 62
    this.ordinalMap.set(63, 63); // Default ordinal 63 -> Index 63
    this.ordinalMap.set(64, 64); // Default ordinal 64 -> Index 64
    this.ordinalMap.set(65, 65); // Default ordinal 65 -> Index 65
    this.ordinalMap.set(66, 66); // Default ordinal 66 -> Index 66
    this.ordinalMap.set(67, 67); // Default ordinal 67 -> Index 67
    this.ordinalMap.set(68, 68); // Default ordinal 68 -> Index 68
    this.ordinalMap.set(69, 69); // Default ordinal 69 -> Index 69
    this.ordinalMap.set(70, 70); // Default ordinal 70 -> Index 70
    this.ordinalMap.set(71, 71); // Default ordinal 71 -> Index 71
    this.ordinalMap.set(72, 72); // Default ordinal 72 -> Index 72
    this.ordinalMap.set(73, 73); // Default ordinal 73 -> Index 73
    this.ordinalMap.set(74, 74); // Default ordinal 74 -> Index 74
    this.ordinalMap.set(75, 75); // Default ordinal 75 -> Index 75
    this.ordinalMap.set(76, 76); // Default ordinal 76 -> Index 76
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: InitializeDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.OemCryptoService_InitializeDeprecated_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_Initialize_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_Terminate_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_OpenSession_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_CloseSession_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GenerateDerivedKeys_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GenerateNonce_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GenerateSignature_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadKeysV11OrV12_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_RefreshKeysV14_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_QueryKeyControl_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_SelectKeyV13_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_DecryptCencV15_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GenericEncrypt_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GenericDecrypt_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GenericSign_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GenericVerify_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_CopyBufferV14_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadTestKeyboxV13_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GetDeviceId_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GetKeyData_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GetRandom_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadDeviceRsaKey_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GenerateRsaSignature_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_SecurityPatchLevel_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GetHdcpCapability_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_UpdateUsageTable_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_ReportUsage_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_DeleteUsageEntry_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_DeleteOldUsageTable_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GetProvisioningMethod_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_SupportedCertificates_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_IsSrmUpdateSupported_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GetCurrentSrmVersion_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadSrm_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_RemoveSrm_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_CreateUsageTableHeader_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadUsageTableHeader_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_CreateNewUsageEntry_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadUsageEntry_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_UpdateUsageEntry_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_DeactivateUsageEntry_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_MoveEntry_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_CopyOldUsageEntry_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_CreateOldUsageEntry_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GetAnalogOutputFlags_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadTestKeybox_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_SelectKey_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadKeysV14_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadKeys_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_ResourceRatingTier_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_BuildInformation_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_RefreshKeys_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadEntitledContentKeys_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_GetOemPublicCertificate_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_MinorApiVersion_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadLicense_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadRenewal_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadProvisioning_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadOemPrivateKey_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_LoadDrmPrivateKey_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_DecryptCenc_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(arc.mojom.OemCryptoService_CopyBuffer_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_InitializeDeprecated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initializeDeprecated');
          const result = this.impl.initializeDeprecated();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_InitializeDeprecated_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_Initialize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.oemcrypto_version);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_Terminate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.terminate');
          const result = this.impl.terminate();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_Terminate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_OpenSession_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openSession');
          const result = this.impl.openSession();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_OpenSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_CloseSession_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeSession');
          const result = this.impl.closeSession(params.session);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_CloseSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GenerateDerivedKeys_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.generateDerivedKeys');
          const result = this.impl.generateDerivedKeys(params.session, params.mac_key_context, params.enc_key_context);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GenerateDerivedKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GenerateNonce_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.generateNonce');
          const result = this.impl.generateNonce(params.session);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GenerateNonce_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GenerateSignature_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.generateSignature');
          const result = this.impl.generateSignature(params.session, params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GenerateSignature_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadKeysV11OrV12_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadKeysV11OrV12');
          const result = this.impl.loadKeysV11OrV12(params.session, params.message, params.signature, params.has_enc_mac_keys, params.enc_mac_keys_iv_offset, params.enc_mac_keys_offset, params.key_array, params.pst_offset, params.pst_length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_RefreshKeysV14_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.refreshKeysV14');
          const result = this.impl.refreshKeysV14(params.session, params.message, params.signature, params.key_array);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_RefreshKeysV14_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_QueryKeyControl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.queryKeyControl');
          const result = this.impl.queryKeyControl(params.session, params.key_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_QueryKeyControl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_SelectKeyV13_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.selectKeyV13');
          const result = this.impl.selectKeyV13(params.session, params.key_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_SelectKeyV13_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_DecryptCencV15_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.decryptCencV15');
          const result = this.impl.decryptCencV15(params.session, params.data, params.is_encrypted, params.iv, params.block_offset, params.secure_buffer, params.pattern);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_DecryptCencV15_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GenericEncrypt_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.genericEncrypt');
          const result = this.impl.genericEncrypt(params.session, params.data, params.iv, params.algorithm);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GenericEncrypt_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GenericDecrypt_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.genericDecrypt');
          const result = this.impl.genericDecrypt(params.session, params.data, params.iv, params.algorithm);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GenericDecrypt_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GenericSign_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.genericSign');
          const result = this.impl.genericSign(params.session, params.data, params.algorithm);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GenericSign_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GenericVerify_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.genericVerify');
          const result = this.impl.genericVerify(params.session, params.data, params.algorithm, params.signature);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GenericVerify_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_CopyBufferV14_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.copyBufferV14');
          const result = this.impl.copyBufferV14(params.data, params.out_buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_CopyBufferV14_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadTestKeyboxV13_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadTestKeyboxV13');
          const result = this.impl.loadTestKeyboxV13();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadTestKeyboxV13_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isRootKeyCertificateValid');
          const result = this.impl.isRootKeyCertificateValid();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_IsRootKeyCertificateValid_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GetDeviceId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDeviceId');
          const result = this.impl.getDeviceId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GetDeviceId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GetKeyData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getKeyData');
          const result = this.impl.getKeyData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GetKeyData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GetRandom_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getRandom');
          const result = this.impl.getRandom(params.length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GetRandom_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getNumberOfOpenSessions');
          const result = this.impl.getNumberOfOpenSessions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GetNumberOfOpenSessions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getMaxNumberOfSessions');
          const result = this.impl.getMaxNumberOfSessions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GetMaxNumberOfSessions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.rewrapDeviceRsaKey');
          const result = this.impl.rewrapDeviceRsaKey(params.session, params.message, params.signature, params.nonce_offset, params.enc_rsa_key_offset, params.enc_rsa_key_length, params.enc_rsa_key_iv_offset);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_RewrapDeviceRsaKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadDeviceRsaKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadDeviceRsaKey');
          const result = this.impl.loadDeviceRsaKey(params.session, params.wrapped_rsa_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GenerateRsaSignature_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.generateRsaSignature');
          const result = this.impl.generateRsaSignature(params.session, params.message, params.padding_scheme);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GenerateRsaSignature_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deriveKeysFromSessionKey');
          const result = this.impl.deriveKeysFromSessionKey(params.session, params.enc_session_key, params.mac_key_context, params.enc_key_context);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_DeriveKeysFromSessionKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_SecurityPatchLevel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.securityPatchLevel');
          const result = this.impl.securityPatchLevel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_SecurityPatchLevel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GetHdcpCapability_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getHdcpCapability');
          const result = this.impl.getHdcpCapability();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GetHdcpCapability_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_UpdateUsageTable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateUsageTable');
          const result = this.impl.updateUsageTable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_UpdateUsageTable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deactivateUsageEntryV12');
          const result = this.impl.deactivateUsageEntryV12(params.pst);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_DeactivateUsageEntryV12_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_ReportUsage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reportUsage');
          const result = this.impl.reportUsage(params.session, params.pst);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_ReportUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_DeleteUsageEntry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteUsageEntry');
          const result = this.impl.deleteUsageEntry(params.session, params.pst_offset, params.pst_length, params.message, params.signature);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_DeleteUsageEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.forceDeleteUsageEntry');
          const result = this.impl.forceDeleteUsageEntry(params.pst);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_ForceDeleteUsageEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_DeleteOldUsageTable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteOldUsageTable');
          const result = this.impl.deleteOldUsageTable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_DeleteOldUsageTable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GetProvisioningMethod_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getProvisioningMethod');
          const result = this.impl.getProvisioningMethod();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GetProvisioningMethod_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_SupportedCertificates_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.supportedCertificates');
          const result = this.impl.supportedCertificates();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_SupportedCertificates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_IsSrmUpdateSupported_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isSrmUpdateSupported');
          const result = this.impl.isSrmUpdateSupported();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_IsSrmUpdateSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GetCurrentSrmVersion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCurrentSrmVersion');
          const result = this.impl.getCurrentSrmVersion();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GetCurrentSrmVersion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadSrm_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadSrm');
          const result = this.impl.loadSrm(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadSrm_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_RemoveSrm_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeSrm');
          const result = this.impl.removeSrm();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_RemoveSrm_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_CreateUsageTableHeader_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createUsageTableHeader');
          const result = this.impl.createUsageTableHeader(params.avail_header_length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_CreateUsageTableHeader_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadUsageTableHeader_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadUsageTableHeader');
          const result = this.impl.loadUsageTableHeader(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadUsageTableHeader_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_CreateNewUsageEntry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createNewUsageEntry');
          const result = this.impl.createNewUsageEntry(params.session);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_CreateNewUsageEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadUsageEntry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadUsageEntry');
          const result = this.impl.loadUsageEntry(params.session, params.index, params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadUsageEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_UpdateUsageEntry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateUsageEntry');
          const result = this.impl.updateUsageEntry(params.session, params.avail_header_length, params.avail_entry_length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_UpdateUsageEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_DeactivateUsageEntry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deactivateUsageEntry');
          const result = this.impl.deactivateUsageEntry(params.session, params.pst);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_DeactivateUsageEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.shrinkUsageTableHeader');
          const result = this.impl.shrinkUsageTableHeader(params.new_entry_count, params.avail_header_length);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_ShrinkUsageTableHeader_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_MoveEntry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.moveEntry');
          const result = this.impl.moveEntry(params.session, params.new_index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_MoveEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_CopyOldUsageEntry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.copyOldUsageEntry');
          const result = this.impl.copyOldUsageEntry(params.session, params.pst);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_CopyOldUsageEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_CreateOldUsageEntry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createOldUsageEntry');
          const result = this.impl.createOldUsageEntry(params.time_since_license_received, params.time_since_first_decrypt, params.time_since_last_decrypt, params.status, params.server_mac_key, params.client_mac_key, params.pst);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_CreateOldUsageEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GetAnalogOutputFlags_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAnalogOutputFlags');
          const result = this.impl.getAnalogOutputFlags();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GetAnalogOutputFlags_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadTestKeybox_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadTestKeybox');
          const result = this.impl.loadTestKeybox(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadTestKeybox_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadEntitledContentKeysV14');
          const result = this.impl.loadEntitledContentKeysV14(params.session, params.key_array);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_SelectKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.selectKey');
          const result = this.impl.selectKey(params.session, params.content_key_id, params.cipher_mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_SelectKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadKeysV14_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadKeysV14');
          const result = this.impl.loadKeysV14(params.session, params.message, params.signature, params.has_enc_mac_keys, params.enc_mac_keys_iv_offset, params.enc_mac_keys_offset, params.key_array, params.pst_offset, params.pst_length, params.srm_requirement, params.license_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadKeysV14_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 58: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadKeys_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadKeys');
          const result = this.impl.loadKeys(params.session, params.message, params.signature, params.enc_mac_keys_iv, params.enc_mac_keys, params.key_array, params.pst, params.srm_restriction_data, params.license_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 59: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_ResourceRatingTier_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resourceRatingTier');
          const result = this.impl.resourceRatingTier();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_ResourceRatingTier_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 60: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_BuildInformation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.buildInformation');
          const result = this.impl.buildInformation();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_BuildInformation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 61: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_RefreshKeys_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.refreshKeys');
          const result = this.impl.refreshKeys(params.session, params.message, params.signature, params.key_array);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_RefreshKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 62: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadEntitledContentKeys_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadEntitledContentKeys');
          const result = this.impl.loadEntitledContentKeys(params.session, params.message, params.key_array);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadEntitledContentKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 63: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_GetOemPublicCertificate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getOemPublicCertificate');
          const result = this.impl.getOemPublicCertificate();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_GetOemPublicCertificate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 64: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.maximumUsageTableHeaderSize');
          const result = this.impl.maximumUsageTableHeaderSize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_MaximumUsageTableHeaderSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isAntiRollbackHwPresent');
          const result = this.impl.isAntiRollbackHwPresent();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_IsAntiRollbackHwPresent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_MinorApiVersion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.minorApiVersion');
          const result = this.impl.minorApiVersion();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_MinorApiVersion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.prepAndSignLicenseRequest');
          const result = this.impl.prepAndSignLicenseRequest(params.session, params.message, params.core_message_size, params.avail_signature_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.prepAndSignRenewalRequest');
          const result = this.impl.prepAndSignRenewalRequest(params.session, params.message, params.core_message_size, params.avail_signature_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.prepAndSignProvisioningRequest');
          const result = this.impl.prepAndSignProvisioningRequest(params.session, params.message, params.core_message_size, params.avail_signature_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadLicense_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadLicense');
          const result = this.impl.loadLicense(params.session, params.message, params.core_message_length, params.signature);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadLicense_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadRenewal_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadRenewal');
          const result = this.impl.loadRenewal(params.session, params.message, params.core_message_length, params.signature);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadRenewal_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 72: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadProvisioning_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadProvisioning');
          const result = this.impl.loadProvisioning(params.session, params.message, params.core_message_length, params.signature, params.avail_wrapped_private_key_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadProvisioning_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 73: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadOemPrivateKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadOemPrivateKey');
          const result = this.impl.loadOemPrivateKey(params.session);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadOemPrivateKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 74: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_LoadDrmPrivateKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadDrmPrivateKey');
          const result = this.impl.loadDrmPrivateKey(params.session, params.key_type, params.wrapped_private_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 75: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_DecryptCenc_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.decryptCenc');
          const result = this.impl.decryptCenc(params.session, params.data, params.iv, params.sub_samples, params.pattern, params.secure_buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_DecryptCenc_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 76: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.OemCryptoService_CopyBuffer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.copyBuffer');
          const result = this.impl.copyBuffer(params.session, params.data, params.out_buffer, params.subsample_flags);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoService_CopyBuffer_ResponseParamsSpec);
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

arc.mojom.OemCryptoServiceReceiver = arc.mojom.OemCryptoServiceReceiver;

arc.mojom.OemCryptoServicePtr = arc.mojom.OemCryptoServiceRemote;
arc.mojom.OemCryptoServiceRequest = arc.mojom.OemCryptoServicePendingReceiver;


// Interface: OemCryptoHost
mojo.internal.Struct(
    arc.mojom.OemCryptoHost_Connect_ParamsSpec, 'arc.mojom.OemCryptoHost_Connect_Params', [
      mojo.internal.StructField('oemcryptor', 0, 0, mojo.internal.InterfaceRequest(arc.mojom.OemCryptoServiceSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.OemCryptoHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OemCryptoHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OemCryptoHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OemCryptoHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.OemCryptoHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.OemCryptoHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(oemcryptor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.OemCryptoHost_Connect_ParamsSpec,
      null,
      [oemcryptor],
      false);
  }

};

arc.mojom.OemCryptoHost.getRemote = function() {
  let remote = new arc.mojom.OemCryptoHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OemCryptoHost',
    'context');
  return remote.$;
};

arc.mojom.OemCryptoHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Connect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.OemCryptoHost_Connect_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.OemCryptoHost_Connect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.oemcryptor);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.OemCryptoHostReceiver = arc.mojom.OemCryptoHostReceiver;

arc.mojom.OemCryptoHostPtr = arc.mojom.OemCryptoHostRemote;
arc.mojom.OemCryptoHostRequest = arc.mojom.OemCryptoHostPendingReceiver;


// Interface: OemCryptoInstance
mojo.internal.Struct(
    arc.mojom.OemCryptoInstance_Init_ParamsSpec, 'arc.mojom.OemCryptoInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.OemCryptoHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoInstance_Init_ResponseParamsSpec, 'arc.mojom.OemCryptoInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.OemCryptoInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OemCryptoInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OemCryptoInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OemCryptoInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.OemCryptoInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.OemCryptoInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.OemCryptoInstance_Init_ParamsSpec,
      arc.mojom.OemCryptoInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.OemCryptoInstance.getRemote = function() {
  let remote = new arc.mojom.OemCryptoInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OemCryptoInstance',
    'context');
  return remote.$;
};

arc.mojom.OemCryptoInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(1, 0); // Default ordinal 1 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.OemCryptoInstance_Init_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.OemCryptoInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OemCryptoInstance_Init_ResponseParamsSpec);
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

arc.mojom.OemCryptoInstanceReceiver = arc.mojom.OemCryptoInstanceReceiver;

arc.mojom.OemCryptoInstancePtr = arc.mojom.OemCryptoInstanceRemote;
arc.mojom.OemCryptoInstanceRequest = arc.mojom.OemCryptoInstancePendingReceiver;

