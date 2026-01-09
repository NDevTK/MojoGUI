// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/skyvault/local_files_migration.mojom
// Module: policy.local_user_files.mojom

'use strict';

// Module namespace
var policy = policy || {};
policy.local_user_files = policy.local_user_files || {};
policy.local_user_files.mojom = policy.local_user_files.mojom || {};


// Enum: CloudProvider
policy.local_user_files.mojom.CloudProvider = {
};

// Enum: TimeUnit
policy.local_user_files.mojom.TimeUnit = {
};

// Struct: TimeUnitAndValue
policy.local_user_files.mojom.TimeUnitAndValue = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Interface: PageHandlerFactory
policy.local_user_files.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'policy.local_user_files.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

policy.local_user_files.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
policy.local_user_files.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'policy.local_user_files.mojom.PageHandler';
  }

  getInitialDialogInfo() {
    // Method: GetInitialDialogInfo
    return new Promise((resolve) => {
      // Call: GetInitialDialogInfo()
      resolve({});
    });
  }

  uploadOrDeleteNow() {
    // Method: UploadOrDeleteNow
    // Call: UploadOrDeleteNow()
  }

  close() {
    // Method: Close
    // Call: Close()
  }

};

policy.local_user_files.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
policy.local_user_files.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'policy.local_user_files.mojom.Page';
  }

  updateRemainingTime(remaining_time) {
    // Method: UpdateRemainingTime
    // Call: UpdateRemainingTime(remaining_time)
  }

};

policy.local_user_files.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
