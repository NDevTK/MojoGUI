// Auto-generated MojoJS binding
// Source: chromium_src/services/screen_ai/public/mojom/screen_ai_factory.mojom
// Module: screen_ai.mojom

'use strict';

// Module namespace
var screen_ai = screen_ai || {};
screen_ai.mojom = screen_ai.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var ax = ax || {};

screen_ai.mojom.ScreenAIServiceShutdownHandler = {};
screen_ai.mojom.ScreenAIServiceShutdownHandler.$interfaceName = 'screen_ai.mojom.ScreenAIServiceShutdownHandler';
screen_ai.mojom.ScreenAIServiceShutdownHandler_ShuttingDownOnIdle_ParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIServiceFactory = {};
screen_ai.mojom.ScreenAIServiceFactory.$interfaceName = 'screen_ai.mojom.ScreenAIServiceFactory';
screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ResponseParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ResponseParamsSpec = { $: {} };
screen_ai.mojom.ScreenAIServiceFactory_BindShutdownHandler_ParamsSpec = { $: {} };

// Interface: ScreenAIServiceShutdownHandler
mojo.internal.Struct(
    screen_ai.mojom.ScreenAIServiceShutdownHandler_ShuttingDownOnIdle_ParamsSpec, 'screen_ai.mojom.ScreenAIServiceShutdownHandler_ShuttingDownOnIdle_Params', [
    ],
    [[0, 8]]);

screen_ai.mojom.ScreenAIServiceShutdownHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

screen_ai.mojom.ScreenAIServiceShutdownHandlerRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.ScreenAIServiceShutdownHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      screen_ai.mojom.ScreenAIServiceShutdownHandlerPendingReceiver,
      handle);
    this.$ = new screen_ai.mojom.ScreenAIServiceShutdownHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

screen_ai.mojom.ScreenAIServiceShutdownHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  shuttingDownOnIdle() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      screen_ai.mojom.ScreenAIServiceShutdownHandler_ShuttingDownOnIdle_ParamsSpec,
      null,
      [],
      false);
  }

};

screen_ai.mojom.ScreenAIServiceShutdownHandler.getRemote = function() {
  let remote = new screen_ai.mojom.ScreenAIServiceShutdownHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.ScreenAIServiceShutdownHandler',
    'context');
  return remote.$;
};

screen_ai.mojom.ScreenAIServiceShutdownHandlerReceiver = class {
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
        
        // Try Method 0: ShuttingDownOnIdle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(screen_ai.mojom.ScreenAIServiceShutdownHandler_ShuttingDownOnIdle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShuttingDownOnIdle (0)');
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
          const params = decoder.decodeStruct(screen_ai.mojom.ScreenAIServiceShutdownHandler_ShuttingDownOnIdle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.shuttingDownOnIdle');
          const result = this.impl.shuttingDownOnIdle();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

screen_ai.mojom.ScreenAIServiceShutdownHandlerReceiver = screen_ai.mojom.ScreenAIServiceShutdownHandlerReceiver;

screen_ai.mojom.ScreenAIServiceShutdownHandlerPtr = screen_ai.mojom.ScreenAIServiceShutdownHandlerRemote;
screen_ai.mojom.ScreenAIServiceShutdownHandlerRequest = screen_ai.mojom.ScreenAIServiceShutdownHandlerPendingReceiver;


// Interface: ScreenAIServiceFactory
mojo.internal.Struct(
    screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ParamsSpec, 'screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_Params', [
      mojo.internal.StructField('library_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('model_files', 8, 0, mojo.internal.Map(mojo_base.mojom.RelativeFilePathSpec.$, mojo_base.mojom.ReadOnlyFileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('ocr_service_receiver', 16, 0, mojo.internal.InterfaceRequest(screen_ai.mojom.OCRServiceRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ResponseParamsSpec, 'screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ResponseParams', [
      mojo.internal.StructField('initialized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ParamsSpec, 'screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_Params', [
      mojo.internal.StructField('library_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('model_files', 8, 0, mojo.internal.Map(mojo_base.mojom.RelativeFilePathSpec.$, mojo_base.mojom.ReadOnlyFileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('main_content_extractor_service', 16, 0, mojo.internal.InterfaceRequest(screen_ai.mojom.MainContentExtractionServiceRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ResponseParamsSpec, 'screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ResponseParams', [
      mojo.internal.StructField('initialized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    screen_ai.mojom.ScreenAIServiceFactory_BindShutdownHandler_ParamsSpec, 'screen_ai.mojom.ScreenAIServiceFactory_BindShutdownHandler_Params', [
      mojo.internal.StructField('shutdown_handler', 0, 0, mojo.internal.InterfaceProxy(screen_ai.mojom.ScreenAIServiceShutdownHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

screen_ai.mojom.ScreenAIServiceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

screen_ai.mojom.ScreenAIServiceFactoryRemote = class {
  static get $interfaceName() {
    return 'screen_ai.mojom.ScreenAIServiceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      screen_ai.mojom.ScreenAIServiceFactoryPendingReceiver,
      handle);
    this.$ = new screen_ai.mojom.ScreenAIServiceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

screen_ai.mojom.ScreenAIServiceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initializeOCR(library_path, model_files, ocr_service_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ParamsSpec,
      screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ResponseParamsSpec,
      [library_path, model_files, ocr_service_receiver],
      false);
  }

  initializeMainContentExtraction(library_path, model_files, main_content_extractor_service) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ParamsSpec,
      screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ResponseParamsSpec,
      [library_path, model_files, main_content_extractor_service],
      false);
  }

  bindShutdownHandler(shutdown_handler) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      screen_ai.mojom.ScreenAIServiceFactory_BindShutdownHandler_ParamsSpec,
      null,
      [shutdown_handler],
      false);
  }

};

screen_ai.mojom.ScreenAIServiceFactory.getRemote = function() {
  let remote = new screen_ai.mojom.ScreenAIServiceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'screen_ai.mojom.ScreenAIServiceFactory',
    'context');
  return remote.$;
};

screen_ai.mojom.ScreenAIServiceFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: InitializeOCR
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeOCR (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: InitializeMainContentExtraction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeMainContentExtraction (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: BindShutdownHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(screen_ai.mojom.ScreenAIServiceFactory_BindShutdownHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindShutdownHandler (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
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
          const params = decoder.decodeStruct(screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initializeOCR');
          const result = this.impl.initializeOCR(params.library_path, params.model_files, params.ocr_service_receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initializeMainContentExtraction');
          const result = this.impl.initializeMainContentExtraction(params.library_path, params.model_files, params.main_content_extractor_service);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(screen_ai.mojom.ScreenAIServiceFactory_BindShutdownHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindShutdownHandler');
          const result = this.impl.bindShutdownHandler(params.shutdown_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

screen_ai.mojom.ScreenAIServiceFactoryReceiver = screen_ai.mojom.ScreenAIServiceFactoryReceiver;

screen_ai.mojom.ScreenAIServiceFactoryPtr = screen_ai.mojom.ScreenAIServiceFactoryRemote;
screen_ai.mojom.ScreenAIServiceFactoryRequest = screen_ai.mojom.ScreenAIServiceFactoryPendingReceiver;

