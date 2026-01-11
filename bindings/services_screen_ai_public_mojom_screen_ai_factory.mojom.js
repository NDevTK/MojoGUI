// Auto-generated MojoJS binding
// Source: chromium_src/services/screen_ai/public/mojom/screen_ai_factory.mojom
// Module: screen_ai.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  shuttingDownOnIdle() {
    return this.$.shuttingDownOnIdle();
  }
};

screen_ai.mojom.ScreenAIServiceShutdownHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScreenAIServiceShutdownHandler', [
      { explicit: null },
    ]);
  }

  shuttingDownOnIdle() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ScreenAIServiceShutdownHandler', [
      { explicit: null },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.ScreenAIServiceShutdownHandler_ShuttingDownOnIdle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(screen_ai.mojom.ScreenAIServiceShutdownHandler_ShuttingDownOnIdle_ParamsSpec.$.structSpec);
          const result = this.impl.shuttingDownOnIdle();
          break;
        }
      }
      } catch (err) {}
    });
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
      mojo.internal.StructField('shutdown_handler', 0, 0, mojo.internal.InterfaceProxy(screen_ai.mojom.ScreenAIServiceShutdownHandlerRemote), null, false, 0, undefined),
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
  initializeOCR(library_path, model_files, ocr_service_receiver) {
    return this.$.initializeOCR(library_path, model_files, ocr_service_receiver);
  }
  initializeMainContentExtraction(library_path, model_files, main_content_extractor_service) {
    return this.$.initializeMainContentExtraction(library_path, model_files, main_content_extractor_service);
  }
  bindShutdownHandler(shutdown_handler) {
    return this.$.bindShutdownHandler(shutdown_handler);
  }
};

screen_ai.mojom.ScreenAIServiceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScreenAIServiceFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initializeOCR(library_path, model_files, ocr_service_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ParamsSpec,
      screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ResponseParamsSpec,
      [library_path, model_files, ocr_service_receiver],
      false);
  }

  initializeMainContentExtraction(library_path, model_files, main_content_extractor_service) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ParamsSpec,
      screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ResponseParamsSpec,
      [library_path, model_files, main_content_extractor_service],
      false);
  }

  bindShutdownHandler(shutdown_handler) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ScreenAIServiceFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(screen_ai.mojom.ScreenAIServiceFactory_BindShutdownHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(screen_ai.mojom.ScreenAIServiceFactory_BindShutdownHandler_ParamsSpec.$.structSpec);
          const result = this.impl.bindShutdownHandler(params.shutdown_handler);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

screen_ai.mojom.ScreenAIServiceFactoryReceiver = screen_ai.mojom.ScreenAIServiceFactoryReceiver;

screen_ai.mojom.ScreenAIServiceFactoryPtr = screen_ai.mojom.ScreenAIServiceFactoryRemote;
screen_ai.mojom.ScreenAIServiceFactoryRequest = screen_ai.mojom.ScreenAIServiceFactoryPendingReceiver;

