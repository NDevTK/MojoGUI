// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/restricted_cookie_manager.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


network.mojom.kInvalidCookieVersion = 0;

network.mojom.kInitialCookieVersion = 1;

// Enum: CookieMatchType
network.mojom.CookieMatchType = {
  EQUALS: 0,
  STARTS_WITH: 1,
};
network.mojom.CookieMatchTypeSpec = { $: mojo.internal.Enum() };

// Enum: RestrictedCookieManagerRole
network.mojom.RestrictedCookieManagerRole = {
  SCRIPT: 0,
  NETWORK: 1,
};
network.mojom.RestrictedCookieManagerRoleSpec = { $: mojo.internal.Enum() };

// Struct: CookieManagerGetOptions
network.mojom.CookieManagerGetOptionsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieManagerGetOptions',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'match_type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.CookieMatchTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CookiesResponse
network.mojom.CookiesResponseSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookiesResponse',
      packedSize: 32,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'version_buffer', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: true, minVersion: 0 },
        { name: 'cookies', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: RestrictedCookieManager
network.mojom.RestrictedCookieManager = {};

network.mojom.RestrictedCookieManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.RestrictedCookieManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.RestrictedCookieManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.RestrictedCookieManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.RestrictedCookieManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.RestrictedCookieManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAllForUrl(url, site_for_cookies, top_frame_origin, storage_access_api_status, options, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.RestrictedCookieManager_GetAllForUrl_ParamsSpec,
      network.mojom.RestrictedCookieManager_GetAllForUrl_ResponseParamsSpec,
      [url, site_for_cookies, top_frame_origin, storage_access_api_status, options, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies]);
  }

  setCanonicalCookie(cookie, url, site_for_cookies, top_frame_origin, storage_access_api_status, status, is_ad_tagged, apply_devtools_overrides) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.RestrictedCookieManager_SetCanonicalCookie_ParamsSpec,
      network.mojom.RestrictedCookieManager_SetCanonicalCookie_ResponseParamsSpec,
      [cookie, url, site_for_cookies, top_frame_origin, storage_access_api_status, status, is_ad_tagged, apply_devtools_overrides]);
  }

  addChangeListener(url, site_for_cookies, top_frame_origin, storage_access_api_status, listener) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.RestrictedCookieManager_AddChangeListener_ParamsSpec,
      null,
      [url, site_for_cookies, top_frame_origin, storage_access_api_status, listener]);
  }

  setCookieFromString(url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, cookie) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.RestrictedCookieManager_SetCookieFromString_ParamsSpec,
      network.mojom.RestrictedCookieManager_SetCookieFromString_ResponseParamsSpec,
      [url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, cookie]);
  }

  getCookiesString(url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.RestrictedCookieManager_GetCookiesString_ParamsSpec,
      network.mojom.RestrictedCookieManager_GetCookiesString_ResponseParamsSpec,
      [url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies]);
  }

  cookiesEnabledFor(url, site_for_cookies, top_frame_origin, storage_access_api_status, apply_devtools_overrides) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.RestrictedCookieManager_CookiesEnabledFor_ParamsSpec,
      network.mojom.RestrictedCookieManager_CookiesEnabledFor_ResponseParamsSpec,
      [url, site_for_cookies, top_frame_origin, storage_access_api_status, apply_devtools_overrides]);
  }

};

network.mojom.RestrictedCookieManager.getRemote = function() {
  let remote = new network.mojom.RestrictedCookieManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.RestrictedCookieManager',
    'context');
  return remote.$;
};

// ParamsSpec for GetAllForUrl
network.mojom.RestrictedCookieManager_GetAllForUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedCookieManager.GetAllForUrl_Params',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'site_for_cookies', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SiteForCookiesSpec, nullable: false, minVersion: 0 },
        { name: 'top_frame_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'storage_access_api_status', packedOffset: 24, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 32, packedBitOffset: 0, type: network.mojom.CookieManagerGetOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'is_ad_tagged', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'apply_devtools_overrides', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_disable_third_party_cookies', packedOffset: 28, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

network.mojom.RestrictedCookieManager_GetAllForUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedCookieManager.GetAllForUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cookies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CookieWithAccessResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCanonicalCookie
network.mojom.RestrictedCookieManager_SetCanonicalCookie_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedCookieManager.SetCanonicalCookie_Params',
      packedSize: 56,
      fields: [
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CanonicalCookieSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'site_for_cookies', packedOffset: 16, packedBitOffset: 0, type: network.mojom.SiteForCookiesSpec, nullable: false, minVersion: 0 },
        { name: 'top_frame_origin', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'storage_access_api_status', packedOffset: 32, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 40, packedBitOffset: 0, type: network.mojom.CookieInclusionStatusSpec, nullable: false, minVersion: 0 },
        { name: 'is_ad_tagged', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'apply_devtools_overrides', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

network.mojom.RestrictedCookieManager_SetCanonicalCookie_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedCookieManager.SetCanonicalCookie_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddChangeListener
network.mojom.RestrictedCookieManager_AddChangeListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedCookieManager.AddChangeListener_Params',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'site_for_cookies', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SiteForCookiesSpec, nullable: false, minVersion: 0 },
        { name: 'top_frame_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'storage_access_api_status', packedOffset: 24, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false, minVersion: 0 },
        { name: 'listener', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for SetCookieFromString
network.mojom.RestrictedCookieManager_SetCookieFromString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedCookieManager.SetCookieFromString_Params',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'site_for_cookies', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SiteForCookiesSpec, nullable: false, minVersion: 0 },
        { name: 'top_frame_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'storage_access_api_status', packedOffset: 24, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false, minVersion: 0 },
        { name: 'get_version_shared_memory', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_ad_tagged', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'apply_devtools_overrides', packedOffset: 28, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cookie', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

network.mojom.RestrictedCookieManager_SetCookieFromString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedCookieManager.SetCookieFromString_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CookiesResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCookiesString
network.mojom.RestrictedCookieManager_GetCookiesString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedCookieManager.GetCookiesString_Params',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'site_for_cookies', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SiteForCookiesSpec, nullable: false, minVersion: 0 },
        { name: 'top_frame_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'storage_access_api_status', packedOffset: 24, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false, minVersion: 0 },
        { name: 'get_version_shared_memory', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_ad_tagged', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'apply_devtools_overrides', packedOffset: 28, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_disable_third_party_cookies', packedOffset: 28, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

network.mojom.RestrictedCookieManager_GetCookiesString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedCookieManager.GetCookiesString_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'version_buffer', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: true, minVersion: 0 },
        { name: 'cookies', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for CookiesEnabledFor
network.mojom.RestrictedCookieManager_CookiesEnabledFor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedCookieManager.CookiesEnabledFor_Params',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'site_for_cookies', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SiteForCookiesSpec, nullable: false, minVersion: 0 },
        { name: 'top_frame_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'storage_access_api_status', packedOffset: 24, packedBitOffset: 0, type: network.mojom.StorageAccessApiStatusSpec, nullable: false, minVersion: 0 },
        { name: 'apply_devtools_overrides', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

network.mojom.RestrictedCookieManager_CookiesEnabledFor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.RestrictedCookieManager.CookiesEnabledFor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cookies_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.RestrictedCookieManagerPtr = network.mojom.RestrictedCookieManagerRemote;
network.mojom.RestrictedCookieManagerRequest = network.mojom.RestrictedCookieManagerPendingReceiver;

