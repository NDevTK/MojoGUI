// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/open_search_description_document_handler.mojom
// Module: chrome.mojom

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
  pageHasOpenSearchDescriptionDocument(page_url, osdd_url) {
    return this.$.pageHasOpenSearchDescriptionDocument(page_url, osdd_url);
  }
};

chrome.mojom.OpenSearchDescriptionDocumentHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OpenSearchDescriptionDocumentHandler', [
      { explicit: null },
    ]);
  }

  pageHasOpenSearchDescriptionDocument(page_url, osdd_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('OpenSearchDescriptionDocumentHandler', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.OpenSearchDescriptionDocumentHandler_PageHasOpenSearchDescriptionDocument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.OpenSearchDescriptionDocumentHandler_PageHasOpenSearchDescriptionDocument_ParamsSpec.$.structSpec);
          const result = this.impl.pageHasOpenSearchDescriptionDocument(params.page_url, params.osdd_url);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.OpenSearchDescriptionDocumentHandlerReceiver = chrome.mojom.OpenSearchDescriptionDocumentHandlerReceiver;

chrome.mojom.OpenSearchDescriptionDocumentHandlerPtr = chrome.mojom.OpenSearchDescriptionDocumentHandlerRemote;
chrome.mojom.OpenSearchDescriptionDocumentHandlerRequest = chrome.mojom.OpenSearchDescriptionDocumentHandlerPendingReceiver;

