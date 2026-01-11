// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/single_sample_metrics.mojom
// Module: metrics.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(metrics.mojom.SingleSampleMetricRemote), null, false, 0, undefined),
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
  acquireSingleSampleMetric(histogram_name, min, max, bucket_count, flags, receiver) {
    return this.$.acquireSingleSampleMetric(histogram_name, min, max, bucket_count, flags, receiver);
  }
};

metrics.mojom.SingleSampleMetricsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SingleSampleMetricsProvider', [
      { explicit: null },
    ]);
  }

  acquireSingleSampleMetric(histogram_name, min, max, bucket_count, flags, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('SingleSampleMetricsProvider', [
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
             decoder.decodeStructInline(metrics.mojom.SingleSampleMetricsProvider_AcquireSingleSampleMetric_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(metrics.mojom.SingleSampleMetricsProvider_AcquireSingleSampleMetric_ParamsSpec.$.structSpec);
          const result = this.impl.acquireSingleSampleMetric(params.histogram_name, params.min, params.max, params.bucket_count, params.flags, params.receiver);
          break;
        }
      }
      } catch (err) {}
    });
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
  setSample(sample) {
    return this.$.setSample(sample);
  }
};

metrics.mojom.SingleSampleMetricRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SingleSampleMetric', [
      { explicit: null },
    ]);
  }

  setSample(sample) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('SingleSampleMetric', [
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
             decoder.decodeStructInline(metrics.mojom.SingleSampleMetric_SetSample_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(metrics.mojom.SingleSampleMetric_SetSample_ParamsSpec.$.structSpec);
          const result = this.impl.setSample(params.sample);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

metrics.mojom.SingleSampleMetricReceiver = metrics.mojom.SingleSampleMetricReceiver;

metrics.mojom.SingleSampleMetricPtr = metrics.mojom.SingleSampleMetricRemote;
metrics.mojom.SingleSampleMetricRequest = metrics.mojom.SingleSampleMetricPendingReceiver;

