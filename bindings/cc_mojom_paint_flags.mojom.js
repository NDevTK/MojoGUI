// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/paint_flags.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};


// Enum: FilterQuality
cc.mojom.FilterQuality = {
  kNone: 0,
  kLow: 1,
  kMedium: 2,
  kHigh: 3,
};

// Struct: DynamicRangeLimit
cc.mojom.DynamicRangeLimitSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.DynamicRangeLimit',
      packedSize: 16,
      fields: [
        { name: 'standard_mix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'constrained_high_mix', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
