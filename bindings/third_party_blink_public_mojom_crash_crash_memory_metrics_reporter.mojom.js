// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/crash/crash_memory_metrics_reporter.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.CrashMemoryMetricsReporter = {};
blink.mojom.CrashMemoryMetricsReporter.$interfaceName = 'blink.mojom.CrashMemoryMetricsReporter';
blink.mojom.CrashMemoryMetricsReporter_SetSharedMemory_ParamsSpec = { $: {} };

// Interface: CrashMemoryMetricsReporter
mojo.internal.Struct(
    blink.mojom.CrashMemoryMetricsReporter_SetSharedMemory_ParamsSpec, 'blink.mojom.CrashMemoryMetricsReporter_SetSharedMemory_Params', [
      mojo.internal.StructField('shared_metrics_buffer', 0, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.CrashMemoryMetricsReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.CrashMemoryMetricsReporterRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CrashMemoryMetricsReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.CrashMemoryMetricsReporterPendingReceiver,
      handle);
    this.$ = new blink.mojom.CrashMemoryMetricsReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setSharedMemory(shared_metrics_buffer) {
    return this.$.setSharedMemory(shared_metrics_buffer);
  }
};

blink.mojom.CrashMemoryMetricsReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrashMemoryMetricsReporter', [
      { explicit: null },
    ]);
  }

  setSharedMemory(shared_metrics_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.CrashMemoryMetricsReporter_SetSharedMemory_ParamsSpec,
      null,
      [shared_metrics_buffer],
      false);
  }

};

blink.mojom.CrashMemoryMetricsReporter.getRemote = function() {
  let remote = new blink.mojom.CrashMemoryMetricsReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CrashMemoryMetricsReporter',
    'context');
  return remote.$;
};

blink.mojom.CrashMemoryMetricsReporterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrashMemoryMetricsReporter', [
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
             decoder.decodeStructInline(blink.mojom.CrashMemoryMetricsReporter_SetSharedMemory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CrashMemoryMetricsReporter_SetSharedMemory_ParamsSpec.$.structSpec);
          const result = this.impl.setSharedMemory(params.shared_metrics_buffer);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.CrashMemoryMetricsReporterReceiver = blink.mojom.CrashMemoryMetricsReporterReceiver;

blink.mojom.CrashMemoryMetricsReporterPtr = blink.mojom.CrashMemoryMetricsReporterRemote;
blink.mojom.CrashMemoryMetricsReporterRequest = blink.mojom.CrashMemoryMetricsReporterPendingReceiver;

