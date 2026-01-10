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

chrome.mojom.OpenSearchDescriptionDocumentHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: PageHasOpenSearchDescriptionDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.OpenSearchDescriptionDocumentHandler_PageHasOpenSearchDescriptionDocument_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PageHasOpenSearchDescriptionDocument (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.OpenSearchDescriptionDocumentHandler_PageHasOpenSearchDescriptionDocument_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.pageHasOpenSearchDescriptionDocument');
          const result = this.impl.pageHasOpenSearchDescriptionDocument(params.page_url, params.osdd_url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.OpenSearchDescriptionDocumentHandlerReceiver = chrome.mojom.OpenSearchDescriptionDocumentHandlerReceiver;

chrome.mojom.OpenSearchDescriptionDocumentHandlerPtr = chrome.mojom.OpenSearchDescriptionDocumentHandlerRemote;
chrome.mojom.OpenSearchDescriptionDocumentHandlerRequest = chrome.mojom.OpenSearchDescriptionDocumentHandlerPendingReceiver;

