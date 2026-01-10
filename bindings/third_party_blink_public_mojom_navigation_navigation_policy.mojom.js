// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/navigation_policy.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: NavigationDownloadTypes
blink.mojom.mojom.NavigationDownloadTypesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NavigationDownloadTypes',
      packedSize: 16,
      fields: [
        { name: 'view_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'interstitial', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'opener_cross_origin', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ad_frame_no_gesture', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ad_frame', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sandbox', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'no_gesture', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: NavigationDownloadPolicy
blink.mojom.mojom.NavigationDownloadPolicySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NavigationDownloadPolicy',
      packedSize: 24,
      fields: [
        { name: 'observed_types', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.NavigationDownloadTypesSpec, nullable: false, minVersion: 0 },
        { name: 'disallowed_types', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.NavigationDownloadTypesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
