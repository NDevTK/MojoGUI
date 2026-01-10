// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/mac/app_shim.mojom
// Module: chrome.mojom

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
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var mac_notifications = mac_notifications || {};
var remote_cocoa = remote_cocoa || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};
var metrics = metrics || {};

chrome.mojom.AppShimLaunchTypeSpec = { $: mojo.internal.Enum() };
chrome.mojom.AppShimLaunchResultSpec = { $: mojo.internal.Enum() };
chrome.mojom.AppShimAttentionTypeSpec = { $: mojo.internal.Enum() };
chrome.mojom.AppShimLoginItemRestoreStateSpec = { $: mojo.internal.Enum() };
chrome.mojom.AppShimScreenReaderSupportModeSpec = { $: mojo.internal.Enum() };
chrome.mojom.ProfileMenuItemSpec = { $: {} };
chrome.mojom.ApplicationDockMenuItemSpec = { $: {} };
chrome.mojom.AppShimInfoSpec = { $: {} };
chrome.mojom.FeatureStateSpec = { $: {} };
chrome.mojom.AppShim = {};
chrome.mojom.AppShim.$interfaceName = 'chrome.mojom.AppShim';
chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec = { $: {} };
chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec = { $: {} };
chrome.mojom.AppShim_SetUserAttention_ParamsSpec = { $: {} };
chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec = { $: {} };
chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec = { $: {} };
chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec = { $: {} };
chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec = { $: {} };
chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec = { $: {} };
chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec = { $: {} };
chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost = {};
chrome.mojom.AppShimHost.$interfaceName = 'chrome.mojom.AppShimHost';
chrome.mojom.AppShimHost_FocusApp_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_ReopenApp_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_FilesOpened_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec = { $: {} };
chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec = { $: {} };
chrome.mojom.AppShimHostBootstrap = {};
chrome.mojom.AppShimHostBootstrap.$interfaceName = 'chrome.mojom.AppShimHostBootstrap';
chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec = { $: {} };
chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec = { $: {} };

// Enum: AppShimLaunchType
chrome.mojom.AppShimLaunchType = {
  kRegisterOnly: 0,
  kNormal: 1,
  kNotificationAction: 2,
};

// Enum: AppShimLaunchResult
chrome.mojom.AppShimLaunchResult = {
  kSuccess: 0,
  kSuccessAndDisconnect: 1,
  kDuplicateHost: 2,
  kProfileNotFound: 3,
  kAppNotFound: 4,
  kProfileLocked: 5,
  kFailedValidation: 6,
};

// Enum: AppShimAttentionType
chrome.mojom.AppShimAttentionType = {
  kCancel: 0,
  kCritical: 1,
};

// Enum: AppShimLoginItemRestoreState
chrome.mojom.AppShimLoginItemRestoreState = {
  kNone: 0,
  kWindowed: 1,
  kHidden: 2,
};

// Enum: AppShimScreenReaderSupportMode
chrome.mojom.AppShimScreenReaderSupportMode = {
  kPartial: 0,
  kComplete: 1,
};

// Struct: ProfileMenuItem
mojo.internal.Struct(
    chrome.mojom.ProfileMenuItemSpec, 'chrome.mojom.ProfileMenuItem', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon', 8, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('profile_path', 16, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('menu_index', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('active', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ApplicationDockMenuItem
mojo.internal.Struct(
    chrome.mojom.ApplicationDockMenuItemSpec, 'chrome.mojom.ApplicationDockMenuItem', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AppShimInfo
mojo.internal.Struct(
    chrome.mojom.AppShimInfoSpec, 'chrome.mojom.AppShimInfo', [
      mojo.internal.StructField('profile_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('app_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('launch_type', 24, 0, chrome.mojom.AppShimLaunchTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('files', 32, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('login_item_restore_state', 40, 0, chrome.mojom.AppShimLoginItemRestoreStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('urls', 48, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('notification_action_handler', 56, 0, mojo.internal.InterfaceRequest(mac_notifications.mojom.MacNotificationActionHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: FeatureState
mojo.internal.Struct(
    chrome.mojom.FeatureStateSpec, 'chrome.mojom.FeatureState', [
      mojo.internal.StructField('field_trial_states', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('field_trial_params', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enable_features', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disable_features', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AppShim
mojo.internal.Struct(
    chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec, 'chrome.mojom.AppShim_CreateRemoteCocoaApplication_Params', [
      mojo.internal.StructField('application', 0, 0, pending_associated_receiver<remote_cocoa.mojom.Application>Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec, 'chrome.mojom.AppShim_CreateCommandDispatcherForWidget_Params', [
      mojo.internal.StructField('widget_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_SetUserAttention_ParamsSpec, 'chrome.mojom.AppShim_SetUserAttention_Params', [
      mojo.internal.StructField('attention_type', 0, 0, chrome.mojom.AppShimAttentionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec, 'chrome.mojom.AppShim_SetBadgeLabel_Params', [
      mojo.internal.StructField('badge_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec, 'chrome.mojom.AppShim_UpdateProfileMenu_Params', [
      mojo.internal.StructField('profile_menu_items', 0, 0, mojo.internal.Array(chrome.mojom.ProfileMenuItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec, 'chrome.mojom.AppShim_UpdateApplicationDockMenu_Params', [
      mojo.internal.StructField('dock_menu_items', 0, 0, mojo.internal.Array(chrome.mojom.ApplicationDockMenuItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec, 'chrome.mojom.AppShim_BindNotificationProvider_Params', [
      mojo.internal.StructField('provider', 0, 0, mojo.internal.InterfaceRequest(mac_notifications.mojom.MacNotificationProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec, 'chrome.mojom.AppShim_RequestNotificationPermission_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec, 'chrome.mojom.AppShim_RequestNotificationPermission_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mac_notifications.mojom.RequestPermissionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec, 'chrome.mojom.AppShim_BindChildHistogramFetcherFactory_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(metrics.mojom.ChildHistogramFetcherFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.AppShimPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.AppShimRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.AppShim';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.AppShimPendingReceiver,
      handle);
    this.$ = new chrome.mojom.AppShimRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createRemoteCocoaApplication(application) {
    return this.$.createRemoteCocoaApplication(application);
  }
  createCommandDispatcherForWidget(widget_id) {
    return this.$.createCommandDispatcherForWidget(widget_id);
  }
  setUserAttention(attention_type) {
    return this.$.setUserAttention(attention_type);
  }
  setBadgeLabel(badge_label) {
    return this.$.setBadgeLabel(badge_label);
  }
  updateProfileMenu(profile_menu_items) {
    return this.$.updateProfileMenu(profile_menu_items);
  }
  updateApplicationDockMenu(dock_menu_items) {
    return this.$.updateApplicationDockMenu(dock_menu_items);
  }
  bindNotificationProvider(provider) {
    return this.$.bindNotificationProvider(provider);
  }
  requestNotificationPermission() {
    return this.$.requestNotificationPermission();
  }
  bindChildHistogramFetcherFactory(receiver) {
    return this.$.bindChildHistogramFetcherFactory(receiver);
  }
};

chrome.mojom.AppShimRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppShim', [
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

  createRemoteCocoaApplication(application) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec,
      null,
      [application],
      false);
  }

  createCommandDispatcherForWidget(widget_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec,
      null,
      [widget_id],
      false);
  }

  setUserAttention(attention_type) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chrome.mojom.AppShim_SetUserAttention_ParamsSpec,
      null,
      [attention_type],
      false);
  }

  setBadgeLabel(badge_label) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec,
      null,
      [badge_label],
      false);
  }

  updateProfileMenu(profile_menu_items) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec,
      null,
      [profile_menu_items],
      false);
  }

  updateApplicationDockMenu(dock_menu_items) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec,
      null,
      [dock_menu_items],
      false);
  }

  bindNotificationProvider(provider) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec,
      null,
      [provider],
      false);
  }

  requestNotificationPermission() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec,
      chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec,
      [],
      false);
  }

  bindChildHistogramFetcherFactory(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

chrome.mojom.AppShim.getRemote = function() {
  let remote = new chrome.mojom.AppShimRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.AppShim',
    'context');
  return remote.$;
};

chrome.mojom.AppShimReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppShim', [
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
        
        // Try Method 0: CreateRemoteCocoaApplication
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRemoteCocoaApplication (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateCommandDispatcherForWidget
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCommandDispatcherForWidget (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetUserAttention
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShim_SetUserAttention_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserAttention (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetBadgeLabel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBadgeLabel (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UpdateProfileMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateProfileMenu (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UpdateApplicationDockMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateApplicationDockMenu (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: BindNotificationProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindNotificationProvider (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RequestNotificationPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestNotificationPermission (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: BindChildHistogramFetcherFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindChildHistogramFetcherFactory (8)');
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
          const params = decoder.decodeStructInline(chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRemoteCocoaApplication');
          const result = this.impl.createRemoteCocoaApplication(params.application);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCommandDispatcherForWidget');
          const result = this.impl.createCommandDispatcherForWidget(params.widget_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShim_SetUserAttention_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserAttention');
          const result = this.impl.setUserAttention(params.attention_type);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBadgeLabel');
          const result = this.impl.setBadgeLabel(params.badge_label);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateProfileMenu');
          const result = this.impl.updateProfileMenu(params.profile_menu_items);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateApplicationDockMenu');
          const result = this.impl.updateApplicationDockMenu(params.dock_menu_items);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindNotificationProvider');
          const result = this.impl.bindNotificationProvider(params.provider);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestNotificationPermission');
          const result = this.impl.requestNotificationPermission();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindChildHistogramFetcherFactory');
          const result = this.impl.bindChildHistogramFetcherFactory(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.AppShimReceiver = chrome.mojom.AppShimReceiver;

chrome.mojom.AppShimPtr = chrome.mojom.AppShimRemote;
chrome.mojom.AppShimRequest = chrome.mojom.AppShimPendingReceiver;


// Interface: AppShimHost
mojo.internal.Struct(
    chrome.mojom.AppShimHost_FocusApp_ParamsSpec, 'chrome.mojom.AppShimHost_FocusApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_ReopenApp_ParamsSpec, 'chrome.mojom.AppShimHost_ReopenApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_FilesOpened_ParamsSpec, 'chrome.mojom.AppShimHost_FilesOpened_Params', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec, 'chrome.mojom.AppShimHost_ProfileSelectedFromMenu_Params', [
      mojo.internal.StructField('profile_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec, 'chrome.mojom.AppShimHost_OpenAppSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec, 'chrome.mojom.AppShimHost_UrlsOpened_Params', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec, 'chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_Params', [
      mojo.internal.StructField('override_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec, 'chrome.mojom.AppShimHost_EnableAccessibilitySupport_Params', [
      mojo.internal.StructField('mode', 0, 0, chrome.mojom.AppShimScreenReaderSupportModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec, 'chrome.mojom.AppShimHost_ApplicationWillTerminate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec, 'chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_Params', [
      mojo.internal.StructField('status', 0, 0, mac_notifications.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.AppShimHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.AppShimHostRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.AppShimHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.AppShimHostPendingReceiver,
      handle);
    this.$ = new chrome.mojom.AppShimHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  focusApp() {
    return this.$.focusApp();
  }
  reopenApp() {
    return this.$.reopenApp();
  }
  filesOpened(files) {
    return this.$.filesOpened(files);
  }
  profileSelectedFromMenu(profile_path) {
    return this.$.profileSelectedFromMenu(profile_path);
  }
  openAppSettings() {
    return this.$.openAppSettings();
  }
  urlsOpened(urls) {
    return this.$.urlsOpened(urls);
  }
  openAppWithOverrideUrl(override_url) {
    return this.$.openAppWithOverrideUrl(override_url);
  }
  enableAccessibilitySupport(mode) {
    return this.$.enableAccessibilitySupport(mode);
  }
  applicationWillTerminate() {
    return this.$.applicationWillTerminate();
  }
  notificationPermissionStatusChanged(status) {
    return this.$.notificationPermissionStatusChanged(status);
  }
};

chrome.mojom.AppShimHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppShimHost', [
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

  focusApp() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.AppShimHost_FocusApp_ParamsSpec,
      null,
      [],
      false);
  }

  reopenApp() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome.mojom.AppShimHost_ReopenApp_ParamsSpec,
      null,
      [],
      false);
  }

  filesOpened(files) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chrome.mojom.AppShimHost_FilesOpened_ParamsSpec,
      null,
      [files],
      false);
  }

  profileSelectedFromMenu(profile_path) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec,
      null,
      [profile_path],
      false);
  }

  openAppSettings() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec,
      null,
      [],
      false);
  }

  urlsOpened(urls) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec,
      null,
      [urls],
      false);
  }

  openAppWithOverrideUrl(override_url) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec,
      null,
      [override_url],
      false);
  }

  enableAccessibilitySupport(mode) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec,
      null,
      [mode],
      false);
  }

  applicationWillTerminate() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec,
      null,
      [],
      false);
  }

  notificationPermissionStatusChanged(status) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec,
      null,
      [status],
      false);
  }

};

chrome.mojom.AppShimHost.getRemote = function() {
  let remote = new chrome.mojom.AppShimHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.AppShimHost',
    'context');
  return remote.$;
};

chrome.mojom.AppShimHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppShimHost', [
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
        
        // Try Method 0: FocusApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShimHost_FocusApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusApp (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReopenApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShimHost_ReopenApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReopenApp (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: FilesOpened
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShimHost_FilesOpened_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FilesOpened (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ProfileSelectedFromMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProfileSelectedFromMenu (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenAppSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenAppSettings (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UrlsOpened
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UrlsOpened (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenAppWithOverrideUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenAppWithOverrideUrl (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: EnableAccessibilitySupport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableAccessibilitySupport (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ApplicationWillTerminate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplicationWillTerminate (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: NotificationPermissionStatusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotificationPermissionStatusChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(chrome.mojom.AppShimHost_FocusApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusApp');
          const result = this.impl.focusApp();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShimHost_ReopenApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reopenApp');
          const result = this.impl.reopenApp();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShimHost_FilesOpened_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.filesOpened');
          const result = this.impl.filesOpened(params.files);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.profileSelectedFromMenu');
          const result = this.impl.profileSelectedFromMenu(params.profile_path);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openAppSettings');
          const result = this.impl.openAppSettings();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.urlsOpened');
          const result = this.impl.urlsOpened(params.urls);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openAppWithOverrideUrl');
          const result = this.impl.openAppWithOverrideUrl(params.override_url);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableAccessibilitySupport');
          const result = this.impl.enableAccessibilitySupport(params.mode);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.applicationWillTerminate');
          const result = this.impl.applicationWillTerminate();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notificationPermissionStatusChanged');
          const result = this.impl.notificationPermissionStatusChanged(params.status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.AppShimHostReceiver = chrome.mojom.AppShimHostReceiver;

chrome.mojom.AppShimHostPtr = chrome.mojom.AppShimHostRemote;
chrome.mojom.AppShimHostRequest = chrome.mojom.AppShimHostPendingReceiver;


// Interface: AppShimHostBootstrap
mojo.internal.Struct(
    chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec, 'chrome.mojom.AppShimHostBootstrap_OnShimConnected_Params', [
      mojo.internal.StructField('host_receiver', 0, 0, mojo.internal.InterfaceRequest(chrome.mojom.AppShimHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('app_shim_info', 8, 0, chrome.mojom.AppShimInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec, 'chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParams', [
      mojo.internal.StructField('launch_result', 0, 0, chrome.mojom.AppShimLaunchResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature_state', 8, 0, chrome.mojom.FeatureStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('app_shim_receiver', 16, 0, mojo.internal.InterfaceRequest(chrome.mojom.AppShimSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

chrome.mojom.AppShimHostBootstrapPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.AppShimHostBootstrapRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.AppShimHostBootstrap';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.AppShimHostBootstrapPendingReceiver,
      handle);
    this.$ = new chrome.mojom.AppShimHostBootstrapRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onShimConnected(host_receiver, app_shim_info) {
    return this.$.onShimConnected(host_receiver, app_shim_info);
  }
};

chrome.mojom.AppShimHostBootstrapRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppShimHostBootstrap', [
      { explicit: null },
    ]);
  }

  onShimConnected(host_receiver, app_shim_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec,
      chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec,
      [host_receiver, app_shim_info],
      false);
  }

};

chrome.mojom.AppShimHostBootstrap.getRemote = function() {
  let remote = new chrome.mojom.AppShimHostBootstrapRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.AppShimHostBootstrap',
    'context');
  return remote.$;
};

chrome.mojom.AppShimHostBootstrapReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppShimHostBootstrap', [
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
        
        // Try Method 0: OnShimConnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnShimConnected (0)');
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
          const params = decoder.decodeStructInline(chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onShimConnected');
          const result = this.impl.onShimConnected(params.host_receiver, params.app_shim_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.AppShimHostBootstrapReceiver = chrome.mojom.AppShimHostBootstrapReceiver;

chrome.mojom.AppShimHostBootstrapPtr = chrome.mojom.AppShimHostBootstrapRemote;
chrome.mojom.AppShimHostBootstrapRequest = chrome.mojom.AppShimHostBootstrapPendingReceiver;

