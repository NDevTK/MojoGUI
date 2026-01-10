// Auto-generated MojoJS binding
// Source: chromium_src/components/services/heap_profiling/public/mojom/heap_profiling_service.mojom
// Module: heap_profiling.mojom

'use strict';

// Module namespace
var heap_profiling = heap_profiling || {};
heap_profiling.mojom = heap_profiling.mojom || {};


// Enum: ProcessType
heap_profiling.mojom.ProcessType = {
  OTHER: 0,
  BROWSER: 1,
  RENDERER: 2,
  GPU: 3,
  LAST: 4,
};
heap_profiling.mojom.ProcessTypeSpec = { $: mojo.internal.Enum() };

// Interface: ProfilingService
heap_profiling.mojom.ProfilingService = {};

heap_profiling.mojom.ProfilingService_AddProfilingClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.ProfilingService_AddProfilingClient_Params',
      packedSize: 40,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(heap_profiling.mojom.ProfilingClientRemote), nullable: false, minVersion: 0 },
        { name: 'process_type', packedOffset: 24, packedBitOffset: 0, type: heap_profiling.mojom.ProcessTypeSpec, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: heap_profiling.mojom.ProfilingParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

heap_profiling.mojom.ProfilingService_GetProfiledPids_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.ProfilingService_GetProfiledPids_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

heap_profiling.mojom.ProfilingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

heap_profiling.mojom.ProfilingServiceRemote = class {
  static get $interfaceName() {
    return 'heap_profiling.mojom.ProfilingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      heap_profiling.mojom.ProfilingServicePendingReceiver,
      handle);
    this.$ = new heap_profiling.mojom.ProfilingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

heap_profiling.mojom.ProfilingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addProfilingClient(pid, client, process_type, params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      heap_profiling.mojom.ProfilingService_AddProfilingClient_ParamsSpec,
      heap_profiling.mojom.ProfilingService_AddProfilingClient_ResponseParamsSpec,
      [pid, client, process_type, params]);
  }

  getProfiledPids() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      heap_profiling.mojom.ProfilingService_GetProfiledPids_ParamsSpec,
      heap_profiling.mojom.ProfilingService_GetProfiledPids_ResponseParamsSpec,
      []);
  }

};

heap_profiling.mojom.ProfilingService.getRemote = function() {
  let remote = new heap_profiling.mojom.ProfilingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'heap_profiling.mojom.ProfilingService',
    'context');
  return remote.$;
};

// ParamsSpec for AddProfilingClient
heap_profiling.mojom.ProfilingService_AddProfilingClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.ProfilingService.AddProfilingClient_Params',
      packedSize: 40,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(heap_profiling.mojom.ProfilingClientRemote), nullable: false, minVersion: 0 },
        { name: 'process_type', packedOffset: 24, packedBitOffset: 0, type: heap_profiling.mojom.ProcessTypeSpec, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: heap_profiling.mojom.ProfilingParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

heap_profiling.mojom.ProfilingService_AddProfilingClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.ProfilingService.AddProfilingClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetProfiledPids
heap_profiling.mojom.ProfilingService_GetProfiledPids_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.ProfilingService.GetProfiledPids_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

heap_profiling.mojom.ProfilingService_GetProfiledPids_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.ProfilingService.GetProfiledPids_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.ProcessIdSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
heap_profiling.mojom.ProfilingServicePtr = heap_profiling.mojom.ProfilingServiceRemote;
heap_profiling.mojom.ProfilingServiceRequest = heap_profiling.mojom.ProfilingServicePendingReceiver;

