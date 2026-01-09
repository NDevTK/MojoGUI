// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/net_benchmarking.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: NetBenchmarking
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
      chrome.mojom.NetBenchmarking_CloseCurrentConnections_ParamsSpec.$,
      null,
      []);
  }

  clearCache() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.NetBenchmarking_ClearCache_ParamsSpec.$,
      null,
      []);
  }

  clearHostResolverCache() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.NetBenchmarking_ClearHostResolverCache_ParamsSpec.$,
      null,
      []);
  }

  clearPredictorCache() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.NetBenchmarking_ClearPredictorCache_ParamsSpec.$,
      null,
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
}};

// ParamsSpec for CloseCurrentConnections
chrome.mojom.NetBenchmarking_CloseCurrentConnections_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetBenchmarking.CloseCurrentConnections_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ClearCache
chrome.mojom.NetBenchmarking_ClearCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetBenchmarking.ClearCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ClearHostResolverCache
chrome.mojom.NetBenchmarking_ClearHostResolverCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetBenchmarking.ClearHostResolverCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ClearPredictorCache
chrome.mojom.NetBenchmarking_ClearPredictorCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.NetBenchmarking.ClearPredictorCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
chrome.mojom.NetBenchmarkingPtr = chrome.mojom.NetBenchmarkingRemote;
chrome.mojom.NetBenchmarkingRequest = chrome.mojom.NetBenchmarkingPendingReceiver;

