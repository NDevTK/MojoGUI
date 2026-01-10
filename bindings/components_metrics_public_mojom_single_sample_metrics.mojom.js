// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/single_sample_metrics.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};

metrics.mojom.SingleSampleMetricsProvider = {};
metrics.mojom.SingleSampleMetricsProvider.$interfaceName = 'metrics.mojom.SingleSampleMetricsProvider';
metrics.mojom.SingleSampleMetricsProvider_AcquireSingleSampleMetric_ParamsSpec = { $: {} };
metrics.mojom.SingleSampleMetric = {};
metrics.mojom.SingleSampleMetric.$interfaceName = 'metrics.mojom.SingleSampleMetric';
metrics.mojom.SingleSampleMetric_SetSample_ParamsSpec = { $: {} };

// Interface: SingleSampleMetricsProvider
mojo.internal.Struct(
    metrics.mojom.SingleSampleMetricsProvider_AcquireSingleSampleMetric_ParamsSpec, 'metrics.mojom.SingleSampleMetricsProvider_AcquireSingleSampleMetric_Params', [
      mojo.internal.StructField('histogram_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(metrics.mojom.SingleSampleMetricSpec), null, false, 0, undefined),
      mojo.internal.StructField('min', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bucket_count', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('flags', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

metrics.mojom.SingleSampleMetricsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.mojom.SingleSampleMetricsProviderRemote = class {
  static get $interfaceName() {
    return 'metrics.mojom.SingleSampleMetricsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.mojom.SingleSampleMetricsProviderPendingReceiver,
      handle);
    this.$ = new metrics.mojom.SingleSampleMetricsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.mojom.SingleSampleMetricsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  acquireSingleSampleMetric(histogram_name, min, max, bucket_count, flags, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.mojom.SingleSampleMetricsProvider_AcquireSingleSampleMetric_ParamsSpec,
      null,
      [histogram_name, min, max, bucket_count, flags, receiver],
      false);
  }

};

metrics.mojom.SingleSampleMetricsProvider.getRemote = function() {
  let remote = new metrics.mojom.SingleSampleMetricsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.mojom.SingleSampleMetricsProvider',
    'context');
  return remote.$;
};

metrics.mojom.SingleSampleMetricsProviderReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AcquireSingleSampleMetric
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(metrics.mojom.SingleSampleMetricsProvider_AcquireSingleSampleMetric_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcquireSingleSampleMetric (0)');
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
          const params = decoder.decodeStructInline(metrics.mojom.SingleSampleMetricsProvider_AcquireSingleSampleMetric_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.acquireSingleSampleMetric');
          const result = this.impl.acquireSingleSampleMetric(params.histogram_name, params.min, params.max, params.bucket_count, params.flags, params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

metrics.mojom.SingleSampleMetricsProviderReceiver = metrics.mojom.SingleSampleMetricsProviderReceiver;

metrics.mojom.SingleSampleMetricsProviderPtr = metrics.mojom.SingleSampleMetricsProviderRemote;
metrics.mojom.SingleSampleMetricsProviderRequest = metrics.mojom.SingleSampleMetricsProviderPendingReceiver;


// Interface: SingleSampleMetric
mojo.internal.Struct(
    metrics.mojom.SingleSampleMetric_SetSample_ParamsSpec, 'metrics.mojom.SingleSampleMetric_SetSample_Params', [
      mojo.internal.StructField('sample', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

metrics.mojom.SingleSampleMetricPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.mojom.SingleSampleMetricRemote = class {
  static get $interfaceName() {
    return 'metrics.mojom.SingleSampleMetric';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.mojom.SingleSampleMetricPendingReceiver,
      handle);
    this.$ = new metrics.mojom.SingleSampleMetricRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.mojom.SingleSampleMetricRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setSample(sample) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.mojom.SingleSampleMetric_SetSample_ParamsSpec,
      null,
      [sample],
      false);
  }

};

metrics.mojom.SingleSampleMetric.getRemote = function() {
  let remote = new metrics.mojom.SingleSampleMetricRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.mojom.SingleSampleMetric',
    'context');
  return remote.$;
};

metrics.mojom.SingleSampleMetricReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetSample
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(metrics.mojom.SingleSampleMetric_SetSample_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSample (0)');
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
          const params = decoder.decodeStructInline(metrics.mojom.SingleSampleMetric_SetSample_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setSample');
          const result = this.impl.setSample(params.sample);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

metrics.mojom.SingleSampleMetricReceiver = metrics.mojom.SingleSampleMetricReceiver;

metrics.mojom.SingleSampleMetricPtr = metrics.mojom.SingleSampleMetricRemote;
metrics.mojom.SingleSampleMetricRequest = metrics.mojom.SingleSampleMetricPendingReceiver;

