// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/event_router.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Struct: ServiceWorkerContext
extensions.mojom.ServiceWorkerContext = class {
  constructor(values = {}) {
    this.thread_id = values.thread_id !== undefined ? values.thread_id : 0;
  }
};

// Struct: EventListener
extensions.mojom.EventListener = class {
  constructor(values = {}) {
    this.event_name = values.event_name !== undefined ? values.event_name : "";
    this.service_worker_context = values.service_worker_context !== undefined ? values.service_worker_context : null;
    this.filter = values.filter !== undefined ? values.filter : null;
  }
};

// Interface: EventRouter
extensions.mojom.EventRouterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.EventRouter';
  }

  addListenerForMainThread(event_listener) {
    // Method: AddListenerForMainThread
    // Call: AddListenerForMainThread(event_listener)
  }

  addListenerForServiceWorker(event_listener) {
    // Method: AddListenerForServiceWorker
    // Call: AddListenerForServiceWorker(event_listener)
  }

  addLazyListenerForMainThread(extension_id, event_name) {
    // Method: AddLazyListenerForMainThread
    // Call: AddLazyListenerForMainThread(extension_id, event_name)
  }

  addLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name) {
    // Method: AddLazyListenerForServiceWorker
    // Call: AddLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name)
  }

  addFilteredListenerForMainThread(listener_owner, event_name, filter, add_lazy_listener) {
    // Method: AddFilteredListenerForMainThread
    // Call: AddFilteredListenerForMainThread(listener_owner, event_name, filter, add_lazy_listener)
  }

  addFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, add_lazy_listener) {
    // Method: AddFilteredListenerForServiceWorker
    // Call: AddFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, add_lazy_listener)
  }

  removeListenerForMainThread(event_listener) {
    // Method: RemoveListenerForMainThread
    // Call: RemoveListenerForMainThread(event_listener)
  }

  removeListenerForServiceWorker(event_listener) {
    // Method: RemoveListenerForServiceWorker
    // Call: RemoveListenerForServiceWorker(event_listener)
  }

  removeLazyListenerForMainThread(extension_id, event_name) {
    // Method: RemoveLazyListenerForMainThread
    // Call: RemoveLazyListenerForMainThread(extension_id, event_name)
  }

  removeLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name) {
    // Method: RemoveLazyListenerForServiceWorker
    // Call: RemoveLazyListenerForServiceWorker(extension_id, worker_scope_url, event_name)
  }

  removeFilteredListenerForMainThread(listener_owner, event_name, filter, remove_lazy_listener) {
    // Method: RemoveFilteredListenerForMainThread
    // Call: RemoveFilteredListenerForMainThread(listener_owner, event_name, filter, remove_lazy_listener)
  }

  removeFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, remove_lazy_listener) {
    // Method: RemoveFilteredListenerForServiceWorker
    // Call: RemoveFilteredListenerForServiceWorker(extension_id, event_name, service_worker_context, filter, remove_lazy_listener)
  }

};

extensions.mojom.EventRouterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
