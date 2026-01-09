// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/use_counter/use_counter_feature.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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
blink.mojom.UseCounterFeatureSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UseCounterFeature',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.UseCounterFeatureTypeSpec, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
