// Auto-generated MojoJS binding
// Source: chromium_src/components/translate/content/common/translate.mojom
// Module: translate.mojom

'use strict';

// Module namespace
var translate = translate || {};
translate.mojom = translate.mojom || {};


// Enum: TranslateError
translate.mojom.TranslateError = {
  NONE: 0,
  NETWORK: 1,
  INITIALIZATION_ERROR: 2,
  UNKNOWN_LANGUAGE: 3,
  UNSUPPORTED_LANGUAGE: 4,
  IDENTICAL_LANGUAGES: 5,
  TRANSLATION_ERROR: 6,
  TRANSLATION_TIMEOUT: 7,
  UNEXPECTED_SCRIPT_ERROR: 8,
  BAD_ORIGIN: 9,
  SCRIPT_LOAD_ERROR: 10,
  TRANSLATE_ERROR_MAX: 11,
};

// Struct: LanguageDetectionDetails
translate.mojom.LanguageDetectionDetailsSpec = {
  $: {
    structSpec: {
      name: 'translate.mojom.LanguageDetectionDetails',
      packedSize: 16,
      fields: [
        { name: 'detection_model_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: TranslateAgent
translate.mojom.TranslateAgent = {};

translate.mojom.TranslateAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

translate.mojom.TranslateAgentRemote = class {
  static get $interfaceName() {
    return 'translate.mojom.TranslateAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      translate.mojom.TranslateAgentPendingReceiver,
      handle);
    this.$ = new translate.mojom.TranslateAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

translate.mojom.TranslateAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  translateFrame(translate_script, source_lang, target_lang) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      translate.mojom.TranslateAgent_TranslateFrame_ParamsSpec,
      translate.mojom.TranslateAgent_TranslateFrame_ResponseParamsSpec,
      [translate_script, source_lang, target_lang]);
  }

  revertTranslation() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      translate.mojom.TranslateAgent_RevertTranslation_ParamsSpec,
      null,
      []);
  }

};

translate.mojom.TranslateAgent.getRemote = function() {
  let remote = new translate.mojom.TranslateAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'translate.mojom.TranslateAgent',
    'context');
  return remote.$;
};

// ParamsSpec for TranslateFrame
translate.mojom.TranslateAgent_TranslateFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'translate.mojom.TranslateAgent.TranslateFrame_Params',
      packedSize: 32,
      fields: [
        { name: 'translate_script', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'source_lang', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'target_lang', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

translate.mojom.TranslateAgent_TranslateFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'translate.mojom.TranslateAgent.TranslateFrame_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'original_lang', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'translated_lang', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cancelled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RevertTranslation
translate.mojom.TranslateAgent_RevertTranslation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'translate.mojom.TranslateAgent.RevertTranslation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
translate.mojom.TranslateAgentPtr = translate.mojom.TranslateAgentRemote;
translate.mojom.TranslateAgentRequest = translate.mojom.TranslateAgentPendingReceiver;


// Interface: ContentTranslateDriver
translate.mojom.ContentTranslateDriver = {};

translate.mojom.ContentTranslateDriverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

translate.mojom.ContentTranslateDriverRemote = class {
  static get $interfaceName() {
    return 'translate.mojom.ContentTranslateDriver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      translate.mojom.ContentTranslateDriverPendingReceiver,
      handle);
    this.$ = new translate.mojom.ContentTranslateDriverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

translate.mojom.ContentTranslateDriverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerPage(translate_agent, details, translation_critiera_met) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      translate.mojom.ContentTranslateDriver_RegisterPage_ParamsSpec,
      null,
      [translate_agent, details, translation_critiera_met]);
  }

};

translate.mojom.ContentTranslateDriver.getRemote = function() {
  let remote = new translate.mojom.ContentTranslateDriverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'translate.mojom.ContentTranslateDriver',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterPage
translate.mojom.ContentTranslateDriver_RegisterPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'translate.mojom.ContentTranslateDriver.RegisterPage_Params',
      packedSize: 32,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'translate_agent', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'translation_critiera_met', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
translate.mojom.ContentTranslateDriverPtr = translate.mojom.ContentTranslateDriverRemote;
translate.mojom.ContentTranslateDriverRequest = translate.mojom.ContentTranslateDriverPendingReceiver;

