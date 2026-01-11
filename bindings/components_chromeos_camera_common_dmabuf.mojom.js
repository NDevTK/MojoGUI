// Auto-generated MojoJS binding
// Source: chromium_src/components/chromeos_camera/common/dmabuf.mojom
// Module: chromeos_camera.mojom

// Module namespace
var chromeos_camera = chromeos_camera || {};
chromeos_camera.mojom = chromeos_camera.mojom || {};
var media = media || {};

chromeos_camera.mojom.DmaBufPlaneSpec = { $: {} };
chromeos_camera.mojom.DmaBufVideoFrameSpec = { $: {} };

// Struct: DmaBufPlane
mojo.internal.Struct(
    chromeos_camera.mojom.DmaBufPlaneSpec, 'chromeos_camera.mojom.DmaBufPlane', [
      mojo.internal.StructField('fd_handle', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('stride', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DmaBufVideoFrame
mojo.internal.Struct(
    chromeos_camera.mojom.DmaBufVideoFrameSpec, 'chromeos_camera.mojom.DmaBufVideoFrame', [
      mojo.internal.StructField('format', 0, 0, media.mojom.VideoPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('planes', 8, 0, mojo.internal.Array(chromeos_camera.mojom.DmaBufPlaneSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('coded_width', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('coded_height', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('modifier', 24, 0, mojo.internal.Uint64, 0, false, 1, undefined),
      mojo.internal.StructField('has_modifier', 32, 0, mojo.internal.Bool, false, false, 1, undefined),
    ],
    [[0, 32], [1, 48]]);
