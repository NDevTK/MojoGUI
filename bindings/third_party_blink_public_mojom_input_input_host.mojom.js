// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SpellCheckSuggestionSpec = { $: {} };
blink.mojom.TextSuggestionSpec = { $: {} };
blink.mojom.TextSuggestionHost = {};
blink.mojom.TextSuggestionHost.$interfaceName = 'blink.mojom.TextSuggestionHost';
blink.mojom.TextSuggestionHost_StartSuggestionMenuTimer_ParamsSpec = { $: {} };
blink.mojom.TextSuggestionHost_ShowSpellCheckSuggestionMenu_ParamsSpec = { $: {} };
blink.mojom.TextSuggestionHost_ShowTextSuggestionMenu_ParamsSpec = { $: {} };

// Struct: SpellCheckSuggestion
mojo.internal.Struct(
    blink.mojom.SpellCheckSuggestionSpec, 'blink.mojom.SpellCheckSuggestion', [
      mojo.internal.StructField('suggestion', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TextSuggestion
mojo.internal.Struct(
    blink.mojom.TextSuggestionSpec, 'blink.mojom.TextSuggestion', [
      mojo.internal.StructField('marker_tag', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('suggestion_index', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('prefix', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suggestion', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suffix', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: TextSuggestionHost
mojo.internal.Struct(
    blink.mojom.TextSuggestionHost_StartSuggestionMenuTimer_ParamsSpec, 'blink.mojom.TextSuggestionHost_StartSuggestionMenuTimer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.TextSuggestionHost_ShowSpellCheckSuggestionMenu_ParamsSpec, 'blink.mojom.TextSuggestionHost_ShowSpellCheckSuggestionMenu_Params', [
      mojo.internal.StructField('caret_x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('caret_y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('marked_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suggestions', 24, 0, mojo.internal.Array(blink.mojom.SpellCheckSuggestionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.TextSuggestionHost_ShowTextSuggestionMenu_ParamsSpec, 'blink.mojom.TextSuggestionHost_ShowTextSuggestionMenu_Params', [
      mojo.internal.StructField('caret_x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('caret_y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('marked_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suggestions', 24, 0, mojo.internal.Array(blink.mojom.TextSuggestionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

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
      [],
      false);
  }

  showSpellCheckSuggestionMenu(caret_x, caret_y, marked_text, suggestions) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.TextSuggestionHost_ShowSpellCheckSuggestionMenu_ParamsSpec,
      null,
      [caret_x, caret_y, marked_text, suggestions],
      false);
  }

  showTextSuggestionMenu(caret_x, caret_y, marked_text, suggestions) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.TextSuggestionHost_ShowTextSuggestionMenu_ParamsSpec,
      null,
      [caret_x, caret_y, marked_text, suggestions],
      false);
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

blink.mojom.TextSuggestionHostPtr = blink.mojom.TextSuggestionHostRemote;
blink.mojom.TextSuggestionHostRequest = blink.mojom.TextSuggestionHostPendingReceiver;

