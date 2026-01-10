// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/coral/public/mojom/coral_service.mojom
// Module: coral.mojom

'use strict';

// Module namespace
var coral = coral || {};
coral.mojom = coral.mojom || {};
var chromeos = chromeos || {};
var url = url || {};
var mojo_base = mojo_base || {};

coral.mojom.CoralErrorSpec = { $: mojo.internal.Enum() };
coral.mojom.EntitySpec = { $: {} };
coral.mojom.GroupResultSpec = { $: {} };
coral.mojom.CacheEmbeddingsResultSpec = { $: {} };
coral.mojom.TabSpec = { $: {} };
coral.mojom.AppSpec = { $: {} };
coral.mojom.EmbeddingOptionsSpec = { $: {} };
coral.mojom.ClusteringOptionsSpec = { $: {} };
coral.mojom.TitleGenerationOptionsSpec = { $: {} };
coral.mojom.GroupSpec = { $: {} };
coral.mojom.GroupRequestSpec = { $: {} };
coral.mojom.GroupResponseSpec = { $: {} };
coral.mojom.CacheEmbeddingsRequestSpec = { $: {} };
coral.mojom.CacheEmbeddingsResponseSpec = { $: {} };
coral.mojom.TitleObserver = {};
coral.mojom.TitleObserver.$interfaceName = 'coral.mojom.TitleObserver';
coral.mojom.TitleObserver_TitleUpdated_ParamsSpec = { $: {} };
coral.mojom.CoralProcessor = {};
coral.mojom.CoralProcessor.$interfaceName = 'coral.mojom.CoralProcessor';
coral.mojom.CoralProcessor_Group_ParamsSpec = { $: {} };
coral.mojom.CoralProcessor_Group_ResponseParamsSpec = { $: {} };
coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec = { $: {} };
coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec = { $: {} };
coral.mojom.CoralService = {};
coral.mojom.CoralService.$interfaceName = 'coral.mojom.CoralService';
coral.mojom.CoralService_GroupDeprecated_ParamsSpec = { $: {} };
coral.mojom.CoralService_GroupDeprecated_ResponseParamsSpec = { $: {} };
coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec = { $: {} };
coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec = { $: {} };
coral.mojom.CoralService_PrepareResource_ParamsSpec = { $: {} };
coral.mojom.CoralService_Initialize_ParamsSpec = { $: {} };

// Enum: CoralError
coral.mojom.CoralError = {
  kUnknownError: 0,
  kLoadModelFailed: 1,
  kInvalidArgs: 2,
  kModelExecutionFailed: 3,
  kClusteringError: 4,
};

// Union: Entity
mojo.internal.Union(
    coral.mojom.EntitySpec, 'coral.mojom.Entity', {
      'unknown': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'tab': {
        'ordinal': 1,
        'type': coral.mojom.TabSpec.$,
        'nullable': false,
      },
      'app': {
        'ordinal': 2,
        'type': coral.mojom.AppSpec.$,
        'nullable': false,
      },
    });

// Union: GroupResult
mojo.internal.Union(
    coral.mojom.GroupResultSpec, 'coral.mojom.GroupResult', {
      'error': {
        'ordinal': 0,
        'type': coral.mojom.CoralErrorSpec.$,
        'nullable': false,
      },
      'response': {
        'ordinal': 1,
        'type': coral.mojom.GroupResponseSpec.$,
        'nullable': false,
      },
    });

// Union: CacheEmbeddingsResult
mojo.internal.Union(
    coral.mojom.CacheEmbeddingsResultSpec, 'coral.mojom.CacheEmbeddingsResult', {
      'error': {
        'ordinal': 0,
        'type': coral.mojom.CoralErrorSpec.$,
        'nullable': false,
      },
      'response': {
        'ordinal': 1,
        'type': coral.mojom.CacheEmbeddingsResponseSpec.$,
        'nullable': false,
      },
    });

// Struct: Tab
mojo.internal.Struct(
    coral.mojom.TabSpec, 'coral.mojom.Tab', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: App
mojo.internal.Struct(
    coral.mojom.AppSpec, 'coral.mojom.App', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: EmbeddingOptions
mojo.internal.Struct(
    coral.mojom.EmbeddingOptionsSpec, 'coral.mojom.EmbeddingOptions', [
      mojo.internal.StructField('check_safety_filter_$flag', 0, 0, mojo.internal.Bool, false, false, 1, { isPrimary: true, linkedValueFieldName: 'check_safety_filter_$value', originalFieldName: 'check_safety_filter' }),
      mojo.internal.StructField('check_safety_filter_$value', 0, 1, mojo.internal.Bool, false, false, 1, { isPrimary: false, linkedValueFieldName: 'check_safety_filter_$flag', originalFieldName: 'check_safety_filter' }),
    ],
    [[0, 8], [1, 16]]);

// Struct: ClusteringOptions
mojo.internal.Struct(
    coral.mojom.ClusteringOptionsSpec, 'coral.mojom.ClusteringOptions', [
      mojo.internal.StructField('min_items_in_cluster', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_items_in_cluster', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_clusters', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TitleGenerationOptions
mojo.internal.Struct(
    coral.mojom.TitleGenerationOptionsSpec, 'coral.mojom.TitleGenerationOptions', [
      mojo.internal.StructField('language_code', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('max_characters', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Group
mojo.internal.Struct(
    coral.mojom.GroupSpec, 'coral.mojom.Group', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('entities', 16, 0, mojo.internal.Array(coral.mojom.EntitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GroupRequest
mojo.internal.Struct(
    coral.mojom.GroupRequestSpec, 'coral.mojom.GroupRequest', [
      mojo.internal.StructField('entities', 0, 0, mojo.internal.Array(coral.mojom.EntitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('embedding_options', 8, 0, coral.mojom.EmbeddingOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('clustering_options', 16, 0, coral.mojom.ClusteringOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title_generation_options', 24, 0, coral.mojom.TitleGenerationOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('suppression_context', 32, 0, mojo.internal.Array(coral.mojom.EntitySpec.$, false), null, true, 1, undefined),
    ],
    [[0, 40], [1, 48]]);

// Struct: GroupResponse
mojo.internal.Struct(
    coral.mojom.GroupResponseSpec, 'coral.mojom.GroupResponse', [
      mojo.internal.StructField('groups', 0, 0, mojo.internal.Array(coral.mojom.GroupSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CacheEmbeddingsRequest
mojo.internal.Struct(
    coral.mojom.CacheEmbeddingsRequestSpec, 'coral.mojom.CacheEmbeddingsRequest', [
      mojo.internal.StructField('entities', 0, 0, mojo.internal.Array(coral.mojom.EntitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('embedding_options', 8, 0, coral.mojom.EmbeddingOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CacheEmbeddingsResponse
mojo.internal.Struct(
    coral.mojom.CacheEmbeddingsResponseSpec, 'coral.mojom.CacheEmbeddingsResponse', [
    ],
    [[0, 8]]);

// Interface: TitleObserver
mojo.internal.Struct(
    coral.mojom.TitleObserver_TitleUpdated_ParamsSpec, 'coral.mojom.TitleObserver_TitleUpdated_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

coral.mojom.TitleObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

coral.mojom.TitleObserverRemote = class {
  static get $interfaceName() {
    return 'coral.mojom.TitleObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      coral.mojom.TitleObserverPendingReceiver,
      handle);
    this.$ = new coral.mojom.TitleObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

coral.mojom.TitleObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  titleUpdated(group_id, title) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      coral.mojom.TitleObserver_TitleUpdated_ParamsSpec,
      null,
      [group_id, title],
      false);
  }

};

coral.mojom.TitleObserver.getRemote = function() {
  let remote = new coral.mojom.TitleObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'coral.mojom.TitleObserver',
    'context');
  return remote.$;
};

coral.mojom.TitleObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = coral.mojom.TitleObserver_TitleUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.titleUpdated(params.group_id, params.title);
          break;
        }
      }
    });
  }
};

coral.mojom.TitleObserverReceiver = coral.mojom.TitleObserverReceiver;

coral.mojom.TitleObserverPtr = coral.mojom.TitleObserverRemote;
coral.mojom.TitleObserverRequest = coral.mojom.TitleObserverPendingReceiver;


// Interface: CoralProcessor
mojo.internal.Struct(
    coral.mojom.CoralProcessor_Group_ParamsSpec, 'coral.mojom.CoralProcessor_Group_Params', [
      mojo.internal.StructField('request', 0, 0, coral.mojom.GroupRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(coral.mojom.TitleObserverRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    coral.mojom.CoralProcessor_Group_ResponseParamsSpec, 'coral.mojom.CoralProcessor_Group_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, coral.mojom.GroupResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec, 'coral.mojom.CoralProcessor_CacheEmbeddings_Params', [
      mojo.internal.StructField('request', 0, 0, coral.mojom.CacheEmbeddingsRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec, 'coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, coral.mojom.CacheEmbeddingsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

coral.mojom.CoralProcessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

coral.mojom.CoralProcessorRemote = class {
  static get $interfaceName() {
    return 'coral.mojom.CoralProcessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      coral.mojom.CoralProcessorPendingReceiver,
      handle);
    this.$ = new coral.mojom.CoralProcessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

coral.mojom.CoralProcessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  group(request, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      coral.mojom.CoralProcessor_Group_ParamsSpec,
      coral.mojom.CoralProcessor_Group_ResponseParamsSpec,
      [request, observer],
      false);
  }

  cacheEmbeddings(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec,
      coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec,
      [request],
      false);
  }

};

coral.mojom.CoralProcessor.getRemote = function() {
  let remote = new coral.mojom.CoralProcessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'coral.mojom.CoralProcessor',
    'context');
  return remote.$;
};

coral.mojom.CoralProcessorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = coral.mojom.CoralProcessor_Group_ParamsSpec.$.decode(message.payload);
          const result = this.impl.group(params.request, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, coral.mojom.CoralProcessor_Group_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cacheEmbeddings(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

coral.mojom.CoralProcessorReceiver = coral.mojom.CoralProcessorReceiver;

coral.mojom.CoralProcessorPtr = coral.mojom.CoralProcessorRemote;
coral.mojom.CoralProcessorRequest = coral.mojom.CoralProcessorPendingReceiver;


// Interface: CoralService
mojo.internal.Struct(
    coral.mojom.CoralService_GroupDeprecated_ParamsSpec, 'coral.mojom.CoralService_GroupDeprecated_Params', [
      mojo.internal.StructField('request', 0, 0, coral.mojom.GroupRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(coral.mojom.TitleObserverRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    coral.mojom.CoralService_GroupDeprecated_ResponseParamsSpec, 'coral.mojom.CoralService_GroupDeprecated_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, coral.mojom.GroupResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec, 'coral.mojom.CoralService_CacheEmbeddingsDeprecated_Params', [
      mojo.internal.StructField('request', 0, 0, coral.mojom.CacheEmbeddingsRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec, 'coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, coral.mojom.CacheEmbeddingsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    coral.mojom.CoralService_PrepareResource_ParamsSpec, 'coral.mojom.CoralService_PrepareResource_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    coral.mojom.CoralService_Initialize_ParamsSpec, 'coral.mojom.CoralService_Initialize_Params', [
      mojo.internal.StructField('ml_service', 0, 0, mojo.internal.InterfaceProxy(chromeos.machine_learning.mojom.MachineLearningServiceRemote), null, true, 0, undefined),
      mojo.internal.StructField('processor', 8, 0, mojo.internal.InterfaceRequest(coral.mojom.CoralProcessorRemote), null, false, 0, undefined),
      mojo.internal.StructField('language_code', 16, 0, mojo.internal.String, null, true, 2, undefined),
    ],
    [[0, 24], [2, 32]]);

coral.mojom.CoralServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

coral.mojom.CoralServiceRemote = class {
  static get $interfaceName() {
    return 'coral.mojom.CoralService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      coral.mojom.CoralServicePendingReceiver,
      handle);
    this.$ = new coral.mojom.CoralServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

coral.mojom.CoralServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  groupDeprecated(request, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      coral.mojom.CoralService_GroupDeprecated_ParamsSpec,
      coral.mojom.CoralService_GroupDeprecated_ResponseParamsSpec,
      [request, observer],
      false);
  }

  cacheEmbeddingsDeprecated(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec,
      coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec,
      [request],
      false);
  }

  prepareResource() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      coral.mojom.CoralService_PrepareResource_ParamsSpec,
      null,
      [],
      false);
  }

  initialize(ml_service, processor, language_code) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      coral.mojom.CoralService_Initialize_ParamsSpec,
      null,
      [ml_service, processor, language_code],
      false);
  }

};

coral.mojom.CoralService.getRemote = function() {
  let remote = new coral.mojom.CoralServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'coral.mojom.CoralService',
    'context');
  return remote.$;
};

coral.mojom.CoralServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = coral.mojom.CoralService_GroupDeprecated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.groupDeprecated(params.request, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, coral.mojom.CoralService_GroupDeprecated_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cacheEmbeddingsDeprecated(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = coral.mojom.CoralService_PrepareResource_ParamsSpec.$.decode(message.payload);
          const result = this.impl.prepareResource();
          break;
        }
        case 3: {
          const params = coral.mojom.CoralService_Initialize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initialize(params.ml_service, params.processor, params.language_code);
          break;
        }
      }
    });
  }
};

coral.mojom.CoralServiceReceiver = coral.mojom.CoralServiceReceiver;

coral.mojom.CoralServicePtr = coral.mojom.CoralServiceRemote;
coral.mojom.CoralServiceRequest = coral.mojom.CoralServicePendingReceiver;

