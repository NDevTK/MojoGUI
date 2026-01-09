// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/render_frame_test_helper.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: RenderFrameTestHelper
content.mojom.RenderFrameTestHelperPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.RenderFrameTestHelper';
  }

  getDocumentToken() {
    // Method: GetDocumentToken
    return new Promise((resolve) => {
      // Call: GetDocumentToken()
      resolve({});
    });
  }

};

content.mojom.RenderFrameTestHelperRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
