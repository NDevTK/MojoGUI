// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_manager.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: CookieAccessDelegateType
network.mojom.CookieAccessDelegateType = {
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
  next: 4,
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
  but: 0,
  value: 1,
  expiry: 2,
  secure: 3,
  but: 4,
  it: 5,
  secure: 6,
  same: 7,
  http: 8,
  given: 9,
  and: 10,
  then: 11,
  then: 12,
  then: 13,
};

// Enum: CookieDeletionSessionControl
network.mojom.CookieDeletionSessionControl = {
  IGNORE_CONTROL: 0,
  SESSION_COOKIES: 1,
  PERSISTENT_COOKIES: 2,
};

// Struct: CookieManagerParams
network.mojom.CookieManagerParams = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
    this.USE_CONTENT_SETTINGS = values.USE_CONTENT_SETTINGS !== undefined ? values.USE_CONTENT_SETTINGS : null;
  }
};

// Struct: CookieSameSiteContextMetadata
network.mojom.CookieSameSiteContextMetadata = class {
  constructor(values = {}) {
    this.kUnset = values.kUnset !== undefined ? values.kUnset : null;
  }
};

// Struct: CookieSameSiteContext
network.mojom.CookieSameSiteContext = class {
  constructor(values = {}) {
    this.schemeful_metadata = values.schemeful_metadata !== undefined ? values.schemeful_metadata : null;
  }
};

// Struct: CookieOptions
network.mojom.CookieOptions = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: CanonicalCookie
network.mojom.CanonicalCookie = class {
  constructor(values = {}) {
    this.kUnknown = values.kUnknown !== undefined ? values.kUnknown : 0;
  }
};

// Struct: ExclusionReasons
network.mojom.ExclusionReasons = class {
  constructor(values = {}) {
    this.exclusions_bitmask = values.exclusions_bitmask !== undefined ? values.exclusions_bitmask : 0;
  }
};

// Struct: WarningReasons
network.mojom.WarningReasons = class {
  constructor(values = {}) {
    this.warnings_bitmask = values.warnings_bitmask !== undefined ? values.warnings_bitmask : 0;
  }
};

// Struct: CookieInclusionStatus
network.mojom.CookieInclusionStatus = class {
  constructor(values = {}) {
    this.exemption_reason = values.exemption_reason !== undefined ? values.exemption_reason : null;
  }
};

// Struct: CookieAndLineWithAccessResult
network.mojom.CookieAndLineWithAccessResult = class {
  constructor(values = {}) {
    this.access_result = values.access_result !== undefined ? values.access_result : "";
  }
};

// Struct: CookieOrLineWithAccessResult
network.mojom.CookieOrLineWithAccessResult = class {
  constructor(values = {}) {
    this.access_result = values.access_result !== undefined ? values.access_result : null;
  }
};

// Struct: CookieAccessResult
network.mojom.CookieAccessResult = class {
  constructor(values = {}) {
    this.is_allowed_to_access_secure_cookies = values.is_allowed_to_access_secure_cookies !== undefined ? values.is_allowed_to_access_secure_cookies : false;
  }
};

// Struct: CookieWithAccessResult
network.mojom.CookieWithAccessResult = class {
  constructor(values = {}) {
    this.access_result = values.access_result !== undefined ? values.access_result : null;
  }
};

// Struct: CookieChangeInfo
network.mojom.CookieChangeInfo = class {
  constructor(values = {}) {
    this.cause = values.cause !== undefined ? values.cause : null;
  }
};

// Struct: CookieDeletionFilter
network.mojom.CookieDeletionFilter = class {
  constructor(values = {}) {
    this.host_name = values.host_name !== undefined ? values.host_name : "";
  }
};

// Interface: CookieChangeListener
network.mojom.CookieChangeListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.CookieChangeListener';
  }

  onCookieChange(change) {
    // Method: OnCookieChange
    // Call: OnCookieChange(change)
  }

};

network.mojom.CookieChangeListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CookieManager
network.mojom.CookieManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.CookieManager';
  }

  getAllCookies() {
    // Method: GetAllCookies
    return new Promise((resolve) => {
      // Call: GetAllCookies()
      resolve({});
    });
  }

  getAllCookiesWithAccessSemantics() {
    // Method: GetAllCookiesWithAccessSemantics
    return new Promise((resolve) => {
      // Call: GetAllCookiesWithAccessSemantics()
      resolve({});
    });
  }

  getCookieList(url, cookie_options, cookie_partition_key_collection) {
    // Method: GetCookieList
    return new Promise((resolve) => {
      // Call: GetCookieList(url, cookie_options, cookie_partition_key_collection)
      resolve({});
    });
  }

  setCanonicalCookie(cookie, source_url, cookie_options) {
    // Method: SetCanonicalCookie
    return new Promise((resolve) => {
      // Call: SetCanonicalCookie(cookie, source_url, cookie_options)
      resolve({});
    });
  }

  deleteCanonicalCookie(cookie) {
    // Method: DeleteCanonicalCookie
    return new Promise((resolve) => {
      // Call: DeleteCanonicalCookie(cookie)
      resolve({});
    });
  }

  deleteCookies(filter) {
    // Method: DeleteCookies
    return new Promise((resolve) => {
      // Call: DeleteCookies(filter)
      resolve({});
    });
  }

  deleteSessionOnlyCookies() {
    // Method: DeleteSessionOnlyCookies
    return new Promise((resolve) => {
      // Call: DeleteSessionOnlyCookies()
      resolve({});
    });
  }

  deleteStaleSessionOnlyCookies() {
    // Method: DeleteStaleSessionOnlyCookies
    return new Promise((resolve) => {
      // Call: DeleteStaleSessionOnlyCookies()
      resolve({});
    });
  }

  addCookieChangeListener(url, name, listener) {
    // Method: AddCookieChangeListener
    // Call: AddCookieChangeListener(url, name, listener)
  }

  addGlobalChangeListener(notification_pointer) {
    // Method: AddGlobalChangeListener
    // Call: AddGlobalChangeListener(notification_pointer)
  }

  cloneInterface(new_interface) {
    // Method: CloneInterface
    // Call: CloneInterface(new_interface)
  }

  flushCookieStore() {
    // Method: FlushCookieStore
    // Call: FlushCookieStore()
  }

  allowFileSchemeCookies(allow) {
    // Method: AllowFileSchemeCookies
    return new Promise((resolve) => {
      // Call: AllowFileSchemeCookies(allow)
      resolve({});
    });
  }

  setContentSettings(content_settings_type, settings) {
    // Method: SetContentSettings
    // Call: SetContentSettings(content_settings_type, settings)
  }

  setForceKeepSessionState() {
    // Method: SetForceKeepSessionState
    // Call: SetForceKeepSessionState()
  }

  blockThirdPartyCookies(block) {
    // Method: BlockThirdPartyCookies
    // Call: BlockThirdPartyCookies(block)
  }

  setMitigationsEnabledFor3pcd(enable) {
    // Method: SetMitigationsEnabledFor3pcd
    // Call: SetMitigationsEnabledFor3pcd(enable)
  }

  setTrackingProtectionEnabledFor3pcd(enable) {
    // Method: SetTrackingProtectionEnabledFor3pcd
    // Call: SetTrackingProtectionEnabledFor3pcd(enable)
  }

  setPreCommitCallbackDelayForTesting(delay) {
    // Method: SetPreCommitCallbackDelayForTesting
    // Call: SetPreCommitCallbackDelayForTesting(delay)
  }

};

network.mojom.CookieManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
