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
};

// Enum: NamedDomKey
ash.ime.mojom.NamedDomKey = {
};

// Enum: DomCode
ash.ime.mojom.DomCode = {
};

// Enum: KeyEventResult
ash.ime.mojom.KeyEventResult = {
};

// Enum: InputFieldType
ash.ime.mojom.InputFieldType = {
};

// Enum: AutocorrectMode
ash.ime.mojom.AutocorrectMode = {
};

// Enum: PersonalizationMode
ash.ime.mojom.PersonalizationMode = {
};

// Enum: TextPredictionMode
ash.ime.mojom.TextPredictionMode = {
};

// Enum: KoreanLayout
ash.ime.mojom.KoreanLayout = {
};

// Enum: PinyinLayout
ash.ime.mojom.PinyinLayout = {
};

// Enum: InputMode
ash.ime.mojom.InputMode = {
};

// Enum: PunctuationStyle
ash.ime.mojom.PunctuationStyle = {
};

// Enum: SymbolStyle
ash.ime.mojom.SymbolStyle = {
};

// Enum: SpaceInputStyle
ash.ime.mojom.SpaceInputStyle = {
};

// Enum: SelectionShortcut
ash.ime.mojom.SelectionShortcut = {
};

// Enum: KeymapStyle
ash.ime.mojom.KeymapStyle = {
};

// Enum: ShiftKeyModeStyle
ash.ime.mojom.ShiftKeyModeStyle = {
};

// Enum: ZhuyinLayout
ash.ime.mojom.ZhuyinLayout = {
};

// Enum: ZhuyinSelectionKeys
ash.ime.mojom.ZhuyinSelectionKeys = {
};

// Enum: ChineseLanguageMode
ash.ime.mojom.ChineseLanguageMode = {
};

// Enum: JapaneseInputMode
ash.ime.mojom.JapaneseInputMode = {
};

// Enum: SuggestionMode
ash.ime.mojom.SuggestionMode = {
};

// Enum: SuggestionType
ash.ime.mojom.SuggestionType = {
};

// Enum: AssistiveWindowType
ash.ime.mojom.AssistiveWindowType = {
};

// Enum: AutocorrectSuggestionProvider
ash.ime.mojom.AutocorrectSuggestionProvider = {
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
