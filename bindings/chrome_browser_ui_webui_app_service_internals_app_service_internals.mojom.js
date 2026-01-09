// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/app_service_internals/app_service_internals.mojom
// Module: mojom.app_service_internals

'use strict';

// Module namespace
var mojom = mojom || {};
mojom.app_service_internals = mojom.app_service_internals || {};


// Struct: AppInfo
mojom.app_service_internals.AppInfo = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
    this.debug_info = values.debug_info !== undefined ? values.debug_info : "";
  }
};

// Struct: PreferredAppInfo
mojom.app_service_internals.PreferredAppInfo = class {
  constructor(values = {}) {
    this.preferred_filters = values.preferred_filters !== undefined ? values.preferred_filters : "";
  }
};

// Struct: PromiseAppInfo
mojom.app_service_internals.PromiseAppInfo = class {
  constructor(values = {}) {
    this.package_id = values.package_id !== undefined ? values.package_id : "";
    this.debug_info = values.debug_info !== undefined ? values.debug_info : "";
  }
};

// Struct: AppCapabilityInfo
mojom.app_service_internals.AppCapabilityInfo = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
    this.debug_info = values.debug_info !== undefined ? values.debug_info : "";
  }
};

// Struct: DebugInfo
mojom.app_service_internals.DebugInfo = class {
  constructor(values = {}) {
    this.app_capability_list = values.app_capability_list !== undefined ? values.app_capability_list : [];
  }
};

// Interface: AppServiceInternalsPageHandler
mojom.app_service_internals.AppServiceInternalsPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mojom.app_service_internals.AppServiceInternalsPageHandler';
  }

  getDebugInfo() {
    // Method: GetDebugInfo
    return new Promise((resolve) => {
      // Call: GetDebugInfo()
      resolve({});
    });
  }

};

mojom.app_service_internals.AppServiceInternalsPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
