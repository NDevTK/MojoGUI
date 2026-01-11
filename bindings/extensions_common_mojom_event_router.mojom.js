// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/event_router.mojom
// Module: extensions.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var mojo_base = mojo_base || {};
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
        'type': extensions.mojom.ExtensionIdSpec.$,
        'nullable': false,
      },
      'listener_url': {
        'ordinal': 1,
        'type': url.mojom.UrlSpec.$,
        'nullable': false,
      },
    });

// Struct: ServiceWorkerContext
mojo.internal.Struct(
    extensions.mojom.ServiceWorkerContextSpec, 'extensions.mojom.ServiceWorkerContext', [
      mojo.internal.StructField('scope_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('version_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('thread_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EventListener
mojo.internal.Struct(
    extensions.mojom.EventListenerSpec, 'extensions.mojom.EventListener', [
      mojo.internal.StructField('listener_owner', 0, 0, extensions.mojom.EventListenerOwnerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_context', 16, 0, extensions.mojom.ServiceWorkerContextSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, mojo_base.mojom.DictionaryValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: EventRouter
mojo.internal.Struct(
    extensions.mojom.EventRouter_AddListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_AddListenerForMainThread_Params', [
      mojo.internal.StructField('event_listener', 0, 0, extensions.mojom.EventListenerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_AddListenerForServiceWorker_Params', [
      mojo.internal.StructField('event_listener', 0, 0, extensions.mojom.EventListenerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddLazyListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_AddLazyListenerForMainThread_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('worker_scope_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddFilteredListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_AddFilteredListenerForMainThread_Params', [
      mojo.internal.StructField('listener_owner', 0, 0, extensions.mojom.EventListenerOwnerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('filter', 16, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('add_lazy_listener', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_context', 16, 0, extensions.mojom.ServiceWorkerContextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('add_lazy_listener', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_RemoveListenerForMainThread_Params', [
      mojo.internal.StructField('event_listener', 0, 0, extensions.mojom.EventListenerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_RemoveListenerForServiceWorker_Params', [
      mojo.internal.StructField('event_listener', 0, 0, extensions.mojom.EventListenerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('worker_scope_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_ParamsSpec, 'extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_Params', [
      mojo.internal.StructField('listener_owner', 0, 0, extensions.mojom.EventListenerOwnerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('filter', 16, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remove_lazy_listener', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_ParamsSpec, 'extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_context', 16, 0, extensions.mojom.ServiceWorkerContextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
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
  addListenerForMainThread(event_listener) {
    return this.$.addListenerForMainThread(event_listener);
  }
  addListenerForServiceWorker(event_listener) {
    return this.$.addListenerForServiceWorker(event_listener);
  }
  addLazyListenerForMainThread(extension_id, event_name) {
    return this.$.addLazyListenerForMainThread(extension_id, event_name);
  }
  addLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name) {
    return this.$.addLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name);
  }
  addFilteredListenerForMainThread(listener_owner, event_name, filter, add_lazy_listener) {
    return this.$.addFilteredListenerForMainThread(listener_owner, event_name, filter, add_lazy_listener);
  }
  addFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, add_lazy_listener) {
    return this.$.addFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, add_lazy_listener);
  }
  removeListenerForMainThread(event_listener) {
    return this.$.removeListenerForMainThread(event_listener);
  }
  removeListenerForServiceWorker(event_listener) {
    return this.$.removeListenerForServiceWorker(event_listener);
  }
  removeLazyListenerForMainThread(extension_id, event_name) {
    return this.$.removeLazyListenerForMainThread(extension_id, event_name);
  }
  removeLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name) {
    return this.$.removeLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name);
  }
  removeFilteredListenerForMainThread(listener_owner, event_name, filter, remove_lazy_listener) {
    return this.$.removeFilteredListenerForMainThread(listener_owner, event_name, filter, remove_lazy_listener);
  }
  removeFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, remove_lazy_listener) {
    return this.$.removeFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, remove_lazy_listener);
  }
};

extensions.mojom.EventRouterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EventRouter', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addListenerForMainThread(event_listener) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.EventRouter_AddListenerForMainThread_ParamsSpec,
      null,
      [event_listener],
      false);
  }

  addListenerForServiceWorker(event_listener) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      extensions.mojom.EventRouter_AddListenerForServiceWorker_ParamsSpec,
      null,
      [event_listener],
      false);
  }

  addLazyListenerForMainThread(extension_id, event_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      extensions.mojom.EventRouter_AddLazyListenerForMainThread_ParamsSpec,
      null,
      [extension_id, event_name],
      false);
  }

  addLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_ParamsSpec,
      null,
      [extension_id, worker_scope_url, event_name],
      false);
  }

  addFilteredListenerForMainThread(listener_owner, event_name, filter, add_lazy_listener) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      extensions.mojom.EventRouter_AddFilteredListenerForMainThread_ParamsSpec,
      null,
      [listener_owner, event_name, filter, add_lazy_listener],
      false);
  }

  addFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, add_lazy_listener) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_ParamsSpec,
      null,
      [extension_id, event_name, service_worker_context, filter, add_lazy_listener],
      false);
  }

  removeListenerForMainThread(event_listener) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      extensions.mojom.EventRouter_RemoveListenerForMainThread_ParamsSpec,
      null,
      [event_listener],
      false);
  }

  removeListenerForServiceWorker(event_listener) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      extensions.mojom.EventRouter_RemoveListenerForServiceWorker_ParamsSpec,
      null,
      [event_listener],
      false);
  }

  removeLazyListenerForMainThread(extension_id, event_name) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_ParamsSpec,
      null,
      [extension_id, event_name],
      false);
  }

  removeLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_ParamsSpec,
      null,
      [extension_id, worker_scope_url, event_name],
      false);
  }

  removeFilteredListenerForMainThread(listener_owner, event_name, filter, remove_lazy_listener) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_ParamsSpec,
      null,
      [listener_owner, event_name, filter, remove_lazy_listener],
      false);
  }

  removeFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, remove_lazy_listener) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_ParamsSpec,
      null,
      [extension_id, event_name, service_worker_context, filter, remove_lazy_listener],
      false);
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

extensions.mojom.EventRouterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EventRouter', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_AddListenerForMainThread_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_AddListenerForServiceWorker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_AddLazyListenerForMainThread_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_AddFilteredListenerForMainThread_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveListenerForMainThread_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveListenerForServiceWorker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_AddListenerForMainThread_ParamsSpec.$.structSpec);
          const result = this.impl.addListenerForMainThread(params.event_listener);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_AddListenerForServiceWorker_ParamsSpec.$.structSpec);
          const result = this.impl.addListenerForServiceWorker(params.event_listener);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_AddLazyListenerForMainThread_ParamsSpec.$.structSpec);
          const result = this.impl.addLazyListenerForMainThread(params.extension_id, params.event_name);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_AddLazyListenerForServiceWorker_ParamsSpec.$.structSpec);
          const result = this.impl.addLazyListenerForServiceWorker(params.extension_id, params.worker_scope_url, params.event_name);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_AddFilteredListenerForMainThread_ParamsSpec.$.structSpec);
          const result = this.impl.addFilteredListenerForMainThread(params.listener_owner, params.event_name, params.filter, params.add_lazy_listener);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_AddFilteredListenerForServiceWorker_ParamsSpec.$.structSpec);
          const result = this.impl.addFilteredListenerForServiceWorker(params.extension_id, params.event_name, params.service_worker_context, params.filter, params.add_lazy_listener);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveListenerForMainThread_ParamsSpec.$.structSpec);
          const result = this.impl.removeListenerForMainThread(params.event_listener);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveListenerForServiceWorker_ParamsSpec.$.structSpec);
          const result = this.impl.removeListenerForServiceWorker(params.event_listener);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveLazyListenerForMainThread_ParamsSpec.$.structSpec);
          const result = this.impl.removeLazyListenerForMainThread(params.extension_id, params.event_name);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveLazyListenerForServiceWorker_ParamsSpec.$.structSpec);
          const result = this.impl.removeLazyListenerForServiceWorker(params.extension_id, params.worker_scope_url, params.event_name);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveFilteredListenerForMainThread_ParamsSpec.$.structSpec);
          const result = this.impl.removeFilteredListenerForMainThread(params.listener_owner, params.event_name, params.filter, params.remove_lazy_listener);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.EventRouter_RemoveFilteredListenerForServiceWorker_ParamsSpec.$.structSpec);
          const result = this.impl.removeFilteredListenerForServiceWorker(params.extension_id, params.event_name, params.service_worker_context, params.filter, params.remove_lazy_listener);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

extensions.mojom.EventRouterReceiver = extensions.mojom.EventRouterReceiver;

extensions.mojom.EventRouterPtr = extensions.mojom.EventRouterRemote;
extensions.mojom.EventRouterRequest = extensions.mojom.EventRouterPendingReceiver;

