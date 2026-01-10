// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/document_analysis_service.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: DocumentAnalysisService
chrome.mojom.mojom.DocumentAnalysisService = {};

chrome.mojom.mojom.DocumentAnalysisServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.DocumentAnalysisServiceRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.DocumentAnalysisService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.DocumentAnalysisServicePendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.DocumentAnalysisServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.DocumentAnalysisServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindSafeDocumentAnalyzer(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.DocumentAnalysisService_BindSafeDocumentAnalyzer_ParamsSpec,
      null,
      [receiver]);
  }

};

chrome.mojom.mojom.DocumentAnalysisService.getRemote = function() {
  let remote = new chrome.mojom.mojom.DocumentAnalysisServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.DocumentAnalysisService',
    'context');
  return remote.$;
};

// ParamsSpec for BindSafeDocumentAnalyzer
chrome.mojom.mojom.DocumentAnalysisService_BindSafeDocumentAnalyzer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.DocumentAnalysisService.BindSafeDocumentAnalyzer_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chrome.mojom.SafeDocumentAnalyzerSpec), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.DocumentAnalysisServicePtr = chrome.mojom.mojom.DocumentAnalysisServiceRemote;
chrome.mojom.mojom.DocumentAnalysisServiceRequest = chrome.mojom.mojom.DocumentAnalysisServicePendingReceiver;

