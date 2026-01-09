// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_mode.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Struct: AXMode
ax.mojom.AXModeSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXMode',
      packedSize: 16,
      fields: [
        { name: 'flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'filter_flags', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
