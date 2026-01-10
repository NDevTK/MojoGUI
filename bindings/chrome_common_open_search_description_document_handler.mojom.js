// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/open_search_description_document_handler.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var url = url || {};

chrome.mojom.OpenSearchDescriptionDocumentHandler = {};
chrome.mojom.OpenSearchDescriptionDocumentHandler.$interfaceName = 'chrome.mojom.OpenSearchDescriptionDocumentHandler';
chrome.mojom.OpenSearchDescriptionDocumentHandler_PageHasOpenSearchDescriptionDocument_ParamsSpec = { $: {} };

// Interface: OpenSearchDescriptionDocumentHandler
mojo.internal.Struct(
    chrome.mojom.OpenSearchDescriptionDocumentHandler_PageHasOpenSearchDescriptionDocument_ParamsSpec, 'chrome.mojom.OpenSearchDescriptionDocumentHandler_PageHasOpenSearchDescriptionDocument_Params', [
      mojo.internal.StructField('page_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('osdd_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      chrome.mojom.OpenSearchDescriptionDocumentHandler_PageHasOpenSearchDescriptionDocument_ParamsSpec,
      null,
      [page_url, osdd_url],
      false);
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

chrome.mojom.OpenSearchDescriptionDocumentHandlerPtr = chrome.mojom.OpenSearchDescriptionDocumentHandlerRemote;
chrome.mojom.OpenSearchDescriptionDocumentHandlerRequest = chrome.mojom.OpenSearchDescriptionDocumentHandlerPendingReceiver;

