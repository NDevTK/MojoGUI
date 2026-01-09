// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_node_data.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Struct: AXBitsetData
ax.mojom.AXBitsetDataSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXBitsetData',
      packedSize: 16,
      fields: [
        { name: 'set_bits', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'values', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AXNodeData
ax.mojom.AXNodeDataSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXNodeData',
      packedSize: 112,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'role', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.RoleSpec, nullable: false },
        { name: 'state', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'actions', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'string_attributes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'int_attributes', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'float_attributes', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'intlist_attributes', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'stringlist_attributes', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'html_attributes', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'child_ids', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'relative_bounds', packedOffset: 88, packedBitOffset: 0, type: ax.mojom.AXRelativeBoundsSpec, nullable: false },
        { name: 'bool_attributes_data', packedOffset: 96, packedBitOffset: 0, type: ax.mojom.AXBitsetDataSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
