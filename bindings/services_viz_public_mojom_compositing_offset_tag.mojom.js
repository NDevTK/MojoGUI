// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/offset_tag.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.OffsetTagSpec = { $: {} };
viz.mojom.OffsetTagValueSpec = { $: {} };
viz.mojom.OffsetTagDefinitionSpec = { $: {} };

// Struct: OffsetTag
mojo.internal.Struct(
    viz.mojom.OffsetTagSpec, 'viz.mojom.OffsetTag', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.TokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: OffsetTagValue
mojo.internal.Struct(
    viz.mojom.OffsetTagValueSpec, 'viz.mojom.OffsetTagValue', [
      mojo.internal.StructField('tag', 0, 0, viz.mojom.OffsetTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, gfx.mojom.Vector2dFSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OffsetTagDefinition
mojo.internal.Struct(
    viz.mojom.OffsetTagDefinitionSpec, 'viz.mojom.OffsetTagDefinition', [
      mojo.internal.StructField('tag', 0, 0, viz.mojom.OffsetTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('provider', 8, 0, viz.mojom.SurfaceRangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('min_offset', 16, 0, gfx.mojom.Vector2dFSpec, null, false, 0, undefined),
      mojo.internal.StructField('max_offset', 24, 0, gfx.mojom.Vector2dFSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);
