// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_location_and_scroll_updates.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Struct: AXLocationChange
ax.mojom.AXLocationChangeSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXLocationChange',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'new_location', packedOffset: 16, packedBitOffset: 0, type: ax.mojom.AXRelativeBoundsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AXScrollChange
ax.mojom.AXScrollChangeSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXScrollChange',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'scroll_x', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'scroll_y', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AXLocationAndScrollUpdates
ax.mojom.AXLocationAndScrollUpdatesSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXLocationAndScrollUpdates',
      packedSize: 24,
      fields: [
        { name: 'location_changes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'scroll_changes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
