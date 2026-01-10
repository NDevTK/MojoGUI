// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/single_file_extractor.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: SingleFileExtractor
chrome.mojom.mojom.SingleFileExtractor = {};

chrome.mojom.mojom.SingleFileExtractorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.SingleFileExtractorRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.SingleFileExtractor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.SingleFileExtractorPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.SingleFileExtractorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.SingleFileExtractorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  extract(src_file, dst_file, listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.SingleFileExtractor_Extract_ParamsSpec,
      chrome.mojom.mojom.SingleFileExtractor_Extract_ResponseParamsSpec,
      [src_file, dst_file, listener]);
  }

};

chrome.mojom.mojom.SingleFileExtractor.getRemote = function() {
  let remote = new chrome.mojom.mojom.SingleFileExtractorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.SingleFileExtractor',
    'context');
  return remote.$;
};

// ParamsSpec for Extract
chrome.mojom.mojom.SingleFileExtractor_Extract_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SingleFileExtractor.Extract_Params',
      packedSize: 32,
      fields: [
        { name: 'src_file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
        { name: 'dst_file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
        { name: 'listener', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chrome.mojom.SingleFileExtractorListenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chrome.mojom.mojom.SingleFileExtractor_Extract_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SingleFileExtractor.Extract_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chrome.file_util.mojom.ExtractionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.SingleFileExtractorPtr = chrome.mojom.mojom.SingleFileExtractorRemote;
chrome.mojom.mojom.SingleFileExtractorRequest = chrome.mojom.mojom.SingleFileExtractorPendingReceiver;


// Interface: SingleFileExtractorListener
chrome.mojom.mojom.SingleFileExtractorListener = {};

chrome.mojom.mojom.SingleFileExtractorListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.SingleFileExtractorListenerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.SingleFileExtractorListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.SingleFileExtractorListenerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.SingleFileExtractorListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.SingleFileExtractorListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProgress(total_bytes, progress_bytes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.SingleFileExtractorListener_OnProgress_ParamsSpec,
      null,
      [total_bytes, progress_bytes]);
  }

};

chrome.mojom.mojom.SingleFileExtractorListener.getRemote = function() {
  let remote = new chrome.mojom.mojom.SingleFileExtractorListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.SingleFileExtractorListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnProgress
chrome.mojom.mojom.SingleFileExtractorListener_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SingleFileExtractorListener.OnProgress_Params',
      packedSize: 24,
      fields: [
        { name: 'total_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'progress_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.SingleFileExtractorListenerPtr = chrome.mojom.mojom.SingleFileExtractorListenerRemote;
chrome.mojom.mojom.SingleFileExtractorListenerRequest = chrome.mojom.mojom.SingleFileExtractorListenerPendingReceiver;

