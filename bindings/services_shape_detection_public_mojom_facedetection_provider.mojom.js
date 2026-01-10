// Auto-generated MojoJS binding
// Source: chromium_src/services/shape_detection/public/mojom/facedetection_provider.mojom
// Module: shape_detection.mojom

'use strict';

// Module namespace
var shape_detection = shape_detection || {};
shape_detection.mojom = shape_detection.mojom || {};
var services = services || {};

shape_detection.mojom.FaceDetectionProvider = {};
shape_detection.mojom.FaceDetectionProvider.$interfaceName = 'shape_detection.mojom.FaceDetectionProvider';
shape_detection.mojom.FaceDetectionProvider_CreateFaceDetection_ParamsSpec = { $: {} };

// Interface: FaceDetectionProvider
mojo.internal.Struct(
    shape_detection.mojom.FaceDetectionProvider_CreateFaceDetection_ParamsSpec, 'shape_detection.mojom.FaceDetectionProvider_CreateFaceDetection_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(shape_detection.mojom.FaceDetectionRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, shape_detection.mojom.FaceDetectorOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [receiver, options],
      false);
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

shape_detection.mojom.FaceDetectionProviderPtr = shape_detection.mojom.FaceDetectionProviderRemote;
shape_detection.mojom.FaceDetectionProviderRequest = shape_detection.mojom.FaceDetectionProviderPendingReceiver;

