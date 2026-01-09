// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/discards/site_data.mojom
// Module: discards.mojom

'use strict';

// Module namespace
var discards = discards || {};
discards.mojom = discards.mojom || {};


// Struct: SiteDataFeature
discards.mojom.SiteDataFeature = class {
  constructor(values = {}) {
    this.observation_duration = values.observation_duration !== undefined ? values.observation_duration : 0;
    this.use_timestamp = values.use_timestamp !== undefined ? values.use_timestamp : 0;
  }
};

// Struct: SiteDataPerformanceMeasurement
discards.mojom.SiteDataPerformanceMeasurement = class {
  constructor(values = {}) {
    this.avg_load_duration_us = values.avg_load_duration_us !== undefined ? values.avg_load_duration_us : 0;
  }
};

// Struct: SiteDataDatabaseSize
discards.mojom.SiteDataDatabaseSize = class {
  constructor(values = {}) {
    this.num_rows = values.num_rows !== undefined ? values.num_rows : 0;
    this.on_disk_size_kb = values.on_disk_size_kb !== undefined ? values.on_disk_size_kb : 0;
  }
};

// Struct: SiteDataValue
discards.mojom.SiteDataValue = class {
  constructor(values = {}) {
    this.load_time_estimates = values.load_time_estimates !== undefined ? values.load_time_estimates : 0;
  }
};

// Struct: SiteDataEntry
discards.mojom.SiteDataEntry = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : false;
  }
};

// Struct: SiteDataArray
discards.mojom.SiteDataArray = class {
  constructor(values = {}) {
    this.db_rows = values.db_rows !== undefined ? values.db_rows : [];
  }
};

// Interface: SiteDataProvider
discards.mojom.SiteDataProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'discards.mojom.SiteDataProvider';
  }

  getSiteDataArray(explicitly_requested_origins) {
    // Method: GetSiteDataArray
    return new Promise((resolve) => {
      // Call: GetSiteDataArray(explicitly_requested_origins)
      resolve({});
    });
  }

  getSiteDataDatabaseSize() {
    // Method: GetSiteDataDatabaseSize
    return new Promise((resolve) => {
      // Call: GetSiteDataDatabaseSize()
      resolve({});
    });
  }

};

discards.mojom.SiteDataProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
