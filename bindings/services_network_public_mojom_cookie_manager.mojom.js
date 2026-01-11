// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/cookie_manager.mojom
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
 

 mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.content_settings = mojo.internal.bindings.content_settings || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.network.mojom.CookieAccessDelegateTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CookiePrioritySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CookieSourceSchemeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CookieSameSiteSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CookieEffectiveSameSiteSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CookieExemptionReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.ContextTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CookieSameSiteContextMetadataDowngradeTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CookieSourceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.ContextRedirectTypeBug1221316Spec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.HttpMethodSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CookieAccessSemanticsSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CookieScopeSemanticsSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CookieChangeCauseSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CookieDeletionSessionControlSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.CookieOrLineSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManagerParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieSameSiteContextMetadataSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieSameSiteContextSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieOptionsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CanonicalCookieSpec = { $: {} };
mojo.internal.bindings.network.mojom.ExclusionReasonsSpec = { $: {} };
mojo.internal.bindings.network.mojom.WarningReasonsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieInclusionStatusSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieAndLineWithAccessResultSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieOrLineWithAccessResultSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieAccessResultSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieWithAccessResultSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieChangeInfoSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieDeletionFilterSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieChangeListener = {};
mojo.internal.bindings.network.mojom.CookieChangeListener.$interfaceName = 'network.mojom.CookieChangeListener';
mojo.internal.bindings.network.mojom.CookieChangeListener_OnCookieChange_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager = {};
mojo.internal.bindings.network.mojom.CookieManager.$interfaceName = 'network.mojom.CookieManager';
mojo.internal.bindings.network.mojom.CookieManager_GetAllCookies_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_GetAllCookies_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_GetCookieList_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_GetCookieList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_SetCanonicalCookie_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_SetCanonicalCookie_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_DeleteCanonicalCookie_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_DeleteCookies_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_DeleteCookies_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_DeleteSessionOnlyCookies_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_AddCookieChangeListener_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_CloneInterface_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_FlushCookieStore_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_FlushCookieStore_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_AllowFileSchemeCookies_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_SetContentSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_SetContentSettings_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_SetForceKeepSessionState_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_BlockThirdPartyCookies_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_ParamsSpec = { $: {} };

// Enum: CookieAccessDelegateType
mojo.internal.bindings.network.mojom.CookieAccessDelegateType = {
  USE_CONTENT_SETTINGS: 0,
  ALWAYS_LEGACY: 1,
  ALWAYS_NONLEGACY: 2,
};

// Enum: CookiePriority
mojo.internal.bindings.network.mojom.CookiePriority = {
  LOW: 0,
  MEDIUM: 1,
  HIGH: 2,
};

// Enum: CookieSourceScheme
mojo.internal.bindings.network.mojom.CookieSourceScheme = {
  kUnset: 0,
  kNonSecure: 1,
  kSecure: 2,
};

// Enum: CookieSameSite
mojo.internal.bindings.network.mojom.CookieSameSite = {
  UNSPECIFIED: -1,
  NO_RESTRICTION: 0,
  LAX_MODE: 1,
  STRICT_MODE: 2,
};

// Enum: CookieEffectiveSameSite
mojo.internal.bindings.network.mojom.CookieEffectiveSameSite = {
  kNoRestriction: 0,
  kLaxMode: 1,
  kStrictMode: 2,
  kLaxModeAllowUnsafe: 3,
  kUndefined: 4,
};

// Enum: CookieExemptionReason
mojo.internal.bindings.network.mojom.CookieExemptionReason = {
  kNone: 0,
  kUserSetting: 1,
  k3PCDMetadata: 2,
  k3PCDDeprecationTrial: 3,
  kTopLevel3PCDDeprecationTrial: 4,
  k3PCDHeuristics: 5,
  kEnterprisePolicy: 6,
  kStorageAccess: 7,
  kTopLevelStorageAccess: 8,
  kScheme: 9,
  kSameSiteNoneCookiesInSandbox: 10,
};

// Enum: ContextType
mojo.internal.bindings.network.mojom.ContextType = {
  CROSS_SITE: 0,
  SAME_SITE_LAX_METHOD_UNSAFE: 1,
  SAME_SITE_LAX: 2,
  SAME_SITE_STRICT: 3,
};

// Enum: CookieSameSiteContextMetadataDowngradeType
mojo.internal.bindings.network.mojom.CookieSameSiteContextMetadataDowngradeType = {
  kNoDowngrade: 0,
  kStrictToLax: 1,
  kStrictToCross: 2,
  kLaxToCross: 3,
};

// Enum: CookieSourceType
mojo.internal.bindings.network.mojom.CookieSourceType = {
  kUnknown: 0,
  kHTTP: 1,
  kScript: 2,
  kOther: 3,
};

// Enum: ContextRedirectTypeBug1221316
mojo.internal.bindings.network.mojom.ContextRedirectTypeBug1221316 = {
  kUnset: 0,
  kNoRedirect: 1,
  kCrossSiteRedirect: 2,
  kPartialSameSiteRedirect: 3,
  kAllSameSiteRedirect: 4,
};

// Enum: HttpMethod
mojo.internal.bindings.network.mojom.HttpMethod = {
  kUnset: 0,
  kUnknown: 1,
  kGet: 2,
  kHead: 3,
  kPost: 4,
  KPut: 5,
  kDelete: 6,
  kConnect: 7,
  kOptions: 8,
  kTrace: 9,
  kPatch: 10,
};

// Enum: CookieAccessSemantics
mojo.internal.bindings.network.mojom.CookieAccessSemantics = {
  UNKNOWN: -1,
  NONLEGACY: 0,
  LEGACY: 1,
};

// Enum: CookieScopeSemantics
mojo.internal.bindings.network.mojom.CookieScopeSemantics = {
  UNKNOWN: -1,
  NONLEGACY: 0,
  LEGACY: 1,
};

// Enum: CookieChangeCause
mojo.internal.bindings.network.mojom.CookieChangeCause = {
  INSERTED: 0,
  EXPLICIT: 1,
  UNKNOWN_DELETION: 2,
  OVERWRITE: 3,
  EXPIRED: 4,
  EVICTED: 5,
  EXPIRED_OVERWRITE: 6,
  INSERTED_NO_CHANGE_OVERWRITE: 7,
  INSERTED_NO_VALUE_CHANGE_OVERWRITE: 8,
};

// Enum: CookieDeletionSessionControl
mojo.internal.bindings.network.mojom.CookieDeletionSessionControl = {
  IGNORE_CONTROL: 0,
  SESSION_COOKIES: 1,
  PERSISTENT_COOKIES: 2,
};

// Union: CookieOrLine
mojo.internal.Union(
    mojo.internal.bindings.network.mojom.CookieOrLineSpec, 'network.mojom.CookieOrLine', {
      'arg_cookie': {
        'ordinal': 0,
        'type': mojo.internal.bindings.network.mojom.CanonicalCookieSpec.$,
        'nullable': false,
      },
      'arg_cookie_string': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: CookieManagerParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManagerParamsSpec, 'network.mojom.CookieManagerParams', [
      mojo.internal.StructField('arg_content_settings', 0, 0, mojo.internal.Map(mojo.internal.bindings.content_settings.mojom.ContentSettingsTypeSpec.$, mojo.internal.Array(mojo.internal.bindings.content_settings.mojom.ContentSettingPatternSourceSpec.$, false), false), null, false, 0, undefined),
      mojo.internal.StructField('arg_secure_origin_cookies_allowed_schemes', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_matching_scheme_cookies_allowed_schemes', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_third_party_cookies_allowed_schemes', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_access_delegate_type', 32, 0, mojo.internal.bindings.network.mojom.CookieAccessDelegateTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_block_third_party_cookies', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_tracking_protection_enabled_for_3pcd', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_mitigations_enabled_for_3pcd', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_file_scheme_cookies', 40, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: CookieSameSiteContextMetadata
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieSameSiteContextMetadataSpec, 'network.mojom.CookieSameSiteContextMetadata', [
      mojo.internal.StructField('arg_cross_site_redirect_downgrade', 0, 0, mojo.internal.bindings.network.mojom.CookieSameSiteContextMetadataDowngradeTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_redirect_type_bug_1221316', 8, 0, mojo.internal.bindings.network.mojom.ContextRedirectTypeBug1221316Spec.$, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CookieSameSiteContext
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieSameSiteContextSpec, 'network.mojom.CookieSameSiteContext', [
      mojo.internal.StructField('arg_context', 0, 0, mojo.internal.bindings.network.mojom.ContextTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_schemeful_context', 8, 0, mojo.internal.bindings.network.mojom.ContextTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_metadata', 16, 0, mojo.internal.bindings.network.mojom.CookieSameSiteContextMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_schemeful_metadata', 24, 0, mojo.internal.bindings.network.mojom.CookieSameSiteContextMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CookieOptions
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieOptionsSpec, 'network.mojom.CookieOptions', [
      mojo.internal.StructField('arg_same_site_cookie_context', 0, 0, mojo.internal.bindings.network.mojom.CookieSameSiteContextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_exclude_httponly', 8, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_update_access_time', 8, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_return_excluded_cookies', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CanonicalCookie
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CanonicalCookieSpec, 'network.mojom.CanonicalCookie', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_domain', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_creation', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_expiry', 40, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_access', 48, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_update', 56, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_site_restrictions', 64, 0, mojo.internal.bindings.network.mojom.CookieSameSiteSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 72, 0, mojo.internal.bindings.network.mojom.CookiePrioritySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_source_scheme', 80, 0, mojo.internal.bindings.network.mojom.CookieSourceSchemeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_partition_key', 88, 0, mojo.internal.bindings.network.mojom.CookiePartitionKeySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_source_type', 96, 0, mojo.internal.bindings.network.mojom.CookieSourceTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_source_port', 104, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('arg_secure', 108, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_httponly', 108, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: ExclusionReasons
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.ExclusionReasonsSpec, 'network.mojom.ExclusionReasons', [
      mojo.internal.StructField('arg_exclusions_bitmask', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WarningReasons
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.WarningReasonsSpec, 'network.mojom.WarningReasons', [
      mojo.internal.StructField('arg_warnings_bitmask', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CookieInclusionStatus
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieInclusionStatusSpec, 'network.mojom.CookieInclusionStatus', [
      mojo.internal.StructField('arg_exclusion_reasons', 0, 0, mojo.internal.bindings.network.mojom.ExclusionReasonsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_warning_reasons', 8, 0, mojo.internal.bindings.network.mojom.WarningReasonsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_exemption_reason', 16, 0, mojo.internal.bindings.network.mojom.CookieExemptionReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CookieAndLineWithAccessResult
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieAndLineWithAccessResultSpec, 'network.mojom.CookieAndLineWithAccessResult', [
      mojo.internal.StructField('arg_cookie', 0, 0, mojo.internal.bindings.network.mojom.CanonicalCookieSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_string', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_access_result', 16, 0, mojo.internal.bindings.network.mojom.CookieAccessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CookieOrLineWithAccessResult
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieOrLineWithAccessResultSpec, 'network.mojom.CookieOrLineWithAccessResult', [
      mojo.internal.StructField('arg_cookie_or_line', 0, 0, mojo.internal.bindings.network.mojom.CookieOrLineSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_access_result', 8, 0, mojo.internal.bindings.network.mojom.CookieAccessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CookieAccessResult
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieAccessResultSpec, 'network.mojom.CookieAccessResult', [
      mojo.internal.StructField('arg_effective_same_site', 0, 0, mojo.internal.bindings.network.mojom.CookieEffectiveSameSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_access_semantics', 8, 0, mojo.internal.bindings.network.mojom.CookieAccessSemanticsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scope_semantics', 16, 0, mojo.internal.bindings.network.mojom.CookieScopeSemanticsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 24, 0, mojo.internal.bindings.network.mojom.CookieInclusionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_allowed_to_access_secure_cookies', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: CookieWithAccessResult
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieWithAccessResultSpec, 'network.mojom.CookieWithAccessResult', [
      mojo.internal.StructField('arg_cookie', 0, 0, mojo.internal.bindings.network.mojom.CanonicalCookieSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_access_result', 8, 0, mojo.internal.bindings.network.mojom.CookieAccessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CookieChangeInfo
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieChangeInfoSpec, 'network.mojom.CookieChangeInfo', [
      mojo.internal.StructField('arg_cookie', 0, 0, mojo.internal.bindings.network.mojom.CanonicalCookieSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_access_result', 8, 0, mojo.internal.bindings.network.mojom.CookieAccessResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cause', 16, 0, mojo.internal.bindings.network.mojom.CookieChangeCauseSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CookieDeletionFilter
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieDeletionFilterSpec, 'network.mojom.CookieDeletionFilter', [
      mojo.internal.StructField('arg_created_after_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_created_before_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_excluding_domains', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_including_domains', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_host_name', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_url', 48, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_session_control', 56, 0, mojo.internal.bindings.network.mojom.CookieDeletionSessionControlSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_partition_key_collection', 64, 0, mojo.internal.bindings.network.mojom.CookiePartitionKeyCollectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_partitioned_state_only', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Interface: CookieChangeListener
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieChangeListener_OnCookieChange_ParamsSpec, 'network.mojom.CookieChangeListener_OnCookieChange_Params', [
      mojo.internal.StructField('arg_change', 0, 0, mojo.internal.bindings.network.mojom.CookieChangeInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.CookieChangeListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.CookieChangeListenerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CookieChangeListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.CookieChangeListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.CookieChangeListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCookieChange(arg_change) {
    return this.$.onCookieChange(arg_change);
  }
};

mojo.internal.bindings.network.mojom.CookieChangeListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CookieChangeListener', [
      { explicit: null },
    ]);
  }

  onCookieChange(arg_change) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.CookieChangeListener_OnCookieChange_ParamsSpec,
      null,
      [arg_change],
      false);
  }

};

mojo.internal.bindings.network.mojom.CookieChangeListener.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.CookieChangeListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CookieChangeListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.CookieChangeListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CookieChangeListener', [
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
        
        // Try Method 0: OnCookieChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieChangeListener_OnCookieChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCookieChange (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieChangeListener_OnCookieChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCookieChange');
          const result = this.impl.onCookieChange(params.arg_change);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.CookieChangeListenerReceiver = mojo.internal.bindings.network.mojom.CookieChangeListenerReceiver;

mojo.internal.bindings.network.mojom.CookieChangeListenerPtr = mojo.internal.bindings.network.mojom.CookieChangeListenerRemote;
mojo.internal.bindings.network.mojom.CookieChangeListenerRequest = mojo.internal.bindings.network.mojom.CookieChangeListenerPendingReceiver;


// Interface: CookieManager
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_GetAllCookies_ParamsSpec, 'network.mojom.CookieManager_GetAllCookies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_GetAllCookies_ResponseParamsSpec, 'network.mojom.CookieManager_GetAllCookies_ResponseParams', [
      mojo.internal.StructField('arg_cookies', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CanonicalCookieSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ParamsSpec, 'network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParamsSpec, 'network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParams', [
      mojo.internal.StructField('arg_cookies', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CanonicalCookieSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_access_semantics_list', 8, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CookieAccessSemanticsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_GetCookieList_ParamsSpec, 'network.mojom.CookieManager_GetCookieList_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_options', 8, 0, mojo.internal.bindings.network.mojom.CookieOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_partition_key_collection', 16, 0, mojo.internal.bindings.network.mojom.CookiePartitionKeyCollectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_GetCookieList_ResponseParamsSpec, 'network.mojom.CookieManager_GetCookieList_ResponseParams', [
      mojo.internal.StructField('arg_cookies', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CookieWithAccessResultSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_excluded_cookies', 8, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CookieWithAccessResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_SetCanonicalCookie_ParamsSpec, 'network.mojom.CookieManager_SetCanonicalCookie_Params', [
      mojo.internal.StructField('arg_cookie', 0, 0, mojo.internal.bindings.network.mojom.CanonicalCookieSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_options', 16, 0, mojo.internal.bindings.network.mojom.CookieOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_SetCanonicalCookie_ResponseParamsSpec, 'network.mojom.CookieManager_SetCanonicalCookie_ResponseParams', [
      mojo.internal.StructField('arg_access_result', 0, 0, mojo.internal.bindings.network.mojom.CookieAccessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_DeleteCanonicalCookie_ParamsSpec, 'network.mojom.CookieManager_DeleteCanonicalCookie_Params', [
      mojo.internal.StructField('arg_cookie', 0, 0, mojo.internal.bindings.network.mojom.CanonicalCookieSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParamsSpec, 'network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_DeleteCookies_ParamsSpec, 'network.mojom.CookieManager_DeleteCookies_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.CookieDeletionFilterSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_DeleteCookies_ResponseParamsSpec, 'network.mojom.CookieManager_DeleteCookies_ResponseParams', [
      mojo.internal.StructField('arg_num_deleted', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_DeleteSessionOnlyCookies_ParamsSpec, 'network.mojom.CookieManager_DeleteSessionOnlyCookies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParamsSpec, 'network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParams', [
      mojo.internal.StructField('arg_num_deleted', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ParamsSpec, 'network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParamsSpec, 'network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParams', [
      mojo.internal.StructField('arg_num_deleted', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_AddCookieChangeListener_ParamsSpec, 'network.mojom.CookieManager_AddCookieChangeListener_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_listener', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CookieChangeListenerSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec, 'network.mojom.CookieManager_AddGlobalChangeListener_Params', [
      mojo.internal.StructField('arg_notification_pointer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CookieChangeListenerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_CloneInterface_ParamsSpec, 'network.mojom.CookieManager_CloneInterface_Params', [
      mojo.internal.StructField('arg_new_interface', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.CookieManagerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_FlushCookieStore_ParamsSpec, 'network.mojom.CookieManager_FlushCookieStore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_FlushCookieStore_ResponseParamsSpec, 'network.mojom.CookieManager_FlushCookieStore_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_AllowFileSchemeCookies_ParamsSpec, 'network.mojom.CookieManager_AllowFileSchemeCookies_Params', [
      mojo.internal.StructField('arg_allow', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParamsSpec, 'network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_SetContentSettings_ParamsSpec, 'network.mojom.CookieManager_SetContentSettings_Params', [
      mojo.internal.StructField('arg_content_settings_type', 0, 0, mojo.internal.bindings.content_settings.mojom.ContentSettingsTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_settings', 8, 0, mojo.internal.Array(mojo.internal.bindings.content_settings.mojom.ContentSettingPatternSourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_SetContentSettings_ResponseParamsSpec, 'network.mojom.CookieManager_SetContentSettings_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_SetForceKeepSessionState_ParamsSpec, 'network.mojom.CookieManager_SetForceKeepSessionState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_BlockThirdPartyCookies_ParamsSpec, 'network.mojom.CookieManager_BlockThirdPartyCookies_Params', [
      mojo.internal.StructField('arg_block', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_ParamsSpec, 'network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_Params', [
      mojo.internal.StructField('arg_enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_ParamsSpec, 'network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_Params', [
      mojo.internal.StructField('arg_enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_ParamsSpec, 'network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_Params', [
      mojo.internal.StructField('arg_delay', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.CookieManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.CookieManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CookieManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.CookieManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.CookieManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getAllCookies() {
    return this.$.getAllCookies();
  }
  getAllCookiesWithAccessSemantics() {
    return this.$.getAllCookiesWithAccessSemantics();
  }
  getCookieList(arg_url, arg_cookie_options, arg_cookie_partition_key_collection) {
    return this.$.getCookieList(arg_url, arg_cookie_options, arg_cookie_partition_key_collection);
  }
  setCanonicalCookie(arg_cookie, arg_source_url, arg_cookie_options) {
    return this.$.setCanonicalCookie(arg_cookie, arg_source_url, arg_cookie_options);
  }
  deleteCanonicalCookie(arg_cookie) {
    return this.$.deleteCanonicalCookie(arg_cookie);
  }
  deleteCookies(arg_filter) {
    return this.$.deleteCookies(arg_filter);
  }
  deleteSessionOnlyCookies() {
    return this.$.deleteSessionOnlyCookies();
  }
  deleteStaleSessionOnlyCookies() {
    return this.$.deleteStaleSessionOnlyCookies();
  }
  addCookieChangeListener(arg_url, arg_name, arg_listener) {
    return this.$.addCookieChangeListener(arg_url, arg_name, arg_listener);
  }
  addGlobalChangeListener(arg_notification_pointer) {
    return this.$.addGlobalChangeListener(arg_notification_pointer);
  }
  cloneInterface(arg_new_interface) {
    return this.$.cloneInterface(arg_new_interface);
  }
  flushCookieStore() {
    return this.$.flushCookieStore();
  }
  allowFileSchemeCookies(arg_allow) {
    return this.$.allowFileSchemeCookies(arg_allow);
  }
  setContentSettings(arg_content_settings_type, arg_settings) {
    return this.$.setContentSettings(arg_content_settings_type, arg_settings);
  }
  setForceKeepSessionState() {
    return this.$.setForceKeepSessionState();
  }
  blockThirdPartyCookies(arg_block) {
    return this.$.blockThirdPartyCookies(arg_block);
  }
  setMitigationsEnabledFor3pcd(arg_enable) {
    return this.$.setMitigationsEnabledFor3pcd(arg_enable);
  }
  setTrackingProtectionEnabledFor3pcd(arg_enable) {
    return this.$.setTrackingProtectionEnabledFor3pcd(arg_enable);
  }
  setPreCommitCallbackDelayForTesting(arg_delay) {
    return this.$.setPreCommitCallbackDelayForTesting(arg_delay);
  }
};

mojo.internal.bindings.network.mojom.CookieManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CookieManager', [
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

  getAllCookies() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_GetAllCookies_ParamsSpec,
      mojo.internal.bindings.network.mojom.CookieManager_GetAllCookies_ResponseParamsSpec,
      [],
      false);
  }

  getAllCookiesWithAccessSemantics() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ParamsSpec,
      mojo.internal.bindings.network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParamsSpec,
      [],
      false);
  }

  getCookieList(arg_url, arg_cookie_options, arg_cookie_partition_key_collection) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_GetCookieList_ParamsSpec,
      mojo.internal.bindings.network.mojom.CookieManager_GetCookieList_ResponseParamsSpec,
      [arg_url, arg_cookie_options, arg_cookie_partition_key_collection],
      false);
  }

  setCanonicalCookie(arg_cookie, arg_source_url, arg_cookie_options) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_SetCanonicalCookie_ParamsSpec,
      mojo.internal.bindings.network.mojom.CookieManager_SetCanonicalCookie_ResponseParamsSpec,
      [arg_cookie, arg_source_url, arg_cookie_options],
      false);
  }

  deleteCanonicalCookie(arg_cookie) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_DeleteCanonicalCookie_ParamsSpec,
      mojo.internal.bindings.network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParamsSpec,
      [arg_cookie],
      false);
  }

  deleteCookies(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_DeleteCookies_ParamsSpec,
      mojo.internal.bindings.network.mojom.CookieManager_DeleteCookies_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  deleteSessionOnlyCookies() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_DeleteSessionOnlyCookies_ParamsSpec,
      mojo.internal.bindings.network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParamsSpec,
      [],
      false);
  }

  deleteStaleSessionOnlyCookies() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ParamsSpec,
      mojo.internal.bindings.network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParamsSpec,
      [],
      false);
  }

  addCookieChangeListener(arg_url, arg_name, arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_AddCookieChangeListener_ParamsSpec,
      null,
      [arg_url, arg_name, arg_listener],
      false);
  }

  addGlobalChangeListener(arg_notification_pointer) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec,
      null,
      [arg_notification_pointer],
      false);
  }

  cloneInterface(arg_new_interface) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_CloneInterface_ParamsSpec,
      null,
      [arg_new_interface],
      false);
  }

  flushCookieStore() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_FlushCookieStore_ParamsSpec,
      mojo.internal.bindings.network.mojom.CookieManager_FlushCookieStore_ResponseParamsSpec,
      [],
      false);
  }

  allowFileSchemeCookies(arg_allow) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_AllowFileSchemeCookies_ParamsSpec,
      mojo.internal.bindings.network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParamsSpec,
      [arg_allow],
      false);
  }

  setContentSettings(arg_content_settings_type, arg_settings) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_SetContentSettings_ParamsSpec,
      mojo.internal.bindings.network.mojom.CookieManager_SetContentSettings_ResponseParamsSpec,
      [arg_content_settings_type, arg_settings],
      false);
  }

  setForceKeepSessionState() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_SetForceKeepSessionState_ParamsSpec,
      null,
      [],
      false);
  }

  blockThirdPartyCookies(arg_block) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_BlockThirdPartyCookies_ParamsSpec,
      null,
      [arg_block],
      false);
  }

  setMitigationsEnabledFor3pcd(arg_enable) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_ParamsSpec,
      null,
      [arg_enable],
      false);
  }

  setTrackingProtectionEnabledFor3pcd(arg_enable) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_ParamsSpec,
      null,
      [arg_enable],
      false);
  }

  setPreCommitCallbackDelayForTesting(arg_delay) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_ParamsSpec,
      null,
      [arg_delay],
      false);
  }

};

mojo.internal.bindings.network.mojom.CookieManager.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.CookieManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CookieManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.CookieManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CookieManager', [
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
        
        // Try Method 0: GetAllCookies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_GetAllCookies_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllCookies (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetAllCookiesWithAccessSemantics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllCookiesWithAccessSemantics (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetCookieList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_GetCookieList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCookieList (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetCanonicalCookie
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_SetCanonicalCookie_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCanonicalCookie (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DeleteCanonicalCookie
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_DeleteCanonicalCookie_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteCanonicalCookie (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DeleteCookies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_DeleteCookies_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteCookies (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DeleteSessionOnlyCookies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_DeleteSessionOnlyCookies_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteSessionOnlyCookies (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DeleteStaleSessionOnlyCookies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteStaleSessionOnlyCookies (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: AddCookieChangeListener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_AddCookieChangeListener_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddCookieChangeListener (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: AddGlobalChangeListener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddGlobalChangeListener (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: CloneInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_CloneInterface_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloneInterface (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: FlushCookieStore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_FlushCookieStore_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushCookieStore (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: AllowFileSchemeCookies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_AllowFileSchemeCookies_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllowFileSchemeCookies (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetContentSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_SetContentSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetContentSettings (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetForceKeepSessionState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_SetForceKeepSessionState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetForceKeepSessionState (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: BlockThirdPartyCookies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_BlockThirdPartyCookies_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BlockThirdPartyCookies (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetMitigationsEnabledFor3pcd
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMitigationsEnabledFor3pcd (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SetTrackingProtectionEnabledFor3pcd
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTrackingProtectionEnabledFor3pcd (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SetPreCommitCallbackDelayForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPreCommitCallbackDelayForTesting (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_GetAllCookies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllCookies');
          const result = this.impl.getAllCookies();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.CookieManager_GetAllCookies_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllCookies FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllCookiesWithAccessSemantics');
          const result = this.impl.getAllCookiesWithAccessSemantics();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllCookiesWithAccessSemantics FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_GetCookieList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCookieList');
          const result = this.impl.getCookieList(params.arg_url, params.arg_cookie_options, params.arg_cookie_partition_key_collection);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.CookieManager_GetCookieList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCookieList FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_SetCanonicalCookie_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCanonicalCookie');
          const result = this.impl.setCanonicalCookie(params.arg_cookie, params.arg_source_url, params.arg_cookie_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.CookieManager_SetCanonicalCookie_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCanonicalCookie FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_DeleteCanonicalCookie_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteCanonicalCookie');
          const result = this.impl.deleteCanonicalCookie(params.arg_cookie);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteCanonicalCookie FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_DeleteCookies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteCookies');
          const result = this.impl.deleteCookies(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.CookieManager_DeleteCookies_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteCookies FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_DeleteSessionOnlyCookies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteSessionOnlyCookies');
          const result = this.impl.deleteSessionOnlyCookies();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteSessionOnlyCookies FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteStaleSessionOnlyCookies');
          const result = this.impl.deleteStaleSessionOnlyCookies();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteStaleSessionOnlyCookies FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_AddCookieChangeListener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addCookieChangeListener');
          const result = this.impl.addCookieChangeListener(params.arg_url, params.arg_name, params.arg_listener);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addGlobalChangeListener');
          const result = this.impl.addGlobalChangeListener(params.arg_notification_pointer);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_CloneInterface_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cloneInterface');
          const result = this.impl.cloneInterface(params.arg_new_interface);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_FlushCookieStore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushCookieStore');
          const result = this.impl.flushCookieStore();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.CookieManager_FlushCookieStore_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FlushCookieStore FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_AllowFileSchemeCookies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.allowFileSchemeCookies');
          const result = this.impl.allowFileSchemeCookies(params.arg_allow);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AllowFileSchemeCookies FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_SetContentSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setContentSettings');
          const result = this.impl.setContentSettings(params.arg_content_settings_type, params.arg_settings);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.CookieManager_SetContentSettings_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetContentSettings FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_SetForceKeepSessionState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setForceKeepSessionState');
          const result = this.impl.setForceKeepSessionState();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_BlockThirdPartyCookies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.blockThirdPartyCookies');
          const result = this.impl.blockThirdPartyCookies(params.arg_block);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMitigationsEnabledFor3pcd');
          const result = this.impl.setMitigationsEnabledFor3pcd(params.arg_enable);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTrackingProtectionEnabledFor3pcd');
          const result = this.impl.setTrackingProtectionEnabledFor3pcd(params.arg_enable);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPreCommitCallbackDelayForTesting');
          const result = this.impl.setPreCommitCallbackDelayForTesting(params.arg_delay);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.CookieManagerReceiver = mojo.internal.bindings.network.mojom.CookieManagerReceiver;

mojo.internal.bindings.network.mojom.CookieManagerPtr = mojo.internal.bindings.network.mojom.CookieManagerRemote;
mojo.internal.bindings.network.mojom.CookieManagerRequest = mojo.internal.bindings.network.mojom.CookieManagerPendingReceiver;

