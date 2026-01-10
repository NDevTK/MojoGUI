// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/ime/mojom/text_input_state.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

ui.mojom.ImeTextSpanInfoSpec = { $: {} };
ui.mojom.TextInputStateSpec = { $: {} };

// Struct: ImeTextSpanInfo
mojo.internal.Struct(
    ui.mojom.ImeTextSpanInfoSpec, 'ui.mojom.ImeTextSpanInfo', [
      mojo.internal.StructField('span', 0, 0, ui.mojom.ImeTextSpanSpec, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextInputState
mojo.internal.Struct(
    ui.mojom.TextInputStateSpec, 'ui.mojom.TextInputState', [
      mojo.internal.StructField('node_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('type', 52, 0, ui.mojom.TextInputTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('mode', 56, 0, ui.mojom.TextInputModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('action', 60, 0, ui.mojom.TextInputActionSpec, null, false, 0, undefined),
      mojo.internal.StructField('flags', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.BigString16Spec, null, true, 0, undefined),
      mojo.internal.StructField('selection', 8, 0, gfx.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('composition', 16, 0, gfx.mojom.RangeSpec, null, true, 0, undefined),
      mojo.internal.StructField('can_compose_inline', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_ime_if_needed', 68, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('always_hide_ime', 68, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('reply_to_request', 68, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('edit_context_control_bounds', 24, 0, gfx.mojom.RectSpec, null, true, 0, undefined),
      mojo.internal.StructField('edit_context_selection_bounds', 32, 0, gfx.mojom.RectSpec, null, true, 0, undefined),
      mojo.internal.StructField('ime_text_spans_info', 40, 0, mojo.internal.Array(ui.mojom.ImeTextSpanInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 80]]);
