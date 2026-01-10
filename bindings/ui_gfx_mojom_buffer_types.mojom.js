// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/buffer_types.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Enum: BufferFormat
gfx.mojom.BufferFormat = {
  R_8: 0,
  R_16: 1,
  RG_88: 2,
  RG_1616: 3,
  BGR_565: 4,
  RGBA_4444: 5,
  RGBX_8888: 6,
  RGBA_8888: 7,
  BGRX_8888: 8,
  BGRA_1010102: 9,
  RGBA_1010102: 10,
  BGRA_8888: 11,
  RGBA_F16: 12,
  YVU_420: 13,
  YUV_420_BIPLANAR: 14,
  YUVA_420_TRIPLANAR: 15,
  P010: 16,
};
gfx.mojom.BufferFormatSpec = { $: mojo.internal.Enum() };

// Enum: BufferUsage
gfx.mojom.BufferUsage = {
  GPU_READ: 0,
  SCANOUT: 1,
  SCANOUT_CAMERA_READ_WRITE: 2,
  CAMERA_AND_CPU_READ_WRITE: 3,
  SCANOUT_CPU_READ_WRITE: 4,
  SCANOUT_VDA_WRITE: 5,
  PROTECTED_SCANOUT: 6,
  PROTECTED_SCANOUT_VDA_WRITE: 7,
  GPU_READ_CPU_READ_WRITE: 8,
  SCANOUT_VEA_CPU_READ: 9,
  VEA_READ_CAMERA_AND_CPU_READ_WRITE: 10,
  SCANOUT_FRONT_RENDERING: 11,
};
gfx.mojom.BufferUsageSpec = { $: mojo.internal.Enum() };

// Struct: GpuMemoryBufferId
gfx.mojom.GpuMemoryBufferIdSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.GpuMemoryBufferId',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: GpuMemoryBufferHandle
gfx.mojom.GpuMemoryBufferHandleSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.GpuMemoryBufferHandle',
      packedSize: 32,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'stride', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'platform_handle', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferPlatformHandleSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
