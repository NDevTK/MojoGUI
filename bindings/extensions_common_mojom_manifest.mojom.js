// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/manifest.mojom
// Module: extensions.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};

extensions.mojom.ManifestLocationSpec = { $: mojo.internal.Enum() };

// Enum: ManifestLocation
extensions.mojom.ManifestLocation = {
  kInvalidLocation: 0,
  kInternal: 1,
  kExternalPref: 2,
  kExternalRegistry: 3,
  kUnpacked: 4,
  kComponent: 5,
  kExternalPrefDownload: 6,
  kExternalPolicyDownload: 7,
  kCommandLine: 8,
  kExternalPolicy: 9,
  kExternalComponent: 10,
};
