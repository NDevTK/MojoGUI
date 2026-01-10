// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/messaging/user_activation_snapshot.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.UserActivationSnapshotSpec = { $: {} };

// Struct: UserActivationSnapshot
mojo.internal.Struct(
    blink.mojom.UserActivationSnapshotSpec, 'blink.mojom.UserActivationSnapshot', [
      mojo.internal.StructField('has_been_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('was_active', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
