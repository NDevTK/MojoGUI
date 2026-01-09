// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_search/tab_search.mojom
// Module: tab_search.mojom

'use strict';

// Module namespace
var tab_search = tab_search || {};
tab_search.mojom = tab_search.mojom || {};


// Enum: TabOrganizationState
tab_search.mojom.TabOrganizationState = {
};

// Enum: TabOrganizationFeature
tab_search.mojom.TabOrganizationFeature = {
};

// Enum: TabOrganizationError
tab_search.mojom.TabOrganizationError = {
};

// Enum: TabOrganizationModelStrategy
tab_search.mojom.TabOrganizationModelStrategy = {
};

// Enum: TabSearchSection
tab_search.mojom.TabSearchSection = {
};

// Enum: UserFeedback
tab_search.mojom.UserFeedback = {
};

// Struct: ProfileData
tab_search.mojom.ProfileData = class {
  constructor(values = {}) {
    this.recently_closed_section_expanded = values.recently_closed_section_expanded !== undefined ? values.recently_closed_section_expanded : false;
  }
};

// Struct: Window
tab_search.mojom.Window = class {
  constructor(values = {}) {
    this.tabs = values.tabs !== undefined ? values.tabs : 0;
  }
};

// Struct: Tab
tab_search.mojom.Tab = class {
  constructor(values = {}) {
    this.last_active_elapsed_text = values.last_active_elapsed_text !== undefined ? values.last_active_elapsed_text : 0;
  }
};

// Struct: RecentlyClosedTab
tab_search.mojom.RecentlyClosedTab = class {
  constructor(values = {}) {
    this.last_active_elapsed_text = values.last_active_elapsed_text !== undefined ? values.last_active_elapsed_text : 0;
  }
};

// Struct: TabGroup
tab_search.mojom.TabGroup = class {
  constructor(values = {}) {
    this.title = values.title !== undefined ? values.title : "";
  }
};

// Struct: RecentlyClosedTabGroup
tab_search.mojom.RecentlyClosedTabGroup = class {
  constructor(values = {}) {
    this.last_active_elapsed_text = values.last_active_elapsed_text !== undefined ? values.last_active_elapsed_text : 0;
  }
};

// Struct: SwitchToTabInfo
tab_search.mojom.SwitchToTabInfo = class {
  constructor(values = {}) {
    this.tab_id = values.tab_id !== undefined ? values.tab_id : 0;
  }
};

// Struct: TabOrganization
tab_search.mojom.TabOrganization = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : 0;
  }
};

// Struct: TabOrganizationSession
tab_search.mojom.TabOrganizationSession = class {
  constructor(values = {}) {
    this.active_tab_id = values.active_tab_id !== undefined ? values.active_tab_id : 0;
  }
};

// Struct: TabUpdateInfo
tab_search.mojom.TabUpdateInfo = class {
  constructor(values = {}) {
    this.tab = values.tab !== undefined ? values.tab : false;
  }
};

// Struct: TabsRemovedInfo
tab_search.mojom.TabsRemovedInfo = class {
  constructor(values = {}) {
    this.recently_closed_tabs = values.recently_closed_tabs !== undefined ? values.recently_closed_tabs : 0;
  }
};

// Struct: UnusedTabInfo
tab_search.mojom.UnusedTabInfo = class {
  constructor(values = {}) {
    this.duplicate_tabs = values.duplicate_tabs !== undefined ? values.duplicate_tabs : "";
  }
};

// Interface: PageHandlerFactory
tab_search.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tab_search.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

tab_search.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
tab_search.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tab_search.mojom.PageHandler';
  }

  closeTab(tab_id) {
    // Method: CloseTab
    // Call: CloseTab(tab_id)
  }

  closeWebUiTab() {
    // Method: CloseWebUiTab
    // Call: CloseWebUiTab()
  }

  declutterTabs(tab_ids, urls) {
    // Method: DeclutterTabs
    // Call: DeclutterTabs(tab_ids, urls)
  }

  acceptTabOrganization(session_id, organization_id, tabs) {
    // Method: AcceptTabOrganization
    // Call: AcceptTabOrganization(session_id, organization_id, tabs)
  }

  rejectTabOrganization(session_id, organization_id) {
    // Method: RejectTabOrganization
    // Call: RejectTabOrganization(session_id, organization_id)
  }

  renameTabOrganization(session_id, organization_id, name) {
    // Method: RenameTabOrganization
    // Call: RenameTabOrganization(session_id, organization_id, name)
  }

  excludeFromStaleTabs(tab_id) {
    // Method: ExcludeFromStaleTabs
    // Call: ExcludeFromStaleTabs(tab_id)
  }

  excludeFromDuplicateTabs(url) {
    // Method: ExcludeFromDuplicateTabs
    // Call: ExcludeFromDuplicateTabs(url)
  }

  getProfileData() {
    // Method: GetProfileData
    return new Promise((resolve) => {
      // Call: GetProfileData()
      resolve({});
    });
  }

  getUnusedTabs() {
    // Method: GetUnusedTabs
    return new Promise((resolve) => {
      // Call: GetUnusedTabs()
      resolve({});
    });
  }

  getTabSearchSection() {
    // Method: GetTabSearchSection
    return new Promise((resolve) => {
      // Call: GetTabSearchSection()
      resolve({});
    });
  }

  getTabOrganizationFeature() {
    // Method: GetTabOrganizationFeature
    return new Promise((resolve) => {
      // Call: GetTabOrganizationFeature()
      resolve({});
    });
  }

  getTabOrganizationSession() {
    // Method: GetTabOrganizationSession
    return new Promise((resolve) => {
      // Call: GetTabOrganizationSession()
      resolve({});
    });
  }

  getTabOrganizationModelStrategy() {
    // Method: GetTabOrganizationModelStrategy
    return new Promise((resolve) => {
      // Call: GetTabOrganizationModelStrategy()
      resolve({});
    });
  }

  getIsSplit() {
    // Method: GetIsSplit
    return new Promise((resolve) => {
      // Call: GetIsSplit()
      resolve({});
    });
  }

  switchToTab(switch_to_tab_info) {
    // Method: SwitchToTab
    // Call: SwitchToTab(switch_to_tab_info)
  }

  openRecentlyClosedEntry(session_id) {
    // Method: OpenRecentlyClosedEntry
    // Call: OpenRecentlyClosedEntry(session_id)
  }

  requestTabOrganization() {
    // Method: RequestTabOrganization
    // Call: RequestTabOrganization()
  }

  removeTabFromOrganization(session_id, organization_id, tab) {
    // Method: RemoveTabFromOrganization
    // Call: RemoveTabFromOrganization(session_id, organization_id, tab)
  }

  rejectSession(session_id) {
    // Method: RejectSession
    // Call: RejectSession(session_id)
  }

  replaceActiveSplitTab(replacement_tab_id) {
    // Method: ReplaceActiveSplitTab
    // Call: ReplaceActiveSplitTab(replacement_tab_id)
  }

  restartSession() {
    // Method: RestartSession
    // Call: RestartSession()
  }

  saveRecentlyClosedExpandedPref(expanded) {
    // Method: SaveRecentlyClosedExpandedPref
    // Call: SaveRecentlyClosedExpandedPref(expanded)
  }

  setOrganizationFeature(feature) {
    // Method: SetOrganizationFeature
    // Call: SetOrganizationFeature(feature)
  }

  startTabGroupTutorial() {
    // Method: StartTabGroupTutorial
    // Call: StartTabGroupTutorial()
  }

  triggerFeedback(session_id) {
    // Method: TriggerFeedback
    // Call: TriggerFeedback(session_id)
  }

  triggerSignIn() {
    // Method: TriggerSignIn
    // Call: TriggerSignIn()
  }

  openHelpPage() {
    // Method: OpenHelpPage
    // Call: OpenHelpPage()
  }

  setTabOrganizationModelStrategy(strategy) {
    // Method: SetTabOrganizationModelStrategy
    // Call: SetTabOrganizationModelStrategy(strategy)
  }

  setTabOrganizationUserInstruction(user_instruction) {
    // Method: SetTabOrganizationUserInstruction
    // Call: SetTabOrganizationUserInstruction(user_instruction)
  }

  setUserFeedback(session_id, feedback) {
    // Method: SetUserFeedback
    // Call: SetUserFeedback(session_id, feedback)
  }

  notifyOrganizationUIReadyToShow() {
    // Method: NotifyOrganizationUIReadyToShow
    // Call: NotifyOrganizationUIReadyToShow()
  }

  notifySearchUIReadyToShow() {
    // Method: NotifySearchUIReadyToShow
    // Call: NotifySearchUIReadyToShow()
  }

};

tab_search.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
tab_search.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tab_search.mojom.Page';
  }

  tabOrganizationSessionUpdated(session) {
    // Method: TabOrganizationSessionUpdated
    // Call: TabOrganizationSessionUpdated(session)
  }

  tabOrganizationModelStrategyUpdated(strategy) {
    // Method: TabOrganizationModelStrategyUpdated
    // Call: TabOrganizationModelStrategyUpdated(strategy)
  }

  hostWindowChanged() {
    // Method: HostWindowChanged
    // Call: HostWindowChanged()
  }

  tabsChanged(profile_tabs) {
    // Method: TabsChanged
    // Call: TabsChanged(profile_tabs)
  }

  tabUpdated(tabUpdateInfo) {
    // Method: TabUpdated
    // Call: TabUpdated(tabUpdateInfo)
  }

  tabsRemoved(tabsRemovedInfo) {
    // Method: TabsRemoved
    // Call: TabsRemoved(tabsRemovedInfo)
  }

  tabSearchSectionChanged(section) {
    // Method: TabSearchSectionChanged
    // Call: TabSearchSectionChanged(section)
  }

  tabOrganizationFeatureChanged(feature) {
    // Method: TabOrganizationFeatureChanged
    // Call: TabOrganizationFeatureChanged(feature)
  }

  showFREChanged(show) {
    // Method: ShowFREChanged
    // Call: ShowFREChanged(show)
  }

  tabOrganizationEnabledChanged(enabled) {
    // Method: TabOrganizationEnabledChanged
    // Call: TabOrganizationEnabledChanged(enabled)
  }

  unusedTabsChanged(tabs) {
    // Method: UnusedTabsChanged
    // Call: UnusedTabsChanged(tabs)
  }

  tabUnsplit() {
    // Method: TabUnsplit
    // Call: TabUnsplit()
  }

};

tab_search.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
