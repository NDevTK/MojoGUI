// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};
var url = url || {};


blink.mojom.mojom.kPushEventTimeoutSeconds = 90;

blink.mojom.mojom.kServiceWorkerDefaultIdleDelayInSeconds = 30;

// Enum: FocusError
blink.mojom.mojom.FocusError = {
  CLIENT_NOT_FOUND: 0,
  CLIENT_INACTIVE: 1,
};
blink.mojom.mojom.FocusErrorSpec = { $: mojo.internal.Enum() };

// Enum: FetchHandlerExistence
blink.mojom.mojom.FetchHandlerExistence = {
  UNKNOWN: 0,
  EXISTS: 1,
  DOES_NOT_EXIST: 2,
};
blink.mojom.mojom.FetchHandlerExistenceSpec = { $: mojo.internal.Enum() };

// Union: FocusResult
blink.mojom.mojom.FocusResultSpec = { $: mojo.internal.Union(
    'blink.mojom.FocusResult', {
      'client': {
        'ordinal': 0,
        'type': blink.mojom.ServiceWorkerClientInfoSpec,
      }},
      'error_code': {
        'ordinal': 1,
        'type': blink.mojom.FocusErrorSpec,
      }},
    })
};

// Struct: ExtendableMessageEvent
blink.mojom.mojom.ExtendableMessageEventSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ExtendableMessageEvent',
      packedSize: 40,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.TransferableMessageSpec, nullable: false, minVersion: 0 },
        { name: 'source_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'source_info_for_client', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ServiceWorkerClientInfoSpec, nullable: true, minVersion: 0 },
        { name: 'source_info_for_service_worker', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ServiceWorkerObjectInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: ServiceWorkerHost
blink.mojom.mojom.ServiceWorkerHost = {};

blink.mojom.mojom.ServiceWorkerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ServiceWorkerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ServiceWorkerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ServiceWorkerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ServiceWorkerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setCachedMetadata(url, data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec,
      null,
      [url, data]);
  }

  clearCachedMetadata(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec,
      null,
      [url]);
  }

  getClients(options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.ServiceWorkerHost_GetClients_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec,
      [options]);
  }

  getClient(client_uuid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.ServiceWorkerHost_GetClient_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec,
      [client_uuid]);
  }

  openNewTab(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec,
      [url]);
  }

  openPaymentHandlerWindow(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec,
      [url]);
  }

  postMessageToClient(client_uuid, message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec,
      null,
      [client_uuid, message]);
  }

  focusClient(client_uuid) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.ServiceWorkerHost_FocusClient_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec,
      [client_uuid]);
  }

  navigateClient(client_uuid, url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec,
      [client_uuid, url]);
  }

  skipWaiting() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec,
      []);
  }

  claimClients() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec,
      []);
  }

  addRoutes(rules) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerHost_AddRoutes_ResponseParamsSpec,
      [rules]);
  }

};

blink.mojom.mojom.ServiceWorkerHost.getRemote = function() {
  let remote = new blink.mojom.mojom.ServiceWorkerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerHost',
    'context');
  return remote.$;
};

// ParamsSpec for SetCachedMetadata
blink.mojom.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.SetCachedMetadata_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearCachedMetadata
blink.mojom.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.ClearCachedMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetClients
blink.mojom.mojom.ServiceWorkerHost_GetClients_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.GetClients_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerClientQueryOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.GetClients_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'clients', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ServiceWorkerClientInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetClient
blink.mojom.mojom.ServiceWorkerHost_GetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.GetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.GetClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerClientInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenNewTab
blink.mojom.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.OpenNewTab_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.OpenNewTab_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerClientInfoSpec, nullable: true, minVersion: 0 },
        { name: 'error_msg', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OpenPaymentHandlerWindow
blink.mojom.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.OpenPaymentHandlerWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.OpenPaymentHandlerWindow_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerClientInfoSpec, nullable: true, minVersion: 0 },
        { name: 'error_msg', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for PostMessageToClient
blink.mojom.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.PostMessageToClient_Params',
      packedSize: 24,
      fields: [
        { name: 'client_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.TransferableMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for FocusClient
blink.mojom.mojom.ServiceWorkerHost_FocusClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.FocusClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.FocusClient_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FocusResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for NavigateClient
blink.mojom.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.NavigateClient_Params',
      packedSize: 24,
      fields: [
        { name: 'client_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.NavigateClient_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerClientInfoSpec, nullable: true, minVersion: 0 },
        { name: 'error_msg', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SkipWaiting
blink.mojom.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.SkipWaiting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.SkipWaiting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClaimClients
blink.mojom.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.ClaimClients_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.ClaimClients_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'error_msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddRoutes
blink.mojom.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.AddRoutes_Params',
      packedSize: 16,
      fields: [
        { name: 'rules', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterRulesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerHost_AddRoutes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerHost.AddRoutes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_parse_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ServiceWorkerHostPtr = blink.mojom.mojom.ServiceWorkerHostRemote;
blink.mojom.mojom.ServiceWorkerHostRequest = blink.mojom.mojom.ServiceWorkerHostPendingReceiver;


// Interface: ServiceWorker
blink.mojom.mojom.ServiceWorker = {};

blink.mojom.mojom.ServiceWorkerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ServiceWorkerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ServiceWorkerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ServiceWorkerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ServiceWorkerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initializeGlobalScope(service_worker_host, associated_interfaces_to_browser, associated_interfaces_from_browser, registration_info, service_worker_info, fetch_handler_existence, ancestor_frame_type, storage_key) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec,
      null,
      [service_worker_host, associated_interfaces_to_browser, associated_interfaces_from_browser, registration_info, service_worker_info, fetch_handler_existence, ancestor_frame_type, storage_key]);
  }

  dispatchInstallEvent() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec,
      []);
  }

  dispatchActivateEvent() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec,
      []);
  }

  dispatchBackgroundFetchAbortEvent(registration) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec,
      [registration]);
  }

  dispatchBackgroundFetchClickEvent(registration) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec,
      [registration]);
  }

  dispatchBackgroundFetchFailEvent(registration) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec,
      [registration]);
  }

  dispatchBackgroundFetchSuccessEvent(registration) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec,
      [registration]);
  }

  dispatchCookieChangeEvent(change) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec,
      [change]);
  }

  dispatchFetchEventForMainResource(params, response_callback) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec,
      [params, response_callback]);
  }

  dispatchNotificationClickEvent(notification_id, notification_data, action_index, reply) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec,
      [notification_id, notification_data, action_index, reply]);
  }

  dispatchNotificationCloseEvent(notification_id, notification_data) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec,
      [notification_id, notification_data]);
  }

  dispatchPushEvent(payload) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec,
      [payload]);
  }

  dispatchPushEventRecordingNetworkRequests(payload) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec,
      [payload]);
  }

  dispatchPushSubscriptionChangeEvent(old_subscription, new_subscription) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec,
      [old_subscription, new_subscription]);
  }

  dispatchSyncEvent(tag, last_chance, timeout) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec,
      [tag, last_chance, timeout]);
  }

  dispatchPeriodicSyncEvent(tag, timeout) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec,
      [tag, timeout]);
  }

  dispatchAbortPaymentEvent(result_of_abort_payment) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec,
      [result_of_abort_payment]);
  }

  dispatchCanMakePaymentEvent(event_data, result_of_can_make_payment) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec,
      [event_data, result_of_can_make_payment]);
  }

  dispatchPaymentRequestEvent(request_data, response_callback) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec,
      [request_data, response_callback]);
  }

  dispatchExtendableMessageEvent(event) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec,
      [event]);
  }

  dispatchContentDeleteEvent(id) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      blink.mojom.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec,
      [id]);
  }

  ping() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      blink.mojom.mojom.ServiceWorker_Ping_ParamsSpec,
      null,
      []);
  }

  setIdleDelay(delay) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      blink.mojom.mojom.ServiceWorker_SetIdleDelay_ParamsSpec,
      null,
      [delay]);
  }

  addKeepAlive() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      blink.mojom.mojom.ServiceWorker_AddKeepAlive_ParamsSpec,
      null,
      []);
  }

  clearKeepAlive() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      blink.mojom.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec,
      null,
      []);
  }

  addMessageToConsole(level, message) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      blink.mojom.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec,
      null,
      [level, message]);
  }

  executeScriptForTest(javascript, wants_result) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      blink.mojom.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec,
      blink.mojom.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParamsSpec,
      [javascript, wants_result]);
  }

};

blink.mojom.mojom.ServiceWorker.getRemote = function() {
  let remote = new blink.mojom.mojom.ServiceWorkerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorker',
    'context');
  return remote.$;
};

// ParamsSpec for InitializeGlobalScope
blink.mojom.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.InitializeGlobalScope_Params',
      packedSize: 56,
      fields: [
        { name: 'service_worker_host', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'associated_interfaces_to_browser', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'associated_interfaces_from_browser', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'registration_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRegistrationObjectInfoSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_info', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerObjectInfoSpec, nullable: false, minVersion: 0 },
        { name: 'fetch_handler_existence', packedOffset: 36, packedBitOffset: 0, type: blink.mojom.FetchHandlerExistenceSpec, nullable: false, minVersion: 0 },
        { name: 'ancestor_frame_type', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.AncestorFrameTypeSpec, nullable: false, minVersion: 0 },
        { name: 'storage_key', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for DispatchInstallEvent
blink.mojom.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchInstallEvent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchInstallEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
        { name: 'fetch_count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchActivateEvent
blink.mojom.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchActivateEvent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchActivateEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchBackgroundFetchAbortEvent
blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchAbortEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BackgroundFetchRegistrationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchAbortEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchBackgroundFetchClickEvent
blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchClickEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BackgroundFetchRegistrationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchClickEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchBackgroundFetchFailEvent
blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchFailEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BackgroundFetchRegistrationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchFailEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchBackgroundFetchSuccessEvent
blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchSuccessEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BackgroundFetchRegistrationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchBackgroundFetchSuccessEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchCookieChangeEvent
blink.mojom.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchCookieChangeEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'change', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CookieChangeInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchCookieChangeEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchFetchEventForMainResource
blink.mojom.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchFetchEventForMainResource_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DispatchFetchEventParamsSpec, nullable: false, minVersion: 0 },
        { name: 'response_callback', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchFetchEventForMainResource_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchNotificationClickEvent
blink.mojom.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchNotificationClickEvent_Params',
      packedSize: 40,
      fields: [
        { name: 'notification_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'notification_data', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.NotificationDataSpec, nullable: false, minVersion: 0 },
        { name: 'action_index', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'reply', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchNotificationClickEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchNotificationCloseEvent
blink.mojom.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchNotificationCloseEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'notification_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'notification_data', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.NotificationDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchNotificationCloseEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchPushEvent
blink.mojom.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPushEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'payload', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPushEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchPushEventRecordingNetworkRequests
blink.mojom.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPushEventRecordingNetworkRequests_Params',
      packedSize: 16,
      fields: [
        { name: 'payload', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPushEventRecordingNetworkRequests_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
        { name: 'requested_urls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DispatchPushSubscriptionChangeEvent
blink.mojom.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPushSubscriptionChangeEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'old_subscription', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PushSubscriptionSpec, nullable: true, minVersion: 0 },
        { name: 'new_subscription', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PushSubscriptionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPushSubscriptionChangeEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchSyncEvent
blink.mojom.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchSyncEvent_Params',
      packedSize: 32,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'last_chance', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'timeout', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchSyncEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchPeriodicSyncEvent
blink.mojom.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPeriodicSyncEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'timeout', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPeriodicSyncEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchAbortPaymentEvent
blink.mojom.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchAbortPaymentEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'result_of_abort_payment', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchAbortPaymentEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchCanMakePaymentEvent
blink.mojom.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchCanMakePaymentEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'event_data', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.CanMakePaymentEventDataSpec, nullable: false, minVersion: 0 },
        { name: 'result_of_can_make_payment', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchCanMakePaymentEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchPaymentRequestEvent
blink.mojom.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPaymentRequestEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'request_data', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentRequestEventDataSpec, nullable: false, minVersion: 0 },
        { name: 'response_callback', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchPaymentRequestEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchExtendableMessageEvent
blink.mojom.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchExtendableMessageEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ExtendableMessageEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchExtendableMessageEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DispatchContentDeleteEvent
blink.mojom.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchContentDeleteEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.DispatchContentDeleteEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Ping
blink.mojom.mojom.ServiceWorker_Ping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.Ping_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetIdleDelay
blink.mojom.mojom.ServiceWorker_SetIdleDelay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.SetIdleDelay_Params',
      packedSize: 16,
      fields: [
        { name: 'delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddKeepAlive
blink.mojom.mojom.ServiceWorker_AddKeepAlive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.AddKeepAlive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ClearKeepAlive
blink.mojom.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.ClearKeepAlive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AddMessageToConsole
blink.mojom.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.AddMessageToConsole_Params',
      packedSize: 24,
      fields: [
        { name: 'level', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ConsoleMessageLevelSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExecuteScriptForTest
blink.mojom.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.ExecuteScriptForTest_Params',
      packedSize: 24,
      fields: [
        { name: 'javascript', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false, minVersion: 0 },
        { name: 'wants_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorker.ExecuteScriptForTest_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ServiceWorkerPtr = blink.mojom.mojom.ServiceWorkerRemote;
blink.mojom.mojom.ServiceWorkerRequest = blink.mojom.mojom.ServiceWorkerPendingReceiver;

