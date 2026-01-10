// Auto-generated MojoJS binding
// Source: chromium_src/components/schema_org/common/metadata.mojom
// Module: schema_org.mojom

'use strict';

// Module namespace
var schema_org = schema_org || {};
schema_org.mojom = schema_org.mojom || {};

schema_org.mojom.ValuesSpec = { $: {} };
schema_org.mojom.PropertySpec = { $: {} };
schema_org.mojom.EntitySpec = { $: {} };

// Union: Values
mojo.internal.Union(
    schema_org.mojom.ValuesSpec, 'schema_org.mojom.Values', {
      'bool_values': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Bool, false),
        'nullable': false,
      },
      'long_values': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Int64, false),
        'nullable': false,
      },
      'string_values': {
        'ordinal': 2,
        'type': mojo.internal.Array(mojo.internal.String, false),
        'nullable': false,
      },
      'entity_values': {
        'ordinal': 3,
        'type': mojo.internal.Array(schema_org.mojom.EntitySpec, false),
        'nullable': false,
      },
    });

// Struct: Property
mojo.internal.Struct(
    schema_org.mojom.PropertySpec, 'schema_org.mojom.Property', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('values', 8, 0, schema_org.mojom.ValuesSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Entity
mojo.internal.Struct(
    schema_org.mojom.EntitySpec, 'schema_org.mojom.Entity', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('properties', 8, 0, mojo.internal.Array(schema_org.mojom.PropertySpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
