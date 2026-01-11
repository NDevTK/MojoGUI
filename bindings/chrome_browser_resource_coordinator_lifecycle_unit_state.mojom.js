// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/resource_coordinator/lifecycle_unit_state.mojom
// Module: mojom

// Module namespace
var mojom = mojom || {};

mojom.LifecycleUnitStateSpec = { $: mojo.internal.Enum() };
mojom.LifecycleUnitLoadingStateSpec = { $: mojo.internal.Enum() };
mojom.LifecycleUnitDiscardReasonSpec = { $: mojo.internal.Enum() };

// Enum: LifecycleUnitState
mojom.LifecycleUnitState = {
  ACTIVE: 0,
  FROZEN: 3,
  DISCARDED: 5,
};

// Enum: LifecycleUnitLoadingState
mojom.LifecycleUnitLoadingState = {
  UNLOADED: 0,
  LOADING: 1,
  LOADED: 2,
};

// Enum: LifecycleUnitDiscardReason
mojom.LifecycleUnitDiscardReason = {
  EXTERNAL: 0,
  URGENT: 1,
  PROACTIVE: 2,
  SUGGESTED: 3,
  FROZEN_WITH_GROWING_MEMORY: 4,
};
