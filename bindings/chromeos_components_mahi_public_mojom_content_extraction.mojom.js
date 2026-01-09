// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/mahi/public/mojom/content_extraction.mojom
// Module: mahi.mojom

'use strict';

// Module namespace
var mahi = mahi || {};
mahi.mojom = mahi.mojom || {};


// Enum: ResponseStatus
mahi.mojom.ResponseStatus = {
  kSuccess: 0,
  kUnknownError: 1,
  kScreen2xNotAvailable: 2,
};

// Struct: ExtractionMethods
mahi.mojom.ExtractionMethodsSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ExtractionMethods',
      packedSize: 16,
      fields: [
        { name: 'use_screen2x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ExtractionRequest
mahi.mojom.ExtractionRequestSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ExtractionRequest',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ExtractionResponse
mahi.mojom.ExtractionResponseSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ExtractionResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ContentSizeResponse
mahi.mojom.ContentSizeResponseSpec = {
  $: {
    structSpec: {
      name: 'mahi.mojom.ContentSizeResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ContentExtractionService
mahi.mojom.ContentExtractionService = {};

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

// Legacy compatibility
mahi.mojom.ContentExtractionServicePtr = mahi.mojom.ContentExtractionServiceRemote;
mahi.mojom.ContentExtractionServiceRequest = mahi.mojom.ContentExtractionServicePendingReceiver;


// Interface: ContentExtractionServiceFactory
mahi.mojom.ContentExtractionServiceFactory = {};

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

// Legacy compatibility
mahi.mojom.ContentExtractionServiceFactoryPtr = mahi.mojom.ContentExtractionServiceFactoryRemote;
mahi.mojom.ContentExtractionServiceFactoryRequest = mahi.mojom.ContentExtractionServiceFactoryPendingReceiver;

