// Auto-generated MojoJS binding
// Source: chromium_src/components/page_load_metrics/common/page_load_metrics.mojom
// Module: page_load_metrics.mojom

'use strict';

// Module namespace
var page_load_metrics = page_load_metrics || {};
page_load_metrics.mojom = page_load_metrics.mojom || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: CacheType
page_load_metrics.mojom.CacheType = {
  kNotCached: 0,
  kHttp: 1,
  kMemory: 2,
};
page_load_metrics.mojom.CacheTypeSpec = { $: mojo.internal.Enum() };

// Struct: DocumentTiming
page_load_metrics.mojom.DocumentTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.DocumentTiming',
      packedSize: 24,
      fields: [
        { name: 'dom_content_loaded_event_start', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'load_event_start', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: LcpResourceLoadTimings
page_load_metrics.mojom.LcpResourceLoadTimingsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.LcpResourceLoadTimings',
      packedSize: 32,
      fields: [
        { name: 'discovery_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'load_start', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'load_end', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: LargestContentfulPaintTiming
page_load_metrics.mojom.LargestContentfulPaintTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.LargestContentfulPaintTiming',
      packedSize: 72,
      fields: [
        { name: 'largest_image_paint', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'largest_image_paint_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'largest_text_paint', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'largest_text_paint_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'resource_load_timings', packedOffset: 32, packedBitOffset: 0, type: page_load_metrics.mojom.LcpResourceLoadTimingsSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'image_bpp', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'image_request_priority_valid', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'image_request_priority_value', packedOffset: 56, packedBitOffset: 0, type: network.mojom.RequestPrioritySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: PaintTiming
page_load_metrics.mojom.PaintTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.PaintTiming',
      packedSize: 72,
      fields: [
        { name: 'first_paint', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'first_image_paint', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'first_contentful_paint', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'first_meaningful_paint', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'largest_contentful_paint', packedOffset: 32, packedBitOffset: 0, type: page_load_metrics.mojom.LargestContentfulPaintTimingSpec, nullable: false, minVersion: 0 },
        { name: 'experimental_largest_contentful_paint', packedOffset: 40, packedBitOffset: 0, type: page_load_metrics.mojom.LargestContentfulPaintTimingSpec, nullable: false, minVersion: 0 },
        { name: 'first_eligible_to_paint', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'first_input_or_scroll_notified_timestamp', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: MonotonicPaintTiming
page_load_metrics.mojom.MonotonicPaintTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.MonotonicPaintTiming',
      packedSize: 24,
      fields: [
        { name: 'first_paint', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true, minVersion: 0 },
        { name: 'first_contentful_paint', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ParseTiming
page_load_metrics.mojom.ParseTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.ParseTiming',
      packedSize: 56,
      fields: [
        { name: 'parse_start', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'parse_stop', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'parse_blocked_on_script_load_duration', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'parse_blocked_on_script_load_from_document_write_duration', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'parse_blocked_on_script_execution_duration', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'parse_blocked_on_script_execution_from_document_write_duration', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: InteractiveTiming
page_load_metrics.mojom.InteractiveTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.InteractiveTiming',
      packedSize: 40,
      fields: [
        { name: 'first_input_delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'first_input_timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'first_scroll_delay', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'first_scroll_timestamp', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: CustomUserTimingMark
page_load_metrics.mojom.CustomUserTimingMarkSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.CustomUserTimingMark',
      packedSize: 24,
      fields: [
        { name: 'mark_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DomainLookupTiming
page_load_metrics.mojom.DomainLookupTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.DomainLookupTiming',
      packedSize: 24,
      fields: [
        { name: 'domain_lookup_start', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'domain_lookup_end', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PageLoadTiming
page_load_metrics.mojom.PageLoadTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.PageLoadTiming',
      packedSize: 136,
      fields: [
        { name: 'navigation_start', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'connect_start', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'connect_end', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'response_start', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'document_timing', packedOffset: 32, packedBitOffset: 0, type: page_load_metrics.mojom.DocumentTimingSpec, nullable: false, minVersion: 0 },
        { name: 'interactive_timing', packedOffset: 40, packedBitOffset: 0, type: page_load_metrics.mojom.InteractiveTimingSpec, nullable: false, minVersion: 0 },
        { name: 'paint_timing', packedOffset: 48, packedBitOffset: 0, type: page_load_metrics.mojom.PaintTimingSpec, nullable: false, minVersion: 0 },
        { name: 'parse_timing', packedOffset: 56, packedBitOffset: 0, type: page_load_metrics.mojom.ParseTimingSpec, nullable: false, minVersion: 0 },
        { name: 'domain_lookup_timing', packedOffset: 64, packedBitOffset: 0, type: page_load_metrics.mojom.DomainLookupTimingSpec, nullable: false, minVersion: 0 },
        { name: 'back_forward_cache_timings', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(page_load_metrics.mojom.BackForwardCacheTimingSpec, false), nullable: false, minVersion: 0 },
        { name: 'activation_start', packedOffset: 80, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'input_to_navigation_start', packedOffset: 88, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'user_timing_mark_fully_loaded', packedOffset: 96, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'user_timing_mark_fully_visible', packedOffset: 104, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'user_timing_mark_interactive', packedOffset: 112, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'monotonic_paint_timing', packedOffset: 120, packedBitOffset: 0, type: page_load_metrics.mojom.MonotonicPaintTimingSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 136}]
    }
  }
};

// Struct: FrameMetadata
page_load_metrics.mojom.FrameMetadataSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.FrameMetadata',
      packedSize: 48,
      fields: [
        { name: 'behavior_flags', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'main_frame_intersection_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
        { name: 'main_frame_viewport_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
        { name: 'main_frame_ad_rects', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, gfx.mojom.RectSpec, false), nullable: false, minVersion: 0 },
        { name: 'framework_detection_result', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.JavaScriptFrameworkDetectionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: SubresourceLoadMetrics
page_load_metrics.mojom.SubresourceLoadMetricsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.SubresourceLoadMetrics',
      packedSize: 24,
      fields: [
        { name: 'number_of_subresources_loaded', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'number_of_subresource_loads_handled_by_service_worker', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'service_worker_subresource_load_metrics', packedOffset: 0, packedBitOffset: 0, type: page_load_metrics.mojom.ServiceWorkerSubresourceLoadMetricsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ServiceWorkerSubresourceLoadMetrics
page_load_metrics.mojom.ServiceWorkerSubresourceLoadMetricsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.ServiceWorkerSubresourceLoadMetrics',
      packedSize: 48,
      fields: [
        { name: 'image_handled', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'image_fallback', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'css_handled', packedOffset: 36, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'css_fallback', packedOffset: 36, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'script_handled', packedOffset: 36, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'script_fallback', packedOffset: 36, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'font_handled', packedOffset: 36, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'font_fallback', packedOffset: 36, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'raw_handled', packedOffset: 37, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'raw_fallback', packedOffset: 37, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'svg_handled', packedOffset: 37, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'svg_fallback', packedOffset: 37, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'xsl_handled', packedOffset: 37, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'xsl_fallback', packedOffset: 37, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'link_prefetch_handled', packedOffset: 37, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'link_prefetch_fallback', packedOffset: 37, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'text_track_handled', packedOffset: 38, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'text_track_fallback', packedOffset: 38, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'audio_handled', packedOffset: 38, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'audio_fallback', packedOffset: 38, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'video_handled', packedOffset: 38, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'video_fallback', packedOffset: 38, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'manifest_handled', packedOffset: 38, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'manifest_fallback', packedOffset: 38, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'speculation_rules_handled', packedOffset: 39, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'speculation_rules_fallback', packedOffset: 39, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'mock_handled', packedOffset: 39, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'mock_fallback', packedOffset: 39, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'dictionary_handled', packedOffset: 39, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'dictionary_fallback', packedOffset: 39, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'matched_cache_router_source_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'matched_fetch_event_router_source_count', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'matched_network_router_source_count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'matched_race_network_and_fetch_router_source_count', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'matched_race_network_and_cache_router_source_count', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'total_router_evaluation_time_for_subresources', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'total_cache_lookup_time_for_subresources', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ResourceDataUpdate
page_load_metrics.mojom.ResourceDataUpdateSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.ResourceDataUpdate',
      packedSize: 64,
      fields: [
        { name: 'request_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'delta_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ByteCountSpec, nullable: false, minVersion: 0 },
        { name: 'received_data_length', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ByteCountSpec, nullable: false, minVersion: 0 },
        { name: 'encoded_body_length', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ByteCountSpec, nullable: false, minVersion: 0 },
        { name: 'decoded_body_length', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.ByteCountSpec, nullable: false, minVersion: 0 },
        { name: 'is_complete', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'reported_as_ad_resource', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_main_frame_resource', packedOffset: 48, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cache_type', packedOffset: 44, packedBitOffset: 0, type: page_load_metrics.mojom.CacheTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_primary_frame_resource', packedOffset: 48, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_secure_scheme', packedOffset: 48, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'proxy_used', packedOffset: 48, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: LayoutShift
page_load_metrics.mojom.LayoutShiftSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.LayoutShift',
      packedSize: 24,
      fields: [
        { name: 'layout_shift_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'layout_shift_score', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FrameRenderDataUpdate
page_load_metrics.mojom.FrameRenderDataUpdateSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.FrameRenderDataUpdate',
      packedSize: 24,
      fields: [
        { name: 'layout_shift_delta', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'layout_shift_delta_before_input_or_scroll', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'new_layout_shifts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(page_load_metrics.mojom.LayoutShiftSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'task_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'user_interaction_latencies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(page_load_metrics.mojom.UserInteractionLatencySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UserInteractionLatency
page_load_metrics.mojom.UserInteractionLatencySpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.UserInteractionLatency',
      packedSize: 32,
      fields: [
        { name: 'interaction_latency', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'interaction_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'interaction_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: BackForwardCacheTiming
page_load_metrics.mojom.BackForwardCacheTimingSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.BackForwardCacheTiming',
      packedSize: 32,
      fields: [
        { name: 'first_paint_after_back_forward_cache_restore', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'request_animation_frames_after_back_forward_cache_restore', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.TimeDeltaSpec, false), nullable: false, minVersion: 0 },
        { name: 'first_input_delay_after_back_forward_cache_restore', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SoftNavigationMetrics
page_load_metrics.mojom.SoftNavigationMetricsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.SoftNavigationMetrics',
      packedSize: 48,
      fields: [
        { name: 'count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'navigation_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'same_document_metrics_token', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'largest_contentful_paint', packedOffset: 24, packedBitOffset: 0, type: page_load_metrics.mojom.LargestContentfulPaintTimingSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: PageLoadMetrics
page_load_metrics.mojom.PageLoadMetrics = {};

page_load_metrics.mojom.PageLoadMetrics_UpdateTiming_ParamsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.PageLoadMetrics_UpdateTiming_Params',
      packedSize: 80,
      fields: [
        { name: 'page_load_timing', packedOffset: 0, packedBitOffset: 0, type: page_load_metrics.mojom.PageLoadTimingSpec, nullable: false, minVersion: 0 },
        { name: 'frame_metadata', packedOffset: 8, packedBitOffset: 0, type: page_load_metrics.mojom.FrameMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'new_features', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.UseCounterFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'resources', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(page_load_metrics.mojom.ResourceDataUpdateSpec, false), nullable: false, minVersion: 0 },
        { name: 'render_data', packedOffset: 32, packedBitOffset: 0, type: page_load_metrics.mojom.FrameRenderDataUpdateSpec, nullable: false, minVersion: 0 },
        { name: 'cpu_load_timing', packedOffset: 40, packedBitOffset: 0, type: page_load_metrics.mojom.CpuTimingSpec, nullable: false, minVersion: 0 },
        { name: 'input_timing_delta', packedOffset: 48, packedBitOffset: 0, type: page_load_metrics.mojom.InputTimingSpec, nullable: false, minVersion: 0 },
        { name: 'subresource_load_metrics', packedOffset: 56, packedBitOffset: 0, type: page_load_metrics.mojom.SubresourceLoadMetricsSpec, nullable: true, minVersion: 0 },
        { name: 'soft_navigation_metrics', packedOffset: 64, packedBitOffset: 0, type: page_load_metrics.mojom.SoftNavigationMetricsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

page_load_metrics.mojom.PageLoadMetrics_SetUpSharedMemoryForDroppedFrames_ParamsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.PageLoadMetrics_SetUpSharedMemoryForDroppedFrames_Params',
      packedSize: 16,
      fields: [
        { name: 'dropped_frames_memory', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

page_load_metrics.mojom.PageLoadMetrics_AddCustomUserTiming_ParamsSpec = {
  $: {
    structSpec: {
      name: 'page_load_metrics.mojom.PageLoadMetrics_AddCustomUserTiming_Params',
      packedSize: 16,
      fields: [
        { name: 'custom_user_timing', packedOffset: 0, packedBitOffset: 0, type: page_load_metrics.mojom.CustomUserTimingMarkSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
        { name: 'page_load_timing', packedOffset: 0, packedBitOffset: 0, type: page_load_metrics.mojom.PageLoadTimingSpec, nullable: false, minVersion: 0 },
        { name: 'frame_metadata', packedOffset: 8, packedBitOffset: 0, type: page_load_metrics.mojom.FrameMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'new_features', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.UseCounterFeatureSpec, false), nullable: false, minVersion: 0 },
        { name: 'resources', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(page_load_metrics.mojom.ResourceDataUpdateSpec, false), nullable: false, minVersion: 0 },
        { name: 'render_data', packedOffset: 32, packedBitOffset: 0, type: page_load_metrics.mojom.FrameRenderDataUpdateSpec, nullable: false, minVersion: 0 },
        { name: 'cpu_load_timing', packedOffset: 40, packedBitOffset: 0, type: page_load_metrics.mojom.CpuTimingSpec, nullable: false, minVersion: 0 },
        { name: 'input_timing_delta', packedOffset: 48, packedBitOffset: 0, type: page_load_metrics.mojom.InputTimingSpec, nullable: false, minVersion: 0 },
        { name: 'subresource_load_metrics', packedOffset: 56, packedBitOffset: 0, type: page_load_metrics.mojom.SubresourceLoadMetricsSpec, nullable: true, minVersion: 0 },
        { name: 'soft_navigation_metrics', packedOffset: 64, packedBitOffset: 0, type: page_load_metrics.mojom.SoftNavigationMetricsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
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
        { name: 'dropped_frames_memory', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'custom_user_timing', packedOffset: 0, packedBitOffset: 0, type: page_load_metrics.mojom.CustomUserTimingMarkSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
page_load_metrics.mojom.PageLoadMetricsPtr = page_load_metrics.mojom.PageLoadMetricsRemote;
page_load_metrics.mojom.PageLoadMetricsRequest = page_load_metrics.mojom.PageLoadMetricsPendingReceiver;

