// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/layer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: RareProperties
viz.mojom.RarePropertiesSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.RareProperties',
      packedSize: 32,
      fields: [
        { name: 'filter_quality', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.FilterQualitySpec, nullable: false },
        { name: 'dynamic_range_limit', packedOffset: 8, packedBitOffset: 0, type: cc.mojom.DynamicRangeLimitSpec, nullable: false },
        { name: 'capture_bounds', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.RegionCaptureBoundsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MirrorLayerExtra
viz.mojom.MirrorLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.MirrorLayerExtra',
      packedSize: 16,
      fields: [
        { name: 'mirrored_layer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SurfaceLayerExtra
viz.mojom.SurfaceLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SurfaceLayerExtra',
      packedSize: 32,
      fields: [
        { name: 'surface_range', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.SurfaceRangeSpec, nullable: false },
        { name: 'deadline_in_frames', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
        { name: 'stretch_content_to_fill_bounds', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'surface_hit_testable', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'has_pointer_events_none', packedOffset: 12, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'is_reflection', packedOffset: 12, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'will_draw_needs_reset', packedOffset: 12, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'override_child_paint_flags', packedOffset: 12, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextureLayerExtra
viz.mojom.TextureLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TextureLayerExtra',
      packedSize: 48,
      fields: [
        { name: 'blend_background_color', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'force_texture_to_opaque', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'uv_top_left', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'uv_bottom_right', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'update_transferable_resource', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'transferable_resource', packedOffset: 32, packedBitOffset: 0, type: viz.mojom.TransferableResourceSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UIResourceLayerExtra
viz.mojom.UIResourceLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.UIResourceLayerExtra',
      packedSize: 40,
      fields: [
        { name: 'ui_resource_id', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.UIResourceIdSpec, nullable: false },
        { name: 'image_bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'uv_top_left', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'uv_bottom_right', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TileDisplayLayerExtra
viz.mojom.TileDisplayLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TileDisplayLayerExtra',
      packedSize: 48,
      fields: [
        { name: 'solid_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: true },
        { name: 'is_backdrop_filter_mask', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_directly_composited_image', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'nearest_neighbor', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'content_color_usage', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.ContentColorUsageSpec, nullable: false },
        { name: 'recorded_bounds', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'proposed_tiling_scales_for_deletion', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ScrollbarLayerBaseExtra
viz.mojom.ScrollbarLayerBaseExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ScrollbarLayerBaseExtra',
      packedSize: 64,
      fields: [
        { name: 'scroll_element_id', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false },
        { name: 'is_overlay_scrollbar', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_web_test', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'thumb_thickness_scale_factor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'current_pos', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'clip_layer_length', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'scroll_layer_length', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'is_horizontal_orientation', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_left_side_vertical_scrollbar', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'vertical_adjust', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'has_find_in_page_tickmarks', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NinePatchThumbScrollbarLayerExtra
viz.mojom.NinePatchThumbScrollbarLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.NinePatchThumbScrollbarLayerExtra',
      packedSize: 64,
      fields: [
        { name: 'scrollbar_base_extra', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ScrollbarLayerBaseExtraSpec, nullable: false },
        { name: 'thumb_thickness', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'minimum_thumb_length', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'track_start', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'track_length', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'image_bounds', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'aperture', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'thumb_ui_resource_id', packedOffset: 40, packedBitOffset: 0, type: cc.mojom.UIResourceIdSpec, nullable: false },
        { name: 'track_and_buttons_ui_resource_id', packedOffset: 48, packedBitOffset: 0, type: cc.mojom.UIResourceIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaintedScrollbarLayerExtra
viz.mojom.PaintedScrollbarLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.PaintedScrollbarLayerExtra',
      packedSize: 128,
      fields: [
        { name: 'scrollbar_base_extra', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ScrollbarLayerBaseExtraSpec, nullable: false },
        { name: 'internal_contents_scale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'internal_content_bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'jump_on_track_click', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'supports_drag_snap_back', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'thumb_thickness', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'minimum_thumb_length', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'back_button_rect', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'forward_button_rect', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'track_rect', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'thumb_color', packedOffset: 64, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: true },
        { name: 'uses_nine_patch_track_and_buttons', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'track_and_buttons_image_bounds', packedOffset: 80, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'track_and_buttons_aperture', packedOffset: 88, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'painted_opacity', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'track_and_buttons_ui_resource_id', packedOffset: 104, packedBitOffset: 0, type: cc.mojom.UIResourceIdSpec, nullable: false },
        { name: 'thumb_ui_resource_id', packedOffset: 112, packedBitOffset: 0, type: cc.mojom.UIResourceIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SolidColorScrollbarLayerExtra
viz.mojom.SolidColorScrollbarLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SolidColorScrollbarLayerExtra',
      packedSize: 32,
      fields: [
        { name: 'scrollbar_base_extra', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ScrollbarLayerBaseExtraSpec, nullable: false },
        { name: 'thumb_thickness', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'track_start', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'color', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ViewTransitionContentLayerExtra
viz.mojom.ViewTransitionContentLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ViewTransitionContentLayerExtra',
      packedSize: 32,
      fields: [
        { name: 'resource_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ViewTransitionElementResourceIdSpec, nullable: false },
        { name: 'is_live_content_layer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'max_extents_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NinePatchLayerExtra
viz.mojom.NinePatchLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.NinePatchLayerExtra',
      packedSize: 72,
      fields: [
        { name: 'image_aperture', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'border', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'layer_occlusion', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'fill_center', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'ui_resource_id', packedOffset: 32, packedBitOffset: 0, type: cc.mojom.UIResourceIdSpec, nullable: false },
        { name: 'image_bounds', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'uv_top_left', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'uv_bottom_right', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Layer
viz.mojom.LayerSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Layer',
      packedSize: 128,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: cc.mojom.LayerTypeSpec, nullable: false },
        { name: 'bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'contents_opaque', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'contents_opaque_for_text', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_drawable', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'layer_property_changed_not_from_property_trees', packedOffset: 24, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'layer_property_changed_from_property_trees', packedOffset: 24, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'hit_test_opaqueness', packedOffset: 32, packedBitOffset: 0, type: cc.mojom.HitTestOpaquenessSpec, nullable: false },
        { name: 'background_color', packedOffset: 40, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false },
        { name: 'safe_opaque_background_color', packedOffset: 48, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false },
        { name: 'element_id', packedOffset: 56, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false },
        { name: 'update_rect', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'offset_to_transform_parent', packedOffset: 72, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'transform_tree_index', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'clip_tree_index', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'effect_tree_index', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'scroll_tree_index', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'should_check_backface_visibility', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'rare_properties', packedOffset: 104, packedBitOffset: 0, type: viz.mojom.RarePropertiesSpec, nullable: true },
        { name: 'layer_extra', packedOffset: 112, packedBitOffset: 0, type: viz.mojom.LayerExtraSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AnchorPositionScrollData
viz.mojom.AnchorPositionScrollDataSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.AnchorPositionScrollData',
      packedSize: 32,
      fields: [
        { name: 'adjustment_container_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'accumulated_scroll_origin', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector2dSpec, nullable: false },
        { name: 'needs_scroll_adjustment_in_x', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'needs_scroll_adjustment_in_y', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StickyPositionNodeData
viz.mojom.StickyPositionNodeDataSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.StickyPositionNodeData',
      packedSize: 96,
      fields: [
        { name: 'scroll_ancestor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_anchored_left', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_anchored_right', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_anchored_top', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'is_anchored_bottom', packedOffset: 4, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'left_offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'right_offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'top_offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'bottom_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'constraint_box_rect', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'scroll_container_relative_sticky_box_rect', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'scroll_container_relative_containing_block_rect', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'pixel_snap_offset', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'nearest_node_shifting_sticky_box', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'nearest_node_shifting_containing_block', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'total_sticky_box_sticky_offset', packedOffset: 72, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'total_containing_block_sticky_offset', packedOffset: 80, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TransformTreeUpdate
viz.mojom.TransformTreeUpdateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TransformTreeUpdate',
      packedSize: 64,
      fields: [
        { name: 'page_scale_factor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'device_scale_factor', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'device_transform_scale_factor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'nodes_affected_by_outer_viewport_bounds_delta', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'nodes_affected_by_safe_area_bottom', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'sticky_position_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'anchor_position_scroll_data', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'drawn_elastic_overscroll', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TransformNode
viz.mojom.TransformNodeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TransformNode',
      packedSize: 136,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'parent_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'parent_frame_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'element_id', packedOffset: 16, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false },
        { name: 'local', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
        { name: 'origin', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.Point3FSpec, nullable: false },
        { name: 'post_translation', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'to_parent', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
        { name: 'scroll_offset', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'snap_amount', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'sticky_position_constraint_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
        { name: 'anchor_position_scroll_data_id', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
        { name: 'sorting_context_id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'has_potential_animation', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_currently_animating', packedOffset: 84, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'flattens_inherited_transform', packedOffset: 84, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'scrolls', packedOffset: 84, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'should_undo_overscroll', packedOffset: 84, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'should_be_snapped', packedOffset: 84, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'moved_by_outer_viewport_bounds_delta_y', packedOffset: 84, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'in_subtree_of_page_scale_layer', packedOffset: 84, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'transform_changed', packedOffset: 84, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'delegates_to_parent_for_backface', packedOffset: 84, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'will_change_transform', packedOffset: 84, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
        { name: 'maximum_animation_scale', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'node_and_ancestors_are_animated_or_invertible', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_invertible', packedOffset: 96, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'ancestors_are_invertible', packedOffset: 96, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'node_and_ancestors_are_flat', packedOffset: 96, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'node_or_ancestors_will_change_transform', packedOffset: 96, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'visible_frame_element_id', packedOffset: 104, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false },
        { name: 'damage_reasons_bit_mask', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'moved_by_safe_area_bottom', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ClipNode
viz.mojom.ClipNodeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ClipNode',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'parent_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'transform_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'clip', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'pixel_moving_filter_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EffectNode
viz.mojom.EffectNodeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.EffectNode',
      packedSize: 176,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'parent_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'transform_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'clip_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'element_id', packedOffset: 16, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false },
        { name: 'opacity', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'render_surface_reason', packedOffset: 32, packedBitOffset: 0, type: cc.mojom.RenderSurfaceReasonSpec, nullable: false },
        { name: 'surface_contents_scale', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'subtree_capture_id', packedOffset: 48, packedBitOffset: 0, type: viz.mojom.SubtreeCaptureIdSpec, nullable: false },
        { name: 'subtree_size', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'blend_mode', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'target_id', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'view_transition_target_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'closest_ancestor_with_cached_render_surface_id', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'closest_ancestor_with_copy_request_id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'closest_ancestor_being_captured_id', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'closest_ancestor_with_shared_element_id', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'view_transition_element_resource_id', packedOffset: 96, packedBitOffset: 0, type: viz.mojom.ViewTransitionElementResourceIdSpec, nullable: false },
        { name: 'filters', packedOffset: 104, packedBitOffset: 0, type: viz.mojom.FilterOperationsSpec, nullable: false },
        { name: 'backdrop_filters', packedOffset: 112, packedBitOffset: 0, type: viz.mojom.FilterOperationsSpec, nullable: false },
        { name: 'backdrop_filter_bounds', packedOffset: 120, packedBitOffset: 0, type: skia.mojom.SkPathSpec, nullable: true },
        { name: 'backdrop_filter_quality', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'backdrop_mask_element_id', packedOffset: 136, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false },
        { name: 'mask_filter_info', packedOffset: 144, packedBitOffset: 0, type: gfx.mojom.MaskFilterInfoSpec, nullable: false },
        { name: 'cache_render_surface', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'double_sided', packedOffset: 152, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'trilinear_filtering', packedOffset: 152, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'subtree_hidden', packedOffset: 152, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'has_potential_filter_animation', packedOffset: 152, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'has_potential_backdrop_filter_animation', packedOffset: 152, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'has_potential_opacity_animation', packedOffset: 152, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'effect_changed', packedOffset: 152, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'subtree_has_copy_request', packedOffset: 152, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'is_fast_rounded_corner', packedOffset: 152, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'may_have_backdrop_effect', packedOffset: 152, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
        { name: 'needs_effect_for_2d_scale_transform', packedOffset: 152, packedBitOffset: 11, type: mojo.internal.Bool, nullable: false },
        { name: 'copy_output_requests', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ScrollTreeUpdate
viz.mojom.ScrollTreeUpdateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ScrollTreeUpdate',
      packedSize: 32,
      fields: [
        { name: 'synced_scroll_offsets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'scrolling_contents_cull_rects', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'elastic_overscroll', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ScrollNode
viz.mojom.ScrollNodeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ScrollNode',
      packedSize: 56,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'parent_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'transform_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'container_bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'bounds', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'element_id', packedOffset: 32, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false },
        { name: 'max_scroll_offset_affected_by_page_scale', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'scrolls_inner_viewport', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'scrolls_outer_viewport', packedOffset: 40, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'prevent_viewport_scrolling_from_inner', packedOffset: 40, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'user_scrollable_horizontal', packedOffset: 40, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'user_scrollable_vertical', packedOffset: 40, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'is_composited', packedOffset: 40, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
