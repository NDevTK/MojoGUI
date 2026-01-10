// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/shape_detection_service.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};


shape_detection.mojom.kShapeDetectionSandbox = sandbox.mojom.Sandbox.kShapeDetection;

shape_detection.mojom.kShapeDetectionSandbox = sandbox.mojom.Sandbox.kUtility;

shape_detection.mojom.kShapeDetectionSandbox = sandbox.mojom.Sandbox.kGpu;

// Interface: ShapeDetectionService
shape_detection.mojom.ShapeDetectionService = {};

shape_detection.mojom.ShapeDetectionService_BindBarcodeDetectionProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.ShapeDetectionService_BindBarcodeDetectionProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(shape_detection.mojom.BarcodeDetectionProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

shape_detection.mojom.ShapeDetectionService_BindFaceDetectionProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.ShapeDetectionService_BindFaceDetectionProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(shape_detection.mojom.FaceDetectionProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

shape_detection.mojom.ShapeDetectionService_BindTextDetection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.ShapeDetectionService_BindTextDetection_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(shape_detection.mojom.TextDetectionRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [receiver]);
  }

  bindFaceDetectionProvider(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      shape_detection.mojom.ShapeDetectionService_BindFaceDetectionProvider_ParamsSpec,
      null,
      [receiver]);
  }

  bindTextDetection(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      shape_detection.mojom.ShapeDetectionService_BindTextDetection_ParamsSpec,
      null,
      [receiver]);
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

// ParamsSpec for BindBarcodeDetectionProvider
shape_detection.mojom.ShapeDetectionService_BindBarcodeDetectionProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.ShapeDetectionService.BindBarcodeDetectionProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(shape_detection.mojom.BarcodeDetectionProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindFaceDetectionProvider
shape_detection.mojom.ShapeDetectionService_BindFaceDetectionProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.ShapeDetectionService.BindFaceDetectionProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(shape_detection.mojom.FaceDetectionProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindTextDetection
shape_detection.mojom.ShapeDetectionService_BindTextDetection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.ShapeDetectionService.BindTextDetection_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(shape_detection.mojom.TextDetectionRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
shape_detection.mojom.ShapeDetectionServicePtr = shape_detection.mojom.ShapeDetectionServiceRemote;
shape_detection.mojom.ShapeDetectionServiceRequest = shape_detection.mojom.ShapeDetectionServicePendingReceiver;

