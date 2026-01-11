// Auto-generated MojoJS binding
// Source: chromium_src/components/spellcheck/common/spellcheck_panel.mojom
// Module: spellcheck.mojom

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
  toggleSpellPanel(visible) {
    return this.$.toggleSpellPanel(visible);
  }
  advanceToNextMisspelling() {
    return this.$.advanceToNextMisspelling();
  }
};

spellcheck.mojom.SpellCheckPanelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpellCheckPanel', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  toggleSpellPanel(visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      spellcheck.mojom.SpellCheckPanel_ToggleSpellPanel_ParamsSpec,
      null,
      [visible],
      false);
  }

  advanceToNextMisspelling() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpellCheckPanel', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(spellcheck.mojom.SpellCheckPanel_ToggleSpellPanel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(spellcheck.mojom.SpellCheckPanel_AdvanceToNextMisspelling_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellCheckPanel_ToggleSpellPanel_ParamsSpec.$.structSpec);
          const result = this.impl.toggleSpellPanel(params.visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellCheckPanel_AdvanceToNextMisspelling_ParamsSpec.$.structSpec);
          const result = this.impl.advanceToNextMisspelling();
          break;
        }
      }
      } catch (err) {}
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
  showSpellingPanel(show) {
    return this.$.showSpellingPanel(show);
  }
  updateSpellingPanelWithMisspelledWord(word) {
    return this.$.updateSpellingPanelWithMisspelledWord(word);
  }
};

spellcheck.mojom.SpellCheckPanelHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpellCheckPanelHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  showSpellingPanel(show) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      spellcheck.mojom.SpellCheckPanelHost_ShowSpellingPanel_ParamsSpec,
      null,
      [show],
      false);
  }

  updateSpellingPanelWithMisspelledWord(word) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpellCheckPanelHost', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(spellcheck.mojom.SpellCheckPanelHost_ShowSpellingPanel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(spellcheck.mojom.SpellCheckPanelHost_UpdateSpellingPanelWithMisspelledWord_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellCheckPanelHost_ShowSpellingPanel_ParamsSpec.$.structSpec);
          const result = this.impl.showSpellingPanel(params.show);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(spellcheck.mojom.SpellCheckPanelHost_UpdateSpellingPanelWithMisspelledWord_ParamsSpec.$.structSpec);
          const result = this.impl.updateSpellingPanelWithMisspelledWord(params.word);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

spellcheck.mojom.SpellCheckPanelHostReceiver = spellcheck.mojom.SpellCheckPanelHostReceiver;

spellcheck.mojom.SpellCheckPanelHostPtr = spellcheck.mojom.SpellCheckPanelHostRemote;
spellcheck.mojom.SpellCheckPanelHostRequest = spellcheck.mojom.SpellCheckPanelHostPendingReceiver;

