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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.DocumentAnalysisService_BindSafeDocumentAnalyzer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindSafeDocumentAnalyzer(params.receiver);
          break;
        }
      }
    });
  }
};

chrome.mojom.DocumentAnalysisServiceReceiver = chrome.mojom.DocumentAnalysisServiceReceiver;

chrome.mojom.DocumentAnalysisServicePtr = chrome.mojom.DocumentAnalysisServiceRemote;
chrome.mojom.DocumentAnalysisServiceRequest = chrome.mojom.DocumentAnalysisServicePendingReceiver;

