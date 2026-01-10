// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var payments = payments || {};
var url = url || {};

blink.mojom.FocusErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.FetchHandlerExistenceSpec = { $: mojo.internal.Enum() };
blink.mojom.FocusResultSpec = { $: {} };
blink.mojom.ExtendableMessageEventSpec = { $: {} };
blink.mojom.ServiceWorkerHost = {};
blink.mojom.ServiceWorkerHost.$interfaceName = 'blink.mojom.ServiceWorkerHost';
blink.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerHost_AddRoutes_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker = {};
blink.mojom.ServiceWorker.$interfaceName = 'blink.mojom.ServiceWorker';
blink.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_Ping_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_Ping_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec = { $: {} };
blink.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParamsSpec = { $: {} };

blink.mojom.kPushEventTimeoutSeconds = 90;

blink.mojom.kServiceWorkerDefaultIdleDelayInSeconds = 30;

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

// Union: FocusResult
mojo.internal.Union(
    blink.mojom.FocusResultSpec, 'blink.mojom.FocusResult', {
      'client': {
        'ordinal': 0,
        'type': blink.mojom.ServiceWorkerClientInfoSpec.$,
        'nullable': false,
      },
      'error_code': {
        'ordinal': 1,
        'type': blink.mojom.FocusErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: ExtendableMessageEvent
mojo.internal.Struct(
    blink.mojom.ExtendableMessageEventSpec, 'blink.mojom.ExtendableMessageEvent', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.TransferableMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_origin', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_info_for_client', 16, 0, blink.mojom.ServiceWorkerClientInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('source_info_for_service_worker', 24, 0, blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ServiceWorkerHost
mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec, 'blink.mojom.ServiceWorkerHost_SetCachedMetadata_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec, 'blink.mojom.ServiceWorkerHost_ClearCachedMetadata_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec, 'blink.mojom.ServiceWorkerHost_GetClients_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.ServiceWorkerClientQueryOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_GetClients_ResponseParams', [
      mojo.internal.StructField('clients', 0, 0, mojo.internal.Array(blink.mojom.ServiceWorkerClientInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec, 'blink.mojom.ServiceWorkerHost_GetClient_Params', [
      mojo.internal.StructField('client_uuid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_GetClient_ResponseParams', [
      mojo.internal.StructField('client', 0, 0, blink.mojom.ServiceWorkerClientInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec, 'blink.mojom.ServiceWorkerHost_OpenNewTab_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParams', [
      mojo.internal.StructField('client', 0, 0, blink.mojom.ServiceWorkerClientInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec, 'blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParams', [
      mojo.internal.StructField('client', 0, 0, blink.mojom.ServiceWorkerClientInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec, 'blink.mojom.ServiceWorkerHost_PostMessageToClient_Params', [
      mojo.internal.StructField('client_uuid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, blink.mojom.TransferableMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec, 'blink.mojom.ServiceWorkerHost_FocusClient_Params', [
      mojo.internal.StructField('client_uuid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_FocusClient_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FocusResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec, 'blink.mojom.ServiceWorkerHost_NavigateClient_Params', [
      mojo.internal.StructField('client_uuid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParams', [
      mojo.internal.StructField('client', 0, 0, blink.mojom.ServiceWorkerClientInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec, 'blink.mojom.ServiceWorkerHost_SkipWaiting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec, 'blink.mojom.ServiceWorkerHost_ClaimClients_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec, 'blink.mojom.ServiceWorkerHost_AddRoutes_Params', [
      mojo.internal.StructField('rules', 0, 0, blink.mojom.ServiceWorkerRouterRulesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerHost_AddRoutes_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_AddRoutes_ResponseParams', [
      mojo.internal.StructField('is_parse_error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [url, data],
      false);
  }

  clearCachedMetadata(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec,
      null,
      [url],
      false);
  }

  getClients(options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec,
      blink.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec,
      [options],
      false);
  }

  getClient(client_uuid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec,
      blink.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec,
      [client_uuid],
      false);
  }

  openNewTab(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec,
      blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec,
      [url],
      false);
  }

  openPaymentHandlerWindow(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec,
      blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec,
      [url],
      false);
  }

  postMessageToClient(client_uuid, message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec,
      null,
      [client_uuid, message],
      false);
  }

  focusClient(client_uuid) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec,
      blink.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec,
      [client_uuid],
      false);
  }

  navigateClient(client_uuid, url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec,
      blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec,
      [client_uuid, url],
      false);
  }

  skipWaiting() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec,
      blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec,
      [],
      false);
  }

  claimClients() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec,
      blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec,
      [],
      false);
  }

  addRoutes(rules) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec,
      blink.mojom.ServiceWorkerHost_AddRoutes_ResponseParamsSpec,
      [rules],
      false);
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

blink.mojom.ServiceWorkerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCachedMetadata(params.url, params.data);
          break;
        }
        case 1: {
          const params = blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearCachedMetadata(params.url);
          break;
        }
        case 2: {
          const params = blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getClients(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getClient(params.client_uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openNewTab(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openPaymentHandlerWindow(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.postMessageToClient(params.client_uuid, params.message);
          break;
        }
        case 7: {
          const params = blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.focusClient(params.client_uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.navigateClient(params.client_uuid, params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.skipWaiting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec.$.decode(message.payload);
          const result = this.impl.claimClients();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = blink.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addRoutes(params.rules);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_AddRoutes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

blink.mojom.ServiceWorkerHostReceiver = blink.mojom.ServiceWorkerHostReceiver;

blink.mojom.ServiceWorkerHostPtr = blink.mojom.ServiceWorkerHostRemote;
blink.mojom.ServiceWorkerHostRequest = blink.mojom.ServiceWorkerHostPendingReceiver;


// Interface: ServiceWorker
mojo.internal.Struct(
    blink.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec, 'blink.mojom.ServiceWorker_InitializeGlobalScope_Params', [
      mojo.internal.StructField('service_worker_host', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('associated_interfaces_to_browser', 8, 0, pending_associated_remote<blink.mojom.AssociatedInterfaceProvider>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('associated_interfaces_from_browser', 16, 0, pending_associated_receiver<blink.mojom.AssociatedInterfaceProvider>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('registration_info', 24, 0, blink.mojom.ServiceWorkerRegistrationObjectInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_info', 32, 0, blink.mojom.ServiceWorkerObjectInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fetch_handler_existence', 40, 0, blink.mojom.FetchHandlerExistenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ancestor_frame_type', 48, 0, blink.mojom.AncestorFrameTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_key', 56, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchInstallEvent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fetch_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchActivateEvent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_Params', [
      mojo.internal.StructField('registration', 0, 0, blink.mojom.BackgroundFetchRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_Params', [
      mojo.internal.StructField('registration', 0, 0, blink.mojom.BackgroundFetchRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_Params', [
      mojo.internal.StructField('registration', 0, 0, blink.mojom.BackgroundFetchRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_Params', [
      mojo.internal.StructField('registration', 0, 0, blink.mojom.BackgroundFetchRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchCookieChangeEvent_Params', [
      mojo.internal.StructField('change', 0, 0, network.mojom.CookieChangeInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.DispatchFetchEventParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_callback', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.ServiceWorkerFetchResponseCallbackRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchNotificationClickEvent_Params', [
      mojo.internal.StructField('notification_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('notification_data', 8, 0, blink.mojom.NotificationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reply', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('action_index', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_Params', [
      mojo.internal.StructField('notification_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('notification_data', 8, 0, blink.mojom.NotificationDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchPushEvent_Params', [
      mojo.internal.StructField('payload', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_Params', [
      mojo.internal.StructField('payload', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('requested_urls', 8, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_Params', [
      mojo.internal.StructField('old_subscription', 0, 0, blink.mojom.PushSubscriptionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('new_subscription', 8, 0, blink.mojom.PushSubscriptionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchSyncEvent_Params', [
      mojo.internal.StructField('tag', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timeout', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_chance', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_Params', [
      mojo.internal.StructField('tag', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timeout', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_Params', [
      mojo.internal.StructField('result_of_abort_payment', 0, 0, mojo.internal.InterfaceProxy(payments.mojom.PaymentHandlerResponseCallbackRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_Params', [
      mojo.internal.StructField('event_data', 0, 0, payments.mojom.CanMakePaymentEventDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result_of_can_make_payment', 8, 0, mojo.internal.InterfaceProxy(payments.mojom.PaymentHandlerResponseCallbackRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_Params', [
      mojo.internal.StructField('request_data', 0, 0, payments.mojom.PaymentRequestEventDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_callback', 8, 0, mojo.internal.InterfaceProxy(payments.mojom.PaymentHandlerResponseCallbackRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.ExtendableMessageEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchContentDeleteEvent_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_Ping_ParamsSpec, 'blink.mojom.ServiceWorker_Ping_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_Ping_ResponseParamsSpec, 'blink.mojom.ServiceWorker_Ping_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec, 'blink.mojom.ServiceWorker_SetIdleDelay_Params', [
      mojo.internal.StructField('delay', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec, 'blink.mojom.ServiceWorker_AddKeepAlive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec, 'blink.mojom.ServiceWorker_ClearKeepAlive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec, 'blink.mojom.ServiceWorker_AddMessageToConsole_Params', [
      mojo.internal.StructField('level', 0, 0, blink.mojom.ConsoleMessageLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec, 'blink.mojom.ServiceWorker_ExecuteScriptForTest_Params', [
      mojo.internal.StructField('javascript', 0, 0, mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('wants_result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParamsSpec, 'blink.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      [service_worker_host, associated_interfaces_to_browser, associated_interfaces_from_browser, registration_info, service_worker_info, fetch_handler_existence, ancestor_frame_type, storage_key],
      false);
  }

  dispatchInstallEvent() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec,
      [],
      false);
  }

  dispatchActivateEvent() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec,
      [],
      false);
  }

  dispatchBackgroundFetchAbortEvent(registration) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec,
      [registration],
      false);
  }

  dispatchBackgroundFetchClickEvent(registration) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec,
      [registration],
      false);
  }

  dispatchBackgroundFetchFailEvent(registration) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec,
      [registration],
      false);
  }

  dispatchBackgroundFetchSuccessEvent(registration) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec,
      [registration],
      false);
  }

  dispatchCookieChangeEvent(change) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec,
      [change],
      false);
  }

  dispatchFetchEventForMainResource(params, response_callback) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec,
      [params, response_callback],
      false);
  }

  dispatchNotificationClickEvent(notification_id, notification_data, action_index, reply) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec,
      [notification_id, notification_data, action_index, reply],
      false);
  }

  dispatchNotificationCloseEvent(notification_id, notification_data) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec,
      [notification_id, notification_data],
      false);
  }

  dispatchPushEvent(payload) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec,
      [payload],
      false);
  }

  dispatchPushEventRecordingNetworkRequests(payload) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec,
      [payload],
      false);
  }

  dispatchPushSubscriptionChangeEvent(old_subscription, new_subscription) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec,
      [old_subscription, new_subscription],
      false);
  }

  dispatchSyncEvent(tag, last_chance, timeout) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec,
      [tag, last_chance, timeout],
      false);
  }

  dispatchPeriodicSyncEvent(tag, timeout) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec,
      [tag, timeout],
      false);
  }

  dispatchAbortPaymentEvent(result_of_abort_payment) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec,
      [result_of_abort_payment],
      false);
  }

  dispatchCanMakePaymentEvent(event_data, result_of_can_make_payment) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec,
      [event_data, result_of_can_make_payment],
      false);
  }

  dispatchPaymentRequestEvent(request_data, response_callback) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec,
      [request_data, response_callback],
      false);
  }

  dispatchExtendableMessageEvent(event) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec,
      [event],
      false);
  }

  dispatchContentDeleteEvent(id) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec,
      [id],
      false);
  }

  ping() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      blink.mojom.ServiceWorker_Ping_ParamsSpec,
      blink.mojom.ServiceWorker_Ping_ResponseParamsSpec,
      [],
      false);
  }

  setIdleDelay(delay) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec,
      null,
      [delay],
      false);
  }

  addKeepAlive() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec,
      null,
      [],
      false);
  }

  clearKeepAlive() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec,
      null,
      [],
      false);
  }

  addMessageToConsole(level, message) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec,
      null,
      [level, message],
      false);
  }

  executeScriptForTest(javascript, wants_result) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      blink.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec,
      blink.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParamsSpec,
      [javascript, wants_result],
      false);
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

blink.mojom.ServiceWorkerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initializeGlobalScope(params.service_worker_host, params.associated_interfaces_to_browser, params.associated_interfaces_from_browser, params.registration_info, params.service_worker_info, params.fetch_handler_existence, params.ancestor_frame_type, params.storage_key);
          break;
        }
        case 1: {
          const params = blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchInstallEvent();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchActivateEvent();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchBackgroundFetchAbortEvent(params.registration);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchBackgroundFetchClickEvent(params.registration);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchBackgroundFetchFailEvent(params.registration);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchBackgroundFetchSuccessEvent(params.registration);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchCookieChangeEvent(params.change);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchFetchEventForMainResource(params.params, params.response_callback);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchNotificationClickEvent(params.notification_id, params.notification_data, params.action_index, params.reply);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchNotificationCloseEvent(params.notification_id, params.notification_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchPushEvent(params.payload);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchPushEventRecordingNetworkRequests(params.payload);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const params = blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchPushSubscriptionChangeEvent(params.old_subscription, params.new_subscription);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const params = blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchSyncEvent(params.tag, params.last_chance, params.timeout);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const params = blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchPeriodicSyncEvent(params.tag, params.timeout);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const params = blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchAbortPaymentEvent(params.result_of_abort_payment);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const params = blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchCanMakePaymentEvent(params.event_data, params.result_of_can_make_payment);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const params = blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchPaymentRequestEvent(params.request_data, params.response_callback);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const params = blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchExtendableMessageEvent(params.event);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const params = blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchContentDeleteEvent(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const params = blink.mojom.ServiceWorker_Ping_ParamsSpec.$.decode(message.payload);
          const result = this.impl.ping();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_Ping_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const params = blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setIdleDelay(params.delay);
          break;
        }
        case 23: {
          const params = blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addKeepAlive();
          break;
        }
        case 24: {
          const params = blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearKeepAlive();
          break;
        }
        case 25: {
          const params = blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addMessageToConsole(params.level, params.message);
          break;
        }
        case 26: {
          const params = blink.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec.$.decode(message.payload);
          const result = this.impl.executeScriptForTest(params.javascript, params.wants_result);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

blink.mojom.ServiceWorkerReceiver = blink.mojom.ServiceWorkerReceiver;

blink.mojom.ServiceWorkerPtr = blink.mojom.ServiceWorkerRemote;
blink.mojom.ServiceWorkerRequest = blink.mojom.ServiceWorkerPendingReceiver;

