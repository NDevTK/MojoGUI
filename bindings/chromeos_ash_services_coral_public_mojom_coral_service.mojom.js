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

// Struct: Tab
coral.mojom.TabSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.Tab',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: App
coral.mojom.AppSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.App',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EmbeddingOptions
coral.mojom.EmbeddingOptionsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.EmbeddingOptions',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ClusteringOptions
coral.mojom.ClusteringOptionsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.ClusteringOptions',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TitleGenerationOptions
coral.mojom.TitleGenerationOptionsSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.TitleGenerationOptions',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Group
coral.mojom.GroupSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.Group',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GroupRequest
coral.mojom.GroupRequestSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.GroupRequest',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GroupResponse
coral.mojom.GroupResponseSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.GroupResponse',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CacheEmbeddingsRequest
coral.mojom.CacheEmbeddingsRequestSpec = {
  $: {
    structSpec: {
      name: 'coral.mojom.CacheEmbeddingsRequest',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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

// Legacy compatibility
coral.mojom.CoralServicePtr = coral.mojom.CoralServiceRemote;
coral.mojom.CoralServiceRequest = coral.mojom.CoralServicePendingReceiver;

