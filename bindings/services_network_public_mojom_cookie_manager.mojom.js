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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.CookieChangeListener_OnCookieChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCookieChange(params.change);
          break;
        }
      }
    });
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
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(network.mojom.CookieChangeListenerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec, 'network.mojom.CookieManager_AddGlobalChangeListener_Params', [
      mojo.internal.StructField('notification_pointer', 0, 0, mojo.internal.InterfaceProxy(network.mojom.CookieChangeListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieManager_CloneInterface_ParamsSpec, 'network.mojom.CookieManager_CloneInterface_Params', [
      mojo.internal.StructField('new_interface', 0, 0, mojo.internal.InterfaceRequest(network.mojom.CookieManagerRemote), null, false, 0, undefined),
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.CookieManager_GetAllCookies_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAllCookies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, network.mojom.CookieManager_GetAllCookies_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAllCookiesWithAccessSemantics();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, network.mojom.CookieManager_GetAllCookiesWithAccessSemantics_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = network.mojom.CookieManager_GetCookieList_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getCookieList(params.url, params.cookie_options, params.cookie_partition_key_collection);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, network.mojom.CookieManager_GetCookieList_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 3: {
          const params = network.mojom.CookieManager_SetCanonicalCookie_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCanonicalCookie(params.cookie, params.source_url, params.cookie_options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, network.mojom.CookieManager_SetCanonicalCookie_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = network.mojom.CookieManager_DeleteCanonicalCookie_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteCanonicalCookie(params.cookie);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, network.mojom.CookieManager_DeleteCanonicalCookie_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 5: {
          const params = network.mojom.CookieManager_DeleteCookies_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteCookies(params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, network.mojom.CookieManager_DeleteCookies_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 6: {
          const params = network.mojom.CookieManager_DeleteSessionOnlyCookies_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteSessionOnlyCookies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, network.mojom.CookieManager_DeleteSessionOnlyCookies_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 7: {
          const params = network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteStaleSessionOnlyCookies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, network.mojom.CookieManager_DeleteStaleSessionOnlyCookies_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 8: {
          const params = network.mojom.CookieManager_AddCookieChangeListener_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addCookieChangeListener(params.url, params.name, params.listener);
          break;
        }
        case 9: {
          const params = network.mojom.CookieManager_AddGlobalChangeListener_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addGlobalChangeListener(params.notification_pointer);
          break;
        }
        case 10: {
          const params = network.mojom.CookieManager_CloneInterface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cloneInterface(params.new_interface);
          break;
        }
        case 11: {
          const params = network.mojom.CookieManager_FlushCookieStore_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flushCookieStore();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, network.mojom.CookieManager_FlushCookieStore_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 12: {
          const params = network.mojom.CookieManager_AllowFileSchemeCookies_ParamsSpec.$.decode(message.payload);
          const result = this.impl.allowFileSchemeCookies(params.allow);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, network.mojom.CookieManager_AllowFileSchemeCookies_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 13: {
          const params = network.mojom.CookieManager_SetContentSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setContentSettings(params.content_settings_type, params.settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, network.mojom.CookieManager_SetContentSettings_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 14: {
          const params = network.mojom.CookieManager_SetForceKeepSessionState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setForceKeepSessionState();
          break;
        }
        case 15: {
          const params = network.mojom.CookieManager_BlockThirdPartyCookies_ParamsSpec.$.decode(message.payload);
          const result = this.impl.blockThirdPartyCookies(params.block);
          break;
        }
        case 16: {
          const params = network.mojom.CookieManager_SetMitigationsEnabledFor3pcd_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setMitigationsEnabledFor3pcd(params.enable);
          break;
        }
        case 17: {
          const params = network.mojom.CookieManager_SetTrackingProtectionEnabledFor3pcd_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTrackingProtectionEnabledFor3pcd(params.enable);
          break;
        }
        case 18: {
          const params = network.mojom.CookieManager_SetPreCommitCallbackDelayForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPreCommitCallbackDelayForTesting(params.delay);
          break;
        }
      }
    });
  }
};

network.mojom.CookieManagerReceiver = network.mojom.CookieManagerReceiver;

network.mojom.CookieManagerPtr = network.mojom.CookieManagerRemote;
network.mojom.CookieManagerRequest = network.mojom.CookieManagerPendingReceiver;

