// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/messaging/user_activation_snapshot.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: UserActivationSnapshot
blink.mojom.UserActivationSnapshotSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UserActivationSnapshot',
      packedSize: 16,
      fields: [
        { name: 'has_been_active', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'was_active', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
