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
      packedSize: 16,
      fields: [
        { name: 'new_location', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'scroll_y', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'scroll_changes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
