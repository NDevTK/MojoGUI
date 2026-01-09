// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/contextual_tasks/contextual_tasks.mojom
// Module: contextual_tasks.mojom

'use strict';

// Module namespace
var contextual_tasks = contextual_tasks || {};
contextual_tasks.mojom = contextual_tasks.mojom || {};


// Struct: Tab
contextual_tasks.mojom.Tab = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : 0;
  }
};

// Interface: PageHandler
contextual_tasks.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'contextual_tasks.mojom.PageHandler';
  }

  thread(mode) {
    // Method: thread
    // Call: thread(mode)
  }

  getThreadUrl() {
    // Method: GetThreadUrl
    return new Promise((resolve) => {
      // Call: GetThreadUrl()
      resolve({});
    });
  }

  getUrlForTask(uuid) {
    // Method: GetUrlForTask
    return new Promise((resolve) => {
      // Call: GetUrlForTask(uuid)
      resolve({});
    });
  }

  setTaskId(uuid) {
    // Method: SetTaskId
    // Call: SetTaskId(uuid)
  }

  isZeroState(url) {
    // Method: IsZeroState
    return new Promise((resolve) => {
      // Call: IsZeroState(url)
      resolve({});
    });
  }

  setThreadTitle(title) {
    // Method: SetThreadTitle
    // Call: SetThreadTitle(title)
  }

  closeSidePanel() {
    // Method: CloseSidePanel
    // Call: CloseSidePanel()
  }

  showThreadHistory() {
    // Method: ShowThreadHistory
    // Call: ShowThreadHistory()
  }

  isShownInTab() {
    // Method: IsShownInTab
    return new Promise((resolve) => {
      // Call: IsShownInTab()
      resolve({});
    });
  }

  openMyActivityUi() {
    // Method: OpenMyActivityUi
    // Call: OpenMyActivityUi()
  }

  openHelpUi() {
    // Method: OpenHelpUi
    // Call: OpenHelpUi()
  }

  openOnboardingHelpUi() {
    // Method: OpenOnboardingHelpUi
    // Call: OpenOnboardingHelpUi()
  }

  moveTaskUiToNewTab() {
    // Method: MoveTaskUiToNewTab
    // Call: MoveTaskUiToNewTab()
  }

  onTabClickedFromSourcesMenu(tab_id, url) {
    // Method: OnTabClickedFromSourcesMenu
    // Call: OnTabClickedFromSourcesMenu(tab_id, url)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  onWebviewMessage(message) {
    // Method: OnWebviewMessage
    // Call: OnWebviewMessage(message)
  }

  getCommonSearchParams(is_dark_mode, is_side_panel) {
    // Method: GetCommonSearchParams
    return new Promise((resolve) => {
      // Call: GetCommonSearchParams(is_dark_mode, is_side_panel)
      resolve({});
    });
  }

  onboardingTooltipDismissed() {
    // Method: OnboardingTooltipDismissed
    // Call: OnboardingTooltipDismissed()
  }

};

contextual_tasks.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
contextual_tasks.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'contextual_tasks.mojom.Page';
  }

  setThreadTitle(title) {
    // Method: SetThreadTitle
    // Call: SetThreadTitle(title)
  }

  details(ID, ID, ID) {
    // Method: details
    // Call: details(ID, ID, ID)
  }

  setTaskDetails(uuid, thread_id, turn_id) {
    // Method: SetTaskDetails
    // Call: SetTaskDetails(uuid, thread_id, turn_id)
  }

  onSidePanelStateChanged() {
    // Method: OnSidePanelStateChanged
    // Call: OnSidePanelStateChanged()
  }

  process() {
    // Method: process
    // Call: process()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  postMessageToWebview(message) {
    // Method: PostMessageToWebview
    // Call: PostMessageToWebview(message)
  }

  process() {
    // Method: process
    // Call: process()
  }

  onHandshakeComplete() {
    // Method: OnHandshakeComplete
    // Call: OnHandshakeComplete()
  }

  setOAuthToken(oauth_token) {
    // Method: SetOAuthToken
    // Call: SetOAuthToken(oauth_token)
  }

  process() {
    // Method: process
    // Call: process()
  }

  updated(added/removed) {
    // Method: updated
    // Call: updated(added/removed)
  }

  onContextUpdated(context_tabs) {
    // Method: OnContextUpdated
    // Call: OnContextUpdated(context_tabs)
  }

  process() {
    // Method: process
    // Call: process()
  }

  hideInput() {
    // Method: HideInput
    // Call: HideInput()
  }

  process() {
    // Method: process
    // Call: process()
  }

  restoreInput() {
    // Method: RestoreInput
    // Call: RestoreInput()
  }

  onZeroStateChange(is_zero_state) {
    // Method: OnZeroStateChange
    // Call: OnZeroStateChange(is_zero_state)
  }

  process() {
    // Method: process
    // Call: process()
  }

  onAiPageStatusChanged(is_ai_page) {
    // Method: OnAiPageStatusChanged
    // Call: OnAiPageStatusChanged(is_ai_page)
  }

  process() {
    // Method: process
    // Call: process()
  }

  onLensOverlayStateChanged(is_showing) {
    // Method: OnLensOverlayStateChanged
    // Call: OnLensOverlayStateChanged(is_showing)
  }

  process() {
    // Method: process
    // Call: process()
  }

  showErrorPage() {
    // Method: ShowErrorPage
    // Call: ShowErrorPage()
  }

  process() {
    // Method: process
    // Call: process()
  }

  hideErrorPage() {
    // Method: HideErrorPage
    // Call: HideErrorPage()
  }

};

contextual_tasks.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandlerFactory
contextual_tasks.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'contextual_tasks.mojom.PageHandlerFactory';
  }

  createPageHandler(page, page_handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, page_handler)
  }

};

contextual_tasks.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
