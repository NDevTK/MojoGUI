// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/capture_handle_config.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.CaptureHandleConfigSpec = { $: {} };

// Struct: CaptureHandleConfig
mojo.internal.Struct(
    blink.mojom.CaptureHandleConfigSpec, 'blink.mojom.CaptureHandleConfig', [
      mojo.internal.StructField('expose_origin', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('capture_handle', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('all_origins_permitted', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('permitted_origins', 24, 0, mojo.internal.Array(url.mojom.OriginSpec, false), null, false, 0, undefined),
    ],
    [[0, 40]]);
