// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/restricted_cookie_manager.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: CookieMatchType
network.mojom.CookieMatchType = {
  EQUALS: 0,
  STARTS_WITH: 1,
};

// Enum: RestrictedCookieManagerRole
network.mojom.RestrictedCookieManagerRole = {
};

// Struct: CookieManagerGetOptions
network.mojom.CookieManagerGetOptions = class {
  constructor(values = {}) {
    this.match_type = values.match_type !== undefined ? values.match_type : "";
  }
};

// Struct: CookiesResponse
network.mojom.CookiesResponse = class {
  constructor(values = {}) {
    this.cookies = values.cookies !== undefined ? values.cookies : 0;
  }
};

// Interface: RestrictedCookieManager
network.mojom.RestrictedCookieManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.RestrictedCookieManager';
  }

  getAllForUrl(url, site_for_cookies, top_frame_origin, storage_access_api_status, options, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies) {
    // Method: GetAllForUrl
    return new Promise((resolve) => {
      // Call: GetAllForUrl(url, site_for_cookies, top_frame_origin, storage_access_api_status, options, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies)
      resolve({});
    });
  }

  setCanonicalCookie(cookie, url, site_for_cookies, top_frame_origin, storage_access_api_status, status, is_ad_tagged, apply_devtools_overrides) {
    // Method: SetCanonicalCookie
    return new Promise((resolve) => {
      // Call: SetCanonicalCookie(cookie, url, site_for_cookies, top_frame_origin, storage_access_api_status, status, is_ad_tagged, apply_devtools_overrides)
      resolve({});
    });
  }

  addChangeListener(url, site_for_cookies, top_frame_origin, storage_access_api_status, listener) {
    // Method: AddChangeListener
    // Call: AddChangeListener(url, site_for_cookies, top_frame_origin, storage_access_api_status, listener)
  }

  setCookieFromString(url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, cookie) {
    // Method: SetCookieFromString
    return new Promise((resolve) => {
      // Call: SetCookieFromString(url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, cookie)
      resolve({});
    });
  }

  getCookiesString(url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies) {
    // Method: GetCookiesString
    return new Promise((resolve) => {
      // Call: GetCookiesString(url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies)
      resolve({});
    });
  }

  cookiesEnabledFor(url, site_for_cookies, top_frame_origin, storage_access_api_status, apply_devtools_overrides) {
    // Method: CookiesEnabledFor
    return new Promise((resolve) => {
      // Call: CookiesEnabledFor(url, site_for_cookies, top_frame_origin, storage_access_api_status, apply_devtools_overrides)
      resolve({});
    });
  }

};

network.mojom.RestrictedCookieManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
