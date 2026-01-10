// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/on_device_translation/translator.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.Translator = {};
blink.mojom.Translator.$interfaceName = 'blink.mojom.Translator';
blink.mojom.Translator_Translate_ParamsSpec = { $: {} };
blink.mojom.Translator_TranslateStreaming_ParamsSpec = { $: {} };

// Interface: Translator
mojo.internal.Struct(
    blink.mojom.Translator_Translate_ParamsSpec, 'blink.mojom.Translator_Translate_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pending_responder', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.Translator_TranslateStreaming_ParamsSpec, 'blink.mojom.Translator_TranslateStreaming_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pending_responder', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.TranslatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.TranslatorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.Translator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.TranslatorPendingReceiver,
      handle);
    this.$ = new blink.mojom.TranslatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.TranslatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  translate(input, pending_responder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.Translator_Translate_ParamsSpec,
      null,
      [input, pending_responder],
      false);
  }

  translateStreaming(input, pending_responder) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.Translator_TranslateStreaming_ParamsSpec,
      null,
      [input, pending_responder],
      false);
  }

};

blink.mojom.Translator.getRemote = function() {
  let remote = new blink.mojom.TranslatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.Translator',
    'context');
  return remote.$;
};

blink.mojom.TranslatorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.Translator_Translate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.translate(params.input, params.pending_responder);
          break;
        }
        case 1: {
          const params = blink.mojom.Translator_TranslateStreaming_ParamsSpec.$.decode(message.payload);
          const result = this.impl.translateStreaming(params.input, params.pending_responder);
          break;
        }
      }
    });
  }
};

blink.mojom.TranslatorReceiver = blink.mojom.TranslatorReceiver;

blink.mojom.TranslatorPtr = blink.mojom.TranslatorRemote;
blink.mojom.TranslatorRequest = blink.mojom.TranslatorPendingReceiver;

