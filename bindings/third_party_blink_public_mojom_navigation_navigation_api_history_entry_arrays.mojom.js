// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/navigation_api_history_entry_arrays.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.NavigationApiHistoryEntrySpec = { $: {} };
blink.mojom.NavigationApiHistoryEntryArraysSpec = { $: {} };

// Struct: NavigationApiHistoryEntry
mojo.internal.Struct(
    blink.mojom.NavigationApiHistoryEntrySpec, 'blink.mojom.NavigationApiHistoryEntry', [
      mojo.internal.StructField('key', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('item_sequence_number', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('document_sequence_number', 32, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('state', 40, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: NavigationApiHistoryEntryArrays
mojo.internal.Struct(
    blink.mojom.NavigationApiHistoryEntryArraysSpec, 'blink.mojom.NavigationApiHistoryEntryArrays', [
      mojo.internal.StructField('back_entries', 0, 0, mojo.internal.Array(blink.mojom.NavigationApiHistoryEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('forward_entries', 8, 0, mojo.internal.Array(blink.mojom.NavigationApiHistoryEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('previous_entry', 16, 0, blink.mojom.NavigationApiHistoryEntrySpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);
