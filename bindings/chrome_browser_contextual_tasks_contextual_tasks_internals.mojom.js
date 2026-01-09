// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/contextual_tasks/contextual_tasks_internals.mojom
// Module: contextual_tasks_internals.mojom

'use strict';

// Module namespace
var contextual_tasks_internals = contextual_tasks_internals || {};
contextual_tasks_internals.mojom = contextual_tasks_internals.mojom || {};


// Struct: GetRelevantContextRequest
contextual_tasks_internals.mojom.GetRelevantContextRequest = class {
  constructor(values = {}) {
    this.tab_selection_mode = values.tab_selection_mode !== undefined ? values.tab_selection_mode : "";
    this.min_model_score = values.min_model_score !== undefined ? values.min_model_score : 0;
  }
};

// Struct: Tab
contextual_tasks_internals.mojom.Tab = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : "";
  }
};

// Struct: GetRelevantContextResponse
contextual_tasks_internals.mojom.GetRelevantContextResponse = class {
  constructor(values = {}) {
    this.relevant_tabs = values.relevant_tabs !== undefined ? values.relevant_tabs : [];
  }
};

// Interface: ContextualTasksInternalsPageHandlerFactory
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ContextualTasksInternalsPageHandler
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler';
  }

  getRelevantContext(request) {
    // Method: GetRelevantContext
    return new Promise((resolve) => {
      // Call: GetRelevantContext(request)
      resolve({});
    });
  }

};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ContextualTasksInternalsPage
contextual_tasks_internals.mojom.ContextualTasksInternalsPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'contextual_tasks_internals.mojom.ContextualTasksInternalsPage';
  }

  onLogMessageAdded(event_time, source_file, source_line, message) {
    // Method: OnLogMessageAdded
    // Call: OnLogMessageAdded(event_time, source_file, source_line, message)
  }

};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
