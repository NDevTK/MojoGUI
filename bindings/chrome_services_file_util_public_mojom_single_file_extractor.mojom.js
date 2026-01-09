// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/single_file_extractor.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: SingleFileExtractor
chrome.mojom.SingleFileExtractor = {};

chrome.mojom.SingleFileExtractorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.SingleFileExtractorRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.SingleFileExtractor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.SingleFileExtractorPendingReceiver,
      handle);
    this.$ = new chrome.mojom.SingleFileExtractorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.SingleFileExtractorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  extract(src_file, dst_file, listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.SingleFileExtractor_Extract_ParamsSpec,
      chrome.mojom.SingleFileExtractor_Extract_ResponseParamsSpec,
      [src_file, dst_file, listener]);
  }

};

chrome.mojom.SingleFileExtractor.getRemote = function() {
  let remote = new chrome.mojom.SingleFileExtractorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.SingleFileExtractor',
    'context');
  return remote.$;
};

// ParamsSpec for Extract
chrome.mojom.SingleFileExtractor_Extract_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SingleFileExtractor.Extract_Params',
      packedSize: 32,
      fields: [
        { name: 'src_file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false },
        { name: 'dst_file', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false },
        { name: 'listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.SingleFileExtractor_Extract_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SingleFileExtractor.Extract_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: chrome.file_util.mojom.ExtractionResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.SingleFileExtractorPtr = chrome.mojom.SingleFileExtractorRemote;
chrome.mojom.SingleFileExtractorRequest = chrome.mojom.SingleFileExtractorPendingReceiver;


// Interface: SingleFileExtractorListener
chrome.mojom.SingleFileExtractorListener = {};

chrome.mojom.SingleFileExtractorListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.SingleFileExtractorListenerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.SingleFileExtractorListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.SingleFileExtractorListenerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.SingleFileExtractorListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.SingleFileExtractorListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProgress(total_bytes, progress_bytes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.SingleFileExtractorListener_OnProgress_ParamsSpec,
      null,
      [total_bytes, progress_bytes]);
  }

};

chrome.mojom.SingleFileExtractorListener.getRemote = function() {
  let remote = new chrome.mojom.SingleFileExtractorListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.SingleFileExtractorListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnProgress
chrome.mojom.SingleFileExtractorListener_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SingleFileExtractorListener.OnProgress_Params',
      packedSize: 24,
      fields: [
        { name: 'total_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'progress_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.SingleFileExtractorListenerPtr = chrome.mojom.SingleFileExtractorListenerRemote;
chrome.mojom.SingleFileExtractorListenerRequest = chrome.mojom.SingleFileExtractorListenerPendingReceiver;

