// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/histogram_fetcher.mojom
// Module: metrics.mojom

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};
var mojo_base = mojo_base || {};

metrics.mojom.UmaChildPingStatusSpec = { $: mojo.internal.Enum() };
metrics.mojom.UmaPingCallSourceSpec = { $: mojo.internal.Enum() };
metrics.mojom.ChildHistogramFetcherFactory = {};
metrics.mojom.ChildHistogramFetcherFactory.$interfaceName = 'metrics.mojom.ChildHistogramFetcherFactory';
metrics.mojom.ChildHistogramFetcherFactory_CreateFetcher_ParamsSpec = { $: {} };
metrics.mojom.ChildHistogramFetcher = {};
metrics.mojom.ChildHistogramFetcher.$interfaceName = 'metrics.mojom.ChildHistogramFetcher';
metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ParamsSpec = { $: {} };
metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ResponseParamsSpec = { $: {} };
metrics.mojom.ChildHistogramFetcher_Ping_ParamsSpec = { $: {} };
metrics.mojom.ChildHistogramFetcher_Ping_ResponseParamsSpec = { $: {} };

// Enum: UmaChildPingStatus
metrics.mojom.UmaChildPingStatus = {
  BROWSER_SENT_IPC: 0,
  CHILD_RECEIVED_IPC: 1,
  BROWSER_REPLY_CALLBACK: 2,
};

// Enum: UmaPingCallSource
metrics.mojom.UmaPingCallSource = {
  PERIODIC: 0,
  SHARED_MEMORY_SET_UP: 1,
};

// Interface: ChildHistogramFetcherFactory
mojo.internal.Struct(
    metrics.mojom.ChildHistogramFetcherFactory_CreateFetcher_ParamsSpec, 'metrics.mojom.ChildHistogramFetcherFactory_CreateFetcher_Params', [
      mojo.internal.StructField('shared_memory', 0, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('child_histogram_fetcher', 8, 0, mojo.internal.InterfaceRequest(metrics.mojom.ChildHistogramFetcherRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

metrics.mojom.ChildHistogramFetcherFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.mojom.ChildHistogramFetcherFactoryRemote = class {
  static get $interfaceName() {
    return 'metrics.mojom.ChildHistogramFetcherFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.mojom.ChildHistogramFetcherFactoryPendingReceiver,
      handle);
    this.$ = new metrics.mojom.ChildHistogramFetcherFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createFetcher(shared_memory, child_histogram_fetcher) {
    return this.$.createFetcher(shared_memory, child_histogram_fetcher);
  }
};

metrics.mojom.ChildHistogramFetcherFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChildHistogramFetcherFactory', [
      { explicit: null },
    ]);
  }

  createFetcher(shared_memory, child_histogram_fetcher) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      metrics.mojom.ChildHistogramFetcherFactory_CreateFetcher_ParamsSpec,
      null,
      [shared_memory, child_histogram_fetcher],
      false);
  }

};

metrics.mojom.ChildHistogramFetcherFactory.getRemote = function() {
  let remote = new metrics.mojom.ChildHistogramFetcherFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.mojom.ChildHistogramFetcherFactory',
    'context');
  return remote.$;
};

metrics.mojom.ChildHistogramFetcherFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChildHistogramFetcherFactory', [
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
             decoder.decodeStructInline(metrics.mojom.ChildHistogramFetcherFactory_CreateFetcher_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(metrics.mojom.ChildHistogramFetcherFactory_CreateFetcher_ParamsSpec.$.structSpec);
          const result = this.impl.createFetcher(params.shared_memory, params.child_histogram_fetcher);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

metrics.mojom.ChildHistogramFetcherFactoryReceiver = metrics.mojom.ChildHistogramFetcherFactoryReceiver;

metrics.mojom.ChildHistogramFetcherFactoryPtr = metrics.mojom.ChildHistogramFetcherFactoryRemote;
metrics.mojom.ChildHistogramFetcherFactoryRequest = metrics.mojom.ChildHistogramFetcherFactoryPendingReceiver;


// Interface: ChildHistogramFetcher
mojo.internal.Struct(
    metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ParamsSpec, 'metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ResponseParamsSpec, 'metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ResponseParams', [
      mojo.internal.StructField('deltas', 0, 0, mojo.internal.Array(mojo_base.mojom.ByteStringSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    metrics.mojom.ChildHistogramFetcher_Ping_ParamsSpec, 'metrics.mojom.ChildHistogramFetcher_Ping_Params', [
      mojo.internal.StructField('call_source', 0, 0, metrics.mojom.UmaPingCallSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    metrics.mojom.ChildHistogramFetcher_Ping_ResponseParamsSpec, 'metrics.mojom.ChildHistogramFetcher_Ping_ResponseParams', [
    ],
    [[0, 8]]);

metrics.mojom.ChildHistogramFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.mojom.ChildHistogramFetcherRemote = class {
  static get $interfaceName() {
    return 'metrics.mojom.ChildHistogramFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.mojom.ChildHistogramFetcherPendingReceiver,
      handle);
    this.$ = new metrics.mojom.ChildHistogramFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getChildNonPersistentHistogramData() {
    return this.$.getChildNonPersistentHistogramData();
  }
  ping(call_source) {
    return this.$.ping(call_source);
  }
};

metrics.mojom.ChildHistogramFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChildHistogramFetcher', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getChildNonPersistentHistogramData() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ParamsSpec,
      metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ResponseParamsSpec,
      [],
      false);
  }

  ping(call_source) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      metrics.mojom.ChildHistogramFetcher_Ping_ParamsSpec,
      metrics.mojom.ChildHistogramFetcher_Ping_ResponseParamsSpec,
      [call_source],
      false);
  }

};

metrics.mojom.ChildHistogramFetcher.getRemote = function() {
  let remote = new metrics.mojom.ChildHistogramFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.mojom.ChildHistogramFetcher',
    'context');
  return remote.$;
};

metrics.mojom.ChildHistogramFetcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChildHistogramFetcher', [
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
             decoder.decodeStructInline(metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(metrics.mojom.ChildHistogramFetcher_Ping_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ParamsSpec.$.structSpec);
          const result = this.impl.getChildNonPersistentHistogramData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(metrics.mojom.ChildHistogramFetcher_Ping_ParamsSpec.$.structSpec);
          const result = this.impl.ping(params.call_source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, metrics.mojom.ChildHistogramFetcher_Ping_ResponseParamsSpec);
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

metrics.mojom.ChildHistogramFetcherReceiver = metrics.mojom.ChildHistogramFetcherReceiver;

metrics.mojom.ChildHistogramFetcherPtr = metrics.mojom.ChildHistogramFetcherRemote;
metrics.mojom.ChildHistogramFetcherRequest = metrics.mojom.ChildHistogramFetcherPendingReceiver;

