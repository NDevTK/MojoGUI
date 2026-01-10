// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/shape_detection_service.mojom
// Module: shape_detection.mojom

'use strict';

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
};

shape_detection.mojom.ShapeDetectionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindBarcodeDetectionProvider(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      shape_detection.mojom.ShapeDetectionService_BindBarcodeDetectionProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindFaceDetectionProvider(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      shape_detection.mojom.ShapeDetectionService_BindFaceDetectionProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTextDetection(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
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
          const params = shape_detection.mojom.ShapeDetectionService_BindBarcodeDetectionProvider_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindBarcodeDetectionProvider(params.receiver);
          break;
        }
        case 1: {
          const params = shape_detection.mojom.ShapeDetectionService_BindFaceDetectionProvider_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindFaceDetectionProvider(params.receiver);
          break;
        }
        case 2: {
          const params = shape_detection.mojom.ShapeDetectionService_BindTextDetection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindTextDetection(params.receiver);
          break;
        }
      }
    }});
  }
};

shape_detection.mojom.ShapeDetectionServiceReceiver = shape_detection.mojom.ShapeDetectionServiceReceiver;

shape_detection.mojom.ShapeDetectionServicePtr = shape_detection.mojom.ShapeDetectionServiceRemote;
shape_detection.mojom.ShapeDetectionServiceRequest = shape_detection.mojom.ShapeDetectionServicePendingReceiver;

