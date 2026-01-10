// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/ime/mojom/ime_types.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Enum: TextInputMode
ui.mojom.mojom.TextInputMode = {
  kDefault: 0,
  kNone: 1,
  kText: 2,
  kTel: 3,
  kUrl: 4,
  kEmail: 5,
  kNumeric: 6,
  kDecimal: 7,
  kSearch: 8,
};
ui.mojom.mojom.TextInputModeSpec = { $: mojo.internal.Enum() };

// Enum: TextInputAction
ui.mojom.mojom.TextInputAction = {
  kDefault: 0,
  kEnter: 1,
  kDone: 2,
  kGo: 3,
  kNext: 4,
  kPrevious: 5,
  kSearch: 6,
  kSend: 7,
};
ui.mojom.mojom.TextInputActionSpec = { $: mojo.internal.Enum() };

// Enum: TextInputType
ui.mojom.mojom.TextInputType = {
  NONE: 0,
  TEXT: 1,
  PASSWORD: 2,
  SEARCH: 3,
  EMAIL: 4,
  NUMBER: 5,
  TELEPHONE: 6,
  URL: 7,
  DATE: 8,
  DATE_TIME: 9,
  DATE_TIME_LOCAL: 10,
  MONTH: 11,
  TIME: 12,
  WEEK: 13,
  TEXT_AREA: 14,
  CONTENT_EDITABLE: 15,
  DATE_TIME_FIELD: 16,
  TYPE_NULL: 17,
  MAX: 18,
};
ui.mojom.mojom.TextInputTypeSpec = { $: mojo.internal.Enum() };

// Enum: ImeTextSpanType
ui.mojom.mojom.ImeTextSpanType = {
  kComposition: 0,
  kSuggestion: 1,
  kMisspellingSuggestion: 2,
  kAutocorrect: 3,
  kGrammarSuggestion: 4,
};
ui.mojom.mojom.ImeTextSpanTypeSpec = { $: mojo.internal.Enum() };

// Enum: ImeTextSpanThickness
ui.mojom.mojom.ImeTextSpanThickness = {
  kNone: 0,
  kThin: 1,
  kThick: 2,
};
ui.mojom.mojom.ImeTextSpanThicknessSpec = { $: mojo.internal.Enum() };

// Enum: ImeTextSpanUnderlineStyle
ui.mojom.mojom.ImeTextSpanUnderlineStyle = {
  kNone: 0,
  kSolid: 1,
  kDot: 2,
  kDash: 3,
  kSquiggle: 4,
};
ui.mojom.mojom.ImeTextSpanUnderlineStyleSpec = { $: mojo.internal.Enum() };

// Struct: ImeTextSpan
ui.mojom.mojom.ImeTextSpanSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.ImeTextSpan',
      packedSize: 56,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.ImeTextSpanTypeSpec, nullable: false, minVersion: 0 },
        { name: 'start_offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end_offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'underline_color', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'thickness', packedOffset: 24, packedBitOffset: 0, type: ui.mojom.ImeTextSpanThicknessSpec, nullable: false, minVersion: 0 },
        { name: 'underline_style', packedOffset: 28, packedBitOffset: 0, type: ui.mojom.ImeTextSpanUnderlineStyleSpec, nullable: false, minVersion: 0 },
        { name: 'text_color', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'background_color', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'suggestion_highlight_color', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'remove_on_finish_composing', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'interim_char_selection', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'suggestions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'should_hide_suggestion_menu', packedOffset: 44, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
