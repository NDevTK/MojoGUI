// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/batch_upload_promo/batch_upload_promo.mojom
// Module: batch_upload_promo.mojom

'use strict';

// Module namespace
var batch_upload_promo = batch_upload_promo || {};
batch_upload_promo.mojom = batch_upload_promo.mojom || {};


// Interface: PageHandlerFactory
batch_upload_promo.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'batch_upload_promo.mojom.PageHandlerFactory';
  }

  createBatchUploadPromoHandler(page, handler) {
    // Method: CreateBatchUploadPromoHandler
    // Call: CreateBatchUploadPromoHandler(page, handler)
  }

};

batch_upload_promo.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
batch_upload_promo.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'batch_upload_promo.mojom.PageHandler';
  }

  getBatchUploadPromoLocalDataCount() {
    // Method: GetBatchUploadPromoLocalDataCount
    return new Promise((resolve) => {
      // Call: GetBatchUploadPromoLocalDataCount()
      resolve({});
    });
  }

  onBatchUploadPromoClicked() {
    // Method: OnBatchUploadPromoClicked
    // Call: OnBatchUploadPromoClicked()
  }

};

batch_upload_promo.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
batch_upload_promo.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'batch_upload_promo.mojom.Page';
  }

  onLocalDataCountChanged(local_data_count) {
    // Method: OnLocalDataCountChanged
    // Call: OnLocalDataCountChanged(local_data_count)
  }

};

batch_upload_promo.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
