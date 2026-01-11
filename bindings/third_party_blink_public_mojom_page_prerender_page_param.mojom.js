// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/prerender_page_param.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.PrerenderParamSpec = { $: {} };

// Struct: PrerenderParam
mojo.internal.Struct(
    blink.mojom.PrerenderParamSpec, 'blink.mojom.PrerenderParam', [
      mojo.internal.StructField('page_metric_suffix', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('should_warm_up_compositor', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_prepare_paint_tree', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_pause_javascript_execution', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
