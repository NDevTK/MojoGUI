// Auto-generated MojoJS binding
// Source: chromium_src/components/spellcheck/common/spellcheck_panel.mojom
// Module: spellcheck.mojom

'use strict';

// Module namespace
var spellcheck = spellcheck || {};
spellcheck.mojom = spellcheck.mojom || {};
var mojo_base = mojo_base || {};

spellcheck.mojom.SpellCheckPanel = {};
spellcheck.mojom.SpellCheckPanel.$interfaceName = 'spellcheck.mojom.SpellCheckPanel';
spellcheck.mojom.SpellCheckPanel_ToggleSpellPanel_ParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckPanel_AdvanceToNextMisspelling_ParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckPanelHost = {};
spellcheck.mojom.SpellCheckPanelHost.$interfaceName = 'spellcheck.mojom.SpellCheckPanelHost';
spellcheck.mojom.SpellCheckPanelHost_ShowSpellingPanel_ParamsSpec = { $: {} };
spellcheck.mojom.SpellCheckPanelHost_UpdateSpellingPanelWithMisspelledWord_ParamsSpec = { $: {} };

// Interface: SpellCheckPanel
mojo.internal.Struct(
    spellcheck.mojom.SpellCheckPanel_ToggleSpellPanel_ParamsSpec, 'spellcheck.mojom.SpellCheckPanel_ToggleSpellPanel_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellCheckPanel_AdvanceToNextMisspelling_ParamsSpec, 'spellcheck.mojom.SpellCheckPanel_AdvanceToNextMisspelling_Params', [
    ],
    [[0, 8]]);

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
      spellcheck.mojom.SpellCheckPanel_ToggleSpellPanel_ParamsSpec,
      null,
      [visible],
      false);
  }

  advanceToNextMisspelling() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.SpellCheckPanel_AdvanceToNextMisspelling_ParamsSpec,
      null,
      [],
      false);
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

spellcheck.mojom.SpellCheckPanelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = spellcheck.mojom.SpellCheckPanel_ToggleSpellPanel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleSpellPanel(params.visible);
          break;
        }
        case 1: {
          const params = spellcheck.mojom.SpellCheckPanel_AdvanceToNextMisspelling_ParamsSpec.$.decode(message.payload);
          const result = this.impl.advanceToNextMisspelling();
          break;
        }
      }
    }});
  }
};

spellcheck.mojom.SpellCheckPanelReceiver = spellcheck.mojom.SpellCheckPanelReceiver;

spellcheck.mojom.SpellCheckPanelPtr = spellcheck.mojom.SpellCheckPanelRemote;
spellcheck.mojom.SpellCheckPanelRequest = spellcheck.mojom.SpellCheckPanelPendingReceiver;


// Interface: SpellCheckPanelHost
mojo.internal.Struct(
    spellcheck.mojom.SpellCheckPanelHost_ShowSpellingPanel_ParamsSpec, 'spellcheck.mojom.SpellCheckPanelHost_ShowSpellingPanel_Params', [
      mojo.internal.StructField('show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    spellcheck.mojom.SpellCheckPanelHost_UpdateSpellingPanelWithMisspelledWord_ParamsSpec, 'spellcheck.mojom.SpellCheckPanelHost_UpdateSpellingPanelWithMisspelledWord_Params', [
      mojo.internal.StructField('word', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      spellcheck.mojom.SpellCheckPanelHost_ShowSpellingPanel_ParamsSpec,
      null,
      [show],
      false);
  }

  updateSpellingPanelWithMisspelledWord(word) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      spellcheck.mojom.SpellCheckPanelHost_UpdateSpellingPanelWithMisspelledWord_ParamsSpec,
      null,
      [word],
      false);
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

spellcheck.mojom.SpellCheckPanelHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = spellcheck.mojom.SpellCheckPanelHost_ShowSpellingPanel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showSpellingPanel(params.show);
          break;
        }
        case 1: {
          const params = spellcheck.mojom.SpellCheckPanelHost_UpdateSpellingPanelWithMisspelledWord_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateSpellingPanelWithMisspelledWord(params.word);
          break;
        }
      }
    }});
  }
};

spellcheck.mojom.SpellCheckPanelHostReceiver = spellcheck.mojom.SpellCheckPanelHostReceiver;

spellcheck.mojom.SpellCheckPanelHostPtr = spellcheck.mojom.SpellCheckPanelHostRemote;
spellcheck.mojom.SpellCheckPanelHostRequest = spellcheck.mojom.SpellCheckPanelHostPendingReceiver;

