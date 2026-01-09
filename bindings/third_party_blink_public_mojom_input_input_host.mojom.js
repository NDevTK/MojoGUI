// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: SpellCheckSuggestion
blink.mojom.SpellCheckSuggestion = class {
  constructor(values = {}) {
    this.suggestion = values.suggestion !== undefined ? values.suggestion : "";
  }
};

// Struct: TextSuggestion
blink.mojom.TextSuggestion = class {
  constructor(values = {}) {
    this.suffix = values.suffix !== undefined ? values.suffix : 0;
  }
};

// Interface: TextSuggestionHost
blink.mojom.TextSuggestionHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.TextSuggestionHost';
  }

  startSuggestionMenuTimer() {
    // Method: StartSuggestionMenuTimer
    // Call: StartSuggestionMenuTimer()
  }

  showSpellCheckSuggestionMenu(caret_x, caret_y, marked_text, suggestions) {
    // Method: ShowSpellCheckSuggestionMenu
    // Call: ShowSpellCheckSuggestionMenu(caret_x, caret_y, marked_text, suggestions)
  }

  showTextSuggestionMenu(caret_x, caret_y, marked_text, suggestions) {
    // Method: ShowTextSuggestionMenu
    // Call: ShowTextSuggestionMenu(caret_x, caret_y, marked_text, suggestions)
  }

};

blink.mojom.TextSuggestionHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
