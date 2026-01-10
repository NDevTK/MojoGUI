// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/cursor/mojom/cursor.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};
var skia = skia || {};
var gfx = gfx || {};

ui.mojom.CursorSpec = { $: {} };

// Struct: Cursor
mojo.internal.Struct(
    ui.mojom.CursorSpec, 'ui.mojom.Cursor', [
      mojo.internal.StructField('type', 0, 0, ui.mojom.CursorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hotspot', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bitmap', 16, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('image_scale_factor', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);
