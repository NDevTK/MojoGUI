// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/layer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Union: LayerExtra
viz.mojom.LayerExtraSpec = { $: mojo.internal.Union(
    'viz.mojom.LayerExtra', {
      'mirror_layer_extra': {
        'ordinal': 0,
        'type': viz.mojom.MirrorLayerExtraSpec,
      }},
      'nine_patch_thumb_scrollbar_layer_extra': {
        'ordinal': 1,
        'type': viz.mojom.NinePatchThumbScrollbarLayerExtraSpec,
      }},
      'painted_scrollbar_layer_extra': {
        'ordinal': 2,
        'type': viz.mojom.PaintedScrollbarLayerExtraSpec,
      }},
      'solid_color_scrollbar_layer_extra': {
        'ordinal': 3,
        'type': viz.mojom.SolidColorScrollbarLayerExtraSpec,
      }},
      'surface_layer_extra': {
        'ordinal': 4,
        'type': viz.mojom.SurfaceLayerExtraSpec,
      }},
      'texture_layer_extra': {
        'ordinal': 5,
        'type': viz.mojom.TextureLayerExtraSpec,
      }},
      'ui_resource_layer_extra': {
        'ordinal': 6,
        'type': viz.mojom.UIResourceLayerExtraSpec,
      }},
      'tile_display_layer_extra': {
        'ordinal': 7,
        'type': viz.mojom.TileDisplayLayerExtraSpec,
      }},
      'view_transition_content_layer_extra': {
        'ordinal': 8,
        'type': viz.mojom.ViewTransitionContentLayerExtraSpec,
      }},
      'nine_patch_layer_extra': {
        'ordinal': 9,
        'type': viz.mojom.NinePatchLayerExtraSpec,
      }},
    })
};

// Struct: RareProperties
viz.mojom.RarePropertiesSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.RareProperties',
      packedSize: 32,
      fields: [
        { name: 'filter_quality', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.FilterQualitySpec, nullable: false, minVersion: 0 },
        { name: 'dynamic_range_limit', packedOffset: 8, packedBitOffset: 0, type: cc.mojom.DynamicRangeLimitSpec, nullable: false, minVersion: 0 },
        { name: 'capture_bounds', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.RegionCaptureBoundsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'mirrored_layer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SurfaceLayerExtra
viz.mojom.SurfaceLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SurfaceLayerExtra',
      packedSize: 24,
      fields: [
        { name: 'surface_range', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.SurfaceRangeSpec, nullable: false, minVersion: 0 },
        { name: 'deadline_in_frames_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'deadline_in_frames_$value', originalFieldName: 'deadline_in_frames' } },
        { name: 'deadline_in_frames_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'deadline_in_frames_$flag', originalFieldName: 'deadline_in_frames' } },
        { name: 'stretch_content_to_fill_bounds', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'surface_hit_testable', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_pointer_events_none', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_reflection', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'will_draw_needs_reset', packedOffset: 8, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'override_child_paint_flags', packedOffset: 8, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'blend_background_color', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_texture_to_opaque', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'uv_top_left', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'uv_bottom_right', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'update_transferable_resource', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'transferable_resource', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.TransferableResourceSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'ui_resource_id', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.UIResourceIdSpec, nullable: false, minVersion: 0 },
        { name: 'image_bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'uv_top_left', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'uv_bottom_right', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: TileDisplayLayerExtra
viz.mojom.TileDisplayLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TileDisplayLayerExtra',
      packedSize: 40,
      fields: [
        { name: 'solid_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: true, minVersion: 0 },
        { name: 'is_backdrop_filter_mask', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_directly_composited_image', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'nearest_neighbor', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'content_color_usage', packedOffset: 12, packedBitOffset: 0, type: gfx.mojom.ContentColorUsageSpec, nullable: false, minVersion: 0 },
        { name: 'recorded_bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'proposed_tiling_scales_for_deletion', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Float, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ScrollbarLayerBaseExtra
viz.mojom.ScrollbarLayerBaseExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ScrollbarLayerBaseExtra',
      packedSize: 40,
      fields: [
        { name: 'scroll_element_id', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false, minVersion: 0 },
        { name: 'is_overlay_scrollbar', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_web_test', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'thumb_thickness_scale_factor', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'current_pos', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'clip_layer_length', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'scroll_layer_length', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'is_horizontal_orientation', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_left_side_vertical_scrollbar', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'vertical_adjust', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'has_find_in_page_tickmarks', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'scrollbar_base_extra', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ScrollbarLayerBaseExtraSpec, nullable: false, minVersion: 0 },
        { name: 'thumb_thickness', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'minimum_thumb_length', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'track_start', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'track_length', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'image_bounds', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'aperture', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'thumb_ui_resource_id', packedOffset: 40, packedBitOffset: 0, type: cc.mojom.UIResourceIdSpec, nullable: false, minVersion: 0 },
        { name: 'track_and_buttons_ui_resource_id', packedOffset: 48, packedBitOffset: 0, type: cc.mojom.UIResourceIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
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
        { name: 'scrollbar_base_extra', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ScrollbarLayerBaseExtraSpec, nullable: false, minVersion: 0 },
        { name: 'internal_contents_scale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'internal_content_bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'jump_on_track_click', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supports_drag_snap_back', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'thumb_thickness', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'minimum_thumb_length', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'back_button_rect', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'forward_button_rect', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'track_rect', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'thumb_color', packedOffset: 56, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: true, minVersion: 0 },
        { name: 'uses_nine_patch_track_and_buttons', packedOffset: 12, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'track_and_buttons_image_bounds', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'track_and_buttons_aperture', packedOffset: 72, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'painted_opacity', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'track_and_buttons_ui_resource_id', packedOffset: 88, packedBitOffset: 0, type: cc.mojom.UIResourceIdSpec, nullable: false, minVersion: 0 },
        { name: 'thumb_ui_resource_id', packedOffset: 96, packedBitOffset: 0, type: cc.mojom.UIResourceIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 112}]
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
        { name: 'scrollbar_base_extra', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ScrollbarLayerBaseExtraSpec, nullable: false, minVersion: 0 },
        { name: 'thumb_thickness', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'track_start', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'resource_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ViewTransitionElementResourceIdSpec, nullable: false, minVersion: 0 },
        { name: 'is_live_content_layer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'max_extents_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'image_aperture', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'border', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'layer_occlusion', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'fill_center', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ui_resource_id', packedOffset: 32, packedBitOffset: 0, type: cc.mojom.UIResourceIdSpec, nullable: false, minVersion: 0 },
        { name: 'image_bounds', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'uv_top_left', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'uv_bottom_right', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: cc.mojom.LayerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'contents_opaque', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'contents_opaque_for_text', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_drawable', packedOffset: 12, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'layer_property_changed_not_from_property_trees', packedOffset: 12, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'layer_property_changed_from_property_trees', packedOffset: 12, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hit_test_opaqueness', packedOffset: 24, packedBitOffset: 0, type: cc.mojom.HitTestOpaquenessSpec, nullable: false, minVersion: 0 },
        { name: 'background_color', packedOffset: 32, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false, minVersion: 0 },
        { name: 'safe_opaque_background_color', packedOffset: 40, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false, minVersion: 0 },
        { name: 'element_id', packedOffset: 48, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false, minVersion: 0 },
        { name: 'update_rect', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'offset_to_transform_parent', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'transform_tree_index', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'clip_tree_index', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'effect_tree_index', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'scroll_tree_index', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'should_check_backface_visibility', packedOffset: 12, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'rare_properties', packedOffset: 88, packedBitOffset: 0, type: viz.mojom.RarePropertiesSpec, nullable: true, minVersion: 0 },
        { name: 'layer_extra', packedOffset: 96, packedBitOffset: 0, type: viz.mojom.LayerExtraSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 120}]
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
        { name: 'adjustment_container_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(cc.mojom.ElementIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'accumulated_scroll_origin', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector2dSpec, nullable: false, minVersion: 0 },
        { name: 'needs_scroll_adjustment_in_x', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'needs_scroll_adjustment_in_y', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: StickyPositionNodeData
viz.mojom.StickyPositionNodeDataSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.StickyPositionNodeData',
      packedSize: 88,
      fields: [
        { name: 'scroll_ancestor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_anchored_left', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_anchored_right', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_anchored_top', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_anchored_bottom', packedOffset: 4, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'left_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'right_offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'top_offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'bottom_offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'constraint_box_rect', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'scroll_container_relative_sticky_box_rect', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'scroll_container_relative_containing_block_rect', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'pixel_snap_offset', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'nearest_node_shifting_sticky_box', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'nearest_node_shifting_containing_block', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'total_sticky_box_sticky_offset', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'total_containing_block_sticky_offset', packedOffset: 72, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
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
        { name: 'page_scale_factor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'device_transform_scale_factor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'nodes_affected_by_outer_viewport_bounds_delta', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'nodes_affected_by_safe_area_bottom', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'sticky_position_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.StickyPositionNodeDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'anchor_position_scroll_data', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.AnchorPositionScrollDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'drawn_elastic_overscroll', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map(cc.mojom.ElementIdSpec, gfx.mojom.Vector2dFSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: TransformNode
viz.mojom.TransformNodeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TransformNode',
      packedSize: 112,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'parent_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'parent_frame_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'element_id', packedOffset: 16, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false, minVersion: 0 },
        { name: 'local', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.Point3FSpec, nullable: false, minVersion: 0 },
        { name: 'post_translation', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'to_parent', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
        { name: 'scroll_offset', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'snap_amount', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'sticky_position_constraint_id_$flag', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'sticky_position_constraint_id_$value', originalFieldName: 'sticky_position_constraint_id' } },
        { name: 'sticky_position_constraint_id_$value', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'sticky_position_constraint_id_$flag', originalFieldName: 'sticky_position_constraint_id' } },
        { name: 'anchor_position_scroll_data_id_$flag', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'anchor_position_scroll_data_id_$value', originalFieldName: 'anchor_position_scroll_data_id' } },
        { name: 'anchor_position_scroll_data_id_$value', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'anchor_position_scroll_data_id_$flag', originalFieldName: 'anchor_position_scroll_data_id' } },
        { name: 'sorting_context_id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'has_potential_animation', packedOffset: 12, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_currently_animating', packedOffset: 12, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'flattens_inherited_transform', packedOffset: 12, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'scrolls', packedOffset: 12, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_undo_overscroll', packedOffset: 12, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_be_snapped', packedOffset: 12, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'moved_by_outer_viewport_bounds_delta_y', packedOffset: 13, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'in_subtree_of_page_scale_layer', packedOffset: 13, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'transform_changed', packedOffset: 13, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'delegates_to_parent_for_backface', packedOffset: 13, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'will_change_transform', packedOffset: 13, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'maximum_animation_scale', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'node_and_ancestors_are_animated_or_invertible', packedOffset: 13, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_invertible', packedOffset: 13, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ancestors_are_invertible', packedOffset: 13, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'node_and_ancestors_are_flat', packedOffset: 14, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'node_or_ancestors_will_change_transform', packedOffset: 14, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'visible_frame_element_id', packedOffset: 88, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false, minVersion: 0 },
        { name: 'damage_reasons_bit_mask', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'moved_by_safe_area_bottom', packedOffset: 14, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 112}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'parent_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'transform_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'clip', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'pixel_moving_filter_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: EffectNode
viz.mojom.EffectNodeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.EffectNode',
      packedSize: 160,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'parent_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'transform_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'clip_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'element_id', packedOffset: 16, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false, minVersion: 0 },
        { name: 'opacity', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'render_surface_reason', packedOffset: 28, packedBitOffset: 0, type: cc.mojom.RenderSurfaceReasonSpec, nullable: false, minVersion: 0 },
        { name: 'surface_contents_scale', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'subtree_capture_id', packedOffset: 40, packedBitOffset: 0, type: viz.mojom.SubtreeCaptureIdSpec, nullable: false, minVersion: 0 },
        { name: 'subtree_size', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'blend_mode', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'target_id', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'view_transition_target_id', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'closest_ancestor_with_cached_render_surface_id', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'closest_ancestor_with_copy_request_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'closest_ancestor_being_captured_id', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'closest_ancestor_with_shared_element_id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'view_transition_element_resource_id', packedOffset: 88, packedBitOffset: 0, type: viz.mojom.ViewTransitionElementResourceIdSpec, nullable: false, minVersion: 0 },
        { name: 'filters', packedOffset: 96, packedBitOffset: 0, type: viz.mojom.FilterOperationsSpec, nullable: false, minVersion: 0 },
        { name: 'backdrop_filters', packedOffset: 104, packedBitOffset: 0, type: viz.mojom.FilterOperationsSpec, nullable: false, minVersion: 0 },
        { name: 'backdrop_filter_bounds', packedOffset: 112, packedBitOffset: 0, type: skia.mojom.SkPathSpec, nullable: true, minVersion: 0 },
        { name: 'backdrop_filter_quality', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'backdrop_mask_element_id', packedOffset: 120, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false, minVersion: 0 },
        { name: 'mask_filter_info', packedOffset: 128, packedBitOffset: 0, type: gfx.mojom.MaskFilterInfoSpec, nullable: false, minVersion: 0 },
        { name: 'cache_render_surface', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'double_sided', packedOffset: 136, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'trilinear_filtering', packedOffset: 136, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'subtree_hidden', packedOffset: 136, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_potential_filter_animation', packedOffset: 136, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_potential_backdrop_filter_animation', packedOffset: 136, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_potential_opacity_animation', packedOffset: 136, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'effect_changed', packedOffset: 136, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'subtree_has_copy_request', packedOffset: 137, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_fast_rounded_corner', packedOffset: 137, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'may_have_backdrop_effect', packedOffset: 137, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'needs_effect_for_2d_scale_transform', packedOffset: 137, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'copy_output_requests', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.CopyOutputRequestSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 160}]
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
        { name: 'synced_scroll_offsets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(cc.mojom.ElementIdSpec, cc.mojom.SyncedScrollOffsetSpec, false), nullable: false, minVersion: 0 },
        { name: 'scrolling_contents_cull_rects', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(cc.mojom.ElementIdSpec, gfx.mojom.RectSpec, false), nullable: false, minVersion: 0 },
        { name: 'elastic_overscroll', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(cc.mojom.ElementIdSpec, gfx.mojom.Vector2dFSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ScrollNode
viz.mojom.ScrollNodeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ScrollNode',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'parent_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'transform_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'container_bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'element_id', packedOffset: 32, packedBitOffset: 0, type: cc.mojom.ElementIdSpec, nullable: false, minVersion: 0 },
        { name: 'max_scroll_offset_affected_by_page_scale', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'scrolls_inner_viewport', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'scrolls_outer_viewport', packedOffset: 12, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prevent_viewport_scrolling_from_inner', packedOffset: 12, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'user_scrollable_horizontal', packedOffset: 12, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'user_scrollable_vertical', packedOffset: 12, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_composited', packedOffset: 12, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
