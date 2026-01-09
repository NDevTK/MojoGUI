// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/attribution_reporting/attribution_internals.mojom
// Module: attribution_internals.mojom

'use strict';

// Module namespace
var attribution_internals = attribution_internals || {};
attribution_internals.mojom = attribution_internals.mojom || {};


// Enum: Attributability
attribution_internals.mojom.Attributability = {
};

// Struct: ReportID
attribution_internals.mojom.ReportID = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: WebUIReportEventLevelData
attribution_internals.mojom.WebUIReportEventLevelData = class {
  constructor(values = {}) {
    this.attributed_truthfully = values.attributed_truthfully !== undefined ? values.attributed_truthfully : 0;
  }
};

// Struct: AggregatableHistogramContribution
attribution_internals.mojom.AggregatableHistogramContribution = class {
  constructor(values = {}) {
    this.filtering_id = values.filtering_id !== undefined ? values.filtering_id : 0;
  }
};

// Struct: WebUIReportAggregatableAttributionData
attribution_internals.mojom.WebUIReportAggregatableAttributionData = class {
  constructor(values = {}) {
    this.is_null_report = values.is_null_report !== undefined ? values.is_null_report : false;
  }
};

// Struct: Empty
attribution_internals.mojom.Empty = class {
  constructor(values = {}) {
  }
};

// Struct: WebUIReport
attribution_internals.mojom.WebUIReport = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Struct: WebUIDebugReport
attribution_internals.mojom.WebUIDebugReport = class {
  constructor(values = {}) {
    this.status = values.status !== undefined ? values.status : 0;
  }
};

// Struct: WebUIAggregatableDebugReport
attribution_internals.mojom.WebUIAggregatableDebugReport = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : null;
    this.send_result = values.send_result !== undefined ? values.send_result : 0;
  }
};

// Struct: WebUISource
attribution_internals.mojom.WebUISource = class {
  constructor(values = {}) {
    this.aggregatable_debug_key_piece = values.aggregatable_debug_key_piece !== undefined ? values.aggregatable_debug_key_piece : 0;
    this.kAttributable = values.kAttributable !== undefined ? values.kAttributable : "";
  }
};

// Struct: WebUIRegistration
attribution_internals.mojom.WebUIRegistration = class {
  constructor(values = {}) {
    this.reporting_origin = values.reporting_origin !== undefined ? values.reporting_origin : 0;
    this.cleared_debug_key = values.cleared_debug_key !== undefined ? values.cleared_debug_key : 0;
  }
};

// Struct: WebUITrigger
attribution_internals.mojom.WebUITrigger = class {
  constructor(values = {}) {
    this.aggregatable_result = values.aggregatable_result !== undefined ? values.aggregatable_result : null;
  }
};

// Struct: WebUISourceRegistration
attribution_internals.mojom.WebUISourceRegistration = class {
  constructor(values = {}) {
    this.status = values.status !== undefined ? values.status : null;
  }
};

// Struct: WebUIOsRegistration
attribution_internals.mojom.WebUIOsRegistration = class {
  constructor(values = {}) {
    this.result = values.result !== undefined ? values.result : 0;
  }
};

// Interface: Observer
attribution_internals.mojom.ObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'attribution_internals.mojom.Observer';
  }

  onSourcesChanged(sources) {
    // Method: OnSourcesChanged
    // Call: OnSourcesChanged(sources)
  }

  onReportsChanged(reports) {
    // Method: OnReportsChanged
    // Call: OnReportsChanged(reports)
  }

  onSourceHandled(source) {
    // Method: OnSourceHandled
    // Call: OnSourceHandled(source)
  }

  onReportHandled(report) {
    // Method: OnReportHandled
    // Call: OnReportHandled(report)
  }

  onDebugReportSent(report) {
    // Method: OnDebugReportSent
    // Call: OnDebugReportSent(report)
  }

  onAggregatableDebugReportSent(report) {
    // Method: OnAggregatableDebugReportSent
    // Call: OnAggregatableDebugReportSent(report)
  }

  onTriggerHandled(trigger) {
    // Method: OnTriggerHandled
    // Call: OnTriggerHandled(trigger)
  }

  onOsRegistration(registration) {
    // Method: OnOsRegistration
    // Call: OnOsRegistration(registration)
  }

  onDebugModeChanged(debug_mode) {
    // Method: OnDebugModeChanged
    // Call: OnDebugModeChanged(debug_mode)
  }

};

attribution_internals.mojom.ObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Handler
attribution_internals.mojom.HandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'attribution_internals.mojom.Handler';
  }

  isAttributionReportingEnabled() {
    // Method: IsAttributionReportingEnabled
    return new Promise((resolve) => {
      // Call: IsAttributionReportingEnabled()
      resolve({});
    });
  }

  sendReport(id) {
    // Method: SendReport
    // Call: SendReport(id)
  }

  clearStorage() {
    // Method: ClearStorage
    // Call: ClearStorage()
  }

};

attribution_internals.mojom.HandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Factory
attribution_internals.mojom.FactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'attribution_internals.mojom.Factory';
  }

  create(observer, handler) {
    // Method: Create
    // Call: Create(observer, handler)
  }

};

attribution_internals.mojom.FactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
