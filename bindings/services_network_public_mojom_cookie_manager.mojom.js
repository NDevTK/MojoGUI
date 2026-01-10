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
network.mojom.CookieAccessDelegateTypeSpec = { $: mojo.internal.Enum() };

// Enum: CookiePriority
network.mojom.CookiePriority = {
  LOW: 0,
  MEDIUM: 1,
  HIGH: 2,
};
network.mojom.CookiePrioritySpec = { $: mojo.internal.Enum() };

// Enum: CookieSourceScheme
network.mojom.CookieSourceScheme = {
  kUnset: 0,
  kNonSecure: 1,
  kSecure: 2,
};
network.mojom.CookieSourceSchemeSpec = { $: mojo.internal.Enum() };

// Enum: CookieSameSite
network.mojom.CookieSameSite = {
  UNSPECIFIED: 0,
  NO_RESTRICTION: 1,
  LAX_MODE: 2,
  STRICT_MODE: 3,
};
network.mojom.CookieSameSiteSpec = { $: mojo.internal.Enum() };

// Enum: CookieEffectiveSameSite
network.mojom.CookieEffectiveSameSite = {
  kNoRestriction: 0,
  kLaxMode: 1,
  kStrictMode: 2,
  kLaxModeAllowUnsafe: 3,
  kUndefined: 4,
};
network.mojom.CookieEffectiveSameSiteSpec = { $: mojo.internal.Enum() };

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
network.mojom.CookieExemptionReasonSpec = { $: mojo.internal.Enum() };

// Enum: ContextType
network.mojom.ContextType = {
  CROSS_SITE: 0,
  SAME_SITE_LAX_METHOD_UNSAFE: 1,
  SAME_SITE_LAX: 2,
  SAME_SITE_STRICT: 3,
};
network.mojom.ContextTypeSpec = { $: mojo.internal.Enum() };

// Enum: CookieSameSiteContextMetadataDowngradeType
network.mojom.CookieSameSiteContextMetadataDowngradeType = {
  kNoDowngrade: 0,
  kStrictToLax: 1,
  kStrictToCross: 2,
  kLaxToCross: 3,
};
network.mojom.CookieSameSiteContextMetadataDowngradeTypeSpec = { $: mojo.internal.Enum() };

// Enum: CookieSourceType
network.mojom.CookieSourceType = {
  kUnknown: 0,
  kHTTP: 1,
  kScript: 2,
  kOther: 3,
};
network.mojom.CookieSourceTypeSpec = { $: mojo.internal.Enum() };

// Enum: ContextRedirectTypeBug1221316
network.mojom.ContextRedirectTypeBug1221316 = {
  kUnset: 0,
  kNoRedirect: 1,
  kCrossSiteRedirect: 2,
  kPartialSameSiteRedirect: 3,
  kAllSameSiteRedirect: 4,
};
network.mojom.ContextRedirectTypeBug1221316Spec = { $: mojo.internal.Enum() };

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
network.mojom.HttpMethodSpec = { $: mojo.internal.Enum() };

// Enum: CookieAccessSemantics
network.mojom.CookieAccessSemantics = {
  UNKNOWN: 0,
  NONLEGACY: 1,
  LEGACY: 2,
};
network.mojom.CookieAccessSemanticsSpec = { $: mojo.internal.Enum() };

// Enum: CookieScopeSemantics
network.mojom.CookieScopeSemantics = {
  UNKNOWN: 0,
  NONLEGACY: 1,
  LEGACY: 2,
};
network.mojom.CookieScopeSemanticsSpec = { $: mojo.internal.Enum() };

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
network.mojom.CookieChangeCauseSpec = { $: mojo.internal.Enum() };

// Enum: CookieDeletionSessionControl
network.mojom.CookieDeletionSessionControl = {
  IGNORE_CONTROL: 0,
  SESSION_COOKIES: 1,
  PERSISTENT_COOKIES: 2,
};
network.mojom.CookieDeletionSessionControlSpec = { $: mojo.internal.Enum() };

// Union: CookieOrLine
network.mojom.CookieOrLineSpec = { $: mojo.internal.Union(
    'network.mojom.CookieOrLine', {
      'cookie': {
        'ordinal': 0,
        'type': network.mojom.CanonicalCookieSpec,
      }},
      'cookie_string': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: CookieManagerParams
network.mojom.CookieManagerParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManagerParams',
      packedSize: 48,
      fields: [
        { name: 'block_third_party_cookies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tracking_protection_enabled_for_3pcd', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'mitigations_enabled_for_3pcd', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'content_settings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(content_settings.mojom.ContentSettingsTypeSpec, mojo.internal.Array(content_settings.mojom.ContentSettingPatternSourceSpec, false), false), nullable: false, minVersion: 0 },
        { name: 'secure_origin_cookies_allowed_schemes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'matching_scheme_cookies_allowed_schemes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'third_party_cookies_allowed_schemes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'allow_file_scheme_cookies', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cookie_access_delegate_type', packedOffset: 4, packedBitOffset: 0, type: network.mojom.CookieAccessDelegateTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: CookieSameSiteContextMetadata
network.mojom.CookieSameSiteContextMetadataSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieSameSiteContextMetadata',
      packedSize: 16,
      fields: [
        { name: 'cross_site_redirect_downgrade', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CookieSameSiteContextMetadataDowngradeTypeSpec, nullable: false, minVersion: 0 },
        { name: 'redirect_type_bug_1221316', packedOffset: 4, packedBitOffset: 0, type: network.mojom.ContextRedirectTypeBug1221316Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CookieSameSiteContext
network.mojom.CookieSameSiteContextSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieSameSiteContext',
      packedSize: 32,
      fields: [
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ContextTypeSpec, nullable: false, minVersion: 0 },
        { name: 'schemeful_context', packedOffset: 4, packedBitOffset: 0, type: network.mojom.ContextTypeSpec, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: network.mojom.CookieSameSiteContextMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'schemeful_metadata', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CookieSameSiteContextMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'exclude_httponly', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'same_site_cookie_context', packedOffset: 8, packedBitOffset: 0, type: network.mojom.CookieSameSiteContextSpec, nullable: false, minVersion: 0 },
        { name: 'update_access_time', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'return_excluded_cookies', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CanonicalCookie
network.mojom.CanonicalCookieSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CanonicalCookie',
      packedSize: 104,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'domain', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'creation', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'expiry', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'last_access', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'last_update', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'secure', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'httponly', packedOffset: 64, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'site_restrictions', packedOffset: 68, packedBitOffset: 0, type: network.mojom.CookieSameSiteSpec, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 72, packedBitOffset: 0, type: network.mojom.CookiePrioritySpec, nullable: false, minVersion: 0 },
        { name: 'source_scheme', packedOffset: 76, packedBitOffset: 0, type: network.mojom.CookieSourceSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'partition_key', packedOffset: 80, packedBitOffset: 0, type: network.mojom.CookiePartitionKeySpec, nullable: true, minVersion: 0 },
        { name: 'source_port', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'source_type', packedOffset: 92, packedBitOffset: 0, type: network.mojom.CookieSourceTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
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
        { name: 'exclusions_bitmask', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'warnings_bitmask', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'exclusion_reasons', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ExclusionReasonsSpec, nullable: false, minVersion: 0 },
        { name: 'warning_reasons', packedOffset: 8, packedBitOffset: 0, type: network.mojom.WarningReasonsSpec, nullable: false, minVersion: 0 },
        { name: 'exemption_reason', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CookieExemptionReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CanonicalCookieSpec, nullable: true, minVersion: 0 },
        { name: 'cookie_string', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'access_result', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CookieAccessResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CookieOrLineWithAccessResult
network.mojom.CookieOrLineWithAccessResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieOrLineWithAccessResult',
      packedSize: 32,
      fields: [
        { name: 'cookie_or_line', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CookieOrLineSpec, nullable: false, minVersion: 0 },
        { name: 'access_result', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CookieAccessResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CookieAccessResult
network.mojom.CookieAccessResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieAccessResult',
      packedSize: 32,
      fields: [
        { name: 'effective_same_site', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CookieEffectiveSameSiteSpec, nullable: false, minVersion: 0 },
        { name: 'access_semantics', packedOffset: 4, packedBitOffset: 0, type: network.mojom.CookieAccessSemanticsSpec, nullable: false, minVersion: 0 },
        { name: 'scope_semantics', packedOffset: 8, packedBitOffset: 0, type: network.mojom.CookieScopeSemanticsSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CookieInclusionStatusSpec, nullable: false, minVersion: 0 },
        { name: 'is_allowed_to_access_secure_cookies', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CanonicalCookieSpec, nullable: false, minVersion: 0 },
        { name: 'access_result', packedOffset: 8, packedBitOffset: 0, type: network.mojom.CookieAccessResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CanonicalCookieSpec, nullable: false, minVersion: 0 },
        { name: 'access_result', packedOffset: 8, packedBitOffset: 0, type: network.mojom.CookieAccessResultSpec, nullable: false, minVersion: 0 },
        { name: 'cause', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CookieChangeCauseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CookieDeletionFilter
network.mojom.CookieDeletionFilterSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieDeletionFilter',
      packedSize: 80,
      fields: [
        { name: 'created_after_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'created_before_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'excluding_domains', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'including_domains', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'cookie_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'host_name', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'url', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'session_control', packedOffset: 56, packedBitOffset: 0, type: network.mojom.CookieDeletionSessionControlSpec, nullable: false, minVersion: 0 },
        { name: 'cookie_partition_key_collection', packedOffset: 64, packedBitOffset: 0, type: network.mojom.CookiePartitionKeyCollectionSpec, nullable: true, minVersion: 0 },
        { name: 'partitioned_state_only', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
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
        { name: 'change', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CookieChangeInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.CookieManager_GetAllCookies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cookies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CanonicalCookieSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'cookies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CanonicalCookieSpec, false), nullable: false, minVersion: 0 },
        { name: 'access_semantics_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CookieAccessSemanticsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'cookie_options', packedOffset: 8, packedBitOffset: 0, type: network.mojom.CookieOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'cookie_partition_key_collection', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CookiePartitionKeyCollectionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

network.mojom.CookieManager_GetCookieList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'cookies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CookieWithAccessResultSpec, false), nullable: false, minVersion: 0 },
        { name: 'excluded_cookies', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CookieWithAccessResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CanonicalCookieSpec, nullable: false, minVersion: 0 },
        { name: 'source_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'cookie_options', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CookieOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

network.mojom.CookieManager_SetCanonicalCookie_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'access_result', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CookieAccessResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CanonicalCookieSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CookieDeletionFilterSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.CookieManager_DeleteCookies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'num_deleted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'num_deleted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'num_deleted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'listener', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'notification_pointer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'new_interface', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'allow', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'content_settings_type', packedOffset: 0, packedBitOffset: 0, type: content_settings.mojom.ContentSettingsTypeSpec, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(content_settings.mojom.ContentSettingPatternSourceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'block', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.CookieManagerPtr = network.mojom.CookieManagerRemote;
network.mojom.CookieManagerRequest = network.mojom.CookieManagerPendingReceiver;

