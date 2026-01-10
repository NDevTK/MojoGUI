// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/crash/crash_memory_metrics_reporter.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: CrashMemoryMetricsReporter
blink.mojom.mojom.CrashMemoryMetricsReporter = {};

blink.mojom.mojom.CrashMemoryMetricsReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.CrashMemoryMetricsReporterRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CrashMemoryMetricsReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.CrashMemoryMetricsReporterPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.CrashMemoryMetricsReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.CrashMemoryMetricsReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setSharedMemory(shared_metrics_buffer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.CrashMemoryMetricsReporter_SetSharedMemory_ParamsSpec,
      null,
      [shared_metrics_buffer]);
  }

};

blink.mojom.mojom.CrashMemoryMetricsReporter.getRemote = function() {
  let remote = new blink.mojom.mojom.CrashMemoryMetricsReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CrashMemoryMetricsReporter',
    'context');
  return remote.$;
};

// ParamsSpec for SetSharedMemory
blink.mojom.mojom.CrashMemoryMetricsReporter_SetSharedMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CrashMemoryMetricsReporter.SetSharedMemory_Params',
      packedSize: 16,
      fields: [
        { name: 'shared_metrics_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.CrashMemoryMetricsReporterPtr = blink.mojom.mojom.CrashMemoryMetricsReporterRemote;
blink.mojom.mojom.CrashMemoryMetricsReporterRequest = blink.mojom.mojom.CrashMemoryMetricsReporterPendingReceiver;

