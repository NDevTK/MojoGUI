// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/paint_flags.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};

cc.mojom.FilterQualitySpec = { $: mojo.internal.Enum() };
cc.mojom.DynamicRangeLimitSpec = { $: {} };

// Enum: FilterQuality
cc.mojom.FilterQuality = {
  kNone: 0,
  kLow: 1,
  kMedium: 2,
  kHigh: 3,
};

// Struct: DynamicRangeLimit
mojo.internal.Struct(
    cc.mojom.DynamicRangeLimitSpec, 'cc.mojom.DynamicRangeLimit', [
      mojo.internal.StructField('standard_mix', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('constrained_high_mix', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);
