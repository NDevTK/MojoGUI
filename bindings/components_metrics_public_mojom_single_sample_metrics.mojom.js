// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/single_sample_metrics.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};


// Interface: SingleSampleMetricsProvider
metrics.mojom.SingleSampleMetricsProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'metrics.mojom.SingleSampleMetricsProvider';
  }

  setSample() {
    // Method: SetSample
    // Call: SetSample()
  }

  acquireSingleSampleMetric(histogram_name, min, max, bucket_count, flags, receiver) {
    // Method: AcquireSingleSampleMetric
    // Call: AcquireSingleSampleMetric(histogram_name, min, max, bucket_count, flags, receiver)
  }

};

metrics.mojom.SingleSampleMetricsProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SingleSampleMetric
metrics.mojom.SingleSampleMetricPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'metrics.mojom.SingleSampleMetric';
  }

  setSample(sample) {
    // Method: SetSample
    // Call: SetSample(sample)
  }

};

metrics.mojom.SingleSampleMetricRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
