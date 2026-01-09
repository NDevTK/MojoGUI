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
};

// Enum: DeviceBoundSessionScopeSpecificationType
network.mojom.DeviceBoundSessionScopeSpecificationType = {
  kExclude: 0,
  kInclude: 1,
};

// Enum: DeviceBoundSessionError
network.mojom.DeviceBoundSessionError = {
  kSuccess: 0,
  a: 1,
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
network.mojom.DeviceBoundSessionKey = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : "";
  }
};

// Struct: DeviceBoundSessionAccess
network.mojom.DeviceBoundSessionAccess = class {
  constructor(values = {}) {
    this.cookies = values.cookies !== undefined ? values.cookies : "";
  }
};

// Struct: DeviceBoundSessionScopeSpecification
network.mojom.DeviceBoundSessionScopeSpecification = class {
  constructor(values = {}) {
    this.path = values.path !== undefined ? values.path : "";
  }
};

// Struct: DeviceBoundSessionScope
network.mojom.DeviceBoundSessionScope = class {
  constructor(values = {}) {
    this.origin = values.origin !== undefined ? values.origin : false;
  }
};

// Struct: DeviceBoundSessionCredential
network.mojom.DeviceBoundSessionCredential = class {
  constructor(values = {}) {
    this.attributes = values.attributes !== undefined ? values.attributes : "";
  }
};

// Struct: DeviceBoundSessionParams
network.mojom.DeviceBoundSessionParams = class {
  constructor(values = {}) {
    this.allowed_refresh_initiators = values.allowed_refresh_initiators !== undefined ? values.allowed_refresh_initiators : "";
  }
};

// Struct: DeviceBoundSessionCookieCravingDisplay
network.mojom.DeviceBoundSessionCookieCravingDisplay = class {
  constructor(values = {}) {
    this.same_site = values.same_site !== undefined ? values.same_site : false;
  }
};

// Struct: DeviceBoundSessionUrlRuleDisplay
network.mojom.DeviceBoundSessionUrlRuleDisplay = class {
  constructor(values = {}) {
    this.path_prefix = values.path_prefix !== undefined ? values.path_prefix : "";
  }
};

// Struct: DeviceBoundSessionInclusionRulesDisplay
network.mojom.DeviceBoundSessionInclusionRulesDisplay = class {
  constructor(values = {}) {
    this.url_rules = values.url_rules !== undefined ? values.url_rules : false;
  }
};

// Struct: DeviceBoundSessionDisplay
network.mojom.DeviceBoundSessionDisplay = class {
  constructor(values = {}) {
    this.allowed_refresh_initiators = values.allowed_refresh_initiators !== undefined ? values.allowed_refresh_initiators : "";
  }
};

// Struct: DeviceBoundSessionCreationDetails
network.mojom.DeviceBoundSessionCreationDetails = class {
  constructor(values = {}) {
    this.new_session_display = values.new_session_display !== undefined ? values.new_session_display : null;
  }
};

// Struct: DeviceBoundSessionRefreshDetails
network.mojom.DeviceBoundSessionRefreshDetails = class {
  constructor(values = {}) {
    this.refresh_result = values.refresh_result !== undefined ? values.refresh_result : null;
    this.was_fully_proactive_refresh = values.was_fully_proactive_refresh !== undefined ? values.was_fully_proactive_refresh : false;
  }
};

// Struct: DeviceBoundSessionTerminationDetails
network.mojom.DeviceBoundSessionTerminationDetails = class {
  constructor(values = {}) {
    this.deletion_reason = values.deletion_reason !== undefined ? values.deletion_reason : null;
  }
};

// Struct: DeviceBoundSessionChallengeDetails
network.mojom.DeviceBoundSessionChallengeDetails = class {
  constructor(values = {}) {
    this.challenge_result = values.challenge_result !== undefined ? values.challenge_result : null;
    this.challenge = values.challenge !== undefined ? values.challenge : "";
  }
};

// Struct: DeviceBoundSessionEvent
network.mojom.DeviceBoundSessionEvent = class {
  constructor(values = {}) {
    this.event_type_details = values.event_type_details !== undefined ? values.event_type_details : false;
  }
};

// Interface: DeviceBoundSessionManager
network.mojom.DeviceBoundSessionManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.DeviceBoundSessionManager';
  }

  getAllSessions() {
    // Method: GetAllSessions
    return new Promise((resolve) => {
      // Call: GetAllSessions()
      resolve({});
    });
  }

  deleteSession(reason, session) {
    // Method: DeleteSession
    // Call: DeleteSession(reason, session)
  }

  deleteAllSessions(reason, created_after_time, created_before_time, filter) {
    // Method: DeleteAllSessions
    // Call: DeleteAllSessions(reason, created_after_time, created_before_time, filter)
  }

  addObserver(url, observer) {
    // Method: AddObserver
    // Call: AddObserver(url, observer)
  }

  addEventObserver(observer) {
    // Method: AddEventObserver
    // Call: AddEventObserver(observer)
  }

  createBoundSessions(params, wrapped_key, cookies_to_set, cookie_options) {
    // Method: CreateBoundSessions
    return new Promise((resolve) => {
      // Call: CreateBoundSessions(params, wrapped_key, cookies_to_set, cookie_options)
      resolve({});
    });
  }

};

network.mojom.DeviceBoundSessionManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DeviceBoundSessionAccessObserver
network.mojom.DeviceBoundSessionAccessObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.DeviceBoundSessionAccessObserver';
  }

  onDeviceBoundSessionAccessed(access) {
    // Method: OnDeviceBoundSessionAccessed
    // Call: OnDeviceBoundSessionAccessed(access)
  }

  clone(observer) {
    // Method: Clone
    // Call: Clone(observer)
  }

};

network.mojom.DeviceBoundSessionAccessObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DeviceBoundSessionEventObserver
network.mojom.DeviceBoundSessionEventObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.DeviceBoundSessionEventObserver';
  }

  onDeviceBoundSessionEventReceived(event) {
    // Method: OnDeviceBoundSessionEventReceived
    // Call: OnDeviceBoundSessionEventReceived(event)
  }

  addDeviceBoundSessionDisplays(session_displays) {
    // Method: AddDeviceBoundSessionDisplays
    // Call: AddDeviceBoundSessionDisplays(session_displays)
  }

};

network.mojom.DeviceBoundSessionEventObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
