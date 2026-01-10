// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mantis/mojom/mantis_processor.mojom
// Module: mantis.mojom

'use strict';

// Module namespace
var mantis = mantis || {};
mantis.mojom = mantis.mojom || {};


// Enum: MantisError
mantis.mojom.mojom.MantisError = {
};
mantis.mojom.mojom.MantisErrorSpec = { $: mojo.internal.Enum() };

// Enum: SafetyClassifierVerdict
mantis.mojom.mojom.SafetyClassifierVerdict = {
  kPass: 0,
};
mantis.mojom.mojom.SafetyClassifierVerdictSpec = { $: mojo.internal.Enum() };

// Enum: SegmentationMode
mantis.mojom.mojom.SegmentationMode = {
  kLasso: 0,
};
mantis.mojom.mojom.SegmentationModeSpec = { $: mojo.internal.Enum() };

// Union: MantisResult
mantis.mojom.mojom.MantisResultSpec = { $: mojo.internal.Union(
    'mantis.mojom.MantisResult', {
      'error': {
        'ordinal': 0,
        'type': mantis.mojom.MantisErrorSpec,
      }},
      'result_image': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
    })
};

// Struct: TouchPoint
mantis.mojom.mojom.TouchPointSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.TouchPoint',
      packedSize: 16,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: MantisProcessor
mantis.mojom.mojom.MantisProcessor = {};

mantis.mojom.mojom.MantisProcessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mantis.mojom.mojom.MantisProcessorRemote = class {
  static get $interfaceName() {
    return 'mantis.mojom.MantisProcessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mantis.mojom.mojom.MantisProcessorPendingReceiver,
      handle);
    this.$ = new mantis.mojom.mojom.MantisProcessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mantis.mojom.mojom.MantisProcessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  inpainting(image, mask, seed) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mantis.mojom.mojom.MantisProcessor_Inpainting_ParamsSpec,
      mantis.mojom.mojom.MantisProcessor_Inpainting_ResponseParamsSpec,
      [image, mask, seed]);
  }

  generativeFill(image, mask, seed, prompt) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mantis.mojom.mojom.MantisProcessor_GenerativeFill_ParamsSpec,
      mantis.mojom.mojom.MantisProcessor_GenerativeFill_ResponseParamsSpec,
      [image, mask, seed, prompt]);
  }

  segmentation(image, prior) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mantis.mojom.mojom.MantisProcessor_Segmentation_ParamsSpec,
      mantis.mojom.mojom.MantisProcessor_Segmentation_ResponseParamsSpec,
      [image, prior]);
  }

  classifyImageSafety(image) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mantis.mojom.mojom.MantisProcessor_ClassifyImageSafety_ParamsSpec,
      mantis.mojom.mojom.MantisProcessor_ClassifyImageSafety_ResponseParamsSpec,
      [image]);
  }

  outpainting(image, mask, seed) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mantis.mojom.mojom.MantisProcessor_Outpainting_ParamsSpec,
      mantis.mojom.mojom.MantisProcessor_Outpainting_ResponseParamsSpec,
      [image, mask, seed]);
  }

  inferSegmentationMode(gesture) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mantis.mojom.mojom.MantisProcessor_InferSegmentationMode_ParamsSpec,
      mantis.mojom.mojom.MantisProcessor_InferSegmentationMode_ResponseParamsSpec,
      [gesture]);
  }

};

mantis.mojom.mojom.MantisProcessor.getRemote = function() {
  let remote = new mantis.mojom.mojom.MantisProcessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mantis.mojom.MantisProcessor',
    'context');
  return remote.$;
};

// ParamsSpec for Inpainting
mantis.mojom.mojom.MantisProcessor_Inpainting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisProcessor.Inpainting_Params',
      packedSize: 32,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'mask', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'seed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

mantis.mojom.mojom.MantisProcessor_Inpainting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisProcessor.Inpainting_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.MantisResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GenerativeFill
mantis.mojom.mojom.MantisProcessor_GenerativeFill_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisProcessor.GenerativeFill_Params',
      packedSize: 40,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'mask', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'seed', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'prompt', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

mantis.mojom.mojom.MantisProcessor_GenerativeFill_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisProcessor.GenerativeFill_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.MantisResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Segmentation
mantis.mojom.mojom.MantisProcessor_Segmentation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisProcessor.Segmentation_Params',
      packedSize: 24,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'prior', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

mantis.mojom.mojom.MantisProcessor_Segmentation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisProcessor.Segmentation_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.MantisResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClassifyImageSafety
mantis.mojom.mojom.MantisProcessor_ClassifyImageSafety_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisProcessor.ClassifyImageSafety_Params',
      packedSize: 16,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

mantis.mojom.mojom.MantisProcessor_ClassifyImageSafety_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisProcessor.ClassifyImageSafety_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'verdict', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.SafetyClassifierVerdictSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Outpainting
mantis.mojom.mojom.MantisProcessor_Outpainting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisProcessor.Outpainting_Params',
      packedSize: 32,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'mask', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'seed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

mantis.mojom.mojom.MantisProcessor_Outpainting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisProcessor.Outpainting_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.MantisResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for InferSegmentationMode
mantis.mojom.mojom.MantisProcessor_InferSegmentationMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisProcessor.InferSegmentationMode_Params',
      packedSize: 16,
      fields: [
        { name: 'gesture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mantis.mojom.TouchPointSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

mantis.mojom.mojom.MantisProcessor_InferSegmentationMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisProcessor.InferSegmentationMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.SegmentationModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mantis.mojom.mojom.MantisProcessorPtr = mantis.mojom.mojom.MantisProcessorRemote;
mantis.mojom.mojom.MantisProcessorRequest = mantis.mojom.mojom.MantisProcessorPendingReceiver;

