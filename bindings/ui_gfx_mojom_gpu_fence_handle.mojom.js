// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/gpu_fence_handle.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: GpuFenceHandle
gfx.mojom.mojom.GpuFenceHandleSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.GpuFenceHandle',
      packedSize: 24,
      fields: [
        { name: 'native_fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'native_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
