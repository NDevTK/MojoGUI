// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_search/tab_search.mojom
// Module: tab_search.mojom

'use strict';

// Module namespace
var tab_search = tab_search || {};
tab_search.mojom = tab_search.mojom || {};
var components = components || {};
var url = url || {};
var ui = ui || {};

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
      mojo.internal.StructField('windows', 0, 0, mojo.internal.Array(tab_search.mojom.WindowSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('tab_groups', 8, 0, mojo.internal.Array(tab_search.mojom.TabGroupSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('recently_closed_tabs', 16, 0, mojo.internal.Array(tab_search.mojom.RecentlyClosedTabSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('recently_closed_tab_groups', 24, 0, mojo.internal.Array(tab_search.mojom.RecentlyClosedTabGroupSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('recently_closed_section_expanded', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Window
mojo.internal.Struct(
    tab_search.mojom.WindowSpec, 'tab_search.mojom.Window', [
      mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_host_window', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('height', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('tabs', 8, 0, mojo.internal.Array(tab_search.mojom.TabSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Tab
mojo.internal.Struct(
    tab_search.mojom.TabSpec, 'tab_search.mojom.Tab', [
      mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('visible', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('alert_states', 8, 0, mojo.internal.Array(tabs.mojom.TabAlertStateSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('tab_id', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('group_id', 24, 0, mojo_base.mojom.TokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('pinned', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('split', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('title', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 48, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('favicon_url', 56, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('is_default_favicon', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_icon', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('last_active_time_ticks', 72, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('last_active_elapsed_text', 80, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: RecentlyClosedTab
mojo.internal.Struct(
    tab_search.mojom.RecentlyClosedTabSpec, 'tab_search.mojom.RecentlyClosedTab', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('group_id', 8, 0, mojo_base.mojom.TokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('last_active_time', 32, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('last_active_elapsed_text', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TabGroup
mojo.internal.Struct(
    tab_search.mojom.TabGroupSpec, 'tab_search.mojom.TabGroup', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.TokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('color', 8, 0, tab_groups.mojom.ColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RecentlyClosedTabGroup
mojo.internal.Struct(
    tab_search.mojom.RecentlyClosedTabGroupSpec, 'tab_search.mojom.RecentlyClosedTabGroup', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo_base.mojom.TokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('color', 16, 0, tab_groups.mojom.ColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('title', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tab_count', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('last_active_time', 40, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('last_active_elapsed_text', 48, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: SwitchToTabInfo
mojo.internal.Struct(
    tab_search.mojom.SwitchToTabInfoSpec, 'tab_search.mojom.SwitchToTabInfo', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TabOrganization
mojo.internal.Struct(
    tab_search.mojom.TabOrganizationSpec, 'tab_search.mojom.TabOrganization', [
      mojo.internal.StructField('organization_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('tabs', 8, 0, mojo.internal.Array(tab_search.mojom.TabSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('first_new_tab_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('name', 24, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TabOrganizationSession
mojo.internal.Struct(
    tab_search.mojom.TabOrganizationSessionSpec, 'tab_search.mojom.TabOrganizationSession', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('state', 4, 0, tab_search.mojom.TabOrganizationStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('organizations', 8, 0, mojo.internal.Array(tab_search.mojom.TabOrganizationSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('error', 16, 0, tab_search.mojom.TabOrganizationErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('active_tab_id', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TabUpdateInfo
mojo.internal.Struct(
    tab_search.mojom.TabUpdateInfoSpec, 'tab_search.mojom.TabUpdateInfo', [
      mojo.internal.StructField('in_active_window', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('in_host_window', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tab', 8, 0, tab_search.mojom.TabSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TabsRemovedInfo
mojo.internal.Struct(
    tab_search.mojom.TabsRemovedInfoSpec, 'tab_search.mojom.TabsRemovedInfo', [
      mojo.internal.StructField('tab_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('recently_closed_tabs', 8, 0, mojo.internal.Array(tab_search.mojom.RecentlyClosedTabSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UnusedTabInfo
mojo.internal.Struct(
    tab_search.mojom.UnusedTabInfoSpec, 'tab_search.mojom.UnusedTabInfo', [
      mojo.internal.StructField('stale_tabs', 0, 0, mojo.internal.Array(tab_search.mojom.TabSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('duplicate_tabs', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(tab_search.mojom.TabSpec, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'tab_search.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(tab_search.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(tab_search.mojom.PageHandlerRemote), null, false, 0, undefined),
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
      [page, handler]);
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
      mojo.internal.StructField('urls', 8, 0, mojo.internal.Array(url.mojom.UrlSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec, 'tab_search.mojom.PageHandler_AcceptTabOrganization_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('organization_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('tabs', 8, 0, mojo.internal.Array(tab_search.mojom.TabSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('organization_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec, 'tab_search.mojom.PageHandler_ExcludeFromStaleTabs_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec, 'tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetProfileData_ParamsSpec, 'tab_search.mojom.PageHandler_GetProfileData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetProfileData_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetProfileData_ResponseParams', [
      mojo.internal.StructField('profile_data', 0, 0, tab_search.mojom.ProfileDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec, 'tab_search.mojom.PageHandler_GetUnusedTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParams', [
      mojo.internal.StructField('tabs', 0, 0, tab_search.mojom.UnusedTabInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec, 'tab_search.mojom.PageHandler_GetTabSearchSection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParams', [
      mojo.internal.StructField('section', 0, 0, tab_search.mojom.TabSearchSectionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationFeature_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParams', [
      mojo.internal.StructField('feature', 0, 0, tab_search.mojom.TabOrganizationFeatureSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParams', [
      mojo.internal.StructField('session', 0, 0, tab_search.mojom.TabOrganizationSessionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec, 'tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParams', [
      mojo.internal.StructField('strategy', 0, 0, tab_search.mojom.TabOrganizationModelStrategySpec, null, false, 0, undefined),
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
      mojo.internal.StructField('switch_to_tab_info', 0, 0, tab_search.mojom.SwitchToTabInfoSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('organization_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('tab', 8, 0, tab_search.mojom.TabSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('feature', 0, 0, tab_search.mojom.TabOrganizationFeatureSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('strategy', 0, 0, tab_search.mojom.TabOrganizationModelStrategySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec, 'tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_Params', [
      mojo.internal.StructField('user_instruction', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec, 'tab_search.mojom.PageHandler_SetUserFeedback_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('feedback', 4, 0, tab_search.mojom.UserFeedbackSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [tab_id]);
  }

  closeWebUiTab() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec,
      null,
      []);
  }

  declutterTabs(tab_ids, urls) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec,
      null,
      [tab_ids, urls]);
  }

  acceptTabOrganization(session_id, organization_id, tabs) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec,
      null,
      [session_id, organization_id, tabs]);
  }

  rejectTabOrganization(session_id, organization_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec,
      null,
      [session_id, organization_id]);
  }

  renameTabOrganization(session_id, organization_id, name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec,
      null,
      [session_id, organization_id, name]);
  }

  excludeFromStaleTabs(tab_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec,
      null,
      [tab_id]);
  }

  excludeFromDuplicateTabs(url) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec,
      null,
      [url]);
  }

  getProfileData() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_search.mojom.PageHandler_GetProfileData_ParamsSpec,
      tab_search.mojom.PageHandler_GetProfileData_ResponseParamsSpec,
      []);
  }

  getUnusedTabs() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec,
      tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec,
      []);
  }

  getTabSearchSection() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec,
      tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec,
      []);
  }

  getTabOrganizationFeature() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec,
      tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec,
      []);
  }

  getTabOrganizationSession() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec,
      tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec,
      []);
  }

  getTabOrganizationModelStrategy() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec,
      tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec,
      []);
  }

  getIsSplit() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec,
      tab_search.mojom.PageHandler_GetIsSplit_ResponseParamsSpec,
      []);
  }

  switchToTab(switch_to_tab_info) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec,
      null,
      [switch_to_tab_info]);
  }

  openRecentlyClosedEntry(session_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec,
      null,
      [session_id]);
  }

  requestTabOrganization() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec,
      null,
      []);
  }

  removeTabFromOrganization(session_id, organization_id, tab) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec,
      null,
      [session_id, organization_id, tab]);
  }

  rejectSession(session_id) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      tab_search.mojom.PageHandler_RejectSession_ParamsSpec,
      null,
      [session_id]);
  }

  replaceActiveSplitTab(replacement_tab_id) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec,
      null,
      [replacement_tab_id]);
  }

  restartSession() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      tab_search.mojom.PageHandler_RestartSession_ParamsSpec,
      null,
      []);
  }

  saveRecentlyClosedExpandedPref(expanded) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec,
      null,
      [expanded]);
  }

  setOrganizationFeature(feature) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec,
      null,
      [feature]);
  }

  startTabGroupTutorial() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec,
      null,
      []);
  }

  triggerFeedback(session_id) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec,
      null,
      [session_id]);
  }

  triggerSignIn() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec,
      null,
      []);
  }

  openHelpPage() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec,
      null,
      []);
  }

  setTabOrganizationModelStrategy(strategy) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec,
      null,
      [strategy]);
  }

  setTabOrganizationUserInstruction(user_instruction) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec,
      null,
      [user_instruction]);
  }

  setUserFeedback(session_id, feedback) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec,
      null,
      [session_id, feedback]);
  }

  notifyOrganizationUIReadyToShow() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec,
      null,
      []);
  }

  notifySearchUIReadyToShow() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec,
      null,
      []);
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

tab_search.mojom.PageHandlerPtr = tab_search.mojom.PageHandlerRemote;
tab_search.mojom.PageHandlerRequest = tab_search.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec, 'tab_search.mojom.Page_TabOrganizationSessionUpdated_Params', [
      mojo.internal.StructField('session', 0, 0, tab_search.mojom.TabOrganizationSessionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec, 'tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_Params', [
      mojo.internal.StructField('strategy', 0, 0, tab_search.mojom.TabOrganizationModelStrategySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_HostWindowChanged_ParamsSpec, 'tab_search.mojom.Page_HostWindowChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabsChanged_ParamsSpec, 'tab_search.mojom.Page_TabsChanged_Params', [
      mojo.internal.StructField('profile_tabs', 0, 0, tab_search.mojom.ProfileDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabUpdated_ParamsSpec, 'tab_search.mojom.Page_TabUpdated_Params', [
      mojo.internal.StructField('tabUpdateInfo', 0, 0, tab_search.mojom.TabUpdateInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabsRemoved_ParamsSpec, 'tab_search.mojom.Page_TabsRemoved_Params', [
      mojo.internal.StructField('tabsRemovedInfo', 0, 0, tab_search.mojom.TabsRemovedInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec, 'tab_search.mojom.Page_TabSearchSectionChanged_Params', [
      mojo.internal.StructField('section', 0, 0, tab_search.mojom.TabSearchSectionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec, 'tab_search.mojom.Page_TabOrganizationFeatureChanged_Params', [
      mojo.internal.StructField('feature', 0, 0, tab_search.mojom.TabOrganizationFeatureSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('tabs', 0, 0, tab_search.mojom.UnusedTabInfoSpec, null, false, 0, undefined),
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
      [session]);
  }

  tabOrganizationModelStrategyUpdated(strategy) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec,
      null,
      [strategy]);
  }

  hostWindowChanged() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_search.mojom.Page_HostWindowChanged_ParamsSpec,
      null,
      []);
  }

  tabsChanged(profile_tabs) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_search.mojom.Page_TabsChanged_ParamsSpec,
      null,
      [profile_tabs]);
  }

  tabUpdated(tabUpdateInfo) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_search.mojom.Page_TabUpdated_ParamsSpec,
      null,
      [tabUpdateInfo]);
  }

  tabsRemoved(tabsRemovedInfo) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_search.mojom.Page_TabsRemoved_ParamsSpec,
      null,
      [tabsRemovedInfo]);
  }

  tabSearchSectionChanged(section) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec,
      null,
      [section]);
  }

  tabOrganizationFeatureChanged(feature) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec,
      null,
      [feature]);
  }

  showFREChanged(show) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_search.mojom.Page_ShowFREChanged_ParamsSpec,
      null,
      [show]);
  }

  tabOrganizationEnabledChanged(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec,
      null,
      [enabled]);
  }

  unusedTabsChanged(tabs) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec,
      null,
      [tabs]);
  }

  tabUnsplit() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      tab_search.mojom.Page_TabUnsplit_ParamsSpec,
      null,
      []);
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

tab_search.mojom.PagePtr = tab_search.mojom.PageRemote;
tab_search.mojom.PageRequest = tab_search.mojom.PagePendingReceiver;

