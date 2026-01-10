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
      mojo.internal.StructField('min', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bucket_count', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('flags', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(metrics.mojom.SingleSampleMetricRemote), null, false, 0, undefined),
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

metrics.mojom.SingleSampleMetricPtr = metrics.mojom.SingleSampleMetricRemote;
metrics.mojom.SingleSampleMetricRequest = metrics.mojom.SingleSampleMetricPendingReceiver;

