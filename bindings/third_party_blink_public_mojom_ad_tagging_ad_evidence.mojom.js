// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ad_tagging/ad_evidence.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FilterListResultSpec = { $: mojo.internal.Enum() };
blink.mojom.FrameCreationStackEvidenceSpec = { $: mojo.internal.Enum() };
blink.mojom.FrameAdEvidenceSpec = { $: {} };

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
mojo.internal.Struct(
    blink.mojom.FrameAdEvidenceSpec, 'blink.mojom.FrameAdEvidence', [
      mojo.internal.StructField('is_complete', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('parent_is_ad', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('latest_filter_list_result', 4, 0, blink.mojom.FilterListResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('most_restrictive_filter_list_result', 8, 0, blink.mojom.FilterListResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('created_by_ad_script', 12, 0, blink.mojom.FrameCreationStackEvidenceSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);
