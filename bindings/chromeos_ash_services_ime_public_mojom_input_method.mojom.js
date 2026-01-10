// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_method.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Enum: KeyEventType
ash.ime.mojom.KeyEventType = {
  kKeyUp: 0,
};
ash.ime.mojom.KeyEventTypeSpec = { $: mojo.internal.Enum() };

// Enum: NamedDomKey
ash.ime.mojom.NamedDomKey = {
  kAlt: 0,
  kAltGraph: 1,
  kCapsLock: 2,
  kControl: 3,
  kShift: 4,
  kEnter: 5,
  kBackspace: 6,
};
ash.ime.mojom.NamedDomKeySpec = { $: mojo.internal.Enum() };

// Enum: DomCode
ash.ime.mojom.DomCode = {
  kBackquote: 0,
  kBackslash: 1,
  kBracketLeft: 2,
  kBracketRight: 3,
  kComma: 4,
  kDigit0: 5,
  kDigit1: 6,
  kDigit2: 7,
  kDigit3: 8,
  kDigit4: 9,
  kDigit5: 10,
  kDigit6: 11,
  kDigit7: 12,
  kDigit8: 13,
  kDigit9: 14,
  kEqual: 15,
  kIntlBackslash: 16,
  kIntlRo: 17,
  kIntlYen: 18,
  kKeyA: 19,
  kKeyB: 20,
  kKeyC: 21,
  kKeyD: 22,
  kKeyE: 23,
  kKeyF: 24,
  kKeyG: 25,
  kKeyH: 26,
  kKeyI: 27,
  kKeyJ: 28,
  kKeyK: 29,
  kKeyL: 30,
  kKeyM: 31,
  kKeyN: 32,
  kKeyO: 33,
  kKeyP: 34,
  kKeyQ: 35,
  kKeyR: 36,
  kKeyS: 37,
  kKeyT: 38,
  kKeyU: 39,
  kKeyV: 40,
  kKeyW: 41,
  kKeyX: 42,
  kKeyY: 43,
  kKeyZ: 44,
  kMinus: 45,
  kPeriod: 46,
  kQuote: 47,
  kSemicolon: 48,
  kSlash: 49,
  kBackspace: 50,
  kEnter: 51,
  kSpace: 52,
  kAltLeft: 53,
  kAltRight: 54,
  kShiftLeft: 55,
  kShiftRight: 56,
  kControlLeft: 57,
  kControlRight: 58,
  kCapsLock: 59,
};
ash.ime.mojom.DomCodeSpec = { $: mojo.internal.Enum() };

// Enum: KeyEventResult
ash.ime.mojom.KeyEventResult = {
  kConsumedByIme: 0,
};
ash.ime.mojom.KeyEventResultSpec = { $: mojo.internal.Enum() };

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
ash.ime.mojom.InputFieldTypeSpec = { $: mojo.internal.Enum() };

// Enum: AutocorrectMode
ash.ime.mojom.AutocorrectMode = {
  kEnabled: 0,
};
ash.ime.mojom.AutocorrectModeSpec = { $: mojo.internal.Enum() };

// Enum: PersonalizationMode
ash.ime.mojom.PersonalizationMode = {
  kDisabled: 0,
  kEnabled: 1,
};
ash.ime.mojom.PersonalizationModeSpec = { $: mojo.internal.Enum() };

// Enum: TextPredictionMode
ash.ime.mojom.TextPredictionMode = {
  kEnabled: 0,
};
ash.ime.mojom.TextPredictionModeSpec = { $: mojo.internal.Enum() };

// Enum: KoreanLayout
ash.ime.mojom.KoreanLayout = {
  kDubeolsikOldHangeul: 0,
  kSebeolsik390: 1,
  kSebeolsikFinal: 2,
  kSebeolsikNoShift: 3,
  kSebeolsikOldHangeul: 4,
  kDeprecatedSebeolsikDubeol: 5,
  kDeprecatedRomaja: 6,
  kDeprecatedAhnmatae: 7,
};
ash.ime.mojom.KoreanLayoutSpec = { $: mojo.internal.Enum() };

// Enum: PinyinLayout
ash.ime.mojom.PinyinLayout = {
  kDvorak: 0,
  kColemak: 1,
};
ash.ime.mojom.PinyinLayoutSpec = { $: mojo.internal.Enum() };

// Enum: InputMode
ash.ime.mojom.InputMode = {
  kRomaji: 0,
  kKana: 1,
};
ash.ime.mojom.InputModeSpec = { $: mojo.internal.Enum() };

// Enum: PunctuationStyle
ash.ime.mojom.PunctuationStyle = {
  kKutenTouten: 0,
  kCommaPeriod: 1,
  kKutenPeriod: 2,
  kCommaTouten: 3,
};
ash.ime.mojom.PunctuationStyleSpec = { $: mojo.internal.Enum() };

// Enum: SymbolStyle
ash.ime.mojom.SymbolStyle = {
  kCornerBracketMiddleDot: 0,
  kSquareBracketSlash: 1,
  kCornerBracketSlash: 2,
  kSquareBracketMiddleDot: 3,
};
ash.ime.mojom.SymbolStyleSpec = { $: mojo.internal.Enum() };

// Enum: SpaceInputStyle
ash.ime.mojom.SpaceInputStyle = {
  kInputMode: 0,
  kFullWidth: 1,
  kHalfWidth: 2,
};
ash.ime.mojom.SpaceInputStyleSpec = { $: mojo.internal.Enum() };

// Enum: SelectionShortcut
ash.ime.mojom.SelectionShortcut = {
  kDigits123456789: 0,
  kAsdfghjkl: 1,
  kNoShortcut: 2,
};
ash.ime.mojom.SelectionShortcutSpec = { $: mojo.internal.Enum() };

// Enum: KeymapStyle
ash.ime.mojom.KeymapStyle = {
  kCustom: 0,
  kAtok: 1,
  kMsime: 2,
  kKotoeri: 3,
  kMobile: 4,
  kChromeos: 5,
};
ash.ime.mojom.KeymapStyleSpec = { $: mojo.internal.Enum() };

// Enum: ShiftKeyModeStyle
ash.ime.mojom.ShiftKeyModeStyle = {
  kOff: 0,
  kAlphanumeric: 1,
  kKatakana: 2,
};
ash.ime.mojom.ShiftKeyModeStyleSpec = { $: mojo.internal.Enum() };

// Enum: ZhuyinLayout
ash.ime.mojom.ZhuyinLayout = {
  kIbm: 0,
  kEten: 1,
};
ash.ime.mojom.ZhuyinLayoutSpec = { $: mojo.internal.Enum() };

// Enum: ZhuyinSelectionKeys
ash.ime.mojom.ZhuyinSelectionKeys = {
  kAsdfghjkl: 0,
  kAsdfzxcv89: 1,
  kAsdfjkl789: 2,
  k1234Qweras: 3,
};
ash.ime.mojom.ZhuyinSelectionKeysSpec = { $: mojo.internal.Enum() };

// Enum: ChineseLanguageMode
ash.ime.mojom.ChineseLanguageMode = {
  kRaw: 0,
};
ash.ime.mojom.ChineseLanguageModeSpec = { $: mojo.internal.Enum() };

// Enum: JapaneseInputMode
ash.ime.mojom.JapaneseInputMode = {
  kKatakana: 0,
  kWideLatin: 1,
  kHalfWidthKatakana: 2,
  kLatin: 3,
  kDirectInput: 4,
};
ash.ime.mojom.JapaneseInputModeSpec = { $: mojo.internal.Enum() };

// Enum: SuggestionMode
ash.ime.mojom.SuggestionMode = {
  kCompletion: 0,
  kPrediction: 1,
};
ash.ime.mojom.SuggestionModeSpec = { $: mojo.internal.Enum() };

// Enum: SuggestionType
ash.ime.mojom.SuggestionType = {
  kAssistivePersonalInfo: 0,
  kAssistiveEmoji: 1,
  kMultiWord: 2,
};
ash.ime.mojom.SuggestionTypeSpec = { $: mojo.internal.Enum() };

// Enum: AssistiveWindowType
ash.ime.mojom.AssistiveWindowType = {
  kUndo: 0,
  kEmojiSuggestionDeprecated: 1,
  kPersonalInfoSuggestion: 2,
  kGrammarSuggestion: 3,
  kMultiWordSuggestion: 4,
  kLongpressDiacriticsSuggestion: 5,
};
ash.ime.mojom.AssistiveWindowTypeSpec = { $: mojo.internal.Enum() };

// Enum: AutocorrectSuggestionProvider
ash.ime.mojom.AutocorrectSuggestionProvider = {
  kUsEnglishPrebundled: 0,
  kUsEnglishDownloaded: 1,
  kUsEnglish840: 2,
};
ash.ime.mojom.AutocorrectSuggestionProviderSpec = { $: mojo.internal.Enum() };

// Union: DomKey
ash.ime.mojom.DomKeySpec = { $: mojo.internal.Union(
    'ash.ime.mojom.DomKey', {
      'named_key': {
        'ordinal': 0,
        'type': ash.ime.mojom.NamedDomKeySpec,
      }},
      'codepoint': {
        'ordinal': 1,
        'type': mojo.internal.Uint32,
      }},
    })
};

// Union: InputMethodSettings
ash.ime.mojom.InputMethodSettingsSpec = { $: mojo.internal.Union(
    'ash.ime.mojom.InputMethodSettings', {
      'korean_settings': {
        'ordinal': 0,
        'type': ash.ime.mojom.KoreanSettingsSpec,
      }},
      'latin_settings': {
        'ordinal': 1,
        'type': ash.ime.mojom.LatinSettingsSpec,
      }},
      'pinyin_settings': {
        'ordinal': 2,
        'type': ash.ime.mojom.PinyinSettingsSpec,
      }},
      'zhuyin_settings': {
        'ordinal': 3,
        'type': ash.ime.mojom.ZhuyinSettingsSpec,
      }},
      'null_settings': {
        'ordinal': 4,
        'type': mojo.internal.Bool,
      }},
      'japanese_settings': {
        'ordinal': 5,
        'type': ash.ime.mojom.JapaneseSettingsSpec,
      }},
      'vietnamese_telex_settings': {
        'ordinal': 6,
        'type': ash.ime.mojom.VietnameseTelexSettingsSpec,
      }},
      'vietnamese_vni_settings': {
        'ordinal': 7,
        'type': ash.ime.mojom.VietnameseVniSettingsSpec,
      }},
    })
};

// Union: InputMethodQuickSettings
ash.ime.mojom.InputMethodQuickSettingsSpec = { $: mojo.internal.Union(
    'ash.ime.mojom.InputMethodQuickSettings', {
      'chinese_settings': {
        'ordinal': 0,
        'type': ash.ime.mojom.ChineseQuickSettingsSpec,
      }},
      'japanese_settings': {
        'ordinal': 1,
        'type': ash.ime.mojom.JapaneseQuickSettingsSpec,
      }},
    })
};

// Struct: ModifierState
ash.ime.mojom.ModifierStateSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ModifierState',
      packedSize: 16,
      fields: [
        { name: 'alt', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'alt_graph', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'caps_lock', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'control', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'meta', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shift', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PhysicalKeyEvent
ash.ime.mojom.PhysicalKeyEventSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.PhysicalKeyEvent',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.KeyEventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: ash.ime.mojom.DomKeySpec, nullable: false, minVersion: 0 },
        { name: 'code', packedOffset: 4, packedBitOffset: 0, type: ash.ime.mojom.DomCodeSpec, nullable: false, minVersion: 0 },
        { name: 'modifier_state', packedOffset: 24, packedBitOffset: 0, type: ash.ime.mojom.ModifierStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: SelectionRange
ash.ime.mojom.SelectionRangeSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.SelectionRange',
      packedSize: 16,
      fields: [
        { name: 'anchor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'focus', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: InputFieldInfo
ash.ime.mojom.InputFieldInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputFieldInfo',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.InputFieldTypeSpec, nullable: false, minVersion: 0 },
        { name: 'autocorrect', packedOffset: 4, packedBitOffset: 0, type: ash.ime.mojom.AutocorrectModeSpec, nullable: false, minVersion: 0 },
        { name: 'personalization', packedOffset: 8, packedBitOffset: 0, type: ash.ime.mojom.PersonalizationModeSpec, nullable: false, minVersion: 0 },
        { name: 'text_prediction', packedOffset: 12, packedBitOffset: 0, type: ash.ime.mojom.TextPredictionModeSpec, nullable: false, minVersion: 10 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 10, packedSize: 24}]
    }
  }
};

// Struct: KoreanSettings
ash.ime.mojom.KoreanSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.KoreanSettings',
      packedSize: 16,
      fields: [
        { name: 'input_multiple_syllables', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'layout', packedOffset: 4, packedBitOffset: 0, type: ash.ime.mojom.KoreanLayoutSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LatinSettings
ash.ime.mojom.LatinSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.LatinSettings',
      packedSize: 16,
      fields: [
        { name: 'autocorrect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'predictive_writing', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 5 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 5, packedSize: 16}]
    }
  }
};

// Struct: FuzzyPinyinSettings
ash.ime.mojom.FuzzyPinyinSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.FuzzyPinyinSettings',
      packedSize: 16,
      fields: [
        { name: 'an_ang', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'en_eng', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ian_iang', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'k_g', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'r_l', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'uan_uang', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'c_ch', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'f_h', packedOffset: 0, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'in_ing', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'l_n', packedOffset: 1, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 's_sh', packedOffset: 1, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'z_zh', packedOffset: 1, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PinyinSettings
ash.ime.mojom.PinyinSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.PinyinSettings',
      packedSize: 24,
      fields: [
        { name: 'fuzzy_pinyin', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.FuzzyPinyinSettingsSpec, nullable: true, minVersion: 6 },
        { name: 'layout', packedOffset: 8, packedBitOffset: 0, type: ash.ime.mojom.PinyinLayoutSpec, nullable: false, minVersion: 6 },
        { name: 'use_hyphen_and_equals_to_page_candidates', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 6 },
        { name: 'use_comma_and_period_to_page_candidates', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 6 },
        { name: 'default_to_chinese', packedOffset: 12, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 6 },
        { name: 'default_to_full_width_characters', packedOffset: 12, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 6 },
        { name: 'default_to_full_width_punctuation', packedOffset: 12, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 6 },
      ],
      versions: [{version: 6, packedSize: 24}]
    }
  }
};

// Struct: JapaneseSettings
ash.ime.mojom.JapaneseSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.JapaneseSettings',
      packedSize: 16,
      fields: [
        { name: 'kUnspecified', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ZhuyinSettings
ash.ime.mojom.ZhuyinSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ZhuyinSettings',
      packedSize: 24,
      fields: [
        { name: 'layout', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.ZhuyinLayoutSpec, nullable: false, minVersion: 7 },
        { name: 'selection_keys', packedOffset: 4, packedBitOffset: 0, type: ash.ime.mojom.ZhuyinSelectionKeysSpec, nullable: false, minVersion: 7 },
        { name: 'page_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 7 },
      ],
      versions: [{version: 7, packedSize: 24}]
    }
  }
};

// Struct: ChineseQuickSettings
ash.ime.mojom.ChineseQuickSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ChineseQuickSettings',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.ChineseLanguageModeSpec, nullable: false, minVersion: 0 },
        { name: 'full_width_characters', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'full_width_punctuation', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: JapaneseQuickSettings
ash.ime.mojom.JapaneseQuickSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.JapaneseQuickSettings',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.JapaneseInputModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SuggestionCandidate
ash.ime.mojom.SuggestionCandidateSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.SuggestionCandidate',
      packedSize: 32,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.SuggestionModeSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 4, packedBitOffset: 0, type: ash.ime.mojom.SuggestionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'confirmed_length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 13 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 13, packedSize: 32}]
    }
  }
};

// Struct: InputMethodMetadata
ash.ime.mojom.InputMethodMetadataSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodMetadata',
      packedSize: 16,
      fields: [
        { name: 'autocorrect_suggestion_provider', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.AutocorrectSuggestionProviderSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AssistiveWindow
ash.ime.mojom.AssistiveWindowSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.AssistiveWindow',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.AssistiveWindowTypeSpec, nullable: false, minVersion: 0 },
        { name: 'candidates', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.ime.mojom.SuggestionCandidateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VietnameseTelexSettings
ash.ime.mojom.VietnameseTelexSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.VietnameseTelexSettings',
      packedSize: 16,
      fields: [
        { name: 'allow_flexible_diacritics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'new_style_tone_mark_placement', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_insert_double_horn_on_uo', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_w_for_u_horn_shortcut', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_underline_for_composition_text', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 20 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 20, packedSize: 16}]
    }
  }
};

// Struct: VietnameseVniSettings
ash.ime.mojom.VietnameseVniSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.VietnameseVniSettings',
      packedSize: 16,
      fields: [
        { name: 'allow_flexible_diacritics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'new_style_tone_mark_placement', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_insert_double_horn_on_uo', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_underline_for_composition_text', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 20 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 20, packedSize: 16}]
    }
  }
};

// Interface: InputMethod
ash.ime.mojom.InputMethod = {};

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
      [input_field_info, settings]);
  }

  onFocus(input_field_info, deprecated_settings) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.ime.mojom.InputMethod_OnFocus_ParamsSpec,
      ash.ime.mojom.InputMethod_OnFocus_ResponseParamsSpec,
      [input_field_info, deprecated_settings]);
  }

  onBlur() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.mojom.InputMethod_OnBlur_ParamsSpec,
      null,
      []);
  }

  processKeyEvent(event) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.ime.mojom.InputMethod_ProcessKeyEvent_ParamsSpec,
      ash.ime.mojom.InputMethod_ProcessKeyEvent_ResponseParamsSpec,
      [event]);
  }

  onSurroundingTextChanged(text, offset, selection_range) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.ime.mojom.InputMethod_OnSurroundingTextChanged_ParamsSpec,
      null,
      [text, offset, selection_range]);
  }

  onCompositionCanceledBySystem() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.ime.mojom.InputMethod_OnCompositionCanceledBySystem_ParamsSpec,
      null,
      []);
  }

  onCandidateSelected(selected_candidate_index) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.ime.mojom.InputMethod_OnCandidateSelected_ParamsSpec,
      null,
      [selected_candidate_index]);
  }

  onQuickSettingsUpdated(settings) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.ime.mojom.InputMethod_OnQuickSettingsUpdated_ParamsSpec,
      null,
      [settings]);
  }

  isReadyForTesting() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.ime.mojom.InputMethod_IsReadyForTesting_ParamsSpec,
      ash.ime.mojom.InputMethod_IsReadyForTesting_ResponseParamsSpec,
      []);
  }

  onAssistiveWindowChanged(window) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.ime.mojom.InputMethod_OnAssistiveWindowChanged_ParamsSpec,
      null,
      [window]);
  }

};

ash.ime.mojom.InputMethod.getRemote = function() {
  let remote = new ash.ime.mojom.InputMethodRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputMethod',
    'context');
  return remote.$;
};

// ParamsSpec for OnFocusDeprecated
ash.ime.mojom.InputMethod_OnFocusDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethod.OnFocusDeprecated_Params',
      packedSize: 32,
      fields: [
        { name: 'input_field_info', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.InputFieldInfoSpec, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: ash.ime.mojom.InputMethodSettingsSpec, nullable: true, minVersion: 4 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 4, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnFocus
ash.ime.mojom.InputMethod_OnFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethod.OnFocus_Params',
      packedSize: 32,
      fields: [
        { name: 'input_field_info', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.InputFieldInfoSpec, nullable: false, minVersion: 0 },
        { name: 'deprecated_settings', packedOffset: 8, packedBitOffset: 0, type: ash.ime.mojom.InputMethodSettingsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.ime.mojom.InputMethod_OnFocus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethod.OnFocus_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: ash.ime.mojom.InputMethodMetadataSpec, nullable: true, minVersion: 17 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 17, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnBlur
ash.ime.mojom.InputMethod_OnBlur_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethod.OnBlur_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ProcessKeyEvent
ash.ime.mojom.InputMethod_ProcessKeyEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethod.ProcessKeyEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.PhysicalKeyEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.mojom.InputMethod_ProcessKeyEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethod.ProcessKeyEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.KeyEventResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSurroundingTextChanged
ash.ime.mojom.InputMethod_OnSurroundingTextChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethod.OnSurroundingTextChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'selection_range', packedOffset: 16, packedBitOffset: 0, type: ash.ime.mojom.SelectionRangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnCompositionCanceledBySystem
ash.ime.mojom.InputMethod_OnCompositionCanceledBySystem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethod.OnCompositionCanceledBySystem_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnCandidateSelected
ash.ime.mojom.InputMethod_OnCandidateSelected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethod.OnCandidateSelected_Params',
      packedSize: 16,
      fields: [
        { name: 'selected_candidate_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnQuickSettingsUpdated
ash.ime.mojom.InputMethod_OnQuickSettingsUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethod.OnQuickSettingsUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.InputMethodQuickSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for IsReadyForTesting
ash.ime.mojom.InputMethod_IsReadyForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethod.IsReadyForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.ime.mojom.InputMethod_IsReadyForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethod.IsReadyForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ready', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAssistiveWindowChanged
ash.ime.mojom.InputMethod_OnAssistiveWindowChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethod.OnAssistiveWindowChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'window', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.AssistiveWindowSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.ime.mojom.InputMethodPtr = ash.ime.mojom.InputMethodRemote;
ash.ime.mojom.InputMethodRequest = ash.ime.mojom.InputMethodPendingReceiver;

