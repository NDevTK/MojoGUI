// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/document_analysis_service.mojom
// Module: chrome.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var sandbox = sandbox || {};
var services = services || {};

chrome.mojom.DocumentAnalysisService = {};
chrome.mojom.DocumentAnalysisService.$interfaceName = 'chrome.mojom.DocumentAnalysisService';
chrome.mojom.DocumentAnalysisService_BindSafeDocumentAnalyzer_ParamsSpec = { $: {} };

// Interface: DocumentAnalysisService
mojo.internal.Struct(
    chrome.mojom.DocumentAnalysisService_BindSafeDocumentAnalyzer_ParamsSpec, 'chrome.mojom.DocumentAnalysisService_BindSafeDocumentAnalyzer_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chrome.mojom.SafeDocumentAnalyzerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.DocumentAnalysisServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.DocumentAnalysisServiceRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.DocumentAnalysisService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.DocumentAnalysisServicePendingReceiver,
      handle);
    this.$ = new chrome.mojom.DocumentAnalysisServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindSafeDocumentAnalyzer(receiver) {
    return this.$.bindSafeDocumentAnalyzer(receiver);
  }
};

chrome.mojom.DocumentAnalysisServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DocumentAnalysisService', [
      { explicit: null },
    ]);
  }

  bindSafeDocumentAnalyzer(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.DocumentAnalysisService_BindSafeDocumentAnalyzer_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

chrome.mojom.DocumentAnalysisService.getRemote = function() {
  let remote = new chrome.mojom.DocumentAnalysisServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.DocumentAnalysisService',
    'context');
  return remote.$;
};

chrome.mojom.DocumentAnalysisServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DocumentAnalysisService', [
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
             decoder.decodeStructInline(chrome.mojom.DocumentAnalysisService_BindSafeDocumentAnalyzer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.DocumentAnalysisService_BindSafeDocumentAnalyzer_ParamsSpec.$.structSpec);
          const result = this.impl.bindSafeDocumentAnalyzer(params.receiver);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

chrome.mojom.DocumentAnalysisServiceReceiver = chrome.mojom.DocumentAnalysisServiceReceiver;

chrome.mojom.DocumentAnalysisServicePtr = chrome.mojom.DocumentAnalysisServiceRemote;
chrome.mojom.DocumentAnalysisServiceRequest = chrome.mojom.DocumentAnalysisServicePendingReceiver;

