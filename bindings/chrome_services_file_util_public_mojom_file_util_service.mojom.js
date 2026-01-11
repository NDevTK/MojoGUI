// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/file_util_service.mojom
// Module: chrome.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  bindZipFileCreator(receiver) {
    return this.$.bindZipFileCreator(receiver);
  }
  bindSafeArchiveAnalyzer(receiver) {
    return this.$.bindSafeArchiveAnalyzer(receiver);
  }
  bindSingleFileTarFileExtractor(receiver) {
    return this.$.bindSingleFileTarFileExtractor(receiver);
  }
  bindSingleFileTarXzFileExtractor(receiver) {
    return this.$.bindSingleFileTarXzFileExtractor(receiver);
  }
};

chrome.mojom.FileUtilServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileUtilService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindZipFileCreator(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.FileUtilService_BindZipFileCreator_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSafeArchiveAnalyzer(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome.mojom.FileUtilService_BindSafeArchiveAnalyzer_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSingleFileTarFileExtractor(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chrome.mojom.FileUtilService_BindSingleFileTarFileExtractor_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSingleFileTarXzFileExtractor(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('FileUtilService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(chrome.mojom.FileUtilService_BindZipFileCreator_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.FileUtilService_BindSafeArchiveAnalyzer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.FileUtilService_BindSingleFileTarFileExtractor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.FileUtilService_BindSingleFileTarXzFileExtractor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.FileUtilService_BindZipFileCreator_ParamsSpec.$.structSpec);
          const result = this.impl.bindZipFileCreator(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.FileUtilService_BindSafeArchiveAnalyzer_ParamsSpec.$.structSpec);
          const result = this.impl.bindSafeArchiveAnalyzer(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.FileUtilService_BindSingleFileTarFileExtractor_ParamsSpec.$.structSpec);
          const result = this.impl.bindSingleFileTarFileExtractor(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.FileUtilService_BindSingleFileTarXzFileExtractor_ParamsSpec.$.structSpec);
          const result = this.impl.bindSingleFileTarXzFileExtractor(params.receiver);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

chrome.mojom.FileUtilServiceReceiver = chrome.mojom.FileUtilServiceReceiver;

chrome.mojom.FileUtilServicePtr = chrome.mojom.FileUtilServiceRemote;
chrome.mojom.FileUtilServiceRequest = chrome.mojom.FileUtilServicePendingReceiver;

