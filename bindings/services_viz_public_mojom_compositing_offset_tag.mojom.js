// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/offset_tag.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: OffsetTag
viz.mojom.OffsetTagSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.OffsetTag',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: OffsetTagValue
viz.mojom.OffsetTagValueSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.OffsetTagValue',
      packedSize: 24,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.OffsetTagSpec, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OffsetTagDefinition
viz.mojom.OffsetTagDefinitionSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.OffsetTagDefinition',
      packedSize: 40,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.OffsetTagSpec, nullable: false, minVersion: 0 },
        { name: 'provider', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.SurfaceRangeSpec, nullable: false, minVersion: 0 },
        { name: 'min_offset', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'max_offset', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
