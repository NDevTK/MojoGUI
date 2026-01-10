// Auto-generated MojoJS binding
// Source: chromium_src/services/passage_embeddings/public/mojom/passage_embeddings.mojom
// Module: passage_embeddings.mojom

'use strict';

// Module namespace
var passage_embeddings = passage_embeddings || {};
passage_embeddings.mojom = passage_embeddings.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

passage_embeddings.mojom.PassagePrioritySpec = { $: mojo.internal.Enum() };
passage_embeddings.mojom.PassageEmbeddingsResultSpec = { $: {} };
passage_embeddings.mojom.PassageEmbeddingsLoadModelsParamsSpec = { $: {} };
passage_embeddings.mojom.PassageEmbedderParamsSpec = { $: {} };
passage_embeddings.mojom.PassageEmbedder = {};
passage_embeddings.mojom.PassageEmbedder.$interfaceName = 'passage_embeddings.mojom.PassageEmbedder';
passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ParamsSpec = { $: {} };
passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ResponseParamsSpec = { $: {} };
passage_embeddings.mojom.PassageEmbeddingsService = {};
passage_embeddings.mojom.PassageEmbeddingsService.$interfaceName = 'passage_embeddings.mojom.PassageEmbeddingsService';
passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ParamsSpec = { $: {} };
passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ResponseParamsSpec = { $: {} };

// Enum: PassagePriority
passage_embeddings.mojom.PassagePriority = {
  kUnknown: 0,
  kUrgent: 1,
  kUserInitiated: 2,
  kPassive: 3,
};

// Struct: PassageEmbeddingsResult
mojo.internal.Struct(
    passage_embeddings.mojom.PassageEmbeddingsResultSpec, 'passage_embeddings.mojom.PassageEmbeddingsResult', [
      mojo.internal.StructField('embeddings', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PassageEmbeddingsLoadModelsParams
mojo.internal.Struct(
    passage_embeddings.mojom.PassageEmbeddingsLoadModelsParamsSpec, 'passage_embeddings.mojom.PassageEmbeddingsLoadModelsParams', [
      mojo.internal.StructField('embeddings_model', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sp_model', 8, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_window_size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PassageEmbedderParams
mojo.internal.Struct(
    passage_embeddings.mojom.PassageEmbedderParamsSpec, 'passage_embeddings.mojom.PassageEmbedderParams', [
      mojo.internal.StructField('user_initiated_priority_num_threads', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('urgent_priority_num_threads', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('passive_priority_num_threads', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('embedder_cache_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('allow_gpu_execution', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PassageEmbedder
mojo.internal.Struct(
    passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ParamsSpec, 'passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_Params', [
      mojo.internal.StructField('passages', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('priority', 8, 0, passage_embeddings.mojom.PassagePrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ResponseParamsSpec, 'passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(passage_embeddings.mojom.PassageEmbeddingsResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [passages, priority],
      false);
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

passage_embeddings.mojom.PassageEmbedderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.generateEmbeddings');
          const result = this.impl.generateEmbeddings(params.passages, params.priority);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, passage_embeddings.mojom.PassageEmbedder_GenerateEmbeddings_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

passage_embeddings.mojom.PassageEmbedderReceiver = passage_embeddings.mojom.PassageEmbedderReceiver;

passage_embeddings.mojom.PassageEmbedderPtr = passage_embeddings.mojom.PassageEmbedderRemote;
passage_embeddings.mojom.PassageEmbedderRequest = passage_embeddings.mojom.PassageEmbedderPendingReceiver;


// Interface: PassageEmbeddingsService
mojo.internal.Struct(
    passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ParamsSpec, 'passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_Params', [
      mojo.internal.StructField('model_params', 0, 0, passage_embeddings.mojom.PassageEmbeddingsLoadModelsParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, passage_embeddings.mojom.PassageEmbedderParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('model', 16, 0, mojo.internal.InterfaceRequest(passage_embeddings.mojom.PassageEmbedderSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ResponseParamsSpec, 'passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [model_params, params, model],
      false);
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

passage_embeddings.mojom.PassageEmbeddingsServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.loadModels');
          const result = this.impl.loadModels(params.model_params, params.params, params.model);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, passage_embeddings.mojom.PassageEmbeddingsService_LoadModels_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

passage_embeddings.mojom.PassageEmbeddingsServiceReceiver = passage_embeddings.mojom.PassageEmbeddingsServiceReceiver;

passage_embeddings.mojom.PassageEmbeddingsServicePtr = passage_embeddings.mojom.PassageEmbeddingsServiceRemote;
passage_embeddings.mojom.PassageEmbeddingsServiceRequest = passage_embeddings.mojom.PassageEmbeddingsServicePendingReceiver;

