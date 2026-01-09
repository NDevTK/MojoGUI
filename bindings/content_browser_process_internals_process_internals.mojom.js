// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/process_internals/process_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Enum: Type
mojom.Type = {
};

// Struct: ProcessCountInfo
mojom.ProcessCountInfo = class {
  constructor(values = {}) {
    this.live_renderer_processes_count_total = values.live_renderer_processes_count_total !== undefined ? values.live_renderer_processes_count_total : 0;
    this.renderer_process_count_for_limit = values.renderer_process_count_for_limit !== undefined ? values.renderer_process_count_for_limit : 0;
  }
};

// Struct: SiteInstanceInfo
mojom.SiteInstanceInfo = class {
  constructor(values = {}) {
    this.process_lock_url = values.process_lock_url !== undefined ? values.process_lock_url : 0;
    this.are_javascript_optimizers_enabled = values.are_javascript_optimizers_enabled !== undefined ? values.are_javascript_optimizers_enabled : false;
    this.storage_partition = values.storage_partition !== undefined ? values.storage_partition : "";
  }
};

// Struct: FrameInfo
mojom.FrameInfo = class {
  constructor(values = {}) {
    this.kActive = values.kActive !== undefined ? values.kActive : 0;
  }
};

// Struct: WebContentsInfo
mojom.WebContentsInfo = class {
  constructor(values = {}) {
    this.prerender_root_frames = values.prerender_root_frames !== undefined ? values.prerender_root_frames : "";
  }
};

// Struct: IsolatedOriginInfo
mojom.IsolatedOriginInfo = class {
  constructor(values = {}) {
    this.source = values.source !== undefined ? values.source : "";
  }
};

// Interface: ProcessInternalsHandler
mojom.ProcessInternalsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mojom.ProcessInternalsHandler';
  }

  getProcessCountInfo() {
    // Method: GetProcessCountInfo
    return new Promise((resolve) => {
      // Call: GetProcessCountInfo()
      resolve({});
    });
  }

  getIsolationMode() {
    // Method: GetIsolationMode
    return new Promise((resolve) => {
      // Call: GetIsolationMode()
      resolve({});
    });
  }

  getProcessPerSiteMode() {
    // Method: GetProcessPerSiteMode
    return new Promise((resolve) => {
      // Call: GetProcessPerSiteMode()
      resolve({});
    });
  }

  getUserTriggeredIsolatedOrigins() {
    // Method: GetUserTriggeredIsolatedOrigins
    return new Promise((resolve) => {
      // Call: GetUserTriggeredIsolatedOrigins()
      resolve({});
    });
  }

  getWebTriggeredIsolatedOrigins() {
    // Method: GetWebTriggeredIsolatedOrigins
    return new Promise((resolve) => {
      // Call: GetWebTriggeredIsolatedOrigins()
      resolve({});
    });
  }

  getGloballyIsolatedOrigins() {
    // Method: GetGloballyIsolatedOrigins
    return new Promise((resolve) => {
      // Call: GetGloballyIsolatedOrigins()
      resolve({});
    });
  }

  getAllWebContentsInfo() {
    // Method: GetAllWebContentsInfo
    return new Promise((resolve) => {
      // Call: GetAllWebContentsInfo()
      resolve({});
    });
  }

};

mojom.ProcessInternalsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
