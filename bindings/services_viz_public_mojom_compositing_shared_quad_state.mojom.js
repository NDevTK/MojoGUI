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
        { name: 'quad_to_target_transform', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
        { name: 'quad_layer_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'visible_quad_layer_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'mask_filter_info', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.MaskFilterInfoSpec, nullable: true },
        { name: 'clip_rect', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true },
        { name: 'offset_tag', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'opacity', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'blend_mode', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'sorting_context_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'layer_id', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'are_contents_opaque', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_fast_rounded_corner', packedOffset: 64, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
