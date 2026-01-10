// Auto-generated MojoJS binding
// Source: chromium_src/components/services/heap_profiling/public/mojom/heap_profiling_client.mojom
// Module: heap_profiling.mojom

'use strict';

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
};

heap_profiling.mojom.ProfilingClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startProfiling(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      heap_profiling.mojom.ProfilingClient_StartProfiling_ParamsSpec,
      heap_profiling.mojom.ProfilingClient_StartProfiling_ResponseParamsSpec,
      [params],
      false);
  }

  retrieveHeapProfile() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: StartProfiling
        try {
             decoder.decodeStruct(heap_profiling.mojom.ProfilingClient_StartProfiling_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartProfiling (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: RetrieveHeapProfile
        try {
             decoder.decodeStruct(heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RetrieveHeapProfile (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(heap_profiling.mojom.ProfilingClient_StartProfiling_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startProfiling');
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
          const params = decoder.decodeStruct(heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.retrieveHeapProfile');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

heap_profiling.mojom.ProfilingClientReceiver = heap_profiling.mojom.ProfilingClientReceiver;

heap_profiling.mojom.ProfilingClientPtr = heap_profiling.mojom.ProfilingClientRemote;
heap_profiling.mojom.ProfilingClientRequest = heap_profiling.mojom.ProfilingClientPendingReceiver;

