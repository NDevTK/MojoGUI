// Auto-generated MojoJS binding
// Source: chromium_src/components/on_device_translation/public/mojom/translator.mojom
// Module: on_device_translation.mojom

'use strict';

// Module namespace
var on_device_translation = on_device_translation || {};
on_device_translation.mojom = on_device_translation.mojom || {};

on_device_translation.mojom.Translator = {};
on_device_translation.mojom.Translator.$interfaceName = 'on_device_translation.mojom.Translator';
on_device_translation.mojom.Translator_Translate_ParamsSpec = { $: {} };
on_device_translation.mojom.Translator_Translate_ResponseParamsSpec = { $: {} };
on_device_translation.mojom.Translator_SplitSentences_ParamsSpec = { $: {} };
on_device_translation.mojom.Translator_SplitSentences_ResponseParamsSpec = { $: {} };

// Interface: Translator
mojo.internal.Struct(
    on_device_translation.mojom.Translator_Translate_ParamsSpec, 'on_device_translation.mojom.Translator_Translate_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_translation.mojom.Translator_Translate_ResponseParamsSpec, 'on_device_translation.mojom.Translator_Translate_ResponseParams', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_translation.mojom.Translator_SplitSentences_ParamsSpec, 'on_device_translation.mojom.Translator_SplitSentences_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_translation.mojom.Translator_SplitSentences_ResponseParamsSpec, 'on_device_translation.mojom.Translator_SplitSentences_ResponseParams', [
      mojo.internal.StructField('sentences', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_translation.mojom.TranslatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation.mojom.TranslatorRemote = class {
  static get $interfaceName() {
    return 'on_device_translation.mojom.Translator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation.mojom.TranslatorPendingReceiver,
      handle);
    this.$ = new on_device_translation.mojom.TranslatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_translation.mojom.TranslatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  translate(input) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_translation.mojom.Translator_Translate_ParamsSpec,
      on_device_translation.mojom.Translator_Translate_ResponseParamsSpec,
      [input]);
  }

  splitSentences(input) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_translation.mojom.Translator_SplitSentences_ParamsSpec,
      on_device_translation.mojom.Translator_SplitSentences_ResponseParamsSpec,
      [input]);
  }

};

on_device_translation.mojom.Translator.getRemote = function() {
  let remote = new on_device_translation.mojom.TranslatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation.mojom.Translator',
    'context');
  return remote.$;
};

on_device_translation.mojom.TranslatorPtr = on_device_translation.mojom.TranslatorRemote;
on_device_translation.mojom.TranslatorRequest = on_device_translation.mojom.TranslatorPendingReceiver;

