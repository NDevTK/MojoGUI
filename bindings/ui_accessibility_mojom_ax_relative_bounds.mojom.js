// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_relative_bounds.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: AXRelativeBounds
ax.mojom.AXRelativeBoundsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AXRelativeBounds',
      packedSize: 32,
      fields: [
        { name: 'offset_container_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'transform', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
