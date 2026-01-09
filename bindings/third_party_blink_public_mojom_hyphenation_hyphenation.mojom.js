// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/hyphenation/hyphenation.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: Hyphenation
blink.mojom.Hyphenation = {};

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
      [locale]);
  }

};

blink.mojom.Hyphenation.getRemote = function() {
  let remote = new blink.mojom.HyphenationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.Hyphenation',
    'context');
  return remote.$;
};

// ParamsSpec for OpenDictionary
blink.mojom.Hyphenation_OpenDictionary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Hyphenation.OpenDictionary_Params',
      packedSize: 16,
      fields: [
        { name: 'locale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.Hyphenation_OpenDictionary_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Hyphenation.OpenDictionary_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'hyphenation_dictionary_handle', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.HyphenationPtr = blink.mojom.HyphenationRemote;
blink.mojom.HyphenationRequest = blink.mojom.HyphenationPendingReceiver;

