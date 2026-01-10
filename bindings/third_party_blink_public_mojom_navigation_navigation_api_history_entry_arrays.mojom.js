// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/navigation_api_history_entry_arrays.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: NavigationApiHistoryEntry
blink.mojom.mojom.NavigationApiHistoryEntrySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NavigationApiHistoryEntry',
      packedSize: 56,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'item_sequence_number', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'document_sequence_number', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: NavigationApiHistoryEntryArrays
blink.mojom.mojom.NavigationApiHistoryEntryArraysSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NavigationApiHistoryEntryArrays',
      packedSize: 32,
      fields: [
        { name: 'back_entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.NavigationApiHistoryEntrySpec, false), nullable: false, minVersion: 0 },
        { name: 'forward_entries', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.NavigationApiHistoryEntrySpec, false), nullable: false, minVersion: 0 },
        { name: 'previous_entry', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.NavigationApiHistoryEntrySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
