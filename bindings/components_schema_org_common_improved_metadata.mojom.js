// Auto-generated MojoJS binding
// Source: chromium_src/components/schema_org/common/improved_metadata.mojom
// Module: schema_org.improved.mojom

'use strict';

// Module namespace
var schema_org = schema_org || {};
schema_org.improved = schema_org.improved || {};
schema_org.improved.mojom = schema_org.improved.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

schema_org.improved.mojom.ValuesSpec = { $: {} };
schema_org.improved.mojom.PropertySpec = { $: {} };
schema_org.improved.mojom.EntitySpec = { $: {} };

// Struct: Values
mojo.internal.Struct(
    schema_org.improved.mojom.ValuesSpec, 'schema_org.improved.mojom.Values', [
      mojo.internal.StructField('bool_values', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, false, 0, undefined),
      mojo.internal.StructField('long_values', 8, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('string_values', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('double_values', 24, 0, mojo.internal.Array(mojo.internal.Double, false), null, false, 0, undefined),
      mojo.internal.StructField('date_time_values', 32, 0, mojo.internal.Array(mojo_base.mojom.TimeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('time_values', 40, 0, mojo.internal.Array(mojo_base.mojom.TimeDeltaSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('url_values', 48, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('entity_values', 56, 0, mojo.internal.Array(schema_org.improved.mojom.EntitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: Property
mojo.internal.Struct(
    schema_org.improved.mojom.PropertySpec, 'schema_org.improved.mojom.Property', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('values', 8, 0, schema_org.improved.mojom.ValuesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Entity
mojo.internal.Struct(
    schema_org.improved.mojom.EntitySpec, 'schema_org.improved.mojom.Entity', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('properties', 16, 0, mojo.internal.Array(schema_org.improved.mojom.PropertySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);
