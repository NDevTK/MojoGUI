// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/mahi/public/mojom/content_extraction.mojom
// Module: mahi.mojom

'use strict';

// Module namespace
var mahi = mahi || {};
mahi.mojom = mahi.mojom || {};
var services = services || {};
var ui = ui || {};

mahi.mojom.ResponseStatusSpec = { $: mojo.internal.Enum() };
mahi.mojom.ExtractionMethodsSpec = { $: {} };
mahi.mojom.ExtractionRequestSpec = { $: {} };
mahi.mojom.ExtractionResponseSpec = { $: {} };
mahi.mojom.ContentSizeResponseSpec = { $: {} };
mahi.mojom.ContentExtractionService = {};
mahi.mojom.ContentExtractionService.$interfaceName = 'mahi.mojom.ContentExtractionService';
mahi.mojom.ContentExtractionService_ExtractContent_ParamsSpec = { $: {} };
mahi.mojom.ContentExtractionService_ExtractContent_ResponseParamsSpec = { $: {} };
mahi.mojom.ContentExtractionService_GetContentSize_ParamsSpec = { $: {} };
mahi.mojom.ContentExtractionService_GetContentSize_ResponseParamsSpec = { $: {} };
mahi.mojom.ContentExtractionServiceFactory = {};
mahi.mojom.ContentExtractionServiceFactory.$interfaceName = 'mahi.mojom.ContentExtractionServiceFactory';
mahi.mojom.ContentExtractionServiceFactory_BindContentExtractionService_ParamsSpec = { $: {} };
mahi.mojom.ContentExtractionServiceFactory_OnScreen2xReady_ParamsSpec = { $: {} };

// Enum: ResponseStatus
mahi.mojom.ResponseStatus = {
  kSuccess: 0,
  kUnknownError: 1,
  kScreen2xNotAvailable: 2,
};

// Struct: ExtractionMethods
mojo.internal.Struct(
    mahi.mojom.ExtractionMethodsSpec, 'mahi.mojom.ExtractionMethods', [
      mojo.internal.StructField('use_algorithm', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_screen2x', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ExtractionRequest
mojo.internal.Struct(
    mahi.mojom.ExtractionRequestSpec, 'mahi.mojom.ExtractionRequest', [
      mojo.internal.StructField('deprecated_ukm_source_id_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'deprecated_ukm_source_id_$value', originalFieldName: 'deprecated_ukm_source_id' }),
      mojo.internal.StructField('deprecated_ukm_source_id_$value', 8, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'deprecated_ukm_source_id_$flag', originalFieldName: 'deprecated_ukm_source_id' }),
      mojo.internal.StructField('snapshot', 16, 0, ax.mojom.AXTreeUpdateSpec, null, true, 0, undefined),
      mojo.internal.StructField('extraction_methods', 24, 0, mahi.mojom.ExtractionMethodsSpec, null, false, 0, undefined),
      mojo.internal.StructField('updates', 32, 0, mojo.internal.Array(ax.mojom.AXTreeUpdateSpec, false), null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ExtractionResponse
mojo.internal.Struct(
    mahi.mojom.ExtractionResponseSpec, 'mahi.mojom.ExtractionResponse', [
      mojo.internal.StructField('contents', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, mahi.mojom.ResponseStatusSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ContentSizeResponse
mojo.internal.Struct(
    mahi.mojom.ContentSizeResponseSpec, 'mahi.mojom.ContentSizeResponse', [
      mojo.internal.StructField('word_count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('status', 4, 0, mahi.mojom.ResponseStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ContentExtractionService
mojo.internal.Struct(
    mahi.mojom.ContentExtractionService_ExtractContent_ParamsSpec, 'mahi.mojom.ContentExtractionService_ExtractContent_Params', [
      mojo.internal.StructField('extraction_request', 0, 0, mahi.mojom.ExtractionRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mahi.mojom.ContentExtractionService_ExtractContent_ResponseParamsSpec, 'mahi.mojom.ContentExtractionService_ExtractContent_ResponseParams', [
      mojo.internal.StructField('extraction_response', 0, 0, mahi.mojom.ExtractionResponseSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mahi.mojom.ContentExtractionService_GetContentSize_ParamsSpec, 'mahi.mojom.ContentExtractionService_GetContentSize_Params', [
      mojo.internal.StructField('extraction_request', 0, 0, mahi.mojom.ExtractionRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mahi.mojom.ContentExtractionService_GetContentSize_ResponseParamsSpec, 'mahi.mojom.ContentExtractionService_GetContentSize_ResponseParams', [
      mojo.internal.StructField('contents_size_response', 0, 0, mahi.mojom.ContentSizeResponseSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mahi.mojom.ContentExtractionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mahi.mojom.ContentExtractionServiceRemote = class {
  static get $interfaceName() {
    return 'mahi.mojom.ContentExtractionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mahi.mojom.ContentExtractionServicePendingReceiver,
      handle);
    this.$ = new mahi.mojom.ContentExtractionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mahi.mojom.ContentExtractionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  extractContent(extraction_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mahi.mojom.ContentExtractionService_ExtractContent_ParamsSpec,
      mahi.mojom.ContentExtractionService_ExtractContent_ResponseParamsSpec,
      [extraction_request],
      false);
  }

  getContentSize(extraction_request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mahi.mojom.ContentExtractionService_GetContentSize_ParamsSpec,
      mahi.mojom.ContentExtractionService_GetContentSize_ResponseParamsSpec,
      [extraction_request],
      false);
  }

};

mahi.mojom.ContentExtractionService.getRemote = function() {
  let remote = new mahi.mojom.ContentExtractionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mahi.mojom.ContentExtractionService',
    'context');
  return remote.$;
};

mahi.mojom.ContentExtractionServicePtr = mahi.mojom.ContentExtractionServiceRemote;
mahi.mojom.ContentExtractionServiceRequest = mahi.mojom.ContentExtractionServicePendingReceiver;


// Interface: ContentExtractionServiceFactory
mojo.internal.Struct(
    mahi.mojom.ContentExtractionServiceFactory_BindContentExtractionService_ParamsSpec, 'mahi.mojom.ContentExtractionServiceFactory_BindContentExtractionService_Params', [
      mojo.internal.StructField('content_extraction_service', 0, 0, mojo.internal.InterfaceRequest(mahi.mojom.ContentExtractionServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mahi.mojom.ContentExtractionServiceFactory_OnScreen2xReady_ParamsSpec, 'mahi.mojom.ContentExtractionServiceFactory_OnScreen2xReady_Params', [
      mojo.internal.StructField('extractor', 0, 0, mojo.internal.InterfaceProxy(screen_ai.mojom.Screen2xMainContentExtractorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mahi.mojom.ContentExtractionServiceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mahi.mojom.ContentExtractionServiceFactoryRemote = class {
  static get $interfaceName() {
    return 'mahi.mojom.ContentExtractionServiceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mahi.mojom.ContentExtractionServiceFactoryPendingReceiver,
      handle);
    this.$ = new mahi.mojom.ContentExtractionServiceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mahi.mojom.ContentExtractionServiceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindContentExtractionService(content_extraction_service) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mahi.mojom.ContentExtractionServiceFactory_BindContentExtractionService_ParamsSpec,
      null,
      [content_extraction_service],
      false);
  }

  onScreen2xReady(extractor) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mahi.mojom.ContentExtractionServiceFactory_OnScreen2xReady_ParamsSpec,
      null,
      [extractor],
      false);
  }

};

mahi.mojom.ContentExtractionServiceFactory.getRemote = function() {
  let remote = new mahi.mojom.ContentExtractionServiceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mahi.mojom.ContentExtractionServiceFactory',
    'context');
  return remote.$;
};

mahi.mojom.ContentExtractionServiceFactoryPtr = mahi.mojom.ContentExtractionServiceFactoryRemote;
mahi.mojom.ContentExtractionServiceFactoryRequest = mahi.mojom.ContentExtractionServiceFactoryPendingReceiver;

