// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/device_bound_sessions.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var url = url || {};

network.mojom.DeviceBoundSessionAccessTypeSpec = { $: mojo.internal.Enum() };
network.mojom.DeviceBoundSessionUsageSpec = { $: mojo.internal.Enum() };
network.mojom.DeviceBoundSessionDeletionReasonSpec = { $: mojo.internal.Enum() };
network.mojom.DeviceBoundSessionScopeSpecificationTypeSpec = { $: mojo.internal.Enum() };
network.mojom.DeviceBoundSessionErrorSpec = { $: mojo.internal.Enum() };
network.mojom.DeviceBoundSessionRefreshResultSpec = { $: mojo.internal.Enum() };
network.mojom.DeviceBoundSessionChallengeResultSpec = { $: mojo.internal.Enum() };
network.mojom.DeviceBoundSessionInclusionResultSpec = { $: mojo.internal.Enum() };
network.mojom.DeviceBoundSessionEventTypeDetailsSpec = { $: {} };
network.mojom.DeviceBoundSessionKeySpec = { $: {} };
network.mojom.DeviceBoundSessionAccessSpec = { $: {} };
network.mojom.DeviceBoundSessionScopeSpecificationSpec = { $: {} };
network.mojom.DeviceBoundSessionScopeSpec = { $: {} };
network.mojom.DeviceBoundSessionCredentialSpec = { $: {} };
network.mojom.DeviceBoundSessionParamsSpec = { $: {} };
network.mojom.DeviceBoundSessionCookieCravingDisplaySpec = { $: {} };
network.mojom.DeviceBoundSessionUrlRuleDisplaySpec = { $: {} };
network.mojom.DeviceBoundSessionInclusionRulesDisplaySpec = { $: {} };
network.mojom.DeviceBoundSessionDisplaySpec = { $: {} };
network.mojom.DeviceBoundSessionCreationDetailsSpec = { $: {} };
network.mojom.DeviceBoundSessionRefreshDetailsSpec = { $: {} };
network.mojom.DeviceBoundSessionTerminationDetailsSpec = { $: {} };
network.mojom.DeviceBoundSessionChallengeDetailsSpec = { $: {} };
network.mojom.DeviceBoundSessionEventSpec = { $: {} };
network.mojom.DeviceBoundSessionManager = {};
network.mojom.DeviceBoundSessionManager.$interfaceName = 'network.mojom.DeviceBoundSessionManager';
network.mojom.DeviceBoundSessionManager_GetAllSessions_ParamsSpec = { $: {} };
network.mojom.DeviceBoundSessionManager_GetAllSessions_ResponseParamsSpec = { $: {} };
network.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec = { $: {} };
network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec = { $: {} };
network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ResponseParamsSpec = { $: {} };
network.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec = { $: {} };
network.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec = { $: {} };
network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec = { $: {} };
network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParamsSpec = { $: {} };
network.mojom.DeviceBoundSessionAccessObserver = {};
network.mojom.DeviceBoundSessionAccessObserver.$interfaceName = 'network.mojom.DeviceBoundSessionAccessObserver';
network.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_ParamsSpec = { $: {} };
network.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec = { $: {} };
network.mojom.DeviceBoundSessionEventObserver = {};
network.mojom.DeviceBoundSessionEventObserver.$interfaceName = 'network.mojom.DeviceBoundSessionEventObserver';
network.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_ParamsSpec = { $: {} };
network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec = { $: {} };

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

// Union: DeviceBoundSessionEventTypeDetails
mojo.internal.Union(
    network.mojom.DeviceBoundSessionEventTypeDetailsSpec, 'network.mojom.DeviceBoundSessionEventTypeDetails', {
      'creation': {
        'ordinal': 0,
        'type': network.mojom.DeviceBoundSessionCreationDetailsSpec.$,
        'nullable': false,
      },
      'refresh': {
        'ordinal': 1,
        'type': network.mojom.DeviceBoundSessionRefreshDetailsSpec.$,
        'nullable': false,
      },
      'termination': {
        'ordinal': 2,
        'type': network.mojom.DeviceBoundSessionTerminationDetailsSpec.$,
        'nullable': false,
      },
      'challenge': {
        'ordinal': 3,
        'type': network.mojom.DeviceBoundSessionChallengeDetailsSpec.$,
        'nullable': false,
      },
    });

// Struct: DeviceBoundSessionKey
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionKeySpec, 'network.mojom.DeviceBoundSessionKey', [
      mojo.internal.StructField('site', 0, 0, network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeviceBoundSessionAccess
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionAccessSpec, 'network.mojom.DeviceBoundSessionAccess', [
      mojo.internal.StructField('access_type', 0, 0, network.mojom.DeviceBoundSessionAccessTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_key', 8, 0, network.mojom.DeviceBoundSessionKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookies', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceBoundSessionScopeSpecification
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionScopeSpecificationSpec, 'network.mojom.DeviceBoundSessionScopeSpecification', [
      mojo.internal.StructField('type', 0, 0, network.mojom.DeviceBoundSessionScopeSpecificationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('domain', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('path', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceBoundSessionScope
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionScopeSpec, 'network.mojom.DeviceBoundSessionScope', [
      mojo.internal.StructField('specifications', 0, 0, mojo.internal.Array(network.mojom.DeviceBoundSessionScopeSpecificationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('origin', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('include_site', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceBoundSessionCredential
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionCredentialSpec, 'network.mojom.DeviceBoundSessionCredential', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('attributes', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeviceBoundSessionParams
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionParamsSpec, 'network.mojom.DeviceBoundSessionParams', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fetcher_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('refresh_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scope', 24, 0, network.mojom.DeviceBoundSessionScopeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('credentials', 32, 0, mojo.internal.Array(network.mojom.DeviceBoundSessionCredentialSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('allowed_refresh_initiators', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: DeviceBoundSessionCookieCravingDisplay
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionCookieCravingDisplaySpec, 'network.mojom.DeviceBoundSessionCookieCravingDisplay', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('domain', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('path', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('same_site', 24, 0, network.mojom.CookieSameSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('secure', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('http_only', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DeviceBoundSessionUrlRuleDisplay
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionUrlRuleDisplaySpec, 'network.mojom.DeviceBoundSessionUrlRuleDisplay', [
      mojo.internal.StructField('rule_type', 0, 0, network.mojom.DeviceBoundSessionInclusionResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_pattern', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('path_prefix', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceBoundSessionInclusionRulesDisplay
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionInclusionRulesDisplaySpec, 'network.mojom.DeviceBoundSessionInclusionRulesDisplay', [
      mojo.internal.StructField('origin', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url_rules', 8, 0, mojo.internal.Array(network.mojom.DeviceBoundSessionUrlRuleDisplaySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('include_site', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceBoundSessionDisplay
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionDisplaySpec, 'network.mojom.DeviceBoundSessionDisplay', [
      mojo.internal.StructField('key', 0, 0, network.mojom.DeviceBoundSessionKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('refresh_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('inclusion_rules', 16, 0, network.mojom.DeviceBoundSessionInclusionRulesDisplaySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie_cravings', 24, 0, mojo.internal.Array(network.mojom.DeviceBoundSessionCookieCravingDisplaySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('expiry_date', 32, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cached_challenge', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('allowed_refresh_initiators', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: DeviceBoundSessionCreationDetails
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionCreationDetailsSpec, 'network.mojom.DeviceBoundSessionCreationDetails', [
      mojo.internal.StructField('fetch_error', 0, 0, network.mojom.DeviceBoundSessionErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_session_display', 8, 0, network.mojom.DeviceBoundSessionDisplaySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeviceBoundSessionRefreshDetails
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionRefreshDetailsSpec, 'network.mojom.DeviceBoundSessionRefreshDetails', [
      mojo.internal.StructField('refresh_result', 0, 0, network.mojom.DeviceBoundSessionRefreshResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fetch_error', 8, 0, network.mojom.DeviceBoundSessionErrorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('new_session_display', 16, 0, network.mojom.DeviceBoundSessionDisplaySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('was_fully_proactive_refresh', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DeviceBoundSessionTerminationDetails
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionTerminationDetailsSpec, 'network.mojom.DeviceBoundSessionTerminationDetails', [
      mojo.internal.StructField('deletion_reason', 0, 0, network.mojom.DeviceBoundSessionDeletionReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DeviceBoundSessionChallengeDetails
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionChallengeDetailsSpec, 'network.mojom.DeviceBoundSessionChallengeDetails', [
      mojo.internal.StructField('challenge_result', 0, 0, network.mojom.DeviceBoundSessionChallengeResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('challenge', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeviceBoundSessionEvent
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionEventSpec, 'network.mojom.DeviceBoundSessionEvent', [
      mojo.internal.StructField('event_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site', 8, 0, network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('event_type_details', 24, 0, network.mojom.DeviceBoundSessionEventTypeDetailsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('succeeded', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: DeviceBoundSessionManager
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionManager_GetAllSessions_ParamsSpec, 'network.mojom.DeviceBoundSessionManager_GetAllSessions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.DeviceBoundSessionManager_GetAllSessions_ResponseParamsSpec, 'network.mojom.DeviceBoundSessionManager_GetAllSessions_ResponseParams', [
      mojo.internal.StructField('sessions', 0, 0, mojo.internal.Array(network.mojom.DeviceBoundSessionKeySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec, 'network.mojom.DeviceBoundSessionManager_DeleteSession_Params', [
      mojo.internal.StructField('reason', 0, 0, network.mojom.DeviceBoundSessionDeletionReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, network.mojom.DeviceBoundSessionKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec, 'network.mojom.DeviceBoundSessionManager_DeleteAllSessions_Params', [
      mojo.internal.StructField('reason', 0, 0, network.mojom.DeviceBoundSessionDeletionReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('created_after_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('created_before_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, network.mojom.ClearDataFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ResponseParamsSpec, 'network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec, 'network.mojom.DeviceBoundSessionManager_AddObserver_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(network.mojom.DeviceBoundSessionAccessObserverSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec, 'network.mojom.DeviceBoundSessionManager_AddEventObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(network.mojom.DeviceBoundSessionEventObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec, 'network.mojom.DeviceBoundSessionManager_CreateBoundSessions_Params', [
      mojo.internal.StructField('params', 0, 0, mojo.internal.Array(network.mojom.DeviceBoundSessionParamsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('wrapped_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('cookies_to_set', 16, 0, mojo.internal.Array(network.mojom.CanonicalCookieSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('cookie_options', 24, 0, network.mojom.CookieOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParamsSpec, 'network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParams', [
      mojo.internal.StructField('session_results', 0, 0, mojo.internal.Array(network.mojom.DeviceBoundSessionErrorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('cookie_results', 8, 0, mojo.internal.Array(network.mojom.CookieInclusionStatusSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [],
      false);
  }

  deleteSession(reason, session) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec,
      null,
      [reason, session],
      false);
  }

  deleteAllSessions(reason, created_after_time, created_before_time, filter) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec,
      network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ResponseParamsSpec,
      [reason, created_after_time, created_before_time, filter],
      false);
  }

  addObserver(url, observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec,
      null,
      [url, observer],
      false);
  }

  addEventObserver(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  createBoundSessions(params, wrapped_key, cookies_to_set, cookie_options) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec,
      network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParamsSpec,
      [params, wrapped_key, cookies_to_set, cookie_options],
      false);
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

network.mojom.DeviceBoundSessionManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetAllSessions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.DeviceBoundSessionManager_GetAllSessions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllSessions (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: DeleteSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteSession (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: DeleteAllSessions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteAllSessions (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: AddEventObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddEventObserver (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: CreateBoundSessions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateBoundSessions (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(network.mojom.DeviceBoundSessionManager_GetAllSessions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAllSessions');
          const result = this.impl.getAllSessions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.DeviceBoundSessionManager_GetAllSessions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DeviceBoundSessionManager_DeleteSession_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteSession');
          const result = this.impl.deleteSession(params.reason, params.session);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteAllSessions');
          const result = this.impl.deleteAllSessions(params.reason, params.created_after_time, params.created_before_time, params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.DeviceBoundSessionManager_DeleteAllSessions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DeviceBoundSessionManager_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.url, params.observer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DeviceBoundSessionManager_AddEventObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addEventObserver');
          const result = this.impl.addEventObserver(params.observer);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createBoundSessions');
          const result = this.impl.createBoundSessions(params.params, params.wrapped_key, params.cookies_to_set, params.cookie_options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.DeviceBoundSessionManager_CreateBoundSessions_ResponseParamsSpec);
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

network.mojom.DeviceBoundSessionManagerReceiver = network.mojom.DeviceBoundSessionManagerReceiver;

network.mojom.DeviceBoundSessionManagerPtr = network.mojom.DeviceBoundSessionManagerRemote;
network.mojom.DeviceBoundSessionManagerRequest = network.mojom.DeviceBoundSessionManagerPendingReceiver;


// Interface: DeviceBoundSessionAccessObserver
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_ParamsSpec, 'network.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_Params', [
      mojo.internal.StructField('access', 0, 0, network.mojom.DeviceBoundSessionAccessSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec, 'network.mojom.DeviceBoundSessionAccessObserver_Clone_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(network.mojom.DeviceBoundSessionAccessObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [access],
      false);
  }

  clone(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec,
      null,
      [observer],
      false);
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

network.mojom.DeviceBoundSessionAccessObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnDeviceBoundSessionAccessed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceBoundSessionAccessed (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(network.mojom.DeviceBoundSessionAccessObserver_OnDeviceBoundSessionAccessed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDeviceBoundSessionAccessed');
          const result = this.impl.onDeviceBoundSessionAccessed(params.access);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DeviceBoundSessionAccessObserver_Clone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.DeviceBoundSessionAccessObserverReceiver = network.mojom.DeviceBoundSessionAccessObserverReceiver;

network.mojom.DeviceBoundSessionAccessObserverPtr = network.mojom.DeviceBoundSessionAccessObserverRemote;
network.mojom.DeviceBoundSessionAccessObserverRequest = network.mojom.DeviceBoundSessionAccessObserverPendingReceiver;


// Interface: DeviceBoundSessionEventObserver
mojo.internal.Struct(
    network.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_ParamsSpec, 'network.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_Params', [
      mojo.internal.StructField('event', 0, 0, network.mojom.DeviceBoundSessionEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec, 'network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_Params', [
      mojo.internal.StructField('session_displays', 0, 0, mojo.internal.Array(network.mojom.DeviceBoundSessionDisplaySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [event],
      false);
  }

  addDeviceBoundSessionDisplays(session_displays) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec,
      null,
      [session_displays],
      false);
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

network.mojom.DeviceBoundSessionEventObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnDeviceBoundSessionEventReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceBoundSessionEventReceived (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: AddDeviceBoundSessionDisplays
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddDeviceBoundSessionDisplays (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(network.mojom.DeviceBoundSessionEventObserver_OnDeviceBoundSessionEventReceived_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDeviceBoundSessionEventReceived');
          const result = this.impl.onDeviceBoundSessionEventReceived(params.event);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.DeviceBoundSessionEventObserver_AddDeviceBoundSessionDisplays_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addDeviceBoundSessionDisplays');
          const result = this.impl.addDeviceBoundSessionDisplays(params.session_displays);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.DeviceBoundSessionEventObserverReceiver = network.mojom.DeviceBoundSessionEventObserverReceiver;

network.mojom.DeviceBoundSessionEventObserverPtr = network.mojom.DeviceBoundSessionEventObserverRemote;
network.mojom.DeviceBoundSessionEventObserverRequest = network.mojom.DeviceBoundSessionEventObserverPendingReceiver;

