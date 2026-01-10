// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/native_handle_types.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.GpuMemoryBufferPlatformHandleSpec = { $: {} };
gfx.mojom.NativePixmapPlaneSpec = { $: {} };
gfx.mojom.NativePixmapHandleSpec = { $: {} };
gfx.mojom.AHardwareBufferHandleSpec = { $: {} };
gfx.mojom.DXGIHandleTokenSpec = { $: {} };
gfx.mojom.DXGIHandleSpec = { $: {} };
gfx.mojom.IOSurfaceHandleSpec = { $: {} };

// Union: GpuMemoryBufferPlatformHandle
mojo.internal.Union(
    gfx.mojom.GpuMemoryBufferPlatformHandleSpec, 'gfx.mojom.GpuMemoryBufferPlatformHandle', {
      'shared_memory_handle': {
        'ordinal': 0,
        'type': mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$,
        'nullable': false,
      },
      'native_pixmap_handle': {
        'ordinal': 1,
        'type': gfx.mojom.NativePixmapHandleSpec.$,
        'nullable': false,
      },
      'io_surface_handle': {
        'ordinal': 2,
        'type': gfx.mojom.IOSurfaceHandleSpec.$,
        'nullable': false,
      },
      'dxgi_handle': {
        'ordinal': 3,
        'type': gfx.mojom.DXGIHandleSpec.$,
        'nullable': false,
      },
      'android_hardware_buffer_handle': {
        'ordinal': 4,
        'type': gfx.mojom.AHardwareBufferHandleSpec.$,
        'nullable': false,
      },
    });

// Struct: NativePixmapPlane
mojo.internal.Struct(
    gfx.mojom.NativePixmapPlaneSpec, 'gfx.mojom.NativePixmapPlane', [
      mojo.internal.StructField('stride', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('buffer_handle', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: NativePixmapHandle
mojo.internal.Struct(
    gfx.mojom.NativePixmapHandleSpec, 'gfx.mojom.NativePixmapHandle', [
      mojo.internal.StructField('planes', 0, 0, mojo.internal.Array(gfx.mojom.NativePixmapPlaneSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('modifier', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('supports_zero_copy_webgpu_import', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('buffer_collection_handle', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('buffer_index', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('ram_coherency', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: AHardwareBufferHandle
mojo.internal.Struct(
    gfx.mojom.AHardwareBufferHandleSpec, 'gfx.mojom.AHardwareBufferHandle', [
      mojo.internal.StructField('buffer_handle', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('tracking_pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DXGIHandleToken
mojo.internal.Struct(
    gfx.mojom.DXGIHandleTokenSpec, 'gfx.mojom.DXGIHandleToken', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DXGIHandle
mojo.internal.Struct(
    gfx.mojom.DXGIHandleSpec, 'gfx.mojom.DXGIHandle', [
      mojo.internal.StructField('buffer_handle', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, gfx.mojom.DXGIHandleTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_memory_handle', 16, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: IOSurfaceHandle
mojo.internal.Struct(
    gfx.mojom.IOSurfaceHandleSpec, 'gfx.mojom.IOSurfaceHandle', [
      mojo.internal.StructField('mach_send_right', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('shared_memory_handle', 8, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('plane_strides', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('plane_offsets', 24, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 40]]);
