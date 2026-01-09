// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/hdr_metadata.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: HdrMetadataCta861_3
gfx.mojom.HdrMetadataCta861_3Spec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.HdrMetadataCta861_3',
      packedSize: 16,
      fields: [
        { name: 'max_content_light_level', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'max_frame_average_light_level', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HdrMetadataSmpteSt2086
gfx.mojom.HdrMetadataSmpteSt2086Spec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.HdrMetadataSmpteSt2086',
      packedSize: 24,
      fields: [
        { name: 'primaries', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColorSpacePrimariesSpec, nullable: false },
        { name: 'luminance_max', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'luminance_min', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HdrMetadataNdwl
gfx.mojom.HdrMetadataNdwlSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.HdrMetadataNdwl',
      packedSize: 16,
      fields: [
        { name: 'nits', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HdrMetadataExtendedRange
gfx.mojom.HdrMetadataExtendedRangeSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.HdrMetadataExtendedRange',
      packedSize: 16,
      fields: [
        { name: 'current_headroom', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'desired_headroom', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HDRMetadata
gfx.mojom.HDRMetadataSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.HDRMetadata',
      packedSize: 48,
      fields: [
        { name: 'smpte_st_2086', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.HdrMetadataSmpteSt2086Spec, nullable: true },
        { name: 'cta_861_3', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.HdrMetadataCta861_3Spec, nullable: true },
        { name: 'ndwl', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.HdrMetadataNdwlSpec, nullable: true },
        { name: 'extended_range', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.HdrMetadataExtendedRangeSpec, nullable: true },
        { name: 'agtm_serialized', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
