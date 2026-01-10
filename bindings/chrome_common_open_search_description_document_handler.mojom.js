// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/open_search_description_document_handler.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var url = url || {};


// Interface: OpenSearchDescriptionDocumentHandler
chrome.mojom.mojom.OpenSearchDescriptionDocumentHandler = {};

chrome.mojom.mojom.OpenSearchDescriptionDocumentHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.OpenSearchDescriptionDocumentHandlerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.OpenSearchDescriptionDocumentHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.OpenSearchDescriptionDocumentHandlerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.OpenSearchDescriptionDocumentHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.OpenSearchDescriptionDocumentHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  pageHasOpenSearchDescriptionDocument(page_url, osdd_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.OpenSearchDescriptionDocumentHandler_PageHasOpenSearchDescriptionDocument_ParamsSpec,
      null,
      [page_url, osdd_url]);
  }

};

chrome.mojom.mojom.OpenSearchDescriptionDocumentHandler.getRemote = function() {
  let remote = new chrome.mojom.mojom.OpenSearchDescriptionDocumentHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.OpenSearchDescriptionDocumentHandler',
    'context');
  return remote.$;
};

// ParamsSpec for PageHasOpenSearchDescriptionDocument
chrome.mojom.mojom.OpenSearchDescriptionDocumentHandler_PageHasOpenSearchDescriptionDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.OpenSearchDescriptionDocumentHandler.PageHasOpenSearchDescriptionDocument_Params',
      packedSize: 24,
      fields: [
        { name: 'page_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'osdd_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.OpenSearchDescriptionDocumentHandlerPtr = chrome.mojom.mojom.OpenSearchDescriptionDocumentHandlerRemote;
chrome.mojom.mojom.OpenSearchDescriptionDocumentHandlerRequest = chrome.mojom.mojom.OpenSearchDescriptionDocumentHandlerPendingReceiver;

