// Auto-generated MojoJS binding
// Source: chromium_src/components/heap_profiling/in_process/mojom/snapshot_controller.mojom
// Module: heap_profiling.mojom

'use strict';

// Module namespace
var heap_profiling = heap_profiling || {};
heap_profiling.mojom = heap_profiling.mojom || {};

heap_profiling.mojom.SnapshotController = {};
heap_profiling.mojom.SnapshotController.$interfaceName = 'heap_profiling.mojom.SnapshotController';
heap_profiling.mojom.SnapshotController_TakeSnapshot_ParamsSpec = { $: {} };
heap_profiling.mojom.SnapshotController_LogMetricsWithoutSnapshot_ParamsSpec = { $: {} };

// Interface: SnapshotController
mojo.internal.Struct(
    heap_profiling.mojom.SnapshotController_TakeSnapshot_ParamsSpec, 'heap_profiling.mojom.SnapshotController_TakeSnapshot_Params', [
      mojo.internal.StructField('process_probability_pct', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('process_index', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    heap_profiling.mojom.SnapshotController_LogMetricsWithoutSnapshot_ParamsSpec, 'heap_profiling.mojom.SnapshotController_LogMetricsWithoutSnapshot_Params', [
    ],
    [[0, 8]]);

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
      [process_probability_pct, process_index],
      false);
  }

  logMetricsWithoutSnapshot() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      heap_profiling.mojom.SnapshotController_LogMetricsWithoutSnapshot_ParamsSpec,
      null,
      [],
      false);
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

heap_profiling.mojom.SnapshotControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = heap_profiling.mojom.SnapshotController_TakeSnapshot_ParamsSpec.$.decode(message.payload);
          const result = this.impl.takeSnapshot(params.process_probability_pct, params.process_index);
          break;
        }
        case 1: {
          const params = heap_profiling.mojom.SnapshotController_LogMetricsWithoutSnapshot_ParamsSpec.$.decode(message.payload);
          const result = this.impl.logMetricsWithoutSnapshot();
          break;
        }
      }
    });
  }
};

heap_profiling.mojom.SnapshotControllerReceiver = heap_profiling.mojom.SnapshotControllerReceiver;

heap_profiling.mojom.SnapshotControllerPtr = heap_profiling.mojom.SnapshotControllerRemote;
heap_profiling.mojom.SnapshotControllerRequest = heap_profiling.mojom.SnapshotControllerPendingReceiver;

