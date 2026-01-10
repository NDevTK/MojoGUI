// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_mode.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Struct: AXMode
ax.mojom.mojom.AXModeSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXMode',
      packedSize: 16,
      fields: [
        { name: 'flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'filter_flags', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
