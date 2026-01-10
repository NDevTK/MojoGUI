// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/web_platform_handwriting.mojom
// Module: chromeos.machine_learning.web_platform.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.web_platform = chromeos.machine_learning.web_platform || {};
chromeos.machine_learning.web_platform.mojom = chromeos.machine_learning.web_platform.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

chromeos.machine_learning.web_platform.mojom.HandwritingPointSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingStrokeSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingDrawingSegmentSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingSegmentSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingPredictionSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingHintsSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingModelConstraintSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer = {};
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer.$interfaceName = 'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer';
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec = { $: {} };
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec = { $: {} };

// Struct: HandwritingPoint
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingPointSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingPoint', [
      mojo.internal.StructField('location', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('t', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingStroke
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingStrokeSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingStroke', [
      mojo.internal.StructField('points', 0, 0, mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingPointSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HandwritingDrawingSegment
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingDrawingSegmentSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingDrawingSegment', [
      mojo.internal.StructField('stroke_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('begin_point_index', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_point_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingSegment
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingSegmentSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingSegment', [
      mojo.internal.StructField('grapheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('drawing_segments', 8, 0, mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingDrawingSegmentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('begin_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_index', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HandwritingPrediction
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingPredictionSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingPrediction', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('segmentation_result', 8, 0, mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingSegmentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HandwritingHints
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingHintsSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingHints', [
      mojo.internal.StructField('recognition_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('deprecated_text_context', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('alternatives', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('text_context', 32, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 40], [1, 48]]);

// Struct: HandwritingModelConstraint
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingModelConstraintSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingModelConstraint', [
      mojo.internal.StructField('languages', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: HandwritingRecognizer
mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_Params', [
      mojo.internal.StructField('strokes', 0, 0, mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingStrokeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('hints', 8, 0, chromeos.machine_learning.web_platform.mojom.HandwritingHintsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec, 'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ResponseParams', [
      mojo.internal.StructField('prediction', 0, 0, mojo.internal.Array(chromeos.machine_learning.web_platform.mojom.HandwritingPredictionSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPrediction(strokes, hints) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec,
      chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec,
      [strokes, hints],
      false);
  }

};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer.getRemote = function() {
  let remote = new chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer',
    'context');
  return remote.$;
};

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetPrediction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrediction (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPrediction');
          const result = this.impl.getPrediction(params.strokes, params.hints);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer_GetPrediction_ResponseParamsSpec);
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

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerReceiver = chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerReceiver;

chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPtr = chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRemote;
chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerRequest = chromeos.machine_learning.web_platform.mojom.HandwritingRecognizerPendingReceiver;

