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
      mojo.internal.StructField('stack_mode', 0, 0, heap_profiling.mojom.StackModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('sampling_rate', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HeapProfileSample
mojo.internal.Struct(
    heap_profiling.mojom.HeapProfileSampleSpec, 'heap_profiling.mojom.HeapProfileSample', [
      mojo.internal.StructField('allocator', 32, 0, heap_profiling.mojom.AllocatorTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('total', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('context_id', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('stack', 24, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: HeapProfile
mojo.internal.Struct(
    heap_profiling.mojom.HeapProfileSpec, 'heap_profiling.mojom.HeapProfile', [
      mojo.internal.StructField('samples', 0, 0, mojo.internal.Array(heap_profiling.mojom.HeapProfileSampleSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('strings', 8, 0, mojo.internal.Map(mojo.internal.Uint64, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ProfilingClient
mojo.internal.Struct(
    heap_profiling.mojom.ProfilingClient_StartProfiling_ParamsSpec, 'heap_profiling.mojom.ProfilingClient_StartProfiling_Params', [
      mojo.internal.StructField('params', 0, 0, heap_profiling.mojom.ProfilingParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    heap_profiling.mojom.ProfilingClient_StartProfiling_ResponseParamsSpec, 'heap_profiling.mojom.ProfilingClient_StartProfiling_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ParamsSpec, 'heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ResponseParamsSpec, 'heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ResponseParams', [
      mojo.internal.StructField('profile', 0, 0, heap_profiling.mojom.HeapProfileSpec, null, false, 0, undefined),
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
      [params]);
  }

  retrieveHeapProfile() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ParamsSpec,
      heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ResponseParamsSpec,
      []);
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

heap_profiling.mojom.ProfilingClientPtr = heap_profiling.mojom.ProfilingClientRemote;
heap_profiling.mojom.ProfilingClientRequest = heap_profiling.mojom.ProfilingClientPendingReceiver;

