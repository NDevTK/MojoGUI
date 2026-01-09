// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cross_origin_embedder_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: CrossOriginEmbedderPolicyValue
network.mojom.CrossOriginEmbedderPolicyValue = {
  cross: 0,
  fetching: 1,
  fetching: 2,
  an: 3,
};

// Struct: CrossOriginEmbedderPolicy
network.mojom.CrossOriginEmbedderPolicy = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : null;
    this.CrossOriginEmbedderPolicyValue.kNone = values.CrossOriginEmbedderPolicyValue.kNone !== undefined ? values.CrossOriginEmbedderPolicyValue.kNone : null;
    this.reporting_endpoint = values.reporting_endpoint !== undefined ? values.reporting_endpoint : "";
    this.value = values.value !== undefined ? values.value : null;
    this.CrossOriginEmbedderPolicyValue.kNone = values.CrossOriginEmbedderPolicyValue.kNone !== undefined ? values.CrossOriginEmbedderPolicyValue.kNone : null;
    this.report_only_reporting_endpoint = values.report_only_reporting_endpoint !== undefined ? values.report_only_reporting_endpoint : "";
  }
};

// Interface: CrossOriginEmbedderPolicyReporter
network.mojom.CrossOriginEmbedderPolicyReporterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.CrossOriginEmbedderPolicyReporter';
  }

  queueCorpViolationReport(blocked_url, destination, report_only) {
    // Method: QueueCorpViolationReport
    // Call: QueueCorpViolationReport(blocked_url, destination, report_only)
  }

  clone(receiver) {
    // Method: Clone
    // Call: Clone(receiver)
  }

};

network.mojom.CrossOriginEmbedderPolicyReporterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
