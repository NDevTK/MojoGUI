// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/ime/mojom/ime_types.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Enum: TextInputMode
ui.mojom.TextInputMode = {
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

// Enum: TextInputAction
ui.mojom.TextInputAction = {
  kDefault: 0,
  kEnter: 1,
  kDone: 2,
  kGo: 3,
  kNext: 4,
  kPrevious: 5,
  kSearch: 6,
  kSend: 7,
};

// Enum: TextInputType
ui.mojom.TextInputType = {
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

// Enum: ImeTextSpanType
ui.mojom.ImeTextSpanType = {
  kComposition: 0,
  kSuggestion: 1,
  kMisspellingSuggestion: 2,
  kAutocorrect: 3,
  kGrammarSuggestion: 4,
};

// Enum: ImeTextSpanThickness
ui.mojom.ImeTextSpanThickness = {
  kNone: 0,
  kThin: 1,
  kThick: 2,
};

// Enum: ImeTextSpanUnderlineStyle
ui.mojom.ImeTextSpanUnderlineStyle = {
  kNone: 0,
  kSolid: 1,
  kDot: 2,
  kDash: 3,
  kSquiggle: 4,
};

// Struct: ImeTextSpan
ui.mojom.ImeTextSpanSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.ImeTextSpan',
      packedSize: 72,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.ImeTextSpanTypeSpec, nullable: false },
        { name: 'thickness', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.ImeTextSpanThicknessSpec, nullable: false },
        { name: 'underline_style', packedOffset: 16, packedBitOffset: 0, type: ui.mojom.ImeTextSpanUnderlineStyleSpec, nullable: false },
        { name: 'suggestions', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'start_offset', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'end_offset', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'underline_color', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'text_color', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'background_color', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'suggestion_highlight_color', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'remove_on_finish_composing', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'interim_char_selection', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'should_hide_suggestion_menu', packedOffset: 56, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
