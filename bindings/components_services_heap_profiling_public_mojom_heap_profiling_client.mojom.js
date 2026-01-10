// Auto-generated MojoJS binding
// Source: chromium_src/components/services/heap_profiling/public/mojom/heap_profiling_client.mojom
// Module: heap_profiling.mojom

'use strict';

// Module namespace
var heap_profiling = heap_profiling || {};
heap_profiling.mojom = heap_profiling.mojom || {};


// Enum: StackMode
heap_profiling.mojom.StackMode = {
  NATIVE_WITH_THREAD_NAMES: 0,
  NATIVE_WITHOUT_THREAD_NAMES: 1,
};
heap_profiling.mojom.StackModeSpec = { $: mojo.internal.Enum() };

// Enum: AllocatorType
heap_profiling.mojom.AllocatorType = {
  kMalloc: 0,
  kPartitionAlloc: 1,
};
heap_profiling.mojom.AllocatorTypeSpec = { $: mojo.internal.Enum() };

// Struct: ProfilingParams
heap_profiling.mojom.ProfilingParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.ProfilingParams',
      packedSize: 16,
      fields: [
        { name: 'stack_mode', packedOffset: 0, packedBitOffset: 0, type: heap_profiling.mojom.StackModeSpec, nullable: false, minVersion: 0 },
        { name: 'sampling_rate', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: HeapProfileSample
heap_profiling.mojom.HeapProfileSampleSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.HeapProfileSample',
      packedSize: 48,
      fields: [
        { name: 'allocator', packedOffset: 32, packedBitOffset: 0, type: heap_profiling.mojom.AllocatorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'total', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'context_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'stack', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: HeapProfile
heap_profiling.mojom.HeapProfileSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.HeapProfile',
      packedSize: 24,
      fields: [
        { name: 'samples', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(heap_profiling.mojom.HeapProfileSampleSpec, false), nullable: false, minVersion: 0 },
        { name: 'strings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint64, mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ProfilingClient
heap_profiling.mojom.ProfilingClient = {};

heap_profiling.mojom.ProfilingClient_StartProfiling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.ProfilingClient_StartProfiling_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: heap_profiling.mojom.ProfilingParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      null,
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

// ParamsSpec for StartProfiling
heap_profiling.mojom.ProfilingClient_StartProfiling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.ProfilingClient.StartProfiling_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: heap_profiling.mojom.ProfilingParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RetrieveHeapProfile
heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.ProfilingClient.RetrieveHeapProfile_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

heap_profiling.mojom.ProfilingClient_RetrieveHeapProfile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.ProfilingClient.RetrieveHeapProfile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'profile', packedOffset: 0, packedBitOffset: 0, type: heap_profiling.mojom.HeapProfileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
heap_profiling.mojom.ProfilingClientPtr = heap_profiling.mojom.ProfilingClientRemote;
heap_profiling.mojom.ProfilingClientRequest = heap_profiling.mojom.ProfilingClientPendingReceiver;

