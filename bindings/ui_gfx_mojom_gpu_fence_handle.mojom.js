// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/gpu_fence_handle.mojom
// Module: gfx.mojom

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.GpuFenceHandleSpec = { $: {} };

// Struct: GpuFenceHandle
mojo.internal.Struct(
    gfx.mojom.GpuFenceHandleSpec, 'gfx.mojom.GpuFenceHandle', [
      mojo.internal.StructField('native_fd', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('native_handle', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);
