// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/image_content_annotation.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: Status
chromeos.machine_learning.mojom.Status = {
  ERROR: 0,
};
chromeos.machine_learning.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Struct: ImageAnnotatorConfig
chromeos.machine_learning.mojom.ImageAnnotatorConfigSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.ImageAnnotatorConfig',
      packedSize: 16,
      fields: [
        { name: 'locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ImageAnnotationScore
chromeos.machine_learning.mojom.ImageAnnotationScoreSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.ImageAnnotationScore',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'DEPRECATED_confidence', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'mid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'score', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 1 },
        { name: 'bounding_box', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 1, packedSize: 48}]
    }
  }
};

// Struct: ImageAnnotationResult
chromeos.machine_learning.mojom.ImageAnnotationResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.ImageAnnotationResult',
      packedSize: 16,
      fields: [
        { name: 'OK', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: ImageContentAnnotator
chromeos.machine_learning.mojom.ImageContentAnnotator = {};

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

// ParamsSpec for AnnotateRawImage
chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.ImageContentAnnotator.AnnotateRawImage_Params',
      packedSize: 32,
      fields: [
        { name: 'rgb_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'line_stride', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.ImageContentAnnotator.AnnotateRawImage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.ImageAnnotationResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AnnotateEncodedImage
chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.ImageContentAnnotator.AnnotateEncodedImage_Params',
      packedSize: 16,
      fields: [
        { name: 'encoded_image', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.ImageContentAnnotator.AnnotateEncodedImage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.ImageAnnotationResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.machine_learning.mojom.ImageContentAnnotatorPtr = chromeos.machine_learning.mojom.ImageContentAnnotatorRemote;
chromeos.machine_learning.mojom.ImageContentAnnotatorRequest = chromeos.machine_learning.mojom.ImageContentAnnotatorPendingReceiver;

