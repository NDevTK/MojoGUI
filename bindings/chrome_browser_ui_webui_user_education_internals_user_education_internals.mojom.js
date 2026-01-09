// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/user_education_internals/user_education_internals.mojom
// Module: mojom.user_education_internals

'use strict';

// Module namespace
var mojom = mojom || {};
mojom.user_education_internals = mojom.user_education_internals || {};


// Interface: UserEducationInternalsPageHandler
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
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParamsSpec.$,
      []);
  }

  startTutorial(tutorial_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ResponseParamsSpec.$,
      [tutorial_id]);
  }

  getSessionData() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParamsSpec.$,
      []);
  }

  getFeaturePromos() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParamsSpec.$,
      []);
  }

  showFeaturePromo(feature_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ResponseParamsSpec.$,
      [feature_name]);
  }

  clearFeaturePromoData(feature_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ResponseParamsSpec.$,
      [feature_name]);
  }

  clearSessionData() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParamsSpec.$,
      []);
  }

  forceNewSession() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParamsSpec.$,
      []);
  }

  removeGracePeriods() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParamsSpec.$,
      []);
  }

  getNewBadges() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParamsSpec.$,
      []);
  }

  getWhatsNewModules() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParamsSpec.$,
      []);
  }

  getWhatsNewEditions() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParamsSpec.$,
      []);
  }

  getNtpPromos() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParamsSpec.$,
      []);
  }

  getNtpPromoPreferences() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParamsSpec.$,
      []);
  }

  clearNewBadgeData(feature_name) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ResponseParamsSpec.$,
      [feature_name]);
  }

  clearWhatsNewData() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ResponseParamsSpec.$,
      []);
  }

  clearNtpPromoData(id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ResponseParamsSpec.$,
      [id]);
  }

  clearNtpPromoPreferences() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ParamsSpec.$,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParamsSpec.$,
      []);
  }

  launchWhatsNewStaging() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec.$,
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

// ParamsSpec for GetTutorials
mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetTutorials_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetTutorials_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tutorial_infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartTutorial
mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.StartTutorial_Params',
      packedSize: 16,
      fields: [
        { name: 'tutorial_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.StartTutorial_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSessionData
mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetSessionData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetSessionData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'session_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFeaturePromos
mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetFeaturePromos_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetFeaturePromos_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'feature_promos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowFeaturePromo
mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ShowFeaturePromo_Params',
      packedSize: 16,
      fields: [
        { name: 'feature_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ShowFeaturePromo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearFeaturePromoData
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ClearFeaturePromoData_Params',
      packedSize: 16,
      fields: [
        { name: 'feature_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ClearFeaturePromoData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearSessionData
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ClearSessionData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ClearSessionData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForceNewSession
mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ForceNewSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ForceNewSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveGracePeriods
mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.RemoveGracePeriods_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.RemoveGracePeriods_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetNewBadges
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetNewBadges_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetNewBadges_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'new_badges', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetWhatsNewModules
mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetWhatsNewModules_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetWhatsNewModules_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'whats_new_modules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetWhatsNewEditions
mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetWhatsNewEditions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetWhatsNewEditions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'whats_new_editions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetNtpPromos
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetNtpPromos_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetNtpPromos_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ntp_promos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetNtpPromoPreferences
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetNtpPromoPreferences_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.GetNtpPromoPreferences_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ntp_promo_preferences', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearNewBadgeData
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ClearNewBadgeData_Params',
      packedSize: 16,
      fields: [
        { name: 'feature_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ClearNewBadgeData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearWhatsNewData
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ClearWhatsNewData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ClearWhatsNewData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearNtpPromoData
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ClearNtpPromoData_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ClearNtpPromoData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearNtpPromoPreferences
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ClearNtpPromoPreferences_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.ClearNtpPromoPreferences_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LaunchWhatsNewStaging
mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.user_education_internals.UserEducationInternalsPageHandler.LaunchWhatsNewStaging_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mojom.user_education_internals.UserEducationInternalsPageHandlerPtr = mojom.user_education_internals.UserEducationInternalsPageHandlerRemote;
mojom.user_education_internals.UserEducationInternalsPageHandlerRequest = mojom.user_education_internals.UserEducationInternalsPageHandlerPendingReceiver;

