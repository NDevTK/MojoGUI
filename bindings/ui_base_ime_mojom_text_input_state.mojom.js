// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/ime/mojom/text_input_state.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Struct: ImeTextSpanInfo
ui.mojom.ImeTextSpanInfoSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.ImeTextSpanInfo',
      packedSize: 24,
      fields: [
        { name: 'span', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.ImeTextSpanSpec, nullable: false },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextInputState
ui.mojom.TextInputStateSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.TextInputState',
      packedSize: 104,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.TextInputTypeSpec, nullable: false },
        { name: 'mode', packedOffset: 16, packedBitOffset: 0, type: ui.mojom.TextInputModeSpec, nullable: false },
        { name: 'action', packedOffset: 24, packedBitOffset: 0, type: ui.mojom.TextInputActionSpec, nullable: false },
        { name: 'flags', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'value', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: true },
        { name: 'selection', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false },
        { name: 'composition', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: true },
        { name: 'can_compose_inline', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'show_ime_if_needed', packedOffset: 64, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'always_hide_ime', packedOffset: 64, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'reply_to_request', packedOffset: 64, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'edit_context_control_bounds', packedOffset: 72, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true },
        { name: 'edit_context_selection_bounds', packedOffset: 80, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true },
        { name: 'ime_text_spans_info', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
