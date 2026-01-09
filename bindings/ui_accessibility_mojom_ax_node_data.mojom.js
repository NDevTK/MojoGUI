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
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'bool_attributes_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
