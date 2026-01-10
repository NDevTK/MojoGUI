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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var tab_search = tab_search || {};
tab_search.mojom = tab_search.mojom || {};
var mojo_base = mojo_base || {};
var tab_groups = tab_groups || {};
var url = url || {};
var tabs = tabs || {};

tab_search.mojom.TabOrganizationStateSpec = { $: mojo.internal.Enum() };
tab_search.mojom.TabOrganizationFeatureSpec = { $: mojo.internal.Enum() };
tab_search.mojom.TabOrganizationErrorSpec = { $: mojo.internal.Enum() };
tab_search.mojom.TabOrganizationModelStrategySpec = { $: mojo.internal.Enum() };
tab_search.mojom.TabSearchSectionSpec = { $: mojo.internal.Enum() };
tab_search.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };
tab_search.mojom.ProfileDataSpec = { $: {} };
tab_search.mojom.WindowSpec = { $: {} };
tab_search.mojom.TabSpec = { $: {} };
tab_search.mojom.RecentlyClosedTabSpec = { $: {} };
tab_search.mojom.TabGroupSpec = { $: {} };
tab_search.mojom.RecentlyClosedTabGroupSpec = { $: {} };
tab_search.mojom.SwitchToTabInfoSpec = { $: {} };
tab_search.mojom.TabOrganizationSpec = { $: {} };
tab_search.mojom.TabOrganizationSessionSpec = { $: {} };
tab_search.mojom.TabUpdateInfoSpec = { $: {} };
tab_search.mojom.TabsRemovedInfoSpec = { $: {} };
tab_search.mojom.UnusedTabInfoSpec = { $: {} };
tab_search.mojom.PageHandlerFactory = {};
tab_search.mojom.PageHandlerFactory.$interfaceName = 'tab_search.mojom.PageHandlerFactory';
tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler = {};
tab_search.mojom.PageHandler.$interfaceName = 'tab_search.mojom.PageHandler';
tab_search.mojom.PageHandler_CloseTab_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetProfileData_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetProfileData_ResponseParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_GetIsSplit_ResponseParamsSpec = { $: {} };
tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_RejectSession_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_RestartSession_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec = { $: {} };
tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec = { $: {} };
tab_search.mojom.Page = {};
tab_search.mojom.Page.$interfaceName = 'tab_search.mojom.Page';
tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec = { $: {} };
tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec = { $: {} };
tab_search.mojom.Page_HostWindowChanged_ParamsSpec = { $: {} };
tab_search.mojom.Page_TabsChanged_ParamsSpec = { $: {} };
tab_search.mojom.Page_TabUpdated_ParamsSpec = { $: {} };
tab_search.mojom.Page_TabsRemoved_ParamsSpec = { $: {} };
tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec = { $: {} };
tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec = { $: {} };
tab_search.mojom.Page_ShowFREChanged_ParamsSpec = { $: {} };
tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec = { $: {} };
tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec = { $: {} };
tab_search.mojom.Page_TabUnsplit_ParamsSpec = { $: {} };

// Enum: TabOrganizationState
tab_search.mojom.TabOrganizationState = {
  kInitializing: 0,
  kNotStarted: 1,
  kInProgress: 2,
  kSuccess: 3,
  kFailure: 4,
};

// Enum: TabOrganizationFeature
tab_search.mojom.TabOrganizationFeature = {
  kNone: 0,
  kSelector: 1,
  kAutoTabGroups: 2,
  kDeclutter: 3,
};

// Enum: TabOrganizationError
tab_search.mojom.TabOrganizationError = {
  kNone: 0,
  kGrouping: 1,
  kGeneric: 2,
};

// Enum: TabOrganizationModelStrategy
tab_search.mojom.TabOrganizationModelStrategy = {
  kTopic: 0,
  kTask: 1,
  kDomain: 2,
};

// Enum: TabSearchSection
tab_search.mojom.TabSearchSection = {
  kNone: 0,
  kSearch: 1,
  kOrganize: 2,
};

// Enum: UserFeedback
tab_search.mojom.UserFeedback = {
  kUserFeedBackUnspecified: 0,
  kUserFeedBackPositive: 1,
  kUserFeedBackNegative: 2,
};

// Struct: ProfileData
mojo.internal.Struct(
    tab_search.mojom.ProfileDataSpec, 'tab_search.mojom.ProfileData', [
      mojo.internal.StructField('windows', 0, 0, mojo.internal.Array(tab_search.mojom.WindowSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tab_groups', 8, 0, mojo.internal.Array(tab_search.mojom.TabGroupSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('recently_closed_tabs', 16, 0, mojo.internal.Array(tab_search.mojom.RecentlyClosedTabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('recently_closed_tab_groups', 24, 0, mojo.internal.Array(tab_search.mojom.RecentlyClosedTabGroupSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('recently_closed_section_expanded', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Window
mojo.internal.Struct(
    tab_search.mojom.WindowSpec, 'tab_search.mojom.Window', [
      mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(tab_search.mojom.TabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('height', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('active', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_host_window', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Tab
mojo.internal.Struct(
    tab_search.mojom.TabSpec, 'tab_search.mojom.Tab', [
      mojo.internal.StructField('alert_states', 0, 0, mojo.internal.Array(tabs.mojom.TabAlertStateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('group_id', 8, 0, mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('favicon_url', 32, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('last_active_time_ticks', 40, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_active_elapsed_text', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('index', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('tab_id', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('active', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('visible', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pinned', 64, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('split', 64, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_default_favicon', 64, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_icon', 64, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: RecentlyClosedTab
mojo.internal.Struct(
    tab_search.mojom.RecentlyClosedTabSpec, 'tab_search.mojom.RecentlyClosedTab', [
      mojo.internal.StructField('group_id', 0, 0, mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_active_time', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_active_elapsed_text', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TabGroup
mojo.internal.Struct(
    tab_search.mojom.TabGroupSpec, 'tab_search.mojom.TabGroup', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color', 8, 0, tab_groups.mojom.ColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RecentlyClosedTabGroup
mojo.internal.Struct(
    tab_search.mojom.RecentlyClosedTabGroupSpec, 'tab_search.mojom.RecentlyClosedTabGroup', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color', 8, 0, tab_groups.mojom.ColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_active_time', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_active_elapsed_text', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('tab_count', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SwitchToTabInfo
mojo.internal.Struct(
    tab_search.mojom.SwitchToTabInfoSpec, 'tab_search.mojom.SwitchToTabInfo', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TabOrganization
mojo.internal.Struct(
    tab_search.mojom.TabOrganizationSpec, 'tab_search.mojom.TabOrganization', [
      mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(tab_search.mojom.TabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('organization_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('first_new_tab_index', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TabOrganizationSession
mojo.internal.Struct(
    tab_search.mojom.TabOrganizationSessionSpec, 'tab_search.mojom.TabOrganizationSession', [
      mojo.internal.StructField('state', 0, 0, tab_search.mojom.TabOrganizationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('organizations', 8, 0, mojo.internal.Array(tab_search.mojom.TabOrganizationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('error', 16, 0, tab_search.mojom.TabOrganizationErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('active_tab_id', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TabUpdateInfo
mojo.internal.Struct(
    tab_search.mojom.TabUpdateInfoSpec, 'tab_search.mojom.TabUpdateInfo', [
      mojo.internal.StructField('tab', 0, 0, tab_search.mojom.TabSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('in_active_window', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('in_host_window', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TabsRemovedInfo
mojo.internal.Struct(
    tab_search.mojom.TabsRemovedInfoSpec, 'tab_search.mojom.TabsRemovedInfo', [
      mojo.internal.StructField('tab_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('recently_closed_tabs', 8, 0, mojo.internal.Array(tab_search.mojom.RecentlyClosedTabSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UnusedTabInfo
mojo.internal.Struct(
    tab_search.mojom.UnusedTabInfoSpec, 'tab_search.mojom.UnusedTabInfo', [
      mojo.internal.StructField('stale_tabs', 0, 0, mojo.internal.Array(tab_search.mojom.TabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('duplicate_tabs', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(tab_search.mojom.TabSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'tab_search.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(tab_search.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(tab_search.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

tab_search.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_search.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'tab_search.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_search.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new tab_search.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_search.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

tab_search.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new tab_search.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_search.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

tab_search.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
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
             decoder.decodeStructInline(tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
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

tab_search.mojom.PageHandlerFactoryReceiver = tab_search.mojom.PageHandlerFactoryReceiver;

tab_search.mojom.PageHandlerFactoryPtr = tab_search.mojom.PageHandlerFactoryRemote;
tab_search.mojom.PageHandlerFactoryRequest = tab_search.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    tab_search.mojom.PageHandler_CloseTab_ParamsSpec, 'tab_search.mojom.PageHandler_CloseTab_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec, 'tab_search.mojom.PageHandler_CloseWebUiTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec, 'tab_search.mojom.PageHandler_DeclutterTabs_Params', [
      mojo.internal.StructField('tab_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('urls', 8, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec, 'tab_search.mojom.PageHandler_AcceptTabOrganization_Params', [
      mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(tab_search.mojom.TabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('organization_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec, 'tab_search.mojom.PageHandler_RejectTabOrganization_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('organization_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec, 'tab_search.mojom.PageHandler_RenameTabOrganization_Params', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('organization_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec, 'tab_search.mojom.PageHandler_ExcludeFromStaleTabs_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec, 'tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetProfileData_ParamsSpec, 'tab_search.mojom.PageHandler_GetProfileData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetProfileData_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetProfileData_ResponseParams', [
      mojo.internal.StructField('profile_data', 0, 0, tab_search.mojom.ProfileDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec, 'tab_search.mojom.PageHandler_GetUnusedTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParams', [
      mojo.internal.StructField('tabs', 0, 0, tab_search.mojom.UnusedTabInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec, 'tab_search.mojom.PageHandler_GetTabSearchSection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParams', [
      mojo.internal.StructField('section', 0, 0, tab_search.mojom.TabSearchSectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationFeature_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParams', [
      mojo.internal.StructField('feature', 0, 0, tab_search.mojom.TabOrganizationFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParams', [
      mojo.internal.StructField('session', 0, 0, tab_search.mojom.TabOrganizationSessionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParams', [
      mojo.internal.StructField('strategy', 0, 0, tab_search.mojom.TabOrganizationModelStrategySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec, 'tab_search.mojom.PageHandler_GetIsSplit_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetIsSplit_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetIsSplit_ResponseParams', [
      mojo.internal.StructField('is_split', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec, 'tab_search.mojom.PageHandler_SwitchToTab_Params', [
      mojo.internal.StructField('switch_to_tab_info', 0, 0, tab_search.mojom.SwitchToTabInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec, 'tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec, 'tab_search.mojom.PageHandler_RequestTabOrganization_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec, 'tab_search.mojom.PageHandler_RemoveTabFromOrganization_Params', [
      mojo.internal.StructField('tab', 0, 0, tab_search.mojom.TabSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('organization_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_RejectSession_ParamsSpec, 'tab_search.mojom.PageHandler_RejectSession_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec, 'tab_search.mojom.PageHandler_ReplaceActiveSplitTab_Params', [
      mojo.internal.StructField('replacement_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_RestartSession_ParamsSpec, 'tab_search.mojom.PageHandler_RestartSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec, 'tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_Params', [
      mojo.internal.StructField('expanded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec, 'tab_search.mojom.PageHandler_SetOrganizationFeature_Params', [
      mojo.internal.StructField('feature', 0, 0, tab_search.mojom.TabOrganizationFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec, 'tab_search.mojom.PageHandler_StartTabGroupTutorial_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec, 'tab_search.mojom.PageHandler_TriggerFeedback_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec, 'tab_search.mojom.PageHandler_TriggerSignIn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec, 'tab_search.mojom.PageHandler_OpenHelpPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec, 'tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_Params', [
      mojo.internal.StructField('strategy', 0, 0, tab_search.mojom.TabOrganizationModelStrategySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec, 'tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_Params', [
      mojo.internal.StructField('user_instruction', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec, 'tab_search.mojom.PageHandler_SetUserFeedback_Params', [
      mojo.internal.StructField('feedback', 0, 0, tab_search.mojom.UserFeedbackSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec, 'tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec, 'tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_Params', [
    ],
    [[0, 8]]);

tab_search.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_search.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'tab_search.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_search.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new tab_search.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_search.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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

  closeTab(tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tab_search.mojom.PageHandler_CloseTab_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  closeWebUiTab() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec,
      null,
      [],
      false);
  }

  declutterTabs(tab_ids, urls) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec,
      null,
      [tab_ids, urls],
      false);
  }

  acceptTabOrganization(session_id, organization_id, tabs) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec,
      null,
      [session_id, organization_id, tabs],
      false);
  }

  rejectTabOrganization(session_id, organization_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec,
      null,
      [session_id, organization_id],
      false);
  }

  renameTabOrganization(session_id, organization_id, name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec,
      null,
      [session_id, organization_id, name],
      false);
  }

  excludeFromStaleTabs(tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  excludeFromDuplicateTabs(url) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec,
      null,
      [url],
      false);
  }

  getProfileData() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      tab_search.mojom.PageHandler_GetProfileData_ParamsSpec,
      tab_search.mojom.PageHandler_GetProfileData_ResponseParamsSpec,
      [],
      false);
  }

  getUnusedTabs() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec,
      tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec,
      [],
      false);
  }

  getTabSearchSection() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec,
      tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec,
      [],
      false);
  }

  getTabOrganizationFeature() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec,
      tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec,
      [],
      false);
  }

  getTabOrganizationSession() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec,
      tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec,
      [],
      false);
  }

  getTabOrganizationModelStrategy() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec,
      tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec,
      [],
      false);
  }

  getIsSplit() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec,
      tab_search.mojom.PageHandler_GetIsSplit_ResponseParamsSpec,
      [],
      false);
  }

  switchToTab(switch_to_tab_info) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec,
      null,
      [switch_to_tab_info],
      false);
  }

  openRecentlyClosedEntry(session_id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec,
      null,
      [session_id],
      false);
  }

  requestTabOrganization() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec,
      null,
      [],
      false);
  }

  removeTabFromOrganization(session_id, organization_id, tab) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec,
      null,
      [session_id, organization_id, tab],
      false);
  }

  rejectSession(session_id) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      tab_search.mojom.PageHandler_RejectSession_ParamsSpec,
      null,
      [session_id],
      false);
  }

  replaceActiveSplitTab(replacement_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec,
      null,
      [replacement_tab_id],
      false);
  }

  restartSession() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      tab_search.mojom.PageHandler_RestartSession_ParamsSpec,
      null,
      [],
      false);
  }

  saveRecentlyClosedExpandedPref(expanded) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec,
      null,
      [expanded],
      false);
  }

  setOrganizationFeature(feature) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec,
      null,
      [feature],
      false);
  }

  startTabGroupTutorial() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec,
      null,
      [],
      false);
  }

  triggerFeedback(session_id) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec,
      null,
      [session_id],
      false);
  }

  triggerSignIn() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec,
      null,
      [],
      false);
  }

  openHelpPage() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec,
      null,
      [],
      false);
  }

  setTabOrganizationModelStrategy(strategy) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec,
      null,
      [strategy],
      false);
  }

  setTabOrganizationUserInstruction(user_instruction) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec,
      null,
      [user_instruction],
      false);
  }

  setUserFeedback(session_id, feedback) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec,
      null,
      [session_id, feedback],
      false);
  }

  notifyOrganizationUIReadyToShow() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec,
      null,
      [],
      false);
  }

  notifySearchUIReadyToShow() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec,
      null,
      [],
      false);
  }

};

tab_search.mojom.PageHandler.getRemote = function() {
  let remote = new tab_search.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_search.mojom.PageHandler',
    'context');
  return remote.$;
};

tab_search.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_CloseTab_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_GetProfileData_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_RejectSession_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_RestartSession_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec);
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
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_CloseTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeTab');
          const result = this.impl.closeTab(params.tab_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeWebUiTab');
          const result = this.impl.closeWebUiTab();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.declutterTabs');
          const result = this.impl.declutterTabs(params.tab_ids, params.urls);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acceptTabOrganization');
          const result = this.impl.acceptTabOrganization(params.session_id, params.organization_id, params.tabs);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rejectTabOrganization');
          const result = this.impl.rejectTabOrganization(params.session_id, params.organization_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renameTabOrganization');
          const result = this.impl.renameTabOrganization(params.session_id, params.organization_id, params.name);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.excludeFromStaleTabs');
          const result = this.impl.excludeFromStaleTabs(params.tab_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.excludeFromDuplicateTabs');
          const result = this.impl.excludeFromDuplicateTabs(params.url);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_GetProfileData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProfileData');
          const result = this.impl.getProfileData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tab_search.mojom.PageHandler_GetProfileData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUnusedTabs');
          const result = this.impl.getUnusedTabs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabSearchSection');
          const result = this.impl.getTabSearchSection();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabOrganizationFeature');
          const result = this.impl.getTabOrganizationFeature();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabOrganizationSession');
          const result = this.impl.getTabOrganizationSession();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabOrganizationModelStrategy');
          const result = this.impl.getTabOrganizationModelStrategy();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getIsSplit');
          const result = this.impl.getIsSplit();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tab_search.mojom.PageHandler_GetIsSplit_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.switchToTab');
          const result = this.impl.switchToTab(params.switch_to_tab_info);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openRecentlyClosedEntry');
          const result = this.impl.openRecentlyClosedEntry(params.session_id);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestTabOrganization');
          const result = this.impl.requestTabOrganization();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeTabFromOrganization');
          const result = this.impl.removeTabFromOrganization(params.session_id, params.organization_id, params.tab);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_RejectSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rejectSession');
          const result = this.impl.rejectSession(params.session_id);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replaceActiveSplitTab');
          const result = this.impl.replaceActiveSplitTab(params.replacement_tab_id);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_RestartSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restartSession');
          const result = this.impl.restartSession();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveRecentlyClosedExpandedPref');
          const result = this.impl.saveRecentlyClosedExpandedPref(params.expanded);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOrganizationFeature');
          const result = this.impl.setOrganizationFeature(params.feature);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startTabGroupTutorial');
          const result = this.impl.startTabGroupTutorial();
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.triggerFeedback');
          const result = this.impl.triggerFeedback(params.session_id);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.triggerSignIn');
          const result = this.impl.triggerSignIn();
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openHelpPage');
          const result = this.impl.openHelpPage();
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTabOrganizationModelStrategy');
          const result = this.impl.setTabOrganizationModelStrategy(params.strategy);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTabOrganizationUserInstruction');
          const result = this.impl.setTabOrganizationUserInstruction(params.user_instruction);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserFeedback');
          const result = this.impl.setUserFeedback(params.session_id, params.feedback);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOrganizationUIReadyToShow');
          const result = this.impl.notifyOrganizationUIReadyToShow();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec.$.structSpec);
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

tab_search.mojom.PageHandlerReceiver = tab_search.mojom.PageHandlerReceiver;

tab_search.mojom.PageHandlerPtr = tab_search.mojom.PageHandlerRemote;
tab_search.mojom.PageHandlerRequest = tab_search.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec, 'tab_search.mojom.Page_TabOrganizationSessionUpdated_Params', [
      mojo.internal.StructField('session', 0, 0, tab_search.mojom.TabOrganizationSessionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec, 'tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_Params', [
      mojo.internal.StructField('strategy', 0, 0, tab_search.mojom.TabOrganizationModelStrategySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_HostWindowChanged_ParamsSpec, 'tab_search.mojom.Page_HostWindowChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabsChanged_ParamsSpec, 'tab_search.mojom.Page_TabsChanged_Params', [
      mojo.internal.StructField('profile_tabs', 0, 0, tab_search.mojom.ProfileDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabUpdated_ParamsSpec, 'tab_search.mojom.Page_TabUpdated_Params', [
      mojo.internal.StructField('tabUpdateInfo', 0, 0, tab_search.mojom.TabUpdateInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabsRemoved_ParamsSpec, 'tab_search.mojom.Page_TabsRemoved_Params', [
      mojo.internal.StructField('tabsRemovedInfo', 0, 0, tab_search.mojom.TabsRemovedInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec, 'tab_search.mojom.Page_TabSearchSectionChanged_Params', [
      mojo.internal.StructField('section', 0, 0, tab_search.mojom.TabSearchSectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec, 'tab_search.mojom.Page_TabOrganizationFeatureChanged_Params', [
      mojo.internal.StructField('feature', 0, 0, tab_search.mojom.TabOrganizationFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_ShowFREChanged_ParamsSpec, 'tab_search.mojom.Page_ShowFREChanged_Params', [
      mojo.internal.StructField('show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec, 'tab_search.mojom.Page_TabOrganizationEnabledChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec, 'tab_search.mojom.Page_UnusedTabsChanged_Params', [
      mojo.internal.StructField('tabs', 0, 0, tab_search.mojom.UnusedTabInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabUnsplit_ParamsSpec, 'tab_search.mojom.Page_TabUnsplit_Params', [
    ],
    [[0, 8]]);

tab_search.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_search.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'tab_search.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_search.mojom.PagePendingReceiver,
      handle);
    this.$ = new tab_search.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_search.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
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

  tabOrganizationSessionUpdated(session) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec,
      null,
      [session],
      false);
  }

  tabOrganizationModelStrategyUpdated(strategy) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec,
      null,
      [strategy],
      false);
  }

  hostWindowChanged() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      tab_search.mojom.Page_HostWindowChanged_ParamsSpec,
      null,
      [],
      false);
  }

  tabsChanged(profile_tabs) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      tab_search.mojom.Page_TabsChanged_ParamsSpec,
      null,
      [profile_tabs],
      false);
  }

  tabUpdated(tabUpdateInfo) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      tab_search.mojom.Page_TabUpdated_ParamsSpec,
      null,
      [tabUpdateInfo],
      false);
  }

  tabsRemoved(tabsRemovedInfo) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      tab_search.mojom.Page_TabsRemoved_ParamsSpec,
      null,
      [tabsRemovedInfo],
      false);
  }

  tabSearchSectionChanged(section) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec,
      null,
      [section],
      false);
  }

  tabOrganizationFeatureChanged(feature) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec,
      null,
      [feature],
      false);
  }

  showFREChanged(show) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      tab_search.mojom.Page_ShowFREChanged_ParamsSpec,
      null,
      [show],
      false);
  }

  tabOrganizationEnabledChanged(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  unusedTabsChanged(tabs) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec,
      null,
      [tabs],
      false);
  }

  tabUnsplit() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      tab_search.mojom.Page_TabUnsplit_ParamsSpec,
      null,
      [],
      false);
  }

};

tab_search.mojom.Page.getRemote = function() {
  let remote = new tab_search.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_search.mojom.Page',
    'context');
  return remote.$;
};

tab_search.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
             decoder.decodeStructInline(tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.Page_HostWindowChanged_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.Page_TabsChanged_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.Page_TabUpdated_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.Page_TabsRemoved_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.Page_ShowFREChanged_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec);
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
             decoder.decodeStructInline(tab_search.mojom.Page_TabUnsplit_ParamsSpec);
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
          const params = decoder.decodeStructInline(tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabOrganizationSessionUpdated');
          const result = this.impl.tabOrganizationSessionUpdated(params.session);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabOrganizationModelStrategyUpdated');
          const result = this.impl.tabOrganizationModelStrategyUpdated(params.strategy);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.Page_HostWindowChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hostWindowChanged');
          const result = this.impl.hostWindowChanged();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.Page_TabsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabsChanged');
          const result = this.impl.tabsChanged(params.profile_tabs);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.Page_TabUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabUpdated');
          const result = this.impl.tabUpdated(params.tabUpdateInfo);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.Page_TabsRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabsRemoved');
          const result = this.impl.tabsRemoved(params.tabsRemovedInfo);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabSearchSectionChanged');
          const result = this.impl.tabSearchSectionChanged(params.section);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabOrganizationFeatureChanged');
          const result = this.impl.tabOrganizationFeatureChanged(params.feature);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.Page_ShowFREChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showFREChanged');
          const result = this.impl.showFREChanged(params.show);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabOrganizationEnabledChanged');
          const result = this.impl.tabOrganizationEnabledChanged(params.enabled);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unusedTabsChanged');
          const result = this.impl.unusedTabsChanged(params.tabs);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tab_search.mojom.Page_TabUnsplit_ParamsSpec.$.structSpec);
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

tab_search.mojom.PageReceiver = tab_search.mojom.PageReceiver;

tab_search.mojom.PagePtr = tab_search.mojom.PageRemote;
tab_search.mojom.PageRequest = tab_search.mojom.PagePendingReceiver;

