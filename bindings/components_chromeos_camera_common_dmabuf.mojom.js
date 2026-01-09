// Auto-generated MojoJS binding
// Source: chromium_src/components/chromeos_camera/common/dmabuf.mojom
// Module: chromeos_camera.mojom

'use strict';

// Module namespace
var chromeos_camera = chromeos_camera || {};
chromeos_camera.mojom = chromeos_camera.mojom || {};


// Struct: DmaBufPlane
chromeos_camera.mojom.DmaBufPlaneSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.DmaBufPlane',
      packedSize: 24,
      fields: [
        { name: 'fd_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false },
        { name: 'stride', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'size', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DmaBufVideoFrame
chromeos_camera.mojom.DmaBufVideoFrameSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.DmaBufVideoFrame',
      packedSize: 32,
      fields: [
        { name: 'format', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VideoPixelFormatSpec, nullable: false },
        { name: 'coded_width', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'coded_height', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'planes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
