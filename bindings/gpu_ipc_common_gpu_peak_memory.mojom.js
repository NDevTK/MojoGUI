// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_peak_memory.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};

gpu.mojom.GpuPeakMemoryAllocationSourceSpec = { $: mojo.internal.Enum() };

// Enum: GpuPeakMemoryAllocationSource
gpu.mojom.GpuPeakMemoryAllocationSource = {
  UNKNOWN: 0,
  COMMAND_BUFFER: 1,
  SHARED_CONTEXT_STATE: 2,
  SHARED_IMAGE_STUB: 3,
  SKIA: 4,
};
