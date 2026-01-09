// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_assistant_structure.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Struct: AssistantTree
ax.mojom.AssistantTreeSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AssistantTree',
      packedSize: 16,
      fields: [
        { name: 'nodes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AssistantNode
ax.mojom.AssistantNodeSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AssistantNode',
      packedSize: 80,
      fields: [
        { name: 'children_indices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'text', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'text_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'color', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'bgcolor', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'bold', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'italic', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'underline', packedOffset: 36, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'line_through', packedOffset: 36, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'selection', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: true },
        { name: 'class_name', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'role', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AssistantExtra
ax.mojom.AssistantExtraSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AssistantExtra',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'bounds_pixel', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AssistantStructure
ax.mojom.AssistantStructureSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AssistantStructure',
      packedSize: 24,
      fields: [
        { name: 'assistant_tree', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AssistantTreeSpec, nullable: true },
        { name: 'assistant_extra', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.AssistantExtraSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
