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
passage_embeddings.mojom.PassagePrioritySpec = { $: mojo.internal.Enum() };

// Struct: PassageEmbeddingsResult
passage_embeddings.mojom.PassageEmbeddingsResultSpec = {
  $: {
    structSpec: {
      name: 'passage_embeddings.mojom.PassageEmbeddingsResult',
      packedSize: 16,
      fields: [
        { name: 'embeddings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Float, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PassageEmbeddingsLoadModelsParams
passage_embeddings.mojom.PassageEmbeddingsLoadModelsParamsSpec = {
  $: {
    structSpec: {
      name: 'passage_embeddings.mojom.PassageEmbeddingsLoadModelsParams',
      packedSize: 32,
      fields: [
        { name: 'embeddings_model', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
        { name: 'sp_model', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
        { name: 'input_window_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PassageEmbedderParams
passage_embeddings.mojom.PassageEmbedderParamsSpec = {
  $: {
    structSpec: {
      name: 'passage_embeddings.mojom.PassageEmbedderParams',
      packedSize: 32,
      fields: [
        { name: 'user_initiated_priority_num_threads', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'urgent_priority_num_threads', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'passive_priority_num_threads', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'embedder_cache_size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'allow_gpu_execution', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: PassageEmbedder
passage_embeddings.mojom.PassageEmbedder = {};

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
      passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ParamsSpec,
      passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ResponseParamsSpec,
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
        { name: 'passages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 8, packedBitOffset: 0, type: passage_embeddings.mojom.PassagePrioritySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'passage_embeddings.mojom.PassageEmbedder.GenerateEmbeddings_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(passage_embeddings.mojom.PassageEmbeddingsResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
passage_embeddings.mojom.PassageEmbedderPtr = passage_embeddings.mojom.PassageEmbedderRemote;
passage_embeddings.mojom.PassageEmbedderRequest = passage_embeddings.mojom.PassageEmbedderPendingReceiver;


// Interface: PassageEmbeddingsService
passage_embeddings.mojom.PassageEmbeddingsService = {};

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
      passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ParamsSpec,
      passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ResponseParamsSpec,
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
        { name: 'model_params', packedOffset: 0, packedBitOffset: 0, type: passage_embeddings.mojom.PassageEmbeddingsLoadModelsParamsSpec, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: passage_embeddings.mojom.PassageEmbedderParamsSpec, nullable: false, minVersion: 0 },
        { name: 'model', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'passage_embeddings.mojom.PassageEmbeddingsService.LoadModels_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
passage_embeddings.mojom.PassageEmbeddingsServicePtr = passage_embeddings.mojom.PassageEmbeddingsServiceRemote;
passage_embeddings.mojom.PassageEmbeddingsServiceRequest = passage_embeddings.mojom.PassageEmbeddingsServicePendingReceiver;

