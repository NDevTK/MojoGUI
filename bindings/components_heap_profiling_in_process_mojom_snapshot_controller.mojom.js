// Auto-generated MojoJS binding
// Source: chromium_src/components/heap_profiling/in_process/mojom/snapshot_controller.mojom
// Module: heap_profiling.mojom

'use strict';

// Module namespace
var heap_profiling = heap_profiling || {};
heap_profiling.mojom = heap_profiling.mojom || {};


// Interface: SnapshotController
heap_profiling.mojom.SnapshotController = {};

heap_profiling.mojom.SnapshotController_TakeSnapshot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.SnapshotController_TakeSnapshot_Params',
      packedSize: 16,
      fields: [
        { name: 'process_probability_pct', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'process_index', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

heap_profiling.mojom.SnapshotController_LogMetricsWithoutSnapshot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.SnapshotController_LogMetricsWithoutSnapshot_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

heap_profiling.mojom.SnapshotControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

heap_profiling.mojom.SnapshotControllerRemote = class {
  static get $interfaceName() {
    return 'heap_profiling.mojom.SnapshotController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      heap_profiling.mojom.SnapshotControllerPendingReceiver,
      handle);
    this.$ = new heap_profiling.mojom.SnapshotControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

heap_profiling.mojom.SnapshotControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  takeSnapshot(process_probability_pct, process_index) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      heap_profiling.mojom.SnapshotController_TakeSnapshot_ParamsSpec,
      null,
      [process_probability_pct, process_index]);
  }

  logMetricsWithoutSnapshot() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      heap_profiling.mojom.SnapshotController_LogMetricsWithoutSnapshot_ParamsSpec,
      null,
      []);
  }

};

heap_profiling.mojom.SnapshotController.getRemote = function() {
  let remote = new heap_profiling.mojom.SnapshotControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'heap_profiling.mojom.SnapshotController',
    'context');
  return remote.$;
};

// ParamsSpec for TakeSnapshot
heap_profiling.mojom.SnapshotController_TakeSnapshot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.SnapshotController.TakeSnapshot_Params',
      packedSize: 16,
      fields: [
        { name: 'process_probability_pct', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'process_index', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LogMetricsWithoutSnapshot
heap_profiling.mojom.SnapshotController_LogMetricsWithoutSnapshot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.SnapshotController.LogMetricsWithoutSnapshot_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
heap_profiling.mojom.SnapshotControllerPtr = heap_profiling.mojom.SnapshotControllerRemote;
heap_profiling.mojom.SnapshotControllerRequest = heap_profiling.mojom.SnapshotControllerPendingReceiver;

