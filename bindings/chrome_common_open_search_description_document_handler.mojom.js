// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/open_search_description_document_handler.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: OpenSearchDescriptionDocumentHandler
chrome.mojom.OpenSearchDescriptionDocumentHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.OpenSearchDescriptionDocumentHandler';
  }

  pageHasOpenSearchDescriptionDocument(page_url, osdd_url) {
    // Method: PageHasOpenSearchDescriptionDocument
    // Call: PageHasOpenSearchDescriptionDocument(page_url, osdd_url)
  }

};

chrome.mojom.OpenSearchDescriptionDocumentHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
