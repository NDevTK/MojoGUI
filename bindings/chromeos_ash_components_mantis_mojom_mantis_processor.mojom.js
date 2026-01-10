// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mantis/mojom/mantis_processor.mojom
// Module: mantis.mojom

'use strict';

// Module namespace
var mantis = mantis || {};
mantis.mojom = mantis.mojom || {};

mantis.mojom.MantisErrorSpec = { $: mojo.internal.Enum() };
mantis.mojom.SafetyClassifierVerdictSpec = { $: mojo.internal.Enum() };
mantis.mojom.SegmentationModeSpec = { $: mojo.internal.Enum() };
mantis.mojom.MantisResultSpec = { $: {} };
mantis.mojom.TouchPointSpec = { $: {} };
mantis.mojom.MantisProcessor = {};
mantis.mojom.MantisProcessor.$interfaceName = 'mantis.mojom.MantisProcessor';
mantis.mojom.MantisProcessor_Inpainting_ParamsSpec = { $: {} };
mantis.mojom.MantisProcessor_Inpainting_ResponseParamsSpec = { $: {} };
mantis.mojom.MantisProcessor_GenerativeFill_ParamsSpec = { $: {} };
mantis.mojom.MantisProcessor_GenerativeFill_ResponseParamsSpec = { $: {} };
mantis.mojom.MantisProcessor_Segmentation_ParamsSpec = { $: {} };
mantis.mojom.MantisProcessor_Segmentation_ResponseParamsSpec = { $: {} };
mantis.mojom.MantisProcessor_ClassifyImageSafety_ParamsSpec = { $: {} };
mantis.mojom.MantisProcessor_ClassifyImageSafety_ResponseParamsSpec = { $: {} };
mantis.mojom.MantisProcessor_Outpainting_ParamsSpec = { $: {} };
mantis.mojom.MantisProcessor_Outpainting_ResponseParamsSpec = { $: {} };
mantis.mojom.MantisProcessor_InferSegmentationMode_ParamsSpec = { $: {} };
mantis.mojom.MantisProcessor_InferSegmentationMode_ResponseParamsSpec = { $: {} };

// Enum: MantisError
mantis.mojom.MantisError = {
  kUnknownError: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
};

// Enum: SafetyClassifierVerdict
mantis.mojom.SafetyClassifierVerdict = {
  kPass: 0,
  kFail: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Enum: SegmentationMode
mantis.mojom.SegmentationMode = {
  kScribble: 0,
  kLasso: 1,
};

// Union: MantisResult
mojo.internal.Union(
    mantis.mojom.MantisResultSpec, 'mantis.mojom.MantisResult', {
      'error': {
        'ordinal': 0,
        'type': mantis.mojom.MantisErrorSpec.$,
        'nullable': false,
      },
      'result_image': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
    });

// Struct: TouchPoint
mojo.internal.Struct(
    mantis.mojom.TouchPointSpec, 'mantis.mojom.TouchPoint', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: MantisProcessor
mojo.internal.Struct(
    mantis.mojom.MantisProcessor_Inpainting_ParamsSpec, 'mantis.mojom.MantisProcessor_Inpainting_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('seed', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mantis.mojom.MantisProcessor_Inpainting_ResponseParamsSpec, 'mantis.mojom.MantisProcessor_Inpainting_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mantis.mojom.MantisProcessor_GenerativeFill_ParamsSpec, 'mantis.mojom.MantisProcessor_GenerativeFill_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('prompt', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('seed', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mantis.mojom.MantisProcessor_GenerativeFill_ResponseParamsSpec, 'mantis.mojom.MantisProcessor_GenerativeFill_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mantis.mojom.MantisProcessor_Segmentation_ParamsSpec, 'mantis.mojom.MantisProcessor_Segmentation_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('prior', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mantis.mojom.MantisProcessor_Segmentation_ResponseParamsSpec, 'mantis.mojom.MantisProcessor_Segmentation_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mantis.mojom.MantisProcessor_ClassifyImageSafety_ParamsSpec, 'mantis.mojom.MantisProcessor_ClassifyImageSafety_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mantis.mojom.MantisProcessor_ClassifyImageSafety_ResponseParamsSpec, 'mantis.mojom.MantisProcessor_ClassifyImageSafety_ResponseParams', [
      mojo.internal.StructField('verdict', 0, 0, mantis.mojom.SafetyClassifierVerdictSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mantis.mojom.MantisProcessor_Outpainting_ParamsSpec, 'mantis.mojom.MantisProcessor_Outpainting_Params', [
      mojo.internal.StructField('image', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('mask', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('seed', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mantis.mojom.MantisProcessor_Outpainting_ResponseParamsSpec, 'mantis.mojom.MantisProcessor_Outpainting_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mantis.mojom.MantisResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mantis.mojom.MantisProcessor_InferSegmentationMode_ParamsSpec, 'mantis.mojom.MantisProcessor_InferSegmentationMode_Params', [
      mojo.internal.StructField('gesture', 0, 0, mojo.internal.Array(mantis.mojom.TouchPointSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mantis.mojom.MantisProcessor_InferSegmentationMode_ResponseParamsSpec, 'mantis.mojom.MantisProcessor_InferSegmentationMode_ResponseParams', [
      mojo.internal.StructField('mode', 0, 0, mantis.mojom.SegmentationModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mantis.mojom.MantisProcessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mantis.mojom.MantisProcessorRemote = class {
  static get $interfaceName() {
    return 'mantis.mojom.MantisProcessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mantis.mojom.MantisProcessorPendingReceiver,
      handle);
    this.$ = new mantis.mojom.MantisProcessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mantis.mojom.MantisProcessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  inpainting(image, mask, seed) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mantis.mojom.MantisProcessor_Inpainting_ParamsSpec,
      mantis.mojom.MantisProcessor_Inpainting_ResponseParamsSpec,
      [image, mask, seed],
      false);
  }

  generativeFill(image, mask, seed, prompt) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mantis.mojom.MantisProcessor_GenerativeFill_ParamsSpec,
      mantis.mojom.MantisProcessor_GenerativeFill_ResponseParamsSpec,
      [image, mask, seed, prompt],
      false);
  }

  segmentation(image, prior) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mantis.mojom.MantisProcessor_Segmentation_ParamsSpec,
      mantis.mojom.MantisProcessor_Segmentation_ResponseParamsSpec,
      [image, prior],
      false);
  }

  classifyImageSafety(image) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mantis.mojom.MantisProcessor_ClassifyImageSafety_ParamsSpec,
      mantis.mojom.MantisProcessor_ClassifyImageSafety_ResponseParamsSpec,
      [image],
      false);
  }

  outpainting(image, mask, seed) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mantis.mojom.MantisProcessor_Outpainting_ParamsSpec,
      mantis.mojom.MantisProcessor_Outpainting_ResponseParamsSpec,
      [image, mask, seed],
      false);
  }

  inferSegmentationMode(gesture) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mantis.mojom.MantisProcessor_InferSegmentationMode_ParamsSpec,
      mantis.mojom.MantisProcessor_InferSegmentationMode_ResponseParamsSpec,
      [gesture],
      false);
  }

};

mantis.mojom.MantisProcessor.getRemote = function() {
  let remote = new mantis.mojom.MantisProcessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mantis.mojom.MantisProcessor',
    'context');
  return remote.$;
};

mantis.mojom.MantisProcessorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = mantis.mojom.MantisProcessor_Inpainting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.inpainting(params.image, params.mask, params.seed);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mantis.mojom.MantisProcessor_Inpainting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = mantis.mojom.MantisProcessor_GenerativeFill_ParamsSpec.$.decode(message.payload);
          const result = this.impl.generativeFill(params.image, params.mask, params.seed, params.prompt);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mantis.mojom.MantisProcessor_GenerativeFill_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = mantis.mojom.MantisProcessor_Segmentation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.segmentation(params.image, params.prior);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mantis.mojom.MantisProcessor_Segmentation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = mantis.mojom.MantisProcessor_ClassifyImageSafety_ParamsSpec.$.decode(message.payload);
          const result = this.impl.classifyImageSafety(params.image);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mantis.mojom.MantisProcessor_ClassifyImageSafety_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = mantis.mojom.MantisProcessor_Outpainting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.outpainting(params.image, params.mask, params.seed);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mantis.mojom.MantisProcessor_Outpainting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = mantis.mojom.MantisProcessor_InferSegmentationMode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.inferSegmentationMode(params.gesture);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mantis.mojom.MantisProcessor_InferSegmentationMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

mantis.mojom.MantisProcessorReceiver = mantis.mojom.MantisProcessorReceiver;

mantis.mojom.MantisProcessorPtr = mantis.mojom.MantisProcessorRemote;
mantis.mojom.MantisProcessorRequest = mantis.mojom.MantisProcessorPendingReceiver;

