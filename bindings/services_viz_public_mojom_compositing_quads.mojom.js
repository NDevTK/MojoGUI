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
viz.mojom.ProtectedVideoStateSpec = { $: mojo.internal.Enum() };

// Enum: OverlayPriority
viz.mojom.OverlayPriority = {
  kLow: 0,
  kRegular: 1,
  kRequired: 2,
};
viz.mojom.OverlayPrioritySpec = { $: mojo.internal.Enum() };

// Union: DrawQuadState
viz.mojom.DrawQuadStateSpec = { $: mojo.internal.Union(
    'viz.mojom.DrawQuadState', {
      'debug_border_quad_state': {
        'ordinal': 0,
        'type': viz.mojom.DebugBorderQuadStateSpec,
      }},
      'render_pass_quad_state': {
        'ordinal': 1,
        'type': viz.mojom.CompositorRenderPassQuadStateSpec,
      }},
      'solid_color_quad_state': {
        'ordinal': 2,
        'type': viz.mojom.SolidColorQuadStateSpec,
      }},
      'surface_quad_state': {
        'ordinal': 3,
        'type': viz.mojom.SurfaceQuadStateSpec,
      }},
      'texture_quad_state': {
        'ordinal': 4,
        'type': viz.mojom.TextureQuadStateSpec,
      }},
      'tile_quad_state': {
        'ordinal': 5,
        'type': viz.mojom.TileQuadStateSpec,
      }},
      'video_hole_quad_state': {
        'ordinal': 6,
        'type': viz.mojom.VideoHoleQuadStateSpec,
      }},
      'shared_element_quad_state': {
        'ordinal': 7,
        'type': viz.mojom.SharedElementQuadStateSpec,
      }},
    })
};

// Struct: RoundedDisplayMasksInfo
viz.mojom.RoundedDisplayMasksInfoSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.RoundedDisplayMasksInfo',
      packedSize: 24,
      fields: [
        { name: 'is_horizontally_positioned', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'radii', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CompositorRenderPassQuadState
viz.mojom.CompositorRenderPassQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorRenderPassQuadState',
      packedSize: 72,
      fields: [
        { name: 'render_pass_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.CompositorRenderPassIdSpec, nullable: false, minVersion: 0 },
        { name: 'mask_resource_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.ResourceIdSpec, nullable: false, minVersion: 0 },
        { name: 'mask_uv_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'mask_texture_size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'filters_scale', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'filters_origin', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'tex_coord_rect', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'force_anti_aliasing_off', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'backdrop_filter_quality', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'intersects_damage_under', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
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
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false, minVersion: 0 },
        { name: 'force_anti_aliasing_off', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SurfaceQuadState
viz.mojom.SurfaceQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SurfaceQuadState',
      packedSize: 40,
      fields: [
        { name: 'surface_range', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.SurfaceRangeSpec, nullable: false, minVersion: 0 },
        { name: 'default_background_color', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false, minVersion: 0 },
        { name: 'stretch_content_to_fill_bounds', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_reflection', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_merge', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'override_child_filter_quality', packedOffset: 20, packedBitOffset: 0, type: cc.mojom.FilterQualitySpec, nullable: true, minVersion: 0 },
        { name: 'override_child_dynamic_range_limit', packedOffset: 24, packedBitOffset: 0, type: cc.mojom.DynamicRangeLimitSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: TextureQuadState
viz.mojom.TextureQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TextureQuadState',
      packedSize: 72,
      fields: [
        { name: 'resource_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ResourceIdSpec, nullable: false, minVersion: 0 },
        { name: 'tex_coord_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'background_color', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false, minVersion: 0 },
        { name: 'dynamic_range_limit', packedOffset: 24, packedBitOffset: 0, type: cc.mojom.DynamicRangeLimitSpec, nullable: false, minVersion: 0 },
        { name: 'nearest_neighbor', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'secure_output_only', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_video_frame', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_rgbx', packedOffset: 32, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_normalized_coords', packedOffset: 32, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'protected_video_type', packedOffset: 36, packedBitOffset: 0, type: viz.mojom.ProtectedVideoStateSpec, nullable: false, minVersion: 0 },
        { name: 'damage_rect', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
        { name: 'overlay_priority_hint', packedOffset: 48, packedBitOffset: 0, type: viz.mojom.OverlayPrioritySpec, nullable: false, minVersion: 0 },
        { name: 'rounded_display_masks_info', packedOffset: 56, packedBitOffset: 0, type: viz.mojom.RoundedDisplayMasksInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
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
        { name: 'tex_coord_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'resource_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.ResourceIdSpec, nullable: false, minVersion: 0 },
        { name: 'nearest_neighbor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_anti_aliasing_off', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'overlay_plane_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'element_resource_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ViewTransitionElementResourceIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DrawQuad
viz.mojom.DrawQuadSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DrawQuad',
      packedSize: 56,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'visible_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'needs_blending', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sqs', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.SharedQuadStateSpec, nullable: true, minVersion: 0 },
        { name: 'draw_quad_state', packedOffset: 32, packedBitOffset: 0, type: viz.mojom.DrawQuadStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
