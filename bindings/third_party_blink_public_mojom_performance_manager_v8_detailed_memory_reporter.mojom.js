// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/performance_manager/v8_detailed_memory_reporter.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.ModeSpec = { $: mojo.internal.Enum() };
blink.mojom.PerContextV8MemoryUsageSpec = { $: {} };
blink.mojom.PerContextCanvasMemoryUsageSpec = { $: {} };
blink.mojom.PerIsolateV8MemoryUsageSpec = { $: {} };
blink.mojom.PerProcessV8MemoryUsageSpec = { $: {} };
blink.mojom.V8DetailedMemoryReporter = {};
blink.mojom.V8DetailedMemoryReporter.$interfaceName = 'blink.mojom.V8DetailedMemoryReporter';
blink.mojom.V8DetailedMemoryReporter_GetV8MemoryUsage_ParamsSpec = { $: {} };
blink.mojom.V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParamsSpec = { $: {} };

// Enum: Mode
blink.mojom.Mode = {
  DEFAULT: 0,
  EAGER: 1,
  LAZY: 2,
};

// Struct: PerContextV8MemoryUsage
mojo.internal.Struct(
    blink.mojom.PerContextV8MemoryUsageSpec, 'blink.mojom.PerContextV8MemoryUsage', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.ExecutionContextTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('memory_used', 8, 0, mojo_base.mojom.ByteSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PerContextCanvasMemoryUsage
mojo.internal.Struct(
    blink.mojom.PerContextCanvasMemoryUsageSpec, 'blink.mojom.PerContextCanvasMemoryUsage', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.ExecutionContextTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('memory_used', 8, 0, mojo_base.mojom.ByteSizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PerIsolateV8MemoryUsage
mojo.internal.Struct(
    blink.mojom.PerIsolateV8MemoryUsageSpec, 'blink.mojom.PerIsolateV8MemoryUsage', [
      mojo.internal.StructField('num_detached_contexts', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('detached_memory_used', 8, 0, mojo_base.mojom.ByteSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_memory_used', 16, 0, mojo_base.mojom.ByteSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blink_memory_used', 24, 0, mojo_base.mojom.ByteSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('contexts', 32, 0, mojo.internal.Array(blink.mojom.PerContextV8MemoryUsageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('canvas_contexts', 40, 0, mojo.internal.Array(blink.mojom.PerContextCanvasMemoryUsageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PerProcessV8MemoryUsage
mojo.internal.Struct(
    blink.mojom.PerProcessV8MemoryUsageSpec, 'blink.mojom.PerProcessV8MemoryUsage', [
      mojo.internal.StructField('isolates', 0, 0, mojo.internal.Array(blink.mojom.PerIsolateV8MemoryUsageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: V8DetailedMemoryReporter
mojo.internal.Struct(
    blink.mojom.V8DetailedMemoryReporter_GetV8MemoryUsage_ParamsSpec, 'blink.mojom.V8DetailedMemoryReporter_GetV8MemoryUsage_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.ModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParamsSpec, 'blink.mojom.V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams', [
      mojo.internal.StructField('memory_usage', 0, 0, blink.mojom.PerProcessV8MemoryUsageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [mode],
      false);
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

blink.mojom.V8DetailedMemoryReporterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.V8DetailedMemoryReporter_GetV8MemoryUsage_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getV8MemoryUsage');
          const result = this.impl.getV8MemoryUsage(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.V8DetailedMemoryReporterReceiver = blink.mojom.V8DetailedMemoryReporterReceiver;

blink.mojom.V8DetailedMemoryReporterPtr = blink.mojom.V8DetailedMemoryReporterRemote;
blink.mojom.V8DetailedMemoryReporterRequest = blink.mojom.V8DetailedMemoryReporterPendingReceiver;

