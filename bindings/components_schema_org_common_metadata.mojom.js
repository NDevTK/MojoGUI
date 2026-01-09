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
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
