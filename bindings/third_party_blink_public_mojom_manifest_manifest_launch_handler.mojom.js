// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest_launch_handler.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ClientMode
blink.mojom.ClientMode = {
  kAuto: 0,
  kNavigateNew: 1,
  kNavigateExisting: 2,
  kFocusExisting: 3,
};
blink.mojom.ClientModeSpec = { $: mojo.internal.Enum() };

// Struct: ManifestLaunchHandler
blink.mojom.ManifestLaunchHandlerSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestLaunchHandler',
      packedSize: 16,
      fields: [
        { name: 'kAuto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
