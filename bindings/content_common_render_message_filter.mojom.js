// Auto-generated MojoJS binding
// Source: chromium_src/content/common/render_message_filter.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Struct: FrameRoutingInfo
content.mojom.FrameRoutingInfo = class {
  constructor(values = {}) {
    this.document_token = values.document_token !== undefined ? values.document_token : 0;
  }
};

// Interface: RenderMessageFilter
content.mojom.RenderMessageFilterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.RenderMessageFilter';
  }

  generateSingleFrameRoutingInfo() {
    // Method: GenerateSingleFrameRoutingInfo
    return new Promise((resolve) => {
      // Call: GenerateSingleFrameRoutingInfo()
      resolve({});
    });
  }

  generateFrameRoutingInfos() {
    // Method: GenerateFrameRoutingInfos
    return new Promise((resolve) => {
      // Call: GenerateFrameRoutingInfos()
      resolve({});
    });
  }

};

content.mojom.RenderMessageFilterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
