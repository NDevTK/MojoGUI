// Auto-generated MojoJS binding
// Source: chromium_src/components/chromeos_camera/common/dmabuf.mojom
// Module: chromeos_camera.mojom

'use strict';

// Module namespace
var chromeos_camera = chromeos_camera || {};
chromeos_camera.mojom = chromeos_camera.mojom || {};


// Struct: DmaBufPlane
chromeos_camera.mojom.mojom.DmaBufPlaneSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.DmaBufPlane',
      packedSize: 24,
      fields: [
        { name: 'fd_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'stride', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DmaBufVideoFrame
chromeos_camera.mojom.mojom.DmaBufVideoFrameSpec = {
  $: {
    structSpec: {
      name: 'chromeos_camera.mojom.DmaBufVideoFrame',
      packedSize: 48,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'coded_width', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'coded_height', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'planes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(chromeos_camera.mojom.DmaBufPlaneSpec, false), nullable: false, minVersion: 0 },
        { name: 'has_modifier', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
        { name: 'modifier', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 1, packedSize: 48}]
    }
  }
};
