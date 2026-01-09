// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/document_analysis_service.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: DocumentAnalysisService
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
      chrome.mojom.DocumentAnalysisService_BindSafeDocumentAnalyzer_ParamsSpec.$,
      null,
      [receiver]);
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
}};

// ParamsSpec for BindSafeDocumentAnalyzer
chrome.mojom.DocumentAnalysisService_BindSafeDocumentAnalyzer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.DocumentAnalysisService.BindSafeDocumentAnalyzer_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
chrome.mojom.DocumentAnalysisServicePtr = chrome.mojom.DocumentAnalysisServiceRemote;
chrome.mojom.DocumentAnalysisServiceRequest = chrome.mojom.DocumentAnalysisServicePendingReceiver;

