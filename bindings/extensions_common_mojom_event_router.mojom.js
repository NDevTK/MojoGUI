// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/event_router.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Struct: ServiceWorkerContext
extensions.mojom.ServiceWorkerContextSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ServiceWorkerContext',
      packedSize: 32,
      fields: [
        { name: 'scope_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'version_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'thread_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EventListener
extensions.mojom.EventListenerSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventListener',
      packedSize: 40,
      fields: [
        { name: 'listener_owner', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.EventListenerOwnerSpec, nullable: false },
        { name: 'event_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'service_worker_context', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.ServiceWorkerContextSpec, nullable: true },
        { name: 'filter', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: EventRouter
extensions.mojom.EventRouter = {};

extensions.mojom.EventRouterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.EventRouterRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.EventRouter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.EventRouterPendingReceiver,
      handle);
    this.$ = new extensions.mojom.EventRouterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.EventRouterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addListenerForMainThread(event_listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.EventRouter_AddListenerForMainThread_ParamsSpec,
      null,
      [event_listener]);
  }

  addListenerForServiceWorker(event_listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.EventRouter_AddListenerForServiceWorker_ParamsSpec,
      null,
      [event_listener]);
  }

  addLazyListenerForMainThread(extension_id, event_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.EventRouter_AddLazyListenerForMainThread_ParamsSpec,
      null,
      [extension_id, event_name]);
  }

  addLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_ParamsSpec,
      null,
      [extension_id, worker_scope_url, event_name]);
  }

  addFilteredListenerForMainThread(listener_owner, event_name, filter, add_lazy_listener) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      extensions.mojom.EventRouter_AddFilteredListenerForMainThread_ParamsSpec,
      null,
      [listener_owner, event_name, filter, add_lazy_listener]);
  }

  addFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, add_lazy_listener) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_ParamsSpec,
      null,
      [extension_id, event_name, service_worker_context, filter, add_lazy_listener]);
  }

  removeListenerForMainThread(event_listener) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      extensions.mojom.EventRouter_RemoveListenerForMainThread_ParamsSpec,
      null,
      [event_listener]);
  }

  removeListenerForServiceWorker(event_listener) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      extensions.mojom.EventRouter_RemoveListenerForServiceWorker_ParamsSpec,
      null,
      [event_listener]);
  }

  removeLazyListenerForMainThread(extension_id, event_name) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_ParamsSpec,
      null,
      [extension_id, event_name]);
  }

  removeLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_ParamsSpec,
      null,
      [extension_id, worker_scope_url, event_name]);
  }

  removeFilteredListenerForMainThread(listener_owner, event_name, filter, remove_lazy_listener) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_ParamsSpec,
      null,
      [listener_owner, event_name, filter, remove_lazy_listener]);
  }

  removeFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, remove_lazy_listener) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_ParamsSpec,
      null,
      [extension_id, event_name, service_worker_context, filter, remove_lazy_listener]);
  }

};

extensions.mojom.EventRouter.getRemote = function() {
  let remote = new extensions.mojom.EventRouterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.EventRouter',
    'context');
  return remote.$;
};

// ParamsSpec for AddListenerForMainThread
extensions.mojom.EventRouter_AddListenerForMainThread_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventRouter.AddListenerForMainThread_Params',
      packedSize: 16,
      fields: [
        { name: 'event_listener', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.EventListenerSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddListenerForServiceWorker
extensions.mojom.EventRouter_AddListenerForServiceWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventRouter.AddListenerForServiceWorker_Params',
      packedSize: 16,
      fields: [
        { name: 'event_listener', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.EventListenerSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddLazyListenerForMainThread
extensions.mojom.EventRouter_AddLazyListenerForMainThread_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventRouter.AddLazyListenerForMainThread_Params',
      packedSize: 24,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false },
        { name: 'event_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddLazyListenerForServiceWorker
extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventRouter.AddLazyListenerForServiceWorker_Params',
      packedSize: 32,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false },
        { name: 'worker_scope_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'event_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddFilteredListenerForMainThread
extensions.mojom.EventRouter_AddFilteredListenerForMainThread_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventRouter.AddFilteredListenerForMainThread_Params',
      packedSize: 40,
      fields: [
        { name: 'listener_owner', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.EventListenerOwnerSpec, nullable: false },
        { name: 'event_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'filter', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false },
        { name: 'add_lazy_listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddFilteredListenerForServiceWorker
extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventRouter.AddFilteredListenerForServiceWorker_Params',
      packedSize: 48,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false },
        { name: 'event_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'service_worker_context', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.ServiceWorkerContextSpec, nullable: false },
        { name: 'filter', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false },
        { name: 'add_lazy_listener', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveListenerForMainThread
extensions.mojom.EventRouter_RemoveListenerForMainThread_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventRouter.RemoveListenerForMainThread_Params',
      packedSize: 16,
      fields: [
        { name: 'event_listener', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.EventListenerSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveListenerForServiceWorker
extensions.mojom.EventRouter_RemoveListenerForServiceWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventRouter.RemoveListenerForServiceWorker_Params',
      packedSize: 16,
      fields: [
        { name: 'event_listener', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.EventListenerSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveLazyListenerForMainThread
extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventRouter.RemoveLazyListenerForMainThread_Params',
      packedSize: 24,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false },
        { name: 'event_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveLazyListenerForServiceWorker
extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventRouter.RemoveLazyListenerForServiceWorker_Params',
      packedSize: 32,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false },
        { name: 'worker_scope_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'event_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveFilteredListenerForMainThread
extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventRouter.RemoveFilteredListenerForMainThread_Params',
      packedSize: 40,
      fields: [
        { name: 'listener_owner', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.EventListenerOwnerSpec, nullable: false },
        { name: 'event_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'filter', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false },
        { name: 'remove_lazy_listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveFilteredListenerForServiceWorker
extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventRouter.RemoveFilteredListenerForServiceWorker_Params',
      packedSize: 48,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false },
        { name: 'event_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'service_worker_context', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.ServiceWorkerContextSpec, nullable: false },
        { name: 'filter', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false },
        { name: 'remove_lazy_listener', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
extensions.mojom.EventRouterPtr = extensions.mojom.EventRouterRemote;
extensions.mojom.EventRouterRequest = extensions.mojom.EventRouterPendingReceiver;

