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
};

// Struct: DocumentTiming
page_load_metrics.mojom.DocumentTiming = class {
  constructor(values = {}) {
    this.load_event_start = values.load_event_start !== undefined ? values.load_event_start : null;
  }
};

// Struct: LcpResourceLoadTimings
page_load_metrics.mojom.LcpResourceLoadTimings = class {
  constructor(values = {}) {
    this.load_end = values.load_end !== undefined ? values.load_end : null;
  }
};

// Struct: LargestContentfulPaintTiming
page_load_metrics.mojom.LargestContentfulPaintTiming = class {
  constructor(values = {}) {
    this.largest_image_paint = values.largest_image_paint !== undefined ? values.largest_image_paint : null;
    this.largest_text_paint = values.largest_text_paint !== undefined ? values.largest_text_paint : 0;
    this.resource_load_timings = values.resource_load_timings !== undefined ? values.resource_load_timings : 0;
    this.type = values.type !== undefined ? values.type : 0;
    this.file = values.file !== undefined ? values.file : null;
    this.bits = values.bits !== undefined ? values.bits : null;
    this.size = values.size !== undefined ? values.size : null;
    this.image_bpp = values.image_bpp !== undefined ? values.image_bpp : 0;
    this.image_request_priority_value = values.image_request_priority_value !== undefined ? values.image_request_priority_value : false;
  }
};

// Struct: PaintTiming
page_load_metrics.mojom.PaintTiming = class {
  constructor(values = {}) {
    this.first_meaningful_paint = values.first_meaningful_paint !== undefined ? values.first_meaningful_paint : 0;
    this.experimental_largest_contentful_paint = values.experimental_largest_contentful_paint !== undefined ? values.experimental_largest_contentful_paint : 0;
    this.first_eligible_to_paint = values.first_eligible_to_paint !== undefined ? values.first_eligible_to_paint : null;
    this.first_input_or_scroll_notified_timestamp = values.first_input_or_scroll_notified_timestamp !== undefined ? values.first_input_or_scroll_notified_timestamp : null;
  }
};

// Struct: MonotonicPaintTiming
page_load_metrics.mojom.MonotonicPaintTiming = class {
  constructor(values = {}) {
    this.first_contentful_paint = values.first_contentful_paint !== undefined ? values.first_contentful_paint : 0;
  }
};

// Struct: ParseTiming
page_load_metrics.mojom.ParseTiming = class {
  constructor(values = {}) {
    this.parse_stop = values.parse_stop !== undefined ? values.parse_stop : null;
    this.parse_blocked_on_script_load_from_document_write_duration = values.parse_blocked_on_script_load_from_document_write_duration !== undefined ? values.parse_blocked_on_script_load_from_document_write_duration : null;
    this.parse_blocked_on_script_execution_from_document_write_duration = values.parse_blocked_on_script_execution_from_document_write_duration !== undefined ? values.parse_blocked_on_script_execution_from_document_write_duration : null;
  }
};

// Struct: InteractiveTiming
page_load_metrics.mojom.InteractiveTiming = class {
  constructor(values = {}) {
    this.press = values.press !== undefined ? values.press : null;
    this.touchstart = values.touchstart !== undefined ? values.touchstart : null;
    this.first_scroll_timestamp = values.first_scroll_timestamp !== undefined ? values.first_scroll_timestamp : null;
  }
};

// Struct: CustomUserTimingMark
page_load_metrics.mojom.CustomUserTimingMark = class {
  constructor(values = {}) {
    this.start_time = values.start_time !== undefined ? values.start_time : "";
  }
};

// Struct: DomainLookupTiming
page_load_metrics.mojom.DomainLookupTiming = class {
  constructor(values = {}) {
    this.domain_lookup_end = values.domain_lookup_end !== undefined ? values.domain_lookup_end : null;
  }
};

// Struct: PageLoadTiming
page_load_metrics.mojom.PageLoadTiming = class {
  constructor(values = {}) {
    this.domain_lookup_timing = values.domain_lookup_timing !== undefined ? values.domain_lookup_timing : 0;
    this.activation_start = values.activation_start !== undefined ? values.activation_start : [];
    this.monotonic_paint_timing = values.monotonic_paint_timing !== undefined ? values.monotonic_paint_timing : 0;
  }
};

// Struct: FrameMetadata
page_load_metrics.mojom.FrameMetadata = class {
  constructor(values = {}) {
    this.frame = values.frame !== undefined ? values.frame : 0;
    this.is = values.is !== undefined ? values.is : null;
    this.subsequent = values.subsequent !== undefined ? values.subsequent : null;
    this.main_frame_intersection_rect = values.main_frame_intersection_rect !== undefined ? values.main_frame_intersection_rect : null;
    this.initially = values.initially !== undefined ? values.initially : null;
    this.changes = values.changes !== undefined ? values.changes : null;
    this.main_frame_viewport_rect = values.main_frame_viewport_rect !== undefined ? values.main_frame_viewport_rect : null;
    this.framework_detection_result = values.framework_detection_result !== undefined ? values.framework_detection_result : 0;
  }
};

// Struct: SubresourceLoadMetrics
page_load_metrics.mojom.SubresourceLoadMetrics = class {
  constructor(values = {}) {
    this.service_worker_subresource_load_metrics = values.service_worker_subresource_load_metrics !== undefined ? values.service_worker_subresource_load_metrics : 0;
  }
};

// Struct: ServiceWorkerSubresourceLoadMetrics
page_load_metrics.mojom.ServiceWorkerSubresourceLoadMetrics = class {
  constructor(values = {}) {
    this.worker = values.worker !== undefined ? values.worker : null;
    this.image_handled = values.image_handled !== undefined ? values.image_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.image_fallback = values.image_fallback !== undefined ? values.image_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.css_handled = values.css_handled !== undefined ? values.css_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.css_fallback = values.css_fallback !== undefined ? values.css_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.script_handled = values.script_handled !== undefined ? values.script_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.script_fallback = values.script_fallback !== undefined ? values.script_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.font_handled = values.font_handled !== undefined ? values.font_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.font_fallback = values.font_fallback !== undefined ? values.font_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.raw_handled = values.raw_handled !== undefined ? values.raw_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.raw_fallback = values.raw_fallback !== undefined ? values.raw_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.svg_handled = values.svg_handled !== undefined ? values.svg_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.svg_fallback = values.svg_fallback !== undefined ? values.svg_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.xsl_handled = values.xsl_handled !== undefined ? values.xsl_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.xsl_fallback = values.xsl_fallback !== undefined ? values.xsl_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.link_prefetch_handled = values.link_prefetch_handled !== undefined ? values.link_prefetch_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.link_prefetch_fallback = values.link_prefetch_fallback !== undefined ? values.link_prefetch_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.text_track_handled = values.text_track_handled !== undefined ? values.text_track_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.text_track_fallback = values.text_track_fallback !== undefined ? values.text_track_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.audio_handled = values.audio_handled !== undefined ? values.audio_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.audio_fallback = values.audio_fallback !== undefined ? values.audio_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.video_handled = values.video_handled !== undefined ? values.video_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.video_fallback = values.video_fallback !== undefined ? values.video_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.manifest_handled = values.manifest_handled !== undefined ? values.manifest_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.manifest_fallback = values.manifest_fallback !== undefined ? values.manifest_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.speculation_rules_handled = values.speculation_rules_handled !== undefined ? values.speculation_rules_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.speculation_rules_fallback = values.speculation_rules_fallback !== undefined ? values.speculation_rules_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.mock_handled = values.mock_handled !== undefined ? values.mock_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.mock_fallback = values.mock_fallback !== undefined ? values.mock_fallback : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.dictionary_handled = values.dictionary_handled !== undefined ? values.dictionary_handled : false;
    this.worker = values.worker !== undefined ? values.worker : null;
    this.dictionary_fallback = values.dictionary_fallback !== undefined ? values.dictionary_fallback : false;
    this.total_cache_lookup_time_for_subresources = values.total_cache_lookup_time_for_subresources !== undefined ? values.total_cache_lookup_time_for_subresources : 0;
  }
};

// Struct: ResourceDataUpdate
page_load_metrics.mojom.ResourceDataUpdate = class {
  constructor(values = {}) {
    this.is_complete = values.is_complete !== undefined ? values.is_complete : 0;
    this.is_main_frame_resource = values.is_main_frame_resource !== undefined ? values.is_main_frame_resource : false;
    this.proxy_used = values.proxy_used !== undefined ? values.proxy_used : false;
  }
};

// Struct: LayoutShift
page_load_metrics.mojom.LayoutShift = class {
  constructor(values = {}) {
    this.layout_shift_score = values.layout_shift_score !== undefined ? values.layout_shift_score : 0;
  }
};

// Struct: FrameRenderDataUpdate
page_load_metrics.mojom.FrameRenderDataUpdate = class {
  constructor(values = {}) {
    this.layout_shift_delta = values.layout_shift_delta !== undefined ? values.layout_shift_delta : 0;
    this.new_layout_shifts = values.new_layout_shifts !== undefined ? values.new_layout_shifts : 0;
  }
};

// Struct: CpuTiming
page_load_metrics.mojom.CpuTiming = class {
  constructor(values = {}) {
    this.task_time = values.task_time !== undefined ? values.task_time : null;
  }
};

// Struct: InputTiming
page_load_metrics.mojom.InputTiming = class {
  constructor(values = {}) {
    this.user_interaction_latencies = values.user_interaction_latencies !== undefined ? values.user_interaction_latencies : 0;
  }
};

// Struct: UserInteractionLatency
page_load_metrics.mojom.UserInteractionLatency = class {
  constructor(values = {}) {
    this.interaction_latency = values.interaction_latency !== undefined ? values.interaction_latency : null;
    this.second = values.second !== undefined ? values.second : null;
    this.interaction_offset = values.interaction_offset !== undefined ? values.interaction_offset : 0;
    this.interaction_time = values.interaction_time !== undefined ? values.interaction_time : null;
  }
};

// Struct: BackForwardCacheTiming
page_load_metrics.mojom.BackForwardCacheTiming = class {
  constructor(values = {}) {
    this.request_animation_frames_after_back_forward_cache_restore = values.request_animation_frames_after_back_forward_cache_restore !== undefined ? values.request_animation_frames_after_back_forward_cache_restore : 0;
    this.press = values.press !== undefined ? values.press : null;
    this.touchstart = values.touchstart !== undefined ? values.touchstart : null;
    this.first_input_delay_after_back_forward_cache_restore = values.first_input_delay_after_back_forward_cache_restore !== undefined ? values.first_input_delay_after_back_forward_cache_restore : null;
  }
};

// Struct: SoftNavigationMetrics
page_load_metrics.mojom.SoftNavigationMetrics = class {
  constructor(values = {}) {
    this.navigation_id = values.navigation_id !== undefined ? values.navigation_id : 0;
    this.same_document_metrics_token = values.same_document_metrics_token !== undefined ? values.same_document_metrics_token : null;
    this.is = values.is !== undefined ? values.is : null;
    this.largest_contentful_paint = values.largest_contentful_paint !== undefined ? values.largest_contentful_paint : 0;
  }
};

// Interface: PageLoadMetrics
page_load_metrics.mojom.PageLoadMetricsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'page_load_metrics.mojom.PageLoadMetrics';
  }

  updateTiming(page_load_timing, frame_metadata, new_features, resources, render_data, cpu_load_timing, input_timing_delta, subresource_load_metrics, soft_navigation_metrics) {
    // Method: UpdateTiming
    // Call: UpdateTiming(page_load_timing, frame_metadata, new_features, resources, render_data, cpu_load_timing, input_timing_delta, subresource_load_metrics, soft_navigation_metrics)
  }

  setUpSharedMemoryForDroppedFrames(dropped_frames_memory) {
    // Method: SetUpSharedMemoryForDroppedFrames
    // Call: SetUpSharedMemoryForDroppedFrames(dropped_frames_memory)
  }

  addCustomUserTiming(custom_user_timing) {
    // Method: AddCustomUserTiming
    // Call: AddCustomUserTiming(custom_user_timing)
  }

};

page_load_metrics.mojom.PageLoadMetricsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
