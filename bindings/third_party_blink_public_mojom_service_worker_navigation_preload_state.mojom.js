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
        { name: 'header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
