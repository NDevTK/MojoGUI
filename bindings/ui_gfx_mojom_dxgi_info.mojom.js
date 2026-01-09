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
      packedSize: 16,
      fields: [
        { name: 'max_full_frame_luminance', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
