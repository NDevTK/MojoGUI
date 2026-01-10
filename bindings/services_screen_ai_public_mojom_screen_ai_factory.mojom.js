// Auto-generated MojoJS binding
// Source: chromium_src/services/screen_ai/public/mojom/screen_ai_factory.mojom
// Module: screen_ai.mojom

'use strict';

// Module namespace
var screen_ai = screen_ai || {};
screen_ai.mojom = screen_ai.mojom || {};
var services = services || {};
var ui = ui || {};

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

screen_ai.mojom.ScreenAIServiceFactoryPtr = screen_ai.mojom.ScreenAIServiceFactoryRemote;
screen_ai.mojom.ScreenAIServiceFactoryRequest = screen_ai.mojom.ScreenAIServiceFactoryPendingReceiver;

