// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_tree_id.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};

ax.mojom.AXTreeIDSpec = { $: {} };

// Union: AXTreeID
mojo.internal.Union(
    ax.mojom.AXTreeIDSpec, 'ax.mojom.AXTreeID', {
      'unknown': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'token': {
        'ordinal': 1,
        'type': mojo_base.mojom.UnguessableTokenSpec,
        'nullable': false,
      },
    });
