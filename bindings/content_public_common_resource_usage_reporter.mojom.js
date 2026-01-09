// Auto-generated MojoJS binding
// Source: chromium_src/content/public/common/resource_usage_reporter.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Struct: ResourceTypeStat
content.mojom.ResourceTypeStat = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : 0;
  }
};

// Struct: ResourceTypeStats
content.mojom.ResourceTypeStats = class {
  constructor(values = {}) {
    this.other = values.other !== undefined ? values.other : null;
  }
};

// Struct: ResourceUsageData
content.mojom.ResourceUsageData = class {
  constructor(values = {}) {
    this.web_cache_stats = values.web_cache_stats !== undefined ? values.web_cache_stats : 0;
  }
};

// Interface: ResourceUsageReporter
content.mojom.ResourceUsageReporterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.ResourceUsageReporter';
  }

  getUsageData() {
    // Method: GetUsageData
    return new Promise((resolve) => {
      // Call: GetUsageData()
      resolve({});
    });
  }

};

content.mojom.ResourceUsageReporterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
