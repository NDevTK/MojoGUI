// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_mode.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};

ax.mojom.AXModeSpec = { $: {} };

// Struct: AXMode
mojo.internal.Struct(
    ax.mojom.AXModeSpec, 'ax.mojom.AXMode', [
      mojo.internal.StructField('flags', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('filter_flags', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);
