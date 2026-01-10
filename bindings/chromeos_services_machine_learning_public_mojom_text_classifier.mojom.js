// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/text_classifier.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.machine_learning.mojom = chromeos.machine_learning.machine_learning.mojom || {};


// Enum: AnnotationUsecase
chromeos.machine_learning.machine_learning.mojom.mojom.AnnotationUsecase = {
  ANNOTATION_USECASE_SMART: 0,
  ANNOTATION_USECASE_RAW: 1,
};
chromeos.machine_learning.machine_learning.mojom.mojom.AnnotationUsecaseSpec = { $: mojo.internal.Enum() };

// Union: TextEntityData
chromeos.machine_learning.machine_learning.mojom.mojom.TextEntityDataSpec = { $: mojo.internal.Union(
    'chromeos.machine_learning.mojom.TextEntityData', {
      'numeric_value': {
        'ordinal': 0,
        'type': mojo.internal.Double,
      }},
      'string_value': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: TextEntity
chromeos.machine_learning.machine_learning.mojom.mojom.TextEntitySpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextEntity',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'confidence_score', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TextEntityDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: TextAnnotation
chromeos.machine_learning.machine_learning.mojom.mojom.TextAnnotationSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextAnnotation',
      packedSize: 24,
      fields: [
        { name: 'start_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end_offset', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'entities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.mojom.TextEntitySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TextAnnotationRequest
chromeos.machine_learning.machine_learning.mojom.mojom.TextAnnotationRequestSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextAnnotationRequest',
      packedSize: 64,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'default_locales', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'detected_text_language_tags', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'annotation_usecase', packedOffset: 48, packedBitOffset: 0, type: chromeos.machine_learning.mojom.AnnotationUsecaseSpec, nullable: false, minVersion: 0 },
        { name: 'reference_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'reference_timezone', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'enabled_entities', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'trigger_dictionary_on_beginner_words', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 64}, {version: 1, packedSize: 64}]
    }
  }
};

// Struct: CodepointSpan
chromeos.machine_learning.machine_learning.mojom.mojom.CodepointSpanSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.CodepointSpan',
      packedSize: 16,
      fields: [
        { name: 'start_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end_offset', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TextLanguage
chromeos.machine_learning.machine_learning.mojom.mojom.TextLanguageSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextLanguage',
      packedSize: 24,
      fields: [
        { name: 'locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'confidence', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: REMOVED_TextSuggestSelectionRequest
chromeos.machine_learning.machine_learning.mojom.mojom.REMOVED_TextSuggestSelectionRequestSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.REMOVED_TextSuggestSelectionRequest',
      packedSize: 48,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'user_selection', packedOffset: 8, packedBitOffset: 0, type: chromeos.machine_learning.mojom.CodepointSpanSpec, nullable: false, minVersion: 0 },
        { name: 'default_locales', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'detected_text_language_tags', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'annotation_usecase', packedOffset: 32, packedBitOffset: 0, type: chromeos.machine_learning.mojom.AnnotationUsecaseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: TextClassifier
chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier = {};

chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifierRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.TextClassifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifierPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  annotate(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier_Annotate_ParamsSpec,
      chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier_Annotate_ResponseParamsSpec,
      [request]);
  }

  findLanguages(text) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier_FindLanguages_ParamsSpec,
      chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier_FindLanguages_ResponseParamsSpec,
      [text]);
  }

  rEMOVED_1(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier_REMOVED_1_ParamsSpec,
      chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier_REMOVED_1_ResponseParamsSpec,
      [request]);
  }

};

chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier.getRemote = function() {
  let remote = new chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.TextClassifier',
    'context');
  return remote.$;
};

// ParamsSpec for Annotate
chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier_Annotate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextClassifier.Annotate_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TextAnnotationRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier_Annotate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextClassifier.Annotate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'outputs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.mojom.TextAnnotationSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FindLanguages
chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier_FindLanguages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextClassifier.FindLanguages_Params',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier_FindLanguages_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextClassifier.FindLanguages_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'outputs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.mojom.TextLanguageSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for REMOVED_1
chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier_REMOVED_1_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextClassifier.REMOVED_1_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.REMOVED_TextSuggestSelectionRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifier_REMOVED_1_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextClassifier.REMOVED_1_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'outputs', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.CodepointSpanSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifierPtr = chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifierRemote;
chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifierRequest = chromeos.machine_learning.machine_learning.mojom.mojom.TextClassifierPendingReceiver;

