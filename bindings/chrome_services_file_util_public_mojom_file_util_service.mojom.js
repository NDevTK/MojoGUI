// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/file_util_service.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var sandbox = sandbox || {};

chrome.mojom.FileUtilService = {};
chrome.mojom.FileUtilService.$interfaceName = 'chrome.mojom.FileUtilService';
chrome.mojom.FileUtilService_BindZipFileCreator_ParamsSpec = { $: {} };
chrome.mojom.FileUtilService_BindSafeArchiveAnalyzer_ParamsSpec = { $: {} };
chrome.mojom.FileUtilService_BindSingleFileTarFileExtractor_ParamsSpec = { $: {} };
chrome.mojom.FileUtilService_BindSingleFileTarXzFileExtractor_ParamsSpec = { $: {} };

// Interface: FileUtilService
mojo.internal.Struct(
    chrome.mojom.FileUtilService_BindZipFileCreator_ParamsSpec, 'chrome.mojom.FileUtilService_BindZipFileCreator_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chrome.mojom.ZipFileCreatorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.FileUtilService_BindSafeArchiveAnalyzer_ParamsSpec, 'chrome.mojom.FileUtilService_BindSafeArchiveAnalyzer_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chrome.mojom.SafeArchiveAnalyzerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.FileUtilService_BindSingleFileTarFileExtractor_ParamsSpec, 'chrome.mojom.FileUtilService_BindSingleFileTarFileExtractor_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chrome.mojom.SingleFileExtractorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.FileUtilService_BindSingleFileTarXzFileExtractor_ParamsSpec, 'chrome.mojom.FileUtilService_BindSingleFileTarXzFileExtractor_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chrome.mojom.SingleFileExtractorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.FileUtilServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.FileUtilServiceRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.FileUtilService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.FileUtilServicePendingReceiver,
      handle);
    this.$ = new chrome.mojom.FileUtilServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.FileUtilServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindZipFileCreator(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.FileUtilService_BindZipFileCreator_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSafeArchiveAnalyzer(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.FileUtilService_BindSafeArchiveAnalyzer_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSingleFileTarFileExtractor(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.FileUtilService_BindSingleFileTarFileExtractor_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSingleFileTarXzFileExtractor(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.FileUtilService_BindSingleFileTarXzFileExtractor_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

chrome.mojom.FileUtilService.getRemote = function() {
  let remote = new chrome.mojom.FileUtilServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.FileUtilService',
    'context');
  return remote.$;
};

chrome.mojom.FileUtilServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.FileUtilService_BindZipFileCreator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindZipFileCreator(params.receiver);
          break;
        }
        case 1: {
          const params = chrome.mojom.FileUtilService_BindSafeArchiveAnalyzer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindSafeArchiveAnalyzer(params.receiver);
          break;
        }
        case 2: {
          const params = chrome.mojom.FileUtilService_BindSingleFileTarFileExtractor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindSingleFileTarFileExtractor(params.receiver);
          break;
        }
        case 3: {
          const params = chrome.mojom.FileUtilService_BindSingleFileTarXzFileExtractor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindSingleFileTarXzFileExtractor(params.receiver);
          break;
        }
      }
    }});
  }
};

chrome.mojom.FileUtilServiceReceiver = chrome.mojom.FileUtilServiceReceiver;

chrome.mojom.FileUtilServicePtr = chrome.mojom.FileUtilServiceRemote;
chrome.mojom.FileUtilServiceRequest = chrome.mojom.FileUtilServicePendingReceiver;

