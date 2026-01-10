// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_manager.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var content_settings = content_settings || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var url = url || {};

network.mojom.CookieAccessDelegateTypeSpec = { $: mojo.internal.Enum() };
network.mojom.CookiePrioritySpec = { $: mojo.internal.Enum() };
network.mojom.CookieSourceSchemeSpec = { $: mojo.internal.Enum() };
network.mojom.CookieSameSiteSpec = { $: mojo.internal.Enum() };
network.mojom.CookieEffectiveSameSiteSpec = { $: mojo.internal.Enum() };
network.mojom.CookieExemptionReasonSpec = { $: mojo.internal.Enum() };
network.mojom.ContextTypeSpec = { $: mojo.internal.Enum() };
network.mojom.CookieSameSiteContextMetadataDowngradeTypeSpec = { $: mojo.internal.Enum() };
network.mojom.CookieSourceTypeSpec = { $: mojo.internal.Enum() };
network.mojom.ContextRedirectTypeBug1221316Spec = { $: mojo.internal.Enum() };
network.mojom.HttpMethodSpec = { $: mojo.internal.Enum() };
network.mojom.CookieAccessSemanticsSpec = { $: mojo.internal.Enum() };
network.mojom.CookieScopeSemanticsSpec = { $: mojo.internal.Enum() };
network.mojom.CookieChangeCauseSpec = { $: mojo.internal.Enum() };
network.mojom.CookieDeletionSessionControlSpec = { $: mojo.internal.Enum() };
network.mojom.CookieOrLineSpec = { $: {} };
network.mojom.CookieManagerParamsSpec = { $: {} };
network.mojom.CookieSameSiteContextMetadataSpec = { $: {} };
network.mojom.CookieSameSiteContextSpec = { $: {} };
network.mojom.CookieOptionsSpec = { $: {} };
network.mojom.CanonicalCookieSpec = { $: {} };
network.mojom.ExclusionReasonsSpec = { $: {} };
network.mojom.WarningReasonsSpec = { $: {} };
network.mojom.CookieInclusionStatusSpec = { $: {} };
network.mojom.CookieAndLineWithAccessResultSpec = { $: {} };
network.mojom.CookieOrLineWithAccessResultSpec = { $: {} };
network.mojom.CookieAccessResultSpec = { $: {} };
network.mojom.CookieWithAccessResultSpec = { $: {} };
network.mojom.CookieChangeInfoSpec = { $: {} };
network.mojom.CookieDeletionFilterSpec = { $: {} };
network.mojom.CookieChangeListener = {};
network.mojom.CookieChangeListener.$interfaceName = 'network.mojom.CookieChangeListener';
network.mojom.CookieChangeListener_OnCookieChange_ParamsSpec = { $: {} };
network.mojom.CookieManager = {};
network.mojom.CookieManager.$interfaceName = 'network.mojom.CookieManager';
network.mojom.CookieManager_GetAllCookies_ParamsSpec = { $: {} };
network.mojom.CookieManager_GetAllCookies_ResponseParamsSpec = { $: {} };
network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ParamsSpec = { $: {} };
network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParamsSpec = { $: {} };
network.mojom.CookieManager_GetCookieList_ParamsSpec = { $: {} };
network.mojom.CookieManager_GetCookieList_ResponseParamsSpec = { $: {} };
network.mojom.CookieManager_SetCanonicalCookie_ParamsSpec = { $: {} };
network.mojom.CookieManager_SetCanonicalCookie_ResponseParamsSpec = { $: {} };
network.mojom.CookieManager_DeleteCanonicalCookie_ParamsSpec = { $: {} };
network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParamsSpec = { $: {} };
network.mojom.CookieManager_DeleteCookies_ParamsSpec = { $: {} };
network.mojom.CookieManager_DeleteCookies_ResponseParamsSpec = { $: {} };
network.mojom.CookieManager_DeleteSessionOnlyCookies_ParamsSpec = { $: {} };
network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParamsSpec = { $: {} };
network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ParamsSpec = { $: {} };
network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParamsSpec = { $: {} };
network.mojom.CookieManager_AddCookieChangeListener_ParamsSpec = { $: {} };
network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec = { $: {} };
network.mojom.CookieManager_CloneInterface_ParamsSpec = { $: {} };
network.mojom.CookieManager_FlushCookieStore_ParamsSpec = { $: {} };
network.mojom.CookieManager_FlushCookieStore_ResponseParamsSpec = { $: {} };
network.mojom.CookieManager_AllowFileSchemeCookies_ParamsSpec = { $: {} };
network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParamsSpec = { $: {} };
network.mojom.CookieManager_SetContentSettings_ParamsSpec = { $: {} };
network.mojom.CookieManager_SetContentSettings_ResponseParamsSpec = { $: {} };
network.mojom.CookieManager_SetForceKeepSessionState_ParamsSpec = { $: {} };
network.mojom.CookieManager_BlockThirdPartyCookies_ParamsSpec = { $: {} };
network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_ParamsSpec = { $: {} };
network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_ParamsSpec = { $: {} };
network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_ParamsSpec = { $: {} };

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
  UNSPECIFIED: -1,
  NO_RESTRICTION: 0,
  LAX_MODE: 1,
  STRICT_MODE: 2,
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
  UNKNOWN: -1,
  NONLEGACY: 0,
  LEGACY: 1,
};

// Enum: CookieScopeSemantics
network.mojom.CookieScopeSemantics = {
  UNKNOWN: -1,
  NONLEGACY: 0,
  LEGACY: 1,
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

// Union: CookieOrLine
mojo.internal.Union(
    network.mojom.CookieOrLineSpec, 'network.mojom.CookieOrLine', {
      'cookie': {
        'ordinal': 0,
        'type': network.mojom.CanonicalCookieSpec.$,
        'nullable': false,
      },
      'cookie_string': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: CookieManagerParams
mojo.internal.Struct(
    network.mojom.CookieManagerParamsSpec, 'network.mojom.CookieManagerParams', [
      mojo.internal.StructField('content_settings', 0, 0, mojo.internal.Map(content_settings.mojom.ContentSettingsTypeSpec.$, mojo.internal.Array(content_settings.mojom.ContentSettingPatternSourceSpec.$, false), false), null, false, 0, undefined),
      mojo.internal.StructField('secure_origin_cookies_allowed_schemes', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('matching_scheme_cookies_allowed_schemes', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('third_party_cookies_allowed_schemes', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('cookie_access_delegate_type', 32, 0, network.mojom.CookieAccessDelegateTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('block_third_party_cookies', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tracking_protection_enabled_for_3pcd', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('mitigations_enabled_for_3pcd', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_file_scheme_cookies', 40, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: CookieSameSiteContextMetadata
mojo.internal.Struct(
    network.mojom.CookieSameSiteContextMetadataSpec, 'network.mojom.CookieSameSiteContextMetadata', [
      mojo.internal.StructField('cross_site_redirect_downgrade', 0, 0, network.mojom.CookieSameSiteContextMetadataDowngradeTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('redirect_type_bug_1221316', 8, 0, network.mojom.ContextRedirectTypeBug1221316Spec.$, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CookieSameSiteContext
mojo.internal.Struct(
    network.mojom.CookieSameSiteContextSpec, 'network.mojom.CookieSameSiteContext', [
      mojo.internal.StructField('context', 0, 0, network.mojom.ContextTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('schemeful_context', 8, 0, network.mojom.ContextTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('metadata', 16, 0, network.mojom.CookieSameSiteContextMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('schemeful_metadata', 24, 0, network.mojom.CookieSameSiteContextMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CookieOptions
mojo.internal.Struct(
    network.mojom.CookieOptionsSpec, 'network.mojom.CookieOptions', [
      mojo.internal.StructField('same_site_cookie_context', 0, 0, network.mojom.CookieSameSiteContextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('exclude_httponly', 8, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('update_access_time', 8, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('return_excluded_cookies', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CanonicalCookie
mojo.internal.Struct(
    network.mojom.CanonicalCookieSpec, 'network.mojom.CanonicalCookie', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('domain', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('path', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('creation', 32, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expiry', 40, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_access', 48, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_update', 56, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_restrictions', 64, 0, network.mojom.CookieSameSiteSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('priority', 72, 0, network.mojom.CookiePrioritySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('source_scheme', 80, 0, network.mojom.CookieSourceSchemeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('partition_key', 88, 0, network.mojom.CookiePartitionKeySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('source_type', 96, 0, network.mojom.CookieSourceTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('source_port', 104, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('secure', 108, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('httponly', 108, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: ExclusionReasons
mojo.internal.Struct(
    network.mojom.ExclusionReasonsSpec, 'network.mojom.ExclusionReasons', [
      mojo.internal.StructField('exclusions_bitmask', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WarningReasons
mojo.internal.Struct(
    network.mojom.WarningReasonsSpec, 'network.mojom.WarningReasons', [
      mojo.internal.StructField('warnings_bitmask', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CookieInclusionStatus
mojo.internal.Struct(
    network.mojom.CookieInclusionStatusSpec, 'network.mojom.CookieInclusionStatus', [
      mojo.internal.StructField('exclusion_reasons', 0, 0, network.mojom.ExclusionReasonsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('warning_reasons', 8, 0, network.mojom.WarningReasonsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('exemption_reason', 16, 0, network.mojom.CookieExemptionReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CookieAndLineWithAccessResult
mojo.internal.Struct(
    network.mojom.CookieAndLineWithAccessResultSpec, 'network.mojom.CookieAndLineWithAccessResult', [
      mojo.internal.StructField('cookie', 0, 0, network.mojom.CanonicalCookieSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cookie_string', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('access_result', 16, 0, network.mojom.CookieAccessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CookieOrLineWithAccessResult
mojo.internal.Struct(
    network.mojom.CookieOrLineWithAccessResultSpec, 'network.mojom.CookieOrLineWithAccessResult', [
      mojo.internal.StructField('cookie_or_line', 0, 0, network.mojom.CookieOrLineSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('access_result', 8, 0, network.mojom.CookieAccessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CookieAccessResult
mojo.internal.Struct(
    network.mojom.CookieAccessResultSpec, 'network.mojom.CookieAccessResult', [
      mojo.internal.StructField('effective_same_site', 0, 0, network.mojom.CookieEffectiveSameSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('access_semantics', 8, 0, network.mojom.CookieAccessSemanticsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scope_semantics', 16, 0, network.mojom.CookieScopeSemanticsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 24, 0, network.mojom.CookieInclusionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_allowed_to_access_secure_cookies', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: CookieWithAccessResult
mojo.internal.Struct(
    network.mojom.CookieWithAccessResultSpec, 'network.mojom.CookieWithAccessResult', [
      mojo.internal.StructField('cookie', 0, 0, network.mojom.CanonicalCookieSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('access_result', 8, 0, network.mojom.CookieAccessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CookieChangeInfo
mojo.internal.Struct(
    network.mojom.CookieChangeInfoSpec, 'network.mojom.CookieChangeInfo', [
      mojo.internal.StructField('cookie', 0, 0, network.mojom.CanonicalCookieSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('access_result', 8, 0, network.mojom.CookieAccessResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cause', 16, 0, network.mojom.CookieChangeCauseSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CookieDeletionFilter
mojo.internal.Struct(
    network.mojom.CookieDeletionFilterSpec, 'network.mojom.CookieDeletionFilter', [
      mojo.internal.StructField('created_after_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('created_before_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('excluding_domains', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('including_domains', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('cookie_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('host_name', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('url', 48, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('session_control', 56, 0, network.mojom.CookieDeletionSessionControlSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('cookie_partition_key_collection', 64, 0, network.mojom.CookiePartitionKeyCollectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('partitioned_state_only', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Interface: CookieChangeListener
mojo.internal.Struct(
    network.mojom.CookieChangeListener_OnCookieChange_ParamsSpec, 'network.mojom.CookieChangeListener_OnCookieChange_Params', [
      mojo.internal.StructField('change', 0, 0, network.mojom.CookieChangeInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [change],
      false);
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

network.mojom.CookieChangeListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: OnCookieChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.CookieChangeListener_OnCookieChange_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(network.mojom.CookieChangeListener_OnCookieChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCookieChange');
          const result = this.impl.onCookieChange(params.change);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.CookieChangeListenerReceiver = network.mojom.CookieChangeListenerReceiver;

network.mojom.CookieChangeListenerPtr = network.mojom.CookieChangeListenerRemote;
network.mojom.CookieChangeListenerRequest = network.mojom.CookieChangeListenerPendingReceiver;


// Interface: CookieManager
mojo.internal.Struct(
    network.mojom.CookieManager_GetAllCookies_ParamsSpec, 'network.mojom.CookieManager_GetAllCookies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.CookieManager_GetAllCookies_ResponseParamsSpec, 'network.mojom.CookieManager_GetAllCookies_ResponseParams', [
      mojo.internal.StructField('cookies', 0, 0, mojo.internal.Array(network.mojom.CanonicalCookieSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ParamsSpec, 'network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParamsSpec, 'network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParams', [
      mojo.internal.StructField('cookies', 0, 0, mojo.internal.Array(network.mojom.CanonicalCookieSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('access_semantics_list', 8, 0, mojo.internal.Array(network.mojom.CookieAccessSemanticsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.CookieManager_GetCookieList_ParamsSpec, 'network.mojom.CookieManager_GetCookieList_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie_options', 8, 0, network.mojom.CookieOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie_partition_key_collection', 16, 0, network.mojom.CookiePartitionKeyCollectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.CookieManager_GetCookieList_ResponseParamsSpec, 'network.mojom.CookieManager_GetCookieList_ResponseParams', [
      mojo.internal.StructField('cookies', 0, 0, mojo.internal.Array(network.mojom.CookieWithAccessResultSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('excluded_cookies', 8, 0, mojo.internal.Array(network.mojom.CookieWithAccessResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.CookieManager_SetCanonicalCookie_ParamsSpec, 'network.mojom.CookieManager_SetCanonicalCookie_Params', [
      mojo.internal.StructField('cookie', 0, 0, network.mojom.CanonicalCookieSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie_options', 16, 0, network.mojom.CookieOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.CookieManager_SetCanonicalCookie_ResponseParamsSpec, 'network.mojom.CookieManager_SetCanonicalCookie_ResponseParams', [
      mojo.internal.StructField('access_result', 0, 0, network.mojom.CookieAccessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_DeleteCanonicalCookie_ParamsSpec, 'network.mojom.CookieManager_DeleteCanonicalCookie_Params', [
      mojo.internal.StructField('cookie', 0, 0, network.mojom.CanonicalCookieSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParamsSpec, 'network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_DeleteCookies_ParamsSpec, 'network.mojom.CookieManager_DeleteCookies_Params', [
      mojo.internal.StructField('filter', 0, 0, network.mojom.CookieDeletionFilterSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_DeleteCookies_ResponseParamsSpec, 'network.mojom.CookieManager_DeleteCookies_ResponseParams', [
      mojo.internal.StructField('num_deleted', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_DeleteSessionOnlyCookies_ParamsSpec, 'network.mojom.CookieManager_DeleteSessionOnlyCookies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParamsSpec, 'network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParams', [
      mojo.internal.StructField('num_deleted', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ParamsSpec, 'network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParamsSpec, 'network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParams', [
      mojo.internal.StructField('num_deleted', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_AddCookieChangeListener_ParamsSpec, 'network.mojom.CookieManager_AddCookieChangeListener_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(network.mojom.CookieChangeListenerSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec, 'network.mojom.CookieManager_AddGlobalChangeListener_Params', [
      mojo.internal.StructField('notification_pointer', 0, 0, mojo.internal.InterfaceProxy(network.mojom.CookieChangeListenerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_CloneInterface_ParamsSpec, 'network.mojom.CookieManager_CloneInterface_Params', [
      mojo.internal.StructField('new_interface', 0, 0, mojo.internal.InterfaceRequest(network.mojom.CookieManagerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_FlushCookieStore_ParamsSpec, 'network.mojom.CookieManager_FlushCookieStore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.CookieManager_FlushCookieStore_ResponseParamsSpec, 'network.mojom.CookieManager_FlushCookieStore_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.CookieManager_AllowFileSchemeCookies_ParamsSpec, 'network.mojom.CookieManager_AllowFileSchemeCookies_Params', [
      mojo.internal.StructField('allow', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParamsSpec, 'network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_SetContentSettings_ParamsSpec, 'network.mojom.CookieManager_SetContentSettings_Params', [
      mojo.internal.StructField('content_settings_type', 0, 0, content_settings.mojom.ContentSettingsTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, mojo.internal.Array(content_settings.mojom.ContentSettingPatternSourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.CookieManager_SetContentSettings_ResponseParamsSpec, 'network.mojom.CookieManager_SetContentSettings_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.CookieManager_SetForceKeepSessionState_ParamsSpec, 'network.mojom.CookieManager_SetForceKeepSessionState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.CookieManager_BlockThirdPartyCookies_ParamsSpec, 'network.mojom.CookieManager_BlockThirdPartyCookies_Params', [
      mojo.internal.StructField('block', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_ParamsSpec, 'network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_ParamsSpec, 'network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_ParamsSpec, 'network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_Params', [
      mojo.internal.StructField('delay', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  getAllCookiesWithAccessSemantics() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ParamsSpec,
      network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParamsSpec,
      [],
      false);
  }

  getCookieList(url, cookie_options, cookie_partition_key_collection) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.CookieManager_GetCookieList_ParamsSpec,
      network.mojom.CookieManager_GetCookieList_ResponseParamsSpec,
      [url, cookie_options, cookie_partition_key_collection],
      false);
  }

  setCanonicalCookie(cookie, source_url, cookie_options) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.CookieManager_SetCanonicalCookie_ParamsSpec,
      network.mojom.CookieManager_SetCanonicalCookie_ResponseParamsSpec,
      [cookie, source_url, cookie_options],
      false);
  }

  deleteCanonicalCookie(cookie) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.CookieManager_DeleteCanonicalCookie_ParamsSpec,
      network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParamsSpec,
      [cookie],
      false);
  }

  deleteCookies(filter) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.CookieManager_DeleteCookies_ParamsSpec,
      network.mojom.CookieManager_DeleteCookies_ResponseParamsSpec,
      [filter],
      false);
  }

  deleteSessionOnlyCookies() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.CookieManager_DeleteSessionOnlyCookies_ParamsSpec,
      network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParamsSpec,
      [],
      false);
  }

  deleteStaleSessionOnlyCookies() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ParamsSpec,
      network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParamsSpec,
      [],
      false);
  }

  addCookieChangeListener(url, name, listener) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.CookieManager_AddCookieChangeListener_ParamsSpec,
      null,
      [url, name, listener],
      false);
  }

  addGlobalChangeListener(notification_pointer) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec,
      null,
      [notification_pointer],
      false);
  }

  cloneInterface(new_interface) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      network.mojom.CookieManager_CloneInterface_ParamsSpec,
      null,
      [new_interface],
      false);
  }

  flushCookieStore() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      network.mojom.CookieManager_FlushCookieStore_ParamsSpec,
      network.mojom.CookieManager_FlushCookieStore_ResponseParamsSpec,
      [],
      false);
  }

  allowFileSchemeCookies(allow) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      network.mojom.CookieManager_AllowFileSchemeCookies_ParamsSpec,
      network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParamsSpec,
      [allow],
      false);
  }

  setContentSettings(content_settings_type, settings) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      network.mojom.CookieManager_SetContentSettings_ParamsSpec,
      network.mojom.CookieManager_SetContentSettings_ResponseParamsSpec,
      [content_settings_type, settings],
      false);
  }

  setForceKeepSessionState() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      network.mojom.CookieManager_SetForceKeepSessionState_ParamsSpec,
      null,
      [],
      false);
  }

  blockThirdPartyCookies(block) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      network.mojom.CookieManager_BlockThirdPartyCookies_ParamsSpec,
      null,
      [block],
      false);
  }

  setMitigationsEnabledFor3pcd(enable) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_ParamsSpec,
      null,
      [enable],
      false);
  }

  setTrackingProtectionEnabledFor3pcd(enable) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_ParamsSpec,
      null,
      [enable],
      false);
  }

  setPreCommitCallbackDelayForTesting(delay) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_ParamsSpec,
      null,
      [delay],
      false);
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

network.mojom.CookieManagerReceiver = class {
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
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
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
        
        // Try Method 0: GetAllCookies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.CookieManager_GetAllCookies_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_GetCookieList_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_SetCanonicalCookie_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_DeleteCanonicalCookie_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_DeleteCookies_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_DeleteSessionOnlyCookies_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_AddCookieChangeListener_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_CloneInterface_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_FlushCookieStore_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_AllowFileSchemeCookies_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_SetContentSettings_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_SetForceKeepSessionState_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_BlockThirdPartyCookies_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(network.mojom.CookieManager_GetAllCookies_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAllCookies');
          const result = this.impl.getAllCookies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CookieManager_GetAllCookies_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAllCookiesWithAccessSemantics');
          const result = this.impl.getAllCookiesWithAccessSemantics();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_GetCookieList_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCookieList');
          const result = this.impl.getCookieList(params.url, params.cookie_options, params.cookie_partition_key_collection);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CookieManager_GetCookieList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_SetCanonicalCookie_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCanonicalCookie');
          const result = this.impl.setCanonicalCookie(params.cookie, params.source_url, params.cookie_options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CookieManager_SetCanonicalCookie_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_DeleteCanonicalCookie_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteCanonicalCookie');
          const result = this.impl.deleteCanonicalCookie(params.cookie);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_DeleteCookies_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteCookies');
          const result = this.impl.deleteCookies(params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CookieManager_DeleteCookies_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_DeleteSessionOnlyCookies_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteSessionOnlyCookies');
          const result = this.impl.deleteSessionOnlyCookies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteStaleSessionOnlyCookies');
          const result = this.impl.deleteStaleSessionOnlyCookies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_AddCookieChangeListener_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addCookieChangeListener');
          const result = this.impl.addCookieChangeListener(params.url, params.name, params.listener);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addGlobalChangeListener');
          const result = this.impl.addGlobalChangeListener(params.notification_pointer);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_CloneInterface_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cloneInterface');
          const result = this.impl.cloneInterface(params.new_interface);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_FlushCookieStore_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.flushCookieStore');
          const result = this.impl.flushCookieStore();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CookieManager_FlushCookieStore_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_AllowFileSchemeCookies_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.allowFileSchemeCookies');
          const result = this.impl.allowFileSchemeCookies(params.allow);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_SetContentSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setContentSettings');
          const result = this.impl.setContentSettings(params.content_settings_type, params.settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.CookieManager_SetContentSettings_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_SetForceKeepSessionState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setForceKeepSessionState');
          const result = this.impl.setForceKeepSessionState();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_BlockThirdPartyCookies_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.blockThirdPartyCookies');
          const result = this.impl.blockThirdPartyCookies(params.block);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setMitigationsEnabledFor3pcd');
          const result = this.impl.setMitigationsEnabledFor3pcd(params.enable);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTrackingProtectionEnabledFor3pcd');
          const result = this.impl.setTrackingProtectionEnabledFor3pcd(params.enable);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPreCommitCallbackDelayForTesting');
          const result = this.impl.setPreCommitCallbackDelayForTesting(params.delay);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.CookieManagerReceiver = network.mojom.CookieManagerReceiver;

network.mojom.CookieManagerPtr = network.mojom.CookieManagerRemote;
network.mojom.CookieManagerRequest = network.mojom.CookieManagerPendingReceiver;

