// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_search/tab_search.mojom
// Module: tab_search.mojom

'use strict';

// Module namespace
var tab_search = tab_search || {};
tab_search.mojom = tab_search.mojom || {};
var url = url || {};
var ui = ui || {};


// Enum: TabOrganizationState
tab_search.mojom.mojom.TabOrganizationState = {
  kInitializing: 0,
  kNotStarted: 1,
  kInProgress: 2,
  kSuccess: 3,
  kFailure: 4,
};
tab_search.mojom.mojom.TabOrganizationStateSpec = { $: mojo.internal.Enum() };

// Enum: TabOrganizationFeature
tab_search.mojom.mojom.TabOrganizationFeature = {
  kSelector: 0,
  kAutoTabGroups: 1,
  kDeclutter: 2,
};
tab_search.mojom.mojom.TabOrganizationFeatureSpec = { $: mojo.internal.Enum() };

// Enum: TabOrganizationError
tab_search.mojom.mojom.TabOrganizationError = {
  kNone: 0,
  kGrouping: 1,
  kGeneric: 2,
};
tab_search.mojom.mojom.TabOrganizationErrorSpec = { $: mojo.internal.Enum() };

// Enum: TabOrganizationModelStrategy
tab_search.mojom.mojom.TabOrganizationModelStrategy = {
  kTopic: 0,
  kTask: 1,
  kDomain: 2,
};
tab_search.mojom.mojom.TabOrganizationModelStrategySpec = { $: mojo.internal.Enum() };

// Enum: TabSearchSection
tab_search.mojom.mojom.TabSearchSection = {
  kSearch: 0,
  kOrganize: 1,
};
tab_search.mojom.mojom.TabSearchSectionSpec = { $: mojo.internal.Enum() };

// Enum: UserFeedback
tab_search.mojom.mojom.UserFeedback = {
  kUserFeedBackUnspecified: 0,
  kUserFeedBackPositive: 1,
  kUserFeedBackNegative: 2,
};
tab_search.mojom.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };

// Struct: ProfileData
tab_search.mojom.mojom.ProfileDataSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.ProfileData',
      packedSize: 48,
      fields: [
        { name: 'windows', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tab_search.mojom.WindowSpec, false), nullable: false, minVersion: 0 },
        { name: 'tab_groups', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(tab_search.mojom.TabGroupSpec, false), nullable: false, minVersion: 0 },
        { name: 'recently_closed_tabs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(tab_search.mojom.RecentlyClosedTabSpec, false), nullable: false, minVersion: 0 },
        { name: 'recently_closed_tab_groups', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(tab_search.mojom.RecentlyClosedTabGroupSpec, false), nullable: false, minVersion: 0 },
        { name: 'recently_closed_section_expanded', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: Window
tab_search.mojom.mojom.WindowSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Window',
      packedSize: 24,
      fields: [
        { name: 'active', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_host_window', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tab_search.mojom.TabSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Tab
tab_search.mojom.mojom.TabSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Tab',
      packedSize: 80,
      fields: [
        { name: 'active', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'visible', packedOffset: 64, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'alert_states', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tabs.mojom.TabAlertStateSpec, false), nullable: false, minVersion: 0 },
        { name: 'index', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'tab_id', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: true, minVersion: 0 },
        { name: 'pinned', packedOffset: 64, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'split', packedOffset: 64, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'favicon_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'is_default_favicon', packedOffset: 64, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_icon', packedOffset: 64, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'last_active_time_ticks', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'last_active_elapsed_text', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: RecentlyClosedTab
tab_search.mojom.mojom.RecentlyClosedTabSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.RecentlyClosedTab',
      packedSize: 56,
      fields: [
        { name: 'tab_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: true, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'last_active_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'last_active_elapsed_text', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: TabGroup
tab_search.mojom.mojom.TabGroupSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.TabGroup',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 16, packedBitOffset: 0, type: tab_groups.mojom.ColorSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: RecentlyClosedTabGroup
tab_search.mojom.mojom.RecentlyClosedTabGroupSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.RecentlyClosedTabGroup',
      packedSize: 56,
      fields: [
        { name: 'session_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 36, packedBitOffset: 0, type: tab_groups.mojom.ColorSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'tab_count', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'last_active_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'last_active_elapsed_text', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: SwitchToTabInfo
tab_search.mojom.mojom.SwitchToTabInfoSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.SwitchToTabInfo',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TabOrganization
tab_search.mojom.mojom.TabOrganizationSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.TabOrganization',
      packedSize: 32,
      fields: [
        { name: 'organization_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tab_search.mojom.TabSpec, false), nullable: false, minVersion: 0 },
        { name: 'first_new_tab_index', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TabOrganizationSession
tab_search.mojom.mojom.TabOrganizationSessionSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.TabOrganizationSession',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 12, packedBitOffset: 0, type: tab_search.mojom.TabOrganizationStateSpec, nullable: false, minVersion: 0 },
        { name: 'organizations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tab_search.mojom.TabOrganizationSpec, false), nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: tab_search.mojom.TabOrganizationErrorSpec, nullable: false, minVersion: 0 },
        { name: 'active_tab_id', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TabUpdateInfo
tab_search.mojom.mojom.TabUpdateInfoSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.TabUpdateInfo',
      packedSize: 24,
      fields: [
        { name: 'in_active_window', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'in_host_window', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tab', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TabsRemovedInfo
tab_search.mojom.mojom.TabsRemovedInfoSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.TabsRemovedInfo',
      packedSize: 24,
      fields: [
        { name: 'tab_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'recently_closed_tabs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(tab_search.mojom.RecentlyClosedTabSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: UnusedTabInfo
tab_search.mojom.mojom.UnusedTabInfoSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.UnusedTabInfo',
      packedSize: 24,
      fields: [
        { name: 'stale_tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tab_search.mojom.TabSpec, false), nullable: false, minVersion: 0 },
        { name: 'duplicate_tabs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Array(tab_search.mojom.TabSpec, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: PageHandlerFactory
tab_search.mojom.mojom.PageHandlerFactory = {};

tab_search.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_search.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'tab_search.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_search.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new tab_search.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_search.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_search.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

tab_search.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new tab_search.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_search.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
tab_search.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(tab_search.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(tab_search.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
tab_search.mojom.mojom.PageHandlerFactoryPtr = tab_search.mojom.mojom.PageHandlerFactoryRemote;
tab_search.mojom.mojom.PageHandlerFactoryRequest = tab_search.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
tab_search.mojom.mojom.PageHandler = {};

tab_search.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_search.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'tab_search.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_search.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new tab_search.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_search.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  closeTab(tab_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_search.mojom.mojom.PageHandler_CloseTab_ParamsSpec,
      null,
      [tab_id]);
  }

  closeWebUiTab() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_search.mojom.mojom.PageHandler_CloseWebUiTab_ParamsSpec,
      null,
      []);
  }

  declutterTabs(tab_ids, urls) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_search.mojom.mojom.PageHandler_DeclutterTabs_ParamsSpec,
      null,
      [tab_ids, urls]);
  }

  acceptTabOrganization(session_id, organization_id, tabs) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_search.mojom.mojom.PageHandler_AcceptTabOrganization_ParamsSpec,
      null,
      [session_id, organization_id, tabs]);
  }

  rejectTabOrganization(session_id, organization_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_search.mojom.mojom.PageHandler_RejectTabOrganization_ParamsSpec,
      null,
      [session_id, organization_id]);
  }

  renameTabOrganization(session_id, organization_id, name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_search.mojom.mojom.PageHandler_RenameTabOrganization_ParamsSpec,
      null,
      [session_id, organization_id, name]);
  }

  excludeFromStaleTabs(tab_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_search.mojom.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec,
      null,
      [tab_id]);
  }

  excludeFromDuplicateTabs(url) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_search.mojom.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec,
      null,
      [url]);
  }

  getProfileData() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_search.mojom.mojom.PageHandler_GetProfileData_ParamsSpec,
      tab_search.mojom.mojom.PageHandler_GetProfileData_ResponseParamsSpec,
      []);
  }

  getUnusedTabs() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_search.mojom.mojom.PageHandler_GetUnusedTabs_ParamsSpec,
      tab_search.mojom.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec,
      []);
  }

  getTabSearchSection() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_search.mojom.mojom.PageHandler_GetTabSearchSection_ParamsSpec,
      tab_search.mojom.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec,
      []);
  }

  getTabOrganizationFeature() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      tab_search.mojom.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec,
      tab_search.mojom.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec,
      []);
  }

  getTabOrganizationSession() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      tab_search.mojom.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec,
      tab_search.mojom.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec,
      []);
  }

  getTabOrganizationModelStrategy() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      tab_search.mojom.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec,
      tab_search.mojom.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec,
      []);
  }

  getIsSplit() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      tab_search.mojom.mojom.PageHandler_GetIsSplit_ParamsSpec,
      tab_search.mojom.mojom.PageHandler_GetIsSplit_ResponseParamsSpec,
      []);
  }

  switchToTab(switch_to_tab_info) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      tab_search.mojom.mojom.PageHandler_SwitchToTab_ParamsSpec,
      null,
      [switch_to_tab_info]);
  }

  openRecentlyClosedEntry(session_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      tab_search.mojom.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec,
      null,
      [session_id]);
  }

  requestTabOrganization() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      tab_search.mojom.mojom.PageHandler_RequestTabOrganization_ParamsSpec,
      null,
      []);
  }

  removeTabFromOrganization(session_id, organization_id, tab) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      tab_search.mojom.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec,
      null,
      [session_id, organization_id, tab]);
  }

  rejectSession(session_id) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      tab_search.mojom.mojom.PageHandler_RejectSession_ParamsSpec,
      null,
      [session_id]);
  }

  replaceActiveSplitTab(replacement_tab_id) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      tab_search.mojom.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec,
      null,
      [replacement_tab_id]);
  }

  restartSession() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      tab_search.mojom.mojom.PageHandler_RestartSession_ParamsSpec,
      null,
      []);
  }

  saveRecentlyClosedExpandedPref(expanded) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      tab_search.mojom.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec,
      null,
      [expanded]);
  }

  setOrganizationFeature(feature) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      tab_search.mojom.mojom.PageHandler_SetOrganizationFeature_ParamsSpec,
      null,
      [feature]);
  }

  startTabGroupTutorial() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      tab_search.mojom.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec,
      null,
      []);
  }

  triggerFeedback(session_id) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      tab_search.mojom.mojom.PageHandler_TriggerFeedback_ParamsSpec,
      null,
      [session_id]);
  }

  triggerSignIn() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      tab_search.mojom.mojom.PageHandler_TriggerSignIn_ParamsSpec,
      null,
      []);
  }

  openHelpPage() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      tab_search.mojom.mojom.PageHandler_OpenHelpPage_ParamsSpec,
      null,
      []);
  }

  setTabOrganizationModelStrategy(strategy) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      tab_search.mojom.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec,
      null,
      [strategy]);
  }

  setTabOrganizationUserInstruction(user_instruction) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      tab_search.mojom.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec,
      null,
      [user_instruction]);
  }

  setUserFeedback(session_id, feedback) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      tab_search.mojom.mojom.PageHandler_SetUserFeedback_ParamsSpec,
      null,
      [session_id, feedback]);
  }

  notifyOrganizationUIReadyToShow() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      tab_search.mojom.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec,
      null,
      []);
  }

  notifySearchUIReadyToShow() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      tab_search.mojom.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec,
      null,
      []);
  }

};

tab_search.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new tab_search.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_search.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for CloseTab
tab_search.mojom.mojom.PageHandler_CloseTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.CloseTab_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseWebUiTab
tab_search.mojom.mojom.PageHandler_CloseWebUiTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.CloseWebUiTab_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DeclutterTabs
tab_search.mojom.mojom.PageHandler_DeclutterTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.DeclutterTabs_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AcceptTabOrganization
tab_search.mojom.mojom.PageHandler_AcceptTabOrganization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.AcceptTabOrganization_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'organization_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(tab_search.mojom.TabSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RejectTabOrganization
tab_search.mojom.mojom.PageHandler_RejectTabOrganization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.RejectTabOrganization_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'organization_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RenameTabOrganization
tab_search.mojom.mojom.PageHandler_RenameTabOrganization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.RenameTabOrganization_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'organization_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExcludeFromStaleTabs
tab_search.mojom.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.ExcludeFromStaleTabs_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExcludeFromDuplicateTabs
tab_search.mojom.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.ExcludeFromDuplicateTabs_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetProfileData
tab_search.mojom.mojom.PageHandler_GetProfileData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetProfileData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tab_search.mojom.mojom.PageHandler_GetProfileData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetProfileData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'profile_data', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.ProfileDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUnusedTabs
tab_search.mojom.mojom.PageHandler_GetUnusedTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetUnusedTabs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tab_search.mojom.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetUnusedTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.UnusedTabInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetTabSearchSection
tab_search.mojom.mojom.PageHandler_GetTabSearchSection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabSearchSection_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tab_search.mojom.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabSearchSection_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'section', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabSearchSectionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetTabOrganizationFeature
tab_search.mojom.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabOrganizationFeature_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tab_search.mojom.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabOrganizationFeature_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabOrganizationFeatureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetTabOrganizationSession
tab_search.mojom.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabOrganizationSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tab_search.mojom.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabOrganizationSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabOrganizationSessionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetTabOrganizationModelStrategy
tab_search.mojom.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabOrganizationModelStrategy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tab_search.mojom.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabOrganizationModelStrategy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'strategy', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabOrganizationModelStrategySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetIsSplit
tab_search.mojom.mojom.PageHandler_GetIsSplit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetIsSplit_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

tab_search.mojom.mojom.PageHandler_GetIsSplit_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetIsSplit_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_split', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SwitchToTab
tab_search.mojom.mojom.PageHandler_SwitchToTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.SwitchToTab_Params',
      packedSize: 16,
      fields: [
        { name: 'switch_to_tab_info', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.SwitchToTabInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenRecentlyClosedEntry
tab_search.mojom.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.OpenRecentlyClosedEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestTabOrganization
tab_search.mojom.mojom.PageHandler_RequestTabOrganization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.RequestTabOrganization_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RemoveTabFromOrganization
tab_search.mojom.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.RemoveTabFromOrganization_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'organization_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'tab', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RejectSession
tab_search.mojom.mojom.PageHandler_RejectSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.RejectSession_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReplaceActiveSplitTab
tab_search.mojom.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.ReplaceActiveSplitTab_Params',
      packedSize: 16,
      fields: [
        { name: 'replacement_tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RestartSession
tab_search.mojom.mojom.PageHandler_RestartSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.RestartSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SaveRecentlyClosedExpandedPref
tab_search.mojom.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.SaveRecentlyClosedExpandedPref_Params',
      packedSize: 16,
      fields: [
        { name: 'expanded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOrganizationFeature
tab_search.mojom.mojom.PageHandler_SetOrganizationFeature_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.SetOrganizationFeature_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabOrganizationFeatureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartTabGroupTutorial
tab_search.mojom.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.StartTabGroupTutorial_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for TriggerFeedback
tab_search.mojom.mojom.PageHandler_TriggerFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.TriggerFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TriggerSignIn
tab_search.mojom.mojom.PageHandler_TriggerSignIn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.TriggerSignIn_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenHelpPage
tab_search.mojom.mojom.PageHandler_OpenHelpPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.OpenHelpPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetTabOrganizationModelStrategy
tab_search.mojom.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.SetTabOrganizationModelStrategy_Params',
      packedSize: 16,
      fields: [
        { name: 'strategy', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabOrganizationModelStrategySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTabOrganizationUserInstruction
tab_search.mojom.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.SetTabOrganizationUserInstruction_Params',
      packedSize: 16,
      fields: [
        { name: 'user_instruction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUserFeedback
tab_search.mojom.mojom.PageHandler_SetUserFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.SetUserFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'feedback', packedOffset: 4, packedBitOffset: 0, type: tab_search.mojom.UserFeedbackSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyOrganizationUIReadyToShow
tab_search.mojom.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.NotifyOrganizationUIReadyToShow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NotifySearchUIReadyToShow
tab_search.mojom.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.NotifySearchUIReadyToShow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
tab_search.mojom.mojom.PageHandlerPtr = tab_search.mojom.mojom.PageHandlerRemote;
tab_search.mojom.mojom.PageHandlerRequest = tab_search.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
tab_search.mojom.mojom.Page = {};

tab_search.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_search.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'tab_search.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_search.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new tab_search.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_search.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  tabOrganizationSessionUpdated(session) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_search.mojom.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec,
      null,
      [session]);
  }

  tabOrganizationModelStrategyUpdated(strategy) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_search.mojom.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec,
      null,
      [strategy]);
  }

  hostWindowChanged() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_search.mojom.mojom.Page_HostWindowChanged_ParamsSpec,
      null,
      []);
  }

  tabsChanged(profile_tabs) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_search.mojom.mojom.Page_TabsChanged_ParamsSpec,
      null,
      [profile_tabs]);
  }

  tabUpdated(tabUpdateInfo) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_search.mojom.mojom.Page_TabUpdated_ParamsSpec,
      null,
      [tabUpdateInfo]);
  }

  tabsRemoved(tabsRemovedInfo) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_search.mojom.mojom.Page_TabsRemoved_ParamsSpec,
      null,
      [tabsRemovedInfo]);
  }

  tabSearchSectionChanged(section) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_search.mojom.mojom.Page_TabSearchSectionChanged_ParamsSpec,
      null,
      [section]);
  }

  tabOrganizationFeatureChanged(feature) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_search.mojom.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec,
      null,
      [feature]);
  }

  showFREChanged(show) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_search.mojom.mojom.Page_ShowFREChanged_ParamsSpec,
      null,
      [show]);
  }

  tabOrganizationEnabledChanged(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_search.mojom.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec,
      null,
      [enabled]);
  }

  unusedTabsChanged(tabs) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_search.mojom.mojom.Page_UnusedTabsChanged_ParamsSpec,
      null,
      [tabs]);
  }

  tabUnsplit() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      tab_search.mojom.mojom.Page_TabUnsplit_ParamsSpec,
      null,
      []);
  }

};

tab_search.mojom.mojom.Page.getRemote = function() {
  let remote = new tab_search.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_search.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for TabOrganizationSessionUpdated
tab_search.mojom.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabOrganizationSessionUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabOrganizationSessionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TabOrganizationModelStrategyUpdated
tab_search.mojom.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabOrganizationModelStrategyUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'strategy', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabOrganizationModelStrategySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HostWindowChanged
tab_search.mojom.mojom.Page_HostWindowChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.HostWindowChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for TabsChanged
tab_search.mojom.mojom.Page_TabsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'profile_tabs', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.ProfileDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TabUpdated
tab_search.mojom.mojom.Page_TabUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'tabUpdateInfo', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabUpdateInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TabsRemoved
tab_search.mojom.mojom.Page_TabsRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabsRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'tabsRemovedInfo', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabsRemovedInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TabSearchSectionChanged
tab_search.mojom.mojom.Page_TabSearchSectionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabSearchSectionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'section', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabSearchSectionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TabOrganizationFeatureChanged
tab_search.mojom.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabOrganizationFeatureChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.TabOrganizationFeatureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowFREChanged
tab_search.mojom.mojom.Page_ShowFREChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.ShowFREChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'show', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TabOrganizationEnabledChanged
tab_search.mojom.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabOrganizationEnabledChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnusedTabsChanged
tab_search.mojom.mojom.Page_UnusedTabsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.UnusedTabsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: tab_search.mojom.UnusedTabInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TabUnsplit
tab_search.mojom.mojom.Page_TabUnsplit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabUnsplit_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
tab_search.mojom.mojom.PagePtr = tab_search.mojom.mojom.PageRemote;
tab_search.mojom.mojom.PageRequest = tab_search.mojom.mojom.PagePendingReceiver;

