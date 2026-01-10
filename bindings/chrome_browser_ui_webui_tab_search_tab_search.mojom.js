// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_search/tab_search.mojom
// Module: tab_search.mojom

'use strict';

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
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    });
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
  }

  closeTab(tab_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_search.mojom.PageHandler_CloseTab_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  closeWebUiTab() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec,
      null,
      [],
      false);
  }

  declutterTabs(tab_ids, urls) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec,
      null,
      [tab_ids, urls],
      false);
  }

  acceptTabOrganization(session_id, organization_id, tabs) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec,
      null,
      [session_id, organization_id, tabs],
      false);
  }

  rejectTabOrganization(session_id, organization_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec,
      null,
      [session_id, organization_id],
      false);
  }

  renameTabOrganization(session_id, organization_id, name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec,
      null,
      [session_id, organization_id, name],
      false);
  }

  excludeFromStaleTabs(tab_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  excludeFromDuplicateTabs(url) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec,
      null,
      [url],
      false);
  }

  getProfileData() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_search.mojom.PageHandler_GetProfileData_ParamsSpec,
      tab_search.mojom.PageHandler_GetProfileData_ResponseParamsSpec,
      [],
      false);
  }

  getUnusedTabs() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec,
      tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec,
      [],
      false);
  }

  getTabSearchSection() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec,
      tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec,
      [],
      false);
  }

  getTabOrganizationFeature() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec,
      tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec,
      [],
      false);
  }

  getTabOrganizationSession() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec,
      tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec,
      [],
      false);
  }

  getTabOrganizationModelStrategy() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec,
      tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec,
      [],
      false);
  }

  getIsSplit() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec,
      tab_search.mojom.PageHandler_GetIsSplit_ResponseParamsSpec,
      [],
      false);
  }

  switchToTab(switch_to_tab_info) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec,
      null,
      [switch_to_tab_info],
      false);
  }

  openRecentlyClosedEntry(session_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec,
      null,
      [session_id],
      false);
  }

  requestTabOrganization() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec,
      null,
      [],
      false);
  }

  removeTabFromOrganization(session_id, organization_id, tab) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec,
      null,
      [session_id, organization_id, tab],
      false);
  }

  rejectSession(session_id) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      tab_search.mojom.PageHandler_RejectSession_ParamsSpec,
      null,
      [session_id],
      false);
  }

  replaceActiveSplitTab(replacement_tab_id) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec,
      null,
      [replacement_tab_id],
      false);
  }

  restartSession() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      tab_search.mojom.PageHandler_RestartSession_ParamsSpec,
      null,
      [],
      false);
  }

  saveRecentlyClosedExpandedPref(expanded) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec,
      null,
      [expanded],
      false);
  }

  setOrganizationFeature(feature) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec,
      null,
      [feature],
      false);
  }

  startTabGroupTutorial() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec,
      null,
      [],
      false);
  }

  triggerFeedback(session_id) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec,
      null,
      [session_id],
      false);
  }

  triggerSignIn() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec,
      null,
      [],
      false);
  }

  openHelpPage() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec,
      null,
      [],
      false);
  }

  setTabOrganizationModelStrategy(strategy) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec,
      null,
      [strategy],
      false);
  }

  setTabOrganizationUserInstruction(user_instruction) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec,
      null,
      [user_instruction],
      false);
  }

  setUserFeedback(session_id, feedback) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec,
      null,
      [session_id, feedback],
      false);
  }

  notifyOrganizationUIReadyToShow() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec,
      null,
      [],
      false);
  }

  notifySearchUIReadyToShow() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = tab_search.mojom.PageHandler_CloseTab_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeTab(params.tab_id);
          break;
        }
        case 1: {
          const params = tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeWebUiTab();
          break;
        }
        case 2: {
          const params = tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.declutterTabs(params.tab_ids, params.urls);
          break;
        }
        case 3: {
          const params = tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec.$.decode(message.payload);
          const result = this.impl.acceptTabOrganization(params.session_id, params.organization_id, params.tabs);
          break;
        }
        case 4: {
          const params = tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec.$.decode(message.payload);
          const result = this.impl.rejectTabOrganization(params.session_id, params.organization_id);
          break;
        }
        case 5: {
          const params = tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec.$.decode(message.payload);
          const result = this.impl.renameTabOrganization(params.session_id, params.organization_id, params.name);
          break;
        }
        case 6: {
          const params = tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.excludeFromStaleTabs(params.tab_id);
          break;
        }
        case 7: {
          const params = tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.excludeFromDuplicateTabs(params.url);
          break;
        }
        case 8: {
          const params = tab_search.mojom.PageHandler_GetProfileData_ParamsSpec.$.decode(message.payload);
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
          const params = tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec.$.decode(message.payload);
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
          const params = tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec.$.decode(message.payload);
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
          const params = tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec.$.decode(message.payload);
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
          const params = tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec.$.decode(message.payload);
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
          const params = tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec.$.decode(message.payload);
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
          const params = tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec.$.decode(message.payload);
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
          const params = tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec.$.decode(message.payload);
          const result = this.impl.switchToTab(params.switch_to_tab_info);
          break;
        }
        case 16: {
          const params = tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openRecentlyClosedEntry(params.session_id);
          break;
        }
        case 17: {
          const params = tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestTabOrganization();
          break;
        }
        case 18: {
          const params = tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removeTabFromOrganization(params.session_id, params.organization_id, params.tab);
          break;
        }
        case 19: {
          const params = tab_search.mojom.PageHandler_RejectSession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.rejectSession(params.session_id);
          break;
        }
        case 20: {
          const params = tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec.$.decode(message.payload);
          const result = this.impl.replaceActiveSplitTab(params.replacement_tab_id);
          break;
        }
        case 21: {
          const params = tab_search.mojom.PageHandler_RestartSession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.restartSession();
          break;
        }
        case 22: {
          const params = tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec.$.decode(message.payload);
          const result = this.impl.saveRecentlyClosedExpandedPref(params.expanded);
          break;
        }
        case 23: {
          const params = tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setOrganizationFeature(params.feature);
          break;
        }
        case 24: {
          const params = tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startTabGroupTutorial();
          break;
        }
        case 25: {
          const params = tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec.$.decode(message.payload);
          const result = this.impl.triggerFeedback(params.session_id);
          break;
        }
        case 26: {
          const params = tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec.$.decode(message.payload);
          const result = this.impl.triggerSignIn();
          break;
        }
        case 27: {
          const params = tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openHelpPage();
          break;
        }
        case 28: {
          const params = tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTabOrganizationModelStrategy(params.strategy);
          break;
        }
        case 29: {
          const params = tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTabOrganizationUserInstruction(params.user_instruction);
          break;
        }
        case 30: {
          const params = tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setUserFeedback(params.session_id, params.feedback);
          break;
        }
        case 31: {
          const params = tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyOrganizationUIReadyToShow();
          break;
        }
        case 32: {
          const params = tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifySearchUIReadyToShow();
          break;
        }
      }
    });
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
  }

  tabOrganizationSessionUpdated(session) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec,
      null,
      [session],
      false);
  }

  tabOrganizationModelStrategyUpdated(strategy) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec,
      null,
      [strategy],
      false);
  }

  hostWindowChanged() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_search.mojom.Page_HostWindowChanged_ParamsSpec,
      null,
      [],
      false);
  }

  tabsChanged(profile_tabs) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_search.mojom.Page_TabsChanged_ParamsSpec,
      null,
      [profile_tabs],
      false);
  }

  tabUpdated(tabUpdateInfo) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_search.mojom.Page_TabUpdated_ParamsSpec,
      null,
      [tabUpdateInfo],
      false);
  }

  tabsRemoved(tabsRemovedInfo) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_search.mojom.Page_TabsRemoved_ParamsSpec,
      null,
      [tabsRemovedInfo],
      false);
  }

  tabSearchSectionChanged(section) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec,
      null,
      [section],
      false);
  }

  tabOrganizationFeatureChanged(feature) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec,
      null,
      [feature],
      false);
  }

  showFREChanged(show) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_search.mojom.Page_ShowFREChanged_ParamsSpec,
      null,
      [show],
      false);
  }

  tabOrganizationEnabledChanged(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec,
      null,
      [enabled],
      false);
  }

  unusedTabsChanged(tabs) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec,
      null,
      [tabs],
      false);
  }

  tabUnsplit() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.tabOrganizationSessionUpdated(params.session);
          break;
        }
        case 1: {
          const params = tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.tabOrganizationModelStrategyUpdated(params.strategy);
          break;
        }
        case 2: {
          const params = tab_search.mojom.Page_HostWindowChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hostWindowChanged();
          break;
        }
        case 3: {
          const params = tab_search.mojom.Page_TabsChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.tabsChanged(params.profile_tabs);
          break;
        }
        case 4: {
          const params = tab_search.mojom.Page_TabUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.tabUpdated(params.tabUpdateInfo);
          break;
        }
        case 5: {
          const params = tab_search.mojom.Page_TabsRemoved_ParamsSpec.$.decode(message.payload);
          const result = this.impl.tabsRemoved(params.tabsRemovedInfo);
          break;
        }
        case 6: {
          const params = tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.tabSearchSectionChanged(params.section);
          break;
        }
        case 7: {
          const params = tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.tabOrganizationFeatureChanged(params.feature);
          break;
        }
        case 8: {
          const params = tab_search.mojom.Page_ShowFREChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showFREChanged(params.show);
          break;
        }
        case 9: {
          const params = tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.tabOrganizationEnabledChanged(params.enabled);
          break;
        }
        case 10: {
          const params = tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.unusedTabsChanged(params.tabs);
          break;
        }
        case 11: {
          const params = tab_search.mojom.Page_TabUnsplit_ParamsSpec.$.decode(message.payload);
          const result = this.impl.tabUnsplit();
          break;
        }
      }
    });
  }
};

tab_search.mojom.PageReceiver = tab_search.mojom.PageReceiver;

tab_search.mojom.PagePtr = tab_search.mojom.PageRemote;
tab_search.mojom.PageRequest = tab_search.mojom.PagePendingReceiver;

