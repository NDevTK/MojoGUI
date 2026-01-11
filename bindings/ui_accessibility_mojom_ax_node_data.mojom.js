// Auto-generated MojoJS binding
// Source: chromium_src/ui/accessibility/mojom/ax_node_data.mojom
// Module: ax.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};

ax.mojom.AXBitsetDataSpec = { $: {} };
ax.mojom.AXNodeDataSpec = { $: {} };

// Struct: AXBitsetData
mojo.internal.Struct(
    ax.mojom.AXBitsetDataSpec, 'ax.mojom.AXBitsetData', [
      mojo.internal.StructField('set_bits', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('values', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AXNodeData
mojo.internal.Struct(
    ax.mojom.AXNodeDataSpec, 'ax.mojom.AXNodeData', [
      mojo.internal.StructField('role', 0, 0, ax.mojom.RoleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('actions', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('string_attributes', 16, 0, mojo.internal.Map(ax.mojom.StringAttributeSpec.$, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('int_attributes', 24, 0, mojo.internal.Map(ax.mojom.IntAttributeSpec.$, mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('float_attributes', 32, 0, mojo.internal.Map(ax.mojom.FloatAttributeSpec.$, mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('intlist_attributes', 40, 0, mojo.internal.Map(ax.mojom.IntListAttributeSpec.$, mojo.internal.Array(mojo.internal.Int32, false), false), null, false, 0, undefined),
      mojo.internal.StructField('stringlist_attributes', 48, 0, mojo.internal.Map(ax.mojom.StringListAttributeSpec.$, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
      mojo.internal.StructField('html_attributes', 56, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('child_ids', 64, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('relative_bounds', 72, 0, ax.mojom.AXRelativeBoundsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bool_attributes_data', 80, 0, ax.mojom.AXBitsetDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('state', 92, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 104]]);
