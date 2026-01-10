// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: SpellCheckSuggestion
blink.mojom.SpellCheckSuggestionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpellCheckSuggestion',
      packedSize: 16,
      fields: [
        { name: 'suggestion', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TextSuggestion
blink.mojom.TextSuggestionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextSuggestion',
      packedSize: 40,
      fields: [
        { name: 'marker_tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'suggestion_index', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'prefix', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'suggestion', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'suffix', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: TextSuggestionHost
blink.mojom.TextSuggestionHost = {};

blink.mojom.TextSuggestionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.TextSuggestionHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.TextSuggestionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.TextSuggestionHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.TextSuggestionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.TextSuggestionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startSuggestionMenuTimer() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.TextSuggestionHost_StartSuggestionMenuTimer_ParamsSpec,
      null,
      []);
  }

  showSpellCheckSuggestionMenu(caret_x, caret_y, marked_text, suggestions) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.TextSuggestionHost_ShowSpellCheckSuggestionMenu_ParamsSpec,
      null,
      [caret_x, caret_y, marked_text, suggestions]);
  }

  showTextSuggestionMenu(caret_x, caret_y, marked_text, suggestions) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.TextSuggestionHost_ShowTextSuggestionMenu_ParamsSpec,
      null,
      [caret_x, caret_y, marked_text, suggestions]);
  }

};

blink.mojom.TextSuggestionHost.getRemote = function() {
  let remote = new blink.mojom.TextSuggestionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.TextSuggestionHost',
    'context');
  return remote.$;
};

// ParamsSpec for StartSuggestionMenuTimer
blink.mojom.TextSuggestionHost_StartSuggestionMenuTimer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextSuggestionHost.StartSuggestionMenuTimer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ShowSpellCheckSuggestionMenu
blink.mojom.TextSuggestionHost_ShowSpellCheckSuggestionMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextSuggestionHost.ShowSpellCheckSuggestionMenu_Params',
      packedSize: 40,
      fields: [
        { name: 'caret_x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'caret_y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'marked_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'suggestions', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SpellCheckSuggestionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for ShowTextSuggestionMenu
blink.mojom.TextSuggestionHost_ShowTextSuggestionMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextSuggestionHost.ShowTextSuggestionMenu_Params',
      packedSize: 40,
      fields: [
        { name: 'caret_x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'caret_y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'marked_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'suggestions', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.TextSuggestionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
blink.mojom.TextSuggestionHostPtr = blink.mojom.TextSuggestionHostRemote;
blink.mojom.TextSuggestionHostRequest = blink.mojom.TextSuggestionHostPendingReceiver;

