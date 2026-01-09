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

// Enum: KeyEventResult
ash.ime.mojom.KeyEventResult = {
};

// Enum: InputFieldType
ash.ime.mojom.InputFieldType = {
  kSearch: 0,
  kTelephone: 1,
  kURL: 2,
  kEmail: 3,
  kNumber: 4,
};

// Enum: AutocorrectMode
ash.ime.mojom.AutocorrectMode = {
};

// Enum: PersonalizationMode
ash.ime.mojom.PersonalizationMode = {
  or: 0,
};

// Enum: TextPredictionMode
ash.ime.mojom.TextPredictionMode = {
  but: 0,
};

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

// Enum: PinyinLayout
ash.ime.mojom.PinyinLayout = {
  kDvorak: 0,
  kColemak: 1,
};

// Enum: InputMode
ash.ime.mojom.InputMode = {
  kRomaji: 0,
  kKana: 1,
};

// Enum: PunctuationStyle
ash.ime.mojom.PunctuationStyle = {
  kKutenTouten: 0,
  kCommaPeriod: 1,
  kKutenPeriod: 2,
  kCommaTouten: 3,
};

// Enum: SymbolStyle
ash.ime.mojom.SymbolStyle = {
  kCornerBracketMiddleDot: 0,
  kSquareBracketSlash: 1,
  kCornerBracketSlash: 2,
  kSquareBracketMiddleDot: 3,
};

// Enum: SpaceInputStyle
ash.ime.mojom.SpaceInputStyle = {
  kInputMode: 0,
  kFullWidth: 1,
  kHalfWidth: 2,
};

// Enum: SelectionShortcut
ash.ime.mojom.SelectionShortcut = {
  kDigits123456789: 0,
  kAsdfghjkl: 1,
  kNoShortcut: 2,
};

// Enum: KeymapStyle
ash.ime.mojom.KeymapStyle = {
  kCustom: 0,
  kAtok: 1,
  kMsime: 2,
  kKotoeri: 3,
  kMobile: 4,
  kChromeos: 5,
};

// Enum: ShiftKeyModeStyle
ash.ime.mojom.ShiftKeyModeStyle = {
  kOff: 0,
  kAlphanumeric: 1,
  kKatakana: 2,
};

// Enum: ZhuyinLayout
ash.ime.mojom.ZhuyinLayout = {
  kIbm: 0,
  kEten: 1,
};

// Enum: ZhuyinSelectionKeys
ash.ime.mojom.ZhuyinSelectionKeys = {
  and: 0,
  and: 1,
};

// Enum: ChineseLanguageMode
ash.ime.mojom.ChineseLanguageMode = {
  the: 0,
  the: 1,
};

// Enum: JapaneseInputMode
ash.ime.mojom.JapaneseInputMode = {
  kKatakana: 0,
  kWideLatin: 1,
  kHalfWidthKatakana: 2,
  kLatin: 3,
  kDirectInput: 4,
};

// Enum: SuggestionMode
ash.ime.mojom.SuggestionMode = {
  the: 0,
  the: 1,
};

// Enum: SuggestionType
ash.ime.mojom.SuggestionType = {
  kAssistivePersonalInfo: 0,
  kAssistiveEmoji: 1,
  kMultiWord: 2,
};

// Enum: AssistiveWindowType
ash.ime.mojom.AssistiveWindowType = {
  kUndo: 0,
  kEmojiSuggestionDeprecated: 1,
  kGrammarSuggestion: 2,
  kMultiWordSuggestion: 3,
  kLongpressDiacriticsSuggestion: 4,
};

// Enum: AutocorrectSuggestionProvider
ash.ime.mojom.AutocorrectSuggestionProvider = {
  kUsEnglishPrebundled: 0,
  kUsEnglishDownloaded: 1,
  kUsEnglish840: 2,
};

// Struct: ModifierState
ash.ime.mojom.ModifierState = class {
  constructor(values = {}) {
  }
};

// Struct: PhysicalKeyEvent
ash.ime.mojom.PhysicalKeyEvent = class {
  constructor(values = {}) {
    this.be = values.be !== undefined ? values.be : null;
  }
};

// Struct: SelectionRange
ash.ime.mojom.SelectionRange = class {
  constructor(values = {}) {
  }
};

// Struct: InputFieldInfo
ash.ime.mojom.InputFieldInfo = class {
  constructor(values = {}) {
  }
};

// Struct: KoreanSettings
ash.ime.mojom.KoreanSettings = class {
  constructor(values = {}) {
  }
};

// Struct: LatinSettings
ash.ime.mojom.LatinSettings = class {
  constructor(values = {}) {
  }
};

// Struct: FuzzyPinyinSettings
ash.ime.mojom.FuzzyPinyinSettings = class {
  constructor(values = {}) {
  }
};

// Struct: PinyinSettings
ash.ime.mojom.PinyinSettings = class {
  constructor(values = {}) {
  }
};

// Struct: JapaneseSettings
ash.ime.mojom.JapaneseSettings = class {
  constructor(values = {}) {
  }
};

// Struct: ZhuyinSettings
ash.ime.mojom.ZhuyinSettings = class {
  constructor(values = {}) {
  }
};

// Struct: ChineseQuickSettings
ash.ime.mojom.ChineseQuickSettings = class {
  constructor(values = {}) {
  }
};

// Struct: JapaneseQuickSettings
ash.ime.mojom.JapaneseQuickSettings = class {
  constructor(values = {}) {
  }
};

// Struct: SuggestionCandidate
ash.ime.mojom.SuggestionCandidate = class {
  constructor(values = {}) {
  }
};

// Struct: InputMethodMetadata
ash.ime.mojom.InputMethodMetadata = class {
  constructor(values = {}) {
  }
};

// Struct: AssistiveWindow
ash.ime.mojom.AssistiveWindow = class {
  constructor(values = {}) {
  }
};

// Struct: VietnameseTelexSettings
ash.ime.mojom.VietnameseTelexSettings = class {
  constructor(values = {}) {
  }
};

// Struct: VietnameseVniSettings
ash.ime.mojom.VietnameseVniSettings = class {
  constructor(values = {}) {
  }
};

// Interface: InputMethod
ash.ime.mojom.InputMethodPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.ime.mojom.InputMethod';
  }

};

ash.ime.mojom.InputMethodRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
