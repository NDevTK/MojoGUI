// Auto-generated MojoJS binding
// Source: chromium_src/components/webapps/common/web_page_metadata_agent.mojom
// Module: webapps.mojom

'use strict';

// Module namespace
var webapps = webapps || {};
webapps.mojom = webapps.mojom || {};


// Interface: WebPageMetadataAgent
webapps.mojom.WebPageMetadataAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'webapps.mojom.WebPageMetadataAgent';
  }

  getWebPageMetadata() {
    // Method: GetWebPageMetadata
    return new Promise((resolve) => {
      // Call: GetWebPageMetadata()
      resolve({});
    });
  }

};

webapps.mojom.WebPageMetadataAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
