// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/hit_test/hit_test_region_list.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.HitTestRegionSpec = { $: {} };
viz.mojom.HitTestRegionListSpec = { $: {} };

// Struct: HitTestRegion
mojo.internal.Struct(
    viz.mojom.HitTestRegionSpec, 'viz.mojom.HitTestRegion', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rect', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transform', 16, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('flags', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('async_hit_test_reasons', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: HitTestRegionList
mojo.internal.Struct(
    viz.mojom.HitTestRegionListSpec, 'viz.mojom.HitTestRegionList', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transform', 8, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('regions', 16, 0, mojo.internal.Array(viz.mojom.HitTestRegionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('flags', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('async_hit_test_reasons', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);
