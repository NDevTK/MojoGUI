// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/enterprise_reporting/enterprise_reporting.mojom
// Module: enterprise_reporting.mojom

'use strict';

// Module namespace
var enterprise_reporting = enterprise_reporting || {};
enterprise_reporting.mojom = enterprise_reporting.mojom || {};


// Struct: ErpHistoryData
enterprise_reporting.mojom.ErpHistoryData = class {
  constructor(values = {}) {
    this.events = values.events !== undefined ? values.events : [];
  }
};

// Struct: ErpHistoryEvent
enterprise_reporting.mojom.ErpHistoryEvent = class {
  constructor(values = {}) {
    this.time = values.time !== undefined ? values.time : 0;
  }
};

// Struct: ErpHistoryEventParameter
enterprise_reporting.mojom.ErpHistoryEventParameter = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Interface: PageHandlerFactory
enterprise_reporting.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'enterprise_reporting.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

enterprise_reporting.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
enterprise_reporting.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'enterprise_reporting.mojom.PageHandler';
  }

  recordDebugState(state) {
    // Method: RecordDebugState
    // Call: RecordDebugState(state)
  }

  getDebugState() {
    // Method: GetDebugState
    return new Promise((resolve) => {
      // Call: GetDebugState()
      resolve({});
    });
  }

  getErpHistoryData() {
    // Method: GetErpHistoryData
    return new Promise((resolve) => {
      // Call: GetErpHistoryData()
      resolve({});
    });
  }

};

enterprise_reporting.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
enterprise_reporting.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'enterprise_reporting.mojom.Page';
  }

  setErpHistoryData(history_data) {
    // Method: SetErpHistoryData
    // Call: SetErpHistoryData(history_data)
  }

};

enterprise_reporting.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
