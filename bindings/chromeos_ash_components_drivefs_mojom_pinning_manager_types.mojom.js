// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/drivefs/mojom/pinning_manager_types.mojom
// Module: drivefs.pinning_manager_types.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var drivefs = drivefs || {};
drivefs.pinning_manager_types = drivefs.pinning_manager_types || {};
drivefs.pinning_manager_types.mojom = drivefs.pinning_manager_types.mojom || {};

drivefs.pinning_manager_types.mojom.StageSpec = { $: mojo.internal.Enum() };

// Enum: Stage
drivefs.pinning_manager_types.mojom.Stage = {
  kStopped: 0,
  kPausedOffline: 1,
  kPausedBatterySaver: 2,
  kGettingFreeSpace: 3,
  kListingFiles: 4,
  kSyncing: 5,
  kSuccess: 6,
  kNotEnoughSpace: 7,
  kCannotGetFreeSpace: 8,
  kCannotListFiles: 9,
  kCannotEnableDocsOffline: 10,
};
