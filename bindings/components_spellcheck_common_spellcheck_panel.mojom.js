// Auto-generated MojoJS binding
// Source: chromium_src/components/spellcheck/common/spellcheck_panel.mojom
// Module: spellcheck.mojom

'use strict';

// Module namespace
var spellcheck = spellcheck || {};
spellcheck.mojom = spellcheck.mojom || {};


// Interface: SpellCheckPanel
spellcheck.mojom.SpellCheckPanelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

spellcheck.mojom.SpellCheckPanelRemote = class {
  static get $interfaceName() {
    return 'spellcheck.mojom.SpellCheckPanel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      spellcheck.mojom.SpellCheckPanelPendingReceiver,
      handle);
    this.$ = new spellcheck.mojom.SpellCheckPanelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

spellcheck.mojom.SpellCheckPanelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  toggleSpellPanel(visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      spellcheck.mojom.SpellCheckPanel_ToggleSpellPanel_ParamsSpec.$,
      null,
      [visible]);
  }

  advanceToNextMisspelling() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.SpellCheckPanel_AdvanceToNextMisspelling_ParamsSpec.$,
      null,
      []);
  }

};

spellcheck.mojom.SpellCheckPanel.getRemote = function() {
  let remote = new spellcheck.mojom.SpellCheckPanelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'spellcheck.mojom.SpellCheckPanel',
    'context');
  return remote.$;
};

// ParamsSpec for ToggleSpellPanel
spellcheck.mojom.SpellCheckPanel_ToggleSpellPanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckPanel.ToggleSpellPanel_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AdvanceToNextMisspelling
spellcheck.mojom.SpellCheckPanel_AdvanceToNextMisspelling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckPanel.AdvanceToNextMisspelling_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
spellcheck.mojom.SpellCheckPanelPtr = spellcheck.mojom.SpellCheckPanelRemote;
spellcheck.mojom.SpellCheckPanelRequest = spellcheck.mojom.SpellCheckPanelPendingReceiver;


// Interface: SpellCheckPanelHost
spellcheck.mojom.SpellCheckPanelHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

spellcheck.mojom.SpellCheckPanelHostRemote = class {
  static get $interfaceName() {
    return 'spellcheck.mojom.SpellCheckPanelHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      spellcheck.mojom.SpellCheckPanelHostPendingReceiver,
      handle);
    this.$ = new spellcheck.mojom.SpellCheckPanelHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

spellcheck.mojom.SpellCheckPanelHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showSpellingPanel(show) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      spellcheck.mojom.SpellCheckPanelHost_ShowSpellingPanel_ParamsSpec.$,
      null,
      [show]);
  }

  updateSpellingPanelWithMisspelledWord(word) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.SpellCheckPanelHost_UpdateSpellingPanelWithMisspelledWord_ParamsSpec.$,
      null,
      [word]);
  }

};

spellcheck.mojom.SpellCheckPanelHost.getRemote = function() {
  let remote = new spellcheck.mojom.SpellCheckPanelHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'spellcheck.mojom.SpellCheckPanelHost',
    'context');
  return remote.$;
};

// ParamsSpec for ShowSpellingPanel
spellcheck.mojom.SpellCheckPanelHost_ShowSpellingPanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckPanelHost.ShowSpellingPanel_Params',
      packedSize: 16,
      fields: [
        { name: 'show', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateSpellingPanelWithMisspelledWord
spellcheck.mojom.SpellCheckPanelHost_UpdateSpellingPanelWithMisspelledWord_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckPanelHost.UpdateSpellingPanelWithMisspelledWord_Params',
      packedSize: 16,
      fields: [
        { name: 'word', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
spellcheck.mojom.SpellCheckPanelHostPtr = spellcheck.mojom.SpellCheckPanelHostRemote;
spellcheck.mojom.SpellCheckPanelHostRequest = spellcheck.mojom.SpellCheckPanelHostPendingReceiver;

