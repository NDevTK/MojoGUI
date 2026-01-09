// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/native_handle_types.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: NativePixmapPlane
gfx.mojom.NativePixmapPlaneSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.NativePixmapPlane',
      packedSize: 40,
      fields: [
        { name: 'stride', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'buffer_handle', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NativePixmapHandle
gfx.mojom.NativePixmapHandleSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.NativePixmapHandle',
      packedSize: 56,
      fields: [
        { name: 'planes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'modifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'supports_zero_copy_webgpu_import', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'buffer_collection_handle', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'buffer_index', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ram_coherency', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AHardwareBufferHandle
gfx.mojom.AHardwareBufferHandleSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.AHardwareBufferHandle',
      packedSize: 24,
      fields: [
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'tracking_pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DXGIHandleToken
gfx.mojom.DXGIHandleTokenSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.DXGIHandleToken',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DXGIHandle
gfx.mojom.DXGIHandleSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.DXGIHandle',
      packedSize: 32,
      fields: [
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.DXGIHandleTokenSpec, nullable: false },
        { name: 'shared_memory_handle', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IOSurfaceHandle
gfx.mojom.IOSurfaceHandleSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.IOSurfaceHandle',
      packedSize: 40,
      fields: [
        { name: 'mach_send_right', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'shared_memory_handle', packedOffset: 8, packedBitOffset: 0, type: [EnableIf=is_ios] mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false },
        { name: 'plane_strides', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'plane_offsets', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
