// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/user_education_internals/user_education_internals.mojom
// Module: mojom.user_education_internals

'use strict';

// Module namespace
var mojom = mojom || {};
mojom.user_education_internals = mojom.user_education_internals || {};

mojom.user_education_internals.FeaturePromoDemoPageDataSpec = { $: {} };
mojom.user_education_internals.FeaturePromoDemoPageInfoSpec = { $: {} };
mojom.user_education_internals.WhatsNewModuleDemoPageInfoSpec = { $: {} };
mojom.user_education_internals.WhatsNewEditionDemoPageInfoSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler = {};
mojom.user_education_internals.UserEducationInternalsPageHandler.$interfaceName = 'mojom.user_education_internals.UserEducationInternalsPageHandler';
mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec = { $: {} };

// Struct: FeaturePromoDemoPageData
mojo.internal.Struct(
    mojom.user_education_internals.FeaturePromoDemoPageDataSpec, 'mojom.user_education_internals.FeaturePromoDemoPageData', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FeaturePromoDemoPageInfo
mojo.internal.Struct(
    mojom.user_education_internals.FeaturePromoDemoPageInfoSpec, 'mojom.user_education_internals.FeaturePromoDemoPageInfo', [
      mojo.internal.StructField('display_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('internal_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('added_milestone', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('supported_platforms', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('required_features', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('instructions', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('followed_by_internal_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 64, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: WhatsNewModuleDemoPageInfo
mojo.internal.Struct(
    mojom.user_education_internals.WhatsNewModuleDemoPageInfoSpec, 'mojom.user_education_internals.WhatsNewModuleDemoPageInfo', [
      mojo.internal.StructField('display_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('module_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('has_browser_command', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_feature_enabled', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('queue_position', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WhatsNewEditionDemoPageInfo
mojo.internal.Struct(
    mojom.user_education_internals.WhatsNewEditionDemoPageInfoSpec, 'mojom.user_education_internals.WhatsNewEditionDemoPageInfo', [
      mojo.internal.StructField('display_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('edition_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_feature_enabled', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_been_used', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('version_used', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: UserEducationInternalsPageHandler
mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParams', [
      mojo.internal.StructField('tutorial_infos', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_Params', [
      mojo.internal.StructField('tutorial_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParams', [
      mojo.internal.StructField('session_data', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParams', [
      mojo.internal.StructField('feature_promos', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_Params', [
      mojo.internal.StructField('feature_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_Params', [
      mojo.internal.StructField('feature_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParams', [
      mojo.internal.StructField('new_badges', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParams', [
      mojo.internal.StructField('whats_new_modules', 0, 0, mojo.internal.Array(mojom.user_education_internals.WhatsNewModuleDemoPageInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParams', [
      mojo.internal.StructField('whats_new_editions', 0, 0, mojo.internal.Array(mojom.user_education_internals.WhatsNewEditionDemoPageInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParams', [
      mojo.internal.StructField('ntp_promos', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParams', [
      mojo.internal.StructField('ntp_promo_preferences', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_Params', [
      mojo.internal.StructField('feature_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojom.user_education_internals.UserEducationInternalsPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.user_education_internals.UserEducationInternalsPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.user_education_internals.UserEducationInternalsPageHandlerPendingReceiver,
      handle);
    this.$ = new mojom.user_education_internals.UserEducationInternalsPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTutorials() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParamsSpec,
      []);
  }

  startTutorial(tutorial_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ResponseParamsSpec,
      [tutorial_id]);
  }

  getSessionData() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParamsSpec,
      []);
  }

  getFeaturePromos() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParamsSpec,
      []);
  }

  showFeaturePromo(feature_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ResponseParamsSpec,
      [feature_name]);
  }

  clearFeaturePromoData(feature_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ResponseParamsSpec,
      [feature_name]);
  }

  clearSessionData() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParamsSpec,
      []);
  }

  forceNewSession() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParamsSpec,
      []);
  }

  removeGracePeriods() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParamsSpec,
      []);
  }

  getNewBadges() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParamsSpec,
      []);
  }

  getWhatsNewModules() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParamsSpec,
      []);
  }

  getWhatsNewEditions() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParamsSpec,
      []);
  }

  getNtpPromos() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParamsSpec,
      []);
  }

  getNtpPromoPreferences() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParamsSpec,
      []);
  }

  clearNewBadgeData(feature_name) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ResponseParamsSpec,
      [feature_name]);
  }

  clearWhatsNewData() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ResponseParamsSpec,
      []);
  }

  clearNtpPromoData(id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ResponseParamsSpec,
      [id]);
  }

  clearNtpPromoPreferences() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParamsSpec,
      []);
  }

  launchWhatsNewStaging() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec,
      null,
      []);
  }

};

mojom.user_education_internals.UserEducationInternalsPageHandler.getRemote = function() {
  let remote = new mojom.user_education_internals.UserEducationInternalsPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.user_education_internals.UserEducationInternalsPageHandler',
    'context');
  return remote.$;
};

mojom.user_education_internals.UserEducationInternalsPageHandlerPtr = mojom.user_education_internals.UserEducationInternalsPageHandlerRemote;
mojom.user_education_internals.UserEducationInternalsPageHandlerRequest = mojom.user_education_internals.UserEducationInternalsPageHandlerPendingReceiver;

