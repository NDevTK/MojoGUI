// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/contextual_tasks/contextual_tasks.mojom
// Module: contextual_tasks.mojom

'use strict';

// Module namespace
var contextual_tasks = contextual_tasks || {};
contextual_tasks.mojom = contextual_tasks.mojom || {};
var url = url || {};

contextual_tasks.mojom.TabSpec = { $: {} };
contextual_tasks.mojom.PageHandler = {};
contextual_tasks.mojom.PageHandler.$interfaceName = 'contextual_tasks.mojom.PageHandler';
contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_GetThreadUrl_ResponseParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_GetUrlForTask_ResponseParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_IsZeroState_ResponseParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_IsShownInTab_ResponseParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ResponseParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page = {};
contextual_tasks.mojom.Page.$interfaceName = 'contextual_tasks.mojom.Page';
contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_HideInput_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_RestoreInput_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec = { $: {} };
contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec = { $: {} };
contextual_tasks.mojom.PageHandlerFactory = {};
contextual_tasks.mojom.PageHandlerFactory.$interfaceName = 'contextual_tasks.mojom.PageHandlerFactory';
contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };

// Struct: Tab
mojo.internal.Struct(
    contextual_tasks.mojom.TabSpec, 'contextual_tasks.mojom.Tab', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandler
mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec, 'contextual_tasks.mojom.PageHandler_GetThreadUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_GetThreadUrl_ResponseParamsSpec, 'contextual_tasks.mojom.PageHandler_GetThreadUrl_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec, 'contextual_tasks.mojom.PageHandler_GetUrlForTask_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_GetUrlForTask_ResponseParamsSpec, 'contextual_tasks.mojom.PageHandler_GetUrlForTask_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec, 'contextual_tasks.mojom.PageHandler_SetTaskId_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec, 'contextual_tasks.mojom.PageHandler_IsZeroState_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_IsZeroState_ResponseParamsSpec, 'contextual_tasks.mojom.PageHandler_IsZeroState_ResponseParams', [
      mojo.internal.StructField('is_zero_state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec, 'contextual_tasks.mojom.PageHandler_SetThreadTitle_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec, 'contextual_tasks.mojom.PageHandler_CloseSidePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec, 'contextual_tasks.mojom.PageHandler_ShowThreadHistory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec, 'contextual_tasks.mojom.PageHandler_IsShownInTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_IsShownInTab_ResponseParamsSpec, 'contextual_tasks.mojom.PageHandler_IsShownInTab_ResponseParams', [
      mojo.internal.StructField('is_in_tab', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec, 'contextual_tasks.mojom.PageHandler_OpenMyActivityUi_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec, 'contextual_tasks.mojom.PageHandler_OpenHelpUi_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec, 'contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec, 'contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec, 'contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec, 'contextual_tasks.mojom.PageHandler_OnWebviewMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec, 'contextual_tasks.mojom.PageHandler_GetCommonSearchParams_Params', [
      mojo.internal.StructField('is_dark_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_side_panel', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ResponseParamsSpec, 'contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ResponseParams', [
      mojo.internal.StructField('params', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec, 'contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  getUrlForTask(uuid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec,
      contextual_tasks.mojom.PageHandler_GetUrlForTask_ResponseParamsSpec,
      [uuid],
      false);
  }

  setTaskId(uuid) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec,
      null,
      [uuid],
      false);
  }

  isZeroState(url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec,
      contextual_tasks.mojom.PageHandler_IsZeroState_ResponseParamsSpec,
      [url],
      false);
  }

  setThreadTitle(title) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  closeSidePanel() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec,
      null,
      [],
      false);
  }

  showThreadHistory() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec,
      null,
      [],
      false);
  }

  isShownInTab() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec,
      contextual_tasks.mojom.PageHandler_IsShownInTab_ResponseParamsSpec,
      [],
      false);
  }

  openMyActivityUi() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec,
      null,
      [],
      false);
  }

  openHelpUi() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec,
      null,
      [],
      false);
  }

  openOnboardingHelpUi() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec,
      null,
      [],
      false);
  }

  moveTaskUiToNewTab() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec,
      null,
      [],
      false);
  }

  onTabClickedFromSourcesMenu(tab_id, url) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec,
      null,
      [tab_id, url],
      false);
  }

  onWebviewMessage(message) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  getCommonSearchParams(is_dark_mode, is_side_panel) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec,
      contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ResponseParamsSpec,
      [is_dark_mode, is_side_panel],
      false);
  }

  onboardingTooltipDismissed() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec,
      null,
      [],
      false);
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

contextual_tasks.mojom.PageHandlerPtr = contextual_tasks.mojom.PageHandlerRemote;
contextual_tasks.mojom.PageHandlerRequest = contextual_tasks.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec, 'contextual_tasks.mojom.Page_SetThreadTitle_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec, 'contextual_tasks.mojom.Page_SetTaskDetails_Params', [
      mojo.internal.StructField('uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thread_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('turn_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec, 'contextual_tasks.mojom.Page_OnSidePanelStateChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec, 'contextual_tasks.mojom.Page_PostMessageToWebview_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec, 'contextual_tasks.mojom.Page_OnHandshakeComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec, 'contextual_tasks.mojom.Page_SetOAuthToken_Params', [
      mojo.internal.StructField('oauth_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec, 'contextual_tasks.mojom.Page_OnContextUpdated_Params', [
      mojo.internal.StructField('context_tabs', 0, 0, mojo.internal.Array(contextual_tasks.mojom.TabSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_HideInput_ParamsSpec, 'contextual_tasks.mojom.Page_HideInput_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_RestoreInput_ParamsSpec, 'contextual_tasks.mojom.Page_RestoreInput_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec, 'contextual_tasks.mojom.Page_OnZeroStateChange_Params', [
      mojo.internal.StructField('is_zero_state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec, 'contextual_tasks.mojom.Page_OnAiPageStatusChanged_Params', [
      mojo.internal.StructField('is_ai_page', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec, 'contextual_tasks.mojom.Page_OnLensOverlayStateChanged_Params', [
      mojo.internal.StructField('is_showing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec, 'contextual_tasks.mojom.Page_ShowErrorPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec, 'contextual_tasks.mojom.Page_HideErrorPage_Params', [
    ],
    [[0, 8]]);

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
      [title],
      false);
  }

  setTaskDetails(uuid, thread_id, turn_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec,
      null,
      [uuid, thread_id, turn_id],
      false);
  }

  onSidePanelStateChanged() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec,
      null,
      [],
      false);
  }

  postMessageToWebview(message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec,
      null,
      [message],
      false);
  }

  onHandshakeComplete() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec,
      null,
      [],
      false);
  }

  setOAuthToken(oauth_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec,
      null,
      [oauth_token],
      false);
  }

  onContextUpdated(context_tabs) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec,
      null,
      [context_tabs],
      false);
  }

  hideInput() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      contextual_tasks.mojom.Page_HideInput_ParamsSpec,
      null,
      [],
      false);
  }

  restoreInput() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      contextual_tasks.mojom.Page_RestoreInput_ParamsSpec,
      null,
      [],
      false);
  }

  onZeroStateChange(is_zero_state) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec,
      null,
      [is_zero_state],
      false);
  }

  onAiPageStatusChanged(is_ai_page) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec,
      null,
      [is_ai_page],
      false);
  }

  onLensOverlayStateChanged(is_showing) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec,
      null,
      [is_showing],
      false);
  }

  showErrorPage() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec,
      null,
      [],
      false);
  }

  hideErrorPage() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec,
      null,
      [],
      false);
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

contextual_tasks.mojom.PagePtr = contextual_tasks.mojom.PageRemote;
contextual_tasks.mojom.PageRequest = contextual_tasks.mojom.PagePendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.Struct(
    contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(contextual_tasks.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('page_handler', 8, 0, mojo.internal.InterfaceRequest(contextual_tasks.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [page, page_handler],
      false);
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

contextual_tasks.mojom.PageHandlerFactoryPtr = contextual_tasks.mojom.PageHandlerFactoryRemote;
contextual_tasks.mojom.PageHandlerFactoryRequest = contextual_tasks.mojom.PageHandlerFactoryPendingReceiver;

