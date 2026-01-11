// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/context_result.mojom
// Module: gpu.mojom

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};

gpu.mojom.ContextResultSpec = { $: mojo.internal.Enum() };

// Enum: ContextResult
gpu.mojom.ContextResult = {
  Success: 0,
  TransientFailure: 1,
  FatalFailure: 2,
  SurfaceFailure: 3,
};
