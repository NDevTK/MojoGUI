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
  UNKNOWN: 0,
  EXISTS: 1,
  DOES_NOT_EXIST: 2,
};

// Interface: ServiceWorkerHost
blink.mojom.ServiceWorkerHost = {};

blink.mojom.ServiceWorkerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setCachedMetadata(url, data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec,
      null,
      [url, data]);
  }

  clearCachedMetadata(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec,
      null,
      [url]);
  }

  getClients(options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec,
      blink.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec,
      [options]);
  }

  getClient(client_uuid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec,
      blink.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec,
      [client_uuid]);
  }

  openNewTab(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec,
      blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec,
      [url]);
  }

  openPaymentHandlerWindow(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec,
      blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec,
      [url]);
  }

  postMessageToClient(client_uuid, message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec,
      null,
      [client_uuid, message]);
  }

  focusClient(client_uuid) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec,
      blink.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec,
      [client_uuid]);
  }

  navigateClient(client_uuid, url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec,
      blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec,
      [client_uuid, url]);
  }

  skipWaiting() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec,
      blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec,
      []);
  }

  claimClients() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec,
      blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec,
      []);
  }

  addRoutes(rules) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec,
      blink.mojom.ServiceWorkerHost_AddRoutes_ResponseParamsSpec,
      [rules]);
  }

};

blink.mojom.ServiceWorkerHost.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerHost',
    'context');
  return remote.$;
};

// ParamsSpec for SetCachedMetadata
blink.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.SetCachedMetadata_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearCachedMetadata
blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.ClearCachedMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetClients
blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.GetClients_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.GetClients_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'clients', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetClient
blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.GetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.GetClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenNewTab
blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.OpenNewTab_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.OpenNewTab_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_msg', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenPaymentHandlerWindow
blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.OpenPaymentHandlerWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.OpenPaymentHandlerWindow_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_msg', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PostMessageToClient
blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.PostMessageToClient_Params',
      packedSize: 24,
      fields: [
        { name: 'client_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FocusClient
blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.FocusClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.FocusClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NavigateClient
blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.NavigateClient_Params',
      packedSize: 24,
      fields: [
        { name: 'client_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.NavigateClient_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_msg', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SkipWaiting
blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.SkipWaiting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.SkipWaiting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClaimClients
blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.ClaimClients_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.ClaimClients_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_msg', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddRoutes
blink.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.AddRoutes_Params',
      packedSize: 16,
      fields: [
        { name: 'rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorkerHost_AddRoutes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.AddRoutes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_parse_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ServiceWorkerHostPtr = blink.mojom.ServiceWorkerHostRemote;
blink.mojom.ServiceWorkerHostRequest = blink.mojom.ServiceWorkerHostPendingReceiver;


// Interface: ServiceWorker
blink.mojom.ServiceWorker = {};

blink.mojom.ServiceWorkerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initializeGlobalScope(service_worker_host, associated_interfaces_to_browser, associated_interfaces_from_browser, registration_info, service_worker_info, fetch_handler_existence, ancestor_frame_type, storage_key) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec,
      null,
      [service_worker_host, associated_interfaces_to_browser, associated_interfaces_from_browser, registration_info, service_worker_info, fetch_handler_existence, ancestor_frame_type, storage_key]);
  }

  dispatchInstallEvent() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec,
      []);
  }

  dispatchActivateEvent() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec,
      []);
  }

  dispatchBackgroundFetchAbortEvent(registration) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec,
      [registration]);
  }

  dispatchBackgroundFetchClickEvent(registration) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec,
      [registration]);
  }

  dispatchBackgroundFetchFailEvent(registration) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec,
      [registration]);
  }

  dispatchBackgroundFetchSuccessEvent(registration) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec,
      [registration]);
  }

  dispatchCookieChangeEvent(change) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec,
      [change]);
  }

  dispatchFetchEventForMainResource(params, response_callback) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec,
      [params, response_callback]);
  }

  dispatchNotificationClickEvent(notification_id, notification_data, action_index, reply) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec,
      [notification_id, notification_data, action_index, reply]);
  }

  dispatchNotificationCloseEvent(notification_id, notification_data) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec,
      [notification_id, notification_data]);
  }

  dispatchPushEvent(payload) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec,
      [payload]);
  }

  dispatchPushEventRecordingNetworkRequests(payload) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec,
      [payload]);
  }

  dispatchPushSubscriptionChangeEvent(old_subscription, new_subscription) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec,
      [old_subscription, new_subscription]);
  }

  dispatchSyncEvent(tag, last_chance, timeout) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec,
      [tag, last_chance, timeout]);
  }

  dispatchPeriodicSyncEvent(tag, timeout) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec,
      [tag, timeout]);
  }

  dispatchAbortPaymentEvent(result_of_abort_payment) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec,
      [result_of_abort_payment]);
  }

  dispatchCanMakePaymentEvent(event_data, result_of_can_make_payment) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec,
      [event_data, result_of_can_make_payment]);
  }

  dispatchPaymentRequestEvent(request_data, response_callback) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec,
      [request_data, response_callback]);
  }

  dispatchExtendableMessageEvent(event) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec,
      [event]);
  }

  dispatchContentDeleteEvent(id) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec,
      [id]);
  }

  ping() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      blink.mojom.ServiceWorker_Ping_ParamsSpec,
      null,
      []);
  }

  setIdleDelay(delay) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec,
      null,
      [delay]);
  }

  addKeepAlive() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec,
      null,
      []);
  }

  clearKeepAlive() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec,
      null,
      []);
  }

  addMessageToConsole(level, message) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec,
      null,
      [level, message]);
  }

  executeScriptForTest(javascript, wants_result) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      blink.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec,
      blink.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParamsSpec,
      [javascript, wants_result]);
  }

};

blink.mojom.ServiceWorker.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorker',
    'context');
  return remote.$;
};

// ParamsSpec for InitializeGlobalScope
blink.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.InitializeGlobalScope_Params',
      packedSize: 72,
      fields: [
        { name: 'service_worker_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'associated_interfaces_to_browser', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'associated_interfaces_from_browser', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'registration_info', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_worker_info', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'fetch_handler_existence', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ancestor_frame_type', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'storage_key', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchInstallEvent
blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchInstallEvent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchInstallEvent_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'fetch_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchActivateEvent
blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchActivateEvent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchActivateEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchBackgroundFetchAbortEvent
blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchAbortEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchAbortEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchBackgroundFetchClickEvent
blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchClickEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchClickEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchBackgroundFetchFailEvent
blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchFailEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchFailEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchBackgroundFetchSuccessEvent
blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchSuccessEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchSuccessEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchCookieChangeEvent
blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchCookieChangeEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'change', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchCookieChangeEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchFetchEventForMainResource
blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchFetchEventForMainResource_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'response_callback', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchFetchEventForMainResource_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchNotificationClickEvent
blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchNotificationClickEvent_Params',
      packedSize: 40,
      fields: [
        { name: 'notification_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'notification_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'action_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'reply', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchNotificationClickEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchNotificationCloseEvent
blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchNotificationCloseEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'notification_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'notification_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchNotificationCloseEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchPushEvent
blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPushEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'payload', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPushEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchPushEventRecordingNetworkRequests
blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPushEventRecordingNetworkRequests_Params',
      packedSize: 16,
      fields: [
        { name: 'payload', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPushEventRecordingNetworkRequests_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'requested_urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchPushSubscriptionChangeEvent
blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPushSubscriptionChangeEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'old_subscription', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_subscription', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPushSubscriptionChangeEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchSyncEvent
blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchSyncEvent_Params',
      packedSize: 32,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'last_chance', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'timeout', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchSyncEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchPeriodicSyncEvent
blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPeriodicSyncEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'timeout', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPeriodicSyncEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchAbortPaymentEvent
blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchAbortPaymentEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'result_of_abort_payment', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchAbortPaymentEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchCanMakePaymentEvent
blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchCanMakePaymentEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'event_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'result_of_can_make_payment', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchCanMakePaymentEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchPaymentRequestEvent
blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPaymentRequestEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'request_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'response_callback', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPaymentRequestEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchExtendableMessageEvent
blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchExtendableMessageEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchExtendableMessageEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchContentDeleteEvent
blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchContentDeleteEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchContentDeleteEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Ping
blink.mojom.ServiceWorker_Ping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.Ping_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetIdleDelay
blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.SetIdleDelay_Params',
      packedSize: 16,
      fields: [
        { name: 'delay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddKeepAlive
blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.AddKeepAlive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearKeepAlive
blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.ClearKeepAlive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddMessageToConsole
blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.AddMessageToConsole_Params',
      packedSize: 24,
      fields: [
        { name: 'level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExecuteScriptForTest
blink.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.ExecuteScriptForTest_Params',
      packedSize: 24,
      fields: [
        { name: 'javascript', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'wants_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.ExecuteScriptForTest_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ServiceWorkerPtr = blink.mojom.ServiceWorkerRemote;
blink.mojom.ServiceWorkerRequest = blink.mojom.ServiceWorkerPendingReceiver;

