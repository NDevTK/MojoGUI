// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/crash/crash_memory_metrics_reporter.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

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
};

blink.mojom.CrashMemoryMetricsReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setSharedMemory(shared_metrics_buffer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.CrashMemoryMetricsReporter_SetSharedMemory_ParamsSpec,
      null,
      [shared_metrics_buffer],
      false);
  }

};

blink.mojom.CrashMemoryMetricsReporter.getRemote = function() {
  let remote = new blink.mojom.CrashMemoryMetricsReporterRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.CrashMemoryMetricsReporter',
    'context');
  return remote.$;
};

blink.mojom.CrashMemoryMetricsReporterPtr = blink.mojom.CrashMemoryMetricsReporterRemote;
blink.mojom.CrashMemoryMetricsReporterRequest = blink.mojom.CrashMemoryMetricsReporterPendingReceiver;

