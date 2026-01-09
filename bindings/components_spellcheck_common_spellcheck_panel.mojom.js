// Auto-generated MojoJS binding
// Source: chromium_src/components/spellcheck/common/spellcheck_panel.mojom
// Module: spellcheck.mojom

'use strict';

// Module namespace
var spellcheck = spellcheck || {};
spellcheck.mojom = spellcheck.mojom || {};


// Interface: SpellCheckPanel
spellcheck.mojom.SpellCheckPanelPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'spellcheck.mojom.SpellCheckPanel';
  }

  toggleSpellPanel(visible) {
    // Method: ToggleSpellPanel
    // Call: ToggleSpellPanel(visible)
  }

  advanceToNextMisspelling() {
    // Method: AdvanceToNextMisspelling
    // Call: AdvanceToNextMisspelling()
  }

};

spellcheck.mojom.SpellCheckPanelRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpellCheckPanelHost
spellcheck.mojom.SpellCheckPanelHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'spellcheck.mojom.SpellCheckPanelHost';
  }

  showSpellingPanel(show) {
    // Method: ShowSpellingPanel
    // Call: ShowSpellingPanel(show)
  }

  updateSpellingPanelWithMisspelledWord(word) {
    // Method: UpdateSpellingPanelWithMisspelledWord
    // Call: UpdateSpellingPanelWithMisspelledWord(word)
  }

};

spellcheck.mojom.SpellCheckPanelHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
