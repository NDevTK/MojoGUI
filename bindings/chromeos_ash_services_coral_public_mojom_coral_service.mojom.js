// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/coral/public/mojom/coral_service.mojom
// Module: coral.mojom

'use strict';

// Module namespace
var coral = coral || {};
coral.mojom = coral.mojom || {};


// Enum: CoralError
coral.mojom.CoralError = {
  kLoadModelFailed: 0,
  kInvalidArgs: 1,
  kModelExecutionFailed: 2,
  kClusteringError: 3,
};
coral.mojom.CoralErrorSpec = { $: mojo.internal.Enum() };

// Union: Entity
coral.mojom.EntitySpec = { $: mojo.internal.Union(
    'coral.mojom.Entity', {
      'unknown': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'tab': {
        'ordinal': 1,
        'type': coral.mojom.TabSpec,
      }},
      'app': {
        'ordinal': 2,
        'type': coral.mojom.AppSpec,
      }},
    })
};

// Union: GroupResult
coral.mojom.GroupResultSpec = { $: mojo.internal.Union(
    'coral.mojom.GroupResult', {
      'error': {
        'ordinal': 0,
        'type': coral.mojom.CoralErrorSpec,
      }},
      'response': {
        'ordinal': 1,
        'type': coral.mojom.GroupResponseSpec,
      }},
    })
};

// Union: CacheEmbeddingsResult
coral.mojom.CacheEmbeddingsResultSpec = { $: mojo.internal.Union(
    'coral.mojom.CacheEmbeddingsResult', {
      'error': {
        'ordinal': 0,
        'type': coral.mojom.CoralErrorSpec,
      }},
      'response': {
        'ordinal': 1,
        'type': coral.mojom.CacheEmbeddingsResponseSpec,
      }},
    })
};

// Struct: Tab
coral.mojom.TabSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.Tab',
      packedSize: 24,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: App
coral.mojom.AppSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.App',
      packedSize: 24,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: EmbeddingOptions
coral.mojom.EmbeddingOptionsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.EmbeddingOptions',
      packedSize: 16,
      fields: [
        { name: 'check_safety_filter_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 1, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'check_safety_filter_$value', originalFieldName: 'check_safety_filter' } },
        { name: 'check_safety_filter_$value', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 1, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'check_safety_filter_$flag', originalFieldName: 'check_safety_filter' } },
      ],
      versions: [{version: 1, packedSize: 16}]
    }
  }
};

// Struct: ClusteringOptions
coral.mojom.ClusteringOptionsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.ClusteringOptions',
      packedSize: 24,
      fields: [
        { name: 'min_items_in_cluster', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_items_in_cluster', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_clusters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TitleGenerationOptions
coral.mojom.TitleGenerationOptionsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.TitleGenerationOptions',
      packedSize: 24,
      fields: [
        { name: 'max_characters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'language_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Group
coral.mojom.GroupSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.Group',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'entities', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(coral.mojom.EntitySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: GroupRequest
coral.mojom.GroupRequestSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.GroupRequest',
      packedSize: 48,
      fields: [
        { name: 'entities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(coral.mojom.EntitySpec, false), nullable: false, minVersion: 0 },
        { name: 'embedding_options', packedOffset: 8, packedBitOffset: 0, type: coral.mojom.EmbeddingOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'clustering_options', packedOffset: 16, packedBitOffset: 0, type: coral.mojom.ClusteringOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'title_generation_options', packedOffset: 24, packedBitOffset: 0, type: coral.mojom.TitleGenerationOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'suppression_context', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(coral.mojom.EntitySpec, false), nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 1, packedSize: 48}]
    }
  }
};

// Struct: GroupResponse
coral.mojom.GroupResponseSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.GroupResponse',
      packedSize: 16,
      fields: [
        { name: 'groups', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(coral.mojom.GroupSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CacheEmbeddingsRequest
coral.mojom.CacheEmbeddingsRequestSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.CacheEmbeddingsRequest',
      packedSize: 24,
      fields: [
        { name: 'entities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(coral.mojom.EntitySpec, false), nullable: false, minVersion: 0 },
        { name: 'embedding_options', packedOffset: 8, packedBitOffset: 0, type: coral.mojom.EmbeddingOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CacheEmbeddingsResponse
coral.mojom.CacheEmbeddingsResponseSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.CacheEmbeddingsResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Interface: TitleObserver
coral.mojom.TitleObserver = {};

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
      [group_id, title]);
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

// ParamsSpec for TitleUpdated
coral.mojom.TitleObserver_TitleUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.TitleObserver.TitleUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
coral.mojom.TitleObserverPtr = coral.mojom.TitleObserverRemote;
coral.mojom.TitleObserverRequest = coral.mojom.TitleObserverPendingReceiver;


// Interface: CoralProcessor
coral.mojom.CoralProcessor = {};

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
      [request, observer]);
  }

  cacheEmbeddings(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec,
      coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec,
      [request]);
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

// ParamsSpec for Group
coral.mojom.CoralProcessor_Group_ParamsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.CoralProcessor.Group_Params',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: coral.mojom.GroupRequestSpec, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

coral.mojom.CoralProcessor_Group_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.CoralProcessor.Group_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: coral.mojom.GroupResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CacheEmbeddings
coral.mojom.CoralProcessor_CacheEmbeddings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.CoralProcessor.CacheEmbeddings_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: coral.mojom.CacheEmbeddingsRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

coral.mojom.CoralProcessor_CacheEmbeddings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.CoralProcessor.CacheEmbeddings_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: coral.mojom.CacheEmbeddingsResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
coral.mojom.CoralProcessorPtr = coral.mojom.CoralProcessorRemote;
coral.mojom.CoralProcessorRequest = coral.mojom.CoralProcessorPendingReceiver;


// Interface: CoralService
coral.mojom.CoralService = {};

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
      [request, observer]);
  }

  cacheEmbeddingsDeprecated(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec,
      coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec,
      [request]);
  }

  prepareResource() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      coral.mojom.CoralService_PrepareResource_ParamsSpec,
      null,
      []);
  }

  initialize(ml_service, processor, language_code) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      coral.mojom.CoralService_Initialize_ParamsSpec,
      null,
      [ml_service, processor, language_code]);
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

// ParamsSpec for GroupDeprecated
coral.mojom.CoralService_GroupDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.CoralService.GroupDeprecated_Params',
      packedSize: 24,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: coral.mojom.GroupRequestSpec, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

coral.mojom.CoralService_GroupDeprecated_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.CoralService.GroupDeprecated_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: coral.mojom.GroupResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CacheEmbeddingsDeprecated
coral.mojom.CoralService_CacheEmbeddingsDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.CoralService.CacheEmbeddingsDeprecated_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: coral.mojom.CacheEmbeddingsRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

coral.mojom.CoralService_CacheEmbeddingsDeprecated_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.CoralService.CacheEmbeddingsDeprecated_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: coral.mojom.CacheEmbeddingsResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for PrepareResource
coral.mojom.CoralService_PrepareResource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.CoralService.PrepareResource_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Initialize
coral.mojom.CoralService_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.CoralService.Initialize_Params',
      packedSize: 24,
      fields: [
        { name: 'ml_service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'processor', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'language_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 2, packedSize: 24}]
    }
  }
};

// Legacy compatibility
coral.mojom.CoralServicePtr = coral.mojom.CoralServiceRemote;
coral.mojom.CoralServiceRequest = coral.mojom.CoralServicePendingReceiver;

