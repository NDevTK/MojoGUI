// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/document_analysis_service.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chrome.mojom.DocumentAnalysisService',
    'context');
  return remote.$;
};

chrome.mojom.DocumentAnalysisServicePtr = chrome.mojom.DocumentAnalysisServiceRemote;
chrome.mojom.DocumentAnalysisServiceRequest = chrome.mojom.DocumentAnalysisServicePendingReceiver;

