// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/capture_handle.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

media.mojom.CaptureHandleSpec = { $: {} };

// Struct: CaptureHandle
mojo.internal.Struct(
    media.mojom.CaptureHandleSpec, 'media.mojom.CaptureHandle', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capture_handle', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
