// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker.mojom
// Module: blink.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
  setCachedMetadata(url, data) {
    return this.$.setCachedMetadata(url, data);
  }
  clearCachedMetadata(url) {
    return this.$.clearCachedMetadata(url);
  }
  getClients(options) {
    return this.$.getClients(options);
  }
  getClient(client_uuid) {
    return this.$.getClient(client_uuid);
  }
  openNewTab(url) {
    return this.$.openNewTab(url);
  }
  openPaymentHandlerWindow(url) {
    return this.$.openPaymentHandlerWindow(url);
  }
  postMessageToClient(client_uuid, message) {
    return this.$.postMessageToClient(client_uuid, message);
  }
  focusClient(client_uuid) {
    return this.$.focusClient(client_uuid);
  }
  navigateClient(client_uuid, url) {
    return this.$.navigateClient(client_uuid, url);
  }
  skipWaiting() {
    return this.$.skipWaiting();
  }
  claimClients() {
    return this.$.claimClients();
  }
  addRoutes(rules) {
    return this.$.addRoutes(rules);
  }
};

blink.mojom.ServiceWorkerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerHost', [
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

  setCachedMetadata(url, data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec,
      null,
      [url, data],
      false);
  }

  clearCachedMetadata(url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec,
      null,
      [url],
      false);
  }

  getClients(options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec,
      blink.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec,
      [options],
      false);
  }

  getClient(client_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec,
      blink.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec,
      [client_uuid],
      false);
  }

  openNewTab(url) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec,
      blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec,
      [url],
      false);
  }

  openPaymentHandlerWindow(url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec,
      blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec,
      [url],
      false);
  }

  postMessageToClient(client_uuid, message) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec,
      null,
      [client_uuid, message],
      false);
  }

  focusClient(client_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec,
      blink.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec,
      [client_uuid],
      false);
  }

  navigateClient(client_uuid, url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec,
      blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec,
      [client_uuid, url],
      false);
  }

  skipWaiting() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec,
      blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec,
      [],
      false);
  }

  claimClients() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec,
      blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec,
      [],
      false);
  }

  addRoutes(rules) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerHost', [
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetCachedMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCachedMetadata (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ClearCachedMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearCachedMetadata (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetClients
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetClients (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetClient (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenNewTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenNewTab (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OpenPaymentHandlerWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenPaymentHandlerWindow (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: PostMessageToClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PostMessageToClient (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: FocusClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusClient (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: NavigateClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NavigateClient (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SkipWaiting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SkipWaiting (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ClaimClients
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClaimClients (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: AddRoutes
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddRoutes (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCachedMetadata');
          const result = this.impl.setCachedMetadata(params.url, params.data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearCachedMetadata');
          const result = this.impl.clearCachedMetadata(params.url);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getClients');
          const result = this.impl.getClients(params.options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetClients FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getClient');
          const result = this.impl.getClient(params.client_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetClient FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openNewTab');
          const result = this.impl.openNewTab(params.url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenNewTab FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openPaymentHandlerWindow');
          const result = this.impl.openPaymentHandlerWindow(params.url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenPaymentHandlerWindow FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.postMessageToClient');
          const result = this.impl.postMessageToClient(params.client_uuid, params.message);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusClient');
          const result = this.impl.focusClient(params.client_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FocusClient FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.navigateClient');
          const result = this.impl.navigateClient(params.client_uuid, params.url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] NavigateClient FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.skipWaiting');
          const result = this.impl.skipWaiting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SkipWaiting FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.claimClients');
          const result = this.impl.claimClients();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClaimClients FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addRoutes');
          const result = this.impl.addRoutes(params.rules);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerHost_AddRoutes_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddRoutes FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
  initializeGlobalScope(service_worker_host, associated_interfaces_to_browser, associated_interfaces_from_browser, registration_info, service_worker_info, fetch_handler_existence, ancestor_frame_type, storage_key) {
    return this.$.initializeGlobalScope(service_worker_host, associated_interfaces_to_browser, associated_interfaces_from_browser, registration_info, service_worker_info, fetch_handler_existence, ancestor_frame_type, storage_key);
  }
  dispatchInstallEvent() {
    return this.$.dispatchInstallEvent();
  }
  dispatchActivateEvent() {
    return this.$.dispatchActivateEvent();
  }
  dispatchBackgroundFetchAbortEvent(registration) {
    return this.$.dispatchBackgroundFetchAbortEvent(registration);
  }
  dispatchBackgroundFetchClickEvent(registration) {
    return this.$.dispatchBackgroundFetchClickEvent(registration);
  }
  dispatchBackgroundFetchFailEvent(registration) {
    return this.$.dispatchBackgroundFetchFailEvent(registration);
  }
  dispatchBackgroundFetchSuccessEvent(registration) {
    return this.$.dispatchBackgroundFetchSuccessEvent(registration);
  }
  dispatchCookieChangeEvent(change) {
    return this.$.dispatchCookieChangeEvent(change);
  }
  dispatchFetchEventForMainResource(params, response_callback) {
    return this.$.dispatchFetchEventForMainResource(params, response_callback);
  }
  dispatchNotificationClickEvent(notification_id, notification_data, action_index, reply) {
    return this.$.dispatchNotificationClickEvent(notification_id, notification_data, action_index, reply);
  }
  dispatchNotificationCloseEvent(notification_id, notification_data) {
    return this.$.dispatchNotificationCloseEvent(notification_id, notification_data);
  }
  dispatchPushEvent(payload) {
    return this.$.dispatchPushEvent(payload);
  }
  dispatchPushEventRecordingNetworkRequests(payload) {
    return this.$.dispatchPushEventRecordingNetworkRequests(payload);
  }
  dispatchPushSubscriptionChangeEvent(old_subscription, new_subscription) {
    return this.$.dispatchPushSubscriptionChangeEvent(old_subscription, new_subscription);
  }
  dispatchSyncEvent(tag, last_chance, timeout) {
    return this.$.dispatchSyncEvent(tag, last_chance, timeout);
  }
  dispatchPeriodicSyncEvent(tag, timeout) {
    return this.$.dispatchPeriodicSyncEvent(tag, timeout);
  }
  dispatchAbortPaymentEvent(result_of_abort_payment) {
    return this.$.dispatchAbortPaymentEvent(result_of_abort_payment);
  }
  dispatchCanMakePaymentEvent(event_data, result_of_can_make_payment) {
    return this.$.dispatchCanMakePaymentEvent(event_data, result_of_can_make_payment);
  }
  dispatchPaymentRequestEvent(request_data, response_callback) {
    return this.$.dispatchPaymentRequestEvent(request_data, response_callback);
  }
  dispatchExtendableMessageEvent(event) {
    return this.$.dispatchExtendableMessageEvent(event);
  }
  dispatchContentDeleteEvent(id) {
    return this.$.dispatchContentDeleteEvent(id);
  }
  ping() {
    return this.$.ping();
  }
  setIdleDelay(delay) {
    return this.$.setIdleDelay(delay);
  }
  addKeepAlive() {
    return this.$.addKeepAlive();
  }
  clearKeepAlive() {
    return this.$.clearKeepAlive();
  }
  addMessageToConsole(level, message) {
    return this.$.addMessageToConsole(level, message);
  }
  executeScriptForTest(javascript, wants_result) {
    return this.$.executeScriptForTest(javascript, wants_result);
  }
};

blink.mojom.ServiceWorkerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorker', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initializeGlobalScope(service_worker_host, associated_interfaces_to_browser, associated_interfaces_from_browser, registration_info, service_worker_info, fetch_handler_existence, ancestor_frame_type, storage_key) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec,
      null,
      [service_worker_host, associated_interfaces_to_browser, associated_interfaces_from_browser, registration_info, service_worker_info, fetch_handler_existence, ancestor_frame_type, storage_key],
      false);
  }

  dispatchInstallEvent() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec,
      [],
      false);
  }

  dispatchActivateEvent() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec,
      [],
      false);
  }

  dispatchBackgroundFetchAbortEvent(registration) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec,
      [registration],
      false);
  }

  dispatchBackgroundFetchClickEvent(registration) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec,
      [registration],
      false);
  }

  dispatchBackgroundFetchFailEvent(registration) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec,
      [registration],
      false);
  }

  dispatchBackgroundFetchSuccessEvent(registration) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec,
      [registration],
      false);
  }

  dispatchCookieChangeEvent(change) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec,
      [change],
      false);
  }

  dispatchFetchEventForMainResource(params, response_callback) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec,
      [params, response_callback],
      false);
  }

  dispatchNotificationClickEvent(notification_id, notification_data, action_index, reply) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec,
      [notification_id, notification_data, action_index, reply],
      false);
  }

  dispatchNotificationCloseEvent(notification_id, notification_data) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec,
      [notification_id, notification_data],
      false);
  }

  dispatchPushEvent(payload) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec,
      [payload],
      false);
  }

  dispatchPushEventRecordingNetworkRequests(payload) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec,
      [payload],
      false);
  }

  dispatchPushSubscriptionChangeEvent(old_subscription, new_subscription) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec,
      [old_subscription, new_subscription],
      false);
  }

  dispatchSyncEvent(tag, last_chance, timeout) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec,
      [tag, last_chance, timeout],
      false);
  }

  dispatchPeriodicSyncEvent(tag, timeout) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec,
      [tag, timeout],
      false);
  }

  dispatchAbortPaymentEvent(result_of_abort_payment) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec,
      [result_of_abort_payment],
      false);
  }

  dispatchCanMakePaymentEvent(event_data, result_of_can_make_payment) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec,
      [event_data, result_of_can_make_payment],
      false);
  }

  dispatchPaymentRequestEvent(request_data, response_callback) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec,
      [request_data, response_callback],
      false);
  }

  dispatchExtendableMessageEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec,
      [event],
      false);
  }

  dispatchContentDeleteEvent(id) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec,
      blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec,
      [id],
      false);
  }

  ping() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      blink.mojom.ServiceWorker_Ping_ParamsSpec,
      blink.mojom.ServiceWorker_Ping_ResponseParamsSpec,
      [],
      false);
  }

  setIdleDelay(delay) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec,
      null,
      [delay],
      false);
  }

  addKeepAlive() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec,
      null,
      [],
      false);
  }

  clearKeepAlive() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec,
      null,
      [],
      false);
  }

  addMessageToConsole(level, message) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec,
      null,
      [level, message],
      false);
  }

  executeScriptForTest(javascript, wants_result) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorker', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: InitializeGlobalScope
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeGlobalScope (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DispatchInstallEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchInstallEvent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DispatchActivateEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchActivateEvent (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DispatchBackgroundFetchAbortEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchBackgroundFetchAbortEvent (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DispatchBackgroundFetchClickEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchBackgroundFetchClickEvent (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DispatchBackgroundFetchFailEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchBackgroundFetchFailEvent (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DispatchBackgroundFetchSuccessEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchBackgroundFetchSuccessEvent (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DispatchCookieChangeEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchCookieChangeEvent (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DispatchFetchEventForMainResource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchFetchEventForMainResource (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: DispatchNotificationClickEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchNotificationClickEvent (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: DispatchNotificationCloseEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchNotificationCloseEvent (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: DispatchPushEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchPushEvent (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: DispatchPushEventRecordingNetworkRequests
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchPushEventRecordingNetworkRequests (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: DispatchPushSubscriptionChangeEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchPushSubscriptionChangeEvent (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: DispatchSyncEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchSyncEvent (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: DispatchPeriodicSyncEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchPeriodicSyncEvent (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: DispatchAbortPaymentEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchAbortPaymentEvent (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: DispatchCanMakePaymentEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchCanMakePaymentEvent (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: DispatchPaymentRequestEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchPaymentRequestEvent (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: DispatchExtendableMessageEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchExtendableMessageEvent (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: DispatchContentDeleteEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchContentDeleteEvent (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: Ping
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_Ping_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Ping (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: SetIdleDelay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIdleDelay (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: AddKeepAlive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddKeepAlive (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: ClearKeepAlive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearKeepAlive (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: AddMessageToConsole
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddMessageToConsole (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: ExecuteScriptForTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteScriptForTest (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializeGlobalScope');
          const result = this.impl.initializeGlobalScope(params.service_worker_host, params.associated_interfaces_to_browser, params.associated_interfaces_from_browser, params.registration_info, params.service_worker_info, params.fetch_handler_existence, params.ancestor_frame_type, params.storage_key);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchInstallEvent');
          const result = this.impl.dispatchInstallEvent();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchInstallEvent FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchActivateEvent');
          const result = this.impl.dispatchActivateEvent();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchActivateEvent FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchBackgroundFetchAbortEvent');
          const result = this.impl.dispatchBackgroundFetchAbortEvent(params.registration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchBackgroundFetchAbortEvent FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchBackgroundFetchClickEvent');
          const result = this.impl.dispatchBackgroundFetchClickEvent(params.registration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchBackgroundFetchClickEvent FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchBackgroundFetchFailEvent');
          const result = this.impl.dispatchBackgroundFetchFailEvent(params.registration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchBackgroundFetchFailEvent FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchBackgroundFetchSuccessEvent');
          const result = this.impl.dispatchBackgroundFetchSuccessEvent(params.registration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchBackgroundFetchSuccessEvent FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchCookieChangeEvent');
          const result = this.impl.dispatchCookieChangeEvent(params.change);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchCookieChangeEvent FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchFetchEventForMainResource');
          const result = this.impl.dispatchFetchEventForMainResource(params.params, params.response_callback);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchFetchEventForMainResource FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchNotificationClickEvent');
          const result = this.impl.dispatchNotificationClickEvent(params.notification_id, params.notification_data, params.action_index, params.reply);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchNotificationClickEvent FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchNotificationCloseEvent');
          const result = this.impl.dispatchNotificationCloseEvent(params.notification_id, params.notification_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchNotificationCloseEvent FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchPushEvent');
          const result = this.impl.dispatchPushEvent(params.payload);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchPushEvent FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchPushEventRecordingNetworkRequests');
          const result = this.impl.dispatchPushEventRecordingNetworkRequests(params.payload);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchPushEventRecordingNetworkRequests FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchPushSubscriptionChangeEvent');
          const result = this.impl.dispatchPushSubscriptionChangeEvent(params.old_subscription, params.new_subscription);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchPushSubscriptionChangeEvent FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchSyncEvent');
          const result = this.impl.dispatchSyncEvent(params.tag, params.last_chance, params.timeout);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchSyncEvent FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchPeriodicSyncEvent');
          const result = this.impl.dispatchPeriodicSyncEvent(params.tag, params.timeout);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchPeriodicSyncEvent FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchAbortPaymentEvent');
          const result = this.impl.dispatchAbortPaymentEvent(params.result_of_abort_payment);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchAbortPaymentEvent FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchCanMakePaymentEvent');
          const result = this.impl.dispatchCanMakePaymentEvent(params.event_data, params.result_of_can_make_payment);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchCanMakePaymentEvent FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchPaymentRequestEvent');
          const result = this.impl.dispatchPaymentRequestEvent(params.request_data, params.response_callback);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchPaymentRequestEvent FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchExtendableMessageEvent');
          const result = this.impl.dispatchExtendableMessageEvent(params.event);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchExtendableMessageEvent FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchContentDeleteEvent');
          const result = this.impl.dispatchContentDeleteEvent(params.id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchContentDeleteEvent FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_Ping_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.ping');
          const result = this.impl.ping();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_Ping_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Ping FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIdleDelay');
          const result = this.impl.setIdleDelay(params.delay);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addKeepAlive');
          const result = this.impl.addKeepAlive();
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearKeepAlive');
          const result = this.impl.clearKeepAlive();
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addMessageToConsole');
          const result = this.impl.addMessageToConsole(params.level, params.message);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.executeScriptForTest');
          const result = this.impl.executeScriptForTest(params.javascript, params.wants_result);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ExecuteScriptForTest FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ServiceWorkerReceiver = blink.mojom.ServiceWorkerReceiver;

blink.mojom.ServiceWorkerPtr = blink.mojom.ServiceWorkerRemote;
blink.mojom.ServiceWorkerRequest = blink.mojom.ServiceWorkerPendingReceiver;

