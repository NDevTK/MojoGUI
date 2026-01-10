// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/document_analysis_service.mojom
// Module: chrome.mojom

'use strict';

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
};

chrome.mojom.DocumentAnalysisServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindSafeDocumentAnalyzer(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: BindSafeDocumentAnalyzer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.DocumentAnalysisService_BindSafeDocumentAnalyzer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSafeDocumentAnalyzer (0)');
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
          const params = decoder.decodeStruct(chrome.mojom.DocumentAnalysisService_BindSafeDocumentAnalyzer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindSafeDocumentAnalyzer');
          const result = this.impl.bindSafeDocumentAnalyzer(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.DocumentAnalysisServiceReceiver = chrome.mojom.DocumentAnalysisServiceReceiver;

chrome.mojom.DocumentAnalysisServicePtr = chrome.mojom.DocumentAnalysisServiceRemote;
chrome.mojom.DocumentAnalysisServiceRequest = chrome.mojom.DocumentAnalysisServicePendingReceiver;

