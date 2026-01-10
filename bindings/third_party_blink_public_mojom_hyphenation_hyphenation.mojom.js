// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/hyphenation/hyphenation.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.Hyphenation = {};
blink.mojom.Hyphenation.$interfaceName = 'blink.mojom.Hyphenation';
blink.mojom.Hyphenation_OpenDictionary_ParamsSpec = { $: {} };
blink.mojom.Hyphenation_OpenDictionary_ResponseParamsSpec = { $: {} };

// Interface: Hyphenation
mojo.internal.Struct(
    blink.mojom.Hyphenation_OpenDictionary_ParamsSpec, 'blink.mojom.Hyphenation_OpenDictionary_Params', [
      mojo.internal.StructField('locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Hyphenation_OpenDictionary_ResponseParamsSpec, 'blink.mojom.Hyphenation_OpenDictionary_ResponseParams', [
      mojo.internal.StructField('hyphenation_dictionary_handle', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.HyphenationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.HyphenationRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.Hyphenation';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.HyphenationPendingReceiver,
      handle);
    this.$ = new blink.mojom.HyphenationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.HyphenationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openDictionary(locale) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.Hyphenation_OpenDictionary_ParamsSpec,
      blink.mojom.Hyphenation_OpenDictionary_ResponseParamsSpec,
      [locale],
      false);
  }

};

blink.mojom.Hyphenation.getRemote = function() {
  let remote = new blink.mojom.HyphenationRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.Hyphenation',
    'context');
  return remote.$;
};

blink.mojom.HyphenationPtr = blink.mojom.HyphenationRemote;
blink.mojom.HyphenationRequest = blink.mojom.HyphenationPendingReceiver;

