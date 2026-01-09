// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/contextual_tasks/contextual_tasks.mojom
// Module: contextual_tasks.mojom

'use strict';

// Module namespace
var contextual_tasks = contextual_tasks || {};
contextual_tasks.mojom = contextual_tasks.mojom || {};


// Struct: Tab
contextual_tasks.mojom.TabSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Tab',
      packedSize: 32,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'tab_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandler
contextual_tasks.mojom.PageHandler = {};

contextual_tasks.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

contextual_tasks.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'contextual_tasks.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      contextual_tasks.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new contextual_tasks.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

contextual_tasks.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getThreadUrl() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec,
      contextual_tasks.mojom.PageHandler_GetThreadUrl_ResponseParamsSpec,
      []);
  }

  getUrlForTask(uuid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec,
      contextual_tasks.mojom.PageHandler_GetUrlForTask_ResponseParamsSpec,
      [uuid]);
  }

  setTaskId(uuid) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec,
      null,
      [uuid]);
  }

  isZeroState(url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec,
      contextual_tasks.mojom.PageHandler_IsZeroState_ResponseParamsSpec,
      [url]);
  }

  setThreadTitle(title) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec,
      null,
      [title]);
  }

  closeSidePanel() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec,
      null,
      []);
  }

  showThreadHistory() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec,
      null,
      []);
  }

  isShownInTab() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec,
      contextual_tasks.mojom.PageHandler_IsShownInTab_ResponseParamsSpec,
      []);
  }

  openMyActivityUi() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec,
      null,
      []);
  }

  openHelpUi() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec,
      null,
      []);
  }

  openOnboardingHelpUi() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec,
      null,
      []);
  }

  moveTaskUiToNewTab() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec,
      null,
      []);
  }

  onTabClickedFromSourcesMenu(tab_id, url) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec,
      null,
      [tab_id, url]);
  }

  onWebviewMessage(message) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec,
      null,
      [message]);
  }

  getCommonSearchParams(is_dark_mode, is_side_panel) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec,
      contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ResponseParamsSpec,
      [is_dark_mode, is_side_panel]);
  }

  onboardingTooltipDismissed() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec,
      null,
      []);
  }

};

contextual_tasks.mojom.PageHandler.getRemote = function() {
  let remote = new contextual_tasks.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'contextual_tasks.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetThreadUrl
contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.GetThreadUrl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

contextual_tasks.mojom.PageHandler_GetThreadUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.GetThreadUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUrlForTask
contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.GetUrlForTask_Params',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

contextual_tasks.mojom.PageHandler_GetUrlForTask_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.GetUrlForTask_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTaskId
contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.SetTaskId_Params',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsZeroState
contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.IsZeroState_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

contextual_tasks.mojom.PageHandler_IsZeroState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.IsZeroState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_zero_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetThreadTitle
contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.SetThreadTitle_Params',
      packedSize: 16,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseSidePanel
contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.CloseSidePanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowThreadHistory
contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.ShowThreadHistory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsShownInTab
contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.IsShownInTab_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

contextual_tasks.mojom.PageHandler_IsShownInTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.IsShownInTab_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_in_tab', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenMyActivityUi
contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.OpenMyActivityUi_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenHelpUi
contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.OpenHelpUi_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenOnboardingHelpUi
contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.OpenOnboardingHelpUi_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MoveTaskUiToNewTab
contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.MoveTaskUiToNewTab_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTabClickedFromSourcesMenu
contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.OnTabClickedFromSourcesMenu_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'tab_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWebviewMessage
contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.OnWebviewMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCommonSearchParams
contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.GetCommonSearchParams_Params',
      packedSize: 16,
      fields: [
        { name: 'is_dark_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_side_panel', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.GetCommonSearchParams_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnboardingTooltipDismissed
contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandler.OnboardingTooltipDismissed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
contextual_tasks.mojom.PageHandlerPtr = contextual_tasks.mojom.PageHandlerRemote;
contextual_tasks.mojom.PageHandlerRequest = contextual_tasks.mojom.PageHandlerPendingReceiver;


// Interface: Page
contextual_tasks.mojom.Page = {};

contextual_tasks.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

contextual_tasks.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'contextual_tasks.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      contextual_tasks.mojom.PagePendingReceiver,
      handle);
    this.$ = new contextual_tasks.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

contextual_tasks.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setThreadTitle(title) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec,
      null,
      [title]);
  }

  setTaskDetails(uuid, thread_id, turn_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec,
      null,
      [uuid, thread_id, turn_id]);
  }

  onSidePanelStateChanged() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec,
      null,
      []);
  }

  postMessageToWebview(message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec,
      null,
      [message]);
  }

  onHandshakeComplete() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec,
      null,
      []);
  }

  setOAuthToken(oauth_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec,
      null,
      [oauth_token]);
  }

  onContextUpdated(context_tabs) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec,
      null,
      [context_tabs]);
  }

  hideInput() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      contextual_tasks.mojom.Page_HideInput_ParamsSpec,
      null,
      []);
  }

  restoreInput() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      contextual_tasks.mojom.Page_RestoreInput_ParamsSpec,
      null,
      []);
  }

  onZeroStateChange(is_zero_state) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec,
      null,
      [is_zero_state]);
  }

  onAiPageStatusChanged(is_ai_page) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec,
      null,
      [is_ai_page]);
  }

  onLensOverlayStateChanged(is_showing) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec,
      null,
      [is_showing]);
  }

  showErrorPage() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec,
      null,
      []);
  }

  hideErrorPage() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec,
      null,
      []);
  }

};

contextual_tasks.mojom.Page.getRemote = function() {
  let remote = new contextual_tasks.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'contextual_tasks.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SetThreadTitle
contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.SetThreadTitle_Params',
      packedSize: 16,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTaskDetails
contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.SetTaskDetails_Params',
      packedSize: 32,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
        { name: 'thread_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'turn_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSidePanelStateChanged
contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.OnSidePanelStateChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PostMessageToWebview
contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.PostMessageToWebview_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHandshakeComplete
contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.OnHandshakeComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetOAuthToken
contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.SetOAuthToken_Params',
      packedSize: 16,
      fields: [
        { name: 'oauth_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnContextUpdated
contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.OnContextUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'context_tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HideInput
contextual_tasks.mojom.Page_HideInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.HideInput_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RestoreInput
contextual_tasks.mojom.Page_RestoreInput_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.RestoreInput_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnZeroStateChange
contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.OnZeroStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'is_zero_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAiPageStatusChanged
contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.OnAiPageStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_ai_page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLensOverlayStateChanged
contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.OnLensOverlayStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_showing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowErrorPage
contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.ShowErrorPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HideErrorPage
contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.Page.HideErrorPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
contextual_tasks.mojom.PagePtr = contextual_tasks.mojom.PageRemote;
contextual_tasks.mojom.PageRequest = contextual_tasks.mojom.PagePendingReceiver;


// Interface: PageHandlerFactory
contextual_tasks.mojom.PageHandlerFactory = {};

contextual_tasks.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

contextual_tasks.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'contextual_tasks.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      contextual_tasks.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new contextual_tasks.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

contextual_tasks.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, page_handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, page_handler]);
  }

};

contextual_tasks.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new contextual_tasks.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'contextual_tasks.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'page_handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
contextual_tasks.mojom.PageHandlerFactoryPtr = contextual_tasks.mojom.PageHandlerFactoryRemote;
contextual_tasks.mojom.PageHandlerFactoryRequest = contextual_tasks.mojom.PageHandlerFactoryPendingReceiver;

