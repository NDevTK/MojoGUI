// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/navigation_api_history_entry_arrays.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: NavigationApiHistoryEntry
blink.mojom.NavigationApiHistoryEntrySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NavigationApiHistoryEntry',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NavigationApiHistoryEntryArrays
blink.mojom.NavigationApiHistoryEntryArraysSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NavigationApiHistoryEntryArrays',
      packedSize: 16,
      fields: [
        { name: 'previous_entry', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
