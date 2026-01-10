// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/text_classifier.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};
var mojo_base = mojo_base || {};

chromeos.machine_learning.mojom.AnnotationUsecaseSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.TextEntityDataSpec = { $: {} };
chromeos.machine_learning.mojom.TextEntitySpec = { $: {} };
chromeos.machine_learning.mojom.TextAnnotationSpec = { $: {} };
chromeos.machine_learning.mojom.TextAnnotationRequestSpec = { $: {} };
chromeos.machine_learning.mojom.CodepointSpanSpec = { $: {} };
chromeos.machine_learning.mojom.TextLanguageSpec = { $: {} };
chromeos.machine_learning.mojom.REMOVED_TextSuggestSelectionRequestSpec = { $: {} };
chromeos.machine_learning.mojom.TextClassifier = {};
chromeos.machine_learning.mojom.TextClassifier.$interfaceName = 'chromeos.machine_learning.mojom.TextClassifier';
chromeos.machine_learning.mojom.TextClassifier_Annotate_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.TextClassifier_Annotate_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.TextClassifier_FindLanguages_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.TextClassifier_FindLanguages_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.TextClassifier_REMOVED_1_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.TextClassifier_REMOVED_1_ResponseParamsSpec = { $: {} };

// Enum: AnnotationUsecase
chromeos.machine_learning.mojom.AnnotationUsecase = {
  ANNOTATION_USECASE_SMART: 0,
  ANNOTATION_USECASE_RAW: 1,
};

// Union: TextEntityData
mojo.internal.Union(
    chromeos.machine_learning.mojom.TextEntityDataSpec, 'chromeos.machine_learning.mojom.TextEntityData', {
      'numeric_value': {
        'ordinal': 0,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'string_value': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: TextEntity
mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextEntitySpec, 'chromeos.machine_learning.mojom.TextEntity', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, chromeos.machine_learning.mojom.TextEntityDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('confidence_score', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TextAnnotation
mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextAnnotationSpec, 'chromeos.machine_learning.mojom.TextAnnotation', [
      mojo.internal.StructField('entities', 0, 0, mojo.internal.Array(chromeos.machine_learning.mojom.TextEntitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('start_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextAnnotationRequest
mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextAnnotationRequestSpec, 'chromeos.machine_learning.mojom.TextAnnotationRequest', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('default_locales', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('detected_text_language_tags', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('annotation_usecase', 24, 0, chromeos.machine_learning.mojom.AnnotationUsecaseSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('reference_time', 32, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('reference_timezone', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('enabled_entities', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('trigger_dictionary_on_beginner_words', 56, 0, mojo.internal.Bool, false, false, 1, undefined),
    ],
    [[0, 64], [1, 72]]);

// Struct: CodepointSpan
mojo.internal.Struct(
    chromeos.machine_learning.mojom.CodepointSpanSpec, 'chromeos.machine_learning.mojom.CodepointSpan', [
      mojo.internal.StructField('start_offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_offset', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TextLanguage
mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextLanguageSpec, 'chromeos.machine_learning.mojom.TextLanguage', [
      mojo.internal.StructField('locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('confidence', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: REMOVED_TextSuggestSelectionRequest
mojo.internal.Struct(
    chromeos.machine_learning.mojom.REMOVED_TextSuggestSelectionRequestSpec, 'chromeos.machine_learning.mojom.REMOVED_TextSuggestSelectionRequest', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('user_selection', 8, 0, chromeos.machine_learning.mojom.CodepointSpanSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_locales', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('detected_text_language_tags', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('annotation_usecase', 32, 0, chromeos.machine_learning.mojom.AnnotationUsecaseSpec.$, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: TextClassifier
mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextClassifier_Annotate_ParamsSpec, 'chromeos.machine_learning.mojom.TextClassifier_Annotate_Params', [
      mojo.internal.StructField('request', 0, 0, chromeos.machine_learning.mojom.TextAnnotationRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextClassifier_Annotate_ResponseParamsSpec, 'chromeos.machine_learning.mojom.TextClassifier_Annotate_ResponseParams', [
      mojo.internal.StructField('outputs', 0, 0, mojo.internal.Array(chromeos.machine_learning.mojom.TextAnnotationSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextClassifier_FindLanguages_ParamsSpec, 'chromeos.machine_learning.mojom.TextClassifier_FindLanguages_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextClassifier_FindLanguages_ResponseParamsSpec, 'chromeos.machine_learning.mojom.TextClassifier_FindLanguages_ResponseParams', [
      mojo.internal.StructField('outputs', 0, 0, mojo.internal.Array(chromeos.machine_learning.mojom.TextLanguageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextClassifier_REMOVED_1_ParamsSpec, 'chromeos.machine_learning.mojom.TextClassifier_REMOVED_1_Params', [
      mojo.internal.StructField('request', 0, 0, chromeos.machine_learning.mojom.REMOVED_TextSuggestSelectionRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.TextClassifier_REMOVED_1_ResponseParamsSpec, 'chromeos.machine_learning.mojom.TextClassifier_REMOVED_1_ResponseParams', [
      mojo.internal.StructField('outputs', 0, 0, chromeos.machine_learning.mojom.CodepointSpanSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.machine_learning.mojom.TextClassifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.TextClassifierRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.TextClassifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.TextClassifierPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.TextClassifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.TextClassifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  annotate(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.mojom.TextClassifier_Annotate_ParamsSpec,
      chromeos.machine_learning.mojom.TextClassifier_Annotate_ResponseParamsSpec,
      [request],
      false);
  }

  findLanguages(text) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.machine_learning.mojom.TextClassifier_FindLanguages_ParamsSpec,
      chromeos.machine_learning.mojom.TextClassifier_FindLanguages_ResponseParamsSpec,
      [text],
      false);
  }

  rEMOVED_1(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.machine_learning.mojom.TextClassifier_REMOVED_1_ParamsSpec,
      chromeos.machine_learning.mojom.TextClassifier_REMOVED_1_ResponseParamsSpec,
      [request],
      false);
  }

};

chromeos.machine_learning.mojom.TextClassifier.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.TextClassifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.TextClassifier',
    'context');
  return remote.$;
};

chromeos.machine_learning.mojom.TextClassifierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(2, 1); // Default ordinal 2 -> Index 1
    this.ordinalMap.set(1, 2); // Default ordinal 1 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.machine_learning.mojom.TextClassifier_Annotate_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.annotate');
          const result = this.impl.annotate(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.TextClassifier_Annotate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.machine_learning.mojom.TextClassifier_FindLanguages_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.findLanguages');
          const result = this.impl.findLanguages(params.text);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.TextClassifier_FindLanguages_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.machine_learning.mojom.TextClassifier_REMOVED_1_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_1');
          const result = this.impl.rEMOVED_1(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.TextClassifier_REMOVED_1_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.machine_learning.mojom.TextClassifierReceiver = chromeos.machine_learning.mojom.TextClassifierReceiver;

chromeos.machine_learning.mojom.TextClassifierPtr = chromeos.machine_learning.mojom.TextClassifierRemote;
chromeos.machine_learning.mojom.TextClassifierRequest = chromeos.machine_learning.mojom.TextClassifierPendingReceiver;

