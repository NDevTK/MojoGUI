// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/quads.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: ProtectedVideoState
viz.mojom.ProtectedVideoState = {
  kClear: 0,
  kSoftwareProtected: 1,
  kHardwareProtected: 2,
};

// Enum: OverlayPriority
viz.mojom.OverlayPriority = {
  kLow: 0,
  kRegular: 1,
  kRequired: 2,
};

// Struct: RoundedDisplayMasksInfo
viz.mojom.RoundedDisplayMasksInfoSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.RoundedDisplayMasksInfo',
      packedSize: 24,
      fields: [
        { name: 'is_horizontally_positioned', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'radii', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DebugBorderQuadState
viz.mojom.DebugBorderQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DebugBorderQuadState',
      packedSize: 24,
      fields: [
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CompositorRenderPassQuadState
viz.mojom.CompositorRenderPassQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorRenderPassQuadState',
      packedSize: 88,
      fields: [
        { name: 'render_pass_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.CompositorRenderPassIdSpec, nullable: false },
        { name: 'mask_resource_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.ResourceIdSpec, nullable: false },
        { name: 'mask_uv_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'mask_texture_size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'filters_scale', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'filters_origin', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'tex_coord_rect', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'force_anti_aliasing_off', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'backdrop_filter_quality', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'intersects_damage_under', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SolidColorQuadState
viz.mojom.SolidColorQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SolidColorQuadState',
      packedSize: 24,
      fields: [
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false },
        { name: 'force_anti_aliasing_off', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SurfaceQuadState
viz.mojom.SurfaceQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SurfaceQuadState',
      packedSize: 48,
      fields: [
        { name: 'surface_range', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.SurfaceRangeSpec, nullable: false },
        { name: 'default_background_color', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false },
        { name: 'stretch_content_to_fill_bounds', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_reflection', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_merge', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'override_child_filter_quality', packedOffset: 24, packedBitOffset: 0, type: cc.mojom.FilterQualitySpec, nullable: true },
        { name: 'override_child_dynamic_range_limit', packedOffset: 32, packedBitOffset: 0, type: cc.mojom.DynamicRangeLimitSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextureQuadState
viz.mojom.TextureQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TextureQuadState',
      packedSize: 80,
      fields: [
        { name: 'resource_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ResourceIdSpec, nullable: false },
        { name: 'tex_coord_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'background_color', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false },
        { name: 'dynamic_range_limit', packedOffset: 24, packedBitOffset: 0, type: cc.mojom.DynamicRangeLimitSpec, nullable: false },
        { name: 'nearest_neighbor', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'secure_output_only', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_video_frame', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'force_rgbx', packedOffset: 32, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'is_normalized_coords', packedOffset: 32, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'protected_video_type', packedOffset: 40, packedBitOffset: 0, type: viz.mojom.ProtectedVideoStateSpec, nullable: false },
        { name: 'damage_rect', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true },
        { name: 'overlay_priority_hint', packedOffset: 56, packedBitOffset: 0, type: viz.mojom.OverlayPrioritySpec, nullable: false },
        { name: 'rounded_display_masks_info', packedOffset: 64, packedBitOffset: 0, type: viz.mojom.RoundedDisplayMasksInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TileQuadState
viz.mojom.TileQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TileQuadState',
      packedSize: 32,
      fields: [
        { name: 'tex_coord_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'resource_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.ResourceIdSpec, nullable: false },
        { name: 'nearest_neighbor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'force_anti_aliasing_off', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoHoleQuadState
viz.mojom.VideoHoleQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VideoHoleQuadState',
      packedSize: 16,
      fields: [
        { name: 'overlay_plane_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedElementQuadState
viz.mojom.SharedElementQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SharedElementQuadState',
      packedSize: 16,
      fields: [
        { name: 'element_resource_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ViewTransitionElementResourceIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DrawQuad
viz.mojom.DrawQuadSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DrawQuad',
      packedSize: 48,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'visible_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'needs_blending', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'sqs', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.SharedQuadStateSpec, nullable: true },
        { name: 'draw_quad_state', packedOffset: 32, packedBitOffset: 0, type: viz.mojom.DrawQuadStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
