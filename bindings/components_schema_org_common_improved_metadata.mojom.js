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
      packedSize: 16,
      fields: [
        { name: 'entity_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
