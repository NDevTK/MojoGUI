// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/event_router.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var url = url || {};

extensions.mojom.EventListenerOwnerSpec = { $: {} };
extensions.mojom.ServiceWorkerContextSpec = { $: {} };
extensions.mojom.EventListenerSpec = { $: {} };
extensions.mojom.EventRouter = {};
extensions.mojom.EventRouter.$interfaceName = 'extensions.mojom.EventRouter';
extensions.mojom.EventRouter_AddListenerForMainThread_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_AddListenerForServiceWorker_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_AddLazyListenerForMainThread_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_AddFilteredListenerForMainThread_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_RemoveListenerForMainThread_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_RemoveListenerForServiceWorker_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_ParamsSpec = { $: {} };
extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_ParamsSpec = { $: {} };

// Union: EventListenerOwner
mojo.internal.Union(
    extensions.mojom.EventListenerOwnerSpec, 'extensions.mojom.EventListenerOwner', {
      'extension_id': {
        'ordinal': 0,
        'type': extensions.mojom.ExtensionIdSpec,
        'nullable': false,
      },
      'listener_url': {
        'ordinal': 1,
        'type': url.mojom.UrlSpec,
        'nullable': false,
      },
    });

// Struct: ServiceWorkerContext
mojo.internal.Struct(
    extensions.mojom.ServiceWorkerContextSpec, 'extensions.mojom.ServiceWorkerContext', [
      mojo.internal.StructField('scope_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('version_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('thread_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EventListener
mojo.internal.Struct(
    extensions.mojom.EventListenerSpec, 'extensions.mojom.EventListener', [
      mojo.internal.StructField('listener_owner', 0, 0, extensions.mojom.EventListenerOwnerSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_context', 24, 0, extensions.mojom.ServiceWorkerContextSpec, null, true, 0, undefined),
      mojo.internal.StructField('filter', 32, 0, mojo_base.mojom.DictionaryValueSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Interface: EventRouter
mojo.internal.Struct(
    extensions.mojom.EventRouter_AddListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_AddListenerForMainThread_Params', [
      mojo.internal.StructField('event_listener', 0, 0, extensions.mojom.EventListenerSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_AddListenerForServiceWorker_Params', [
      mojo.internal.StructField('event_listener', 0, 0, extensions.mojom.EventListenerSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddLazyListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_AddLazyListenerForMainThread_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('worker_scope_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddFilteredListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_AddFilteredListenerForMainThread_Params', [
      mojo.internal.StructField('listener_owner', 0, 0, extensions.mojom.EventListenerOwnerSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('add_lazy_listener', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_context', 16, 0, extensions.mojom.ServiceWorkerContextSpec, null, false, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('add_lazy_listener', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_RemoveListenerForMainThread_Params', [
      mojo.internal.StructField('event_listener', 0, 0, extensions.mojom.EventListenerSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_RemoveListenerForServiceWorker_Params', [
      mojo.internal.StructField('event_listener', 0, 0, extensions.mojom.EventListenerSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('worker_scope_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_Params', [
      mojo.internal.StructField('listener_owner', 0, 0, extensions.mojom.EventListenerOwnerSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('remove_lazy_listener', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_context', 16, 0, extensions.mojom.ServiceWorkerContextSpec, null, false, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('remove_lazy_listener', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

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

extensions.mojom.EventRouterPtr = extensions.mojom.EventRouterRemote;
extensions.mojom.EventRouterRequest = extensions.mojom.EventRouterPendingReceiver;

