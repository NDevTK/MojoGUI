// Auto-generated MojoJS binding
// Source: chromium_src/services/image_annotation/public/mojom/image_annotation.mojom
// Module: image_annotation.mojom

'use strict';

// Module namespace
var image_annotation = image_annotation || {};
image_annotation.mojom = image_annotation.mojom || {};


// Enum: AnnotateImageError
image_annotation.mojom.AnnotateImageError = {
  kCanceled: 0,
  kFailure: 1,
  kAdult: 2,
};

// Enum: AnnotationType
image_annotation.mojom.AnnotationType = {
  kOcr: 0,
  kLabel: 1,
  kCaption: 2,
  kIcon: 3,
};

// Interface: ImageProcessor
image_annotation.mojom.ImageProcessor = {};

image_annotation.mojom.ImageProcessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

image_annotation.mojom.ImageProcessorRemote = class {
  static get $interfaceName() {
    return 'image_annotation.mojom.ImageProcessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      image_annotation.mojom.ImageProcessorPendingReceiver,
      handle);
    this.$ = new image_annotation.mojom.ImageProcessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

image_annotation.mojom.ImageProcessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getJpgImageData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      image_annotation.mojom.ImageProcessor_GetJpgImageData_ParamsSpec,
      image_annotation.mojom.ImageProcessor_GetJpgImageData_ResponseParamsSpec,
      image_annotation.mojom.ImageProcessor_GetJpgImageData_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

};

image_annotation.mojom.ImageProcessor.getRemote = function() {
  let remote = new image_annotation.mojom.ImageProcessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'image_annotation.mojom.ImageProcessor',
    'context');
  return remote.$;
};

// ParamsSpec for GetJpgImageData
image_annotation.mojom.ImageProcessor_GetJpgImageData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'image_annotation.mojom.ImageProcessor.GetJpgImageData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

image_annotation.mojom.ImageProcessor_GetJpgImageData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'image_annotation.mojom.ImageProcessor.GetJpgImageData_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'height', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
image_annotation.mojom.ImageProcessorPtr = image_annotation.mojom.ImageProcessorRemote;
image_annotation.mojom.ImageProcessorRequest = image_annotation.mojom.ImageProcessorPendingReceiver;


// Interface: Annotator
image_annotation.mojom.Annotator = {};

image_annotation.mojom.AnnotatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

image_annotation.mojom.AnnotatorRemote = class {
  static get $interfaceName() {
    return 'image_annotation.mojom.Annotator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      image_annotation.mojom.AnnotatorPendingReceiver,
      handle);
    this.$ = new image_annotation.mojom.AnnotatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

image_annotation.mojom.AnnotatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  annotateImage(source_id, description_language_tag, image_processor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      image_annotation.mojom.Annotator_AnnotateImage_ParamsSpec,
      image_annotation.mojom.Annotator_AnnotateImage_ResponseParamsSpec,
      image_annotation.mojom.Annotator_AnnotateImage_ResponseParamsSpec,
      [source_id, description_language_tag, image_processor],
      undefined,
      undefined
    );
  }

};

image_annotation.mojom.Annotator.getRemote = function() {
  let remote = new image_annotation.mojom.AnnotatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'image_annotation.mojom.Annotator',
    'context');
  return remote.$;
};

// ParamsSpec for AnnotateImage
image_annotation.mojom.Annotator_AnnotateImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'image_annotation.mojom.Annotator.AnnotateImage_Params',
      packedSize: 32,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'description_language_tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'image_processor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

image_annotation.mojom.Annotator_AnnotateImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'image_annotation.mojom.Annotator.AnnotateImage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
image_annotation.mojom.AnnotatorPtr = image_annotation.mojom.AnnotatorRemote;
image_annotation.mojom.AnnotatorRequest = image_annotation.mojom.AnnotatorPendingReceiver;


// Interface: ImageAnnotationService
image_annotation.mojom.ImageAnnotationService = {};

image_annotation.mojom.ImageAnnotationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

image_annotation.mojom.ImageAnnotationServiceRemote = class {
  static get $interfaceName() {
    return 'image_annotation.mojom.ImageAnnotationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      image_annotation.mojom.ImageAnnotationServicePendingReceiver,
      handle);
    this.$ = new image_annotation.mojom.ImageAnnotationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

image_annotation.mojom.ImageAnnotationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindAnnotator(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      image_annotation.mojom.ImageAnnotationService_BindAnnotator_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

};

image_annotation.mojom.ImageAnnotationService.getRemote = function() {
  let remote = new image_annotation.mojom.ImageAnnotationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'image_annotation.mojom.ImageAnnotationService',
    'context');
  return remote.$;
};

// ParamsSpec for BindAnnotator
image_annotation.mojom.ImageAnnotationService_BindAnnotator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'image_annotation.mojom.ImageAnnotationService.BindAnnotator_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
image_annotation.mojom.ImageAnnotationServicePtr = image_annotation.mojom.ImageAnnotationServiceRemote;
image_annotation.mojom.ImageAnnotationServiceRequest = image_annotation.mojom.ImageAnnotationServicePendingReceiver;

