// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/inner_html.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: InnerHtmlAgent
blink.mojom.InnerHtmlAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.InnerHtmlAgent';
  }

  getInnerHtml() {
    // Method: GetInnerHtml
    return new Promise((resolve) => {
      // Call: GetInnerHtml()
      resolve({});
    });
  }

};

blink.mojom.InnerHtmlAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
