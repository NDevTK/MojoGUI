// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/layer.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var cc = cc || {};
var skia = skia || {};
var gfx = gfx || {};

viz.mojom.LayerExtraSpec = { $: {} };
viz.mojom.RarePropertiesSpec = { $: {} };
viz.mojom.MirrorLayerExtraSpec = { $: {} };
viz.mojom.SurfaceLayerExtraSpec = { $: {} };
viz.mojom.TextureLayerExtraSpec = { $: {} };
viz.mojom.UIResourceLayerExtraSpec = { $: {} };
viz.mojom.TileDisplayLayerExtraSpec = { $: {} };
viz.mojom.ScrollbarLayerBaseExtraSpec = { $: {} };
viz.mojom.NinePatchThumbScrollbarLayerExtraSpec = { $: {} };
viz.mojom.PaintedScrollbarLayerExtraSpec = { $: {} };
viz.mojom.SolidColorScrollbarLayerExtraSpec = { $: {} };
viz.mojom.ViewTransitionContentLayerExtraSpec = { $: {} };
viz.mojom.NinePatchLayerExtraSpec = { $: {} };
viz.mojom.LayerSpec = { $: {} };
viz.mojom.AnchorPositionScrollDataSpec = { $: {} };
viz.mojom.StickyPositionNodeDataSpec = { $: {} };
viz.mojom.TransformTreeUpdateSpec = { $: {} };
viz.mojom.TransformNodeSpec = { $: {} };
viz.mojom.ClipNodeSpec = { $: {} };
viz.mojom.EffectNodeSpec = { $: {} };
viz.mojom.ScrollTreeUpdateSpec = { $: {} };
viz.mojom.ScrollNodeSpec = { $: {} };

// Union: LayerExtra
mojo.internal.Union(
    viz.mojom.LayerExtraSpec, 'viz.mojom.LayerExtra', {
      'mirror_layer_extra': {
        'ordinal': 0,
        'type': viz.mojom.MirrorLayerExtraSpec.$,
        'nullable': false,
      },
      'nine_patch_thumb_scrollbar_layer_extra': {
        'ordinal': 1,
        'type': viz.mojom.NinePatchThumbScrollbarLayerExtraSpec.$,
        'nullable': false,
      },
      'painted_scrollbar_layer_extra': {
        'ordinal': 2,
        'type': viz.mojom.PaintedScrollbarLayerExtraSpec.$,
        'nullable': false,
      },
      'solid_color_scrollbar_layer_extra': {
        'ordinal': 3,
        'type': viz.mojom.SolidColorScrollbarLayerExtraSpec.$,
        'nullable': false,
      },
      'surface_layer_extra': {
        'ordinal': 4,
        'type': viz.mojom.SurfaceLayerExtraSpec.$,
        'nullable': false,
      },
      'texture_layer_extra': {
        'ordinal': 5,
        'type': viz.mojom.TextureLayerExtraSpec.$,
        'nullable': false,
      },
      'ui_resource_layer_extra': {
        'ordinal': 6,
        'type': viz.mojom.UIResourceLayerExtraSpec.$,
        'nullable': false,
      },
      'tile_display_layer_extra': {
        'ordinal': 7,
        'type': viz.mojom.TileDisplayLayerExtraSpec.$,
        'nullable': false,
      },
      'view_transition_content_layer_extra': {
        'ordinal': 8,
        'type': viz.mojom.ViewTransitionContentLayerExtraSpec.$,
        'nullable': false,
      },
      'nine_patch_layer_extra': {
        'ordinal': 9,
        'type': viz.mojom.NinePatchLayerExtraSpec.$,
        'nullable': false,
      },
    });

// Struct: RareProperties
mojo.internal.Struct(
    viz.mojom.RarePropertiesSpec, 'viz.mojom.RareProperties', [
      mojo.internal.StructField('filter_quality', 0, 0, cc.mojom.FilterQualitySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('dynamic_range_limit', 8, 0, cc.mojom.DynamicRangeLimitSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capture_bounds', 16, 0, viz.mojom.RegionCaptureBoundsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: MirrorLayerExtra
mojo.internal.Struct(
    viz.mojom.MirrorLayerExtraSpec, 'viz.mojom.MirrorLayerExtra', [
      mojo.internal.StructField('mirrored_layer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SurfaceLayerExtra
mojo.internal.Struct(
    viz.mojom.SurfaceLayerExtraSpec, 'viz.mojom.SurfaceLayerExtra', [
      mojo.internal.StructField('surface_range', 0, 0, viz.mojom.SurfaceRangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('deadline_in_frames_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'deadline_in_frames_$flag', originalFieldName: 'deadline_in_frames' }),
      mojo.internal.StructField('deadline_in_frames_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'deadline_in_frames_$value', originalFieldName: 'deadline_in_frames' }),
      mojo.internal.StructField('stretch_content_to_fill_bounds', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('surface_hit_testable', 12, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_pointer_events_none', 12, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_reflection', 12, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('will_draw_needs_reset', 12, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('override_child_paint_flags', 12, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextureLayerExtra
mojo.internal.Struct(
    viz.mojom.TextureLayerExtraSpec, 'viz.mojom.TextureLayerExtra', [
      mojo.internal.StructField('uv_top_left', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('uv_bottom_right', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transferable_resource', 16, 0, viz.mojom.TransferableResourceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('blend_background_color', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_texture_to_opaque', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('update_transferable_resource', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: UIResourceLayerExtra
mojo.internal.Struct(
    viz.mojom.UIResourceLayerExtraSpec, 'viz.mojom.UIResourceLayerExtra', [
      mojo.internal.StructField('ui_resource_id', 0, 0, cc.mojom.UIResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_bounds', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('uv_top_left', 16, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('uv_bottom_right', 24, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TileDisplayLayerExtra
mojo.internal.Struct(
    viz.mojom.TileDisplayLayerExtraSpec, 'viz.mojom.TileDisplayLayerExtra', [
      mojo.internal.StructField('solid_color', 0, 0, skia.mojom.SkColor4fSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('content_color_usage', 8, 0, gfx.mojom.ContentColorUsageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('recorded_bounds', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('proposed_tiling_scales_for_deletion', 24, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('is_backdrop_filter_mask', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_directly_composited_image', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('nearest_neighbor', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ScrollbarLayerBaseExtra
mojo.internal.Struct(
    viz.mojom.ScrollbarLayerBaseExtraSpec, 'viz.mojom.ScrollbarLayerBaseExtra', [
      mojo.internal.StructField('scroll_element_id', 0, 0, cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thumb_thickness_scale_factor', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('current_pos', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('clip_layer_length', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('scroll_layer_length', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('vertical_adjust', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('is_overlay_scrollbar', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_web_test', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_horizontal_orientation', 28, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_left_side_vertical_scrollbar', 28, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_find_in_page_tickmarks', 28, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: NinePatchThumbScrollbarLayerExtra
mojo.internal.Struct(
    viz.mojom.NinePatchThumbScrollbarLayerExtraSpec, 'viz.mojom.NinePatchThumbScrollbarLayerExtra', [
      mojo.internal.StructField('scrollbar_base_extra', 0, 0, viz.mojom.ScrollbarLayerBaseExtraSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_bounds', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('aperture', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thumb_ui_resource_id', 24, 0, cc.mojom.UIResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('track_and_buttons_ui_resource_id', 32, 0, cc.mojom.UIResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thumb_thickness', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('minimum_thumb_length', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('track_start', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('track_length', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: PaintedScrollbarLayerExtra
mojo.internal.Struct(
    viz.mojom.PaintedScrollbarLayerExtraSpec, 'viz.mojom.PaintedScrollbarLayerExtra', [
      mojo.internal.StructField('scrollbar_base_extra', 0, 0, viz.mojom.ScrollbarLayerBaseExtraSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('internal_content_bounds', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('back_button_rect', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('forward_button_rect', 24, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('track_rect', 32, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thumb_color', 40, 0, skia.mojom.SkColor4fSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('track_and_buttons_image_bounds', 48, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('track_and_buttons_aperture', 56, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('track_and_buttons_ui_resource_id', 64, 0, cc.mojom.UIResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thumb_ui_resource_id', 72, 0, cc.mojom.UIResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('internal_contents_scale', 80, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('thumb_thickness', 84, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('minimum_thumb_length', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('painted_opacity', 92, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('jump_on_track_click', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_drag_snap_back', 96, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uses_nine_patch_track_and_buttons', 96, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: SolidColorScrollbarLayerExtra
mojo.internal.Struct(
    viz.mojom.SolidColorScrollbarLayerExtraSpec, 'viz.mojom.SolidColorScrollbarLayerExtra', [
      mojo.internal.StructField('scrollbar_base_extra', 0, 0, viz.mojom.ScrollbarLayerBaseExtraSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color', 8, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thumb_thickness', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('track_start', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ViewTransitionContentLayerExtra
mojo.internal.Struct(
    viz.mojom.ViewTransitionContentLayerExtraSpec, 'viz.mojom.ViewTransitionContentLayerExtra', [
      mojo.internal.StructField('resource_id', 0, 0, viz.mojom.ViewTransitionElementResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_extents_rect', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_live_content_layer', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: NinePatchLayerExtra
mojo.internal.Struct(
    viz.mojom.NinePatchLayerExtraSpec, 'viz.mojom.NinePatchLayerExtra', [
      mojo.internal.StructField('image_aperture', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('border', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('layer_occlusion', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ui_resource_id', 24, 0, cc.mojom.UIResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_bounds', 32, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('uv_top_left', 40, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('uv_bottom_right', 48, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fill_center', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: Layer
mojo.internal.Struct(
    viz.mojom.LayerSpec, 'viz.mojom.Layer', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, cc.mojom.LayerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hit_test_opaqueness', 24, 0, cc.mojom.HitTestOpaquenessSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('background_color', 32, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('safe_opaque_background_color', 40, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('element_id', 48, 0, cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('update_rect', 56, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset_to_transform_parent', 64, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rare_properties', 72, 0, viz.mojom.RarePropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('layer_extra', 80, 0, viz.mojom.LayerExtraSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('transform_tree_index', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('clip_tree_index', 92, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('effect_tree_index', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('scroll_tree_index', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('contents_opaque', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('contents_opaque_for_text', 104, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_drawable', 104, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('layer_property_changed_not_from_property_trees', 104, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('layer_property_changed_from_property_trees', 104, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_check_backface_visibility', 104, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: AnchorPositionScrollData
mojo.internal.Struct(
    viz.mojom.AnchorPositionScrollDataSpec, 'viz.mojom.AnchorPositionScrollData', [
      mojo.internal.StructField('adjustment_container_ids', 0, 0, mojo.internal.Array(cc.mojom.ElementIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('accumulated_scroll_origin', 8, 0, gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('needs_scroll_adjustment_in_x', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('needs_scroll_adjustment_in_y', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: StickyPositionNodeData
mojo.internal.Struct(
    viz.mojom.StickyPositionNodeDataSpec, 'viz.mojom.StickyPositionNodeData', [
      mojo.internal.StructField('constraint_box_rect', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scroll_container_relative_sticky_box_rect', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scroll_container_relative_containing_block_rect', 16, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pixel_snap_offset', 24, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('total_sticky_box_sticky_offset', 32, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('total_containing_block_sticky_offset', 40, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scroll_ancestor', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('left_offset', 52, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('right_offset', 56, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('top_offset', 60, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('bottom_offset', 64, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('nearest_node_shifting_sticky_box', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('nearest_node_shifting_containing_block', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_anchored_left', 76, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_anchored_right', 76, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_anchored_top', 76, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_anchored_bottom', 76, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: TransformTreeUpdate
mojo.internal.Struct(
    viz.mojom.TransformTreeUpdateSpec, 'viz.mojom.TransformTreeUpdate', [
      mojo.internal.StructField('nodes_affected_by_outer_viewport_bounds_delta', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('nodes_affected_by_safe_area_bottom', 8, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('sticky_position_data', 16, 0, mojo.internal.Array(viz.mojom.StickyPositionNodeDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('anchor_position_scroll_data', 24, 0, mojo.internal.Array(viz.mojom.AnchorPositionScrollDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('drawn_elastic_overscroll', 32, 0, mojo.internal.Map(cc.mojom.ElementIdSpec.$, gfx.mojom.Vector2dFSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 40, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 44, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('device_transform_scale_factor', 48, 0, mojo.internal.Float, 1.0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: TransformNode
mojo.internal.Struct(
    viz.mojom.TransformNodeSpec, 'viz.mojom.TransformNode', [
      mojo.internal.StructField('element_id', 0, 0, cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local', 8, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 16, 0, gfx.mojom.Point3FSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('post_translation', 24, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('to_parent', 32, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scroll_offset', 40, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('snap_amount', 48, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_frame_element_id', 56, 0, cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('damage_reasons_bit_mask', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('id', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('parent_id', 76, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('parent_frame_id', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sticky_position_constraint_id_$value', 84, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'sticky_position_constraint_id_$flag', originalFieldName: 'sticky_position_constraint_id' }),
      mojo.internal.StructField('anchor_position_scroll_data_id_$value', 88, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'anchor_position_scroll_data_id_$flag', originalFieldName: 'anchor_position_scroll_data_id' }),
      mojo.internal.StructField('sorting_context_id', 92, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('maximum_animation_scale', 96, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('sticky_position_constraint_id_$flag', 100, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'sticky_position_constraint_id_$value', originalFieldName: 'sticky_position_constraint_id' }),
      mojo.internal.StructField('anchor_position_scroll_data_id_$flag', 100, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'anchor_position_scroll_data_id_$value', originalFieldName: 'anchor_position_scroll_data_id' }),
      mojo.internal.StructField('has_potential_animation', 100, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_currently_animating', 100, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('flattens_inherited_transform', 100, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('scrolls', 100, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_undo_overscroll', 100, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_be_snapped', 100, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('moved_by_outer_viewport_bounds_delta_y', 101, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('in_subtree_of_page_scale_layer', 101, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('transform_changed', 101, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('delegates_to_parent_for_backface', 101, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('will_change_transform', 101, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('node_and_ancestors_are_animated_or_invertible', 101, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_invertible', 101, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ancestors_are_invertible', 101, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('node_and_ancestors_are_flat', 102, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('node_or_ancestors_will_change_transform', 102, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('moved_by_safe_area_bottom', 102, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: ClipNode
mojo.internal.Struct(
    viz.mojom.ClipNodeSpec, 'viz.mojom.ClipNode', [
      mojo.internal.StructField('clip', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('parent_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('transform_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('pixel_moving_filter_id', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EffectNode
mojo.internal.Struct(
    viz.mojom.EffectNodeSpec, 'viz.mojom.EffectNode', [
      mojo.internal.StructField('element_id', 0, 0, cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('render_surface_reason', 8, 0, cc.mojom.RenderSurfaceReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('surface_contents_scale', 16, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subtree_capture_id', 24, 0, viz.mojom.SubtreeCaptureIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subtree_size', 32, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('view_transition_element_resource_id', 40, 0, viz.mojom.ViewTransitionElementResourceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filters', 48, 0, viz.mojom.FilterOperationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('backdrop_filters', 56, 0, viz.mojom.FilterOperationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('backdrop_filter_bounds', 64, 0, skia.mojom.SkPathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('backdrop_mask_element_id', 72, 0, cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mask_filter_info', 80, 0, gfx.mojom.MaskFilterInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('copy_output_requests', 88, 0, mojo.internal.Array(viz.mojom.CopyOutputRequestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('id', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('parent_id', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('transform_id', 104, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('clip_id', 108, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('opacity', 112, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('blend_mode', 116, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('target_id', 120, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('view_transition_target_id', 124, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('closest_ancestor_with_cached_render_surface_id', 128, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('closest_ancestor_with_copy_request_id', 132, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('closest_ancestor_being_captured_id', 136, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('closest_ancestor_with_shared_element_id', 140, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('backdrop_filter_quality', 144, 0, mojo.internal.Float, 1.0, false, 0, undefined),
      mojo.internal.StructField('cache_render_surface', 148, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('double_sided', 148, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('trilinear_filtering', 148, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('subtree_hidden', 148, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_potential_filter_animation', 148, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_potential_backdrop_filter_animation', 148, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_potential_opacity_animation', 148, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('effect_changed', 148, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('subtree_has_copy_request', 149, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_fast_rounded_corner', 149, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('may_have_backdrop_effect', 149, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('needs_effect_for_2d_scale_transform', 149, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 160]]);

// Struct: ScrollTreeUpdate
mojo.internal.Struct(
    viz.mojom.ScrollTreeUpdateSpec, 'viz.mojom.ScrollTreeUpdate', [
      mojo.internal.StructField('synced_scroll_offsets', 0, 0, mojo.internal.Map(cc.mojom.ElementIdSpec.$, cc.mojom.SyncedScrollOffsetSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('scrolling_contents_cull_rects', 8, 0, mojo.internal.Map(cc.mojom.ElementIdSpec.$, gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('elastic_overscroll', 16, 0, mojo.internal.Map(cc.mojom.ElementIdSpec.$, gfx.mojom.Vector2dFSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ScrollNode
mojo.internal.Struct(
    viz.mojom.ScrollNodeSpec, 'viz.mojom.ScrollNode', [
      mojo.internal.StructField('container_bounds', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('element_id', 16, 0, cc.mojom.ElementIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('parent_id', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('transform_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_scroll_offset_affected_by_page_scale', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('scrolls_inner_viewport', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('scrolls_outer_viewport', 36, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prevent_viewport_scrolling_from_inner', 36, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('user_scrollable_horizontal', 36, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('user_scrollable_vertical', 36, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_composited', 36, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);
