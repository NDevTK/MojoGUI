// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_tree_id.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};


// Union: AXTreeID
ax.mojom.mojom.AXTreeIDSpec = { $: mojo.internal.Union(
    'ax.mojom.AXTreeID', {
      'unknown': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'token': {
        'ordinal': 1,
        'type': mojo_base.mojom.UnguessableTokenSpec,
      }},
    })
};
