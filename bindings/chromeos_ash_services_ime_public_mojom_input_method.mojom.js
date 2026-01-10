// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_method.mojom
// Module: ash.ime.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};

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
      mojo.internal.StructField('layout', 0, 0, ash.ime.mojom.KoreanLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_multiple_syllables', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
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
      mojo.internal.StructField('selection_range', 8, 0, ash.ime.mojom.SelectionRangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
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
    this.ordinals = window.mojoScrambler.getOrdinals('InputMethod', [
      { explicit: 0 },
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
    ]);
  }

  onFocusDeprecated(input_field_info, settings) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.ime.mojom.InputMethod_OnFocusDeprecated_ParamsSpec,
      null,
      [input_field_info, settings],
      false);
  }

  onFocus(input_field_info, deprecated_settings) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.ime.mojom.InputMethod_OnFocus_ParamsSpec,
      ash.ime.mojom.InputMethod_OnFocus_ResponseParamsSpec,
      [input_field_info, deprecated_settings],
      false);
  }

  onBlur() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.ime.mojom.InputMethod_OnBlur_ParamsSpec,
      null,
      [],
      false);
  }

  processKeyEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.ime.mojom.InputMethod_ProcessKeyEvent_ParamsSpec,
      ash.ime.mojom.InputMethod_ProcessKeyEvent_ResponseParamsSpec,
      [event],
      false);
  }

  onSurroundingTextChanged(text, offset, selection_range) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.ime.mojom.InputMethod_OnSurroundingTextChanged_ParamsSpec,
      null,
      [text, offset, selection_range],
      false);
  }

  onCompositionCanceledBySystem() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.ime.mojom.InputMethod_OnCompositionCanceledBySystem_ParamsSpec,
      null,
      [],
      false);
  }

  onCandidateSelected(selected_candidate_index) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.ime.mojom.InputMethod_OnCandidateSelected_ParamsSpec,
      null,
      [selected_candidate_index],
      false);
  }

  onQuickSettingsUpdated(settings) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.ime.mojom.InputMethod_OnQuickSettingsUpdated_ParamsSpec,
      null,
      [settings],
      false);
  }

  isReadyForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.ime.mojom.InputMethod_IsReadyForTesting_ParamsSpec,
      ash.ime.mojom.InputMethod_IsReadyForTesting_ResponseParamsSpec,
      [],
      false);
  }

  onAssistiveWindowChanged(window) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.ime.mojom.InputMethod_OnAssistiveWindowChanged_ParamsSpec,
      null,
      [window],
      false);
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

ash.ime.mojom.InputMethodReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputMethod', [
      { explicit: 0 },
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnFocusDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnFocusDeprecated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFocusDeprecated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnFocus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFocus (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnBlur
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnBlur_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBlur (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ProcessKeyEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethod_ProcessKeyEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessKeyEvent (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnSurroundingTextChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnSurroundingTextChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSurroundingTextChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnCompositionCanceledBySystem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnCompositionCanceledBySystem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCompositionCanceledBySystem (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnCandidateSelected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnCandidateSelected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCandidateSelected (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnQuickSettingsUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnQuickSettingsUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnQuickSettingsUpdated (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: IsReadyForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethod_IsReadyForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsReadyForTesting (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnAssistiveWindowChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnAssistiveWindowChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAssistiveWindowChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnFocusDeprecated_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onFocusDeprecated');
          const result = this.impl.onFocusDeprecated(params.input_field_info, params.settings);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnFocus_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onFocus');
          const result = this.impl.onFocus(params.input_field_info, params.deprecated_settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethod_OnFocus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnBlur_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onBlur');
          const result = this.impl.onBlur();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethod_ProcessKeyEvent_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.processKeyEvent');
          const result = this.impl.processKeyEvent(params.event);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethod_ProcessKeyEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnSurroundingTextChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onSurroundingTextChanged');
          const result = this.impl.onSurroundingTextChanged(params.text, params.offset, params.selection_range);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnCompositionCanceledBySystem_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onCompositionCanceledBySystem');
          const result = this.impl.onCompositionCanceledBySystem();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnCandidateSelected_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onCandidateSelected');
          const result = this.impl.onCandidateSelected(params.selected_candidate_index);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnQuickSettingsUpdated_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onQuickSettingsUpdated');
          const result = this.impl.onQuickSettingsUpdated(params.settings);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethod_IsReadyForTesting_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.isReadyForTesting');
          const result = this.impl.isReadyForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethod_IsReadyForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethod_OnAssistiveWindowChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onAssistiveWindowChanged');
          const result = this.impl.onAssistiveWindowChanged(params.window);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.ime.mojom.InputMethodReceiver = ash.ime.mojom.InputMethodReceiver;

ash.ime.mojom.InputMethodPtr = ash.ime.mojom.InputMethodRemote;
ash.ime.mojom.InputMethodRequest = ash.ime.mojom.InputMethodPendingReceiver;

