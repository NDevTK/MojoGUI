// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cross_origin_opener_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: CoopAccessReportType
network.mojom.CoopAccessReportType = {
  kAccessFromCoopPageToOpener: 0,
  kAccessFromCoopPageToOpenee: 1,
  kAccessFromCoopPageToOther: 2,
  kAccessToCoopPageFromOpener: 3,
  kAccessToCoopPageFromOpenee: 4,
  kAccessToCoopPageFromOther: 5,
};

// Enum: CrossOriginOpenerPolicyValue
network.mojom.CrossOriginOpenerPolicyValue = {
  the: 0,
  provided: 1,
};

// Struct: CrossOriginOpenerPolicyReporterParams
network.mojom.CrossOriginOpenerPolicyReporterParams = class {
  constructor(values = {}) {
    this.reporter = values.reporter !== undefined ? values.reporter : null;
    this.endpoint_defined = values.endpoint_defined !== undefined ? values.endpoint_defined : false;
    this.reported_window_url = values.reported_window_url !== undefined ? values.reported_window_url : "";
  }
};

// Struct: CrossOriginOpenerPolicy
network.mojom.CrossOriginOpenerPolicy = class {
  constructor(values = {}) {
    this.CrossOriginOpenerPolicyValue.kUnsafeNone = values.CrossOriginOpenerPolicyValue.kUnsafeNone !== undefined ? values.CrossOriginOpenerPolicyValue.kUnsafeNone : 0;
  }
};

// Interface: CrossOriginOpenerPolicyReporter
network.mojom.CrossOriginOpenerPolicyReporterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.CrossOriginOpenerPolicyReporter';
  }

  queueAccessReport(report_type, property, source_location, reported_window_url) {
    // Method: QueueAccessReport
    // Call: QueueAccessReport(report_type, property, source_location, reported_window_url)
  }

};

network.mojom.CrossOriginOpenerPolicyReporterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
