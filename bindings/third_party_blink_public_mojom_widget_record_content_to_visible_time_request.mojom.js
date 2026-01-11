// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/widget/record_content_to_visible_time_request.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.RecordContentToVisibleTimeRequestSpec = { $: {} };

// Struct: RecordContentToVisibleTimeRequest
mojo.internal.Struct(
    blink.mojom.RecordContentToVisibleTimeRequestSpec, 'blink.mojom.RecordContentToVisibleTimeRequest', [
      mojo.internal.StructField('event_start_time', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('destination_is_loaded', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_reason_tab_switching', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_reason_bfcache_restore', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_reason_unfolding', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
