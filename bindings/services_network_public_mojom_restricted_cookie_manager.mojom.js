// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/restricted_cookie_manager.mojom
 // Module: network.mojom

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
 

 mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.network.mojom.CookieMatchTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.RestrictedCookieManagerRoleSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CookieManagerGetOptionsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookiesResponseSpec = { $: {} };
mojo.internal.bindings.network.mojom.RestrictedCookieManager = {};
mojo.internal.bindings.network.mojom.RestrictedCookieManagerSpec = { $ : {} };
mojo.internal.bindings.network.mojom.RestrictedCookieManager.$interfaceName = 'network.mojom.RestrictedCookieManager';
mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetAllForUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetAllForUrl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCanonicalCookie_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCanonicalCookie_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.RestrictedCookieManager_AddChangeListener_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.RestrictedCookieManager_AddChangeListener_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCookieFromString_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCookieFromString_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetCookiesString_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetCookiesString_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.RestrictedCookieManager_CookiesEnabledFor_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.RestrictedCookieManager_CookiesEnabledFor_ResponseParamsSpec = { $: {} };

mojo.internal.bindings.network.mojom.kInvalidCookieVersion = 0;

mojo.internal.bindings.network.mojom.kInitialCookieVersion = 1;

// Enum: CookieMatchType
mojo.internal.bindings.network.mojom.CookieMatchType = {
  EQUALS: 0,
  STARTS_WITH: 1,
};

// Enum: RestrictedCookieManagerRole
mojo.internal.bindings.network.mojom.RestrictedCookieManagerRole = {
  SCRIPT: 0,
  NETWORK: 1,
};

// Struct: CookieManagerGetOptions
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManagerGetOptionsSpec, 'network.mojom.CookieManagerGetOptions', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_match_type', 8, 0, mojo.internal.bindings.network.mojom.CookieMatchTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CookiesResponse
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookiesResponseSpec, 'network.mojom.CookiesResponse', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_version_buffer', 8, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cookies', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: RestrictedCookieManager
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetAllForUrl_ParamsSpec, 'network.mojom.RestrictedCookieManager_GetAllForUrl_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_site_for_cookies', 8, 0, mojo.internal.bindings.network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_top_frame_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage_access_api_status', 24, 0, mojo.internal.bindings.network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 32, 0, mojo.internal.bindings.network.mojom.CookieManagerGetOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_ad_tagged', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_apply_devtools_overrides', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_force_disable_third_party_cookies', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetAllForUrl_ResponseParamsSpec, 'network.mojom.RestrictedCookieManager_GetAllForUrl_ResponseParams', [
      mojo.internal.StructField('arg_cookies', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CookieWithAccessResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCanonicalCookie_ParamsSpec, 'network.mojom.RestrictedCookieManager_SetCanonicalCookie_Params', [
      mojo.internal.StructField('arg_cookie', 0, 0, mojo.internal.bindings.network.mojom.CanonicalCookieSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_site_for_cookies', 16, 0, mojo.internal.bindings.network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_top_frame_origin', 24, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage_access_api_status', 32, 0, mojo.internal.bindings.network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 40, 0, mojo.internal.bindings.network.mojom.CookieInclusionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_ad_tagged', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_apply_devtools_overrides', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCanonicalCookie_ResponseParamsSpec, 'network.mojom.RestrictedCookieManager_SetCanonicalCookie_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.RestrictedCookieManager_AddChangeListener_ParamsSpec, 'network.mojom.RestrictedCookieManager_AddChangeListener_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_site_for_cookies', 8, 0, mojo.internal.bindings.network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_top_frame_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage_access_api_status', 24, 0, mojo.internal.bindings.network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_listener', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CookieChangeListenerRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.RestrictedCookieManager_AddChangeListener_ResponseParamsSpec, 'network.mojom.RestrictedCookieManager_AddChangeListener_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCookieFromString_ParamsSpec, 'network.mojom.RestrictedCookieManager_SetCookieFromString_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_site_for_cookies', 8, 0, mojo.internal.bindings.network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_top_frame_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage_access_api_status', 24, 0, mojo.internal.bindings.network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_get_version_shared_memory', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_ad_tagged', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_apply_devtools_overrides', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCookieFromString_ResponseParamsSpec, 'network.mojom.RestrictedCookieManager_SetCookieFromString_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.network.mojom.CookiesResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetCookiesString_ParamsSpec, 'network.mojom.RestrictedCookieManager_GetCookiesString_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_site_for_cookies', 8, 0, mojo.internal.bindings.network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_top_frame_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage_access_api_status', 24, 0, mojo.internal.bindings.network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_get_version_shared_memory', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_ad_tagged', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_apply_devtools_overrides', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_force_disable_third_party_cookies', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetCookiesString_ResponseParamsSpec, 'network.mojom.RestrictedCookieManager_GetCookiesString_ResponseParams', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_version_buffer', 8, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cookies', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.RestrictedCookieManager_CookiesEnabledFor_ParamsSpec, 'network.mojom.RestrictedCookieManager_CookiesEnabledFor_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_site_for_cookies', 8, 0, mojo.internal.bindings.network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_top_frame_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage_access_api_status', 24, 0, mojo.internal.bindings.network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_apply_devtools_overrides', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.RestrictedCookieManager_CookiesEnabledFor_ResponseParamsSpec, 'network.mojom.RestrictedCookieManager_CookiesEnabledFor_ResponseParams', [
      mojo.internal.StructField('arg_cookies_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.RestrictedCookieManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.RestrictedCookieManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.RestrictedCookieManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.RestrictedCookieManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.RestrictedCookieManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getAllForUrl(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_options, arg_is_ad_tagged, arg_apply_devtools_overrides, arg_force_disable_third_party_cookies) {
    return this.$.getAllForUrl(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_options, arg_is_ad_tagged, arg_apply_devtools_overrides, arg_force_disable_third_party_cookies);
  }
  setCanonicalCookie(arg_cookie, arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_status, arg_is_ad_tagged, arg_apply_devtools_overrides) {
    return this.$.setCanonicalCookie(arg_cookie, arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_status, arg_is_ad_tagged, arg_apply_devtools_overrides);
  }
  addChangeListener(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_listener) {
    return this.$.addChangeListener(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_listener);
  }
  setCookieFromString(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_get_version_shared_memory, arg_is_ad_tagged, arg_apply_devtools_overrides, arg_cookie) {
    return this.$.setCookieFromString(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_get_version_shared_memory, arg_is_ad_tagged, arg_apply_devtools_overrides, arg_cookie);
  }
  getCookiesString(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_get_version_shared_memory, arg_is_ad_tagged, arg_apply_devtools_overrides, arg_force_disable_third_party_cookies) {
    return this.$.getCookiesString(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_get_version_shared_memory, arg_is_ad_tagged, arg_apply_devtools_overrides, arg_force_disable_third_party_cookies);
  }
  cookiesEnabledFor(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_apply_devtools_overrides) {
    return this.$.cookiesEnabledFor(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_apply_devtools_overrides);
  }
};

mojo.internal.bindings.network.mojom.RestrictedCookieManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('network.mojom.RestrictedCookieManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getAllForUrl(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_options, arg_is_ad_tagged, arg_apply_devtools_overrides, arg_force_disable_third_party_cookies) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetAllForUrl_ParamsSpec,
      mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetAllForUrl_ResponseParamsSpec,
      [arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_options, arg_is_ad_tagged, arg_apply_devtools_overrides, arg_force_disable_third_party_cookies],
      false);
  }

  setCanonicalCookie(arg_cookie, arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_status, arg_is_ad_tagged, arg_apply_devtools_overrides) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCanonicalCookie_ParamsSpec,
      mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCanonicalCookie_ResponseParamsSpec,
      [arg_cookie, arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_status, arg_is_ad_tagged, arg_apply_devtools_overrides],
      false);
  }

  addChangeListener(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.RestrictedCookieManager_AddChangeListener_ParamsSpec,
      mojo.internal.bindings.network.mojom.RestrictedCookieManager_AddChangeListener_ResponseParamsSpec,
      [arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_listener],
      false);
  }

  setCookieFromString(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_get_version_shared_memory, arg_is_ad_tagged, arg_apply_devtools_overrides, arg_cookie) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCookieFromString_ParamsSpec,
      mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCookieFromString_ResponseParamsSpec,
      [arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_get_version_shared_memory, arg_is_ad_tagged, arg_apply_devtools_overrides, arg_cookie],
      false);
  }

  getCookiesString(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_get_version_shared_memory, arg_is_ad_tagged, arg_apply_devtools_overrides, arg_force_disable_third_party_cookies) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetCookiesString_ParamsSpec,
      mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetCookiesString_ResponseParamsSpec,
      [arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_get_version_shared_memory, arg_is_ad_tagged, arg_apply_devtools_overrides, arg_force_disable_third_party_cookies],
      false);
  }

  cookiesEnabledFor(arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_apply_devtools_overrides) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.network.mojom.RestrictedCookieManager_CookiesEnabledFor_ParamsSpec,
      mojo.internal.bindings.network.mojom.RestrictedCookieManager_CookiesEnabledFor_ResponseParamsSpec,
      [arg_url, arg_site_for_cookies, arg_top_frame_origin, arg_storage_access_api_status, arg_apply_devtools_overrides],
      false);
  }

};

mojo.internal.bindings.network.mojom.RestrictedCookieManager.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.RestrictedCookieManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.RestrictedCookieManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.RestrictedCookieManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('network.mojom.RestrictedCookieManager', [
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
        
        // Try Method 0: GetAllForUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetAllForUrl_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllForUrl (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetCanonicalCookie
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCanonicalCookie_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCanonicalCookie (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AddChangeListener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.RestrictedCookieManager_AddChangeListener_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddChangeListener (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetCookieFromString
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCookieFromString_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCookieFromString (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetCookiesString
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetCookiesString_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCookiesString (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CookiesEnabledFor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.RestrictedCookieManager_CookiesEnabledFor_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CookiesEnabledFor (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetAllForUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllForUrl');
          const result = this.impl.getAllForUrl(params.arg_url, params.arg_site_for_cookies, params.arg_top_frame_origin, params.arg_storage_access_api_status, params.arg_options, params.arg_is_ad_tagged, params.arg_apply_devtools_overrides, params.arg_force_disable_third_party_cookies);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetAllForUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllForUrl FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCanonicalCookie_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCanonicalCookie');
          const result = this.impl.setCanonicalCookie(params.arg_cookie, params.arg_url, params.arg_site_for_cookies, params.arg_top_frame_origin, params.arg_storage_access_api_status, params.arg_status, params.arg_is_ad_tagged, params.arg_apply_devtools_overrides);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCanonicalCookie_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCanonicalCookie FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.RestrictedCookieManager_AddChangeListener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addChangeListener');
          const result = this.impl.addChangeListener(params.arg_url, params.arg_site_for_cookies, params.arg_top_frame_origin, params.arg_storage_access_api_status, params.arg_listener);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.RestrictedCookieManager_AddChangeListener_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddChangeListener FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCookieFromString_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCookieFromString');
          const result = this.impl.setCookieFromString(params.arg_url, params.arg_site_for_cookies, params.arg_top_frame_origin, params.arg_storage_access_api_status, params.arg_get_version_shared_memory, params.arg_is_ad_tagged, params.arg_apply_devtools_overrides, params.arg_cookie);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.RestrictedCookieManager_SetCookieFromString_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCookieFromString FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetCookiesString_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCookiesString');
          const result = this.impl.getCookiesString(params.arg_url, params.arg_site_for_cookies, params.arg_top_frame_origin, params.arg_storage_access_api_status, params.arg_get_version_shared_memory, params.arg_is_ad_tagged, params.arg_apply_devtools_overrides, params.arg_force_disable_third_party_cookies);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.RestrictedCookieManager_GetCookiesString_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCookiesString FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.RestrictedCookieManager_CookiesEnabledFor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cookiesEnabledFor');
          const result = this.impl.cookiesEnabledFor(params.arg_url, params.arg_site_for_cookies, params.arg_top_frame_origin, params.arg_storage_access_api_status, params.arg_apply_devtools_overrides);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.RestrictedCookieManager_CookiesEnabledFor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CookiesEnabledFor FAILED:', e));
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

mojo.internal.bindings.network.mojom.RestrictedCookieManagerReceiver = mojo.internal.bindings.network.mojom.RestrictedCookieManagerReceiver;

mojo.internal.bindings.network.mojom.RestrictedCookieManagerPtr = mojo.internal.bindings.network.mojom.RestrictedCookieManagerRemote;
mojo.internal.bindings.network.mojom.RestrictedCookieManagerRequest = mojo.internal.bindings.network.mojom.RestrictedCookieManagerPendingReceiver;

