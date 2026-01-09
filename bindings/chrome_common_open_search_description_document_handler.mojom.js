// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/open_search_description_document_handler.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: OpenSearchDescriptionDocumentHandler
chrome.mojom.OpenSearchDescriptionDocumentHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.OpenSearchDescriptionDocumentHandlerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.OpenSearchDescriptionDocumentHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.OpenSearchDescriptionDocumentHandlerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.OpenSearchDescriptionDocumentHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.OpenSearchDescriptionDocumentHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  pageHasOpenSearchDescriptionDocument(page_url, osdd_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.OpenSearchDescriptionDocumentHandler_PageHasOpenSearchDescriptionDocument_ParamsSpec.$,
      null,
      [page_url, osdd_url]);
  }

};

chrome.mojom.OpenSearchDescriptionDocumentHandler.getRemote = function() {
  let remote = new chrome.mojom.OpenSearchDescriptionDocumentHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.OpenSearchDescriptionDocumentHandler',
    'context');
  return remote.$;
};

// ParamsSpec for PageHasOpenSearchDescriptionDocument
chrome.mojom.OpenSearchDescriptionDocumentHandler_PageHasOpenSearchDescriptionDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.OpenSearchDescriptionDocumentHandler.PageHasOpenSearchDescriptionDocument_Params',
      packedSize: 24,
      fields: [
        { name: 'page_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'osdd_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.OpenSearchDescriptionDocumentHandlerPtr = chrome.mojom.OpenSearchDescriptionDocumentHandlerRemote;
chrome.mojom.OpenSearchDescriptionDocumentHandlerRequest = chrome.mojom.OpenSearchDescriptionDocumentHandlerPendingReceiver;

