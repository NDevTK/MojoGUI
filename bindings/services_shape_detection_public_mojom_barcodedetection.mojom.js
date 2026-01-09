// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/barcodedetection.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};


// Enum: BarcodeFormat
shape_detection.mojom.BarcodeFormat = {
  AZTEC: 0,
  CODE_128: 1,
  CODE_39: 2,
  CODE_93: 3,
  CODABAR: 4,
  DATA_MATRIX: 5,
  EAN_13: 6,
  EAN_8: 7,
  ITF: 8,
  PDF417: 9,
  QR_CODE: 10,
  UNKNOWN: 11,
  UPC_A: 12,
  UPC_E: 13,
};

// Struct: BarcodeDetectionResult
shape_detection.mojom.BarcodeDetectionResultSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.BarcodeDetectionResult',
      packedSize: 40,
      fields: [
        { name: 'raw_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'bounding_box', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'format', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'corner_points', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: BarcodeDetection
shape_detection.mojom.BarcodeDetection = {};

shape_detection.mojom.BarcodeDetectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

shape_detection.mojom.BarcodeDetectionRemote = class {
  static get $interfaceName() {
    return 'shape_detection.mojom.BarcodeDetection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      shape_detection.mojom.BarcodeDetectionPendingReceiver,
      handle);
    this.$ = new shape_detection.mojom.BarcodeDetectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

shape_detection.mojom.BarcodeDetectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  detect(bitmap_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      shape_detection.mojom.BarcodeDetection_Detect_ParamsSpec,
      shape_detection.mojom.BarcodeDetection_Detect_ResponseParamsSpec,
      [bitmap_data]);
  }

};

shape_detection.mojom.BarcodeDetection.getRemote = function() {
  let remote = new shape_detection.mojom.BarcodeDetectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shape_detection.mojom.BarcodeDetection',
    'context');
  return remote.$;
};

// ParamsSpec for Detect
shape_detection.mojom.BarcodeDetection_Detect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.BarcodeDetection.Detect_Params',
      packedSize: 16,
      fields: [
        { name: 'bitmap_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

shape_detection.mojom.BarcodeDetection_Detect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.BarcodeDetection.Detect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
shape_detection.mojom.BarcodeDetectionPtr = shape_detection.mojom.BarcodeDetectionRemote;
shape_detection.mojom.BarcodeDetectionRequest = shape_detection.mojom.BarcodeDetectionPendingReceiver;

