// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/hit_test/aggregated_hit_test_region.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.AggregatedHitTestRegionSpec = { $: {} };

// Struct: AggregatedHitTestRegion
mojo.internal.Struct(
    viz.mojom.AggregatedHitTestRegionSpec, 'viz.mojom.AggregatedHitTestRegion', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('flags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('async_hit_test_reasons', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('rect', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('child_count', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('transform', 32, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);
