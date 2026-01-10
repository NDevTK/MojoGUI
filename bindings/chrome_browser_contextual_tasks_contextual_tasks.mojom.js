// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/contextual_tasks/contextual_tasks.mojom
// Module: contextual_tasks.mojom

'use strict';

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

contextual_tasks.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetThreadUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetThreadUrl (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetUrlForTask
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUrlForTask (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetTaskId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTaskId (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: IsZeroState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsZeroState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetThreadTitle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThreadTitle (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CloseSidePanel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseSidePanel (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ShowThreadHistory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowThreadHistory (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: IsShownInTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsShownInTab (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OpenMyActivityUi
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenMyActivityUi (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OpenHelpUi
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenHelpUi (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OpenOnboardingHelpUi
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenOnboardingHelpUi (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: MoveTaskUiToNewTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveTaskUiToNewTab (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnTabClickedFromSourcesMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTabClickedFromSourcesMenu (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OnWebviewMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWebviewMessage (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetCommonSearchParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCommonSearchParams (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: OnboardingTooltipDismissed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnboardingTooltipDismissed (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
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
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_GetThreadUrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getThreadUrl');
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
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_GetUrlForTask_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUrlForTask');
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
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_SetTaskId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTaskId');
          const result = this.impl.setTaskId(params.uuid);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_IsZeroState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isZeroState');
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
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_SetThreadTitle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setThreadTitle');
          const result = this.impl.setThreadTitle(params.title);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_CloseSidePanel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeSidePanel');
          const result = this.impl.closeSidePanel();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_ShowThreadHistory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showThreadHistory');
          const result = this.impl.showThreadHistory();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_IsShownInTab_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isShownInTab');
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
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_OpenMyActivityUi_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openMyActivityUi');
          const result = this.impl.openMyActivityUi();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_OpenHelpUi_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openHelpUi');
          const result = this.impl.openHelpUi();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_OpenOnboardingHelpUi_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openOnboardingHelpUi');
          const result = this.impl.openOnboardingHelpUi();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_MoveTaskUiToNewTab_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.moveTaskUiToNewTab');
          const result = this.impl.moveTaskUiToNewTab();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_OnTabClickedFromSourcesMenu_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTabClickedFromSourcesMenu');
          const result = this.impl.onTabClickedFromSourcesMenu(params.tab_id, params.url);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_OnWebviewMessage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWebviewMessage');
          const result = this.impl.onWebviewMessage(params.message);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_GetCommonSearchParams_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCommonSearchParams');
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
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandler_OnboardingTooltipDismissed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onboardingTooltipDismissed');
          const result = this.impl.onboardingTooltipDismissed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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

contextual_tasks.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetThreadTitle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThreadTitle (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetTaskDetails
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTaskDetails (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnSidePanelStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSidePanelStateChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: PostMessageToWebview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PostMessageToWebview (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnHandshakeComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHandshakeComplete (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetOAuthToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOAuthToken (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnContextUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContextUpdated (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: HideInput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_HideInput_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HideInput (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RestoreInput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_RestoreInput_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreInput (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnZeroStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnZeroStateChange (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnAiPageStatusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAiPageStatusChanged (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnLensOverlayStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLensOverlayStateChanged (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ShowErrorPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowErrorPage (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: HideErrorPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HideErrorPage (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
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
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_SetThreadTitle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setThreadTitle');
          const result = this.impl.setThreadTitle(params.title);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_SetTaskDetails_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTaskDetails');
          const result = this.impl.setTaskDetails(params.uuid, params.thread_id, params.turn_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_OnSidePanelStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSidePanelStateChanged');
          const result = this.impl.onSidePanelStateChanged();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_PostMessageToWebview_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.postMessageToWebview');
          const result = this.impl.postMessageToWebview(params.message);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_OnHandshakeComplete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onHandshakeComplete');
          const result = this.impl.onHandshakeComplete();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_SetOAuthToken_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setOAuthToken');
          const result = this.impl.setOAuthToken(params.oauth_token);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_OnContextUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onContextUpdated');
          const result = this.impl.onContextUpdated(params.context_tabs);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_HideInput_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hideInput');
          const result = this.impl.hideInput();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_RestoreInput_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.restoreInput');
          const result = this.impl.restoreInput();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_OnZeroStateChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onZeroStateChange');
          const result = this.impl.onZeroStateChange(params.is_zero_state);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_OnAiPageStatusChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAiPageStatusChanged');
          const result = this.impl.onAiPageStatusChanged(params.is_ai_page);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_OnLensOverlayStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onLensOverlayStateChanged');
          const result = this.impl.onLensOverlayStateChanged(params.is_showing);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_ShowErrorPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showErrorPage');
          const result = this.impl.showErrorPage();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(contextual_tasks.mojom.Page_HideErrorPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hideErrorPage');
          const result = this.impl.hideErrorPage();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

contextual_tasks.mojom.PageReceiver = contextual_tasks.mojom.PageReceiver;

contextual_tasks.mojom.PagePtr = contextual_tasks.mojom.PageRemote;
contextual_tasks.mojom.PageRequest = contextual_tasks.mojom.PagePendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.Struct(
    contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(contextual_tasks.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('page_handler', 8, 0, mojo.internal.InterfaceRequest(contextual_tasks.mojom.PageHandlerSpec), null, false, 0, undefined),
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

contextual_tasks.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(contextual_tasks.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.page_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

contextual_tasks.mojom.PageHandlerFactoryReceiver = contextual_tasks.mojom.PageHandlerFactoryReceiver;

contextual_tasks.mojom.PageHandlerFactoryPtr = contextual_tasks.mojom.PageHandlerFactoryRemote;
contextual_tasks.mojom.PageHandlerFactoryRequest = contextual_tasks.mojom.PageHandlerFactoryPendingReceiver;

