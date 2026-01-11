// Auto-generated MojoJS binding
// Source: chromium_src/ash/public/mojom/accelerator_configuration.mojom
// Module: ash.mojom

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};

ash.mojom.AcceleratorConfigResultSpec = { $: mojo.internal.Enum() };

// Enum: AcceleratorConfigResult
ash.mojom.AcceleratorConfigResult = {
  kSuccess: 0,
  kActionLocked: 1,
  kAcceleratorLocked: 2,
  kConflict: 3,
  kConflictCanOverride: 4,
  kNotFound: 5,
  kKeyNotAllowed: 6,
  kMissingModifier: 7,
  kShiftOnlyNotAllowed: 8,
  kMaximumAcceleratorsReached: 9,
  kRestoreSuccessWithConflicts: 10,
  kNonSearchAcceleratorWarning: 11,
  kSearchWithFunctionKeyNotAllowed: 12,
  kReservedKeyNotAllowed: 13,
  kNonStandardWithSearch: 14,
  kBlockQuickInsert: 15,
};
