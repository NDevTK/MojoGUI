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

ax.mojom.AssistantTreeSpec = { $: {} };
ax.mojom.AssistantNodeSpec = { $: {} };
ax.mojom.AssistantExtraSpec = { $: {} };
ax.mojom.AssistantStructureSpec = { $: {} };

// Struct: AssistantTree
mojo.internal.Struct(
    ax.mojom.AssistantTreeSpec, 'ax.mojom.AssistantTree', [
      mojo.internal.StructField('nodes', 0, 0, mojo.internal.Array(ax.mojom.AssistantNodeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AssistantNode
mojo.internal.Struct(
    ax.mojom.AssistantNodeSpec, 'ax.mojom.AssistantNode', [
      mojo.internal.StructField('children_indices', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('rect', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_size', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('color', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('bgcolor', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('bold', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('italic', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('underline', 36, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('line_through', 36, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('selection', 40, 0, gfx.mojom.RangeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('class_name', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('role', 56, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: AssistantExtra
mojo.internal.Struct(
    ax.mojom.AssistantExtraSpec, 'ax.mojom.AssistantExtra', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds_pixel', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AssistantStructure
mojo.internal.Struct(
    ax.mojom.AssistantStructureSpec, 'ax.mojom.AssistantStructure', [
      mojo.internal.StructField('assistant_tree', 0, 0, ax.mojom.AssistantTreeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('assistant_extra', 8, 0, ax.mojom.AssistantExtraSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);
