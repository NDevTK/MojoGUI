// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/mojom/attributed_string.mojom
// Module: ui.mojom

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

ui.mojom.FontAttributeSpec = { $: {} };
ui.mojom.AttributedStringSpec = { $: {} };

// Struct: FontAttribute
mojo.internal.Struct(
    ui.mojom.FontAttributeSpec, 'ui.mojom.FontAttribute', [
      mojo.internal.StructField('font_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('effective_range', 8, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('font_point_size', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AttributedString
mojo.internal.Struct(
    ui.mojom.AttributedStringSpec, 'ui.mojom.AttributedString', [
      mojo.internal.StructField('string', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('attributes', 8, 0, mojo.internal.Array(ui.mojom.FontAttributeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
