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
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'ime_text_spans_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
