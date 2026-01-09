// Auto-generated MojoJS binding
// Source: chromium_src/components/site_engagement/core/mojom/site_engagement_details.mojom
// Module: site_engagement.mojom

'use strict';

// Module namespace
var site_engagement = site_engagement || {};
site_engagement.mojom = site_engagement.mojom || {};


// Struct: SiteEngagementDetails
site_engagement.mojom.SiteEngagementDetails = class {
  constructor(values = {}) {
    this.installed_bonus = values.installed_bonus !== undefined ? values.installed_bonus : 0;
  }
};

// Interface: SiteEngagementDetailsProvider
site_engagement.mojom.SiteEngagementDetailsProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'site_engagement.mojom.SiteEngagementDetailsProvider';
  }

  getSiteEngagementDetails() {
    // Method: GetSiteEngagementDetails
    return new Promise((resolve) => {
      // Call: GetSiteEngagementDetails()
      resolve({});
    });
  }

  setSiteEngagementBaseScoreForUrl(url, score) {
    // Method: SetSiteEngagementBaseScoreForUrl
    // Call: SetSiteEngagementBaseScoreForUrl(url, score)
  }

};

site_engagement.mojom.SiteEngagementDetailsProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
