// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/customize_chrome/customize_chrome.mojom
// Module: side_panel.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

// Module namespace
var side_panel = side_panel || {};
side_panel.mojom = side_panel.mojom || {};
var ntp_tiles = ntp_tiles || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var url = url || {};

side_panel.mojom.CustomizeChromeSectionSpec = { $: mojo.internal.Enum() };
side_panel.mojom.ChromeWebStoreCollectionSpec = { $: mojo.internal.Enum() };
side_panel.mojom.ChromeWebStoreCategorySpec = { $: mojo.internal.Enum() };
side_panel.mojom.NewTabPageTypeSpec = { $: mojo.internal.Enum() };
side_panel.mojom.BackgroundImageSpec = { $: {} };
side_panel.mojom.ThirdPartyThemeInfoSpec = { $: {} };
side_panel.mojom.ThemeSpec = { $: {} };
side_panel.mojom.BackgroundCollectionSpec = { $: {} };
side_panel.mojom.CollectionImageSpec = { $: {} };
side_panel.mojom.ModuleSettingsSpec = { $: {} };
side_panel.mojom.ManagementNoticeStateSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandlerFactory = {};
side_panel.mojom.CustomizeChromePageHandlerFactory.$interfaceName = 'side_panel.mojom.CustomizeChromePageHandlerFactory';
side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler = {};
side_panel.mojom.CustomizeChromePageHandler.$interfaceName = 'side_panel.mojom.CustomizeChromePageHandler';
side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage = {};
side_panel.mojom.CustomizeChromePage.$interfaceName = 'side_panel.mojom.CustomizeChromePage';
side_panel.mojom.CustomizeChromePage_SetModulesSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_SetToolsSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_SetFooterSettings_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_SetTheme_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_SetThemeEditable_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_ScrollToSection_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec = { $: {} };
side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec = { $: {} };

// Enum: CustomizeChromeSection
side_panel.mojom.CustomizeChromeSection = {
  kUnspecified: 0,
  kAppearance: 1,
  kShortcuts: 2,
  kModules: 3,
  kWallpaperSearch: 4,
  kToolbar: 5,
  kFooter: 6,
};

// Enum: ChromeWebStoreCollection
side_panel.mojom.ChromeWebStoreCollection = {
  kWritingEssentials: 0,
};

// Enum: ChromeWebStoreCategory
side_panel.mojom.ChromeWebStoreCategory = {
  kWorkflowPlanning: 0,
  kShopping: 1,
};

// Enum: NewTabPageType
side_panel.mojom.NewTabPageType = {
  kFirstPartyWebUI: 0,
  kThirdPartyWebUI: 1,
  kThirdPartyRemote: 2,
  kExtension: 3,
  kIncognito: 4,
  kGuestMode: 5,
  kNone: 6,
};

// Struct: BackgroundImage
mojo.internal.Struct(
    side_panel.mojom.BackgroundImageSpec, 'side_panel.mojom.BackgroundImage', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('snapshot_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_background_id', 16, 0, mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('title', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('collection_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_uploaded_image', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('daily_refresh_enabled', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ThirdPartyThemeInfo
mojo.internal.Struct(
    side_panel.mojom.ThirdPartyThemeInfoSpec, 'side_panel.mojom.ThirdPartyThemeInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Theme
mojo.internal.Struct(
    side_panel.mojom.ThemeSpec, 'side_panel.mojom.Theme', [
      mojo.internal.StructField('background_image', 0, 0, side_panel.mojom.BackgroundImageSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('third_party_theme_info', 8, 0, side_panel.mojom.ThirdPartyThemeInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('background_color', 16, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('foreground_color', 24, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('background_managed_by_policy', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('follow_device_theme', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: BackgroundCollection
mojo.internal.Struct(
    side_panel.mojom.BackgroundCollectionSpec, 'side_panel.mojom.BackgroundCollection', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('preview_image_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_verified', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CollectionImage
mojo.internal.Struct(
    side_panel.mojom.CollectionImageSpec, 'side_panel.mojom.CollectionImage', [
      mojo.internal.StructField('attribution_1', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('attribution_2', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('attribution_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preview_image_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('collection_id', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('image_verified', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: ModuleSettings
mojo.internal.Struct(
    side_panel.mojom.ModuleSettingsSpec, 'side_panel.mojom.ModuleSettings', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('enabled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('visible', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagementNoticeState
mojo.internal.Struct(
    side_panel.mojom.ManagementNoticeStateSpec, 'side_panel.mojom.ManagementNoticeState', [
      mojo.internal.StructField('can_be_shown', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enabled_by_policy', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CustomizeChromePageHandlerFactory
mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(side_panel.mojom.CustomizeChromePageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(side_panel.mojom.CustomizeChromePageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

side_panel.mojom.CustomizeChromePageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.mojom.CustomizeChromePageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'side_panel.mojom.CustomizeChromePageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.mojom.CustomizeChromePageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new side_panel.mojom.CustomizeChromePageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

side_panel.mojom.CustomizeChromePageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CustomizeChromePageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

side_panel.mojom.CustomizeChromePageHandlerFactory.getRemote = function() {
  let remote = new side_panel.mojom.CustomizeChromePageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.mojom.CustomizeChromePageHandlerFactory',
    'context');
  return remote.$;
};

side_panel.mojom.CustomizeChromePageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CustomizeChromePageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
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
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.mojom.CustomizeChromePageHandlerFactoryReceiver = side_panel.mojom.CustomizeChromePageHandlerFactoryReceiver;

side_panel.mojom.CustomizeChromePageHandlerFactoryPtr = side_panel.mojom.CustomizeChromePageHandlerFactoryRemote;
side_panel.mojom.CustomizeChromePageHandlerFactoryRequest = side_panel.mojom.CustomizeChromePageHandlerFactoryPendingReceiver;


// Interface: CustomizeChromePageHandler
mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_Params', [
      mojo.internal.StructField('shortcuts_types', 0, 0, mojo.internal.Array(ntp_tiles.mojom.TileTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('shortcuts_visible', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('personal_shortcuts_visible', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ResponseParams', [
      mojo.internal.StructField('collections', 0, 0, mojo.internal.Array(side_panel.mojom.BackgroundCollectionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_Params', [
      mojo.internal.StructField('collection_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParams', [
      mojo.internal.StructField('preview_image_url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_Params', [
      mojo.internal.StructField('collection_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ResponseParams', [
      mojo.internal.StructField('images', 0, 0, mojo.internal.Array(side_panel.mojom.CollectionImageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_Params', [
      mojo.internal.StructField('is_theme_editable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_Params', [
      mojo.internal.StructField('follow', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_Params', [
      mojo.internal.StructField('attribution_1', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('attribution_2', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('attribution_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thumbnail_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('collection_id', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_Params', [
      mojo.internal.StructField('collection_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_Params', [
      mojo.internal.StructField('theme_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_Params', [
      mojo.internal.StructField('category', 0, 0, side_panel.mojom.ChromeWebStoreCategorySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_Params', [
      mojo.internal.StructField('collection', 0, 0, side_panel.mojom.ChromeWebStoreCollectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_Params', [
      mojo.internal.StructField('module_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_Params', [
    ],
    [[0, 8]]);

side_panel.mojom.CustomizeChromePageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.mojom.CustomizeChromePageHandlerRemote = class {
  static get $interfaceName() {
    return 'side_panel.mojom.CustomizeChromePageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.mojom.CustomizeChromePageHandlerPendingReceiver,
      handle);
    this.$ = new side_panel.mojom.CustomizeChromePageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setMostVisitedSettings(shortcuts_types, shortcuts_visible, personal_shortcuts_visible) {
    return this.$.setMostVisitedSettings(shortcuts_types, shortcuts_visible, personal_shortcuts_visible);
  }
  updateMostVisitedSettings() {
    return this.$.updateMostVisitedSettings();
  }
  getBackgroundCollections() {
    return this.$.getBackgroundCollections();
  }
  getReplacementCollectionPreviewImage(collection_id) {
    return this.$.getReplacementCollectionPreviewImage(collection_id);
  }
  getBackgroundImages(collection_id) {
    return this.$.getBackgroundImages(collection_id);
  }
  updateModulesSettings() {
    return this.$.updateModulesSettings();
  }
  updateTheme() {
    return this.$.updateTheme();
  }
  updateThemeEditable(is_theme_editable) {
    return this.$.updateThemeEditable(is_theme_editable);
  }
  setDefaultColor() {
    return this.$.setDefaultColor();
  }
  setFollowDeviceTheme(follow) {
    return this.$.setFollowDeviceTheme(follow);
  }
  removeBackgroundImage() {
    return this.$.removeBackgroundImage();
  }
  chooseLocalCustomBackground() {
    return this.$.chooseLocalCustomBackground();
  }
  setBackgroundImage(attribution_1, attribution_2, attribution_url, image_url, thumbnail_url, collection_id) {
    return this.$.setBackgroundImage(attribution_1, attribution_2, attribution_url, image_url, thumbnail_url, collection_id);
  }
  setDailyRefreshCollectionId(collection_id) {
    return this.$.setDailyRefreshCollectionId(collection_id);
  }
  openChromeWebStore() {
    return this.$.openChromeWebStore();
  }
  openChromeWebStoreHomePage() {
    return this.$.openChromeWebStoreHomePage();
  }
  openThirdPartyThemePage(theme_id) {
    return this.$.openThirdPartyThemePage(theme_id);
  }
  openChromeWebStoreCategoryPage(category) {
    return this.$.openChromeWebStoreCategoryPage(category);
  }
  openChromeWebStoreCollectionPage(collection) {
    return this.$.openChromeWebStoreCollectionPage(collection);
  }
  openNtpManagedByPage() {
    return this.$.openNtpManagedByPage();
  }
  setModulesVisible(visible) {
    return this.$.setModulesVisible(visible);
  }
  setModuleDisabled(module_id, disabled) {
    return this.$.setModuleDisabled(module_id, disabled);
  }
  setToolChipsVisible(visible) {
    return this.$.setToolChipsVisible(visible);
  }
  updateToolChipsSettings() {
    return this.$.updateToolChipsSettings();
  }
  updateScrollToSection() {
    return this.$.updateScrollToSection();
  }
  updateAttachedTabState() {
    return this.$.updateAttachedTabState();
  }
  updateNtpManagedByName() {
    return this.$.updateNtpManagedByName();
  }
  setFooterVisible(visible) {
    return this.$.setFooterVisible(visible);
  }
  updateFooterSettings() {
    return this.$.updateFooterSettings();
  }
};

side_panel.mojom.CustomizeChromePageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CustomizeChromePageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setMostVisitedSettings(shortcuts_types, shortcuts_visible, personal_shortcuts_visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_ParamsSpec,
      null,
      [shortcuts_types, shortcuts_visible, personal_shortcuts_visible],
      false);
  }

  updateMostVisitedSettings() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec,
      null,
      [],
      false);
  }

  getBackgroundCollections() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec,
      side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsSpec,
      [],
      false);
  }

  getReplacementCollectionPreviewImage(collection_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec,
      side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsSpec,
      [collection_id],
      false);
  }

  getBackgroundImages(collection_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec,
      side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsSpec,
      [collection_id],
      false);
  }

  updateModulesSettings() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec,
      null,
      [],
      false);
  }

  updateTheme() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_ParamsSpec,
      null,
      [],
      false);
  }

  updateThemeEditable(is_theme_editable) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec,
      null,
      [is_theme_editable],
      false);
  }

  setDefaultColor() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_ParamsSpec,
      null,
      [],
      false);
  }

  setFollowDeviceTheme(follow) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec,
      null,
      [follow],
      false);
  }

  removeBackgroundImage() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec,
      null,
      [],
      false);
  }

  chooseLocalCustomBackground() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec,
      side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsSpec,
      [],
      false);
  }

  setBackgroundImage(attribution_1, attribution_2, attribution_url, image_url, thumbnail_url, collection_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec,
      null,
      [attribution_1, attribution_2, attribution_url, image_url, thumbnail_url, collection_id],
      false);
  }

  setDailyRefreshCollectionId(collection_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec,
      null,
      [collection_id],
      false);
  }

  openChromeWebStore() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec,
      null,
      [],
      false);
  }

  openChromeWebStoreHomePage() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec,
      null,
      [],
      false);
  }

  openThirdPartyThemePage(theme_id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec,
      null,
      [theme_id],
      false);
  }

  openChromeWebStoreCategoryPage(category) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec,
      null,
      [category],
      false);
  }

  openChromeWebStoreCollectionPage(collection) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec,
      null,
      [collection],
      false);
  }

  openNtpManagedByPage() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec,
      null,
      [],
      false);
  }

  setModulesVisible(visible) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  setModuleDisabled(module_id, disabled) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec,
      null,
      [module_id, disabled],
      false);
  }

  setToolChipsVisible(visible) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  updateToolChipsSettings() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec,
      null,
      [],
      false);
  }

  updateScrollToSection() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec,
      null,
      [],
      false);
  }

  updateAttachedTabState() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec,
      null,
      [],
      false);
  }

  updateNtpManagedByName() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec,
      null,
      [],
      false);
  }

  setFooterVisible(visible) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  updateFooterSettings() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec,
      null,
      [],
      false);
  }

};

side_panel.mojom.CustomizeChromePageHandler.getRemote = function() {
  let remote = new side_panel.mojom.CustomizeChromePageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.mojom.CustomizeChromePageHandler',
    'context');
  return remote.$;
};

side_panel.mojom.CustomizeChromePageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CustomizeChromePageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetMostVisitedSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMostVisitedSettings (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateMostVisitedSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateMostVisitedSettings (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetBackgroundCollections
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBackgroundCollections (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetReplacementCollectionPreviewImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetReplacementCollectionPreviewImage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetBackgroundImages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBackgroundImages (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UpdateModulesSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateModulesSettings (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: UpdateTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTheme (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UpdateThemeEditable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateThemeEditable (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetDefaultColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDefaultColor (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetFollowDeviceTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFollowDeviceTheme (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RemoveBackgroundImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveBackgroundImage (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ChooseLocalCustomBackground
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ChooseLocalCustomBackground (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetBackgroundImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundImage (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetDailyRefreshCollectionId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDailyRefreshCollectionId (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OpenChromeWebStore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChromeWebStore (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: OpenChromeWebStoreHomePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChromeWebStoreHomePage (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OpenThirdPartyThemePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenThirdPartyThemePage (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: OpenChromeWebStoreCategoryPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChromeWebStoreCategoryPage (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: OpenChromeWebStoreCollectionPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChromeWebStoreCollectionPage (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: OpenNtpManagedByPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenNtpManagedByPage (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: SetModulesVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetModulesVisible (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: SetModuleDisabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetModuleDisabled (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: SetToolChipsVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetToolChipsVisible (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: UpdateToolChipsSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateToolChipsSettings (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: UpdateScrollToSection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateScrollToSection (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: UpdateAttachedTabState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAttachedTabState (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: UpdateNtpManagedByName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateNtpManagedByName (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: SetFooterVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFooterVisible (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: UpdateFooterSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateFooterSettings (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
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
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetMostVisitedSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMostVisitedSettings');
          const result = this.impl.setMostVisitedSettings(params.shortcuts_types, params.shortcuts_visible, params.personal_shortcuts_visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateMostVisitedSettings');
          const result = this.impl.updateMostVisitedSettings();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBackgroundCollections');
          const result = this.impl.getBackgroundCollections();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetBackgroundCollections FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getReplacementCollectionPreviewImage');
          const result = this.impl.getReplacementCollectionPreviewImage(params.collection_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetReplacementCollectionPreviewImage FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBackgroundImages');
          const result = this.impl.getBackgroundImages(params.collection_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetBackgroundImages FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateModulesSettings');
          const result = this.impl.updateModulesSettings();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateTheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTheme');
          const result = this.impl.updateTheme();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateThemeEditable');
          const result = this.impl.updateThemeEditable(params.is_theme_editable);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetDefaultColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDefaultColor');
          const result = this.impl.setDefaultColor();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFollowDeviceTheme');
          const result = this.impl.setFollowDeviceTheme(params.follow);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeBackgroundImage');
          const result = this.impl.removeBackgroundImage();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.chooseLocalCustomBackground');
          const result = this.impl.chooseLocalCustomBackground();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ChooseLocalCustomBackground FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundImage');
          const result = this.impl.setBackgroundImage(params.attribution_1, params.attribution_2, params.attribution_url, params.image_url, params.thumbnail_url, params.collection_id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDailyRefreshCollectionId');
          const result = this.impl.setDailyRefreshCollectionId(params.collection_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openChromeWebStore');
          const result = this.impl.openChromeWebStore();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openChromeWebStoreHomePage');
          const result = this.impl.openChromeWebStoreHomePage();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openThirdPartyThemePage');
          const result = this.impl.openThirdPartyThemePage(params.theme_id);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openChromeWebStoreCategoryPage');
          const result = this.impl.openChromeWebStoreCategoryPage(params.category);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openChromeWebStoreCollectionPage');
          const result = this.impl.openChromeWebStoreCollectionPage(params.collection);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openNtpManagedByPage');
          const result = this.impl.openNtpManagedByPage();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetModulesVisible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModulesVisible');
          const result = this.impl.setModulesVisible(params.visible);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModuleDisabled');
          const result = this.impl.setModuleDisabled(params.module_id, params.disabled);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setToolChipsVisible');
          const result = this.impl.setToolChipsVisible(params.visible);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateToolChipsSettings');
          const result = this.impl.updateToolChipsSettings();
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateScrollToSection');
          const result = this.impl.updateScrollToSection();
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateAttachedTabState');
          const result = this.impl.updateAttachedTabState();
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateNtpManagedByName');
          const result = this.impl.updateNtpManagedByName();
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_SetFooterVisible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFooterVisible');
          const result = this.impl.setFooterVisible(params.visible);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateFooterSettings');
          const result = this.impl.updateFooterSettings();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.mojom.CustomizeChromePageHandlerReceiver = side_panel.mojom.CustomizeChromePageHandlerReceiver;

side_panel.mojom.CustomizeChromePageHandlerPtr = side_panel.mojom.CustomizeChromePageHandlerRemote;
side_panel.mojom.CustomizeChromePageHandlerRequest = side_panel.mojom.CustomizeChromePageHandlerPendingReceiver;


// Interface: CustomizeChromePage
mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_SetModulesSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_SetModulesSettings_Params', [
      mojo.internal.StructField('modules_settings', 0, 0, mojo.internal.Array(side_panel.mojom.ModuleSettingsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('managed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('visible', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_Params', [
      mojo.internal.StructField('shortcuts_types', 0, 0, mojo.internal.Array(ntp_tiles.mojom.TileTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('disabled_shortcuts', 8, 0, mojo.internal.Array(ntp_tiles.mojom.TileTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('visible', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('personal_shortcuts_visible', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_SetToolsSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_SetToolsSettings_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_SetFooterSettings_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_SetFooterSettings_Params', [
      mojo.internal.StructField('management_notice_state', 0, 0, side_panel.mojom.ManagementNoticeStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('extension_policy_enabled', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_SetTheme_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_SetTheme_Params', [
      mojo.internal.StructField('theme', 0, 0, side_panel.mojom.ThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_SetThemeEditable_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_SetThemeEditable_Params', [
      mojo.internal.StructField('is_theme_editable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_ScrollToSection_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_ScrollToSection_Params', [
      mojo.internal.StructField('section', 0, 0, side_panel.mojom.CustomizeChromeSectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_Params', [
      mojo.internal.StructField('ntp_type', 0, 0, side_panel.mojom.NewTabPageTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec, 'side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

side_panel.mojom.CustomizeChromePagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.mojom.CustomizeChromePageRemote = class {
  static get $interfaceName() {
    return 'side_panel.mojom.CustomizeChromePage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.mojom.CustomizeChromePagePendingReceiver,
      handle);
    this.$ = new side_panel.mojom.CustomizeChromePageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setModulesSettings(modules_settings, managed, visible) {
    return this.$.setModulesSettings(modules_settings, managed, visible);
  }
  setMostVisitedSettings(shortcuts_types, visible, personal_shortcuts_visible, disabled_shortcuts) {
    return this.$.setMostVisitedSettings(shortcuts_types, visible, personal_shortcuts_visible, disabled_shortcuts);
  }
  setToolsSettings(visible) {
    return this.$.setToolsSettings(visible);
  }
  setFooterSettings(visible, extension_policy_enabled, management_notice_state) {
    return this.$.setFooterSettings(visible, extension_policy_enabled, management_notice_state);
  }
  setTheme(theme) {
    return this.$.setTheme(theme);
  }
  setThemeEditable(is_theme_editable) {
    return this.$.setThemeEditable(is_theme_editable);
  }
  scrollToSection(section) {
    return this.$.scrollToSection(section);
  }
  attachedTabStateUpdated(ntp_type) {
    return this.$.attachedTabStateUpdated(ntp_type);
  }
  ntpManagedByNameUpdated(name, description) {
    return this.$.ntpManagedByNameUpdated(name, description);
  }
};

side_panel.mojom.CustomizeChromePageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CustomizeChromePage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setModulesSettings(modules_settings, managed, visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      side_panel.mojom.CustomizeChromePage_SetModulesSettings_ParamsSpec,
      null,
      [modules_settings, managed, visible],
      false);
  }

  setMostVisitedSettings(shortcuts_types, visible, personal_shortcuts_visible, disabled_shortcuts) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_ParamsSpec,
      null,
      [shortcuts_types, visible, personal_shortcuts_visible, disabled_shortcuts],
      false);
  }

  setToolsSettings(visible) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      side_panel.mojom.CustomizeChromePage_SetToolsSettings_ParamsSpec,
      null,
      [visible],
      false);
  }

  setFooterSettings(visible, extension_policy_enabled, management_notice_state) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      side_panel.mojom.CustomizeChromePage_SetFooterSettings_ParamsSpec,
      null,
      [visible, extension_policy_enabled, management_notice_state],
      false);
  }

  setTheme(theme) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      side_panel.mojom.CustomizeChromePage_SetTheme_ParamsSpec,
      null,
      [theme],
      false);
  }

  setThemeEditable(is_theme_editable) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      side_panel.mojom.CustomizeChromePage_SetThemeEditable_ParamsSpec,
      null,
      [is_theme_editable],
      false);
  }

  scrollToSection(section) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      side_panel.mojom.CustomizeChromePage_ScrollToSection_ParamsSpec,
      null,
      [section],
      false);
  }

  attachedTabStateUpdated(ntp_type) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec,
      null,
      [ntp_type],
      false);
  }

  ntpManagedByNameUpdated(name, description) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec,
      null,
      [name, description],
      false);
  }

};

side_panel.mojom.CustomizeChromePage.getRemote = function() {
  let remote = new side_panel.mojom.CustomizeChromePageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.mojom.CustomizeChromePage',
    'context');
  return remote.$;
};

side_panel.mojom.CustomizeChromePageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CustomizeChromePage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetModulesSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_SetModulesSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetModulesSettings (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetMostVisitedSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMostVisitedSettings (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetToolsSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_SetToolsSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetToolsSettings (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetFooterSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_SetFooterSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFooterSettings (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_SetTheme_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTheme (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetThemeEditable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_SetThemeEditable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThemeEditable (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ScrollToSection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_ScrollToSection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScrollToSection (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AttachedTabStateUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttachedTabStateUpdated (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: NtpManagedByNameUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NtpManagedByNameUpdated (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_SetModulesSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setModulesSettings');
          const result = this.impl.setModulesSettings(params.modules_settings, params.managed, params.visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_SetMostVisitedSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMostVisitedSettings');
          const result = this.impl.setMostVisitedSettings(params.shortcuts_types, params.visible, params.personal_shortcuts_visible, params.disabled_shortcuts);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_SetToolsSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setToolsSettings');
          const result = this.impl.setToolsSettings(params.visible);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_SetFooterSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFooterSettings');
          const result = this.impl.setFooterSettings(params.visible, params.extension_policy_enabled, params.management_notice_state);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_SetTheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTheme');
          const result = this.impl.setTheme(params.theme);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_SetThemeEditable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setThemeEditable');
          const result = this.impl.setThemeEditable(params.is_theme_editable);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_ScrollToSection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scrollToSection');
          const result = this.impl.scrollToSection(params.section);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.attachedTabStateUpdated');
          const result = this.impl.attachedTabStateUpdated(params.ntp_type);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.ntpManagedByNameUpdated');
          const result = this.impl.ntpManagedByNameUpdated(params.name, params.description);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.mojom.CustomizeChromePageReceiver = side_panel.mojom.CustomizeChromePageReceiver;

side_panel.mojom.CustomizeChromePagePtr = side_panel.mojom.CustomizeChromePageRemote;
side_panel.mojom.CustomizeChromePageRequest = side_panel.mojom.CustomizeChromePagePendingReceiver;

