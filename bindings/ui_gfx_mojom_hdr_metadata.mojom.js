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
        { name: 'max_frame_average_light_level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'luminance_min', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'nits', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
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
        { name: 'desired_headroom', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'agtm_serialized', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
