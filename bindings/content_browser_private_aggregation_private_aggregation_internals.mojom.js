// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/private_aggregation/private_aggregation_internals.mojom
// Module: private_aggregation_internals.mojom

'use strict';

// Module namespace
var private_aggregation_internals = private_aggregation_internals || {};
private_aggregation_internals.mojom = private_aggregation_internals.mojom || {};


// Enum: ReportStatus
private_aggregation_internals.mojom.ReportStatus = {
};

// Struct: AggregatableReportRequestID
private_aggregation_internals.mojom.AggregatableReportRequestID = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: AggregatableHistogramContribution
private_aggregation_internals.mojom.AggregatableHistogramContribution = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: WebUIAggregatableReport
private_aggregation_internals.mojom.WebUIAggregatableReport = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : null;
    this.report_body = values.report_body !== undefined ? values.report_body : 0;
  }
};

// Interface: Observer
private_aggregation_internals.mojom.ObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'private_aggregation_internals.mojom.Observer';
  }

  onRequestStorageModified() {
    // Method: OnRequestStorageModified
    // Call: OnRequestStorageModified()
  }

  onReportHandled(report) {
    // Method: OnReportHandled
    // Call: OnReportHandled(report)
  }

};

private_aggregation_internals.mojom.ObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Handler
private_aggregation_internals.mojom.HandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'private_aggregation_internals.mojom.Handler';
  }

  getReports() {
    // Method: GetReports
    return new Promise((resolve) => {
      // Call: GetReports()
      resolve({});
    });
  }

  sendReports(ids) {
    // Method: SendReports
    // Call: SendReports(ids)
  }

  clearStorage() {
    // Method: ClearStorage
    // Call: ClearStorage()
  }

};

private_aggregation_internals.mojom.HandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Factory
private_aggregation_internals.mojom.FactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'private_aggregation_internals.mojom.Factory';
  }

  create(observer, handler) {
    // Method: Create
    // Call: Create(observer, handler)
  }

};

private_aggregation_internals.mojom.FactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
