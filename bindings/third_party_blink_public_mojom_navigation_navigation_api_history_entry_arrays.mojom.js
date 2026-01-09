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
      packedSize: 56,
      fields: [
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'item_sequence_number', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'document_sequence_number', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'state', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
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
      packedSize: 32,
      fields: [
        { name: 'back_entries', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'forward_entries', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'previous_entry', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.NavigationApiHistoryEntrySpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
