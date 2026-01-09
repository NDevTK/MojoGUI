// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/javascript_framework_detection.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: JavaScriptFramework
blink.mojom.JavaScriptFramework = {
  kNuxt: 0,
  kVuePress: 1,
  kSapper: 2,
  kGatsby: 3,
  kNext: 4,
  kAngular: 5,
  kVue: 6,
  kSvelte: 7,
  kPreact: 8,
  kReact: 9,
  kDrupal: 10,
  kJoomla: 11,
  kShopify: 12,
  kSquarespace: 13,
  kWix: 14,
  kWordPress: 15,
};

// Struct: JavaScriptFrameworkDetectionResult
blink.mojom.JavaScriptFrameworkDetectionResultSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.JavaScriptFrameworkDetectionResult',
      packedSize: 16,
      fields: [
        { name: 'detected_versions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
