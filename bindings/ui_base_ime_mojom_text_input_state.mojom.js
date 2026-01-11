// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/ime/mojom/text_input_state.mojom
// Module: ui.mojom

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

ui.mojom.ImeTextSpanInfoSpec = { $: {} };
ui.mojom.TextInputStateSpec = { $: {} };

// Struct: ImeTextSpanInfo
mojo.internal.Struct(
    ui.mojom.ImeTextSpanInfoSpec, 'ui.mojom.ImeTextSpanInfo', [
      mojo.internal.StructField('span', 0, 0, ui.mojom.ImeTextSpanSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextInputState
mojo.internal.Struct(
    ui.mojom.TextInputStateSpec, 'ui.mojom.TextInputState', [
      mojo.internal.StructField('type', 0, 0, ui.mojom.TextInputTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, ui.mojom.TextInputModeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('action', 16, 0, ui.mojom.TextInputActionSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('value', 24, 0, mojo_base.mojom.BigString16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('selection', 32, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('composition', 40, 0, gfx.mojom.RangeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('edit_context_control_bounds', 48, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('edit_context_selection_bounds', 56, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ime_text_spans_info', 64, 0, mojo.internal.Array(ui.mojom.ImeTextSpanInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('node_id', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('flags', 76, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('can_compose_inline', 80, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('show_ime_if_needed', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('always_hide_ime', 80, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('reply_to_request', 80, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);
