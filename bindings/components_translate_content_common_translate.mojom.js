// Auto-generated MojoJS binding
// Source: chromium_src/components/translate/content/common/translate.mojom
// Module: translate.mojom

'use strict';

// Module namespace
var translate = translate || {};
translate.mojom = translate.mojom || {};
var url = url || {};

translate.mojom.TranslateErrorSpec = { $: mojo.internal.Enum() };
translate.mojom.LanguageDetectionDetailsSpec = { $: {} };
translate.mojom.TranslateAgent = {};
translate.mojom.TranslateAgent.$interfaceName = 'translate.mojom.TranslateAgent';
translate.mojom.TranslateAgent_TranslateFrame_ParamsSpec = { $: {} };
translate.mojom.TranslateAgent_TranslateFrame_ResponseParamsSpec = { $: {} };
translate.mojom.TranslateAgent_RevertTranslation_ParamsSpec = { $: {} };
translate.mojom.ContentTranslateDriver = {};
translate.mojom.ContentTranslateDriver.$interfaceName = 'translate.mojom.ContentTranslateDriver';
translate.mojom.ContentTranslateDriver_RegisterPage_ParamsSpec = { $: {} };

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
mojo.internal.Struct(
    translate.mojom.LanguageDetectionDetailsSpec, 'translate.mojom.LanguageDetectionDetails', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('adopted_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_language', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('model_detected_language', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('html_root_language', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('contents', 48, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('detection_model_version', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('model_reliability_score', 64, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('has_notranslate', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_run_lang_detection', 68, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_model_reliable', 68, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Interface: TranslateAgent
mojo.internal.Struct(
    translate.mojom.TranslateAgent_TranslateFrame_ParamsSpec, 'translate.mojom.TranslateAgent_TranslateFrame_Params', [
      mojo.internal.StructField('translate_script', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_lang', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_lang', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    translate.mojom.TranslateAgent_TranslateFrame_ResponseParamsSpec, 'translate.mojom.TranslateAgent_TranslateFrame_ResponseParams', [
      mojo.internal.StructField('original_lang', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('translated_lang', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error', 16, 0, translate.mojom.TranslateErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cancelled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    translate.mojom.TranslateAgent_RevertTranslation_ParamsSpec, 'translate.mojom.TranslateAgent_RevertTranslation_Params', [
    ],
    [[0, 8]]);

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
      [translate_script, source_lang, target_lang],
      false);
  }

  revertTranslation() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      translate.mojom.TranslateAgent_RevertTranslation_ParamsSpec,
      null,
      [],
      false);
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

translate.mojom.TranslateAgentPtr = translate.mojom.TranslateAgentRemote;
translate.mojom.TranslateAgentRequest = translate.mojom.TranslateAgentPendingReceiver;


// Interface: ContentTranslateDriver
mojo.internal.Struct(
    translate.mojom.ContentTranslateDriver_RegisterPage_ParamsSpec, 'translate.mojom.ContentTranslateDriver_RegisterPage_Params', [
      mojo.internal.StructField('translate_agent', 0, 0, mojo.internal.InterfaceProxy(translate.mojom.TranslateAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, translate.mojom.LanguageDetectionDetailsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('translation_critiera_met', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [translate_agent, details, translation_critiera_met],
      false);
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

translate.mojom.ContentTranslateDriverPtr = translate.mojom.ContentTranslateDriverRemote;
translate.mojom.ContentTranslateDriverRequest = translate.mojom.ContentTranslateDriverPendingReceiver;

