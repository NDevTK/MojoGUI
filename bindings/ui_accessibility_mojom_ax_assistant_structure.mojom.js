// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_assistant_structure.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Struct: AssistantTree
ax.mojom.mojom.AssistantTreeSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AssistantTree',
      packedSize: 16,
      fields: [
        { name: 'nodes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.AssistantNodeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AssistantNode
ax.mojom.mojom.AssistantNodeSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AssistantNode',
      packedSize: 72,
      fields: [
        { name: 'children_indices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'text_size', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'bgcolor', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'bold', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'italic', packedOffset: 60, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'underline', packedOffset: 60, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'line_through', packedOffset: 60, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'selection', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: true, minVersion: 0 },
        { name: 'class_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'role', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: AssistantExtra
ax.mojom.mojom.AssistantExtraSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AssistantExtra',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'bounds_pixel', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AssistantStructure
ax.mojom.mojom.AssistantStructureSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AssistantStructure',
      packedSize: 24,
      fields: [
        { name: 'assistant_tree', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AssistantTreeSpec, nullable: true, minVersion: 0 },
        { name: 'assistant_extra', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.AssistantExtraSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
