// Auto-generated MojoJS binding
// Source: chromium_src/components/page_image_service/mojom/page_image_service.mojom
// Module: page_image_service.mojom

'use strict';

// Module namespace
var page_image_service = page_image_service || {};
page_image_service.mojom = page_image_service.mojom || {};


// Enum: ClientId
page_image_service.mojom.ClientId = {
  JourneysSidePanel: 0,
  NtpRealbox: 1,
  NtpQuests: 2,
};

// Struct: Options
page_image_service.mojom.Options = class {
  constructor(values = {}) {
    this.true = values.true !== undefined ? values.true : false;
  }
};

// Struct: ImageResult
page_image_service.mojom.ImageResult = class {
  constructor(values = {}) {
    this.image_url = values.image_url !== undefined ? values.image_url : null;
  }
};

// Interface: PageImageServiceHandler
page_image_service.mojom.PageImageServiceHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'page_image_service.mojom.PageImageServiceHandler';
  }

  getPageImageUrl(client_id, page_url, options) {
    // Method: GetPageImageUrl
    return new Promise((resolve) => {
      // Call: GetPageImageUrl(client_id, page_url, options)
      resolve({});
    });
  }

};

page_image_service.mojom.PageImageServiceHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
