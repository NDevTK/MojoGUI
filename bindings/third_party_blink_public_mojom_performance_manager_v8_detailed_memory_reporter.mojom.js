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
blink.mojom.ModeSpec = { $: mojo.internal.Enum() };

// Struct: PerContextV8MemoryUsage
blink.mojom.PerContextV8MemoryUsageSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PerContextV8MemoryUsage',
      packedSize: 40,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ExecutionContextTokenSpec, nullable: false, minVersion: 0 },
        { name: 'memory_used', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ByteSizeSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: PerContextCanvasMemoryUsage
blink.mojom.PerContextCanvasMemoryUsageSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PerContextCanvasMemoryUsage',
      packedSize: 32,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ExecutionContextTokenSpec, nullable: false, minVersion: 0 },
        { name: 'memory_used', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ByteSizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PerIsolateV8MemoryUsage
blink.mojom.PerIsolateV8MemoryUsageSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PerIsolateV8MemoryUsage',
      packedSize: 56,
      fields: [
        { name: 'num_detached_contexts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'detached_memory_used', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ByteSizeSpec, nullable: false, minVersion: 0 },
        { name: 'shared_memory_used', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ByteSizeSpec, nullable: false, minVersion: 0 },
        { name: 'blink_memory_used', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.ByteSizeSpec, nullable: false, minVersion: 0 },
        { name: 'contexts', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.PerContextV8MemoryUsageSpec, false), nullable: false, minVersion: 0 },
        { name: 'canvas_contexts', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.PerContextCanvasMemoryUsageSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: PerProcessV8MemoryUsage
blink.mojom.PerProcessV8MemoryUsageSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PerProcessV8MemoryUsage',
      packedSize: 16,
      fields: [
        { name: 'isolates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.PerIsolateV8MemoryUsageSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
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
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'memory_usage', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PerProcessV8MemoryUsageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.V8DetailedMemoryReporterPtr = blink.mojom.V8DetailedMemoryReporterRemote;
blink.mojom.V8DetailedMemoryReporterRequest = blink.mojom.V8DetailedMemoryReporterPendingReceiver;

