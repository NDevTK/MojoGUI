// Auto-generated MojoJS binding
// Source: chromium_src/components/page_load_metrics/common/page_load_metrics.mojom
// Module: page_load_metrics.mojom

'use strict';

// Module namespace
var page_load_metrics = page_load_metrics || {};
page_load_metrics.mojom = page_load_metrics.mojom || {};


// Enum: CacheType
page_load_metrics.mojom.CacheType = {
  kNotCached: 0,
  kHttp: 1,
  kMemory: 2,
};

// Interface: PageLoadMetrics
page_load_metrics.mojom.PageLoadMetricsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

page_load_metrics.mojom.PageLoadMetricsRemote = class {
  static get $interfaceName() {
    return 'page_load_metrics.mojom.PageLoadMetrics';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      page_load_metrics.mojom.PageLoadMetricsPendingReceiver,
      handle);
    this.$ = new page_load_metrics.mojom.PageLoadMetricsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

page_load_metrics.mojom.PageLoadMetricsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateTiming(page_load_timing, frame_metadata, new_features, resources, render_data, cpu_load_timing, input_timing_delta, subresource_load_metrics, soft_navigation_metrics) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      page_load_metrics.mojom.PageLoadMetrics_UpdateTiming_ParamsSpec.$,
      null,
      [page_load_timing, frame_metadata, new_features, resources, render_data, cpu_load_timing, input_timing_delta, subresource_load_metrics, soft_navigation_metrics]);
  }

  setUpSharedMemoryForDroppedFrames(dropped_frames_memory) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      page_load_metrics.mojom.PageLoadMetrics_SetUpSharedMemoryForDroppedFrames_ParamsSpec.$,
      null,
      [dropped_frames_memory]);
  }

  addCustomUserTiming(custom_user_timing) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      page_load_metrics.mojom.PageLoadMetrics_AddCustomUserTiming_ParamsSpec.$,
      null,
      [custom_user_timing]);
  }

};

page_load_metrics.mojom.PageLoadMetrics.getRemote = function() {
  let remote = new page_load_metrics.mojom.PageLoadMetricsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'page_load_metrics.mojom.PageLoadMetrics',
    'context');
  return remote.$;
}};

// ParamsSpec for UpdateTiming
page_load_metrics.mojom.PageLoadMetrics_UpdateTiming_ParamsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.PageLoadMetrics.UpdateTiming_Params',
      packedSize: 80,
      fields: [
        { name: 'page_load_timing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'frame_metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_features', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'resources', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'render_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cpu_load_timing', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'input_timing_delta', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'subresource_load_metrics', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'soft_navigation_metrics', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetUpSharedMemoryForDroppedFrames
page_load_metrics.mojom.PageLoadMetrics_SetUpSharedMemoryForDroppedFrames_ParamsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.PageLoadMetrics.SetUpSharedMemoryForDroppedFrames_Params',
      packedSize: 16,
      fields: [
        { name: 'dropped_frames_memory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for AddCustomUserTiming
page_load_metrics.mojom.PageLoadMetrics_AddCustomUserTiming_ParamsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.PageLoadMetrics.AddCustomUserTiming_Params',
      packedSize: 16,
      fields: [
        { name: 'custom_user_timing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
page_load_metrics.mojom.PageLoadMetricsPtr = page_load_metrics.mojom.PageLoadMetricsRemote;
page_load_metrics.mojom.PageLoadMetricsRequest = page_load_metrics.mojom.PageLoadMetricsPendingReceiver;

