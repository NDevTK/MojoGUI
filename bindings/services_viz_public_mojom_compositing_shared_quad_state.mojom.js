// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/shared_quad_state.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: SharedQuadState
viz.mojom.SharedQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SharedQuadState',
      packedSize: 80,
      fields: [
        { name: 'quad_to_target_transform', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
        { name: 'quad_layer_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'visible_quad_layer_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'mask_filter_info', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.MaskFilterInfoSpec, nullable: true, minVersion: 0 },
        { name: 'clip_rect', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
        { name: 'are_contents_opaque', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'opacity', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'blend_mode', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'sorting_context_id', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'layer_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'is_fast_rounded_corner', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'offset_tag', packedOffset: 64, packedBitOffset: 0, type: viz.mojom.OffsetTagSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};
