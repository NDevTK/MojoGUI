// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/delegated_ink_metadata.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: DelegatedInkMetadata
gfx.mojom.DelegatedInkMetadataSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.DelegatedInkMetadata',
      packedSize: 64,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'diameter', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'presentation_area', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'frame_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'is_hovering', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};
