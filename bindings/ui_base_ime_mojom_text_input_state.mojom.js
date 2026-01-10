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


// Struct: ImeTextSpanInfo
ui.mojom.mojom.ImeTextSpanInfoSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.ImeTextSpanInfo',
      packedSize: 24,
      fields: [
        { name: 'span', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.ImeTextSpanSpec, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TextInputState
ui.mojom.mojom.TextInputStateSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.TextInputState',
      packedSize: 80,
      fields: [
        { name: 'node_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 52, packedBitOffset: 0, type: ui.mojom.TextInputTypeSpec, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 56, packedBitOffset: 0, type: ui.mojom.TextInputModeSpec, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 60, packedBitOffset: 0, type: ui.mojom.TextInputActionSpec, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: true, minVersion: 0 },
        { name: 'selection', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'composition', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: true, minVersion: 0 },
        { name: 'can_compose_inline', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_ime_if_needed', packedOffset: 68, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'always_hide_ime', packedOffset: 68, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'reply_to_request', packedOffset: 68, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'edit_context_control_bounds', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
        { name: 'edit_context_selection_bounds', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
        { name: 'ime_text_spans_info', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(ui.mojom.ImeTextSpanInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};
