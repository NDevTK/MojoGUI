// Auto-generated MojoJS binding
// Source: chromium_src/components/heap_profiling/in_process/mojom/snapshot_controller.mojom
// Module: heap_profiling.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  takeSnapshot(process_probability_pct, process_index) {
    return this.$.takeSnapshot(process_probability_pct, process_index);
  }
  logMetricsWithoutSnapshot() {
    return this.$.logMetricsWithoutSnapshot();
  }
};

heap_profiling.mojom.SnapshotControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SnapshotController', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  takeSnapshot(process_probability_pct, process_index) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      heap_profiling.mojom.SnapshotController_TakeSnapshot_ParamsSpec,
      null,
      [process_probability_pct, process_index],
      false);
  }

  logMetricsWithoutSnapshot() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SnapshotController', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(heap_profiling.mojom.SnapshotController_TakeSnapshot_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(heap_profiling.mojom.SnapshotController_LogMetricsWithoutSnapshot_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(heap_profiling.mojom.SnapshotController_TakeSnapshot_ParamsSpec.$.structSpec);
          const result = this.impl.takeSnapshot(params.process_probability_pct, params.process_index);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(heap_profiling.mojom.SnapshotController_LogMetricsWithoutSnapshot_ParamsSpec.$.structSpec);
          const result = this.impl.logMetricsWithoutSnapshot();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

heap_profiling.mojom.SnapshotControllerReceiver = heap_profiling.mojom.SnapshotControllerReceiver;

heap_profiling.mojom.SnapshotControllerPtr = heap_profiling.mojom.SnapshotControllerRemote;
heap_profiling.mojom.SnapshotControllerRequest = heap_profiling.mojom.SnapshotControllerPendingReceiver;

