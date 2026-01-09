// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/crash/crash_memory_metrics_reporter.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: CrashMemoryMetricsReporter
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
      blink.mojom.CrashMemoryMetricsReporter_SetSharedMemory_ParamsSpec.$,
      null,
      [shared_metrics_buffer]);
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

// ParamsSpec for SetSharedMemory
blink.mojom.CrashMemoryMetricsReporter_SetSharedMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CrashMemoryMetricsReporter.SetSharedMemory_Params',
      packedSize: 16,
      fields: [
        { name: 'shared_metrics_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.CrashMemoryMetricsReporterPtr = blink.mojom.CrashMemoryMetricsReporterRemote;
blink.mojom.CrashMemoryMetricsReporterRequest = blink.mojom.CrashMemoryMetricsReporterPendingReceiver;

