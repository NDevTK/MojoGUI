// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/textdetection.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};


// Struct: TextDetectionResult
shape_detection.mojom.TextDetectionResultSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.TextDetectionResult',
      packedSize: 32,
      fields: [
        { name: 'raw_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'bounding_box', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'corner_points', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: TextDetection
shape_detection.mojom.TextDetection = {};

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
      [bitmap_data]);
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

// ParamsSpec for Detect
shape_detection.mojom.TextDetection_Detect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.TextDetection.Detect_Params',
      packedSize: 16,
      fields: [
        { name: 'bitmap_data', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

shape_detection.mojom.TextDetection_Detect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.TextDetection.Detect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
shape_detection.mojom.TextDetectionPtr = shape_detection.mojom.TextDetectionRemote;
shape_detection.mojom.TextDetectionRequest = shape_detection.mojom.TextDetectionPendingReceiver;

