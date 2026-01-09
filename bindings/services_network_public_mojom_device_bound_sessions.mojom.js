// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/device_bound_sessions.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: DeviceBoundSessionAccessType
network.mojom.DeviceBoundSessionAccessType = {
  kCreation: 0,
  kUpdate: 1,
  kTermination: 2,
};

// Enum: DeviceBoundSessionUsage
network.mojom.DeviceBoundSessionUsage = {
  kUnknown: 0,
  kNoUsage: 1,
  kInScopeNotDeferred: 2,
  kDeferred: 3,
};

// Enum: DeviceBoundSessionDeletionReason
network.mojom.DeviceBoundSessionDeletionReason = {
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
network.mojom.DeviceBoundSessionScopeSpecificationType = {
  kExclude: 0,
  kInclude: 1,
};

// Enum: DeviceBoundSessionError
network.mojom.DeviceBoundSessionError = {
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

// Enum: DeviceBoundSessionRefreshResult
network.mojom.DeviceBoundSessionRefreshResult = {
  kRefreshed: 0,
  kInitializedService: 1,
  kUnreachable: 2,
  kServerError: 3,
  kRefreshQuotaExceeded: 4,
  kFatalError: 5,
  kSigningQuotaExceeded: 6,
};

// Enum: DeviceBoundSessionChallengeResult
network.mojom.DeviceBoundSessionChallengeResult = {
  kSuccess: 0,
  kNoSessionId: 1,
  kNoSessionMatch: 2,
  kCantSetBoundCookie: 3,
};

// Enum: DeviceBoundSessionInclusionResult
network.mojom.DeviceBoundSessionInclusionResult = {
  kExclude: 0,
  kInclude: 1,
};

// Struct: DeviceBoundSessionKey
network.mojom.DeviceBoundSessionKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionKey',
      packedSize: 24,
      fields: [
        { name: 'site', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionAccess
network.mojom.DeviceBoundSessionAccessSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionAccess',
      packedSize: 32,
      fields: [
        { name: 'access_type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionAccessTypeSpec, nullable: false },
        { name: 'session_key', packedOffset: 16, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionKeySpec, nullable: false },
        { name: 'cookies', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionScopeSpecification
network.mojom.DeviceBoundSessionScopeSpecificationSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionScopeSpecification',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionScopeSpecificationTypeSpec, nullable: false },
        { name: 'domain', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'path', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionScope
network.mojom.DeviceBoundSessionScopeSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionScope',
      packedSize: 32,
      fields: [
        { name: 'include_site', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'specifications', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'origin', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionCredential
network.mojom.DeviceBoundSessionCredentialSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionCredential',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'attributes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionParams
network.mojom.DeviceBoundSessionParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionParams',
      packedSize: 56,
      fields: [
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'fetcher_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'refresh_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'scope', packedOffset: 32, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionScopeSpec, nullable: false },
        { name: 'credentials', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'allowed_refresh_initiators', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionCookieCravingDisplay
network.mojom.DeviceBoundSessionCookieCravingDisplaySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionCookieCravingDisplay',
      packedSize: 48,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'domain', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'path', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'secure', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'http_only', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'same_site', packedOffset: 40, packedBitOffset: 0, type: network.mojom.CookieSameSiteSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionUrlRuleDisplay
network.mojom.DeviceBoundSessionUrlRuleDisplaySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionUrlRuleDisplay',
      packedSize: 32,
      fields: [
        { name: 'rule_type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionInclusionResultSpec, nullable: false },
        { name: 'host_pattern', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'path_prefix', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionInclusionRulesDisplay
network.mojom.DeviceBoundSessionInclusionRulesDisplaySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionInclusionRulesDisplay',
      packedSize: 32,
      fields: [
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'include_site', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'url_rules', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionDisplay
network.mojom.DeviceBoundSessionDisplaySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionDisplay',
      packedSize: 64,
      fields: [
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionKeySpec, nullable: false },
        { name: 'refresh_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'inclusion_rules', packedOffset: 24, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionInclusionRulesDisplaySpec, nullable: false },
        { name: 'cookie_cravings', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'expiry_date', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'cached_challenge', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'allowed_refresh_initiators', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionCreationDetails
network.mojom.DeviceBoundSessionCreationDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionCreationDetails',
      packedSize: 24,
      fields: [
        { name: 'fetch_error', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionErrorSpec, nullable: false },
        { name: 'new_session_display', packedOffset: 16, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionDisplaySpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionRefreshDetails
network.mojom.DeviceBoundSessionRefreshDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionRefreshDetails',
      packedSize: 40,
      fields: [
        { name: 'refresh_result', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionRefreshResultSpec, nullable: false },
        { name: 'fetch_error', packedOffset: 16, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionErrorSpec, nullable: true },
        { name: 'new_session_display', packedOffset: 24, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionDisplaySpec, nullable: true },
        { name: 'was_fully_proactive_refresh', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionTerminationDetails
network.mojom.DeviceBoundSessionTerminationDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionTerminationDetails',
      packedSize: 16,
      fields: [
        { name: 'deletion_reason', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionDeletionReasonSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionChallengeDetails
network.mojom.DeviceBoundSessionChallengeDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionChallengeDetails',
      packedSize: 24,
      fields: [
        { name: 'challenge_result', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionChallengeResultSpec, nullable: false },
        { name: 'challenge', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceBoundSessionEvent
network.mojom.DeviceBoundSessionEventSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionEvent',
      packedSize: 48,
      fields: [
        { name: 'event_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'site', packedOffset: 16, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false },
        { name: 'session_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'succeeded', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'event_type_details', packedOffset: 40, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionEventTypeDetailsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: DeviceBoundSessionManager
network.mojom.DeviceBoundSessionManager = {};

network.mojom.DeviceBoundSessionManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.DeviceBoundSessionManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DeviceBoundSessionManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.DeviceBoundSessionManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.DeviceBoundSessionManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.DeviceBoundSessionManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAllSessions() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.DeviceBoundSessionManager_GetAllSessions_ParamsSpec,
      network.mojom.DeviceBoundSessionManager_GetAllSessions_ResponseParamsSpec,
      []);
  }

  deleteSession(reason, session) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec,
      null,
      [reason, session]);
  }

  deleteAllSessions(reason, created_after_time, created_before_time, filter) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec,
      null,
      [reason, created_after_time, created_before_time, filter]);
  }

  addObserver(url, observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec,
      null,
      [url, observer]);
  }

  addEventObserver(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec,
      null,
      [observer]);
  }

  createBoundSessions(params, wrapped_key, cookies_to_set, cookie_options) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec,
      network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParamsSpec,
      [params, wrapped_key, cookies_to_set, cookie_options]);
  }

};

network.mojom.DeviceBoundSessionManager.getRemote = function() {
  let remote = new network.mojom.DeviceBoundSessionManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DeviceBoundSessionManager',
    'context');
  return remote.$;
};

// ParamsSpec for GetAllSessions
network.mojom.DeviceBoundSessionManager_GetAllSessions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.GetAllSessions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.DeviceBoundSessionManager_GetAllSessions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.GetAllSessions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sessions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteSession
network.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.DeleteSession_Params',
      packedSize: 24,
      fields: [
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionDeletionReasonSpec, nullable: false },
        { name: 'session', packedOffset: 16, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionKeySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteAllSessions
network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.DeleteAllSessions_Params',
      packedSize: 40,
      fields: [
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionDeletionReasonSpec, nullable: false },
        { name: 'created_after_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
        { name: 'created_before_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
        { name: 'filter', packedOffset: 32, packedBitOffset: 0, type: network.mojom.ClearDataFilterSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddObserver
network.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.AddObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddEventObserver
network.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.AddEventObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateBoundSessions
network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.CreateBoundSessions_Params',
      packedSize: 40,
      fields: [
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'wrapped_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'cookies_to_set', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'cookie_options', packedOffset: 32, packedBitOffset: 0, type: network.mojom.CookieOptionsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionManager.CreateBoundSessions_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'session_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'cookie_results', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.DeviceBoundSessionManagerPtr = network.mojom.DeviceBoundSessionManagerRemote;
network.mojom.DeviceBoundSessionManagerRequest = network.mojom.DeviceBoundSessionManagerPendingReceiver;


// Interface: DeviceBoundSessionAccessObserver
network.mojom.DeviceBoundSessionAccessObserver = {};

network.mojom.DeviceBoundSessionAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.DeviceBoundSessionAccessObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DeviceBoundSessionAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.DeviceBoundSessionAccessObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.DeviceBoundSessionAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.DeviceBoundSessionAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceBoundSessionAccessed(access) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_ParamsSpec,
      null,
      [access]);
  }

  clone(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec,
      null,
      [observer]);
  }

};

network.mojom.DeviceBoundSessionAccessObserver.getRemote = function() {
  let remote = new network.mojom.DeviceBoundSessionAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DeviceBoundSessionAccessObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDeviceBoundSessionAccessed
network.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionAccessObserver.OnDeviceBoundSessionAccessed_Params',
      packedSize: 16,
      fields: [
        { name: 'access', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionAccessSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionAccessObserver.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.DeviceBoundSessionAccessObserverPtr = network.mojom.DeviceBoundSessionAccessObserverRemote;
network.mojom.DeviceBoundSessionAccessObserverRequest = network.mojom.DeviceBoundSessionAccessObserverPendingReceiver;


// Interface: DeviceBoundSessionEventObserver
network.mojom.DeviceBoundSessionEventObserver = {};

network.mojom.DeviceBoundSessionEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.DeviceBoundSessionEventObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DeviceBoundSessionEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.DeviceBoundSessionEventObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.DeviceBoundSessionEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.DeviceBoundSessionEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceBoundSessionEventReceived(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_ParamsSpec,
      null,
      [event]);
  }

  addDeviceBoundSessionDisplays(session_displays) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec,
      null,
      [session_displays]);
  }

};

network.mojom.DeviceBoundSessionEventObserver.getRemote = function() {
  let remote = new network.mojom.DeviceBoundSessionEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DeviceBoundSessionEventObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDeviceBoundSessionEventReceived
network.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionEventObserver.OnDeviceBoundSessionEventReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DeviceBoundSessionEventSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddDeviceBoundSessionDisplays
network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DeviceBoundSessionEventObserver.AddDeviceBoundSessionDisplays_Params',
      packedSize: 16,
      fields: [
        { name: 'session_displays', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.DeviceBoundSessionEventObserverPtr = network.mojom.DeviceBoundSessionEventObserverRemote;
network.mojom.DeviceBoundSessionEventObserverRequest = network.mojom.DeviceBoundSessionEventObserverPendingReceiver;

