// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/reporting_service.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: ReportingApiReportStatus
network.mojom.ReportingApiReportStatus = {
  kQueued: 0,
  kPending: 1,
  kDoomed: 2,
  kSuccess: 3,
};

// Struct: ReportingApiReport
network.mojom.ReportingApiReport = class {
  constructor(values = {}) {
    this.depth = values.depth !== undefined ? values.depth : 0;
    this.status = values.status !== undefined ? values.status : 0;
  }
};

// Struct: ReportingApiEndpoint
network.mojom.ReportingApiEndpoint = class {
  constructor(values = {}) {
    this.priority = values.priority !== undefined ? values.priority : 0;
    this.reporting_source = values.reporting_source !== undefined ? values.reporting_source : 0;
  }
};

// Interface: ReportingApiObserver
network.mojom.ReportingApiObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.ReportingApiObserver';
  }

  onReportAdded(report) {
    // Method: OnReportAdded
    // Call: OnReportAdded(report)
  }

  updated(incremented) {
    // Method: updated
    // Call: updated(incremented)
  }

  onReportUpdated(report) {
    // Method: OnReportUpdated
    // Call: OnReportUpdated(report)
  }

  onEndpointsUpdatedForOrigin(endpoints) {
    // Method: OnEndpointsUpdatedForOrigin
    // Call: OnEndpointsUpdatedForOrigin(endpoints)
  }

};

network.mojom.ReportingApiObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
