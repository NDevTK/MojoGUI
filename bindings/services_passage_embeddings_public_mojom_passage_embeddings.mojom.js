// Auto-generated MojoJS binding
// Source: chromium_src/services/passage_embeddings/public/mojom/passage_embeddings.mojom
// Module: passage_embeddings.mojom

'use strict';

// Module namespace
var passage_embeddings = passage_embeddings || {};
passage_embeddings.mojom = passage_embeddings.mojom || {};


// Enum: PassagePriority
passage_embeddings.mojom.PassagePriority = {
  kUnknown: 0,
  kUrgent: 1,
  kUserInitiated: 2,
  kPassive: 3,
};

// Interface: PassageEmbedder
passage_embeddings.mojom.PassageEmbedderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

passage_embeddings.mojom.PassageEmbedderRemote = class {
  static get $interfaceName() {
    return 'passage_embeddings.mojom.PassageEmbedder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      passage_embeddings.mojom.PassageEmbedderPendingReceiver,
      handle);
    this.$ = new passage_embeddings.mojom.PassageEmbedderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

passage_embeddings.mojom.PassageEmbedderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  generateEmbeddings(passages, priority) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ParamsSpec.$,
      passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ResponseParamsSpec.$,
      [passages, priority]);
  }

};

passage_embeddings.mojom.PassageEmbedder.getRemote = function() {
  let remote = new passage_embeddings.mojom.PassageEmbedderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'passage_embeddings.mojom.PassageEmbedder',
    'context');
  return remote.$;
};

// ParamsSpec for GenerateEmbeddings
passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'passage_embeddings.mojom.PassageEmbedder.GenerateEmbeddings_Params',
      packedSize: 24,
      fields: [
        { name: 'passages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'priority', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'passage_embeddings.mojom.PassageEmbedder.GenerateEmbeddings_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
passage_embeddings.mojom.PassageEmbedderPtr = passage_embeddings.mojom.PassageEmbedderRemote;
passage_embeddings.mojom.PassageEmbedderRequest = passage_embeddings.mojom.PassageEmbedderPendingReceiver;


// Interface: PassageEmbeddingsService
passage_embeddings.mojom.PassageEmbeddingsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

passage_embeddings.mojom.PassageEmbeddingsServiceRemote = class {
  static get $interfaceName() {
    return 'passage_embeddings.mojom.PassageEmbeddingsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      passage_embeddings.mojom.PassageEmbeddingsServicePendingReceiver,
      handle);
    this.$ = new passage_embeddings.mojom.PassageEmbeddingsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

passage_embeddings.mojom.PassageEmbeddingsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  loadModels(model_params, params, model) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ParamsSpec.$,
      passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ResponseParamsSpec.$,
      [model_params, params, model]);
  }

};

passage_embeddings.mojom.PassageEmbeddingsService.getRemote = function() {
  let remote = new passage_embeddings.mojom.PassageEmbeddingsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'passage_embeddings.mojom.PassageEmbeddingsService',
    'context');
  return remote.$;
};

// ParamsSpec for LoadModels
passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ParamsSpec = {
  $: {
    structSpec: {
      name: 'passage_embeddings.mojom.PassageEmbeddingsService.LoadModels_Params',
      packedSize: 32,
      fields: [
        { name: 'model_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'model', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'passage_embeddings.mojom.PassageEmbeddingsService.LoadModels_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
passage_embeddings.mojom.PassageEmbeddingsServicePtr = passage_embeddings.mojom.PassageEmbeddingsServiceRemote;
passage_embeddings.mojom.PassageEmbeddingsServiceRequest = passage_embeddings.mojom.PassageEmbeddingsServicePendingReceiver;

