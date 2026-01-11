// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/handwriting/handwriting.mojom
// Module: handwriting.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var handwriting = handwriting || {};
handwriting.mojom = handwriting.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

handwriting.mojom.HandwritingRecognitionTypeSpec = { $: mojo.internal.Enum() };
handwriting.mojom.HandwritingInputTypeSpec = { $: mojo.internal.Enum() };
handwriting.mojom.CreateHandwritingRecognizerResultSpec = { $: mojo.internal.Enum() };
handwriting.mojom.HandwritingPointSpec = { $: {} };
handwriting.mojom.HandwritingStrokeSpec = { $: {} };
handwriting.mojom.HandwritingDrawingSegmentSpec = { $: {} };
handwriting.mojom.HandwritingSegmentSpec = { $: {} };
handwriting.mojom.HandwritingPredictionSpec = { $: {} };
handwriting.mojom.HandwritingHintsSpec = { $: {} };
handwriting.mojom.HandwritingHintsQueryResultSpec = { $: {} };
handwriting.mojom.QueryHandwritingRecognizerResultSpec = { $: {} };
handwriting.mojom.HandwritingModelConstraintSpec = { $: {} };
handwriting.mojom.HandwritingRecognizer = {};
handwriting.mojom.HandwritingRecognizer.$interfaceName = 'handwriting.mojom.HandwritingRecognizer';
handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec = { $: {} };
handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec = { $: {} };
handwriting.mojom.HandwritingRecognitionService = {};
handwriting.mojom.HandwritingRecognitionService.$interfaceName = 'handwriting.mojom.HandwritingRecognitionService';
handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec = { $: {} };
handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParamsSpec = { $: {} };
handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec = { $: {} };
handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParamsSpec = { $: {} };

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

// Struct: HandwritingPoint
mojo.internal.Struct(
    handwriting.mojom.HandwritingPointSpec, 'handwriting.mojom.HandwritingPoint', [
      mojo.internal.StructField('location', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('t', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingStroke
mojo.internal.Struct(
    handwriting.mojom.HandwritingStrokeSpec, 'handwriting.mojom.HandwritingStroke', [
      mojo.internal.StructField('points', 0, 0, mojo.internal.Array(handwriting.mojom.HandwritingPointSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HandwritingDrawingSegment
mojo.internal.Struct(
    handwriting.mojom.HandwritingDrawingSegmentSpec, 'handwriting.mojom.HandwritingDrawingSegment', [
      mojo.internal.StructField('stroke_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('begin_point_index', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_point_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingSegment
mojo.internal.Struct(
    handwriting.mojom.HandwritingSegmentSpec, 'handwriting.mojom.HandwritingSegment', [
      mojo.internal.StructField('grapheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('drawing_segments', 8, 0, mojo.internal.Array(handwriting.mojom.HandwritingDrawingSegmentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('begin_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_index', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HandwritingPrediction
mojo.internal.Struct(
    handwriting.mojom.HandwritingPredictionSpec, 'handwriting.mojom.HandwritingPrediction', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('segmentation_result', 8, 0, mojo.internal.Array(handwriting.mojom.HandwritingSegmentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingHints
mojo.internal.Struct(
    handwriting.mojom.HandwritingHintsSpec, 'handwriting.mojom.HandwritingHints', [
      mojo.internal.StructField('recognition_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_context', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('alternatives', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: HandwritingHintsQueryResult
mojo.internal.Struct(
    handwriting.mojom.HandwritingHintsQueryResultSpec, 'handwriting.mojom.HandwritingHintsQueryResult', [
      mojo.internal.StructField('recognition_type', 0, 0, mojo.internal.Array(handwriting.mojom.HandwritingRecognitionTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('input_type', 8, 0, mojo.internal.Array(handwriting.mojom.HandwritingInputTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('text_context', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('alternatives', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: QueryHandwritingRecognizerResult
mojo.internal.Struct(
    handwriting.mojom.QueryHandwritingRecognizerResultSpec, 'handwriting.mojom.QueryHandwritingRecognizerResult', [
      mojo.internal.StructField('hints', 0, 0, handwriting.mojom.HandwritingHintsQueryResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_alternatives', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_segmentation', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingModelConstraint
mojo.internal.Struct(
    handwriting.mojom.HandwritingModelConstraintSpec, 'handwriting.mojom.HandwritingModelConstraint', [
      mojo.internal.StructField('languages', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: HandwritingRecognizer
mojo.internal.Struct(
    handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec, 'handwriting.mojom.HandwritingRecognizer_GetPrediction_Params', [
      mojo.internal.StructField('strokes', 0, 0, mojo.internal.Array(handwriting.mojom.HandwritingStrokeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('hints', 8, 0, handwriting.mojom.HandwritingHintsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec, 'handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParams', [
      mojo.internal.StructField('prediction', 0, 0, mojo.internal.Array(handwriting.mojom.HandwritingPredictionSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

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
  getPrediction(strokes, hints) {
    return this.$.getPrediction(strokes, hints);
  }
};

handwriting.mojom.HandwritingRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HandwritingRecognizer', [
      { explicit: null },
    ]);
  }

  getPrediction(strokes, hints) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec,
      handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec,
      [strokes, hints],
      false);
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
};

handwriting.mojom.HandwritingRecognizerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HandwritingRecognizer', [
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
             decoder.decodeStructInline(handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(handwriting.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec.$.structSpec);
          const result = this.impl.getPrediction(params.strokes, params.hints);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, handwriting.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

handwriting.mojom.HandwritingRecognizerReceiver = handwriting.mojom.HandwritingRecognizerReceiver;

handwriting.mojom.HandwritingRecognizerPtr = handwriting.mojom.HandwritingRecognizerRemote;
handwriting.mojom.HandwritingRecognizerRequest = handwriting.mojom.HandwritingRecognizerPendingReceiver;


// Interface: HandwritingRecognitionService
mojo.internal.Struct(
    handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec, 'handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_Params', [
      mojo.internal.StructField('constraint', 0, 0, handwriting.mojom.HandwritingModelConstraintSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParamsSpec, 'handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, handwriting.mojom.CreateHandwritingRecognizerResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handwriting_recognizer', 8, 0, mojo.internal.InterfaceProxy(handwriting.mojom.HandwritingRecognizerRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec, 'handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_Params', [
      mojo.internal.StructField('constraint', 0, 0, handwriting.mojom.HandwritingModelConstraintSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParamsSpec, 'handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, handwriting.mojom.QueryHandwritingRecognizerResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
  createHandwritingRecognizer(constraint) {
    return this.$.createHandwritingRecognizer(constraint);
  }
  queryHandwritingRecognizer(constraint) {
    return this.$.queryHandwritingRecognizer(constraint);
  }
};

handwriting.mojom.HandwritingRecognitionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HandwritingRecognitionService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createHandwritingRecognizer(constraint) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec,
      handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParamsSpec,
      [constraint],
      false);
  }

  queryHandwritingRecognizer(constraint) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec,
      handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParamsSpec,
      [constraint],
      false);
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
};

handwriting.mojom.HandwritingRecognitionServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HandwritingRecognitionService', [
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
             decoder.decodeStructInline(handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ParamsSpec.$.structSpec);
          const result = this.impl.createHandwritingRecognizer(params.constraint);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, handwriting.mojom.HandwritingRecognitionService_CreateHandwritingRecognizer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ParamsSpec.$.structSpec);
          const result = this.impl.queryHandwritingRecognizer(params.constraint);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, handwriting.mojom.HandwritingRecognitionService_QueryHandwritingRecognizer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

handwriting.mojom.HandwritingRecognitionServiceReceiver = handwriting.mojom.HandwritingRecognitionServiceReceiver;

handwriting.mojom.HandwritingRecognitionServicePtr = handwriting.mojom.HandwritingRecognitionServiceRemote;
handwriting.mojom.HandwritingRecognitionServiceRequest = handwriting.mojom.HandwritingRecognitionServicePendingReceiver;

