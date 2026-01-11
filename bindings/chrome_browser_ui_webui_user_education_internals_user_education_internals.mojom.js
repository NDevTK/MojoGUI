// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/user_education_internals/user_education_internals.mojom
// Module: mojom.user_education_internals

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
      mojo.internal.StructField('supported_platforms', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('required_features', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('instructions', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('followed_by_internal_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 64, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('added_milestone', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: WhatsNewModuleDemoPageInfo
mojo.internal.Struct(
    mojom.user_education_internals.WhatsNewModuleDemoPageInfoSpec, 'mojom.user_education_internals.WhatsNewModuleDemoPageInfo', [
      mojo.internal.StructField('display_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('module_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('queue_position', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_browser_command', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_feature_enabled', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WhatsNewEditionDemoPageInfo
mojo.internal.Struct(
    mojom.user_education_internals.WhatsNewEditionDemoPageInfoSpec, 'mojom.user_education_internals.WhatsNewEditionDemoPageInfo', [
      mojo.internal.StructField('display_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('edition_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version_used', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_feature_enabled', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_been_used', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: UserEducationInternalsPageHandler
mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParams', [
      mojo.internal.StructField('tutorial_infos', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageInfoSpec.$, false), null, false, 0, undefined),
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
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParams', [
      mojo.internal.StructField('session_data', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParams', [
      mojo.internal.StructField('feature_promos', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageInfoSpec.$, false), null, false, 0, undefined),
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
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParams', [
      mojo.internal.StructField('new_badges', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParams', [
      mojo.internal.StructField('whats_new_modules', 0, 0, mojo.internal.Array(mojom.user_education_internals.WhatsNewModuleDemoPageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParams', [
      mojo.internal.StructField('whats_new_editions', 0, 0, mojo.internal.Array(mojom.user_education_internals.WhatsNewEditionDemoPageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParams', [
      mojo.internal.StructField('ntp_promos', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParams', [
      mojo.internal.StructField('ntp_promo_preferences', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageDataSpec.$, false), null, false, 0, undefined),
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
    [[0, 8]]);

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
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_Params', [
    ],
    [[0, 8]]);

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
  getTutorials() {
    return this.$.getTutorials();
  }
  startTutorial(tutorial_id) {
    return this.$.startTutorial(tutorial_id);
  }
  getSessionData() {
    return this.$.getSessionData();
  }
  getFeaturePromos() {
    return this.$.getFeaturePromos();
  }
  showFeaturePromo(feature_name) {
    return this.$.showFeaturePromo(feature_name);
  }
  clearFeaturePromoData(feature_name) {
    return this.$.clearFeaturePromoData(feature_name);
  }
  clearSessionData() {
    return this.$.clearSessionData();
  }
  forceNewSession() {
    return this.$.forceNewSession();
  }
  removeGracePeriods() {
    return this.$.removeGracePeriods();
  }
  getNewBadges() {
    return this.$.getNewBadges();
  }
  getWhatsNewModules() {
    return this.$.getWhatsNewModules();
  }
  getWhatsNewEditions() {
    return this.$.getWhatsNewEditions();
  }
  getNtpPromos() {
    return this.$.getNtpPromos();
  }
  getNtpPromoPreferences() {
    return this.$.getNtpPromoPreferences();
  }
  clearNewBadgeData(feature_name) {
    return this.$.clearNewBadgeData(feature_name);
  }
  clearWhatsNewData() {
    return this.$.clearWhatsNewData();
  }
  clearNtpPromoData(id) {
    return this.$.clearNtpPromoData(id);
  }
  clearNtpPromoPreferences() {
    return this.$.clearNtpPromoPreferences();
  }
  launchWhatsNewStaging() {
    return this.$.launchWhatsNewStaging();
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UserEducationInternalsPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getTutorials() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParamsSpec,
      [],
      false);
  }

  startTutorial(tutorial_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ResponseParamsSpec,
      [tutorial_id],
      false);
  }

  getSessionData() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParamsSpec,
      [],
      false);
  }

  getFeaturePromos() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParamsSpec,
      [],
      false);
  }

  showFeaturePromo(feature_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ResponseParamsSpec,
      [feature_name],
      false);
  }

  clearFeaturePromoData(feature_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ResponseParamsSpec,
      [feature_name],
      false);
  }

  clearSessionData() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParamsSpec,
      [],
      false);
  }

  forceNewSession() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParamsSpec,
      [],
      false);
  }

  removeGracePeriods() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParamsSpec,
      [],
      false);
  }

  getNewBadges() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParamsSpec,
      [],
      false);
  }

  getWhatsNewModules() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParamsSpec,
      [],
      false);
  }

  getWhatsNewEditions() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParamsSpec,
      [],
      false);
  }

  getNtpPromos() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParamsSpec,
      [],
      false);
  }

  getNtpPromoPreferences() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParamsSpec,
      [],
      false);
  }

  clearNewBadgeData(feature_name) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ResponseParamsSpec,
      [feature_name],
      false);
  }

  clearWhatsNewData() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ResponseParamsSpec,
      [],
      false);
  }

  clearNtpPromoData(id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ResponseParamsSpec,
      [id],
      false);
  }

  clearNtpPromoPreferences() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParamsSpec,
      [],
      false);
  }

  launchWhatsNewStaging() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec,
      null,
      [],
      false);
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

mojom.user_education_internals.UserEducationInternalsPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UserEducationInternalsPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec.$.structSpec);
          const result = this.impl.getTutorials();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ParamsSpec.$.structSpec);
          const result = this.impl.startTutorial(params.tutorial_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ParamsSpec.$.structSpec);
          const result = this.impl.getSessionData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec.$.structSpec);
          const result = this.impl.getFeaturePromos();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ParamsSpec.$.structSpec);
          const result = this.impl.showFeaturePromo(params.feature_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ParamsSpec.$.structSpec);
          const result = this.impl.clearFeaturePromoData(params.feature_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ParamsSpec.$.structSpec);
          const result = this.impl.clearSessionData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec.$.structSpec);
          const result = this.impl.forceNewSession();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec.$.structSpec);
          const result = this.impl.removeGracePeriods();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec.$.structSpec);
          const result = this.impl.getNewBadges();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec.$.structSpec);
          const result = this.impl.getWhatsNewModules();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec.$.structSpec);
          const result = this.impl.getWhatsNewEditions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec.$.structSpec);
          const result = this.impl.getNtpPromos();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec.$.structSpec);
          const result = this.impl.getNtpPromoPreferences();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ParamsSpec.$.structSpec);
          const result = this.impl.clearNewBadgeData(params.feature_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ParamsSpec.$.structSpec);
          const result = this.impl.clearWhatsNewData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ParamsSpec.$.structSpec);
          const result = this.impl.clearNtpPromoData(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ParamsSpec.$.structSpec);
          const result = this.impl.clearNtpPromoPreferences();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec.$.structSpec);
          const result = this.impl.launchWhatsNewStaging();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandlerReceiver = mojom.user_education_internals.UserEducationInternalsPageHandlerReceiver;

mojom.user_education_internals.UserEducationInternalsPageHandlerPtr = mojom.user_education_internals.UserEducationInternalsPageHandlerRemote;
mojom.user_education_internals.UserEducationInternalsPageHandlerRequest = mojom.user_education_internals.UserEducationInternalsPageHandlerPendingReceiver;

