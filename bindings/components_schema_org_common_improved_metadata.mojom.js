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
        { name: 'bool_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Bool, false), nullable: false, minVersion: 0 },
        { name: 'long_values', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
        { name: 'string_values', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'double_values', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Double, false), nullable: false, minVersion: 0 },
        { name: 'date_time_values', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.TimeSpec, false), nullable: false, minVersion: 0 },
        { name: 'time_values', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.TimeDeltaSpec, false), nullable: false, minVersion: 0 },
        { name: 'url_values', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'entity_values', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(schema_org.improved.mojom.EntitySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
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
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'values', packedOffset: 8, packedBitOffset: 0, type: schema_org.improved.mojom.ValuesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'properties', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(schema_org.improved.mojom.PropertySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
