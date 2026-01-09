// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/media/media_engagement_score_details.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: MediaEngagementScoreDetails
media.mojom.MediaEngagementScoreDetails = class {
  constructor(values = {}) {
    this.is_high = values.is_high !== undefined ? values.is_high : 0;
  }
};

// Struct: MediaEngagementConfig
media.mojom.MediaEngagementConfig = class {
  constructor(values = {}) {
    this.preload_version = values.preload_version !== undefined ? values.preload_version : 0;
  }
};

// Interface: MediaEngagementScoreDetailsProvider
media.mojom.MediaEngagementScoreDetailsProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaEngagementScoreDetailsProvider';
  }

  getMediaEngagementScoreDetails() {
    // Method: GetMediaEngagementScoreDetails
    return new Promise((resolve) => {
      // Call: GetMediaEngagementScoreDetails()
      resolve({});
    });
  }

  getMediaEngagementConfig() {
    // Method: GetMediaEngagementConfig
    return new Promise((resolve) => {
      // Call: GetMediaEngagementConfig()
      resolve({});
    });
  }

};

media.mojom.MediaEngagementScoreDetailsProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
