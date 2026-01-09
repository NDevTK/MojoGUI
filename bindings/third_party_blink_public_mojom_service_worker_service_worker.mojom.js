// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: FocusError
blink.mojom.FocusError = {
  CLIENT_NOT_FOUND: 0,
  CLIENT_INACTIVE: 1,
};

// Enum: FetchHandlerExistence
blink.mojom.FetchHandlerExistence = {
};

// Struct: ExtendableMessageEvent
blink.mojom.ExtendableMessageEvent = class {
  constructor(values = {}) {
    this.source_info_for_service_worker = values.source_info_for_service_worker !== undefined ? values.source_info_for_service_worker : null;
  }
};

// Interface: ServiceWorkerHost
blink.mojom.ServiceWorkerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerHost';
  }

  setCachedMetadata(url, data) {
    // Method: SetCachedMetadata
    // Call: SetCachedMetadata(url, data)
  }

  clearCachedMetadata(url) {
    // Method: ClearCachedMetadata
    // Call: ClearCachedMetadata(url)
  }

  getClients(options) {
    // Method: GetClients
    return new Promise((resolve) => {
      // Call: GetClients(options)
      resolve({});
    });
  }

  getClient(client_uuid) {
    // Method: GetClient
    return new Promise((resolve) => {
      // Call: GetClient(client_uuid)
      resolve({});
    });
  }

  openNewTab(url) {
    // Method: OpenNewTab
    return new Promise((resolve) => {
      // Call: OpenNewTab(url)
      resolve({});
    });
  }

  openPaymentHandlerWindow(url) {
    // Method: OpenPaymentHandlerWindow
    return new Promise((resolve) => {
      // Call: OpenPaymentHandlerWindow(url)
      resolve({});
    });
  }

  postMessageToClient(client_uuid, message) {
    // Method: PostMessageToClient
    // Call: PostMessageToClient(client_uuid, message)
  }

  focusClient(client_uuid) {
    // Method: FocusClient
    return new Promise((resolve) => {
      // Call: FocusClient(client_uuid)
      resolve({});
    });
  }

  navigateClient(client_uuid, url) {
    // Method: NavigateClient
    return new Promise((resolve) => {
      // Call: NavigateClient(client_uuid, url)
      resolve({});
    });
  }

  skipWaiting() {
    // Method: SkipWaiting
    return new Promise((resolve) => {
      // Call: SkipWaiting()
      resolve({});
    });
  }

  claimClients() {
    // Method: ClaimClients
    return new Promise((resolve) => {
      // Call: ClaimClients()
      resolve({});
    });
  }

  addRoutes(rules) {
    // Method: AddRoutes
    return new Promise((resolve) => {
      // Call: AddRoutes(rules)
      resolve({});
    });
  }

};

blink.mojom.ServiceWorkerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ServiceWorker
blink.mojom.ServiceWorkerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorker';
  }

  initializeGlobalScope(service_worker_host, associated_interfaces_to_browser, associated_interfaces_from_browser, registration_info, service_worker_info, fetch_handler_existence, ancestor_frame_type, storage_key) {
    // Method: InitializeGlobalScope
    // Call: InitializeGlobalScope(service_worker_host, associated_interfaces_to_browser, associated_interfaces_from_browser, registration_info, service_worker_info, fetch_handler_existence, ancestor_frame_type, storage_key)
  }

  dispatchInstallEvent() {
    // Method: DispatchInstallEvent
    return new Promise((resolve) => {
      // Call: DispatchInstallEvent()
      resolve({});
    });
  }

  dispatchActivateEvent() {
    // Method: DispatchActivateEvent
    return new Promise((resolve) => {
      // Call: DispatchActivateEvent()
      resolve({});
    });
  }

  dispatchBackgroundFetchAbortEvent(registration) {
    // Method: DispatchBackgroundFetchAbortEvent
    return new Promise((resolve) => {
      // Call: DispatchBackgroundFetchAbortEvent(registration)
      resolve({});
    });
  }

  dispatchBackgroundFetchClickEvent(registration) {
    // Method: DispatchBackgroundFetchClickEvent
    return new Promise((resolve) => {
      // Call: DispatchBackgroundFetchClickEvent(registration)
      resolve({});
    });
  }

  dispatchBackgroundFetchFailEvent(registration) {
    // Method: DispatchBackgroundFetchFailEvent
    return new Promise((resolve) => {
      // Call: DispatchBackgroundFetchFailEvent(registration)
      resolve({});
    });
  }

  dispatchBackgroundFetchSuccessEvent(registration) {
    // Method: DispatchBackgroundFetchSuccessEvent
    return new Promise((resolve) => {
      // Call: DispatchBackgroundFetchSuccessEvent(registration)
      resolve({});
    });
  }

  dispatchCookieChangeEvent(change) {
    // Method: DispatchCookieChangeEvent
    return new Promise((resolve) => {
      // Call: DispatchCookieChangeEvent(change)
      resolve({});
    });
  }

  dispatchFetchEventForMainResource(params, response_callback) {
    // Method: DispatchFetchEventForMainResource
    return new Promise((resolve) => {
      // Call: DispatchFetchEventForMainResource(params, response_callback)
      resolve({});
    });
  }

  dispatchNotificationClickEvent(notification_id, notification_data, action_index, reply) {
    // Method: DispatchNotificationClickEvent
    return new Promise((resolve) => {
      // Call: DispatchNotificationClickEvent(notification_id, notification_data, action_index, reply)
      resolve({});
    });
  }

  dispatchNotificationCloseEvent(notification_id, notification_data) {
    // Method: DispatchNotificationCloseEvent
    return new Promise((resolve) => {
      // Call: DispatchNotificationCloseEvent(notification_id, notification_data)
      resolve({});
    });
  }

  dispatchPushEvent(payload) {
    // Method: DispatchPushEvent
    return new Promise((resolve) => {
      // Call: DispatchPushEvent(payload)
      resolve({});
    });
  }

  dispatchPushEventRecordingNetworkRequests(payload) {
    // Method: DispatchPushEventRecordingNetworkRequests
    return new Promise((resolve) => {
      // Call: DispatchPushEventRecordingNetworkRequests(payload)
      resolve({});
    });
  }

  dispatchPushSubscriptionChangeEvent(old_subscription, new_subscription) {
    // Method: DispatchPushSubscriptionChangeEvent
    return new Promise((resolve) => {
      // Call: DispatchPushSubscriptionChangeEvent(old_subscription, new_subscription)
      resolve({});
    });
  }

  dispatchSyncEvent(tag, last_chance, timeout) {
    // Method: DispatchSyncEvent
    return new Promise((resolve) => {
      // Call: DispatchSyncEvent(tag, last_chance, timeout)
      resolve({});
    });
  }

  dispatchPeriodicSyncEvent(tag, timeout) {
    // Method: DispatchPeriodicSyncEvent
    return new Promise((resolve) => {
      // Call: DispatchPeriodicSyncEvent(tag, timeout)
      resolve({});
    });
  }

  dispatchAbortPaymentEvent(result_of_abort_payment) {
    // Method: DispatchAbortPaymentEvent
    return new Promise((resolve) => {
      // Call: DispatchAbortPaymentEvent(result_of_abort_payment)
      resolve({});
    });
  }

  dispatchCanMakePaymentEvent(event_data, result_of_can_make_payment) {
    // Method: DispatchCanMakePaymentEvent
    return new Promise((resolve) => {
      // Call: DispatchCanMakePaymentEvent(event_data, result_of_can_make_payment)
      resolve({});
    });
  }

  dispatchPaymentRequestEvent(request_data, response_callback) {
    // Method: DispatchPaymentRequestEvent
    return new Promise((resolve) => {
      // Call: DispatchPaymentRequestEvent(request_data, response_callback)
      resolve({});
    });
  }

  dispatchExtendableMessageEvent(event) {
    // Method: DispatchExtendableMessageEvent
    return new Promise((resolve) => {
      // Call: DispatchExtendableMessageEvent(event)
      resolve({});
    });
  }

  dispatchContentDeleteEvent(id) {
    // Method: DispatchContentDeleteEvent
    return new Promise((resolve) => {
      // Call: DispatchContentDeleteEvent(id)
      resolve({});
    });
  }

  ping() {
    // Method: Ping
    // Call: Ping()
  }

  setIdleDelay(delay) {
    // Method: SetIdleDelay
    // Call: SetIdleDelay(delay)
  }

  addKeepAlive() {
    // Method: AddKeepAlive
    // Call: AddKeepAlive()
  }

  clearKeepAlive() {
    // Method: ClearKeepAlive
    // Call: ClearKeepAlive()
  }

  addMessageToConsole(level, message) {
    // Method: AddMessageToConsole
    // Call: AddMessageToConsole(level, message)
  }

  executeScriptForTest(javascript, wants_result) {
    // Method: ExecuteScriptForTest
    return new Promise((resolve) => {
      // Call: ExecuteScriptForTest(javascript, wants_result)
      resolve({});
    });
  }

};

blink.mojom.ServiceWorkerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
