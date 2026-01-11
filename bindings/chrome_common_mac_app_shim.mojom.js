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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.chrome = mojo.internal.bindings.chrome || {};
mojo.internal.bindings.chrome.mojom = mojo.internal.bindings.chrome.mojom || {};
mojo.internal.bindings.mac_notifications = mojo.internal.bindings.mac_notifications || {};
mojo.internal.bindings.remote_cocoa = mojo.internal.bindings.remote_cocoa || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.metrics = mojo.internal.bindings.metrics || {};

mojo.internal.bindings.chrome.mojom.AppShimLaunchTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.AppShimLaunchResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.AppShimAttentionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.AppShimLoginItemRestoreStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.AppShimScreenReaderSupportModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.ProfileMenuItemSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ApplicationDockMenuItemSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShimInfoSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.FeatureStateSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShim = {};
mojo.internal.bindings.chrome.mojom.AppShim.$interfaceName = 'chrome.mojom.AppShim';
mojo.internal.bindings.chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShim_SetUserAttention_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShimHost = {};
mojo.internal.bindings.chrome.mojom.AppShimHost.$interfaceName = 'chrome.mojom.AppShimHost';
mojo.internal.bindings.chrome.mojom.AppShimHost_FocusApp_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShimHost_ReopenApp_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShimHost_FilesOpened_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShimHostBootstrap = {};
mojo.internal.bindings.chrome.mojom.AppShimHostBootstrap.$interfaceName = 'chrome.mojom.AppShimHostBootstrap';
mojo.internal.bindings.chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec = { $: {} };

// Enum: AppShimLaunchType
mojo.internal.bindings.chrome.mojom.AppShimLaunchType = {
  kRegisterOnly: 0,
  kNormal: 1,
  kNotificationAction: 2,
};

// Enum: AppShimLaunchResult
mojo.internal.bindings.chrome.mojom.AppShimLaunchResult = {
  kSuccess: 0,
  kSuccessAndDisconnect: 1,
  kDuplicateHost: 2,
  kProfileNotFound: 3,
  kAppNotFound: 4,
  kProfileLocked: 5,
  kFailedValidation: 6,
};

// Enum: AppShimAttentionType
mojo.internal.bindings.chrome.mojom.AppShimAttentionType = {
  kCancel: 0,
  kCritical: 1,
};

// Enum: AppShimLoginItemRestoreState
mojo.internal.bindings.chrome.mojom.AppShimLoginItemRestoreState = {
  kNone: 0,
  kWindowed: 1,
  kHidden: 2,
};

// Enum: AppShimScreenReaderSupportMode
mojo.internal.bindings.chrome.mojom.AppShimScreenReaderSupportMode = {
  kPartial: 0,
  kComplete: 1,
};

// Struct: ProfileMenuItem
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileMenuItemSpec, 'chrome.mojom.ProfileMenuItem', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon', 8, 0, mojo.internal.bindings.gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_profile_path', 16, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_menu_index', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_active', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ApplicationDockMenuItem
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ApplicationDockMenuItemSpec, 'chrome.mojom.ApplicationDockMenuItem', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AppShimInfo
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShimInfoSpec, 'chrome.mojom.AppShimInfo', [
      mojo.internal.StructField('arg_profile_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_launch_type', 24, 0, mojo.internal.bindings.chrome.mojom.AppShimLaunchTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_files', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_login_item_restore_state', 40, 0, mojo.internal.bindings.chrome.mojom.AppShimLoginItemRestoreStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_urls', 48, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_notification_action_handler', 56, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.mac_notifications.mojom.MacNotificationActionHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: FeatureState
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.FeatureStateSpec, 'chrome.mojom.FeatureState', [
      mojo.internal.StructField('arg_field_trial_states', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_field_trial_params', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_enable_features', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_disable_features', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AppShim
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec, 'chrome.mojom.AppShim_CreateRemoteCocoaApplication_Params', [
      mojo.internal.StructField('arg_application', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.remote_cocoa.mojom.ApplicationRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec, 'chrome.mojom.AppShim_CreateCommandDispatcherForWidget_Params', [
      mojo.internal.StructField('arg_widget_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShim_SetUserAttention_ParamsSpec, 'chrome.mojom.AppShim_SetUserAttention_Params', [
      mojo.internal.StructField('arg_attention_type', 0, 0, mojo.internal.bindings.chrome.mojom.AppShimAttentionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec, 'chrome.mojom.AppShim_SetBadgeLabel_Params', [
      mojo.internal.StructField('arg_badge_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec, 'chrome.mojom.AppShim_UpdateProfileMenu_Params', [
      mojo.internal.StructField('arg_profile_menu_items', 0, 0, mojo.internal.Array(mojo.internal.bindings.chrome.mojom.ProfileMenuItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec, 'chrome.mojom.AppShim_UpdateApplicationDockMenu_Params', [
      mojo.internal.StructField('arg_dock_menu_items', 0, 0, mojo.internal.Array(mojo.internal.bindings.chrome.mojom.ApplicationDockMenuItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec, 'chrome.mojom.AppShim_BindNotificationProvider_Params', [
      mojo.internal.StructField('arg_provider', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.mac_notifications.mojom.MacNotificationProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec, 'chrome.mojom.AppShim_RequestNotificationPermission_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec, 'chrome.mojom.AppShim_RequestNotificationPermission_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mac_notifications.mojom.RequestPermissionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec, 'chrome.mojom.AppShim_BindChildHistogramFetcherFactory_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.metrics.mojom.ChildHistogramFetcherFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chrome.mojom.AppShimPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.AppShimRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.AppShim';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.AppShimPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.AppShimRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createRemoteCocoaApplication(arg_application) {
    return this.$.createRemoteCocoaApplication(arg_application);
  }
  createCommandDispatcherForWidget(arg_widget_id) {
    return this.$.createCommandDispatcherForWidget(arg_widget_id);
  }
  setUserAttention(arg_attention_type) {
    return this.$.setUserAttention(arg_attention_type);
  }
  setBadgeLabel(arg_badge_label) {
    return this.$.setBadgeLabel(arg_badge_label);
  }
  updateProfileMenu(arg_profile_menu_items) {
    return this.$.updateProfileMenu(arg_profile_menu_items);
  }
  updateApplicationDockMenu(arg_dock_menu_items) {
    return this.$.updateApplicationDockMenu(arg_dock_menu_items);
  }
  bindNotificationProvider(arg_provider) {
    return this.$.bindNotificationProvider(arg_provider);
  }
  requestNotificationPermission() {
    return this.$.requestNotificationPermission();
  }
  bindChildHistogramFetcherFactory(arg_receiver) {
    return this.$.bindChildHistogramFetcherFactory(arg_receiver);
  }
};

mojo.internal.bindings.chrome.mojom.AppShimRemoteCallHandler = class {
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

  createRemoteCocoaApplication(arg_application) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec,
      null,
      [arg_application],
      false);
  }

  createCommandDispatcherForWidget(arg_widget_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec,
      null,
      [arg_widget_id],
      false);
  }

  setUserAttention(arg_attention_type) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShim_SetUserAttention_ParamsSpec,
      null,
      [arg_attention_type],
      false);
  }

  setBadgeLabel(arg_badge_label) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec,
      null,
      [arg_badge_label],
      false);
  }

  updateProfileMenu(arg_profile_menu_items) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec,
      null,
      [arg_profile_menu_items],
      false);
  }

  updateApplicationDockMenu(arg_dock_menu_items) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec,
      null,
      [arg_dock_menu_items],
      false);
  }

  bindNotificationProvider(arg_provider) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec,
      null,
      [arg_provider],
      false);
  }

  requestNotificationPermission() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec,
      [],
      false);
  }

  bindChildHistogramFetcherFactory(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.AppShim.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.AppShimRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.AppShim',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.AppShimReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_SetUserAttention_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_CreateRemoteCocoaApplication_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRemoteCocoaApplication');
          const result = this.impl.createRemoteCocoaApplication(params.arg_application);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_CreateCommandDispatcherForWidget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCommandDispatcherForWidget');
          const result = this.impl.createCommandDispatcherForWidget(params.arg_widget_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_SetUserAttention_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserAttention');
          const result = this.impl.setUserAttention(params.arg_attention_type);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_SetBadgeLabel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBadgeLabel');
          const result = this.impl.setBadgeLabel(params.arg_badge_label);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_UpdateProfileMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateProfileMenu');
          const result = this.impl.updateProfileMenu(params.arg_profile_menu_items);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_UpdateApplicationDockMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateApplicationDockMenu');
          const result = this.impl.updateApplicationDockMenu(params.arg_dock_menu_items);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_BindNotificationProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindNotificationProvider');
          const result = this.impl.bindNotificationProvider(params.arg_provider);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_RequestNotificationPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestNotificationPermission');
          const result = this.impl.requestNotificationPermission();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.AppShim_RequestNotificationPermission_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestNotificationPermission FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShim_BindChildHistogramFetcherFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindChildHistogramFetcherFactory');
          const result = this.impl.bindChildHistogramFetcherFactory(params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chrome.mojom.AppShimReceiver = mojo.internal.bindings.chrome.mojom.AppShimReceiver;

mojo.internal.bindings.chrome.mojom.AppShimPtr = mojo.internal.bindings.chrome.mojom.AppShimRemote;
mojo.internal.bindings.chrome.mojom.AppShimRequest = mojo.internal.bindings.chrome.mojom.AppShimPendingReceiver;


// Interface: AppShimHost
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShimHost_FocusApp_ParamsSpec, 'chrome.mojom.AppShimHost_FocusApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShimHost_ReopenApp_ParamsSpec, 'chrome.mojom.AppShimHost_ReopenApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShimHost_FilesOpened_ParamsSpec, 'chrome.mojom.AppShimHost_FilesOpened_Params', [
      mojo.internal.StructField('arg_files', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec, 'chrome.mojom.AppShimHost_ProfileSelectedFromMenu_Params', [
      mojo.internal.StructField('arg_profile_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec, 'chrome.mojom.AppShimHost_OpenAppSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec, 'chrome.mojom.AppShimHost_UrlsOpened_Params', [
      mojo.internal.StructField('arg_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec, 'chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_Params', [
      mojo.internal.StructField('arg_override_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec, 'chrome.mojom.AppShimHost_EnableAccessibilitySupport_Params', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.chrome.mojom.AppShimScreenReaderSupportModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec, 'chrome.mojom.AppShimHost_ApplicationWillTerminate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec, 'chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.mac_notifications.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chrome.mojom.AppShimHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.AppShimHostRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.AppShimHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.AppShimHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.AppShimHostRemoteCallHandler(this.proxy);
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
  filesOpened(arg_files) {
    return this.$.filesOpened(arg_files);
  }
  profileSelectedFromMenu(arg_profile_path) {
    return this.$.profileSelectedFromMenu(arg_profile_path);
  }
  openAppSettings() {
    return this.$.openAppSettings();
  }
  urlsOpened(arg_urls) {
    return this.$.urlsOpened(arg_urls);
  }
  openAppWithOverrideUrl(arg_override_url) {
    return this.$.openAppWithOverrideUrl(arg_override_url);
  }
  enableAccessibilitySupport(arg_mode) {
    return this.$.enableAccessibilitySupport(arg_mode);
  }
  applicationWillTerminate() {
    return this.$.applicationWillTerminate();
  }
  notificationPermissionStatusChanged(arg_status) {
    return this.$.notificationPermissionStatusChanged(arg_status);
  }
};

mojo.internal.bindings.chrome.mojom.AppShimHostRemoteCallHandler = class {
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
      mojo.internal.bindings.chrome.mojom.AppShimHost_FocusApp_ParamsSpec,
      null,
      [],
      false);
  }

  reopenApp() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShimHost_ReopenApp_ParamsSpec,
      null,
      [],
      false);
  }

  filesOpened(arg_files) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShimHost_FilesOpened_ParamsSpec,
      null,
      [arg_files],
      false);
  }

  profileSelectedFromMenu(arg_profile_path) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec,
      null,
      [arg_profile_path],
      false);
  }

  openAppSettings() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec,
      null,
      [],
      false);
  }

  urlsOpened(arg_urls) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec,
      null,
      [arg_urls],
      false);
  }

  openAppWithOverrideUrl(arg_override_url) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec,
      null,
      [arg_override_url],
      false);
  }

  enableAccessibilitySupport(arg_mode) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec,
      null,
      [arg_mode],
      false);
  }

  applicationWillTerminate() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec,
      null,
      [],
      false);
  }

  notificationPermissionStatusChanged(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec,
      null,
      [arg_status],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.AppShimHost.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.AppShimHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.AppShimHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.AppShimHostReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_FocusApp_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_ReopenApp_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_FilesOpened_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_FocusApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusApp');
          const result = this.impl.focusApp();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_ReopenApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reopenApp');
          const result = this.impl.reopenApp();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_FilesOpened_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.filesOpened');
          const result = this.impl.filesOpened(params.arg_files);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_ProfileSelectedFromMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.profileSelectedFromMenu');
          const result = this.impl.profileSelectedFromMenu(params.arg_profile_path);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_OpenAppSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openAppSettings');
          const result = this.impl.openAppSettings();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_UrlsOpened_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.urlsOpened');
          const result = this.impl.urlsOpened(params.arg_urls);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_OpenAppWithOverrideUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openAppWithOverrideUrl');
          const result = this.impl.openAppWithOverrideUrl(params.arg_override_url);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_EnableAccessibilitySupport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableAccessibilitySupport');
          const result = this.impl.enableAccessibilitySupport(params.arg_mode);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_ApplicationWillTerminate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.applicationWillTerminate');
          const result = this.impl.applicationWillTerminate();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHost_NotificationPermissionStatusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notificationPermissionStatusChanged');
          const result = this.impl.notificationPermissionStatusChanged(params.arg_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chrome.mojom.AppShimHostReceiver = mojo.internal.bindings.chrome.mojom.AppShimHostReceiver;

mojo.internal.bindings.chrome.mojom.AppShimHostPtr = mojo.internal.bindings.chrome.mojom.AppShimHostRemote;
mojo.internal.bindings.chrome.mojom.AppShimHostRequest = mojo.internal.bindings.chrome.mojom.AppShimHostPendingReceiver;


// Interface: AppShimHostBootstrap
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec, 'chrome.mojom.AppShimHostBootstrap_OnShimConnected_Params', [
      mojo.internal.StructField('arg_host_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.chrome.mojom.AppShimHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_app_shim_info', 8, 0, mojo.internal.bindings.chrome.mojom.AppShimInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec, 'chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParams', [
      mojo.internal.StructField('arg_launch_result', 0, 0, mojo.internal.bindings.chrome.mojom.AppShimLaunchResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_feature_state', 8, 0, mojo.internal.bindings.chrome.mojom.FeatureStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_shim_receiver', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.chrome.mojom.AppShimSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.chrome.mojom.AppShimHostBootstrapPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.AppShimHostBootstrapRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.AppShimHostBootstrap';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.AppShimHostBootstrapPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.AppShimHostBootstrapRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onShimConnected(arg_host_receiver, arg_app_shim_info) {
    return this.$.onShimConnected(arg_host_receiver, arg_app_shim_info);
  }
};

mojo.internal.bindings.chrome.mojom.AppShimHostBootstrapRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppShimHostBootstrap', [
      { explicit: null },
    ]);
  }

  onShimConnected(arg_host_receiver, arg_app_shim_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec,
      [arg_host_receiver, arg_app_shim_info],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.AppShimHostBootstrap.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.AppShimHostBootstrapRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.AppShimHostBootstrap',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.AppShimHostBootstrapReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.AppShimHostBootstrap_OnShimConnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onShimConnected');
          const result = this.impl.onShimConnected(params.arg_host_receiver, params.arg_app_shim_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.AppShimHostBootstrap_OnShimConnected_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnShimConnected FAILED:', e));
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

mojo.internal.bindings.chrome.mojom.AppShimHostBootstrapReceiver = mojo.internal.bindings.chrome.mojom.AppShimHostBootstrapReceiver;

mojo.internal.bindings.chrome.mojom.AppShimHostBootstrapPtr = mojo.internal.bindings.chrome.mojom.AppShimHostBootstrapRemote;
mojo.internal.bindings.chrome.mojom.AppShimHostBootstrapRequest = mojo.internal.bindings.chrome.mojom.AppShimHostBootstrapPendingReceiver;

