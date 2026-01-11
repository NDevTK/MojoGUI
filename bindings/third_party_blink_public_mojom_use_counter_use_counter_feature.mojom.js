// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/use_counter/use_counter_feature.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.UseCounterFeatureTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.UseCounterFeatureSpec = { $: {} };

// Enum: UseCounterFeatureType
blink.mojom.UseCounterFeatureType = {
  kWebFeature: 0,
  kCssProperty: 1,
  kAnimatedCssProperty: 2,
  kPermissionsPolicyViolationEnforce: 3,
  kPermissionsPolicyIframeAttribute: 4,
  kPermissionsPolicyHeader: 5,
  kWebDXFeature: 6,
  kPermissionsPolicyEnabledPrivacySensitive: 7,
};

// Struct: UseCounterFeature
mojo.internal.Struct(
    blink.mojom.UseCounterFeatureSpec, 'blink.mojom.UseCounterFeature', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.UseCounterFeatureTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);
