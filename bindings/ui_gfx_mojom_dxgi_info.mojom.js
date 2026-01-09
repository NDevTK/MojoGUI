// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/dxgi_info.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: DXGIOutputDesc
gfx.mojom.DXGIOutputDescSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.DXGIOutputDesc',
      packedSize: 48,
      fields: [
        { name: 'device_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'primaries', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'min_luminance', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'max_luminance', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'max_full_frame_luminance', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'hdr_enabled', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DXGIInfo
gfx.mojom.DXGIInfoSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.DXGIInfo',
      packedSize: 16,
      fields: [
        { name: 'output_descs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
