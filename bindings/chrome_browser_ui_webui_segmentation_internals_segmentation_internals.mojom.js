// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/segmentation_internals/segmentation_internals.mojom
// Module: segmentation_internals.mojom

'use strict';

// Module namespace
var segmentation_internals = segmentation_internals || {};
segmentation_internals.mojom = segmentation_internals.mojom || {};


// Struct: ServiceStatus
segmentation_internals.mojom.ServiceStatus = class {
  constructor(values = {}) {
    this.intialization_status = values.intialization_status !== undefined ? values.intialization_status : 0;
  }
};

// Struct: SegmentInfo
segmentation_internals.mojom.SegmentInfo = class {
  constructor(values = {}) {
    this.prediction_timestamp = values.prediction_timestamp !== undefined ? values.prediction_timestamp : 0;
  }
};

// Struct: ClientInfo
segmentation_internals.mojom.ClientInfo = class {
  constructor(values = {}) {
    this.segment_info = values.segment_info !== undefined ? values.segment_info : "";
  }
};

// Interface: PageHandlerFactory
segmentation_internals.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'segmentation_internals.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

segmentation_internals.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
segmentation_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'segmentation_internals.mojom.PageHandler';
  }

  getServiceStatus() {
    // Method: GetServiceStatus
    // Call: GetServiceStatus()
  }

  executeModel(segment_id) {
    // Method: ExecuteModel
    // Call: ExecuteModel(segment_id)
  }

  overwriteResult(segment_id, result) {
    // Method: OverwriteResult
    // Call: OverwriteResult(segment_id, result)
  }

  setSelected(segmentation_key, optimization_target) {
    // Method: SetSelected
    // Call: SetSelected(segmentation_key, optimization_target)
  }

};

segmentation_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
segmentation_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'segmentation_internals.mojom.Page';
  }

  onServiceStatusChanged(is_initialized, status_flag) {
    // Method: OnServiceStatusChanged
    // Call: OnServiceStatusChanged(is_initialized, status_flag)
  }

  onClientInfoAvailable(client_info) {
    // Method: OnClientInfoAvailable
    // Call: OnClientInfoAvailable(client_info)
  }

};

segmentation_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
