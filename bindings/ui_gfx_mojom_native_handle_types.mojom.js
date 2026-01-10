// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/native_handle_types.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Union: GpuMemoryBufferPlatformHandle
gfx.mojom.mojom.GpuMemoryBufferPlatformHandleSpec = { $: mojo.internal.Union(
    'gfx.mojom.GpuMemoryBufferPlatformHandle', {
      'shared_memory_handle': {
        'ordinal': 0,
        'type': mojo_base.mojom.UnsafeSharedMemoryRegionSpec,
      }},
      'native_pixmap_handle': {
        'ordinal': 1,
        'type': gfx.mojom.NativePixmapHandleSpec,
      }},
      'io_surface_handle': {
        'ordinal': 2,
        'type': gfx.mojom.IOSurfaceHandleSpec,
      }},
      'dxgi_handle': {
        'ordinal': 3,
        'type': gfx.mojom.DXGIHandleSpec,
      }},
      'android_hardware_buffer_handle': {
        'ordinal': 4,
        'type': gfx.mojom.AHardwareBufferHandleSpec,
      }},
    })
};

// Struct: NativePixmapPlane
gfx.mojom.mojom.NativePixmapPlaneSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.NativePixmapPlane',
      packedSize: 40,
      fields: [
        { name: 'stride', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'buffer_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: NativePixmapHandle
gfx.mojom.mojom.NativePixmapHandleSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.NativePixmapHandle',
      packedSize: 40,
      fields: [
        { name: 'planes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.NativePixmapPlaneSpec, false), nullable: false, minVersion: 0 },
        { name: 'modifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'supports_zero_copy_webgpu_import', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'buffer_collection_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'buffer_index', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'ram_coherency', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: AHardwareBufferHandle
gfx.mojom.mojom.AHardwareBufferHandleSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.AHardwareBufferHandle',
      packedSize: 24,
      fields: [
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'tracking_pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DXGIHandleToken
gfx.mojom.mojom.DXGIHandleTokenSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.DXGIHandleToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DXGIHandle
gfx.mojom.mojom.DXGIHandleSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.DXGIHandle',
      packedSize: 32,
      fields: [
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.DXGIHandleTokenSpec, nullable: false, minVersion: 0 },
        { name: 'shared_memory_handle', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: IOSurfaceHandle
gfx.mojom.mojom.IOSurfaceHandleSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.IOSurfaceHandle',
      packedSize: 40,
      fields: [
        { name: 'mach_send_right', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'shared_memory_handle', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'plane_strides', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'plane_offsets', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
