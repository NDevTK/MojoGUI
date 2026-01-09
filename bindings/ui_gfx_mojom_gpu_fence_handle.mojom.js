// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/gpu_fence_handle.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: GpuFenceHandle
gfx.mojom.GpuFenceHandleSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.GpuFenceHandle',
      packedSize: 24,
      fields: [
        { name: 'native_fd', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'native_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
