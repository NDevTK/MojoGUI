// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_method.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var services = services || {};

ash.ime.mojom.KeyEventTypeSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.NamedDomKeySpec = { $: mojo.internal.Enum() };
ash.ime.mojom.DomCodeSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.KeyEventResultSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.InputFieldTypeSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.AutocorrectModeSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.PersonalizationModeSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.TextPredictionModeSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.KoreanLayoutSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.PinyinLayoutSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.InputModeSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.PunctuationStyleSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.SymbolStyleSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.SpaceInputStyleSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.SelectionShortcutSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.KeymapStyleSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.ShiftKeyModeStyleSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.ZhuyinLayoutSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.ZhuyinSelectionKeysSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.ChineseLanguageModeSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.JapaneseInputModeSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.SuggestionModeSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.SuggestionTypeSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.AssistiveWindowTypeSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.AutocorrectSuggestionProviderSpec = { $: mojo.internal.Enum() };
ash.ime.mojom.DomKeySpec = { $: {} };
ash.ime.mojom.InputMethodSettingsSpec = { $: {} };
ash.ime.mojom.InputMethodQuickSettingsSpec = { $: {} };
ash.ime.mojom.ModifierStateSpec = { $: {} };
ash.ime.mojom.PhysicalKeyEventSpec = { $: {} };
ash.ime.mojom.SelectionRangeSpec = { $: {} };
ash.ime.mojom.InputFieldInfoSpec = { $: {} };
ash.ime.mojom.KoreanSettingsSpec = { $: {} };
ash.ime.mojom.LatinSettingsSpec = { $: {} };
ash.ime.mojom.FuzzyPinyinSettingsSpec = { $: {} };
ash.ime.mojom.PinyinSettingsSpec = { $: {} };
ash.ime.mojom.JapaneseSettingsSpec = { $: {} };
ash.ime.mojom.ZhuyinSettingsSpec = { $: {} };
ash.ime.mojom.ChineseQuickSettingsSpec = { $: {} };
ash.ime.mojom.JapaneseQuickSettingsSpec = { $: {} };
ash.ime.mojom.SuggestionCandidateSpec = { $: {} };
ash.ime.mojom.InputMethodMetadataSpec = { $: {} };
ash.ime.mojom.AssistiveWindowSpec = { $: {} };
ash.ime.mojom.VietnameseTelexSettingsSpec = { $: {} };
ash.ime.mojom.VietnameseVniSettingsSpec = { $: {} };
ash.ime.mojom.InputMethod = {};
ash.ime.mojom.InputMethod.$interfaceName = 'ash.ime.mojom.InputMethod';
ash.ime.mojom.InputMethod_OnFocusDeprecated_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethod_OnFocus_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethod_OnFocus_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethod_OnBlur_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethod_ProcessKeyEvent_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethod_ProcessKeyEvent_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethod_OnSurroundingTextChanged_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethod_OnCompositionCanceledBySystem_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethod_OnCandidateSelected_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethod_OnQuickSettingsUpdated_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethod_IsReadyForTesting_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethod_IsReadyForTesting_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethod_OnAssistiveWindowChanged_ParamsSpec = { $: {} };

// Enum: KeyEventType
ash.ime.mojom.KeyEventType = {
  kKeyDown: 0,
  kKeyUp: 1,
};

// Enum: NamedDomKey
ash.ime.mojom.NamedDomKey = {
  kOther: 0,
  kAlt: 1,
  kAltGraph: 2,
  kCapsLock: 3,
  kControl: 4,
  kShift: 5,
  kEnter: 6,
  kBackspace: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
  MinVersion: 7,
};

// Enum: DomCode
ash.ime.mojom.DomCode = {
  kOther: 0,
  kBackquote: 1,
  kBackslash: 2,
  kBracketLeft: 3,
  kBracketRight: 4,
  kComma: 5,
  kDigit0: 6,
  kDigit1: 7,
  kDigit2: 8,
  kDigit3: 9,
  kDigit4: 10,
  kDigit5: 11,
  kDigit6: 12,
  kDigit7: 13,
  kDigit8: 14,
  kDigit9: 15,
  kEqual: 16,
  kIntlBackslash: 17,
  kIntlRo: 18,
  kIntlYen: 19,
  kKeyA: 20,
  kKeyB: 21,
  kKeyC: 22,
  kKeyD: 23,
  kKeyE: 24,
  kKeyF: 25,
  kKeyG: 26,
  kKeyH: 27,
  kKeyI: 28,
  kKeyJ: 29,
  kKeyK: 30,
  kKeyL: 31,
  kKeyM: 32,
  kKeyN: 33,
  kKeyO: 34,
  kKeyP: 35,
  kKeyQ: 36,
  kKeyR: 37,
  kKeyS: 38,
  kKeyT: 39,
  kKeyU: 40,
  kKeyV: 41,
  kKeyW: 42,
  kKeyX: 43,
  kKeyY: 44,
  kKeyZ: 45,
  kMinus: 46,
  kPeriod: 47,
  kQuote: 48,
  kSemicolon: 49,
  kSlash: 50,
  kBackspace: 51,
  kEnter: 52,
  kSpace: 53,
  kAltLeft: 54,
  kAltRight: 55,
  kShiftLeft: 56,
  kShiftRight: 57,
  kControlLeft: 58,
  kControlRight: 59,
  kCapsLock: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
  MinVersion: 60,
};

// Enum: KeyEventResult
ash.ime.mojom.KeyEventResult = {
  kNeedsHandlingBySystem: 0,
  kConsumedByIme: 1,
};

// Enum: InputFieldType
ash.ime.mojom.InputFieldType = {
  kNoIME: 0,
  kText: 1,
  kSearch: 2,
  kTelephone: 3,
  kURL: 4,
  kEmail: 5,
  kNumber: 6,
  kPassword: 7,
};

// Enum: AutocorrectMode
ash.ime.mojom.AutocorrectMode = {
  kDisabled: 0,
  kEnabled: 1,
};

// Enum: PersonalizationMode
ash.ime.mojom.PersonalizationMode = {
  kDisabled: 0,
  kEnabled: 1,
};

// Enum: TextPredictionMode
ash.ime.mojom.TextPredictionMode = {
  kDisabled: 0,
  kEnabled: 1,
};

// Enum: KoreanLayout
ash.ime.mojom.KoreanLayout = {
  kDubeolsik: 0,
  kDubeolsikOldHangeul: 1,
  kSebeolsik390: 2,
  kSebeolsikFinal: 3,
  kSebeolsikNoShift: 4,
  kSebeolsikOldHangeul: 5,
  kDeprecatedSebeolsikDubeol: 6,
  kDeprecatedRomaja: 7,
  kDeprecatedAhnmatae: 8,
};

// Enum: PinyinLayout
ash.ime.mojom.PinyinLayout = {
  kUsQwerty: 0,
  kDvorak: 1,
  kColemak: 2,
};

// Enum: InputMode
ash.ime.mojom.InputMode = {
  kUnspecified: 0,
  kRomaji: 1,
  kKana: 2,
};

// Enum: PunctuationStyle
ash.ime.mojom.PunctuationStyle = {
  kUnspecified: 0,
  kKutenTouten: 1,
  kCommaPeriod: 2,
  kKutenPeriod: 3,
  kCommaTouten: 4,
};

// Enum: SymbolStyle
ash.ime.mojom.SymbolStyle = {
  kUnspecified: 0,
  kCornerBracketMiddleDot: 1,
  kSquareBracketSlash: 2,
  kCornerBracketSlash: 3,
  kSquareBracketMiddleDot: 4,
};

// Enum: SpaceInputStyle
ash.ime.mojom.SpaceInputStyle = {
  kUnspecified: 0,
  kInputMode: 1,
  kFullWidth: 2,
  kHalfWidth: 3,
};

// Enum: SelectionShortcut
ash.ime.mojom.SelectionShortcut = {
  kUnspecified: 0,
  kDigits123456789: 1,
  kAsdfghjkl: 2,
  kNoShortcut: 3,
};

// Enum: KeymapStyle
ash.ime.mojom.KeymapStyle = {
  kUnspecified: 0,
  kCustom: 1,
  kAtok: 2,
  kMsime: 3,
  kKotoeri: 4,
  kMobile: 5,
  kChromeos: 6,
};

// Enum: ShiftKeyModeStyle
ash.ime.mojom.ShiftKeyModeStyle = {
  kUnspecified: 0,
  kOff: 1,
  kAlphanumeric: 2,
  kKatakana: 3,
};

// Enum: ZhuyinLayout
ash.ime.mojom.ZhuyinLayout = {
  kStandard: 0,
  kIbm: 1,
  kEten: 2,
};

// Enum: ZhuyinSelectionKeys
ash.ime.mojom.ZhuyinSelectionKeys = {
  k1234567890: 0,
  kAsdfghjkl: 1,
  kAsdfzxcv89: 2,
  kAsdfjkl789: 3,
  k1234Qweras: 4,
};

// Enum: ChineseLanguageMode
ash.ime.mojom.ChineseLanguageMode = {
  kChinese: 0,
  kRaw: 1,
};

// Enum: JapaneseInputMode
ash.ime.mojom.JapaneseInputMode = {
  kHiragana: 0,
  kKatakana: 1,
  kWideLatin: 2,
  kHalfWidthKatakana: 3,
  kLatin: 4,
  kDirectInput: 5,
};

// Enum: SuggestionMode
ash.ime.mojom.SuggestionMode = {
  kUnknown: 0,
  kCompletion: 1,
  kPrediction: 2,
};

// Enum: SuggestionType
ash.ime.mojom.SuggestionType = {
  kUnknown: 0,
  kAssistivePersonalInfo: 1,
  kAssistiveEmoji: 2,
  kMultiWord: 3,
  MinVersion: 3,
  MinVersion: 3,
};

// Enum: AssistiveWindowType
ash.ime.mojom.AssistiveWindowType = {
  kHidden: 0,
  kUndo: 1,
  kEmojiSuggestionDeprecated: 2,
  kPersonalInfoSuggestion: 3,
  kGrammarSuggestion: 4,
  kMultiWordSuggestion: 5,
  kLongpressDiacriticsSuggestion: 6,
};

// Enum: AutocorrectSuggestionProvider
ash.ime.mojom.AutocorrectSuggestionProvider = {
  kUnknown: 0,
  kUsEnglishPrebundled: 1,
  kUsEnglishDownloaded: 2,
  kUsEnglish840: 3,
  MinVersion: 3,
};

// Union: DomKey
mojo.internal.Union(
    ash.ime.mojom.DomKeySpec, 'ash.ime.mojom.DomKey', {
      'named_key': {
        'ordinal': 0,
        'type': ash.ime.mojom.NamedDomKeySpec.$,
        'nullable': false,
      },
      'codepoint': {
        'ordinal': 1,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
    });

// Union: InputMethodSettings
mojo.internal.Union(
    ash.ime.mojom.InputMethodSettingsSpec, 'ash.ime.mojom.InputMethodSettings', {
      'korean_settings': {
        'ordinal': 0,
        'type': ash.ime.mojom.KoreanSettingsSpec.$,
        'nullable': false,
      },
      'latin_settings': {
        'ordinal': 1,
        'type': ash.ime.mojom.LatinSettingsSpec.$,
        'nullable': false,
      },
      'pinyin_settings': {
        'ordinal': 2,
        'type': ash.ime.mojom.PinyinSettingsSpec.$,
        'nullable': false,
      },
      'zhuyin_settings': {
        'ordinal': 3,
        'type': ash.ime.mojom.ZhuyinSettingsSpec.$,
        'nullable': false,
      },
      'null_settings': {
        'ordinal': 4,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'japanese_settings': {
        'ordinal': 5,
        'type': ash.ime.mojom.JapaneseSettingsSpec.$,
        'nullable': false,
      },
      'vietnamese_telex_settings': {
        'ordinal': 6,
        'type': ash.ime.mojom.VietnameseTelexSettingsSpec.$,
        'nullable': false,
      },
      'vietnamese_vni_settings': {
        'ordinal': 7,
        'type': ash.ime.mojom.VietnameseVniSettingsSpec.$,
        'nullable': false,
      },
    });

// Union: InputMethodQuickSettings
mojo.internal.Union(
    ash.ime.mojom.InputMethodQuickSettingsSpec, 'ash.ime.mojom.InputMethodQuickSettings', {
      'chinese_settings': {
        'ordinal': 0,
        'type': ash.ime.mojom.ChineseQuickSettingsSpec.$,
        'nullable': false,
      },
      'japanese_settings': {
        'ordinal': 1,
        'type': ash.ime.mojom.JapaneseQuickSettingsSpec.$,
        'nullable': false,
      },
    });

// Struct: ModifierState
mojo.internal.Struct(
    ash.ime.mojom.ModifierStateSpec, 'ash.ime.mojom.ModifierState', [
      mojo.internal.StructField('alt', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('alt_graph', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('caps_lock', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('control', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('meta', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shift', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PhysicalKeyEvent
mojo.internal.Struct(
    ash.ime.mojom.PhysicalKeyEventSpec, 'ash.ime.mojom.PhysicalKeyEvent', [
      mojo.internal.StructField('type', 0, 0, ash.ime.mojom.KeyEventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, ash.ime.mojom.DomKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('code', 16, 0, ash.ime.mojom.DomCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('modifier_state', 24, 0, ash.ime.mojom.ModifierStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SelectionRange
mojo.internal.Struct(
    ash.ime.mojom.SelectionRangeSpec, 'ash.ime.mojom.SelectionRange', [
      mojo.internal.StructField('anchor', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('focus', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: InputFieldInfo
mojo.internal.Struct(
    ash.ime.mojom.InputFieldInfoSpec, 'ash.ime.mojom.InputFieldInfo', [
      mojo.internal.StructField('type', 0, 0, ash.ime.mojom.InputFieldTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('autocorrect', 8, 0, ash.ime.mojom.AutocorrectModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('personalization', 16, 0, ash.ime.mojom.PersonalizationModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_prediction', 24, 0, ash.ime.mojom.TextPredictionModeSpec.$, null, false, 10, undefined),
    ],
    [[0, 32], [10, 40]]);

// Struct: KoreanSettings
mojo.internal.Struct(
    ash.ime.mojom.KoreanSettingsSpec, 'ash.ime.mojom.KoreanSettings', [
      mojo.internal.StructField('input_multiple_syllables', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('layout', 8, 0, ash.ime.mojom.KoreanLayoutSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LatinSettings
mojo.internal.Struct(
    ash.ime.mojom.LatinSettingsSpec, 'ash.ime.mojom.LatinSettings', [
      mojo.internal.StructField('autocorrect', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('predictive_writing', 0, 1, mojo.internal.Bool, false, false, 5, undefined),
    ],
    [[0, 16], [5, 16]]);

// Struct: FuzzyPinyinSettings
mojo.internal.Struct(
    ash.ime.mojom.FuzzyPinyinSettingsSpec, 'ash.ime.mojom.FuzzyPinyinSettings', [
      mojo.internal.StructField('an_ang', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('en_eng', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ian_iang', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('k_g', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('r_l', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uan_uang', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('c_ch', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('f_h', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('in_ing', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('l_n', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('s_sh', 1, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('z_zh', 1, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PinyinSettings
mojo.internal.Struct(
    ash.ime.mojom.PinyinSettingsSpec, 'ash.ime.mojom.PinyinSettings', [
      mojo.internal.StructField('fuzzy_pinyin', 0, 0, ash.ime.mojom.FuzzyPinyinSettingsSpec.$, null, true, 6, undefined),
      mojo.internal.StructField('layout', 8, 0, ash.ime.mojom.PinyinLayoutSpec.$, null, false, 6, undefined),
      mojo.internal.StructField('use_hyphen_and_equals_to_page_candidates', 16, 0, mojo.internal.Bool, false, false, 6, undefined),
      mojo.internal.StructField('use_comma_and_period_to_page_candidates', 16, 1, mojo.internal.Bool, false, false, 6, undefined),
      mojo.internal.StructField('default_to_chinese', 16, 2, mojo.internal.Bool, false, false, 6, undefined),
      mojo.internal.StructField('default_to_full_width_characters', 16, 3, mojo.internal.Bool, false, false, 6, undefined),
      mojo.internal.StructField('default_to_full_width_punctuation', 16, 4, mojo.internal.Bool, false, false, 6, undefined),
    ],
    [[0, 8], [6, 32]]);

// Struct: JapaneseSettings
mojo.internal.Struct(
    ash.ime.mojom.JapaneseSettingsSpec, 'ash.ime.mojom.JapaneseSettings', [
      mojo.internal.StructField('kUnspecified', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ZhuyinSettings
mojo.internal.Struct(
    ash.ime.mojom.ZhuyinSettingsSpec, 'ash.ime.mojom.ZhuyinSettings', [
      mojo.internal.StructField('layout', 0, 0, ash.ime.mojom.ZhuyinLayoutSpec.$, null, false, 7, undefined),
      mojo.internal.StructField('selection_keys', 8, 0, ash.ime.mojom.ZhuyinSelectionKeysSpec.$, null, false, 7, undefined),
      mojo.internal.StructField('page_size', 16, 0, mojo.internal.Uint32, 0, false, 7, undefined),
    ],
    [[0, 8], [7, 32]]);

// Struct: ChineseQuickSettings
mojo.internal.Struct(
    ash.ime.mojom.ChineseQuickSettingsSpec, 'ash.ime.mojom.ChineseQuickSettings', [
      mojo.internal.StructField('mode', 0, 0, ash.ime.mojom.ChineseLanguageModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('full_width_characters', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('full_width_punctuation', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: JapaneseQuickSettings
mojo.internal.Struct(
    ash.ime.mojom.JapaneseQuickSettingsSpec, 'ash.ime.mojom.JapaneseQuickSettings', [
      mojo.internal.StructField('mode', 0, 0, ash.ime.mojom.JapaneseInputModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SuggestionCandidate
mojo.internal.Struct(
    ash.ime.mojom.SuggestionCandidateSpec, 'ash.ime.mojom.SuggestionCandidate', [
      mojo.internal.StructField('mode', 0, 0, ash.ime.mojom.SuggestionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, ash.ime.mojom.SuggestionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('confirmed_length', 24, 0, mojo.internal.Int32, 0, false, 13, undefined),
    ],
    [[0, 32], [13, 40]]);

// Struct: InputMethodMetadata
mojo.internal.Struct(
    ash.ime.mojom.InputMethodMetadataSpec, 'ash.ime.mojom.InputMethodMetadata', [
      mojo.internal.StructField('autocorrect_suggestion_provider', 0, 0, ash.ime.mojom.AutocorrectSuggestionProviderSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AssistiveWindow
mojo.internal.Struct(
    ash.ime.mojom.AssistiveWindowSpec, 'ash.ime.mojom.AssistiveWindow', [
      mojo.internal.StructField('type', 0, 0, ash.ime.mojom.AssistiveWindowTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('candidates', 8, 0, mojo.internal.Array(ash.ime.mojom.SuggestionCandidateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VietnameseTelexSettings
mojo.internal.Struct(
    ash.ime.mojom.VietnameseTelexSettingsSpec, 'ash.ime.mojom.VietnameseTelexSettings', [
      mojo.internal.StructField('allow_flexible_diacritics', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('new_style_tone_mark_placement', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_insert_double_horn_on_uo', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_w_for_u_horn_shortcut', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_underline_for_composition_text', 0, 4, mojo.internal.Bool, false, false, 20, undefined),
    ],
    [[0, 16], [20, 16]]);

// Struct: VietnameseVniSettings
mojo.internal.Struct(
    ash.ime.mojom.VietnameseVniSettingsSpec, 'ash.ime.mojom.VietnameseVniSettings', [
      mojo.internal.StructField('allow_flexible_diacritics', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('new_style_tone_mark_placement', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_insert_double_horn_on_uo', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_underline_for_composition_text', 0, 3, mojo.internal.Bool, false, false, 20, undefined),
    ],
    [[0, 16], [20, 16]]);

// Interface: InputMethod
mojo.internal.Struct(
    ash.ime.mojom.InputMethod_OnFocusDeprecated_ParamsSpec, 'ash.ime.mojom.InputMethod_OnFocusDeprecated_Params', [
      mojo.internal.StructField('input_field_info', 0, 0, ash.ime.mojom.InputFieldInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, ash.ime.mojom.InputMethodSettingsSpec.$, null, true, 4, undefined),
    ],
    [[0, 16], [4, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethod_OnFocus_ParamsSpec, 'ash.ime.mojom.InputMethod_OnFocus_Params', [
      mojo.internal.StructField('input_field_info', 0, 0, ash.ime.mojom.InputFieldInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('deprecated_settings', 8, 0, ash.ime.mojom.InputMethodSettingsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethod_OnFocus_ResponseParamsSpec, 'ash.ime.mojom.InputMethod_OnFocus_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, ash.ime.mojom.InputMethodMetadataSpec.$, null, true, 17, undefined),
    ],
    [[0, 16], [17, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethod_OnBlur_ParamsSpec, 'ash.ime.mojom.InputMethod_OnBlur_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethod_ProcessKeyEvent_ParamsSpec, 'ash.ime.mojom.InputMethod_ProcessKeyEvent_Params', [
      mojo.internal.StructField('event', 0, 0, ash.ime.mojom.PhysicalKeyEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethod_ProcessKeyEvent_ResponseParamsSpec, 'ash.ime.mojom.InputMethod_ProcessKeyEvent_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.ime.mojom.KeyEventResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethod_OnSurroundingTextChanged_ParamsSpec, 'ash.ime.mojom.InputMethod_OnSurroundingTextChanged_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('selection_range', 16, 0, ash.ime.mojom.SelectionRangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethod_OnCompositionCanceledBySystem_ParamsSpec, 'ash.ime.mojom.InputMethod_OnCompositionCanceledBySystem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethod_OnCandidateSelected_ParamsSpec, 'ash.ime.mojom.InputMethod_OnCandidateSelected_Params', [
      mojo.internal.StructField('selected_candidate_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethod_OnQuickSettingsUpdated_ParamsSpec, 'ash.ime.mojom.InputMethod_OnQuickSettingsUpdated_Params', [
      mojo.internal.StructField('settings', 0, 0, ash.ime.mojom.InputMethodQuickSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethod_IsReadyForTesting_ParamsSpec, 'ash.ime.mojom.InputMethod_IsReadyForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethod_IsReadyForTesting_ResponseParamsSpec, 'ash.ime.mojom.InputMethod_IsReadyForTesting_ResponseParams', [
      mojo.internal.StructField('ready', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethod_OnAssistiveWindowChanged_ParamsSpec, 'ash.ime.mojom.InputMethod_OnAssistiveWindowChanged_Params', [
      mojo.internal.StructField('window', 0, 0, ash.ime.mojom.AssistiveWindowSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.ime.mojom.InputMethodPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.InputMethodRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.InputMethod';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.InputMethodPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.InputMethodRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.InputMethodRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFocusDeprecated(input_field_info, settings) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.mojom.InputMethod_OnFocusDeprecated_ParamsSpec,
      null,
      [input_field_info, settings],
      false);
  }

  onFocus(input_field_info, deprecated_settings) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.ime.mojom.InputMethod_OnFocus_ParamsSpec,
      ash.ime.mojom.InputMethod_OnFocus_ResponseParamsSpec,
      [input_field_info, deprecated_settings],
      false);
  }

  onBlur() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.mojom.InputMethod_OnBlur_ParamsSpec,
      null,
      [],
      false);
  }

  processKeyEvent(event) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.ime.mojom.InputMethod_ProcessKeyEvent_ParamsSpec,
      ash.ime.mojom.InputMethod_ProcessKeyEvent_ResponseParamsSpec,
      [event],
      false);
  }

  onSurroundingTextChanged(text, offset, selection_range) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.ime.mojom.InputMethod_OnSurroundingTextChanged_ParamsSpec,
      null,
      [text, offset, selection_range],
      false);
  }

  onCompositionCanceledBySystem() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.ime.mojom.InputMethod_OnCompositionCanceledBySystem_ParamsSpec,
      null,
      [],
      false);
  }

  onCandidateSelected(selected_candidate_index) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.ime.mojom.InputMethod_OnCandidateSelected_ParamsSpec,
      null,
      [selected_candidate_index],
      false);
  }

  onQuickSettingsUpdated(settings) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.ime.mojom.InputMethod_OnQuickSettingsUpdated_ParamsSpec,
      null,
      [settings],
      false);
  }

  isReadyForTesting() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.ime.mojom.InputMethod_IsReadyForTesting_ParamsSpec,
      ash.ime.mojom.InputMethod_IsReadyForTesting_ResponseParamsSpec,
      [],
      false);
  }

  onAssistiveWindowChanged(window) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.ime.mojom.InputMethod_OnAssistiveWindowChanged_ParamsSpec,
      null,
      [window],
      false);
  }

};

ash.ime.mojom.InputMethod.getRemote = function() {
  let remote = new ash.ime.mojom.InputMethodRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.ime.mojom.InputMethod',
    'context');
  return remote.$;
};

ash.ime.mojom.InputMethodPtr = ash.ime.mojom.InputMethodRemote;
ash.ime.mojom.InputMethodRequest = ash.ime.mojom.InputMethodPendingReceiver;

