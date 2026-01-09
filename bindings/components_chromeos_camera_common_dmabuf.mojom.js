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
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'modifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
