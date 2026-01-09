// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/single_sample_metrics.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};


// Interface: SingleSampleMetricsProvider
metrics.mojom.SingleSampleMetricsProvider = {};

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
      [histogram_name, min, max, bucket_count, flags, receiver]);
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

// ParamsSpec for AcquireSingleSampleMetric
metrics.mojom.SingleSampleMetricsProvider_AcquireSingleSampleMetric_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.SingleSampleMetricsProvider.AcquireSingleSampleMetric_Params',
      packedSize: 40,
      fields: [
        { name: 'histogram_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'min', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'max', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'bucket_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'flags', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'receiver', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
metrics.mojom.SingleSampleMetricsProviderPtr = metrics.mojom.SingleSampleMetricsProviderRemote;
metrics.mojom.SingleSampleMetricsProviderRequest = metrics.mojom.SingleSampleMetricsProviderPendingReceiver;


// Interface: SingleSampleMetric
metrics.mojom.SingleSampleMetric = {};

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
      [sample]);
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

// ParamsSpec for SetSample
metrics.mojom.SingleSampleMetric_SetSample_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.SingleSampleMetric.SetSample_Params',
      packedSize: 16,
      fields: [
        { name: 'sample', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
metrics.mojom.SingleSampleMetricPtr = metrics.mojom.SingleSampleMetricRemote;
metrics.mojom.SingleSampleMetricRequest = metrics.mojom.SingleSampleMetricPendingReceiver;

