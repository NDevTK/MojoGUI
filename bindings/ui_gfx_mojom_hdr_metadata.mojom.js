// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/hdr_metadata.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var skia = skia || {};

gfx.mojom.HdrMetadataCta861_3Spec = { $: {} };
gfx.mojom.HdrMetadataSmpteSt2086Spec = { $: {} };
gfx.mojom.HdrMetadataNdwlSpec = { $: {} };
gfx.mojom.HdrMetadataExtendedRangeSpec = { $: {} };
gfx.mojom.HDRMetadataSpec = { $: {} };

// Struct: HdrMetadataCta861_3
mojo.internal.Struct(
    gfx.mojom.HdrMetadataCta861_3Spec, 'gfx.mojom.HdrMetadataCta861_3', [
      mojo.internal.StructField('max_content_light_level', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_frame_average_light_level', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HdrMetadataSmpteSt2086
mojo.internal.Struct(
    gfx.mojom.HdrMetadataSmpteSt2086Spec, 'gfx.mojom.HdrMetadataSmpteSt2086', [
      mojo.internal.StructField('primaries', 0, 0, skia.mojom.SkColorSpacePrimariesSpec, null, false, 0, undefined),
      mojo.internal.StructField('luminance_max', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('luminance_min', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HdrMetadataNdwl
mojo.internal.Struct(
    gfx.mojom.HdrMetadataNdwlSpec, 'gfx.mojom.HdrMetadataNdwl', [
      mojo.internal.StructField('nits', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HdrMetadataExtendedRange
mojo.internal.Struct(
    gfx.mojom.HdrMetadataExtendedRangeSpec, 'gfx.mojom.HdrMetadataExtendedRange', [
      mojo.internal.StructField('current_headroom', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('desired_headroom', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HDRMetadata
mojo.internal.Struct(
    gfx.mojom.HDRMetadataSpec, 'gfx.mojom.HDRMetadata', [
      mojo.internal.StructField('smpte_st_2086', 0, 0, gfx.mojom.HdrMetadataSmpteSt2086Spec, null, true, 0, undefined),
      mojo.internal.StructField('cta_861_3', 8, 0, gfx.mojom.HdrMetadataCta861_3Spec, null, true, 0, undefined),
      mojo.internal.StructField('ndwl', 16, 0, gfx.mojom.HdrMetadataNdwlSpec, null, true, 0, undefined),
      mojo.internal.StructField('extended_range', 24, 0, gfx.mojom.HdrMetadataExtendedRangeSpec, null, true, 0, undefined),
      mojo.internal.StructField('agtm_serialized', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 48]]);
