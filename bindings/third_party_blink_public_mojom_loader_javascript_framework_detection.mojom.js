// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/javascript_framework_detection.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.JavaScriptFrameworkSpec = { $: mojo.internal.Enum() };
blink.mojom.JavaScriptFrameworkDetectionResultSpec = { $: {} };

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
mojo.internal.Struct(
    blink.mojom.JavaScriptFrameworkDetectionResultSpec, 'blink.mojom.JavaScriptFrameworkDetectionResult', [
      mojo.internal.StructField('detected_versions', 0, 0, mojo.internal.Map(blink.mojom.JavaScriptFrameworkSpec.$, mojo.internal.Int16, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
