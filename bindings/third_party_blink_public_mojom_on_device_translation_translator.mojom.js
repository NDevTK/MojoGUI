// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/on_device_translation/translator.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Interface: Translator
blink.mojom.mojom.Translator = {};

blink.mojom.mojom.TranslatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.TranslatorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.Translator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.TranslatorPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.TranslatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.TranslatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  translate(input, pending_responder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.Translator_Translate_ParamsSpec,
      null,
      [input, pending_responder]);
  }

  translateStreaming(input, pending_responder) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.Translator_TranslateStreaming_ParamsSpec,
      null,
      [input, pending_responder]);
  }

};

blink.mojom.mojom.Translator.getRemote = function() {
  let remote = new blink.mojom.mojom.TranslatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.Translator',
    'context');
  return remote.$;
};

// ParamsSpec for Translate
blink.mojom.mojom.Translator_Translate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Translator.Translate_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pending_responder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for TranslateStreaming
blink.mojom.mojom.Translator_TranslateStreaming_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Translator.TranslateStreaming_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pending_responder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.TranslatorPtr = blink.mojom.mojom.TranslatorRemote;
blink.mojom.mojom.TranslatorRequest = blink.mojom.mojom.TranslatorPendingReceiver;

