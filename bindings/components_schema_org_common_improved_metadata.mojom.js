// Auto-generated MojoJS binding
// Source: chromium_src/components/schema_org/common/improved_metadata.mojom
// Module: schema_org.improved.mojom

'use strict';

// Module namespace
var schema_org = schema_org || {};
schema_org.improved = schema_org.improved || {};
schema_org.improved.mojom = schema_org.improved.mojom || {};


// Struct: Values
schema_org.improved.mojom.ValuesSpec = {
  $: {
    structSpec: {
      name: 'schema_org.improved.mojom.Values',
      packedSize: 72,
      fields: [
        { name: 'bool_values', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'long_values', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'string_values', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'double_values', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'date_time_values', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'time_values', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'url_values', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'entity_values', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Property
schema_org.improved.mojom.PropertySpec = {
  $: {
    structSpec: {
      name: 'schema_org.improved.mojom.Property',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'values', packedOffset: 16, packedBitOffset: 0, type: schema_org.improved.mojom.ValuesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Entity
schema_org.improved.mojom.EntitySpec = {
  $: {
    structSpec: {
      name: 'schema_org.improved.mojom.Entity',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'properties', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
