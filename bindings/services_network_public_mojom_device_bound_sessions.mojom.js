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
        { name: 'sessions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'created_after_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'created_before_time', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'filter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'wrapped_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cookies_to_set', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cookie_options', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'session_results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cookie_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'access', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'session_displays', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.DeviceBoundSessionEventObserverPtr = network.mojom.DeviceBoundSessionEventObserverRemote;
network.mojom.DeviceBoundSessionEventObserverRequest = network.mojom.DeviceBoundSessionEventObserverPendingReceiver;

