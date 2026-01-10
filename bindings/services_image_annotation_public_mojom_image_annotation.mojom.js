// Auto-generated MojoJS binding
// Source: chromium_src/services/image_annotation/public/mojom/image_annotation.mojom
// Module: image_annotation.mojom

'use strict';

// Module namespace
var image_annotation = image_annotation || {};
image_annotation.mojom = image_annotation.mojom || {};

image_annotation.mojom.AnnotateImageErrorSpec = { $: mojo.internal.Enum() };
image_annotation.mojom.AnnotationTypeSpec = { $: mojo.internal.Enum() };
image_annotation.mojom.AnnotateImageResultSpec = { $: {} };
image_annotation.mojom.AnnotationSpec = { $: {} };
image_annotation.mojom.ImageProcessor = {};
image_annotation.mojom.ImageProcessor.$interfaceName = 'image_annotation.mojom.ImageProcessor';
image_annotation.mojom.ImageProcessor_GetJpgImageData_ParamsSpec = { $: {} };
image_annotation.mojom.ImageProcessor_GetJpgImageData_ResponseParamsSpec = { $: {} };
image_annotation.mojom.Annotator = {};
image_annotation.mojom.Annotator.$interfaceName = 'image_annotation.mojom.Annotator';
image_annotation.mojom.Annotator_AnnotateImage_ParamsSpec = { $: {} };
image_annotation.mojom.Annotator_AnnotateImage_ResponseParamsSpec = { $: {} };
image_annotation.mojom.ImageAnnotationService = {};
image_annotation.mojom.ImageAnnotationService.$interfaceName = 'image_annotation.mojom.ImageAnnotationService';
image_annotation.mojom.ImageAnnotationService_BindAnnotator_ParamsSpec = { $: {} };

// Enum: AnnotateImageError
image_annotation.mojom.AnnotateImageError = {
  kCanceled: 0,
  kFailure: 1,
  kAdult: 2,
};

// Enum: AnnotationType
image_annotation.mojom.AnnotationType = {
  kOcr: 1,
  kLabel: 2,
  kCaption: 3,
  kIcon: 4,
};

// Union: AnnotateImageResult
mojo.internal.Union(
    image_annotation.mojom.AnnotateImageResultSpec, 'image_annotation.mojom.AnnotateImageResult', {
      'error_code': {
        'ordinal': 0,
        'type': image_annotation.mojom.AnnotateImageErrorSpec.$,
        'nullable': false,
      },
      'annotations': {
        'ordinal': 1,
        'type': mojo.internal.Array(image_annotation.mojom.AnnotationSpec.$, false),
        'nullable': false,
      },
    });

// Struct: Annotation
mojo.internal.Struct(
    image_annotation.mojom.AnnotationSpec, 'image_annotation.mojom.Annotation', [
      mojo.internal.StructField('type', 0, 0, image_annotation.mojom.AnnotationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('score', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('text', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ImageProcessor
mojo.internal.Struct(
    image_annotation.mojom.ImageProcessor_GetJpgImageData_ParamsSpec, 'image_annotation.mojom.ImageProcessor_GetJpgImageData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    image_annotation.mojom.ImageProcessor_GetJpgImageData_ResponseParamsSpec, 'image_annotation.mojom.ImageProcessor_GetJpgImageData_ResponseParams', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [],
      false);
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

image_annotation.mojom.ImageProcessorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetJpgImageData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(image_annotation.mojom.ImageProcessor_GetJpgImageData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetJpgImageData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(image_annotation.mojom.ImageProcessor_GetJpgImageData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getJpgImageData');
          const result = this.impl.getJpgImageData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, image_annotation.mojom.ImageProcessor_GetJpgImageData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

image_annotation.mojom.ImageProcessorReceiver = image_annotation.mojom.ImageProcessorReceiver;

image_annotation.mojom.ImageProcessorPtr = image_annotation.mojom.ImageProcessorRemote;
image_annotation.mojom.ImageProcessorRequest = image_annotation.mojom.ImageProcessorPendingReceiver;


// Interface: Annotator
mojo.internal.Struct(
    image_annotation.mojom.Annotator_AnnotateImage_ParamsSpec, 'image_annotation.mojom.Annotator_AnnotateImage_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description_language_tag', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('image_processor', 16, 0, mojo.internal.InterfaceProxy(image_annotation.mojom.ImageProcessorSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    image_annotation.mojom.Annotator_AnnotateImage_ResponseParamsSpec, 'image_annotation.mojom.Annotator_AnnotateImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, image_annotation.mojom.AnnotateImageResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [source_id, description_language_tag, image_processor],
      false);
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

image_annotation.mojom.AnnotatorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AnnotateImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(image_annotation.mojom.Annotator_AnnotateImage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AnnotateImage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(image_annotation.mojom.Annotator_AnnotateImage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.annotateImage');
          const result = this.impl.annotateImage(params.source_id, params.description_language_tag, params.image_processor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, image_annotation.mojom.Annotator_AnnotateImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

image_annotation.mojom.AnnotatorReceiver = image_annotation.mojom.AnnotatorReceiver;

image_annotation.mojom.AnnotatorPtr = image_annotation.mojom.AnnotatorRemote;
image_annotation.mojom.AnnotatorRequest = image_annotation.mojom.AnnotatorPendingReceiver;


// Interface: ImageAnnotationService
mojo.internal.Struct(
    image_annotation.mojom.ImageAnnotationService_BindAnnotator_ParamsSpec, 'image_annotation.mojom.ImageAnnotationService_BindAnnotator_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(image_annotation.mojom.AnnotatorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [receiver],
      false);
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

image_annotation.mojom.ImageAnnotationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindAnnotator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(image_annotation.mojom.ImageAnnotationService_BindAnnotator_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAnnotator (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(image_annotation.mojom.ImageAnnotationService_BindAnnotator_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindAnnotator');
          const result = this.impl.bindAnnotator(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

image_annotation.mojom.ImageAnnotationServiceReceiver = image_annotation.mojom.ImageAnnotationServiceReceiver;

image_annotation.mojom.ImageAnnotationServicePtr = image_annotation.mojom.ImageAnnotationServiceRemote;
image_annotation.mojom.ImageAnnotationServiceRequest = image_annotation.mojom.ImageAnnotationServicePendingReceiver;

