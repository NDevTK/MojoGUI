// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/file_util_service.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};

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

chrome.mojom.FileUtilServicePtr = chrome.mojom.FileUtilServiceRemote;
chrome.mojom.FileUtilServiceRequest = chrome.mojom.FileUtilServicePendingReceiver;

