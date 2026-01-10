// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/single_sample_metrics.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};


// Interface: SingleSampleMetricsProvider
metrics.mojom.mojom.SingleSampleMetricsProvider = {};

metrics.mojom.mojom.SingleSampleMetricsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.mojom.mojom.SingleSampleMetricsProviderRemote = class {
  static get $interfaceName() {
    return 'metrics.mojom.SingleSampleMetricsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.mojom.mojom.SingleSampleMetricsProviderPendingReceiver,
      handle);
    this.$ = new metrics.mojom.mojom.SingleSampleMetricsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.mojom.mojom.SingleSampleMetricsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  acquireSingleSampleMetric(histogram_name, min, max, bucket_count, flags, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.mojom.mojom.SingleSampleMetricsProvider_AcquireSingleSampleMetric_ParamsSpec,
      null,
      [histogram_name, min, max, bucket_count, flags, receiver]);
  }

};

metrics.mojom.mojom.SingleSampleMetricsProvider.getRemote = function() {
  let remote = new metrics.mojom.mojom.SingleSampleMetricsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.mojom.SingleSampleMetricsProvider',
    'context');
  return remote.$;
};

// ParamsSpec for AcquireSingleSampleMetric
metrics.mojom.mojom.SingleSampleMetricsProvider_AcquireSingleSampleMetric_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.SingleSampleMetricsProvider.AcquireSingleSampleMetric_Params',
      packedSize: 40,
      fields: [
        { name: 'histogram_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'min', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'max', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bucket_count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(metrics.mojom.SingleSampleMetricRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
metrics.mojom.mojom.SingleSampleMetricsProviderPtr = metrics.mojom.mojom.SingleSampleMetricsProviderRemote;
metrics.mojom.mojom.SingleSampleMetricsProviderRequest = metrics.mojom.mojom.SingleSampleMetricsProviderPendingReceiver;


// Interface: SingleSampleMetric
metrics.mojom.mojom.SingleSampleMetric = {};

metrics.mojom.mojom.SingleSampleMetricPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.mojom.mojom.SingleSampleMetricRemote = class {
  static get $interfaceName() {
    return 'metrics.mojom.SingleSampleMetric';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.mojom.mojom.SingleSampleMetricPendingReceiver,
      handle);
    this.$ = new metrics.mojom.mojom.SingleSampleMetricRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.mojom.mojom.SingleSampleMetricRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setSample(sample) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.mojom.mojom.SingleSampleMetric_SetSample_ParamsSpec,
      null,
      [sample]);
  }

};

metrics.mojom.mojom.SingleSampleMetric.getRemote = function() {
  let remote = new metrics.mojom.mojom.SingleSampleMetricRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.mojom.SingleSampleMetric',
    'context');
  return remote.$;
};

// ParamsSpec for SetSample
metrics.mojom.mojom.SingleSampleMetric_SetSample_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.SingleSampleMetric.SetSample_Params',
      packedSize: 16,
      fields: [
        { name: 'sample', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
metrics.mojom.mojom.SingleSampleMetricPtr = metrics.mojom.mojom.SingleSampleMetricRemote;
metrics.mojom.mojom.SingleSampleMetricRequest = metrics.mojom.mojom.SingleSampleMetricPendingReceiver;

