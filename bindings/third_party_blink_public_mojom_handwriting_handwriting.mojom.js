// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/handwriting/handwriting.mojom
// Module: handwriting.mojom

'use strict';

// Module namespace
var handwriting = handwriting || {};
handwriting.mojom = handwriting.mojom || {};


// Enum: HandwritingRecognitionType
handwriting.mojom.HandwritingRecognitionType = {
  kText: 0,
};

// Enum: HandwritingInputType
handwriting.mojom.HandwritingInputType = {
  kMouse: 0,
  kStylus: 1,
  kTouch: 2,
};

// Enum: CreateHandwritingRecognizerResult
handwriting.mojom.CreateHandwritingRecognizerResult = {
  kOk: 0,
  kError: 1,
  kNotSupported: 2,
};

// Interface: HandwritingRecognizer
handwriting.mojom.HandwritingRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

handwriting.mojom.HandwritingRecognizerRemote = class {
  static get $interfaceName() {
    return 'handwriting.mojom.HandwritingRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      handwriting.mojom.HandwritingRecognizerPendingReceiver,
      handle);
    this.$ = new handwriting.mojom.HandwritingRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

handwriting.mojom.HandwritingRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPrediction(strokes, hints) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec.$,
      handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec.$,
      [strokes, hints]);
  }

};

handwriting.mojom.HandwritingRecognizer.getRemote = function() {
  let remote = new handwriting.mojom.HandwritingRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'handwriting.mojom.HandwritingRecognizer',
    'context');
  return remote.$;
}};

// ParamsSpec for GetPrediction
handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingRecognizer.GetPrediction_Params',
      packedSize: 24,
      fields: [
        { name: 'strokes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'hints', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingRecognizer.GetPrediction_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'prediction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
handwriting.mojom.HandwritingRecognizerPtr = handwriting.mojom.HandwritingRecognizerRemote;
handwriting.mojom.HandwritingRecognizerRequest = handwriting.mojom.HandwritingRecognizerPendingReceiver;


// Interface: HandwritingRecognitionService
handwriting.mojom.HandwritingRecognitionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

handwriting.mojom.HandwritingRecognitionServiceRemote = class {
  static get $interfaceName() {
    return 'handwriting.mojom.HandwritingRecognitionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      handwriting.mojom.HandwritingRecognitionServicePendingReceiver,
      handle);
    this.$ = new handwriting.mojom.HandwritingRecognitionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

handwriting.mojom.HandwritingRecognitionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createHandwritingRecognizer(constraint) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec.$,
      handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParamsSpec.$,
      [constraint]);
  }

  queryHandwritingRecognizer(constraint) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec.$,
      handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParamsSpec.$,
      [constraint]);
  }

};

handwriting.mojom.HandwritingRecognitionService.getRemote = function() {
  let remote = new handwriting.mojom.HandwritingRecognitionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'handwriting.mojom.HandwritingRecognitionService',
    'context');
  return remote.$;
}};

// ParamsSpec for CreateHandwritingRecognizer
handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingRecognitionService.CreateHandwritingRecognizer_Params',
      packedSize: 16,
      fields: [
        { name: 'constraint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingRecognitionService.CreateHandwritingRecognizer_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handwriting_recognizer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for QueryHandwritingRecognizer
handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingRecognitionService.QueryHandwritingRecognizer_Params',
      packedSize: 16,
      fields: [
        { name: 'constraint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'handwriting.mojom.HandwritingRecognitionService.QueryHandwritingRecognizer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
handwriting.mojom.HandwritingRecognitionServicePtr = handwriting.mojom.HandwritingRecognitionServiceRemote;
handwriting.mojom.HandwritingRecognitionServiceRequest = handwriting.mojom.HandwritingRecognitionServicePendingReceiver;

