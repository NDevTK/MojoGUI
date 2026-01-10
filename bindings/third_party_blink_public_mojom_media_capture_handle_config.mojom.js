// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/capture_handle_config.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.CaptureHandleConfigSpec = { $: {} };

// Struct: CaptureHandleConfig
mojo.internal.Struct(
    blink.mojom.CaptureHandleConfigSpec, 'blink.mojom.CaptureHandleConfig', [
      mojo.internal.StructField('capture_handle', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('permitted_origins', 8, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('expose_origin', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('all_origins_permitted', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);
