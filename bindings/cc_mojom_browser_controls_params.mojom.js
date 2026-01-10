// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/browser_controls_params.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};

cc.mojom.BrowserControlsParamsSpec = { $: {} };

// Struct: BrowserControlsParams
mojo.internal.Struct(
    cc.mojom.BrowserControlsParamsSpec, 'cc.mojom.BrowserControlsParams', [
      mojo.internal.StructField('top_controls_height', 0, 0, mojo.internal.Float, 0.0, false, 0, undefined),
      mojo.internal.StructField('top_controls_min_height', 4, 0, mojo.internal.Float, 0.0, false, 0, undefined),
      mojo.internal.StructField('bottom_controls_height', 8, 0, mojo.internal.Float, 0.0, false, 0, undefined),
      mojo.internal.StructField('bottom_controls_min_height', 12, 0, mojo.internal.Float, 0.0, false, 0, undefined),
      mojo.internal.StructField('animate_browser_controls_height_changes', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browser_controls_shrink_blink_size', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('only_expand_top_controls_at_page_top', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);
