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
      packedSize: 40,
      fields: [
        { name: 'latest_filter_list_result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FilterListResultSpec, nullable: false },
        { name: 'most_restrictive_filter_list_result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FilterListResultSpec, nullable: false },
        { name: 'created_by_ad_script', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.FrameCreationStackEvidenceSpec, nullable: false },
        { name: 'is_complete', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'parent_is_ad', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
