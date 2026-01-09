// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/privacy_sandbox/related_website_sets/related_website_sets.mojom
// Module: related_website_sets.mojom

'use strict';

// Module namespace
var related_website_sets = related_website_sets || {};
related_website_sets.mojom = related_website_sets.mojom || {};


// Enum: SiteType
related_website_sets.mojom.SiteType = {
  kPrimary: 0,
  kAssociated: 1,
  kService: 2,
};

// Struct: Member
related_website_sets.mojom.Member = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : "";
  }
};

// Struct: RelatedWebsiteSet
related_website_sets.mojom.RelatedWebsiteSet = class {
  constructor(values = {}) {
    this.managed_by_enterprise = values.managed_by_enterprise !== undefined ? values.managed_by_enterprise : false;
  }
};

// Interface: RelatedWebsiteSetsPageHandler
related_website_sets.mojom.RelatedWebsiteSetsPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'related_website_sets.mojom.RelatedWebsiteSetsPageHandler';
  }

  getRelatedWebsiteSets() {
    // Method: GetRelatedWebsiteSets
    return new Promise((resolve) => {
      // Call: GetRelatedWebsiteSets()
      resolve({});
    });
  }

};

related_website_sets.mojom.RelatedWebsiteSetsPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
