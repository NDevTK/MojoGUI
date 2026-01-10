// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/facedetection_provider.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};


// Interface: FaceDetectionProvider
shape_detection.mojom.FaceDetectionProvider = {};

shape_detection.mojom.FaceDetectionProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

shape_detection.mojom.FaceDetectionProviderRemote = class {
  static get $interfaceName() {
    return 'shape_detection.mojom.FaceDetectionProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      shape_detection.mojom.FaceDetectionProviderPendingReceiver,
      handle);
    this.$ = new shape_detection.mojom.FaceDetectionProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

shape_detection.mojom.FaceDetectionProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createFaceDetection(receiver, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      shape_detection.mojom.FaceDetectionProvider_CreateFaceDetection_ParamsSpec,
      null,
      [receiver, options]);
  }

};

shape_detection.mojom.FaceDetectionProvider.getRemote = function() {
  let remote = new shape_detection.mojom.FaceDetectionProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shape_detection.mojom.FaceDetectionProvider',
    'context');
  return remote.$;
};

// ParamsSpec for CreateFaceDetection
shape_detection.mojom.FaceDetectionProvider_CreateFaceDetection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'shape_detection.mojom.FaceDetectionProvider.CreateFaceDetection_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: shape_detection.mojom.FaceDetectorOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
shape_detection.mojom.FaceDetectionProviderPtr = shape_detection.mojom.FaceDetectionProviderRemote;
shape_detection.mojom.FaceDetectionProviderRequest = shape_detection.mojom.FaceDetectionProviderPendingReceiver;

