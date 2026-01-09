// Auto-generated MojoJS binding
// Source: chromium_src/components/schema_org/common/metadata.mojom
// Module: schema_org.mojom

'use strict';

// Module namespace
var schema_org = schema_org || {};
schema_org.mojom = schema_org.mojom || {};


// Struct: Property
schema_org.mojom.PropertySpec = {
  $: {
    structSpec: {
      name: 'schema_org.mojom.Property',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'values', packedOffset: 16, packedBitOffset: 0, type: schema_org.mojom.ValuesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Entity
schema_org.mojom.EntitySpec = {
  $: {
    structSpec: {
      name: 'schema_org.mojom.Entity',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'properties', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
