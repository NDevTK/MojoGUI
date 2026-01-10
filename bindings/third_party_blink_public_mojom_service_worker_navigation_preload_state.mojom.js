// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/navigation_preload_state.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: NavigationPreloadState
blink.mojom.NavigationPreloadStateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NavigationPreloadState',
      packedSize: 24,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'header', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
