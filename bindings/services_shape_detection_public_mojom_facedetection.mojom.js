// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/facedetection.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};
var skia = skia || {};
var gfx = gfx || {};

shape_detection.mojom.LandmarkTypeSpec = { $: mojo.internal.Enum() };
shape_detection.mojom.LandmarkSpec = { $: {} };
shape_detection.mojom.FaceDetectionResultSpec = { $: {} };
shape_detection.mojom.FaceDetectorOptionsSpec = { $: {} };
shape_detection.mojom.FaceDetection = {};
shape_detection.mojom.FaceDetection.$interfaceName = 'shape_detection.mojom.FaceDetection';
shape_detection.mojom.FaceDetection_Detect_ParamsSpec = { $: {} };
shape_detection.mojom.FaceDetection_Detect_ResponseParamsSpec = { $: {} };

// Enum: LandmarkType
shape_detection.mojom.LandmarkType = {
  MOUTH: 0,
  EYE: 1,
  NOSE: 2,
};

// Struct: Landmark
mojo.internal.Struct(
    shape_detection.mojom.LandmarkSpec, 'shape_detection.mojom.Landmark', [
      mojo.internal.StructField('locations', 0, 0, mojo.internal.Array(gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, shape_detection.mojom.LandmarkTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FaceDetectionResult
mojo.internal.Struct(
    shape_detection.mojom.FaceDetectionResultSpec, 'shape_detection.mojom.FaceDetectionResult', [
      mojo.internal.StructField('bounding_box', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('landmarks', 8, 0, mojo.internal.Array(shape_detection.mojom.LandmarkSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FaceDetectorOptions
mojo.internal.Struct(
    shape_detection.mojom.FaceDetectorOptionsSpec, 'shape_detection.mojom.FaceDetectorOptions', [
      mojo.internal.StructField('max_detected_faces', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('fast_mode', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: FaceDetection
mojo.internal.Struct(
    shape_detection.mojom.FaceDetection_Detect_ParamsSpec, 'shape_detection.mojom.FaceDetection_Detect_Params', [
      mojo.internal.StructField('bitmap_data', 0, 0, skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shape_detection.mojom.FaceDetection_Detect_ResponseParamsSpec, 'shape_detection.mojom.FaceDetection_Detect_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(shape_detection.mojom.FaceDetectionResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

shape_detection.mojom.FaceDetectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

shape_detection.mojom.FaceDetectionRemote = class {
  static get $interfaceName() {
    return 'shape_detection.mojom.FaceDetection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      shape_detection.mojom.FaceDetectionPendingReceiver,
      handle);
    this.$ = new shape_detection.mojom.FaceDetectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

shape_detection.mojom.FaceDetectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  detect(bitmap_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      shape_detection.mojom.FaceDetection_Detect_ParamsSpec,
      shape_detection.mojom.FaceDetection_Detect_ResponseParamsSpec,
      [bitmap_data],
      false);
  }

};

shape_detection.mojom.FaceDetection.getRemote = function() {
  let remote = new shape_detection.mojom.FaceDetectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shape_detection.mojom.FaceDetection',
    'context');
  return remote.$;
};

shape_detection.mojom.FaceDetectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = shape_detection.mojom.FaceDetection_Detect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.detect(params.bitmap_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shape_detection.mojom.FaceDetection_Detect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

shape_detection.mojom.FaceDetectionReceiver = shape_detection.mojom.FaceDetectionReceiver;

shape_detection.mojom.FaceDetectionPtr = shape_detection.mojom.FaceDetectionRemote;
shape_detection.mojom.FaceDetectionRequest = shape_detection.mojom.FaceDetectionPendingReceiver;

