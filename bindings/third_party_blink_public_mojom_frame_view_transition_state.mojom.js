// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/view_transition_state.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ViewTransitionPropertyId
blink.mojom.ViewTransitionPropertyId = {
  kBackdropFilter: 0,
  kBorderRadius: 1,
  kBorderWidth: 2,
  kColorScheme: 3,
  kCornerShape: 4,
  kMixBlendMode: 5,
  kTextOrientation: 6,
  kWritingMode: 7,
};

// Enum: ViewTransitionElementBoxSizing
blink.mojom.ViewTransitionElementBoxSizing = {
  kBorderBox: 0,
  kContentBox: 1,
};

// Struct: ViewTransitionElementLayeredBoxProperties
blink.mojom.ViewTransitionElementLayeredBoxPropertiesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ViewTransitionElementLayeredBoxProperties',
      packedSize: 32,
      fields: [
        { name: 'content_box', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'padding_box', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'box_sizing', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ViewTransitionElementBoxSizingSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ViewTransitionElement
blink.mojom.ViewTransitionElementSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ViewTransitionElement',
      packedSize: 112,
      fields: [
        { name: 'tag_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'border_box_rect_in_enclosing_layer_css_space', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'viewport_matrix', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
        { name: 'overflow_rect_in_layout_space', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'captured_rect_in_layout_space', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: true },
        { name: 'snapshot_id', packedOffset: 48, packedBitOffset: 0, type: viz.mojom.ViewTransitionElementResourceIdSpec, nullable: false },
        { name: 'paint_order', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'captured_css_properties', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'group_children_css_properties', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'border_offset', packedOffset: 80, packedBitOffset: 0, type: gfx.mojom.Vector2dSpec, nullable: false },
        { name: 'class_list', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'containing_group_name', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'layered_box_properties', packedOffset: 104, packedBitOffset: 0, type: blink.mojom.ViewTransitionElementLayeredBoxPropertiesSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ViewTransitionState
blink.mojom.ViewTransitionStateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ViewTransitionState',
      packedSize: 64,
      fields: [
        { name: 'elements', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'transition_token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ViewTransitionTokenSpec, nullable: false },
        { name: 'snapshot_root_size_at_capture', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'device_pixel_ratio', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'next_element_resource_id', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'subframe_snapshot_id', packedOffset: 40, packedBitOffset: 0, type: viz.mojom.ViewTransitionElementResourceIdSpec, nullable: false },
        { name: 'id_to_auto_name_map', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'delay_layer_tree_view_deletion', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
