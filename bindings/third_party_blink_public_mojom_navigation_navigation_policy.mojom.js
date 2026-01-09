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
        { name: 'no_gesture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'disallowed_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
