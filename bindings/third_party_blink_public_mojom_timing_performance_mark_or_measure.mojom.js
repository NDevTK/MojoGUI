// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/timing/performance_mark_or_measure.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.EntryTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.PerformanceMarkOrMeasureSpec = { $: {} };

// Enum: EntryType
blink.mojom.EntryType = {
  kMark: 0,
  kMeasure: 1,
};

// Struct: PerformanceMarkOrMeasure
mojo.internal.Struct(
    blink.mojom.PerformanceMarkOrMeasureSpec, 'blink.mojom.PerformanceMarkOrMeasure', [
      mojo.internal.StructField('kMark', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);
