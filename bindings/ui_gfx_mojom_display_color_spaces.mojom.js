// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/display_color_spaces.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var services = services || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

gfx.mojom.ContentColorUsageSpec = { $: mojo.internal.Enum() };
gfx.mojom.DisplayColorSpacesSpec = { $: {} };

// Enum: ContentColorUsage
gfx.mojom.ContentColorUsage = {
  kSRGB: 0,
  kWideColorGamut: 1,
  kHDR: 2,
};

// Struct: DisplayColorSpaces
mojo.internal.Struct(
    gfx.mojom.DisplayColorSpacesSpec, 'gfx.mojom.DisplayColorSpaces', [
      mojo.internal.StructField('color_spaces', 0, 0, mojo.internal.Array(gfx.mojom.ColorSpace, 6Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('formats', 8, 0, mojo.internal.Array(viz.mojom.SharedImageFormat, 6Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('primaries', 16, 0, skia.mojom.SkColorSpacePrimariesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sdr_max_luminance_nits', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('hdr_max_luminance_relative', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);
