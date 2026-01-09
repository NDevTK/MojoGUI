// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/display_color_spaces.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Enum: ContentColorUsage
gfx.mojom.ContentColorUsage = {
  kSRGB: 0,
  kWideColorGamut: 1,
  kHDR: 2,
};

// Struct: DisplayColorSpaces
gfx.mojom.DisplayColorSpacesSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.DisplayColorSpaces',
      packedSize: 40,
      fields: [
        { name: 'color_spaces', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'formats', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'primaries', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.SkColorSpacePrimariesSpec, nullable: false },
        { name: 'sdr_max_luminance_nits', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'hdr_max_luminance_relative', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
