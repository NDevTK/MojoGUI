// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest_launch_handler.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ClientModeSpec = { $: mojo.internal.Enum() };
blink.mojom.ManifestLaunchHandlerSpec = { $: {} };

// Enum: ClientMode
blink.mojom.ClientMode = {
  kAuto: 0,
  kNavigateNew: 1,
  kNavigateExisting: 2,
  kFocusExisting: 3,
};

// Struct: ManifestLaunchHandler
mojo.internal.Struct(
    blink.mojom.ManifestLaunchHandlerSpec, 'blink.mojom.ManifestLaunchHandler', [
      mojo.internal.StructField('kAuto', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);
