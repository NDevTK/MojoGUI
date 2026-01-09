// Auto-generated MojoJS binding
// Source: chromium_src/services/passage_embeddings/public/mojom/passage_embeddings.mojom
// Module: passage_embeddings.mojom

'use strict';

// Module namespace
var passage_embeddings = passage_embeddings || {};
passage_embeddings.mojom = passage_embeddings.mojom || {};


// Enum: PassagePriority
passage_embeddings.mojom.PassagePriority = {
};

// Struct: PassageEmbeddingsResult
passage_embeddings.mojom.PassageEmbeddingsResult = class {
  constructor(values = {}) {
    this.embeddings = values.embeddings !== undefined ? values.embeddings : 0;
  }
};

// Struct: PassageEmbeddingsLoadModelsParams
passage_embeddings.mojom.PassageEmbeddingsLoadModelsParams = class {
  constructor(values = {}) {
    this.input_window_size = values.input_window_size !== undefined ? values.input_window_size : 0;
  }
};

// Struct: PassageEmbedderParams
passage_embeddings.mojom.PassageEmbedderParams = class {
  constructor(values = {}) {
    this.embedder_cache_size = values.embedder_cache_size !== undefined ? values.embedder_cache_size : 0;
    this.allow_gpu_execution = values.allow_gpu_execution !== undefined ? values.allow_gpu_execution : false;
  }
};

// Interface: PassageEmbedder
passage_embeddings.mojom.PassageEmbedderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'passage_embeddings.mojom.PassageEmbedder';
  }

  generateEmbeddings(passages, priority) {
    // Method: GenerateEmbeddings
    return new Promise((resolve) => {
      // Call: GenerateEmbeddings(passages, priority)
      resolve({});
    });
  }

};

passage_embeddings.mojom.PassageEmbedderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PassageEmbeddingsService
passage_embeddings.mojom.PassageEmbeddingsServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'passage_embeddings.mojom.PassageEmbeddingsService';
  }

  loadModels(model_params, params, model) {
    // Method: LoadModels
    return new Promise((resolve) => {
      // Call: LoadModels(model_params, params, model)
      resolve({});
    });
  }

};

passage_embeddings.mojom.PassageEmbeddingsServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
