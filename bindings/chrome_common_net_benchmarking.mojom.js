// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/net_benchmarking.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};

chrome.mojom.NetBenchmarking = {};
chrome.mojom.NetBenchmarking.$interfaceName = 'chrome.mojom.NetBenchmarking';
chrome.mojom.NetBenchmarking_CloseCurrentConnections_ParamsSpec = { $: {} };
chrome.mojom.NetBenchmarking_CloseCurrentConnections_ResponseParamsSpec = { $: {} };
chrome.mojom.NetBenchmarking_ClearCache_ParamsSpec = { $: {} };
chrome.mojom.NetBenchmarking_ClearCache_ResponseParamsSpec = { $: {} };
chrome.mojom.NetBenchmarking_ClearHostResolverCache_ParamsSpec = { $: {} };
chrome.mojom.NetBenchmarking_ClearHostResolverCache_ResponseParamsSpec = { $: {} };
chrome.mojom.NetBenchmarking_ClearPredictorCache_ParamsSpec = { $: {} };
chrome.mojom.NetBenchmarking_ClearPredictorCache_ResponseParamsSpec = { $: {} };

// Interface: NetBenchmarking
mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_CloseCurrentConnections_ParamsSpec, 'chrome.mojom.NetBenchmarking_CloseCurrentConnections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_CloseCurrentConnections_ResponseParamsSpec, 'chrome.mojom.NetBenchmarking_CloseCurrentConnections_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_ClearCache_ParamsSpec, 'chrome.mojom.NetBenchmarking_ClearCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_ClearCache_ResponseParamsSpec, 'chrome.mojom.NetBenchmarking_ClearCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_ClearHostResolverCache_ParamsSpec, 'chrome.mojom.NetBenchmarking_ClearHostResolverCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_ClearHostResolverCache_ResponseParamsSpec, 'chrome.mojom.NetBenchmarking_ClearHostResolverCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_ClearPredictorCache_ParamsSpec, 'chrome.mojom.NetBenchmarking_ClearPredictorCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_ClearPredictorCache_ResponseParamsSpec, 'chrome.mojom.NetBenchmarking_ClearPredictorCache_ResponseParams', [
    ],
    [[0, 8]]);

chrome.mojom.NetBenchmarkingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.NetBenchmarkingRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.NetBenchmarking';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.NetBenchmarkingPendingReceiver,
      handle);
    this.$ = new chrome.mojom.NetBenchmarkingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.NetBenchmarkingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  closeCurrentConnections() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.NetBenchmarking_CloseCurrentConnections_ParamsSpec,
      chrome.mojom.NetBenchmarking_CloseCurrentConnections_ResponseParamsSpec,
      [],
      false);
  }

  clearCache() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.NetBenchmarking_ClearCache_ParamsSpec,
      chrome.mojom.NetBenchmarking_ClearCache_ResponseParamsSpec,
      [],
      false);
  }

  clearHostResolverCache() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.NetBenchmarking_ClearHostResolverCache_ParamsSpec,
      chrome.mojom.NetBenchmarking_ClearHostResolverCache_ResponseParamsSpec,
      [],
      false);
  }

  clearPredictorCache() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.NetBenchmarking_ClearPredictorCache_ParamsSpec,
      chrome.mojom.NetBenchmarking_ClearPredictorCache_ResponseParamsSpec,
      [],
      false);
  }

};

chrome.mojom.NetBenchmarking.getRemote = function() {
  let remote = new chrome.mojom.NetBenchmarkingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.NetBenchmarking',
    'context');
  return remote.$;
};

chrome.mojom.NetBenchmarkingReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.NetBenchmarking_CloseCurrentConnections_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeCurrentConnections();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.NetBenchmarking_CloseCurrentConnections_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = chrome.mojom.NetBenchmarking_ClearCache_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearCache();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.NetBenchmarking_ClearCache_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = chrome.mojom.NetBenchmarking_ClearHostResolverCache_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearHostResolverCache();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.NetBenchmarking_ClearHostResolverCache_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = chrome.mojom.NetBenchmarking_ClearPredictorCache_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearPredictorCache();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.NetBenchmarking_ClearPredictorCache_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

chrome.mojom.NetBenchmarkingReceiver = chrome.mojom.NetBenchmarkingReceiver;

chrome.mojom.NetBenchmarkingPtr = chrome.mojom.NetBenchmarkingRemote;
chrome.mojom.NetBenchmarkingRequest = chrome.mojom.NetBenchmarkingPendingReceiver;

