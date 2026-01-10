// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/device_bound_sessions.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Enum: DeviceBoundSessionAccessType
network.mojom.mojom.DeviceBoundSessionAccessType = {
  kCreation: 0,
  kUpdate: 1,
  kTermination: 2,
};
network.mojom.mojom.DeviceBoundSessionAccessTypeSpec = { $: mojo.internal.Enum() };

// Enum: DeviceBoundSessionUsage
network.mojom.mojom.DeviceBoundSessionUsage = {
  kUnknown: 0,
  kNoUsage: 1,
  kInScopeNotDeferred: 2,
  kDeferred: 3,
};
network.mojom.mojom.DeviceBoundSessionUsageSpec = { $: mojo.internal.Enum() };

// Enum: DeviceBoundSessionDeletionReason
network.mojom.mojom.DeviceBoundSessionDeletionReason = {
  kExpired: 0,
  kFailedToRestoreKey: 1,
  kFailedToUnwrapKey: 2,
  kStoragePartitionCleared: 3,
  kClearBrowsingData: 4,
  kServerRequested: 5,
  kInvalidSessionParams: 6,
  kRefreshFatalError: 7,
};
network.mojom.mojom.DeviceBoundSessionDeletionReasonSpec = { $: mojo.internal.Enum() };

// Enum: DeviceBoundSessionScopeSpecificationType
network.mojom.mojom.DeviceBoundSessionScopeSpecificationType = {
  kExclude: 0,
  kInclude: 1,
};
network.mojom.mojom.DeviceBoundSessionScopeSpecificationTypeSpec = { $: mojo.internal.Enum() };

// Enum: DeviceBoundSessionError
network.mojom.mojom.DeviceBoundSessionError = {
  kSuccess: 0,
  kKeyError: 1,
  kSigningError: 2,
  kServerRequestedTermination: 3,
  kInvalidSessionId: 4,
  kInvalidChallenge: 5,
  kTooManyChallenges: 6,
  kInvalidFetcherUrl: 7,
  kInvalidRefreshUrl: 8,
  kTransientHttpError: 9,
  kScopeOriginSameSiteMismatch: 10,
  kRefreshUrlSameSiteMismatch: 11,
  kMismatchedSessionId: 12,
  kMissingScope: 13,
  kNoCredentials: 14,
  kSubdomainRegistrationWellKnownUnavailable: 15,
  kSubdomainRegistrationUnauthorized: 16,
  kSubdomainRegistrationWellKnownMalformed: 17,
  kSessionProviderWellKnownUnavailable: 18,
  kRelyingPartyWellKnownUnavailable: 19,
  kFederatedKeyThumbprintMismatch: 20,
  kInvalidFederatedSessionUrl: 21,
  kInvalidFederatedKey: 22,
  kTooManyRelyingOriginLabels: 23,
  kBoundCookieSetForbidden: 24,
  kNetError: 25,
  kProxyError: 26,
  kEmptySessionConfig: 27,
  kInvalidCredentialsConfig: 28,
  kInvalidCredentialsType: 29,
  kInvalidCredentialsEmptyName: 30,
  kInvalidCredentialsCookie: 31,
  kPersistentHttpError: 32,
  kRegistrationAttemptedChallenge: 33,
  kInvalidScopeOrigin: 34,
  kScopeOriginContainsPath: 35,
  kRefreshInitiatorNotString: 36,
  kRefreshInitiatorInvalidHostPattern: 37,
  kInvalidScopeSpecification: 38,
  kMissingScopeSpecificationType: 39,
  kEmptyScopeSpecificationDomain: 40,
  kEmptyScopeSpecificationPath: 41,
  kInvalidScopeSpecificationType: 42,
  kInvalidScopeIncludeSite: 43,
  kMissingScopeIncludeSite: 44,
  kFederatedNotAuthorizedByProvider: 45,
  kFederatedNotAuthorizedByRelyingParty: 46,
  kSessionProviderWellKnownMalformed: 47,
  kSessionProviderWellKnownHasProviderOrigin: 48,
  kRelyingPartyWellKnownMalformed: 49,
  kRelyingPartyWellKnownHasRelyingOrigins: 50,
  kInvalidFederatedSessionProviderSessionMissing: 51,
  kInvalidFederatedSessionWrongProviderOrigin: 52,
  kInvalidCredentialsCookieCreationTime: 53,
  kInvalidCredentialsCookieName: 54,
  kInvalidCredentialsCookieParsing: 55,
  kInvalidCredentialsCookieUnpermittedAttribute: 56,
  kInvalidCredentialsCookieInvalidDomain: 57,
  kInvalidCredentialsCookiePrefix: 58,
  kInvalidScopeRulePath: 59,
  kInvalidScopeRuleHostPattern: 60,
  kScopeRuleOriginScopedHostPatternMismatch: 61,
  kScopeRuleSiteScopedHostPatternMismatch: 62,
  kSigningQuotaExceeded: 63,
  kInvalidConfigJson: 64,
  kInvalidFederatedSessionProviderFailedToRestoreKey: 65,
  kFailedToUnwrapKey: 66,
  kSessionDeletedDuringRefresh: 67,
};
network.mojom.mojom.DeviceBoundSessionErrorSpec = { $: mojo.internal.Enum() };

// Enum: DeviceBoundSessionRefreshResult
network.mojom.mojom.DeviceBoundSessionRefreshResult = {
  kRefreshed: 0,
  kInitializedService: 1,
  kUnreachable: 2,
  kServerError: 3,
  kRefreshQuotaExceeded: 4,
  kFatalError: 5,
  kSigningQuotaExceeded: 6,
};
network.mojom.mojom.DeviceBoundSessionRefreshResultSpec = { $: mojo.internal.Enum() };

// Enum: DeviceBoundSessionChallengeResult
network.mojom.mojom.DeviceBoundSessionChallengeResult = {
  kSuccess: 0,
  kNoSessionId: 1,
  kNoSessionMatch: 2,
  kCantSetBoundCookie: 3,
};
network.mojom.mojom.DeviceBoundSessionChallengeResultSpec = { $: mojo.internal.Enum() };

// Enum: DeviceBoundSessionInclusionResult
network.mojom.mojom.DeviceBoundSessionInclusionResult = {
  kExclude: 0,
  kInclude: 1,
};
network.mojom.mojom.DeviceBoundSessionInclusionResultSpec = { $: mojo.internal.Enum() };

// Union: DeviceBoundSessionEventTypeDetails
network.mojom.mojom.DeviceBoundSessionEventTypeDetailsSpec = { $: mojo.internal.Union(
    'network.mojom.DeviceBoundSessionEventTypeDetails', {
      'creation': {
        'ordinal': 0,
        'type': network.mojom.DeviceBoundSessionCreationDetailsSpec,
      }},
      'refresh': {
        'ordinal': 1,
        'type': network.mojom.DeviceBoundSessionRefreshDetailsSpec,
      }},
      'termination': {
        'ordinal': 2,
        'type': network.mojom.DeviceBoundSessionTerminationDetailsSpec,
      }},
      'challenge': {
        'ordinal': 3,
        'type': network.mojom.DeviceBoundSessionChallengeDetailsSpec,
      }},
    })
};

// Struct: DeviceBoundSessionKey
network.mojom.mojom.DeviceBoundSessionKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionKey',
      packedSize: 24,
      fields: [
        { name: 'site', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DeviceBoundSessionAccess
network.mojom.mojom.DeviceBoundSessionAccessSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionAccess',
      packedSize: 32,
      fields: [
        { name: 'access_type', packedOffset: 16, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionAccessTypeSpec, nullable: false, minVersion: 0 },
        { name: 'session_key', packedOffset: 0, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionKeySpec, nullable: false, minVersion: 0 },
        { name: 'cookies', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DeviceBoundSessionScopeSpecification
network.mojom.mojom.DeviceBoundSessionScopeSpecificationSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionScopeSpecification',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionScopeSpecificationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'domain', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DeviceBoundSessionScope
network.mojom.mojom.DeviceBoundSessionScopeSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionScope',
      packedSize: 32,
      fields: [
        { name: 'include_site', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'specifications', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.DeviceBoundSessionScopeSpecificationSpec, false), nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DeviceBoundSessionCredential
network.mojom.mojom.DeviceBoundSessionCredentialSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionCredential',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'attributes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DeviceBoundSessionParams
network.mojom.mojom.DeviceBoundSessionParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionParams',
      packedSize: 56,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'fetcher_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'refresh_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scope', packedOffset: 24, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionScopeSpec, nullable: false, minVersion: 0 },
        { name: 'credentials', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.DeviceBoundSessionCredentialSpec, false), nullable: false, minVersion: 0 },
        { name: 'allowed_refresh_initiators', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: DeviceBoundSessionCookieCravingDisplay
network.mojom.mojom.DeviceBoundSessionCookieCravingDisplaySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionCookieCravingDisplay',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'domain', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'secure', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'http_only', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'same_site', packedOffset: 24, packedBitOffset: 0, type: network.mojom.CookieSameSiteSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DeviceBoundSessionUrlRuleDisplay
network.mojom.mojom.DeviceBoundSessionUrlRuleDisplaySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionUrlRuleDisplay',
      packedSize: 32,
      fields: [
        { name: 'rule_type', packedOffset: 16, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionInclusionResultSpec, nullable: false, minVersion: 0 },
        { name: 'host_pattern', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'path_prefix', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DeviceBoundSessionInclusionRulesDisplay
network.mojom.mojom.DeviceBoundSessionInclusionRulesDisplaySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionInclusionRulesDisplay',
      packedSize: 32,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'include_site', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'url_rules', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.DeviceBoundSessionUrlRuleDisplaySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DeviceBoundSessionDisplay
network.mojom.mojom.DeviceBoundSessionDisplaySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionDisplay',
      packedSize: 64,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionKeySpec, nullable: false, minVersion: 0 },
        { name: 'refresh_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'inclusion_rules', packedOffset: 16, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionInclusionRulesDisplaySpec, nullable: false, minVersion: 0 },
        { name: 'cookie_cravings', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.DeviceBoundSessionCookieCravingDisplaySpec, false), nullable: false, minVersion: 0 },
        { name: 'expiry_date', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'cached_challenge', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'allowed_refresh_initiators', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: DeviceBoundSessionCreationDetails
network.mojom.mojom.DeviceBoundSessionCreationDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionCreationDetails',
      packedSize: 24,
      fields: [
        { name: 'fetch_error', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionErrorSpec, nullable: false, minVersion: 0 },
        { name: 'new_session_display', packedOffset: 0, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionDisplaySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DeviceBoundSessionRefreshDetails
network.mojom.mojom.DeviceBoundSessionRefreshDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionRefreshDetails',
      packedSize: 32,
      fields: [
        { name: 'refresh_result', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionRefreshResultSpec, nullable: false, minVersion: 0 },
        { name: 'fetch_error', packedOffset: 12, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionErrorSpec, nullable: true, minVersion: 0 },
        { name: 'new_session_display', packedOffset: 0, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionDisplaySpec, nullable: true, minVersion: 0 },
        { name: 'was_fully_proactive_refresh', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DeviceBoundSessionTerminationDetails
network.mojom.mojom.DeviceBoundSessionTerminationDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionTerminationDetails',
      packedSize: 16,
      fields: [
        { name: 'deletion_reason', packedOffset: 0, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionDeletionReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DeviceBoundSessionChallengeDetails
network.mojom.mojom.DeviceBoundSessionChallengeDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionChallengeDetails',
      packedSize: 24,
      fields: [
        { name: 'challenge_result', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionChallengeResultSpec, nullable: false, minVersion: 0 },
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DeviceBoundSessionEvent
network.mojom.mojom.DeviceBoundSessionEventSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionEvent',
      packedSize: 56,
      fields: [
        { name: 'event_id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'site', packedOffset: 24, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'succeeded', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'event_type_details', packedOffset: 0, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionEventTypeDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: DeviceBoundSessionManager
network.mojom.mojom.DeviceBoundSessionManager = {};

network.mojom.mojom.DeviceBoundSessionManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.DeviceBoundSessionManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DeviceBoundSessionManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.DeviceBoundSessionManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.DeviceBoundSessionManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.DeviceBoundSessionManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAllSessions() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.DeviceBoundSessionManager_GetAllSessions_ParamsSpec,
      network.mojom.mojom.DeviceBoundSessionManager_GetAllSessions_ResponseParamsSpec,
      []);
  }

  deleteSession(reason, session) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec,
      null,
      [reason, session]);
  }

  deleteAllSessions(reason, created_after_time, created_before_time, filter) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec,
      null,
      [reason, created_after_time, created_before_time, filter]);
  }

  addObserver(url, observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec,
      null,
      [url, observer]);
  }

  addEventObserver(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec,
      null,
      [observer]);
  }

  createBoundSessions(params, wrapped_key, cookies_to_set, cookie_options) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec,
      network.mojom.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParamsSpec,
      [params, wrapped_key, cookies_to_set, cookie_options]);
  }

};

network.mojom.mojom.DeviceBoundSessionManager.getRemote = function() {
  let remote = new network.mojom.mojom.DeviceBoundSessionManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DeviceBoundSessionManager',
    'context');
  return remote.$;
};

// ParamsSpec for GetAllSessions
network.mojom.mojom.DeviceBoundSessionManager_GetAllSessions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.GetAllSessions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.mojom.DeviceBoundSessionManager_GetAllSessions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.GetAllSessions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sessions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.DeviceBoundSessionKeySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteSession
network.mojom.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.DeleteSession_Params',
      packedSize: 24,
      fields: [
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionDeletionReasonSpec, nullable: false, minVersion: 0 },
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionKeySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeleteAllSessions
network.mojom.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.DeleteAllSessions_Params',
      packedSize: 40,
      fields: [
        { name: 'reason', packedOffset: 24, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionDeletionReasonSpec, nullable: false, minVersion: 0 },
        { name: 'created_after_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'created_before_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'filter', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ClearDataFilterSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for AddObserver
network.mojom.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.AddObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddEventObserver
network.mojom.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.AddEventObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateBoundSessions
network.mojom.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.CreateBoundSessions_Params',
      packedSize: 40,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.DeviceBoundSessionParamsSpec, false), nullable: false, minVersion: 0 },
        { name: 'wrapped_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'cookies_to_set', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CanonicalCookieSpec, false), nullable: false, minVersion: 0 },
        { name: 'cookie_options', packedOffset: 24, packedBitOffset: 0, type: network.mojom.CookieOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

network.mojom.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.CreateBoundSessions_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'session_results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.DeviceBoundSessionErrorSpec, false), nullable: false, minVersion: 0 },
        { name: 'cookie_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CookieInclusionStatusSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.DeviceBoundSessionManagerPtr = network.mojom.mojom.DeviceBoundSessionManagerRemote;
network.mojom.mojom.DeviceBoundSessionManagerRequest = network.mojom.mojom.DeviceBoundSessionManagerPendingReceiver;


// Interface: DeviceBoundSessionAccessObserver
network.mojom.mojom.DeviceBoundSessionAccessObserver = {};

network.mojom.mojom.DeviceBoundSessionAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.DeviceBoundSessionAccessObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DeviceBoundSessionAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.DeviceBoundSessionAccessObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.DeviceBoundSessionAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.DeviceBoundSessionAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceBoundSessionAccessed(access) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_ParamsSpec,
      null,
      [access]);
  }

  clone(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec,
      null,
      [observer]);
  }

};

network.mojom.mojom.DeviceBoundSessionAccessObserver.getRemote = function() {
  let remote = new network.mojom.mojom.DeviceBoundSessionAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DeviceBoundSessionAccessObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDeviceBoundSessionAccessed
network.mojom.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionAccessObserver.OnDeviceBoundSessionAccessed_Params',
      packedSize: 16,
      fields: [
        { name: 'access', packedOffset: 0, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionAccessSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionAccessObserver.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.DeviceBoundSessionAccessObserverPtr = network.mojom.mojom.DeviceBoundSessionAccessObserverRemote;
network.mojom.mojom.DeviceBoundSessionAccessObserverRequest = network.mojom.mojom.DeviceBoundSessionAccessObserverPendingReceiver;


// Interface: DeviceBoundSessionEventObserver
network.mojom.mojom.DeviceBoundSessionEventObserver = {};

network.mojom.mojom.DeviceBoundSessionEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.DeviceBoundSessionEventObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DeviceBoundSessionEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.DeviceBoundSessionEventObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.DeviceBoundSessionEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.DeviceBoundSessionEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceBoundSessionEventReceived(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_ParamsSpec,
      null,
      [event]);
  }

  addDeviceBoundSessionDisplays(session_displays) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec,
      null,
      [session_displays]);
  }

};

network.mojom.mojom.DeviceBoundSessionEventObserver.getRemote = function() {
  let remote = new network.mojom.mojom.DeviceBoundSessionEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DeviceBoundSessionEventObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDeviceBoundSessionEventReceived
network.mojom.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionEventObserver.OnDeviceBoundSessionEventReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddDeviceBoundSessionDisplays
network.mojom.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionEventObserver.AddDeviceBoundSessionDisplays_Params',
      packedSize: 16,
      fields: [
        { name: 'session_displays', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.DeviceBoundSessionDisplaySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.DeviceBoundSessionEventObserverPtr = network.mojom.mojom.DeviceBoundSessionEventObserverRemote;
network.mojom.mojom.DeviceBoundSessionEventObserverRequest = network.mojom.mojom.DeviceBoundSessionEventObserverPendingReceiver;

