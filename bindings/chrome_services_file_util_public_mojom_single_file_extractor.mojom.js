// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/single_file_extractor.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var mojo_base = mojo_base || {};

chrome.mojom.SingleFileExtractor = {};
chrome.mojom.SingleFileExtractor.$interfaceName = 'chrome.mojom.SingleFileExtractor';
chrome.mojom.SingleFileExtractor_Extract_ParamsSpec = { $: {} };
chrome.mojom.SingleFileExtractor_Extract_ResponseParamsSpec = { $: {} };
chrome.mojom.SingleFileExtractorListener = {};
chrome.mojom.SingleFileExtractorListener.$interfaceName = 'chrome.mojom.SingleFileExtractorListener';
chrome.mojom.SingleFileExtractorListener_OnProgress_ParamsSpec = { $: {} };

// Interface: SingleFileExtractor
mojo.internal.Struct(
    chrome.mojom.SingleFileExtractor_Extract_ParamsSpec, 'chrome.mojom.SingleFileExtractor_Extract_Params', [
      mojo.internal.StructField('src_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dst_file', 8, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(chrome.mojom.SingleFileExtractorListenerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.SingleFileExtractor_Extract_ResponseParamsSpec, 'chrome.mojom.SingleFileExtractor_Extract_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chrome.file_util.mojom.ExtractionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [src_file, dst_file, listener],
      false);
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

chrome.mojom.SingleFileExtractorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.SingleFileExtractor_Extract_ParamsSpec.$.decode(message.payload);
          const result = this.impl.extract(params.src_file, params.dst_file, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chrome.mojom.SingleFileExtractor_Extract_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

chrome.mojom.SingleFileExtractorReceiver = chrome.mojom.SingleFileExtractorReceiver;

chrome.mojom.SingleFileExtractorPtr = chrome.mojom.SingleFileExtractorRemote;
chrome.mojom.SingleFileExtractorRequest = chrome.mojom.SingleFileExtractorPendingReceiver;


// Interface: SingleFileExtractorListener
mojo.internal.Struct(
    chrome.mojom.SingleFileExtractorListener_OnProgress_ParamsSpec, 'chrome.mojom.SingleFileExtractorListener_OnProgress_Params', [
      mojo.internal.StructField('total_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('progress_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [total_bytes, progress_bytes],
      false);
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

chrome.mojom.SingleFileExtractorListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.SingleFileExtractorListener_OnProgress_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onProgress(params.total_bytes, params.progress_bytes);
          break;
        }
      }
    });
  }
};

chrome.mojom.SingleFileExtractorListenerReceiver = chrome.mojom.SingleFileExtractorListenerReceiver;

chrome.mojom.SingleFileExtractorListenerPtr = chrome.mojom.SingleFileExtractorListenerRemote;
chrome.mojom.SingleFileExtractorListenerRequest = chrome.mojom.SingleFileExtractorListenerPendingReceiver;

