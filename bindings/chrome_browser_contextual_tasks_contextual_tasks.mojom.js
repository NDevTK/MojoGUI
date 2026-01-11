// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/contextual_tasks/contextual_tasks.mojom
// Module: contextual_tasks.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var contextual_tasks = contextual_tasks || {};
contextual_tasks.mojom = contextual_tasks.mojom || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
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
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
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
  getThreadUrl() {
    return this.$.getThreadUrl();
  }
  getUrlForTask(uuid) {
    return this.$.getUrlForTask(uuid);
  }
  setTaskId(uuid) {
    return this.$.setTaskId(uuid);
  }
  isZeroState(url) {
    return this.$.isZeroState(url);
  }
  setThreadTitle(title) {
    return this.$.setThreadTitle(title);
  }
  closeSidePanel() {
    return this.$.closeSidePanel();
  }
  showThreadHistory() {
    return this.$.showThreadHistory();
  }
  isShownInTab() {
    return this.$.isShownInTab();
  }
  openMyActivityUi() {
    return this.$.openMyActivityUi();
  }
  openHelpUi() {
    return this.$.openHelpUi();
  }
  openOnboardingHelpUi() {
    return this.$.openOnboardingHelpUi();
  }
  moveTaskUiToNewTab() {
    return this.$.moveTaskUiToNewTab();
  }
  onTabClickedFromSourcesMenu(tab_id, url) {
    return this.$.onTabClickedFromSourcesMenu(tab_id, url);
  }
  onWebviewMessage(message) {
    return this.$.onWebviewMessage(message);
  }
  getCommonSearchParams(is_dark_mode, is_side_panel) {
    return this.$.getCommonSearchParams(is_dark_mode, is_side_panel);
  }
  onboardingTooltipDismissed() {
    return this.$.onboardingTooltipDismissed();
  }
};

contextual_tasks.mojom.PageHandlerRemoteCallHandler = class {
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
    ]);
  }

  getThreadUrl() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec,
      contextual_tasks.mojom.PageHandler_GetThreadUrl_ResponseParamsSpec,
      [],
      false);
  }

  getUrlForTask(uuid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec,
      contextual_tasks.mojom.PageHandler_GetUrlForTask_ResponseParamsSpec,
      [uuid],
      false);
  }

  setTaskId(uuid) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec,
      null,
      [uuid],
      false);
  }

  isZeroState(url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec,
      contextual_tasks.mojom.PageHandler_IsZeroState_ResponseParamsSpec,
      [url],
      false);
  }

  setThreadTitle(title) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  closeSidePanel() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec,
      null,
      [],
      false);
  }

  showThreadHistory() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec,
      null,
      [],
      false);
  }

  isShownInTab() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec,
      contextual_tasks.mojom.PageHandler_IsShownInTab_ResponseParamsSpec,
      [],
      false);
  }

  openMyActivityUi() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec,
      null,
      [],
      false);
  }

  openHelpUi() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec,
      null,
      [],
      false);
  }

  openOnboardingHelpUi() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec,
      null,
      [],
      false);
  }

  moveTaskUiToNewTab() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec,
      null,
      [],
      false);
  }

  onTabClickedFromSourcesMenu(tab_id, url) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec,
      null,
      [tab_id, url],
      false);
  }

  onWebviewMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  getCommonSearchParams(is_dark_mode, is_side_panel) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec,
      contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ResponseParamsSpec,
      [is_dark_mode, is_side_panel],
      false);
  }

  onboardingTooltipDismissed() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
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

contextual_tasks.mojom.PageHandlerReceiver = class {
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
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec.$.structSpec);
          const result = this.impl.getThreadUrl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, contextual_tasks.mojom.PageHandler_GetThreadUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec.$.structSpec);
          const result = this.impl.getUrlForTask(params.uuid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, contextual_tasks.mojom.PageHandler_GetUrlForTask_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec.$.structSpec);
          const result = this.impl.setTaskId(params.uuid);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec.$.structSpec);
          const result = this.impl.isZeroState(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, contextual_tasks.mojom.PageHandler_IsZeroState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec.$.structSpec);
          const result = this.impl.setThreadTitle(params.title);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec.$.structSpec);
          const result = this.impl.closeSidePanel();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec.$.structSpec);
          const result = this.impl.showThreadHistory();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec.$.structSpec);
          const result = this.impl.isShownInTab();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, contextual_tasks.mojom.PageHandler_IsShownInTab_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec.$.structSpec);
          const result = this.impl.openMyActivityUi();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec.$.structSpec);
          const result = this.impl.openHelpUi();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec.$.structSpec);
          const result = this.impl.openOnboardingHelpUi();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec.$.structSpec);
          const result = this.impl.moveTaskUiToNewTab();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec.$.structSpec);
          const result = this.impl.onTabClickedFromSourcesMenu(params.tab_id, params.url);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec.$.structSpec);
          const result = this.impl.onWebviewMessage(params.message);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec.$.structSpec);
          const result = this.impl.getCommonSearchParams(params.is_dark_mode, params.is_side_panel);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec.$.structSpec);
          const result = this.impl.onboardingTooltipDismissed();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

contextual_tasks.mojom.PageHandlerReceiver = contextual_tasks.mojom.PageHandlerReceiver;

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
  setThreadTitle(title) {
    return this.$.setThreadTitle(title);
  }
  setTaskDetails(uuid, thread_id, turn_id) {
    return this.$.setTaskDetails(uuid, thread_id, turn_id);
  }
  onSidePanelStateChanged() {
    return this.$.onSidePanelStateChanged();
  }
  postMessageToWebview(message) {
    return this.$.postMessageToWebview(message);
  }
  onHandshakeComplete() {
    return this.$.onHandshakeComplete();
  }
  setOAuthToken(oauth_token) {
    return this.$.setOAuthToken(oauth_token);
  }
  onContextUpdated(context_tabs) {
    return this.$.onContextUpdated(context_tabs);
  }
  hideInput() {
    return this.$.hideInput();
  }
  restoreInput() {
    return this.$.restoreInput();
  }
  onZeroStateChange(is_zero_state) {
    return this.$.onZeroStateChange(is_zero_state);
  }
  onAiPageStatusChanged(is_ai_page) {
    return this.$.onAiPageStatusChanged(is_ai_page);
  }
  onLensOverlayStateChanged(is_showing) {
    return this.$.onLensOverlayStateChanged(is_showing);
  }
  showErrorPage() {
    return this.$.showErrorPage();
  }
  hideErrorPage() {
    return this.$.hideErrorPage();
  }
};

contextual_tasks.mojom.PageRemoteCallHandler = class {
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
      { explicit: null },
      { explicit: null },
    ]);
  }

  setThreadTitle(title) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  setTaskDetails(uuid, thread_id, turn_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec,
      null,
      [uuid, thread_id, turn_id],
      false);
  }

  onSidePanelStateChanged() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec,
      null,
      [],
      false);
  }

  postMessageToWebview(message) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec,
      null,
      [message],
      false);
  }

  onHandshakeComplete() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec,
      null,
      [],
      false);
  }

  setOAuthToken(oauth_token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec,
      null,
      [oauth_token],
      false);
  }

  onContextUpdated(context_tabs) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec,
      null,
      [context_tabs],
      false);
  }

  hideInput() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      contextual_tasks.mojom.Page_HideInput_ParamsSpec,
      null,
      [],
      false);
  }

  restoreInput() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      contextual_tasks.mojom.Page_RestoreInput_ParamsSpec,
      null,
      [],
      false);
  }

  onZeroStateChange(is_zero_state) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec,
      null,
      [is_zero_state],
      false);
  }

  onAiPageStatusChanged(is_ai_page) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec,
      null,
      [is_ai_page],
      false);
  }

  onLensOverlayStateChanged(is_showing) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec,
      null,
      [is_showing],
      false);
  }

  showErrorPage() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec,
      null,
      [],
      false);
  }

  hideErrorPage() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
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

contextual_tasks.mojom.PageReceiver = class {
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
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_HideInput_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_RestoreInput_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec.$.structSpec);
          const result = this.impl.setThreadTitle(params.title);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec.$.structSpec);
          const result = this.impl.setTaskDetails(params.uuid, params.thread_id, params.turn_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onSidePanelStateChanged();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec.$.structSpec);
          const result = this.impl.postMessageToWebview(params.message);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onHandshakeComplete();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec.$.structSpec);
          const result = this.impl.setOAuthToken(params.oauth_token);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onContextUpdated(params.context_tabs);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_HideInput_ParamsSpec.$.structSpec);
          const result = this.impl.hideInput();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_RestoreInput_ParamsSpec.$.structSpec);
          const result = this.impl.restoreInput();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec.$.structSpec);
          const result = this.impl.onZeroStateChange(params.is_zero_state);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onAiPageStatusChanged(params.is_ai_page);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onLensOverlayStateChanged(params.is_showing);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec.$.structSpec);
          const result = this.impl.showErrorPage();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec.$.structSpec);
          const result = this.impl.hideErrorPage();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

contextual_tasks.mojom.PageReceiver = contextual_tasks.mojom.PageReceiver;

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
  createPageHandler(page, page_handler) {
    return this.$.createPageHandler(page, page_handler);
  }
};

contextual_tasks.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, page_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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

contextual_tasks.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.page_handler);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

contextual_tasks.mojom.PageHandlerFactoryReceiver = contextual_tasks.mojom.PageHandlerFactoryReceiver;

contextual_tasks.mojom.PageHandlerFactoryPtr = contextual_tasks.mojom.PageHandlerFactoryRemote;
contextual_tasks.mojom.PageHandlerFactoryRequest = contextual_tasks.mojom.PageHandlerFactoryPendingReceiver;

