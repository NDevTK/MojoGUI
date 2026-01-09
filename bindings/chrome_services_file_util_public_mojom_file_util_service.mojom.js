// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/file_util_service.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: FileUtilService
chrome.mojom.FileUtilService = {};

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
      [receiver]);
  }

  bindSafeArchiveAnalyzer(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.FileUtilService_BindSafeArchiveAnalyzer_ParamsSpec,
      null,
      [receiver]);
  }

  bindSingleFileTarFileExtractor(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.FileUtilService_BindSingleFileTarFileExtractor_ParamsSpec,
      null,
      [receiver]);
  }

  bindSingleFileTarXzFileExtractor(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.FileUtilService_BindSingleFileTarXzFileExtractor_ParamsSpec,
      null,
      [receiver]);
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

// ParamsSpec for BindZipFileCreator
chrome.mojom.FileUtilService_BindZipFileCreator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.FileUtilService.BindZipFileCreator_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindSafeArchiveAnalyzer
chrome.mojom.FileUtilService_BindSafeArchiveAnalyzer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.FileUtilService.BindSafeArchiveAnalyzer_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindSingleFileTarFileExtractor
chrome.mojom.FileUtilService_BindSingleFileTarFileExtractor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.FileUtilService.BindSingleFileTarFileExtractor_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindSingleFileTarXzFileExtractor
chrome.mojom.FileUtilService_BindSingleFileTarXzFileExtractor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.FileUtilService.BindSingleFileTarXzFileExtractor_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.FileUtilServicePtr = chrome.mojom.FileUtilServiceRemote;
chrome.mojom.FileUtilServiceRequest = chrome.mojom.FileUtilServicePendingReceiver;

