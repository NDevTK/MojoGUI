// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/watermark/watermark.mojom
// Module: watermark.mojom

'use strict';

// Module namespace
var watermark = watermark || {};
watermark.mojom = watermark.mojom || {};


// Struct: WatermarkStyle
watermark.mojom.WatermarkStyle = class {
  constructor(values = {}) {
    this.fill_opacity = values.fill_opacity !== undefined ? values.fill_opacity : 0;
    this.font_size = values.font_size !== undefined ? values.font_size : 0;
  }
};

// Interface: PageHandlerFactory
watermark.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'watermark.mojom.PageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

watermark.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
watermark.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'watermark.mojom.PageHandler';
  }

  setWatermarkStyle(style) {
    // Method: SetWatermarkStyle
    // Call: SetWatermarkStyle(style)
  }

  showNotificationToast() {
    // Method: ShowNotificationToast
    // Call: ShowNotificationToast()
  }

};

watermark.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
