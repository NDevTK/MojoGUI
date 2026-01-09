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
  kConsumedByIme: 0,
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
  kEnabled: 0,
};

// Enum: PersonalizationMode
ash.ime.mojom.PersonalizationMode = {
  kDisabled: 0,
  kEnabled: 1,
};

// Enum: TextPredictionMode
ash.ime.mojom.TextPredictionMode = {
  kEnabled: 0,
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
  kAsdfghjkl: 0,
  kAsdfzxcv89: 1,
  kAsdfjkl789: 2,
  k1234Qweras: 3,
};

// Enum: ChineseLanguageMode
ash.ime.mojom.ChineseLanguageMode = {
  kRaw: 0,
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
  kCompletion: 0,
  kPrediction: 1,
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
  kPersonalInfoSuggestion: 2,
  kGrammarSuggestion: 3,
  kMultiWordSuggestion: 4,
  kLongpressDiacriticsSuggestion: 5,
};

// Enum: AutocorrectSuggestionProvider
ash.ime.mojom.AutocorrectSuggestionProvider = {
  kUsEnglishPrebundled: 0,
  kUsEnglishDownloaded: 1,
  kUsEnglish840: 2,
};

// Interface: InputMethod
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

};

ash.ime.mojom.InputMethod.getRemote = function() {
  let remote = new ash.ime.mojom.InputMethodRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputMethod',
    'context');
  return remote.$;
}};

// Legacy compatibility
ash.ime.mojom.InputMethodPtr = ash.ime.mojom.InputMethodRemote;
ash.ime.mojom.InputMethodRequest = ash.ime.mojom.InputMethodPendingReceiver;

