// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/subapps/sub_apps_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SubAppsServiceResultCode
blink.mojom.SubAppsServiceResultCode = {
};

// Struct: SubAppsServiceAddParameters
blink.mojom.SubAppsServiceAddParameters = class {
  constructor(values = {}) {
    this.install_url_path = values.install_url_path !== undefined ? values.install_url_path : "";
  }
};

// Struct: SubAppsServiceAddResult
blink.mojom.SubAppsServiceAddResult = class {
  constructor(values = {}) {
    this.result_code = values.result_code !== undefined ? values.result_code : "";
  }
};

// Struct: SubAppsServiceListResult
blink.mojom.SubAppsServiceListResult = class {
  constructor(values = {}) {
    this.sub_apps_list = values.sub_apps_list !== undefined ? values.sub_apps_list : [];
  }
};

// Struct: SubAppsServiceListResultEntry
blink.mojom.SubAppsServiceListResultEntry = class {
  constructor(values = {}) {
    this.app_name = values.app_name !== undefined ? values.app_name : "";
  }
};

// Struct: SubAppsServiceRemoveResult
blink.mojom.SubAppsServiceRemoveResult = class {
  constructor(values = {}) {
    this.result_code = values.result_code !== undefined ? values.result_code : "";
  }
};

// Interface: SubAppsService
blink.mojom.SubAppsServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SubAppsService';
  }

  add(sub_apps_to_add) {
    // Method: Add
    return new Promise((resolve) => {
      // Call: Add(sub_apps_to_add)
      resolve({});
    });
  }

  list() {
    // Method: List
    return new Promise((resolve) => {
      // Call: List()
      resolve({});
    });
  }

  remove(manifest_id_paths) {
    // Method: Remove
    return new Promise((resolve) => {
      // Call: Remove(manifest_id_paths)
      resolve({});
    });
  }

};

blink.mojom.SubAppsServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
