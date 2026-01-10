// Auto-generated MojoJS binding
// Source: chromium_src/services/image_annotation/public/mojom/image_annotation.mojom
// Module: image_annotation.mojom

'use strict';

// Module namespace
var image_annotation = image_annotation || {};
image_annotation.mojom = image_annotation.mojom || {};


// Enum: AnnotateImageError
image_annotation.mojom.mojom.AnnotateImageError = {
  kCanceled: 0,
  kFailure: 1,
  kAdult: 2,
};
image_annotation.mojom.mojom.AnnotateImageErrorSpec = { $: mojo.internal.Enum() };

// Enum: AnnotationType
image_annotation.mojom.mojom.AnnotationType = {
  kOcr: 0,
  kLabel: 1,
  kCaption: 2,
  kIcon: 3,
};
image_annotation.mojom.mojom.AnnotationTypeSpec = { $: mojo.internal.Enum() };

// Union: AnnotateImageResult
image_annotation.mojom.mojom.AnnotateImageResultSpec = { $: mojo.internal.Union(
    'image_annotation.mojom.AnnotateImageResult', {
      'error_code': {
        'ordinal': 0,
        'type': image_annotation.mojom.AnnotateImageErrorSpec,
      }},
      'annotations': {
        'ordinal': 1,
        'type': mojo.internal.Array(image_annotation.mojom.AnnotationSpec, false),
      }},
    })
};

// Struct: Annotation
image_annotation.mojom.mojom.AnnotationSpec = {
  $: {
    structSpec: {
      name: 'image_annotation.mojom.Annotation',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: image_annotation.mojom.AnnotationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'score', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: ImageProcessor
image_annotation.mojom.mojom.ImageProcessor = {};

image_annotation.mojom.mojom.ImageProcessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

image_annotation.mojom.mojom.ImageProcessorRemote = class {
  static get $interfaceName() {
    return 'image_annotation.mojom.ImageProcessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      image_annotation.mojom.mojom.ImageProcessorPendingReceiver,
      handle);
    this.$ = new image_annotation.mojom.mojom.ImageProcessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

image_annotation.mojom.mojom.ImageProcessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getJpgImageData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      image_annotation.mojom.mojom.ImageProcessor_GetJpgImageData_ParamsSpec,
      image_annotation.mojom.mojom.ImageProcessor_GetJpgImageData_ResponseParamsSpec,
      []);
  }

};

image_annotation.mojom.mojom.ImageProcessor.getRemote = function() {
  let remote = new image_annotation.mojom.mojom.ImageProcessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'image_annotation.mojom.ImageProcessor',
    'context');
  return remote.$;
};

// ParamsSpec for GetJpgImageData
image_annotation.mojom.mojom.ImageProcessor_GetJpgImageData_ParamsSpec = {
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

image_annotation.mojom.mojom.ImageProcessor_GetJpgImageData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'image_annotation.mojom.ImageProcessor.GetJpgImageData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
image_annotation.mojom.mojom.ImageProcessorPtr = image_annotation.mojom.mojom.ImageProcessorRemote;
image_annotation.mojom.mojom.ImageProcessorRequest = image_annotation.mojom.mojom.ImageProcessorPendingReceiver;


// Interface: Annotator
image_annotation.mojom.mojom.Annotator = {};

image_annotation.mojom.mojom.AnnotatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

image_annotation.mojom.mojom.AnnotatorRemote = class {
  static get $interfaceName() {
    return 'image_annotation.mojom.Annotator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      image_annotation.mojom.mojom.AnnotatorPendingReceiver,
      handle);
    this.$ = new image_annotation.mojom.mojom.AnnotatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

image_annotation.mojom.mojom.AnnotatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  annotateImage(source_id, description_language_tag, image_processor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      image_annotation.mojom.mojom.Annotator_AnnotateImage_ParamsSpec,
      image_annotation.mojom.mojom.Annotator_AnnotateImage_ResponseParamsSpec,
      [source_id, description_language_tag, image_processor]);
  }

};

image_annotation.mojom.mojom.Annotator.getRemote = function() {
  let remote = new image_annotation.mojom.mojom.AnnotatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'image_annotation.mojom.Annotator',
    'context');
  return remote.$;
};

// ParamsSpec for AnnotateImage
image_annotation.mojom.mojom.Annotator_AnnotateImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'image_annotation.mojom.Annotator.AnnotateImage_Params',
      packedSize: 32,
      fields: [
        { name: 'source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description_language_tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'image_processor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

image_annotation.mojom.mojom.Annotator_AnnotateImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'image_annotation.mojom.Annotator.AnnotateImage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: image_annotation.mojom.AnnotateImageResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
image_annotation.mojom.mojom.AnnotatorPtr = image_annotation.mojom.mojom.AnnotatorRemote;
image_annotation.mojom.mojom.AnnotatorRequest = image_annotation.mojom.mojom.AnnotatorPendingReceiver;


// Interface: ImageAnnotationService
image_annotation.mojom.mojom.ImageAnnotationService = {};

image_annotation.mojom.mojom.ImageAnnotationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

image_annotation.mojom.mojom.ImageAnnotationServiceRemote = class {
  static get $interfaceName() {
    return 'image_annotation.mojom.ImageAnnotationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      image_annotation.mojom.mojom.ImageAnnotationServicePendingReceiver,
      handle);
    this.$ = new image_annotation.mojom.mojom.ImageAnnotationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

image_annotation.mojom.mojom.ImageAnnotationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindAnnotator(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      image_annotation.mojom.mojom.ImageAnnotationService_BindAnnotator_ParamsSpec,
      null,
      [receiver]);
  }

};

image_annotation.mojom.mojom.ImageAnnotationService.getRemote = function() {
  let remote = new image_annotation.mojom.mojom.ImageAnnotationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'image_annotation.mojom.ImageAnnotationService',
    'context');
  return remote.$;
};

// ParamsSpec for BindAnnotator
image_annotation.mojom.mojom.ImageAnnotationService_BindAnnotator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'image_annotation.mojom.ImageAnnotationService.BindAnnotator_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
image_annotation.mojom.mojom.ImageAnnotationServicePtr = image_annotation.mojom.mojom.ImageAnnotationServiceRemote;
image_annotation.mojom.mojom.ImageAnnotationServiceRequest = image_annotation.mojom.mojom.ImageAnnotationServicePendingReceiver;

