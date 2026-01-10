// Auto-generated MojoJS binding
// Source: chromium_src/services/screen_ai/public/mojom/screen_ai_service.mojom
// Module: screen_ai.mojom

'use strict';

// Module namespace
var screen_ai = screen_ai || {};
screen_ai.mojom = screen_ai.mojom || {};
var skia = skia || {};
var ax = ax || {};
var gfx = gfx || {};

screen_ai.mojom.DirectionSpec = { $: mojo.internal.Enum() };
screen_ai.mojom.OcrClientTypeSpec = { $: mojo.internal.Enum() };
screen_ai.mojom.MceClientTypeSpec = { $: mojo.internal.Enum() };
screen_ai.mojom.VisualAnnotationSpec = { $: {} };
screen_ai.mojom.LineBoxSpec = { $: {} };
screen_ai.mojom.WordBoxSpec = { $: {} };
screen_ai.mojom.ScreenAIAnnotator = {};
screen_ai.mojom.ScreenAIAnnotator.$interfaceName = 'screen_ai.mojom.ScreenAIAnnotator';
screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ResponseParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParamsSpec = { $: {} };
screen_ai.mojom.Screen2xMainContentExtractor = {};
screen_ai.mojom.Screen2xMainContentExtractor.$interfaceName = 'screen_ai.mojom.Screen2xMainContentExtractor';
screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ParamsSpec = { $: {} };
screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ResponseParamsSpec = { $: {} };
screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec = { $: {} };
screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParamsSpec = { $: {} };
screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec = { $: {} };
screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParamsSpec = { $: {} };
screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec = { $: {} };
screen_ai.mojom.OCRService = {};
screen_ai.mojom.OCRService.$interfaceName = 'screen_ai.mojom.OCRService';
screen_ai.mojom.OCRService_BindAnnotator_ParamsSpec = { $: {} };
screen_ai.mojom.MainContentExtractionService = {};
screen_ai.mojom.MainContentExtractionService.$interfaceName = 'screen_ai.mojom.MainContentExtractionService';
screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_ParamsSpec = { $: {} };

// Enum: Direction
screen_ai.mojom.Direction = {
  DIRECTION_UNSPECIFIED: 0,
  DIRECTION_LEFT_TO_RIGHT: 1,
  DIRECTION_RIGHT_TO_LEFT: 2,
  DIRECTION_TOP_TO_BOTTOM: 3,
};

// Enum: OcrClientType
screen_ai.mojom.OcrClientType = {
  kTest: 0,
  kPdfViewer: 1,
  kLocalSearch: 2,
  kCameraApp: 3,
  kMediaApp: 4,
  kScreenshotTextDetection: 5,
};

// Enum: MceClientType
screen_ai.mojom.MceClientType = {
  kTest: 0,
  kReadingMode: 1,
  kMainNode: 2,
  kMahi: 3,
};

// Struct: VisualAnnotation
mojo.internal.Struct(
    screen_ai.mojom.VisualAnnotationSpec, 'screen_ai.mojom.VisualAnnotation', [
      mojo.internal.StructField('lines', 0, 0, mojo.internal.Array(screen_ai.mojom.LineBoxSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LineBox
mojo.internal.Struct(
    screen_ai.mojom.LineBoxSpec, 'screen_ai.mojom.LineBox', [
      mojo.internal.StructField('words', 0, 0, mojo.internal.Array(screen_ai.mojom.WordBoxSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('text_line', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('language', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bounding_box', 24, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('block_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('paragraph_id', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bounding_box_angle', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('confidence', 44, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WordBox
mojo.internal.Struct(
    screen_ai.mojom.WordBoxSpec, 'screen_ai.mojom.WordBox', [
      mojo.internal.StructField('word', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('language', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bounding_box', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('direction', 24, 0, screen_ai.mojom.DirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('whitespace_bounding_box', 32, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounding_box_angle', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('whitespace_bounding_box_angle', 44, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('confidence', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: ScreenAIAnnotator
mojo.internal.Struct(
    screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_Params', [
      mojo.internal.StructField('image', 0, 0, skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ResponseParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ResponseParams', [
      mojo.internal.StructField('update', 0, 0, ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_Params', [
      mojo.internal.StructField('image', 0, 0, skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParams', [
      mojo.internal.StructField('visual_annotation', 0, 0, screen_ai.mojom.VisualAnnotationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_SetClientType_Params', [
      mojo.internal.StructField('client_type', 0, 0, screen_ai.mojom.OcrClientTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParams', [
      mojo.internal.StructField('max_dimension', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParamsSpec, 'screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParams', [
      mojo.internal.StructField('busy', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

screen_ai.mojom.ScreenAIAnnotatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

screen_ai.mojom.ScreenAIAnnotatorRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.ScreenAIAnnotator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      screen_ai.mojom.ScreenAIAnnotatorPendingReceiver,
      handle);
    this.$ = new screen_ai.mojom.ScreenAIAnnotatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

screen_ai.mojom.ScreenAIAnnotatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  performOcrAndReturnAXTreeUpdate(image) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ResponseParamsSpec,
      [image],
      false);
  }

  performOcrAndReturnAnnotation(image) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParamsSpec,
      [image],
      false);
  }

  setClientType(client_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec,
      null,
      [client_type],
      false);
  }

  getMaxImageDimension() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParamsSpec,
      [],
      false);
  }

  setOCRLightMode(enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec,
      null,
      [enabled],
      false);
  }

  isOCRBusy() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec,
      screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParamsSpec,
      [],
      false);
  }

};

screen_ai.mojom.ScreenAIAnnotator.getRemote = function() {
  let remote = new screen_ai.mojom.ScreenAIAnnotatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.ScreenAIAnnotator',
    'context');
  return remote.$;
};

screen_ai.mojom.ScreenAIAnnotatorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: PerformOcrAndReturnAXTreeUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformOcrAndReturnAXTreeUpdate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PerformOcrAndReturnAnnotation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformOcrAndReturnAnnotation (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetClientType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClientType (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetMaxImageDimension
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMaxImageDimension (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetOCRLightMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOCRLightMode (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: IsOCRBusy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsOCRBusy (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
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
          const params = decoder.decodeStructInline(screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.performOcrAndReturnAXTreeUpdate');
          const result = this.impl.performOcrAndReturnAXTreeUpdate(params.image);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAXTreeUpdate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.performOcrAndReturnAnnotation');
          const result = this.impl.performOcrAndReturnAnnotation(params.image);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, screen_ai.mojom.ScreenAIAnnotator_PerformOcrAndReturnAnnotation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(screen_ai.mojom.ScreenAIAnnotator_SetClientType_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setClientType');
          const result = this.impl.setClientType(params.client_type);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getMaxImageDimension');
          const result = this.impl.getMaxImageDimension();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, screen_ai.mojom.ScreenAIAnnotator_GetMaxImageDimension_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(screen_ai.mojom.ScreenAIAnnotator_SetOCRLightMode_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setOCRLightMode');
          const result = this.impl.setOCRLightMode(params.enabled);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.isOCRBusy');
          const result = this.impl.isOCRBusy();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, screen_ai.mojom.ScreenAIAnnotator_IsOCRBusy_ResponseParamsSpec);
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

screen_ai.mojom.ScreenAIAnnotatorReceiver = screen_ai.mojom.ScreenAIAnnotatorReceiver;

screen_ai.mojom.ScreenAIAnnotatorPtr = screen_ai.mojom.ScreenAIAnnotatorRemote;
screen_ai.mojom.ScreenAIAnnotatorRequest = screen_ai.mojom.ScreenAIAnnotatorPendingReceiver;


// Interface: Screen2xMainContentExtractor
mojo.internal.Struct(
    screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_Params', [
      mojo.internal.StructField('snapshot', 0, 0, ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ResponseParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ResponseParams', [
      mojo.internal.StructField('content_node_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_Params', [
      mojo.internal.StructField('snapshot', 0, 0, ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParams', [
      mojo.internal.StructField('main_node_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_Params', [
      mojo.internal.StructField('ax_tree', 0, 0, ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParams', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec, 'screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_Params', [
      mojo.internal.StructField('client_type', 0, 0, screen_ai.mojom.MceClientTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

screen_ai.mojom.Screen2xMainContentExtractorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

screen_ai.mojom.Screen2xMainContentExtractorRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.Screen2xMainContentExtractor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      screen_ai.mojom.Screen2xMainContentExtractorPendingReceiver,
      handle);
    this.$ = new screen_ai.mojom.Screen2xMainContentExtractorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

screen_ai.mojom.Screen2xMainContentExtractorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  extractMainContent(snapshot) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ParamsSpec,
      screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ResponseParamsSpec,
      [snapshot],
      false);
  }

  extractMainNode(snapshot) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec,
      screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParamsSpec,
      [snapshot],
      false);
  }

  identifyMainNode(ax_tree) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec,
      screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParamsSpec,
      [ax_tree],
      false);
  }

  setClientType(client_type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec,
      null,
      [client_type],
      false);
  }

};

screen_ai.mojom.Screen2xMainContentExtractor.getRemote = function() {
  let remote = new screen_ai.mojom.Screen2xMainContentExtractorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.Screen2xMainContentExtractor',
    'context');
  return remote.$;
};

screen_ai.mojom.Screen2xMainContentExtractorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ExtractMainContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractMainContent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ExtractMainNode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtractMainNode (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: IdentifyMainNode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IdentifyMainNode (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetClientType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClientType (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
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
          const params = decoder.decodeStructInline(screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.extractMainContent');
          const result = this.impl.extractMainContent(params.snapshot);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainContent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.extractMainNode');
          const result = this.impl.extractMainNode(params.snapshot);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, screen_ai.mojom.Screen2xMainContentExtractor_ExtractMainNode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.identifyMainNode');
          const result = this.impl.identifyMainNode(params.ax_tree);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, screen_ai.mojom.Screen2xMainContentExtractor_IdentifyMainNode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(screen_ai.mojom.Screen2xMainContentExtractor_SetClientType_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setClientType');
          const result = this.impl.setClientType(params.client_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

screen_ai.mojom.Screen2xMainContentExtractorReceiver = screen_ai.mojom.Screen2xMainContentExtractorReceiver;

screen_ai.mojom.Screen2xMainContentExtractorPtr = screen_ai.mojom.Screen2xMainContentExtractorRemote;
screen_ai.mojom.Screen2xMainContentExtractorRequest = screen_ai.mojom.Screen2xMainContentExtractorPendingReceiver;


// Interface: OCRService
mojo.internal.Struct(
    screen_ai.mojom.OCRService_BindAnnotator_ParamsSpec, 'screen_ai.mojom.OCRService_BindAnnotator_Params', [
      mojo.internal.StructField('annotator', 0, 0, mojo.internal.InterfaceRequest(screen_ai.mojom.ScreenAIAnnotatorSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

screen_ai.mojom.OCRServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

screen_ai.mojom.OCRServiceRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.OCRService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      screen_ai.mojom.OCRServicePendingReceiver,
      handle);
    this.$ = new screen_ai.mojom.OCRServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

screen_ai.mojom.OCRServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindAnnotator(annotator) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      screen_ai.mojom.OCRService_BindAnnotator_ParamsSpec,
      null,
      [annotator],
      false);
  }

};

screen_ai.mojom.OCRService.getRemote = function() {
  let remote = new screen_ai.mojom.OCRServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.OCRService',
    'context');
  return remote.$;
};

screen_ai.mojom.OCRServiceReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindAnnotator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.OCRService_BindAnnotator_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAnnotator (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
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
          const params = decoder.decodeStructInline(screen_ai.mojom.OCRService_BindAnnotator_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindAnnotator');
          const result = this.impl.bindAnnotator(params.annotator);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

screen_ai.mojom.OCRServiceReceiver = screen_ai.mojom.OCRServiceReceiver;

screen_ai.mojom.OCRServicePtr = screen_ai.mojom.OCRServiceRemote;
screen_ai.mojom.OCRServiceRequest = screen_ai.mojom.OCRServicePendingReceiver;


// Interface: MainContentExtractionService
mojo.internal.Struct(
    screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_ParamsSpec, 'screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_Params', [
      mojo.internal.StructField('main_content_extractor', 0, 0, mojo.internal.InterfaceRequest(screen_ai.mojom.Screen2xMainContentExtractorSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

screen_ai.mojom.MainContentExtractionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

screen_ai.mojom.MainContentExtractionServiceRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.MainContentExtractionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      screen_ai.mojom.MainContentExtractionServicePendingReceiver,
      handle);
    this.$ = new screen_ai.mojom.MainContentExtractionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

screen_ai.mojom.MainContentExtractionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindMainContentExtractor(main_content_extractor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_ParamsSpec,
      null,
      [main_content_extractor],
      false);
  }

};

screen_ai.mojom.MainContentExtractionService.getRemote = function() {
  let remote = new screen_ai.mojom.MainContentExtractionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.MainContentExtractionService',
    'context');
  return remote.$;
};

screen_ai.mojom.MainContentExtractionServiceReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindMainContentExtractor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindMainContentExtractor (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
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
          const params = decoder.decodeStructInline(screen_ai.mojom.MainContentExtractionService_BindMainContentExtractor_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindMainContentExtractor');
          const result = this.impl.bindMainContentExtractor(params.main_content_extractor);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

screen_ai.mojom.MainContentExtractionServiceReceiver = screen_ai.mojom.MainContentExtractionServiceReceiver;

screen_ai.mojom.MainContentExtractionServicePtr = screen_ai.mojom.MainContentExtractionServiceRemote;
screen_ai.mojom.MainContentExtractionServiceRequest = screen_ai.mojom.MainContentExtractionServicePendingReceiver;

