// Auto-generated MojoJS binding
 // Source: chromium_src/content/common/navigation_client.mojom
 // Module: content.mojom

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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.content = mojo.internal.bindings.content || {};
mojo.internal.bindings.content.mojom = mojo.internal.bindings.content.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.content.mojom.NavigationClientDisconnectReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.content.mojom.DidCommitProvisionalLoadParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.DidCommitSameDocumentNavigationParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.CookieManagerInfoSpec = { $: {} };
mojo.internal.bindings.content.mojom.StorageInfoSpec = { $: {} };
mojo.internal.bindings.content.mojom.NavigationClient = {};
mojo.internal.bindings.content.mojom.NavigationClient.$interfaceName = 'content.mojom.NavigationClient';
mojo.internal.bindings.content.mojom.NavigationClient_CommitNavigation_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec = { $: {} };

// Enum: NavigationClientDisconnectReason
mojo.internal.bindings.content.mojom.NavigationClientDisconnectReason = {
  kNoExplicitReason: 0,
  kResetForSwap: 1,
  kResetForAbort: 2,
  kResetForNewNavigation: 3,
  kResetForDuplicateNavigation: 4,
};

// Struct: DidCommitProvisionalLoadParams
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.DidCommitProvisionalLoadParamsSpec, 'content.mojom.DidCommitProvisionalLoadParams', [
      mojo.internal.StructField('arg_item_sequence_number', 0, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('arg_document_sequence_number', 8, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('arg_navigation_api_key', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_referrer', 32, 0, mojo.internal.bindings.blink.mojom.ReferrerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_transition', 40, 0, mojo.internal.bindings.content.mojom.PageTransitionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_contents_mime_type', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_method', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_post_id', 64, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_previous_page_state', 72, 0, mojo.internal.bindings.blink.mojom.PageStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_page_state', 80, 0, mojo.internal.bindings.blink.mojom.PageStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 88, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_initiator_base_url', 96, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_permissions_policy_header', 104, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_document_policy_header', 112, 0, mojo.internal.Map(mojo.internal.bindings.blink.mojom.DocumentPolicyFeatureSpec.$, mojo.internal.bindings.blink.mojom.PolicyValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_insecure_request_policy', 120, 0, mojo.internal.bindings.blink.mojom.InsecureRequestPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_insecure_navigations_set', 128, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_navigation_token', 136, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_embedding_token', 144, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_unload_start', 152, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_unload_end', 160, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_commit_navigation_start', 168, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_commit_navigation_end', 176, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_commit_reply_sent', 184, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_http_status_code', 192, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_request_id', 196, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_should_update_history', 200, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_did_create_new_entry', 200, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_url_is_unreachable', 200, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_overriding_user_agent', 200, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_history_list_was_cleared', 200, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_potentially_trustworthy_unique_origin', 200, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 216]]);

// Struct: DidCommitSameDocumentNavigationParams
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.DidCommitSameDocumentNavigationParamsSpec, 'content.mojom.DidCommitSameDocumentNavigationParams', [
      mojo.internal.StructField('arg_same_document_navigation_type', 0, 0, mojo.internal.bindings.blink.mojom.SameDocumentNavigationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_navigation_entry_screenshot_destination', 8, 0, mojo.internal.bindings.blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_same_document_metrics_token', 16, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_client_redirect', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_started_with_transient_activation', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_should_replace_current_entry', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_caused_by_ad', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CookieManagerInfo
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.CookieManagerInfoSpec, 'content.mojom.CookieManagerInfo', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_manager', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.RestrictedCookieManagerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StorageInfo
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.StorageInfoSpec, 'content.mojom.StorageInfo', [
      mojo.internal.StructField('arg_local_storage_area', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.StorageAreaRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_session_storage_area', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.StorageAreaRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: NavigationClient
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.NavigationClient_CommitNavigation_ParamsSpec, 'content.mojom.NavigationClient_CommitNavigation_Params', [
      mojo.internal.StructField('arg_common_params', 0, 0, mojo.internal.bindings.blink.mojom.CommonNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_params', 8, 0, mojo.internal.bindings.blink.mojom.CommitNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_head', 16, 0, mojo.internal.bindings.network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_body', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('arg_url_loader_client_endpoints', 32, 0, mojo.internal.bindings.network.mojom.URLLoaderClientEndpointsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_subresource_loader_factories', 40, 0, mojo.internal.bindings.blink.mojom.URLLoaderFactoryBundleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_subresource_overrides', 48, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.TransferrableURLLoaderSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_controller_service_worker_info', 56, 0, mojo.internal.bindings.blink.mojom.ControllerServiceWorkerInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_container_info', 64, 0, mojo.internal.bindings.blink.mojom.ServiceWorkerContainerInfoForClientSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_subresource_proxying_loader_factory', 72, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_keep_alive_loader_factory', 80, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_fetch_later_loader_factory', 88, 0, mojo.internal.bindings.pending_associated_remote<blink.mojom.FetchLaterLoaderFactory>Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_document_token', 96, 0, mojo.internal.bindings.blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_navigation_token', 104, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_base_auction_nonce', 112, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_permissions_policy', 120, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_policy_container', 128, 0, mojo.internal.bindings.blink.mojom.PolicyContainerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_code_cache_host', 136, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.CodeCacheHostRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_code_cache_host_for_background', 144, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.CodeCacheHostRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_manager_info', 152, 0, mojo.internal.bindings.mojo.internal.bindings.content.mojom.CookieManagerInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_storage_info', 160, 0, mojo.internal.bindings.mojo.internal.bindings.content.mojom.StorageInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 176]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec, 'content.mojom.NavigationClient_CommitNavigation_ResponseParams', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.mojo.internal.bindings.content.mojom.DidCommitProvisionalLoadParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_interface_params', 8, 0, mojo.internal.bindings.content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec, 'content.mojom.NavigationClient_CommitFailedNavigation_Params', [
      mojo.internal.StructField('arg_common_params', 0, 0, mojo.internal.bindings.blink.mojom.CommonNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_params', 8, 0, mojo.internal.bindings.blink.mojom.CommitNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_resolve_error_info', 16, 0, mojo.internal.bindings.network.mojom.ResolveErrorInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_page_content', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_subresource_loader_factories', 32, 0, mojo.internal.bindings.blink.mojom.URLLoaderFactoryBundleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_document_token', 40, 0, mojo.internal.bindings.blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_navigation_token', 48, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_container', 56, 0, mojo.internal.bindings.blink.mojom.PolicyContainerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_alternative_error_page_info', 64, 0, mojo.internal.bindings.content.mojom.AlternativeErrorPageOverrideInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_error_code', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_extended_error_code', 76, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_stale_copy_in_cache', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec, 'content.mojom.NavigationClient_CommitFailedNavigation_ResponseParams', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.mojo.internal.bindings.content.mojom.DidCommitProvisionalLoadParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_interface_params', 8, 0, mojo.internal.bindings.content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.content.mojom.NavigationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.content.mojom.NavigationClientRemote = class {
  static get $interfaceName() {
    return 'content.mojom.NavigationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.content.mojom.NavigationClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.content.mojom.NavigationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  commitNavigation(arg_common_params, arg_request_params, arg_response_head, arg_response_body, arg_url_loader_client_endpoints, arg_subresource_loader_factories, arg_subresource_overrides, arg_controller_service_worker_info, arg_container_info, arg_subresource_proxying_loader_factory, arg_keep_alive_loader_factory, arg_fetch_later_loader_factory, arg_document_token, arg_devtools_navigation_token, arg_base_auction_nonce, arg_permissions_policy, arg_policy_container, arg_code_cache_host, arg_code_cache_host_for_background, arg_cookie_manager_info, arg_storage_info) {
    return this.$.commitNavigation(arg_common_params, arg_request_params, arg_response_head, arg_response_body, arg_url_loader_client_endpoints, arg_subresource_loader_factories, arg_subresource_overrides, arg_controller_service_worker_info, arg_container_info, arg_subresource_proxying_loader_factory, arg_keep_alive_loader_factory, arg_fetch_later_loader_factory, arg_document_token, arg_devtools_navigation_token, arg_base_auction_nonce, arg_permissions_policy, arg_policy_container, arg_code_cache_host, arg_code_cache_host_for_background, arg_cookie_manager_info, arg_storage_info);
  }
  commitFailedNavigation(arg_common_params, arg_request_params, arg_has_stale_copy_in_cache, arg_error_code, arg_extended_error_code, arg_resolve_error_info, arg_error_page_content, arg_subresource_loader_factories, arg_document_token, arg_devtools_navigation_token, arg_policy_container, arg_alternative_error_page_info) {
    return this.$.commitFailedNavigation(arg_common_params, arg_request_params, arg_has_stale_copy_in_cache, arg_error_code, arg_extended_error_code, arg_resolve_error_info, arg_error_page_content, arg_subresource_loader_factories, arg_document_token, arg_devtools_navigation_token, arg_policy_container, arg_alternative_error_page_info);
  }
};

mojo.internal.bindings.content.mojom.NavigationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NavigationClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  commitNavigation(arg_common_params, arg_request_params, arg_response_head, arg_response_body, arg_url_loader_client_endpoints, arg_subresource_loader_factories, arg_subresource_overrides, arg_controller_service_worker_info, arg_container_info, arg_subresource_proxying_loader_factory, arg_keep_alive_loader_factory, arg_fetch_later_loader_factory, arg_document_token, arg_devtools_navigation_token, arg_base_auction_nonce, arg_permissions_policy, arg_policy_container, arg_code_cache_host, arg_code_cache_host_for_background, arg_cookie_manager_info, arg_storage_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.content.mojom.NavigationClient_CommitNavigation_ParamsSpec,
      mojo.internal.bindings.content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec,
      [arg_common_params, arg_request_params, arg_response_head, arg_response_body, arg_url_loader_client_endpoints, arg_subresource_loader_factories, arg_subresource_overrides, arg_controller_service_worker_info, arg_container_info, arg_subresource_proxying_loader_factory, arg_keep_alive_loader_factory, arg_fetch_later_loader_factory, arg_document_token, arg_devtools_navigation_token, arg_base_auction_nonce, arg_permissions_policy, arg_policy_container, arg_code_cache_host, arg_code_cache_host_for_background, arg_cookie_manager_info, arg_storage_info],
      false);
  }

  commitFailedNavigation(arg_common_params, arg_request_params, arg_has_stale_copy_in_cache, arg_error_code, arg_extended_error_code, arg_resolve_error_info, arg_error_page_content, arg_subresource_loader_factories, arg_document_token, arg_devtools_navigation_token, arg_policy_container, arg_alternative_error_page_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec,
      mojo.internal.bindings.content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec,
      [arg_common_params, arg_request_params, arg_has_stale_copy_in_cache, arg_error_code, arg_extended_error_code, arg_resolve_error_info, arg_error_page_content, arg_subresource_loader_factories, arg_document_token, arg_devtools_navigation_token, arg_policy_container, arg_alternative_error_page_info],
      false);
  }

};

mojo.internal.bindings.content.mojom.NavigationClient.getRemote = function() {
  let remote = new mojo.internal.bindings.content.mojom.NavigationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.NavigationClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.content.mojom.NavigationClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NavigationClient', [
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
        
        // Try Method 0: CommitNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.NavigationClient_CommitNavigation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommitNavigation (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CommitFailedNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommitFailedNavigation (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.NavigationClient_CommitNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.commitNavigation');
          const result = this.impl.commitNavigation(params.arg_common_params, params.arg_request_params, params.arg_response_head, params.arg_response_body, params.arg_url_loader_client_endpoints, params.arg_subresource_loader_factories, params.arg_subresource_overrides, params.arg_controller_service_worker_info, params.arg_container_info, params.arg_subresource_proxying_loader_factory, params.arg_keep_alive_loader_factory, params.arg_fetch_later_loader_factory, params.arg_document_token, params.arg_devtools_navigation_token, params.arg_base_auction_nonce, params.arg_permissions_policy, params.arg_policy_container, params.arg_code_cache_host, params.arg_code_cache_host_for_background, params.arg_cookie_manager_info, params.arg_storage_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CommitNavigation FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.commitFailedNavigation');
          const result = this.impl.commitFailedNavigation(params.arg_common_params, params.arg_request_params, params.arg_has_stale_copy_in_cache, params.arg_error_code, params.arg_extended_error_code, params.arg_resolve_error_info, params.arg_error_page_content, params.arg_subresource_loader_factories, params.arg_document_token, params.arg_devtools_navigation_token, params.arg_policy_container, params.arg_alternative_error_page_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CommitFailedNavigation FAILED:', e));
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

mojo.internal.bindings.content.mojom.NavigationClientReceiver = mojo.internal.bindings.content.mojom.NavigationClientReceiver;

mojo.internal.bindings.content.mojom.NavigationClientPtr = mojo.internal.bindings.content.mojom.NavigationClientRemote;
mojo.internal.bindings.content.mojom.NavigationClientRequest = mojo.internal.bindings.content.mojom.NavigationClientPendingReceiver;

