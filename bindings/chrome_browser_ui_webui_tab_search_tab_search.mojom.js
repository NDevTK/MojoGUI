// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/tab_search/tab_search.mojom
 // Module: tab_search.mojom

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
 

 mojo.internal.bindings.tab_search = mojo.internal.bindings.tab_search || {};
mojo.internal.bindings.tab_search.mojom = mojo.internal.bindings.tab_search.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.tab_groups = mojo.internal.bindings.tab_groups || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.tabs = mojo.internal.bindings.tabs || {};

mojo.internal.bindings.tab_search.mojom.TabOrganizationStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.tab_search.mojom.TabOrganizationFeatureSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.tab_search.mojom.TabOrganizationErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.tab_search.mojom.TabOrganizationModelStrategySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.tab_search.mojom.TabSearchSectionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.tab_search.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.tab_search.mojom.ProfileDataSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.WindowSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.TabSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.RecentlyClosedTabSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.TabGroupSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.RecentlyClosedTabGroupSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.SwitchToTabInfoSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.TabOrganizationSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.TabOrganizationSessionSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.TabUpdateInfoSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.TabsRemovedInfoSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.UnusedTabInfoSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandlerFactory = {};
mojo.internal.bindings.tab_search.mojom.PageHandlerFactorySpec = { $ : {} };
mojo.internal.bindings.tab_search.mojom.PageHandlerFactory.$interfaceName = 'tab_search.mojom.PageHandlerFactory';
mojo.internal.bindings.tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler = {};
mojo.internal.bindings.tab_search.mojom.PageHandlerSpec = { $ : {} };
mojo.internal.bindings.tab_search.mojom.PageHandler.$interfaceName = 'tab_search.mojom.PageHandler';
mojo.internal.bindings.tab_search.mojom.PageHandler_CloseTab_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetProfileData_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetProfileData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_GetIsSplit_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_RejectSession_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_RestartSession_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.Page = {};
mojo.internal.bindings.tab_search.mojom.PageSpec = { $ : {} };
mojo.internal.bindings.tab_search.mojom.Page.$interfaceName = 'tab_search.mojom.Page';
mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.Page_HostWindowChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.Page_TabsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.Page_TabUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.Page_TabsRemoved_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.Page_ShowFREChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_search.mojom.Page_TabUnsplit_ParamsSpec = { $: {} };

// Enum: TabOrganizationState
mojo.internal.bindings.tab_search.mojom.TabOrganizationState = {
  kInitializing: 0,
  kNotStarted: 1,
  kInProgress: 2,
  kSuccess: 3,
  kFailure: 4,
};

// Enum: TabOrganizationFeature
mojo.internal.bindings.tab_search.mojom.TabOrganizationFeature = {
  kNone: 0,
  kSelector: 1,
  kAutoTabGroups: 2,
  kDeclutter: 3,
};

// Enum: TabOrganizationError
mojo.internal.bindings.tab_search.mojom.TabOrganizationError = {
  kNone: 0,
  kGrouping: 1,
  kGeneric: 2,
};

// Enum: TabOrganizationModelStrategy
mojo.internal.bindings.tab_search.mojom.TabOrganizationModelStrategy = {
  kTopic: 0,
  kTask: 1,
  kDomain: 2,
};

// Enum: TabSearchSection
mojo.internal.bindings.tab_search.mojom.TabSearchSection = {
  kNone: 0,
  kSearch: 1,
  kOrganize: 2,
};

// Enum: UserFeedback
mojo.internal.bindings.tab_search.mojom.UserFeedback = {
  kUserFeedBackUnspecified: 0,
  kUserFeedBackPositive: 1,
  kUserFeedBackNegative: 2,
};

// Struct: ProfileData
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.ProfileDataSpec, 'tab_search.mojom.ProfileData', [
      mojo.internal.StructField('arg_windows', 0, 0, mojo.internal.Array(mojo.internal.bindings.tab_search.mojom.WindowSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_groups', 8, 0, mojo.internal.Array(mojo.internal.bindings.tab_search.mojom.TabGroupSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_recently_closed_tabs', 16, 0, mojo.internal.Array(mojo.internal.bindings.tab_search.mojom.RecentlyClosedTabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_recently_closed_tab_groups', 24, 0, mojo.internal.Array(mojo.internal.bindings.tab_search.mojom.RecentlyClosedTabGroupSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_recently_closed_section_expanded', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Window
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.WindowSpec, 'tab_search.mojom.Window', [
      mojo.internal.StructField('arg_tabs', 0, 0, mojo.internal.Array(mojo.internal.bindings.tab_search.mojom.TabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_height', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_active', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_host_window', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Tab
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.TabSpec, 'tab_search.mojom.Tab', [
      mojo.internal.StructField('arg_alert_states', 0, 0, mojo.internal.Array(mojo.internal.bindings.tabs.mojom.TabAlertStateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_group_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_title', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_favicon_url', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_last_active_time_ticks', 40, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_active_elapsed_text', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_index', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_active', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_visible', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_pinned', 64, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_split', 64, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_default_favicon', 64, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_show_icon', 64, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: RecentlyClosedTab
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.RecentlyClosedTabSpec, 'tab_search.mojom.RecentlyClosedTab', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_active_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_active_elapsed_text', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TabGroup
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.TabGroupSpec, 'tab_search.mojom.TabGroup', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color', 8, 0, mojo.internal.bindings.tab_groups.mojom.ColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RecentlyClosedTabGroup
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.RecentlyClosedTabGroupSpec, 'tab_search.mojom.RecentlyClosedTabGroup', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color', 8, 0, mojo.internal.bindings.tab_groups.mojom.ColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_active_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_active_elapsed_text', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tab_count', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SwitchToTabInfo
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.SwitchToTabInfoSpec, 'tab_search.mojom.SwitchToTabInfo', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TabOrganization
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.TabOrganizationSpec, 'tab_search.mojom.TabOrganization', [
      mojo.internal.StructField('arg_tabs', 0, 0, mojo.internal.Array(mojo.internal.bindings.tab_search.mojom.TabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_organization_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_first_new_tab_index', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TabOrganizationSession
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.TabOrganizationSessionSpec, 'tab_search.mojom.TabOrganizationSession', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.tab_search.mojom.TabOrganizationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_organizations', 8, 0, mojo.internal.Array(mojo.internal.bindings.tab_search.mojom.TabOrganizationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 16, 0, mojo.internal.bindings.tab_search.mojom.TabOrganizationErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_active_tab_id', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TabUpdateInfo
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.TabUpdateInfoSpec, 'tab_search.mojom.TabUpdateInfo', [
      mojo.internal.StructField('arg_tab', 0, 0, mojo.internal.bindings.tab_search.mojom.TabSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_in_active_window', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_in_host_window', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TabsRemovedInfo
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.TabsRemovedInfoSpec, 'tab_search.mojom.TabsRemovedInfo', [
      mojo.internal.StructField('arg_tab_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_recently_closed_tabs', 8, 0, mojo.internal.Array(mojo.internal.bindings.tab_search.mojom.RecentlyClosedTabSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UnusedTabInfo
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.UnusedTabInfoSpec, 'tab_search.mojom.UnusedTabInfo', [
      mojo.internal.StructField('arg_stale_tabs', 0, 0, mojo.internal.Array(mojo.internal.bindings.tab_search.mojom.TabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_duplicate_tabs', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.bindings.tab_search.mojom.TabSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'tab_search.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.tab_search.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.tab_search.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.tab_search.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tab_search.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'tab_search.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tab_search.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tab_search.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

mojo.internal.bindings.tab_search.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('tab_search.mojom.PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.tab_search.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.tab_search.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_search.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.tab_search.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('tab_search.mojom.PageHandlerFactory', [
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
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.tab_search.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.tab_search.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.tab_search.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.tab_search.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.tab_search.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.tab_search.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_CloseTab_ParamsSpec, 'tab_search.mojom.PageHandler_CloseTab_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec, 'tab_search.mojom.PageHandler_CloseWebUiTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec, 'tab_search.mojom.PageHandler_DeclutterTabs_Params', [
      mojo.internal.StructField('arg_tab_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_urls', 8, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec, 'tab_search.mojom.PageHandler_AcceptTabOrganization_Params', [
      mojo.internal.StructField('arg_tabs', 0, 0, mojo.internal.Array(mojo.internal.bindings.tab_search.mojom.TabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_organization_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec, 'tab_search.mojom.PageHandler_RejectTabOrganization_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_organization_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec, 'tab_search.mojom.PageHandler_RenameTabOrganization_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_organization_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec, 'tab_search.mojom.PageHandler_ExcludeFromStaleTabs_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec, 'tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetProfileData_ParamsSpec, 'tab_search.mojom.PageHandler_GetProfileData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetProfileData_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetProfileData_ResponseParams', [
      mojo.internal.StructField('arg_profile_data', 0, 0, mojo.internal.bindings.tab_search.mojom.ProfileDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec, 'tab_search.mojom.PageHandler_GetUnusedTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParams', [
      mojo.internal.StructField('arg_tabs', 0, 0, mojo.internal.bindings.tab_search.mojom.UnusedTabInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec, 'tab_search.mojom.PageHandler_GetTabSearchSection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParams', [
      mojo.internal.StructField('arg_section', 0, 0, mojo.internal.bindings.tab_search.mojom.TabSearchSectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationFeature_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParams', [
      mojo.internal.StructField('arg_feature', 0, 0, mojo.internal.bindings.tab_search.mojom.TabOrganizationFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParams', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.bindings.tab_search.mojom.TabOrganizationSessionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParams', [
      mojo.internal.StructField('arg_strategy', 0, 0, mojo.internal.bindings.tab_search.mojom.TabOrganizationModelStrategySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec, 'tab_search.mojom.PageHandler_GetIsSplit_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_GetIsSplit_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetIsSplit_ResponseParams', [
      mojo.internal.StructField('arg_is_split', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec, 'tab_search.mojom.PageHandler_SwitchToTab_Params', [
      mojo.internal.StructField('arg_switch_to_tab_info', 0, 0, mojo.internal.bindings.tab_search.mojom.SwitchToTabInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec, 'tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec, 'tab_search.mojom.PageHandler_RequestTabOrganization_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec, 'tab_search.mojom.PageHandler_RemoveTabFromOrganization_Params', [
      mojo.internal.StructField('arg_tab', 0, 0, mojo.internal.bindings.tab_search.mojom.TabSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_organization_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_RejectSession_ParamsSpec, 'tab_search.mojom.PageHandler_RejectSession_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec, 'tab_search.mojom.PageHandler_ReplaceActiveSplitTab_Params', [
      mojo.internal.StructField('arg_replacement_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_RestartSession_ParamsSpec, 'tab_search.mojom.PageHandler_RestartSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec, 'tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_Params', [
      mojo.internal.StructField('arg_expanded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec, 'tab_search.mojom.PageHandler_SetOrganizationFeature_Params', [
      mojo.internal.StructField('arg_feature', 0, 0, mojo.internal.bindings.tab_search.mojom.TabOrganizationFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec, 'tab_search.mojom.PageHandler_StartTabGroupTutorial_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec, 'tab_search.mojom.PageHandler_TriggerFeedback_Params', [
      mojo.internal.StructField('arg_session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec, 'tab_search.mojom.PageHandler_TriggerSignIn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec, 'tab_search.mojom.PageHandler_OpenHelpPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec, 'tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_Params', [
      mojo.internal.StructField('arg_strategy', 0, 0, mojo.internal.bindings.tab_search.mojom.TabOrganizationModelStrategySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec, 'tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_Params', [
      mojo.internal.StructField('arg_user_instruction', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec, 'tab_search.mojom.PageHandler_SetUserFeedback_Params', [
      mojo.internal.StructField('arg_feedback', 0, 0, mojo.internal.bindings.tab_search.mojom.UserFeedbackSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec, 'tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec, 'tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.tab_search.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tab_search.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'tab_search.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tab_search.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tab_search.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  closeTab(arg_tab_id) {
    return this.$.closeTab(arg_tab_id);
  }
  closeWebUiTab() {
    return this.$.closeWebUiTab();
  }
  declutterTabs(arg_tab_ids, arg_urls) {
    return this.$.declutterTabs(arg_tab_ids, arg_urls);
  }
  acceptTabOrganization(arg_session_id, arg_organization_id, arg_tabs) {
    return this.$.acceptTabOrganization(arg_session_id, arg_organization_id, arg_tabs);
  }
  rejectTabOrganization(arg_session_id, arg_organization_id) {
    return this.$.rejectTabOrganization(arg_session_id, arg_organization_id);
  }
  renameTabOrganization(arg_session_id, arg_organization_id, arg_name) {
    return this.$.renameTabOrganization(arg_session_id, arg_organization_id, arg_name);
  }
  excludeFromStaleTabs(arg_tab_id) {
    return this.$.excludeFromStaleTabs(arg_tab_id);
  }
  excludeFromDuplicateTabs(arg_url) {
    return this.$.excludeFromDuplicateTabs(arg_url);
  }
  getProfileData() {
    return this.$.getProfileData();
  }
  getUnusedTabs() {
    return this.$.getUnusedTabs();
  }
  getTabSearchSection() {
    return this.$.getTabSearchSection();
  }
  getTabOrganizationFeature() {
    return this.$.getTabOrganizationFeature();
  }
  getTabOrganizationSession() {
    return this.$.getTabOrganizationSession();
  }
  getTabOrganizationModelStrategy() {
    return this.$.getTabOrganizationModelStrategy();
  }
  getIsSplit() {
    return this.$.getIsSplit();
  }
  switchToTab(arg_switch_to_tab_info) {
    return this.$.switchToTab(arg_switch_to_tab_info);
  }
  openRecentlyClosedEntry(arg_session_id) {
    return this.$.openRecentlyClosedEntry(arg_session_id);
  }
  requestTabOrganization() {
    return this.$.requestTabOrganization();
  }
  removeTabFromOrganization(arg_session_id, arg_organization_id, arg_tab) {
    return this.$.removeTabFromOrganization(arg_session_id, arg_organization_id, arg_tab);
  }
  rejectSession(arg_session_id) {
    return this.$.rejectSession(arg_session_id);
  }
  replaceActiveSplitTab(arg_replacement_tab_id) {
    return this.$.replaceActiveSplitTab(arg_replacement_tab_id);
  }
  restartSession() {
    return this.$.restartSession();
  }
  saveRecentlyClosedExpandedPref(arg_expanded) {
    return this.$.saveRecentlyClosedExpandedPref(arg_expanded);
  }
  setOrganizationFeature(arg_feature) {
    return this.$.setOrganizationFeature(arg_feature);
  }
  startTabGroupTutorial() {
    return this.$.startTabGroupTutorial();
  }
  triggerFeedback(arg_session_id) {
    return this.$.triggerFeedback(arg_session_id);
  }
  triggerSignIn() {
    return this.$.triggerSignIn();
  }
  openHelpPage() {
    return this.$.openHelpPage();
  }
  setTabOrganizationModelStrategy(arg_strategy) {
    return this.$.setTabOrganizationModelStrategy(arg_strategy);
  }
  setTabOrganizationUserInstruction(arg_user_instruction) {
    return this.$.setTabOrganizationUserInstruction(arg_user_instruction);
  }
  setUserFeedback(arg_session_id, arg_feedback) {
    return this.$.setUserFeedback(arg_session_id, arg_feedback);
  }
  notifyOrganizationUIReadyToShow() {
    return this.$.notifyOrganizationUIReadyToShow();
  }
  notifySearchUIReadyToShow() {
    return this.$.notifySearchUIReadyToShow();
  }
};

mojo.internal.bindings.tab_search.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('tab_search.mojom.PageHandler', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  closeTab(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_CloseTab_ParamsSpec,
      null,
      [arg_tab_id],
      false);
  }

  closeWebUiTab() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec,
      null,
      [],
      false);
  }

  declutterTabs(arg_tab_ids, arg_urls) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec,
      null,
      [arg_tab_ids, arg_urls],
      false);
  }

  acceptTabOrganization(arg_session_id, arg_organization_id, arg_tabs) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec,
      null,
      [arg_session_id, arg_organization_id, arg_tabs],
      false);
  }

  rejectTabOrganization(arg_session_id, arg_organization_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec,
      null,
      [arg_session_id, arg_organization_id],
      false);
  }

  renameTabOrganization(arg_session_id, arg_organization_id, arg_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec,
      null,
      [arg_session_id, arg_organization_id, arg_name],
      false);
  }

  excludeFromStaleTabs(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec,
      null,
      [arg_tab_id],
      false);
  }

  excludeFromDuplicateTabs(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  getProfileData() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetProfileData_ParamsSpec,
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetProfileData_ResponseParamsSpec,
      [],
      false);
  }

  getUnusedTabs() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec,
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec,
      [],
      false);
  }

  getTabSearchSection() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec,
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec,
      [],
      false);
  }

  getTabOrganizationFeature() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec,
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec,
      [],
      false);
  }

  getTabOrganizationSession() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec,
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec,
      [],
      false);
  }

  getTabOrganizationModelStrategy() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec,
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec,
      [],
      false);
  }

  getIsSplit() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec,
      mojo.internal.bindings.tab_search.mojom.PageHandler_GetIsSplit_ResponseParamsSpec,
      [],
      false);
  }

  switchToTab(arg_switch_to_tab_info) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec,
      null,
      [arg_switch_to_tab_info],
      false);
  }

  openRecentlyClosedEntry(arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec,
      null,
      [arg_session_id],
      false);
  }

  requestTabOrganization() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec,
      null,
      [],
      false);
  }

  removeTabFromOrganization(arg_session_id, arg_organization_id, arg_tab) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec,
      null,
      [arg_session_id, arg_organization_id, arg_tab],
      false);
  }

  rejectSession(arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_RejectSession_ParamsSpec,
      null,
      [arg_session_id],
      false);
  }

  replaceActiveSplitTab(arg_replacement_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec,
      null,
      [arg_replacement_tab_id],
      false);
  }

  restartSession() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_RestartSession_ParamsSpec,
      null,
      [],
      false);
  }

  saveRecentlyClosedExpandedPref(arg_expanded) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec,
      null,
      [arg_expanded],
      false);
  }

  setOrganizationFeature(arg_feature) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec,
      null,
      [arg_feature],
      false);
  }

  startTabGroupTutorial() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec,
      null,
      [],
      false);
  }

  triggerFeedback(arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec,
      null,
      [arg_session_id],
      false);
  }

  triggerSignIn() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec,
      null,
      [],
      false);
  }

  openHelpPage() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec,
      null,
      [],
      false);
  }

  setTabOrganizationModelStrategy(arg_strategy) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec,
      null,
      [arg_strategy],
      false);
  }

  setTabOrganizationUserInstruction(arg_user_instruction) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec,
      null,
      [arg_user_instruction],
      false);
  }

  setUserFeedback(arg_session_id, arg_feedback) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec,
      null,
      [arg_session_id, arg_feedback],
      false);
  }

  notifyOrganizationUIReadyToShow() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec,
      null,
      [],
      false);
  }

  notifySearchUIReadyToShow() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.tab_search.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.tab_search.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_search.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.tab_search.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('tab_search.mojom.PageHandler', [
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
        
        // Try Method 0: CloseTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_CloseTab_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseTab (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseWebUiTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseWebUiTab (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DeclutterTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeclutterTabs (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AcceptTabOrganization
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcceptTabOrganization (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RejectTabOrganization
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RejectTabOrganization (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RenameTabOrganization
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenameTabOrganization (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ExcludeFromStaleTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExcludeFromStaleTabs (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ExcludeFromDuplicateTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExcludeFromDuplicateTabs (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetProfileData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetProfileData_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProfileData (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetUnusedTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUnusedTabs (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetTabSearchSection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabSearchSection (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetTabOrganizationFeature
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabOrganizationFeature (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetTabOrganizationSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabOrganizationSession (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetTabOrganizationModelStrategy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabOrganizationModelStrategy (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetIsSplit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIsSplit (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SwitchToTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SwitchToTab (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OpenRecentlyClosedEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenRecentlyClosedEntry (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: RequestTabOrganization
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestTabOrganization (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: RemoveTabFromOrganization
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveTabFromOrganization (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: RejectSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_RejectSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RejectSession (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: ReplaceActiveSplitTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReplaceActiveSplitTab (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: RestartSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_RestartSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestartSession (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: SaveRecentlyClosedExpandedPref
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveRecentlyClosedExpandedPref (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: SetOrganizationFeature
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOrganizationFeature (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: StartTabGroupTutorial
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartTabGroupTutorial (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: TriggerFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerFeedback (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: TriggerSignIn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerSignIn (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: OpenHelpPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenHelpPage (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: SetTabOrganizationModelStrategy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTabOrganizationModelStrategy (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: SetTabOrganizationUserInstruction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTabOrganizationUserInstruction (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: SetUserFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserFeedback (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: NotifyOrganizationUIReadyToShow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyOrganizationUIReadyToShow (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: NotifySearchUIReadyToShow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifySearchUIReadyToShow (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_CloseTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeTab');
          const result = this.impl.closeTab(params.arg_tab_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeWebUiTab');
          const result = this.impl.closeWebUiTab();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.declutterTabs');
          const result = this.impl.declutterTabs(params.arg_tab_ids, params.arg_urls);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acceptTabOrganization');
          const result = this.impl.acceptTabOrganization(params.arg_session_id, params.arg_organization_id, params.arg_tabs);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rejectTabOrganization');
          const result = this.impl.rejectTabOrganization(params.arg_session_id, params.arg_organization_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renameTabOrganization');
          const result = this.impl.renameTabOrganization(params.arg_session_id, params.arg_organization_id, params.arg_name);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.excludeFromStaleTabs');
          const result = this.impl.excludeFromStaleTabs(params.arg_tab_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.excludeFromDuplicateTabs');
          const result = this.impl.excludeFromDuplicateTabs(params.arg_url);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetProfileData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProfileData');
          const result = this.impl.getProfileData();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tab_search.mojom.PageHandler_GetProfileData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProfileData FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUnusedTabs');
          const result = this.impl.getUnusedTabs();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUnusedTabs FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabSearchSection');
          const result = this.impl.getTabSearchSection();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTabSearchSection FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabOrganizationFeature');
          const result = this.impl.getTabOrganizationFeature();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTabOrganizationFeature FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabOrganizationSession');
          const result = this.impl.getTabOrganizationSession();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTabOrganizationSession FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabOrganizationModelStrategy');
          const result = this.impl.getTabOrganizationModelStrategy();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTabOrganizationModelStrategy FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getIsSplit');
          const result = this.impl.getIsSplit();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tab_search.mojom.PageHandler_GetIsSplit_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetIsSplit FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.switchToTab');
          const result = this.impl.switchToTab(params.arg_switch_to_tab_info);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openRecentlyClosedEntry');
          const result = this.impl.openRecentlyClosedEntry(params.arg_session_id);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestTabOrganization');
          const result = this.impl.requestTabOrganization();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeTabFromOrganization');
          const result = this.impl.removeTabFromOrganization(params.arg_session_id, params.arg_organization_id, params.arg_tab);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_RejectSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rejectSession');
          const result = this.impl.rejectSession(params.arg_session_id);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replaceActiveSplitTab');
          const result = this.impl.replaceActiveSplitTab(params.arg_replacement_tab_id);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_RestartSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restartSession');
          const result = this.impl.restartSession();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveRecentlyClosedExpandedPref');
          const result = this.impl.saveRecentlyClosedExpandedPref(params.arg_expanded);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOrganizationFeature');
          const result = this.impl.setOrganizationFeature(params.arg_feature);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startTabGroupTutorial');
          const result = this.impl.startTabGroupTutorial();
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.triggerFeedback');
          const result = this.impl.triggerFeedback(params.arg_session_id);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.triggerSignIn');
          const result = this.impl.triggerSignIn();
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openHelpPage');
          const result = this.impl.openHelpPage();
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTabOrganizationModelStrategy');
          const result = this.impl.setTabOrganizationModelStrategy(params.arg_strategy);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTabOrganizationUserInstruction');
          const result = this.impl.setTabOrganizationUserInstruction(params.arg_user_instruction);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserFeedback');
          const result = this.impl.setUserFeedback(params.arg_session_id, params.arg_feedback);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOrganizationUIReadyToShow');
          const result = this.impl.notifyOrganizationUIReadyToShow();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySearchUIReadyToShow');
          const result = this.impl.notifySearchUIReadyToShow();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.tab_search.mojom.PageHandlerReceiver = mojo.internal.bindings.tab_search.mojom.PageHandlerReceiver;

mojo.internal.bindings.tab_search.mojom.PageHandlerPtr = mojo.internal.bindings.tab_search.mojom.PageHandlerRemote;
mojo.internal.bindings.tab_search.mojom.PageHandlerRequest = mojo.internal.bindings.tab_search.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec, 'tab_search.mojom.Page_TabOrganizationSessionUpdated_Params', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.bindings.tab_search.mojom.TabOrganizationSessionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec, 'tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_Params', [
      mojo.internal.StructField('arg_strategy', 0, 0, mojo.internal.bindings.tab_search.mojom.TabOrganizationModelStrategySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.Page_HostWindowChanged_ParamsSpec, 'tab_search.mojom.Page_HostWindowChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.Page_TabsChanged_ParamsSpec, 'tab_search.mojom.Page_TabsChanged_Params', [
      mojo.internal.StructField('arg_profile_tabs', 0, 0, mojo.internal.bindings.tab_search.mojom.ProfileDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.Page_TabUpdated_ParamsSpec, 'tab_search.mojom.Page_TabUpdated_Params', [
      mojo.internal.StructField('arg_tabUpdateInfo', 0, 0, mojo.internal.bindings.tab_search.mojom.TabUpdateInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.Page_TabsRemoved_ParamsSpec, 'tab_search.mojom.Page_TabsRemoved_Params', [
      mojo.internal.StructField('arg_tabsRemovedInfo', 0, 0, mojo.internal.bindings.tab_search.mojom.TabsRemovedInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec, 'tab_search.mojom.Page_TabSearchSectionChanged_Params', [
      mojo.internal.StructField('arg_section', 0, 0, mojo.internal.bindings.tab_search.mojom.TabSearchSectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec, 'tab_search.mojom.Page_TabOrganizationFeatureChanged_Params', [
      mojo.internal.StructField('arg_feature', 0, 0, mojo.internal.bindings.tab_search.mojom.TabOrganizationFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.Page_ShowFREChanged_ParamsSpec, 'tab_search.mojom.Page_ShowFREChanged_Params', [
      mojo.internal.StructField('arg_show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec, 'tab_search.mojom.Page_TabOrganizationEnabledChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec, 'tab_search.mojom.Page_UnusedTabsChanged_Params', [
      mojo.internal.StructField('arg_tabs', 0, 0, mojo.internal.bindings.tab_search.mojom.UnusedTabInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_search.mojom.Page_TabUnsplit_ParamsSpec, 'tab_search.mojom.Page_TabUnsplit_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.tab_search.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tab_search.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'tab_search.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tab_search.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tab_search.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  tabOrganizationSessionUpdated(arg_session) {
    return this.$.tabOrganizationSessionUpdated(arg_session);
  }
  tabOrganizationModelStrategyUpdated(arg_strategy) {
    return this.$.tabOrganizationModelStrategyUpdated(arg_strategy);
  }
  hostWindowChanged() {
    return this.$.hostWindowChanged();
  }
  tabsChanged(arg_profile_tabs) {
    return this.$.tabsChanged(arg_profile_tabs);
  }
  tabUpdated(arg_tabUpdateInfo) {
    return this.$.tabUpdated(arg_tabUpdateInfo);
  }
  tabsRemoved(arg_tabsRemovedInfo) {
    return this.$.tabsRemoved(arg_tabsRemovedInfo);
  }
  tabSearchSectionChanged(arg_section) {
    return this.$.tabSearchSectionChanged(arg_section);
  }
  tabOrganizationFeatureChanged(arg_feature) {
    return this.$.tabOrganizationFeatureChanged(arg_feature);
  }
  showFREChanged(arg_show) {
    return this.$.showFREChanged(arg_show);
  }
  tabOrganizationEnabledChanged(arg_enabled) {
    return this.$.tabOrganizationEnabledChanged(arg_enabled);
  }
  unusedTabsChanged(arg_tabs) {
    return this.$.unusedTabsChanged(arg_tabs);
  }
  tabUnsplit() {
    return this.$.tabUnsplit();
  }
};

mojo.internal.bindings.tab_search.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('tab_search.mojom.Page', [
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

  tabOrganizationSessionUpdated(arg_session) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec,
      null,
      [arg_session],
      false);
  }

  tabOrganizationModelStrategyUpdated(arg_strategy) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec,
      null,
      [arg_strategy],
      false);
  }

  hostWindowChanged() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.tab_search.mojom.Page_HostWindowChanged_ParamsSpec,
      null,
      [],
      false);
  }

  tabsChanged(arg_profile_tabs) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.tab_search.mojom.Page_TabsChanged_ParamsSpec,
      null,
      [arg_profile_tabs],
      false);
  }

  tabUpdated(arg_tabUpdateInfo) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.tab_search.mojom.Page_TabUpdated_ParamsSpec,
      null,
      [arg_tabUpdateInfo],
      false);
  }

  tabsRemoved(arg_tabsRemovedInfo) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.tab_search.mojom.Page_TabsRemoved_ParamsSpec,
      null,
      [arg_tabsRemovedInfo],
      false);
  }

  tabSearchSectionChanged(arg_section) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec,
      null,
      [arg_section],
      false);
  }

  tabOrganizationFeatureChanged(arg_feature) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec,
      null,
      [arg_feature],
      false);
  }

  showFREChanged(arg_show) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.tab_search.mojom.Page_ShowFREChanged_ParamsSpec,
      null,
      [arg_show],
      false);
  }

  tabOrganizationEnabledChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  unusedTabsChanged(arg_tabs) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec,
      null,
      [arg_tabs],
      false);
  }

  tabUnsplit() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.tab_search.mojom.Page_TabUnsplit_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.tab_search.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.tab_search.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_search.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.tab_search.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('tab_search.mojom.Page', [
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
        
        // Try Method 0: TabOrganizationSessionUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabOrganizationSessionUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: TabOrganizationModelStrategyUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabOrganizationModelStrategyUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: HostWindowChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_HostWindowChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HostWindowChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: TabsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabsChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabsChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: TabUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabUpdated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabUpdated (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: TabsRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabsRemoved_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabsRemoved (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: TabSearchSectionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabSearchSectionChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: TabOrganizationFeatureChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabOrganizationFeatureChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ShowFREChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_ShowFREChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowFREChanged (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: TabOrganizationEnabledChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabOrganizationEnabledChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: UnusedTabsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnusedTabsChanged (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: TabUnsplit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabUnsplit_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabUnsplit (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabOrganizationSessionUpdated');
          const result = this.impl.tabOrganizationSessionUpdated(params.arg_session);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabOrganizationModelStrategyUpdated');
          const result = this.impl.tabOrganizationModelStrategyUpdated(params.arg_strategy);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_HostWindowChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hostWindowChanged');
          const result = this.impl.hostWindowChanged();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabsChanged');
          const result = this.impl.tabsChanged(params.arg_profile_tabs);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabUpdated');
          const result = this.impl.tabUpdated(params.arg_tabUpdateInfo);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabsRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabsRemoved');
          const result = this.impl.tabsRemoved(params.arg_tabsRemovedInfo);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabSearchSectionChanged');
          const result = this.impl.tabSearchSectionChanged(params.arg_section);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabOrganizationFeatureChanged');
          const result = this.impl.tabOrganizationFeatureChanged(params.arg_feature);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_ShowFREChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showFREChanged');
          const result = this.impl.showFREChanged(params.arg_show);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabOrganizationEnabledChanged');
          const result = this.impl.tabOrganizationEnabledChanged(params.arg_enabled);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unusedTabsChanged');
          const result = this.impl.unusedTabsChanged(params.arg_tabs);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_search.mojom.Page_TabUnsplit_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabUnsplit');
          const result = this.impl.tabUnsplit();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.tab_search.mojom.PageReceiver = mojo.internal.bindings.tab_search.mojom.PageReceiver;

mojo.internal.bindings.tab_search.mojom.PagePtr = mojo.internal.bindings.tab_search.mojom.PageRemote;
mojo.internal.bindings.tab_search.mojom.PageRequest = mojo.internal.bindings.tab_search.mojom.PagePendingReceiver;

