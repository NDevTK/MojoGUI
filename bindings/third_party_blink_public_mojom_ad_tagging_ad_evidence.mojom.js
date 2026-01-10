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
blink.mojom.FilterListResultSpec = { $: mojo.internal.Enum() };

// Enum: FrameCreationStackEvidence
blink.mojom.FrameCreationStackEvidence = {
  kNotCreatedByAdScript: 0,
  kCreatedByAdScript: 1,
};
blink.mojom.FrameCreationStackEvidenceSpec = { $: mojo.internal.Enum() };

// Struct: FrameAdEvidence
blink.mojom.FrameAdEvidenceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameAdEvidence',
      packedSize: 24,
      fields: [
        { name: 'is_complete', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'parent_is_ad', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'latest_filter_list_result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FilterListResultSpec, nullable: false, minVersion: 0 },
        { name: 'most_restrictive_filter_list_result', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.FilterListResultSpec, nullable: false, minVersion: 0 },
        { name: 'created_by_ad_script', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FrameCreationStackEvidenceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
