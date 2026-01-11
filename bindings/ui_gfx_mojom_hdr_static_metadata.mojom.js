// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/hdr_static_metadata.mojom
// Module: gfx.mojom

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.HDRStaticMetadataSpec = { $: {} };

// Struct: HDRStaticMetadata
mojo.internal.Struct(
    gfx.mojom.HDRStaticMetadataSpec, 'gfx.mojom.HDRStaticMetadata', [
      mojo.internal.StructField('max', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('max_avg', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('min', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('supported_eotf_mask', 12, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);
