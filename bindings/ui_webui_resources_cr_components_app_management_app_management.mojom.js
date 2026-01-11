// Auto-generated MojoJS binding
 // Source: chromium_src/ui/webui/resources/cr_components/app_management/app_management.mojom
 // Module: app_management.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.app_management = mojo.internal.bindings.app_management || {};
mojo.internal.bindings.app_management.mojom = mojo.internal.bindings.app_management.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.app_management.mojom.AppTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.app_management.mojom.PermissionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.app_management.mojom.TriStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.app_management.mojom.InstallReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.app_management.mojom.InstallSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.app_management.mojom.WindowModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.app_management.mojom.RunOnOsLoginModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.app_management.mojom.PermissionValueSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PermissionSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.RunOnOsLoginSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.LocaleSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.AppSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.ExtensionAppPermissionMessageSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.FileHandlingStateSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandlerFactory = {};
mojo.internal.bindings.app_management.mojom.PageHandlerFactorySpec = { $ : {} };
mojo.internal.bindings.app_management.mojom.PageHandlerFactory.$interfaceName = 'app_management.mojom.PageHandlerFactory';
mojo.internal.bindings.app_management.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler = {};
mojo.internal.bindings.app_management.mojom.PageHandlerSpec = { $ : {} };
mojo.internal.bindings.app_management.mojom.PageHandler.$interfaceName = 'app_management.mojom.PageHandler';
mojo.internal.bindings.app_management.mojom.PageHandler_GetApps_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_GetApps_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_GetApp_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_GetApp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_SetPinned_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_SetPermission_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_Uninstall_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_SetWindowMode_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_OpenStorePage_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_SetAppLocale_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.Page = {};
mojo.internal.bindings.app_management.mojom.PageSpec = { $ : {} };
mojo.internal.bindings.app_management.mojom.Page.$interfaceName = 'app_management.mojom.Page';
mojo.internal.bindings.app_management.mojom.Page_OnAppAdded_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.Page_OnAppChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.app_management.mojom.Page_OnAppRemoved_ParamsSpec = { $: {} };

// Enum: AppType
mojo.internal.bindings.app_management.mojom.AppType = {
  kUnknown: 0,
  kArc: 1,
  kCrostini: 2,
  kChromeApp: 3,
  kWeb: 4,
  kPluginVm: 5,
  kRemote: 6,
  kBorealis: 7,
  kSystemWeb: 8,
  kExtension: 9,
  kBruschetta: 10,
};

// Enum: PermissionType
mojo.internal.bindings.app_management.mojom.PermissionType = {
  kUnknown: 0,
  kCamera: 1,
  kLocation: 2,
  kMicrophone: 3,
  kNotifications: 4,
  kContacts: 5,
  kStorage: 6,
  kPrinting: 7,
  kFileHandling: 8,
};

// Enum: TriState
mojo.internal.bindings.app_management.mojom.TriState = {
  kAllow: 0,
  kBlock: 1,
  kAsk: 2,
};

// Enum: InstallReason
mojo.internal.bindings.app_management.mojom.InstallReason = {
  kUnknown: 0,
  kSystem: 1,
  kPolicy: 2,
  kOem: 3,
  kDefault: 4,
  kSync: 5,
  kUser: 6,
  kSubApp: 7,
  kKiosk: 8,
  kCommandLine: 9,
};

// Enum: InstallSource
mojo.internal.bindings.app_management.mojom.InstallSource = {
  kUnknown: 0,
  kSystem: 1,
  kSync: 2,
  kPlayStore: 3,
  kChromeWebStore: 4,
  kBrowser: 5,
};

// Enum: WindowMode
mojo.internal.bindings.app_management.mojom.WindowMode = {
  kUnknown: 0,
  kWindow: 1,
  kBrowser: 2,
  kTabbedWindow: 3,
};

// Enum: RunOnOsLoginMode
mojo.internal.bindings.app_management.mojom.RunOnOsLoginMode = {
  kUnknown: 0,
  kNotRun: 1,
  kWindowed: 2,
};

// Union: PermissionValue
mojo.internal.Union(
    mojo.internal.bindings.app_management.mojom.PermissionValueSpec, 'app_management.mojom.PermissionValue', {
      'arg_bool_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_tristate_value': {
        'ordinal': 1,
        'type': mojo.internal.bindings.app_management.mojom.TriStateSpec.$,
        'nullable': false,
      },
    });

// Struct: Permission
mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PermissionSpec, 'app_management.mojom.Permission', [
      mojo.internal.StructField('arg_permission_type', 0, 0, mojo.internal.bindings.app_management.mojom.PermissionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.app_management.mojom.PermissionValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_details', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_managed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: RunOnOsLogin
mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.RunOnOsLoginSpec, 'app_management.mojom.RunOnOsLogin', [
      mojo.internal.StructField('arg_login_mode', 0, 0, mojo.internal.bindings.app_management.mojom.RunOnOsLoginModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_managed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Locale
mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.LocaleSpec, 'app_management.mojom.Locale', [
      mojo.internal.StructField('arg_locale_tag', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_native_display_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: App
mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.AppSpec, 'app_management.mojom.App', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.app_management.mojom.AppTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_description', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_version', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_size', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_permissions', 48, 0, mojo.internal.Map(mojo.internal.bindings.app_management.mojom.PermissionTypeSpec.$, mojo.internal.bindings.app_management.mojom.PermissionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_install_reason', 56, 0, mojo.internal.bindings.app_management.mojom.InstallReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_install_source', 64, 0, mojo.internal.bindings.app_management.mojom.InstallSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_mode', 72, 0, mojo.internal.bindings.app_management.mojom.WindowModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_supported_links', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_run_on_os_login', 88, 0, mojo.internal.bindings.app_management.mojom.RunOnOsLoginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_file_handling_state', 96, 0, mojo.internal.bindings.app_management.mojom.FileHandlingStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_app_size', 104, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_data_size', 112, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_publisher_id', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_formatted_origin', 128, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_scope_extensions', 136, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_supported_locales', 144, 0, mojo.internal.Array(mojo.internal.bindings.app_management.mojom.LocaleSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_selected_locale', 152, 0, mojo.internal.bindings.app_management.mojom.LocaleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_pinned_$flag', 160, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_pinned_$value', originalFieldName: 'arg_is_pinned' }),
      mojo.internal.StructField('arg_is_pinned_$value', 160, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_pinned_$flag', originalFieldName: 'arg_is_pinned' }),
      mojo.internal.StructField('arg_is_policy_pinned_$flag', 160, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_policy_pinned_$value', originalFieldName: 'arg_is_policy_pinned' }),
      mojo.internal.StructField('arg_is_policy_pinned_$value', 160, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_policy_pinned_$flag', originalFieldName: 'arg_is_policy_pinned' }),
      mojo.internal.StructField('arg_hide_more_settings', 160, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hide_pin_to_shelf', 160, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_preferred_app', 160, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hide_window_mode', 160, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_resize_locked', 161, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hide_resize_locked', 161, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_show_system_notifications_settings_link', 161, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_uninstall', 161, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_user_choice_navigation_capturing', 161, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 176]]);

// Struct: ExtensionAppPermissionMessage
mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.ExtensionAppPermissionMessageSpec, 'app_management.mojom.ExtensionAppPermissionMessage', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_submessages', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FileHandlingState
mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.FileHandlingStateSpec, 'app_management.mojom.FileHandlingState', [
      mojo.internal.StructField('arg_user_visible_types', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_visible_types_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_learn_more_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_enabled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_managed', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'app_management.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.app_management.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.app_management.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.app_management.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.app_management.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'app_management.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.app_management.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.app_management.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_page, arg_handler) {
    return this.$.createPageHandler(arg_page, arg_handler);
  }
};

mojo.internal.bindings.app_management.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('app_management.mojom.PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.app_management.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.app_management.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_management.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.app_management.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('app_management.mojom.PageHandlerFactory', [
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
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_page, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.app_management.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.app_management.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.app_management.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.app_management.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.app_management.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.app_management.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_GetApps_ParamsSpec, 'app_management.mojom.PageHandler_GetApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_GetApps_ResponseParamsSpec, 'app_management.mojom.PageHandler_GetApps_ResponseParams', [
      mojo.internal.StructField('arg_apps', 0, 0, mojo.internal.Array(mojo.internal.bindings.app_management.mojom.AppSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_GetApp_ParamsSpec, 'app_management.mojom.PageHandler_GetApp_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_GetApp_ResponseParamsSpec, 'app_management.mojom.PageHandler_GetApp_ResponseParams', [
      mojo.internal.StructField('arg_app', 0, 0, mojo.internal.bindings.app_management.mojom.AppSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec, 'app_management.mojom.PageHandler_GetSubAppToParentMap_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParamsSpec, 'app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParams', [
      mojo.internal.StructField('arg_sub_app_to_parent_map', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec, 'app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParamsSpec, 'app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParams', [
      mojo.internal.StructField('arg_messages', 0, 0, mojo.internal.Array(mojo.internal.bindings.app_management.mojom.ExtensionAppPermissionMessageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_SetPinned_ParamsSpec, 'app_management.mojom.PageHandler_SetPinned_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pinned', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_SetPermission_ParamsSpec, 'app_management.mojom.PageHandler_SetPermission_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_permission', 8, 0, mojo.internal.bindings.app_management.mojom.PermissionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec, 'app_management.mojom.PageHandler_SetResizeLocked_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_locked', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_Uninstall_ParamsSpec, 'app_management.mojom.PageHandler_Uninstall_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec, 'app_management.mojom.PageHandler_OpenNativeSettings_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec, 'app_management.mojom.PageHandler_SetPreferredApp_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_preferred_app', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec, 'app_management.mojom.PageHandler_GetOverlappingPreferredApps_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParamsSpec, 'app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParams', [
      mojo.internal.StructField('arg_app_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec, 'app_management.mojom.PageHandler_UpdateAppSize_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_SetWindowMode_ParamsSpec, 'app_management.mojom.PageHandler_SetWindowMode_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_mode', 8, 0, mojo.internal.bindings.app_management.mojom.WindowModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec, 'app_management.mojom.PageHandler_SetRunOnOsLoginMode_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_run_on_os_login_mode', 8, 0, mojo.internal.bindings.app_management.mojom.RunOnOsLoginModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec, 'app_management.mojom.PageHandler_SetFileHandlingEnabled_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec, 'app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_OpenStorePage_ParamsSpec, 'app_management.mojom.PageHandler_OpenStorePage_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_SetAppLocale_ParamsSpec, 'app_management.mojom.PageHandler_SetAppLocale_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_locale_tag', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec, 'app_management.mojom.PageHandler_OpenSystemNotificationSettings_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.app_management.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.app_management.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'app_management.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.app_management.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.app_management.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getApps() {
    return this.$.getApps();
  }
  getApp(arg_app_id) {
    return this.$.getApp(arg_app_id);
  }
  getSubAppToParentMap() {
    return this.$.getSubAppToParentMap();
  }
  getExtensionAppPermissionMessages(arg_app_id) {
    return this.$.getExtensionAppPermissionMessages(arg_app_id);
  }
  setPinned(arg_app_id, arg_pinned) {
    return this.$.setPinned(arg_app_id, arg_pinned);
  }
  setPermission(arg_app_id, arg_permission) {
    return this.$.setPermission(arg_app_id, arg_permission);
  }
  setResizeLocked(arg_app_id, arg_locked) {
    return this.$.setResizeLocked(arg_app_id, arg_locked);
  }
  uninstall(arg_app_id) {
    return this.$.uninstall(arg_app_id);
  }
  openNativeSettings(arg_app_id) {
    return this.$.openNativeSettings(arg_app_id);
  }
  setPreferredApp(arg_app_id, arg_is_preferred_app) {
    return this.$.setPreferredApp(arg_app_id, arg_is_preferred_app);
  }
  getOverlappingPreferredApps(arg_app_id) {
    return this.$.getOverlappingPreferredApps(arg_app_id);
  }
  updateAppSize(arg_app_id) {
    return this.$.updateAppSize(arg_app_id);
  }
  setWindowMode(arg_app_id, arg_window_mode) {
    return this.$.setWindowMode(arg_app_id, arg_window_mode);
  }
  setRunOnOsLoginMode(arg_app_id, arg_run_on_os_login_mode) {
    return this.$.setRunOnOsLoginMode(arg_app_id, arg_run_on_os_login_mode);
  }
  setFileHandlingEnabled(arg_app_id, arg_enabled) {
    return this.$.setFileHandlingEnabled(arg_app_id, arg_enabled);
  }
  showDefaultAppAssociationsUi() {
    return this.$.showDefaultAppAssociationsUi();
  }
  openStorePage(arg_app_id) {
    return this.$.openStorePage(arg_app_id);
  }
  setAppLocale(arg_app_id, arg_locale_tag) {
    return this.$.setAppLocale(arg_app_id, arg_locale_tag);
  }
  openSystemNotificationSettings(arg_app_id) {
    return this.$.openSystemNotificationSettings(arg_app_id);
  }
};

mojo.internal.bindings.app_management.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('app_management.mojom.PageHandler', [
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

  getApps() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_GetApps_ParamsSpec,
      mojo.internal.bindings.app_management.mojom.PageHandler_GetApps_ResponseParamsSpec,
      [],
      false);
  }

  getApp(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_GetApp_ParamsSpec,
      mojo.internal.bindings.app_management.mojom.PageHandler_GetApp_ResponseParamsSpec,
      [arg_app_id],
      false);
  }

  getSubAppToParentMap() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec,
      mojo.internal.bindings.app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParamsSpec,
      [],
      false);
  }

  getExtensionAppPermissionMessages(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec,
      mojo.internal.bindings.app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParamsSpec,
      [arg_app_id],
      false);
  }

  setPinned(arg_app_id, arg_pinned) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_SetPinned_ParamsSpec,
      null,
      [arg_app_id, arg_pinned],
      false);
  }

  setPermission(arg_app_id, arg_permission) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_SetPermission_ParamsSpec,
      null,
      [arg_app_id, arg_permission],
      false);
  }

  setResizeLocked(arg_app_id, arg_locked) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec,
      null,
      [arg_app_id, arg_locked],
      false);
  }

  uninstall(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_Uninstall_ParamsSpec,
      null,
      [arg_app_id],
      false);
  }

  openNativeSettings(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec,
      null,
      [arg_app_id],
      false);
  }

  setPreferredApp(arg_app_id, arg_is_preferred_app) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec,
      null,
      [arg_app_id, arg_is_preferred_app],
      false);
  }

  getOverlappingPreferredApps(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec,
      mojo.internal.bindings.app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParamsSpec,
      [arg_app_id],
      false);
  }

  updateAppSize(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec,
      null,
      [arg_app_id],
      false);
  }

  setWindowMode(arg_app_id, arg_window_mode) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_SetWindowMode_ParamsSpec,
      null,
      [arg_app_id, arg_window_mode],
      false);
  }

  setRunOnOsLoginMode(arg_app_id, arg_run_on_os_login_mode) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec,
      null,
      [arg_app_id, arg_run_on_os_login_mode],
      false);
  }

  setFileHandlingEnabled(arg_app_id, arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec,
      null,
      [arg_app_id, arg_enabled],
      false);
  }

  showDefaultAppAssociationsUi() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec,
      null,
      [],
      false);
  }

  openStorePage(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_OpenStorePage_ParamsSpec,
      null,
      [arg_app_id],
      false);
  }

  setAppLocale(arg_app_id, arg_locale_tag) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_SetAppLocale_ParamsSpec,
      null,
      [arg_app_id, arg_locale_tag],
      false);
  }

  openSystemNotificationSettings(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec,
      null,
      [arg_app_id],
      false);
  }

};

mojo.internal.bindings.app_management.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.app_management.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_management.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.app_management.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('app_management.mojom.PageHandler', [
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
        
        // Try Method 0: GetApps
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_GetApps_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetApps (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_GetApp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetApp (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetSubAppToParentMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSubAppToParentMap (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetExtensionAppPermissionMessages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetExtensionAppPermissionMessages (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetPinned
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetPinned_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPinned (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetPermission_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPermission (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetResizeLocked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetResizeLocked (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Uninstall
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_Uninstall_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Uninstall (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OpenNativeSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenNativeSettings (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetPreferredApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPreferredApp (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetOverlappingPreferredApps
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOverlappingPreferredApps (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: UpdateAppSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAppSize (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetWindowMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetWindowMode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWindowMode (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetRunOnOsLoginMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRunOnOsLoginMode (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetFileHandlingEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFileHandlingEnabled (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: ShowDefaultAppAssociationsUi
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowDefaultAppAssociationsUi (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OpenStorePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_OpenStorePage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenStorePage (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SetAppLocale
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetAppLocale_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAppLocale (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: OpenSystemNotificationSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenSystemNotificationSettings (18)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_GetApps_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getApps');
          const result = this.impl.getApps();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.app_management.mojom.PageHandler_GetApps_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetApps FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_GetApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getApp');
          const result = this.impl.getApp(params.arg_app_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.app_management.mojom.PageHandler_GetApp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetApp FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSubAppToParentMap');
          const result = this.impl.getSubAppToParentMap();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSubAppToParentMap FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getExtensionAppPermissionMessages');
          const result = this.impl.getExtensionAppPermissionMessages(params.arg_app_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetExtensionAppPermissionMessages FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetPinned_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPinned');
          const result = this.impl.setPinned(params.arg_app_id, params.arg_pinned);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPermission');
          const result = this.impl.setPermission(params.arg_app_id, params.arg_permission);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setResizeLocked');
          const result = this.impl.setResizeLocked(params.arg_app_id, params.arg_locked);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_Uninstall_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.uninstall');
          const result = this.impl.uninstall(params.arg_app_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openNativeSettings');
          const result = this.impl.openNativeSettings(params.arg_app_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPreferredApp');
          const result = this.impl.setPreferredApp(params.arg_app_id, params.arg_is_preferred_app);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOverlappingPreferredApps');
          const result = this.impl.getOverlappingPreferredApps(params.arg_app_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetOverlappingPreferredApps FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateAppSize');
          const result = this.impl.updateAppSize(params.arg_app_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetWindowMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWindowMode');
          const result = this.impl.setWindowMode(params.arg_app_id, params.arg_window_mode);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRunOnOsLoginMode');
          const result = this.impl.setRunOnOsLoginMode(params.arg_app_id, params.arg_run_on_os_login_mode);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFileHandlingEnabled');
          const result = this.impl.setFileHandlingEnabled(params.arg_app_id, params.arg_enabled);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showDefaultAppAssociationsUi');
          const result = this.impl.showDefaultAppAssociationsUi();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_OpenStorePage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openStorePage');
          const result = this.impl.openStorePage(params.arg_app_id);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_SetAppLocale_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAppLocale');
          const result = this.impl.setAppLocale(params.arg_app_id, params.arg_locale_tag);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openSystemNotificationSettings');
          const result = this.impl.openSystemNotificationSettings(params.arg_app_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.app_management.mojom.PageHandlerReceiver = mojo.internal.bindings.app_management.mojom.PageHandlerReceiver;

mojo.internal.bindings.app_management.mojom.PageHandlerPtr = mojo.internal.bindings.app_management.mojom.PageHandlerRemote;
mojo.internal.bindings.app_management.mojom.PageHandlerRequest = mojo.internal.bindings.app_management.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.Page_OnAppAdded_ParamsSpec, 'app_management.mojom.Page_OnAppAdded_Params', [
      mojo.internal.StructField('arg_app', 0, 0, mojo.internal.bindings.app_management.mojom.AppSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.Page_OnAppChanged_ParamsSpec, 'app_management.mojom.Page_OnAppChanged_Params', [
      mojo.internal.StructField('arg_update', 0, 0, mojo.internal.bindings.app_management.mojom.AppSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.app_management.mojom.Page_OnAppRemoved_ParamsSpec, 'app_management.mojom.Page_OnAppRemoved_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.app_management.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.app_management.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'app_management.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.app_management.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.app_management.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAppAdded(arg_app) {
    return this.$.onAppAdded(arg_app);
  }
  onAppChanged(arg_update) {
    return this.$.onAppChanged(arg_update);
  }
  onAppRemoved(arg_app_id) {
    return this.$.onAppRemoved(arg_app_id);
  }
};

mojo.internal.bindings.app_management.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('app_management.mojom.Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAppAdded(arg_app) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.app_management.mojom.Page_OnAppAdded_ParamsSpec,
      null,
      [arg_app],
      false);
  }

  onAppChanged(arg_update) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.app_management.mojom.Page_OnAppChanged_ParamsSpec,
      null,
      [arg_update],
      false);
  }

  onAppRemoved(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.app_management.mojom.Page_OnAppRemoved_ParamsSpec,
      null,
      [arg_app_id],
      false);
  }

};

mojo.internal.bindings.app_management.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.app_management.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_management.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.app_management.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('app_management.mojom.Page', [
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
        
        // Try Method 0: OnAppAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.Page_OnAppAdded_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppAdded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAppChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.Page_OnAppChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnAppRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.Page_OnAppRemoved_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppRemoved (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.Page_OnAppAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppAdded');
          const result = this.impl.onAppAdded(params.arg_app);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.Page_OnAppChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppChanged');
          const result = this.impl.onAppChanged(params.arg_update);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.app_management.mojom.Page_OnAppRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppRemoved');
          const result = this.impl.onAppRemoved(params.arg_app_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.app_management.mojom.PageReceiver = mojo.internal.bindings.app_management.mojom.PageReceiver;

mojo.internal.bindings.app_management.mojom.PagePtr = mojo.internal.bindings.app_management.mojom.PageRemote;
mojo.internal.bindings.app_management.mojom.PageRequest = mojo.internal.bindings.app_management.mojom.PagePendingReceiver;

