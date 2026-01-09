// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/on_device_internals/on_device_internals_page.mojom
// Module: on_device_internals.mojom

'use strict';

// Module namespace
var on_device_internals = on_device_internals || {};
on_device_internals.mojom = on_device_internals.mojom || {};


// Struct: PageData
on_device_internals.mojom.PageData = class {
  constructor(values = {}) {
    this.min_vram_mb = values.min_vram_mb !== undefined ? values.min_vram_mb : 0;
  }
};

// Struct: BaseModelState
on_device_internals.mojom.BaseModelState = class {
  constructor(values = {}) {
    this.info = values.info !== undefined ? values.info : "";
  }
};

// Struct: BaseModelInfo
on_device_internals.mojom.BaseModelInfo = class {
  constructor(values = {}) {
    this.backend_type = values.backend_type !== undefined ? values.backend_type : 0;
  }
};

// Struct: SupplementaryModelInfo
on_device_internals.mojom.SupplementaryModelInfo = class {
  constructor(values = {}) {
    this.is_ready = values.is_ready !== undefined ? values.is_ready : false;
  }
};

// Struct: FeatureAdaptationInfo
on_device_internals.mojom.FeatureAdaptationInfo = class {
  constructor(values = {}) {
    this.is_recently_used = values.is_recently_used !== undefined ? values.is_recently_used : 0;
  }
};

// Interface: PageHandlerFactory
on_device_internals.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_internals.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

on_device_internals.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
on_device_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_internals.mojom.PageHandler';
  }

  loadModel(model_path, performance_hint, model) {
    // Method: LoadModel
    return new Promise((resolve) => {
      // Call: LoadModel(model_path, performance_hint, model)
      resolve({});
    });
  }

  loadPlatformModel(model_path, model) {
    // Method: LoadPlatformModel
    return new Promise((resolve) => {
      // Call: LoadPlatformModel(model_path, model)
      resolve({});
    });
  }

  getDeviceAndPerformanceInfo() {
    // Method: GetDeviceAndPerformanceInfo
    return new Promise((resolve) => {
      // Call: GetDeviceAndPerformanceInfo()
      resolve({});
    });
  }

  getDefaultModelPath() {
    // Method: GetDefaultModelPath
    return new Promise((resolve) => {
      // Call: GetDefaultModelPath()
      resolve({});
    });
  }

  uninstallDefaultModel() {
    // Method: UninstallDefaultModel
    // Call: UninstallDefaultModel()
  }

  getPageData() {
    // Method: GetPageData
    return new Promise((resolve) => {
      // Call: GetPageData()
      resolve({});
    });
  }

  setFeatureRecentlyUsedState(feature_key, is_recently_used) {
    // Method: SetFeatureRecentlyUsedState
    // Call: SetFeatureRecentlyUsedState(feature_key, is_recently_used)
  }

  decodeBitmap(image_buffer) {
    // Method: DecodeBitmap
    return new Promise((resolve) => {
      // Call: DecodeBitmap(image_buffer)
      resolve({});
    });
  }

  resetModelCrashCount() {
    // Method: ResetModelCrashCount
    // Call: ResetModelCrashCount()
  }

};

on_device_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
on_device_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'on_device_internals.mojom.Page';
  }

  onLogMessageAdded(event_time, source_file, source_line, message) {
    // Method: OnLogMessageAdded
    // Call: OnLogMessageAdded(event_time, source_file, source_line, message)
  }

  onDownloadProgressUpdate(downloaded_bytes, total_bytes) {
    // Method: OnDownloadProgressUpdate
    // Call: OnDownloadProgressUpdate(downloaded_bytes, total_bytes)
  }

};

on_device_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
