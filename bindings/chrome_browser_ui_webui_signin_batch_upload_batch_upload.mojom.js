// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/signin/batch_upload/batch_upload.mojom
// Module: batch_upload.mojom

'use strict';

// Module namespace
var batch_upload = batch_upload || {};
batch_upload.mojom = batch_upload.mojom || {};


// Struct: DataItem
batch_upload.mojom.DataItem = class {
  constructor(values = {}) {
    this.subtitle = values.subtitle !== undefined ? values.subtitle : 0;
  }
};

// Struct: DataContainer
batch_upload.mojom.DataContainer = class {
  constructor(values = {}) {
    this.is_theme = values.is_theme !== undefined ? values.is_theme : false;
  }
};

// Struct: BatchUploadAccountInfo
batch_upload.mojom.BatchUploadAccountInfo = class {
  constructor(values = {}) {
    this.data_picture_url = values.data_picture_url !== undefined ? values.data_picture_url : "";
  }
};

// Struct: BatchUploadData
batch_upload.mojom.BatchUploadData = class {
  constructor(values = {}) {
    this.data_containers = values.data_containers !== undefined ? values.data_containers : "";
  }
};

// Interface: PageHandlerFactory
batch_upload.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'batch_upload.mojom.PageHandlerFactory';
  }

  createBatchUploadHandler(page, handler) {
    // Method: CreateBatchUploadHandler
    // Call: CreateBatchUploadHandler(page, handler)
  }

};

batch_upload.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
batch_upload.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'batch_upload.mojom.PageHandler';
  }

  updateViewHeight(height) {
    // Method: UpdateViewHeight
    // Call: UpdateViewHeight(height)
  }

  saveToAccount(idsToMove) {
    // Method: SaveToAccount
    // Call: SaveToAccount(idsToMove)
  }

  close() {
    // Method: Close
    // Call: Close()
  }

};

batch_upload.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
batch_upload.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'batch_upload.mojom.Page';
  }

  sendBatchUploadData(data) {
    // Method: SendBatchUploadData
    // Call: SendBatchUploadData(data)
  }

};

batch_upload.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
