// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/text_classifier.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: AnnotationUsecase
chromeos.machine_learning.mojom.AnnotationUsecase = {
  ANNOTATION_USECASE_SMART: 0,
  ANNOTATION_USECASE_RAW: 1,
};

// Struct: TextEntity
chromeos.machine_learning.mojom.TextEntitySpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextEntity',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextAnnotation
chromeos.machine_learning.mojom.TextAnnotationSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextAnnotation',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextAnnotationRequest
chromeos.machine_learning.mojom.TextAnnotationRequestSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextAnnotationRequest',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CodepointSpan
chromeos.machine_learning.mojom.CodepointSpanSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.CodepointSpan',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextLanguage
chromeos.machine_learning.mojom.TextLanguageSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TextLanguage',
      packedSize: 16,
      fields: [
        { name: 'confidence', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: REMOVED_TextSuggestSelectionRequest
chromeos.machine_learning.mojom.REMOVED_TextSuggestSelectionRequestSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.REMOVED_TextSuggestSelectionRequest',
      packedSize: 16,
      fields: [
        { name: 'ANNOTATION_USECASE_SMART', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: TextClassifier
chromeos.machine_learning.mojom.TextClassifier = {};

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

// Legacy compatibility
chromeos.machine_learning.mojom.TextClassifierPtr = chromeos.machine_learning.mojom.TextClassifierRemote;
chromeos.machine_learning.mojom.TextClassifierRequest = chromeos.machine_learning.mojom.TextClassifierPendingReceiver;

