// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/image_content_annotation.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

chromeos.machine_learning.mojom.StatusSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.ImageAnnotatorConfigSpec = { $: {} };
chromeos.machine_learning.mojom.ImageAnnotationScoreSpec = { $: {} };
chromeos.machine_learning.mojom.ImageAnnotationResultSpec = { $: {} };
chromeos.machine_learning.mojom.ImageContentAnnotator = {};
chromeos.machine_learning.mojom.ImageContentAnnotator.$interfaceName = 'chromeos.machine_learning.mojom.ImageContentAnnotator';
chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ResponseParamsSpec = { $: {} };

// Enum: Status
chromeos.machine_learning.mojom.Status = {
  OK: 0,
  ERROR: 1,
};

// Struct: ImageAnnotatorConfig
mojo.internal.Struct(
    chromeos.machine_learning.mojom.ImageAnnotatorConfigSpec, 'chromeos.machine_learning.mojom.ImageAnnotatorConfig', [
      mojo.internal.StructField('locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ImageAnnotationScore
mojo.internal.Struct(
    chromeos.machine_learning.mojom.ImageAnnotationScoreSpec, 'chromeos.machine_learning.mojom.ImageAnnotationScore', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('DEPRECATED_confidence', 4, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('mid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('score', 24, 0, mojo.internal.Float, 0, false, 1, undefined),
      mojo.internal.StructField('bounding_box', 32, 0, gfx.mojom.RectSpec, null, true, 1, undefined),
    ],
    [[0, 32], [1, 48]]);

// Struct: ImageAnnotationResult
mojo.internal.Struct(
    chromeos.machine_learning.mojom.ImageAnnotationResultSpec, 'chromeos.machine_learning.mojom.ImageAnnotationResult', [
      mojo.internal.StructField('OK', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ImageContentAnnotator
mojo.internal.Struct(
    chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ParamsSpec, 'chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_Params', [
      mojo.internal.StructField('rgb_bytes', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, null, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('line_stride', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ResponseParamsSpec, 'chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.ImageAnnotationResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ParamsSpec, 'chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_Params', [
      mojo.internal.StructField('encoded_image', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ResponseParamsSpec, 'chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.ImageAnnotationResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.machine_learning.mojom.ImageContentAnnotatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.ImageContentAnnotatorRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.ImageContentAnnotator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.ImageContentAnnotatorPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.ImageContentAnnotatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.ImageContentAnnotatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  annotateRawImage(rgb_bytes, width, height, line_stride) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ParamsSpec,
      chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ResponseParamsSpec,
      [rgb_bytes, width, height, line_stride]);
  }

  annotateEncodedImage(encoded_image) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ParamsSpec,
      chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ResponseParamsSpec,
      [encoded_image]);
  }

};

chromeos.machine_learning.mojom.ImageContentAnnotator.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.ImageContentAnnotatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.ImageContentAnnotator',
    'context');
  return remote.$;
};

chromeos.machine_learning.mojom.ImageContentAnnotatorPtr = chromeos.machine_learning.mojom.ImageContentAnnotatorRemote;
chromeos.machine_learning.mojom.ImageContentAnnotatorRequest = chromeos.machine_learning.mojom.ImageContentAnnotatorPendingReceiver;

