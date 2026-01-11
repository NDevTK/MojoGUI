// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/feed_internals/feed_internals.mojom
 // Module: feed_internals.mojom

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
 

 mojo.internal.bindings.feed_internals = mojo.internal.bindings.feed_internals || {};
mojo.internal.bindings.feed_internals.mojom = mojo.internal.bindings.feed_internals.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.feed_internals.mojom.FeedOrderSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.feed_internals.mojom.PropertiesSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.LastFetchPropertiesSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler = {};
mojo.internal.bindings.feed_internals.mojom.PageHandler.$interfaceName = 'feed_internals.mojom.PageHandler';
mojo.internal.bindings.feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedHistograms_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec = { $: {} };
mojo.internal.bindings.feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec = { $: {} };

// Enum: FeedOrder
mojo.internal.bindings.feed_internals.mojom.FeedOrder = {
  kUnspecified: 0,
  kGrouped: 1,
  kReverseChron: 2,
};

// Struct: Properties
mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PropertiesSpec, 'feed_internals.mojom.Properties', [
      mojo.internal.StructField('arg_load_stream_status', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_feed_fetch_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_feed_actions_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_following_feed_order', 24, 0, mojo.internal.bindings.feed_internals.mojom.FeedOrderSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_feed_enabled', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_feed_visible', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_feed_allowed', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_prefetching_enabled', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_web_feed_follow_intro_debug_enabled', 32, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_use_feed_query_requests', 32, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: LastFetchProperties
mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.LastFetchPropertiesSpec, 'feed_internals.mojom.LastFetchProperties', [
      mojo.internal.StructField('arg_last_fetch_trigger', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_fetch_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_refresh_suppress_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_bless_nonce', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_action_upload_time', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_fetch_status', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_last_action_upload_status', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec, 'feed_internals.mojom.PageHandler_GetGeneralProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParamsSpec, 'feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParams', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.feed_internals.mojom.PropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec, 'feed_internals.mojom.PageHandler_GetLastFetchProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParamsSpec, 'feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParams', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.feed_internals.mojom.LastFetchPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec, 'feed_internals.mojom.PageHandler_RefreshForYouFeed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec, 'feed_internals.mojom.PageHandler_RefreshFollowingFeed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec, 'feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec, 'feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ResponseParamsSpec, 'feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ResponseParams', [
      mojo.internal.StructField('arg_dump', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec, 'feed_internals.mojom.PageHandler_GetFeedHistograms_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedHistograms_ResponseParamsSpec, 'feed_internals.mojom.PageHandler_GetFeedHistograms_ResponseParams', [
      mojo.internal.StructField('arg_log', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec, 'feed_internals.mojom.PageHandler_OverrideFeedHost_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec, 'feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_Params', [
      mojo.internal.StructField('arg_endpoint_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec, 'feed_internals.mojom.PageHandler_OverrideFeedStreamData_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec, 'feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec, 'feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_Params', [
      mojo.internal.StructField('arg_use_legacy', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec, 'feed_internals.mojom.PageHandler_SetFollowingFeedOrder_Params', [
      mojo.internal.StructField('arg_order', 0, 0, mojo.internal.bindings.feed_internals.mojom.FeedOrderSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.feed_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.feed_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'feed_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.feed_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.feed_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getGeneralProperties() {
    return this.$.getGeneralProperties();
  }
  getLastFetchProperties() {
    return this.$.getLastFetchProperties();
  }
  refreshForYouFeed() {
    return this.$.refreshForYouFeed();
  }
  refreshFollowingFeed() {
    return this.$.refreshFollowingFeed();
  }
  refreshWebFeedSuggestions() {
    return this.$.refreshWebFeedSuggestions();
  }
  getFeedProcessScopeDump() {
    return this.$.getFeedProcessScopeDump();
  }
  getFeedHistograms() {
    return this.$.getFeedHistograms();
  }
  overrideFeedHost(arg_host) {
    return this.$.overrideFeedHost(arg_host);
  }
  overrideDiscoverApiEndpoint(arg_endpoint_url) {
    return this.$.overrideDiscoverApiEndpoint(arg_endpoint_url);
  }
  overrideFeedStreamData(arg_data) {
    return this.$.overrideFeedStreamData(arg_data);
  }
  setWebFeedFollowIntroDebugEnabled(arg_enabled) {
    return this.$.setWebFeedFollowIntroDebugEnabled(arg_enabled);
  }
  setUseFeedQueryRequests(arg_use_legacy) {
    return this.$.setUseFeedQueryRequests(arg_use_legacy);
  }
  setFollowingFeedOrder(arg_order) {
    return this.$.setFollowingFeedOrder(arg_order);
  }
};

mojo.internal.bindings.feed_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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

  getGeneralProperties() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec,
      mojo.internal.bindings.feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParamsSpec,
      [],
      false);
  }

  getLastFetchProperties() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec,
      mojo.internal.bindings.feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParamsSpec,
      [],
      false);
  }

  refreshForYouFeed() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec,
      null,
      [],
      false);
  }

  refreshFollowingFeed() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec,
      null,
      [],
      false);
  }

  refreshWebFeedSuggestions() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec,
      null,
      [],
      false);
  }

  getFeedProcessScopeDump() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec,
      mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ResponseParamsSpec,
      [],
      false);
  }

  getFeedHistograms() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec,
      mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedHistograms_ResponseParamsSpec,
      [],
      false);
  }

  overrideFeedHost(arg_host) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec,
      null,
      [arg_host],
      false);
  }

  overrideDiscoverApiEndpoint(arg_endpoint_url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec,
      null,
      [arg_endpoint_url],
      false);
  }

  overrideFeedStreamData(arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec,
      null,
      [arg_data],
      false);
  }

  setWebFeedFollowIntroDebugEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setUseFeedQueryRequests(arg_use_legacy) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec,
      null,
      [arg_use_legacy],
      false);
  }

  setFollowingFeedOrder(arg_order) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec,
      null,
      [arg_order],
      false);
  }

};

mojo.internal.bindings.feed_internals.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.feed_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'feed_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.feed_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        
        // Try Method 0: GetGeneralProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGeneralProperties (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetLastFetchProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLastFetchProperties (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RefreshForYouFeed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshForYouFeed (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RefreshFollowingFeed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshFollowingFeed (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RefreshWebFeedSuggestions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshWebFeedSuggestions (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetFeedProcessScopeDump
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFeedProcessScopeDump (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetFeedHistograms
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFeedHistograms (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OverrideFeedHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OverrideFeedHost (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OverrideDiscoverApiEndpoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OverrideDiscoverApiEndpoint (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OverrideFeedStreamData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OverrideFeedStreamData (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetWebFeedFollowIntroDebugEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWebFeedFollowIntroDebugEnabled (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetUseFeedQueryRequests
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUseFeedQueryRequests (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetFollowingFeedOrder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFollowingFeedOrder (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGeneralProperties');
          const result = this.impl.getGeneralProperties();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetGeneralProperties FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLastFetchProperties');
          const result = this.impl.getLastFetchProperties();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetLastFetchProperties FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.refreshForYouFeed');
          const result = this.impl.refreshForYouFeed();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.refreshFollowingFeed');
          const result = this.impl.refreshFollowingFeed();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.refreshWebFeedSuggestions');
          const result = this.impl.refreshWebFeedSuggestions();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFeedProcessScopeDump');
          const result = this.impl.getFeedProcessScopeDump();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFeedProcessScopeDump FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFeedHistograms');
          const result = this.impl.getFeedHistograms();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.feed_internals.mojom.PageHandler_GetFeedHistograms_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFeedHistograms FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.overrideFeedHost');
          const result = this.impl.overrideFeedHost(params.arg_host);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.overrideDiscoverApiEndpoint');
          const result = this.impl.overrideDiscoverApiEndpoint(params.arg_endpoint_url);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.overrideFeedStreamData');
          const result = this.impl.overrideFeedStreamData(params.arg_data);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWebFeedFollowIntroDebugEnabled');
          const result = this.impl.setWebFeedFollowIntroDebugEnabled(params.arg_enabled);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUseFeedQueryRequests');
          const result = this.impl.setUseFeedQueryRequests(params.arg_use_legacy);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFollowingFeedOrder');
          const result = this.impl.setFollowingFeedOrder(params.arg_order);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.feed_internals.mojom.PageHandlerReceiver = mojo.internal.bindings.feed_internals.mojom.PageHandlerReceiver;

mojo.internal.bindings.feed_internals.mojom.PageHandlerPtr = mojo.internal.bindings.feed_internals.mojom.PageHandlerRemote;
mojo.internal.bindings.feed_internals.mojom.PageHandlerRequest = mojo.internal.bindings.feed_internals.mojom.PageHandlerPendingReceiver;

