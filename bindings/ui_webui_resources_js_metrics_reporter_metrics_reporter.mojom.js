// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/metrics_reporter/metrics_reporter.mojom
// Module: metrics_reporter.mojom

'use strict';

// Module namespace
var metrics_reporter = metrics_reporter || {};
metrics_reporter.mojom = metrics_reporter.mojom || {};


// Interface: PageMetricsHost
metrics_reporter.mojom.PageMetricsHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'metrics_reporter.mojom.PageMetricsHost';
  }

  onPageRemoteCreated(page) {
    // Method: OnPageRemoteCreated
    // Call: OnPageRemoteCreated(page)
  }

  onGetMark(name) {
    // Method: OnGetMark
    return new Promise((resolve) => {
      // Call: OnGetMark(name)
      resolve({});
    });
  }

  onClearMark(name) {
    // Method: OnClearMark
    // Call: OnClearMark(name)
  }

  onUmaReportTime(name, time) {
    // Method: OnUmaReportTime
    // Call: OnUmaReportTime(name, time)
  }

};

metrics_reporter.mojom.PageMetricsHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageMetrics
metrics_reporter.mojom.PageMetricsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'metrics_reporter.mojom.PageMetrics';
  }

  onGetMark(name) {
    // Method: OnGetMark
    return new Promise((resolve) => {
      // Call: OnGetMark(name)
      resolve({});
    });
  }

  onClearMark(name) {
    // Method: OnClearMark
    // Call: OnClearMark(name)
  }

};

metrics_reporter.mojom.PageMetricsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
