// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/app.mojom
 // Module: arc.mojom

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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};

mojo.internal.bindings.arc.mojom.WindowSizeTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.InstallPrioritySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.ShowPackageInfoPageSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.AppDiscoveryRequestStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.AppShortcutItemTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.PaiFlowStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.AppCategorySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.InstallationResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppStorageSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.WebAppInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.WindowLayoutSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PackageLocaleInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcPackageInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ShortcutInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.RawIconPngDataSpec = { $: {} };
mojo.internal.bindings.arc.mojom.WindowInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppDiscoveryResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppShortcutItemSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost = {};
mojo.internal.bindings.arc.mojom.AppHost.$interfaceName = 'arc.mojom.AppHost';
mojo.internal.bindings.arc.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnAppListRefreshed_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnPackageAdded_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnPackageListRefreshed_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnPackageModified_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnPackageRemoved_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnTaskCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnTaskDestroyed_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnTaskSetActive_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnInstallShortcut_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnInstallationStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnInstallationFinished_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnUninstallShortcut_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance = {};
mojo.internal.bindings.arc.mojom.AppInstance.$interfaceName = 'arc.mojom.AppInstance';
mojo.internal.bindings.arc.mojom.AppInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_CloseTask_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_InstallPackage_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_UpdateWindowInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_RequestAppIcon_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_RequestAppIcon_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetAppIcon_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetAppIcon_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_RequestShortcutIcon_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_RequestShortcutIcon_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutIcon_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_RequestPackageIcon_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_RequestPackageIcon_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetPackageIcon_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetPackageIcon_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_RemoveCachedIcon_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_SetTaskActive_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_StartPaiFlow_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_StartPaiFlow_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_UninstallPackage_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_UpdateAppDetails_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetAndroidId_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetAndroidId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutItems_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutItems_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_IsInstallable_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_IsInstallable_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetAppCategory_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_GetAppCategory_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AppInstance_SetAppLocale_ParamsSpec = { $: {} };

// Enum: WindowSizeType
mojo.internal.bindings.arc.mojom.WindowSizeType = {
  kUnknown: 0,
  kPhoneSize: 1,
  kTabletSize: 2,
  kMaximize: 3,
};

// Enum: InstallPriority
mojo.internal.bindings.arc.mojom.InstallPriority = {
  kUndefined: 0,
  kMedium: 1,
  kLow: 2,
};

// Enum: ShowPackageInfoPage
mojo.internal.bindings.arc.mojom.ShowPackageInfoPage = {
  MAIN: 0,
  MANAGE_LINKS: 1,
  MinVersion: 1,
};

// Enum: AppDiscoveryRequestState
mojo.internal.bindings.arc.mojom.AppDiscoveryRequestState = {
  SUCCESS: 0,
  CANCELED: 1,
  ERROR_DEPRECATED: 2,
  PLAY_STORE_PROXY_NOT_AVAILABLE: 3,
  FAILED_TO_CALL_CANCEL: 4,
  FAILED_TO_CALL_FINDAPPS: 5,
  REQUEST_HAS_INVALID_PARAMS: 6,
  REQUEST_TIMEOUT: 7,
  PHONESKY_RESULT_REQUEST_CODE_UNMATCHED: 8,
  PHONESKY_RESULT_SESSION_ID_UNMATCHED: 9,
  PHONESKY_REQUEST_REQUEST_CODE_UNMATCHED: 10,
  PHONESKY_APP_DISCOVERY_NOT_AVAILABLE: 11,
  PHONESKY_VERSION_NOT_SUPPORTED: 12,
  PHONESKY_UNEXPECTED_EXCEPTION: 13,
  PHONESKY_MALFORMED_QUERY: 14,
  PHONESKY_INTERNAL_ERROR: 15,
  PHONESKY_RESULT_INVALID_DATA: 16,
};

// Enum: AppShortcutItemType
mojo.internal.bindings.arc.mojom.AppShortcutItemType = {
  kStatic: 0,
  kDynamic: 1,
};

// Enum: PaiFlowState
mojo.internal.bindings.arc.mojom.PaiFlowState = {
  SUCCEEDED: 0,
  UNKNOWN: 1,
  NO_ACCOUNT: 2,
  NO_APPS: 3,
  INTERRUPTED: 4,
  PLAY_STORE_NOT_RESPONDED: 5,
  PLAY_STORE_NO_ACCESS: 6,
  PROXY_NOT_FOUND: 7,
  PROXY_NO_ACCESS: 8,
  TIMEOUT: 9,
};

// Enum: AppCategory
mojo.internal.bindings.arc.mojom.AppCategory = {
  kUndefined: -1,
  kGame: 0,
  kAudio: 1,
  kVideo: 2,
  kImage: 3,
  kSocial: 4,
  kNews: 5,
  kMaps: 6,
  kProductivity: 7,
  kAccessibility: 8,
};

// Struct: InstallationResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.InstallationResultSpec, 'arc.mojom.InstallationResult', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_launchable_app', 8, 1, mojo.internal.Bool, false, false, 62, undefined),
    ],
    [[0, 24], [62, 24]]);

// Struct: AppStorage
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppStorageSpec, 'arc.mojom.AppStorage', [
      mojo.internal.StructField('arg_app_size_in_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_data_size_in_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AppInfo
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInfoSpec, 'arc.mojom.AppInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_activity', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_sticky', 24, 0, mojo.internal.Bool, false, false, 2, undefined),
      mojo.internal.StructField('arg_notifications_enabled', 24, 1, mojo.internal.Bool, false, false, 7, undefined),
      mojo.internal.StructField('arg_suspended', 24, 2, mojo.internal.Bool, false, false, 35, undefined),
      mojo.internal.StructField('arg_resize_lock_state', 32, 0, mojo.internal.bindings.arc.mojom.ArcResizeLockStateSpec.$, null, false, 47, undefined),
      mojo.internal.StructField('arg_initial_layout', 40, 0, mojo.internal.bindings.arc.mojom.WindowLayoutSpec.$, null, true, 50, undefined),
      mojo.internal.StructField('arg_version_name', 48, 0, mojo.internal.String, null, true, 51, undefined),
      mojo.internal.StructField('arg_app_storage', 56, 0, mojo.internal.bindings.arc.mojom.AppStorageSpec.$, null, true, 52, undefined),
      mojo.internal.StructField('arg_need_fixup', 64, 0, mojo.internal.Bool, false, false, 54, undefined),
      mojo.internal.StructField('arg_app_category', 72, 0, mojo.internal.bindings.arc.mojom.AppCategorySpec.$, null, false, 57, undefined),
    ],
    [[0, 32], [2, 40], [7, 40], [35, 40], [47, 48], [50, 56], [51, 64], [52, 72], [54, 80], [57, 88]]);

// Struct: WebAppInfo
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.WebAppInfoSpec, 'arc.mojom.WebAppInfo', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_start_url', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_scope_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_theme_color', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_web_only_twa', 32, 0, mojo.internal.Bool, false, false, 44, undefined),
      mojo.internal.StructField('arg_certificate_sha256_fingerprint', 40, 0, mojo.internal.String, null, true, 45, undefined),
    ],
    [[0, 40], [44, 48], [45, 56]]);

// Struct: WindowLayout
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.WindowLayoutSpec, 'arc.mojom.WindowLayout', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.arc.mojom.WindowSizeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.bindings.arc.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_resizable', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PackageLocaleInfo
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PackageLocaleInfoSpec, 'arc.mojom.PackageLocaleInfo', [
      mojo.internal.StructField('arg_supported_locales', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_selected_locale', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ArcPackageInfo
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcPackageInfoSpec, 'arc.mojom.ArcPackageInfo', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_backup_android_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_last_backup_time', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_package_version', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sync', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_deprecated_system', 28, 1, mojo.internal.Bool, false, false, 11, undefined),
      mojo.internal.StructField('arg_vpn_provider', 28, 2, mojo.internal.Bool, false, false, 25, undefined),
      mojo.internal.StructField('arg_web_app_info', 32, 0, mojo.internal.bindings.arc.mojom.WebAppInfoSpec.$, null, true, 38, undefined),
      mojo.internal.StructField('arg_deprecated_permissions', 40, 0, mojo.internal.Map(mojo.internal.bindings.arc.mojom.AppPermissionSpec.$, mojo.internal.Bool, false), null, true, 41, undefined),
      mojo.internal.StructField('arg_permission_states', 48, 0, mojo.internal.Map(mojo.internal.bindings.arc.mojom.AppPermissionSpec.$, mojo.internal.bindings.arc.mojom.PermissionStateSpec.$, false), null, true, 43, undefined),
      mojo.internal.StructField('arg_version_name', 56, 0, mojo.internal.String, null, true, 51, undefined),
      mojo.internal.StructField('arg_preinstalled', 64, 0, mojo.internal.Bool, false, false, 55, undefined),
      mojo.internal.StructField('arg_priority', 72, 0, mojo.internal.bindings.arc.mojom.InstallPrioritySpec.$, null, false, 56, undefined),
      mojo.internal.StructField('arg_locale_info', 80, 0, mojo.internal.bindings.arc.mojom.PackageLocaleInfoSpec.$, null, true, 60, undefined),
      mojo.internal.StructField('arg_game_controls_opt_out', 88, 0, mojo.internal.Bool, false, false, 61, undefined),
    ],
    [[0, 40], [11, 40], [25, 40], [38, 48], [41, 56], [43, 64], [51, 72], [55, 80], [56, 88], [60, 96], [61, 104]]);

// Struct: ShortcutInfo
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ShortcutInfoSpec, 'arc.mojom.ShortcutInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon_resource_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_intent_uri', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: RawIconPngData
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.RawIconPngDataSpec, 'arc.mojom.RawIconPngData', [
      mojo.internal.StructField('arg_icon_png_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_foreground_icon_png_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_background_icon_png_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_is_adaptive_icon', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WindowInfo
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.WindowInfoSpec, 'arc.mojom.WindowInfo', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.bindings.arc.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_window_id', 16, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('arg_state', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AppDiscoveryResult
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppDiscoveryResultSpec, 'arc.mojom.AppDiscoveryResult', [
      mojo.internal.StructField('arg_launch_intent_uri', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_install_intent_uri', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_label', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_publisher_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_formatted_price', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_icon_png_data', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_review_score', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_instant_app', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_recent', 52, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_package_name', 56, 0, mojo.internal.String, null, true, 22, undefined),
      mojo.internal.StructField('arg_icon', 64, 0, mojo.internal.bindings.arc.mojom.RawIconPngDataSpec.$, null, true, 46, undefined),
    ],
    [[0, 64], [22, 72], [46, 80]]);

// Struct: AppShortcutItem
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppShortcutItemSpec, 'arc.mojom.AppShortcutItem', [
      mojo.internal.StructField('arg_shortcut_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_short_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon_png', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_package_name', 24, 0, mojo.internal.String, null, true, 31, undefined),
      mojo.internal.StructField('arg_type', 32, 0, mojo.internal.bindings.arc.mojom.AppShortcutItemTypeSpec.$, null, false, 32, undefined),
      mojo.internal.StructField('arg_rank', 40, 0, mojo.internal.Int32, 0, false, 32, undefined),
      mojo.internal.StructField('arg_icon', 48, 0, mojo.internal.bindings.arc.mojom.RawIconPngDataSpec.$, null, true, 46, undefined),
    ],
    [[0, 32], [31, 40], [32, 56], [46, 64]]);

// Interface: AppHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec, 'arc.mojom.AppHost_OnAppAddedDeprecated_Params', [
      mojo.internal.StructField('arg_app', 0, 0, mojo.internal.bindings.arc.mojom.AppInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnAppListRefreshed_ParamsSpec, 'arc.mojom.AppHost_OnAppListRefreshed_Params', [
      mojo.internal.StructField('arg_apps', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.AppInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnPackageAdded_ParamsSpec, 'arc.mojom.AppHost_OnPackageAdded_Params', [
      mojo.internal.StructField('arg_arcPackageInfo', 0, 0, mojo.internal.bindings.arc.mojom.ArcPackageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec, 'arc.mojom.AppHost_OnPackageAppListRefreshed_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_apps', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.AppInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnPackageListRefreshed_ParamsSpec, 'arc.mojom.AppHost_OnPackageListRefreshed_Params', [
      mojo.internal.StructField('arg_packages', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.ArcPackageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnPackageModified_ParamsSpec, 'arc.mojom.AppHost_OnPackageModified_Params', [
      mojo.internal.StructField('arg_arcPackageInfo', 0, 0, mojo.internal.bindings.arc.mojom.ArcPackageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnPackageRemoved_ParamsSpec, 'arc.mojom.AppHost_OnPackageRemoved_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnTaskCreated_ParamsSpec, 'arc.mojom.AppHost_OnTaskCreated_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_activity', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_task_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_name', 24, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('arg_intent', 32, 0, mojo.internal.String, null, true, 15, undefined),
      mojo.internal.StructField('arg_session_id', 40, 0, mojo.internal.Int32, 0, false, 48, undefined),
    ],
    [[0, 32], [13, 40], [15, 48], [48, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec, 'arc.mojom.AppHost_OnTaskDescriptionUpdated_Params', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon_png_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_task_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec, 'arc.mojom.AppHost_OnTaskDescriptionChanged_Params', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon', 8, 0, mojo.internal.bindings.arc.mojom.RawIconPngDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_task_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_primary_color', 20, 0, mojo.internal.Uint32, 0, false, 49, undefined),
      mojo.internal.StructField('arg_status_bar_color', 24, 0, mojo.internal.Uint32, 0, false, 49, undefined),
    ],
    [[0, 32], [49, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnTaskDestroyed_ParamsSpec, 'arc.mojom.AppHost_OnTaskDestroyed_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnTaskSetActive_ParamsSpec, 'arc.mojom.AppHost_OnTaskSetActive_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec, 'arc.mojom.AppHost_OnNotificationsEnabledChanged_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnInstallShortcut_ParamsSpec, 'arc.mojom.AppHost_OnInstallShortcut_Params', [
      mojo.internal.StructField('arg_shortcut', 0, 0, mojo.internal.bindings.arc.mojom.ShortcutInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnInstallationStarted_ParamsSpec, 'arc.mojom.AppHost_OnInstallationStarted_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, true, 17, undefined),
    ],
    [[0, 8], [17, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnInstallationFinished_ParamsSpec, 'arc.mojom.AppHost_OnInstallationFinished_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.InstallationResultSpec.$, null, true, 17, undefined),
    ],
    [[0, 8], [17, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnUninstallShortcut_ParamsSpec, 'arc.mojom.AppHost_OnUninstallShortcut_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_intent_uri', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec, 'arc.mojom.AppHost_OnInstallationProgressChanged_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_progress', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec, 'arc.mojom.AppHost_OnInstallationActiveChanged_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_active', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.arc.mojom.AppHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.AppHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.AppHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.AppHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAppAddedDeprecated(arg_app) {
    return this.$.onAppAddedDeprecated(arg_app);
  }
  onAppListRefreshed(arg_apps) {
    return this.$.onAppListRefreshed(arg_apps);
  }
  onPackageAdded(arg_arcPackageInfo) {
    return this.$.onPackageAdded(arg_arcPackageInfo);
  }
  onPackageAppListRefreshed(arg_package_name, arg_apps) {
    return this.$.onPackageAppListRefreshed(arg_package_name, arg_apps);
  }
  onPackageListRefreshed(arg_packages) {
    return this.$.onPackageListRefreshed(arg_packages);
  }
  onPackageModified(arg_arcPackageInfo) {
    return this.$.onPackageModified(arg_arcPackageInfo);
  }
  onPackageRemoved(arg_package_name) {
    return this.$.onPackageRemoved(arg_package_name);
  }
  onTaskCreated(arg_task_id, arg_package_name, arg_activity, arg_name, arg_intent, arg_session_id) {
    return this.$.onTaskCreated(arg_task_id, arg_package_name, arg_activity, arg_name, arg_intent, arg_session_id);
  }
  onTaskDescriptionUpdated(arg_task_id, arg_label, arg_icon_png_data) {
    return this.$.onTaskDescriptionUpdated(arg_task_id, arg_label, arg_icon_png_data);
  }
  onTaskDescriptionChanged(arg_task_id, arg_label, arg_icon, arg_primary_color, arg_status_bar_color) {
    return this.$.onTaskDescriptionChanged(arg_task_id, arg_label, arg_icon, arg_primary_color, arg_status_bar_color);
  }
  onTaskDestroyed(arg_task_id) {
    return this.$.onTaskDestroyed(arg_task_id);
  }
  onTaskSetActive(arg_task_id) {
    return this.$.onTaskSetActive(arg_task_id);
  }
  onNotificationsEnabledChanged(arg_package_name, arg_enabled) {
    return this.$.onNotificationsEnabledChanged(arg_package_name, arg_enabled);
  }
  onInstallShortcut(arg_shortcut) {
    return this.$.onInstallShortcut(arg_shortcut);
  }
  onInstallationStarted(arg_package_name) {
    return this.$.onInstallationStarted(arg_package_name);
  }
  onInstallationFinished(arg_result) {
    return this.$.onInstallationFinished(arg_result);
  }
  onUninstallShortcut(arg_package_name, arg_intent_uri) {
    return this.$.onUninstallShortcut(arg_package_name, arg_intent_uri);
  }
  onInstallationProgressChanged(arg_package_name, arg_progress) {
    return this.$.onInstallationProgressChanged(arg_package_name, arg_progress);
  }
  onInstallationActiveChanged(arg_package_name, arg_active) {
    return this.$.onInstallationActiveChanged(arg_package_name, arg_active);
  }
};

mojo.internal.bindings.arc.mojom.AppHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppHost', [
      { explicit: 2 },
      { explicit: 0 },
      { explicit: 8 },
      { explicit: 13 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 11 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 19 },
      { explicit: 20 },
    ]);
  }

  onAppAddedDeprecated(arg_app) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec,
      null,
      [arg_app],
      false);
  }

  onAppListRefreshed(arg_apps) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnAppListRefreshed_ParamsSpec,
      null,
      [arg_apps],
      false);
  }

  onPackageAdded(arg_arcPackageInfo) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnPackageAdded_ParamsSpec,
      null,
      [arg_arcPackageInfo],
      false);
  }

  onPackageAppListRefreshed(arg_package_name, arg_apps) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec,
      null,
      [arg_package_name, arg_apps],
      false);
  }

  onPackageListRefreshed(arg_packages) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnPackageListRefreshed_ParamsSpec,
      null,
      [arg_packages],
      false);
  }

  onPackageModified(arg_arcPackageInfo) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnPackageModified_ParamsSpec,
      null,
      [arg_arcPackageInfo],
      false);
  }

  onPackageRemoved(arg_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnPackageRemoved_ParamsSpec,
      null,
      [arg_package_name],
      false);
  }

  onTaskCreated(arg_task_id, arg_package_name, arg_activity, arg_name, arg_intent, arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnTaskCreated_ParamsSpec,
      null,
      [arg_task_id, arg_package_name, arg_activity, arg_name, arg_intent, arg_session_id],
      false);
  }

  onTaskDescriptionUpdated(arg_task_id, arg_label, arg_icon_png_data) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec,
      null,
      [arg_task_id, arg_label, arg_icon_png_data],
      false);
  }

  onTaskDescriptionChanged(arg_task_id, arg_label, arg_icon, arg_primary_color, arg_status_bar_color) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec,
      null,
      [arg_task_id, arg_label, arg_icon, arg_primary_color, arg_status_bar_color],
      false);
  }

  onTaskDestroyed(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnTaskDestroyed_ParamsSpec,
      null,
      [arg_task_id],
      false);
  }

  onTaskSetActive(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnTaskSetActive_ParamsSpec,
      null,
      [arg_task_id],
      false);
  }

  onNotificationsEnabledChanged(arg_package_name, arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec,
      null,
      [arg_package_name, arg_enabled],
      false);
  }

  onInstallShortcut(arg_shortcut) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnInstallShortcut_ParamsSpec,
      null,
      [arg_shortcut],
      false);
  }

  onInstallationStarted(arg_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnInstallationStarted_ParamsSpec,
      null,
      [arg_package_name],
      false);
  }

  onInstallationFinished(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnInstallationFinished_ParamsSpec,
      null,
      [arg_result],
      false);
  }

  onUninstallShortcut(arg_package_name, arg_intent_uri) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnUninstallShortcut_ParamsSpec,
      null,
      [arg_package_name, arg_intent_uri],
      false);
  }

  onInstallationProgressChanged(arg_package_name, arg_progress) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec,
      null,
      [arg_package_name, arg_progress],
      false);
  }

  onInstallationActiveChanged(arg_package_name, arg_active) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.arc.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec,
      null,
      [arg_package_name, arg_active],
      false);
  }

};

mojo.internal.bindings.arc.mojom.AppHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.AppHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.AppHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppHost', [
      { explicit: 2 },
      { explicit: 0 },
      { explicit: 8 },
      { explicit: 13 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 11 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 19 },
      { explicit: 20 },
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
        
        // Try Method 0: OnAppAddedDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppAddedDeprecated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAppListRefreshed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnAppListRefreshed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppListRefreshed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnPackageAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnPackageAdded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPackageAdded (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnPackageAppListRefreshed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPackageAppListRefreshed (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnPackageListRefreshed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnPackageListRefreshed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPackageListRefreshed (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnPackageModified
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnPackageModified_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPackageModified (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnPackageRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnPackageRemoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPackageRemoved (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnTaskCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnTaskCreated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTaskCreated (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnTaskDescriptionUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTaskDescriptionUpdated (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnTaskDescriptionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTaskDescriptionChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnTaskDestroyed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnTaskDestroyed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTaskDestroyed (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnTaskSetActive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnTaskSetActive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTaskSetActive (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnNotificationsEnabledChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNotificationsEnabledChanged (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OnInstallShortcut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnInstallShortcut_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInstallShortcut (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OnInstallationStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnInstallationStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInstallationStarted (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: OnInstallationFinished
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnInstallationFinished_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInstallationFinished (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OnUninstallShortcut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnUninstallShortcut_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUninstallShortcut (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: OnInstallationProgressChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInstallationProgressChanged (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: OnInstallationActiveChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInstallationActiveChanged (18)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnAppAddedDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppAddedDeprecated');
          const result = this.impl.onAppAddedDeprecated(params.arg_app);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnAppListRefreshed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAppListRefreshed');
          const result = this.impl.onAppListRefreshed(params.arg_apps);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnPackageAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPackageAdded');
          const result = this.impl.onPackageAdded(params.arg_arcPackageInfo);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnPackageAppListRefreshed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPackageAppListRefreshed');
          const result = this.impl.onPackageAppListRefreshed(params.arg_package_name, params.arg_apps);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnPackageListRefreshed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPackageListRefreshed');
          const result = this.impl.onPackageListRefreshed(params.arg_packages);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnPackageModified_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPackageModified');
          const result = this.impl.onPackageModified(params.arg_arcPackageInfo);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnPackageRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPackageRemoved');
          const result = this.impl.onPackageRemoved(params.arg_package_name);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnTaskCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTaskCreated');
          const result = this.impl.onTaskCreated(params.arg_task_id, params.arg_package_name, params.arg_activity, params.arg_name, params.arg_intent, params.arg_session_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnTaskDescriptionUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTaskDescriptionUpdated');
          const result = this.impl.onTaskDescriptionUpdated(params.arg_task_id, params.arg_label, params.arg_icon_png_data);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnTaskDescriptionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTaskDescriptionChanged');
          const result = this.impl.onTaskDescriptionChanged(params.arg_task_id, params.arg_label, params.arg_icon, params.arg_primary_color, params.arg_status_bar_color);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnTaskDestroyed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTaskDestroyed');
          const result = this.impl.onTaskDestroyed(params.arg_task_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnTaskSetActive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTaskSetActive');
          const result = this.impl.onTaskSetActive(params.arg_task_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnNotificationsEnabledChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNotificationsEnabledChanged');
          const result = this.impl.onNotificationsEnabledChanged(params.arg_package_name, params.arg_enabled);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnInstallShortcut_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onInstallShortcut');
          const result = this.impl.onInstallShortcut(params.arg_shortcut);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnInstallationStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onInstallationStarted');
          const result = this.impl.onInstallationStarted(params.arg_package_name);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnInstallationFinished_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onInstallationFinished');
          const result = this.impl.onInstallationFinished(params.arg_result);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnUninstallShortcut_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUninstallShortcut');
          const result = this.impl.onUninstallShortcut(params.arg_package_name, params.arg_intent_uri);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnInstallationProgressChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onInstallationProgressChanged');
          const result = this.impl.onInstallationProgressChanged(params.arg_package_name, params.arg_progress);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppHost_OnInstallationActiveChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onInstallationActiveChanged');
          const result = this.impl.onInstallationActiveChanged(params.arg_package_name, params.arg_active);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.AppHostReceiver = mojo.internal.bindings.arc.mojom.AppHostReceiver;

mojo.internal.bindings.arc.mojom.AppHostPtr = mojo.internal.bindings.arc.mojom.AppHostRemote;
mojo.internal.bindings.arc.mojom.AppHostRequest = mojo.internal.bindings.arc.mojom.AppHostPendingReceiver;


// Interface: AppInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_Init_ParamsSpec, 'arc.mojom.AppInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AppHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_Init_ResponseParamsSpec, 'arc.mojom.AppInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_CloseTask_ParamsSpec, 'arc.mojom.AppInstance_CloseTask_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_InstallPackage_ParamsSpec, 'arc.mojom.AppInstance_InstallPackage_Params', [
      mojo.internal.StructField('arg_arcPackageInfo', 0, 0, mojo.internal.bindings.arc.mojom.ArcPackageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec, 'arc.mojom.AppInstance_LaunchAppWithWindowInfo_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_activity', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_info', 16, 0, mojo.internal.bindings.arc.mojom.WindowInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec, 'arc.mojom.AppInstance_LaunchAppShortcutItem_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_shortcut_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec, 'arc.mojom.AppInstance_LaunchIntentWithWindowInfo_Params', [
      mojo.internal.StructField('arg_intent_uri', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_info', 8, 0, mojo.internal.bindings.arc.mojom.WindowInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_UpdateWindowInfo_ParamsSpec, 'arc.mojom.AppInstance_UpdateWindowInfo_Params', [
      mojo.internal.StructField('arg_window_info', 0, 0, mojo.internal.bindings.arc.mojom.WindowInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_RequestAppIcon_ParamsSpec, 'arc.mojom.AppInstance_RequestAppIcon_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_activity', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pixel_size', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_RequestAppIcon_ResponseParamsSpec, 'arc.mojom.AppInstance_RequestAppIcon_ResponseParams', [
      mojo.internal.StructField('arg_icon_png_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetAppIcon_ParamsSpec, 'arc.mojom.AppInstance_GetAppIcon_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_activity', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pixel_size', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetAppIcon_ResponseParamsSpec, 'arc.mojom.AppInstance_GetAppIcon_ResponseParams', [
      mojo.internal.StructField('arg_icon', 0, 0, mojo.internal.bindings.arc.mojom.RawIconPngDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_RequestShortcutIcon_ParamsSpec, 'arc.mojom.AppInstance_RequestShortcutIcon_Params', [
      mojo.internal.StructField('arg_icon_resource_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pixel_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_RequestShortcutIcon_ResponseParamsSpec, 'arc.mojom.AppInstance_RequestShortcutIcon_ResponseParams', [
      mojo.internal.StructField('arg_icon_png_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec, 'arc.mojom.AppInstance_GetAppShortcutIcon_Params', [
      mojo.internal.StructField('arg_icon_resource_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pixel_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutIcon_ResponseParamsSpec, 'arc.mojom.AppInstance_GetAppShortcutIcon_ResponseParams', [
      mojo.internal.StructField('arg_icon', 0, 0, mojo.internal.bindings.arc.mojom.RawIconPngDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_RequestPackageIcon_ParamsSpec, 'arc.mojom.AppInstance_RequestPackageIcon_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pixel_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_normalize', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_RequestPackageIcon_ResponseParamsSpec, 'arc.mojom.AppInstance_RequestPackageIcon_ResponseParams', [
      mojo.internal.StructField('arg_icon_png_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetPackageIcon_ParamsSpec, 'arc.mojom.AppInstance_GetPackageIcon_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pixel_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_normalize', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetPackageIcon_ResponseParamsSpec, 'arc.mojom.AppInstance_GetPackageIcon_ResponseParams', [
      mojo.internal.StructField('arg_icon', 0, 0, mojo.internal.bindings.arc.mojom.RawIconPngDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_RemoveCachedIcon_ParamsSpec, 'arc.mojom.AppInstance_RemoveCachedIcon_Params', [
      mojo.internal.StructField('arg_icon_resource_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_SetTaskActive_ParamsSpec, 'arc.mojom.AppInstance_SetTaskActive_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec, 'arc.mojom.AppInstance_ShowPackageInfoDeprecated_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_dimension_on_screen', 8, 0, mojo.internal.bindings.arc.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec, 'arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_page', 8, 0, mojo.internal.bindings.arc.mojom.ShowPackageInfoPageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dimension_on_screen', 16, 0, mojo.internal.bindings.arc.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec, 'arc.mojom.AppInstance_ShowPackageInfoOnPage_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_page', 8, 0, mojo.internal.bindings.arc.mojom.ShowPackageInfoPageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec, 'arc.mojom.AppInstance_SetNotificationsEnabled_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_StartPaiFlow_ParamsSpec, 'arc.mojom.AppInstance_StartPaiFlow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_StartPaiFlow_ResponseParamsSpec, 'arc.mojom.AppInstance_StartPaiFlow_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.arc.mojom.PaiFlowStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec, 'arc.mojom.AppInstance_StartFastAppReinstallFlow_Params', [
      mojo.internal.StructField('arg_arc_package_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_UninstallPackage_ParamsSpec, 'arc.mojom.AppInstance_UninstallPackage_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_UpdateAppDetails_ParamsSpec, 'arc.mojom.AppInstance_UpdateAppDetails_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetAndroidId_ParamsSpec, 'arc.mojom.AppInstance_GetAndroidId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetAndroidId_ResponseParamsSpec, 'arc.mojom.AppInstance_GetAndroidId_ResponseParams', [
      mojo.internal.StructField('arg_android_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec, 'arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_Params', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_results', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ResponseParamsSpec, 'arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ResponseParams', [
      mojo.internal.StructField('arg_shortcut_items', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.AppShortcutItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutItems_ParamsSpec, 'arc.mojom.AppInstance_GetAppShortcutItems_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutItems_ResponseParamsSpec, 'arc.mojom.AppInstance_GetAppShortcutItems_ResponseParams', [
      mojo.internal.StructField('arg_shortcut_items', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.AppShortcutItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec, 'arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_Params', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_results', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ResponseParamsSpec, 'arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ResponseParams', [
      mojo.internal.StructField('arg_results', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.AppDiscoveryResultSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 8, 0, mojo.internal.bindings.arc.mojom.AppDiscoveryRequestStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_IsInstallable_ParamsSpec, 'arc.mojom.AppInstance_IsInstallable_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_IsInstallable_ResponseParamsSpec, 'arc.mojom.AppInstance_IsInstallable_ResponseParams', [
      mojo.internal.StructField('arg_is_installable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetAppCategory_ParamsSpec, 'arc.mojom.AppInstance_GetAppCategory_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_GetAppCategory_ResponseParamsSpec, 'arc.mojom.AppInstance_GetAppCategory_ResponseParams', [
      mojo.internal.StructField('arg_category', 0, 0, mojo.internal.bindings.arc.mojom.AppCategorySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AppInstance_SetAppLocale_ParamsSpec, 'arc.mojom.AppInstance_SetAppLocale_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_locale_tag', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.arc.mojom.AppInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.AppInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.AppInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.AppInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
  closeTask(arg_task_id) {
    return this.$.closeTask(arg_task_id);
  }
  installPackage(arg_arcPackageInfo) {
    return this.$.installPackage(arg_arcPackageInfo);
  }
  launchAppWithWindowInfo(arg_package_name, arg_activity, arg_window_info) {
    return this.$.launchAppWithWindowInfo(arg_package_name, arg_activity, arg_window_info);
  }
  launchAppShortcutItem(arg_package_name, arg_shortcut_id, arg_display_id) {
    return this.$.launchAppShortcutItem(arg_package_name, arg_shortcut_id, arg_display_id);
  }
  launchIntentWithWindowInfo(arg_intent_uri, arg_window_info) {
    return this.$.launchIntentWithWindowInfo(arg_intent_uri, arg_window_info);
  }
  updateWindowInfo(arg_window_info) {
    return this.$.updateWindowInfo(arg_window_info);
  }
  requestAppIcon(arg_package_name, arg_activity, arg_pixel_size) {
    return this.$.requestAppIcon(arg_package_name, arg_activity, arg_pixel_size);
  }
  getAppIcon(arg_package_name, arg_activity, arg_pixel_size) {
    return this.$.getAppIcon(arg_package_name, arg_activity, arg_pixel_size);
  }
  requestShortcutIcon(arg_icon_resource_id, arg_pixel_size) {
    return this.$.requestShortcutIcon(arg_icon_resource_id, arg_pixel_size);
  }
  getAppShortcutIcon(arg_icon_resource_id, arg_pixel_size) {
    return this.$.getAppShortcutIcon(arg_icon_resource_id, arg_pixel_size);
  }
  requestPackageIcon(arg_package_name, arg_pixel_size, arg_normalize) {
    return this.$.requestPackageIcon(arg_package_name, arg_pixel_size, arg_normalize);
  }
  getPackageIcon(arg_package_name, arg_pixel_size, arg_normalize) {
    return this.$.getPackageIcon(arg_package_name, arg_pixel_size, arg_normalize);
  }
  removeCachedIcon(arg_icon_resource_id) {
    return this.$.removeCachedIcon(arg_icon_resource_id);
  }
  setTaskActive(arg_task_id) {
    return this.$.setTaskActive(arg_task_id);
  }
  showPackageInfoDeprecated(arg_package_name, arg_dimension_on_screen) {
    return this.$.showPackageInfoDeprecated(arg_package_name, arg_dimension_on_screen);
  }
  showPackageInfoOnPageDeprecated(arg_package_name, arg_page, arg_dimension_on_screen) {
    return this.$.showPackageInfoOnPageDeprecated(arg_package_name, arg_page, arg_dimension_on_screen);
  }
  showPackageInfoOnPage(arg_package_name, arg_page, arg_display_id) {
    return this.$.showPackageInfoOnPage(arg_package_name, arg_page, arg_display_id);
  }
  setNotificationsEnabled(arg_package_name, arg_enabled) {
    return this.$.setNotificationsEnabled(arg_package_name, arg_enabled);
  }
  startPaiFlow() {
    return this.$.startPaiFlow();
  }
  startFastAppReinstallFlow(arg_arc_package_names) {
    return this.$.startFastAppReinstallFlow(arg_arc_package_names);
  }
  uninstallPackage(arg_package_name) {
    return this.$.uninstallPackage(arg_package_name);
  }
  updateAppDetails(arg_package_name) {
    return this.$.updateAppDetails(arg_package_name);
  }
  getAndroidId() {
    return this.$.getAndroidId();
  }
  getAppShortcutGlobalQueryItems(arg_query, arg_max_results) {
    return this.$.getAppShortcutGlobalQueryItems(arg_query, arg_max_results);
  }
  getAppShortcutItems(arg_package_name) {
    return this.$.getAppShortcutItems(arg_package_name);
  }
  getRecentAndSuggestedAppsFromPlayStore(arg_query, arg_max_results) {
    return this.$.getRecentAndSuggestedAppsFromPlayStore(arg_query, arg_max_results);
  }
  isInstallable(arg_package_name) {
    return this.$.isInstallable(arg_package_name);
  }
  getAppCategory(arg_package_name) {
    return this.$.getAppCategory(arg_package_name);
  }
  setAppLocale(arg_package_name, arg_locale_tag) {
    return this.$.setAppLocale(arg_package_name, arg_locale_tag);
  }
};

mojo.internal.bindings.arc.mojom.AppInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppInstance', [
      { explicit: 21 },
      { explicit: 8 },
      { explicit: 11 },
      { explicit: 38 },
      { explicit: 24 },
      { explicit: 39 },
      { explicit: 40 },
      { explicit: 27 },
      { explicit: 35 },
      { explicit: 28 },
      { explicit: 36 },
      { explicit: 30 },
      { explicit: 37 },
      { explicit: 14 },
      { explicit: 7 },
      { explicit: 9 },
      { explicit: 15 },
      { explicit: 20 },
      { explicit: 10 },
      { explicit: 32 },
      { explicit: 25 },
      { explicit: 5 },
      { explicit: 42 },
      { explicit: 33 },
      { explicit: 26 },
      { explicit: 23 },
      { explicit: 16 },
      { explicit: 34 },
      { explicit: 41 },
      { explicit: 43 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

  closeTask(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_CloseTask_ParamsSpec,
      null,
      [arg_task_id],
      false);
  }

  installPackage(arg_arcPackageInfo) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_InstallPackage_ParamsSpec,
      null,
      [arg_arcPackageInfo],
      false);
  }

  launchAppWithWindowInfo(arg_package_name, arg_activity, arg_window_info) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec,
      null,
      [arg_package_name, arg_activity, arg_window_info],
      false);
  }

  launchAppShortcutItem(arg_package_name, arg_shortcut_id, arg_display_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec,
      null,
      [arg_package_name, arg_shortcut_id, arg_display_id],
      false);
  }

  launchIntentWithWindowInfo(arg_intent_uri, arg_window_info) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec,
      null,
      [arg_intent_uri, arg_window_info],
      false);
  }

  updateWindowInfo(arg_window_info) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_UpdateWindowInfo_ParamsSpec,
      null,
      [arg_window_info],
      false);
  }

  requestAppIcon(arg_package_name, arg_activity, arg_pixel_size) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_RequestAppIcon_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_RequestAppIcon_ResponseParamsSpec,
      [arg_package_name, arg_activity, arg_pixel_size],
      false);
  }

  getAppIcon(arg_package_name, arg_activity, arg_pixel_size) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_GetAppIcon_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_GetAppIcon_ResponseParamsSpec,
      [arg_package_name, arg_activity, arg_pixel_size],
      false);
  }

  requestShortcutIcon(arg_icon_resource_id, arg_pixel_size) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_RequestShortcutIcon_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_RequestShortcutIcon_ResponseParamsSpec,
      [arg_icon_resource_id, arg_pixel_size],
      false);
  }

  getAppShortcutIcon(arg_icon_resource_id, arg_pixel_size) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutIcon_ResponseParamsSpec,
      [arg_icon_resource_id, arg_pixel_size],
      false);
  }

  requestPackageIcon(arg_package_name, arg_pixel_size, arg_normalize) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_RequestPackageIcon_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_RequestPackageIcon_ResponseParamsSpec,
      [arg_package_name, arg_pixel_size, arg_normalize],
      false);
  }

  getPackageIcon(arg_package_name, arg_pixel_size, arg_normalize) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_GetPackageIcon_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_GetPackageIcon_ResponseParamsSpec,
      [arg_package_name, arg_pixel_size, arg_normalize],
      false);
  }

  removeCachedIcon(arg_icon_resource_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_RemoveCachedIcon_ParamsSpec,
      null,
      [arg_icon_resource_id],
      false);
  }

  setTaskActive(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_SetTaskActive_ParamsSpec,
      null,
      [arg_task_id],
      false);
  }

  showPackageInfoDeprecated(arg_package_name, arg_dimension_on_screen) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec,
      null,
      [arg_package_name, arg_dimension_on_screen],
      false);
  }

  showPackageInfoOnPageDeprecated(arg_package_name, arg_page, arg_dimension_on_screen) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec,
      null,
      [arg_package_name, arg_page, arg_dimension_on_screen],
      false);
  }

  showPackageInfoOnPage(arg_package_name, arg_page, arg_display_id) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec,
      null,
      [arg_package_name, arg_page, arg_display_id],
      false);
  }

  setNotificationsEnabled(arg_package_name, arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec,
      null,
      [arg_package_name, arg_enabled],
      false);
  }

  startPaiFlow() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_StartPaiFlow_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_StartPaiFlow_ResponseParamsSpec,
      [],
      false);
  }

  startFastAppReinstallFlow(arg_arc_package_names) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec,
      null,
      [arg_arc_package_names],
      false);
  }

  uninstallPackage(arg_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_UninstallPackage_ParamsSpec,
      null,
      [arg_package_name],
      false);
  }

  updateAppDetails(arg_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_UpdateAppDetails_ParamsSpec,
      null,
      [arg_package_name],
      false);
  }

  getAndroidId() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_GetAndroidId_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_GetAndroidId_ResponseParamsSpec,
      [],
      false);
  }

  getAppShortcutGlobalQueryItems(arg_query, arg_max_results) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ResponseParamsSpec,
      [arg_query, arg_max_results],
      false);
  }

  getAppShortcutItems(arg_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutItems_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutItems_ResponseParamsSpec,
      [arg_package_name],
      false);
  }

  getRecentAndSuggestedAppsFromPlayStore(arg_query, arg_max_results) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ResponseParamsSpec,
      [arg_query, arg_max_results],
      false);
  }

  isInstallable(arg_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_IsInstallable_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_IsInstallable_ResponseParamsSpec,
      [arg_package_name],
      false);
  }

  getAppCategory(arg_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_GetAppCategory_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AppInstance_GetAppCategory_ResponseParamsSpec,
      [arg_package_name],
      false);
  }

  setAppLocale(arg_package_name, arg_locale_tag) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.arc.mojom.AppInstance_SetAppLocale_ParamsSpec,
      null,
      [arg_package_name, arg_locale_tag],
      false);
  }

};

mojo.internal.bindings.arc.mojom.AppInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.AppInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.AppInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppInstance', [
      { explicit: 21 },
      { explicit: 8 },
      { explicit: 11 },
      { explicit: 38 },
      { explicit: 24 },
      { explicit: 39 },
      { explicit: 40 },
      { explicit: 27 },
      { explicit: 35 },
      { explicit: 28 },
      { explicit: 36 },
      { explicit: 30 },
      { explicit: 37 },
      { explicit: 14 },
      { explicit: 7 },
      { explicit: 9 },
      { explicit: 15 },
      { explicit: 20 },
      { explicit: 10 },
      { explicit: 32 },
      { explicit: 25 },
      { explicit: 5 },
      { explicit: 42 },
      { explicit: 33 },
      { explicit: 26 },
      { explicit: 23 },
      { explicit: 16 },
      { explicit: 34 },
      { explicit: 41 },
      { explicit: 43 },
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseTask
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_CloseTask_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseTask (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: InstallPackage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_InstallPackage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallPackage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: LaunchAppWithWindowInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchAppWithWindowInfo (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: LaunchAppShortcutItem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchAppShortcutItem (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: LaunchIntentWithWindowInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchIntentWithWindowInfo (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: UpdateWindowInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_UpdateWindowInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateWindowInfo (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RequestAppIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_RequestAppIcon_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAppIcon (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetAppIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetAppIcon_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppIcon (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RequestShortcutIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_RequestShortcutIcon_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestShortcutIcon (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetAppShortcutIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppShortcutIcon (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RequestPackageIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_RequestPackageIcon_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPackageIcon (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetPackageIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetPackageIcon_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPackageIcon (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RemoveCachedIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_RemoveCachedIcon_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveCachedIcon (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetTaskActive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_SetTaskActive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTaskActive (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: ShowPackageInfoDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPackageInfoDeprecated (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ShowPackageInfoOnPageDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPackageInfoOnPageDeprecated (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: ShowPackageInfoOnPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPackageInfoOnPage (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SetNotificationsEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNotificationsEnabled (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: StartPaiFlow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_StartPaiFlow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartPaiFlow (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: StartFastAppReinstallFlow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartFastAppReinstallFlow (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: UninstallPackage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_UninstallPackage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UninstallPackage (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: UpdateAppDetails
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_UpdateAppDetails_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAppDetails (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: GetAndroidId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetAndroidId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAndroidId (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: GetAppShortcutGlobalQueryItems
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppShortcutGlobalQueryItems (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: GetAppShortcutItems
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutItems_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppShortcutItems (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: GetRecentAndSuggestedAppsFromPlayStore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRecentAndSuggestedAppsFromPlayStore (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: IsInstallable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_IsInstallable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsInstallable (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: GetAppCategory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetAppCategory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppCategory (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: SetAppLocale
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_SetAppLocale_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAppLocale (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_CloseTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeTask');
          const result = this.impl.closeTask(params.arg_task_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_InstallPackage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installPackage');
          const result = this.impl.installPackage(params.arg_arcPackageInfo);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_LaunchAppWithWindowInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.launchAppWithWindowInfo');
          const result = this.impl.launchAppWithWindowInfo(params.arg_package_name, params.arg_activity, params.arg_window_info);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_LaunchAppShortcutItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.launchAppShortcutItem');
          const result = this.impl.launchAppShortcutItem(params.arg_package_name, params.arg_shortcut_id, params.arg_display_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_LaunchIntentWithWindowInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.launchIntentWithWindowInfo');
          const result = this.impl.launchIntentWithWindowInfo(params.arg_intent_uri, params.arg_window_info);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_UpdateWindowInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateWindowInfo');
          const result = this.impl.updateWindowInfo(params.arg_window_info);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_RequestAppIcon_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestAppIcon');
          const result = this.impl.requestAppIcon(params.arg_package_name, params.arg_activity, params.arg_pixel_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_RequestAppIcon_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestAppIcon FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetAppIcon_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAppIcon');
          const result = this.impl.getAppIcon(params.arg_package_name, params.arg_activity, params.arg_pixel_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_GetAppIcon_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAppIcon FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_RequestShortcutIcon_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestShortcutIcon');
          const result = this.impl.requestShortcutIcon(params.arg_icon_resource_id, params.arg_pixel_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_RequestShortcutIcon_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestShortcutIcon FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutIcon_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAppShortcutIcon');
          const result = this.impl.getAppShortcutIcon(params.arg_icon_resource_id, params.arg_pixel_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutIcon_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAppShortcutIcon FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_RequestPackageIcon_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPackageIcon');
          const result = this.impl.requestPackageIcon(params.arg_package_name, params.arg_pixel_size, params.arg_normalize);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_RequestPackageIcon_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPackageIcon FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetPackageIcon_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPackageIcon');
          const result = this.impl.getPackageIcon(params.arg_package_name, params.arg_pixel_size, params.arg_normalize);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_GetPackageIcon_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPackageIcon FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_RemoveCachedIcon_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeCachedIcon');
          const result = this.impl.removeCachedIcon(params.arg_icon_resource_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_SetTaskActive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTaskActive');
          const result = this.impl.setTaskActive(params.arg_task_id);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showPackageInfoDeprecated');
          const result = this.impl.showPackageInfoDeprecated(params.arg_package_name, params.arg_dimension_on_screen);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoOnPageDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showPackageInfoOnPageDeprecated');
          const result = this.impl.showPackageInfoOnPageDeprecated(params.arg_package_name, params.arg_page, params.arg_dimension_on_screen);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_ShowPackageInfoOnPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showPackageInfoOnPage');
          const result = this.impl.showPackageInfoOnPage(params.arg_package_name, params.arg_page, params.arg_display_id);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_SetNotificationsEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNotificationsEnabled');
          const result = this.impl.setNotificationsEnabled(params.arg_package_name, params.arg_enabled);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_StartPaiFlow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startPaiFlow');
          const result = this.impl.startPaiFlow();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_StartPaiFlow_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartPaiFlow FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_StartFastAppReinstallFlow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startFastAppReinstallFlow');
          const result = this.impl.startFastAppReinstallFlow(params.arg_arc_package_names);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_UninstallPackage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.uninstallPackage');
          const result = this.impl.uninstallPackage(params.arg_package_name);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_UpdateAppDetails_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateAppDetails');
          const result = this.impl.updateAppDetails(params.arg_package_name);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetAndroidId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAndroidId');
          const result = this.impl.getAndroidId();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_GetAndroidId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAndroidId FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAppShortcutGlobalQueryItems');
          const result = this.impl.getAppShortcutGlobalQueryItems(params.arg_query, params.arg_max_results);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutGlobalQueryItems_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAppShortcutGlobalQueryItems FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutItems_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAppShortcutItems');
          const result = this.impl.getAppShortcutItems(params.arg_package_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_GetAppShortcutItems_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAppShortcutItems FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRecentAndSuggestedAppsFromPlayStore');
          const result = this.impl.getRecentAndSuggestedAppsFromPlayStore(params.arg_query, params.arg_max_results);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_GetRecentAndSuggestedAppsFromPlayStore_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetRecentAndSuggestedAppsFromPlayStore FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_IsInstallable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isInstallable');
          const result = this.impl.isInstallable(params.arg_package_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_IsInstallable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsInstallable FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_GetAppCategory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAppCategory');
          const result = this.impl.getAppCategory(params.arg_package_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AppInstance_GetAppCategory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAppCategory FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AppInstance_SetAppLocale_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAppLocale');
          const result = this.impl.setAppLocale(params.arg_package_name, params.arg_locale_tag);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.AppInstanceReceiver = mojo.internal.bindings.arc.mojom.AppInstanceReceiver;

mojo.internal.bindings.arc.mojom.AppInstancePtr = mojo.internal.bindings.arc.mojom.AppInstanceRemote;
mojo.internal.bindings.arc.mojom.AppInstanceRequest = mojo.internal.bindings.arc.mojom.AppInstancePendingReceiver;

