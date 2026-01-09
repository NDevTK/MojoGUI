// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/user_education_internals/user_education_internals.mojom
// Module: mojom.user_education_internals

'use strict';

// Module namespace
var mojom = mojom || {};
mojom.user_education_internals = mojom.user_education_internals || {};


// Struct: FeaturePromoDemoPageData
mojom.user_education_internals.FeaturePromoDemoPageData = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Struct: FeaturePromoDemoPageInfo
mojom.user_education_internals.FeaturePromoDemoPageInfo = class {
  constructor(values = {}) {
    this.display_title = values.display_title !== undefined ? values.display_title : "";
    this.instructions = values.instructions !== undefined ? values.instructions : 0;
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Struct: WhatsNewModuleDemoPageInfo
mojom.user_education_internals.WhatsNewModuleDemoPageInfo = class {
  constructor(values = {}) {
    this.queue_position = values.queue_position !== undefined ? values.queue_position : 0;
  }
};

// Struct: WhatsNewEditionDemoPageInfo
mojom.user_education_internals.WhatsNewEditionDemoPageInfo = class {
  constructor(values = {}) {
    this.version_used = values.version_used !== undefined ? values.version_used : 0;
  }
};

// Interface: UserEducationInternalsPageHandler
mojom.user_education_internals.UserEducationInternalsPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mojom.user_education_internals.UserEducationInternalsPageHandler';
  }

  getTutorials() {
    // Method: GetTutorials
    return new Promise((resolve) => {
      // Call: GetTutorials()
      resolve({});
    });
  }

  startTutorial(tutorial_id) {
    // Method: StartTutorial
    return new Promise((resolve) => {
      // Call: StartTutorial(tutorial_id)
      resolve({});
    });
  }

  getSessionData() {
    // Method: GetSessionData
    return new Promise((resolve) => {
      // Call: GetSessionData()
      resolve({});
    });
  }

  getFeaturePromos() {
    // Method: GetFeaturePromos
    return new Promise((resolve) => {
      // Call: GetFeaturePromos()
      resolve({});
    });
  }

  showFeaturePromo(feature_name) {
    // Method: ShowFeaturePromo
    return new Promise((resolve) => {
      // Call: ShowFeaturePromo(feature_name)
      resolve({});
    });
  }

  clearFeaturePromoData(feature_name) {
    // Method: ClearFeaturePromoData
    return new Promise((resolve) => {
      // Call: ClearFeaturePromoData(feature_name)
      resolve({});
    });
  }

  clearSessionData() {
    // Method: ClearSessionData
    return new Promise((resolve) => {
      // Call: ClearSessionData()
      resolve({});
    });
  }

  forceNewSession() {
    // Method: ForceNewSession
    return new Promise((resolve) => {
      // Call: ForceNewSession()
      resolve({});
    });
  }

  removeGracePeriods() {
    // Method: RemoveGracePeriods
    return new Promise((resolve) => {
      // Call: RemoveGracePeriods()
      resolve({});
    });
  }

  getNewBadges() {
    // Method: GetNewBadges
    return new Promise((resolve) => {
      // Call: GetNewBadges()
      resolve({});
    });
  }

  getWhatsNewModules() {
    // Method: GetWhatsNewModules
    return new Promise((resolve) => {
      // Call: GetWhatsNewModules()
      resolve({});
    });
  }

  getWhatsNewEditions() {
    // Method: GetWhatsNewEditions
    return new Promise((resolve) => {
      // Call: GetWhatsNewEditions()
      resolve({});
    });
  }

  getNtpPromos() {
    // Method: GetNtpPromos
    return new Promise((resolve) => {
      // Call: GetNtpPromos()
      resolve({});
    });
  }

  getNtpPromoPreferences() {
    // Method: GetNtpPromoPreferences
    return new Promise((resolve) => {
      // Call: GetNtpPromoPreferences()
      resolve({});
    });
  }

  clearNewBadgeData(feature_name) {
    // Method: ClearNewBadgeData
    return new Promise((resolve) => {
      // Call: ClearNewBadgeData(feature_name)
      resolve({});
    });
  }

  clearWhatsNewData() {
    // Method: ClearWhatsNewData
    return new Promise((resolve) => {
      // Call: ClearWhatsNewData()
      resolve({});
    });
  }

  clearNtpPromoData(id) {
    // Method: ClearNtpPromoData
    return new Promise((resolve) => {
      // Call: ClearNtpPromoData(id)
      resolve({});
    });
  }

  clearNtpPromoPreferences() {
    // Method: ClearNtpPromoPreferences
    return new Promise((resolve) => {
      // Call: ClearNtpPromoPreferences()
      resolve({});
    });
  }

  launchWhatsNewStaging() {
    // Method: LaunchWhatsNewStaging
    // Call: LaunchWhatsNewStaging()
  }

};

mojom.user_education_internals.UserEducationInternalsPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
