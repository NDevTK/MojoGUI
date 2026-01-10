// Auto-generated MojoJS binding
// Source: chromium_src/components/schema_org/common/metadata.mojom
// Module: schema_org.mojom

'use strict';

// Module namespace
var schema_org = schema_org || {};
schema_org.mojom = schema_org.mojom || {};


// Union: Values
schema_org.mojom.ValuesSpec = { $: mojo.internal.Union(
    'schema_org.mojom.Values', {
      'bool_values': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Bool, false),
      }},
      'long_values': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Int64, false),
      }},
      'string_values': {
        'ordinal': 2,
        'type': mojo.internal.Array(mojo.internal.String, false),
      }},
      'entity_values': {
        'ordinal': 3,
        'type': mojo.internal.Array(schema_org.mojom.EntitySpec, false),
      }},
    })
};

// Struct: Property
schema_org.mojom.PropertySpec = {
  $: {
    structSpec: {
      name: 'schema_org.mojom.Property',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: schema_org.mojom.ValuesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'properties', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(schema_org.mojom.PropertySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
