// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/stable/native_pixmap_handle.mojom
// Module: media.stable.mojom

// Module namespace
var media = media || {};
media.stable = media.stable || {};
media.stable.mojom = media.stable.mojom || {};

media.stable.mojom.NativePixmapPlaneSpec = { $: {} };
media.stable.mojom.NativePixmapHandleSpec = { $: {} };

// Struct: NativePixmapPlane
mojo.internal.Struct(
    media.stable.mojom.NativePixmapPlaneSpec, 'media.stable.mojom.NativePixmapPlane', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('buffer_handle', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('stride', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: NativePixmapHandle
mojo.internal.Struct(
    media.stable.mojom.NativePixmapHandleSpec, 'media.stable.mojom.NativePixmapHandle', [
      mojo.internal.StructField('planes', 0, 0, mojo.internal.Array(media.stable.mojom.NativePixmapPlaneSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('modifier', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);
