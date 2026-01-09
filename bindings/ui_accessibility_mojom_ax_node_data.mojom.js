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
        { name: 'set_bits', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'values', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AXNodeData
ax.mojom.AXNodeDataSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXNodeData',
      packedSize: 104,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'role', packedOffset: 4, packedBitOffset: 0, type: ax.mojom.RoleSpec, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'actions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'string_attributes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(ax.mojom.StringAttributeSpec, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'int_attributes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map(ax.mojom.IntAttributeSpec, mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'float_attributes', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map(ax.mojom.FloatAttributeSpec, mojo.internal.Float, false), nullable: false, minVersion: 0 },
        { name: 'intlist_attributes', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map(ax.mojom.IntListAttributeSpec, mojo.internal.Array(mojo.internal.Int32, false), false), nullable: false, minVersion: 0 },
        { name: 'stringlist_attributes', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Map(ax.mojom.StringListAttributeSpec, mojo.internal.Array(mojo.internal.String, false), false), nullable: false, minVersion: 0 },
        { name: 'html_attributes', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'child_ids', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'relative_bounds', packedOffset: 80, packedBitOffset: 0, type: ax.mojom.AXRelativeBoundsSpec, nullable: false, minVersion: 0 },
        { name: 'bool_attributes_data', packedOffset: 88, packedBitOffset: 0, type: ax.mojom.AXBitsetDataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};
