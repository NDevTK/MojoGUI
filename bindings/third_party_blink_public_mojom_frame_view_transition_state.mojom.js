// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/view_transition_state.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.ViewTransitionPropertyIdSpec = { $: mojo.internal.Enum() };
blink.mojom.ViewTransitionElementBoxSizingSpec = { $: mojo.internal.Enum() };
blink.mojom.ViewTransitionElementLayeredBoxPropertiesSpec = { $: {} };
blink.mojom.ViewTransitionElementSpec = { $: {} };
blink.mojom.ViewTransitionStateSpec = { $: {} };

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
mojo.internal.Struct(
    blink.mojom.ViewTransitionElementLayeredBoxPropertiesSpec, 'blink.mojom.ViewTransitionElementLayeredBoxProperties', [
      mojo.internal.StructField('content_box', 0, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('padding_box', 8, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('box_sizing', 16, 0, blink.mojom.ViewTransitionElementBoxSizingSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ViewTransitionElement
mojo.internal.Struct(
    blink.mojom.ViewTransitionElementSpec, 'blink.mojom.ViewTransitionElement', [
      mojo.internal.StructField('tag_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('border_box_rect_in_enclosing_layer_css_space', 8, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('viewport_matrix', 16, 0, gfx.mojom.TransformSpec, null, false, 0, undefined),
      mojo.internal.StructField('overflow_rect_in_layout_space', 24, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('captured_rect_in_layout_space', 32, 0, gfx.mojom.RectFSpec, null, true, 0, undefined),
      mojo.internal.StructField('snapshot_id', 40, 0, viz.mojom.ViewTransitionElementResourceIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('paint_order', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('captured_css_properties', 56, 0, mojo.internal.Map(blink.mojom.ViewTransitionPropertyIdSpec, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('group_children_css_properties', 64, 0, mojo.internal.Map(blink.mojom.ViewTransitionPropertyIdSpec, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('border_offset', 72, 0, gfx.mojom.Vector2dSpec, null, false, 0, undefined),
      mojo.internal.StructField('class_list', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('containing_group_name', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('layered_box_properties', 96, 0, blink.mojom.ViewTransitionElementLayeredBoxPropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 112]]);

// Struct: ViewTransitionState
mojo.internal.Struct(
    blink.mojom.ViewTransitionStateSpec, 'blink.mojom.ViewTransitionState', [
      mojo.internal.StructField('elements', 0, 0, mojo.internal.Array(blink.mojom.ViewTransitionElementSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('transition_token', 8, 0, blink.mojom.ViewTransitionTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('snapshot_root_size_at_capture', 16, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('device_pixel_ratio', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('next_element_resource_id', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('subframe_snapshot_id', 32, 0, viz.mojom.ViewTransitionElementResourceIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('id_to_auto_name_map', 40, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('delay_layer_tree_view_deletion', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);
