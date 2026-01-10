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
      mojo.internal.StructField('key_id_offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_id_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_data_iv_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_data_offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_data_length', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_control_iv_offset', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_control_offset', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('cipher_mode', 32, 0, arc.mojom.OemCryptoCipherModeSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('content_key_data_iv', 16, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
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
      mojo.internal.StructField('has_key_control_iv', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('key_control_iv_offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_control_offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
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
      mojo.internal.StructField('signature', 0, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('clock_security_level', 9, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('seconds_since_license_received', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('seconds_since_first_decrypt', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('seconds_since_last_decrypt', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SubSampleDescription
mojo.internal.Struct(
    arc.mojom.SubSampleDescriptionSpec, 'arc.mojom.SubSampleDescription', [
      mojo.internal.StructField('num_bytes_clear', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_bytes_encrypted', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('subsample_flags', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('block_offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mac_key_context', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('enc_key_context', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('has_enc_mac_keys', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enc_mac_keys_iv_offset', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enc_mac_keys_offset', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_array', 40, 0, mojo.internal.Array(arc.mojom.OemCryptoKeyObjectV14Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pst_offset', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pst_length', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadKeysV11OrV12_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_RefreshKeysV14_ParamsSpec, 'arc.mojom.OemCryptoService_RefreshKeysV14_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('key_array', 24, 0, mojo.internal.Array(arc.mojom.OemCryptoKeyRefreshObjectV14Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_RefreshKeysV14_ResponseParamsSpec, 'arc.mojom.OemCryptoService_RefreshKeysV14_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_QueryKeyControl_ParamsSpec, 'arc.mojom.OemCryptoService_QueryKeyControl_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_SelectKeyV13_ResponseParamsSpec, 'arc.mojom.OemCryptoService_SelectKeyV13_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DecryptCencV15_ParamsSpec, 'arc.mojom.OemCryptoService_DecryptCencV15_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('is_encrypted', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('iv', 24, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('block_offset', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('secure_buffer', 40, 0, arc.mojom.OemCryptoSecureBufferSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pattern', 48, 0, arc.mojom.OemCryptoCencEncryptPatternDescSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DecryptCencV15_ResponseParamsSpec, 'arc.mojom.OemCryptoService_DecryptCencV15_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decrypted_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenericEncrypt_ParamsSpec, 'arc.mojom.OemCryptoService_GenericEncrypt_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('iv', 16, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 24, 0, arc.mojom.OemCryptoAlgorithmSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('iv', 16, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 24, 0, arc.mojom.OemCryptoAlgorithmSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 16, 0, arc.mojom.OemCryptoAlgorithmSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 16, 0, arc.mojom.OemCryptoAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signature', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('nonce_offset', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enc_rsa_key_offset', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enc_rsa_key_length', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enc_rsa_key_iv_offset', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('wrapped_rsa_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadDeviceRsaKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_GenerateRsaSignature_ParamsSpec, 'arc.mojom.OemCryptoService_GenerateRsaSignature_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('padding_scheme', 16, 0, arc.mojom.OemCryptoRsaPaddingSchemeSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enc_session_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('mac_key_context', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('enc_key_context', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pst', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pst_offset', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pst_length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('index', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('buffer', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pst', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pst', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_array', 8, 0, mojo.internal.Array(arc.mojom.OemCryptoEntitledContentKeyObjectV14Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadEntitledContentKeysV14_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_SelectKey_ParamsSpec, 'arc.mojom.OemCryptoService_SelectKey_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('content_key_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('cipher_mode', 16, 0, arc.mojom.OemCryptoCipherModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_SelectKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_SelectKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadKeysV14_ParamsSpec, 'arc.mojom.OemCryptoService_LoadKeysV14_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('has_enc_mac_keys', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enc_mac_keys_iv_offset', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enc_mac_keys_offset', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_array', 40, 0, mojo.internal.Array(arc.mojom.OemCryptoKeyObjectV14Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pst_offset', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pst_length', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('srm_requirement', 56, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('license_type', 64, 0, arc.mojom.OemCryptoLicenseTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadKeysV14_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadKeysV14_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadKeys_ParamsSpec, 'arc.mojom.OemCryptoService_LoadKeys_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('enc_mac_keys_iv', 24, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enc_mac_keys', 32, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_array', 40, 0, mojo.internal.Array(arc.mojom.OemCryptoKeyObjectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pst', 48, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('srm_restriction_data', 56, 0, arc.mojom.OemCryptoSubstringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('license_type', 64, 0, arc.mojom.OemCryptoLicenseTypeSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('key_array', 24, 0, mojo.internal.Array(arc.mojom.OemCryptoKeyRefreshObjectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_RefreshKeys_ResponseParamsSpec, 'arc.mojom.OemCryptoService_RefreshKeys_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadEntitledContentKeys_ParamsSpec, 'arc.mojom.OemCryptoService_LoadEntitledContentKeys_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('key_array', 16, 0, mojo.internal.Array(arc.mojom.OemCryptoEntitledContentKeyObjectSpec.$, false), null, false, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('core_message_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('avail_signature_size', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignLicenseRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('core_message_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('signature', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('core_message_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('avail_signature_size', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignRenewalRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('core_message_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('signature', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('core_message_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('avail_signature_size', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParamsSpec, 'arc.mojom.OemCryptoService_PrepAndSignProvisioningRequest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('core_message_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('signature', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadLicense_ParamsSpec, 'arc.mojom.OemCryptoService_LoadLicense_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('core_message_length', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('signature', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadLicense_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadLicense_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadRenewal_ParamsSpec, 'arc.mojom.OemCryptoService_LoadRenewal_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('core_message_length', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('signature', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadRenewal_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadRenewal_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadProvisioning_ParamsSpec, 'arc.mojom.OemCryptoService_LoadProvisioning_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('core_message_length', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('signature', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('avail_wrapped_private_key_size', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_type', 8, 0, arc.mojom.OemCryptoPrivateKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wrapped_private_key', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParamsSpec, 'arc.mojom.OemCryptoService_LoadDrmPrivateKey_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.OemCryptoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OemCryptoService_DecryptCenc_ParamsSpec, 'arc.mojom.OemCryptoService_DecryptCenc_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('iv', 16, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('sub_samples', 24, 0, mojo.internal.Array(arc.mojom.SubSampleDescriptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pattern', 32, 0, arc.mojom.OemCryptoCencEncryptPatternDescSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('secure_buffer', 40, 0, arc.mojom.OemCryptoSecureBufferSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('session', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('out_buffer', 16, 0, arc.mojom.OemCryptoSecureBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subsample_flags', 24, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 40]]);

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'arc.mojom.OemCryptoService',
    'context');
  return remote.$;
};

arc.mojom.OemCryptoServicePtr = arc.mojom.OemCryptoServiceRemote;
arc.mojom.OemCryptoServiceRequest = arc.mojom.OemCryptoServicePendingReceiver;


// Interface: OemCryptoHost
mojo.internal.Struct(
    arc.mojom.OemCryptoHost_Connect_ParamsSpec, 'arc.mojom.OemCryptoHost_Connect_Params', [
      mojo.internal.StructField('oemcryptor', 0, 0, mojo.internal.InterfaceRequest(arc.mojom.OemCryptoServiceRemote), null, false, 0, undefined),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'arc.mojom.OemCryptoHost',
    'context');
  return remote.$;
};

arc.mojom.OemCryptoHostPtr = arc.mojom.OemCryptoHostRemote;
arc.mojom.OemCryptoHostRequest = arc.mojom.OemCryptoHostPendingReceiver;


// Interface: OemCryptoInstance
mojo.internal.Struct(
    arc.mojom.OemCryptoInstance_Init_ParamsSpec, 'arc.mojom.OemCryptoInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.OemCryptoHostRemote), null, false, 0, undefined),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'arc.mojom.OemCryptoInstance',
    'context');
  return remote.$;
};

arc.mojom.OemCryptoInstancePtr = arc.mojom.OemCryptoInstanceRemote;
arc.mojom.OemCryptoInstanceRequest = arc.mojom.OemCryptoInstancePendingReceiver;

