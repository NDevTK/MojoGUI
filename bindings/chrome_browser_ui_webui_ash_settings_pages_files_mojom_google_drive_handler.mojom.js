// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/files/mojom/google_drive_handler.mojom
// Module: ash.settings.google_drive.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.google_drive = ash.settings.google_drive || {};
ash.settings.google_drive.mojom = ash.settings.google_drive.mojom || {};


// Struct: Status
ash.settings.google_drive.mojom.Status = class {
  constructor(values = {}) {
    this.is_error = values.is_error !== undefined ? values.is_error : 0;
  }
};

// Interface: PageHandlerFactory
ash.settings.google_drive.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.google_drive.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

ash.settings.google_drive.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.settings.google_drive.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.google_drive.mojom.PageHandler';
  }

  calculateRequiredSpace() {
    // Method: CalculateRequiredSpace
    // Call: CalculateRequiredSpace()
  }

  getContentCacheSize() {
    // Method: GetContentCacheSize
    return new Promise((resolve) => {
      // Call: GetContentCacheSize()
      resolve({});
    });
  }

  clearPinnedFiles() {
    // Method: ClearPinnedFiles
    // Call: ClearPinnedFiles()
  }

  recordBulkPinningEnabledMetric() {
    // Method: RecordBulkPinningEnabledMetric
    // Call: RecordBulkPinningEnabledMetric()
  }

};

ash.settings.google_drive.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
ash.settings.google_drive.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.google_drive.mojom.Page';
  }

  onServiceUnavailable() {
    // Method: OnServiceUnavailable
    // Call: OnServiceUnavailable()
  }

  onProgress(status) {
    // Method: OnProgress
    // Call: OnProgress(status)
  }

};

ash.settings.google_drive.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
