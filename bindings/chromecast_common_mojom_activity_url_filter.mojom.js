// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/activity_url_filter.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Struct: ActivityUrlFilterCriteria
chromecast.mojom.ActivityUrlFilterCriteria = class {
  constructor(values = {}) {
    this.criteria = values.criteria !== undefined ? values.criteria : "";
  }
};

// Interface: ActivityUrlFilterConfiguration
chromecast.mojom.ActivityUrlFilterConfigurationPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.ActivityUrlFilterConfiguration';
  }

  setFilter(filter) {
    // Method: SetFilter
    // Call: SetFilter(filter)
  }

};

chromecast.mojom.ActivityUrlFilterConfigurationRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
