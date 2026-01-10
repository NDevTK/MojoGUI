// Auto-generated MojoJS binding
// Source: chromium_src/components/translate/content/common/translate.mojom
// Module: translate.mojom

'use strict';

// Module namespace
var translate = translate || {};
translate.mojom = translate.mojom || {};
var url = url || {};


// Enum: TranslateError
translate.mojom.mojom.TranslateError = {
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
translate.mojom.mojom.TranslateErrorSpec = { $: mojo.internal.Enum() };

// Struct: LanguageDetectionDetails
translate.mojom.mojom.LanguageDetectionDetailsSpec = {
  $: {
    structSpec: {
      name: 'translate.mojom.LanguageDetectionDetails',
      packedSize: 80,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'adopted_language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'has_notranslate', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_run_lang_detection', packedOffset: 68, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'content_language', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'model_detected_language', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_model_reliable', packedOffset: 68, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'html_root_language', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'contents', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'model_reliability_score', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'detection_model_version', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Interface: TranslateAgent
translate.mojom.mojom.TranslateAgent = {};

translate.mojom.mojom.TranslateAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

translate.mojom.mojom.TranslateAgentRemote = class {
  static get $interfaceName() {
    return 'translate.mojom.TranslateAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      translate.mojom.mojom.TranslateAgentPendingReceiver,
      handle);
    this.$ = new translate.mojom.mojom.TranslateAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

translate.mojom.mojom.TranslateAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  translateFrame(translate_script, source_lang, target_lang) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      translate.mojom.mojom.TranslateAgent_TranslateFrame_ParamsSpec,
      translate.mojom.mojom.TranslateAgent_TranslateFrame_ResponseParamsSpec,
      [translate_script, source_lang, target_lang]);
  }

  revertTranslation() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      translate.mojom.mojom.TranslateAgent_RevertTranslation_ParamsSpec,
      null,
      []);
  }

};

translate.mojom.mojom.TranslateAgent.getRemote = function() {
  let remote = new translate.mojom.mojom.TranslateAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'translate.mojom.TranslateAgent',
    'context');
  return remote.$;
};

// ParamsSpec for TranslateFrame
translate.mojom.mojom.TranslateAgent_TranslateFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'translate.mojom.TranslateAgent.TranslateFrame_Params',
      packedSize: 32,
      fields: [
        { name: 'translate_script', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_lang', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'target_lang', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

translate.mojom.mojom.TranslateAgent_TranslateFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'translate.mojom.TranslateAgent.TranslateFrame_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'cancelled', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'original_lang', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'translated_lang', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: translate.mojom.TranslateErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for RevertTranslation
translate.mojom.mojom.TranslateAgent_RevertTranslation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'translate.mojom.TranslateAgent.RevertTranslation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
translate.mojom.mojom.TranslateAgentPtr = translate.mojom.mojom.TranslateAgentRemote;
translate.mojom.mojom.TranslateAgentRequest = translate.mojom.mojom.TranslateAgentPendingReceiver;


// Interface: ContentTranslateDriver
translate.mojom.mojom.ContentTranslateDriver = {};

translate.mojom.mojom.ContentTranslateDriverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

translate.mojom.mojom.ContentTranslateDriverRemote = class {
  static get $interfaceName() {
    return 'translate.mojom.ContentTranslateDriver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      translate.mojom.mojom.ContentTranslateDriverPendingReceiver,
      handle);
    this.$ = new translate.mojom.mojom.ContentTranslateDriverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

translate.mojom.mojom.ContentTranslateDriverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerPage(translate_agent, details, translation_critiera_met) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      translate.mojom.mojom.ContentTranslateDriver_RegisterPage_ParamsSpec,
      null,
      [translate_agent, details, translation_critiera_met]);
  }

};

translate.mojom.mojom.ContentTranslateDriver.getRemote = function() {
  let remote = new translate.mojom.mojom.ContentTranslateDriverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'translate.mojom.ContentTranslateDriver',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterPage
translate.mojom.mojom.ContentTranslateDriver_RegisterPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'translate.mojom.ContentTranslateDriver.RegisterPage_Params',
      packedSize: 32,
      fields: [
        { name: 'translate_agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(translate.mojom.TranslateAgentRemote), nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: translate.mojom.LanguageDetectionDetailsSpec, nullable: false, minVersion: 0 },
        { name: 'translation_critiera_met', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
translate.mojom.mojom.ContentTranslateDriverPtr = translate.mojom.mojom.ContentTranslateDriverRemote;
translate.mojom.mojom.ContentTranslateDriverRequest = translate.mojom.mojom.ContentTranslateDriverPendingReceiver;

