// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/image_content_annotation.mojom
// Module: chromeos.machine_learning.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};
var gfx = gfx || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('mid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('DEPRECATED_confidence', 20, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('bounding_box', 24, 0, gfx.mojom.RectSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('score', 32, 0, mojo.internal.Float, 0, false, 1, undefined),
    ],
    [[0, 32], [1, 48]]);

// Struct: ImageAnnotationResult
mojo.internal.Struct(
    chromeos.machine_learning.mojom.ImageAnnotationResultSpec, 'chromeos.machine_learning.mojom.ImageAnnotationResult', [
      mojo.internal.StructField('OK', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ImageContentAnnotator
mojo.internal.Struct(
    chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ParamsSpec, 'chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_Params', [
      mojo.internal.StructField('rgb_bytes', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('line_stride', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ResponseParamsSpec, 'chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.ImageAnnotationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ParamsSpec, 'chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_Params', [
      mojo.internal.StructField('encoded_image', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ResponseParamsSpec, 'chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.ImageAnnotationResultSpec.$, null, false, 0, undefined),
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
  annotateRawImage(rgb_bytes, width, height, line_stride) {
    return this.$.annotateRawImage(rgb_bytes, width, height, line_stride);
  }
  annotateEncodedImage(encoded_image) {
    return this.$.annotateEncodedImage(encoded_image);
  }
};

chromeos.machine_learning.mojom.ImageContentAnnotatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImageContentAnnotator', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  annotateRawImage(rgb_bytes, width, height, line_stride) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ParamsSpec,
      chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ResponseParamsSpec,
      [rgb_bytes, width, height, line_stride],
      false);
  }

  annotateEncodedImage(encoded_image) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ParamsSpec,
      chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ResponseParamsSpec,
      [encoded_image],
      false);
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

chromeos.machine_learning.mojom.ImageContentAnnotatorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImageContentAnnotator', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ParamsSpec.$.structSpec);
          const result = this.impl.annotateRawImage(params.rgb_bytes, params.width, params.height, params.line_stride);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateRawImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ParamsSpec.$.structSpec);
          const result = this.impl.annotateEncodedImage(params.encoded_image);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.ImageContentAnnotator_AnnotateEncodedImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.machine_learning.mojom.ImageContentAnnotatorReceiver = chromeos.machine_learning.mojom.ImageContentAnnotatorReceiver;

chromeos.machine_learning.mojom.ImageContentAnnotatorPtr = chromeos.machine_learning.mojom.ImageContentAnnotatorRemote;
chromeos.machine_learning.mojom.ImageContentAnnotatorRequest = chromeos.machine_learning.mojom.ImageContentAnnotatorPendingReceiver;

