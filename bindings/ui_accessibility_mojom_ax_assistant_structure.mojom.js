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
      packedSize: 16,
      fields: [
        { name: 'role', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'assistant_extra', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
