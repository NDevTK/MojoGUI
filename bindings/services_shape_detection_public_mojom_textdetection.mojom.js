// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/textdetection.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};
var skia = skia || {};
var gfx = gfx || {};

shape_detection.mojom.TextDetectionResultSpec = { $: {} };
shape_detection.mojom.TextDetection = {};
shape_detection.mojom.TextDetection.$interfaceName = 'shape_detection.mojom.TextDetection';
shape_detection.mojom.TextDetection_Detect_ParamsSpec = { $: {} };
shape_detection.mojom.TextDetection_Detect_ResponseParamsSpec = { $: {} };

// Struct: TextDetectionResult
mojo.internal.Struct(
    shape_detection.mojom.TextDetectionResultSpec, 'shape_detection.mojom.TextDetectionResult', [
      mojo.internal.StructField('raw_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bounding_box', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('corner_points', 16, 0, mojo.internal.Array(gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: TextDetection
mojo.internal.Struct(
    shape_detection.mojom.TextDetection_Detect_ParamsSpec, 'shape_detection.mojom.TextDetection_Detect_Params', [
      mojo.internal.StructField('bitmap_data', 0, 0, skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shape_detection.mojom.TextDetection_Detect_ResponseParamsSpec, 'shape_detection.mojom.TextDetection_Detect_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(shape_detection.mojom.TextDetectionResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

shape_detection.mojom.TextDetectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

shape_detection.mojom.TextDetectionRemote = class {
  static get $interfaceName() {
    return 'shape_detection.mojom.TextDetection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      shape_detection.mojom.TextDetectionPendingReceiver,
      handle);
    this.$ = new shape_detection.mojom.TextDetectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

shape_detection.mojom.TextDetectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  detect(bitmap_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      shape_detection.mojom.TextDetection_Detect_ParamsSpec,
      shape_detection.mojom.TextDetection_Detect_ResponseParamsSpec,
      [bitmap_data],
      false);
  }

};

shape_detection.mojom.TextDetection.getRemote = function() {
  let remote = new shape_detection.mojom.TextDetectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shape_detection.mojom.TextDetection',
    'context');
  return remote.$;
};

shape_detection.mojom.TextDetectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = shape_detection.mojom.TextDetection_Detect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.detect(params.bitmap_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, shape_detection.mojom.TextDetection_Detect_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

shape_detection.mojom.TextDetectionReceiver = shape_detection.mojom.TextDetectionReceiver;

shape_detection.mojom.TextDetectionPtr = shape_detection.mojom.TextDetectionRemote;
shape_detection.mojom.TextDetectionRequest = shape_detection.mojom.TextDetectionPendingReceiver;

