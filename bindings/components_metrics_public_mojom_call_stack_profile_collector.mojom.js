// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/call_stack_profile_collector.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};
var mojo_base = mojo_base || {};

metrics.mojom.ProfileTypeSpec = { $: mojo.internal.Enum() };
metrics.mojom.SampledProfileSpec = { $: {} };
metrics.mojom.CallStackProfileCollector = {};
metrics.mojom.CallStackProfileCollector.$interfaceName = 'metrics.mojom.CallStackProfileCollector';
metrics.mojom.CallStackProfileCollector_Collect_ParamsSpec = { $: {} };

// Enum: ProfileType
metrics.mojom.ProfileType = {
  kCPU: 0,
  kHeap: 1,
};

// Struct: SampledProfile
mojo.internal.Struct(
    metrics.mojom.SampledProfileSpec, 'metrics.mojom.SampledProfile', [
      mojo.internal.StructField('contents', 0, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CallStackProfileCollector
mojo.internal.Struct(
    metrics.mojom.CallStackProfileCollector_Collect_ParamsSpec, 'metrics.mojom.CallStackProfileCollector_Collect_Params', [
      mojo.internal.StructField('start_timestamp', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('profile_type', 8, 0, metrics.mojom.ProfileTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('profile', 16, 0, metrics.mojom.SampledProfileSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

metrics.mojom.CallStackProfileCollectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.mojom.CallStackProfileCollectorRemote = class {
  static get $interfaceName() {
    return 'metrics.mojom.CallStackProfileCollector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.mojom.CallStackProfileCollectorPendingReceiver,
      handle);
    this.$ = new metrics.mojom.CallStackProfileCollectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.mojom.CallStackProfileCollectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  collect(start_timestamp, profile_type, profile) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.mojom.CallStackProfileCollector_Collect_ParamsSpec,
      null,
      [start_timestamp, profile_type, profile],
      false);
  }

};

metrics.mojom.CallStackProfileCollector.getRemote = function() {
  let remote = new metrics.mojom.CallStackProfileCollectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.mojom.CallStackProfileCollector',
    'context');
  return remote.$;
};

metrics.mojom.CallStackProfileCollectorReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Collect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(metrics.mojom.CallStackProfileCollector_Collect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Collect (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(metrics.mojom.CallStackProfileCollector_Collect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.collect');
          const result = this.impl.collect(params.start_timestamp, params.profile_type, params.profile);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

metrics.mojom.CallStackProfileCollectorReceiver = metrics.mojom.CallStackProfileCollectorReceiver;

metrics.mojom.CallStackProfileCollectorPtr = metrics.mojom.CallStackProfileCollectorRemote;
metrics.mojom.CallStackProfileCollectorRequest = metrics.mojom.CallStackProfileCollectorPendingReceiver;

