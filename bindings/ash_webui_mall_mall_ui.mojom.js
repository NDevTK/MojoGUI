// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/mall/mall_ui.mojom
// Module: ash.mall.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.mall = ash.mall || {};
ash.mall.mojom = ash.mall.mojom || {};


// Interface: PageHandler
ash.mall.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mall.mojom.PageHandler';
  }

  getMallEmbedUrl(path) {
    // Method: GetMallEmbedUrl
    return new Promise((resolve) => {
      // Call: GetMallEmbedUrl(path)
      resolve({});
    });
  }

};

ash.mall.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
