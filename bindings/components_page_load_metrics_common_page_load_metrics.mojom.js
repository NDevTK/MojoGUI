// Auto-generated MojoJS binding
 // Source: chromium_src/components/page_load_metrics/common/page_load_metrics.mojom
 // Module: page_load_metrics.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.page_load_metrics = mojo.internal.bindings.page_load_metrics || {};
mojo.internal.bindings.page_load_metrics.mojom = mojo.internal.bindings.page_load_metrics.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.page_load_metrics.mojom.CacheTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.page_load_metrics.mojom.DocumentTimingSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.LcpResourceLoadTimingsSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.LargestContentfulPaintTimingSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.PaintTimingSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.MonotonicPaintTimingSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.ParseTimingSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.InteractiveTimingSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.CustomUserTimingMarkSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.DomainLookupTimingSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.PageLoadTimingSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.FrameMetadataSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.SubresourceLoadMetricsSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.ServiceWorkerSubresourceLoadMetricsSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.ResourceDataUpdateSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.LayoutShiftSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.FrameRenderDataUpdateSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.CpuTimingSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.InputTimingSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.UserInteractionLatencySpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.BackForwardCacheTimingSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.SoftNavigationMetricsSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics = {};
mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics.$interfaceName = 'page_load_metrics.mojom.PageLoadMetrics';
mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_UpdateTiming_ParamsSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_SetUpSharedMemoryForDroppedFrames_ParamsSpec = { $: {} };
mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_AddCustomUserTiming_ParamsSpec = { $: {} };

// Enum: CacheType
mojo.internal.bindings.page_load_metrics.mojom.CacheType = {
  kNotCached: 0,
  kHttp: 1,
  kMemory: 2,
};

// Struct: DocumentTiming
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.DocumentTimingSpec, 'page_load_metrics.mojom.DocumentTiming', [
      mojo.internal.StructField('arg_dom_content_loaded_event_start', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_load_event_start', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LcpResourceLoadTimings
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.LcpResourceLoadTimingsSpec, 'page_load_metrics.mojom.LcpResourceLoadTimings', [
      mojo.internal.StructField('arg_discovery_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_load_start', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_load_end', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: LargestContentfulPaintTiming
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.LargestContentfulPaintTimingSpec, 'page_load_metrics.mojom.LargestContentfulPaintTiming', [
      mojo.internal.StructField('arg_largest_image_paint', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_largest_image_paint_size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_largest_text_paint', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_largest_text_paint_size', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_resource_load_timings', 32, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.LcpResourceLoadTimingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_image_bpp', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_image_request_priority_value', 56, 0, mojo.internal.bindings.network.mojom.RequestPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_request_priority_valid', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: PaintTiming
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.PaintTimingSpec, 'page_load_metrics.mojom.PaintTiming', [
      mojo.internal.StructField('arg_first_paint', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_first_image_paint', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_first_contentful_paint', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_first_meaningful_paint', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_largest_contentful_paint', 32, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.LargestContentfulPaintTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_experimental_largest_contentful_paint', 40, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.LargestContentfulPaintTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_first_eligible_to_paint', 48, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_first_input_or_scroll_notified_timestamp', 56, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: MonotonicPaintTiming
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.MonotonicPaintTimingSpec, 'page_load_metrics.mojom.MonotonicPaintTiming', [
      mojo.internal.StructField('arg_first_paint', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_first_contentful_paint', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ParseTiming
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.ParseTimingSpec, 'page_load_metrics.mojom.ParseTiming', [
      mojo.internal.StructField('arg_parse_start', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_parse_stop', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_parse_blocked_on_script_load_duration', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_parse_blocked_on_script_load_from_document_write_duration', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_parse_blocked_on_script_execution_duration', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_parse_blocked_on_script_execution_from_document_write_duration', 40, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: InteractiveTiming
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.InteractiveTimingSpec, 'page_load_metrics.mojom.InteractiveTiming', [
      mojo.internal.StructField('arg_first_input_delay', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_first_input_timestamp', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_first_scroll_delay', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_first_scroll_timestamp', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CustomUserTimingMark
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.CustomUserTimingMarkSpec, 'page_load_metrics.mojom.CustomUserTimingMark', [
      mojo.internal.StructField('arg_mark_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_start_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DomainLookupTiming
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.DomainLookupTimingSpec, 'page_load_metrics.mojom.DomainLookupTiming', [
      mojo.internal.StructField('arg_domain_lookup_start', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_domain_lookup_end', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PageLoadTiming
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.PageLoadTimingSpec, 'page_load_metrics.mojom.PageLoadTiming', [
      mojo.internal.StructField('arg_navigation_start', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_connect_start', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_connect_end', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_response_start', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_document_timing', 32, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.DocumentTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_interactive_timing', 40, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.InteractiveTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_paint_timing', 48, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.PaintTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_parse_timing', 56, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.ParseTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_domain_lookup_timing', 64, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.DomainLookupTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_back_forward_cache_timings', 72, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.BackForwardCacheTimingSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_activation_start', 80, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_input_to_navigation_start', 88, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_user_timing_mark_fully_loaded', 96, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_user_timing_mark_fully_visible', 104, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_user_timing_mark_interactive', 112, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_monotonic_paint_timing', 120, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.MonotonicPaintTimingSpec.$, null, true, 0, undefined),
    ],
    [[0, 136]]);

// Struct: FrameMetadata
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.FrameMetadataSpec, 'page_load_metrics.mojom.FrameMetadata', [
      mojo.internal.StructField('arg_main_frame_intersection_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_main_frame_viewport_rect', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_main_frame_ad_rects', 16, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.bindings.gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_framework_detection_result', 24, 0, mojo.internal.bindings.blink.mojom.JavaScriptFrameworkDetectionResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_behavior_flags', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SubresourceLoadMetrics
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.SubresourceLoadMetricsSpec, 'page_load_metrics.mojom.SubresourceLoadMetrics', [
      mojo.internal.StructField('arg_service_worker_subresource_load_metrics', 0, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.ServiceWorkerSubresourceLoadMetricsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_number_of_subresources_loaded', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_number_of_subresource_loads_handled_by_service_worker', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ServiceWorkerSubresourceLoadMetrics
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.ServiceWorkerSubresourceLoadMetricsSpec, 'page_load_metrics.mojom.ServiceWorkerSubresourceLoadMetrics', [
      mojo.internal.StructField('arg_total_router_evaluation_time_for_subresources', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_total_cache_lookup_time_for_subresources', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_matched_cache_router_source_count', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_matched_fetch_event_router_source_count', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_matched_network_router_source_count', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_matched_race_network_and_fetch_router_source_count', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_matched_race_network_and_cache_router_source_count', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_image_handled', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_image_fallback', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_css_handled', 36, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_css_fallback', 36, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_script_handled', 36, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_script_fallback', 36, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_font_handled', 36, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_font_fallback', 36, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_raw_handled', 37, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_raw_fallback', 37, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_svg_handled', 37, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_svg_fallback', 37, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_xsl_handled', 37, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_xsl_fallback', 37, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_link_prefetch_handled', 37, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_link_prefetch_fallback', 37, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_text_track_handled', 38, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_text_track_fallback', 38, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_audio_handled', 38, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_audio_fallback', 38, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_video_handled', 38, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_video_fallback', 38, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_manifest_handled', 38, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_manifest_fallback', 38, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_speculation_rules_handled', 39, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_speculation_rules_fallback', 39, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_mock_handled', 39, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_mock_fallback', 39, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dictionary_handled', 39, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dictionary_fallback', 39, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ResourceDataUpdate
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.ResourceDataUpdateSpec, 'page_load_metrics.mojom.ResourceDataUpdate', [
      mojo.internal.StructField('arg_delta_bytes', 0, 0, mojo.internal.bindings.mojo_base.mojom.ByteCountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_received_data_length', 8, 0, mojo.internal.bindings.mojo_base.mojom.ByteCountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_encoded_body_length', 16, 0, mojo.internal.bindings.mojo_base.mojom.ByteCountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_decoded_body_length', 24, 0, mojo.internal.bindings.mojo_base.mojom.ByteCountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cache_type', 32, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.CacheTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_complete', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_reported_as_ad_resource', 52, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_main_frame_resource', 52, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_primary_frame_resource', 52, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_secure_scheme', 52, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_proxy_used', 52, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: LayoutShift
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.LayoutShiftSpec, 'page_load_metrics.mojom.LayoutShift', [
      mojo.internal.StructField('arg_layout_shift_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_layout_shift_score', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FrameRenderDataUpdate
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.FrameRenderDataUpdateSpec, 'page_load_metrics.mojom.FrameRenderDataUpdate', [
      mojo.internal.StructField('arg_new_layout_shifts', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.LayoutShiftSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_layout_shift_delta', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_layout_shift_delta_before_input_or_scroll', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CpuTiming
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.CpuTimingSpec, 'page_load_metrics.mojom.CpuTiming', [
      mojo.internal.StructField('arg_task_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: InputTiming
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.InputTimingSpec, 'page_load_metrics.mojom.InputTiming', [
      mojo.internal.StructField('arg_user_interaction_latencies', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.UserInteractionLatencySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UserInteractionLatency
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.UserInteractionLatencySpec, 'page_load_metrics.mojom.UserInteractionLatency', [
      mojo.internal.StructField('arg_interaction_latency', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_interaction_offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_interaction_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BackForwardCacheTiming
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.BackForwardCacheTimingSpec, 'page_load_metrics.mojom.BackForwardCacheTiming', [
      mojo.internal.StructField('arg_first_paint_after_back_forward_cache_restore', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_animation_frames_after_back_forward_cache_restore', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_first_input_delay_after_back_forward_cache_restore', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SoftNavigationMetrics
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.SoftNavigationMetricsSpec, 'page_load_metrics.mojom.SoftNavigationMetrics', [
      mojo.internal.StructField('arg_count', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_start_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_same_document_metrics_token', 16, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_largest_contentful_paint', 24, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.LargestContentfulPaintTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_navigation_id', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: PageLoadMetrics
mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_UpdateTiming_ParamsSpec, 'page_load_metrics.mojom.PageLoadMetrics_UpdateTiming_Params', [
      mojo.internal.StructField('arg_page_load_timing', 0, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.PageLoadTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_metadata', 8, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.FrameMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_features', 16, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.UseCounterFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_resources', 24, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.ResourceDataUpdateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_render_data', 32, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.FrameRenderDataUpdateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cpu_load_timing', 40, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.CpuTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_timing_delta', 48, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.InputTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_subresource_load_metrics', 56, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.SubresourceLoadMetricsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_soft_navigation_metrics', 64, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.SoftNavigationMetricsSpec.$, null, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_SetUpSharedMemoryForDroppedFrames_ParamsSpec, 'page_load_metrics.mojom.PageLoadMetrics_SetUpSharedMemoryForDroppedFrames_Params', [
      mojo.internal.StructField('arg_dropped_frames_memory', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_AddCustomUserTiming_ParamsSpec, 'page_load_metrics.mojom.PageLoadMetrics_AddCustomUserTiming_Params', [
      mojo.internal.StructField('arg_custom_user_timing', 0, 0, mojo.internal.bindings.mojo.internal.bindings.page_load_metrics.mojom.CustomUserTimingMarkSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetricsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetricsRemote = class {
  static get $interfaceName() {
    return 'page_load_metrics.mojom.PageLoadMetrics';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetricsPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetricsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  updateTiming(arg_page_load_timing, arg_frame_metadata, arg_new_features, arg_resources, arg_render_data, arg_cpu_load_timing, arg_input_timing_delta, arg_subresource_load_metrics, arg_soft_navigation_metrics) {
    return this.$.updateTiming(arg_page_load_timing, arg_frame_metadata, arg_new_features, arg_resources, arg_render_data, arg_cpu_load_timing, arg_input_timing_delta, arg_subresource_load_metrics, arg_soft_navigation_metrics);
  }
  setUpSharedMemoryForDroppedFrames(arg_dropped_frames_memory) {
    return this.$.setUpSharedMemoryForDroppedFrames(arg_dropped_frames_memory);
  }
  addCustomUserTiming(arg_custom_user_timing) {
    return this.$.addCustomUserTiming(arg_custom_user_timing);
  }
};

mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetricsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageLoadMetrics', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateTiming(arg_page_load_timing, arg_frame_metadata, arg_new_features, arg_resources, arg_render_data, arg_cpu_load_timing, arg_input_timing_delta, arg_subresource_load_metrics, arg_soft_navigation_metrics) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_UpdateTiming_ParamsSpec,
      null,
      [arg_page_load_timing, arg_frame_metadata, arg_new_features, arg_resources, arg_render_data, arg_cpu_load_timing, arg_input_timing_delta, arg_subresource_load_metrics, arg_soft_navigation_metrics],
      false);
  }

  setUpSharedMemoryForDroppedFrames(arg_dropped_frames_memory) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_SetUpSharedMemoryForDroppedFrames_ParamsSpec,
      null,
      [arg_dropped_frames_memory],
      false);
  }

  addCustomUserTiming(arg_custom_user_timing) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_AddCustomUserTiming_ParamsSpec,
      null,
      [arg_custom_user_timing],
      false);
  }

};

mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics.getRemote = function() {
  let remote = new mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetricsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'page_load_metrics.mojom.PageLoadMetrics',
    'context');
  return remote.$;
};

mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetricsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageLoadMetrics', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: UpdateTiming
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_UpdateTiming_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTiming (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetUpSharedMemoryForDroppedFrames
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_SetUpSharedMemoryForDroppedFrames_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUpSharedMemoryForDroppedFrames (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AddCustomUserTiming
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_AddCustomUserTiming_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddCustomUserTiming (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_UpdateTiming_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTiming');
          const result = this.impl.updateTiming(params.arg_page_load_timing, params.arg_frame_metadata, params.arg_new_features, params.arg_resources, params.arg_render_data, params.arg_cpu_load_timing, params.arg_input_timing_delta, params.arg_subresource_load_metrics, params.arg_soft_navigation_metrics);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_SetUpSharedMemoryForDroppedFrames_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUpSharedMemoryForDroppedFrames');
          const result = this.impl.setUpSharedMemoryForDroppedFrames(params.arg_dropped_frames_memory);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetrics_AddCustomUserTiming_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addCustomUserTiming');
          const result = this.impl.addCustomUserTiming(params.arg_custom_user_timing);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetricsReceiver = mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetricsReceiver;

mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetricsPtr = mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetricsRemote;
mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetricsRequest = mojo.internal.bindings.page_load_metrics.mojom.PageLoadMetricsPendingReceiver;

