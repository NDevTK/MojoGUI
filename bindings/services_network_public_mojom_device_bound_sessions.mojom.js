// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/device_bound_sessions.mojom
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
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.DeviceBoundSessionUsageSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.DeviceBoundSessionDeletionReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.DeviceBoundSessionScopeSpecificationTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.DeviceBoundSessionErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.DeviceBoundSessionRefreshResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.DeviceBoundSessionChallengeResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.DeviceBoundSessionInclusionResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.DeviceBoundSessionEventTypeDetailsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionKeySpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionScopeSpecificationSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionScopeSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionCredentialSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionCookieCravingDisplaySpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionUrlRuleDisplaySpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionInclusionRulesDisplaySpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionDisplaySpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionCreationDetailsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionRefreshDetailsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionTerminationDetailsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionChallengeDetailsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionEventSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionManager = {};
mojo.internal.bindings.network.mojom.DeviceBoundSessionManager.$interfaceName = 'network.mojom.DeviceBoundSessionManager';
mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_GetAllSessions_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_GetAllSessions_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserver = {};
mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserver.$interfaceName = 'network.mojom.DeviceBoundSessionAccessObserver';
mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserver = {};
mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserver.$interfaceName = 'network.mojom.DeviceBoundSessionEventObserver';
mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec = { $: {} };

// Enum: DeviceBoundSessionAccessType
mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessType = {
  kCreation: 0,
  kUpdate: 1,
  kTermination: 2,
};

// Enum: DeviceBoundSessionUsage
mojo.internal.bindings.network.mojom.DeviceBoundSessionUsage = {
  kUnknown: 0,
  kNoUsage: 1,
  kInScopeNotDeferred: 2,
  kDeferred: 3,
};

// Enum: DeviceBoundSessionDeletionReason
mojo.internal.bindings.network.mojom.DeviceBoundSessionDeletionReason = {
  kExpired: 0,
  kFailedToRestoreKey: 1,
  kFailedToUnwrapKey: 2,
  kStoragePartitionCleared: 3,
  kClearBrowsingData: 4,
  kServerRequested: 5,
  kInvalidSessionParams: 6,
  kRefreshFatalError: 7,
};

// Enum: DeviceBoundSessionScopeSpecificationType
mojo.internal.bindings.network.mojom.DeviceBoundSessionScopeSpecificationType = {
  kExclude: 0,
  kInclude: 1,
};

// Enum: DeviceBoundSessionError
mojo.internal.bindings.network.mojom.DeviceBoundSessionError = {
  kSuccess: 0,
  kKeyError: 1,
  kSigningError: 2,
  kServerRequestedTermination: 5,
  kInvalidSessionId: 7,
  kInvalidChallenge: 9,
  kTooManyChallenges: 10,
  kInvalidFetcherUrl: 11,
  kInvalidRefreshUrl: 12,
  kTransientHttpError: 13,
  kScopeOriginSameSiteMismatch: 15,
  kRefreshUrlSameSiteMismatch: 16,
  kMismatchedSessionId: 18,
  kMissingScope: 21,
  kNoCredentials: 22,
  kSubdomainRegistrationWellKnownUnavailable: 24,
  kSubdomainRegistrationUnauthorized: 25,
  kSubdomainRegistrationWellKnownMalformed: 26,
  kSessionProviderWellKnownUnavailable: 28,
  kRelyingPartyWellKnownUnavailable: 30,
  kFederatedKeyThumbprintMismatch: 32,
  kInvalidFederatedSessionUrl: 33,
  kInvalidFederatedKey: 35,
  kTooManyRelyingOriginLabels: 36,
  kBoundCookieSetForbidden: 37,
  kNetError: 38,
  kProxyError: 39,
  kEmptySessionConfig: 41,
  kInvalidCredentialsConfig: 42,
  kInvalidCredentialsType: 43,
  kInvalidCredentialsEmptyName: 44,
  kInvalidCredentialsCookie: 45,
  kPersistentHttpError: 46,
  kRegistrationAttemptedChallenge: 47,
  kInvalidScopeOrigin: 48,
  kScopeOriginContainsPath: 49,
  kRefreshInitiatorNotString: 50,
  kRefreshInitiatorInvalidHostPattern: 51,
  kInvalidScopeSpecification: 52,
  kMissingScopeSpecificationType: 53,
  kEmptyScopeSpecificationDomain: 54,
  kEmptyScopeSpecificationPath: 55,
  kInvalidScopeSpecificationType: 56,
  kInvalidScopeIncludeSite: 57,
  kMissingScopeIncludeSite: 58,
  kFederatedNotAuthorizedByProvider: 59,
  kFederatedNotAuthorizedByRelyingParty: 60,
  kSessionProviderWellKnownMalformed: 61,
  kSessionProviderWellKnownHasProviderOrigin: 62,
  kRelyingPartyWellKnownMalformed: 63,
  kRelyingPartyWellKnownHasRelyingOrigins: 64,
  kInvalidFederatedSessionProviderSessionMissing: 65,
  kInvalidFederatedSessionWrongProviderOrigin: 66,
  kInvalidCredentialsCookieCreationTime: 67,
  kInvalidCredentialsCookieName: 68,
  kInvalidCredentialsCookieParsing: 69,
  kInvalidCredentialsCookieUnpermittedAttribute: 70,
  kInvalidCredentialsCookieInvalidDomain: 71,
  kInvalidCredentialsCookiePrefix: 72,
  kInvalidScopeRulePath: 73,
  kInvalidScopeRuleHostPattern: 74,
  kScopeRuleOriginScopedHostPatternMismatch: 75,
  kScopeRuleSiteScopedHostPatternMismatch: 76,
  kSigningQuotaExceeded: 77,
  kInvalidConfigJson: 78,
  kInvalidFederatedSessionProviderFailedToRestoreKey: 79,
  kFailedToUnwrapKey: 80,
  kSessionDeletedDuringRefresh: 81,
};

// Enum: DeviceBoundSessionRefreshResult
mojo.internal.bindings.network.mojom.DeviceBoundSessionRefreshResult = {
  kRefreshed: 0,
  kInitializedService: 1,
  kUnreachable: 2,
  kServerError: 3,
  kRefreshQuotaExceeded: 4,
  kFatalError: 5,
  kSigningQuotaExceeded: 6,
};

// Enum: DeviceBoundSessionChallengeResult
mojo.internal.bindings.network.mojom.DeviceBoundSessionChallengeResult = {
  kSuccess: 0,
  kNoSessionId: 1,
  kNoSessionMatch: 2,
  kCantSetBoundCookie: 3,
};

// Enum: DeviceBoundSessionInclusionResult
mojo.internal.bindings.network.mojom.DeviceBoundSessionInclusionResult = {
  kExclude: 0,
  kInclude: 1,
};

// Union: DeviceBoundSessionEventTypeDetails
mojo.internal.Union(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionEventTypeDetailsSpec, 'network.mojom.DeviceBoundSessionEventTypeDetails', {
      'arg_creation': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionCreationDetailsSpec.$,
        'nullable': false,
      },
      'arg_refresh': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionRefreshDetailsSpec.$,
        'nullable': false,
      },
      'arg_termination': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionTerminationDetailsSpec.$,
        'nullable': false,
      },
      'arg_challenge': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionChallengeDetailsSpec.$,
        'nullable': false,
      },
    });

// Struct: DeviceBoundSessionKey
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionKeySpec, 'network.mojom.DeviceBoundSessionKey', [
      mojo.internal.StructField('arg_site', 0, 0, mojo.internal.bindings.network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeviceBoundSessionAccess
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessSpec, 'network.mojom.DeviceBoundSessionAccess', [
      mojo.internal.StructField('arg_access_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_key', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookies', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceBoundSessionScopeSpecification
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionScopeSpecificationSpec, 'network.mojom.DeviceBoundSessionScopeSpecification', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionScopeSpecificationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_domain', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceBoundSessionScope
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionScopeSpec, 'network.mojom.DeviceBoundSessionScope', [
      mojo.internal.StructField('arg_specifications', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionScopeSpecificationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_include_site', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceBoundSessionCredential
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionCredentialSpec, 'network.mojom.DeviceBoundSessionCredential', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_attributes', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeviceBoundSessionParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionParamsSpec, 'network.mojom.DeviceBoundSessionParams', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_fetcher_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_refresh_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_scope', 24, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionScopeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_credentials', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionCredentialSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_refresh_initiators', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: DeviceBoundSessionCookieCravingDisplay
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionCookieCravingDisplaySpec, 'network.mojom.DeviceBoundSessionCookieCravingDisplay', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_domain', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_same_site', 24, 0, mojo.internal.bindings.network.mojom.CookieSameSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_secure', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_http_only', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DeviceBoundSessionUrlRuleDisplay
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionUrlRuleDisplaySpec, 'network.mojom.DeviceBoundSessionUrlRuleDisplay', [
      mojo.internal.StructField('arg_rule_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionInclusionResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_pattern', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_path_prefix', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceBoundSessionInclusionRulesDisplay
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionInclusionRulesDisplaySpec, 'network.mojom.DeviceBoundSessionInclusionRulesDisplay', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url_rules', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionUrlRuleDisplaySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_include_site', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceBoundSessionDisplay
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionDisplaySpec, 'network.mojom.DeviceBoundSessionDisplay', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_refresh_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_inclusion_rules', 16, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionInclusionRulesDisplaySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_cravings', 24, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionCookieCravingDisplaySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_expiry_date', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cached_challenge', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_allowed_refresh_initiators', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: DeviceBoundSessionCreationDetails
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionCreationDetailsSpec, 'network.mojom.DeviceBoundSessionCreationDetails', [
      mojo.internal.StructField('arg_fetch_error', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_session_display', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionDisplaySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeviceBoundSessionRefreshDetails
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionRefreshDetailsSpec, 'network.mojom.DeviceBoundSessionRefreshDetails', [
      mojo.internal.StructField('arg_refresh_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionRefreshResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fetch_error', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionErrorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_new_session_display', 16, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionDisplaySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_was_fully_proactive_refresh', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DeviceBoundSessionTerminationDetails
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionTerminationDetailsSpec, 'network.mojom.DeviceBoundSessionTerminationDetails', [
      mojo.internal.StructField('arg_deletion_reason', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionDeletionReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DeviceBoundSessionChallengeDetails
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionChallengeDetailsSpec, 'network.mojom.DeviceBoundSessionChallengeDetails', [
      mojo.internal.StructField('arg_challenge_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionChallengeResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_challenge', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeviceBoundSessionEvent
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionEventSpec, 'network.mojom.DeviceBoundSessionEvent', [
      mojo.internal.StructField('arg_event_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_site', 8, 0, mojo.internal.bindings.network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_event_type_details', 24, 0, mojo.internal.bindings.network.mojom.DeviceBoundSessionEventTypeDetailsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_succeeded', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: DeviceBoundSessionManager
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_GetAllSessions_ParamsSpec, 'network.mojom.DeviceBoundSessionManager_GetAllSessions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_GetAllSessions_ResponseParamsSpec, 'network.mojom.DeviceBoundSessionManager_GetAllSessions_ResponseParams', [
      mojo.internal.StructField('arg_sessions', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionKeySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec, 'network.mojom.DeviceBoundSessionManager_DeleteSession_Params', [
      mojo.internal.StructField('arg_reason', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionDeletionReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec, 'network.mojom.DeviceBoundSessionManager_DeleteAllSessions_Params', [
      mojo.internal.StructField('arg_reason', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionDeletionReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_created_after_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_created_before_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_filter', 24, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ResponseParamsSpec, 'network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec, 'network.mojom.DeviceBoundSessionManager_AddObserver_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec, 'network.mojom.DeviceBoundSessionManager_AddEventObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec, 'network.mojom.DeviceBoundSessionManager_CreateBoundSessions_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionParamsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_wrapped_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_cookies_to_set', 16, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CanonicalCookieSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_options', 24, 0, mojo.internal.bindings.network.mojom.CookieOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParamsSpec, 'network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParams', [
      mojo.internal.StructField('arg_session_results', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionErrorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_results', 8, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CookieInclusionStatusSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DeviceBoundSessionManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getAllSessions() {
    return this.$.getAllSessions();
  }
  deleteSession(arg_reason, arg_session) {
    return this.$.deleteSession(arg_reason, arg_session);
  }
  deleteAllSessions(arg_reason, arg_created_after_time, arg_created_before_time, arg_filter) {
    return this.$.deleteAllSessions(arg_reason, arg_created_after_time, arg_created_before_time, arg_filter);
  }
  addObserver(arg_url, arg_observer) {
    return this.$.addObserver(arg_url, arg_observer);
  }
  addEventObserver(arg_observer) {
    return this.$.addEventObserver(arg_observer);
  }
  createBoundSessions(arg_params, arg_wrapped_key, arg_cookies_to_set, arg_cookie_options) {
    return this.$.createBoundSessions(arg_params, arg_wrapped_key, arg_cookies_to_set, arg_cookie_options);
  }
};

mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceBoundSessionManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getAllSessions() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_GetAllSessions_ParamsSpec,
      mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_GetAllSessions_ResponseParamsSpec,
      [],
      false);
  }

  deleteSession(arg_reason, arg_session) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec,
      null,
      [arg_reason, arg_session],
      false);
  }

  deleteAllSessions(arg_reason, arg_created_after_time, arg_created_before_time, arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec,
      mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ResponseParamsSpec,
      [arg_reason, arg_created_after_time, arg_created_before_time, arg_filter],
      false);
  }

  addObserver(arg_url, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec,
      null,
      [arg_url, arg_observer],
      false);
  }

  addEventObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  createBoundSessions(arg_params, arg_wrapped_key, arg_cookies_to_set, arg_cookie_options) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec,
      mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParamsSpec,
      [arg_params, arg_wrapped_key, arg_cookies_to_set, arg_cookie_options],
      false);
  }

};

mojo.internal.bindings.network.mojom.DeviceBoundSessionManager.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DeviceBoundSessionManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceBoundSessionManager', [
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
        
        // Try Method 0: GetAllSessions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_GetAllSessions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllSessions (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DeleteSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteSession (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DeleteAllSessions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteAllSessions (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AddEventObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddEventObserver (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CreateBoundSessions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateBoundSessions (5)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_GetAllSessions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllSessions');
          const result = this.impl.getAllSessions();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_GetAllSessions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllSessions FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteSession');
          const result = this.impl.deleteSession(params.arg_reason, params.arg_session);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteAllSessions');
          const result = this.impl.deleteAllSessions(params.arg_reason, params.arg_created_after_time, params.arg_created_before_time, params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteAllSessions FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_url, params.arg_observer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addEventObserver');
          const result = this.impl.addEventObserver(params.arg_observer);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createBoundSessions');
          const result = this.impl.createBoundSessions(params.arg_params, params.arg_wrapped_key, params.arg_cookies_to_set, params.arg_cookie_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateBoundSessions FAILED:', e));
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

mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerReceiver = mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerReceiver;

mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerPtr = mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerRemote;
mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerRequest = mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerPendingReceiver;


// Interface: DeviceBoundSessionAccessObserver
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_ParamsSpec, 'network.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_Params', [
      mojo.internal.StructField('arg_access', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec, 'network.mojom.DeviceBoundSessionAccessObserver_Clone_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DeviceBoundSessionAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDeviceBoundSessionAccessed(arg_access) {
    return this.$.onDeviceBoundSessionAccessed(arg_access);
  }
  clone(arg_observer) {
    return this.$.clone(arg_observer);
  }
};

mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceBoundSessionAccessObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDeviceBoundSessionAccessed(arg_access) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_ParamsSpec,
      null,
      [arg_access],
      false);
  }

  clone(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

};

mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DeviceBoundSessionAccessObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceBoundSessionAccessObserver', [
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
        
        // Try Method 0: OnDeviceBoundSessionAccessed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceBoundSessionAccessed (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceBoundSessionAccessed');
          const result = this.impl.onDeviceBoundSessionAccessed(params.arg_access);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.arg_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverReceiver = mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverReceiver;

mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverPtr = mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverRemote;
mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverRequest = mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverPendingReceiver;


// Interface: DeviceBoundSessionEventObserver
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_ParamsSpec, 'network.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec, 'network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_Params', [
      mojo.internal.StructField('arg_session_displays', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.network.mojom.DeviceBoundSessionDisplaySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DeviceBoundSessionEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDeviceBoundSessionEventReceived(arg_event) {
    return this.$.onDeviceBoundSessionEventReceived(arg_event);
  }
  addDeviceBoundSessionDisplays(arg_session_displays) {
    return this.$.addDeviceBoundSessionDisplays(arg_session_displays);
  }
};

mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceBoundSessionEventObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDeviceBoundSessionEventReceived(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  addDeviceBoundSessionDisplays(arg_session_displays) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec,
      null,
      [arg_session_displays],
      false);
  }

};

mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DeviceBoundSessionEventObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceBoundSessionEventObserver', [
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
        
        // Try Method 0: OnDeviceBoundSessionEventReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceBoundSessionEventReceived (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddDeviceBoundSessionDisplays
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddDeviceBoundSessionDisplays (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceBoundSessionEventReceived');
          const result = this.impl.onDeviceBoundSessionEventReceived(params.arg_event);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addDeviceBoundSessionDisplays');
          const result = this.impl.addDeviceBoundSessionDisplays(params.arg_session_displays);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverReceiver = mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverReceiver;

mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverPtr = mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverRemote;
mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverRequest = mojo.internal.bindings.network.mojom.DeviceBoundSessionEventObserverPendingReceiver;

