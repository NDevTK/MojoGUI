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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.payments = mojo.internal.bindings.payments || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.FocusErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.FetchHandlerExistenceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.FocusResultSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ExtendableMessageEventSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost = {};
mojo.internal.bindings.blink.mojom.ServiceWorkerHostSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost.$interfaceName = 'blink.mojom.ServiceWorkerHost';
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorkerHost_AddRoutes_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker = {};
mojo.internal.bindings.blink.mojom.ServiceWorkerSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.ServiceWorker.$interfaceName = 'blink.mojom.ServiceWorker';
mojo.internal.bindings.blink.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_Ping_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_Ping_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParamsSpec = { $: {} };

mojo.internal.bindings.blink.mojom.kPushEventTimeoutSeconds = 90;

mojo.internal.bindings.blink.mojom.kServiceWorkerDefaultIdleDelayInSeconds = 30;

// Enum: FocusError
mojo.internal.bindings.blink.mojom.FocusError = {
  CLIENT_NOT_FOUND: 0,
  CLIENT_INACTIVE: 1,
};

// Enum: FetchHandlerExistence
mojo.internal.bindings.blink.mojom.FetchHandlerExistence = {
  UNKNOWN: 0,
  EXISTS: 1,
  DOES_NOT_EXIST: 2,
};

// Union: FocusResult
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.FocusResultSpec, 'blink.mojom.FocusResult', {
      'arg_client': {
        'ordinal': 0,
        'type': mojo.internal.bindings.blink.mojom.ServiceWorkerClientInfoSpec.$,
        'nullable': false,
      },
      'arg_error_code': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.FocusErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: ExtendableMessageEvent
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ExtendableMessageEventSpec, 'blink.mojom.ExtendableMessageEvent', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.bindings.blink.mojom.TransferableMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_info_for_client', 16, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerClientInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_source_info_for_service_worker', 24, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ServiceWorkerHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec, 'blink.mojom.ServiceWorkerHost_SetCachedMetadata_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec, 'blink.mojom.ServiceWorkerHost_ClearCachedMetadata_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec, 'blink.mojom.ServiceWorkerHost_GetClients_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerClientQueryOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_GetClients_ResponseParams', [
      mojo.internal.StructField('arg_clients', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.ServiceWorkerClientInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec, 'blink.mojom.ServiceWorkerHost_GetClient_Params', [
      mojo.internal.StructField('arg_client_uuid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_GetClient_ResponseParams', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerClientInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec, 'blink.mojom.ServiceWorkerHost_OpenNewTab_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParams', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerClientInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec, 'blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParams', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerClientInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec, 'blink.mojom.ServiceWorkerHost_PostMessageToClient_Params', [
      mojo.internal.StructField('arg_client_uuid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.bindings.blink.mojom.TransferableMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec, 'blink.mojom.ServiceWorkerHost_FocusClient_Params', [
      mojo.internal.StructField('arg_client_uuid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_FocusClient_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FocusResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec, 'blink.mojom.ServiceWorkerHost_NavigateClient_Params', [
      mojo.internal.StructField('arg_client_uuid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParams', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerClientInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec, 'blink.mojom.ServiceWorkerHost_SkipWaiting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec, 'blink.mojom.ServiceWorkerHost_ClaimClients_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec, 'blink.mojom.ServiceWorkerHost_AddRoutes_Params', [
      mojo.internal.StructField('arg_rules', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerRouterRulesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorkerHost_AddRoutes_ResponseParamsSpec, 'blink.mojom.ServiceWorkerHost_AddRoutes_ResponseParams', [
      mojo.internal.StructField('arg_is_parse_error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.ServiceWorkerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.ServiceWorkerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.ServiceWorkerHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.ServiceWorkerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setCachedMetadata(arg_url, arg_data) {
    return this.$.setCachedMetadata(arg_url, arg_data);
  }
  clearCachedMetadata(arg_url) {
    return this.$.clearCachedMetadata(arg_url);
  }
  getClients(arg_options) {
    return this.$.getClients(arg_options);
  }
  getClient(arg_client_uuid) {
    return this.$.getClient(arg_client_uuid);
  }
  openNewTab(arg_url) {
    return this.$.openNewTab(arg_url);
  }
  openPaymentHandlerWindow(arg_url) {
    return this.$.openPaymentHandlerWindow(arg_url);
  }
  postMessageToClient(arg_client_uuid, arg_message) {
    return this.$.postMessageToClient(arg_client_uuid, arg_message);
  }
  focusClient(arg_client_uuid) {
    return this.$.focusClient(arg_client_uuid);
  }
  navigateClient(arg_client_uuid, arg_url) {
    return this.$.navigateClient(arg_client_uuid, arg_url);
  }
  skipWaiting() {
    return this.$.skipWaiting();
  }
  claimClients() {
    return this.$.claimClients();
  }
  addRoutes(arg_rules) {
    return this.$.addRoutes(arg_rules);
  }
};

mojo.internal.bindings.blink.mojom.ServiceWorkerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ServiceWorkerHost', [
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

  setCachedMetadata(arg_url, arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec,
      null,
      [arg_url, arg_data],
      false);
  }

  clearCachedMetadata(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  getClients(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec,
      [arg_options],
      false);
  }

  getClient(arg_client_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec,
      [arg_client_uuid],
      false);
  }

  openNewTab(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec,
      [arg_url],
      false);
  }

  openPaymentHandlerWindow(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec,
      [arg_url],
      false);
  }

  postMessageToClient(arg_client_uuid, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec,
      null,
      [arg_client_uuid, arg_message],
      false);
  }

  focusClient(arg_client_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec,
      [arg_client_uuid],
      false);
  }

  navigateClient(arg_client_uuid, arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec,
      [arg_client_uuid, arg_url],
      false);
  }

  skipWaiting() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec,
      [],
      false);
  }

  claimClients() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec,
      [],
      false);
  }

  addRoutes(arg_rules) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorkerHost_AddRoutes_ResponseParamsSpec,
      [arg_rules],
      false);
  }

};

mojo.internal.bindings.blink.mojom.ServiceWorkerHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.ServiceWorkerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.ServiceWorkerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ServiceWorkerHost', [
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SetCachedMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCachedMetadata');
          const result = this.impl.setCachedMetadata(params.arg_url, params.arg_data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClearCachedMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearCachedMetadata');
          const result = this.impl.clearCachedMetadata(params.arg_url);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClients_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getClients');
          const result = this.impl.getClients(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClients_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetClients FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getClient');
          const result = this.impl.getClient(params.arg_client_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerHost_GetClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetClient FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenNewTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openNewTab');
          const result = this.impl.openNewTab(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenNewTab_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenNewTab FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openPaymentHandlerWindow');
          const result = this.impl.openPaymentHandlerWindow(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerHost_OpenPaymentHandlerWindow_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenPaymentHandlerWindow FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_PostMessageToClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.postMessageToClient');
          const result = this.impl.postMessageToClient(params.arg_client_uuid, params.arg_message);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_FocusClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusClient');
          const result = this.impl.focusClient(params.arg_client_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerHost_FocusClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FocusClient FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_NavigateClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.navigateClient');
          const result = this.impl.navigateClient(params.arg_client_uuid, params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerHost_NavigateClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] NavigateClient FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SkipWaiting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.skipWaiting');
          const result = this.impl.skipWaiting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerHost_SkipWaiting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SkipWaiting FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClaimClients_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.claimClients');
          const result = this.impl.claimClients();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerHost_ClaimClients_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClaimClients FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorkerHost_AddRoutes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addRoutes');
          const result = this.impl.addRoutes(params.arg_rules);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorkerHost_AddRoutes_ResponseParamsSpec, header, rawHeader);
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

mojo.internal.bindings.blink.mojom.ServiceWorkerHostReceiver = mojo.internal.bindings.blink.mojom.ServiceWorkerHostReceiver;

mojo.internal.bindings.blink.mojom.ServiceWorkerHostPtr = mojo.internal.bindings.blink.mojom.ServiceWorkerHostRemote;
mojo.internal.bindings.blink.mojom.ServiceWorkerHostRequest = mojo.internal.bindings.blink.mojom.ServiceWorkerHostPendingReceiver;


// Interface: ServiceWorker
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec, 'blink.mojom.ServiceWorker_InitializeGlobalScope_Params', [
      mojo.internal.StructField('arg_service_worker_host', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.ServiceWorkerHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_associated_interfaces_to_browser', 8, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.AssociatedInterfaceProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_associated_interfaces_from_browser', 16, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.AssociatedInterfaceProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_registration_info', 24, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerRegistrationObjectInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_service_worker_info', 32, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerObjectInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fetch_handler_existence', 40, 0, mojo.internal.bindings.blink.mojom.FetchHandlerExistenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ancestor_frame_type', 48, 0, mojo.internal.bindings.blink.mojom.AncestorFrameTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage_key', 56, 0, mojo.internal.bindings.blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchInstallEvent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fetch_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchActivateEvent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_Params', [
      mojo.internal.StructField('arg_registration', 0, 0, mojo.internal.bindings.blink.mojom.BackgroundFetchRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_Params', [
      mojo.internal.StructField('arg_registration', 0, 0, mojo.internal.bindings.blink.mojom.BackgroundFetchRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_Params', [
      mojo.internal.StructField('arg_registration', 0, 0, mojo.internal.bindings.blink.mojom.BackgroundFetchRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_Params', [
      mojo.internal.StructField('arg_registration', 0, 0, mojo.internal.bindings.blink.mojom.BackgroundFetchRegistrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchCookieChangeEvent_Params', [
      mojo.internal.StructField('arg_change', 0, 0, mojo.internal.bindings.network.mojom.CookieChangeInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.blink.mojom.DispatchFetchEventParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_callback', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.ServiceWorkerFetchResponseCallbackRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchNotificationClickEvent_Params', [
      mojo.internal.StructField('arg_notification_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_notification_data', 8, 0, mojo.internal.bindings.blink.mojom.NotificationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reply', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_action_index', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_Params', [
      mojo.internal.StructField('arg_notification_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_notification_data', 8, 0, mojo.internal.bindings.blink.mojom.NotificationDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchPushEvent_Params', [
      mojo.internal.StructField('arg_payload', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_Params', [
      mojo.internal.StructField('arg_payload', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_requested_urls', 8, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_Params', [
      mojo.internal.StructField('arg_old_subscription', 0, 0, mojo.internal.bindings.blink.mojom.PushSubscriptionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_new_subscription', 8, 0, mojo.internal.bindings.blink.mojom.PushSubscriptionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchSyncEvent_Params', [
      mojo.internal.StructField('arg_tag', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_timeout', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_chance', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_Params', [
      mojo.internal.StructField('arg_tag', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_timeout', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_Params', [
      mojo.internal.StructField('arg_result_of_abort_payment', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.payments.mojom.PaymentHandlerResponseCallbackRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_Params', [
      mojo.internal.StructField('arg_event_data', 0, 0, mojo.internal.bindings.payments.mojom.CanMakePaymentEventDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_result_of_can_make_payment', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.payments.mojom.PaymentHandlerResponseCallbackRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_Params', [
      mojo.internal.StructField('arg_request_data', 0, 0, mojo.internal.bindings.payments.mojom.PaymentRequestEventDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_callback', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.payments.mojom.PaymentHandlerResponseCallbackRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.blink.mojom.ExtendableMessageEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec, 'blink.mojom.ServiceWorker_DispatchContentDeleteEvent_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec, 'blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_Ping_ParamsSpec, 'blink.mojom.ServiceWorker_Ping_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_Ping_ResponseParamsSpec, 'blink.mojom.ServiceWorker_Ping_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec, 'blink.mojom.ServiceWorker_SetIdleDelay_Params', [
      mojo.internal.StructField('arg_delay', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec, 'blink.mojom.ServiceWorker_AddKeepAlive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec, 'blink.mojom.ServiceWorker_ClearKeepAlive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec, 'blink.mojom.ServiceWorker_AddMessageToConsole_Params', [
      mojo.internal.StructField('arg_level', 0, 0, mojo.internal.bindings.blink.mojom.ConsoleMessageLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec, 'blink.mojom.ServiceWorker_ExecuteScriptForTest_Params', [
      mojo.internal.StructField('arg_javascript', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_wants_result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParamsSpec, 'blink.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.ServiceWorkerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.ServiceWorkerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.ServiceWorkerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.ServiceWorkerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initializeGlobalScope(arg_service_worker_host, arg_associated_interfaces_to_browser, arg_associated_interfaces_from_browser, arg_registration_info, arg_service_worker_info, arg_fetch_handler_existence, arg_ancestor_frame_type, arg_storage_key) {
    return this.$.initializeGlobalScope(arg_service_worker_host, arg_associated_interfaces_to_browser, arg_associated_interfaces_from_browser, arg_registration_info, arg_service_worker_info, arg_fetch_handler_existence, arg_ancestor_frame_type, arg_storage_key);
  }
  dispatchInstallEvent() {
    return this.$.dispatchInstallEvent();
  }
  dispatchActivateEvent() {
    return this.$.dispatchActivateEvent();
  }
  dispatchBackgroundFetchAbortEvent(arg_registration) {
    return this.$.dispatchBackgroundFetchAbortEvent(arg_registration);
  }
  dispatchBackgroundFetchClickEvent(arg_registration) {
    return this.$.dispatchBackgroundFetchClickEvent(arg_registration);
  }
  dispatchBackgroundFetchFailEvent(arg_registration) {
    return this.$.dispatchBackgroundFetchFailEvent(arg_registration);
  }
  dispatchBackgroundFetchSuccessEvent(arg_registration) {
    return this.$.dispatchBackgroundFetchSuccessEvent(arg_registration);
  }
  dispatchCookieChangeEvent(arg_change) {
    return this.$.dispatchCookieChangeEvent(arg_change);
  }
  dispatchFetchEventForMainResource(arg_params, arg_response_callback) {
    return this.$.dispatchFetchEventForMainResource(arg_params, arg_response_callback);
  }
  dispatchNotificationClickEvent(arg_notification_id, arg_notification_data, arg_action_index, arg_reply) {
    return this.$.dispatchNotificationClickEvent(arg_notification_id, arg_notification_data, arg_action_index, arg_reply);
  }
  dispatchNotificationCloseEvent(arg_notification_id, arg_notification_data) {
    return this.$.dispatchNotificationCloseEvent(arg_notification_id, arg_notification_data);
  }
  dispatchPushEvent(arg_payload) {
    return this.$.dispatchPushEvent(arg_payload);
  }
  dispatchPushEventRecordingNetworkRequests(arg_payload) {
    return this.$.dispatchPushEventRecordingNetworkRequests(arg_payload);
  }
  dispatchPushSubscriptionChangeEvent(arg_old_subscription, arg_new_subscription) {
    return this.$.dispatchPushSubscriptionChangeEvent(arg_old_subscription, arg_new_subscription);
  }
  dispatchSyncEvent(arg_tag, arg_last_chance, arg_timeout) {
    return this.$.dispatchSyncEvent(arg_tag, arg_last_chance, arg_timeout);
  }
  dispatchPeriodicSyncEvent(arg_tag, arg_timeout) {
    return this.$.dispatchPeriodicSyncEvent(arg_tag, arg_timeout);
  }
  dispatchAbortPaymentEvent(arg_result_of_abort_payment) {
    return this.$.dispatchAbortPaymentEvent(arg_result_of_abort_payment);
  }
  dispatchCanMakePaymentEvent(arg_event_data, arg_result_of_can_make_payment) {
    return this.$.dispatchCanMakePaymentEvent(arg_event_data, arg_result_of_can_make_payment);
  }
  dispatchPaymentRequestEvent(arg_request_data, arg_response_callback) {
    return this.$.dispatchPaymentRequestEvent(arg_request_data, arg_response_callback);
  }
  dispatchExtendableMessageEvent(arg_event) {
    return this.$.dispatchExtendableMessageEvent(arg_event);
  }
  dispatchContentDeleteEvent(arg_id) {
    return this.$.dispatchContentDeleteEvent(arg_id);
  }
  ping() {
    return this.$.ping();
  }
  setIdleDelay(arg_delay) {
    return this.$.setIdleDelay(arg_delay);
  }
  addKeepAlive() {
    return this.$.addKeepAlive();
  }
  clearKeepAlive() {
    return this.$.clearKeepAlive();
  }
  addMessageToConsole(arg_level, arg_message) {
    return this.$.addMessageToConsole(arg_level, arg_message);
  }
  executeScriptForTest(arg_javascript, arg_wants_result) {
    return this.$.executeScriptForTest(arg_javascript, arg_wants_result);
  }
};

mojo.internal.bindings.blink.mojom.ServiceWorkerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ServiceWorker', [
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

  initializeGlobalScope(arg_service_worker_host, arg_associated_interfaces_to_browser, arg_associated_interfaces_from_browser, arg_registration_info, arg_service_worker_info, arg_fetch_handler_existence, arg_ancestor_frame_type, arg_storage_key) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec,
      null,
      [arg_service_worker_host, arg_associated_interfaces_to_browser, arg_associated_interfaces_from_browser, arg_registration_info, arg_service_worker_info, arg_fetch_handler_existence, arg_ancestor_frame_type, arg_storage_key],
      false);
  }

  dispatchInstallEvent() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec,
      [],
      false);
  }

  dispatchActivateEvent() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec,
      [],
      false);
  }

  dispatchBackgroundFetchAbortEvent(arg_registration) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec,
      [arg_registration],
      false);
  }

  dispatchBackgroundFetchClickEvent(arg_registration) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec,
      [arg_registration],
      false);
  }

  dispatchBackgroundFetchFailEvent(arg_registration) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec,
      [arg_registration],
      false);
  }

  dispatchBackgroundFetchSuccessEvent(arg_registration) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec,
      [arg_registration],
      false);
  }

  dispatchCookieChangeEvent(arg_change) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec,
      [arg_change],
      false);
  }

  dispatchFetchEventForMainResource(arg_params, arg_response_callback) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec,
      [arg_params, arg_response_callback],
      false);
  }

  dispatchNotificationClickEvent(arg_notification_id, arg_notification_data, arg_action_index, arg_reply) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec,
      [arg_notification_id, arg_notification_data, arg_action_index, arg_reply],
      false);
  }

  dispatchNotificationCloseEvent(arg_notification_id, arg_notification_data) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec,
      [arg_notification_id, arg_notification_data],
      false);
  }

  dispatchPushEvent(arg_payload) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec,
      [arg_payload],
      false);
  }

  dispatchPushEventRecordingNetworkRequests(arg_payload) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec,
      [arg_payload],
      false);
  }

  dispatchPushSubscriptionChangeEvent(arg_old_subscription, arg_new_subscription) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec,
      [arg_old_subscription, arg_new_subscription],
      false);
  }

  dispatchSyncEvent(arg_tag, arg_last_chance, arg_timeout) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec,
      [arg_tag, arg_last_chance, arg_timeout],
      false);
  }

  dispatchPeriodicSyncEvent(arg_tag, arg_timeout) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec,
      [arg_tag, arg_timeout],
      false);
  }

  dispatchAbortPaymentEvent(arg_result_of_abort_payment) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec,
      [arg_result_of_abort_payment],
      false);
  }

  dispatchCanMakePaymentEvent(arg_event_data, arg_result_of_can_make_payment) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec,
      [arg_event_data, arg_result_of_can_make_payment],
      false);
  }

  dispatchPaymentRequestEvent(arg_request_data, arg_response_callback) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec,
      [arg_request_data, arg_response_callback],
      false);
  }

  dispatchExtendableMessageEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec,
      [arg_event],
      false);
  }

  dispatchContentDeleteEvent(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec,
      [arg_id],
      false);
  }

  ping() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_Ping_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_Ping_ResponseParamsSpec,
      [],
      false);
  }

  setIdleDelay(arg_delay) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec,
      null,
      [arg_delay],
      false);
  }

  addKeepAlive() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec,
      null,
      [],
      false);
  }

  clearKeepAlive() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec,
      null,
      [],
      false);
  }

  addMessageToConsole(arg_level, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec,
      null,
      [arg_level, arg_message],
      false);
  }

  executeScriptForTest(arg_javascript, arg_wants_result) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.blink.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec,
      mojo.internal.bindings.blink.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParamsSpec,
      [arg_javascript, arg_wants_result],
      false);
  }

};

mojo.internal.bindings.blink.mojom.ServiceWorker.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.ServiceWorkerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorker',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.ServiceWorkerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ServiceWorker', [
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_Ping_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_InitializeGlobalScope_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializeGlobalScope');
          const result = this.impl.initializeGlobalScope(params.arg_service_worker_host, params.arg_associated_interfaces_to_browser, params.arg_associated_interfaces_from_browser, params.arg_registration_info, params.arg_service_worker_info, params.arg_fetch_handler_existence, params.arg_ancestor_frame_type, params.arg_storage_key);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchInstallEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchInstallEvent');
          const result = this.impl.dispatchInstallEvent();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchInstallEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchInstallEvent FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchActivateEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchActivateEvent');
          const result = this.impl.dispatchActivateEvent();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchActivateEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchActivateEvent FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchBackgroundFetchAbortEvent');
          const result = this.impl.dispatchBackgroundFetchAbortEvent(params.arg_registration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchAbortEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchBackgroundFetchAbortEvent FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchBackgroundFetchClickEvent');
          const result = this.impl.dispatchBackgroundFetchClickEvent(params.arg_registration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchClickEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchBackgroundFetchClickEvent FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchBackgroundFetchFailEvent');
          const result = this.impl.dispatchBackgroundFetchFailEvent(params.arg_registration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchFailEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchBackgroundFetchFailEvent FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchBackgroundFetchSuccessEvent');
          const result = this.impl.dispatchBackgroundFetchSuccessEvent(params.arg_registration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchBackgroundFetchSuccessEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchBackgroundFetchSuccessEvent FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchCookieChangeEvent');
          const result = this.impl.dispatchCookieChangeEvent(params.arg_change);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCookieChangeEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchCookieChangeEvent FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchFetchEventForMainResource');
          const result = this.impl.dispatchFetchEventForMainResource(params.arg_params, params.arg_response_callback);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchFetchEventForMainResource_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchFetchEventForMainResource FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchNotificationClickEvent');
          const result = this.impl.dispatchNotificationClickEvent(params.arg_notification_id, params.arg_notification_data, params.arg_action_index, params.arg_reply);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationClickEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchNotificationClickEvent FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchNotificationCloseEvent');
          const result = this.impl.dispatchNotificationCloseEvent(params.arg_notification_id, params.arg_notification_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchNotificationCloseEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchNotificationCloseEvent FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchPushEvent');
          const result = this.impl.dispatchPushEvent(params.arg_payload);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchPushEvent FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchPushEventRecordingNetworkRequests');
          const result = this.impl.dispatchPushEventRecordingNetworkRequests(params.arg_payload);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushEventRecordingNetworkRequests_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchPushEventRecordingNetworkRequests FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchPushSubscriptionChangeEvent');
          const result = this.impl.dispatchPushSubscriptionChangeEvent(params.arg_old_subscription, params.arg_new_subscription);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPushSubscriptionChangeEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchPushSubscriptionChangeEvent FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchSyncEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchSyncEvent');
          const result = this.impl.dispatchSyncEvent(params.arg_tag, params.arg_last_chance, params.arg_timeout);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchSyncEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchSyncEvent FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchPeriodicSyncEvent');
          const result = this.impl.dispatchPeriodicSyncEvent(params.arg_tag, params.arg_timeout);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPeriodicSyncEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchPeriodicSyncEvent FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchAbortPaymentEvent');
          const result = this.impl.dispatchAbortPaymentEvent(params.arg_result_of_abort_payment);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchAbortPaymentEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchAbortPaymentEvent FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchCanMakePaymentEvent');
          const result = this.impl.dispatchCanMakePaymentEvent(params.arg_event_data, params.arg_result_of_can_make_payment);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchCanMakePaymentEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchCanMakePaymentEvent FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchPaymentRequestEvent');
          const result = this.impl.dispatchPaymentRequestEvent(params.arg_request_data, params.arg_response_callback);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchPaymentRequestEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchPaymentRequestEvent FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchExtendableMessageEvent');
          const result = this.impl.dispatchExtendableMessageEvent(params.arg_event);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchExtendableMessageEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchExtendableMessageEvent FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchContentDeleteEvent');
          const result = this.impl.dispatchContentDeleteEvent(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_DispatchContentDeleteEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchContentDeleteEvent FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_Ping_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.ping');
          const result = this.impl.ping();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_Ping_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Ping FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_SetIdleDelay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIdleDelay');
          const result = this.impl.setIdleDelay(params.arg_delay);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_AddKeepAlive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addKeepAlive');
          const result = this.impl.addKeepAlive();
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_ClearKeepAlive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearKeepAlive');
          const result = this.impl.clearKeepAlive();
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_AddMessageToConsole_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addMessageToConsole');
          const result = this.impl.addMessageToConsole(params.arg_level, params.arg_message);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ServiceWorker_ExecuteScriptForTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.executeScriptForTest');
          const result = this.impl.executeScriptForTest(params.arg_javascript, params.arg_wants_result);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.ServiceWorker_ExecuteScriptForTest_ResponseParamsSpec, header, rawHeader);
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

mojo.internal.bindings.blink.mojom.ServiceWorkerReceiver = mojo.internal.bindings.blink.mojom.ServiceWorkerReceiver;

mojo.internal.bindings.blink.mojom.ServiceWorkerPtr = mojo.internal.bindings.blink.mojom.ServiceWorkerRemote;
mojo.internal.bindings.blink.mojom.ServiceWorkerRequest = mojo.internal.bindings.blink.mojom.ServiceWorkerPendingReceiver;

