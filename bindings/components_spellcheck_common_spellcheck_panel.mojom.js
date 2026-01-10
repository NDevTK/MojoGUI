// Auto-generated MojoJS binding
// Source: chromium_src/components/spellcheck/common/spellcheck_panel.mojom
// Module: spellcheck.mojom

'use strict';

// Module namespace
var spellcheck = spellcheck || {};
spellcheck.mojom = spellcheck.mojom || {};


// Interface: SpellCheckPanel
spellcheck.mojom.mojom.SpellCheckPanel = {};

spellcheck.mojom.mojom.SpellCheckPanelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

spellcheck.mojom.mojom.SpellCheckPanelRemote = class {
  static get $interfaceName() {
    return 'spellcheck.mojom.SpellCheckPanel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      spellcheck.mojom.mojom.SpellCheckPanelPendingReceiver,
      handle);
    this.$ = new spellcheck.mojom.mojom.SpellCheckPanelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

spellcheck.mojom.mojom.SpellCheckPanelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  toggleSpellPanel(visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      spellcheck.mojom.mojom.SpellCheckPanel_ToggleSpellPanel_ParamsSpec,
      null,
      [visible]);
  }

  advanceToNextMisspelling() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.mojom.SpellCheckPanel_AdvanceToNextMisspelling_ParamsSpec,
      null,
      []);
  }

};

spellcheck.mojom.mojom.SpellCheckPanel.getRemote = function() {
  let remote = new spellcheck.mojom.mojom.SpellCheckPanelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'spellcheck.mojom.SpellCheckPanel',
    'context');
  return remote.$;
};

// ParamsSpec for ToggleSpellPanel
spellcheck.mojom.mojom.SpellCheckPanel_ToggleSpellPanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckPanel.ToggleSpellPanel_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AdvanceToNextMisspelling
spellcheck.mojom.mojom.SpellCheckPanel_AdvanceToNextMisspelling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckPanel.AdvanceToNextMisspelling_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
spellcheck.mojom.mojom.SpellCheckPanelPtr = spellcheck.mojom.mojom.SpellCheckPanelRemote;
spellcheck.mojom.mojom.SpellCheckPanelRequest = spellcheck.mojom.mojom.SpellCheckPanelPendingReceiver;


// Interface: SpellCheckPanelHost
spellcheck.mojom.mojom.SpellCheckPanelHost = {};

spellcheck.mojom.mojom.SpellCheckPanelHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

spellcheck.mojom.mojom.SpellCheckPanelHostRemote = class {
  static get $interfaceName() {
    return 'spellcheck.mojom.SpellCheckPanelHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      spellcheck.mojom.mojom.SpellCheckPanelHostPendingReceiver,
      handle);
    this.$ = new spellcheck.mojom.mojom.SpellCheckPanelHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

spellcheck.mojom.mojom.SpellCheckPanelHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showSpellingPanel(show) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      spellcheck.mojom.mojom.SpellCheckPanelHost_ShowSpellingPanel_ParamsSpec,
      null,
      [show]);
  }

  updateSpellingPanelWithMisspelledWord(word) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.mojom.SpellCheckPanelHost_UpdateSpellingPanelWithMisspelledWord_ParamsSpec,
      null,
      [word]);
  }

};

spellcheck.mojom.mojom.SpellCheckPanelHost.getRemote = function() {
  let remote = new spellcheck.mojom.mojom.SpellCheckPanelHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'spellcheck.mojom.SpellCheckPanelHost',
    'context');
  return remote.$;
};

// ParamsSpec for ShowSpellingPanel
spellcheck.mojom.mojom.SpellCheckPanelHost_ShowSpellingPanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckPanelHost.ShowSpellingPanel_Params',
      packedSize: 16,
      fields: [
        { name: 'show', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateSpellingPanelWithMisspelledWord
spellcheck.mojom.mojom.SpellCheckPanelHost_UpdateSpellingPanelWithMisspelledWord_ParamsSpec = {
  $: {
    structSpec: {
      name: 'spellcheck.mojom.SpellCheckPanelHost.UpdateSpellingPanelWithMisspelledWord_Params',
      packedSize: 16,
      fields: [
        { name: 'word', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
spellcheck.mojom.mojom.SpellCheckPanelHostPtr = spellcheck.mojom.mojom.SpellCheckPanelHostRemote;
spellcheck.mojom.mojom.SpellCheckPanelHostRequest = spellcheck.mojom.mojom.SpellCheckPanelHostPendingReceiver;

