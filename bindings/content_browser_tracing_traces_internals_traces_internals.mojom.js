// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/tracing/traces_internals/traces_internals.mojom
// Module: traces_internals.mojom

'use strict';

// Module namespace
var traces_internals = traces_internals || {};
traces_internals.mojom = traces_internals.mojom || {};


// Enum: ReportUploadState
traces_internals.mojom.ReportUploadState = {
};

// Enum: SkipUploadReason
traces_internals.mojom.SkipUploadReason = {
};

// Enum: TracingScenarioState
traces_internals.mojom.TracingScenarioState = {
};

// Struct: ClientTraceReport
traces_internals.mojom.ClientTraceReport = class {
  constructor(values = {}) {
    this.has_trace_content = values.has_trace_content !== undefined ? values.has_trace_content : 0;
  }
};

// Struct: Scenario
traces_internals.mojom.Scenario = class {
  constructor(values = {}) {
    this.current_state = values.current_state !== undefined ? values.current_state : false;
  }
};

// Struct: TraceCategory
traces_internals.mojom.TraceCategory = class {
  constructor(values = {}) {
    this.tags = values.tags !== undefined ? values.tags : false;
  }
};

// Interface: TracesInternalsHandlerFactory
traces_internals.mojom.TracesInternalsHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'traces_internals.mojom.TracesInternalsHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

traces_internals.mojom.TracesInternalsHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
traces_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'traces_internals.mojom.PageHandler';
  }

  startTraceSession(config_pb, enable_privacy_filters) {
    // Method: StartTraceSession
    return new Promise((resolve) => {
      // Call: StartTraceSession(config_pb, enable_privacy_filters)
      resolve({});
    });
  }

  cloneTraceSession() {
    // Method: CloneTraceSession
    return new Promise((resolve) => {
      // Call: CloneTraceSession()
      resolve({});
    });
  }

  stopTraceSession() {
    // Method: StopTraceSession
    return new Promise((resolve) => {
      // Call: StopTraceSession()
      resolve({});
    });
  }

  getTrackEventCategories() {
    // Method: GetTrackEventCategories
    return new Promise((resolve) => {
      // Call: GetTrackEventCategories()
      resolve({});
    });
  }

  getBufferUsage() {
    // Method: GetBufferUsage
    return new Promise((resolve) => {
      // Call: GetBufferUsage()
      resolve({});
    });
  }

  getAllTraceReports() {
    // Method: GetAllTraceReports
    return new Promise((resolve) => {
      // Call: GetAllTraceReports()
      resolve({});
    });
  }

  deleteSingleTrace(uuid) {
    // Method: DeleteSingleTrace
    return new Promise((resolve) => {
      // Call: DeleteSingleTrace(uuid)
      resolve({});
    });
  }

  deleteAllTraces() {
    // Method: DeleteAllTraces
    return new Promise((resolve) => {
      // Call: DeleteAllTraces()
      resolve({});
    });
  }

  userUploadSingleTrace(uuid) {
    // Method: UserUploadSingleTrace
    return new Promise((resolve) => {
      // Call: UserUploadSingleTrace(uuid)
      resolve({});
    });
  }

  downloadTrace(uuid) {
    // Method: DownloadTrace
    return new Promise((resolve) => {
      // Call: DownloadTrace(uuid)
      resolve({});
    });
  }

  getAllScenarios() {
    // Method: GetAllScenarios
    return new Promise((resolve) => {
      // Call: GetAllScenarios()
      resolve({});
    });
  }

  setEnabledScenarios(new_config) {
    // Method: SetEnabledScenarios
    return new Promise((resolve) => {
      // Call: SetEnabledScenarios(new_config)
      resolve({});
    });
  }

  setScenariosConfigFromString(config_string) {
    // Method: SetScenariosConfigFromString
    return new Promise((resolve) => {
      // Call: SetScenariosConfigFromString(config_string)
      resolve({});
    });
  }

  setScenariosConfigFromBuffer(config_pb) {
    // Method: SetScenariosConfigFromBuffer
    return new Promise((resolve) => {
      // Call: SetScenariosConfigFromBuffer(config_pb)
      resolve({});
    });
  }

  getPrivacyFilterEnabled() {
    // Method: GetPrivacyFilterEnabled
    return new Promise((resolve) => {
      // Call: GetPrivacyFilterEnabled()
      resolve({});
    });
  }

  setPrivacyFilterEnabled(enable) {
    // Method: SetPrivacyFilterEnabled
    // Call: SetPrivacyFilterEnabled(enable)
  }

  getSystemTracingState() {
    // Method: GetSystemTracingState
    return new Promise((resolve) => {
      // Call: GetSystemTracingState()
      resolve({});
    });
  }

  getSecurityShieldIconUrl() {
    // Method: GetSecurityShieldIconUrl
    return new Promise((resolve) => {
      // Call: GetSecurityShieldIconUrl()
      resolve({});
    });
  }

  enableSystemTracing() {
    // Method: EnableSystemTracing
    return new Promise((resolve) => {
      // Call: EnableSystemTracing()
      resolve({});
    });
  }

  disableSystemTracing() {
    // Method: DisableSystemTracing
    return new Promise((resolve) => {
      // Call: DisableSystemTracing()
      resolve({});
    });
  }

};

traces_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
traces_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'traces_internals.mojom.Page';
  }

  onTraceComplete(trace, uuid) {
    // Method: OnTraceComplete
    // Call: OnTraceComplete(trace, uuid)
  }

};

traces_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
