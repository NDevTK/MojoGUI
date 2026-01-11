// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/credentialmanagement/credential_type_flags.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.CredentialTypeFlagsSpec = { $: mojo.internal.Enum() };

// Enum: CredentialTypeFlags
blink.mojom.CredentialTypeFlags = {
  kNone: 0,
  kPassword: 1,
  kPublicKey: 2,
  kAll: -1,
};
