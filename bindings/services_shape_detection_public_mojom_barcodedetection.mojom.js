// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/barcodedetection.mojom
// Module: shape_detection.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};
var skia = skia || {};
var gfx = gfx || {};

shape_detection.mojom.BarcodeFormatSpec = { $: mojo.internal.Enum() };
shape_detection.mojom.BarcodeDetectionResultSpec = { $: {} };
shape_detection.mojom.BarcodeDetection = {};
shape_detection.mojom.BarcodeDetection.$interfaceName = 'shape_detection.mojom.BarcodeDetection';
shape_detection.mojom.BarcodeDetection_Detect_ParamsSpec = { $: {} };
shape_detection.mojom.BarcodeDetection_Detect_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    shape_detection.mojom.BarcodeDetectionResultSpec, 'shape_detection.mojom.BarcodeDetectionResult', [
      mojo.internal.StructField('raw_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bounding_box', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('format', 16, 0, shape_detection.mojom.BarcodeFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('corner_points', 24, 0, mojo.internal.Array(gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: BarcodeDetection
mojo.internal.Struct(
    shape_detection.mojom.BarcodeDetection_Detect_ParamsSpec, 'shape_detection.mojom.BarcodeDetection_Detect_Params', [
      mojo.internal.StructField('bitmap_data', 0, 0, skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shape_detection.mojom.BarcodeDetection_Detect_ResponseParamsSpec, 'shape_detection.mojom.BarcodeDetection_Detect_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(shape_detection.mojom.BarcodeDetectionResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  detect(bitmap_data) {
    return this.$.detect(bitmap_data);
  }
};

shape_detection.mojom.BarcodeDetectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BarcodeDetection', [
      { explicit: null },
    ]);
  }

  detect(bitmap_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      shape_detection.mojom.BarcodeDetection_Detect_ParamsSpec,
      shape_detection.mojom.BarcodeDetection_Detect_ResponseParamsSpec,
      [bitmap_data],
      false);
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

shape_detection.mojom.BarcodeDetectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BarcodeDetection', [
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
             decoder.decodeStructInline(shape_detection.mojom.BarcodeDetection_Detect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shape_detection.mojom.BarcodeDetection_Detect_ParamsSpec.$.structSpec);
          const result = this.impl.detect(params.bitmap_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, shape_detection.mojom.BarcodeDetection_Detect_ResponseParamsSpec);
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

shape_detection.mojom.BarcodeDetectionReceiver = shape_detection.mojom.BarcodeDetectionReceiver;

shape_detection.mojom.BarcodeDetectionPtr = shape_detection.mojom.BarcodeDetectionRemote;
shape_detection.mojom.BarcodeDetectionRequest = shape_detection.mojom.BarcodeDetectionPendingReceiver;

