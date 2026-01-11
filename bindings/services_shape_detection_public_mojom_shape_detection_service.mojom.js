// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/shape_detection_service.mojom
// Module: shape_detection.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};
var sandbox = sandbox || {};

shape_detection.mojom.ShapeDetectionService = {};
shape_detection.mojom.ShapeDetectionService.$interfaceName = 'shape_detection.mojom.ShapeDetectionService';
shape_detection.mojom.ShapeDetectionService_BindBarcodeDetectionProvider_ParamsSpec = { $: {} };
shape_detection.mojom.ShapeDetectionService_BindFaceDetectionProvider_ParamsSpec = { $: {} };
shape_detection.mojom.ShapeDetectionService_BindTextDetection_ParamsSpec = { $: {} };

shape_detection.mojom.kShapeDetectionSandbox = sandbox.mojom.Sandbox.kShapeDetection;

shape_detection.mojom.kShapeDetectionSandbox = sandbox.mojom.Sandbox.kUtility;

shape_detection.mojom.kShapeDetectionSandbox = sandbox.mojom.Sandbox.kGpu;

// Interface: ShapeDetectionService
mojo.internal.Struct(
    shape_detection.mojom.ShapeDetectionService_BindBarcodeDetectionProvider_ParamsSpec, 'shape_detection.mojom.ShapeDetectionService_BindBarcodeDetectionProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(shape_detection.mojom.BarcodeDetectionProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shape_detection.mojom.ShapeDetectionService_BindFaceDetectionProvider_ParamsSpec, 'shape_detection.mojom.ShapeDetectionService_BindFaceDetectionProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(shape_detection.mojom.FaceDetectionProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    shape_detection.mojom.ShapeDetectionService_BindTextDetection_ParamsSpec, 'shape_detection.mojom.ShapeDetectionService_BindTextDetection_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(shape_detection.mojom.TextDetectionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

shape_detection.mojom.ShapeDetectionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

shape_detection.mojom.ShapeDetectionServiceRemote = class {
  static get $interfaceName() {
    return 'shape_detection.mojom.ShapeDetectionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      shape_detection.mojom.ShapeDetectionServicePendingReceiver,
      handle);
    this.$ = new shape_detection.mojom.ShapeDetectionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindBarcodeDetectionProvider(receiver) {
    return this.$.bindBarcodeDetectionProvider(receiver);
  }
  bindFaceDetectionProvider(receiver) {
    return this.$.bindFaceDetectionProvider(receiver);
  }
  bindTextDetection(receiver) {
    return this.$.bindTextDetection(receiver);
  }
};

shape_detection.mojom.ShapeDetectionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ShapeDetectionService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindBarcodeDetectionProvider(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      shape_detection.mojom.ShapeDetectionService_BindBarcodeDetectionProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindFaceDetectionProvider(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      shape_detection.mojom.ShapeDetectionService_BindFaceDetectionProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTextDetection(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      shape_detection.mojom.ShapeDetectionService_BindTextDetection_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

shape_detection.mojom.ShapeDetectionService.getRemote = function() {
  let remote = new shape_detection.mojom.ShapeDetectionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shape_detection.mojom.ShapeDetectionService',
    'context');
  return remote.$;
};

shape_detection.mojom.ShapeDetectionServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ShapeDetectionService', [
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shape_detection.mojom.ShapeDetectionService_BindBarcodeDetectionProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shape_detection.mojom.ShapeDetectionService_BindFaceDetectionProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(shape_detection.mojom.ShapeDetectionService_BindTextDetection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shape_detection.mojom.ShapeDetectionService_BindBarcodeDetectionProvider_ParamsSpec.$.structSpec);
          const result = this.impl.bindBarcodeDetectionProvider(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shape_detection.mojom.ShapeDetectionService_BindFaceDetectionProvider_ParamsSpec.$.structSpec);
          const result = this.impl.bindFaceDetectionProvider(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(shape_detection.mojom.ShapeDetectionService_BindTextDetection_ParamsSpec.$.structSpec);
          const result = this.impl.bindTextDetection(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

shape_detection.mojom.ShapeDetectionServiceReceiver = shape_detection.mojom.ShapeDetectionServiceReceiver;

shape_detection.mojom.ShapeDetectionServicePtr = shape_detection.mojom.ShapeDetectionServiceRemote;
shape_detection.mojom.ShapeDetectionServiceRequest = shape_detection.mojom.ShapeDetectionServicePendingReceiver;

