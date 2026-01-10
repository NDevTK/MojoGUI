// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/quads.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.ProtectedVideoStateSpec = { $: mojo.internal.Enum() };
viz.mojom.OverlayPrioritySpec = { $: mojo.internal.Enum() };
viz.mojom.DrawQuadStateSpec = { $: {} };
viz.mojom.RoundedDisplayMasksInfoSpec = { $: {} };
viz.mojom.DebugBorderQuadStateSpec = { $: {} };
viz.mojom.CompositorRenderPassQuadStateSpec = { $: {} };
viz.mojom.SolidColorQuadStateSpec = { $: {} };
viz.mojom.SurfaceQuadStateSpec = { $: {} };
viz.mojom.TextureQuadStateSpec = { $: {} };
viz.mojom.TileQuadStateSpec = { $: {} };
viz.mojom.VideoHoleQuadStateSpec = { $: {} };
viz.mojom.SharedElementQuadStateSpec = { $: {} };
viz.mojom.DrawQuadSpec = { $: {} };

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

// Union: DrawQuadState
mojo.internal.Union(
    viz.mojom.DrawQuadStateSpec, 'viz.mojom.DrawQuadState', {
      'debug_border_quad_state': {
        'ordinal': 0,
        'type': viz.mojom.DebugBorderQuadStateSpec,
        'nullable': false,
      },
      'render_pass_quad_state': {
        'ordinal': 1,
        'type': viz.mojom.CompositorRenderPassQuadStateSpec,
        'nullable': false,
      },
      'solid_color_quad_state': {
        'ordinal': 2,
        'type': viz.mojom.SolidColorQuadStateSpec,
        'nullable': false,
      },
      'surface_quad_state': {
        'ordinal': 3,
        'type': viz.mojom.SurfaceQuadStateSpec,
        'nullable': false,
      },
      'texture_quad_state': {
        'ordinal': 4,
        'type': viz.mojom.TextureQuadStateSpec,
        'nullable': false,
      },
      'tile_quad_state': {
        'ordinal': 5,
        'type': viz.mojom.TileQuadStateSpec,
        'nullable': false,
      },
      'video_hole_quad_state': {
        'ordinal': 6,
        'type': viz.mojom.VideoHoleQuadStateSpec,
        'nullable': false,
      },
      'shared_element_quad_state': {
        'ordinal': 7,
        'type': viz.mojom.SharedElementQuadStateSpec,
        'nullable': false,
      },
    });

// Struct: RoundedDisplayMasksInfo
mojo.internal.Struct(
    viz.mojom.RoundedDisplayMasksInfoSpec, 'viz.mojom.RoundedDisplayMasksInfo', [
      mojo.internal.StructField('is_horizontally_positioned', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('radii', 0, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DebugBorderQuadState
mojo.internal.Struct(
    viz.mojom.DebugBorderQuadStateSpec, 'viz.mojom.DebugBorderQuadState', [
      mojo.internal.StructField('color', 0, 0, skia.mojom.SkColor4fSpec, null, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CompositorRenderPassQuadState
mojo.internal.Struct(
    viz.mojom.CompositorRenderPassQuadStateSpec, 'viz.mojom.CompositorRenderPassQuadState', [
      mojo.internal.StructField('render_pass_id', 0, 0, viz.mojom.CompositorRenderPassIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('mask_resource_id', 8, 0, viz.mojom.ResourceIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('mask_uv_rect', 16, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('mask_texture_size', 24, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('filters_scale', 32, 0, gfx.mojom.Vector2dFSpec, null, false, 0, undefined),
      mojo.internal.StructField('filters_origin', 40, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('tex_coord_rect', 48, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('force_anti_aliasing_off', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('backdrop_filter_quality', 56, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('intersects_damage_under', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: SolidColorQuadState
mojo.internal.Struct(
    viz.mojom.SolidColorQuadStateSpec, 'viz.mojom.SolidColorQuadState', [
      mojo.internal.StructField('color', 0, 0, skia.mojom.SkColor4fSpec, null, false, 0, undefined),
      mojo.internal.StructField('force_anti_aliasing_off', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SurfaceQuadState
mojo.internal.Struct(
    viz.mojom.SurfaceQuadStateSpec, 'viz.mojom.SurfaceQuadState', [
      mojo.internal.StructField('surface_range', 0, 0, viz.mojom.SurfaceRangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('default_background_color', 8, 0, skia.mojom.SkColor4fSpec, null, false, 0, undefined),
      mojo.internal.StructField('stretch_content_to_fill_bounds', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_reflection', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_merge', 28, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('override_child_filter_quality', 24, 0, cc.mojom.FilterQualitySpec, null, true, 0, undefined),
      mojo.internal.StructField('override_child_dynamic_range_limit', 16, 0, cc.mojom.DynamicRangeLimitSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TextureQuadState
mojo.internal.Struct(
    viz.mojom.TextureQuadStateSpec, 'viz.mojom.TextureQuadState', [
      mojo.internal.StructField('resource_id', 0, 0, viz.mojom.ResourceIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('tex_coord_rect', 8, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('background_color', 16, 0, skia.mojom.SkColor4fSpec, null, false, 0, undefined),
      mojo.internal.StructField('dynamic_range_limit', 24, 0, cc.mojom.DynamicRangeLimitSpec, null, false, 0, undefined),
      mojo.internal.StructField('nearest_neighbor', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('secure_output_only', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_video_frame', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_rgbx', 56, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_normalized_coords', 56, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('protected_video_type', 48, 0, viz.mojom.ProtectedVideoStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('damage_rect', 32, 0, gfx.mojom.RectSpec, null, true, 0, undefined),
      mojo.internal.StructField('overlay_priority_hint', 52, 0, viz.mojom.OverlayPrioritySpec, null, false, 0, undefined),
      mojo.internal.StructField('rounded_display_masks_info', 40, 0, viz.mojom.RoundedDisplayMasksInfoSpec, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: TileQuadState
mojo.internal.Struct(
    viz.mojom.TileQuadStateSpec, 'viz.mojom.TileQuadState', [
      mojo.internal.StructField('tex_coord_rect', 0, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('resource_id', 8, 0, viz.mojom.ResourceIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('nearest_neighbor', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_anti_aliasing_off', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VideoHoleQuadState
mojo.internal.Struct(
    viz.mojom.VideoHoleQuadStateSpec, 'viz.mojom.VideoHoleQuadState', [
      mojo.internal.StructField('overlay_plane_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SharedElementQuadState
mojo.internal.Struct(
    viz.mojom.SharedElementQuadStateSpec, 'viz.mojom.SharedElementQuadState', [
      mojo.internal.StructField('element_resource_id', 0, 0, viz.mojom.ViewTransitionElementResourceIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DrawQuad
mojo.internal.Struct(
    viz.mojom.DrawQuadSpec, 'viz.mojom.DrawQuad', [
      mojo.internal.StructField('rect', 16, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('visible_rect', 24, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('needs_blending', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sqs', 32, 0, viz.mojom.SharedQuadStateSpec, null, true, 0, undefined),
      mojo.internal.StructField('draw_quad_state', 0, 0, viz.mojom.DrawQuadStateSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);
