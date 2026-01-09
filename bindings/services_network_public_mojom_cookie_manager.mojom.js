// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_manager.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: CookieAccessDelegateType
network.mojom.CookieAccessDelegateType = {
  USE_CONTENT_SETTINGS: 0,
  ALWAYS_LEGACY: 1,
  ALWAYS_NONLEGACY: 2,
};

// Enum: CookiePriority
network.mojom.CookiePriority = {
  LOW: 0,
  MEDIUM: 1,
  HIGH: 2,
};

// Enum: CookieSourceScheme
network.mojom.CookieSourceScheme = {
  kUnset: 0,
  kNonSecure: 1,
  kSecure: 2,
};

// Enum: CookieSameSite
network.mojom.CookieSameSite = {
  UNSPECIFIED: 0,
  NO_RESTRICTION: 1,
  LAX_MODE: 2,
  STRICT_MODE: 3,
};

// Enum: CookieEffectiveSameSite
network.mojom.CookieEffectiveSameSite = {
  kNoRestriction: 0,
  kLaxMode: 1,
  kStrictMode: 2,
  kLaxModeAllowUnsafe: 3,
  kUndefined: 4,
};

// Enum: CookieExemptionReason
network.mojom.CookieExemptionReason = {
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
network.mojom.ContextType = {
  CROSS_SITE: 0,
  SAME_SITE_LAX_METHOD_UNSAFE: 1,
  SAME_SITE_LAX: 2,
  SAME_SITE_STRICT: 3,
};

// Enum: CookieSameSiteContextMetadataDowngradeType
network.mojom.CookieSameSiteContextMetadataDowngradeType = {
  kNoDowngrade: 0,
  kStrictToLax: 1,
  kStrictToCross: 2,
  kLaxToCross: 3,
};

// Enum: CookieSourceType
network.mojom.CookieSourceType = {
  kUnknown: 0,
  kHTTP: 1,
  kScript: 2,
  kOther: 3,
};

// Enum: ContextRedirectTypeBug1221316
network.mojom.ContextRedirectTypeBug1221316 = {
  kUnset: 0,
  kNoRedirect: 1,
  kCrossSiteRedirect: 2,
  kPartialSameSiteRedirect: 3,
  kAllSameSiteRedirect: 4,
};

// Enum: HttpMethod
network.mojom.HttpMethod = {
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
network.mojom.CookieAccessSemantics = {
  UNKNOWN: 0,
  NONLEGACY: 1,
  LEGACY: 2,
};

// Enum: CookieScopeSemantics
network.mojom.CookieScopeSemantics = {
  UNKNOWN: 0,
  NONLEGACY: 1,
  LEGACY: 2,
};

// Enum: CookieChangeCause
network.mojom.CookieChangeCause = {
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
network.mojom.CookieDeletionSessionControl = {
  IGNORE_CONTROL: 0,
  SESSION_COOKIES: 1,
  PERSISTENT_COOKIES: 2,
};

// Struct: CookieManagerParams
network.mojom.CookieManagerParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManagerParams',
      packedSize: 56,
      fields: [
        { name: 'content_settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'secure_origin_cookies_allowed_schemes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'matching_scheme_cookies_allowed_schemes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'third_party_cookies_allowed_schemes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'cookie_access_delegate_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'block_third_party_cookies', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'tracking_protection_enabled_for_3pcd', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'mitigations_enabled_for_3pcd', packedOffset: 40, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_file_scheme_cookies', packedOffset: 40, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CookieSameSiteContextMetadata
network.mojom.CookieSameSiteContextMetadataSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieSameSiteContextMetadata',
      packedSize: 24,
      fields: [
        { name: 'cross_site_redirect_downgrade', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'redirect_type_bug_1221316', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CookieSameSiteContext
network.mojom.CookieSameSiteContextSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieSameSiteContext',
      packedSize: 40,
      fields: [
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'schemeful_context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'metadata', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'schemeful_metadata', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CookieOptions
network.mojom.CookieOptionsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieOptions',
      packedSize: 24,
      fields: [
        { name: 'same_site_cookie_context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'exclude_httponly', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'update_access_time', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'return_excluded_cookies', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CanonicalCookie
network.mojom.CanonicalCookieSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CanonicalCookie',
      packedSize: 128,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'domain', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'path', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'creation', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'expiry', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'last_access', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'last_update', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'site_restrictions', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'priority', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source_scheme', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'partition_key', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'source_type', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source_port', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'secure', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'httponly', packedOffset: 108, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ExclusionReasons
network.mojom.ExclusionReasonsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ExclusionReasons',
      packedSize: 16,
      fields: [
        { name: 'exclusions_bitmask', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WarningReasons
network.mojom.WarningReasonsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WarningReasons',
      packedSize: 16,
      fields: [
        { name: 'warnings_bitmask', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CookieInclusionStatus
network.mojom.CookieInclusionStatusSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieInclusionStatus',
      packedSize: 32,
      fields: [
        { name: 'exclusion_reasons', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'warning_reasons', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'exemption_reason', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CookieAndLineWithAccessResult
network.mojom.CookieAndLineWithAccessResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieAndLineWithAccessResult',
      packedSize: 32,
      fields: [
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'cookie_string', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'access_result', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CookieOrLineWithAccessResult
network.mojom.CookieOrLineWithAccessResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieOrLineWithAccessResult',
      packedSize: 24,
      fields: [
        { name: 'cookie_or_line', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'access_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CookieAccessResult
network.mojom.CookieAccessResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieAccessResult',
      packedSize: 48,
      fields: [
        { name: 'effective_same_site', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'access_semantics', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'scope_semantics', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'status', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_allowed_to_access_secure_cookies', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CookieWithAccessResult
network.mojom.CookieWithAccessResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieWithAccessResult',
      packedSize: 24,
      fields: [
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'access_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CookieChangeInfo
network.mojom.CookieChangeInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieChangeInfo',
      packedSize: 32,
      fields: [
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'access_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cause', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CookieDeletionFilter
network.mojom.CookieDeletionFilterSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieDeletionFilter',
      packedSize: 88,
      fields: [
        { name: 'created_after_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'created_before_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'excluding_domains', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'including_domains', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'cookie_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'host_name', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'session_control', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cookie_partition_key_collection', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'partitioned_state_only', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: CookieChangeListener
network.mojom.CookieChangeListener = {};

network.mojom.CookieChangeListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CookieChangeListenerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CookieChangeListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CookieChangeListenerPendingReceiver,
      handle);
    this.$ = new network.mojom.CookieChangeListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.CookieChangeListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCookieChange(change) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CookieChangeListener_OnCookieChange_ParamsSpec,
      null,
      [change]);
  }

};

network.mojom.CookieChangeListener.getRemote = function() {
  let remote = new network.mojom.CookieChangeListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CookieChangeListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnCookieChange
network.mojom.CookieChangeListener_OnCookieChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieChangeListener.OnCookieChange_Params',
      packedSize: 16,
      fields: [
        { name: 'change', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.CookieChangeListenerPtr = network.mojom.CookieChangeListenerRemote;
network.mojom.CookieChangeListenerRequest = network.mojom.CookieChangeListenerPendingReceiver;


// Interface: CookieManager
network.mojom.CookieManager = {};

network.mojom.CookieManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CookieManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CookieManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CookieManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.CookieManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.CookieManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAllCookies() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CookieManager_GetAllCookies_ParamsSpec,
      network.mojom.CookieManager_GetAllCookies_ResponseParamsSpec,
      []);
  }

  getAllCookiesWithAccessSemantics() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ParamsSpec,
      network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParamsSpec,
      []);
  }

  getCookieList(url, cookie_options, cookie_partition_key_collection) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.CookieManager_GetCookieList_ParamsSpec,
      network.mojom.CookieManager_GetCookieList_ResponseParamsSpec,
      [url, cookie_options, cookie_partition_key_collection]);
  }

  setCanonicalCookie(cookie, source_url, cookie_options) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.CookieManager_SetCanonicalCookie_ParamsSpec,
      network.mojom.CookieManager_SetCanonicalCookie_ResponseParamsSpec,
      [cookie, source_url, cookie_options]);
  }

  deleteCanonicalCookie(cookie) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.CookieManager_DeleteCanonicalCookie_ParamsSpec,
      network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParamsSpec,
      [cookie]);
  }

  deleteCookies(filter) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.CookieManager_DeleteCookies_ParamsSpec,
      network.mojom.CookieManager_DeleteCookies_ResponseParamsSpec,
      [filter]);
  }

  deleteSessionOnlyCookies() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.CookieManager_DeleteSessionOnlyCookies_ParamsSpec,
      network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParamsSpec,
      []);
  }

  deleteStaleSessionOnlyCookies() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ParamsSpec,
      network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParamsSpec,
      []);
  }

  addCookieChangeListener(url, name, listener) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.CookieManager_AddCookieChangeListener_ParamsSpec,
      null,
      [url, name, listener]);
  }

  addGlobalChangeListener(notification_pointer) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec,
      null,
      [notification_pointer]);
  }

  cloneInterface(new_interface) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      network.mojom.CookieManager_CloneInterface_ParamsSpec,
      null,
      [new_interface]);
  }

  flushCookieStore() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      network.mojom.CookieManager_FlushCookieStore_ParamsSpec,
      null,
      []);
  }

  allowFileSchemeCookies(allow) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      network.mojom.CookieManager_AllowFileSchemeCookies_ParamsSpec,
      network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParamsSpec,
      [allow]);
  }

  setContentSettings(content_settings_type, settings) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      network.mojom.CookieManager_SetContentSettings_ParamsSpec,
      null,
      [content_settings_type, settings]);
  }

  setForceKeepSessionState() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      network.mojom.CookieManager_SetForceKeepSessionState_ParamsSpec,
      null,
      []);
  }

  blockThirdPartyCookies(block) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      network.mojom.CookieManager_BlockThirdPartyCookies_ParamsSpec,
      null,
      [block]);
  }

  setMitigationsEnabledFor3pcd(enable) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_ParamsSpec,
      null,
      [enable]);
  }

  setTrackingProtectionEnabledFor3pcd(enable) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_ParamsSpec,
      null,
      [enable]);
  }

  setPreCommitCallbackDelayForTesting(delay) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_ParamsSpec,
      null,
      [delay]);
  }

};

network.mojom.CookieManager.getRemote = function() {
  let remote = new network.mojom.CookieManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CookieManager',
    'context');
  return remote.$;
};

// ParamsSpec for GetAllCookies
network.mojom.CookieManager_GetAllCookies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.GetAllCookies_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.CookieManager_GetAllCookies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.GetAllCookies_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cookies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAllCookiesWithAccessSemantics
network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.GetAllCookiesWithAccessSemantics_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.GetAllCookiesWithAccessSemantics_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'cookies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'access_semantics_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCookieList
network.mojom.CookieManager_GetCookieList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.GetCookieList_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cookie_options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cookie_partition_key_collection', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.CookieManager_GetCookieList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.GetCookieList_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'cookies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'excluded_cookies', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCanonicalCookie
network.mojom.CookieManager_SetCanonicalCookie_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.SetCanonicalCookie_Params',
      packedSize: 32,
      fields: [
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cookie_options', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.CookieManager_SetCanonicalCookie_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.SetCanonicalCookie_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'access_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteCanonicalCookie
network.mojom.CookieManager_DeleteCanonicalCookie_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.DeleteCanonicalCookie_Params',
      packedSize: 16,
      fields: [
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.DeleteCanonicalCookie_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteCookies
network.mojom.CookieManager_DeleteCookies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.DeleteCookies_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.CookieManager_DeleteCookies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.DeleteCookies_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'num_deleted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteSessionOnlyCookies
network.mojom.CookieManager_DeleteSessionOnlyCookies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.DeleteSessionOnlyCookies_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.DeleteSessionOnlyCookies_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'num_deleted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteStaleSessionOnlyCookies
network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.DeleteStaleSessionOnlyCookies_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.DeleteStaleSessionOnlyCookies_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'num_deleted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddCookieChangeListener
network.mojom.CookieManager_AddCookieChangeListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.AddCookieChangeListener_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'listener', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddGlobalChangeListener
network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.AddGlobalChangeListener_Params',
      packedSize: 16,
      fields: [
        { name: 'notification_pointer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloneInterface
network.mojom.CookieManager_CloneInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.CloneInterface_Params',
      packedSize: 16,
      fields: [
        { name: 'new_interface', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FlushCookieStore
network.mojom.CookieManager_FlushCookieStore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.FlushCookieStore_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AllowFileSchemeCookies
network.mojom.CookieManager_AllowFileSchemeCookies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.AllowFileSchemeCookies_Params',
      packedSize: 16,
      fields: [
        { name: 'allow', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.AllowFileSchemeCookies_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetContentSettings
network.mojom.CookieManager_SetContentSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.SetContentSettings_Params',
      packedSize: 24,
      fields: [
        { name: 'content_settings_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetForceKeepSessionState
network.mojom.CookieManager_SetForceKeepSessionState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.SetForceKeepSessionState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BlockThirdPartyCookies
network.mojom.CookieManager_BlockThirdPartyCookies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.BlockThirdPartyCookies_Params',
      packedSize: 16,
      fields: [
        { name: 'block', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetMitigationsEnabledFor3pcd
network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.SetMitigationsEnabledFor3pcd_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTrackingProtectionEnabledFor3pcd
network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.SetTrackingProtectionEnabledFor3pcd_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPreCommitCallbackDelayForTesting
network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManager.SetPreCommitCallbackDelayForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'delay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.CookieManagerPtr = network.mojom.CookieManagerRemote;
network.mojom.CookieManagerRequest = network.mojom.CookieManagerPendingReceiver;

