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
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_CloseCurrentConnections_ResponseParamsSpec, 'chrome.mojom.NetBenchmarking_CloseCurrentConnections_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_ClearCache_ParamsSpec, 'chrome.mojom.NetBenchmarking_ClearCache_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_ClearCache_ResponseParamsSpec, 'chrome.mojom.NetBenchmarking_ClearCache_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_ClearHostResolverCache_ParamsSpec, 'chrome.mojom.NetBenchmarking_ClearHostResolverCache_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_ClearHostResolverCache_ResponseParamsSpec, 'chrome.mojom.NetBenchmarking_ClearHostResolverCache_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_ClearPredictorCache_ParamsSpec, 'chrome.mojom.NetBenchmarking_ClearPredictorCache_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chrome.mojom.NetBenchmarking_ClearPredictorCache_ResponseParamsSpec, 'chrome.mojom.NetBenchmarking_ClearPredictorCache_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

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
      []);
  }

  clearCache() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.NetBenchmarking_ClearCache_ParamsSpec,
      chrome.mojom.NetBenchmarking_ClearCache_ResponseParamsSpec,
      []);
  }

  clearHostResolverCache() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.NetBenchmarking_ClearHostResolverCache_ParamsSpec,
      chrome.mojom.NetBenchmarking_ClearHostResolverCache_ResponseParamsSpec,
      []);
  }

  clearPredictorCache() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.NetBenchmarking_ClearPredictorCache_ParamsSpec,
      chrome.mojom.NetBenchmarking_ClearPredictorCache_ResponseParamsSpec,
      []);
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

chrome.mojom.NetBenchmarkingPtr = chrome.mojom.NetBenchmarkingRemote;
chrome.mojom.NetBenchmarkingRequest = chrome.mojom.NetBenchmarkingPendingReceiver;

