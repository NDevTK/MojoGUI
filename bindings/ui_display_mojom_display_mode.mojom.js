// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_mode.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};


// Struct: DisplayMode
display.mojom.DisplayModeSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplayMode',
      packedSize: 32,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'is_interlaced', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'refresh_rate', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'vsync_rate_min_$flag', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'vsync_rate_min_$value', originalFieldName: 'vsync_rate_min' } },
        { name: 'vsync_rate_min_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'vsync_rate_min_$flag', originalFieldName: 'vsync_rate_min' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
