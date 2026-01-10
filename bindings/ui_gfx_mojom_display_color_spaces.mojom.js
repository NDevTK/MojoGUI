// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/display_color_spaces.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: ContentColorUsage
gfx.mojom.ContentColorUsage = {
  kSRGB: 0,
  kWideColorGamut: 1,
  kHDR: 2,
};
gfx.mojom.ContentColorUsageSpec = { $: mojo.internal.Enum() };

// Struct: DisplayColorSpaces
gfx.mojom.DisplayColorSpacesSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.DisplayColorSpaces',
      packedSize: 40,
      fields: [
        { name: 'color_spaces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.ColorSpace, 6Spec, false), nullable: false, minVersion: 0 },
        { name: 'formats', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.SharedImageFormat, 6Spec, false), nullable: false, minVersion: 0 },
        { name: 'primaries', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColorSpacePrimariesSpec, nullable: false, minVersion: 0 },
        { name: 'sdr_max_luminance_nits', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'hdr_max_luminance_relative', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
