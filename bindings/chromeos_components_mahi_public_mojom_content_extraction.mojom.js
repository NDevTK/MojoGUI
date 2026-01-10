// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/mahi/public/mojom/content_extraction.mojom
// Module: mahi.mojom

'use strict';

// Module namespace
var mahi = mahi || {};
mahi.mojom = mahi.mojom || {};
var ui = ui || {};


// Enum: ResponseStatus
mahi.mojom.mojom.ResponseStatus = {
  kSuccess: 0,
  kUnknownError: 1,
  kScreen2xNotAvailable: 2,
};
mahi.mojom.mojom.ResponseStatusSpec = { $: mojo.internal.Enum() };

// Struct: ExtractionMethods
mahi.mojom.mojom.ExtractionMethodsSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ExtractionMethods',
      packedSize: 16,
      fields: [
        { name: 'use_algorithm', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_screen2x', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ExtractionRequest
mahi.mojom.mojom.ExtractionRequestSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ExtractionRequest',
      packedSize: 48,
      fields: [
        { name: 'deprecated_ukm_source_id_$flag', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'deprecated_ukm_source_id_$value', originalFieldName: 'deprecated_ukm_source_id' } },
        { name: 'deprecated_ukm_source_id_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'deprecated_ukm_source_id_$flag', originalFieldName: 'deprecated_ukm_source_id' } },
        { name: 'snapshot', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.AXTreeUpdateSpec, nullable: true, minVersion: 0 },
        { name: 'extraction_methods', packedOffset: 16, packedBitOffset: 0, type: mahi.mojom.ExtractionMethodsSpec, nullable: false, minVersion: 0 },
        { name: 'updates', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.AXTreeUpdateSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ExtractionResponse
mahi.mojom.mojom.ExtractionResponseSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ExtractionResponse',
      packedSize: 24,
      fields: [
        { name: 'contents', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mahi.mojom.ResponseStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ContentSizeResponse
mahi.mojom.mojom.ContentSizeResponseSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ContentSizeResponse',
      packedSize: 16,
      fields: [
        { name: 'word_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 4, packedBitOffset: 0, type: mahi.mojom.ResponseStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: ContentExtractionService
mahi.mojom.mojom.ContentExtractionService = {};

mahi.mojom.mojom.ContentExtractionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mahi.mojom.mojom.ContentExtractionServiceRemote = class {
  static get $interfaceName() {
    return 'mahi.mojom.ContentExtractionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mahi.mojom.mojom.ContentExtractionServicePendingReceiver,
      handle);
    this.$ = new mahi.mojom.mojom.ContentExtractionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mahi.mojom.mojom.ContentExtractionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  extractContent(extraction_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mahi.mojom.mojom.ContentExtractionService_ExtractContent_ParamsSpec,
      mahi.mojom.mojom.ContentExtractionService_ExtractContent_ResponseParamsSpec,
      [extraction_request]);
  }

  getContentSize(extraction_request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mahi.mojom.mojom.ContentExtractionService_GetContentSize_ParamsSpec,
      mahi.mojom.mojom.ContentExtractionService_GetContentSize_ResponseParamsSpec,
      [extraction_request]);
  }

};

mahi.mojom.mojom.ContentExtractionService.getRemote = function() {
  let remote = new mahi.mojom.mojom.ContentExtractionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mahi.mojom.ContentExtractionService',
    'context');
  return remote.$;
};

// ParamsSpec for ExtractContent
mahi.mojom.mojom.ContentExtractionService_ExtractContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ContentExtractionService.ExtractContent_Params',
      packedSize: 16,
      fields: [
        { name: 'extraction_request', packedOffset: 0, packedBitOffset: 0, type: mahi.mojom.ExtractionRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

mahi.mojom.mojom.ContentExtractionService_ExtractContent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ContentExtractionService.ExtractContent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'extraction_response', packedOffset: 0, packedBitOffset: 0, type: mahi.mojom.ExtractionResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetContentSize
mahi.mojom.mojom.ContentExtractionService_GetContentSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ContentExtractionService.GetContentSize_Params',
      packedSize: 16,
      fields: [
        { name: 'extraction_request', packedOffset: 0, packedBitOffset: 0, type: mahi.mojom.ExtractionRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

mahi.mojom.mojom.ContentExtractionService_GetContentSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ContentExtractionService.GetContentSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'contents_size_response', packedOffset: 0, packedBitOffset: 0, type: mahi.mojom.ContentSizeResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mahi.mojom.mojom.ContentExtractionServicePtr = mahi.mojom.mojom.ContentExtractionServiceRemote;
mahi.mojom.mojom.ContentExtractionServiceRequest = mahi.mojom.mojom.ContentExtractionServicePendingReceiver;


// Interface: ContentExtractionServiceFactory
mahi.mojom.mojom.ContentExtractionServiceFactory = {};

mahi.mojom.mojom.ContentExtractionServiceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mahi.mojom.mojom.ContentExtractionServiceFactoryRemote = class {
  static get $interfaceName() {
    return 'mahi.mojom.ContentExtractionServiceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mahi.mojom.mojom.ContentExtractionServiceFactoryPendingReceiver,
      handle);
    this.$ = new mahi.mojom.mojom.ContentExtractionServiceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mahi.mojom.mojom.ContentExtractionServiceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindContentExtractionService(content_extraction_service) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mahi.mojom.mojom.ContentExtractionServiceFactory_BindContentExtractionService_ParamsSpec,
      null,
      [content_extraction_service]);
  }

  onScreen2xReady(extractor) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mahi.mojom.mojom.ContentExtractionServiceFactory_OnScreen2xReady_ParamsSpec,
      null,
      [extractor]);
  }

};

mahi.mojom.mojom.ContentExtractionServiceFactory.getRemote = function() {
  let remote = new mahi.mojom.mojom.ContentExtractionServiceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mahi.mojom.ContentExtractionServiceFactory',
    'context');
  return remote.$;
};

// ParamsSpec for BindContentExtractionService
mahi.mojom.mojom.ContentExtractionServiceFactory_BindContentExtractionService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ContentExtractionServiceFactory.BindContentExtractionService_Params',
      packedSize: 16,
      fields: [
        { name: 'content_extraction_service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnScreen2xReady
mahi.mojom.mojom.ContentExtractionServiceFactory_OnScreen2xReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ContentExtractionServiceFactory.OnScreen2xReady_Params',
      packedSize: 16,
      fields: [
        { name: 'extractor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mahi.mojom.mojom.ContentExtractionServiceFactoryPtr = mahi.mojom.mojom.ContentExtractionServiceFactoryRemote;
mahi.mojom.mojom.ContentExtractionServiceFactoryRequest = mahi.mojom.mojom.ContentExtractionServiceFactoryPendingReceiver;

