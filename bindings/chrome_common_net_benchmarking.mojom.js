// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/net_benchmarking.mojom
// Module: chrome.mojom

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
  closeCurrentConnections() {
    return this.$.closeCurrentConnections();
  }
  clearCache() {
    return this.$.clearCache();
  }
  clearHostResolverCache() {
    return this.$.clearHostResolverCache();
  }
  clearPredictorCache() {
    return this.$.clearPredictorCache();
  }
};

chrome.mojom.NetBenchmarkingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetBenchmarking', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  closeCurrentConnections() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.NetBenchmarking_CloseCurrentConnections_ParamsSpec,
      chrome.mojom.NetBenchmarking_CloseCurrentConnections_ResponseParamsSpec,
      [],
      false);
  }

  clearCache() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome.mojom.NetBenchmarking_ClearCache_ParamsSpec,
      chrome.mojom.NetBenchmarking_ClearCache_ResponseParamsSpec,
      [],
      false);
  }

  clearHostResolverCache() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chrome.mojom.NetBenchmarking_ClearHostResolverCache_ParamsSpec,
      chrome.mojom.NetBenchmarking_ClearHostResolverCache_ResponseParamsSpec,
      [],
      false);
  }

  clearPredictorCache() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('NetBenchmarking', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(chrome.mojom.NetBenchmarking_CloseCurrentConnections_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.NetBenchmarking_ClearCache_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.NetBenchmarking_ClearHostResolverCache_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.NetBenchmarking_ClearPredictorCache_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.NetBenchmarking_CloseCurrentConnections_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(chrome.mojom.NetBenchmarking_ClearCache_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(chrome.mojom.NetBenchmarking_ClearHostResolverCache_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(chrome.mojom.NetBenchmarking_ClearPredictorCache_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

chrome.mojom.NetBenchmarkingReceiver = chrome.mojom.NetBenchmarkingReceiver;

chrome.mojom.NetBenchmarkingPtr = chrome.mojom.NetBenchmarkingRemote;
chrome.mojom.NetBenchmarkingRequest = chrome.mojom.NetBenchmarkingPendingReceiver;

