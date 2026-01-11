// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/restricted_cookie_manager.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

network.mojom.CookieMatchTypeSpec = { $: mojo.internal.Enum() };
network.mojom.RestrictedCookieManagerRoleSpec = { $: mojo.internal.Enum() };
network.mojom.CookieManagerGetOptionsSpec = { $: {} };
network.mojom.CookiesResponseSpec = { $: {} };
network.mojom.RestrictedCookieManager = {};
network.mojom.RestrictedCookieManager.$interfaceName = 'network.mojom.RestrictedCookieManager';
network.mojom.RestrictedCookieManager_GetAllForUrl_ParamsSpec = { $: {} };
network.mojom.RestrictedCookieManager_GetAllForUrl_ResponseParamsSpec = { $: {} };
network.mojom.RestrictedCookieManager_SetCanonicalCookie_ParamsSpec = { $: {} };
network.mojom.RestrictedCookieManager_SetCanonicalCookie_ResponseParamsSpec = { $: {} };
network.mojom.RestrictedCookieManager_AddChangeListener_ParamsSpec = { $: {} };
network.mojom.RestrictedCookieManager_AddChangeListener_ResponseParamsSpec = { $: {} };
network.mojom.RestrictedCookieManager_SetCookieFromString_ParamsSpec = { $: {} };
network.mojom.RestrictedCookieManager_SetCookieFromString_ResponseParamsSpec = { $: {} };
network.mojom.RestrictedCookieManager_GetCookiesString_ParamsSpec = { $: {} };
network.mojom.RestrictedCookieManager_GetCookiesString_ResponseParamsSpec = { $: {} };
network.mojom.RestrictedCookieManager_CookiesEnabledFor_ParamsSpec = { $: {} };
network.mojom.RestrictedCookieManager_CookiesEnabledFor_ResponseParamsSpec = { $: {} };

network.mojom.kInvalidCookieVersion = 0;

network.mojom.kInitialCookieVersion = 1;

// Enum: CookieMatchType
network.mojom.CookieMatchType = {
  EQUALS: 0,
  STARTS_WITH: 1,
};

// Enum: RestrictedCookieManagerRole
network.mojom.RestrictedCookieManagerRole = {
  SCRIPT: 0,
  NETWORK: 1,
};

// Struct: CookieManagerGetOptions
mojo.internal.Struct(
    network.mojom.CookieManagerGetOptionsSpec, 'network.mojom.CookieManagerGetOptions', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('match_type', 8, 0, network.mojom.CookieMatchTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CookiesResponse
mojo.internal.Struct(
    network.mojom.CookiesResponseSpec, 'network.mojom.CookiesResponse', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('version_buffer', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cookies', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: RestrictedCookieManager
mojo.internal.Struct(
    network.mojom.RestrictedCookieManager_GetAllForUrl_ParamsSpec, 'network.mojom.RestrictedCookieManager_GetAllForUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 8, 0, network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_frame_origin', 16, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_access_api_status', 24, 0, network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 32, 0, network.mojom.CookieManagerGetOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_ad_tagged', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('apply_devtools_overrides', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_disable_third_party_cookies', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    network.mojom.RestrictedCookieManager_GetAllForUrl_ResponseParamsSpec, 'network.mojom.RestrictedCookieManager_GetAllForUrl_ResponseParams', [
      mojo.internal.StructField('cookies', 0, 0, mojo.internal.Array(network.mojom.CookieWithAccessResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.RestrictedCookieManager_SetCanonicalCookie_ParamsSpec, 'network.mojom.RestrictedCookieManager_SetCanonicalCookie_Params', [
      mojo.internal.StructField('cookie', 0, 0, network.mojom.CanonicalCookieSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 16, 0, network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_frame_origin', 24, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_access_api_status', 32, 0, network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 40, 0, network.mojom.CookieInclusionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_ad_tagged', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('apply_devtools_overrides', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    network.mojom.RestrictedCookieManager_SetCanonicalCookie_ResponseParamsSpec, 'network.mojom.RestrictedCookieManager_SetCanonicalCookie_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.RestrictedCookieManager_AddChangeListener_ParamsSpec, 'network.mojom.RestrictedCookieManager_AddChangeListener_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 8, 0, network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_frame_origin', 16, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_access_api_status', 24, 0, network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listener', 32, 0, mojo.internal.InterfaceProxy(network.mojom.CookieChangeListenerRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.RestrictedCookieManager_AddChangeListener_ResponseParamsSpec, 'network.mojom.RestrictedCookieManager_AddChangeListener_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.RestrictedCookieManager_SetCookieFromString_ParamsSpec, 'network.mojom.RestrictedCookieManager_SetCookieFromString_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 8, 0, network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_frame_origin', 16, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_access_api_status', 24, 0, network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cookie', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('get_version_shared_memory', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_ad_tagged', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('apply_devtools_overrides', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    network.mojom.RestrictedCookieManager_SetCookieFromString_ResponseParamsSpec, 'network.mojom.RestrictedCookieManager_SetCookieFromString_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, network.mojom.CookiesResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.RestrictedCookieManager_GetCookiesString_ParamsSpec, 'network.mojom.RestrictedCookieManager_GetCookiesString_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 8, 0, network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_frame_origin', 16, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_access_api_status', 24, 0, network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('get_version_shared_memory', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_ad_tagged', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('apply_devtools_overrides', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_disable_third_party_cookies', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.RestrictedCookieManager_GetCookiesString_ResponseParamsSpec, 'network.mojom.RestrictedCookieManager_GetCookiesString_ResponseParams', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('version_buffer', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cookies', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.RestrictedCookieManager_CookiesEnabledFor_ParamsSpec, 'network.mojom.RestrictedCookieManager_CookiesEnabledFor_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 8, 0, network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_frame_origin', 16, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_access_api_status', 24, 0, network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('apply_devtools_overrides', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.RestrictedCookieManager_CookiesEnabledFor_ResponseParamsSpec, 'network.mojom.RestrictedCookieManager_CookiesEnabledFor_ResponseParams', [
      mojo.internal.StructField('cookies_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getAllForUrl(url, site_for_cookies, top_frame_origin, storage_access_api_status, options, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies) {
    return this.$.getAllForUrl(url, site_for_cookies, top_frame_origin, storage_access_api_status, options, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies);
  }
  setCanonicalCookie(cookie, url, site_for_cookies, top_frame_origin, storage_access_api_status, status, is_ad_tagged, apply_devtools_overrides) {
    return this.$.setCanonicalCookie(cookie, url, site_for_cookies, top_frame_origin, storage_access_api_status, status, is_ad_tagged, apply_devtools_overrides);
  }
  addChangeListener(url, site_for_cookies, top_frame_origin, storage_access_api_status, listener) {
    return this.$.addChangeListener(url, site_for_cookies, top_frame_origin, storage_access_api_status, listener);
  }
  setCookieFromString(url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, cookie) {
    return this.$.setCookieFromString(url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, cookie);
  }
  getCookiesString(url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies) {
    return this.$.getCookiesString(url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies);
  }
  cookiesEnabledFor(url, site_for_cookies, top_frame_origin, storage_access_api_status, apply_devtools_overrides) {
    return this.$.cookiesEnabledFor(url, site_for_cookies, top_frame_origin, storage_access_api_status, apply_devtools_overrides);
  }
};

network.mojom.RestrictedCookieManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RestrictedCookieManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getAllForUrl(url, site_for_cookies, top_frame_origin, storage_access_api_status, options, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.RestrictedCookieManager_GetAllForUrl_ParamsSpec,
      network.mojom.RestrictedCookieManager_GetAllForUrl_ResponseParamsSpec,
      [url, site_for_cookies, top_frame_origin, storage_access_api_status, options, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies],
      false);
  }

  setCanonicalCookie(cookie, url, site_for_cookies, top_frame_origin, storage_access_api_status, status, is_ad_tagged, apply_devtools_overrides) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.RestrictedCookieManager_SetCanonicalCookie_ParamsSpec,
      network.mojom.RestrictedCookieManager_SetCanonicalCookie_ResponseParamsSpec,
      [cookie, url, site_for_cookies, top_frame_origin, storage_access_api_status, status, is_ad_tagged, apply_devtools_overrides],
      false);
  }

  addChangeListener(url, site_for_cookies, top_frame_origin, storage_access_api_status, listener) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.RestrictedCookieManager_AddChangeListener_ParamsSpec,
      network.mojom.RestrictedCookieManager_AddChangeListener_ResponseParamsSpec,
      [url, site_for_cookies, top_frame_origin, storage_access_api_status, listener],
      false);
  }

  setCookieFromString(url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, cookie) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.RestrictedCookieManager_SetCookieFromString_ParamsSpec,
      network.mojom.RestrictedCookieManager_SetCookieFromString_ResponseParamsSpec,
      [url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, cookie],
      false);
  }

  getCookiesString(url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      network.mojom.RestrictedCookieManager_GetCookiesString_ParamsSpec,
      network.mojom.RestrictedCookieManager_GetCookiesString_ResponseParamsSpec,
      [url, site_for_cookies, top_frame_origin, storage_access_api_status, get_version_shared_memory, is_ad_tagged, apply_devtools_overrides, force_disable_third_party_cookies],
      false);
  }

  cookiesEnabledFor(url, site_for_cookies, top_frame_origin, storage_access_api_status, apply_devtools_overrides) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      network.mojom.RestrictedCookieManager_CookiesEnabledFor_ParamsSpec,
      network.mojom.RestrictedCookieManager_CookiesEnabledFor_ResponseParamsSpec,
      [url, site_for_cookies, top_frame_origin, storage_access_api_status, apply_devtools_overrides],
      false);
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

network.mojom.RestrictedCookieManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RestrictedCookieManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.RestrictedCookieManager_GetAllForUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.RestrictedCookieManager_SetCanonicalCookie_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.RestrictedCookieManager_AddChangeListener_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.RestrictedCookieManager_SetCookieFromString_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.RestrictedCookieManager_GetCookiesString_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.RestrictedCookieManager_CookiesEnabledFor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.RestrictedCookieManager_GetAllForUrl_ParamsSpec.$.structSpec);
          const result = this.impl.getAllForUrl(params.url, params.site_for_cookies, params.top_frame_origin, params.storage_access_api_status, params.options, params.is_ad_tagged, params.apply_devtools_overrides, params.force_disable_third_party_cookies);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.RestrictedCookieManager_GetAllForUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.RestrictedCookieManager_SetCanonicalCookie_ParamsSpec.$.structSpec);
          const result = this.impl.setCanonicalCookie(params.cookie, params.url, params.site_for_cookies, params.top_frame_origin, params.storage_access_api_status, params.status, params.is_ad_tagged, params.apply_devtools_overrides);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.RestrictedCookieManager_SetCanonicalCookie_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.RestrictedCookieManager_AddChangeListener_ParamsSpec.$.structSpec);
          const result = this.impl.addChangeListener(params.url, params.site_for_cookies, params.top_frame_origin, params.storage_access_api_status, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.RestrictedCookieManager_AddChangeListener_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.RestrictedCookieManager_SetCookieFromString_ParamsSpec.$.structSpec);
          const result = this.impl.setCookieFromString(params.url, params.site_for_cookies, params.top_frame_origin, params.storage_access_api_status, params.get_version_shared_memory, params.is_ad_tagged, params.apply_devtools_overrides, params.cookie);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.RestrictedCookieManager_SetCookieFromString_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.RestrictedCookieManager_GetCookiesString_ParamsSpec.$.structSpec);
          const result = this.impl.getCookiesString(params.url, params.site_for_cookies, params.top_frame_origin, params.storage_access_api_status, params.get_version_shared_memory, params.is_ad_tagged, params.apply_devtools_overrides, params.force_disable_third_party_cookies);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.RestrictedCookieManager_GetCookiesString_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.RestrictedCookieManager_CookiesEnabledFor_ParamsSpec.$.structSpec);
          const result = this.impl.cookiesEnabledFor(params.url, params.site_for_cookies, params.top_frame_origin, params.storage_access_api_status, params.apply_devtools_overrides);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.RestrictedCookieManager_CookiesEnabledFor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.RestrictedCookieManagerReceiver = network.mojom.RestrictedCookieManagerReceiver;

network.mojom.RestrictedCookieManagerPtr = network.mojom.RestrictedCookieManagerRemote;
network.mojom.RestrictedCookieManagerRequest = network.mojom.RestrictedCookieManagerPendingReceiver;

