// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_snapshot.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};


// Struct: DisplaySnapshotColorInfo
display.mojom.DisplaySnapshotColorInfoSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplaySnapshotColorInfo',
      packedSize: 16,
      fields: [
        { name: 'bits_per_channel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DisplaySnapshot
display.mojom.DisplaySnapshotSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplaySnapshot',
      packedSize: 16,
      fields: [
        { name: 'drm_formats_and_modifiers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
