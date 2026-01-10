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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var content = content || {};
content.mojom = content.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var blink = blink || {};
var url = url || {};

content.mojom.NavigationClientDisconnectReasonSpec = { $: mojo.internal.Enum() };
content.mojom.DidCommitProvisionalLoadParamsSpec = { $: {} };
content.mojom.DidCommitSameDocumentNavigationParamsSpec = { $: {} };
content.mojom.CookieManagerInfoSpec = { $: {} };
content.mojom.StorageInfoSpec = { $: {} };
content.mojom.NavigationClient = {};
content.mojom.NavigationClient.$interfaceName = 'content.mojom.NavigationClient';
content.mojom.NavigationClient_CommitNavigation_ParamsSpec = { $: {} };
content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec = { $: {} };
content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec = { $: {} };
content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec = { $: {} };

// Enum: NavigationClientDisconnectReason
content.mojom.NavigationClientDisconnectReason = {
  kNoExplicitReason: 0,
  kResetForSwap: 1,
  kResetForAbort: 2,
  kResetForNewNavigation: 3,
  kResetForDuplicateNavigation: 4,
};

// Struct: DidCommitProvisionalLoadParams
mojo.internal.Struct(
    content.mojom.DidCommitProvisionalLoadParamsSpec, 'content.mojom.DidCommitProvisionalLoadParams', [
      mojo.internal.StructField('item_sequence_number', 0, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('document_sequence_number', 8, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('navigation_api_key', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('referrer', 32, 0, blink.mojom.ReferrerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transition', 40, 0, content.mojom.PageTransitionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('contents_mime_type', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('method', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('post_id', 64, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('previous_page_state', 72, 0, blink.mojom.PageStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('page_state', 80, 0, blink.mojom.PageStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 88, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initiator_base_url', 96, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('permissions_policy_header', 104, 0, mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('document_policy_header', 112, 0, mojo.internal.Map(blink.mojom.DocumentPolicyFeatureSpec.$, blink.mojom.PolicyValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('insecure_request_policy', 120, 0, blink.mojom.InsecureRequestPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('insecure_navigations_set', 128, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('navigation_token', 136, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('embedding_token', 144, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('unload_start', 152, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('unload_end', 160, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('commit_navigation_start', 168, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('commit_navigation_end', 176, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('commit_reply_sent', 184, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('http_status_code', 192, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('request_id', 196, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('should_update_history', 200, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('did_create_new_entry', 200, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('url_is_unreachable', 200, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_overriding_user_agent', 200, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('history_list_was_cleared', 200, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_potentially_trustworthy_unique_origin', 200, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 216]]);

// Struct: DidCommitSameDocumentNavigationParams
mojo.internal.Struct(
    content.mojom.DidCommitSameDocumentNavigationParamsSpec, 'content.mojom.DidCommitSameDocumentNavigationParams', [
      mojo.internal.StructField('same_document_navigation_type', 0, 0, blink.mojom.SameDocumentNavigationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_entry_screenshot_destination', 8, 0, blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('same_document_metrics_token', 16, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_client_redirect', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('started_with_transient_activation', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_replace_current_entry', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('caused_by_ad', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CookieManagerInfo
mojo.internal.Struct(
    content.mojom.CookieManagerInfoSpec, 'content.mojom.CookieManagerInfo', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie_manager', 8, 0, mojo.internal.InterfaceProxy(network.mojom.RestrictedCookieManagerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StorageInfo
mojo.internal.Struct(
    content.mojom.StorageInfoSpec, 'content.mojom.StorageInfo', [
      mojo.internal.StructField('local_storage_area', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.StorageAreaRemote), null, true, 0, undefined),
      mojo.internal.StructField('session_storage_area', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.StorageAreaRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: NavigationClient
mojo.internal.Struct(
    content.mojom.NavigationClient_CommitNavigation_ParamsSpec, 'content.mojom.NavigationClient_CommitNavigation_Params', [
      mojo.internal.StructField('common_params', 0, 0, blink.mojom.CommonNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_params', 8, 0, blink.mojom.CommitNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_head', 16, 0, network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_body', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('url_loader_client_endpoints', 32, 0, network.mojom.URLLoaderClientEndpointsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subresource_loader_factories', 40, 0, blink.mojom.URLLoaderFactoryBundleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subresource_overrides', 48, 0, mojo.internal.Array(blink.mojom.TransferrableURLLoaderSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('controller_service_worker_info', 56, 0, blink.mojom.ControllerServiceWorkerInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('container_info', 64, 0, blink.mojom.ServiceWorkerContainerInfoForClientSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subresource_proxying_loader_factory', 72, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('keep_alive_loader_factory', 80, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('fetch_later_loader_factory', 88, 0, pending_associated_remote<blink.mojom.FetchLaterLoaderFactory>Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('document_token', 96, 0, blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_navigation_token', 104, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('base_auction_nonce', 112, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('permissions_policy', 120, 0, mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('policy_container', 128, 0, blink.mojom.PolicyContainerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('code_cache_host', 136, 0, mojo.internal.InterfaceProxy(blink.mojom.CodeCacheHostRemote), null, true, 0, undefined),
      mojo.internal.StructField('code_cache_host_for_background', 144, 0, mojo.internal.InterfaceProxy(blink.mojom.CodeCacheHostRemote), null, true, 0, undefined),
      mojo.internal.StructField('cookie_manager_info', 152, 0, content.mojom.CookieManagerInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('storage_info', 160, 0, content.mojom.StorageInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 176]]);

mojo.internal.Struct(
    content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec, 'content.mojom.NavigationClient_CommitNavigation_ResponseParams', [
      mojo.internal.StructField('params', 0, 0, content.mojom.DidCommitProvisionalLoadParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interface_params', 8, 0, content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec, 'content.mojom.NavigationClient_CommitFailedNavigation_Params', [
      mojo.internal.StructField('common_params', 0, 0, blink.mojom.CommonNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_params', 8, 0, blink.mojom.CommitNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resolve_error_info', 16, 0, network.mojom.ResolveErrorInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_page_content', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('subresource_loader_factories', 32, 0, blink.mojom.URLLoaderFactoryBundleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('document_token', 40, 0, blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_navigation_token', 48, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('policy_container', 56, 0, blink.mojom.PolicyContainerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alternative_error_page_info', 64, 0, content.mojom.AlternativeErrorPageOverrideInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error_code', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('extended_error_code', 76, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_stale_copy_in_cache', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

mojo.internal.Struct(
    content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec, 'content.mojom.NavigationClient_CommitFailedNavigation_ResponseParams', [
      mojo.internal.StructField('params', 0, 0, content.mojom.DidCommitProvisionalLoadParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interface_params', 8, 0, content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

content.mojom.NavigationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.NavigationClientRemote = class {
  static get $interfaceName() {
    return 'content.mojom.NavigationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.NavigationClientPendingReceiver,
      handle);
    this.$ = new content.mojom.NavigationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.NavigationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NavigationClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  commitNavigation(common_params, request_params, response_head, response_body, url_loader_client_endpoints, subresource_loader_factories, subresource_overrides, controller_service_worker_info, container_info, subresource_proxying_loader_factory, keep_alive_loader_factory, fetch_later_loader_factory, document_token, devtools_navigation_token, base_auction_nonce, permissions_policy, policy_container, code_cache_host, code_cache_host_for_background, cookie_manager_info, storage_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.NavigationClient_CommitNavigation_ParamsSpec,
      content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec,
      [common_params, request_params, response_head, response_body, url_loader_client_endpoints, subresource_loader_factories, subresource_overrides, controller_service_worker_info, container_info, subresource_proxying_loader_factory, keep_alive_loader_factory, fetch_later_loader_factory, document_token, devtools_navigation_token, base_auction_nonce, permissions_policy, policy_container, code_cache_host, code_cache_host_for_background, cookie_manager_info, storage_info],
      false);
  }

  commitFailedNavigation(common_params, request_params, has_stale_copy_in_cache, error_code, extended_error_code, resolve_error_info, error_page_content, subresource_loader_factories, document_token, devtools_navigation_token, policy_container, alternative_error_page_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec,
      content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec,
      [common_params, request_params, has_stale_copy_in_cache, error_code, extended_error_code, resolve_error_info, error_page_content, subresource_loader_factories, document_token, devtools_navigation_token, policy_container, alternative_error_page_info],
      false);
  }

};

content.mojom.NavigationClient.getRemote = function() {
  let remote = new content.mojom.NavigationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.NavigationClient',
    'context');
  return remote.$;
};

content.mojom.NavigationClientReceiver = class {
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
             decoder.decodeStructInline(content.mojom.NavigationClient_CommitNavigation_ParamsSpec);
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
             decoder.decodeStructInline(content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec);
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
          const params = decoder.decodeStructInline(content.mojom.NavigationClient_CommitNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.commitNavigation');
          const result = this.impl.commitNavigation(params.common_params, params.request_params, params.response_head, params.response_body, params.url_loader_client_endpoints, params.subresource_loader_factories, params.subresource_overrides, params.controller_service_worker_info, params.container_info, params.subresource_proxying_loader_factory, params.keep_alive_loader_factory, params.fetch_later_loader_factory, params.document_token, params.devtools_navigation_token, params.base_auction_nonce, params.permissions_policy, params.policy_container, params.code_cache_host, params.code_cache_host_for_background, params.cookie_manager_info, params.storage_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.NavigationClient_CommitNavigation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.NavigationClient_CommitFailedNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.commitFailedNavigation');
          const result = this.impl.commitFailedNavigation(params.common_params, params.request_params, params.has_stale_copy_in_cache, params.error_code, params.extended_error_code, params.resolve_error_info, params.error_page_content, params.subresource_loader_factories, params.document_token, params.devtools_navigation_token, params.policy_container, params.alternative_error_page_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.NavigationClient_CommitFailedNavigation_ResponseParamsSpec);
               responder(response);
            });
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

content.mojom.NavigationClientReceiver = content.mojom.NavigationClientReceiver;

content.mojom.NavigationClientPtr = content.mojom.NavigationClientRemote;
content.mojom.NavigationClientRequest = content.mojom.NavigationClientPendingReceiver;

