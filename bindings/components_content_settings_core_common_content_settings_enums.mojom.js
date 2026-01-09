// Auto-generated MojoJS binding
// Source: chromium_src/components/content_settings/core/common/content_settings_enums.mojom
// Module: content_settings.mojom

'use strict';

// Module namespace
var content_settings = content_settings || {};
content_settings.mojom = content_settings.mojom || {};


// Enum: TpcdMetadataRuleSource
content_settings.mojom.TpcdMetadataRuleSource = {
  SOURCE_UNSPECIFIED: 0,
  SOURCE_TEST: 1,
  SOURCE_1P_DT: 2,
  SOURCE_3P_DT: 3,
  SOURCE_DOGFOOD: 4,
  SOURCE_CRITICAL_SECTOR: 5,
  SOURCE_CUJ: 6,
  SOURCE_GOV_EDU_TLD: 7,
};

// Enum: TpcdMetadataCohort
content_settings.mojom.TpcdMetadataCohort = {
  DEFAULT: 0,
  GRACE_PERIOD_FORCED_OFF: 1,
  GRACE_PERIOD_FORCED_ON: 2,
};

// Enum: SessionModel
content_settings.mojom.SessionModel = {
  DURABLE: 0,
  USER_SESSION: 1,
  ONE_TIME: 2,
};

// Enum: ProviderType
content_settings.mojom.ProviderType = {
  kWebuiAllowlistProvider: 0,
  kComponentExtensionProvider: 1,
  kPolicyProvider: 2,
  kSupervisedProvider: 3,
  kCustomExtensionProvider: 4,
  kInstalledWebappProvider: 5,
  kNotificationAndroidProvider: 6,
  kOneTimePermissionProvider: 7,
  kPrefProvider: 8,
  kJavascriptOptimizerAndroidProvider: 9,
  kProviderForTests: 10,
  kOtherProviderForTests: 11,
  kDefaultProvider: 12,
  kNone: 13,
};
