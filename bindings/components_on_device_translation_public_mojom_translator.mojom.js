// Auto-generated MojoJS binding
// Source: chromium_src/components/on_device_translation/public/mojom/translator.mojom
// Module: on_device_translation.mojom

'use strict';

// Module namespace
var on_device_translation = on_device_translation || {};
on_device_translation.mojom = on_device_translation.mojom || {};


// Interface: Translator
on_device_translation.mojom.Translator = {};

on_device_translation.mojom.Translator_Translate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.Translator_Translate_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

on_device_translation.mojom.Translator_SplitSentences_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.Translator_SplitSentences_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

// ParamsSpec for Translate
on_device_translation.mojom.Translator_Translate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.Translator.Translate_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

on_device_translation.mojom.Translator_Translate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.Translator.Translate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SplitSentences
on_device_translation.mojom.Translator_SplitSentences_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.Translator.SplitSentences_Params',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

on_device_translation.mojom.Translator_SplitSentences_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.Translator.SplitSentences_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sentences', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_translation.mojom.TranslatorPtr = on_device_translation.mojom.TranslatorRemote;
on_device_translation.mojom.TranslatorRequest = on_device_translation.mojom.TranslatorPendingReceiver;

