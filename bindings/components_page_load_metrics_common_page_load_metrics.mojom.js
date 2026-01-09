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

// Struct: DocumentTiming
page_load_metrics.mojom.DocumentTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.DocumentTiming',
      packedSize: 16,
      fields: [
        { name: 'load_event_start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LcpResourceLoadTimings
page_load_metrics.mojom.LcpResourceLoadTimingsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.LcpResourceLoadTimings',
      packedSize: 16,
      fields: [
        { name: 'load_end', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LargestContentfulPaintTiming
page_load_metrics.mojom.LargestContentfulPaintTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.LargestContentfulPaintTiming',
      packedSize: 16,
      fields: [
        { name: 'image_request_priority_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaintTiming
page_load_metrics.mojom.PaintTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.PaintTiming',
      packedSize: 16,
      fields: [
        { name: 'first_input_or_scroll_notified_timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MonotonicPaintTiming
page_load_metrics.mojom.MonotonicPaintTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.MonotonicPaintTiming',
      packedSize: 16,
      fields: [
        { name: 'first_contentful_paint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ParseTiming
page_load_metrics.mojom.ParseTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.ParseTiming',
      packedSize: 16,
      fields: [
        { name: 'parse_blocked_on_script_execution_from_document_write_duration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InteractiveTiming
page_load_metrics.mojom.InteractiveTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.InteractiveTiming',
      packedSize: 16,
      fields: [
        { name: 'first_scroll_timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CustomUserTimingMark
page_load_metrics.mojom.CustomUserTimingMarkSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.CustomUserTimingMark',
      packedSize: 16,
      fields: [
        { name: 'start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DomainLookupTiming
page_load_metrics.mojom.DomainLookupTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.DomainLookupTiming',
      packedSize: 16,
      fields: [
        { name: 'domain_lookup_end', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PageLoadTiming
page_load_metrics.mojom.PageLoadTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.PageLoadTiming',
      packedSize: 16,
      fields: [
        { name: 'monotonic_paint_timing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FrameMetadata
page_load_metrics.mojom.FrameMetadataSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.FrameMetadata',
      packedSize: 16,
      fields: [
        { name: 'framework_detection_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SubresourceLoadMetrics
page_load_metrics.mojom.SubresourceLoadMetricsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.SubresourceLoadMetrics',
      packedSize: 16,
      fields: [
        { name: 'service_worker_subresource_load_metrics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ServiceWorkerSubresourceLoadMetrics
page_load_metrics.mojom.ServiceWorkerSubresourceLoadMetricsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.ServiceWorkerSubresourceLoadMetrics',
      packedSize: 16,
      fields: [
        { name: 'total_cache_lookup_time_for_subresources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ResourceDataUpdate
page_load_metrics.mojom.ResourceDataUpdateSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.ResourceDataUpdate',
      packedSize: 16,
      fields: [
        { name: 'proxy_used', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LayoutShift
page_load_metrics.mojom.LayoutShiftSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.LayoutShift',
      packedSize: 16,
      fields: [
        { name: 'layout_shift_score', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FrameRenderDataUpdate
page_load_metrics.mojom.FrameRenderDataUpdateSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.FrameRenderDataUpdate',
      packedSize: 16,
      fields: [
        { name: 'new_layout_shifts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CpuTiming
page_load_metrics.mojom.CpuTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.CpuTiming',
      packedSize: 16,
      fields: [
        { name: 'task_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InputTiming
page_load_metrics.mojom.InputTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.InputTiming',
      packedSize: 16,
      fields: [
        { name: 'user_interaction_latencies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UserInteractionLatency
page_load_metrics.mojom.UserInteractionLatencySpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.UserInteractionLatency',
      packedSize: 16,
      fields: [
        { name: 'interaction_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BackForwardCacheTiming
page_load_metrics.mojom.BackForwardCacheTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.BackForwardCacheTiming',
      packedSize: 16,
      fields: [
        { name: 'first_input_delay_after_back_forward_cache_restore', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SoftNavigationMetrics
page_load_metrics.mojom.SoftNavigationMetricsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.SoftNavigationMetrics',
      packedSize: 16,
      fields: [
        { name: 'largest_contentful_paint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageLoadMetrics
page_load_metrics.mojom.PageLoadMetrics = {};

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
      page_load_metrics.mojom.PageLoadMetrics_UpdateTiming_ParamsSpec,
      null,
      [page_load_timing, frame_metadata, new_features, resources, render_data, cpu_load_timing, input_timing_delta, subresource_load_metrics, soft_navigation_metrics]);
  }

  setUpSharedMemoryForDroppedFrames(dropped_frames_memory) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      page_load_metrics.mojom.PageLoadMetrics_SetUpSharedMemoryForDroppedFrames_ParamsSpec,
      null,
      [dropped_frames_memory]);
  }

  addCustomUserTiming(custom_user_timing) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      page_load_metrics.mojom.PageLoadMetrics_AddCustomUserTiming_ParamsSpec,
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
};

// ParamsSpec for UpdateTiming
page_load_metrics.mojom.PageLoadMetrics_UpdateTiming_ParamsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.PageLoadMetrics.UpdateTiming_Params',
      packedSize: 80,
      fields: [
        { name: 'page_load_timing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame_metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_features', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'resources', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'render_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cpu_load_timing', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'input_timing_delta', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'subresource_load_metrics', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'soft_navigation_metrics', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetUpSharedMemoryForDroppedFrames
page_load_metrics.mojom.PageLoadMetrics_SetUpSharedMemoryForDroppedFrames_ParamsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.PageLoadMetrics.SetUpSharedMemoryForDroppedFrames_Params',
      packedSize: 16,
      fields: [
        { name: 'dropped_frames_memory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddCustomUserTiming
page_load_metrics.mojom.PageLoadMetrics_AddCustomUserTiming_ParamsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.PageLoadMetrics.AddCustomUserTiming_Params',
      packedSize: 16,
      fields: [
        { name: 'custom_user_timing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
page_load_metrics.mojom.PageLoadMetricsPtr = page_load_metrics.mojom.PageLoadMetricsRemote;
page_load_metrics.mojom.PageLoadMetricsRequest = page_load_metrics.mojom.PageLoadMetricsPendingReceiver;

