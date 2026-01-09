// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_search/tab_search.mojom
// Module: tab_search.mojom

'use strict';

// Module namespace
var tab_search = tab_search || {};
tab_search.mojom = tab_search.mojom || {};


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
  kSelector: 0,
  kAutoTabGroups: 1,
  kDeclutter: 2,
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
  kSearch: 0,
  kOrganize: 1,
};

// Enum: UserFeedback
tab_search.mojom.UserFeedback = {
  kUserFeedBackUnspecified: 0,
  kUserFeedBackPositive: 1,
  kUserFeedBackNegative: 2,
};

// Interface: PageHandlerFactory
tab_search.mojom.PageHandlerFactory = {};

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
      tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$,
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

// ParamsSpec for CreatePageHandler
tab_search.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
tab_search.mojom.PageHandlerFactoryPtr = tab_search.mojom.PageHandlerFactoryRemote;
tab_search.mojom.PageHandlerFactoryRequest = tab_search.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
tab_search.mojom.PageHandler = {};

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
      tab_search.mojom.PageHandler_CloseTab_ParamsSpec.$,
      null,
      [tab_id]);
  }

  closeWebUiTab() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec.$,
      null,
      []);
  }

  declutterTabs(tab_ids, urls) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec.$,
      null,
      [tab_ids, urls]);
  }

  acceptTabOrganization(session_id, organization_id, tabs) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec.$,
      null,
      [session_id, organization_id, tabs]);
  }

  rejectTabOrganization(session_id, organization_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec.$,
      null,
      [session_id, organization_id]);
  }

  renameTabOrganization(session_id, organization_id, name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec.$,
      null,
      [session_id, organization_id, name]);
  }

  excludeFromStaleTabs(tab_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec.$,
      null,
      [tab_id]);
  }

  excludeFromDuplicateTabs(url) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec.$,
      null,
      [url]);
  }

  getProfileData() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_search.mojom.PageHandler_GetProfileData_ParamsSpec.$,
      tab_search.mojom.PageHandler_GetProfileData_ResponseParamsSpec.$,
      []);
  }

  getUnusedTabs() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec.$,
      tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec.$,
      []);
  }

  getTabSearchSection() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec.$,
      tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec.$,
      []);
  }

  getTabOrganizationFeature() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec.$,
      tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec.$,
      []);
  }

  getTabOrganizationSession() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec.$,
      tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec.$,
      []);
  }

  getTabOrganizationModelStrategy() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec.$,
      tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec.$,
      []);
  }

  getIsSplit() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec.$,
      tab_search.mojom.PageHandler_GetIsSplit_ResponseParamsSpec.$,
      []);
  }

  switchToTab(switch_to_tab_info) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec.$,
      null,
      [switch_to_tab_info]);
  }

  openRecentlyClosedEntry(session_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec.$,
      null,
      [session_id]);
  }

  requestTabOrganization() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec.$,
      null,
      []);
  }

  removeTabFromOrganization(session_id, organization_id, tab) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec.$,
      null,
      [session_id, organization_id, tab]);
  }

  rejectSession(session_id) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      tab_search.mojom.PageHandler_RejectSession_ParamsSpec.$,
      null,
      [session_id]);
  }

  replaceActiveSplitTab(replacement_tab_id) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec.$,
      null,
      [replacement_tab_id]);
  }

  restartSession() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      tab_search.mojom.PageHandler_RestartSession_ParamsSpec.$,
      null,
      []);
  }

  saveRecentlyClosedExpandedPref(expanded) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec.$,
      null,
      [expanded]);
  }

  setOrganizationFeature(feature) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec.$,
      null,
      [feature]);
  }

  startTabGroupTutorial() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec.$,
      null,
      []);
  }

  triggerFeedback(session_id) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec.$,
      null,
      [session_id]);
  }

  triggerSignIn() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec.$,
      null,
      []);
  }

  openHelpPage() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec.$,
      null,
      []);
  }

  setTabOrganizationModelStrategy(strategy) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec.$,
      null,
      [strategy]);
  }

  setTabOrganizationUserInstruction(user_instruction) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec.$,
      null,
      [user_instruction]);
  }

  setUserFeedback(session_id, feedback) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec.$,
      null,
      [session_id, feedback]);
  }

  notifyOrganizationUIReadyToShow() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec.$,
      null,
      []);
  }

  notifySearchUIReadyToShow() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec.$,
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

// ParamsSpec for CloseTab
tab_search.mojom.PageHandler_CloseTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.CloseTab_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseWebUiTab
tab_search.mojom.PageHandler_CloseWebUiTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.CloseWebUiTab_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeclutterTabs
tab_search.mojom.PageHandler_DeclutterTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.DeclutterTabs_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AcceptTabOrganization
tab_search.mojom.PageHandler_AcceptTabOrganization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.AcceptTabOrganization_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'organization_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'tabs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RejectTabOrganization
tab_search.mojom.PageHandler_RejectTabOrganization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.RejectTabOrganization_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'organization_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RenameTabOrganization
tab_search.mojom.PageHandler_RenameTabOrganization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.RenameTabOrganization_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'organization_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExcludeFromStaleTabs
tab_search.mojom.PageHandler_ExcludeFromStaleTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.ExcludeFromStaleTabs_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExcludeFromDuplicateTabs
tab_search.mojom.PageHandler_ExcludeFromDuplicateTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.ExcludeFromDuplicateTabs_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetProfileData
tab_search.mojom.PageHandler_GetProfileData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetProfileData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

tab_search.mojom.PageHandler_GetProfileData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetProfileData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'profile_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUnusedTabs
tab_search.mojom.PageHandler_GetUnusedTabs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetUnusedTabs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

tab_search.mojom.PageHandler_GetUnusedTabs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetUnusedTabs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetTabSearchSection
tab_search.mojom.PageHandler_GetTabSearchSection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabSearchSection_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

tab_search.mojom.PageHandler_GetTabSearchSection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabSearchSection_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'section', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetTabOrganizationFeature
tab_search.mojom.PageHandler_GetTabOrganizationFeature_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabOrganizationFeature_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

tab_search.mojom.PageHandler_GetTabOrganizationFeature_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabOrganizationFeature_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetTabOrganizationSession
tab_search.mojom.PageHandler_GetTabOrganizationSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabOrganizationSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

tab_search.mojom.PageHandler_GetTabOrganizationSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabOrganizationSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetTabOrganizationModelStrategy
tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabOrganizationModelStrategy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

tab_search.mojom.PageHandler_GetTabOrganizationModelStrategy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetTabOrganizationModelStrategy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'strategy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetIsSplit
tab_search.mojom.PageHandler_GetIsSplit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetIsSplit_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

tab_search.mojom.PageHandler_GetIsSplit_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.GetIsSplit_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_split', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SwitchToTab
tab_search.mojom.PageHandler_SwitchToTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.SwitchToTab_Params',
      packedSize: 16,
      fields: [
        { name: 'switch_to_tab_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenRecentlyClosedEntry
tab_search.mojom.PageHandler_OpenRecentlyClosedEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.OpenRecentlyClosedEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestTabOrganization
tab_search.mojom.PageHandler_RequestTabOrganization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.RequestTabOrganization_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveTabFromOrganization
tab_search.mojom.PageHandler_RemoveTabFromOrganization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.RemoveTabFromOrganization_Params',
      packedSize: 32,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'organization_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'tab', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RejectSession
tab_search.mojom.PageHandler_RejectSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.RejectSession_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReplaceActiveSplitTab
tab_search.mojom.PageHandler_ReplaceActiveSplitTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.ReplaceActiveSplitTab_Params',
      packedSize: 16,
      fields: [
        { name: 'replacement_tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RestartSession
tab_search.mojom.PageHandler_RestartSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.RestartSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SaveRecentlyClosedExpandedPref
tab_search.mojom.PageHandler_SaveRecentlyClosedExpandedPref_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.SaveRecentlyClosedExpandedPref_Params',
      packedSize: 16,
      fields: [
        { name: 'expanded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetOrganizationFeature
tab_search.mojom.PageHandler_SetOrganizationFeature_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.SetOrganizationFeature_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartTabGroupTutorial
tab_search.mojom.PageHandler_StartTabGroupTutorial_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.StartTabGroupTutorial_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TriggerFeedback
tab_search.mojom.PageHandler_TriggerFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.TriggerFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TriggerSignIn
tab_search.mojom.PageHandler_TriggerSignIn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.TriggerSignIn_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenHelpPage
tab_search.mojom.PageHandler_OpenHelpPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.OpenHelpPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTabOrganizationModelStrategy
tab_search.mojom.PageHandler_SetTabOrganizationModelStrategy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.SetTabOrganizationModelStrategy_Params',
      packedSize: 16,
      fields: [
        { name: 'strategy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTabOrganizationUserInstruction
tab_search.mojom.PageHandler_SetTabOrganizationUserInstruction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.SetTabOrganizationUserInstruction_Params',
      packedSize: 16,
      fields: [
        { name: 'user_instruction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetUserFeedback
tab_search.mojom.PageHandler_SetUserFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.SetUserFeedback_Params',
      packedSize: 24,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'feedback', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyOrganizationUIReadyToShow
tab_search.mojom.PageHandler_NotifyOrganizationUIReadyToShow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.NotifyOrganizationUIReadyToShow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifySearchUIReadyToShow
tab_search.mojom.PageHandler_NotifySearchUIReadyToShow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.PageHandler.NotifySearchUIReadyToShow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
tab_search.mojom.PageHandlerPtr = tab_search.mojom.PageHandlerRemote;
tab_search.mojom.PageHandlerRequest = tab_search.mojom.PageHandlerPendingReceiver;


// Interface: Page
tab_search.mojom.Page = {};

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
      tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec.$,
      null,
      [session]);
  }

  tabOrganizationModelStrategyUpdated(strategy) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec.$,
      null,
      [strategy]);
  }

  hostWindowChanged() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      tab_search.mojom.Page_HostWindowChanged_ParamsSpec.$,
      null,
      []);
  }

  tabsChanged(profile_tabs) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      tab_search.mojom.Page_TabsChanged_ParamsSpec.$,
      null,
      [profile_tabs]);
  }

  tabUpdated(tabUpdateInfo) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      tab_search.mojom.Page_TabUpdated_ParamsSpec.$,
      null,
      [tabUpdateInfo]);
  }

  tabsRemoved(tabsRemovedInfo) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      tab_search.mojom.Page_TabsRemoved_ParamsSpec.$,
      null,
      [tabsRemovedInfo]);
  }

  tabSearchSectionChanged(section) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec.$,
      null,
      [section]);
  }

  tabOrganizationFeatureChanged(feature) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec.$,
      null,
      [feature]);
  }

  showFREChanged(show) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      tab_search.mojom.Page_ShowFREChanged_ParamsSpec.$,
      null,
      [show]);
  }

  tabOrganizationEnabledChanged(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec.$,
      null,
      [enabled]);
  }

  unusedTabsChanged(tabs) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec.$,
      null,
      [tabs]);
  }

  tabUnsplit() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      tab_search.mojom.Page_TabUnsplit_ParamsSpec.$,
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

// ParamsSpec for TabOrganizationSessionUpdated
tab_search.mojom.Page_TabOrganizationSessionUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabOrganizationSessionUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TabOrganizationModelStrategyUpdated
tab_search.mojom.Page_TabOrganizationModelStrategyUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabOrganizationModelStrategyUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'strategy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HostWindowChanged
tab_search.mojom.Page_HostWindowChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.HostWindowChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TabsChanged
tab_search.mojom.Page_TabsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'profile_tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TabUpdated
tab_search.mojom.Page_TabUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'tabUpdateInfo', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TabsRemoved
tab_search.mojom.Page_TabsRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabsRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'tabsRemovedInfo', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TabSearchSectionChanged
tab_search.mojom.Page_TabSearchSectionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabSearchSectionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'section', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TabOrganizationFeatureChanged
tab_search.mojom.Page_TabOrganizationFeatureChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabOrganizationFeatureChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowFREChanged
tab_search.mojom.Page_ShowFREChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.ShowFREChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'show', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TabOrganizationEnabledChanged
tab_search.mojom.Page_TabOrganizationEnabledChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabOrganizationEnabledChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UnusedTabsChanged
tab_search.mojom.Page_UnusedTabsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.UnusedTabsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TabUnsplit
tab_search.mojom.Page_TabUnsplit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_search.mojom.Page.TabUnsplit_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
tab_search.mojom.PagePtr = tab_search.mojom.PageRemote;
tab_search.mojom.PageRequest = tab_search.mojom.PagePendingReceiver;

