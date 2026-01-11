// Auto-generated MojoJS binding
// Source: chromium_src/components/translate/content/common/translate.mojom
// Module: translate.mojom

// Module namespace
var translate = translate || {};
translate.mojom = translate.mojom || {};
var mojo_base = mojo_base || {};
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
  translateFrame(translate_script, source_lang, target_lang) {
    return this.$.translateFrame(translate_script, source_lang, target_lang);
  }
  revertTranslation() {
    return this.$.revertTranslation();
  }
};

translate.mojom.TranslateAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TranslateAgent', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  translateFrame(translate_script, source_lang, target_lang) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      translate.mojom.TranslateAgent_TranslateFrame_ParamsSpec,
      translate.mojom.TranslateAgent_TranslateFrame_ResponseParamsSpec,
      [translate_script, source_lang, target_lang],
      false);
  }

  revertTranslation() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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

translate.mojom.TranslateAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TranslateAgent', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(translate.mojom.TranslateAgent_TranslateFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(translate.mojom.TranslateAgent_RevertTranslation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(translate.mojom.TranslateAgent_TranslateFrame_ParamsSpec.$.structSpec);
          const result = this.impl.translateFrame(params.translate_script, params.source_lang, params.target_lang);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, translate.mojom.TranslateAgent_TranslateFrame_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(translate.mojom.TranslateAgent_RevertTranslation_ParamsSpec.$.structSpec);
          const result = this.impl.revertTranslation();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

translate.mojom.TranslateAgentReceiver = translate.mojom.TranslateAgentReceiver;

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
  registerPage(translate_agent, details, translation_critiera_met) {
    return this.$.registerPage(translate_agent, details, translation_critiera_met);
  }
};

translate.mojom.ContentTranslateDriverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ContentTranslateDriver', [
      { explicit: null },
    ]);
  }

  registerPage(translate_agent, details, translation_critiera_met) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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

translate.mojom.ContentTranslateDriverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ContentTranslateDriver', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(translate.mojom.ContentTranslateDriver_RegisterPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(translate.mojom.ContentTranslateDriver_RegisterPage_ParamsSpec.$.structSpec);
          const result = this.impl.registerPage(params.translate_agent, params.details, params.translation_critiera_met);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

translate.mojom.ContentTranslateDriverReceiver = translate.mojom.ContentTranslateDriverReceiver;

translate.mojom.ContentTranslateDriverPtr = translate.mojom.ContentTranslateDriverRemote;
translate.mojom.ContentTranslateDriverRequest = translate.mojom.ContentTranslateDriverPendingReceiver;

