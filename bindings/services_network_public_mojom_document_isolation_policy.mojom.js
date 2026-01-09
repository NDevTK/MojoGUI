// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/document_isolation_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: DocumentIsolationPolicyValue
network.mojom.DocumentIsolationPolicyValue = {
  cross: 0,
  fetching: 1,
  depending: 2,
  fetching: 3,
  an: 4,
  depending: 5,
};

// Struct: DocumentIsolationPolicy
network.mojom.DocumentIsolationPolicy = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : null;
    this.DocumentIsolationPolicyValue.kNone = values.DocumentIsolationPolicyValue.kNone !== undefined ? values.DocumentIsolationPolicyValue.kNone : null;
    this.reporting_endpoint = values.reporting_endpoint !== undefined ? values.reporting_endpoint : "";
    this.value = values.value !== undefined ? values.value : null;
    this.DocumentIsolationPolicyValue.kNone = values.DocumentIsolationPolicyValue.kNone !== undefined ? values.DocumentIsolationPolicyValue.kNone : null;
    this.report_only_reporting_endpoint = values.report_only_reporting_endpoint !== undefined ? values.report_only_reporting_endpoint : "";
  }
};

// Interface: DocumentIsolationPolicyReporter
network.mojom.DocumentIsolationPolicyReporterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.DocumentIsolationPolicyReporter';
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

network.mojom.DocumentIsolationPolicyReporterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
