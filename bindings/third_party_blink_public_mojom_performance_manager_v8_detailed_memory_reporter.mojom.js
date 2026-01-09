// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/performance_manager/v8_detailed_memory_reporter.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: Mode
blink.mojom.Mode = {
  DEFAULT: 0,
  EAGER: 1,
  LAZY: 2,
};

// Interface: V8DetailedMemoryReporter
blink.mojom.V8DetailedMemoryReporter = {};

blink.mojom.V8DetailedMemoryReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.V8DetailedMemoryReporterRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.V8DetailedMemoryReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.V8DetailedMemoryReporterPendingReceiver,
      handle);
    this.$ = new blink.mojom.V8DetailedMemoryReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.V8DetailedMemoryReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getV8MemoryUsage(mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.V8DetailedMemoryReporter_GetV8MemoryUsage_ParamsSpec,
      blink.mojom.V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParamsSpec,
      [mode]);
  }

};

blink.mojom.V8DetailedMemoryReporter.getRemote = function() {
  let remote = new blink.mojom.V8DetailedMemoryReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.V8DetailedMemoryReporter',
    'context');
  return remote.$;
};

// ParamsSpec for GetV8MemoryUsage
blink.mojom.V8DetailedMemoryReporter_GetV8MemoryUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.V8DetailedMemoryReporter.GetV8MemoryUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.V8DetailedMemoryReporter.GetV8MemoryUsage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'memory_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.V8DetailedMemoryReporterPtr = blink.mojom.V8DetailedMemoryReporterRemote;
blink.mojom.V8DetailedMemoryReporterRequest = blink.mojom.V8DetailedMemoryReporterPendingReceiver;

