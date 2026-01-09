// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ad_tagging/ad_evidence.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: FilterListResult
blink.mojom.FilterListResult = {
  kNotChecked: 0,
  kMatchedAllowingRule: 1,
  kMatchedNoRules: 2,
  kMatchedBlockingRule: 3,
};

// Enum: FrameCreationStackEvidence
blink.mojom.FrameCreationStackEvidence = {
  kNotCreatedByAdScript: 0,
  kCreatedByAdScript: 1,
};

// Struct: FrameAdEvidence
blink.mojom.FrameAdEvidenceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameAdEvidence',
      packedSize: 16,
      fields: [
        { name: 'kNotCreatedByAdScript', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
