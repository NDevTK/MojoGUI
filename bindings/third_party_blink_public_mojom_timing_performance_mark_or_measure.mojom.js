// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/timing/performance_mark_or_measure.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: EntryType
blink.mojom.EntryType = {
  kMark: 0,
  kMeasure: 1,
};

// Struct: PerformanceMarkOrMeasure
blink.mojom.PerformanceMarkOrMeasureSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PerformanceMarkOrMeasure',
      packedSize: 16,
      fields: [
        { name: 'kMark', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
