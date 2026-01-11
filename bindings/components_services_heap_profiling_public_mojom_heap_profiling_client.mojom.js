// Auto-generated MojoJS binding
// Source: chromium_src/components/services/heap_profiling/public/mojom/heap_profiling_client.mojom
// Module: heap_profiling.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var heap_profiling = heap_profiling || {};
heap_profiling.mojom = heap_profiling.mojom || {};

heap_profiling.mojom.StackModeSpec = { $: mojo.internal.Enum() };
heap_profiling.mojom.AllocatorTypeSpec = { $: mojo.internal.Enum() };
heap_profiling.mojom.ProfilingParamsSpec = { $: {} };
heap_profiling.mojom.HeapProfileSampleSpec = { $: {} };
heap_profiling.mojom.HeapProfileSpec = { $: {} };
heap_profiling.mojom.ProfilingClient = {};
heap_profiling.mojom.ProfilingClient.$interfaceName = 'heap_profiling.mojom.ProfilingClient';
heap_profiling.mojom.ProfilingClient_StartProfiling_ParamsSpec = { $: {} };
heap_profiling.mojom.ProfilingClient_StartProfiling_ResponseParamsSpec = { $: {} };
heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ParamsSpec = { $: {} };
heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ResponseParamsSpec = { $: {} };

// Enum: StackMode
heap_profiling.mojom.StackMode = {
  NATIVE_WITH_THREAD_NAMES: 0,
  NATIVE_WITHOUT_THREAD_NAMES: 1,
};

// Enum: AllocatorType
heap_profiling.mojom.AllocatorType = {
  kMalloc: 0,
  kPartitionAlloc: 1,
};

// Struct: ProfilingParams
mojo.internal.Struct(
    heap_profiling.mojom.ProfilingParamsSpec, 'heap_profiling.mojom.ProfilingParams', [
      mojo.internal.StructField('stack_mode', 0, 0, heap_profiling.mojom.StackModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sampling_rate', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HeapProfileSample
mojo.internal.Struct(
    heap_profiling.mojom.HeapProfileSampleSpec, 'heap_profiling.mojom.HeapProfileSample', [
      mojo.internal.StructField('allocator', 0, 0, heap_profiling.mojom.AllocatorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('total', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('context_id', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('stack', 32, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: HeapProfile
mojo.internal.Struct(
    heap_profiling.mojom.HeapProfileSpec, 'heap_profiling.mojom.HeapProfile', [
      mojo.internal.StructField('samples', 0, 0, mojo.internal.Array(heap_profiling.mojom.HeapProfileSampleSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('strings', 8, 0, mojo.internal.Map(mojo.internal.Uint64, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ProfilingClient
mojo.internal.Struct(
    heap_profiling.mojom.ProfilingClient_StartProfiling_ParamsSpec, 'heap_profiling.mojom.ProfilingClient_StartProfiling_Params', [
      mojo.internal.StructField('params', 0, 0, heap_profiling.mojom.ProfilingParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    heap_profiling.mojom.ProfilingClient_StartProfiling_ResponseParamsSpec, 'heap_profiling.mojom.ProfilingClient_StartProfiling_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ParamsSpec, 'heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ResponseParamsSpec, 'heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ResponseParams', [
      mojo.internal.StructField('profile', 0, 0, heap_profiling.mojom.HeapProfileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

heap_profiling.mojom.ProfilingClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

heap_profiling.mojom.ProfilingClientRemote = class {
  static get $interfaceName() {
    return 'heap_profiling.mojom.ProfilingClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      heap_profiling.mojom.ProfilingClientPendingReceiver,
      handle);
    this.$ = new heap_profiling.mojom.ProfilingClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startProfiling(params) {
    return this.$.startProfiling(params);
  }
  retrieveHeapProfile() {
    return this.$.retrieveHeapProfile();
  }
};

heap_profiling.mojom.ProfilingClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProfilingClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  startProfiling(params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      heap_profiling.mojom.ProfilingClient_StartProfiling_ParamsSpec,
      heap_profiling.mojom.ProfilingClient_StartProfiling_ResponseParamsSpec,
      [params],
      false);
  }

  retrieveHeapProfile() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ParamsSpec,
      heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ResponseParamsSpec,
      [],
      false);
  }

};

heap_profiling.mojom.ProfilingClient.getRemote = function() {
  let remote = new heap_profiling.mojom.ProfilingClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'heap_profiling.mojom.ProfilingClient',
    'context');
  return remote.$;
};

heap_profiling.mojom.ProfilingClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProfilingClient', [
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
             decoder.decodeStructInline(heap_profiling.mojom.ProfilingClient_StartProfiling_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(heap_profiling.mojom.ProfilingClient_StartProfiling_ParamsSpec.$.structSpec);
          const result = this.impl.startProfiling(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, heap_profiling.mojom.ProfilingClient_StartProfiling_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ParamsSpec.$.structSpec);
          const result = this.impl.retrieveHeapProfile();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

heap_profiling.mojom.ProfilingClientReceiver = heap_profiling.mojom.ProfilingClientReceiver;

heap_profiling.mojom.ProfilingClientPtr = heap_profiling.mojom.ProfilingClientRemote;
heap_profiling.mojom.ProfilingClientRequest = heap_profiling.mojom.ProfilingClientPendingReceiver;

