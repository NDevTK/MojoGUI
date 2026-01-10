// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/ime/mojom/ime_types.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};

ui.mojom.TextInputModeSpec = { $: mojo.internal.Enum() };
ui.mojom.TextInputActionSpec = { $: mojo.internal.Enum() };
ui.mojom.TextInputTypeSpec = { $: mojo.internal.Enum() };
ui.mojom.ImeTextSpanTypeSpec = { $: mojo.internal.Enum() };
ui.mojom.ImeTextSpanThicknessSpec = { $: mojo.internal.Enum() };
ui.mojom.ImeTextSpanUnderlineStyleSpec = { $: mojo.internal.Enum() };
ui.mojom.ImeTextSpanSpec = { $: {} };

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
  MAX: 17,
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
mojo.internal.Struct(
    ui.mojom.ImeTextSpanSpec, 'ui.mojom.ImeTextSpan', [
      mojo.internal.StructField('type', 0, 0, ui.mojom.ImeTextSpanTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('underline_color', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('thickness', 24, 0, ui.mojom.ImeTextSpanThicknessSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('underline_style', 32, 0, ui.mojom.ImeTextSpanUnderlineStyleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_color', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('background_color', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('suggestion_highlight_color', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('remove_on_finish_composing', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('interim_char_selection', 52, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('suggestions', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('should_hide_suggestion_menu', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);
