// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/buffer_types.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

gfx.mojom.BufferFormatSpec = { $: mojo.internal.Enum() };
gfx.mojom.BufferUsageSpec = { $: mojo.internal.Enum() };
gfx.mojom.GpuMemoryBufferIdSpec = { $: {} };
gfx.mojom.GpuMemoryBufferHandleSpec = { $: {} };

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

// Struct: GpuMemoryBufferId
mojo.internal.Struct(
    gfx.mojom.GpuMemoryBufferIdSpec, 'gfx.mojom.GpuMemoryBufferId', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GpuMemoryBufferHandle
mojo.internal.Struct(
    gfx.mojom.GpuMemoryBufferHandleSpec, 'gfx.mojom.GpuMemoryBufferHandle', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('stride', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('platform_handle', 8, 0, gfx.mojom.GpuMemoryBufferPlatformHandleSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);
