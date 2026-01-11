// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/generic_pending_receiver.mojom
// Module: mojo_base.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.GenericPendingReceiverSpec = { $: {} };

// Struct: GenericPendingReceiver
mojo.internal.Struct(
    mojo_base.mojom.GenericPendingReceiverSpec, 'mojo_base.mojom.GenericPendingReceiver', [
      mojo.internal.StructField('interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiving_pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);
