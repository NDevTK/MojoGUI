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
      packedSize: 16,
      fields: [
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'ram_coherency', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'tracking_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'shared_memory_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'plane_offsets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
