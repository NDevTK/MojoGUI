// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/navigation_policy.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: NavigationDownloadTypes
blink.mojom.NavigationDownloadTypesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NavigationDownloadTypes',
      packedSize: 16,
      fields: [
        { name: 'view_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'interstitial', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'opener_cross_origin', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'ad_frame_no_gesture', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'ad_frame', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'sandbox', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'no_gesture', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NavigationDownloadPolicy
blink.mojom.NavigationDownloadPolicySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NavigationDownloadPolicy',
      packedSize: 24,
      fields: [
        { name: 'observed_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'disallowed_types', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
