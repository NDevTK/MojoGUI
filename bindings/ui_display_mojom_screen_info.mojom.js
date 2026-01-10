// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/screen_info.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

display.mojom.ScreenInfoSpec = { $: {} };

// Struct: ScreenInfo
mojo.internal.Struct(
    display.mojom.ScreenInfoSpec, 'display.mojom.ScreenInfo', [
      mojo.internal.StructField('device_scale_factor', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('display_color_spaces', 0, 0, gfx.mojom.DisplayColorSpacesSpec, null, false, 0, undefined),
      mojo.internal.StructField('depth', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('handwriting_radius', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('depth_per_component', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_monochrome', 62, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('rect', 8, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('available_rect', 16, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('orientation_type', 56, 0, display.mojom.ScreenOrientationSpec, null, false, 0, undefined),
      mojo.internal.StructField('orientation_angle', 60, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('is_extended', 62, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_primary', 62, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_internal', 62, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_id', 32, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 72]]);
