// Auto-generated MojoJS binding
// Source: chromium_src/services/screen_ai/public/mojom/screen_ai_factory.mojom
// Module: screen_ai.mojom

'use strict';

// Module namespace
var screen_ai = screen_ai || {};
screen_ai.mojom = screen_ai.mojom || {};
var ui = ui || {};


// Interface: ScreenAIServiceShutdownHandler
screen_ai.mojom.ScreenAIServiceShutdownHandler = {};

screen_ai.mojom.ScreenAIServiceShutdownHandler_ShuttingDownOnIdle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIServiceShutdownHandler_ShuttingDownOnIdle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      []);
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

// ParamsSpec for ShuttingDownOnIdle
screen_ai.mojom.ScreenAIServiceShutdownHandler_ShuttingDownOnIdle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIServiceShutdownHandler.ShuttingDownOnIdle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
screen_ai.mojom.ScreenAIServiceShutdownHandlerPtr = screen_ai.mojom.ScreenAIServiceShutdownHandlerRemote;
screen_ai.mojom.ScreenAIServiceShutdownHandlerRequest = screen_ai.mojom.ScreenAIServiceShutdownHandlerPendingReceiver;


// Interface: ScreenAIServiceFactory
screen_ai.mojom.ScreenAIServiceFactory = {};

screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_Params',
      packedSize: 32,
      fields: [
        { name: 'library_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'model_files', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo_base.mojom.RelativeFilePathSpec, mojo_base.mojom.ReadOnlyFileSpec, false), nullable: false, minVersion: 0 },
        { name: 'ocr_service_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(screen_ai.mojom.OCRServiceRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_Params',
      packedSize: 32,
      fields: [
        { name: 'library_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'model_files', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo_base.mojom.RelativeFilePathSpec, mojo_base.mojom.ReadOnlyFileSpec, false), nullable: false, minVersion: 0 },
        { name: 'main_content_extractor_service', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(screen_ai.mojom.MainContentExtractionServiceRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

screen_ai.mojom.ScreenAIServiceFactory_BindShutdownHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIServiceFactory_BindShutdownHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'shutdown_handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(screen_ai.mojom.ScreenAIServiceShutdownHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [library_path, model_files, ocr_service_receiver]);
  }

  initializeMainContentExtraction(library_path, model_files, main_content_extractor_service) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ParamsSpec,
      screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ResponseParamsSpec,
      [library_path, model_files, main_content_extractor_service]);
  }

  bindShutdownHandler(shutdown_handler) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      screen_ai.mojom.ScreenAIServiceFactory_BindShutdownHandler_ParamsSpec,
      null,
      [shutdown_handler]);
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

// ParamsSpec for InitializeOCR
screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIServiceFactory.InitializeOCR_Params',
      packedSize: 32,
      fields: [
        { name: 'library_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'model_files', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo_base.mojom.RelativeFilePathSpec, mojo_base.mojom.ReadOnlyFileSpec, false), nullable: false, minVersion: 0 },
        { name: 'ocr_service_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(screen_ai.mojom.OCRServiceRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

screen_ai.mojom.ScreenAIServiceFactory_InitializeOCR_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIServiceFactory.InitializeOCR_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'initialized', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InitializeMainContentExtraction
screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIServiceFactory.InitializeMainContentExtraction_Params',
      packedSize: 32,
      fields: [
        { name: 'library_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'model_files', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo_base.mojom.RelativeFilePathSpec, mojo_base.mojom.ReadOnlyFileSpec, false), nullable: false, minVersion: 0 },
        { name: 'main_content_extractor_service', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(screen_ai.mojom.MainContentExtractionServiceRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

screen_ai.mojom.ScreenAIServiceFactory_InitializeMainContentExtraction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIServiceFactory.InitializeMainContentExtraction_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'initialized', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindShutdownHandler
screen_ai.mojom.ScreenAIServiceFactory_BindShutdownHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'screen_ai.mojom.ScreenAIServiceFactory.BindShutdownHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'shutdown_handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(screen_ai.mojom.ScreenAIServiceShutdownHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
screen_ai.mojom.ScreenAIServiceFactoryPtr = screen_ai.mojom.ScreenAIServiceFactoryRemote;
screen_ai.mojom.ScreenAIServiceFactoryRequest = screen_ai.mojom.ScreenAIServiceFactoryPendingReceiver;

