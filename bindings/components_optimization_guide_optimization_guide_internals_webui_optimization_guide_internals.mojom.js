// Auto-generated MojoJS binding
// Source: chromium_src/components/optimization_guide/optimization_guide_internals/webui/optimization_guide_internals.mojom
// Module: optimization_guide_internals.mojom

'use strict';

// Module namespace
var optimization_guide_internals = optimization_guide_internals || {};
optimization_guide_internals.mojom = optimization_guide_internals.mojom || {};


// Struct: DownloadedModelInfo
optimization_guide_internals.mojom.DownloadedModelInfo = class {
  constructor(values = {}) {
    this.optimization_target = values.optimization_target !== undefined ? values.optimization_target : "";
    this.file_path = values.file_path !== undefined ? values.file_path : 0;
  }
};

// Struct: LoggedClientIds
optimization_guide_internals.mojom.LoggedClientIds = class {
  constructor(values = {}) {
    this.client_id = values.client_id !== undefined ? values.client_id : 0;
  }
};

// Struct: MqlsLog
optimization_guide_internals.mojom.MqlsLog = class {
  constructor(values = {}) {
    this.status = values.status !== undefined ? values.status : "";
  }
};

// Interface: PageHandlerFactory
optimization_guide_internals.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'optimization_guide_internals.mojom.PageHandlerFactory';
  }

  createPageHandler(page) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page)
  }

  requestDownloadedModelsInfo() {
    // Method: RequestDownloadedModelsInfo
    return new Promise((resolve) => {
      // Call: RequestDownloadedModelsInfo()
      resolve({});
    });
  }

  requestLoggedModelQualityClientIds() {
    // Method: RequestLoggedModelQualityClientIds
    return new Promise((resolve) => {
      // Call: RequestLoggedModelQualityClientIds()
      resolve({});
    });
  }

  requestMqlsLogs() {
    // Method: RequestMqlsLogs
    return new Promise((resolve) => {
      // Call: RequestMqlsLogs()
      resolve({});
    });
  }

};

optimization_guide_internals.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
optimization_guide_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'optimization_guide_internals.mojom.Page';
  }

  onLogMessageAdded(event_time, log_source, source_file, source_line, message) {
    // Method: OnLogMessageAdded
    // Call: OnLogMessageAdded(event_time, log_source, source_file, source_line, message)
  }

};

optimization_guide_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
