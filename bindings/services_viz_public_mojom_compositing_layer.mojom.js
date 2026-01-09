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
        { name: 'filter_quality', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'dynamic_range_limit', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'capture_bounds', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'surface_range', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 40,
      fields: [
        { name: 'uv_top_left', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'uv_bottom_right', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'transferable_resource', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'blend_background_color', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'force_texture_to_opaque', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'update_transferable_resource', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
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
        { name: 'ui_resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'image_bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'uv_top_left', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'uv_bottom_right', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'solid_color', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'content_color_usage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'recorded_bounds', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'proposed_tiling_scales_for_deletion', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'is_backdrop_filter_mask', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_directly_composited_image', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'nearest_neighbor', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 48,
      fields: [
        { name: 'scroll_element_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'thumb_thickness_scale_factor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'current_pos', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'clip_layer_length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'scroll_layer_length', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'vertical_adjust', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'is_overlay_scrollbar', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_web_test', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_horizontal_orientation', packedOffset: 28, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'is_left_side_vertical_scrollbar', packedOffset: 28, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'has_find_in_page_tickmarks', packedOffset: 28, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
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
        { name: 'scrollbar_base_extra', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'image_bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'aperture', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'thumb_ui_resource_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'track_and_buttons_ui_resource_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'thumb_thickness', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'minimum_thumb_length', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'track_start', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'track_length', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
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
      packedSize: 112,
      fields: [
        { name: 'scrollbar_base_extra', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'internal_content_bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'back_button_rect', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'forward_button_rect', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'track_rect', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'thumb_color', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'track_and_buttons_image_bounds', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'track_and_buttons_aperture', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'track_and_buttons_ui_resource_id', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'thumb_ui_resource_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'internal_contents_scale', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'thumb_thickness', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'minimum_thumb_length', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'painted_opacity', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'jump_on_track_click', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'supports_drag_snap_back', packedOffset: 96, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'uses_nine_patch_track_and_buttons', packedOffset: 96, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
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
        { name: 'scrollbar_base_extra', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'color', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'thumb_thickness', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'track_start', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
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
        { name: 'resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'max_extents_rect', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_live_content_layer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
        { name: 'image_aperture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'border', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'layer_occlusion', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ui_resource_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'image_bounds', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'uv_top_left', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'uv_bottom_right', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'fill_center', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 120,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bounds', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'hit_test_opaqueness', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'background_color', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'safe_opaque_background_color', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'element_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'update_rect', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'offset_to_transform_parent', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'rare_properties', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'layer_extra', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'transform_tree_index', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'clip_tree_index', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'effect_tree_index', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'scroll_tree_index', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'contents_opaque', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'contents_opaque_for_text', packedOffset: 104, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_drawable', packedOffset: 104, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'layer_property_changed_not_from_property_trees', packedOffset: 104, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'layer_property_changed_from_property_trees', packedOffset: 104, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'should_check_backface_visibility', packedOffset: 104, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
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
        { name: 'accumulated_scroll_origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'constraint_box_rect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'scroll_container_relative_sticky_box_rect', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'scroll_container_relative_containing_block_rect', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pixel_snap_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'total_sticky_box_sticky_offset', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'total_containing_block_sticky_offset', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'scroll_ancestor', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'left_offset', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'right_offset', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'top_offset', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'bottom_offset', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'nearest_node_shifting_sticky_box', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'nearest_node_shifting_containing_block', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_anchored_left', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_anchored_right', packedOffset: 76, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_anchored_top', packedOffset: 76, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'is_anchored_bottom', packedOffset: 76, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
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
        { name: 'nodes_affected_by_outer_viewport_bounds_delta', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'nodes_affected_by_safe_area_bottom', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'sticky_position_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'anchor_position_scroll_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'drawn_elastic_overscroll', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'page_scale_factor', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'device_scale_factor', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'device_transform_scale_factor', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
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
      packedSize: 120,
      fields: [
        { name: 'element_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'local', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'origin', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'post_translation', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'to_parent', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'scroll_offset', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'snap_amount', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'visible_frame_element_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'damage_reasons_bit_mask', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'parent_id', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'parent_frame_id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'sticky_position_constraint_id', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
        { name: 'anchor_position_scroll_data_id', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
        { name: 'sorting_context_id', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'maximum_animation_scale', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'has_potential_animation', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_currently_animating', packedOffset: 100, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'flattens_inherited_transform', packedOffset: 100, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'scrolls', packedOffset: 100, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'should_undo_overscroll', packedOffset: 100, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'should_be_snapped', packedOffset: 100, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'moved_by_outer_viewport_bounds_delta_y', packedOffset: 100, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'in_subtree_of_page_scale_layer', packedOffset: 100, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'transform_changed', packedOffset: 100, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'delegates_to_parent_for_backface', packedOffset: 100, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'will_change_transform', packedOffset: 100, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
        { name: 'node_and_ancestors_are_animated_or_invertible', packedOffset: 100, packedBitOffset: 11, type: mojo.internal.Bool, nullable: false },
        { name: 'is_invertible', packedOffset: 100, packedBitOffset: 12, type: mojo.internal.Bool, nullable: false },
        { name: 'ancestors_are_invertible', packedOffset: 100, packedBitOffset: 13, type: mojo.internal.Bool, nullable: false },
        { name: 'node_and_ancestors_are_flat', packedOffset: 100, packedBitOffset: 14, type: mojo.internal.Bool, nullable: false },
        { name: 'node_or_ancestors_will_change_transform', packedOffset: 100, packedBitOffset: 15, type: mojo.internal.Bool, nullable: false },
        { name: 'moved_by_safe_area_bottom', packedOffset: 100, packedBitOffset: 16, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'clip', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'parent_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'transform_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'pixel_moving_filter_id', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
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
      packedSize: 168,
      fields: [
        { name: 'element_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'render_surface_reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'surface_contents_scale', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'subtree_capture_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'subtree_size', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'view_transition_element_resource_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'filters', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'backdrop_filters', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'backdrop_filter_bounds', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'backdrop_mask_element_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'mask_filter_info', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'copy_output_requests', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'id', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'parent_id', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'transform_id', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'clip_id', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'opacity', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'blend_mode', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'target_id', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'view_transition_target_id', packedOffset: 124, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'closest_ancestor_with_cached_render_surface_id', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'closest_ancestor_with_copy_request_id', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'closest_ancestor_being_captured_id', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'closest_ancestor_with_shared_element_id', packedOffset: 140, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'backdrop_filter_quality', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'cache_render_surface', packedOffset: 148, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'double_sided', packedOffset: 148, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'trilinear_filtering', packedOffset: 148, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'subtree_hidden', packedOffset: 148, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'has_potential_filter_animation', packedOffset: 148, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'has_potential_backdrop_filter_animation', packedOffset: 148, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'has_potential_opacity_animation', packedOffset: 148, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'effect_changed', packedOffset: 148, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'subtree_has_copy_request', packedOffset: 148, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'is_fast_rounded_corner', packedOffset: 148, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'may_have_backdrop_effect', packedOffset: 148, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
        { name: 'needs_effect_for_2d_scale_transform', packedOffset: 148, packedBitOffset: 11, type: mojo.internal.Bool, nullable: false },
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
        { name: 'container_bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'element_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'parent_id', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'transform_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'max_scroll_offset_affected_by_page_scale', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'scrolls_inner_viewport', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'scrolls_outer_viewport', packedOffset: 36, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'prevent_viewport_scrolling_from_inner', packedOffset: 36, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'user_scrollable_horizontal', packedOffset: 36, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'user_scrollable_vertical', packedOffset: 36, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'is_composited', packedOffset: 36, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
