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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CloseCurrentConnections
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.NetBenchmarking_CloseCurrentConnections_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseCurrentConnections (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: ClearCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.NetBenchmarking_ClearCache_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearCache (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: ClearHostResolverCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.NetBenchmarking_ClearHostResolverCache_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearHostResolverCache (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: ClearPredictorCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.NetBenchmarking_ClearPredictorCache_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearPredictorCache (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.NetBenchmarking_CloseCurrentConnections_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeCurrentConnections');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.NetBenchmarking_ClearCache_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearCache');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.NetBenchmarking_ClearHostResolverCache_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearHostResolverCache');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.NetBenchmarking_ClearPredictorCache_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearPredictorCache');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.NetBenchmarkingReceiver = chrome.mojom.NetBenchmarkingReceiver;

chrome.mojom.NetBenchmarkingPtr = chrome.mojom.NetBenchmarkingRemote;
chrome.mojom.NetBenchmarkingRequest = chrome.mojom.NetBenchmarkingPendingReceiver;

