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
      packedSize: 16,
      fields: [
        { name: 'hdr_max_luminance_relative', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
