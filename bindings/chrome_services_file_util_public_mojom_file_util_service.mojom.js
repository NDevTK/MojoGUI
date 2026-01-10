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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.FileUtilService_BindZipFileCreator_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindZipFileCreator');
          const result = this.impl.bindZipFileCreator(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.FileUtilService_BindSafeArchiveAnalyzer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindSafeArchiveAnalyzer');
          const result = this.impl.bindSafeArchiveAnalyzer(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.FileUtilService_BindSingleFileTarFileExtractor_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindSingleFileTarFileExtractor');
          const result = this.impl.bindSingleFileTarFileExtractor(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.FileUtilService_BindSingleFileTarXzFileExtractor_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindSingleFileTarXzFileExtractor');
          const result = this.impl.bindSingleFileTarXzFileExtractor(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.FileUtilServiceReceiver = chrome.mojom.FileUtilServiceReceiver;

chrome.mojom.FileUtilServicePtr = chrome.mojom.FileUtilServiceRemote;
chrome.mojom.FileUtilServiceRequest = chrome.mojom.FileUtilServicePendingReceiver;

